import React, { useState } from 'react';
import { 
  X, 
  HelpCircle, 
  Keyboard, 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  ArrowUp, 
  ArrowLeft,
  ArrowRight,
  Rocket, 
  SlidersHorizontal,
  Eye,
  Maximize2,
  Check,
  Shield
} from 'lucide-react';
import { TouchButtonSize } from '../types/game';

interface ControlsHelpModalProps {
  onClose: () => void;
  dpadSize: TouchButtonSize;
  touchOpacity: number;
  collectibleStyle?: 'acorn' | 'feather';
  unlockAllLevels?: boolean;
  onSetDpadSize: (size: TouchButtonSize) => void;
  onSetTouchOpacity: (opacity: number) => void;
  onSetCollectibleStyle?: (style: 'acorn' | 'feather') => void;
  onToggleUnlockAll?: () => void;
}

export const ControlsHelpModal: React.FC<ControlsHelpModalProps> = ({ 
  onClose,
  dpadSize,
  touchOpacity,
  collectibleStyle = 'acorn',
  unlockAllLevels = false,
  onSetDpadSize,
  onSetTouchOpacity,
  onSetCollectibleStyle,
  onToggleUnlockAll
}) => {
  const [activeTab, setActiveTab] = useState<'settings' | 'guide'>('settings');

  // Preview sizing maps
  const previewSizeMap = {
    normal: {
      btnClass: 'w-12 h-12',
      iconSize: 22,
      jumpClass: 'w-14 h-14',
      jumpIconSize: 22,
      label: 'Normal (Standard 56px)'
    },
    large: {
      btnClass: 'w-16 h-16',
      iconSize: 30,
      jumpClass: 'w-18 h-18',
      jumpIconSize: 28,
      label: 'Large (Comfortable 80px)'
    },
    xl: {
      btnClass: 'w-20 h-20',
      iconSize: 38,
      jumpClass: 'w-22 h-22',
      jumpIconSize: 34,
      label: 'Extra Large (Jumbo 96px)'
    }
  };

  const preview = previewSizeMap[dpadSize] || previewSizeMap.normal;

  return (
    <div id="modal-controls-help" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl text-white relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          id="btn-close-help"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-cyan-500/20 rounded-xl border border-cyan-500/30 text-cyan-400">
            <SlidersHorizontal size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">Control Options & Guide</h2>
            <p className="text-xs text-slate-400">Customize button size & translucency, and view controls</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/70 rounded-xl border border-slate-800 mb-4">
          <button
            id="tab-control-settings"
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'settings' 
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <SlidersHorizontal size={14} />
            <span>Control Settings</span>
          </button>

          <button
            id="tab-control-guide"
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'guide' 
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Keyboard size={14} />
            <span>Keybindings & Guide</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto pr-1 space-y-4 flex-1">
          {activeTab === 'settings' ? (
            <div className="space-y-4 text-xs">
              {/* 1. BUTTON SIZE SETTING */}
              <div className="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200 flex items-center gap-1.5 text-sm text-cyan-300">
                    <Maximize2 size={16} /> Left / Right Button Size
                  </span>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                    {dpadSize}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Choose the size that best fits your screen or thumb reach.
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'large', 'xl'] as const).map((sz) => {
                    const isSelected = dpadSize === sz;
                    return (
                      <button
                        key={sz}
                        id={`btn-size-opt-${sz}`}
                        onClick={() => onSetDpadSize(sz)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                          isSelected
                            ? 'bg-cyan-600/30 border-cyan-400 text-white shadow-md shadow-cyan-600/20 ring-1 ring-cyan-400'
                            : 'bg-slate-900/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-1 font-bold text-xs capitalize">
                          {isSelected && <Check size={12} className="text-cyan-400" />}
                          <span>{sz === 'xl' ? 'Extra Large' : sz}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">
                          {sz === 'normal' ? 'Standard' : sz === 'large' ? 'Medium-Large' : 'Jumbo'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. TRANSLUCENCY / OPACITY SETTING */}
              <div className="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200 flex items-center gap-1.5 text-sm text-cyan-300">
                    <Eye size={16} /> Button Translucency & Opacity
                  </span>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                    {Math.round(touchOpacity * 100)}% Visible ({Math.round((1 - touchOpacity) * 100)}% Translucent)
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Make buttons more see-through so they don't obscure platforms and hazards, or more solid for maximum visibility.
                </p>

                {/* Slider */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>High Translucency (20%)</span>
                    <span>Balanced (70%)</span>
                    <span>Solid Opaque (100%)</span>
                  </div>
                  <input
                    id="slider-button-opacity"
                    type="range"
                    min="0.2"
                    max="1.0"
                    step="0.05"
                    value={touchOpacity}
                    onChange={(e) => onSetTouchOpacity(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-1.5 pt-1">
                  {[
                    { label: 'Ghost', val: 0.3 },
                    { label: 'Translucent', val: 0.5 },
                    { label: 'Balanced', val: 0.75 },
                    { label: 'Solid', val: 1.0 }
                  ].map((p) => {
                    const isSelected = Math.abs(touchOpacity - p.val) < 0.08;
                    return (
                      <button
                        key={p.label}
                        id={`btn-translucent-preset-${p.label.toLowerCase()}`}
                        onClick={() => onSetTouchOpacity(p.val)}
                        className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] font-bold transition-all border ${
                          isSelected
                            ? 'bg-cyan-600 text-white border-cyan-400 shadow-sm'
                            : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:bg-slate-800'
                        }`}
                      >
                        {p.label} ({Math.round(p.val * 100)}%)
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. LIVE INTERACTIVE PREVIEW */}
              <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-300">Live Button Preview:</span>
                  <span className="text-[10px] text-slate-400 italic">
                    Tap to test look and feel
                  </span>
                </div>

                <div className="relative h-24 rounded-lg bg-gradient-to-b from-sky-950/60 via-slate-900 to-emerald-950/40 border border-slate-700/60 flex items-center justify-between px-6 overflow-hidden">
                  {/* Decorative background world platform hint */}
                  <div className="absolute inset-x-0 bottom-0 h-4 bg-emerald-700/30 border-t border-emerald-500/30 flex items-center justify-center">
                    <span className="text-[9px] text-emerald-400/50 uppercase tracking-widest font-mono">Platform Terrain</span>
                  </div>

                  {/* Left / Right preview */}
                  <div className="flex items-center gap-2 z-10">
                    <div 
                      style={{ opacity: touchOpacity }}
                      className={`${preview.btnClass} bg-slate-900/80 border border-slate-600/70 rounded-xl flex items-center justify-center text-white shadow-xl transition-all hover:scale-105 active:scale-95`}
                    >
                      <ArrowLeft size={preview.iconSize} />
                    </div>
                    <div 
                      style={{ opacity: touchOpacity }}
                      className={`${preview.btnClass} bg-slate-900/80 border border-slate-600/70 rounded-xl flex items-center justify-center text-white shadow-xl transition-all hover:scale-105 active:scale-95`}
                    >
                      <ArrowRight size={preview.iconSize} />
                    </div>
                  </div>

                  {/* Jump button preview */}
                  <div className="z-10 flex flex-col items-center">
                    <div 
                      style={{ opacity: touchOpacity }}
                      className={`${preview.jumpClass} bg-blue-600/85 border border-blue-400/60 rounded-xl flex flex-col items-center justify-center text-white shadow-xl transition-all hover:scale-105 active:scale-95`}
                    >
                      <ArrowUp size={preview.jumpIconSize} />
                      <span className="text-[8px] font-bold uppercase opacity-90">JUMP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. COLLECTIBLE THEME: ACORNS VS FEATHERS */}
              {onSetCollectibleStyle && (
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-300">Bird Collectible Theme:</span>
                    <span className="text-[10px] text-amber-400 font-semibold">
                      {collectibleStyle === 'acorn' ? '🌰 Golden Acorns (Classic)' : '🪶 Golden Feathers (Plumage)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSetCollectibleStyle('acorn')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                        collectibleStyle === 'acorn'
                          ? 'bg-amber-600/30 text-amber-300 border-amber-500/70 shadow-sm'
                          : 'bg-slate-900/60 text-slate-400 border-slate-700/60 hover:text-slate-200'
                      }`}
                    >
                      <span>🌰</span>
                      <span>Golden Acorns</span>
                    </button>
                    <button
                      onClick={() => onSetCollectibleStyle('feather')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                        collectibleStyle === 'feather'
                          ? 'bg-amber-600/30 text-amber-300 border-amber-500/70 shadow-sm'
                          : 'bg-slate-900/60 text-slate-400 border-slate-700/60 hover:text-slate-200'
                      }`}
                    >
                      <span>🪶</span>
                      <span>Golden Feathers</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Switch between woodland cache acorns or celestial bird feathers for special stage unlock items!
                  </p>
                </div>
              )}

              {/* 5. LINEAR PROGRESSION & FREE PLAY TOGGLE */}
              {onToggleUnlockAll && (
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-slate-300 block">Linear Progression Lock</span>
                    <span className="text-[10px] text-slate-400">
                      {unlockAllLevels ? '🔓 Free Play Mode: All 60 stages unlocked' : '🔒 Linear Mode: Levels require Golden Acorns'}
                    </span>
                  </div>
                  <button
                    onClick={onToggleUnlockAll}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                      unlockAllLevels
                        ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500/60'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {unlockAllLevels ? 'Unlock All (ON)' : 'Linear Mode (Default)'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* GUIDE & KEYBINDINGS TAB */
            <div className="space-y-4 text-xs">
              <div>
                <h3 className="font-semibold text-slate-200 flex items-center gap-1.5 mb-2 text-sm text-blue-400">
                  <Keyboard size={16} /> Keyboard & Touch Controls
                </h3>
                <div className="grid grid-cols-2 gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                  <div className="flex items-center justify-between p-1.5 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-400">Move Left / Right</span>
                    <span className="font-mono font-bold text-amber-300">A / D or ← / →</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-400">Jump / Fly</span>
                    <span className="font-mono font-bold text-amber-300">Space / W / ↑</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-400">Rapid Snow Cannon</span>
                    <span className="font-mono font-bold text-cyan-300">Hold F / X / Fire</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-400">Shoot Blaster</span>
                    <span className="font-mono font-bold text-sky-300">F / J or 'FIRE'</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-400">Take Off Jetpack</span>
                    <span className="font-mono font-bold text-cyan-300">Z / C or 'Take Off'</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-400">Launch Direction</span>
                    <span className="font-mono font-bold text-cyan-300">Expanding Dial / Q, E, X</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-400">Restart / Pause</span>
                    <span className="font-mono font-bold text-slate-200">R / P or Esc</span>
                  </div>
                </div>
              </div>

              {/* Gameplay Mechanics */}
              <div>
                <h3 className="font-semibold text-slate-200 flex items-center gap-1.5 mb-2 text-sm text-emerald-400">
                  <Zap size={16} /> Key Mechanics & Progression
                </h3>
                <div className="space-y-2">
                  <div className="p-2.5 bg-amber-950/50 rounded-xl border border-amber-500/60 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-amber-500/20 text-amber-300 rounded-lg mt-0.5 text-base">
                      🌰
                    </div>
                    <div>
                      <div className="font-bold text-amber-300">Golden Acorns & Linear Adventure Progression</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Every stage features <strong>3 hidden Golden Acorns</strong> (or Feathers) to collect! Collecting acorns and clearing levels linearly unlocks the next stages up to Level 60. Revisit previously beaten stages anytime via Level Select to collect all 3 acorns.
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-cyan-950/40 rounded-xl border border-cyan-400/50 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-cyan-500/20 text-cyan-400 rounded-lg mt-0.5">
                      <Shield size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-cyan-300">Bubble Shield & Underwater Float-Glide</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Envelopes Barnaby in a protective aquatic sphere! Essential in Level 12's <strong>Abyssal Deep Sea</strong>.<br/>
                        • <strong className="text-cyan-300">Sea Urchin & Hazard Protection:</strong> Absorbs lethal hits from venomous Sea Urchins, spikes, or enemies, popping with a safe upward recoil bounce and granting temporary invulnerability.<br/>
                        • <strong className="text-cyan-300">Buoyant Float-Glide:</strong> Hold <span className="text-cyan-300 font-semibold font-mono">Jump / ↑</span> while in mid-air/water to gently hover and glide through narrow underwater corridors and coral chasms.
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-blue-950/50 rounded-xl border border-teal-400/60 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-teal-500/20 text-teal-300 rounded-lg mt-0.5 text-base">
                      🌊
                    </div>
                    <div>
                      <div className="font-bold text-teal-200">Deep Sea Theme & Continuous Swimming</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Introduced in Level 12! Experience submerged oceanic physics with <strong>continuous swimming</strong>:<br/>
                        • <strong className="text-cyan-300">Continuous Swim Paddle:</strong> Tap <span className="text-cyan-300 font-semibold font-mono">Jump / Space / W / ↑</span> repeatedly while in the water to execute continuous upward swimming paddle strokes, navigating vertical coral canyons and deep ocean trenches!<br/>
                        • <strong className="text-cyan-300">Buoyant Physics:</strong> Enjoy reduced gravity, slower sink rate, and directional swimming momentum.<br/>
                        • <strong className="text-cyan-300">Abyssal Sea Urchins:</strong> Beware of spiky sea urchins bobbing at varied depths—use the Bubble Shield to safely bounce through them!
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-cyan-950/50 rounded-xl border border-cyan-400/60 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-cyan-500/20 text-cyan-300 rounded-lg mt-0.5 text-base">
                      ❄️
                    </div>
                    <div>
                      <div className="font-bold text-cyan-200">Rapid Snowball Cannon (Infinite Ammo)</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Introduced in Level 10! Hold down <span className="text-cyan-300 font-semibold font-mono">F / X / Fire</span> (or the touch <strong className="text-cyan-300">HOLD FIRE</strong> button) to unleash an uninterrupted continuous barrage of rapid snowballs (~10 shots/second) with <strong>unlimited ammo</strong>. Shatters enemy projectiles in mid-air and obliterates swarms of Yetis, Drones, and Critters with frost explosions (+300 pts)!
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-purple-950/40 rounded-xl border border-purple-500/50 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-purple-500/20 text-purple-300 rounded-lg mt-0.5 text-base">
                      🧲
                    </div>
                    <div>
                      <div className="font-bold text-purple-300">Prismatic Magnet Power-Up</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Equipped in the Prismatic Geode Sanctum! Generates a powerful 300px magnetic attraction field for 20 seconds. Automatically pulls distant coins, sparkling gems, fuel canisters, and Golden Acorns straight to Barnaby with electric purple & cyan tractor arcs!
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-indigo-950/40 rounded-xl border border-indigo-400/50 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-indigo-500/20 text-indigo-300 rounded-lg mt-0.5 text-base">
                      💠
                    </div>
                    <div>
                      <div className="font-bold text-indigo-200">Phase-Shift Disappearing Crystal Floors</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Introduced in Level 20's <strong>Prism Core Climax</strong>! Ethereal crystalline platforms that alternate between solid tangible form and translucent immaterial ghost states on a rhythmic pulse. Watch for the <strong>rapid warning strobe</strong> right before a platform phases out, and time your jetpack hover or leap to the alternating solid phase group!
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-sky-950/40 rounded-xl border border-sky-500/40 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-sky-500/20 text-sky-400 rounded-lg mt-0.5">
                      <Zap size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-sky-300">Plasma Blaster Power-Up</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Equipped in Level 6 and special secret caches! Press <span className="text-sky-300 font-semibold font-mono">F / J</span> (or the touch <strong className="text-sky-300">FIRE</strong> button) to fire rapid-velocity plasma laser bolts. Blasts down robotic flyer drones and slimes from a distance (+300 pts). Energy cell canisters refill +15 ammo.
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-cyan-950/40 rounded-xl border border-cyan-500/40 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-cyan-500/20 text-cyan-400 rounded-lg mt-0.5">
                      <Rocket size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-cyan-300">Jetpack: Unmount & Directional Launch</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Hold <span className="text-amber-300 font-semibold font-mono">Jump</span> in mid-air to fly; fuel recharges on the ground. <br/>
                        • <strong className="text-cyan-300">Take Off / Drop:</strong> Tap <em>'Drop'</em> in the expanding Launch dial or press <span className="text-amber-300 font-mono">Z/C</span> to smoothly detach the jetpack onto the floor.<br/>
                        • <strong className="text-cyan-300">Directional Rocket Launch:</strong> Tap the on-screen <span className="text-cyan-300 font-semibold font-mono">Launch</span> button to open the 6-direction aim dial (↖, ↑, ↗, ←, →, ↓) or press <span className="text-amber-300 font-mono">Q, E, or X</span> to unmount and blast the jetpack like a rocket to smash enemies (+500 pts)! Launching downwards also triggers a massive rocket jump recoil.
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-amber-950/40 rounded-xl border border-amber-500/50 flex items-start gap-2.5 shadow-sm">
                    <div className="p-1 bg-amber-500/20 text-amber-400 rounded-lg mt-0.5">
                      <Rocket size={14} className="rotate-45" />
                    </div>
                    <div>
                      <div className="font-bold text-amber-300">⚡ Rocketeer Category: Pure Mid-Air Flight</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Zero platforms between launchpad and touchdown! Players fly continuously through the open sky. Swoop through glowing green fuel canisters in mid-air to replenish your tank and ride aerial coin arcs to the final landing strip.
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-800/40 rounded-xl border border-slate-700/40 flex items-start gap-2.5">
                    <div className="p-1 bg-amber-500/20 text-amber-400 rounded-lg mt-0.5">
                      <ArrowUp size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-200">Variable Jump Height & Coyote Time</div>
                      <div className="text-slate-400">
                        Tap lightly for a short hop, or hold for a full leap. You also have a split-second grace period after leaving ledges!
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-800/40 rounded-xl border border-slate-700/40 flex items-start gap-2.5">
                    <div className="p-1 bg-rose-500/20 text-rose-400 rounded-lg mt-0.5">
                      <ShieldAlert size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-200">Stomp on Enemies</div>
                      <div className="text-slate-400">
                        Land on the heads of patrolling slimes to defeat them and gain extra bounce height (+250 pts).
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-800/40 rounded-xl border border-slate-700/40 flex items-start gap-2.5">
                    <div className="p-1 bg-emerald-500/20 text-emerald-400 rounded-lg mt-0.5">
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-200">Playable Characters & Customizer</div>
                      <div className="text-slate-400">
                        Play as 🐦 <strong className="text-cyan-300">Barnaby</strong> (or friends 🐸 <strong>Ribbit</strong>, 🌊 <strong>Lottie</strong>, and 🦫 <strong>Chilli</strong>)! Personalize their colors, hats, outfits, expressions, and gear in the Character Locker.
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-800/40 rounded-xl border border-slate-700/40 flex items-start gap-2.5">
                    <div className="p-1 bg-purple-500/20 text-purple-400 rounded-lg mt-0.5">
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-200">Gems & 3-Star Rating</div>
                      <div className="text-slate-400">
                        Collect purple gems (+500 pts) and finish under the target par time to earn all 3 stars on every stage.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <button
          id="btn-got-it"
          onClick={onClose}
          className="mt-4 w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 active:scale-[0.99] text-white font-bold rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
        >
          <Check size={16} />
          <span>Save & Close</span>
        </button>
      </div>
    </div>
  );
};
