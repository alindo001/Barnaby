import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Plus, 
  Trash2, 
  RotateCcw, 
  ShieldAlert, 
  Sparkles, 
  Coins, 
  Move,
  Rocket
} from 'lucide-react';
import { LevelData, Platform, Hazard, Collectible, Enemy, PlatformType, HazardType, CollectibleType } from '../types/game';
import { THEMES } from '../game/levels';

interface LevelEditorModalProps {
  onPlayCustomLevel: (level: LevelData) => void;
  onClose: () => void;
}

export const LevelEditorModal: React.FC<LevelEditorModalProps> = ({
  onPlayCustomLevel,
  onClose
}) => {
  const [themeKey, setThemeKey] = useState<string>('meadow');
  const [title, setTitle] = useState<string>('Custom Sandbox');
  const [worldWidth] = useState<number>(1600);
  const [worldHeight] = useState<number>(600);

  // Initial custom level template
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'p_base1', x: 0, y: 520, width: 400, height: 80, type: 'solid' },
    { id: 'p_base2', x: 500, y: 520, width: 500, height: 80, type: 'solid' },
    { id: 'p_step1', x: 220, y: 400, width: 120, height: 24, type: 'solid' },
    { id: 'p_spring', x: 420, y: 504, width: 48, height: 16, type: 'bouncy' },
    { id: 'p_step2', x: 620, y: 340, width: 140, height: 24, type: 'one-way' }
  ]);

  const [hazards, setHazards] = useState<Hazard[]>([
    { id: 'h_spike', x: 400, y: 580, width: 100, height: 20, type: 'spike' }
  ]);

  const [collectibles, setCollectibles] = useState<Collectible[]>([
    { id: 'c1', x: 250, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
    { id: 'c2', x: 680, y: 280, width: 24, height: 24, type: 'gem', value: 500 }
  ]);

  const [enemies, setEnemies] = useState<Enemy[]>([
    { id: 'e1', x: 600, y: 488, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 520, maxX: 850, facing: 1 }
  ]);

  const [goalX, setGoalX] = useState<number>(900);
  const [goalY, setGoalY] = useState<number>(440);

  // Add Item Handlers
  const addPlatform = (type: PlatformType = 'solid') => {
    const id = 'p_' + Date.now().toString(36);
    setPlatforms([...platforms, {
      id,
      x: 300 + (platforms.length % 5) * 60,
      y: 400 - (platforms.length % 4) * 40,
      width: type === 'bouncy' ? 48 : 100,
      height: type === 'bouncy' ? 16 : 20,
      type
    }]);
  };

  const addHazard = (type: HazardType = 'spike') => {
    const id = 'h_' + Date.now().toString(36);
    setHazards([...hazards, {
      id,
      x: 350 + (hazards.length % 4) * 80,
      y: 500,
      width: 60,
      height: 20,
      type
    }]);
  };

  const addCollectible = (type: CollectibleType = 'coin') => {
    const id = 'c_' + Date.now().toString(36);
    const size = type === 'jetpack' ? 28 : type === 'gem' || type === 'jetpack_fuel' ? 24 : 20;
    const value = type === 'jetpack' ? 1000 : type === 'gem' ? 500 : 100;
    setCollectibles([...collectibles, {
      id,
      x: 200 + (collectibles.length % 6) * 70,
      y: 350,
      width: size,
      height: size,
      type,
      value
    }]);
  };

  const addEnemy = () => {
    const id = 'e_' + Date.now().toString(36);
    setEnemies([...enemies, {
      id,
      x: 550,
      y: 488,
      width: 28,
      height: 24,
      type: 'slime',
      vx: 1.2,
      vy: 0,
      minX: 450,
      maxX: 750,
      facing: 1
    }]);
  };

  const handleLaunch = () => {
    const customLevel: LevelData = {
      id: 999,
      title: title || 'Custom Sandbox Level',
      description: 'Player-crafted custom stage',
      worldWidth,
      worldHeight,
      theme: THEMES[themeKey] || THEMES.meadow,
      playerStart: { x: 80, y: 440 },
      goal: { x: goalX, y: goalY, width: 40, height: 60 },
      platforms,
      hazards,
      collectibles,
      enemies,
      parTime: 30,
      threeStarScore: 1500
    };

    onPlayCustomLevel(customLevel);
    onClose();
  };

  return (
    <div id="modal-level-editor" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 shadow-2xl text-white relative max-h-[90vh] overflow-y-auto">
        <button
          id="btn-close-editor"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-purple-500/20 rounded-xl border border-purple-500/30 text-purple-400">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">Level Sandbox & Builder</h2>
            <p className="text-xs text-slate-400">Add elements, choose themes, and test play instantly</p>
          </div>
        </div>

        {/* Configuration Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Level Title</label>
            <input
              id="input-editor-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Environment Theme</label>
            <select
              id="select-editor-theme"
              value={themeKey}
              onChange={(e) => setThemeKey(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              <option value="meadow">Green Meadows (Lush grass)</option>
              <option value="cavern">Crystal Caverns (Purple cave)</option>
              <option value="lava">Molten Core (Fiery lava)</option>
              <option value="sky">Sky Peaks (Sunset heights)</option>
              <option value="castle">Midnight Citadel (Dark stone)</option>
            </select>
          </div>
        </div>

        {/* Quick Add Elements Palette */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-300 mb-2">Add Elements to Canvas</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <button
              onClick={() => addPlatform('solid')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus size={14} className="text-emerald-400" />
              <span>Solid Platform</span>
            </button>

            <button
              onClick={() => addPlatform('bouncy')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus size={14} className="text-rose-400" />
              <span>Spring Pad</span>
            </button>

            <button
              onClick={() => addPlatform('crumbling')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus size={14} className="text-amber-400" />
              <span>Crumble Block</span>
            </button>

            <button
              onClick={() => addPlatform('one-way')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus size={14} className="text-amber-500" />
              <span>One-Way Ledge</span>
            </button>

            <button
              onClick={() => addHazard('spike')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <ShieldAlert size={14} className="text-rose-500" />
              <span>Spikes Hazard</span>
            </button>

            <button
              onClick={() => addCollectible('coin')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Coins size={14} className="text-yellow-400" />
              <span>Gold Coin</span>
            </button>

            <button
              onClick={() => addCollectible('gem')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles size={14} className="text-purple-400" />
              <span>Purple Gem</span>
            </button>

            <button
              onClick={() => addCollectible('jetpack')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-cyan-500/40 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Rocket size={14} className="text-cyan-400" />
              <span>Jetpack</span>
            </button>

            <button
              onClick={() => addCollectible('jetpack_fuel')}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-emerald-500/40 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus size={14} className="text-emerald-400" />
              <span>Fuel Tank</span>
            </button>

            <button
              onClick={() => addEnemy()}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Move size={14} className="text-emerald-400" />
              <span>Patrol Slime</span>
            </button>
          </div>
        </div>

        {/* Current Items Summary */}
        <div className="bg-slate-800/50 rounded-xl p-3.5 border border-slate-700/60 mb-6 text-xs text-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Platforms: <strong className="text-white">{platforms.length}</strong></span>
            <span>Hazards: <strong className="text-rose-400">{hazards.length}</strong></span>
            <span>Items: <strong className="text-yellow-400">{collectibles.length}</strong></span>
            <span>Enemies: <strong className="text-emerald-400">{enemies.length}</strong></span>
          </div>

          <button
            onClick={() => {
              setPlatforms([]);
              setHazards([]);
              setCollectibles([]);
              setEnemies([]);
            }}
            className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors"
          >
            <Trash2 size={13} />
            <span>Clear All</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            id="btn-launch-custom-level"
            onClick={handleLaunch}
            className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-colors"
          >
            <Play size={18} fill="currentColor" />
            <span>Test Play Sandbox</span>
          </button>

          <button
            onClick={onClose}
            className="py-3 px-5 bg-slate-800 hover:bg-slate-700 font-semibold text-slate-300 rounded-xl border border-slate-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
