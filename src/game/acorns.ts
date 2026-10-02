import { LevelData, Collectible } from '../types/game';

export const TOTAL_ACORNS_PER_LEVEL = 3;
export const TOTAL_LEVELS_COUNT = 100;
export const MAX_POSSIBLE_ACORNS = TOTAL_LEVELS_COUNT * TOTAL_ACORNS_PER_LEVEL; // 300

/**
 * Returns the cumulative golden acorns required to unlock a level.
 * Designed to provide a smooth, rewarding linear progression where
 * players who collect ~2 acorns per stage advance seamlessly across all 100 levels!
 */
export function getLevelRequiredAcorns(levelId: number): number {
  if (levelId <= 1) return 0;
  if (levelId === 2) return 1;
  // Scaled linearly up to 200 acorns for level 100 (out of 300 total available)
  return Math.min(200, Math.floor((levelId - 1) * 2.02));
}

export interface LevelUnlockStatus {
  unlocked: boolean;
  requiredAcorns: number;
  acornsNeeded: number;
  clearedPrevious: boolean;
  requiredPrevLevelId: number;
  reason?: string;
}

/**
 * Checks if a level is unlocked.
 * A level is unlocked if:
 * 1. It is level 1 (always unlocked)
 * 2. OR unlockAll is enabled
 * 3. OR the player has collected >= requiredAcorns AND (has cleared levelId - 1 OR has bonus acorns)
 */
export function checkLevelUnlockStatus(
  levelId: number,
  totalAcorns: number,
  highestClearedLevelId: number = 0,
  unlockAll: boolean = false
): LevelUnlockStatus {
  const requiredAcorns = getLevelRequiredAcorns(levelId);
  const acornsNeeded = Math.max(0, requiredAcorns - totalAcorns);
  const requiredPrevLevelId = Math.max(0, levelId - 1);
  const clearedPrevious = highestClearedLevelId >= requiredPrevLevelId;

  if (unlockAll || levelId <= 1) {
    return {
      unlocked: true,
      requiredAcorns,
      acornsNeeded: 0,
      clearedPrevious: true,
      requiredPrevLevelId
    };
  }

  // Linear progression condition:
  // Must have required acorns
  if (totalAcorns < requiredAcorns) {
    return {
      unlocked: false,
      requiredAcorns,
      acornsNeeded,
      clearedPrevious,
      requiredPrevLevelId,
      reason: `Collect ${acornsNeeded} more Golden Acorns`
    };
  }

  // Must clear previous level (or have bonus acorns to skip ahead)
  const canSkipWithMastery = totalAcorns >= requiredAcorns + 6;
  if (!clearedPrevious && !canSkipWithMastery) {
    return {
      unlocked: false,
      requiredAcorns,
      acornsNeeded: 0,
      clearedPrevious: false,
      requiredPrevLevelId,
      reason: `Clear Level ${requiredPrevLevelId} to unlock`
    };
  }

  return {
    unlocked: true,
    requiredAcorns,
    acornsNeeded: 0,
    clearedPrevious,
    requiredPrevLevelId
  };
}

/**
 * Automatically spaces out any collectibles that are placed too close together,
 * ensuring each item (powerups, fuel, shields, acorns, coins, gems) has its own clear space.
 */
export function declumpCollectibles(level: LevelData) {
  const colls = level.collectibles;
  if (!colls || colls.length <= 1) return;

  const isMajor = (type: string) => 
    ['acorn', 'jetpack', 'blaster', 'bubble_shield', 'jetpack_fuel', 'blaster_ammo'].includes(type);

  for (let pass = 0; pass < 8; pass++) {
    let shifted = false;

    for (let i = 0; i < colls.length; i++) {
      for (let j = i + 1; j < colls.length; j++) {
        const a = colls[i];
        const b = colls[j];

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);

        // Required minimum separation distance
        const minDist = (isMajor(a.type) || isMajor(b.type)) ? 72 : 46;

        if (dist < minDist) {
          shifted = true;
          const overlap = minDist - dist;

          // Compute horizontal shift direction along the platform/trail
          let dirX = dx;
          let dirY = dy;

          if (Math.abs(dirX) < 1) {
            dirX = (i % 2 === 0) ? -1 : 1;
          }
          const normDist = Math.hypot(dirX, dirY) || 1;
          let normX = dirX / normDist;
          let normY = dirY / normDist;

          // Strongly prioritize horizontal spacing along the floor/platform
          if (Math.abs(normX) < 0.5) {
            normX = (i % 2 === 0) ? -0.85 : 0.85;
            normY *= 0.4;
          }

          const majorA = isMajor(a.type);
          const majorB = isMajor(b.type);

          if (majorA && !majorB) {
            // Keep major item anchored, push minor coin/gem away
            b.x += Math.round(normX * overlap * 1.15);
            b.y += Math.round(normY * overlap * 0.4);
          } else if (!majorA && majorB) {
            // Keep major item anchored, push minor item away
            a.x -= Math.round(normX * overlap * 1.15);
            a.y -= Math.round(normY * overlap * 0.4);
          } else {
            // Both major or both minor: push apart evenly
            const half = Math.round(overlap * 0.6) + 2;
            a.x -= Math.round(normX * half);
            b.x += Math.round(normX * half);
            if (Math.abs(normY) > 0.4) {
              a.y -= Math.round(normY * half * 0.3);
              b.y += Math.round(normY * half * 0.3);
            }
          }

          // Keep within world boundaries
          a.x = Math.max(30, Math.min(level.worldWidth - 50, a.x));
          b.x = Math.max(30, Math.min(level.worldWidth - 50, b.x));
          a.y = Math.max(40, Math.min(level.worldHeight - 50, a.y));
          b.y = Math.max(40, Math.min(level.worldHeight - 50, b.y));
        }
      }
    }

    if (!shifted) break;
  }
}

