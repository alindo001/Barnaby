import React, { useState, useEffect, useRef } from 'react';
import { ENEMY_COMPENDIUM, EnemyCompendiumEntry } from '../game/enemyCompendium';
import { drawEnemyFigure } from '../game/enemyRenderer';
import { sound } from '../game/audio';
import { EnemyType } from '../types/game';

interface EnemyGalleryModalProps {
  enemiesDefeated?: Record<string, number>;
  totalEnemiesDefeated?: number;
  onClose: () => void;
}

export const EnemyGalleryModal: React.FC<EnemyGalleryModalProps> = ({
  enemiesDefeated = {},
  totalEnemiesDefeated = 0,
  onClose
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'animals' | 'other' | 'defeated'>('all');
  const [pokedEnemies, setPokedEnemies] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Compute hunter rank
  const getRankTitle = (count: number) => {
    if (count >= 100) return { title: 'Mythic Beastmaster', emoji: '👑', color: 'text-amber-400' };
    if (count >= 50) return { title: 'Forest Champion', emoji: '🌟', color: 'text-yellow-400' };
    if (count >= 25) return { title: 'Critter Wrangler', emoji: '🤠', color: 'text-emerald-400' };
    if (count >= 10) return { title: 'Trail Veteran', emoji: '🏅', color: 'text-sky-400' };
    if (count >= 1) return { title: 'Apprentice Scout', emoji: '🥾', color: 'text-teal-400' };
    return { title: 'Peaceful Observer', emoji: '🌿', color: 'text-slate-400' };
  };

  const rank = getRankTitle(totalEnemiesDefeated);

  const filteredEnemies = ENEMY_COMPENDIUM.filter(e => {
    const count = enemiesDefeated[e.type] || 0;
    if (selectedFilter === 'defeated') return count > 0;
    if (selectedFilter === 'animals') {
      return ['anteater', 'beaver', 'hedgehog', 'frog', 'skunk', 'goose', 'pigeon'].includes(e.type);
    }
    if (selectedFilter === 'other') {
      return ['slime', 'flyer', 'patroller'].includes(e.type);
    }
    return true;
  });

  const handlePoke = (type: EnemyType) => {
    setPokedEnemies(prev => ({
      ...prev,
      [type]: (prev[type] || 0) + 1
    }));
    sound.playStomp();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-900 border-2 border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/80 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl shadow-inner">
              🐾
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                Critter Codex & Enemy Gallery
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold uppercase tracking-wider">
                  Bestiary
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Inspect curious woodland critters, study silly attack patterns, and track your defeat tally!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 transition-all font-semibold text-sm flex items-center gap-1.5 active:scale-95 cursor-pointer"
          >
            <span>Close</span>
            <span className="text-xs opacity-60 bg-slate-700 px-1.5 py-0.5 rounded">ESC</span>
          </button>
        </div>

        {/* Global Stats & Trophy Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-5 py-3.5 bg-gradient-to-r from-slate-900 via-slate-800/90 to-slate-900 border-b border-slate-800">
          {/* Total Defeated Card */}
          <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-950/60 border border-emerald-500/30">
            <div className="w-11 h-11 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-2xl text-emerald-400">
              ⚔️
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Total Defeated
              </div>
              <div className="text-2xl font-black text-emerald-400 flex items-baseline gap-1.5">
                {totalEnemiesDefeated.toLocaleString()}
                <span className="text-xs font-medium text-emerald-500/80">critters</span>
              </div>
            </div>
          </div>

          {/* Hunter Rank Card */}
          <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-950/60 border border-amber-500/30">
            <div className="w-11 h-11 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl">
              {rank.emoji}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Critter Tamer Rank
              </div>
              <div className={`text-base font-black ${rank.color}`}>
                {rank.title}
              </div>
            </div>
          </div>

          {/* Species Discovered Card */}
          <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-950/60 border border-sky-500/30">
            <div className="w-11 h-11 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-2xl text-sky-400">
              📖
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Species Cataloged
              </div>
              <div className="text-xl font-black text-sky-400">
                {Object.keys(enemiesDefeated).filter(k => (enemiesDefeated[k] || 0) > 0).length} / {ENEMY_COMPENDIUM.length} <span className="text-xs font-normal text-slate-400">encountered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-950/40 border-b border-slate-800 text-xs overflow-x-auto">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            All Critters ({ENEMY_COMPENDIUM.length})
          </button>
          <button
            onClick={() => setSelectedFilter('animals')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              selectedFilter === 'animals'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            🐾 Silly Animals (Anteater, Beaver, Skunk...)
          </button>
          <button
            onClick={() => setSelectedFilter('other')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              selectedFilter === 'other'
                ? 'bg-violet-500 text-slate-950 shadow-md shadow-violet-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            🤖 Slimes & Mechanical
          </button>
          <button
            onClick={() => setSelectedFilter('defeated')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              selectedFilter === 'defeated'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            ✅ Defeated Only
          </button>
        </div>

        {/* Scrollable Gallery Cards */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEnemies.map(entry => {
              const defeatCount = enemiesDefeated[entry.type] || 0;
              const hasDefeated = defeatCount > 0;

              return (
                <div
                  key={entry.type}
                  className={`relative flex flex-col p-4 rounded-xl border bg-slate-950/70 transition-all duration-200 ${
                    hasDefeated 
                      ? `${entry.borderColor} shadow-lg shadow-black/40 hover:border-emerald-400/70` 
                      : 'border-slate-800/80 opacity-90'
                  }`}
                >
                  {/* Top card header */}
                  <div className="flex items-start gap-3.5 mb-3">
                    {/* Live Animated Canvas Preview */}
                    <div className="relative w-20 h-20 rounded-xl bg-slate-900 border border-slate-700/80 overflow-hidden flex-shrink-0 flex items-center justify-center shadow-inner group">
                      <EnemyCardCanvas enemyType={entry.type} pokeCount={pokedEnemies[entry.type] || 0} />
                      <button
                        onClick={() => handlePoke(entry.type)}
                        title="Click to Poke / Practice Stomp!"
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold text-amber-300 backdrop-blur-xs cursor-pointer"
                      >
                        POKE! 👟
                      </button>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-black text-white truncate">
                          {entry.name}
                        </h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          hasDefeated 
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          {hasDefeated ? `✓ ${defeatCount} Defeated` : 'Undefeated'}
                        </span>
                      </div>

                      <div className="text-[11px] font-mono italic text-slate-400 truncate">
                        {entry.species}
                      </div>

                      <p className="text-xs text-amber-200/90 font-medium line-clamp-1 mt-1">
                        "{entry.tagline}"
                      </p>

                      <div className="flex items-center gap-3 mt-1.5 text-[11px]">
                        <span className="text-slate-400">
                          Threat: <span className="font-bold text-orange-400">{entry.threatLevel}</span>
                        </span>
                        <span className="text-amber-400 tracking-wider">
                          {'★'.repeat(entry.threatStars)}{'☆'.repeat(5 - entry.threatStars)}
                        </span>
                        <span className="text-emerald-400 font-semibold">
                          +{entry.points} pts
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lore Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {entry.description}
                  </p>

                  {/* Attack and Weakness Details */}
                  <div className="mt-auto space-y-2 pt-2.5 border-t border-slate-800/80 text-[11px]">
                    <div className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                      <span className="font-bold text-red-400 whitespace-nowrap">Attack:</span>
                      <div>
                        <span className="font-semibold text-slate-200">{entry.attackName}</span>
                        <p className="text-slate-400 text-[10.5px] mt-0.5 leading-snug">{entry.attackDescription}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                      <span className="font-bold text-emerald-400 whitespace-nowrap">Weakness:</span>
                      <p className="text-slate-300 text-[10.5px] leading-snug">{entry.weakness}</p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span>Habitat: <span className="text-slate-300">{entry.habitat}</span></span>
                      <button
                        onClick={() => handlePoke(entry.type)}
                        className="text-amber-400 hover:text-amber-300 underline font-semibold cursor-pointer"
                      >
                        Practice Stomp 👟
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEnemies.length === 0 && (
            <div className="py-16 text-center text-slate-400">
              <div className="text-4xl mb-2">🐾</div>
              <p className="text-base font-bold text-white">No critters match this filter.</p>
              <p className="text-xs mt-1">Play levels to discover and defeat more silly animal enemies!</p>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-950/80 border-t border-slate-800 text-xs">
          <div className="text-slate-400">
            Tip: Stomp on anteaters before they snort ants, or jump over rolling timber logs thrown by beavers!
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
          >
            Back to Adventure
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Embedded animated canvas for individual enemy cards
 */
const EnemyCardCanvas: React.FC<{ enemyType: EnemyType; pokeCount: number }> = ({ enemyType, pokeCount }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let startTime = performance.now();

    const loop = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background vignette
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Floor line
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 10);
      ctx.lineTo(canvas.width, canvas.height - 10);
      ctx.stroke();

      const pokeBounce = pokeCount > 0 ? Math.sin(elapsed * 20) * 4 : 0;

      // Draw enemy
      drawEnemyFigure(
        ctx,
        {
          type: enemyType,
          x: canvas.width / 2 - 14,
          y: canvas.height / 2 - 12 + pokeBounce,
          width: 28,
          height: 24,
          facing: 1,
          state: enemyType === 'hedgehog' ? (Math.sin(elapsed * 2) > 0 ? 'rolling' : 'walking') : 'walking',
          isSpiky: enemyType === 'hedgehog' && Math.sin(elapsed * 2) > 0,
          animTimer: elapsed
        },
        elapsed
      );

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [enemyType, pokeCount]);

  return <canvas ref={canvasRef} width={80} height={80} className="w-full h-full block" />;
};
