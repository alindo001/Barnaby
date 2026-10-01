import React, { useState } from 'react';
import { X, Star, Trophy, Play, CheckCircle2, Layers } from 'lucide-react';
import { LevelData, GameStats } from '../types/game';

interface LevelSelectModalProps {
  levels: LevelData[];
  currentLevelIndex: number;
  stats: GameStats;
  onSelectLevel: (index: number) => void;
  onClose: () => void;
}

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  levels,
  currentLevelIndex,
  stats,
  onSelectLevel,
  onClose
}) => {
  const [filterTier, setFilterTier] = useState<'all' | '1-7' | '8-14' | '15-21' | '22-27'>('all');

  const filteredLevels = levels.filter(l => {
    if (filterTier === 'all') return true;
    if (filterTier === '1-7') return l.id >= 1 && l.id <= 7;
    if (filterTier === '8-14') return l.id >= 8 && l.id <= 14;
    if (filterTier === '15-21') return l.id >= 15 && l.id <= 21;
    if (filterTier === '22-27') return l.id >= 22 && l.id <= 27;
    return true;
  });

  return (
    <div id="modal-level-select" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 shadow-2xl text-white relative">
        {/* Close Button */}
        <button
          id="btn-close-level-select"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/20 rounded-xl border border-amber-500/30 text-amber-400">
              <Trophy size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight">Select Level</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
                  {levels.length} Levels
                </span>
              </div>
              <p className="text-xs text-slate-400">Choose a world to jump into or beat your high scores</p>
            </div>
          </div>
        </div>

        {/* Tier filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-3 text-xs">
          {[
            { id: 'all', label: `All (${levels.length})` },
            { id: '1-7', label: 'Tier 1 (1 - 7)' },
            { id: '8-14', label: 'Tier 2 (8 - 14)' },
            { id: '15-21', label: 'Tier 3 (15 - 21)' },
            { id: '22-27', label: 'Master (22 - 27)' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterTier(f.id as any)}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all whitespace-nowrap text-xs ${
                filterTier === f.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Level Cards Grid with visible sleek custom scrollbar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {filteredLevels.map((level) => {
            const originalIndex = levels.findIndex(l => l.id === level.id);
            const stars = stats.levelStars[level.id] || 0;
            const highScore = stats.highScores[level.id] || 0;
            const isCurrent = originalIndex === currentLevelIndex;

            return (
              <div
                key={level.id}
                id={`level-card-${level.id}`}
                onClick={() => {
                  onSelectLevel(originalIndex);
                  onClose();
                }}
                className={`group relative p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-blue-950/40 border-blue-500/60 ring-1 ring-blue-500/50 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/70 hover:border-slate-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-base text-slate-100 group-hover:text-amber-400 transition-colors">
                      {level.title}
                    </span>
                    
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((starIndex) => (
                        <Star
                          key={starIndex}
                          size={15}
                          className={
                            starIndex <= stars
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-600 fill-slate-700"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {level.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-700/50 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="text-slate-500">Best:</span>
                    <span className="font-mono font-bold text-amber-300">
                      {highScore > 0 ? highScore.toLocaleString() : '---'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    {isCurrent ? (
                      <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                        <CheckCircle2 size={13} /> Current
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px]">
                        <Play size={12} fill="currentColor" /> Play
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Scroll indicator footer */}
        {levels.length > 4 && (
          <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Scroll down to access Level 7 & beyond
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              Use wheel, trackpad, or drag scrollbar
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
