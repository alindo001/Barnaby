import React from 'react';
import { 
  Play, 
  RotateCcw, 
  ArrowRight, 
  Star, 
  Trophy, 
  Layers, 
  Gamepad2, 
  Sparkles,
  Coins,
  Clock,
  Volume2,
  VolumeX,
  SlidersHorizontal,
  Flag,
  Lock
} from 'lucide-react';
import { GameState, GameStats, LevelData, TouchButtonSize, CharacterConfig } from '../types/game';
import { checkLevelUnlockStatus, MAX_POSSIBLE_ACORNS } from '../game/acorns';
import { TitleScreen } from './TitleScreen';
import { BarnabyLogo } from './BarnabyLogo';

interface GameOverlayProps {
  gameState: GameState;
  stats: GameStats;
  currentLevel: LevelData;
  isLastLevel: boolean;
  soundEnabled: boolean;
  dpadSize?: TouchButtonSize;
  touchOpacity?: number;
  characterConfig?: CharacterConfig;
  totalLevelsCount?: number;
  onStartGame: () => void;
  onResume: () => void;
  onRestart: () => void;
  onRestartFromBeginning?: () => void;
  onNextLevel: () => void;
  onOpenLevelSelect: () => void;
  onOpenHelp: () => void;
  onOpenEditor?: () => void;
  onOpenCharacterSelect?: () => void;
  onOpenEnemyGallery?: () => void;
  onToggleSound: () => void;
  onSetDpadSize?: (size: TouchButtonSize) => void;
  onSetTouchOpacity?: (opacity: number) => void;
}

