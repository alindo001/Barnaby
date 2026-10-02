import React, { useEffect, useRef, useState } from 'react';
import { 
  Play, 
  Layers, 
  Sparkles, 
  HelpCircle, 
  Hammer, 
  Wrench,
  Volume2, 
  VolumeX, 
  Trophy, 
  Star,
  ChevronRight,
  Flame,
  Zap,
  Shield
} from 'lucide-react';
import { GameStats, CharacterConfig } from '../types/game';
import { BarnabyLogo } from './BarnabyLogo';
import { renderCharacter } from '../game/characterRenderer';
import { DEFAULT_CHARACTER_CONFIGS, CHARACTERS_META } from '../game/characters';

interface TitleScreenProps {
  stats: GameStats;
  characterConfig?: CharacterConfig;
  totalLevelsCount?: number;
  soundEnabled: boolean;
  onStartGame: () => void;
  onOpenLevelSelect: () => void;
  onOpenHelp: () => void;
  onOpenCharacterSelect?: () => void;
  onOpenEditor?: () => void;
  onOpenEnemyGallery?: () => void;
  onToggleSound: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  stats,
  characterConfig = DEFAULT_CHARACTER_CONFIGS.bird,
  totalLevelsCount = 60,
  soundEnabled,
  onStartGame,
  onOpenLevelSelect,
  onOpenHelp,
  onOpenCharacterSelect,
  onOpenEditor,
  onOpenEnemyGallery,
  onToggleSound
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Compute total stars collected across levels
  const totalStars = (Object.values(stats.levelStars || {}) as number[]).reduce((acc, s) => acc + (s || 0), 0);
  const maxPossibleStars = totalLevelsCount * 3;

