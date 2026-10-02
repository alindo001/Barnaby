import { LevelData } from '../types/game';
import { THEMES } from './themes';
import { EXTRA_LEVELS } from './extraLevels';
import { JETPACK_MEGA_LEVELS } from './jetpackMegaLevels';
import { ROCKETEER_LEVELS } from './rocketeerLevels';

export { THEMES, ROCKETEER_LEVELS };

const BASE_LEVELS: LevelData[] = [
  // ==========================================
  // LEVEL 1: GREEN MEADOWS - WOODLAND TRAIL RUNNER
  // Walk on continuous solid ground, leaping over fallen timber hurdles and dodging silly animals!
  // ==========================================
  {
    id: 1,
    title: '1. Woodland Trail Runner',
    description: 'Sprint along continuous solid ground, leap over fallen timber hurdles, and dodge silly creatures like log-throwing beavers and ant-snorting anteaters!',
    worldWidth: 3300,
    worldHeight: 600,
    theme: THEMES.meadow,
    playerStart: { x: 80, y: 440 },
    goal: { x: 3120, y: 430, width: 44, height: 60 },
    checkpoints: [
      { x: 1040, y: 480, width: 30, height: 40, activated: false },
      { x: 2200, y: 480, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // Section 1: Continuous Solid Floor (0 - 880) with jump hurdles
      { id: 'l1_ground1', x: 0, y: 520, width: 880, height: 80, type: 'solid' },
      { id: 'l1_hurdle1', x: 280, y: 476, width: 44, height: 44, type: 'solid' }, // Fallen timber stump
      { id: 'l1_hurdle2', x: 560, y: 466, width: 48, height: 54, type: 'solid' }, // Mossy boulder
      { id: 'l1_spring1', x: 740, y: 504, width: 44, height: 16, type: 'bouncy' },

      // Section 2: Continuous Solid Floor (980 - 2080) with Checkpoint 1 & Beaver dam
      { id: 'l1_ground2', x: 980, y: 520, width: 1100, height: 80, type: 'solid' },
      { id: 'l1_hurdle3', x: 1220, y: 476, width: 48, height: 44, type: 'solid' }, // Log barrier
      { id: 'l1_dam1', x: 1440, y: 464, width: 70, height: 56, type: 'solid' },    // Beaver timber mound
      { id: 'l1_overpass', x: 1640, y: 420, width: 120, height: 24, type: 'solid' }, // Overhead tree branch
      { id: 'l1_hurdle4', x: 1940, y: 470, width: 50, height: 50, type: 'solid' }, // Ant mound

      // Section 3: Continuous Solid Floor (2160 - 3300) with Checkpoint 2 & Goose sprint
      { id: 'l1_ground3', x: 2160, y: 520, width: 1140, height: 80, type: 'solid' },
      { id: 'l1_hurdle5', x: 2420, y: 466, width: 48, height: 54, type: 'solid' }, // Rock hurdle
      { id: 'l1_hurdle6', x: 2680, y: 470, width: 44, height: 50, type: 'solid' }, // Woodland gate
      { id: 'l1_finish_base', x: 3040, y: 490, width: 220, height: 110, type: 'solid' }
    ],
    hazards: [
      { id: 'l1_thorn1', x: 420, y: 506, width: 36, height: 14, type: 'spike' },
      { id: 'l1_pit1', x: 880, y: 580, width: 100, height: 20, type: 'spike' },
      { id: 'l1_thorn2', x: 1820, y: 506, width: 40, height: 14, type: 'spike' },
      { id: 'l1_pit2', x: 2080, y: 580, width: 80, height: 20, type: 'spike' }
    ],
    collectibles: [
      // Jetpacks & Boosters
      { id: 'l1_jetpack', x: 200, y: 470, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l1_fuel1', x: 1000, y: 470, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l1_fuel2', x: 2260, y: 470, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },

      // Section 1 Coins & Gems
      { id: 'l1_c1', x: 160, y: 470, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l1_c2', x: 280, y: 430, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l1_c3', x: 560, y: 420, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l1_c4', x: 740, y: 380, width: 20, height: 20, type: 'coin', value: 100 },

      // Section 2 Coins & Gems
      { id: 'l1_c5', x: 1120, y: 470, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l1_c6', x: 1220, y: 430, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l1_c7', x: 1475, y: 410, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l1_c8', x: 1640, y: 360, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l1_c9', x: 1940, y: 420, width: 20, height: 20, type: 'coin', value: 100 },

      // Section 3 Coins & Gems
      { id: 'l1_c10', x: 2340, y: 470, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l1_c11', x: 2420, y: 420, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l1_c12', x: 2580, y: 440, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l1_c13', x: 2880, y: 470, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l1_c14', x: 3080, y: 440, width: 20, height: 20, type: 'coin', value: 100 }
    ],
    enemies: [
      { id: 'l1_e1', x: 440, y: 492, width: 30, height: 26, type: 'anteater', vx: 0.9, vy: 0, minX: 360, maxX: 520, facing: 1 },
      { id: 'l1_e2', x: 780, y: 494, width: 26, height: 24, type: 'frog', vx: 0.8, vy: 0, minX: 720, maxX: 850, facing: 1 },
      { id: 'l1_e3', x: 1160, y: 390, width: 26, height: 22, type: 'pigeon', vx: 1.5, vy: 0, minX: 1060, maxX: 1260, facing: -1 },
      { id: 'l1_e4', x: 1460, y: 436, width: 30, height: 26, type: 'beaver', vx: 0.6, vy: 0, minX: 1440, maxX: 1500, facing: 1 },
      { id: 'l1_e5', x: 1620, y: 494, width: 26, height: 24, type: 'hedgehog', vx: 1.0, vy: 0, minX: 1560, maxX: 1720, facing: 1 },
      { id: 'l1_e6', x: 1880, y: 492, width: 30, height: 26, type: 'anteater', vx: 0.8, vy: 0, minX: 1840, maxX: 1940, facing: 1 },
      { id: 'l1_e7', x: 2360, y: 494, width: 30, height: 24, type: 'skunk', vx: 1.1, vy: 0, minX: 2300, maxX: 2420, facing: -1 },
      { id: 'l1_e8', x: 2780, y: 492, width: 30, height: 26, type: 'goose', vx: 2.6, vy: 0, minX: 2620, maxX: 2980, facing: -1 },
      { id: 'l1_e9', x: 2980, y: 464, width: 26, height: 24, type: 'frog', vx: 0.9, vy: 0, minX: 2920, maxX: 3040, facing: 1 }
    ],
    parTime: 45,
    threeStarScore: 4200
  },

  // ==========================================
  // LEVEL 2: CRYSTAL CAVERNS
  // Subterranean glowing crystals, lifts, crumbling stalactites, 2 checkpoints, 10 enemies
  // ==========================================
  {
    id: 2,
    title: '2. Crystal Caverns',
    description: 'Ride glowing crystal lifts and dodge cave flyers across the deep illuminated subterranean abyss.',
    worldWidth: 3600,
    worldHeight: 650,
    theme: THEMES.cavern,
    playerStart: { x: 70, y: 460 },
    goal: { x: 3480, y: 240, width: 44, height: 60 },
    checkpoints: [
      { x: 1220, y: 310, width: 30, height: 40, activated: false },
      { x: 2400, y: 260, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // Section 1: Cavern mouth (0 - 1200)
      { id: 'l2_p1', x: 0, y: 520, width: 300, height: 130, type: 'solid' },
      { 
        id: 'l2_move1', 
        x: 340, y: 460, width: 90, height: 20, type: 'solid',
        startX: 340, startY: 460, distanceX: 180, distanceY: 0, speed: 1.4, vx: 1.4, vy: 0 
      },
      { id: 'l2_crumb1', x: 620, y: 420, width: 65, height: 20, type: 'crumbling' },
      { id: 'l2_crumb2', x: 720, y: 380, width: 65, height: 20, type: 'crumbling' },
      { id: 'l2_p2', x: 840, y: 370, width: 220, height: 40, type: 'solid' },
      { 
        id: 'l2_move2', 
        x: 1080, y: 480, width: 90, height: 20, type: 'solid',
        startX: 1080, startY: 480, distanceX: 0, distanceY: -180, speed: 1.5, vx: 0, vy: -1.5 
      },

      // Checkpoint 1 Terrace (1180 - 1340)
      { id: 'l2_cp1_plat', x: 1180, y: 350, width: 160, height: 30, type: 'solid' },

      // Section 2: Amethyst Chasm & Springs (1340 - 2400)
      { id: 'l2_p3', x: 1380, y: 280, width: 110, height: 20, type: 'one-way' },
      { id: 'l2_spring1', x: 1540, y: 364, width: 48, height: 16, type: 'bouncy' },
      { id: 'l2_p4', x: 1520, y: 380, width: 140, height: 30, type: 'solid' },
      { 
        id: 'l2_move3', 
        x: 1700, y: 340, width: 90, height: 20, type: 'solid',
        startX: 1700, startY: 340, distanceX: 180, distanceY: 0, speed: 1.6, vx: 1.6, vy: 0 
      },
      { id: 'l2_crumb3', x: 1980, y: 320, width: 70, height: 20, type: 'crumbling' },
      { id: 'l2_crumb4', x: 2100, y: 300, width: 70, height: 20, type: 'crumbling' },
      { id: 'l2_p5', x: 2220, y: 420, width: 160, height: 30, type: 'solid' },

      // Checkpoint 2 Spire (2360 - 2520)
      { id: 'l2_cp2_plat', x: 2360, y: 300, width: 160, height: 30, type: 'solid' },

      // Section 3: Deep Crystal Hollow to Portal (2520 - 3600)
      { 
        id: 'l2_move4', 
        x: 2560, y: 460, width: 90, height: 20, type: 'solid',
        startX: 2560, startY: 460, distanceX: 0, distanceY: -220, speed: 1.8, vx: 0, vy: -1.8 
      },
      { id: 'l2_p6', x: 2700, y: 280, width: 130, height: 20, type: 'one-way' },
      { id: 'l2_spring2', x: 2880, y: 364, width: 48, height: 16, type: 'bouncy' },
      { id: 'l2_p7', x: 2860, y: 380, width: 120, height: 30, type: 'solid' },
      { id: 'l2_crumb5', x: 3040, y: 340, width: 65, height: 20, type: 'crumbling' },
      { id: 'l2_crumb6', x: 3160, y: 300, width: 65, height: 20, type: 'crumbling' },
      { id: 'l2_p8', x: 3280, y: 300, width: 320, height: 150, type: 'solid' }
    ],
    hazards: [
      { id: 'l2_h1', x: 300, y: 620, width: 3000, height: 30, type: 'spike' },
      { id: 'l2_h2', x: 700, y: 350, width: 40, height: 20, type: 'spike' },
      { id: 'l2_h3', x: 1960, y: 290, width: 30, height: 20, type: 'spike' }
    ],
    collectibles: [
      { id: 'l2_jetpack', x: 220, y: 460, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l2_fuel1', x: 920, y: 320, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l2_fuel2', x: 1760, y: 220, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l2_fuel3', x: 2920, y: 200, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },

      { id: 'l2_c1', x: 180, y: 470, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l2_c2', x: 440, y: 390, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l2_c3', x: 650, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l2_c4', x: 980, y: 310, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l2_c5', x: 1420, y: 220, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l2_c6', x: 1740, y: 290, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l2_c7', x: 2040, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l2_c8', x: 2280, y: 360, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l2_c9', x: 2740, y: 220, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l2_c10', x: 3100, y: 260, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l2_c11', x: 3380, y: 240, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l2_e1', x: 880, y: 342, width: 28, height: 24, type: 'hedgehog', vx: 1.1, vy: 0, minX: 840, maxX: 1040, facing: 1 },
      { id: 'l2_e2', x: 550, y: 260, width: 26, height: 22, type: 'pigeon', vx: 1.5, vy: 0, minX: 420, maxX: 680, facing: 1 },
      { id: 'l2_e3', x: 1400, y: 252, width: 28, height: 24, type: 'frog', vx: 1.1, vy: 0, minX: 1380, maxX: 1480, facing: 1 },
      { id: 'l2_e4', x: 1650, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.6, vy: 0, minX: 1520, maxX: 1800, facing: -1 },
      { id: 'l2_e5', x: 1760, y: 312, width: 28, height: 24, type: 'beaver', vx: 0.8, vy: 0, minX: 1710, maxX: 1880, facing: 1 },
      { id: 'l2_e6', x: 2260, y: 392, width: 28, height: 24, type: 'anteater', vx: 1.0, vy: 0, minX: 2220, maxX: 2360, facing: -1 },
      { id: 'l2_e7', x: 2150, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 2020, maxX: 2320, facing: 1 },
      { id: 'l2_e8', x: 2720, y: 252, width: 28, height: 24, type: 'skunk', vx: 1.1, vy: 0, minX: 2700, maxX: 2820, facing: 1 },
      { id: 'l2_e9', x: 2950, y: 190, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 2820, maxX: 3120, facing: -1 },
      { id: 'l2_e10', x: 3340, y: 272, width: 28, height: 24, type: 'goose', vx: 2.5, vy: 0, minX: 3280, maxX: 3450, facing: 1 }
    ],
    parTime: 55,
    threeStarScore: 4500
  },

  // ==========================================
  // LEVEL 3: MOLTEN CORE
  // Vast lava seas, spinning buzzsaws, crumbling towers, 2 checkpoints, 11 enemies
  // ==========================================
  {
    id: 3,
    title: '3. Molten Core',
    description: 'Brave molten geysers, lethal buzzsaws, and fiery patrols in this treacherous fiery gauntlet.',
    worldWidth: 3800,
    worldHeight: 650,
    theme: THEMES.lava,
    playerStart: { x: 70, y: 440 },
    goal: { x: 3660, y: 300, width: 44, height: 60 },
    checkpoints: [
      { x: 1260, y: 320, width: 30, height: 40, activated: false },
      { x: 2480, y: 280, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // Section 1: Obsidian entrance (0 - 1200)
      { id: 'l3_p1', x: 0, y: 500, width: 260, height: 150, type: 'solid' },
      { id: 'l3_p2', x: 300, y: 440, width: 90, height: 20, type: 'one-way' },
      { id: 'l3_p3', x: 460, y: 380, width: 100, height: 20, type: 'solid' },
      { 
        id: 'l3_move1', 
        x: 620, y: 380, width: 85, height: 20, type: 'solid',
        startX: 620, startY: 380, distanceX: 180, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0
      },
      { id: 'l3_p4', x: 880, y: 420, width: 150, height: 230, type: 'solid' },
      { id: 'l3_spring1', x: 1060, y: 484, width: 48, height: 16, type: 'bouncy' },
      { id: 'l3_p5', x: 1050, y: 500, width: 110, height: 150, type: 'solid' },

      // Checkpoint 1 Fortress Spire (1220 - 1380)
      { id: 'l3_cp1_plat', x: 1220, y: 360, width: 160, height: 290, type: 'solid' },

      // Section 2: Buzzsaw corridor & crumbling magma bridges (1380 - 2450)
      { id: 'l3_crumb1', x: 1440, y: 400, width: 75, height: 20, type: 'crumbling' },
      { id: 'l3_crumb2', x: 1580, y: 360, width: 75, height: 20, type: 'crumbling' },
      { id: 'l3_crumb3', x: 1720, y: 320, width: 75, height: 20, type: 'crumbling' },
      { id: 'l3_p6', x: 1860, y: 300, width: 120, height: 20, type: 'bouncy' },
      { 
        id: 'l3_move2', 
        x: 2040, y: 260, width: 90, height: 20, type: 'solid',
        startX: 2040, startY: 260, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0
      },
      { id: 'l3_p7', x: 2280, y: 340, width: 130, height: 20, type: 'one-way' },

      // Checkpoint 2 Vault (2440 - 2600)
      { id: 'l3_cp2_plat', x: 2440, y: 320, width: 170, height: 330, type: 'solid' },

      // Section 3: Final Lava Inferno to Goal (2600 - 3800)
      { id: 'l3_crumb4', x: 2680, y: 400, width: 70, height: 20, type: 'crumbling' },
      { id: 'l3_crumb5', x: 2800, y: 360, width: 70, height: 20, type: 'crumbling' },
      { id: 'l3_spring2', x: 2940, y: 384, width: 48, height: 16, type: 'bouncy' },
      { id: 'l3_p8', x: 2930, y: 400, width: 120, height: 250, type: 'solid' },
      { 
        id: 'l3_move3', 
        x: 3120, y: 320, width: 90, height: 20, type: 'solid',
        startX: 3120, startY: 320, distanceX: 0, distanceY: -160, speed: 2.0, vx: 0, vy: -2.0
      },
      { id: 'l3_p9', x: 3280, y: 240, width: 110, height: 20, type: 'one-way' },
      { id: 'l3_p10', x: 3440, y: 340, width: 90, height: 20, type: 'bouncy' },
      { id: 'l3_p11', x: 3580, y: 360, width: 220, height: 290, type: 'solid' }
    ],
    hazards: [
      { id: 'l3_lava1', x: 200, y: 610, width: 3400, height: 40, type: 'lava' },
      { 
        id: 'l3_saw1', 
        x: 480, y: 300, width: 38, height: 38, type: 'saw',
        startX: 480, startY: 300, distanceX: 80, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 
      },
      { 
        id: 'l3_saw2', 
        x: 1500, y: 280, width: 40, height: 40, type: 'saw',
        startX: 1500, startY: 280, distanceX: 0, distanceY: 90, speed: 2.0, vx: 0, vy: 2.0 
      },
      { 
        id: 'l3_saw3', 
        x: 2150, y: 160, width: 42, height: 42, type: 'saw',
        startX: 2150, startY: 160, distanceX: 0, distanceY: 120, speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l3_saw4', 
        x: 3320, y: 160, width: 42, height: 42, type: 'saw',
        startX: 3320, startY: 160, distanceX: 80, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l3_jetpack', x: 180, y: 440, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l3_fuel1', x: 920, y: 360, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l3_fuel2', x: 1900, y: 240, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l3_fuel3', x: 3000, y: 280, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },

      { id: 'l3_c1', x: 340, y: 390, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l3_c2', x: 500, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l3_c3', x: 710, y: 320, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l3_c4', x: 980, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l3_c5', x: 1520, y: 340, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l3_c6', x: 1760, y: 260, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l3_c7', x: 2120, y: 200, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l3_c8', x: 2340, y: 280, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l3_c9', x: 2740, y: 340, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l3_c10', x: 3200, y: 200, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l3_c11', x: 3500, y: 280, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l3_e1', x: 920, y: 392, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 890, maxX: 1020, facing: 1 },
      { id: 'l3_e2', x: 380, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.5, vy: 0, minX: 280, maxX: 460, facing: 1 },
      { id: 'l3_e3', x: 740, y: 240, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 620, maxX: 860, facing: -1 },
      { id: 'l3_e4', x: 1280, y: 332, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 1240, maxX: 1360, facing: 1 },
      { id: 'l3_e5', x: 1650, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 1540, maxX: 1820, facing: 1 },
      { id: 'l3_e6', x: 1920, y: 272, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 1870, maxX: 1970, facing: -1 },
      { id: 'l3_e7', x: 2320, y: 312, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 2290, maxX: 2400, facing: 1 },
      { id: 'l3_e8', x: 2500, y: 292, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 2460, maxX: 2580, facing: -1 },
      { id: 'l3_e9', x: 2750, y: 240, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 2640, maxX: 2920, facing: 1 },
      { id: 'l3_e10', x: 3180, y: 180, width: 26, height: 22, type: 'flyer', vx: 2.0, vy: 0, minX: 3050, maxX: 3350, facing: -1 },
      { id: 'l3_e11', x: 3620, y: 332, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 3590, maxX: 3750, facing: 1 }
    ],
    parTime: 62,
    threeStarScore: 5000
  },

  // ==========================================
  // LEVEL 4: SKY PEAKS
  // High-altitude floating islands, soaring winds, springs, 2 checkpoints, 12 enemies
  // ==========================================
  {
    id: 4,
    title: '4. Sky Peaks',
    description: 'Master mid-air jetpack control across drifting cloud summits and avoid acrobatic sky flyer swarms.',
    worldWidth: 4000,
    worldHeight: 700,
    theme: THEMES.sky,
    playerStart: { x: 80, y: 520 },
    goal: { x: 3860, y: 200, width: 44, height: 60 },
    checkpoints: [
      { x: 1300, y: 280, width: 30, height: 40, activated: false },
      { x: 2600, y: 260, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // Section 1: Nimbus launch base (0 - 1300)
      { id: 'l4_p1', x: 0, y: 580, width: 260, height: 120, type: 'solid' },
      { id: 'l4_spring1', x: 290, y: 524, width: 48, height: 16, type: 'bouncy' },
      { id: 'l4_p2', x: 280, y: 540, width: 90, height: 160, type: 'solid' },
      { id: 'l4_p3', x: 440, y: 360, width: 130, height: 24, type: 'one-way' },
      { id: 'l4_crumb1', x: 620, y: 400, width: 75, height: 20, type: 'crumbling' },
      { id: 'l4_crumb2', x: 760, y: 360, width: 75, height: 20, type: 'crumbling' },
      { 
        id: 'l4_move1', 
        x: 900, y: 440, width: 130, height: 24, type: 'solid',
        startX: 900, startY: 440, distanceX: 0, distanceY: -160, speed: 1.6, vx: 0, vy: -1.6
      },
      { id: 'l4_p4', x: 1100, y: 320, width: 120, height: 24, type: 'solid' },

      // Checkpoint 1 Sanctuary (1260 - 1420)
      { id: 'l4_cp1_plat', x: 1260, y: 320, width: 160, height: 24, type: 'solid' },

      // Section 2: Twin bounce pads & floating archipelago (1420 - 2580)
      { id: 'l4_spring2', x: 1480, y: 424, width: 48, height: 16, type: 'bouncy' },
      { id: 'l4_p5', x: 1460, y: 440, width: 100, height: 20, type: 'solid' },
      { id: 'l4_p6', x: 1620, y: 260, width: 120, height: 20, type: 'one-way' },
      { 
        id: 'l4_move2', 
        x: 1800, y: 320, width: 100, height: 20, type: 'solid',
        startX: 1800, startY: 320, distanceX: 180, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0
      },
      { id: 'l4_crumb3', x: 2060, y: 360, width: 75, height: 20, type: 'crumbling' },
      { id: 'l4_crumb4', x: 2180, y: 320, width: 75, height: 20, type: 'crumbling' },
      { id: 'l4_crumb5', x: 2300, y: 280, width: 75, height: 20, type: 'crumbling' },
      { id: 'l4_p7', x: 2440, y: 400, width: 120, height: 20, type: 'solid' },

      // Checkpoint 2 Summit (2560 - 2720)
      { id: 'l4_cp2_plat', x: 2560, y: 300, width: 160, height: 24, type: 'solid' },

      // Section 3: High Wind Cloud Fortress (2720 - 4000)
      { id: 'l4_spring3', x: 2780, y: 364, width: 48, height: 16, type: 'bouncy' },
      { id: 'l4_p8', x: 2760, y: 380, width: 100, height: 20, type: 'solid' },
      { id: 'l4_p9', x: 2920, y: 220, width: 120, height: 20, type: 'one-way' },
      { 
        id: 'l4_move3', 
        x: 3100, y: 360, width: 110, height: 20, type: 'solid',
        startX: 3100, startY: 360, distanceX: 200, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0
      },
      { id: 'l4_crumb6', x: 3380, y: 300, width: 75, height: 20, type: 'crumbling' },
      { id: 'l4_crumb7', x: 3500, y: 260, width: 75, height: 20, type: 'crumbling' },
      { id: 'l4_spring4', x: 3640, y: 244, width: 48, height: 16, type: 'bouncy' },
      { id: 'l4_p10', x: 3620, y: 260, width: 100, height: 20, type: 'solid' },
      { id: 'l4_p11', x: 3780, y: 260, width: 220, height: 440, type: 'solid' }
    ],
    hazards: [
      { id: 'l4_h1', x: 0, y: 680, width: 4000, height: 20, type: 'spike' }
    ],
    collectibles: [
      { id: 'l4_jetpack', x: 200, y: 520, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l4_fuel1', x: 960, y: 380, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l4_fuel2', x: 1860, y: 240, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l4_fuel3', x: 3160, y: 280, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },

      { id: 'l4_c1', x: 320, y: 380, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l4_c2', x: 480, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l4_c3', x: 650, y: 340, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l4_c4', x: 800, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l4_c5', x: 1160, y: 260, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l4_c6', x: 1680, y: 200, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l4_c7', x: 1880, y: 270, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l4_c8', x: 2220, y: 260, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l4_c9', x: 2480, y: 340, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l4_c10', x: 2980, y: 160, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l4_c11', x: 3420, y: 240, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l4_c12', x: 3820, y: 180, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l4_e1', x: 500, y: 260, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 420, maxX: 640, facing: 1 },
      { id: 'l4_e2', x: 1140, y: 292, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 1110, maxX: 1210, facing: 1 },
      { id: 'l4_e3', x: 1020, y: 200, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 920, maxX: 1200, facing: -1 },
      { id: 'l4_e4', x: 1660, y: 232, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 1630, maxX: 1730, facing: 1 },
      { id: 'l4_e5', x: 1820, y: 190, width: 26, height: 22, type: 'flyer', vx: 2.0, vy: 0, minX: 1720, maxX: 2020, facing: 1 },
      { id: 'l4_e6', x: 2240, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 2120, maxX: 2400, facing: -1 },
      { id: 'l4_e7', x: 2480, y: 372, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 2450, maxX: 2550, facing: 1 },
      { id: 'l4_e8', x: 2800, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 2700, maxX: 3000, facing: 1 },
      { id: 'l4_e9', x: 2960, y: 192, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 2930, maxX: 3030, facing: -1 },
      { id: 'l4_e10', x: 3260, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 3140, maxX: 3440, facing: 1 },
      { id: 'l4_e11', x: 3560, y: 180, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 3450, maxX: 3750, facing: -1 },
      { id: 'l4_e12', x: 3820, y: 232, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 3790, maxX: 3950, facing: 1 }
    ],
    parTime: 70,
    threeStarScore: 5800
  },

  // ==========================================
  // LEVEL 5: MIDNIGHT CITADEL
  // The ultimate castle assault: drawbridges, fortress spires, gargoyles, 2 checkpoints, 14 enemies
  // ==========================================
  {
    id: 5,
    title: '5. Midnight Citadel',
    description: 'Conquer the sprawling fortified citadel, vanquish dark flyers, and claim the ultimate golden crown!',
    worldWidth: 4400,
    worldHeight: 700,
    theme: THEMES.castle,
    playerStart: { x: 80, y: 520 },
    goal: { x: 4260, y: 220, width: 48, height: 64 },
    checkpoints: [
      { x: 1420, y: 380, width: 30, height: 40, activated: false },
      { x: 2860, y: 320, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // Section 1: Citadel outer barbican (0 - 1420)
      { id: 'l5_p1', x: 0, y: 580, width: 240, height: 120, type: 'solid' },
      { id: 'l5_spring1', x: 280, y: 504, width: 48, height: 16, type: 'bouncy' },
      { id: 'l5_p2', x: 270, y: 520, width: 80, height: 180, type: 'solid' },
      { id: 'l5_p3', x: 420, y: 440, width: 90, height: 20, type: 'one-way' },
      { id: 'l5_p4', x: 580, y: 320, width: 100, height: 20, type: 'solid' },
      { 
        id: 'l5_move1', 
        x: 740, y: 360, width: 90, height: 20, type: 'solid',
        startX: 740, startY: 360, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0
      },
      { id: 'l5_p5', x: 960, y: 480, width: 140, height: 220, type: 'solid' },
      { id: 'l5_crumb1', x: 1160, y: 440, width: 65, height: 20, type: 'crumbling' },
      { id: 'l5_crumb2', x: 1280, y: 400, width: 65, height: 20, type: 'crumbling' },

      // Checkpoint 1 Gargoyle Terrace (1380 - 1560)
      { id: 'l5_cp1_plat', x: 1380, y: 420, width: 180, height: 280, type: 'solid' },

      // Section 2: Interior Castle Courtyard & Saw Gauntlet (1560 - 2860)
      { id: 'l5_crumb3', x: 1620, y: 380, width: 65, height: 20, type: 'crumbling' },
      { id: 'l5_crumb4', x: 1740, y: 340, width: 65, height: 20, type: 'crumbling' },
      { id: 'l5_spring2', x: 1870, y: 284, width: 48, height: 16, type: 'bouncy' },
      { id: 'l5_p6', x: 1860, y: 300, width: 90, height: 20, type: 'solid' },
      { 
        id: 'l5_move2', 
        x: 2020, y: 380, width: 100, height: 20, type: 'solid',
        startX: 2020, startY: 380, distanceX: 0, distanceY: -200, speed: 2.0, vx: 0, vy: -2.0
      },
      { id: 'l5_p7', x: 2200, y: 200, width: 110, height: 20, type: 'one-way' },
      { id: 'l5_p8', x: 2380, y: 320, width: 120, height: 20, type: 'solid' },
      { 
        id: 'l5_move3', 
        x: 2560, y: 400, width: 100, height: 20, type: 'solid',
        startX: 2560, startY: 400, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0
      },

      // Checkpoint 2 Grand Bastion (2820 - 3000)
      { id: 'l5_cp2_plat', x: 2820, y: 360, width: 180, height: 340, type: 'solid' },

      // Section 3: Throne Approach & Spire Ascent (3000 - 4400)
      { id: 'l5_crumb5', x: 3060, y: 340, width: 70, height: 20, type: 'crumbling' },
      { id: 'l5_crumb6', x: 3200, y: 300, width: 70, height: 20, type: 'crumbling' },
      { id: 'l5_spring3', x: 3340, y: 284, width: 48, height: 16, type: 'bouncy' },
      { id: 'l5_p9', x: 3330, y: 300, width: 90, height: 20, type: 'solid' },
      { 
        id: 'l5_move4', 
        x: 3500, y: 420, width: 100, height: 20, type: 'solid',
        startX: 3500, startY: 420, distanceX: 0, distanceY: -220, speed: 2.2, vx: 0, vy: -2.2
      },
      { id: 'l5_p10', x: 3680, y: 220, width: 120, height: 20, type: 'one-way' },
      { id: 'l5_crumb7', x: 3860, y: 280, width: 70, height: 20, type: 'crumbling' },
      { id: 'l5_crumb8', x: 3990, y: 260, width: 70, height: 20, type: 'crumbling' },
      { id: 'l5_p11', x: 4120, y: 280, width: 280, height: 420, type: 'solid' }
    ],
    hazards: [
      { id: 'l5_spike1', x: 240, y: 680, width: 3880, height: 20, type: 'spike' },
      { 
        id: 'l5_saw1', 
        x: 820, y: 260, width: 42, height: 42, type: 'saw',
        startX: 820, startY: 260, distanceX: 0, distanceY: 100, speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l5_saw2', 
        x: 1680, y: 220, width: 42, height: 42, type: 'saw',
        startX: 1680, startY: 220, distanceX: 80, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { 
        id: 'l5_saw3', 
        x: 2300, y: 220, width: 44, height: 44, type: 'saw',
        startX: 2300, startY: 220, distanceX: 0, distanceY: 120, speed: 2.4, vx: 0, vy: 2.4 
      },
      { 
        id: 'l5_saw4', 
        x: 3740, y: 140, width: 44, height: 44, type: 'saw',
        startX: 3740, startY: 140, distanceX: 80, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l5_jetpack', x: 180, y: 520, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l5_fuel1', x: 620, y: 260, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l5_fuel2', x: 2240, y: 140, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l5_fuel3', x: 3720, y: 160, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },

      { id: 'l5_c1', x: 300, y: 440, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l5_c2', x: 460, y: 380, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l5_c3', x: 800, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l5_c4', x: 1020, y: 420, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l5_c5', x: 1660, y: 320, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l5_c6', x: 1900, y: 220, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l5_c7', x: 2440, y: 260, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l5_c8', x: 2620, y: 340, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l5_c9', x: 3120, y: 280, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l5_c10', x: 3380, y: 220, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l5_c11', x: 3900, y: 220, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l5_c12', x: 4200, y: 220, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l5_e1', x: 440, y: 412, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 420, maxX: 500, facing: 1 },
      { id: 'l5_e2', x: 620, y: 292, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 580, maxX: 670, facing: -1 },
      { id: 'l5_e3', x: 780, y: 200, width: 26, height: 22, type: 'flyer', vx: 2.0, vy: 0, minX: 700, maxX: 950, facing: 1 },
      { id: 'l5_e4', x: 1000, y: 452, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 960, maxX: 1090, facing: 1 },
      { id: 'l5_e5', x: 1220, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 1100, maxX: 1350, facing: -1 },
      { id: 'l5_e6', x: 1480, y: 392, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 1440, maxX: 1540, facing: 1 },
      { id: 'l5_e7', x: 1780, y: 180, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 1650, maxX: 1950, facing: 1 },
      { id: 'l5_e8', x: 2240, y: 172, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 2200, maxX: 2300, facing: -1 },
      { id: 'l5_e9', x: 2420, y: 292, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 2380, maxX: 2490, facing: 1 },
      { id: 'l5_e10', x: 2680, y: 240, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 2540, maxX: 2820, facing: 1 },
      { id: 'l5_e11', x: 3260, y: 180, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 3100, maxX: 3400, facing: -1 },
      { id: 'l5_e12', x: 3720, y: 192, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 3680, maxX: 3790, facing: 1 },
      { id: 'l5_e13', x: 3940, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 3800, maxX: 4100, facing: 1 },
      { id: 'l5_e14', x: 4200, y: 252, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 4130, maxX: 4240, facing: -1 }
    ],
    parTime: 80,
    threeStarScore: 7000
  },
  // ==========================================
  // LEVEL 6: NEON CYBER-OUTPOST
  // Futuristic tech facility, Plasma Blaster weapon, moving laser lifts, 2 checkpoints, 15 enemies
  // ==========================================
  {
    id: 6,
    title: 'Level 6: Neon Cyber-Outpost',
    description: 'Arm the Plasma Blaster! Blast through robotic flying drones, ride vertical energy lifts, and breach the core security sector.',
    worldWidth: 4600,
    worldHeight: 600,
    theme: THEMES.cyber,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4420, y: 220, width: 40, height: 60 },
    checkpoints: [
      { x: 1520, y: 380, width: 32, height: 48 },
      { x: 3040, y: 260, width: 32, height: 48 }
    ],
    platforms: [
      // 1. Starting Sector (Bay A)
      { id: 'l6_p1', x: 0, y: 520, width: 500, height: 80, type: 'solid' },
      { id: 'l6_p2', x: 220, y: 420, width: 90, height: 20, type: 'solid' }, // Pedestal with Blaster!
      { id: 'l6_p3', x: 380, y: 360, width: 110, height: 20, type: 'solid' },

      // Vertical Energy Lift 1 (Tests jumping off up/down platform!)
      { 
        id: 'l6_lift1', 
        x: 540, y: 460, width: 100, height: 22, type: 'solid',
        startX: 540, startY: 460, distanceX: 0, distanceY: -180, speed: 2.0, vx: 0, vy: -2.0 
      },

      // Upper platform leading over hazard gap
      { id: 'l6_p4', x: 680, y: 280, width: 140, height: 20, type: 'solid' },
      { id: 'l6_p5', x: 880, y: 340, width: 120, height: 20, type: 'crumbling' },
      { id: 'l6_p6', x: 1040, y: 400, width: 130, height: 20, type: 'solid' },
      { id: 'l6_p7', x: 1220, y: 460, width: 120, height: 20, type: 'bouncy' },

      // Horizontal Carrier Lift
      { 
        id: 'l6_lift2', 
        x: 1380, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1380, startY: 380, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },

      // Checkpoint 1 Hub (Base B)
      { id: 'l6_p8', x: 1500, y: 420, width: 320, height: 180, type: 'solid' },
      { id: 'l6_p9', x: 1640, y: 320, width: 100, height: 20, type: 'one-way' },
      { id: 'l6_p10', x: 1780, y: 240, width: 110, height: 20, type: 'solid' },

      // Energy Chasm with Vertical Lift 2
      { 
        id: 'l6_lift3', 
        x: 1940, y: 440, width: 90, height: 22, type: 'solid',
        startX: 1940, startY: 440, distanceX: 0, distanceY: -220, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l6_p11', x: 2080, y: 240, width: 140, height: 20, type: 'solid' },
      { id: 'l6_p12', x: 2260, y: 320, width: 120, height: 20, type: 'crumbling' },
      { id: 'l6_p13', x: 2420, y: 380, width: 110, height: 20, type: 'solid' },

      // Jetpack Outpost Platform
      { id: 'l6_p14', x: 2580, y: 440, width: 340, height: 160, type: 'solid' },
      { id: 'l6_p15', x: 2680, y: 360, width: 100, height: 20, type: 'solid' }, // Jetpack pedestal
      { id: 'l6_p16', x: 2840, y: 280, width: 110, height: 20, type: 'bouncy' },

      // Checkpoint 2 Hub (Base C)
      { id: 'l6_p17', x: 3000, y: 300, width: 280, height: 300, type: 'solid' },
      { id: 'l6_p18', x: 3120, y: 200, width: 90, height: 20, type: 'one-way' },

      // High Altitude Drone Corridor
      { 
        id: 'l6_lift4', 
        x: 3340, y: 320, width: 100, height: 22, type: 'solid',
        startX: 3340, startY: 320, distanceX: 200, distanceY: 0, speed: 2.4, vx: 2.4, vy: 0 
      },
      { id: 'l6_p19', x: 3580, y: 240, width: 110, height: 20, type: 'solid' },

      // Final Vertical Energy Lift 5 to the Citadel Goal
      { 
        id: 'l6_lift5', 
        x: 3740, y: 440, width: 100, height: 22, type: 'solid',
        startX: 3740, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l6_p20', x: 3900, y: 240, width: 130, height: 20, type: 'crumbling' },
      { id: 'l6_p21', x: 4080, y: 300, width: 140, height: 20, type: 'solid' },
      { id: 'l6_p22', x: 4260, y: 240, width: 100, height: 20, type: 'bouncy' },

      // Final Extraction Core Platform
      { id: 'l6_p23', x: 4380, y: 280, width: 220, height: 320, type: 'solid' }
    ],
    hazards: [
      // Floor spikes under gaps
      { id: 'l6_spk1', x: 500, y: 580, width: 160, height: 20, type: 'spike' },
      { id: 'l6_spk2', x: 1340, y: 580, width: 160, height: 20, type: 'spike' },
      { id: 'l6_spk3', x: 1900, y: 580, width: 200, height: 20, type: 'spike' },
      { id: 'l6_spk4', x: 3300, y: 580, width: 240, height: 20, type: 'spike' },
      { id: 'l6_spk5', x: 3700, y: 580, width: 180, height: 20, type: 'spike' },

      // Moving plasma energy saws
      { 
        id: 'l6_saw1', 
        x: 800, y: 240, width: 44, height: 44, type: 'saw',
        startX: 800, startY: 240, distanceX: 0, distanceY: 100, speed: 2.0, vx: 0, vy: 2.0 
      },
      { 
        id: 'l6_saw2', 
        x: 2120, y: 160, width: 44, height: 44, type: 'saw',
        startX: 2120, startY: 160, distanceX: 100, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l6_saw3', 
        x: 3620, y: 160, width: 44, height: 44, type: 'saw',
        startX: 3620, startY: 160, distanceX: 0, distanceY: 90, speed: 2.4, vx: 0, vy: 2.4 
      },
      { 
        id: 'l6_saw4', 
        x: 4180, y: 180, width: 44, height: 44, type: 'saw',
        startX: 4180, startY: 180, distanceX: 0, distanceY: 80, speed: 2.0, vx: 0, vy: 2.0 
      }
    ],
    collectibles: [
      // Primary weapon power-up: Plasma Blaster!
      { id: 'l6_blaster', x: 250, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },

      // Blaster ammo cells
      { id: 'l6_ammo1', x: 740, y: 246, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l6_ammo2', x: 1680, y: 286, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l6_ammo3', x: 2320, y: 286, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l6_ammo4', x: 3420, y: 286, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l6_ammo5', x: 4120, y: 266, width: 24, height: 24, type: 'blaster_ammo', value: 300 },

      // Jetpack gadget & fuel refills
      { id: 'l6_jetpack', x: 2720, y: 326, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l6_fuel1', x: 3160, y: 166, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l6_fuel2', x: 3960, y: 206, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },

      // Coins & Gems
      { id: 'l6_c1', x: 320, y: 470, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l6_c2', x: 420, y: 320, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l6_c3', x: 920, y: 290, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l6_c4', x: 1100, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l6_c5', x: 1260, y: 410, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l6_c6', x: 1820, y: 190, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l6_c7', x: 2140, y: 190, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l6_c8', x: 2460, y: 330, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l6_c9', x: 2900, y: 230, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l6_c10', x: 3240, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l6_c11', x: 3620, y: 190, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l6_c12', x: 4300, y: 190, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      // Ground patrollers & swooping cyber flyers targetable with the blaster
      { id: 'l6_e1', x: 340, y: 492, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 300, maxX: 460, facing: 1 },
      { id: 'l6_e2', x: 520, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.0, vy: 0, minX: 420, maxX: 640, facing: -1 },
      { id: 'l6_e3', x: 720, y: 252, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 680, maxX: 810, facing: 1 },
      { id: 'l6_e4', x: 920, y: 180, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 840, maxX: 1040, facing: -1 },
      { id: 'l6_e5', x: 1080, y: 372, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 1050, maxX: 1160, facing: 1 },
      { id: 'l6_e6', x: 1320, y: 260, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 1220, maxX: 1480, facing: 1 },
      { id: 'l6_e7', x: 1600, y: 392, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 1530, maxX: 1720, facing: 1 },
      { id: 'l6_e8', x: 1820, y: 140, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 1700, maxX: 2000, facing: -1 },
      { id: 'l6_e9', x: 2120, y: 212, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 2090, maxX: 2210, facing: 1 },
      { id: 'l6_e10', x: 2360, y: 180, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 2240, maxX: 2540, facing: 1 },
      { id: 'l6_e11', x: 2740, y: 412, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 2620, maxX: 2880, facing: -1 },
      { id: 'l6_e12', x: 3180, y: 120, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 3040, maxX: 3350, facing: 1 },
      { id: 'l6_e13', x: 3460, y: 200, width: 26, height: 22, type: 'flyer', vx: 2.5, vy: 0, minX: 3340, maxX: 3660, facing: -1 },
      { id: 'l6_e14', x: 4120, y: 272, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 4090, maxX: 4210, facing: 1 },
      { id: 'l6_e15', x: 4280, y: 140, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 4160, maxX: 4400, facing: -1 }
    ],
    parTime: 85,
    threeStarScore: 7500
  },
  // ==========================================
  // LEVEL 7: AQUAMARINE GROTTO
  // Deep underwater cavern with coral reefs, bubble shields, float-glide abysses, 2 checkpoints
  // ==========================================
  {
    id: 7,
    title: 'Level 7: Aquamarine Grotto',
    description: 'Arm the Bubble Shield! Float-glide across coral chasms, absorb peril with temporary invulnerability, and reach the ancient sunken shrine.',
    worldWidth: 4400,
    worldHeight: 640,
    theme: THEMES.reef,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4220, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1480, y: 380, width: 32, height: 48, activated: false },
      { x: 2980, y: 300, width: 32, height: 48, activated: false }
    ],
    platforms: [
      // Section 1: Sunken Shallows & Shield Altar (0 - 1480)
      { id: 'l7_p1', x: 0, y: 520, width: 460, height: 120, type: 'solid' },
      { id: 'l7_p2', x: 200, y: 420, width: 90, height: 20, type: 'solid' }, // Bubble Shield pedestal!
      { id: 'l7_p3', x: 360, y: 360, width: 100, height: 20, type: 'solid' },

      // Float Glide Gap 1 across spike trench
      { id: 'l7_p4', x: 720, y: 380, width: 130, height: 20, type: 'solid' },
      { id: 'l7_crumb1', x: 900, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l7_p5', x: 1040, y: 420, width: 120, height: 20, type: 'bouncy' },

      // Moving Coral Lift 1
      {
        id: 'l7_lift1',
        x: 1220, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1220, startY: 380, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0
      },

      // Checkpoint 1 Hub (1440 - 1760)
      { id: 'l7_p6', x: 1440, y: 440, width: 260, height: 200, type: 'solid' },
      { id: 'l7_p7', x: 1560, y: 340, width: 90, height: 20, type: 'one-way' },
      { id: 'l7_p8', x: 1680, y: 260, width: 110, height: 20, type: 'solid' }, // Shield refill 2

      // Section 2: Deep Anemone Trench & Kinetic Saws (1760 - 2980)
      {
        id: 'l7_lift2',
        x: 1860, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1860, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2
      },
      { id: 'l7_p9', x: 2000, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l7_crumb2', x: 2180, y: 300, width: 90, height: 20, type: 'crumbling' },
      { id: 'l7_crumb3', x: 2320, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l7_p10', x: 2460, y: 380, width: 110, height: 20, type: 'solid' },
      {
        id: 'l7_lift3',
        x: 2620, y: 340, width: 110, height: 22, type: 'solid',
        startX: 2620, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0
      },
      { id: 'l7_p11', x: 2840, y: 260, width: 100, height: 20, type: 'bouncy' },

      // Checkpoint 2 Coral Terrace (2940 - 3220)
      { id: 'l7_p12', x: 2940, y: 360, width: 260, height: 280, type: 'solid' },
      { id: 'l7_p13', x: 3060, y: 240, width: 100, height: 20, type: 'solid' }, // Shield refill 3

      // Section 3: High Grotto Gliding Descent & Sunken Temple (3220 - 4400)
      {
        id: 'l7_lift4',
        x: 3260, y: 440, width: 90, height: 22, type: 'solid',
        startX: 3260, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2
      },
      { id: 'l7_p14', x: 3400, y: 220, width: 120, height: 20, type: 'solid' }, // Launch peak
      { id: 'l7_crumb4', x: 3640, y: 280, width: 80, height: 20, type: 'crumbling' },
      { id: 'l7_p15', x: 3860, y: 320, width: 120, height: 20, type: 'solid' },
      { id: 'l7_p16', x: 3920, y: 220, width: 90, height: 20, type: 'one-way' }, // Shield refill 4
      { id: 'l7_p17', x: 4040, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l7_p18', x: 4180, y: 300, width: 220, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l7_spk1', x: 460, y: 600, width: 260, height: 20, type: 'spike' },
      { id: 'l7_spk2', x: 1160, y: 600, width: 280, height: 20, type: 'spike' },
      { id: 'l7_spk3', x: 1800, y: 600, width: 260, height: 20, type: 'spike' },
      { id: 'l7_spk4', x: 3200, y: 600, width: 280, height: 20, type: 'spike' },
      { id: 'l7_spk5', x: 3520, y: 600, width: 340, height: 20, type: 'spike' },

      // Kinetic coral saws
      {
        id: 'l7_saw1',
        x: 840, y: 240, width: 44, height: 44, type: 'saw',
        startX: 840, startY: 240, distanceX: 0, distanceY: 90, speed: 2.0, vx: 0, vy: 2.0
      },
      {
        id: 'l7_saw2',
        x: 2220, y: 180, width: 44, height: 44, type: 'saw',
        startX: 2220, startY: 180, distanceX: 80, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0
      },
      {
        id: 'l7_saw3',
        x: 3720, y: 160, width: 44, height: 44, type: 'saw',
        startX: 3720, startY: 160, distanceX: 0, distanceY: 80, speed: 2.0, vx: 0, vy: 2.0
      }
    ],
    collectibles: [
      // Bubble Shield Stations
      { id: 'l7_shield1', x: 230, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l7_shield2', x: 1720, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l7_shield3', x: 3090, y: 206, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l7_shield4', x: 3950, y: 186, width: 28, height: 28, type: 'bubble_shield', value: 800 },

      // Coins & Gems
      { id: 'l7_c1', x: 300, y: 480, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l7_c2', x: 400, y: 320, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l7_c3', x: 780, y: 340, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l7_c4', x: 940, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l7_c5', x: 1100, y: 370, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l7_c6', x: 1600, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l7_c7', x: 2060, y: 200, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l7_c8', x: 2360, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l7_c9', x: 2500, y: 340, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l7_c10', x: 2880, y: 220, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l7_c11', x: 3440, y: 180, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l7_c12', x: 3680, y: 240, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l7_c13', x: 4080, y: 210, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l7_e1', x: 320, y: 492, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 280, maxX: 440, facing: 1 },
      { id: 'l7_e2', x: 560, y: 240, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 460, maxX: 680, facing: -1 },
      { id: 'l7_e3', x: 760, y: 352, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 730, maxX: 830, facing: 1 },
      { id: 'l7_e4', x: 1280, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 1180, maxX: 1420, facing: 1 },
      { id: 'l7_e5', x: 1520, y: 412, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 1460, maxX: 1620, facing: 1 },
      { id: 'l7_e6', x: 1940, y: 200, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 1820, maxX: 2120, facing: -1 },
      { id: 'l7_e7', x: 2040, y: 212, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 2010, maxX: 2110, facing: 1 },
      { id: 'l7_e8', x: 2480, y: 352, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 2460, maxX: 2560, facing: -1 },
      { id: 'l7_e9', x: 2700, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 2580, maxX: 2860, facing: 1 },
      { id: 'l7_e10', x: 3000, y: 332, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 2960, maxX: 3120, facing: 1 },
      { id: 'l7_e11', x: 3340, y: 180, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 3220, maxX: 3520, facing: -1 },
      { id: 'l7_e12', x: 3900, y: 292, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 3870, maxX: 3970, facing: 1 },
      { id: 'l7_e13', x: 4100, y: 150, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 4000, maxX: 4220, facing: -1 }
    ],
    parTime: 80,
    threeStarScore: 7000
  }
];

export const INITIAL_LEVELS: LevelData[] = [...BASE_LEVELS, ...EXTRA_LEVELS, ...JETPACK_MEGA_LEVELS, ...ROCKETEER_LEVELS];
