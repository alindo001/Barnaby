import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, SlidersHorizontal, Rocket, Settings, Zap } from 'lucide-react';
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
  // Size styling maps
  const sizeMap = {
    normal: {
      btnClass: 'w-14 h-14 sm:w-16 sm:h-16',
      iconSize: 28,
      gapClass: 'gap-3',
      jumpClass: 'w-16 h-16 sm:w-20 sm:h-20',
      jumpIconSize: 28,
      badgeText: 'Normal'
    },
    large: {
      btnClass: 'w-20 h-20 sm:w-22 sm:h-22',
      iconSize: 38,
      gapClass: 'gap-4',
      jumpClass: 'w-20 h-20 sm:w-24 sm:h-24',
      jumpIconSize: 36,
      badgeText: 'Large'
    },
    xl: {
      btnClass: 'w-24 h-24 sm:w-28 sm:h-28',
      iconSize: 48,
      gapClass: 'gap-5',
      jumpClass: 'w-24 h-24 sm:w-28 sm:h-28',
      jumpIconSize: 44,
      badgeText: 'Extra Large'
    }
  };

  const currentSize = sizeMap[dpadSize] || sizeMap.normal;

  return (
    <div id="touch-controls-overlay" className="absolute bottom-4 left-0 right-0 px-4 sm:px-6 flex justify-between items-end pointer-events-none select-none z-20">
      {/* Left/Right Directional Pad + Size / Translucency Setting Bar */}
      <div className="flex flex-col items-start gap-1.5 pointer-events-auto">
        <div className="flex items-center gap-1 mb-0.5">
          {onToggleDpadSize && (
            <button
              id="btn-toggle-dpad-size"
              onClick={onToggleDpadSize}
              className="flex items-center gap-1 px-2 py-1 bg-slate-900/85 hover:bg-slate-800 active:bg-cyan-500/30 text-slate-300 hover:text-white rounded-lg border border-slate-700/70 shadow-lg text-[10px] font-bold tracking-wider uppercase transition-all backdrop-blur-md active:scale-95"
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
              className="flex items-center gap-1 px-2 py-1 bg-slate-900/85 hover:bg-slate-800 active:bg-cyan-500/30 text-slate-300 hover:text-white rounded-lg border border-slate-700/70 shadow-lg text-[10px] font-bold tracking-wider uppercase transition-all backdrop-blur-md active:scale-95"
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
            className={`${currentSize.btnClass} bg-slate-900/70 active:bg-slate-700/90 backdrop-blur-md rounded-2xl border border-slate-600/60 flex items-center justify-center text-white shadow-2xl active:scale-95 transition-all`}
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
            className={`${currentSize.btnClass} bg-slate-900/70 active:bg-slate-700/90 backdrop-blur-md rounded-2xl border border-slate-600/60 flex items-center justify-center text-white shadow-2xl active:scale-95 transition-all`}
            title="Move Right"
          >
            <ArrowRight size={currentSize.iconSize} />
          </button>
        </div>
      </div>

      {/* Right Controls: Jetpack Unmount Action, Blaster Fire & Jump / Fly Button */}
      <div className="flex items-end gap-2.5 sm:gap-3 pointer-events-auto">
        {hasJetpack && onLaunchJetpack && (
          <button
            id="btn-touch-unmount-jetpack"
            onClick={() => onLaunchJetpack('drop')}
            style={{ opacity: touchOpacity }}
            className="w-13 h-13 sm:w-14 sm:h-14 p-1.5 bg-amber-500/25 active:bg-amber-500 border border-amber-400/50 hover:border-amber-400 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-amber-200 active:text-slate-950 shadow-xl active:scale-95 transition-all"
            title="Unmount / Take Off Jetpack"
          >
            <Rocket size={18} className="rotate-45" />
            <span className="text-[8px] font-bold uppercase tracking-wider mt-0.5">
              Take Off
            </span>
          </button>
        )}

        {hasBlaster && onShootBlaster && (
          <button
            id="btn-touch-fire-blaster"
            onTouchStart={(e) => { e.preventDefault(); onShootBlaster(); }}
            onMouseDown={() => onShootBlaster()}
            style={{ opacity: touchOpacity }}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-sky-600 to-cyan-500 active:from-cyan-400 active:to-sky-300 border border-sky-300/70 shadow-lg shadow-sky-500/25 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white active:text-slate-950 active:scale-95 transition-all"
            title="Shoot Plasma Blaster"
          >
            <Zap size={22} className="fill-white" />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">
              FIRE
            </span>
          </button>
        )}

        <button
          id="btn-touch-jump"
          onTouchStart={(e) => { e.preventDefault(); onInput('jumpPressed', true); }}
          onTouchEnd={(e) => { e.preventDefault(); onInput('jumpReleased', true); }}
          onMouseDown={() => onInput('jumpPressed', true)}
          onMouseUp={() => onInput('jumpReleased', true)}
          onMouseLeave={() => onInput('jumpReleased', true)}
          style={{ opacity: touchOpacity }}
          className={`${currentSize.jumpClass} ${
            hasJetpack 
              ? 'bg-gradient-to-tr from-cyan-600 to-blue-500 border-cyan-300/60 shadow-cyan-500/20' 
              : 'bg-blue-600/85 border-blue-400/60'
          } active:scale-95 backdrop-blur-md rounded-2xl border flex flex-col items-center justify-center text-white shadow-2xl transition-all`}
          title="Jump / Fly"
        >
          <ArrowUp size={currentSize.jumpIconSize} />
          <span className="text-[9px] font-bold tracking-wider uppercase opacity-90">
            {hasJetpack ? 'JUMP / FLY' : 'JUMP'}
          </span>
        </button>
      </div>
    </div>
  );
};
