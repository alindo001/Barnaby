import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GameEngine } from './game/engine';
import { GameHUD } from './components/GameHUD';
import { GameOverlay } from './components/GameOverlay';
import { TouchControls } from './components/TouchControls';
import { LevelSelectModal } from './components/LevelSelectModal';
import { ControlsHelpModal } from './components/ControlsHelpModal';
import { LevelEditorModal } from './components/LevelEditorModal';
import { CharacterSelectModal } from './components/CharacterSelectModal';
import { GameState, GameStats, LevelData, InputState, LaunchDirection, TouchButtonSize, CharacterConfig } from './types/game';
import { sound } from './game/audio';
import { loadCharacterConfig } from './game/characters';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<GameEngine | null>(null);

  const [gameState, setGameState] = useState<GameState>('MENU');
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    coins: 0,
    gems: 0,
    lives: 3,
    time: 0,
    levelIndex: 0,
    levelStars: {},
    highScores: {},
    deaths: 0
  });

  const [currentLevel, setCurrentLevel] = useState<LevelData | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [musicEnabled, setMusicEnabled] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [dpadSize, setDpadSize] = useState<TouchButtonSize>(() => {
    try {
      const saved = localStorage.getItem('platformer_button_size');
      if (saved === 'normal' || saved === 'large' || saved === 'xl') return saved;
    } catch {}
    return 'normal';
  });
  const [touchOpacity, setTouchOpacity] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('platformer_button_opacity');
      if (saved) {
        const val = parseFloat(saved);
        if (!isNaN(val) && val >= 0.15 && val <= 1.0) return val;
      }
    } catch {}
    return 0.75;
  });

  // Modals state
  const [showLevelSelect, setShowLevelSelect] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [showCharacterSelect, setShowCharacterSelect] = useState<boolean>(false);
  const [characterConfig, setCharacterConfig] = useState<CharacterConfig>(() => loadCharacterConfig());

  // Initialize Game Engine
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Detect touch capability
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    const engine = new GameEngine(canvasRef.current);
    engineRef.current = engine;

    setCurrentLevel(engine.currentLevel);

    engine.setOnStateChange((newState, newStats) => {
      setGameState(newState);
      setStats(newStats);
      setCurrentLevel(engine.currentLevel);
    });

    // Resize Handler
    const updateSize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const width = containerRef.current.clientWidth || 800;
      const height = containerRef.current.clientHeight || 500;
      engine.resize(width, height);
    };

    updateSize();
    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(containerRef.current);

    // Start engine loop
    engine.start();

    return () => {
      engine.stop();
      resizeObserver.disconnect();
    };
  }, []);

  // Action Handlers
  const handleStartGame = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.startLevel(0);
    }
  }, []);

  const handleResume = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.resumeGame();
    }
  }, []);

  const handleRestart = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.restartCurrentLevel();
    }
  }, []);

  const handleRestartFromBeginning = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.restartFromBeginning();
    }
  }, []);

  const handleNextLevel = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.nextLevel();
    }
  }, []);

  const handleSelectLevel = useCallback((index: number) => {
    if (engineRef.current) {
      engineRef.current.startLevel(index);
    }
  }, []);

  const handleToggleSound = useCallback(() => {
    setSoundEnabled(prev => {
      const next = !prev;
      sound.setSoundEnabled(next);
      if (engineRef.current) {
        engineRef.current.settings.soundEnabled = next;
      }
      return next;
    });
  }, []);

  const handleToggleMusic = useCallback(() => {
    setMusicEnabled(prev => {
      const next = !prev;
      sound.setMusicEnabled(next);
      if (engineRef.current) {
        engineRef.current.settings.musicEnabled = next;
      }
      return next;
    });
  }, []);

  const handleTogglePause = useCallback(() => {
    if (!engineRef.current) return;
    if (gameState === 'PLAYING') {
      engineRef.current.pauseGame();
    } else if (gameState === 'PAUSED') {
      engineRef.current.resumeGame();
    }
  }, [gameState]);

  const handleToggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const handleTouchInput = useCallback((action: keyof InputState, value: boolean) => {
    if (engineRef.current) {
      engineRef.current.setTouchInput(action, value);
    }
  }, []);

  const handlePlayCustomLevel = useCallback((customLevel: LevelData) => {
    if (engineRef.current) {
      engineRef.current.currentLevel = customLevel;
      engineRef.current.currentLevelIndex = 0;
      engineRef.current.startLevel(0);
    }
  }, []);

  const handleLaunchJetpack = useCallback((direction: LaunchDirection) => {
    if (engineRef.current) {
      engineRef.current.launchJetpack(direction);
    }
  }, []);

  const handleShootBlaster = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.shootBlaster();
    }
  }, []);

  const handleSelectCharacter = useCallback((newConfig: CharacterConfig) => {
    setCharacterConfig(newConfig);
    if (engineRef.current) {
      engineRef.current.setCharacterConfig(newConfig);
    }
  }, []);

  const handleToggleDpadSize = useCallback(() => {
    setDpadSize(prev => {
      const next: TouchButtonSize = prev === 'normal' ? 'large' : prev === 'large' ? 'xl' : 'normal';
      try {
        localStorage.setItem('platformer_button_size', next);
      } catch {}
      return next;
    });
  }, []);

  const handleSetDpadSize = useCallback((size: TouchButtonSize) => {
    setDpadSize(size);
    try {
      localStorage.setItem('platformer_button_size', size);
    } catch {}
  }, []);

  const handleSetTouchOpacity = useCallback((opacity: number) => {
    const clamped = Math.max(0.2, Math.min(1.0, Math.round(opacity * 100) / 100));
    setTouchOpacity(clamped);
    try {
      localStorage.setItem('platformer_button_opacity', clamped.toString());
    } catch {}
  }, []);

  return (
    <div 
      id="platformer-app-root"
      ref={containerRef}
      className="fixed inset-0 w-full h-[100dvh] overflow-hidden bg-slate-950 flex items-center justify-center select-none font-sans touch-none overscroll-none"
    >
      {/* 2D Canvas Viewport */}
      <canvas
        id="game-canvas"
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair touch-none"
      />

      {/* In-Game Active HUD */}
      {gameState === 'PLAYING' && currentLevel && (
        <GameHUD
          stats={stats}
          currentLevel={currentLevel}
          isPaused={gameState === 'PAUSED'}
          soundEnabled={soundEnabled}
          musicEnabled={musicEnabled}
          dpadSize={dpadSize}
          onToggleSound={handleToggleSound}
          onToggleMusic={handleToggleMusic}
          onRestart={handleRestart}
          onTogglePause={handleTogglePause}
          onOpenLevelSelect={() => setShowLevelSelect(true)}
          onOpenHelp={() => setShowHelp(true)}
          onToggleFullscreen={handleToggleFullscreen}
          onToggleDpadSize={handleToggleDpadSize}
          onLaunchJetpack={handleLaunchJetpack}
          onShootBlaster={handleShootBlaster}
          onOpenCharacterSelect={() => setShowCharacterSelect(true)}
        />
      )}

      {/* On-Screen Touch Controls (Mobile/Tablet or when touch enabled) */}
      {(isTouchDevice || gameState === 'PLAYING') && (
        <TouchControls 
          hasJetpack={stats.hasJetpack} 
          hasBlaster={stats.hasBlaster}
          dpadSize={dpadSize}
          touchOpacity={touchOpacity}
          onToggleDpadSize={handleToggleDpadSize}
          onOpenControlOptions={() => setShowHelp(true)}
          onLaunchJetpack={handleLaunchJetpack}
          onShootBlaster={handleShootBlaster}
          onInput={handleTouchInput} 
        />
      )}

      {/* Menus / Overlays (Start, Pause, Level Cleared, Game Over, Victory) */}
      {currentLevel && (
        <GameOverlay
          gameState={gameState}
          stats={stats}
          currentLevel={currentLevel}
          isLastLevel={engineRef.current ? engineRef.current.currentLevelIndex === engineRef.current.levels.length - 1 : false}
          soundEnabled={soundEnabled}
          dpadSize={dpadSize}
          touchOpacity={touchOpacity}
          onStartGame={handleStartGame}
          onResume={handleResume}
          onRestart={handleRestart}
          onRestartFromBeginning={handleRestartFromBeginning}
          onNextLevel={handleNextLevel}
          onOpenLevelSelect={() => setShowLevelSelect(true)}
          onOpenHelp={() => setShowHelp(true)}
          onOpenEditor={() => setShowEditor(true)}
          onOpenCharacterSelect={() => setShowCharacterSelect(true)}
          onToggleSound={handleToggleSound}
          onSetDpadSize={handleSetDpadSize}
          onSetTouchOpacity={handleSetTouchOpacity}
        />
      )}

      {/* Level Select Modal */}
      {showLevelSelect && engineRef.current && (
        <LevelSelectModal
          levels={engineRef.current.levels}
          currentLevelIndex={stats.levelIndex}
          stats={stats}
          onSelectLevel={handleSelectLevel}
          onClose={() => setShowLevelSelect(false)}
        />
      )}

      {/* Character Customizer & Locker Modal */}
      {showCharacterSelect && (
        <CharacterSelectModal
          currentConfig={characterConfig}
          onSelectCharacter={handleSelectCharacter}
          onClose={() => setShowCharacterSelect(false)}
        />
      )}

      {/* Controls & Mechanics Help / Settings Modal */}
      {showHelp && (
        <ControlsHelpModal 
          onClose={() => setShowHelp(false)}
          dpadSize={dpadSize}
          touchOpacity={touchOpacity}
          onSetDpadSize={handleSetDpadSize}
          onSetTouchOpacity={handleSetTouchOpacity}
        />
      )}

      {/* Level Sandbox / Builder Modal */}
      {showEditor && (
        <LevelEditorModal
          onPlayCustomLevel={handlePlayCustomLevel}
          onClose={() => setShowEditor(false)}
        />
      )}
    </div>
  );
}
