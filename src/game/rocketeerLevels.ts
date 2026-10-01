import { LevelData } from '../types/game';
import { THEMES } from './themes';

export const ROCKETEER_LEVELS: LevelData[] = [
  // ==========================================
  // LEVEL 58: ROCKETEER
  // Strictly Jetpack - Zero Platforms between start & finish!
  // Mid-air fuel canisters spaced throughout the vast flight corridor.
  // ==========================================
  {
    id: 58,
    title: 'Rocketeer',
    category: 'rocketeer',
    description: 'Pure aerial flight! Zero platforms between launch and landing—glide through open air, swoop into mid-air fuel canisters, and soar to the finish!',
    worldWidth: 5400,
    worldHeight: 650,
    theme: {
      name: 'Rocketeer Skies',
      skyColorTop: '#0B132B',
      skyColorBottom: '#1C2541',
      cloudColor: '#3A506B',
      mountainColor: '#1E293B',
      platformFill: '#0F172A',
      platformTop: '#06B6D4',
      platformBorder: '#0284C7',
      accentColor: '#F59E0B'
    },
    playerStart: { x: 100, y: 440 },
    startWithJetpack: true,
    goal: { x: 5180, y: 380, width: 44, height: 60 },
    checkpoints: [],
    // STRICTLY 2 PLATFORMS ONLY: START PAD & GOAL LANDING STRIP!
    platforms: [
      {
        id: 'rocketeer_start_pad',
        x: 0,
        y: 480,
        width: 260,
        height: 170,
        type: 'solid'
      },
      {
        id: 'rocketeer_goal_pad',
        x: 5060,
        y: 440,
        width: 340,
        height: 210,
        type: 'solid'
      }
    ],
    hazards: [],
    collectibles: [
      // Starting Jetpack pickup right at the launchpad for safety & fanfare
      { id: 'rk_start_jp', x: 120, y: 440, width: 28, height: 28, type: 'jetpack', value: 500 },

      // Mid-air Fuel Canisters spaced along the flight trajectory
      // Flight Station 1: Launch Ascent
      { id: 'rk_fuel_1', x: 550, y: 360, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_c1_1', x: 380, y: 410, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c1_2', x: 460, y: 385, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c1_3', x: 630, y: 335, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c1_4', x: 710, y: 310, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 2: Sky Ridge
      { id: 'rk_fuel_2', x: 950, y: 270, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_gem_1', x: 950, y: 190, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'rk_c2_1', x: 830, y: 290, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c2_2', x: 1070, y: 250, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c2_3', x: 1190, y: 230, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 3: High Stratosphere
      { id: 'rk_fuel_3', x: 1350, y: 210, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_c3_1', x: 1470, y: 240, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c3_2', x: 1570, y: 275, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 4: Gentle Valley Swoop
      { id: 'rk_fuel_4', x: 1750, y: 320, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_gem_2', x: 1750, y: 390, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'rk_c4_1', x: 1880, y: 345, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c4_2', x: 2010, y: 370, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 5: Midpoint Thermal Updraft
      { id: 'rk_fuel_5', x: 2150, y: 380, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_c5_1', x: 2280, y: 340, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c5_2', x: 2410, y: 300, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 6: Cloud Canyon
      { id: 'rk_fuel_6', x: 2550, y: 260, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_gem_3', x: 2550, y: 180, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'rk_c6_1', x: 2680, y: 230, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c6_2', x: 2810, y: 200, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 7: Apex Peak
      { id: 'rk_fuel_7', x: 2950, y: 180, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_shield_mid', x: 2950, y: 110, width: 28, height: 28, type: 'bubble_shield', value: 800 },
      { id: 'rk_c7_1', x: 3080, y: 205, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c7_2', x: 3210, y: 225, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 8: Jetstream Crossing
      { id: 'rk_fuel_8', x: 3350, y: 240, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_c8_1', x: 3480, y: 275, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c8_2', x: 3610, y: 310, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 9: Low Sky Run
      { id: 'rk_fuel_9', x: 3750, y: 340, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_gem_4', x: 3750, y: 410, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'rk_c9_1', x: 3880, y: 315, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c9_2', x: 4010, y: 285, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 10: Final Climb
      { id: 'rk_fuel_10', x: 4150, y: 260, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_c10_1', x: 4280, y: 235, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c10_2', x: 4410, y: 215, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 11: High Approach
      { id: 'rk_fuel_11', x: 4550, y: 200, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_gem_5', x: 4550, y: 130, width: 24, height: 24, type: 'gem', value: 500 },
      { id: 'rk_c11_1', x: 4660, y: 240, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c11_2', x: 4760, y: 280, width: 20, height: 20, type: 'coin', value: 100 },

      // Flight Station 12: Glide Down to Runway
      { id: 'rk_fuel_12', x: 4860, y: 320, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk_c12_1', x: 4940, y: 360, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk_c12_2', x: 5010, y: 390, width: 20, height: 20, type: 'coin', value: 100 }
    ],
    enemies: [
      { id: 'rk_flyer_1', x: 1100, y: 260, width: 26, height: 22, type: 'flyer', vx: 1.8, vy: 0, minX: 1020, maxX: 1220, facing: 1 },
      { id: 'rk_flyer_2', x: 2300, y: 310, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 2200, maxX: 2420, facing: -1 },
      { id: 'rk_flyer_3', x: 3500, y: 230, width: 26, height: 22, type: 'flyer', vx: 2.0, vy: 0, minX: 3400, maxX: 3620, facing: 1 },
      { id: 'rk_flyer_4', x: 4300, y: 240, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 4200, maxX: 4420, facing: -1 }
    ],
    parTime: 45,
    threeStarScore: 5000
  },

  // ==========================================
  // LEVEL 59: ROCKETEER II - STRATOSPHERE GALE
  // Advanced aerial slalom with altitude waves and fast winds
  // ==========================================
  {
    id: 59,
    title: 'Rocketeer II: Stratosphere Gale',
    category: 'rocketeer',
    description: 'Brave the howling high-altitude winds! Soar across the open chasm collecting aerial fuel canisters through twisting flight corridors.',
    worldWidth: 6000,
    worldHeight: 680,
    theme: {
      name: 'Stratosphere Gale',
      skyColorTop: '#1E1B4B',
      skyColorBottom: '#3730A3',
      cloudColor: '#818CF8',
      mountainColor: '#4338CA',
      platformFill: '#1E1B4B',
      platformTop: '#A855F7',
      platformBorder: '#6366F1',
      accentColor: '#38BDF8'
    },
    playerStart: { x: 100, y: 460 },
    startWithJetpack: true,
    goal: { x: 5780, y: 400, width: 44, height: 60 },
    checkpoints: [],
    platforms: [
      {
        id: 'rk2_start_pad',
        x: 0,
        y: 500,
        width: 260,
        height: 180,
        type: 'solid'
      },
      {
        id: 'rk2_goal_pad',
        x: 5660,
        y: 460,
        width: 340,
        height: 220,
        type: 'solid'
      }
    ],
    hazards: [],
    collectibles: [
      { id: 'rk2_start_jp', x: 120, y: 460, width: 28, height: 28, type: 'jetpack', value: 500 },

      // Spaced fuel stations with undulating wave paths
      { id: 'rk2_fuel_1', x: 520, y: 380, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_c1_1', x: 360, y: 430, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk2_c1_2', x: 440, y: 405, width: 20, height: 20, type: 'coin', value: 100 },

      { id: 'rk2_fuel_2', x: 920, y: 280, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_gem_1', x: 920, y: 200, width: 24, height: 24, type: 'gem', value: 500 },

      { id: 'rk2_fuel_3', x: 1350, y: 200, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_fuel_4', x: 1780, y: 320, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_fuel_5', x: 2200, y: 420, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_gem_2', x: 2200, y: 480, width: 24, height: 24, type: 'gem', value: 500 },

      { id: 'rk2_fuel_6', x: 2620, y: 300, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_fuel_7', x: 3050, y: 190, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_shield', x: 3050, y: 120, width: 28, height: 28, type: 'bubble_shield', value: 800 },

      { id: 'rk2_fuel_8', x: 3480, y: 280, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_fuel_9', x: 3900, y: 380, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_gem_3', x: 3900, y: 440, width: 24, height: 24, type: 'gem', value: 500 },

      { id: 'rk2_fuel_10', x: 4320, y: 270, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_fuel_11', x: 4750, y: 210, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_fuel_12', x: 5180, y: 320, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk2_fuel_13', x: 5480, y: 380, width: 24, height: 24, type: 'jetpack_fuel', value: 250 }
    ],
    enemies: [
      { id: 'rk2_fl1', x: 1100, y: 250, width: 26, height: 22, type: 'flyer', vx: 2.0, vy: 0, minX: 1000, maxX: 1240, facing: 1 },
      { id: 'rk2_fl2', x: 2400, y: 340, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 2300, maxX: 2520, facing: -1 },
      { id: 'rk2_fl3', x: 3700, y: 260, width: 26, height: 22, type: 'flyer', vx: 2.4, vy: 0, minX: 3580, maxX: 3840, facing: 1 },
      { id: 'rk2_fl4', x: 4950, y: 240, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 4850, maxX: 5080, facing: -1 }
    ],
    parTime: 50,
    threeStarScore: 5500
  },

  // ==========================================
  // LEVEL 60: ROCKETEER III - COSMIC NEBULA
  // Infinite deep space void, zero platforms, glowing star fuel
  // ==========================================
  {
    id: 60,
    title: 'Rocketeer III: Cosmic Nebula',
    category: 'rocketeer',
    description: 'Master cosmic flight across the infinite stellar gulf! Dart through micro-gravity space and refuel in mid-air to touch down on the alien platform.',
    worldWidth: 6400,
    worldHeight: 700,
    theme: {
      name: 'Cosmic Nebula',
      skyColorTop: '#030712',
      skyColorBottom: '#111827',
      cloudColor: '#4F46E5',
      mountainColor: '#1E1B4B',
      platformFill: '#0F172A',
      platformTop: '#E11D48',
      platformBorder: '#BE123C',
      accentColor: '#38BDF8'
    },
    playerStart: { x: 100, y: 470 },
    startWithJetpack: true,
    goal: { x: 6180, y: 410, width: 44, height: 60 },
    checkpoints: [],
    platforms: [
      {
        id: 'rk3_start_pad',
        x: 0,
        y: 520,
        width: 260,
        height: 180,
        type: 'solid'
      },
      {
        id: 'rk3_goal_pad',
        x: 6060,
        y: 470,
        width: 340,
        height: 230,
        type: 'solid'
      }
    ],
    hazards: [],
    collectibles: [
      { id: 'rk3_start_jp', x: 120, y: 470, width: 28, height: 28, type: 'jetpack', value: 500 },

      // Mid-air stellar fuel refills
      { id: 'rk3_fuel_1', x: 500, y: 400, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_c1', x: 420, y: 425, width: 20, height: 20, type: 'coin', value: 100 },
      { id: 'rk3_c2', x: 580, y: 375, width: 20, height: 20, type: 'coin', value: 100 },

      { id: 'rk3_fuel_2', x: 920, y: 300, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_gem_1', x: 920, y: 220, width: 24, height: 24, type: 'gem', value: 500 },

      { id: 'rk3_fuel_3', x: 1350, y: 220, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_4', x: 1780, y: 340, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_5', x: 2200, y: 440, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_gem_2', x: 2200, y: 510, width: 24, height: 24, type: 'gem', value: 500 },

      { id: 'rk3_fuel_6', x: 2620, y: 320, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_7', x: 3050, y: 200, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_shield', x: 3050, y: 130, width: 28, height: 28, type: 'bubble_shield', value: 800 },

      { id: 'rk3_fuel_8', x: 3480, y: 300, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_9', x: 3900, y: 400, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_gem_3', x: 3900, y: 470, width: 24, height: 24, type: 'gem', value: 500 },

      { id: 'rk3_fuel_10', x: 4320, y: 280, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_11', x: 4750, y: 220, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_12', x: 5180, y: 330, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_13', x: 5600, y: 410, width: 24, height: 24, type: 'jetpack_fuel', value: 250 },
      { id: 'rk3_fuel_14', x: 5880, y: 380, width: 24, height: 24, type: 'jetpack_fuel', value: 250 }
    ],
    enemies: [
      { id: 'rk3_fl1', x: 1100, y: 260, width: 26, height: 22, type: 'flyer', vx: 2.1, vy: 0, minX: 1000, maxX: 1250, facing: 1 },
      { id: 'rk3_fl2', x: 2400, y: 350, width: 26, height: 22, type: 'flyer', vx: 2.3, vy: 0, minX: 2280, maxX: 2520, facing: -1 },
      { id: 'rk3_fl3', x: 3700, y: 280, width: 26, height: 22, type: 'flyer', vx: 2.5, vy: 0, minX: 3560, maxX: 3840, facing: 1 },
      { id: 'rk3_fl4', x: 4950, y: 250, width: 26, height: 22, type: 'flyer', vx: 2.2, vy: 0, minX: 4820, maxX: 5080, facing: -1 }
    ],
    parTime: 55,
    threeStarScore: 6000
  }
];
