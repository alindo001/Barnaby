import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  X, 
  Play, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Copy, 
  Save, 
  Magnet, 
  Crosshair, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Move, 
  Zap, 
  Shield, 
  Rocket, 
  Check, 
  Undo2,
  Wrench,
  AlertTriangle
} from 'lucide-react';
import { 
  LevelData, 
  Platform, 
  Hazard, 
  Collectible, 
  Enemy, 
  CollectibleType, 
  EnemyType, 
  PlatformType, 
  HazardType 
} from '../types/game';
import { ALL_100_LEVELS } from '../game/levels/index';
import { THEMES } from '../game/themes';

interface LevelEditorModalProps {
  initialLevelIndex?: number;
  levels?: LevelData[];
  onPlayCustomLevel: (level: LevelData) => void;
  onClose: () => void;
}

type SelectedKind = 'collectible' | 'enemy' | 'hazard' | 'platform' | 'start' | 'goal' | 'checkpoint';

interface SelectedEntity {
  kind: SelectedKind;
  id: string;
  index: number;
}

export const LevelEditorModal: React.FC<LevelEditorModalProps> = ({
  initialLevelIndex = 0,
  levels = ALL_100_LEVELS,
  onPlayCustomLevel,
  onClose
}) => {
  const [levelIndex, setLevelIndex] = useState<number>(Math.max(0, Math.min(levels.length - 1, initialLevelIndex)));
  
  // Clone selected level into working state
  const [level, setLevel] = useState<LevelData>(() => {
    // Check if there is a dev override saved in localStorage
    try {
      const overrides = localStorage.getItem('barnaby_dev_level_overrides');
      if (overrides) {
        const parsed = JSON.parse(overrides);
        if (parsed[1] && (parsed[1].worldHeight <= 600 || parsed[1].title?.includes('Runner'))) {
          delete parsed[1];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[2] && (parsed[2].worldHeight <= 650 || parsed[2].title?.includes('Labyrinth'))) {
          delete parsed[2];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[3] && (parsed[3].worldHeight <= 650 || !parsed[3].title?.includes('Blaster'))) {
          delete parsed[3];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[4] && (parsed[4].worldHeight <= 650 || !parsed[4].title?.includes('Neon'))) {
          delete parsed[4];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[5] && (parsed[5].worldHeight <= 650 || !parsed[5].title?.includes('Matrix Hub') || (parsed[5].platforms && parsed[5].platforms.some((p: any) => p.id === 'l5_term_step1' && p.height > 50)))) {
          delete parsed[5];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[6] && (parsed[6].worldHeight <= 650 || !parsed[6].title?.includes('Space Station') || !parsed[6].theme?.name?.includes('Cosmic'))) {
          delete parsed[6];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[7] && (parsed[7].worldHeight <= 650 || !parsed[7].title?.includes('Nebula Fortress') || !parsed[7].theme?.name?.includes('Cosmic'))) {
          delete parsed[7];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        const targetId = levels[levelIndex]?.id;
        if (targetId && parsed[targetId]) {
          return JSON.parse(JSON.stringify(parsed[targetId]));
        }
      }
    } catch {}
    return JSON.parse(JSON.stringify(levels[levelIndex] || levels[0]));
  });

  const [undoStack, setUndoStack] = useState<LevelData[]>([]);
  const [selectedEntity, setSelectedEntity] = useState<SelectedEntity | null>(null);
  const [cameraX, setCameraX] = useState<number>(0);
  const [cameraY, setCameraY] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1.0);
  const [gridSnap, setGridSnap] = useState<boolean>(true);
  const [gridSize, setGridSize] = useState<number>(10);
  const [notification, setNotification] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const notify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const pushUndo = useCallback((current: LevelData) => {
    setUndoStack(prev => [...prev.slice(-15), JSON.parse(JSON.stringify(current))]);
  }, []);

  const handleUndo = () => {
    if (undoStack.length === 0) return;
    const last = undoStack[undoStack.length - 1];
    setUndoStack(prev => prev.slice(0, -1));
    setLevel(JSON.parse(JSON.stringify(last)));
    notify('Undone last action');
  };

  // Switch level handler
  const handleSelectLevel = (newIdx: number) => {
    const idx = Math.max(0, Math.min(levels.length - 1, newIdx));
    setLevelIndex(idx);
    setSelectedEntity(null);
    setUndoStack([]);

    // Check dev override
    let nextLvl = levels[idx];
    try {
      const overrides = localStorage.getItem('barnaby_dev_level_overrides');
      if (overrides) {
        const parsed = JSON.parse(overrides);
        if (parsed[1] && (parsed[1].worldHeight <= 600 || parsed[1].title?.includes('Runner'))) {
          delete parsed[1];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[2] && (parsed[2].worldHeight <= 650 || parsed[2].title?.includes('Labyrinth'))) {
          delete parsed[2];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[3] && (parsed[3].worldHeight <= 650 || !parsed[3].title?.includes('Blaster'))) {
          delete parsed[3];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[4] && (parsed[4].worldHeight <= 650 || !parsed[4].title?.includes('Neon'))) {
          delete parsed[4];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[5] && (parsed[5].worldHeight <= 650 || !parsed[5].title?.includes('Matrix Hub') || (parsed[5].platforms && parsed[5].platforms.some((p: any) => p.id === 'l5_term_step1' && p.height > 50)))) {
          delete parsed[5];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[6] && (parsed[6].worldHeight <= 650 || !parsed[6].title?.includes('Space Station') || !parsed[6].theme?.name?.includes('Cosmic'))) {
          delete parsed[6];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[7] && (parsed[7].worldHeight <= 650 || !parsed[7].title?.includes('Nebula Fortress') || !parsed[7].theme?.name?.includes('Cosmic'))) {
          delete parsed[7];
          localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
        }
        if (parsed[nextLvl.id]) {
          nextLvl = parsed[nextLvl.id];
        }
      }
    } catch {}

    const cloned = JSON.parse(JSON.stringify(nextLvl));
    setLevel(cloned);
    setCameraX(Math.max(0, Math.min(cloned.worldWidth - 800, (cloned.playerStart?.x || 80) - 100)));
  };

  // Save to localStorage session override
  const handleSaveDevOverride = () => {
    try {
      const existing = localStorage.getItem('barnaby_dev_level_overrides');
      const parsed = existing ? JSON.parse(existing) : {};
      parsed[level.id] = level;
      localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
      notify(`Level ${level.id} saved in browser session!`);
    } catch {
      notify('Failed to save to localStorage');
    }
  };

  // Reset to original clean source level
  const handleResetLevel = () => {
    if (!window.confirm(`Reset Level ${level.id} back to original code default?`)) return;
    try {
      const existing = localStorage.getItem('barnaby_dev_level_overrides');
      if (existing) {
        const parsed = JSON.parse(existing);
        delete parsed[level.id];
        localStorage.setItem('barnaby_dev_level_overrides', JSON.stringify(parsed));
      }
    } catch {}
    setLevel(JSON.parse(JSON.stringify(levels[levelIndex])));
    setSelectedEntity(null);
    notify(`Level ${level.id} reset to original!`);
  };

  // Copy TypeScript code to clipboard
  const handleCopyCode = () => {
    const code = JSON.stringify(level, null, 2).replace(/"([^"]+)":/g, '$1:');
    navigator.clipboard.writeText(code).then(() => {
      notify(`Level ${level.id} TypeScript copied to clipboard!`);
    }).catch(() => {
      notify('Could not copy to clipboard');
    });
  };

  // Snap currently selected item to nearest platform underneath
  const handleSnapSelectedToPlatform = () => {
    if (!selectedEntity) {
      notify('Select an item first to snap!');
      return;
    }
    pushUndo(level);

    let snapped = false;
    const newLvl = JSON.parse(JSON.stringify(level));

    const snapTarget = (item: { x: number; y: number; width: number; height: number }) => {
      const itemCenterX = item.x + item.width / 2;
      const feetY = item.y + item.height;
      let candidatePlat: Platform | null = null;
      let minDistance = Infinity;

      for (const p of newLvl.platforms) {
        if (itemCenterX >= p.x && itemCenterX <= p.x + p.width) {
          const dist = p.y - feetY;
          if (dist >= -60 && dist < minDistance) {
            minDistance = dist;
            candidatePlat = p;
          }
        }
      }
      if (candidatePlat) {
        item.y = candidatePlat.y - item.height;
        return true;
      }
      return false;
    };

    if (selectedEntity.kind === 'collectible') {
      const c = newLvl.collectibles[selectedEntity.index];
      if (c) snapped = snapTarget(c);
    } else if (selectedEntity.kind === 'enemy') {
      const e = newLvl.enemies[selectedEntity.index];
      if (e) snapped = snapTarget(e);
    }

    if (snapped) {
      setLevel(newLvl);
      notify('Snapped to platform surface!');
    } else {
      notify('No platform found directly underneath this item.');
    }
  };

  // Snap ALL collectibles in this level to nearest platform
  const handleSnapAllToPlatforms = () => {
    pushUndo(level);
    const newLvl = JSON.parse(JSON.stringify(level));
    let count = 0;

    newLvl.collectibles.forEach((c: Collectible) => {
      // Don't auto-snap fuel canisters in rocketeer flight corridors unless near platform
      const itemCenterX = c.x + c.width / 2;
      const feetY = c.y + c.height;
      let candidatePlat: Platform | null = null;
      let minDistance = Infinity;

      for (const p of newLvl.platforms) {
        if (itemCenterX >= p.x && itemCenterX <= p.x + p.width) {
          const dist = p.y - feetY;
          if (dist >= -80 && dist < 180 && dist < minDistance) {
            minDistance = dist;
            candidatePlat = p;
          }
        }
      }
      if (candidatePlat) {
        c.y = candidatePlat.y - c.height;
        count++;
      }
    });

    setLevel(newLvl);
    notify(`Snapped ${count} items onto platforms!`);
  };

  // Delete selected item
  const handleDeleteSelected = () => {
    if (!selectedEntity) return;
    pushUndo(level);
    const newLvl = JSON.parse(JSON.stringify(level));

    if (selectedEntity.kind === 'collectible') {
      newLvl.collectibles.splice(selectedEntity.index, 1);
    } else if (selectedEntity.kind === 'enemy') {
      newLvl.enemies.splice(selectedEntity.index, 1);
    } else if (selectedEntity.kind === 'hazard') {
      newLvl.hazards.splice(selectedEntity.index, 1);
    } else if (selectedEntity.kind === 'platform') {
      newLvl.platforms.splice(selectedEntity.index, 1);
    }

    setSelectedEntity(null);
    setLevel(newLvl);
    notify('Item deleted');
  };

  // Duplicate selected item
  const handleDuplicateSelected = () => {
    if (!selectedEntity) return;
    pushUndo(level);
    const newLvl = JSON.parse(JSON.stringify(level));

    if (selectedEntity.kind === 'collectible') {
      const orig = newLvl.collectibles[selectedEntity.index];
      const clone = {
        ...orig,
        id: `c_${Date.now().toString(36)}_${Math.random().toString(36).substring(7)}`,
        x: Math.min(level.worldWidth - 50, orig.x + 40),
        y: orig.y
      };
      newLvl.collectibles.push(clone);
      setSelectedEntity({ kind: 'collectible', id: clone.id, index: newLvl.collectibles.length - 1 });
    } else if (selectedEntity.kind === 'enemy') {
      const orig = newLvl.enemies[selectedEntity.index];
      const clone = {
        ...orig,
        id: `e_${Date.now().toString(36)}_${Math.random().toString(36).substring(7)}`,
        x: Math.min(level.worldWidth - 50, orig.x + 50),
        minX: (orig.minX || orig.x) + 50,
        maxX: (orig.maxX || orig.x + 100) + 50
      };
      newLvl.enemies.push(clone);
      setSelectedEntity({ kind: 'enemy', id: clone.id, index: newLvl.enemies.length - 1 });
    }

    setLevel(newLvl);
    notify('Item duplicated!');
  };

  // Add Item to level at current camera center
  const handleAddItem = (type: CollectibleType | EnemyType | PlatformType | HazardType, category: 'collectible' | 'enemy' | 'platform' | 'hazard') => {
    pushUndo(level);
    const newLvl = JSON.parse(JSON.stringify(level));
    const spawnX = Math.round(cameraX + 400);
    const spawnY = Math.round(cameraY + 280);

    if (category === 'collectible') {
      const size = type === 'acorn' ? 26 : type === 'jetpack' ? 28 : (type === 'gem' || type === 'jetpack_fuel') ? 24 : 20;
      const value = type === 'acorn' ? 1500 : type === 'jetpack' ? 1000 : type === 'gem' ? 500 : type === 'jetpack_fuel' ? 200 : 100;
      const newItem: Collectible = {
        id: `${type}_${Date.now().toString(36)}`,
        x: spawnX,
        y: spawnY,
        width: size,
        height: size,
        type: type as CollectibleType,
        value
      };
      newLvl.collectibles.push(newItem);
      setSelectedEntity({ kind: 'collectible', id: newItem.id, index: newLvl.collectibles.length - 1 });
    } else if (category === 'enemy') {
      const newEnemy: Enemy = {
        id: `e_${type}_${Date.now().toString(36)}`,
        x: spawnX,
        y: spawnY,
        width: 28,
        height: 26,
        type: type as EnemyType,
        vx: 1.0,
        vy: 0,
        minX: spawnX - 80,
        maxX: spawnX + 80,
        facing: 1
      };
      newLvl.enemies.push(newEnemy);
      setSelectedEntity({ kind: 'enemy', id: newEnemy.id, index: newLvl.enemies.length - 1 });
    } else if (category === 'platform') {
      const isAntiGrav = type === 'anti_grav';
      const newPlat: Platform = {
        id: `p_${Date.now().toString(36)}`,
        x: spawnX,
        y: spawnY,
        width: type === 'bouncy' ? 50 : isAntiGrav ? 64 : 140,
        height: type === 'bouncy' ? 16 : isAntiGrav ? 260 : 24,
        type: type as PlatformType
      };
      newLvl.platforms.push(newPlat);
      setSelectedEntity({ kind: 'platform', id: newPlat.id, index: newLvl.platforms.length - 1 });
    } else if (category === 'hazard') {
      const newHaz: Hazard = {
        id: `h_${Date.now().toString(36)}`,
        x: spawnX,
        y: spawnY,
        width: 48,
        height: 18,
        type: type as HazardType
      };
      newLvl.hazards.push(newHaz);
      setSelectedEntity({ kind: 'hazard', id: newHaz.id, index: newLvl.hazards.length - 1 });
    }

    setLevel(newLvl);
    notify(`Added ${type}!`);
  };

  // Nudge selected item with arrow keys or buttons
  const nudgeSelected = useCallback((dx: number, dy: number) => {
    if (!selectedEntity) return;
    setLevel(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const move = (item: { x: number; y: number }) => {
        item.x = Math.max(0, Math.min(next.worldWidth - 30, item.x + dx));
        item.y = Math.max(0, Math.min(next.worldHeight - 20, item.y + dy));
      };
      if (selectedEntity.kind === 'collectible') {
        const item = next.collectibles[selectedEntity.index];
        if (item) move(item);
      } else if (selectedEntity.kind === 'enemy') {
        const item = next.enemies[selectedEntity.index];
        if (item) {
          move(item);
          if (item.minX !== undefined) item.minX += dx;
          if (item.maxX !== undefined) item.maxX += dx;
        }
      } else if (selectedEntity.kind === 'hazard') {
        const item = next.hazards[selectedEntity.index];
        if (item) move(item);
      } else if (selectedEntity.kind === 'platform') {
        const item = next.platforms[selectedEntity.index];
        if (item) move(item);
      } else if (selectedEntity.kind === 'start') {
        move(next.playerStart);
      } else if (selectedEntity.kind === 'goal') {
        move(next.goal);
      }
      return next;
    });
  }, [selectedEntity]);

  // Keyboard navigation and nudging
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code) && selectedEntity) {
        e.preventDefault();
        const step = e.shiftKey ? (gridSnap ? gridSize : 10) : 2;
        if (e.code === 'ArrowLeft') nudgeSelected(-step, 0);
        if (e.code === 'ArrowRight') nudgeSelected(step, 0);
        if (e.code === 'ArrowUp') nudgeSelected(0, -step);
        if (e.code === 'ArrowDown') nudgeSelected(0, step);
      } else if (e.code === 'Delete' || e.code === 'Backspace') {
        if (selectedEntity && selectedEntity.kind !== 'start' && selectedEntity.kind !== 'goal') {
          e.preventDefault();
          handleDeleteSelected();
        }
      } else if (e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handleUndo();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedEntity, nudgeSelected, gridSnap, gridSize, undoStack]);

  // Render visual canvas loop
  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const theme = level.theme || THEMES.meadow;
      const w = canvas.width;
      const h = canvas.height;

      // Background Sky Gradient
      const skyTop = theme?.skyColorTop || '#38BDF8';
      const skyBottom = theme?.skyColorBottom || '#BAE6FD';
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, skyTop);
      bgGrad.addColorStop(1, skyBottom);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.scale(zoom, zoom);
      ctx.translate(-cameraX, -cameraY);

    // Grid Overlay (if enabled)
    if (gridSnap) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const startX = Math.floor(cameraX / 50) * 50;
      const endX = cameraX + w / zoom + 50;
      for (let gx = startX; gx < endX; gx += 50) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, level.worldHeight);
        ctx.stroke();
      }
      for (let gy = 0; gy < level.worldHeight; gy += 50) {
        ctx.beginPath();
        ctx.moveTo(cameraX, gy);
        ctx.lineTo(cameraX + w / zoom, gy);
        ctx.stroke();
      }
    }

    // World Boundary Markers
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, level.worldWidth, level.worldHeight);

    // 1. Draw Platforms
    (level.platforms || []).forEach((p, idx) => {
      const isSelected = selectedEntity?.kind === 'platform' && selectedEntity.index === idx;

      if (p.type === 'bouncy') {
        ctx.fillStyle = '#F59E0B';
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.strokeStyle = '#D97706';
        ctx.strokeRect(p.x, p.y, p.width, p.height);
      } else if (p.type === 'one-way') {
        ctx.fillStyle = 'rgba(217, 119, 6, 0.7)';
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.strokeStyle = '#FBBF24';
        ctx.strokeRect(p.x, p.y, p.width, p.height);
      } else if (p.type === 'anti_grav') {
        // Anti-Gravity Tractor Beam preview in editor
        ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(p.x, p.y, p.width, p.height);
        // Base emitter
        ctx.fillStyle = '#1E293B';
        ctx.fillRect(p.x, p.y + p.height - 14, p.width, 14);
        // Ascending chevrons
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 1.5;
        for (let cy = p.y + p.height - 24; cy > p.y + 10; cy -= 30) {
          ctx.beginPath();
          ctx.moveTo(p.x + 6, cy + 4);
          ctx.lineTo(p.x + p.width / 2, cy - 2);
          ctx.lineTo(p.x + p.width - 6, cy + 4);
          ctx.stroke();
        }
      } else if (p.type === 'crumbling') {
        ctx.fillStyle = '#64748B';
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.strokeStyle = '#94A3B8';
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(p.x, p.y, p.width, p.height);
        ctx.setLineDash([]);
      } else {
        // Solid Platform
        ctx.fillStyle = theme.platformFill || '#334155';
        ctx.fillRect(p.x, p.y, p.width, p.height);
        ctx.fillStyle = theme.platformTop || '#10B981';
        ctx.fillRect(p.x, p.y, p.width, Math.min(6, p.height));
        ctx.strokeStyle = theme.platformBorder || '#1E293B';
        ctx.strokeRect(p.x, p.y, p.width, p.height);
      }

      if (isSelected) {
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 2;
        ctx.strokeRect(p.x - 2, p.y - 2, p.width + 4, p.height + 4);
      }
    });

    // 2. Draw Hazards
    (level.hazards || []).forEach((haz, idx) => {
      const isSelected = selectedEntity?.kind === 'hazard' && selectedEntity.index === idx;
      ctx.fillStyle = '#EF4444';
      // Triangle Spikes
      const count = Math.max(1, Math.floor(haz.width / 16));
      const spikeW = haz.width / count;
      for (let i = 0; i < count; i++) {
        ctx.beginPath();
        ctx.moveTo(haz.x + i * spikeW, haz.y + haz.height);
        ctx.lineTo(haz.x + (i + 0.5) * spikeW, haz.y);
        ctx.lineTo(haz.x + (i + 1) * spikeW, haz.y + haz.height);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#991B1B';
        ctx.stroke();
      }

      if (isSelected) {
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 2;
        ctx.strokeRect(haz.x - 2, haz.y - 2, haz.width + 4, haz.height + 4);
      }
    });

    // 3. Draw Checkpoints
    if (level.checkpoints) {
      level.checkpoints.forEach((cp, idx) => {
        const isSelected = selectedEntity?.kind === 'checkpoint' && selectedEntity.index === idx;
        ctx.fillStyle = '#64748B';
        ctx.fillRect(cp.x + cp.width / 2 - 2, cp.y, 4, cp.height);
        ctx.fillStyle = '#10B981';
        ctx.beginPath();
        ctx.moveTo(cp.x + cp.width / 2, cp.y + 4);
        ctx.lineTo(cp.x + cp.width, cp.y + 12);
        ctx.lineTo(cp.x + cp.width / 2, cp.y + 20);
        ctx.closePath();
        ctx.fill();

        if (isSelected) {
          ctx.strokeStyle = '#38BDF8';
          ctx.lineWidth = 2;
          ctx.strokeRect(cp.x - 2, cp.y - 2, cp.width + 4, cp.height + 4);
        }
      });
    }

    // 4. Draw Player Start
    const pStart = level.playerStart || { x: 80, y: 300 };
    const isStartSelected = selectedEntity?.kind === 'start';
    ctx.fillStyle = '#38BDF8';
    ctx.beginPath();
    ctx.arc(pStart.x + 12, pStart.y + 16, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('START', pStart.x + 12, pStart.y - 6);
    if (isStartSelected) {
      ctx.strokeStyle = '#FBBF24';
      ctx.lineWidth = 2;
      ctx.strokeRect(pStart.x - 4, pStart.y - 4, 32, 40);
    }

    // 5. Draw Goal Flag
    const pGoal = level.goal || { x: (level.worldWidth || 1600) - 100, y: 300, width: 32, height: 64 };
    const isGoalSelected = selectedEntity?.kind === 'goal';
    ctx.fillStyle = '#F59E0B';
    ctx.fillRect(pGoal.x + pGoal.width / 2 - 3, pGoal.y, 6, pGoal.height);
    ctx.fillStyle = '#FBBF24';
    ctx.beginPath();
    ctx.moveTo(pGoal.x + pGoal.width / 2, pGoal.y + 4);
    ctx.lineTo(pGoal.x + pGoal.width, pGoal.y + 18);
    ctx.lineTo(pGoal.x + pGoal.width / 2, pGoal.y + 32);
    ctx.closePath();
    ctx.fill();
    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = '#FBBF24';
    ctx.fillText('FINISH', pGoal.x + pGoal.width / 2, pGoal.y - 8);
    if (isGoalSelected) {
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.strokeRect(pGoal.x - 4, pGoal.y - 4, pGoal.width + 8, pGoal.height + 8);
    }

    // 6. Draw Collectibles
    (level.collectibles || []).forEach((c, idx) => {
      const isSelected = selectedEntity?.kind === 'collectible' && selectedEntity.index === idx;

      if (c.type === 'acorn') {
        // Golden Acorn
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(c.x + c.width / 2, c.y + c.height / 2, c.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#78350F';
        ctx.fillRect(c.x + c.width / 2 - 2, c.y - 4, 4, 6);
        ctx.fillStyle = '#92400E';
        ctx.beginPath();
        ctx.arc(c.x + c.width / 2, c.y + c.height * 0.35, c.width / 2 + 1, Math.PI, 0);
        ctx.fill();
      } else if (c.type === 'coin') {
        // Gold Coin
        ctx.fillStyle = '#FBBF24';
        ctx.beginPath();
        ctx.arc(c.x + c.width / 2, c.y + c.height / 2, c.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#D97706';
        ctx.stroke();
      } else if (c.type === 'gem') {
        // Purple Gem
        ctx.fillStyle = '#A855F7';
        ctx.beginPath();
        ctx.moveTo(c.x + c.width / 2, c.y);
        ctx.lineTo(c.x + c.width, c.y + c.height / 2);
        ctx.lineTo(c.x + c.width / 2, c.y + c.height);
        ctx.lineTo(c.x, c.y + c.height / 2);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#C084FC';
        ctx.stroke();
      } else if (c.type === 'jetpack_fuel') {
        // Green Fuel Canister
        ctx.fillStyle = '#10B981';
        ctx.fillRect(c.x + 2, c.y + 4, c.width - 4, c.height - 4);
        ctx.fillStyle = '#059669';
        ctx.fillRect(c.x + c.width / 2 - 3, c.y, 6, 4);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 8px monospace';
        ctx.fillText('F', c.x + c.width / 2, c.y + c.height / 2 + 3);
      } else if (c.type === 'jetpack') {
        // Cyan Jetpack
        ctx.fillStyle = '#38BDF8';
        ctx.fillRect(c.x + 2, c.y + 2, c.width - 4, c.height - 4);
        ctx.fillStyle = '#F97316';
        ctx.fillRect(c.x + 4, c.y + c.height - 2, 5, 4);
        ctx.fillRect(c.x + c.width - 9, c.y + c.height - 2, 5, 4);
      } else if (c.type === 'bubble_shield') {
        // Cyan Bubble Shield
        ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.beginPath();
        ctx.arc(c.x + c.width / 2, c.y + c.height / 2, c.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#38BDF8';
        ctx.stroke();
      } else if (c.type === 'blaster') {
        // Blaster
        ctx.fillStyle = '#38BDF8';
        ctx.fillRect(c.x, c.y + 4, c.width, c.height - 8);
        ctx.fillStyle = '#0284C7';
        ctx.fillRect(c.x + 4, c.y + 8, 8, 8);
      }

      // Highlight Box
      if (isSelected) {
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(c.x - 4, c.y - 4, c.width + 8, c.height + 8);
        ctx.setLineDash([]);

        // Coordinate Label
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.fillRect(c.x - 12, c.y - 22, 65, 16);
        ctx.fillStyle = '#38BDF8';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`${c.type}: ${c.x},${c.y}`, c.x - 8, c.y - 10);
      }
    });

    // 7. Draw Enemies & Patrol Boundaries
    (level.enemies || []).forEach((e, idx) => {
      const isSelected = selectedEntity?.kind === 'enemy' && selectedEntity.index === idx;

      // Draw Patrol Boundary line
      if (e.minX !== undefined && e.maxX !== undefined) {
        ctx.strokeStyle = isSelected ? 'rgba(56, 189, 248, 0.6)' : 'rgba(239, 68, 68, 0.25)';
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(e.minX, e.y + e.height / 2);
        ctx.lineTo(e.maxX, e.y + e.height / 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Enemy Body Silhouette
      ctx.fillStyle = e.type === 'anteater' ? '#B45309' :
                      e.type === 'frog' ? '#10B981' :
                      e.type === 'beaver' ? '#92400E' :
                      e.type === 'hedgehog' ? '#D97706' :
                      e.type === 'pigeon' ? '#64748B' :
                      e.type === 'skunk' ? '#1E293B' :
                      e.type === 'flyer' ? '#0284C7' : '#EF4444';
      ctx.fillRect(e.x, e.y, e.width, e.height);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 8px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(e.type.substring(0, 4).toUpperCase(), e.x + e.width / 2, e.y + e.height / 2 + 3);

      if (isSelected) {
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(e.x - 4, e.y - 4, e.width + 8, e.height + 8);
        ctx.setLineDash([]);

        // Coordinate Label
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.fillRect(e.x - 10, e.y - 22, 60, 16);
        ctx.fillStyle = '#38BDF8';
        ctx.font = 'bold 9px monospace';
        ctx.fillText(`${e.x},${e.y}`, e.x + 20, e.y - 10);
      }
    });

    ctx.restore();

    // 8. Draw Minimap at bottom of screen
    const mmW = w - 40;
    const mmH = 22;
    const mmX = 20;
    const mmY = h - 30;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.fillRect(mmX, mmY, mmW, mmH);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.strokeRect(mmX, mmY, mmW, mmH);

    // Minimap platforms
    const scaleMmX = mmW / (level.worldWidth || 1600);
    ctx.fillStyle = '#10B981';
    (level.platforms || []).forEach(p => {
      ctx.fillRect(mmX + p.x * scaleMmX, mmY + 4, Math.max(2, p.width * scaleMmX), mmH - 8);
    });

    // Minimap collectibles
    ctx.fillStyle = '#F59E0B';
    (level.collectibles || []).forEach(c => {
      ctx.fillRect(mmX + c.x * scaleMmX, mmY + 2, 2, 4);
    });

    // Minimap camera viewport box
    const vpW = Math.max(16, (w / zoom) * scaleMmX);
    const vpX = mmX + cameraX * scaleMmX;
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 2;
    ctx.strokeRect(vpX, mmY - 1, vpW, mmH + 2);
    } catch (err) {
      console.error('Canvas render error in Level Editor:', err);
    }
  }, [level, cameraX, cameraY, zoom, selectedEntity, gridSnap]);

  // Canvas Mouse Down: Select & Drag
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseCanvasX = (e.clientX - rect.left) * scaleX;
    const mouseCanvasY = (e.clientY - rect.top) * scaleY;
    const worldX = mouseCanvasX / zoom + cameraX;
    const worldY = mouseCanvasY / zoom + cameraY;

    const collectibles = level.collectibles || [];
    const enemies = level.enemies || [];
    const hazards = level.hazards || [];
    const platforms = level.platforms || [];
    const pStart = level.playerStart || { x: 80, y: 300 };
    const pGoal = level.goal || { x: (level.worldWidth || 1600) - 100, y: 300, width: 32, height: 64 };

    // Check hit testing
    // 1. Collectibles (highest priority)
    for (let i = collectibles.length - 1; i >= 0; i--) {
      const c = collectibles[i];
      if (worldX >= c.x - 8 && worldX <= c.x + c.width + 8 &&
          worldY >= c.y - 8 && worldY <= c.y + c.height + 8) {
        pushUndo(level);
        setSelectedEntity({ kind: 'collectible', id: c.id, index: i });
        isDraggingRef.current = true;
        dragOffsetRef.current = { x: worldX - c.x, y: worldY - c.y };
        return;
      }
    }

    // 2. Enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const en = enemies[i];
      if (worldX >= en.x - 8 && worldX <= en.x + en.width + 8 &&
          worldY >= en.y - 8 && worldY <= en.y + en.height + 8) {
        pushUndo(level);
        setSelectedEntity({ kind: 'enemy', id: en.id, index: i });
        isDraggingRef.current = true;
        dragOffsetRef.current = { x: worldX - en.x, y: worldY - en.y };
        return;
      }
    }

    // 3. Hazards
    for (let i = hazards.length - 1; i >= 0; i--) {
      const hz = hazards[i];
      if (worldX >= hz.x - 6 && worldX <= hz.x + hz.width + 6 &&
          worldY >= hz.y - 6 && worldY <= hz.y + hz.height + 6) {
        pushUndo(level);
        setSelectedEntity({ kind: 'hazard', id: hz.id, index: i });
        isDraggingRef.current = true;
        dragOffsetRef.current = { x: worldX - hz.x, y: worldY - hz.y };
        return;
      }
    }

    // 4. Platforms
    for (let i = platforms.length - 1; i >= 0; i--) {
      const p = platforms[i];
      if (worldX >= p.x && worldX <= p.x + p.width &&
          worldY >= p.y && worldY <= p.y + p.height) {
        pushUndo(level);
        setSelectedEntity({ kind: 'platform', id: p.id, index: i });
        isDraggingRef.current = true;
        dragOffsetRef.current = { x: worldX - p.x, y: worldY - p.y };
        return;
      }
    }

    // 5. Player Start
    if (Math.hypot(worldX - (pStart.x + 12), worldY - (pStart.y + 16)) < 24) {
      pushUndo(level);
      setSelectedEntity({ kind: 'start', id: 'start', index: 0 });
      isDraggingRef.current = true;
      dragOffsetRef.current = { x: worldX - pStart.x, y: worldY - pStart.y };
      return;
    }

    // 6. Goal Flag
    if (worldX >= pGoal.x && worldX <= pGoal.x + pGoal.width &&
        worldY >= pGoal.y && worldY <= pGoal.y + pGoal.height) {
      pushUndo(level);
      setSelectedEntity({ kind: 'goal', id: 'goal', index: 0 });
      isDraggingRef.current = true;
      dragOffsetRef.current = { x: worldX - pGoal.x, y: worldY - pGoal.y };
      return;
    }

    // Clicked empty ground: deselect
    setSelectedEntity(null);
  };

  // Canvas Mouse Move: Dragging entity
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || !selectedEntity) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseCanvasX = (e.clientX - rect.left) * scaleX;
    const mouseCanvasY = (e.clientY - rect.top) * scaleY;
    const rawWorldX = mouseCanvasX / zoom + cameraX;
    const rawWorldY = mouseCanvasY / zoom + cameraY;

    let targetX = rawWorldX - dragOffsetRef.current.x;
    let targetY = rawWorldY - dragOffsetRef.current.y;

    if (gridSnap) {
      targetX = Math.round(targetX / gridSize) * gridSize;
      targetY = Math.round(targetY / gridSize) * gridSize;
    } else {
      targetX = Math.round(targetX);
      targetY = Math.round(targetY);
    }

    targetX = Math.max(0, Math.min(level.worldWidth - 20, targetX));
    targetY = Math.max(0, Math.min(level.worldHeight - 20, targetY));

    setLevel(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      if (selectedEntity.kind === 'collectible') {
        const item = next.collectibles[selectedEntity.index];
        if (item) {
          item.x = targetX;
          item.y = targetY;
        }
      } else if (selectedEntity.kind === 'enemy') {
        const item = next.enemies[selectedEntity.index];
        if (item) {
          const dx = targetX - item.x;
          item.x = targetX;
          item.y = targetY;
          if (item.minX !== undefined) item.minX += dx;
          if (item.maxX !== undefined) item.maxX += dx;
        }
      } else if (selectedEntity.kind === 'hazard') {
        const item = next.hazards[selectedEntity.index];
        if (item) {
          item.x = targetX;
          item.y = targetY;
        }
      } else if (selectedEntity.kind === 'platform') {
        const item = next.platforms[selectedEntity.index];
        if (item) {
          item.x = targetX;
          item.y = targetY;
        }
      } else if (selectedEntity.kind === 'start') {
        next.playerStart.x = targetX;
        next.playerStart.y = targetY;
      } else if (selectedEntity.kind === 'goal') {
        next.goal.x = targetX;
        next.goal.y = targetY;
      }
      return next;
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Canvas Mouse Wheel: Horizontal camera scrub
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
    setCameraX(prev => Math.max(0, Math.min(level.worldWidth - 600, prev + delta * 0.9)));
  };

  // Launch playtest directly from editor
  const handleTestPlay = () => {
    handleSaveDevOverride();
    onPlayCustomLevel(level);
  };

  // Retrieve current selected entity object for inspector panel
  const getSelectedEntityObject = () => {
    if (!selectedEntity) return null;
    if (selectedEntity.kind === 'collectible') return level.collectibles[selectedEntity.index];
    if (selectedEntity.kind === 'enemy') return level.enemies[selectedEntity.index];
    if (selectedEntity.kind === 'hazard') return level.hazards[selectedEntity.index];
    if (selectedEntity.kind === 'platform') return level.platforms[selectedEntity.index];
    if (selectedEntity.kind === 'start') return { ...level.playerStart, width: 24, height: 32, type: 'start' };
    if (selectedEntity.kind === 'goal') return { ...level.goal, type: 'goal' };
    return null;
  };

  const activeItem = getSelectedEntityObject();

  return (
    <div id="modal-level-editor" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md select-none animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col w-full max-w-6xl max-h-[96vh] overflow-hidden text-white">
        
        {/* Top Header & Dev Notice */}
        <div className="px-4 py-2.5 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg border border-amber-500/40">
              <Wrench size={16} />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-sm sm:text-base text-amber-300">Level Visual Editor & Drag-and-Drop Inspector</h2>
                <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/30">DEV ONLY</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Click & drag items to fix placement. Snap items onto platforms with 1 click. Copy clean TypeScript code when done.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {notification && (
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/40 animate-in fade-in">
                {notification}
              </span>
            )}

            <button
              onClick={handleUndo}
              disabled={undoStack.length === 0}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg border border-slate-700 text-slate-300 transition-colors"
              title="Undo (Ctrl+Z)"
            >
              <Undo2 size={16} />
            </button>

            <button
              id="btn-close-editor"
              onClick={onClose}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Close Editor"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Toolbar & Level Selector */}
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* Level Switcher */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleSelectLevel(levelIndex - 1)}
              disabled={levelIndex <= 0}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg border border-slate-700"
              title="Previous Level"
            >
              <ChevronLeft size={15} />
            </button>

            <select
              value={levelIndex}
              onChange={(e) => handleSelectLevel(parseInt(e.target.value, 10))}
              className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 font-bold text-amber-300 focus:outline-none focus:border-amber-400 text-xs"
            >
              {levels.map((lvl, idx) => (
                <option key={lvl.id} value={idx}>
                  Level {lvl.id}: {lvl.title} {lvl.category === 'rocketeer' ? '🚀' : ''}
                </option>
              ))}
            </select>

            <button
              onClick={() => handleSelectLevel(levelIndex + 1)}
              disabled={levelIndex >= levels.length - 1}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-lg border border-slate-700"
              title="Next Level"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Quick Actions & Level Utilities */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleSnapAllToPlatforms}
              className="px-2.5 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold rounded-lg border border-emerald-500/40 flex items-center gap-1.5 transition-colors"
              title="Snap all floating collectibles directly down onto platforms"
            >
              <Magnet size={14} className="text-emerald-400" />
              <span>Snap All Items</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="px-2.5 py-1.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-bold rounded-lg border border-sky-500/40 flex items-center gap-1.5 transition-colors"
              title="Copy level definition as TypeScript object for worldX.ts"
            >
              <Copy size={14} />
              <span>Copy Code</span>
            </button>

            <button
              onClick={handleSaveDevOverride}
              className="px-2.5 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold rounded-lg border border-amber-500/40 flex items-center gap-1.5 transition-colors"
              title="Save changes to localStorage so browser reload keeps your edits"
            >
              <Save size={14} />
              <span>Save (Dev)</span>
            </button>

            <button
              onClick={handleResetLevel}
              className="px-2 py-1.5 bg-slate-800 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 rounded-lg border border-slate-700 transition-colors"
              title="Reset level back to clean code default"
            >
              <RotateCcw size={13} />
            </button>

            <button
              id="btn-play-editor-level"
              onClick={handleTestPlay}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-white rounded-lg shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Launch and test play this level immediately"
            >
              <Play size={14} fill="currentColor" />
              <span>Test Play</span>
            </button>
          </div>
        </div>

        {/* Viewport Control Bar */}
        <div className="px-4 py-1.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>World: <strong className="text-white">{level.worldWidth}px</strong></span>
            <span>Camera: <strong className="text-sky-300">X: {Math.round(cameraX)}</strong></span>
            
            <button
              onClick={() => setCameraX(Math.max(0, level.playerStart.x - 100))}
              className="text-sky-400 hover:underline"
            >
              Jump to Start
            </button>

            <button
              onClick={() => setCameraX(Math.max(0, level.goal.x - 400))}
              className="text-amber-400 hover:underline"
            >
              Jump to Flag
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1 cursor-pointer">
              <input 
                type="checkbox" 
                checked={gridSnap} 
                onChange={(e) => setGridSnap(e.target.checked)} 
                className="rounded border-slate-700 bg-slate-800 text-sky-500"
              />
              <span>Grid Snap ({gridSize}px)</span>
            </label>

            <div className="flex items-center gap-1">
              <span>Zoom:</span>
              {[0.75, 1.0, 1.25].map(z => (
                <button
                  key={z}
                  onClick={() => setZoom(z)}
                  className={`px-1.5 py-0.5 rounded text-[10px] ${zoom === z ? 'bg-sky-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}`}
                >
                  {z}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Visual Canvas Area */}
        <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-950 overflow-hidden cursor-crosshair">
          <canvas
            ref={canvasRef}
            width={1100}
            height={460}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            className="w-full h-full block"
          />

          {/* Quick Camera Navigation Overlay Buttons */}
          <button
            onClick={() => setCameraX(prev => Math.max(0, prev - 350))}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-full text-white shadow-lg"
            title="Pan Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCameraX(prev => Math.min(level.worldWidth - 500, prev + 350))}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-full text-white shadow-lg"
            title="Pan Right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Camera Horizontal Scrollbar Range */}
          <div className="absolute left-6 right-6 bottom-8 pointer-events-auto">
            <input
              type="range"
              min={0}
              max={Math.max(100, level.worldWidth - 800)}
              value={cameraX}
              onChange={(e) => setCameraX(parseInt(e.target.value, 10))}
              className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>
        </div>

        {/* Bottom Inspector & Add Items Palette */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          {/* Left: Selected Entity Inspector */}
          {activeItem ? (
            <div className="flex flex-wrap items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-sky-500/40 w-full sm:w-auto">
              <span className="font-bold text-sky-400 uppercase tracking-wider text-[11px]">
                {activeItem.type || selectedEntity?.kind}:
              </span>

              {selectedEntity?.kind === 'platform' && (
                <select
                  value={activeItem.type || 'solid'}
                  onChange={(e) => {
                    pushUndo(level);
                    const newLvl = JSON.parse(JSON.stringify(level));
                    const newType = e.target.value as PlatformType;
                    const plat = newLvl.platforms[selectedEntity.index];
                    plat.type = newType;
                    if (newType === 'anti_grav') {
                      plat.width = Math.max(48, plat.width);
                      plat.height = Math.max(120, plat.height);
                    }
                    setLevel(newLvl);
                  }}
                  className="bg-slate-900 border border-slate-700 text-sky-300 rounded px-1.5 py-0.5 text-[11px]"
                >
                  <option value="solid">Solid</option>
                  <option value="one-way">One-Way</option>
                  <option value="bouncy">Bouncy</option>
                  <option value="crumbling">Crumbling</option>
                  <option value="anti_grav">Anti-Grav</option>
                </select>
              )}

              <div className="flex items-center gap-1 font-mono text-[11px]">
                <span>X:</span>
                <input
                  type="number"
                  value={activeItem.x}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10) || 0;
                    nudgeSelected(val - activeItem.x, 0);
                  }}
                  className="w-16 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-center text-white"
                />
                <span>Y:</span>
                <input
                  type="number"
                  value={activeItem.y}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10) || 0;
                    nudgeSelected(0, val - activeItem.y);
                  }}
                  className="w-16 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-center text-white"
                />
              </div>

              {/* Nudge Buttons */}
              <div className="flex items-center gap-0.5">
                <button onClick={() => nudgeSelected(-1, 0)} className="px-1.5 py-0.5 bg-slate-700 hover:bg-slate-600 rounded text-[10px]">←</button>
                <button onClick={() => nudgeSelected(1, 0)} className="px-1.5 py-0.5 bg-slate-700 hover:bg-slate-600 rounded text-[10px]">→</button>
                <button onClick={() => nudgeSelected(0, -1)} className="px-1.5 py-0.5 bg-slate-700 hover:bg-slate-600 rounded text-[10px]">↑</button>
                <button onClick={() => nudgeSelected(0, 1)} className="px-1.5 py-0.5 bg-slate-700 hover:bg-slate-600 rounded text-[10px]">↓</button>
              </div>

              {/* Snap to platform underneath */}
              {(selectedEntity?.kind === 'collectible' || selectedEntity?.kind === 'enemy') && (
                <button
                  onClick={handleSnapSelectedToPlatform}
                  className="px-2 py-1 bg-emerald-500/25 hover:bg-emerald-500/40 text-emerald-300 font-bold rounded-lg border border-emerald-500/50 flex items-center gap-1 transition-colors"
                  title="Snap this item to sit cleanly on top of platform surface"
                >
                  <Magnet size={12} />
                  <span>Snap Ground</span>
                </button>
              )}

              {/* Duplicate Button */}
              {(selectedEntity?.kind === 'collectible' || selectedEntity?.kind === 'enemy') && (
                <button
                  onClick={handleDuplicateSelected}
                  className="px-2 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg flex items-center gap-1 transition-colors"
                  title="Duplicate this item"
                >
                  <Copy size={12} />
                </button>
              )}

              {/* Delete Button */}
              {selectedEntity?.kind !== 'start' && selectedEntity?.kind !== 'goal' && (
                <button
                  onClick={handleDeleteSelected}
                  className="px-2 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-lg border border-rose-500/40 flex items-center gap-1 transition-colors"
                  title="Delete item (Del)"
                >
                  <Trash2 size={12} />
                </button>
              )}
            </div>
          ) : (
            <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
              <Crosshair size={14} className="text-sky-400" />
              <span>Click on any collectible, enemy, platform, or hazard to inspect & drag it.</span>
            </div>
          )}

          {/* Right: Quick Add Entities Palette */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 text-[11px] font-bold">Add:</span>
            
            <button
              onClick={() => handleAddItem('acorn', 'collectible')}
              className="px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold rounded-lg border border-amber-500/40 flex items-center gap-1 transition-colors"
              title="Add Golden Acorn (+1500)"
            >
              <span>🌰 Acorn</span>
            </button>

            <button
              onClick={() => handleAddItem('coin', 'collectible')}
              className="px-2 py-1 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-bold rounded-lg border border-yellow-500/40 flex items-center gap-1 transition-colors"
              title="Add Gold Coin (+100)"
            >
              <span>🪙 Coin</span>
            </button>

            <button
              onClick={() => handleAddItem('gem', 'collectible')}
              className="px-2 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-bold rounded-lg border border-purple-500/40 flex items-center gap-1 transition-colors"
              title="Add Gem (+500)"
            >
              <span>💎 Gem</span>
            </button>

            <button
              onClick={() => handleAddItem('jetpack_fuel', 'collectible')}
              className="px-2 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold rounded-lg border border-emerald-500/40 flex items-center gap-1 transition-colors"
              title="Add Jetpack Fuel Tank"
            >
              <span>⛽ Fuel</span>
            </button>

            <button
              onClick={() => handleAddItem('jetpack', 'collectible')}
              className="px-2 py-1 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-bold rounded-lg border border-sky-500/40 flex items-center gap-1 transition-colors"
              title="Add Jetpack (+1000)"
            >
              <span>🚀 Jetpack</span>
            </button>

            <button
              onClick={() => handleAddItem('bubble_shield', 'collectible')}
              className="px-2 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold rounded-lg border border-cyan-500/40 flex items-center gap-1 transition-colors"
              title="Add Bubble Shield"
            >
              <span>🛡️ Shield</span>
            </button>

            <button
              onClick={() => handleAddItem('anteater', 'enemy')}
              className="px-2 py-1 bg-red-950/50 hover:bg-red-900/60 text-red-300 rounded-lg border border-red-500/30 flex items-center gap-1 transition-colors"
              title="Add Critter"
            >
              <span>🐾 Enemy</span>
            </button>

            <button
              onClick={() => handleAddItem('solid', 'platform')}
              className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 flex items-center gap-1 transition-colors"
              title="Add Platform"
            >
              <span>🧱 Platform</span>
            </button>

            <button
              onClick={() => handleAddItem('anti_grav', 'platform')}
              className="px-2 py-1 bg-sky-950/60 hover:bg-sky-900/70 text-cyan-300 font-bold rounded-lg border border-cyan-500/40 flex items-center gap-1 transition-colors"
              title="Add Anti-Gravity Tractor Beam"
            >
              <span>🌌 Grav Beam</span>
            </button>

            <button
              onClick={() => handleAddItem('spike', 'hazard')}
              className="px-2 py-1 bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 rounded-lg border border-rose-500/30 flex items-center gap-1 transition-colors"
              title="Add Spikes Hazard"
            >
              <span>⚠️ Spike</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