/**
 * Ensures every level has exactly 3 Golden Acorn collectibles safely placed.
 * Avoids hazards, pits, and ensures reachable positions with maximum clearance from existing items.
 */
export function enrichLevelWithAcorns(level: LevelData): LevelData {
  level.requiredAcorns = getLevelRequiredAcorns(level.id);
  const existingAcorns = level.collectibles.filter(c => c.type === 'acorn');

  if (existingAcorns.length < 3) {
    const isRocketeer = level.category === 'rocketeer' || level.id >= 58;
    const width = level.worldWidth;
    const height = level.worldHeight;

    const targetFractions = [0.24, 0.54, 0.82];
    const newAcorns: Collectible[] = [];

    for (let i = existingAcorns.length; i < 3; i++) {
      const fraction = targetFractions[i];
      const targetX = width * fraction;

      let bestX = targetX;
      let bestY = height * 0.5;
      let maxMinDist = -1;

      if (isRocketeer) {
        // Sample candidate aerial flight corridor positions
        const candidateYs = [180, 240, 300, 360];
        const candidateXs = [targetX - 80, targetX, targetX + 80];

        for (const cx of candidateXs) {
          for (const cy of candidateYs) {
            // Compute clearance from other collectibles
            let minDist = 9999;
            for (const c of level.collectibles) {
              const d = Math.hypot(c.x - cx, c.y - cy);
              if (d < minDist) minDist = d;
            }
            if (minDist > maxMinDist) {
              maxMinDist = minDist;
              bestX = cx;
              bestY = cy;
            }
          }
        }
      } else {
        // Find safe solid or one-way platforms near this targetX
        const candidatePlatforms = level.platforms
          .filter(p => p.x + p.width > targetX - 350 && p.x < targetX + 350)
          .sort((a, b) => Math.abs(a.x + a.width / 2 - targetX) - Math.abs(b.x + b.width / 2 - targetX));

        if (candidatePlatforms.length > 0) {
          for (const plat of candidatePlatforms.slice(0, 4)) {
            // Test 5 positions across this platform: left, center-left, center, center-right, right
            const testOffsets = [0.2, 0.35, 0.5, 0.65, 0.8];
            for (const off of testOffsets) {
              const cx = Math.round(plat.x + plat.width * off - 12);
              const cy = Math.max(50, Math.round(plat.y - 48));

              // Compute distance to nearest collectible
              let minDist = 9999;
              for (const c of level.collectibles) {
                const d = Math.hypot(c.x - cx, c.y - cy);
                if (d < minDist) minDist = d;
              }
              // Check distance to hazards
              for (const h of level.hazards) {
                const d = Math.hypot(h.x + h.width / 2 - cx, h.y + h.height / 2 - cy);
                if (d < 40) minDist = -100;
              }

              if (minDist > maxMinDist) {
                maxMinDist = minDist;
                bestX = cx;
                bestY = cy;
              }
            }
          }
        } else {
          bestX = Math.round(targetX);
          bestY = Math.max(80, Math.round(height * 0.5));
        }
      }

      const acorn: Collectible = {
        id: `${level.id}_acorn_${i + 1}`,
        x: bestX,
        y: bestY,
        width: 24,
        height: 24,
        type: 'acorn',
        value: 1500
      };

      newAcorns.push(acorn);
      level.collectibles.push(acorn);
    }
  }

  // Run comprehensive declumping pass on all collectibles
  declumpCollectibles(level);

  return level;
}
