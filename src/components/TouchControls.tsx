import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUp, 
  ArrowDown, 
  ArrowUpLeft, 
  ArrowUpRight, 
  ArrowDownToLine,
  SlidersHorizontal, 
  Rocket, 
  Settings, 
  Zap, 
  X 
} from 'lucide-react';
import { InputState, TouchButtonSize, LaunchDirection } from '../types/game';

interface TouchControlsProps {
  hasJetpack?: boolean;
  hasBlaster?: boolean;
  dpadSize?: TouchButtonSize;
  touchOpacity?: number;
  onToggleDpadSize?: () => void;
  onOpenControlOptions?: () => void;
  onLaunchJetpack?: (direction: LaunchDirection) => void;
  onShootBlaster?: () => void;
  onInput: (action: keyof InputState, value: boolean) => void;
}

export const TouchControls: React.FC<TouchControlsProps> = ({ 
  hasJetpack, 
  hasBlaster,
  dpadSize = 'normal',
  touchOpacity = 0.75,
  onToggleDpadSize,
  onOpenControlOptions,
  onLaunchJetpack,
  onShootBlaster,
  onInput 
}) => {
  const [showRocketDial, setShowRocketDial] = useState<boolean>(false);
  // Size styling maps with responsive scaling for small mobile screens
  const sizeMap = {
    normal: {
      btnClass: 'w-12 h-12 min-[380px]:w-14 min-[380px]:h-14 sm:w-16 sm:h-16',
      iconSize: 26,
      gapClass: 'gap-2 min-[380px]:gap-3',
      jumpClass: 'w-14 h-14 min-[380px]:w-16 min-[380px]:h-16 sm:w-20 sm:h-20',
      jumpIconSize: 26,
      badgeText: 'Normal'
    },
    large: {
      btnClass: 'w-16 h-16 min-[380px]:w-20 min-[380px]:h-20 sm:w-22 sm:h-22',
      iconSize: 34,
      gapClass: 'gap-2.5 min-[380px]:gap-4',
      jumpClass: 'w-16 h-16 min-[380px]:w-20 min-[380px]:h-20 sm:w-24 sm:h-24',
      jumpIconSize: 32,
      badgeText: 'Large'
    },
    xl: {
      btnClass: 'w-20 h-20 min-[380px]:w-24 min-[380px]:h-24 sm:w-28 sm:h-28',
      iconSize: 42,
      gapClass: 'gap-3 min-[380px]:gap-5',
      jumpClass: 'w-20 h-20 min-[380px]:w-24 min-[380px]:h-24 sm:w-28 sm:h-28',
      jumpIconSize: 40,
      badgeText: 'Extra Large'
    }
  };

  const currentSize = sizeMap[dpadSize] || sizeMap.normal;

  return (
    <div 
      id="touch-controls-overlay" 
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))',
        paddingLeft: 'max(0.75rem, env(safe-area-inset-left, 0.75rem))',
        paddingRight: 'max(0.75rem, env(safe-area-inset-right, 0.75rem))'
      }}
      className="absolute bottom-0 left-0 right-0 w-full flex justify-between items-end pointer-events-none select-none z-20"
    >
      {/* Left/Right Directional Pad + Size / Translucency Setting Bar */}
      <div className="flex flex-col items-start gap-1 pointer-events-auto shrink-0">
        <div className="flex items-center gap-1 mb-0.5">
          {onToggleDpadSize && (
            <button
              id="btn-toggle-dpad-size"
              onClick={onToggleDpadSize}
              className="flex items-center gap-1 px-2 py-0.5 sm:py-1 bg-slate-900/85 hover:bg-slate-800 active:bg-cyan-500/30 text-slate-300 hover:text-white rounded-lg border border-slate-700/70 shadow-lg text-[9px] min-[380px]:text-[10px] font-bold tracking-wider uppercase transition-all backdrop-blur-md active:scale-95 touch-manipulation"
              title="Click to cycle size: Normal -> Large -> Extra Large"
            >
              <SlidersHorizontal size={11} className="text-cyan-400" />
              <span>Size: <strong className="text-cyan-300">{currentSize.badgeText}</strong></span>
            </button>
          )}

          {onOpenControlOptions && (
            <button
              id="btn-open-touch-settings"
              onClick={onOpenControlOptions}
              className="flex items-center gap-1 px-2 py-0.5 sm:py-1 bg-slate-900/85 hover:bg-slate-800 active:bg-cyan-500/30 text-slate-300 hover:text-white rounded-lg border border-slate-700/70 shadow-lg text-[9px] min-[380px]:text-[10px] font-bold tracking-wider uppercase transition-all backdrop-blur-md active:scale-95 touch-manipulation"
              title={`Control Options (Size: ${currentSize.badgeText}, Translucency: ${Math.round((1 - touchOpacity) * 100)}%)`}
            >
              <Settings size={11} className="text-cyan-400" />
              <span className="hidden sm:inline">Options ({Math.round(touchOpacity * 100)}%)</span>
            </button>
          )}
        </div>

        <div className={`flex items-center ${currentSize.gapClass}`}>
          <button
            id="btn-touch-left"
            onTouchStart={(e) => { e.preventDefault(); onInput('left', true); }}
            onTouchEnd={(e) => { e.preventDefault(); onInput('left', false); }}
            onMouseDown={() => onInput('left', true)}
            onMouseUp={() => onInput('left', false)}
            style={{ opacity: touchOpacity }}
            className={`${currentSize.btnClass} bg-slate-900/70 active:bg-slate-700/90 backdrop-blur-md rounded-2xl border border-slate-600/60 flex items-center justify-center text-white shadow-2xl active:scale-95 transition-all touch-manipulation`}
            title="Move Left"
          >
            <ArrowLeft size={currentSize.iconSize} />
          </button>

          <button
            id="btn-touch-right"
            onTouchStart={(e) => { e.preventDefault(); onInput('right', true); }}
            onTouchEnd={(e) => { e.preventDefault(); onInput('right', false); }}
            onMouseDown={() => onInput('right', true)}
            onMouseUp={() => onInput('right', false)}
            style={{ opacity: touchOpacity }}
            className={`${currentSize.btnClass} bg-slate-900/70 active:bg-slate-700/90 backdrop-blur-md rounded-2xl border border-slate-600/60 flex items-center justify-center text-white shadow-2xl active:scale-95 transition-all touch-manipulation`}
            title="Move Right"
          >
            <ArrowRight size={currentSize.iconSize} />
          </button>
        </div>
      </div>

      {/* Directional Rocket Launch Dial for Touch/Mobile */}
      {hasJetpack && onLaunchJetpack && showRocketDial && (
        <div className="absolute bottom-20 sm:bottom-24 right-2 sm:right-6 bg-slate-900/95 border-2 border-cyan-400/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl flex flex-col items-center gap-1.5 z-50 pointer-events-auto animate-in zoom-in-95 duration-150">
          <div className="w-full flex items-center justify-between text-[10px] font-bold text-cyan-300 pb-1 border-b border-slate-700/80">
            <span className="flex items-center gap-1">
              <Rocket size={12} className="text-cyan-400 rotate-45" />
              ROCKET AIM & LAUNCH
            </span>
            <button 
              onClick={() => setShowRocketDial(false)}
              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
            >
              <X size={12} />
            </button>
          </div>

          {/* Directional 3x3 Pad */}
          <div className="grid grid-cols-3 gap-1.5 p-1">
            <button
              id="btn-touch-launch-upleft"
              onClick={() => { onLaunchJetpack('up-left'); setShowRocketDial(false); }}
              className="w-10 h-10 bg-cyan-600/30 hover:bg-cyan-500 active:bg-cyan-400 border border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-200 active:text-slate-950 transition-all active:scale-95 shadow-md"
              title="Launch Up-Left"
            >
              <ArrowUpLeft size={18} />
            </button>
            <button
              id="btn-touch-launch-up"
              onClick={() => { onLaunchJetpack('up'); setShowRocketDial(false); }}
              className="w-10 h-10 bg-cyan-600/30 hover:bg-cyan-500 active:bg-cyan-400 border border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-200 active:text-slate-950 transition-all active:scale-95 shadow-md"
              title="Launch Up"
            >
              <ArrowUp size={18} />
            </button>
            <button
              id="btn-touch-launch-upright"
              onClick={() => { onLaunchJetpack('up-right'); setShowRocketDial(false); }}
              className="w-10 h-10 bg-cyan-600/30 hover:bg-cyan-500 active:bg-cyan-400 border border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-200 active:text-slate-950 transition-all active:scale-95 shadow-md"
              title="Launch Up-Right"
            >
              <ArrowUpRight size={18} />
            </button>

            <button
              id="btn-touch-launch-left"
              onClick={() => { onLaunchJetpack('left'); setShowRocketDial(false); }}
              className="w-10 h-10 bg-cyan-600/30 hover:bg-cyan-500 active:bg-cyan-400 border border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-200 active:text-slate-950 transition-all active:scale-95 shadow-md"
              title="Launch Left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              id="btn-touch-launch-drop"
              onClick={() => { onLaunchJetpack('drop'); setShowRocketDial(false); }}
              className="w-10 h-10 bg-amber-500/30 hover:bg-amber-500 active:bg-amber-400 border border-amber-400/60 rounded-xl flex flex-col items-center justify-center text-amber-200 active:text-slate-950 transition-all active:scale-95 shadow-md text-[8px] font-bold"
              title="Drop / Unmount at feet"
            >
              <ArrowDownToLine size={14} />
              <span>DROP</span>
            </button>
            <button
              id="btn-touch-launch-right"
              onClick={() => { onLaunchJetpack('right'); setShowRocketDial(false); }}
              className="w-10 h-10 bg-cyan-600/30 hover:bg-cyan-500 active:bg-cyan-400 border border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-200 active:text-slate-950 transition-all active:scale-95 shadow-md"
              title="Launch Right"
            >
              <ArrowRight size={18} />
            </button>

            <div />
            <button
              id="btn-touch-launch-down"
              onClick={() => { onLaunchJetpack('down'); setShowRocketDial(false); }}
              className="w-10 h-10 bg-cyan-600/30 hover:bg-cyan-500 active:bg-cyan-400 border border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-200 active:text-slate-950 transition-all active:scale-95 shadow-md"
              title="Launch Down"
            >
              <ArrowDown size={18} />
            </button>
            <div />
          </div>
        </div>
      )}

      {/* Right Controls: Jetpack Unmount Action, Blaster Fire & Jump / Fly Button */}
      <div className="flex items-end gap-1.5 min-[380px]:gap-2.5 sm:gap-3 pointer-events-auto shrink-0">
        {hasJetpack && onLaunchJetpack && (
          <button
            id="btn-touch-toggle-rocket-dial"
            onClick={() => setShowRocketDial(prev => !prev)}
            style={{ opacity: touchOpacity }}
            className={`w-11 h-11 min-[380px]:w-13 min-[380px]:h-13 sm:w-14 sm:h-14 p-1 rounded-2xl flex flex-col items-center justify-center shadow-xl active:scale-95 transition-all touch-manipulation border ${
              showRocketDial
                ? 'bg-cyan-500 text-slate-950 border-cyan-300 ring-2 ring-cyan-400 shadow-cyan-500/40'
                : 'bg-amber-500/25 active:bg-amber-500 border border-amber-400/50 hover:border-amber-400 backdrop-blur-md text-amber-200 active:text-slate-950'
            }`}
            title="Directional Rocket Launch & Drop (Tap to aim in 6 directions)"
          >
            <Rocket size={16} className={showRocketDial ? "rotate-45 text-slate-950" : "rotate-45"} />
            <span className="text-[7px] min-[380px]:text-[8px] font-bold uppercase tracking-wider mt-0.5">
              {showRocketDial ? 'Close' : 'Launch'}
            </span>
          </button>
        )}

        {hasBlaster && onShootBlaster && (
          <button
            id="btn-touch-fire-blaster"
            onTouchStart={(e) => { e.preventDefault(); onShootBlaster(); }}
            onMouseDown={() => onShootBlaster()}
            style={{ opacity: touchOpacity }}
            className="w-12 h-12 min-[380px]:w-14 min-[380px]:h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-sky-600 to-cyan-500 active:from-cyan-400 active:to-sky-300 border border-sky-300/70 shadow-lg shadow-sky-500/25 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white active:text-slate-950 active:scale-95 transition-all touch-manipulation"
            title="Shoot Plasma Blaster"
          >
            <Zap size={20} className="fill-white" />
            <span className="text-[8px] min-[380px]:text-[9px] font-bold uppercase tracking-wider mt-0.5">
              FIRE
            </span>
          </button>
        )}

        <button
          id="btn-touch-jump"
          onTouchStart={(e) => { e.preventDefault(); onInput('jumpPressed', true); }}
          onTouchEnd={(e) => { e.preventDefault(); onInput('jumpReleased', true); }}
          onTouchCancel={(e) => { e.preventDefault(); onInput('jumpReleased', true); }}
          onMouseDown={() => onInput('jumpPressed', true)}
          onMouseUp={() => onInput('jumpReleased', true)}
          onMouseLeave={() => onInput('jumpReleased', true)}
          style={{ opacity: touchOpacity }}
          className={`${currentSize.jumpClass} ${
            hasJetpack 
              ? 'bg-gradient-to-tr from-cyan-600 to-blue-500 border-cyan-300/60 shadow-cyan-500/20' 
              : 'bg-blue-600/85 border-blue-400/60'
          } active:scale-95 backdrop-blur-md rounded-2xl border flex flex-col items-center justify-center text-white shadow-2xl transition-all touch-manipulation`}
          title="Jump / Fly"
        >
          <ArrowUp size={currentSize.jumpIconSize} />
          <span className="text-[8px] min-[380px]:text-[9px] font-bold tracking-wider uppercase opacity-90">
            {hasJetpack ? 'JUMP / FLY' : 'JUMP'}
          </span>
        </button>
      </div>
    </div>
  );
};