export const GameOverlay: React.FC<GameOverlayProps> = ({
  gameState,
  stats,
  currentLevel,
  isLastLevel,
  soundEnabled,
  dpadSize = 'normal',
  touchOpacity = 0.75,
  characterConfig,
  totalLevelsCount = 60,
  onStartGame,
  onResume,
  onRestart,
  onRestartFromBeginning,
  onNextLevel,
  onOpenLevelSelect,
  onOpenHelp,
  onOpenEditor,
  onOpenCharacterSelect,
  onOpenEnemyGallery,
  onToggleSound,
  onSetDpadSize,
  onSetTouchOpacity
}) => {
  if (gameState === 'PLAYING') return null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const ms = Math.floor((secs % 1) * 10);
    return `${m}:${s.toString().padStart(2, '0')}.${ms}`;
  };

  const starsEarned = stats.levelStars[currentLevel.id] || 1;

  return (
    <div id="game-state-overlay" className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm select-none">
      {/* 1. START MENU: Full Featured Barnaby Title Screen */}
      {gameState === 'MENU' && (
        <TitleScreen
          stats={stats}
          characterConfig={characterConfig}
          totalLevelsCount={totalLevelsCount}
          soundEnabled={soundEnabled}
          onStartGame={onStartGame}
          onOpenLevelSelect={onOpenLevelSelect}
          onOpenHelp={onOpenHelp}
          onOpenCharacterSelect={onOpenCharacterSelect}
          onOpenEditor={onOpenEditor}
          onOpenEnemyGallery={onOpenEnemyGallery}
          onToggleSound={onToggleSound}
        />
      )}

      {/* 2. PAUSE MENU */}
      {gameState === 'PAUSED' && (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-sm w-full p-6 shadow-2xl text-center text-white flex flex-col items-center">
          <div className="mb-2">
            <BarnabyLogo size="sm" showSubtitle={false} animated={false} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-1 text-slate-100">Game Paused</h2>
          <p className="text-xs text-slate-400 mb-6">{currentLevel.title}</p>

          <div className="w-full flex flex-col gap-2.5">
            <button
              id="btn-resume"
              onClick={onResume}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <Play size={18} fill="currentColor" />
              <span>Resume Game</span>
            </button>

            {stats.hasActiveCheckpoint ? (
              <>
                <button
                  id="btn-pause-checkpoint"
                  onClick={onRestart}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all border border-emerald-400/40"
                >
                  <Flag size={16} className="text-emerald-200 fill-emerald-200" />
                  <span>Restart at Checkpoint</span>
                </button>

                <button
                  id="btn-pause-restart-beginning"
                  onClick={onRestartFromBeginning || onRestart}
                  className="w-full py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCcw size={14} />
                  <span>Restart from Beginning</span>
                </button>
              </>
            ) : (
              <button
                id="btn-pause-restart"
                onClick={onRestart}
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw size={16} />
                <span>Restart Level</span>
              </button>
            )}

            <button
              id="btn-pause-levels"
              onClick={onOpenLevelSelect}
              className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Layers size={16} />
              <span>Select Level</span>
            </button>

            {onOpenCharacterSelect && (
              <button
                id="btn-pause-characters"
                onClick={onOpenCharacterSelect}
                className="w-full py-2.5 px-4 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 hover:text-white font-semibold text-sm rounded-xl border border-emerald-600/40 flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles size={16} className="text-emerald-400" />
                <span>Change Character</span>
              </button>
            )}

            {onOpenEnemyGallery && (
              <button
                id="btn-pause-enemy-gallery"
                onClick={onOpenEnemyGallery}
                className="w-full py-2.5 px-4 bg-amber-950/40 hover:bg-amber-900/50 text-amber-200 hover:text-white font-semibold text-sm rounded-xl border border-amber-600/40 flex items-center justify-between gap-2 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>🐾</span>
                  <span>Critter Codex</span>
                </div>
                <span className="text-xs text-amber-300 font-mono bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  {stats.totalEnemiesDefeated || 0} Defeated
                </span>
              </button>
            )}

            <button
              id="btn-pause-sound"
              onClick={onToggleSound}
              className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} className="text-rose-400" />}
              <span>{soundEnabled ? 'Mute Audio' : 'Unmute Audio'}</span>
            </button>

            {/* Quick Control Options & Translucency */}
            <div className="w-full bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 flex flex-col gap-2.5 text-xs text-left mt-1">
              {/* Button Size */}
              {onSetDpadSize && (
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                    <span>Button Size:</span>
                    <span className="text-cyan-400 font-bold uppercase">{dpadSize}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['normal', 'large', 'xl'] as const).map(sz => (
                      <button
                        key={sz}
                        id={`btn-pause-size-${sz}`}
                        onClick={() => onSetDpadSize(sz)}
                        className={`py-1.5 px-2 rounded-lg font-bold text-xs capitalize transition-all ${
                          (dpadSize || 'normal') === sz
                            ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30 border border-cyan-400/50'
                            : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/40'
                        }`}
                      >
                        {sz === 'xl' ? 'Extra L' : sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Translucency Slider & Presets */}
              {onSetTouchOpacity && (
                <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-700/60">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                    <span>Translucency:</span>
                    <span className="text-cyan-400 font-bold font-mono">
                      {Math.round((1 - touchOpacity) * 100)}% ({Math.round(touchOpacity * 100)}% visible)
                    </span>
                  </div>
                  <input
                    id="slider-pause-opacity"
                    type="range"
                    min="0.2"
                    max="1.0"
                    step="0.05"
                    value={touchOpacity}
                    onChange={(e) => onSetTouchOpacity(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { label: 'Ghost', val: 0.3 },
                      { label: 'Trans', val: 0.5 },
                      { label: 'Mid', val: 0.75 },
                      { label: 'Solid', val: 1.0 }
                    ].map(p => (
                      <button
                        key={p.label}
                        onClick={() => onSetTouchOpacity(p.val)}
                        className={`py-1 px-1 rounded text-[10px] font-bold transition-all border ${
                          Math.abs(touchOpacity - p.val) < 0.08
                            ? 'bg-cyan-600 text-white border-cyan-400'
                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Open full modal */}
              <button
                id="btn-pause-more-controls"
                onClick={onOpenHelp}
                className="w-full py-2 bg-slate-700/60 hover:bg-slate-700 text-cyan-300 hover:text-cyan-200 font-bold rounded-lg border border-slate-600/60 flex items-center justify-center gap-1.5 text-xs transition-colors mt-0.5"
              >
                <SlidersHorizontal size={13} />
                <span>Full Control Options & Guide</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. LEVEL COMPLETE */}
      {gameState === 'LEVEL_COMPLETE' && (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center text-white flex flex-col items-center animate-in zoom-in-95 duration-200">
          <div className="w-14 h-14 bg-amber-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center text-amber-400 mb-3">
            <Trophy size={32} />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white mb-1">Level Cleared!</h2>
          <p className="text-xs text-amber-300/80 mb-4">{currentLevel.title}</p>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3].map((starIdx) => (
              <Star
                key={starIdx}
                size={32}
                className={`transition-all duration-300 ${
                  starIdx <= starsEarned
                    ? 'text-amber-400 fill-amber-400 scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                    : 'text-slate-700 fill-slate-800'
                }`}
              />
            ))}
          </div>

          {/* Golden Acorns Found In This Stage */}
          <div className="w-full bg-amber-950/40 border border-amber-500/40 rounded-xl p-3 mb-4 flex items-center justify-between">
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Golden Acorns Found</span>
              <span className="text-xs text-slate-300">
                {stats.acorns || 0} of 3 collected ({stats.totalLevelAcorns || 0} banked)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((acornNum) => {
                const earned = acornNum <= (stats.acorns || 0);
                return (
                  <div
                    key={acornNum}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg border transition-all ${
                      earned
                        ? 'bg-amber-500/30 border-amber-400 text-amber-300 shadow-md shadow-amber-500/20 scale-105'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-600 grayscale opacity-40'
                    }`}
                    title={earned ? 'Golden Acorn Acquired!' : 'Missed Acorn'}
                  >
                    🌰
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Breakdown */}
          <div className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 mb-5 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 flex items-center gap-1 mb-1">
                <Clock size={12} /> Time
              </span>
              <span className="font-mono font-bold text-slate-200 text-sm">
                {formatTime(stats.time)}
              </span>
            </div>

            <div className="flex flex-col items-center border-x border-slate-700/50 px-2">
              <span className="text-slate-400 flex items-center gap-1 mb-1">
                <Coins size={12} className="text-yellow-400" /> Items
              </span>
              <span className="font-mono font-bold text-yellow-300 text-sm">
                {stats.coins + stats.gems}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-slate-400 flex items-center gap-1 mb-1">
                <Sparkles size={12} className="text-purple-400" /> Score
              </span>
              <span className="font-mono font-bold text-amber-300 text-sm">
                {stats.score.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2.5">
            {!isLastLevel ? (
              (() => {
                const nextLevelId = currentLevel.id + 1;
                const totalAcorns = stats.totalLevelAcorns || (Object.values(stats.levelAcorns || {}) as number[]).reduce((a: number, b: number) => a + (b || 0), 0);
                const nextStatus = checkLevelUnlockStatus(nextLevelId, totalAcorns, stats.highestClearedLevelId || 0, false);
                const isNextUnlocked = nextStatus.unlocked;

                if (isNextUnlocked) {
                  return (
                    <button
                      id="btn-next-level"
                      onClick={onNextLevel}
                      className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Next Level</span>
                      <ArrowRight size={18} />
                    </button>
                  );
                } else {
                  return (
                    <div className="flex flex-col gap-2">
                      <div className="py-2.5 px-3 bg-amber-950/70 border border-amber-500/50 rounded-xl text-amber-300 text-xs flex items-center justify-center gap-2 font-semibold">
                        <Lock size={14} className="text-amber-400 shrink-0" />
                        <span>Next Stage Locked: Need {nextStatus.requiredAcorns} 🌰 Acorns (Have {totalAcorns})</span>
                      </div>
                      <button
                        onClick={onRestart}
                        className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                      >
                        <RotateCcw size={14} />
                        <span>Replay to Collect Missing Acorns ({stats.acorns || 0}/3)</span>
                      </button>
                    </div>
                  );
                }
              })()
            ) : (
              <button
                id="btn-claim-victory"
                onClick={onNextLevel}
                className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-500 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg shadow-amber-600/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>View Victory Finale!</span>
                <Trophy size={18} />
              </button>
            )}

            <div className="grid grid-cols-2 gap-2.5">
              <button
                id="btn-replay-level"
                onClick={onRestart}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw size={16} />
                <span>Replay</span>
              </button>

              <button
                id="btn-complete-levels"
                onClick={onOpenLevelSelect}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Layers size={16} />
                <span>All Levels</span>
              </button>
            </div>

            {onOpenEnemyGallery && (
              <button
                id="btn-complete-enemy-gallery"
                onClick={onOpenEnemyGallery}
                className="w-full py-2 px-4 bg-amber-950/40 hover:bg-amber-900/50 text-amber-200 hover:text-white font-semibold text-xs rounded-xl border border-amber-600/40 flex items-center justify-between gap-2 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>🐾</span>
                  <span>Critter Codex</span>
                </div>
                <span className="text-xs text-amber-300 font-mono bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  {stats.totalEnemiesDefeated || 0} Defeated
                </span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 4. GAME OVER */}
      {gameState === 'GAME_OVER' && (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-sm w-full p-6 sm:p-8 shadow-2xl text-center text-white flex flex-col items-center">
          <div className="w-14 h-14 bg-rose-500/20 border border-rose-500/30 rounded-2xl flex items-center justify-center text-rose-400 mb-3">
            <RotateCcw size={30} />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white mb-1">Game Over</h2>
          <p className="text-xs text-slate-400 mb-6">Don't give up! Timing and jump precision are key.</p>

          <div className="w-full flex flex-col gap-2.5">
            {stats.hasActiveCheckpoint ? (
              <>
                <button
                  id="btn-retry-checkpoint"
                  onClick={onRestart}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all border border-emerald-400/40"
                >
                  <Flag size={18} className="text-emerald-200 fill-emerald-200" />
                  <span>Continue from Checkpoint</span>
                </button>

                <button
                  id="btn-retry-beginning"
                  onClick={onRestartFromBeginning || onRestart}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCcw size={15} />
                  <span>Restart from Beginning</span>
                </button>
              </>
            ) : (
              <button
                id="btn-retry-game-over"
                onClick={onRestart}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all"
              >
                <RotateCcw size={18} />
                <span>Try Again</span>
              </button>
            )}

            <button
              id="btn-over-level-select"
              onClick={onOpenLevelSelect}
              className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Layers size={16} />
              <span>Select Level</span>
            </button>

            {onOpenEnemyGallery && (
              <button
                id="btn-over-enemy-gallery"
                onClick={onOpenEnemyGallery}
                className="w-full py-2.5 px-4 bg-amber-950/40 hover:bg-amber-900/50 text-amber-200 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-amber-600/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>🐾 Critter Codex & Bestiary ({stats.totalEnemiesDefeated || 0} Defeated)</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 5. VICTORY FINALE */}
      {gameState === 'VICTORY' && (
        <div className="bg-slate-900 border border-amber-500/50 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center text-white flex flex-col items-center animate-in zoom-in-95 duration-300">
          <div className="mb-2">
            <BarnabyLogo size="md" showSubtitle={true} animated={true} />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2 mt-2">
            Solar Quest Mastered!
          </h2>
          <p className="text-sm text-amber-300/90 mb-5 max-w-xs leading-relaxed">
            Incredible! You guided Barnaby through all {totalLevelsCount} challenging levels across the skies, volcanoes, grottos, and deep space starships!
          </p>

          {/* Grand Star & Acorn Tally */}
          <div className="w-full bg-slate-800/80 border border-slate-700 rounded-xl p-4 mb-6 grid grid-cols-4 gap-2 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] text-slate-400 mb-1">Stars</span>
              <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                <Star size={14} fill="currentColor" />
                <span>
                  {(Object.values(stats.levelStars) as number[]).reduce((a: number, b: number) => a + b, 0)}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center border-x border-slate-700/60 px-1">
              <span className="text-[11px] text-slate-400 mb-1">Acorns</span>
              <div className="flex items-center gap-1 text-amber-300 font-bold text-sm">
                <span>🌰</span>
                <span>
                  {stats.totalLevelAcorns || 0}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center border-r border-slate-700/60 px-1">
              <span className="text-[11px] text-slate-400 mb-1">Defeated</span>
              <div className="flex items-center gap-1 text-red-400 font-bold text-sm">
                <span>🐾</span>
                <span>
                  {stats.totalEnemiesDefeated || 0}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[11px] text-slate-400 mb-1">Deaths</span>
              <span className="font-mono font-bold text-slate-200 text-sm">
                {stats.deaths}
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2.5">
            <button
              id="btn-play-again"
              onClick={() => onStartGame()}
              className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
            >
              <RotateCcw size={18} />
              <span>Play From Beginning</span>
            </button>

            {onOpenEnemyGallery && (
              <button
                id="btn-victory-enemy-gallery"
                onClick={onOpenEnemyGallery}
                className="w-full py-2.5 px-4 bg-amber-950/40 hover:bg-amber-900/50 text-amber-200 hover:text-white font-semibold text-sm rounded-xl border border-amber-600/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>🐾 View Critter Codex & Bestiary</span>
              </button>
            )}

            <button
              id="btn-victory-levels"
              onClick={onOpenLevelSelect}
              className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Layers size={16} />
              <span>Browse All Levels</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