  // Mascot canvas interactive animation loop
  useEffect(() => {
    let lastTime = performance.now();
    let time = 0;

    const loop = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      time += dt;

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const cx = canvas.width / 2;
          // Gentle floating hover bob
          const hoverY = canvas.height / 2 + Math.sin(time * 3) * 8;

          // Ambient soft glow beneath character
          const glowGrad = ctx.createRadialGradient(cx, hoverY + 12, 5, cx, hoverY + 12, 45);
          glowGrad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
          glowGrad.addColorStop(1, 'rgba(2, 6, 23, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(cx, hoverY + 12, 45, 0, Math.PI * 2);
          ctx.fill();

          // Render Barnaby (or current selected character) hovering with jetpack
          renderCharacter({
            ctx,
            char: characterConfig,
            x: cx,
            y: hoverY,
            scale: 2.2,
            facing: 1,
            time,
            isGrounded: false,
            hasJetpack: true,
            isJetpacking: true,
            jetpackFuel: 100,
            maxJetpackFuel: 100,
            showShadow: true
          });
        }
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [characterConfig]);

  // Support Spacebar / Enter to quickly start game from title screen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        // Prevent default spacebar page scrolling
        e.preventDefault();
        onStartGame();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStartGame]);

  const charMeta = CHARACTERS_META[characterConfig.type] || CHARACTERS_META.bird;

  return (
    <div 
      id="barnaby-title-screen"
      className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-between p-4 sm:p-6 text-white overflow-hidden rounded-3xl border border-sky-500/25 bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-sky-950/60 max-h-[95vh] overflow-y-auto custom-scrollbar"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(14, 116, 144, 0.3) 0%, rgba(15, 23, 42, 0.95) 75%)'
      }}
    >
      {/* Decorative background grid & glow lights */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row: Settings & Version */}
      <div className="relative w-full flex items-center justify-between z-10 mb-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-sm flex items-center gap-1.5">
            <Flame size={12} className="text-amber-400 fill-amber-400" />
            <span>JETPACK ARCADE</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] font-medium text-slate-400">
            {totalLevelsCount} Handcrafted Levels
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-title-sound-toggle"
            onClick={onToggleSound}
            className="p-2 bg-slate-800/80 hover:bg-slate-700/80 active:scale-95 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 transition-all shadow-sm"
            title={soundEnabled ? 'Mute Sound (M)' : 'Enable Sound (M)'}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} className="text-rose-400" />}
          </button>
        </div>
      </div>

      {/* Hero Barnaby Logo & Subtitle */}
      <div className="relative z-10 flex flex-col items-center mt-1 mb-2">
        <div className="transform transition-transform hover:scale-[1.02]">
          <BarnabyLogo size="hero" showSubtitle={true} animated={true} />
        </div>
        <p className="text-xs sm:text-sm text-cyan-200/80 font-medium text-center mt-1 max-w-sm tracking-wide">
          Rocket over hazards, blast enemy swarms, and collect star gems!
        </p>
      </div>

      {/* Center Interactive Mascot Stage */}
      <div className="relative z-10 flex items-center justify-center my-1">
        <div className="relative flex flex-col items-center">
          {/* Live Animated Canvas */}
          <canvas
            ref={canvasRef}
            width={170}
            height={130}
            className="block cursor-pointer transition-transform hover:scale-110 active:scale-95"
            onClick={onOpenCharacterSelect}
            title="Click to open Character Locker!"
          />

          {/* Quick Character Badge */}
          {onOpenCharacterSelect && (
            <button
              id="btn-title-quick-character"
              onClick={onOpenCharacterSelect}
              className="mt-[-10px] px-3 py-1 bg-slate-800/90 hover:bg-slate-700/90 active:scale-95 border border-slate-700/80 rounded-full flex items-center gap-1.5 text-xs text-slate-200 hover:text-white transition-all shadow-lg group"
            >
              <span>{charMeta.emoji}</span>
              <span className="font-semibold text-cyan-300 group-hover:text-cyan-200">
                {characterConfig.type === 'bird' ? 'Barnaby' : charMeta.name}
              </span>
              <span className="text-[10px] text-slate-400">· Change</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Action Menu Buttons */}
      <div className="relative z-10 w-full flex flex-col gap-2.5 mt-2">
        {/* BIG START BUTTON */}
        <button
          id="btn-play-game"
          onClick={onStartGame}
          onMouseEnter={() => setHoveredButton('play')}
          onMouseLeave={() => setHoveredButton(null)}
          className="group relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:via-cyan-400 hover:to-emerald-400 active:scale-[0.98] text-white font-black text-lg sm:text-xl rounded-2xl shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 transition-all duration-200 border border-white/20 overflow-hidden"
        >
          {/* Animated shine line */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          
          <div className="p-2 bg-white/20 rounded-xl">
            <Play size={22} fill="currentColor" className="text-white ml-0.5" />
          </div>
          <span className="tracking-wider uppercase drop-shadow-md">
            {stats.score > 0 ? 'Continue Adventure' : 'Start Adventure'}
          </span>
          <ChevronRight size={20} className="text-white/80 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Secondary Row 1: Level Select & Character Locker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            id="btn-menu-level-select"
            onClick={onOpenLevelSelect}
            className="py-3 px-4 bg-slate-800/90 hover:bg-slate-700 active:scale-[0.98] text-slate-200 hover:text-white font-bold text-sm rounded-xl border border-slate-700/80 flex items-center justify-between gap-2 transition-all shadow-md group"
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg group-hover:bg-blue-500/30">
                <Layers size={16} />
              </div>
              <span>Level Select</span>
            </div>
            <span className="px-2 py-0.5 bg-slate-900/90 text-cyan-300 font-mono text-[11px] rounded-md border border-cyan-500/30">
              {totalLevelsCount} Stages
            </span>
          </button>

          {onOpenCharacterSelect && (
            <button
              id="btn-menu-characters"
              onClick={onOpenCharacterSelect}
              className="py-3 px-4 bg-emerald-950/40 hover:bg-emerald-900/50 active:scale-[0.98] text-emerald-200 hover:text-white font-bold text-sm rounded-xl border border-emerald-600/40 flex items-center justify-between gap-2 transition-all shadow-md group"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-emerald-500/20 text-emerald-300 rounded-lg group-hover:bg-emerald-500/30">
                  <Sparkles size={16} />
                </div>
                <span>Character Locker</span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-950/80 text-emerald-300 text-[11px] rounded-md border border-emerald-500/40">
                Hats & Skins
              </span>
            </button>
          )}
        </div>

        {/* Secondary Row 2: Controls / Guide & Sandbox Builder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            id="btn-menu-help"
            onClick={onOpenHelp}
            className="py-2.5 px-4 bg-slate-800/80 hover:bg-slate-700 active:scale-[0.98] text-slate-300 hover:text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700/80 flex items-center justify-center gap-2 transition-all"
          >
            <HelpCircle size={15} className="text-cyan-400" />
            <span>How to Play & Controls</span>
          </button>

          {onOpenEnemyGallery && (
            <button
              id="btn-menu-enemy-gallery"
              onClick={onOpenEnemyGallery}
              className="py-2.5 px-4 bg-amber-950/40 hover:bg-amber-900/50 active:scale-[0.98] text-amber-200 hover:text-white font-bold text-xs sm:text-sm rounded-xl border border-amber-600/40 flex items-center justify-between gap-2 transition-all shadow-md group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🐾</span>
                <span>Critter Codex</span>
              </div>
              <span className="px-2 py-0.5 bg-amber-950/90 text-amber-300 font-mono text-[11px] rounded-md border border-amber-500/40">
                {stats.totalEnemiesDefeated || 0} Defeated
              </span>
            </button>
          )}
        </div>

        {/* Row 3: DEV Level Visual Editor & Modder */}
        {onOpenEditor && (
          <button
            id="btn-menu-sandbox"
            onClick={onOpenEditor}
            className="w-full py-3 px-4 bg-gradient-to-r from-amber-950/90 via-amber-900/80 to-yellow-950/90 hover:from-amber-900 hover:via-amber-800 hover:to-yellow-900 active:scale-[0.98] text-amber-200 hover:text-white font-bold text-sm rounded-xl border-2 border-amber-500/70 shadow-lg shadow-amber-500/20 flex items-center justify-between gap-3 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500/20 text-amber-300 rounded-lg group-hover:bg-amber-500/40 transition-colors">
                <Wrench size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-wide text-amber-300 group-hover:text-amber-100 flex items-center gap-1.5">
                  🛠️ Level Visual Editor & Modder
                  <span className="px-1.5 py-0.2 bg-amber-500 text-slate-950 font-black text-[9px] rounded uppercase tracking-wider">
                    DEV TOOL
                  </span>
                </span>
                <span className="text-[11px] text-amber-200/80 font-normal">
                  Drag & Drop Items, Enemies & Platforms • Levels 1-100 (or press F2)
                </span>
              </div>
            </div>
            <span className="px-2 py-1 bg-amber-950/80 text-amber-300 font-mono text-[11px] rounded-lg border border-amber-500/40 shrink-0">
              [F2]
            </span>
          </button>
        )}
      </div>

      {/* Bottom Progress & Stats Showcase */}
      <div className="relative z-10 w-full mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>{totalStars} / {maxPossibleStars}</span>
            <span className="text-[10px] text-slate-400 font-normal">Stars</span>
          </div>

          <div className="flex items-center gap-1.5 text-amber-300 font-semibold" title="Total Golden Acorns collected across all levels">
            <span>🌰</span>
            <span>{stats.totalLevelAcorns || 0} / 180</span>
            <span className="text-[10px] text-slate-400 font-normal">Acorns</span>
          </div>

          <button
            onClick={onOpenEnemyGallery}
            className="flex items-center gap-1.5 text-red-300 font-semibold hover:text-red-200 transition-colors cursor-pointer"
            title="Critters Defeated (Click to open Critter Codex!)"
          >
            <span>🐾</span>
            <span>{stats.totalEnemiesDefeated || 0} Defeated</span>
          </button>

          {stats.score > 0 && (
            <div className="flex items-center gap-1 text-slate-300">
              <Trophy size={13} className="text-cyan-400" />
              <span>Best: {stats.score.toLocaleString()} pts</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
          <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-slate-800 text-cyan-300 rounded border border-slate-700">Space</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-800 text-cyan-300 rounded border border-slate-700">Enter</kbd> to Launch</span>
        </div>
      </div>
    </div>
  );
};
