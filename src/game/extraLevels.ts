import { LevelData } from '../types/game';
import { THEMES } from './levels';

export const EXTRA_LEVELS: LevelData[] = [
  // ==========================================
  // LEVEL 8: TWILIGHT DUNES
  // ==========================================
  {
    id: 8,
    title: "Level 8: Twilight Dunes",
    description: "Cross shifting desert sands, leap across crumbling sandstone ledges, and ride wind-swept oasis lifts across the twilight desert.",
    worldWidth: 4400,
    worldHeight: 620,
    theme: THEMES.desert,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4220, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1408, y: 360, width: 32, height: 48, activated: false },
      { x: 2904, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l8_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l8_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l8_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l8_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l8_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l8_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l8_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l8_cp1_base', x: 1348, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l8_p7', x: 1468, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l8_lift2', 
        x: 1628, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1628, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l8_p8', x: 1788, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l8_crumb2', x: 1968, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l8_crumb3', x: 2098, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l8_p9', x: 2238, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l8_lift3', 
        x: 2398, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2398, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l8_spring2', x: 2628, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l8_cp2_base', x: 2844, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l8_p10', x: 2964, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l8_lift4', 
        x: 3124, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3124, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l8_p11', x: 3284, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l8_crumb4', x: 3464, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l8_p12', x: 3604, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l8_p13', x: 3784, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l8_goal_base', x: 4140, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l8_spk1', x: 440, y: 580, width: 180, height: 20, type: 'spike' },
      { id: 'l8_spk2', x: 1588, y: 580, width: 200, height: 20, type: 'spike' },
      { id: 'l8_spk3', x: 2328, y: 580, width: 280, height: 20, type: 'spike' },
      { id: 'l8_spk4', x: 3084, y: 580, width: 200, height: 20, type: 'spike' },
      { id: 'l8_spk5', x: 3880, y: 580, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l8_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l8_saw2', 
        x: 1833, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1833, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l8_saw3', 
        x: 2966, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2966, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l8_speed', x: 250, y: 386, width: 24, height: 24, type: 'powerup_speed', value: 400 },
      { id: 'l8_jump', x: 1488, y: 286, width: 24, height: 24, type: 'powerup_jump', value: 400 },
      { id: 'l8_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c2', x: 645, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c3', x: 991, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l8_c4', x: 1336, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c5', x: 1682, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c6', x: 2027, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l8_c7', x: 2373, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c8', x: 2718, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c9', x: 3064, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l8_c10', x: 3409, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c11', x: 3755, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l8_c12', x: 4100, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l8_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l8_e2', x: 700, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.6, vy: 0, minX: 580, maxX: 840, facing: 1 },
      { id: 'l8_e3', x: 1000, y: 380, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 930, maxX: 1080, facing: -1 },
      { id: 'l8_e4', x: 1300, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.4, vy: 0, minX: 1180, maxX: 1440, facing: 1 },
      { id: 'l8_e5', x: 1600, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 1530, maxX: 1680, facing: -1 },
      { id: 'l8_e6', x: 1900, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.2, vy: 0, minX: 1780, maxX: 2040, facing: 1 },
      { id: 'l8_e7', x: 2200, y: 380, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 2130, maxX: 2280, facing: -1 },
      { id: 'l8_e8', x: 2500, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.6, vy: 0, minX: 2380, maxX: 2640, facing: 1 },
      { id: 'l8_e9', x: 2800, y: 380, width: 28, height: 24, type: 'slime', vx: 1.2, vy: 0, minX: 2730, maxX: 2880, facing: -1 },
      { id: 'l8_e10', x: 3100, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.4, vy: 0, minX: 2980, maxX: 3240, facing: 1 },
      { id: 'l8_e11', x: 3400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 3330, maxX: 3480, facing: -1 },
      { id: 'l8_e12', x: 3700, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.2, vy: 0, minX: 3580, maxX: 3840, facing: 1 }
    ],
    parTime: 80,
    threeStarScore: 6800
  },
  // ==========================================
  // LEVEL 9: FROSTBITE PEAK
  // ==========================================
  {
    id: 9,
    title: "Level 9: Frostbite Peak",
    description: "Brave freezing polar gales! Bounce across slippery ice springs and float-glide with the Bubble Shield over deep glacial chasms.",
    worldWidth: 4500,
    worldHeight: 640,
    theme: THEMES.tundra,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4320, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1440, y: 360, width: 32, height: 48, activated: false },
      { x: 2970, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l9_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l9_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l9_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l9_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l9_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l9_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l9_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l9_cp1_base', x: 1380, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l9_p7', x: 1500, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l9_lift2', 
        x: 1660, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1660, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l9_p8', x: 1820, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l9_crumb2', x: 2000, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l9_crumb3', x: 2130, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l9_p9', x: 2270, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l9_lift3', 
        x: 2430, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2430, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l9_spring2', x: 2660, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l9_cp2_base', x: 2910, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l9_p10', x: 3030, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l9_lift4', 
        x: 3190, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3190, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l9_p11', x: 3350, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l9_crumb4', x: 3530, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l9_p12', x: 3670, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l9_p13', x: 3850, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l9_goal_base', x: 4240, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l9_spk1', x: 440, y: 600, width: 180, height: 20, type: 'spike' },
      { id: 'l9_spk2', x: 1620, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l9_spk3', x: 2360, y: 600, width: 280, height: 20, type: 'spike' },
      { id: 'l9_spk4', x: 3150, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l9_spk5', x: 3980, y: 600, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l9_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l9_saw2', 
        x: 1867, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1867, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l9_saw3', 
        x: 3034, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3034, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l9_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l9_shield2', x: 1520, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l9_shield3', x: 3050, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l9_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c2', x: 655, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c3', x: 1009, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l9_c4', x: 1364, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c5', x: 1718, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c6', x: 2073, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l9_c7', x: 2427, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c8', x: 2782, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c9', x: 3136, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l9_c10', x: 3491, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c11', x: 3845, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l9_c12', x: 4200, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l9_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.45, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l9_e2', x: 685, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.65, vy: 0, minX: 565, maxX: 825, facing: 1 },
      { id: 'l9_e3', x: 970, y: 380, width: 28, height: 24, type: 'slime', vx: 1.25, vy: 0, minX: 900, maxX: 1050, facing: -1 },
      { id: 'l9_e4', x: 1255, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.45, vy: 0, minX: 1135, maxX: 1395, facing: 1 },
      { id: 'l9_e5', x: 1540, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 1470, maxX: 1620, facing: -1 },
      { id: 'l9_e6', x: 1825, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.25, vy: 0, minX: 1705, maxX: 1965, facing: 1 },
      { id: 'l9_e7', x: 2110, y: 380, width: 28, height: 24, type: 'slime', vx: 1.45, vy: 0, minX: 2040, maxX: 2190, facing: -1 },
      { id: 'l9_e8', x: 2395, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.65, vy: 0, minX: 2275, maxX: 2535, facing: 1 },
      { id: 'l9_e9', x: 2680, y: 380, width: 28, height: 24, type: 'slime', vx: 1.25, vy: 0, minX: 2610, maxX: 2760, facing: -1 },
      { id: 'l9_e10', x: 2965, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.45, vy: 0, minX: 2845, maxX: 3105, facing: 1 },
      { id: 'l9_e11', x: 3250, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 3180, maxX: 3330, facing: -1 },
      { id: 'l9_e12', x: 3535, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.25, vy: 0, minX: 3415, maxX: 3675, facing: 1 },
      { id: 'l9_e13', x: 3820, y: 380, width: 28, height: 24, type: 'slime', vx: 1.45, vy: 0, minX: 3750, maxX: 3900, facing: -1 }
    ],
    parTime: 85,
    threeStarScore: 7200
  },
  // ==========================================
  // LEVEL 10: TOXIC BAYOU
  // ==========================================
  {
    id: 10,
    title: "Level 10: Toxic Bayou",
    description: "Arm the Plasma Blaster and tread lightly over bubbling acidic pools, shooting down swarms of bio-engineered flying predators.",
    worldWidth: 4600,
    worldHeight: 620,
    theme: THEMES.toxic,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4420, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1472, y: 360, width: 32, height: 48, activated: false },
      { x: 3036, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l10_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l10_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l10_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l10_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l10_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l10_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l10_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l10_cp1_base', x: 1412, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l10_p7', x: 1532, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l10_lift2', 
        x: 1692, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1692, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l10_p8', x: 1852, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l10_crumb2', x: 2032, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l10_crumb3', x: 2162, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l10_p9', x: 2302, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l10_lift3', 
        x: 2462, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2462, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l10_spring2', x: 2692, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l10_cp2_base', x: 2976, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l10_p10', x: 3096, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l10_lift4', 
        x: 3256, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3256, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l10_p11', x: 3416, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l10_crumb4', x: 3596, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l10_p12', x: 3736, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l10_p13', x: 3916, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l10_goal_base', x: 4340, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l10_spk1', x: 440, y: 580, width: 180, height: 20, type: 'spike' },
      { id: 'l10_spk2', x: 1652, y: 580, width: 200, height: 20, type: 'spike' },
      { id: 'l10_spk3', x: 2392, y: 580, width: 280, height: 20, type: 'spike' },
      { id: 'l10_spk4', x: 3216, y: 580, width: 200, height: 20, type: 'spike' },
      { id: 'l10_spk5', x: 4080, y: 580, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l10_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l10_saw2', 
        x: 1600, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1600, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l10_saw3', 
        x: 2500, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2500, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l10_saw4', 
        x: 3400, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3400, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l10_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l10_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l10_ammo2', x: 1892, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l10_ammo3', x: 3456, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l10_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c2', x: 664, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c3', x: 1027, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l10_c4', x: 1391, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c5', x: 1755, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c6', x: 2118, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l10_c7', x: 2482, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c8', x: 2845, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c9', x: 3209, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l10_c10', x: 3573, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c11', x: 3936, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l10_c12', x: 4300, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l10_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l10_e2', x: 671, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 551, maxX: 811, facing: 1 },
      { id: 'l10_e3', x: 942, y: 380, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 872, maxX: 1022, facing: -1 },
      { id: 'l10_e4', x: 1213, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.5, vy: 0, minX: 1093, maxX: 1353, facing: 1 },
      { id: 'l10_e5', x: 1484, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 1414, maxX: 1564, facing: -1 },
      { id: 'l10_e6', x: 1755, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.3, vy: 0, minX: 1635, maxX: 1895, facing: 1 },
      { id: 'l10_e7', x: 2026, y: 380, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 1956, maxX: 2106, facing: -1 },
      { id: 'l10_e8', x: 2297, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 2177, maxX: 2437, facing: 1 },
      { id: 'l10_e9', x: 2568, y: 380, width: 28, height: 24, type: 'slime', vx: 1.3, vy: 0, minX: 2498, maxX: 2648, facing: -1 },
      { id: 'l10_e10', x: 2839, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.5, vy: 0, minX: 2719, maxX: 2979, facing: 1 },
      { id: 'l10_e11', x: 3110, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 3040, maxX: 3190, facing: -1 },
      { id: 'l10_e12', x: 3381, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.3, vy: 0, minX: 3261, maxX: 3521, facing: 1 },
      { id: 'l10_e13', x: 3652, y: 380, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 3582, maxX: 3732, facing: -1 },
      { id: 'l10_e14', x: 3923, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 3803, maxX: 4063, facing: 1 }
    ],
    parTime: 85,
    threeStarScore: 7500
  },
  // ==========================================
  // LEVEL 11: MAGMA CATACOMBS
  // ==========================================
  {
    id: 11,
    title: "Level 11: Magma Catacombs",
    description: "Navigate subterranean volcanic chambers with vertical magma lifts, criss-crossing rotating saws, and protective bubble shielding.",
    worldWidth: 4600,
    worldHeight: 650,
    theme: THEMES.lava,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4420, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1472, y: 360, width: 32, height: 48, activated: false },
      { x: 3036, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l11_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l11_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l11_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l11_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l11_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l11_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l11_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l11_cp1_base', x: 1412, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l11_p7', x: 1532, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l11_lift2', 
        x: 1692, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1692, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l11_p8', x: 1852, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l11_crumb2', x: 2032, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l11_crumb3', x: 2162, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l11_p9', x: 2302, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l11_lift3', 
        x: 2462, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2462, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l11_spring2', x: 2692, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l11_cp2_base', x: 2976, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l11_p10', x: 3096, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l11_lift4', 
        x: 3256, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3256, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l11_p11', x: 3416, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l11_crumb4', x: 3596, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l11_p12', x: 3736, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l11_p13', x: 3916, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l11_goal_base', x: 4340, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l11_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l11_spk2', x: 1652, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l11_spk3', x: 2392, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l11_spk4', x: 3216, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l11_spk5', x: 4080, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l11_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l11_saw2', 
        x: 1600, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1600, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l11_saw3', 
        x: 2500, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2500, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l11_saw4', 
        x: 3400, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3400, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l11_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l11_shield2', x: 1552, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l11_shield3', x: 3116, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l11_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c2', x: 664, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c3', x: 1027, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l11_c4', x: 1391, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c5', x: 1755, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c6', x: 2118, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l11_c7', x: 2482, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c8', x: 2845, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c9', x: 3209, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l11_c10', x: 3573, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c11', x: 3936, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l11_c12', x: 4300, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l11_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.55, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l11_e2', x: 671, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 551, maxX: 811, facing: 1 },
      { id: 'l11_e3', x: 942, y: 380, width: 28, height: 24, type: 'slime', vx: 1.35, vy: 0, minX: 872, maxX: 1022, facing: -1 },
      { id: 'l11_e4', x: 1213, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.55, vy: 0, minX: 1093, maxX: 1353, facing: 1 },
      { id: 'l11_e5', x: 1484, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 1414, maxX: 1564, facing: -1 },
      { id: 'l11_e6', x: 1755, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.35, vy: 0, minX: 1635, maxX: 1895, facing: 1 },
      { id: 'l11_e7', x: 2026, y: 380, width: 28, height: 24, type: 'slime', vx: 1.55, vy: 0, minX: 1956, maxX: 2106, facing: -1 },
      { id: 'l11_e8', x: 2297, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 2177, maxX: 2437, facing: 1 },
      { id: 'l11_e9', x: 2568, y: 380, width: 28, height: 24, type: 'slime', vx: 1.35, vy: 0, minX: 2498, maxX: 2648, facing: -1 },
      { id: 'l11_e10', x: 2839, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.55, vy: 0, minX: 2719, maxX: 2979, facing: 1 },
      { id: 'l11_e11', x: 3110, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 3040, maxX: 3190, facing: -1 },
      { id: 'l11_e12', x: 3381, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.35, vy: 0, minX: 3261, maxX: 3521, facing: 1 },
      { id: 'l11_e13', x: 3652, y: 380, width: 28, height: 24, type: 'slime', vx: 1.55, vy: 0, minX: 3582, maxX: 3732, facing: -1 },
      { id: 'l11_e14', x: 3923, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 3803, maxX: 4063, facing: 1 }
    ],
    parTime: 90,
    threeStarScore: 7600
  },
  // ==========================================
  // LEVEL 12: CRYSTAL SPIRE ASCENT
  // ==========================================
  {
    id: 12,
    title: "Level 12: Crystal Spire Ascent",
    description: "Equip the Jetpack to ascend a towering crystalline cavern, weaving between sharp stalactites and leaping from spring pads to high ledges.",
    worldWidth: 4700,
    worldHeight: 650,
    theme: THEMES.cavern,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4520, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1504, y: 360, width: 32, height: 48, activated: false },
      { x: 3102, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l12_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l12_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l12_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l12_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l12_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l12_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l12_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l12_cp1_base', x: 1444, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l12_p7', x: 1564, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l12_lift2', 
        x: 1724, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1724, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l12_p8', x: 1884, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l12_crumb2', x: 2064, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l12_crumb3', x: 2194, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l12_p9', x: 2334, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l12_lift3', 
        x: 2494, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2494, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l12_spring2', x: 2724, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l12_cp2_base', x: 3042, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l12_p10', x: 3162, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l12_lift4', 
        x: 3322, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3322, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l12_p11', x: 3482, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l12_crumb4', x: 3662, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l12_p12', x: 3802, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l12_p13', x: 3982, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l12_goal_base', x: 4440, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l12_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l12_spk2', x: 1684, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l12_spk3', x: 2424, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l12_spk4', x: 3282, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l12_spk5', x: 4180, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l12_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l12_saw2', 
        x: 1625, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1625, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l12_saw3', 
        x: 2550, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2550, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l12_saw4', 
        x: 3475, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3475, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l12_jetpack', x: 260, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l12_fuel1', x: 2104, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l12_fuel2', x: 3502, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l12_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c2', x: 673, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c3', x: 1045, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l12_c4', x: 1418, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c5', x: 1791, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c6', x: 2164, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l12_c7', x: 2536, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c8', x: 2909, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c9', x: 3282, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l12_c10', x: 3655, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c11', x: 4027, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l12_c12', x: 4400, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l12_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l12_e2', x: 660, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 540, maxX: 800, facing: 1 },
      { id: 'l12_e3', x: 920, y: 380, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 850, maxX: 1000, facing: -1 },
      { id: 'l12_e4', x: 1180, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.6, vy: 0, minX: 1060, maxX: 1320, facing: 1 },
      { id: 'l12_e5', x: 1440, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 1370, maxX: 1520, facing: -1 },
      { id: 'l12_e6', x: 1700, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.4, vy: 0, minX: 1580, maxX: 1840, facing: 1 },
      { id: 'l12_e7', x: 1960, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 1890, maxX: 2040, facing: -1 },
      { id: 'l12_e8', x: 2220, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 2100, maxX: 2360, facing: 1 },
      { id: 'l12_e9', x: 2480, y: 380, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 2410, maxX: 2560, facing: -1 },
      { id: 'l12_e10', x: 2740, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.6, vy: 0, minX: 2620, maxX: 2880, facing: 1 },
      { id: 'l12_e11', x: 3000, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 2930, maxX: 3080, facing: -1 },
      { id: 'l12_e12', x: 3260, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.4, vy: 0, minX: 3140, maxX: 3400, facing: 1 },
      { id: 'l12_e13', x: 3520, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 3450, maxX: 3600, facing: -1 },
      { id: 'l12_e14', x: 3780, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 3660, maxX: 3920, facing: 1 },
      { id: 'l12_e15', x: 4040, y: 380, width: 28, height: 24, type: 'slime', vx: 1.4, vy: 0, minX: 3970, maxX: 4120, facing: -1 }
    ],
    parTime: 90,
    threeStarScore: 7800
  },
  // ==========================================
  // LEVEL 13: NEON SKYLINE
  // ==========================================
  {
    id: 13,
    title: "Level 13: Neon Skyline",
    description: "Leap between futuristic high-rise transport shuttles and blast through drone patrol squadrons high above the glittering cyber metropolis.",
    worldWidth: 4700,
    worldHeight: 620,
    theme: THEMES.cyber,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4520, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1504, y: 360, width: 32, height: 48, activated: false },
      { x: 3102, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l13_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l13_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l13_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l13_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l13_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l13_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l13_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l13_cp1_base', x: 1444, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l13_p7', x: 1564, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l13_lift2', 
        x: 1724, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1724, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l13_p8', x: 1884, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l13_crumb2', x: 2064, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l13_crumb3', x: 2194, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l13_p9', x: 2334, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l13_lift3', 
        x: 2494, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2494, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l13_spring2', x: 2724, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l13_cp2_base', x: 3042, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l13_p10', x: 3162, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l13_lift4', 
        x: 3322, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3322, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l13_p11', x: 3482, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l13_crumb4', x: 3662, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l13_p12', x: 3802, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l13_p13', x: 3982, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l13_goal_base', x: 4440, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l13_spk1', x: 440, y: 580, width: 180, height: 20, type: 'spike' },
      { id: 'l13_spk2', x: 1684, y: 580, width: 200, height: 20, type: 'spike' },
      { id: 'l13_spk3', x: 2424, y: 580, width: 280, height: 20, type: 'spike' },
      { id: 'l13_spk4', x: 3282, y: 580, width: 200, height: 20, type: 'spike' },
      { id: 'l13_spk5', x: 4180, y: 580, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l13_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l13_saw2', 
        x: 1625, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1625, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l13_saw3', 
        x: 2550, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2550, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l13_saw4', 
        x: 3475, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3475, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l13_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l13_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l13_ammo2', x: 1924, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l13_ammo3', x: 3522, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l13_jetpack', x: 1584, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l13_fuel1', x: 2104, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l13_fuel2', x: 3502, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l13_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c2', x: 673, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c3', x: 1045, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l13_c4', x: 1418, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c5', x: 1791, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c6', x: 2164, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l13_c7', x: 2536, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c8', x: 2909, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c9', x: 3282, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l13_c10', x: 3655, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c11', x: 4027, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l13_c12', x: 4400, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l13_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l13_e2', x: 644, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 524, maxX: 784, facing: 1 },
      { id: 'l13_e3', x: 888, y: 380, width: 28, height: 24, type: 'slime', vx: 1.45, vy: 0, minX: 818, maxX: 968, facing: -1 },
      { id: 'l13_e4', x: 1132, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.65, vy: 0, minX: 1012, maxX: 1272, facing: 1 },
      { id: 'l13_e5', x: 1376, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 1306, maxX: 1456, facing: -1 },
      { id: 'l13_e6', x: 1620, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.45, vy: 0, minX: 1500, maxX: 1760, facing: 1 },
      { id: 'l13_e7', x: 1864, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 1794, maxX: 1944, facing: -1 },
      { id: 'l13_e8', x: 2108, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 1988, maxX: 2248, facing: 1 },
      { id: 'l13_e9', x: 2352, y: 380, width: 28, height: 24, type: 'slime', vx: 1.45, vy: 0, minX: 2282, maxX: 2432, facing: -1 },
      { id: 'l13_e10', x: 2596, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.65, vy: 0, minX: 2476, maxX: 2736, facing: 1 },
      { id: 'l13_e11', x: 2840, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 2770, maxX: 2920, facing: -1 },
      { id: 'l13_e12', x: 3084, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.45, vy: 0, minX: 2964, maxX: 3224, facing: 1 },
      { id: 'l13_e13', x: 3328, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 3258, maxX: 3408, facing: -1 },
      { id: 'l13_e14', x: 3572, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 3452, maxX: 3712, facing: 1 },
      { id: 'l13_e15', x: 3816, y: 380, width: 28, height: 24, type: 'slime', vx: 1.45, vy: 0, minX: 3746, maxX: 3896, facing: -1 },
      { id: 'l13_e16', x: 4060, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.65, vy: 0, minX: 3940, maxX: 4200, facing: 1 }
    ],
    parTime: 90,
    threeStarScore: 8000
  },
  // ==========================================
  // LEVEL 14: CORAL TRENCH DESCENT
  // ==========================================
  {
    id: 14,
    title: "Level 14: Coral Trench Descent",
    description: "Dive deep into the oceanic trench! Chain long float-glides across coral chasms and dodge kinetic saws to discover the sunken reef treasury.",
    worldWidth: 4800,
    worldHeight: 650,
    theme: THEMES.reef,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4620, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1536, y: 360, width: 32, height: 48, activated: false },
      { x: 3168, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l14_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l14_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l14_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l14_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l14_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l14_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l14_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l14_cp1_base', x: 1476, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l14_p7', x: 1596, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l14_lift2', 
        x: 1756, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1756, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l14_p8', x: 1916, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l14_crumb2', x: 2096, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l14_crumb3', x: 2226, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l14_p9', x: 2366, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l14_lift3', 
        x: 2526, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2526, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l14_spring2', x: 2756, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l14_cp2_base', x: 3108, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l14_p10', x: 3228, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l14_lift4', 
        x: 3388, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3388, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l14_p11', x: 3548, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l14_crumb4', x: 3728, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l14_p12', x: 3868, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l14_p13', x: 4048, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l14_goal_base', x: 4540, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l14_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l14_spk2', x: 1716, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l14_spk3', x: 2456, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l14_spk4', x: 3348, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l14_spk5', x: 4280, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l14_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l14_saw2', 
        x: 1650, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1650, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l14_saw3', 
        x: 2600, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2600, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l14_saw4', 
        x: 3550, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3550, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l14_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l14_shield2', x: 1616, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l14_shield3', x: 3248, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l14_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c2', x: 682, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c3', x: 1064, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l14_c4', x: 1445, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c5', x: 1827, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c6', x: 2209, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l14_c7', x: 2591, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c8', x: 2973, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c9', x: 3355, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l14_c10', x: 3736, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c11', x: 4118, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l14_c12', x: 4500, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l14_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l14_e2', x: 650, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 530, maxX: 790, facing: 1 },
      { id: 'l14_e3', x: 900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 830, maxX: 980, facing: -1 },
      { id: 'l14_e4', x: 1150, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 1030, maxX: 1290, facing: 1 },
      { id: 'l14_e5', x: 1400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 1330, maxX: 1480, facing: -1 },
      { id: 'l14_e6', x: 1650, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.5, vy: 0, minX: 1530, maxX: 1790, facing: 1 },
      { id: 'l14_e7', x: 1900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 1830, maxX: 1980, facing: -1 },
      { id: 'l14_e8', x: 2150, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 2030, maxX: 2290, facing: 1 },
      { id: 'l14_e9', x: 2400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 2330, maxX: 2480, facing: -1 },
      { id: 'l14_e10', x: 2650, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 2530, maxX: 2790, facing: 1 },
      { id: 'l14_e11', x: 2900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 2830, maxX: 2980, facing: -1 },
      { id: 'l14_e12', x: 3150, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.5, vy: 0, minX: 3030, maxX: 3290, facing: 1 },
      { id: 'l14_e13', x: 3400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 3330, maxX: 3480, facing: -1 },
      { id: 'l14_e14', x: 3650, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 3530, maxX: 3790, facing: 1 },
      { id: 'l14_e15', x: 3900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.5, vy: 0, minX: 3830, maxX: 3980, facing: -1 },
      { id: 'l14_e16', x: 4150, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 4030, maxX: 4290, facing: 1 }
    ],
    parTime: 95,
    threeStarScore: 8200
  },
  // ==========================================
  // LEVEL 15: THUNDER BASTION
  // ==========================================
  {
    id: 15,
    title: "Level 15: Thunder Bastion",
    description: "Storm the electrified battlements of the ancient mountain stronghold, dodging synchronized fortress saws and vanquishing gargoyle flyers.",
    worldWidth: 4800,
    worldHeight: 650,
    theme: THEMES.castle,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4620, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1536, y: 360, width: 32, height: 48, activated: false },
      { x: 3168, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l15_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l15_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l15_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l15_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l15_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l15_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l15_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l15_cp1_base', x: 1476, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l15_p7', x: 1596, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l15_lift2', 
        x: 1756, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1756, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l15_p8', x: 1916, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l15_crumb2', x: 2096, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l15_crumb3', x: 2226, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l15_p9', x: 2366, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l15_lift3', 
        x: 2526, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2526, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l15_spring2', x: 2756, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l15_cp2_base', x: 3108, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l15_p10', x: 3228, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l15_lift4', 
        x: 3388, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3388, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l15_p11', x: 3548, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l15_crumb4', x: 3728, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l15_p12', x: 3868, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l15_p13', x: 4048, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l15_goal_base', x: 4540, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l15_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l15_spk2', x: 1716, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l15_spk3', x: 2456, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l15_spk4', x: 3348, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l15_spk5', x: 4280, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l15_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l15_saw2', 
        x: 1460, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1460, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l15_saw3', 
        x: 2220, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2220, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l15_saw4', 
        x: 2980, y: 200, width: 44, height: 44, type: 'saw',
        startX: 2980, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l15_saw5', 
        x: 3740, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3740, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l15_jetpack', x: 260, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l15_fuel1', x: 2136, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l15_fuel2', x: 3568, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l15_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c2', x: 682, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c3', x: 1064, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l15_c4', x: 1445, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c5', x: 1827, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c6', x: 2209, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l15_c7', x: 2591, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c8', x: 2973, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c9', x: 3355, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l15_c10', x: 3736, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c11', x: 4118, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l15_c12', x: 4500, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l15_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l15_e2', x: 650, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 530, maxX: 790, facing: 1 },
      { id: 'l15_e3', x: 900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.55, vy: 0, minX: 830, maxX: 980, facing: -1 },
      { id: 'l15_e4', x: 1150, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 1030, maxX: 1290, facing: 1 },
      { id: 'l15_e5', x: 1400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 1330, maxX: 1480, facing: -1 },
      { id: 'l15_e6', x: 1650, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.55, vy: 0, minX: 1530, maxX: 1790, facing: 1 },
      { id: 'l15_e7', x: 1900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 1830, maxX: 1980, facing: -1 },
      { id: 'l15_e8', x: 2150, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 2030, maxX: 2290, facing: 1 },
      { id: 'l15_e9', x: 2400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.55, vy: 0, minX: 2330, maxX: 2480, facing: -1 },
      { id: 'l15_e10', x: 2650, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 2530, maxX: 2790, facing: 1 },
      { id: 'l15_e11', x: 2900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 2830, maxX: 2980, facing: -1 },
      { id: 'l15_e12', x: 3150, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.55, vy: 0, minX: 3030, maxX: 3290, facing: 1 },
      { id: 'l15_e13', x: 3400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 3330, maxX: 3480, facing: -1 },
      { id: 'l15_e14', x: 3650, y: 280, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 3530, maxX: 3790, facing: 1 },
      { id: 'l15_e15', x: 3900, y: 380, width: 28, height: 24, type: 'slime', vx: 1.55, vy: 0, minX: 3830, maxX: 3980, facing: -1 },
      { id: 'l15_e16', x: 4150, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 4030, maxX: 4290, facing: 1 }
    ],
    parTime: 95,
    threeStarScore: 8400
  },
  // ==========================================
  // LEVEL 16: SUNKEN PYRAMID
  // ==========================================
  {
    id: 16,
    title: "Level 16: Sunken Pyramid",
    description: "Explore the shifting burial halls of the ancient pyramid, utilizing bubble shield float-glides and the plasma blaster to purge restless phantoms.",
    worldWidth: 4900,
    worldHeight: 640,
    theme: THEMES.desert,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4720, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1568, y: 360, width: 32, height: 48, activated: false },
      { x: 3234, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l16_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l16_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l16_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l16_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l16_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l16_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l16_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l16_cp1_base', x: 1508, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l16_p7', x: 1628, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l16_lift2', 
        x: 1788, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1788, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l16_p8', x: 1948, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l16_crumb2', x: 2128, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l16_crumb3', x: 2258, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l16_p9', x: 2398, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l16_lift3', 
        x: 2558, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2558, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l16_spring2', x: 2788, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l16_cp2_base', x: 3174, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l16_p10', x: 3294, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l16_lift4', 
        x: 3454, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3454, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l16_p11', x: 3614, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l16_crumb4', x: 3794, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l16_p12', x: 3934, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l16_p13', x: 4114, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l16_goal_base', x: 4640, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l16_spk1', x: 440, y: 600, width: 180, height: 20, type: 'spike' },
      { id: 'l16_spk2', x: 1748, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l16_spk3', x: 2488, y: 600, width: 280, height: 20, type: 'spike' },
      { id: 'l16_spk4', x: 3414, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l16_spk5', x: 4380, y: 600, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l16_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l16_saw2', 
        x: 1480, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1480, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l16_saw3', 
        x: 2260, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2260, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l16_saw4', 
        x: 3040, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3040, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l16_saw5', 
        x: 3820, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3820, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l16_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l16_shield2', x: 1648, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l16_shield3', x: 3314, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l16_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l16_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l16_ammo2', x: 1988, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l16_ammo3', x: 3654, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l16_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c2', x: 691, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c3', x: 1082, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l16_c4', x: 1473, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c5', x: 1864, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c6', x: 2255, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l16_c7', x: 2645, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c8', x: 3036, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c9', x: 3427, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l16_c10', x: 3818, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c11', x: 4209, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l16_c12', x: 4600, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l16_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l16_e2', x: 641, y: 280, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 521, maxX: 781, facing: 1 },
      { id: 'l16_e3', x: 882, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 812, maxX: 962, facing: -1 },
      { id: 'l16_e4', x: 1123, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 1003, maxX: 1263, facing: 1 },
      { id: 'l16_e5', x: 1364, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 1294, maxX: 1444, facing: -1 },
      { id: 'l16_e6', x: 1605, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.6, vy: 0, minX: 1485, maxX: 1745, facing: 1 },
      { id: 'l16_e7', x: 1846, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 1776, maxX: 1926, facing: -1 },
      { id: 'l16_e8', x: 2087, y: 280, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 1967, maxX: 2227, facing: 1 },
      { id: 'l16_e9', x: 2328, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 2258, maxX: 2408, facing: -1 },
      { id: 'l16_e10', x: 2569, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 2449, maxX: 2709, facing: 1 },
      { id: 'l16_e11', x: 2810, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 2740, maxX: 2890, facing: -1 },
      { id: 'l16_e12', x: 3051, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.6, vy: 0, minX: 2931, maxX: 3191, facing: 1 },
      { id: 'l16_e13', x: 3292, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 3222, maxX: 3372, facing: -1 },
      { id: 'l16_e14', x: 3533, y: 280, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 3413, maxX: 3673, facing: 1 },
      { id: 'l16_e15', x: 3774, y: 380, width: 28, height: 24, type: 'slime', vx: 1.6, vy: 0, minX: 3704, maxX: 3854, facing: -1 },
      { id: 'l16_e16', x: 4015, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 3895, maxX: 4155, facing: 1 },
      { id: 'l16_e17', x: 4256, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 4186, maxX: 4336, facing: -1 }
    ],
    parTime: 95,
    threeStarScore: 8600
  },
  // ==========================================
  // LEVEL 17: GLACIAL CAVERNS
  // ==========================================
  {
    id: 17,
    title: "Level 17: Glacial Caverns",
    description: "Maneuver your Jetpack through claustrophobic ice caverns lined with lethal spikes and rotating frost saw blades.",
    worldWidth: 4900,
    worldHeight: 650,
    theme: THEMES.tundra,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4720, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1568, y: 360, width: 32, height: 48, activated: false },
      { x: 3234, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l17_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l17_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l17_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l17_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l17_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l17_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l17_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l17_cp1_base', x: 1508, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l17_p7', x: 1628, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l17_lift2', 
        x: 1788, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1788, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l17_p8', x: 1948, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l17_crumb2', x: 2128, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l17_crumb3', x: 2258, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l17_p9', x: 2398, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l17_lift3', 
        x: 2558, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2558, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l17_spring2', x: 2788, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l17_cp2_base', x: 3174, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l17_p10', x: 3294, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l17_lift4', 
        x: 3454, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3454, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l17_p11', x: 3614, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l17_crumb4', x: 3794, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l17_p12', x: 3934, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l17_p13', x: 4114, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l17_goal_base', x: 4640, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l17_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l17_spk2', x: 1748, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l17_spk3', x: 2488, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l17_spk4', x: 3414, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l17_spk5', x: 4380, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l17_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l17_saw2', 
        x: 1480, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1480, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l17_saw3', 
        x: 2260, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2260, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l17_saw4', 
        x: 3040, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3040, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l17_saw5', 
        x: 3820, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3820, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l17_jetpack', x: 260, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l17_fuel1', x: 2168, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l17_fuel2', x: 3634, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l17_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c2', x: 691, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c3', x: 1082, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l17_c4', x: 1473, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c5', x: 1864, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c6', x: 2255, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l17_c7', x: 2645, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c8', x: 3036, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c9', x: 3427, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l17_c10', x: 3818, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c11', x: 4209, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l17_c12', x: 4600, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l17_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l17_e2', x: 641, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 521, maxX: 781, facing: 1 },
      { id: 'l17_e3', x: 882, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 812, maxX: 962, facing: -1 },
      { id: 'l17_e4', x: 1123, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 1003, maxX: 1263, facing: 1 },
      { id: 'l17_e5', x: 1364, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 1294, maxX: 1444, facing: -1 },
      { id: 'l17_e6', x: 1605, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.65, vy: 0, minX: 1485, maxX: 1745, facing: 1 },
      { id: 'l17_e7', x: 1846, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 1776, maxX: 1926, facing: -1 },
      { id: 'l17_e8', x: 2087, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 1967, maxX: 2227, facing: 1 },
      { id: 'l17_e9', x: 2328, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 2258, maxX: 2408, facing: -1 },
      { id: 'l17_e10', x: 2569, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 2449, maxX: 2709, facing: 1 },
      { id: 'l17_e11', x: 2810, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 2740, maxX: 2890, facing: -1 },
      { id: 'l17_e12', x: 3051, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.65, vy: 0, minX: 2931, maxX: 3191, facing: 1 },
      { id: 'l17_e13', x: 3292, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 3222, maxX: 3372, facing: -1 },
      { id: 'l17_e14', x: 3533, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 3413, maxX: 3673, facing: 1 },
      { id: 'l17_e15', x: 3774, y: 380, width: 28, height: 24, type: 'slime', vx: 1.65, vy: 0, minX: 3704, maxX: 3854, facing: -1 },
      { id: 'l17_e16', x: 4015, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 3895, maxX: 4155, facing: 1 },
      { id: 'l17_e17', x: 4256, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 4186, maxX: 4336, facing: -1 }
    ],
    parTime: 100,
    threeStarScore: 8800
  },
  // ==========================================
  // LEVEL 18: BIO-HAZARD LAB
  // ==========================================
  {
    id: 18,
    title: "Level 18: Bio-Hazard Lab",
    description: "Breach the quarantined testing sector! Rapid blaster target shooting is required to clear swarms of agile mutant flyers and sludge slimes.",
    worldWidth: 5000,
    worldHeight: 640,
    theme: THEMES.toxic,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4820, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1600, y: 360, width: 32, height: 48, activated: false },
      { x: 3300, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l18_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l18_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l18_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l18_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l18_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l18_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l18_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l18_cp1_base', x: 1540, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l18_p7', x: 1660, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l18_lift2', 
        x: 1820, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1820, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l18_p8', x: 1980, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l18_crumb2', x: 2160, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l18_crumb3', x: 2290, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l18_p9', x: 2430, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l18_lift3', 
        x: 2590, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2590, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l18_spring2', x: 2820, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l18_cp2_base', x: 3240, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l18_p10', x: 3360, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l18_lift4', 
        x: 3520, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3520, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l18_p11', x: 3680, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l18_crumb4', x: 3860, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l18_p12', x: 4000, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l18_p13', x: 4180, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l18_goal_base', x: 4740, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l18_spk1', x: 440, y: 600, width: 180, height: 20, type: 'spike' },
      { id: 'l18_spk2', x: 1780, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l18_spk3', x: 2520, y: 600, width: 280, height: 20, type: 'spike' },
      { id: 'l18_spk4', x: 3480, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l18_spk5', x: 4480, y: 600, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l18_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l18_saw2', 
        x: 1500, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1500, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l18_saw3', 
        x: 2300, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2300, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l18_saw4', 
        x: 3100, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3100, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l18_saw5', 
        x: 3900, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3900, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l18_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l18_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l18_ammo2', x: 2020, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l18_ammo3', x: 3720, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l18_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c2', x: 700, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c3', x: 1100, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l18_c4', x: 1500, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c5', x: 1900, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c6', x: 2300, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l18_c7', x: 2700, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c8', x: 3100, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c9', x: 3500, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l18_c10', x: 3900, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c11', x: 4300, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l18_c12', x: 4700, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l18_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l18_e2', x: 633, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 513, maxX: 773, facing: 1 },
      { id: 'l18_e3', x: 866, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 796, maxX: 946, facing: -1 },
      { id: 'l18_e4', x: 1099, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 979, maxX: 1239, facing: 1 },
      { id: 'l18_e5', x: 1332, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 1262, maxX: 1412, facing: -1 },
      { id: 'l18_e6', x: 1565, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 1445, maxX: 1705, facing: 1 },
      { id: 'l18_e7', x: 1798, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 1728, maxX: 1878, facing: -1 },
      { id: 'l18_e8', x: 2031, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 1911, maxX: 2171, facing: 1 },
      { id: 'l18_e9', x: 2264, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 2194, maxX: 2344, facing: -1 },
      { id: 'l18_e10', x: 2497, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 2377, maxX: 2637, facing: 1 },
      { id: 'l18_e11', x: 2730, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 2660, maxX: 2810, facing: -1 },
      { id: 'l18_e12', x: 2963, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 2843, maxX: 3103, facing: 1 },
      { id: 'l18_e13', x: 3196, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 3126, maxX: 3276, facing: -1 },
      { id: 'l18_e14', x: 3429, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 3309, maxX: 3569, facing: 1 },
      { id: 'l18_e15', x: 3662, y: 380, width: 28, height: 24, type: 'slime', vx: 1.7, vy: 0, minX: 3592, maxX: 3742, facing: -1 },
      { id: 'l18_e16', x: 3895, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 3775, maxX: 4035, facing: 1 },
      { id: 'l18_e17', x: 4128, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 4058, maxX: 4208, facing: -1 },
      { id: 'l18_e18', x: 4361, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.7, vy: 0, minX: 4241, maxX: 4501, facing: 1 }
    ],
    parTime: 100,
    threeStarScore: 9000
  },
  // ==========================================
  // LEVEL 19: MOLTEN ASCENT
  // ==========================================
  {
    id: 19,
    title: "Level 19: Molten Ascent",
    description: "Outrun the boiling magma lake below! Ascend rapidly across high spring pads and fast-moving lifts while dodging descending volcanic fire saws.",
    worldWidth: 5000,
    worldHeight: 650,
    theme: THEMES.lava,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4820, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1600, y: 360, width: 32, height: 48, activated: false },
      { x: 3300, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l19_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l19_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l19_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l19_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l19_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l19_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l19_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l19_cp1_base', x: 1540, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l19_p7', x: 1660, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l19_lift2', 
        x: 1820, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1820, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l19_p8', x: 1980, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l19_crumb2', x: 2160, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l19_crumb3', x: 2290, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l19_p9', x: 2430, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l19_lift3', 
        x: 2590, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2590, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l19_spring2', x: 2820, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l19_cp2_base', x: 3240, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l19_p10', x: 3360, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l19_lift4', 
        x: 3520, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3520, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l19_p11', x: 3680, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l19_crumb4', x: 3860, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l19_p12', x: 4000, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l19_p13', x: 4180, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l19_goal_base', x: 4740, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l19_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l19_spk2', x: 1780, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l19_spk3', x: 2520, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l19_spk4', x: 3480, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l19_spk5', x: 4480, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l19_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l19_saw2', 
        x: 1500, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1500, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l19_saw3', 
        x: 2300, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2300, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l19_saw4', 
        x: 3100, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3100, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l19_saw5', 
        x: 3900, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3900, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l19_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l19_shield2', x: 1680, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l19_shield3', x: 3380, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l19_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c2', x: 700, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c3', x: 1100, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l19_c4', x: 1500, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c5', x: 1900, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c6', x: 2300, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l19_c7', x: 2700, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c8', x: 3100, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c9', x: 3500, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l19_c10', x: 3900, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c11', x: 4300, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l19_c12', x: 4700, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l19_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l19_e2', x: 633, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 513, maxX: 773, facing: 1 },
      { id: 'l19_e3', x: 866, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 796, maxX: 946, facing: -1 },
      { id: 'l19_e4', x: 1099, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 979, maxX: 1239, facing: 1 },
      { id: 'l19_e5', x: 1332, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 1262, maxX: 1412, facing: -1 },
      { id: 'l19_e6', x: 1565, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 1445, maxX: 1705, facing: 1 },
      { id: 'l19_e7', x: 1798, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 1728, maxX: 1878, facing: -1 },
      { id: 'l19_e8', x: 2031, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 1911, maxX: 2171, facing: 1 },
      { id: 'l19_e9', x: 2264, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 2194, maxX: 2344, facing: -1 },
      { id: 'l19_e10', x: 2497, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 2377, maxX: 2637, facing: 1 },
      { id: 'l19_e11', x: 2730, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 2660, maxX: 2810, facing: -1 },
      { id: 'l19_e12', x: 2963, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 2843, maxX: 3103, facing: 1 },
      { id: 'l19_e13', x: 3196, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 3126, maxX: 3276, facing: -1 },
      { id: 'l19_e14', x: 3429, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 3309, maxX: 3569, facing: 1 },
      { id: 'l19_e15', x: 3662, y: 380, width: 28, height: 24, type: 'slime', vx: 1.75, vy: 0, minX: 3592, maxX: 3742, facing: -1 },
      { id: 'l19_e16', x: 3895, y: 220, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 3775, maxX: 4035, facing: 1 },
      { id: 'l19_e17', x: 4128, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 4058, maxX: 4208, facing: -1 },
      { id: 'l19_e18', x: 4361, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.75, vy: 0, minX: 4241, maxX: 4501, facing: 1 }
    ],
    parTime: 100,
    threeStarScore: 9200
  },
  // ==========================================
  // LEVEL 20: CELESTIAL BRIDGE
  // ==========================================
  {
    id: 20,
    title: "Level 20: Celestial Bridge",
    description: "Step into the cosmos! Glide across starlit cosmic bridges and crumbling nebula islands using the protective Bubble Shield.",
    worldWidth: 5000,
    worldHeight: 650,
    theme: THEMES.twilight,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4820, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1600, y: 360, width: 32, height: 48, activated: false },
      { x: 3300, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l20_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l20_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l20_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l20_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l20_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l20_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l20_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l20_cp1_base', x: 1540, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l20_p7', x: 1660, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l20_lift2', 
        x: 1820, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1820, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l20_p8', x: 1980, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l20_crumb2', x: 2160, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l20_crumb3', x: 2290, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l20_p9', x: 2430, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l20_lift3', 
        x: 2590, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2590, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l20_spring2', x: 2820, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l20_cp2_base', x: 3240, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l20_p10', x: 3360, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l20_lift4', 
        x: 3520, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3520, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l20_p11', x: 3680, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l20_crumb4', x: 3860, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l20_p12', x: 4000, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l20_p13', x: 4180, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l20_goal_base', x: 4740, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l20_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l20_spk2', x: 1780, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l20_spk3', x: 2520, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l20_spk4', x: 3480, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l20_spk5', x: 4480, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l20_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l20_saw2', 
        x: 1500, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1500, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l20_saw3', 
        x: 2300, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2300, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l20_saw4', 
        x: 3100, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3100, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l20_saw5', 
        x: 3900, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3900, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l20_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l20_shield2', x: 1680, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l20_shield3', x: 3380, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l20_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c2', x: 700, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c3', x: 1100, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l20_c4', x: 1500, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c5', x: 1900, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c6', x: 2300, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l20_c7', x: 2700, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c8', x: 3100, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c9', x: 3500, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l20_c10', x: 3900, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c11', x: 4300, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l20_c12', x: 4700, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l20_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l20_e2', x: 633, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 513, maxX: 773, facing: 1 },
      { id: 'l20_e3', x: 866, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 796, maxX: 946, facing: -1 },
      { id: 'l20_e4', x: 1099, y: 220, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 979, maxX: 1239, facing: 1 },
      { id: 'l20_e5', x: 1332, y: 380, width: 28, height: 24, type: 'slime', vx: 2.2, vy: 0, minX: 1262, maxX: 1412, facing: -1 },
      { id: 'l20_e6', x: 1565, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 1445, maxX: 1705, facing: 1 },
      { id: 'l20_e7', x: 1798, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 1728, maxX: 1878, facing: -1 },
      { id: 'l20_e8', x: 2031, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 1911, maxX: 2171, facing: 1 },
      { id: 'l20_e9', x: 2264, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 2194, maxX: 2344, facing: -1 },
      { id: 'l20_e10', x: 2497, y: 220, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 2377, maxX: 2637, facing: 1 },
      { id: 'l20_e11', x: 2730, y: 380, width: 28, height: 24, type: 'slime', vx: 2.2, vy: 0, minX: 2660, maxX: 2810, facing: -1 },
      { id: 'l20_e12', x: 2963, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 2843, maxX: 3103, facing: 1 },
      { id: 'l20_e13', x: 3196, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 3126, maxX: 3276, facing: -1 },
      { id: 'l20_e14', x: 3429, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 3309, maxX: 3569, facing: 1 },
      { id: 'l20_e15', x: 3662, y: 380, width: 28, height: 24, type: 'slime', vx: 1.8, vy: 0, minX: 3592, maxX: 3742, facing: -1 },
      { id: 'l20_e16', x: 3895, y: 220, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 3775, maxX: 4035, facing: 1 },
      { id: 'l20_e17', x: 4128, y: 380, width: 28, height: 24, type: 'slime', vx: 2.2, vy: 0, minX: 4058, maxX: 4208, facing: -1 },
      { id: 'l20_e18', x: 4361, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 4241, maxX: 4501, facing: 1 }
    ],
    parTime: 105,
    threeStarScore: 9500
  },
  // ==========================================
  // LEVEL 21: CYBER REACTOR CORE
  // ==========================================
  {
    id: 21,
    title: "Level 21: Cyber Reactor Core",
    description: "Infiltrate the beating heart of the AI mainframe. Counter-rotating saws and high-velocity security drones guard the main processing reactor.",
    worldWidth: 5100,
    worldHeight: 640,
    theme: THEMES.cyber,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4920, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1632, y: 360, width: 32, height: 48, activated: false },
      { x: 3366, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l21_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l21_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l21_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l21_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l21_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l21_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l21_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l21_cp1_base', x: 1572, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l21_p7', x: 1692, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l21_lift2', 
        x: 1852, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1852, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l21_p8', x: 2012, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l21_crumb2', x: 2192, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l21_crumb3', x: 2322, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l21_p9', x: 2462, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l21_lift3', 
        x: 2622, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2622, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l21_spring2', x: 2852, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l21_cp2_base', x: 3306, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l21_p10', x: 3426, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l21_lift4', 
        x: 3586, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3586, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l21_p11', x: 3746, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l21_crumb4', x: 3926, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l21_p12', x: 4066, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l21_p13', x: 4246, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l21_goal_base', x: 4840, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l21_spk1', x: 440, y: 600, width: 180, height: 20, type: 'spike' },
      { id: 'l21_spk2', x: 1812, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l21_spk3', x: 2552, y: 600, width: 280, height: 20, type: 'spike' },
      { id: 'l21_spk4', x: 3546, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l21_spk5', x: 4580, y: 600, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l21_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l21_saw2', 
        x: 1520, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1520, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l21_saw3', 
        x: 2340, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2340, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l21_saw4', 
        x: 3160, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3160, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l21_saw5', 
        x: 3980, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3980, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l21_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l21_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l21_ammo2', x: 2052, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l21_ammo3', x: 3786, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l21_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c2', x: 709, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c3', x: 1118, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l21_c4', x: 1527, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c5', x: 1936, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c6', x: 2345, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l21_c7', x: 2755, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c8', x: 3164, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c9', x: 3573, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l21_c10', x: 3982, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c11', x: 4391, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l21_c12', x: 4800, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l21_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l21_e2', x: 626, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.25, vy: 0, minX: 506, maxX: 766, facing: 1 },
      { id: 'l21_e3', x: 852, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 782, maxX: 932, facing: -1 },
      { id: 'l21_e4', x: 1078, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 958, maxX: 1218, facing: 1 },
      { id: 'l21_e5', x: 1304, y: 380, width: 28, height: 24, type: 'slime', vx: 2.25, vy: 0, minX: 1234, maxX: 1384, facing: -1 },
      { id: 'l21_e6', x: 1530, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 1410, maxX: 1670, facing: 1 },
      { id: 'l21_e7', x: 1756, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 1686, maxX: 1836, facing: -1 },
      { id: 'l21_e8', x: 1982, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.25, vy: 0, minX: 1862, maxX: 2122, facing: 1 },
      { id: 'l21_e9', x: 2208, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 2138, maxX: 2288, facing: -1 },
      { id: 'l21_e10', x: 2434, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 2314, maxX: 2574, facing: 1 },
      { id: 'l21_e11', x: 2660, y: 380, width: 28, height: 24, type: 'slime', vx: 2.25, vy: 0, minX: 2590, maxX: 2740, facing: -1 },
      { id: 'l21_e12', x: 2886, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 2766, maxX: 3026, facing: 1 },
      { id: 'l21_e13', x: 3112, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 3042, maxX: 3192, facing: -1 },
      { id: 'l21_e14', x: 3338, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.25, vy: 0, minX: 3218, maxX: 3478, facing: 1 },
      { id: 'l21_e15', x: 3564, y: 380, width: 28, height: 24, type: 'slime', vx: 1.85, vy: 0, minX: 3494, maxX: 3644, facing: -1 },
      { id: 'l21_e16', x: 3790, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 3670, maxX: 3930, facing: 1 },
      { id: 'l21_e17', x: 4016, y: 380, width: 28, height: 24, type: 'slime', vx: 2.25, vy: 0, minX: 3946, maxX: 4096, facing: -1 },
      { id: 'l21_e18', x: 4242, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.85, vy: 0, minX: 4122, maxX: 4382, facing: 1 },
      { id: 'l21_e19', x: 4468, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 4398, maxX: 4548, facing: -1 }
    ],
    parTime: 105,
    threeStarScore: 9800
  },
  // ==========================================
  // LEVEL 22: ABYSSAL VAULT
  // ==========================================
  {
    id: 22,
    title: "Level 22: Abyssal Vault",
    description: "Master the dual powers of flight and flotation! Combine Jetpack rocket propulsion with Bubble Shield glides to conquer the sunken vault.",
    worldWidth: 5100,
    worldHeight: 650,
    theme: THEMES.reef,
    playerStart: { x: 80, y: 480 },
    goal: { x: 4920, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1632, y: 360, width: 32, height: 48, activated: false },
      { x: 3366, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l22_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l22_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l22_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l22_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l22_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l22_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l22_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l22_cp1_base', x: 1572, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l22_p7', x: 1692, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l22_lift2', 
        x: 1852, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1852, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l22_p8', x: 2012, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l22_crumb2', x: 2192, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l22_crumb3', x: 2322, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l22_p9', x: 2462, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l22_lift3', 
        x: 2622, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2622, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l22_spring2', x: 2852, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l22_cp2_base', x: 3306, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l22_p10', x: 3426, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l22_lift4', 
        x: 3586, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3586, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l22_p11', x: 3746, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l22_crumb4', x: 3926, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l22_p12', x: 4066, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l22_p13', x: 4246, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l22_goal_base', x: 4840, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l22_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l22_spk2', x: 1812, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l22_spk3', x: 2552, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l22_spk4', x: 3546, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l22_spk5', x: 4580, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l22_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l22_saw2', 
        x: 1520, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1520, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l22_saw3', 
        x: 2340, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2340, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l22_saw4', 
        x: 3160, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3160, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l22_saw5', 
        x: 3980, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3980, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l22_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l22_shield2', x: 1712, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l22_shield3', x: 3446, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l22_jetpack', x: 260, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l22_fuel1', x: 2232, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l22_fuel2', x: 3766, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l22_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c2', x: 709, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c3', x: 1118, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l22_c4', x: 1527, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c5', x: 1936, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c6', x: 2345, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l22_c7', x: 2755, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c8', x: 3164, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c9', x: 3573, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l22_c10', x: 3982, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c11', x: 4391, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l22_c12', x: 4800, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l22_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l22_e2', x: 626, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 506, maxX: 766, facing: 1 },
      { id: 'l22_e3', x: 852, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 782, maxX: 932, facing: -1 },
      { id: 'l22_e4', x: 1078, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 958, maxX: 1218, facing: 1 },
      { id: 'l22_e5', x: 1304, y: 380, width: 28, height: 24, type: 'slime', vx: 2.3, vy: 0, minX: 1234, maxX: 1384, facing: -1 },
      { id: 'l22_e6', x: 1530, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 1410, maxX: 1670, facing: 1 },
      { id: 'l22_e7', x: 1756, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 1686, maxX: 1836, facing: -1 },
      { id: 'l22_e8', x: 1982, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 1862, maxX: 2122, facing: 1 },
      { id: 'l22_e9', x: 2208, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 2138, maxX: 2288, facing: -1 },
      { id: 'l22_e10', x: 2434, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 2314, maxX: 2574, facing: 1 },
      { id: 'l22_e11', x: 2660, y: 380, width: 28, height: 24, type: 'slime', vx: 2.3, vy: 0, minX: 2590, maxX: 2740, facing: -1 },
      { id: 'l22_e12', x: 2886, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 2766, maxX: 3026, facing: 1 },
      { id: 'l22_e13', x: 3112, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 3042, maxX: 3192, facing: -1 },
      { id: 'l22_e14', x: 3338, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 3218, maxX: 3478, facing: 1 },
      { id: 'l22_e15', x: 3564, y: 380, width: 28, height: 24, type: 'slime', vx: 1.9, vy: 0, minX: 3494, maxX: 3644, facing: -1 },
      { id: 'l22_e16', x: 3790, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 3670, maxX: 3930, facing: 1 },
      { id: 'l22_e17', x: 4016, y: 380, width: 28, height: 24, type: 'slime', vx: 2.3, vy: 0, minX: 3946, maxX: 4096, facing: -1 },
      { id: 'l22_e18', x: 4242, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.9, vy: 0, minX: 4122, maxX: 4382, facing: 1 },
      { id: 'l22_e19', x: 4468, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 4398, maxX: 4548, facing: -1 }
    ],
    parTime: 110,
    threeStarScore: 10000
  },
  // ==========================================
  // LEVEL 23: DREAD FORTRESS
  // ==========================================
  {
    id: 23,
    title: "Level 23: Dread Fortress",
    description: "Infiltrate the warlord's obsidian stronghold. Survive perilous drawbridges, crumbling castle parapets, and flying gargoyle death squads.",
    worldWidth: 5200,
    worldHeight: 650,
    theme: THEMES.castle,
    playerStart: { x: 80, y: 480 },
    goal: { x: 5020, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1664, y: 360, width: 32, height: 48, activated: false },
      { x: 3432, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l23_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l23_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l23_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l23_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l23_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l23_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l23_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l23_cp1_base', x: 1604, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l23_p7', x: 1724, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l23_lift2', 
        x: 1884, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1884, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l23_p8', x: 2044, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l23_crumb2', x: 2224, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l23_crumb3', x: 2354, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l23_p9', x: 2494, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l23_lift3', 
        x: 2654, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2654, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l23_spring2', x: 2884, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l23_cp2_base', x: 3372, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l23_p10', x: 3492, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l23_lift4', 
        x: 3652, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3652, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l23_p11', x: 3812, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l23_crumb4', x: 3992, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l23_p12', x: 4132, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l23_p13', x: 4312, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l23_goal_base', x: 4940, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l23_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l23_spk2', x: 1844, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l23_spk3', x: 2584, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l23_spk4', x: 3612, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l23_spk5', x: 4680, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l23_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l23_saw2', 
        x: 1400, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1400, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l23_saw3', 
        x: 2100, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2100, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l23_saw4', 
        x: 2800, y: 200, width: 44, height: 44, type: 'saw',
        startX: 2800, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l23_saw5', 
        x: 3500, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3500, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l23_saw6', 
        x: 4200, y: 200, width: 44, height: 44, type: 'saw',
        startX: 4200, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l23_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l23_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l23_ammo2', x: 2084, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l23_ammo3', x: 3852, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l23_jetpack', x: 1744, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l23_fuel1', x: 2264, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l23_fuel2', x: 3832, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l23_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c2', x: 718, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c3', x: 1136, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l23_c4', x: 1555, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c5', x: 1973, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c6', x: 2391, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l23_c7', x: 2809, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c8', x: 3227, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c9', x: 3645, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l23_c10', x: 4064, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c11', x: 4482, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l23_c12', x: 4900, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l23_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l23_e2', x: 620, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 500, maxX: 760, facing: 1 },
      { id: 'l23_e3', x: 840, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 770, maxX: 920, facing: -1 },
      { id: 'l23_e4', x: 1060, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 940, maxX: 1200, facing: 1 },
      { id: 'l23_e5', x: 1280, y: 380, width: 28, height: 24, type: 'slime', vx: 2.35, vy: 0, minX: 1210, maxX: 1360, facing: -1 },
      { id: 'l23_e6', x: 1500, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 1380, maxX: 1640, facing: 1 },
      { id: 'l23_e7', x: 1720, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 1650, maxX: 1800, facing: -1 },
      { id: 'l23_e8', x: 1940, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 1820, maxX: 2080, facing: 1 },
      { id: 'l23_e9', x: 2160, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 2090, maxX: 2240, facing: -1 },
      { id: 'l23_e10', x: 2380, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 2260, maxX: 2520, facing: 1 },
      { id: 'l23_e11', x: 2600, y: 380, width: 28, height: 24, type: 'slime', vx: 2.35, vy: 0, minX: 2530, maxX: 2680, facing: -1 },
      { id: 'l23_e12', x: 2820, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 2700, maxX: 2960, facing: 1 },
      { id: 'l23_e13', x: 3040, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 2970, maxX: 3120, facing: -1 },
      { id: 'l23_e14', x: 3260, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 3140, maxX: 3400, facing: 1 },
      { id: 'l23_e15', x: 3480, y: 380, width: 28, height: 24, type: 'slime', vx: 1.95, vy: 0, minX: 3410, maxX: 3560, facing: -1 },
      { id: 'l23_e16', x: 3700, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 3580, maxX: 3840, facing: 1 },
      { id: 'l23_e17', x: 3920, y: 380, width: 28, height: 24, type: 'slime', vx: 2.35, vy: 0, minX: 3850, maxX: 4000, facing: -1 },
      { id: 'l23_e18', x: 4140, y: 160, width: 26, height: 22, type: 'flyer', vx: 1.95, vy: 0, minX: 4020, maxX: 4280, facing: 1 },
      { id: 'l23_e19', x: 4360, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 4290, maxX: 4440, facing: -1 },
      { id: 'l23_e20', x: 4580, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 4460, maxX: 4720, facing: 1 }
    ],
    parTime: 110,
    threeStarScore: 10500
  },
  // ==========================================
  // LEVEL 24: OBSIDIAN RIDGE
  // ==========================================
  {
    id: 24,
    title: "Level 24: Obsidian Ridge",
    description: "Sprint across crumbling obsidian bridges hanging over an endless sea of lava, timing jumps past vertical geyser saws.",
    worldWidth: 5200,
    worldHeight: 650,
    theme: THEMES.lava,
    playerStart: { x: 80, y: 480 },
    goal: { x: 5020, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1664, y: 360, width: 32, height: 48, activated: false },
      { x: 3432, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l24_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l24_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l24_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l24_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l24_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l24_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l24_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l24_cp1_base', x: 1604, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l24_p7', x: 1724, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l24_lift2', 
        x: 1884, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1884, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l24_p8', x: 2044, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l24_crumb2', x: 2224, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l24_crumb3', x: 2354, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l24_p9', x: 2494, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l24_lift3', 
        x: 2654, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2654, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l24_spring2', x: 2884, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l24_cp2_base', x: 3372, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l24_p10', x: 3492, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l24_lift4', 
        x: 3652, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3652, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l24_p11', x: 3812, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l24_crumb4', x: 3992, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l24_p12', x: 4132, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l24_p13', x: 4312, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l24_goal_base', x: 4940, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l24_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l24_spk2', x: 1844, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l24_spk3', x: 2584, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l24_spk4', x: 3612, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l24_spk5', x: 4680, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l24_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l24_saw2', 
        x: 1400, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1400, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l24_saw3', 
        x: 2100, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2100, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l24_saw4', 
        x: 2800, y: 200, width: 44, height: 44, type: 'saw',
        startX: 2800, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l24_saw5', 
        x: 3500, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3500, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l24_saw6', 
        x: 4200, y: 200, width: 44, height: 44, type: 'saw',
        startX: 4200, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l24_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l24_shield2', x: 1744, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l24_shield3', x: 3512, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l24_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c2', x: 718, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c3', x: 1136, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l24_c4', x: 1555, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c5', x: 1973, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c6', x: 2391, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l24_c7', x: 2809, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c8', x: 3227, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c9', x: 3645, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l24_c10', x: 4064, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c11', x: 4482, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l24_c12', x: 4900, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l24_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2.2, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l24_e2', x: 620, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 500, maxX: 760, facing: 1 },
      { id: 'l24_e3', x: 840, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 770, maxX: 920, facing: -1 },
      { id: 'l24_e4', x: 1060, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 940, maxX: 1200, facing: 1 },
      { id: 'l24_e5', x: 1280, y: 380, width: 28, height: 24, type: 'slime', vx: 2.4, vy: 0, minX: 1210, maxX: 1360, facing: -1 },
      { id: 'l24_e6', x: 1500, y: 160, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 1380, maxX: 1640, facing: 1 },
      { id: 'l24_e7', x: 1720, y: 380, width: 28, height: 24, type: 'slime', vx: 2.2, vy: 0, minX: 1650, maxX: 1800, facing: -1 },
      { id: 'l24_e8', x: 1940, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 1820, maxX: 2080, facing: 1 },
      { id: 'l24_e9', x: 2160, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 2090, maxX: 2240, facing: -1 },
      { id: 'l24_e10', x: 2380, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 2260, maxX: 2520, facing: 1 },
      { id: 'l24_e11', x: 2600, y: 380, width: 28, height: 24, type: 'slime', vx: 2.4, vy: 0, minX: 2530, maxX: 2680, facing: -1 },
      { id: 'l24_e12', x: 2820, y: 160, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 2700, maxX: 2960, facing: 1 },
      { id: 'l24_e13', x: 3040, y: 380, width: 28, height: 24, type: 'slime', vx: 2.2, vy: 0, minX: 2970, maxX: 3120, facing: -1 },
      { id: 'l24_e14', x: 3260, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 3140, maxX: 3400, facing: 1 },
      { id: 'l24_e15', x: 3480, y: 380, width: 28, height: 24, type: 'slime', vx: 2, vy: 0, minX: 3410, maxX: 3560, facing: -1 },
      { id: 'l24_e16', x: 3700, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 3580, maxX: 3840, facing: 1 },
      { id: 'l24_e17', x: 3920, y: 380, width: 28, height: 24, type: 'slime', vx: 2.4, vy: 0, minX: 3850, maxX: 4000, facing: -1 },
      { id: 'l24_e18', x: 4140, y: 160, width: 26, height: 22, type: 'flyer', vx: 2, vy: 0, minX: 4020, maxX: 4280, facing: 1 },
      { id: 'l24_e19', x: 4360, y: 380, width: 28, height: 24, type: 'slime', vx: 2.2, vy: 0, minX: 4290, maxX: 4440, facing: -1 },
      { id: 'l24_e20', x: 4580, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 4460, maxX: 4720, facing: 1 }
    ],
    parTime: 115,
    threeStarScore: 11000
  },
  // ==========================================
  // LEVEL 25: PERMAFROST CITADEL
  // ==========================================
  {
    id: 25,
    title: "Level 25: Permafrost Citadel",
    description: "A frozen labyrinth of mirror-like ice surfaces, rapid spring pad rebounds, and lethal spinning blades demanding flawless aerial precision.",
    worldWidth: 5300,
    worldHeight: 650,
    theme: THEMES.tundra,
    playerStart: { x: 80, y: 480 },
    goal: { x: 5120, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1696, y: 360, width: 32, height: 48, activated: false },
      { x: 3498, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l25_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l25_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l25_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l25_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l25_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l25_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l25_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l25_cp1_base', x: 1636, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l25_p7', x: 1756, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l25_lift2', 
        x: 1916, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1916, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l25_p8', x: 2076, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l25_crumb2', x: 2256, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l25_crumb3', x: 2386, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l25_p9', x: 2526, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l25_lift3', 
        x: 2686, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2686, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l25_spring2', x: 2916, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l25_cp2_base', x: 3438, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l25_p10', x: 3558, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l25_lift4', 
        x: 3718, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3718, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l25_p11', x: 3878, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l25_crumb4', x: 4058, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l25_p12', x: 4198, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l25_p13', x: 4378, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l25_goal_base', x: 5040, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l25_spk1', x: 440, y: 610, width: 180, height: 20, type: 'spike' },
      { id: 'l25_spk2', x: 1876, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l25_spk3', x: 2616, y: 610, width: 280, height: 20, type: 'spike' },
      { id: 'l25_spk4', x: 3678, y: 610, width: 200, height: 20, type: 'spike' },
      { id: 'l25_spk5', x: 4780, y: 610, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l25_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l25_saw2', 
        x: 1417, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1417, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l25_saw3', 
        x: 2134, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2134, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l25_saw4', 
        x: 2851, y: 200, width: 44, height: 44, type: 'saw',
        startX: 2851, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l25_saw5', 
        x: 3568, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3568, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l25_saw6', 
        x: 4285, y: 200, width: 44, height: 44, type: 'saw',
        startX: 4285, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l25_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l25_shield2', x: 1776, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l25_shield3', x: 3578, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l25_jetpack', x: 260, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l25_fuel1', x: 2296, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l25_fuel2', x: 3898, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l25_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c2', x: 727, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c3', x: 1155, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l25_c4', x: 1582, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c5', x: 2009, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c6', x: 2436, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l25_c7', x: 2864, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c8', x: 3291, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c9', x: 3718, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l25_c10', x: 4145, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c11', x: 4573, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l25_c12', x: 5000, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l25_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2.25, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l25_e2', x: 614, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.45, vy: 0, minX: 494, maxX: 754, facing: 1 },
      { id: 'l25_e3', x: 828, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 758, maxX: 908, facing: -1 },
      { id: 'l25_e4', x: 1042, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.25, vy: 0, minX: 922, maxX: 1182, facing: 1 },
      { id: 'l25_e5', x: 1256, y: 380, width: 28, height: 24, type: 'slime', vx: 2.45, vy: 0, minX: 1186, maxX: 1336, facing: -1 },
      { id: 'l25_e6', x: 1470, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 1350, maxX: 1610, facing: 1 },
      { id: 'l25_e7', x: 1684, y: 380, width: 28, height: 24, type: 'slime', vx: 2.25, vy: 0, minX: 1614, maxX: 1764, facing: -1 },
      { id: 'l25_e8', x: 1898, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.45, vy: 0, minX: 1778, maxX: 2038, facing: 1 },
      { id: 'l25_e9', x: 2112, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 2042, maxX: 2192, facing: -1 },
      { id: 'l25_e10', x: 2326, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.25, vy: 0, minX: 2206, maxX: 2466, facing: 1 },
      { id: 'l25_e11', x: 2540, y: 380, width: 28, height: 24, type: 'slime', vx: 2.45, vy: 0, minX: 2470, maxX: 2620, facing: -1 },
      { id: 'l25_e12', x: 2754, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 2634, maxX: 2894, facing: 1 },
      { id: 'l25_e13', x: 2968, y: 380, width: 28, height: 24, type: 'slime', vx: 2.25, vy: 0, minX: 2898, maxX: 3048, facing: -1 },
      { id: 'l25_e14', x: 3182, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.45, vy: 0, minX: 3062, maxX: 3322, facing: 1 },
      { id: 'l25_e15', x: 3396, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 3326, maxX: 3476, facing: -1 },
      { id: 'l25_e16', x: 3610, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.25, vy: 0, minX: 3490, maxX: 3750, facing: 1 },
      { id: 'l25_e17', x: 3824, y: 380, width: 28, height: 24, type: 'slime', vx: 2.45, vy: 0, minX: 3754, maxX: 3904, facing: -1 },
      { id: 'l25_e18', x: 4038, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.05, vy: 0, minX: 3918, maxX: 4178, facing: 1 },
      { id: 'l25_e19', x: 4252, y: 380, width: 28, height: 24, type: 'slime', vx: 2.25, vy: 0, minX: 4182, maxX: 4332, facing: -1 },
      { id: 'l25_e20', x: 4466, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.45, vy: 0, minX: 4346, maxX: 4606, facing: 1 },
      { id: 'l25_e21', x: 4680, y: 380, width: 28, height: 24, type: 'slime', vx: 2.05, vy: 0, minX: 4610, maxX: 4760, facing: -1 }
    ],
    parTime: 115,
    threeStarScore: 11500
  },
  // ==========================================
  // LEVEL 26: HYPER-GRID MATRIX
  // ==========================================
  {
    id: 26,
    title: "Level 26: Hyper-Grid Matrix",
    description: "Traverse the digital stratosphere on ultra-fast moving light platforms, repelling continuous waves of robotic flyer drones with rapid blaster fire.",
    worldWidth: 5300,
    worldHeight: 640,
    theme: THEMES.cyber,
    playerStart: { x: 80, y: 480 },
    goal: { x: 5120, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1696, y: 360, width: 32, height: 48, activated: false },
      { x: 3498, y: 320, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l26_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l26_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l26_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l26_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l26_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l26_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l26_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l26_cp1_base', x: 1636, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l26_p7', x: 1756, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l26_lift2', 
        x: 1916, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1916, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l26_p8', x: 2076, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l26_crumb2', x: 2256, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l26_crumb3', x: 2386, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l26_p9', x: 2526, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l26_lift3', 
        x: 2686, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2686, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l26_spring2', x: 2916, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l26_cp2_base', x: 3438, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l26_p10', x: 3558, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l26_lift4', 
        x: 3718, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3718, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l26_p11', x: 3878, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l26_crumb4', x: 4058, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l26_p12', x: 4198, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l26_p13', x: 4378, y: 260, width: 100, height: 20, type: 'bouncy' },
      { id: 'l26_goal_base', x: 5040, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l26_spk1', x: 440, y: 600, width: 180, height: 20, type: 'spike' },
      { id: 'l26_spk2', x: 1876, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l26_spk3', x: 2616, y: 600, width: 280, height: 20, type: 'spike' },
      { id: 'l26_spk4', x: 3678, y: 600, width: 200, height: 20, type: 'spike' },
      { id: 'l26_spk5', x: 4780, y: 600, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l26_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l26_saw2', 
        x: 1417, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1417, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l26_saw3', 
        x: 2134, y: 240, width: 44, height: 44, type: 'saw',
        startX: 2134, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l26_saw4', 
        x: 2851, y: 200, width: 44, height: 44, type: 'saw',
        startX: 2851, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l26_saw5', 
        x: 3568, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3568, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l26_saw6', 
        x: 4285, y: 200, width: 44, height: 44, type: 'saw',
        startX: 4285, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      }
    ],
    collectibles: [
      { id: 'l26_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l26_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l26_ammo2', x: 2116, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l26_ammo3', x: 3918, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l26_jetpack', x: 1776, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l26_fuel1', x: 2296, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l26_fuel2', x: 3898, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l26_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c2', x: 727, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c3', x: 1155, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l26_c4', x: 1582, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c5', x: 2009, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c6', x: 2436, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l26_c7', x: 2864, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c8', x: 3291, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c9', x: 3718, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l26_c10', x: 4145, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c11', x: 4573, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l26_c12', x: 5000, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l26_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2.3, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l26_e2', x: 605, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.5, vy: 0, minX: 485, maxX: 745, facing: 1 },
      { id: 'l26_e3', x: 810, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 740, maxX: 890, facing: -1 },
      { id: 'l26_e4', x: 1015, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 895, maxX: 1155, facing: 1 },
      { id: 'l26_e5', x: 1220, y: 380, width: 28, height: 24, type: 'slime', vx: 2.5, vy: 0, minX: 1150, maxX: 1300, facing: -1 },
      { id: 'l26_e6', x: 1425, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 1305, maxX: 1565, facing: 1 },
      { id: 'l26_e7', x: 1630, y: 380, width: 28, height: 24, type: 'slime', vx: 2.3, vy: 0, minX: 1560, maxX: 1710, facing: -1 },
      { id: 'l26_e8', x: 1835, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.5, vy: 0, minX: 1715, maxX: 1975, facing: 1 },
      { id: 'l26_e9', x: 2040, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 1970, maxX: 2120, facing: -1 },
      { id: 'l26_e10', x: 2245, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 2125, maxX: 2385, facing: 1 },
      { id: 'l26_e11', x: 2450, y: 380, width: 28, height: 24, type: 'slime', vx: 2.5, vy: 0, minX: 2380, maxX: 2530, facing: -1 },
      { id: 'l26_e12', x: 2655, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 2535, maxX: 2795, facing: 1 },
      { id: 'l26_e13', x: 2860, y: 380, width: 28, height: 24, type: 'slime', vx: 2.3, vy: 0, minX: 2790, maxX: 2940, facing: -1 },
      { id: 'l26_e14', x: 3065, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.5, vy: 0, minX: 2945, maxX: 3205, facing: 1 },
      { id: 'l26_e15', x: 3270, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 3200, maxX: 3350, facing: -1 },
      { id: 'l26_e16', x: 3475, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 3355, maxX: 3615, facing: 1 },
      { id: 'l26_e17', x: 3680, y: 380, width: 28, height: 24, type: 'slime', vx: 2.5, vy: 0, minX: 3610, maxX: 3760, facing: -1 },
      { id: 'l26_e18', x: 3885, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 3765, maxX: 4025, facing: 1 },
      { id: 'l26_e19', x: 4090, y: 380, width: 28, height: 24, type: 'slime', vx: 2.3, vy: 0, minX: 4020, maxX: 4170, facing: -1 },
      { id: 'l26_e20', x: 4295, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.5, vy: 0, minX: 4175, maxX: 4435, facing: 1 },
      { id: 'l26_e21', x: 4500, y: 380, width: 28, height: 24, type: 'slime', vx: 2.1, vy: 0, minX: 4430, maxX: 4580, facing: -1 },
      { id: 'l26_e22', x: 4705, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 4585, maxX: 4845, facing: 1 }
    ],
    parTime: 120,
    threeStarScore: 12000
  },
  // ==========================================
  // LEVEL 27: BARNABY'S ULTIMATE ODYSSEY
  // ==========================================
  {
    id: 27,
    title: "Level 27: Barnaby's Ultimate Odyssey",
    description: "The monumental final trial! Harness the Jetpack, Plasma Blaster, and Bubble Shield across cosmic constellations to claim the golden Crown of Eternity.",
    worldWidth: 5400,
    worldHeight: 660,
    theme: THEMES.twilight,
    playerStart: { x: 80, y: 480 },
    goal: { x: 5220, y: 240, width: 40, height: 60 },
    checkpoints: [
      { x: 1728, y: 360, width: 32, height: 48, activated: false },
      { x: 3564, y: 320, width: 32, height: 48, activated: false },
      { x: 4428, y: 280, width: 32, height: 48, activated: false }
    ],
    platforms: [
      { id: 'l27_p1', x: 0, y: 520, width: 440, height: 120, type: 'solid' },
      { id: 'l27_p2', x: 220, y: 420, width: 100, height: 20, type: 'solid' },
      { id: 'l27_p3', x: 380, y: 360, width: 100, height: 20, type: 'solid' },
      { id: 'l27_p4', x: 620, y: 380, width: 120, height: 20, type: 'solid' },
      { id: 'l27_p5', x: 800, y: 340, width: 90, height: 20, type: 'crumbling' },
      { id: 'l27_p6', x: 960, y: 420, width: 100, height: 20, type: 'bouncy' },
      { 
        id: 'l27_lift1', 
        x: 1140, y: 380, width: 100, height: 22, type: 'solid',
        startX: 1140, startY: 380, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 
      },
      { id: 'l27_cp1_base', x: 1668, y: 420, width: 240, height: 220, type: 'solid' },
      { id: 'l27_p7', x: 1788, y: 320, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l27_lift2', 
        x: 1948, y: 420, width: 90, height: 22, type: 'solid',
        startX: 1948, startY: 420, distanceX: 0, distanceY: -180, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l27_p8', x: 2108, y: 240, width: 130, height: 20, type: 'solid' },
      { id: 'l27_crumb2', x: 2288, y: 300, width: 85, height: 20, type: 'crumbling' },
      { id: 'l27_crumb3', x: 2418, y: 340, width: 85, height: 20, type: 'crumbling' },
      { id: 'l27_p9', x: 2558, y: 380, width: 110, height: 20, type: 'solid' },
      { 
        id: 'l27_lift3', 
        x: 2718, y: 340, width: 100, height: 22, type: 'solid',
        startX: 2718, startY: 340, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 
      },
      { id: 'l27_spring2', x: 2948, y: 280, width: 90, height: 20, type: 'bouncy' },
      { id: 'l27_cp2_base', x: 3504, y: 380, width: 240, height: 260, type: 'solid' },
      { id: 'l27_p10', x: 3624, y: 260, width: 100, height: 20, type: 'one-way' },
      { 
        id: 'l27_lift4', 
        x: 3784, y: 440, width: 95, height: 22, type: 'solid',
        startX: 3784, startY: 440, distanceX: 0, distanceY: -200, speed: 2.2, vx: 0, vy: -2.2 
      },
      { id: 'l27_p11', x: 3944, y: 220, width: 120, height: 20, type: 'solid' },
      { id: 'l27_crumb4', x: 4124, y: 280, width: 85, height: 20, type: 'crumbling' },
      { id: 'l27_p12', x: 4264, y: 340, width: 120, height: 20, type: 'solid' },
      { id: 'l27_cp3_base', x: 4368, y: 340, width: 220, height: 300, type: 'solid' },
      { id: 'l27_p13', x: 4608, y: 240, width: 100, height: 20, type: 'bouncy' },
      { id: 'l27_p14', x: 4768, y: 280, width: 110, height: 20, type: 'crumbling' },
      { 
      id: 'l27_lift5', 
      x: 4918, y: 380, width: 95, height: 22, type: 'solid',
      startX: 4918, startY: 380, distanceX: 0, distanceY: -160, speed: 2.4, vx: 0, vy: -2.4 
    },
      { id: 'l27_goal_base', x: 5140, y: 300, width: 260, height: 340, type: 'solid' }
    ],
    hazards: [
      { id: 'l27_spk1', x: 440, y: 620, width: 180, height: 20, type: 'spike' },
      { id: 'l27_spk2', x: 1908, y: 620, width: 200, height: 20, type: 'spike' },
      { id: 'l27_spk3', x: 2648, y: 620, width: 280, height: 20, type: 'spike' },
      { id: 'l27_spk4', x: 3744, y: 620, width: 200, height: 20, type: 'spike' },
      { id: 'l27_spk5', x: 4880, y: 620, width: 260, height: 20, type: 'spike' },
      { 
        id: 'l27_saw1', 
        x: 700, y: 240, width: 44, height: 44, type: 'saw',
        startX: 700, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l27_saw2', 
        x: 1329, y: 200, width: 44, height: 44, type: 'saw',
        startX: 1329, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l27_saw3', 
        x: 1958, y: 240, width: 44, height: 44, type: 'saw',
        startX: 1958, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l27_saw4', 
        x: 2587, y: 200, width: 44, height: 44, type: 'saw',
        startX: 2587, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l27_saw5', 
        x: 3216, y: 240, width: 44, height: 44, type: 'saw',
        startX: 3216, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      },
      { 
        id: 'l27_saw6', 
        x: 3845, y: 200, width: 44, height: 44, type: 'saw',
        startX: 3845, startY: 200, 
        distanceX: 90, distanceY: 0, 
        speed: 2.2, vx: 2.2, vy: 0 
      },
      { 
        id: 'l27_saw7', 
        x: 4474, y: 240, width: 44, height: 44, type: 'saw',
        startX: 4474, startY: 240, 
        distanceX: 0, distanceY: 100, 
        speed: 2.2, vx: 0, vy: 2.2 
      }
    ],
    collectibles: [
      { id: 'l27_shield1', x: 250, y: 386, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l27_shield2', x: 1808, y: 286, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l27_shield3', x: 3644, y: 226, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'l27_blaster', x: 260, y: 386, width: 28, height: 28, type: 'blaster', value: 1000 },
      { id: 'l27_ammo1', x: 820, y: 306, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l27_ammo2', x: 2148, y: 206, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l27_ammo3', x: 3984, y: 186, width: 24, height: 24, type: 'blaster_ammo', value: 300 },
      { id: 'l27_jetpack', x: 1808, y: 386, width: 28, height: 28, type: 'jetpack', value: 1000 },
      { id: 'l27_fuel1', x: 2328, y: 266, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l27_fuel2', x: 3964, y: 186, width: 22, height: 22, type: 'jetpack_fuel', value: 200 },
      { id: 'l27_c1', x: 300, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c2', x: 736, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c3', x: 1173, y: 350, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l27_c4', x: 1609, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c5', x: 2045, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c6', x: 2482, y: 300, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l27_c7', x: 2918, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c8', x: 3355, y: 200, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c9', x: 3791, y: 250, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'l27_c10', x: 4227, y: 300, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c11', x: 4664, y: 350, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'l27_c12', x: 5100, y: 200, width: 24, height: 24, type: 'gem', value: 500 }
    ],
    enemies: [
      { id: 'l27_e1', x: 400, y: 380, width: 28, height: 24, type: 'slime', vx: 2.35, vy: 0, minX: 330, maxX: 480, facing: -1 },
      { id: 'l27_e2', x: 592, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.55, vy: 0, minX: 472, maxX: 732, facing: 1 },
      { id: 'l27_e3', x: 784, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 714, maxX: 864, facing: -1 },
      { id: 'l27_e4', x: 976, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 856, maxX: 1116, facing: 1 },
      { id: 'l27_e5', x: 1168, y: 380, width: 28, height: 24, type: 'slime', vx: 2.55, vy: 0, minX: 1098, maxX: 1248, facing: -1 },
      { id: 'l27_e6', x: 1360, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 1240, maxX: 1500, facing: 1 },
      { id: 'l27_e7', x: 1552, y: 380, width: 28, height: 24, type: 'slime', vx: 2.35, vy: 0, minX: 1482, maxX: 1632, facing: -1 },
      { id: 'l27_e8', x: 1744, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.55, vy: 0, minX: 1624, maxX: 1884, facing: 1 },
      { id: 'l27_e9', x: 1936, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 1866, maxX: 2016, facing: -1 },
      { id: 'l27_e10', x: 2128, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 2008, maxX: 2268, facing: 1 },
      { id: 'l27_e11', x: 2320, y: 380, width: 28, height: 24, type: 'slime', vx: 2.55, vy: 0, minX: 2250, maxX: 2400, facing: -1 },
      { id: 'l27_e12', x: 2512, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 2392, maxX: 2652, facing: 1 },
      { id: 'l27_e13', x: 2704, y: 380, width: 28, height: 24, type: 'slime', vx: 2.35, vy: 0, minX: 2634, maxX: 2784, facing: -1 },
      { id: 'l27_e14', x: 2896, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.55, vy: 0, minX: 2776, maxX: 3036, facing: 1 },
      { id: 'l27_e15', x: 3088, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 3018, maxX: 3168, facing: -1 },
      { id: 'l27_e16', x: 3280, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 3160, maxX: 3420, facing: 1 },
      { id: 'l27_e17', x: 3472, y: 380, width: 28, height: 24, type: 'slime', vx: 2.55, vy: 0, minX: 3402, maxX: 3552, facing: -1 },
      { id: 'l27_e18', x: 3664, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 3544, maxX: 3804, facing: 1 },
      { id: 'l27_e19', x: 3856, y: 380, width: 28, height: 24, type: 'slime', vx: 2.35, vy: 0, minX: 3786, maxX: 3936, facing: -1 },
      { id: 'l27_e20', x: 4048, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.55, vy: 0, minX: 3928, maxX: 4188, facing: 1 },
      { id: 'l27_e21', x: 4240, y: 380, width: 28, height: 24, type: 'slime', vx: 2.15, vy: 0, minX: 4170, maxX: 4320, facing: -1 },
      { id: 'l27_e22', x: 4432, y: 220, width: 26, height: 22, type: 'flyer', vx: 2.35, vy: 0, minX: 4312, maxX: 4572, facing: 1 },
      { id: 'l27_e23', x: 4624, y: 380, width: 28, height: 24, type: 'slime', vx: 2.55, vy: 0, minX: 4554, maxX: 4704, facing: -1 },
      { id: 'l27_e24', x: 4816, y: 160, width: 26, height: 22, type: 'flyer', vx: 2.15, vy: 0, minX: 4696, maxX: 4956, facing: 1 }
    ],
    parTime: 135,
    threeStarScore: 15000
  }
];
