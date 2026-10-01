import React from 'react';
import { 
  Heart, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Pause, 
  Play, 
  Maximize, 
  Layers, 
  HelpCircle,
  Sparkles,
  Coins,
  Rocket,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowDownToLine,
  SlidersHorizontal,
  Zap,
  Shield
} from 'lucide-react';
import { GameStats, LevelData, LaunchDirection, TouchButtonSize } from '../types/game';

interface GameHUDProps {
  stats: GameStats;
  currentLevel: LevelData;
  isPaused: boolean;
  soundEnabled: boolean;
  musicEnabled: boolean;
  dpadSize?: TouchButtonSize;
  onToggleSound: () => void;
  onToggleMusic: () => void;
  onRestart: () => void;
  onTogglePause: () => void;
  onOpenLevelSelect: () => void;
  onOpenHelp: () => void;
  onToggleFullscreen: () => void;
  onToggleDpadSize?: () => void;
  onLaunchJetpack?: (direction: LaunchDirection) => void;
  onShootBlaster?: () => void;
  onOpenCharacterSelect?: () => void;
}

export const GameHUD: React.FC<GameHUDProps> = ({
  stats,
  currentLevel,
  isPaused,
  soundEnabled,
  dpadSize = 'normal',
  onToggleSound,
  onRestart,
  onTogglePause,
  onOpenLevelSelect,
  onOpenHelp,
  onToggleFullscreen,
  onToggleDpadSize,
  onLaunchJetpack,
  onShootBlaster,
  onOpenCharacterSelect
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const ms = Math.floor((secs % 1) * 10);
    return `${m}:${s.toString().padStart(2, '0')}.${ms}`;
  };

  return (
    <div 
      id="game-hud" 
      style={{
        paddingTop: 'max(0.5rem, env(safe-area-inset-top, 0.5rem))',
        paddingLeft: 'max(0.5rem, env(safe-area-inset-left, 0.5rem))',
        paddingRight: 'max(0.5rem, env(safe-area-inset-right, 0.5rem))'
      }}
      className="absolute top-0 left-0 right-0 pointer-events-none flex justify-between items-start select-none z-10 max-w-full overflow-hidden"
    >
      {/* Left HUD: Level Info, Lives, Stats & Active Powerup Status */}
      <div className="flex flex-col gap-1.5 pointer-events-auto max-w-[62%] sm:max-w-none">
        {/* Compact Unified Stats Card */}
        <div className="bg-slate-900/85 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-700/60 shadow-lg text-white flex flex-col gap-1">
          {/* Top Row: Level Title + Hearts */}
          <div className="flex items-center justify-between gap-1.5 sm:gap-2">
            <span 
              className="font-bold text-xs sm:text-sm tracking-wide text-amber-400 truncate max-w-[100px] sm:max-w-[200px]" 
              title={currentLevel.title}
            >
              {currentLevel.title}
            </span>
            <div className="flex items-center gap-0.5 shrink-0">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  size={12}
                  className={i < stats.lives ? "text-rose-500 fill-rose-500" : "text-slate-600 fill-slate-800"}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row: Score, Coins, Gems, Time */}
          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium text-slate-200 pt-0.5 border-t border-slate-800/80">
            <div className="flex items-center gap-1 font-mono text-amber-300 shrink-0">
              <span className="text-slate-400 font-sans hidden sm:inline text-[10px]">SCORE:</span>
              <span className="font-bold">{stats.score.toLocaleString()}</span>
            </div>

            <div className="flex items-center gap-0.5 text-yellow-400 shrink-0">
              <Coins size={11} />
              <span>{stats.coins}</span>
            </div>

            <div className="flex items-center gap-0.5 text-purple-400 shrink-0">
              <Sparkles size={11} />
              <span>{stats.gems}</span>
            </div>

            <div className="font-mono text-emerald-400 ml-auto text-[10px] sm:text-xs shrink-0">
              {formatTime(stats.time)}
            </div>
          </div>
        </div>

        {/* Jetpack Fuel Gauge Bar - Compact & Mobile Optimized */}
        {stats.hasJetpack && (
          <div 
            id="hud-jetpack-gauge" 
            className="flex items-center gap-1.5 sm:gap-2.5 bg-slate-900/85 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-lg border border-cyan-500/40 shadow-lg text-xs animate-in fade-in duration-200 max-w-full"
          >
            <div className="flex items-center gap-1 text-cyan-400 font-bold shrink-0">
              <Rocket size={12} className={(stats.jetpackFuel ?? 100) > 0 ? "animate-pulse text-cyan-400" : "text-slate-500"} />
              <span className="tracking-wide text-[10px] sm:text-[11px] font-mono">FUEL:</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-14 sm:w-20 md:w-28 h-2 sm:h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/80 relative shrink-0">
              <div 
                className={`h-full transition-all duration-75 rounded-full ${
                  (stats.jetpackFuel ?? 100) > 50 
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-400' 
                    : (stats.jetpackFuel ?? 100) > 20 
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400' 
                    : 'bg-gradient-to-r from-rose-600 to-red-500 animate-pulse'
                }`}
                style={{ width: `${Math.max(0, Math.min(100, stats.jetpackFuel ?? 100))}%` }}
              />
            </div>

            {/* Fuel Percentage */}
            <div className="flex items-center font-mono font-bold text-[10px] sm:text-[11px] shrink-0">
              <span className={
                (stats.jetpackFuel ?? 100) > 50 
                  ? 'text-cyan-300' 
                  : (stats.jetpackFuel ?? 100) > 20 
                  ? 'text-amber-300' 
                  : 'text-rose-400'
              }>
                {Math.round(stats.jetpackFuel ?? 100)}%
              </span>
            </div>

            {/* Desktop Only: Unmount & Launch Directional Arrows */}
            <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-slate-700/80 shrink-0">
              <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider">
                Launch:
              </span>
              <div className="flex items-center gap-0.5 bg-slate-950/80 p-0.5 rounded-lg border border-slate-700/60 shadow-inner">
                <button
                  id="btn-launch-left"
                  onClick={() => onLaunchJetpack?.('left')}
                  className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500/25 active:bg-cyan-500 text-slate-300 hover:text-cyan-300 active:text-slate-950 rounded transition-colors"
                  title="Unmount & Launch Left (Q or X+Left)"
                >
                  <ArrowLeft size={12} />
                </button>
                <button
                  id="btn-launch-upleft"
                  onClick={() => onLaunchJetpack?.('up-left')}
                  className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500/25 active:bg-cyan-500 text-slate-300 hover:text-cyan-300 active:text-slate-950 rounded transition-colors"
                  title="Unmount & Launch Up-Left (Q+Up)"
                >
                  <ArrowUpLeft size={12} />
                </button>
                <button
                  id="btn-launch-up"
                  onClick={() => onLaunchJetpack?.('up')}
                  className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500/25 active:bg-cyan-500 text-slate-300 hover:text-cyan-300 active:text-slate-950 rounded transition-colors"
                  title="Unmount & Launch Up (W+X or Up+X)"
                >
                  <ArrowUp size={12} />
                </button>
                <button
                  id="btn-launch-upright"
                  onClick={() => onLaunchJetpack?.('up-right')}
                  className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500/25 active:bg-cyan-500 text-slate-300 hover:text-cyan-300 active:text-slate-950 rounded transition-colors"
                  title="Unmount & Launch Up-Right (E+Up)"
                >
                  <ArrowUpRight size={12} />
                </button>
                <button
                  id="btn-launch-right"
                  onClick={() => onLaunchJetpack?.('right')}
                  className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500/25 active:bg-cyan-500 text-slate-300 hover:text-cyan-300 active:text-slate-950 rounded transition-colors"
                  title="Unmount & Launch Right (E or X+Right)"
                >
                  <ArrowRight size={12} />
                </button>
                <button
                  id="btn-launch-down"
                  onClick={() => onLaunchJetpack?.('down')}
                  className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500/25 active:bg-cyan-500 text-slate-300 hover:text-cyan-300 active:text-slate-950 rounded transition-colors"
                  title="Unmount & Launch Down (S+X or Down+X)"
                >
                  <ArrowDown size={12} />
                </button>
              </div>

              {/* Take Off Button */}
              <button
                id="btn-take-off-jetpack"
                onClick={() => onLaunchJetpack?.('drop')}
                className="px-1.5 py-0.5 bg-amber-500/20 hover:bg-amber-500/35 active:bg-amber-500 text-amber-300 hover:text-amber-100 active:text-slate-950 rounded border border-amber-500/40 text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 transition-all"
                title="Take Off Jetpack / Drop at feet (Z or C)"
              >
                <ArrowDownToLine size={11} />
                <span>Drop</span>
              </button>
            </div>
          </div>
        )}

        {/* Plasma Blaster Weapon Status & Ammo Gauge - Compact & Mobile Optimized */}
        {stats.hasBlaster && (
          <div 
            id="hud-blaster-gauge" 
            className="flex items-center gap-1.5 sm:gap-2 bg-slate-900/85 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-lg border border-sky-500/50 shadow-lg text-xs animate-in fade-in duration-200 max-w-full"
          >
            <div className="flex items-center gap-1 text-sky-400 font-bold shrink-0">
              <Zap size={12} className={(stats.blasterAmmo ?? 0) > 0 ? "text-sky-400 animate-pulse" : "text-slate-500"} />
              <span className="tracking-wide text-[10px] sm:text-[11px] font-mono">AMMO:</span>
            </div>

            {/* Ammo Progress Bar */}
            <div className="w-12 sm:w-16 md:w-20 h-2 sm:h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/80 relative shrink-0">
              <div 
                className={`h-full transition-all duration-75 rounded-full ${
                  (stats.blasterAmmo ?? 0) > 10
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-300'
                    : (stats.blasterAmmo ?? 0) > 0
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 animate-pulse'
                    : 'bg-slate-700'
                }`}
                style={{ width: `${Math.max(0, Math.min(100, (((stats.blasterAmmo ?? 0) / (stats.maxBlasterAmmo ?? 30)) * 100)))}%` }}
              />
            </div>

            {/* Ammo Number */}
            <div className="flex items-center gap-0.5 font-mono font-bold text-[10px] sm:text-[11px] shrink-0">
              <span className={(stats.blasterAmmo ?? 0) > 0 ? "text-sky-300" : "text-rose-400"}>
                {stats.blasterAmmo ?? 0}
              </span>
              <span className="text-slate-500 text-[8px] sm:text-[9px]">/{stats.maxBlasterAmmo ?? 30}</span>
            </div>

            {/* Quick Fire Button */}
            <button
              id="btn-hud-fire-blaster"
              onClick={onShootBlaster}
              disabled={(stats.blasterAmmo ?? 0) <= 0}
              className="px-2 py-0.5 bg-sky-500/25 hover:bg-sky-500 active:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-sky-300 hover:text-white active:text-slate-950 rounded border border-sky-400/50 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 shrink-0 ml-auto"
              title="Shoot Plasma Blaster (F or J or Click)"
            >
              FIRE
            </button>
          </div>
        )}

        {/* Bubble Shield Status Badge */}
        {stats.hasShield && (
          <div 
            id="hud-shield-badge" 
            className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-lg border border-cyan-400/60 shadow-lg text-xs animate-in fade-in duration-200"
          >
            <Shield size={13} className="text-cyan-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold text-cyan-300 tracking-wide">
              BUBBLE SHIELD
            </span>
            <span className="text-[9px] text-cyan-400/90 bg-cyan-950/70 px-1 py-0.5 rounded border border-cyan-500/40 font-mono">
              GLIDE ON [↑]
            </span>
          </div>
        )}
      </div>

      {/* Right HUD: Compact Quick Action Toolbar */}
      <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-700/60 shadow-lg pointer-events-auto shrink-0">
        {onToggleDpadSize && (
          <button
            id="btn-hud-dpad-size"
            onClick={onToggleDpadSize}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-cyan-400 active:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title={`Cycle Button Size (Current: ${dpadSize.toUpperCase()})`}
          >
            <SlidersHorizontal size={14} className="text-cyan-400" />
          </button>
        )}

        {onOpenCharacterSelect && (
          <button
            id="btn-hud-character"
            onClick={onOpenCharacterSelect}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-emerald-400 active:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Character Locker (Bird, Frog, Axolotl, Capybara)"
          >
            <Sparkles size={14} className="text-emerald-400" />
          </button>
        )}

        <button
          id="btn-level-select"
          onClick={onOpenLevelSelect}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Level Select"
        >
          <Layers size={14} />
        </button>

        <button
          id="btn-restart"
          onClick={onRestart}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Restart Level (R)"
        >
          <RotateCcw size={14} />
        </button>

        <button
          id="btn-sound"
          onClick={onToggleSound}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title={soundEnabled ? "Mute Sound" : "Enable Sound"}
        >
          {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} className="text-rose-400" />}
        </button>

        <button
          id="btn-pause"
          onClick={onTogglePause}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Pause Game (P / Esc)"
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
        </button>

        <button
          id="btn-help"
          onClick={onOpenHelp}
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Controls & Help"
        >
          <HelpCircle size={14} />
        </button>

        <button
          id="btn-fullscreen"
          onClick={onToggleFullscreen}
          className="w-7 h-7 sm:w-8 sm:h-8 hidden md:flex items-center justify-center text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Fullscreen"
        >
          <Maximize size={14} />
        </button>
      </div>
    </div>
  );
};
