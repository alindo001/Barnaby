import React, { useState } from 'react';
import { X, Star, Trophy, Play, CheckCircle2, Rocket, Lock, Unlock, AlertCircle } from 'lucide-react';
import { LevelData, GameStats } from '../types/game';
import { checkLevelUnlockStatus, MAX_POSSIBLE_ACORNS } from '../game/acorns';

interface LevelSelectModalProps {
  levels: LevelData[];
  currentLevelIndex: number;
  stats: GameStats;
  unlockAllLevels?: boolean;
  onSelectLevel: (index: number) => void;
  onToggleUnlockAll?: () => void;
  onClose: () => void;
}

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  levels,
  currentLevelIndex,
  stats,
  unlockAllLevels = false,
  onSelectLevel,
  onToggleUnlockAll,
  onClose
}) => {
  const [filterTier, setFilterTier] = useState<string>('all');
  const [lockedNotice, setLockedNotice] = useState<string | null>(null);

  const totalAcorns = stats.totalLevelAcorns || (Object.values(stats.levelAcorns || {}) as number[]).reduce((a: number, b: number) => a + (b || 0), 0);
  const highestClearedId = stats.highestClearedLevelId || 0;

  const filteredLevels = levels.filter(l => {
    if (filterTier === 'all') return true;
    if (filterTier === '1-10') return l.id >= 1 && l.id <= 10;
    if (filterTier === '11-20') return l.id >= 11 && l.id <= 20;
    if (filterTier === '21-27') return l.id >= 21 && l.id <= 27;
    if (filterTier === '28-37') return l.id >= 28 && l.id <= 37;
    if (filterTier === '38-47') return l.id >= 38 && l.id <= 47;
    if (filterTier === '48-57') return l.id >= 48 && l.id <= 57;
    if (filterTier === 'rocketeer') return l.category === 'rocketeer' || l.id >= 58;
    return true;
  });

  const unlockedCount = levels.filter(l => 
    checkLevelUnlockStatus(l.id, totalAcorns, highestClearedId, unlockAllLevels).unlocked
  ).length;

  return (
    <div id="modal-level-select" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl text-white relative">
        {/* Close Button */}
        <button
          id="btn-close-level-select"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Title & Acorn Progress Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/20 rounded-xl border border-amber-500/30 text-amber-400">
              <Trophy size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold tracking-tight">Select Level</h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold">
                  {unlockedCount} / {levels.length} Unlocked
                </span>
              </div>
              <p className="text-xs text-slate-400">Collect Golden Acorns 🌰 in levels to unlock new stages</p>
            </div>
          </div>

          {/* Golden Acorn Bank Card */}
          <div className="flex items-center gap-2.5 bg-gradient-to-r from-amber-950/60 to-slate-800/80 border border-amber-500/40 px-3 py-1.5 rounded-xl shadow-inner shrink-0">
            <span className="text-xl animate-bounce">🌰</span>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <span>{totalAcorns} / {MAX_POSSIBLE_ACORNS}</span>
                <span className="text-[10px] text-amber-400/80 font-normal">Acorns Banked</span>
              </div>
              <div className="w-24 sm:w-28 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-0.5 border border-amber-500/30">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full transition-all"
                  style={{ width: `${Math.min(100, (totalAcorns / MAX_POSSIBLE_ACORNS) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Locked stage notification banner if user clicked a locked stage */}
        {lockedNotice && (
          <div className="mb-3 p-2.5 bg-amber-950/80 border border-amber-500/60 rounded-xl text-amber-200 text-xs flex items-center justify-between animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-400 shrink-0" />
              <span>{lockedNotice}</span>
            </div>
            <button 
              onClick={() => setLockedNotice(null)} 
              className="text-amber-400 hover:text-white text-xs px-2 py-0.5 rounded hover:bg-amber-900/60"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Tier filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-3 text-xs scrollbar-none">
          {[
            { id: 'all', label: `All (${levels.length})` },
            { id: 'rocketeer', label: '⚡ Rocketeer (No Platforms!)', highlight: true },
            { id: '1-10', label: 'Classic (1 - 10)' },
            { id: '11-20', label: 'Ascent (11 - 20)' },
            { id: '21-27', label: 'Masters (21 - 27)' },
            { id: '28-37', label: '🚀 Jetpack I (28 - 37)' },
            { id: '38-47', label: '🚀 Jetpack II (38 - 47)' },
            { id: '48-57', label: '🚀 Titan Finale (48 - 57)' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => {
                setFilterTier(f.id);
                setLockedNotice(null);
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all whitespace-nowrap text-xs ${
                filterTier === f.id
                  ? f.id === 'rocketeer'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/30'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : f.id === 'rocketeer'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Level Cards Grid with visible sleek custom scrollbar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[56vh] overflow-y-auto pr-2 custom-scrollbar">
          {filteredLevels.map((level) => {
            const originalIndex = levels.findIndex(l => l.id === level.id);
            const stars = stats.levelStars[level.id] || 0;
            const highScore = stats.highScores[level.id] || 0;
            const acornsFound = stats.levelAcorns[level.id] || 0;
            const isCurrent = originalIndex === currentLevelIndex;
            const isRocketeer = level.category === 'rocketeer' || level.id >= 58;
            const hasJetpackItem = isRocketeer || level.collectibles.some(c => c.type === 'jetpack' || c.type === 'jetpack_fuel') || level.id >= 28;

            const unlockStatus = checkLevelUnlockStatus(level.id, totalAcorns, highestClearedId, unlockAllLevels);
            const isUnlocked = unlockStatus.unlocked;

            return (
              <div
                key={level.id}
                id={`level-card-${level.id}`}
                onClick={() => {
                  if (isUnlocked) {
                    onSelectLevel(originalIndex);
                    onClose();
                  } else {
                    setLockedNotice(`🔒 Level ${level.id} is locked! ${unlockStatus.reason || 'Need more Golden Acorns or clear previous level.'}`);
                  }
                }}
                className={`group relative p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  !isUnlocked
                    ? 'bg-slate-950/70 border-slate-800/90 text-slate-500 cursor-pointer hover:border-amber-500/40 hover:bg-slate-900/60'
                    : isCurrent
                    ? 'bg-blue-950/40 border-blue-500/60 ring-1 ring-blue-500/50 shadow-lg shadow-blue-500/10 cursor-pointer'
                    : isRocketeer
                    ? 'bg-slate-900/90 hover:bg-slate-800/90 border-amber-500/50 hover:border-amber-400 shadow-md shadow-amber-500/5 cursor-pointer'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/70 hover:border-slate-600 cursor-pointer'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`font-bold text-base transition-colors ${
                        !isUnlocked
                          ? 'text-slate-400 group-hover:text-amber-300'
                          : isRocketeer 
                          ? 'text-amber-300 group-hover:text-amber-200' 
                          : 'text-slate-100 group-hover:text-amber-400'
                      }`}>
                        {level.title}
                      </span>
                      {isRocketeer ? (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-300 border border-amber-500/50 text-[9px] font-bold uppercase tracking-wider">
                          <Rocket size={10} className="rotate-45 text-amber-400" /> ROCKETEER
                        </span>
                      ) : hasJetpackItem ? (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[9px] font-bold uppercase tracking-wider">
                          <Rocket size={10} className="rotate-45" /> JETPACK
                        </span>
                      ) : null}
                    </div>
                    
                    {/* Stars or Lock Icon */}
                    {isUnlocked ? (
                      <div className="flex items-center gap-0.5 shrink-0">
                        {[1, 2, 3].map((starIndex) => (
                          <Star
                            key={starIndex}
                            size={14}
                            className={
                              starIndex <= stars
                                ? "text-amber-400 fill-amber-400"
                                : "text-slate-600 fill-slate-700"
                            }
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-950/60 border border-rose-500/40 text-rose-300 rounded text-[10px] font-bold">
                        <Lock size={11} /> LOCKED
                      </span>
                    )}
                  </div>

                  <p className={`text-xs line-clamp-2 mb-2.5 ${!isUnlocked ? 'text-slate-500' : 'text-slate-400'}`}>
                    {level.description}
                  </p>
                </div>

                {/* Bottom Row: Best Score + Acorns Badge + Action */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-700/50 text-xs">
                  {isUnlocked ? (
                    <div className="flex items-center gap-2.5 text-slate-300">
                      {/* Acorns Found Indicator */}
                      <div className="flex items-center gap-1 px-1.5 py-0.5 bg-amber-500/15 border border-amber-500/30 rounded text-amber-300 font-bold text-[11px]" title="Golden Acorns found in this level">
                        <span>🌰</span>
                        <span>{acornsFound}/3</span>
                      </div>

                      <div className="flex items-center gap-1 text-[11px]">
                        <span className="text-slate-500">Best:</span>
                        <span className="font-mono font-bold text-amber-300">
                          {highScore > 0 ? highScore.toLocaleString() : '---'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-amber-400/90 text-[11px] font-semibold">
                      <Lock size={12} className="text-amber-400" />
                      <span>Need {unlockStatus.requiredAcorns} 🌰 (Have {totalAcorns})</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                    {!isUnlocked ? (
                      <span className="text-amber-400/80 hover:text-amber-300 text-[11px] flex items-center gap-1">
                        Locked <Lock size={11} />
                      </span>
                    ) : isCurrent ? (
                      <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                        <CheckCircle2 size={13} /> Current
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-blue-400 text-[11px]">
                        <Play size={12} fill="currentColor" /> Play
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Footer with testing toggle & quick guide */}
        <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Clear levels & collect 3 🌰 Golden Acorns per stage to unlock the adventure linearly!
          </span>

          {onToggleUnlockAll && (
            <button
              onClick={onToggleUnlockAll}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1.5 self-start sm:self-auto border ${
                unlockAllLevels
                  ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              {unlockAllLevels ? <Unlock size={12} /> : <Lock size={12} />}
              <span>{unlockAllLevels ? 'All Levels Free Play (ON)' : 'Free Play Mode: OFF'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
