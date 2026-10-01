import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Dices, 
  RotateCcw, 
  Check, 
  Palette, 
  Smile, 
  Shirt, 
  Crown,
  ChevronRight,
  Info
} from 'lucide-react';
import { CharacterConfig, CharacterType, HatType, OutfitType, ExpressionType } from '../types/game';
import { 
  CHARACTERS_META, 
  DEFAULT_CHARACTER_CONFIGS, 
  CHARACTER_PRESETS,
  COLOR_SWATCHES,
  HATS_LIST,
  OUTFITS_LIST,
  EXPRESSIONS_LIST
} from '../game/characters';
import { renderCharacter } from '../game/characterRenderer';

interface CharacterSelectModalProps {
  currentConfig: CharacterConfig;
  onSelectCharacter: (config: CharacterConfig) => void;
  onClose: () => void;
}

type TabType = 'presets' | 'colors' | 'hats' | 'outfits' | 'expression' | 'special';

export const CharacterSelectModal: React.FC<CharacterSelectModalProps> = ({
  currentConfig,
  onSelectCharacter,
  onClose
}) => {
  const [config, setConfig] = useState<CharacterConfig>(() => ({ ...currentConfig }));
  const [activeTab, setActiveTab] = useState<TabType>('presets');
  const [isTestJumping, setIsTestJumping] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const jumpTimerRef = useRef<number>(0);

  const meta = CHARACTERS_META[config.type];

  // Live Canvas Animation Loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      timeRef.current += dt;

      if (jumpTimerRef.current > 0) {
        jumpTimerRef.current -= dt;
        if (jumpTimerRef.current <= 0) {
          setIsTestJumping(false);
        }
      }

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Background subtle radial glow
          const grad = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 10,
            canvas.width / 2, canvas.height / 2, 80
          );
          grad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
          grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Simulated idle breathing / bounce
          const idleBounce = isTestJumping 
            ? -Math.sin((jumpTimerRef.current / 0.6) * Math.PI) * 28
            : Math.sin(timeRef.current * 3.5) * 2;

          renderCharacter({
            ctx,
            char: config,
            x: canvas.width / 2,
            y: canvas.height / 2 + 10 + idleBounce,
            scale: 2.8,
            facing: 1,
            time: timeRef.current,
            isGrounded: !isTestJumping,
            isJumping: isTestJumping,
            vx: isTestJumping ? 1.5 : 0,
            showShadow: true
          });
        }
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [config, isTestJumping]);

  const handleTriggerJumpTest = () => {
    jumpTimerRef.current = 0.6;
    setIsTestJumping(true);
  };

  const handleSwitchCharacterType = (type: CharacterType) => {
    if (type === config.type) return;
    const base = DEFAULT_CHARACTER_CONFIGS[type];
    setConfig({ ...base });
  };

  const handleApplyPreset = (presetConfig: CharacterConfig) => {
    setConfig({ ...presetConfig });
  };

  const handleResetToDefault = () => {
    setConfig({ ...DEFAULT_CHARACTER_CONFIGS[config.type] });
  };

  const handleRandomize = () => {
    const randomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
    const hats: HatType[] = ['none', 'bandana', 'beanie', 'crown', 'tophat', 'flower', 'sunglasses', 'headband', 'partyhat', 'wizard'];
    const outfits: OutfitType[] = ['none', 'scarf', 'cape', 'bowtie', 'vest'];
    const expressions: ExpressionType[] = ['happy', 'sparkle', 'cool', 'determined', 'winking'];

    const availableSpecials = meta.specialOptions.map(o => o.id);

    setConfig(prev => ({
      ...prev,
      primaryColor: randomItem(COLOR_SWATCHES.primary),
      secondaryColor: randomItem(COLOR_SWATCHES.secondary),
      hat: randomItem(hats),
      hatColor: randomItem(COLOR_SWATCHES.accessories),
      outfit: randomItem(outfits),
      outfitColor: randomItem(COLOR_SWATCHES.accessories),
      expression: randomItem(expressions),
      specialFeature: randomItem(availableSpecials),
      specialColor: randomItem(COLOR_SWATCHES.accessories)
    }));
  };

  const handleSaveAndEquip = () => {
    onSelectCharacter(config);
    onClose();
  };

  return (
    <div 
      id="modal-character-customizer" 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md select-none overflow-hidden"
    >
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[92vh] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="px-4 py-3 sm:py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Sparkles size={18} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                Character Locker
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400">
                Choose character species & customize their look
              </p>
            </div>
          </div>

          <button
            id="btn-close-character-modal"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Character Species Switcher (Bird, Frog, Axolotl, Capybara) */}
        <div className="p-2 sm:p-3 bg-slate-950/60 border-b border-slate-800 grid grid-cols-4 gap-1.5 sm:gap-2 shrink-0">
          {(Object.keys(CHARACTERS_META) as CharacterType[]).map((type) => {
            const m = CHARACTERS_META[type];
            const isSelected = config.type === type;
            return (
              <button
                key={type}
                id={`btn-select-species-${type}`}
                onClick={() => handleSwitchCharacterType(type)}
                className={`py-2 px-1 sm:px-3 rounded-xl border flex flex-col items-center gap-0.5 transition-all text-center relative ${
                  isSelected 
                    ? 'bg-blue-600/25 border-blue-500 text-white shadow-md shadow-blue-500/10' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-400 shadow-sm" />
                )}
                <span className="text-xl sm:text-2xl leading-none">{m.emoji}</span>
                <span className="text-[11px] sm:text-xs font-bold truncate max-w-full">
                  {type === 'bird' ? 'Bird (Hero)' : type === 'frog' ? 'Frog' : type === 'axolotl' ? 'Axolotl' : 'Capybara'}
                </span>
                <span className="hidden sm:inline text-[9px] text-slate-400 truncate max-w-full">
                  {m.species}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto min-h-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          {/* Left Column: Live Animated Preview & Quick Actions */}
          <div className="md:w-5/12 p-3 sm:p-4 flex flex-col items-center justify-between bg-slate-900/50 shrink-0">
            <div className="w-full flex flex-col items-center">
              
              {/* Canvas Interactive Viewport */}
              <div 
                onClick={handleTriggerJumpTest}
                className="relative w-44 sm:w-52 h-40 sm:h-44 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-center cursor-pointer group shadow-inner overflow-hidden"
                title="Click to trigger jump animation!"
              >
                <canvas
                  ref={canvasRef}
                  width={208}
                  height={176}
                  className="w-full h-full block"
                />
                
                {/* Click hint badge */}
                <div className="absolute bottom-2 px-2 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-[9px] text-slate-400 group-hover:text-blue-300 transition-colors flex items-center gap-1">
                  <span>Tap to jump</span>
                </div>
              </div>

              {/* Character Info Card */}
              <div className="mt-2.5 text-center w-full">
                <div className="flex items-center justify-center gap-1.5 font-bold text-sm sm:text-base text-slate-100">
                  <span>{meta.emoji}</span>
                  <span>{meta.name}</span>
                </div>
                <p className="text-[10px] sm:text-xs text-emerald-400 font-medium">
                  {meta.tagline}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 max-w-xs mx-auto line-clamp-2">
                  {meta.description}
                </p>
              </div>
            </div>

            {/* Quick Helper Buttons: Randomize & Reset */}
            <div className="w-full grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-800/80">
              <button
                id="btn-randomize-character"
                onClick={handleRandomize}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                title="Generate Random Cute Outfit"
              >
                <Dices size={14} className="text-amber-400" />
                <span>Randomize</span>
              </button>

              <button
                id="btn-reset-character"
                onClick={handleResetToDefault}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                title="Reset to Species Default"
              >
                <RotateCcw size={13} className="text-slate-400" />
                <span>Default</span>
              </button>
            </div>
          </div>

          {/* Right Column: Customizer Controls Tabs & Options */}
          <div className="md:w-7/12 flex flex-col flex-1 min-h-0 bg-slate-900/30">
            
            {/* Customization Navigation Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-950/40 p-1 gap-1 overflow-x-auto shrink-0 scrollbar-none">
              <button
                onClick={() => setActiveTab('presets')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'presets' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Crown size={13} />
                <span>Presets</span>
              </button>

              <button
                onClick={() => setActiveTab('colors')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'colors' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Palette size={13} />
                <span>Colors</span>
              </button>

              <button
                onClick={() => setActiveTab('hats')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'hats' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>🎩</span>
                <span>Hats</span>
              </button>

              <button
                onClick={() => setActiveTab('outfits')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'outfits' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Shirt size={13} />
                <span>Outfits</span>
              </button>

              <button
                onClick={() => setActiveTab('expression')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'expression' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Smile size={13} />
                <span>Face</span>
              </button>

              <button
                onClick={() => setActiveTab('special')}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'special' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Sparkles size={13} />
                <span>Special</span>
              </button>
            </div>

            {/* Tab Panel Body */}
            <div className="p-3 sm:p-4 overflow-y-auto flex-1 space-y-4">
              
              {/* TAB 1: PRESETS */}
              {activeTab === 'presets' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {meta.name} Signature Styles
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CHARACTER_PRESETS[config.type].map((preset) => (
                      <button
                        key={preset.id}
                        id={`btn-preset-${preset.id}`}
                        onClick={() => handleApplyPreset(preset.config)}
                        className="p-2.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900 hover:bg-slate-800/80 active:scale-[0.98] text-left transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          {/* Mini Palette Dots Preview */}
                          <div className="flex -space-x-1 shrink-0">
                            <span 
                              className="w-4 h-4 rounded-full border border-slate-900 shadow-sm" 
                              style={{ backgroundColor: preset.config.primaryColor }} 
                            />
                            <span 
                              className="w-4 h-4 rounded-full border border-slate-900 shadow-sm" 
                              style={{ backgroundColor: preset.config.secondaryColor }} 
                            />
                            <span 
                              className="w-4 h-4 rounded-full border border-slate-900 shadow-sm" 
                              style={{ backgroundColor: preset.config.hatColor }} 
                            />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                              {preset.name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {preset.config.hat !== 'none' ? preset.config.hat : 'Natural'} • {preset.config.expression}
                            </div>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: COLORS */}
              {activeTab === 'colors' && (
                <div className="space-y-4">
                  {/* Primary Body Color */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center justify-between">
                      <span>Body / Feathers / Fur Tone</span>
                      <span className="text-[10px] font-mono text-slate-400">{config.primaryColor}</span>
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {COLOR_SWATCHES.primary.map((color) => (
                        <button
                          key={color}
                          onClick={() => setConfig(prev => ({ ...prev, primaryColor: color }))}
                          className={`h-8 rounded-lg transition-transform active:scale-90 relative flex items-center justify-center border ${
                            config.primaryColor === color ? 'border-white scale-105 shadow-md' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color }}
                          title={color}
                        >
                          {config.primaryColor === color && (
                            <Check size={14} className="text-white drop-shadow" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Belly / Accent Color */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center justify-between">
                      <span>Belly / Muzzle / Secondary Accent</span>
                      <span className="text-[10px] font-mono text-slate-400">{config.secondaryColor}</span>
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {COLOR_SWATCHES.secondary.map((color) => (
                        <button
                          key={color}
                          onClick={() => setConfig(prev => ({ ...prev, secondaryColor: color }))}
                          className={`h-8 rounded-lg transition-transform active:scale-90 relative flex items-center justify-center border ${
                            config.secondaryColor === color ? 'border-white scale-105 shadow-md' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color }}
                          title={color}
                        >
                          {config.secondaryColor === color && (
                            <Check size={14} className="text-slate-900 drop-shadow" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: HATS & HEADGEAR */}
              {activeTab === 'hats' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Select Headgear
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {HATS_LIST.map((hat) => (
                        <button
                          key={hat.id}
                          onClick={() => setConfig(prev => ({ ...prev, hat: hat.id }))}
                          className={`p-2 rounded-xl border flex items-center gap-2 text-left transition-all ${
                            config.hat === hat.id 
                              ? 'bg-blue-600/30 border-blue-500 text-white' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span className="text-lg leading-none">{hat.icon}</span>
                          <span className="text-xs font-medium truncate">{hat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {config.hat !== 'none' && (
                    <div className="pt-2 border-t border-slate-800">
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Hat Color
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {COLOR_SWATCHES.accessories.map((color) => (
                          <button
                            key={color}
                            onClick={() => setConfig(prev => ({ ...prev, hatColor: color }))}
                            className={`h-7 rounded-lg transition-transform active:scale-90 flex items-center justify-center border ${
                              config.hatColor === color ? 'border-white scale-105 shadow-md' : 'border-transparent'
                            }`}
                            style={{ backgroundColor: color }}
                          >
                            {config.hatColor === color && <Check size={12} className="text-white drop-shadow" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: OUTFITS */}
              {activeTab === 'outfits' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Select Outfit & Neckwear
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {OUTFITS_LIST.map((outfit) => (
                        <button
                          key={outfit.id}
                          onClick={() => setConfig(prev => ({ ...prev, outfit: outfit.id }))}
                          className={`p-2.5 rounded-xl border flex items-center gap-2 text-left transition-all ${
                            config.outfit === outfit.id 
                              ? 'bg-blue-600/30 border-blue-500 text-white' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span className="text-lg leading-none">{outfit.icon}</span>
                          <span className="text-xs font-medium truncate">{outfit.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {config.outfit !== 'none' && (
                    <div className="pt-2 border-t border-slate-800">
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Outfit Color
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {COLOR_SWATCHES.accessories.map((color) => (
                          <button
                            key={color}
                            onClick={() => setConfig(prev => ({ ...prev, outfitColor: color }))}
                            className={`h-7 rounded-lg transition-transform active:scale-90 flex items-center justify-center border ${
                              config.outfitColor === color ? 'border-white scale-105 shadow-md' : 'border-transparent'
                            }`}
                            style={{ backgroundColor: color }}
                          >
                            {config.outfitColor === color && <Check size={12} className="text-white drop-shadow" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: EXPRESSION */}
              {activeTab === 'expression' && (
                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Facial Expression & Eye Style
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {EXPRESSIONS_LIST.map((expr) => (
                      <button
                        key={expr.id}
                        onClick={() => setConfig(prev => ({ ...prev, expression: expr.id }))}
                        className={`p-2.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                          config.expression === expr.id 
                            ? 'bg-blue-600/30 border-blue-500 text-white' 
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl leading-none">{expr.emoji}</span>
                          <span className="text-xs font-semibold">{expr.label}</span>
                        </div>
                        {config.expression === expr.id && (
                          <Check size={16} className="text-blue-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: SPECIAL CHARACTER-SPECIFIC FEATURES */}
              {activeTab === 'special' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-amber-400" />
                      <span>{meta.specialFeatureName}</span>
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {meta.specialOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setConfig(prev => ({ ...prev, specialFeature: opt.id }))}
                          className={`p-2.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                            config.specialFeature === opt.id 
                              ? 'bg-blue-600/30 border-blue-500 text-white' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span className="text-xs font-semibold">{opt.label}</span>
                          {config.specialFeature === opt.id && (
                            <Check size={16} className="text-blue-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Accent / Special Feature Color */}
                  {(config.type === 'axolotl' || config.type === 'frog' || config.type === 'bird') && (
                    <div className="pt-2 border-t border-slate-800">
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Feature Accent Tint
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {COLOR_SWATCHES.accessories.map((color) => (
                          <button
                            key={color}
                            onClick={() => setConfig(prev => ({ ...prev, specialColor: color }))}
                            className={`h-7 rounded-lg transition-transform active:scale-90 flex items-center justify-center border ${
                              config.specialColor === color ? 'border-white scale-105 shadow-md' : 'border-transparent'
                            }`}
                            style={{ backgroundColor: color }}
                          >
                            {config.specialColor === color && <Check size={12} className="text-white drop-shadow" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Footer Sticky Action Bar (Equip Character & Cancel) */}
        <div className="p-3 sm:p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <Info size={14} />
            <span>Character choices persist across levels & sessions</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto ml-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-semibold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Cancel
            </button>

            <button
              id="btn-equip-character"
              onClick={handleSaveAndEquip}
              className="flex-1 sm:flex-none py-2.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Check size={16} />
              <span>Equip & Play</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
