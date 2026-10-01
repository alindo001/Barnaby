import { LevelData } from '../types/game';
import { THEMES } from './themes';

export const JETPACK_MEGA_LEVELS: LevelData[] = [
  // ==========================================
  // LEVEL 28: STRATOSPHERE FLEET
  // ==========================================
  {
    id: 28,
    title: "Level 28: Stratosphere Fleet",
    description: "Equip your Jetpack to soar across high-altitude battlecruisers, dodging aerial drone swarms and refueling mid-flight.",
    worldWidth: 5100,
    worldHeight: 660,
    theme: THEMES.sky,
    playerStart: {"x":80,"y":480},
    goal: {"x":4920,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1377,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2754,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3978,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l28_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l28_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l28_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l28_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_cp1_base",
            "x": 1317,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l28_p_cp1_high",
            "x": 1417,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l28_lift2",
            "x": 1597,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1597,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l28_p2",
            "x": 1737,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_crumb3",
            "x": 1917,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_crumb4",
            "x": 2047,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_p3",
            "x": 2177,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_lift3",
            "x": 2337,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2337,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l28_spring2",
            "x": 2567,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l28_cp2_base",
            "x": 2694,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l28_p_cp2_high",
            "x": 2794,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l28_lift4",
            "x": 2974,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 2974,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l28_p4",
            "x": 3124,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_crumb5",
            "x": 3294,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_crumb6",
            "x": 3424,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_p5",
            "x": 3554,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_lift5",
            "x": 3714,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3714,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l28_spring3",
            "x": 3934,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l28_cp3_base",
            "x": 3918,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l28_p_cp3_high",
            "x": 4018,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l28_lift6",
            "x": 4198,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4198,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l28_p6",
            "x": 4358,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_crumb7",
            "x": 4538,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_crumb8",
            "x": 4658,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l28_p7",
            "x": 4778,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l28_spring4",
            "x": 4938,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l28_goal_base",
            "x": 4840,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l28_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l28_spk2",
            "x": 1537,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l28_spk3",
            "x": 2914,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l28_spk4",
            "x": 4138,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l28_spk5",
            "x": 4580,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l28_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l28_saw2",
            "x": 1797,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1797,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l28_saw3",
            "x": 3194,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3194,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l28_saw4",
            "x": 4438,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4438,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l28_saw5",
            "x": 4700,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4700,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l28_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l28_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_fuel2",
            "x": 1457,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_fuel3",
            "x": 2077,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_fuel4",
            "x": 2834,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_fuel5",
            "x": 3454,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_fuel6",
            "x": 4058,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_fuel7",
            "x": 4698,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_fuel8",
            "x": 4740,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l28_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l28_c1",
            "x": 631,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c2",
            "x": 912,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c3",
            "x": 1193,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l28_c4",
            "x": 1474,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c5",
            "x": 1755,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c6",
            "x": 2036,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l28_c7",
            "x": 2317,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c8",
            "x": 2598,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c9",
            "x": 2879,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l28_c10",
            "x": 3160,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c11",
            "x": 3441,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c12",
            "x": 3722,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l28_c13",
            "x": 4003,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c14",
            "x": 4284,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l28_c15",
            "x": 4565,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l28_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l28_e1",
            "x": 650,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 500,
            "maxX": 800,
            "facing": -1
      },
      {
            "id": "l28_e2",
            "x": 850,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 670,
            "maxX": 1030,
            "facing": 1
      },
      {
            "id": "l28_e3",
            "x": 1050,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 840,
            "maxX": 1260,
            "facing": -1
      },
      {
            "id": "l28_e4",
            "x": 1250,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1130,
            "maxX": 1370,
            "facing": 1
      },
      {
            "id": "l28_e5",
            "x": 1450,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1300,
            "maxX": 1600,
            "facing": -1
      },
      {
            "id": "l28_e6",
            "x": 1650,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1470,
            "maxX": 1830,
            "facing": 1
      },
      {
            "id": "l28_e7",
            "x": 1850,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1640,
            "maxX": 2060,
            "facing": -1
      },
      {
            "id": "l28_e8",
            "x": 2050,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1930,
            "maxX": 2170,
            "facing": 1
      },
      {
            "id": "l28_e9",
            "x": 2250,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2100,
            "maxX": 2400,
            "facing": -1
      },
      {
            "id": "l28_e10",
            "x": 2450,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2270,
            "maxX": 2630,
            "facing": 1
      },
      {
            "id": "l28_e11",
            "x": 2650,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2440,
            "maxX": 2860,
            "facing": -1
      },
      {
            "id": "l28_e12",
            "x": 2850,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2730,
            "maxX": 2970,
            "facing": 1
      },
      {
            "id": "l28_e13",
            "x": 3050,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2900,
            "maxX": 3200,
            "facing": -1
      },
      {
            "id": "l28_e14",
            "x": 3250,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3070,
            "maxX": 3430,
            "facing": 1
      },
      {
            "id": "l28_e15",
            "x": 3450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3240,
            "maxX": 3660,
            "facing": -1
      },
      {
            "id": "l28_e16",
            "x": 3650,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3530,
            "maxX": 3770,
            "facing": 1
      },
      {
            "id": "l28_e17",
            "x": 3850,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3700,
            "maxX": 4000,
            "facing": -1
      },
      {
            "id": "l28_e18",
            "x": 4050,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3870,
            "maxX": 4230,
            "facing": 1
      },
      {
            "id": "l28_e19",
            "x": 4250,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4040,
            "maxX": 4460,
            "facing": -1
      },
      {
            "id": "l28_e20",
            "x": 4450,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4330,
            "maxX": 4570,
            "facing": 1
      },
      {
            "id": "l28_e21",
            "x": 4650,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4500,
            "maxX": 4800,
            "facing": -1
      }
],
    parTime: 95,
    threeStarScore: 8500
  },
  // ==========================================
  // LEVEL 29: NEON TURBO AIRWAY
  // ==========================================
  {
    id: 29,
    title: "Level 29: Neon Turbo Airway",
    description: "Rocket through a futuristic neon skyway flanked by laser lifts, speed boost pads, and kinetic saw grids.",
    worldWidth: 5158,
    worldHeight: 685,
    theme: THEMES.cyber,
    playerStart: {"x":80,"y":480},
    goal: {"x":4978,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1393,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2785,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4023,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l29_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l29_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l29_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l29_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_cp1_base",
            "x": 1333,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l29_p_cp1_high",
            "x": 1433,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l29_lift2",
            "x": 1613,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1613,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l29_p2",
            "x": 1753,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_crumb3",
            "x": 1933,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_crumb4",
            "x": 2063,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_p3",
            "x": 2193,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_lift3",
            "x": 2353,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2353,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l29_spring2",
            "x": 2583,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l29_cp2_base",
            "x": 2725,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l29_p_cp2_high",
            "x": 2825,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l29_lift4",
            "x": 3005,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3005,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l29_p4",
            "x": 3155,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_crumb5",
            "x": 3325,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_crumb6",
            "x": 3455,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_p5",
            "x": 3585,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_lift5",
            "x": 3745,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3745,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l29_spring3",
            "x": 3965,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l29_cp3_base",
            "x": 3963,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l29_p_cp3_high",
            "x": 4063,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l29_lift6",
            "x": 4243,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4243,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l29_p6",
            "x": 4403,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_crumb7",
            "x": 4583,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_crumb8",
            "x": 4703,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l29_p7",
            "x": 4823,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l29_spring4",
            "x": 4983,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l29_goal_base",
            "x": 4898,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l29_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l29_spk2",
            "x": 1553,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l29_spk3",
            "x": 2945,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l29_spk4",
            "x": 4183,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l29_spk5",
            "x": 4638,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l29_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l29_saw2",
            "x": 1813,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1813,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l29_saw3",
            "x": 3225,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3225,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l29_saw4",
            "x": 4483,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4483,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l29_saw5",
            "x": 4758,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4758,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l29_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l29_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_fuel2",
            "x": 1473,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_fuel3",
            "x": 2093,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_fuel4",
            "x": 2865,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_fuel5",
            "x": 3485,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_fuel6",
            "x": 4103,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_fuel7",
            "x": 4743,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_fuel8",
            "x": 4798,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l29_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l29_ammo1",
            "x": 1553,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l29_ammo2",
            "x": 2945,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l29_ammo3",
            "x": 4183,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l29_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l29_c1",
            "x": 635,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c2",
            "x": 920,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c3",
            "x": 1205,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l29_c4",
            "x": 1490,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c5",
            "x": 1775,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c6",
            "x": 2060,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l29_c7",
            "x": 2345,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c8",
            "x": 2630,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c9",
            "x": 2915,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l29_c10",
            "x": 3200,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c11",
            "x": 3485,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c12",
            "x": 3770,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l29_c13",
            "x": 4055,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c14",
            "x": 4340,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l29_c15",
            "x": 4625,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l29_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l29_e1",
            "x": 644,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 494,
            "maxX": 794,
            "facing": -1
      },
      {
            "id": "l29_e2",
            "x": 838,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 658,
            "maxX": 1018,
            "facing": 1
      },
      {
            "id": "l29_e3",
            "x": 1032,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 822,
            "maxX": 1242,
            "facing": -1
      },
      {
            "id": "l29_e4",
            "x": 1226,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1106,
            "maxX": 1346,
            "facing": 1
      },
      {
            "id": "l29_e5",
            "x": 1420,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1270,
            "maxX": 1570,
            "facing": -1
      },
      {
            "id": "l29_e6",
            "x": 1614,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1434,
            "maxX": 1794,
            "facing": 1
      },
      {
            "id": "l29_e7",
            "x": 1808,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1598,
            "maxX": 2018,
            "facing": -1
      },
      {
            "id": "l29_e8",
            "x": 2002,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1882,
            "maxX": 2122,
            "facing": 1
      },
      {
            "id": "l29_e9",
            "x": 2196,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2046,
            "maxX": 2346,
            "facing": -1
      },
      {
            "id": "l29_e10",
            "x": 2390,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2210,
            "maxX": 2570,
            "facing": 1
      },
      {
            "id": "l29_e11",
            "x": 2584,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2374,
            "maxX": 2794,
            "facing": -1
      },
      {
            "id": "l29_e12",
            "x": 2778,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2658,
            "maxX": 2898,
            "facing": 1
      },
      {
            "id": "l29_e13",
            "x": 2972,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2822,
            "maxX": 3122,
            "facing": -1
      },
      {
            "id": "l29_e14",
            "x": 3166,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2986,
            "maxX": 3346,
            "facing": 1
      },
      {
            "id": "l29_e15",
            "x": 3360,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3150,
            "maxX": 3570,
            "facing": -1
      },
      {
            "id": "l29_e16",
            "x": 3554,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3434,
            "maxX": 3674,
            "facing": 1
      },
      {
            "id": "l29_e17",
            "x": 3748,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3598,
            "maxX": 3898,
            "facing": -1
      },
      {
            "id": "l29_e18",
            "x": 3942,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3762,
            "maxX": 4122,
            "facing": 1
      },
      {
            "id": "l29_e19",
            "x": 4136,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3926,
            "maxX": 4346,
            "facing": -1
      },
      {
            "id": "l29_e20",
            "x": 4330,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4210,
            "maxX": 4450,
            "facing": 1
      },
      {
            "id": "l29_e21",
            "x": 4524,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4374,
            "maxX": 4674,
            "facing": -1
      },
      {
            "id": "l29_e22",
            "x": 4718,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4538,
            "maxX": 4898,
            "facing": 1
      }
],
    parTime: 97,
    threeStarScore: 8700
  },
  // ==========================================
  // LEVEL 30: MAGMA CALDERA FLIGHT
  // ==========================================
  {
    id: 30,
    title: "Level 30: Magma Caldera Flight",
    description: "Fly over roaring volcanic magma fissures with crumbling obsidian rocks and high-altitude thermal updrafts.",
    worldWidth: 5216,
    worldHeight: 710,
    theme: THEMES.lava,
    playerStart: {"x":80,"y":480},
    goal: {"x":5036,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1408,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2817,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4068,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l30_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l30_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l30_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l30_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_cp1_base",
            "x": 1348,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l30_p_cp1_high",
            "x": 1448,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l30_lift2",
            "x": 1628,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1628,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l30_p2",
            "x": 1768,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_crumb3",
            "x": 1948,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_crumb4",
            "x": 2078,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_p3",
            "x": 2208,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_lift3",
            "x": 2368,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2368,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l30_spring2",
            "x": 2598,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l30_cp2_base",
            "x": 2757,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l30_p_cp2_high",
            "x": 2857,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l30_lift4",
            "x": 3037,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3037,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l30_p4",
            "x": 3187,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_crumb5",
            "x": 3357,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_crumb6",
            "x": 3487,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_p5",
            "x": 3617,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_lift5",
            "x": 3777,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3777,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l30_spring3",
            "x": 3997,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l30_cp3_base",
            "x": 4008,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l30_p_cp3_high",
            "x": 4108,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l30_lift6",
            "x": 4288,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4288,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l30_p6",
            "x": 4448,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_crumb7",
            "x": 4628,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_crumb8",
            "x": 4748,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l30_p7",
            "x": 4868,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l30_spring4",
            "x": 5028,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l30_goal_base",
            "x": 4956,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l30_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l30_spk2",
            "x": 1568,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l30_spk3",
            "x": 2977,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l30_spk4",
            "x": 4228,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l30_spk5",
            "x": 4696,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l30_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l30_saw2",
            "x": 1828,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1828,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l30_saw3",
            "x": 3257,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3257,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l30_saw4",
            "x": 4528,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4528,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l30_saw5",
            "x": 4816,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4816,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l30_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l30_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_fuel2",
            "x": 1488,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_fuel3",
            "x": 2108,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_fuel4",
            "x": 2897,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_fuel5",
            "x": 3517,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_fuel6",
            "x": 4148,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_fuel7",
            "x": 4788,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_fuel8",
            "x": 4856,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l30_shield",
            "x": 3227,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l30_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l30_c1",
            "x": 639,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c2",
            "x": 928,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c3",
            "x": 1217,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l30_c4",
            "x": 1506,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c5",
            "x": 1795,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c6",
            "x": 2084,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l30_c7",
            "x": 2373,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c8",
            "x": 2662,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c9",
            "x": 2951,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l30_c10",
            "x": 3240,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c11",
            "x": 3529,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c12",
            "x": 3818,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l30_c13",
            "x": 4107,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c14",
            "x": 4396,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l30_c15",
            "x": 4685,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l30_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l30_e1",
            "x": 638,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 488,
            "maxX": 788,
            "facing": -1
      },
      {
            "id": "l30_e2",
            "x": 826,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 646,
            "maxX": 1006,
            "facing": 1
      },
      {
            "id": "l30_e3",
            "x": 1014,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 804,
            "maxX": 1224,
            "facing": -1
      },
      {
            "id": "l30_e4",
            "x": 1202,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1082,
            "maxX": 1322,
            "facing": 1
      },
      {
            "id": "l30_e5",
            "x": 1390,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1240,
            "maxX": 1540,
            "facing": -1
      },
      {
            "id": "l30_e6",
            "x": 1578,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1398,
            "maxX": 1758,
            "facing": 1
      },
      {
            "id": "l30_e7",
            "x": 1766,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1556,
            "maxX": 1976,
            "facing": -1
      },
      {
            "id": "l30_e8",
            "x": 1954,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1834,
            "maxX": 2074,
            "facing": 1
      },
      {
            "id": "l30_e9",
            "x": 2142,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1992,
            "maxX": 2292,
            "facing": -1
      },
      {
            "id": "l30_e10",
            "x": 2330,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2150,
            "maxX": 2510,
            "facing": 1
      },
      {
            "id": "l30_e11",
            "x": 2518,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2308,
            "maxX": 2728,
            "facing": -1
      },
      {
            "id": "l30_e12",
            "x": 2706,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2586,
            "maxX": 2826,
            "facing": 1
      },
      {
            "id": "l30_e13",
            "x": 2894,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2744,
            "maxX": 3044,
            "facing": -1
      },
      {
            "id": "l30_e14",
            "x": 3082,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2902,
            "maxX": 3262,
            "facing": 1
      },
      {
            "id": "l30_e15",
            "x": 3270,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3060,
            "maxX": 3480,
            "facing": -1
      },
      {
            "id": "l30_e16",
            "x": 3458,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3338,
            "maxX": 3578,
            "facing": 1
      },
      {
            "id": "l30_e17",
            "x": 3646,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3496,
            "maxX": 3796,
            "facing": -1
      },
      {
            "id": "l30_e18",
            "x": 3834,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3654,
            "maxX": 4014,
            "facing": 1
      },
      {
            "id": "l30_e19",
            "x": 4022,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3812,
            "maxX": 4232,
            "facing": -1
      },
      {
            "id": "l30_e20",
            "x": 4210,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4090,
            "maxX": 4330,
            "facing": 1
      },
      {
            "id": "l30_e21",
            "x": 4398,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4248,
            "maxX": 4548,
            "facing": -1
      },
      {
            "id": "l30_e22",
            "x": 4586,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4406,
            "maxX": 4766,
            "facing": 1
      },
      {
            "id": "l30_e23",
            "x": 4774,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4564,
            "maxX": 4984,
            "facing": -1
      }
],
    parTime: 99,
    threeStarScore: 8900
  },
  // ==========================================
  // LEVEL 31: CORAL ABYSS FLIGHT
  // ==========================================
  {
    id: 31,
    title: "Level 31: Coral Abyss Flight",
    description: "Soar through deep underwater grottos equipped with Bubble Shield and Jetpack across kinetic coral saws.",
    worldWidth: 5274,
    worldHeight: 735,
    theme: THEMES.reef,
    playerStart: {"x":80,"y":480},
    goal: {"x":5094,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1424,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2848,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4114,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l31_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l31_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l31_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l31_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_cp1_base",
            "x": 1364,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l31_p_cp1_high",
            "x": 1464,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l31_lift2",
            "x": 1644,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1644,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l31_p2",
            "x": 1784,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_crumb3",
            "x": 1964,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_crumb4",
            "x": 2094,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_p3",
            "x": 2224,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_lift3",
            "x": 2384,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2384,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l31_spring2",
            "x": 2614,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l31_cp2_base",
            "x": 2788,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l31_p_cp2_high",
            "x": 2888,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l31_lift4",
            "x": 3068,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3068,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l31_p4",
            "x": 3218,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_crumb5",
            "x": 3388,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_crumb6",
            "x": 3518,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_p5",
            "x": 3648,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_lift5",
            "x": 3808,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3808,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l31_spring3",
            "x": 4028,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l31_cp3_base",
            "x": 4054,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l31_p_cp3_high",
            "x": 4154,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l31_lift6",
            "x": 4334,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4334,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l31_p6",
            "x": 4494,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_crumb7",
            "x": 4674,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_crumb8",
            "x": 4794,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l31_p7",
            "x": 4914,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l31_spring4",
            "x": 5074,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l31_goal_base",
            "x": 5014,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l31_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l31_spk2",
            "x": 1584,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l31_spk3",
            "x": 3008,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l31_spk4",
            "x": 4274,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l31_spk5",
            "x": 4754,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l31_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l31_saw2",
            "x": 1844,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1844,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l31_saw3",
            "x": 3288,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3288,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l31_saw4",
            "x": 4574,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4574,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l31_saw5",
            "x": 4874,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4874,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l31_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l31_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_fuel2",
            "x": 1504,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_fuel3",
            "x": 2124,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_fuel4",
            "x": 2928,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_fuel5",
            "x": 3548,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_fuel6",
            "x": 4194,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_fuel7",
            "x": 4834,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_fuel8",
            "x": 4914,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l31_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l31_ammo1",
            "x": 1584,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l31_ammo2",
            "x": 3008,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l31_ammo3",
            "x": 4274,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l31_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l31_c1",
            "x": 642,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c2",
            "x": 934,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c3",
            "x": 1226,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l31_c4",
            "x": 1518,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c5",
            "x": 1810,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c6",
            "x": 2102,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l31_c7",
            "x": 2394,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c8",
            "x": 2686,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c9",
            "x": 2978,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l31_c10",
            "x": 3270,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c11",
            "x": 3562,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c12",
            "x": 3854,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l31_c13",
            "x": 4146,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c14",
            "x": 4438,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l31_c15",
            "x": 4730,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l31_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l31_e1",
            "x": 633,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 483,
            "maxX": 783,
            "facing": -1
      },
      {
            "id": "l31_e2",
            "x": 816,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 636,
            "maxX": 996,
            "facing": 1
      },
      {
            "id": "l31_e3",
            "x": 999,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 789,
            "maxX": 1209,
            "facing": -1
      },
      {
            "id": "l31_e4",
            "x": 1182,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1062,
            "maxX": 1302,
            "facing": 1
      },
      {
            "id": "l31_e5",
            "x": 1365,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1215,
            "maxX": 1515,
            "facing": -1
      },
      {
            "id": "l31_e6",
            "x": 1548,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1368,
            "maxX": 1728,
            "facing": 1
      },
      {
            "id": "l31_e7",
            "x": 1731,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1521,
            "maxX": 1941,
            "facing": -1
      },
      {
            "id": "l31_e8",
            "x": 1914,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1794,
            "maxX": 2034,
            "facing": 1
      },
      {
            "id": "l31_e9",
            "x": 2097,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1947,
            "maxX": 2247,
            "facing": -1
      },
      {
            "id": "l31_e10",
            "x": 2280,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2100,
            "maxX": 2460,
            "facing": 1
      },
      {
            "id": "l31_e11",
            "x": 2463,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2253,
            "maxX": 2673,
            "facing": -1
      },
      {
            "id": "l31_e12",
            "x": 2646,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2526,
            "maxX": 2766,
            "facing": 1
      },
      {
            "id": "l31_e13",
            "x": 2829,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2679,
            "maxX": 2979,
            "facing": -1
      },
      {
            "id": "l31_e14",
            "x": 3012,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2832,
            "maxX": 3192,
            "facing": 1
      },
      {
            "id": "l31_e15",
            "x": 3195,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2985,
            "maxX": 3405,
            "facing": -1
      },
      {
            "id": "l31_e16",
            "x": 3378,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3258,
            "maxX": 3498,
            "facing": 1
      },
      {
            "id": "l31_e17",
            "x": 3561,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3411,
            "maxX": 3711,
            "facing": -1
      },
      {
            "id": "l31_e18",
            "x": 3744,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3564,
            "maxX": 3924,
            "facing": 1
      },
      {
            "id": "l31_e19",
            "x": 3927,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3717,
            "maxX": 4137,
            "facing": -1
      },
      {
            "id": "l31_e20",
            "x": 4110,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3990,
            "maxX": 4230,
            "facing": 1
      },
      {
            "id": "l31_e21",
            "x": 4293,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4143,
            "maxX": 4443,
            "facing": -1
      },
      {
            "id": "l31_e22",
            "x": 4476,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4296,
            "maxX": 4656,
            "facing": 1
      },
      {
            "id": "l31_e23",
            "x": 4659,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4449,
            "maxX": 4869,
            "facing": -1
      },
      {
            "id": "l31_e24",
            "x": 4842,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4722,
            "maxX": 4962,
            "facing": 1
      }
],
    parTime: 101,
    threeStarScore: 9100
  },
  // ==========================================
  // LEVEL 32: SOLAR DUNE HIGH-ROAD
  // ==========================================
  {
    id: 32,
    title: "Level 32: Solar Dune High-Road",
    description: "Cross scorching desert canyon heights where shifting sand platforms and flying patrols challenge your fuel management.",
    worldWidth: 5332,
    worldHeight: 660,
    theme: THEMES.desert,
    playerStart: {"x":80,"y":480},
    goal: {"x":5152,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1440,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2879,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4159,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l32_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l32_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l32_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l32_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_cp1_base",
            "x": 1380,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l32_p_cp1_high",
            "x": 1480,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l32_lift2",
            "x": 1660,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1660,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l32_p2",
            "x": 1800,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_crumb3",
            "x": 1980,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_crumb4",
            "x": 2110,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_p3",
            "x": 2240,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_lift3",
            "x": 2400,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2400,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l32_spring2",
            "x": 2630,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l32_cp2_base",
            "x": 2819,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l32_p_cp2_high",
            "x": 2919,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l32_lift4",
            "x": 3099,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3099,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l32_p4",
            "x": 3249,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_crumb5",
            "x": 3419,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_crumb6",
            "x": 3549,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_p5",
            "x": 3679,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_lift5",
            "x": 3839,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3839,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l32_spring3",
            "x": 4059,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l32_cp3_base",
            "x": 4099,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l32_p_cp3_high",
            "x": 4199,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l32_lift6",
            "x": 4379,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4379,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l32_p6",
            "x": 4539,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_crumb7",
            "x": 4719,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_crumb8",
            "x": 4839,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l32_p7",
            "x": 4959,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l32_spring4",
            "x": 5119,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l32_goal_base",
            "x": 5072,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l32_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l32_spk2",
            "x": 1600,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l32_spk3",
            "x": 3039,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l32_spk4",
            "x": 4319,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l32_spk5",
            "x": 4812,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l32_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l32_saw2",
            "x": 1860,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1860,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l32_saw3",
            "x": 3319,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3319,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l32_saw4",
            "x": 4619,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4619,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l32_saw5",
            "x": 4932,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4932,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l32_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l32_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_fuel2",
            "x": 1520,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_fuel3",
            "x": 2140,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_fuel4",
            "x": 2959,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_fuel5",
            "x": 3579,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_fuel6",
            "x": 4239,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_fuel7",
            "x": 4879,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_fuel8",
            "x": 4972,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l32_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l32_c1",
            "x": 646,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c2",
            "x": 942,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c3",
            "x": 1238,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l32_c4",
            "x": 1534,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c5",
            "x": 1830,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c6",
            "x": 2126,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l32_c7",
            "x": 2422,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c8",
            "x": 2718,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c9",
            "x": 3014,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l32_c10",
            "x": 3310,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c11",
            "x": 3606,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c12",
            "x": 3902,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l32_c13",
            "x": 4198,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c14",
            "x": 4494,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l32_c15",
            "x": 4790,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l32_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l32_e1",
            "x": 628,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 478,
            "maxX": 778,
            "facing": -1
      },
      {
            "id": "l32_e2",
            "x": 806,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 626,
            "maxX": 986,
            "facing": 1
      },
      {
            "id": "l32_e3",
            "x": 984,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 774,
            "maxX": 1194,
            "facing": -1
      },
      {
            "id": "l32_e4",
            "x": 1162,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1042,
            "maxX": 1282,
            "facing": 1
      },
      {
            "id": "l32_e5",
            "x": 1340,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1190,
            "maxX": 1490,
            "facing": -1
      },
      {
            "id": "l32_e6",
            "x": 1518,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1338,
            "maxX": 1698,
            "facing": 1
      },
      {
            "id": "l32_e7",
            "x": 1696,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1486,
            "maxX": 1906,
            "facing": -1
      },
      {
            "id": "l32_e8",
            "x": 1874,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1754,
            "maxX": 1994,
            "facing": 1
      },
      {
            "id": "l32_e9",
            "x": 2052,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1902,
            "maxX": 2202,
            "facing": -1
      },
      {
            "id": "l32_e10",
            "x": 2230,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2050,
            "maxX": 2410,
            "facing": 1
      },
      {
            "id": "l32_e11",
            "x": 2408,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2198,
            "maxX": 2618,
            "facing": -1
      },
      {
            "id": "l32_e12",
            "x": 2586,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2466,
            "maxX": 2706,
            "facing": 1
      },
      {
            "id": "l32_e13",
            "x": 2764,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2614,
            "maxX": 2914,
            "facing": -1
      },
      {
            "id": "l32_e14",
            "x": 2942,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2762,
            "maxX": 3122,
            "facing": 1
      },
      {
            "id": "l32_e15",
            "x": 3120,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2910,
            "maxX": 3330,
            "facing": -1
      },
      {
            "id": "l32_e16",
            "x": 3298,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3178,
            "maxX": 3418,
            "facing": 1
      },
      {
            "id": "l32_e17",
            "x": 3476,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3326,
            "maxX": 3626,
            "facing": -1
      },
      {
            "id": "l32_e18",
            "x": 3654,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3474,
            "maxX": 3834,
            "facing": 1
      },
      {
            "id": "l32_e19",
            "x": 3832,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3622,
            "maxX": 4042,
            "facing": -1
      },
      {
            "id": "l32_e20",
            "x": 4010,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3890,
            "maxX": 4130,
            "facing": 1
      },
      {
            "id": "l32_e21",
            "x": 4188,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4038,
            "maxX": 4338,
            "facing": -1
      },
      {
            "id": "l32_e22",
            "x": 4366,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4186,
            "maxX": 4546,
            "facing": 1
      },
      {
            "id": "l32_e23",
            "x": 4544,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4334,
            "maxX": 4754,
            "facing": -1
      },
      {
            "id": "l32_e24",
            "x": 4722,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4602,
            "maxX": 4842,
            "facing": 1
      },
      {
            "id": "l32_e25",
            "x": 4900,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4750,
            "maxX": 5050,
            "facing": -1
      }
],
    parTime: 103,
    threeStarScore: 9300
  },
  // ==========================================
  // LEVEL 33: BLIZZARD SPIRE SOAR
  // ==========================================
  {
    id: 33,
    title: "Level 33: Blizzard Spire Soar",
    description: "Brave sub-zero gale winds as you rocket past icy crags, bounce off frost springs, and dodge frost flyer squads.",
    worldWidth: 5390,
    worldHeight: 685,
    theme: THEMES.tundra,
    playerStart: {"x":80,"y":480},
    goal: {"x":5210,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1455,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2911,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4204,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l33_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l33_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l33_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l33_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_cp1_base",
            "x": 1395,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l33_p_cp1_high",
            "x": 1495,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l33_lift2",
            "x": 1675,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1675,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l33_p2",
            "x": 1815,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_crumb3",
            "x": 1995,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_crumb4",
            "x": 2125,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_p3",
            "x": 2255,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_lift3",
            "x": 2415,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2415,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l33_spring2",
            "x": 2645,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l33_cp2_base",
            "x": 2851,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l33_p_cp2_high",
            "x": 2951,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l33_lift4",
            "x": 3131,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3131,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l33_p4",
            "x": 3281,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_crumb5",
            "x": 3451,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_crumb6",
            "x": 3581,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_p5",
            "x": 3711,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_lift5",
            "x": 3871,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3871,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l33_spring3",
            "x": 4091,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l33_cp3_base",
            "x": 4144,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l33_p_cp3_high",
            "x": 4244,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l33_lift6",
            "x": 4424,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4424,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l33_p6",
            "x": 4584,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_crumb7",
            "x": 4764,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_crumb8",
            "x": 4884,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l33_p7",
            "x": 5004,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l33_spring4",
            "x": 5164,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l33_goal_base",
            "x": 5130,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l33_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l33_spk2",
            "x": 1615,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l33_spk3",
            "x": 3071,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l33_spk4",
            "x": 4364,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l33_spk5",
            "x": 4870,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l33_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l33_saw2",
            "x": 1875,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1875,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l33_saw3",
            "x": 3351,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3351,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l33_saw4",
            "x": 4664,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4664,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l33_saw5",
            "x": 4990,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4990,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l33_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l33_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_fuel2",
            "x": 1535,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_fuel3",
            "x": 2155,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_fuel4",
            "x": 2991,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_fuel5",
            "x": 3611,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_fuel6",
            "x": 4284,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_fuel7",
            "x": 4924,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_fuel8",
            "x": 5030,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l33_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l33_ammo1",
            "x": 1615,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l33_ammo2",
            "x": 3071,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l33_ammo3",
            "x": 4364,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l33_shield",
            "x": 3321,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l33_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l33_c1",
            "x": 649,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c2",
            "x": 948,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c3",
            "x": 1247,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l33_c4",
            "x": 1546,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c5",
            "x": 1845,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c6",
            "x": 2144,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l33_c7",
            "x": 2443,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c8",
            "x": 2742,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c9",
            "x": 3041,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l33_c10",
            "x": 3340,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c11",
            "x": 3639,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c12",
            "x": 3938,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l33_c13",
            "x": 4237,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c14",
            "x": 4536,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l33_c15",
            "x": 4835,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l33_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l33_e1",
            "x": 624,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 474,
            "maxX": 774,
            "facing": -1
      },
      {
            "id": "l33_e2",
            "x": 798,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 618,
            "maxX": 978,
            "facing": 1
      },
      {
            "id": "l33_e3",
            "x": 972,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 762,
            "maxX": 1182,
            "facing": -1
      },
      {
            "id": "l33_e4",
            "x": 1146,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1026,
            "maxX": 1266,
            "facing": 1
      },
      {
            "id": "l33_e5",
            "x": 1320,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1170,
            "maxX": 1470,
            "facing": -1
      },
      {
            "id": "l33_e6",
            "x": 1494,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1314,
            "maxX": 1674,
            "facing": 1
      },
      {
            "id": "l33_e7",
            "x": 1668,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1458,
            "maxX": 1878,
            "facing": -1
      },
      {
            "id": "l33_e8",
            "x": 1842,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1722,
            "maxX": 1962,
            "facing": 1
      },
      {
            "id": "l33_e9",
            "x": 2016,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1866,
            "maxX": 2166,
            "facing": -1
      },
      {
            "id": "l33_e10",
            "x": 2190,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2010,
            "maxX": 2370,
            "facing": 1
      },
      {
            "id": "l33_e11",
            "x": 2364,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2154,
            "maxX": 2574,
            "facing": -1
      },
      {
            "id": "l33_e12",
            "x": 2538,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2418,
            "maxX": 2658,
            "facing": 1
      },
      {
            "id": "l33_e13",
            "x": 2712,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2562,
            "maxX": 2862,
            "facing": -1
      },
      {
            "id": "l33_e14",
            "x": 2886,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2706,
            "maxX": 3066,
            "facing": 1
      },
      {
            "id": "l33_e15",
            "x": 3060,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2850,
            "maxX": 3270,
            "facing": -1
      },
      {
            "id": "l33_e16",
            "x": 3234,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3114,
            "maxX": 3354,
            "facing": 1
      },
      {
            "id": "l33_e17",
            "x": 3408,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3258,
            "maxX": 3558,
            "facing": -1
      },
      {
            "id": "l33_e18",
            "x": 3582,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3402,
            "maxX": 3762,
            "facing": 1
      },
      {
            "id": "l33_e19",
            "x": 3756,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3546,
            "maxX": 3966,
            "facing": -1
      },
      {
            "id": "l33_e20",
            "x": 3930,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3810,
            "maxX": 4050,
            "facing": 1
      },
      {
            "id": "l33_e21",
            "x": 4104,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3954,
            "maxX": 4254,
            "facing": -1
      },
      {
            "id": "l33_e22",
            "x": 4278,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4098,
            "maxX": 4458,
            "facing": 1
      },
      {
            "id": "l33_e23",
            "x": 4452,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4242,
            "maxX": 4662,
            "facing": -1
      },
      {
            "id": "l33_e24",
            "x": 4626,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4506,
            "maxX": 4746,
            "facing": 1
      },
      {
            "id": "l33_e25",
            "x": 4800,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4650,
            "maxX": 4950,
            "facing": -1
      },
      {
            "id": "l33_e26",
            "x": 4974,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4794,
            "maxX": 5154,
            "facing": 1
      }
],
    parTime: 105,
    threeStarScore: 9500
  },
  // ==========================================
  // LEVEL 34: TOXIC REFINERY GAUNTLET
  // ==========================================
  {
    id: 34,
    title: "Level 34: Toxic Refinery Gauntlet",
    description: "Armed with Jetpack and Plasma Blaster, navigate hazardous chemical vats and eliminate bio-drone patrols.",
    worldWidth: 5448,
    worldHeight: 710,
    theme: THEMES.toxic,
    playerStart: {"x":80,"y":480},
    goal: {"x":5268,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1471,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2942,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4249,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l34_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l34_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l34_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l34_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_cp1_base",
            "x": 1411,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l34_p_cp1_high",
            "x": 1511,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l34_lift2",
            "x": 1691,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1691,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l34_p2",
            "x": 1831,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_crumb3",
            "x": 2011,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_crumb4",
            "x": 2141,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_p3",
            "x": 2271,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_lift3",
            "x": 2431,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2431,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l34_spring2",
            "x": 2661,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l34_cp2_base",
            "x": 2882,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l34_p_cp2_high",
            "x": 2982,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l34_lift4",
            "x": 3162,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3162,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l34_p4",
            "x": 3312,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_crumb5",
            "x": 3482,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_crumb6",
            "x": 3612,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_p5",
            "x": 3742,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_lift5",
            "x": 3902,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3902,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l34_spring3",
            "x": 4122,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l34_cp3_base",
            "x": 4189,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l34_p_cp3_high",
            "x": 4289,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l34_lift6",
            "x": 4469,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4469,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l34_p6",
            "x": 4629,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_crumb7",
            "x": 4809,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_crumb8",
            "x": 4929,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l34_p7",
            "x": 5049,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l34_spring4",
            "x": 5209,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l34_goal_base",
            "x": 5188,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l34_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l34_spk2",
            "x": 1631,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l34_spk3",
            "x": 3102,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l34_spk4",
            "x": 4409,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l34_spk5",
            "x": 4928,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l34_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l34_saw2",
            "x": 1891,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1891,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l34_saw3",
            "x": 3382,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3382,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l34_saw4",
            "x": 4709,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4709,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l34_saw5",
            "x": 5048,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5048,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l34_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l34_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_fuel2",
            "x": 1551,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_fuel3",
            "x": 2171,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_fuel4",
            "x": 3022,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_fuel5",
            "x": 3642,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_fuel6",
            "x": 4329,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_fuel7",
            "x": 4969,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_fuel8",
            "x": 5088,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l34_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l34_c1",
            "x": 653,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c2",
            "x": 956,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c3",
            "x": 1259,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l34_c4",
            "x": 1562,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c5",
            "x": 1865,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c6",
            "x": 2168,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l34_c7",
            "x": 2471,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c8",
            "x": 2774,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c9",
            "x": 3077,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l34_c10",
            "x": 3380,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c11",
            "x": 3683,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c12",
            "x": 3986,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l34_c13",
            "x": 4289,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c14",
            "x": 4592,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l34_c15",
            "x": 4895,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l34_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l34_e1",
            "x": 620,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 470,
            "maxX": 770,
            "facing": -1
      },
      {
            "id": "l34_e2",
            "x": 790,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 610,
            "maxX": 970,
            "facing": 1
      },
      {
            "id": "l34_e3",
            "x": 960,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 750,
            "maxX": 1170,
            "facing": -1
      },
      {
            "id": "l34_e4",
            "x": 1130,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1010,
            "maxX": 1250,
            "facing": 1
      },
      {
            "id": "l34_e5",
            "x": 1300,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1150,
            "maxX": 1450,
            "facing": -1
      },
      {
            "id": "l34_e6",
            "x": 1470,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1290,
            "maxX": 1650,
            "facing": 1
      },
      {
            "id": "l34_e7",
            "x": 1640,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1430,
            "maxX": 1850,
            "facing": -1
      },
      {
            "id": "l34_e8",
            "x": 1810,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1690,
            "maxX": 1930,
            "facing": 1
      },
      {
            "id": "l34_e9",
            "x": 1980,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1830,
            "maxX": 2130,
            "facing": -1
      },
      {
            "id": "l34_e10",
            "x": 2150,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 1970,
            "maxX": 2330,
            "facing": 1
      },
      {
            "id": "l34_e11",
            "x": 2320,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2110,
            "maxX": 2530,
            "facing": -1
      },
      {
            "id": "l34_e12",
            "x": 2490,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2370,
            "maxX": 2610,
            "facing": 1
      },
      {
            "id": "l34_e13",
            "x": 2660,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2510,
            "maxX": 2810,
            "facing": -1
      },
      {
            "id": "l34_e14",
            "x": 2830,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2650,
            "maxX": 3010,
            "facing": 1
      },
      {
            "id": "l34_e15",
            "x": 3000,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2790,
            "maxX": 3210,
            "facing": -1
      },
      {
            "id": "l34_e16",
            "x": 3170,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3050,
            "maxX": 3290,
            "facing": 1
      },
      {
            "id": "l34_e17",
            "x": 3340,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3190,
            "maxX": 3490,
            "facing": -1
      },
      {
            "id": "l34_e18",
            "x": 3510,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3330,
            "maxX": 3690,
            "facing": 1
      },
      {
            "id": "l34_e19",
            "x": 3680,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3470,
            "maxX": 3890,
            "facing": -1
      },
      {
            "id": "l34_e20",
            "x": 3850,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3730,
            "maxX": 3970,
            "facing": 1
      },
      {
            "id": "l34_e21",
            "x": 4020,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3870,
            "maxX": 4170,
            "facing": -1
      },
      {
            "id": "l34_e22",
            "x": 4190,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4010,
            "maxX": 4370,
            "facing": 1
      },
      {
            "id": "l34_e23",
            "x": 4360,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4150,
            "maxX": 4570,
            "facing": -1
      },
      {
            "id": "l34_e24",
            "x": 4530,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4410,
            "maxX": 4650,
            "facing": 1
      },
      {
            "id": "l34_e25",
            "x": 4700,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4550,
            "maxX": 4850,
            "facing": -1
      },
      {
            "id": "l34_e26",
            "x": 4870,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4690,
            "maxX": 5050,
            "facing": 1
      },
      {
            "id": "l34_e27",
            "x": 5040,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4830,
            "maxX": 5250,
            "facing": -1
      }
],
    parTime: 107,
    threeStarScore: 9700
  },
  // ==========================================
  // LEVEL 35: MIDNIGHT CITADEL BASTION
  // ==========================================
  {
    id: 35,
    title: "Level 35: Midnight Citadel Bastion",
    description: "Fly between gothic spires under a dark crescent moon, dodging gargoyle flyer ambushes and swinging saw blades.",
    worldWidth: 5506,
    worldHeight: 735,
    theme: THEMES.castle,
    playerStart: {"x":80,"y":480},
    goal: {"x":5326,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1487,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 2973,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4295,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l35_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l35_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l35_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l35_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_cp1_base",
            "x": 1427,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l35_p_cp1_high",
            "x": 1527,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l35_lift2",
            "x": 1707,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1707,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l35_p2",
            "x": 1847,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_crumb3",
            "x": 2027,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_crumb4",
            "x": 2157,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_p3",
            "x": 2287,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_lift3",
            "x": 2447,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2447,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l35_spring2",
            "x": 2677,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l35_cp2_base",
            "x": 2913,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l35_p_cp2_high",
            "x": 3013,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l35_lift4",
            "x": 3193,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3193,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l35_p4",
            "x": 3343,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_crumb5",
            "x": 3513,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_crumb6",
            "x": 3643,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_p5",
            "x": 3773,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_lift5",
            "x": 3933,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3933,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l35_spring3",
            "x": 4153,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l35_cp3_base",
            "x": 4235,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l35_p_cp3_high",
            "x": 4335,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l35_lift6",
            "x": 4515,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4515,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l35_p6",
            "x": 4675,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_crumb7",
            "x": 4855,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_crumb8",
            "x": 4975,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l35_p7",
            "x": 5095,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l35_spring4",
            "x": 5255,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l35_goal_base",
            "x": 5246,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l35_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l35_spk2",
            "x": 1647,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l35_spk3",
            "x": 3133,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l35_spk4",
            "x": 4455,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l35_spk5",
            "x": 4986,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l35_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l35_saw2",
            "x": 1907,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1907,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l35_saw3",
            "x": 3413,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3413,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l35_saw4",
            "x": 4755,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4755,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l35_saw5",
            "x": 5106,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5106,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l35_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l35_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_fuel2",
            "x": 1567,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_fuel3",
            "x": 2187,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_fuel4",
            "x": 3053,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_fuel5",
            "x": 3673,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_fuel6",
            "x": 4375,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_fuel7",
            "x": 5015,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_fuel8",
            "x": 5146,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l35_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l35_ammo1",
            "x": 1647,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l35_ammo2",
            "x": 3133,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l35_ammo3",
            "x": 4455,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l35_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l35_c1",
            "x": 657,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c2",
            "x": 964,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c3",
            "x": 1271,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l35_c4",
            "x": 1578,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c5",
            "x": 1885,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c6",
            "x": 2192,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l35_c7",
            "x": 2499,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c8",
            "x": 2806,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c9",
            "x": 3113,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l35_c10",
            "x": 3420,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c11",
            "x": 3727,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c12",
            "x": 4034,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l35_c13",
            "x": 4341,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c14",
            "x": 4648,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l35_c15",
            "x": 4955,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l35_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l35_e1",
            "x": 668,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 518,
            "maxX": 818,
            "facing": -1
      },
      {
            "id": "l35_e2",
            "x": 886,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 706,
            "maxX": 1066,
            "facing": 1
      },
      {
            "id": "l35_e3",
            "x": 1104,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 894,
            "maxX": 1314,
            "facing": -1
      },
      {
            "id": "l35_e4",
            "x": 1322,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1202,
            "maxX": 1442,
            "facing": 1
      },
      {
            "id": "l35_e5",
            "x": 1540,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1390,
            "maxX": 1690,
            "facing": -1
      },
      {
            "id": "l35_e6",
            "x": 1758,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1578,
            "maxX": 1938,
            "facing": 1
      },
      {
            "id": "l35_e7",
            "x": 1976,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1766,
            "maxX": 2186,
            "facing": -1
      },
      {
            "id": "l35_e8",
            "x": 2194,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2074,
            "maxX": 2314,
            "facing": 1
      },
      {
            "id": "l35_e9",
            "x": 2412,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2262,
            "maxX": 2562,
            "facing": -1
      },
      {
            "id": "l35_e10",
            "x": 2630,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2450,
            "maxX": 2810,
            "facing": 1
      },
      {
            "id": "l35_e11",
            "x": 2848,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2638,
            "maxX": 3058,
            "facing": -1
      },
      {
            "id": "l35_e12",
            "x": 3066,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2946,
            "maxX": 3186,
            "facing": 1
      },
      {
            "id": "l35_e13",
            "x": 3284,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3134,
            "maxX": 3434,
            "facing": -1
      },
      {
            "id": "l35_e14",
            "x": 3502,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3322,
            "maxX": 3682,
            "facing": 1
      },
      {
            "id": "l35_e15",
            "x": 3720,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3510,
            "maxX": 3930,
            "facing": -1
      },
      {
            "id": "l35_e16",
            "x": 3938,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3818,
            "maxX": 4058,
            "facing": 1
      },
      {
            "id": "l35_e17",
            "x": 4156,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4006,
            "maxX": 4306,
            "facing": -1
      },
      {
            "id": "l35_e18",
            "x": 4374,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4194,
            "maxX": 4554,
            "facing": 1
      },
      {
            "id": "l35_e19",
            "x": 4592,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4382,
            "maxX": 4802,
            "facing": -1
      },
      {
            "id": "l35_e20",
            "x": 4810,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4690,
            "maxX": 4930,
            "facing": 1
      },
      {
            "id": "l35_e21",
            "x": 5028,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4878,
            "maxX": 5178,
            "facing": -1
      }
],
    parTime: 109,
    threeStarScore: 9900
  },
  // ==========================================
  // LEVEL 36: CRYSTAL NEBULA CAVERNS
  // ==========================================
  {
    id: 36,
    title: "Level 36: Crystal Nebula Caverns",
    description: "A colossal underground geode where glowing crystal clusters and vertical energy lifts demand precision flight.",
    worldWidth: 5564,
    worldHeight: 660,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":480},
    goal: {"x":5384,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1502,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3005,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4340,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l36_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l36_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l36_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l36_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_cp1_base",
            "x": 1442,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l36_p_cp1_high",
            "x": 1542,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l36_lift2",
            "x": 1722,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1722,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l36_p2",
            "x": 1862,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_crumb3",
            "x": 2042,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_crumb4",
            "x": 2172,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_p3",
            "x": 2302,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_lift3",
            "x": 2462,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2462,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l36_spring2",
            "x": 2692,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l36_cp2_base",
            "x": 2945,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l36_p_cp2_high",
            "x": 3045,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l36_lift4",
            "x": 3225,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3225,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l36_p4",
            "x": 3375,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_crumb5",
            "x": 3545,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_crumb6",
            "x": 3675,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_p5",
            "x": 3805,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_lift5",
            "x": 3965,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3965,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l36_spring3",
            "x": 4185,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l36_cp3_base",
            "x": 4280,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l36_p_cp3_high",
            "x": 4380,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l36_lift6",
            "x": 4560,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4560,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l36_p6",
            "x": 4720,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_crumb7",
            "x": 4900,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_crumb8",
            "x": 5020,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l36_p7",
            "x": 5140,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l36_spring4",
            "x": 5300,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l36_goal_base",
            "x": 5304,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l36_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l36_spk2",
            "x": 1662,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l36_spk3",
            "x": 3165,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l36_spk4",
            "x": 4500,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l36_spk5",
            "x": 5044,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l36_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l36_saw2",
            "x": 1922,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1922,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l36_saw3",
            "x": 3445,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3445,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l36_saw4",
            "x": 4800,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4800,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l36_saw5",
            "x": 5164,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5164,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l36_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l36_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_fuel2",
            "x": 1582,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_fuel3",
            "x": 2202,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_fuel4",
            "x": 3085,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_fuel5",
            "x": 3705,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_fuel6",
            "x": 4420,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_fuel7",
            "x": 5060,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_fuel8",
            "x": 5204,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l36_shield",
            "x": 3415,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l36_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l36_c1",
            "x": 660,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c2",
            "x": 970,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c3",
            "x": 1280,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l36_c4",
            "x": 1590,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c5",
            "x": 1900,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c6",
            "x": 2210,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l36_c7",
            "x": 2520,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c8",
            "x": 2830,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c9",
            "x": 3140,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l36_c10",
            "x": 3450,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c11",
            "x": 3760,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c12",
            "x": 4070,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l36_c13",
            "x": 4380,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c14",
            "x": 4690,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l36_c15",
            "x": 5000,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l36_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l36_e1",
            "x": 661,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 511,
            "maxX": 811,
            "facing": -1
      },
      {
            "id": "l36_e2",
            "x": 872,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 692,
            "maxX": 1052,
            "facing": 1
      },
      {
            "id": "l36_e3",
            "x": 1083,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 873,
            "maxX": 1293,
            "facing": -1
      },
      {
            "id": "l36_e4",
            "x": 1294,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1174,
            "maxX": 1414,
            "facing": 1
      },
      {
            "id": "l36_e5",
            "x": 1505,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1355,
            "maxX": 1655,
            "facing": -1
      },
      {
            "id": "l36_e6",
            "x": 1716,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1536,
            "maxX": 1896,
            "facing": 1
      },
      {
            "id": "l36_e7",
            "x": 1927,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1717,
            "maxX": 2137,
            "facing": -1
      },
      {
            "id": "l36_e8",
            "x": 2138,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2018,
            "maxX": 2258,
            "facing": 1
      },
      {
            "id": "l36_e9",
            "x": 2349,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2199,
            "maxX": 2499,
            "facing": -1
      },
      {
            "id": "l36_e10",
            "x": 2560,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2380,
            "maxX": 2740,
            "facing": 1
      },
      {
            "id": "l36_e11",
            "x": 2771,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2561,
            "maxX": 2981,
            "facing": -1
      },
      {
            "id": "l36_e12",
            "x": 2982,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2862,
            "maxX": 3102,
            "facing": 1
      },
      {
            "id": "l36_e13",
            "x": 3193,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3043,
            "maxX": 3343,
            "facing": -1
      },
      {
            "id": "l36_e14",
            "x": 3404,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3224,
            "maxX": 3584,
            "facing": 1
      },
      {
            "id": "l36_e15",
            "x": 3615,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3405,
            "maxX": 3825,
            "facing": -1
      },
      {
            "id": "l36_e16",
            "x": 3826,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3706,
            "maxX": 3946,
            "facing": 1
      },
      {
            "id": "l36_e17",
            "x": 4037,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3887,
            "maxX": 4187,
            "facing": -1
      },
      {
            "id": "l36_e18",
            "x": 4248,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4068,
            "maxX": 4428,
            "facing": 1
      },
      {
            "id": "l36_e19",
            "x": 4459,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4249,
            "maxX": 4669,
            "facing": -1
      },
      {
            "id": "l36_e20",
            "x": 4670,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4550,
            "maxX": 4790,
            "facing": 1
      },
      {
            "id": "l36_e21",
            "x": 4881,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4731,
            "maxX": 5031,
            "facing": -1
      },
      {
            "id": "l36_e22",
            "x": 5092,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4912,
            "maxX": 5272,
            "facing": 1
      }
],
    parTime: 111,
    threeStarScore: 10100
  },
  // ==========================================
  // LEVEL 37: CLOUDTOP WINDMILL EXPANSE
  // ==========================================
  {
    id: 37,
    title: "Level 37: Cloudtop Windmill Expanse",
    description: "Rocket above rolling emerald clouds through giant windmill turbines and dense airborne flyer formations.",
    worldWidth: 5622,
    worldHeight: 685,
    theme: THEMES.meadow,
    playerStart: {"x":80,"y":480},
    goal: {"x":5442,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1518,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3036,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4385,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l37_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l37_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l37_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l37_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_cp1_base",
            "x": 1458,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l37_p_cp1_high",
            "x": 1558,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l37_lift2",
            "x": 1738,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1738,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l37_p2",
            "x": 1878,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_crumb3",
            "x": 2058,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_crumb4",
            "x": 2188,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_p3",
            "x": 2318,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_lift3",
            "x": 2478,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2478,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l37_spring2",
            "x": 2708,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l37_cp2_base",
            "x": 2976,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l37_p_cp2_high",
            "x": 3076,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l37_lift4",
            "x": 3256,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3256,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l37_p4",
            "x": 3406,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_crumb5",
            "x": 3576,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_crumb6",
            "x": 3706,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_p5",
            "x": 3836,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_lift5",
            "x": 3996,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 3996,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l37_spring3",
            "x": 4216,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l37_cp3_base",
            "x": 4325,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l37_p_cp3_high",
            "x": 4425,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l37_lift6",
            "x": 4605,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4605,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l37_p6",
            "x": 4765,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_crumb7",
            "x": 4945,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_crumb8",
            "x": 5065,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l37_p7",
            "x": 5185,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l37_spring4",
            "x": 5345,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l37_goal_base",
            "x": 5362,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l37_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l37_spk2",
            "x": 1678,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l37_spk3",
            "x": 3196,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l37_spk4",
            "x": 4545,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l37_spk5",
            "x": 5102,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l37_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l37_saw2",
            "x": 1938,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1938,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l37_saw3",
            "x": 3476,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3476,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l37_saw4",
            "x": 4845,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4845,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l37_saw5",
            "x": 5222,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5222,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l37_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l37_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_fuel2",
            "x": 1598,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_fuel3",
            "x": 2218,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_fuel4",
            "x": 3116,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_fuel5",
            "x": 3736,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_fuel6",
            "x": 4465,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_fuel7",
            "x": 5105,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_fuel8",
            "x": 5262,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l37_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l37_ammo1",
            "x": 1678,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l37_ammo2",
            "x": 3196,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l37_ammo3",
            "x": 4545,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l37_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l37_c1",
            "x": 664,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c2",
            "x": 978,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c3",
            "x": 1292,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l37_c4",
            "x": 1606,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c5",
            "x": 1920,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c6",
            "x": 2234,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l37_c7",
            "x": 2548,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c8",
            "x": 2862,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c9",
            "x": 3176,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l37_c10",
            "x": 3490,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c11",
            "x": 3804,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c12",
            "x": 4118,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l37_c13",
            "x": 4432,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c14",
            "x": 4746,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l37_c15",
            "x": 5060,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l37_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l37_e1",
            "x": 655,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 505,
            "maxX": 805,
            "facing": -1
      },
      {
            "id": "l37_e2",
            "x": 860,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 680,
            "maxX": 1040,
            "facing": 1
      },
      {
            "id": "l37_e3",
            "x": 1065,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 855,
            "maxX": 1275,
            "facing": -1
      },
      {
            "id": "l37_e4",
            "x": 1270,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1150,
            "maxX": 1390,
            "facing": 1
      },
      {
            "id": "l37_e5",
            "x": 1475,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1325,
            "maxX": 1625,
            "facing": -1
      },
      {
            "id": "l37_e6",
            "x": 1680,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1500,
            "maxX": 1860,
            "facing": 1
      },
      {
            "id": "l37_e7",
            "x": 1885,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1675,
            "maxX": 2095,
            "facing": -1
      },
      {
            "id": "l37_e8",
            "x": 2090,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1970,
            "maxX": 2210,
            "facing": 1
      },
      {
            "id": "l37_e9",
            "x": 2295,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2145,
            "maxX": 2445,
            "facing": -1
      },
      {
            "id": "l37_e10",
            "x": 2500,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2320,
            "maxX": 2680,
            "facing": 1
      },
      {
            "id": "l37_e11",
            "x": 2705,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2495,
            "maxX": 2915,
            "facing": -1
      },
      {
            "id": "l37_e12",
            "x": 2910,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2790,
            "maxX": 3030,
            "facing": 1
      },
      {
            "id": "l37_e13",
            "x": 3115,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2965,
            "maxX": 3265,
            "facing": -1
      },
      {
            "id": "l37_e14",
            "x": 3320,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3140,
            "maxX": 3500,
            "facing": 1
      },
      {
            "id": "l37_e15",
            "x": 3525,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3315,
            "maxX": 3735,
            "facing": -1
      },
      {
            "id": "l37_e16",
            "x": 3730,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3610,
            "maxX": 3850,
            "facing": 1
      },
      {
            "id": "l37_e17",
            "x": 3935,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3785,
            "maxX": 4085,
            "facing": -1
      },
      {
            "id": "l37_e18",
            "x": 4140,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3960,
            "maxX": 4320,
            "facing": 1
      },
      {
            "id": "l37_e19",
            "x": 4345,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4135,
            "maxX": 4555,
            "facing": -1
      },
      {
            "id": "l37_e20",
            "x": 4550,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4430,
            "maxX": 4670,
            "facing": 1
      },
      {
            "id": "l37_e21",
            "x": 4755,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4605,
            "maxX": 4905,
            "facing": -1
      },
      {
            "id": "l37_e22",
            "x": 4960,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4780,
            "maxX": 5140,
            "facing": 1
      },
      {
            "id": "l37_e23",
            "x": 5165,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4955,
            "maxX": 5375,
            "facing": -1
      }
],
    parTime: 113,
    threeStarScore: 10300
  },
  // ==========================================
  // LEVEL 38: ECLIPSE VOID SPIRE
  // ==========================================
  {
    id: 38,
    title: "Level 38: Eclipse Void Spire",
    description: "Ascend through a celestial eclipse corridor, leaping across violet light bridges and dogfighting void drones.",
    worldWidth: 5680,
    worldHeight: 710,
    theme: THEMES.twilight,
    playerStart: {"x":80,"y":480},
    goal: {"x":5500,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1534,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3067,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4430,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l38_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l38_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l38_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l38_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_cp1_base",
            "x": 1474,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l38_p_cp1_high",
            "x": 1574,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l38_lift2",
            "x": 1754,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1754,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l38_p2",
            "x": 1894,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_crumb3",
            "x": 2074,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_crumb4",
            "x": 2204,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_p3",
            "x": 2334,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_lift3",
            "x": 2494,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2494,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l38_spring2",
            "x": 2724,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l38_cp2_base",
            "x": 3007,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l38_p_cp2_high",
            "x": 3107,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l38_lift4",
            "x": 3287,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3287,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l38_p4",
            "x": 3437,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_crumb5",
            "x": 3607,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_crumb6",
            "x": 3737,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_p5",
            "x": 3867,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_lift5",
            "x": 4027,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4027,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l38_spring3",
            "x": 4247,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l38_cp3_base",
            "x": 4370,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l38_p_cp3_high",
            "x": 4470,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l38_lift6",
            "x": 4650,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4650,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l38_p6",
            "x": 4810,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_crumb7",
            "x": 4990,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_crumb8",
            "x": 5110,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l38_p7",
            "x": 5230,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l38_spring4",
            "x": 5390,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l38_goal_base",
            "x": 5420,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l38_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l38_spk2",
            "x": 1694,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l38_spk3",
            "x": 3227,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l38_spk4",
            "x": 4590,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l38_spk5",
            "x": 5160,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l38_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l38_saw2",
            "x": 1954,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1954,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l38_saw3",
            "x": 3507,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3507,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l38_saw4",
            "x": 4890,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4890,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l38_saw5",
            "x": 5280,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5280,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l38_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l38_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_fuel2",
            "x": 1614,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_fuel3",
            "x": 2234,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_fuel4",
            "x": 3147,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_fuel5",
            "x": 3767,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_fuel6",
            "x": 4510,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_fuel7",
            "x": 5150,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_fuel8",
            "x": 5320,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l38_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l38_c1",
            "x": 668,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c2",
            "x": 986,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c3",
            "x": 1304,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l38_c4",
            "x": 1622,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c5",
            "x": 1940,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c6",
            "x": 2258,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l38_c7",
            "x": 2576,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c8",
            "x": 2894,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c9",
            "x": 3212,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l38_c10",
            "x": 3530,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c11",
            "x": 3848,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c12",
            "x": 4166,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l38_c13",
            "x": 4484,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c14",
            "x": 4802,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l38_c15",
            "x": 5120,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l38_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l38_e1",
            "x": 649,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 499,
            "maxX": 799,
            "facing": -1
      },
      {
            "id": "l38_e2",
            "x": 848,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 668,
            "maxX": 1028,
            "facing": 1
      },
      {
            "id": "l38_e3",
            "x": 1047,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 837,
            "maxX": 1257,
            "facing": -1
      },
      {
            "id": "l38_e4",
            "x": 1246,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1126,
            "maxX": 1366,
            "facing": 1
      },
      {
            "id": "l38_e5",
            "x": 1445,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1295,
            "maxX": 1595,
            "facing": -1
      },
      {
            "id": "l38_e6",
            "x": 1644,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1464,
            "maxX": 1824,
            "facing": 1
      },
      {
            "id": "l38_e7",
            "x": 1843,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1633,
            "maxX": 2053,
            "facing": -1
      },
      {
            "id": "l38_e8",
            "x": 2042,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1922,
            "maxX": 2162,
            "facing": 1
      },
      {
            "id": "l38_e9",
            "x": 2241,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2091,
            "maxX": 2391,
            "facing": -1
      },
      {
            "id": "l38_e10",
            "x": 2440,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2260,
            "maxX": 2620,
            "facing": 1
      },
      {
            "id": "l38_e11",
            "x": 2639,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2429,
            "maxX": 2849,
            "facing": -1
      },
      {
            "id": "l38_e12",
            "x": 2838,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2718,
            "maxX": 2958,
            "facing": 1
      },
      {
            "id": "l38_e13",
            "x": 3037,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2887,
            "maxX": 3187,
            "facing": -1
      },
      {
            "id": "l38_e14",
            "x": 3236,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3056,
            "maxX": 3416,
            "facing": 1
      },
      {
            "id": "l38_e15",
            "x": 3435,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3225,
            "maxX": 3645,
            "facing": -1
      },
      {
            "id": "l38_e16",
            "x": 3634,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3514,
            "maxX": 3754,
            "facing": 1
      },
      {
            "id": "l38_e17",
            "x": 3833,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3683,
            "maxX": 3983,
            "facing": -1
      },
      {
            "id": "l38_e18",
            "x": 4032,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3852,
            "maxX": 4212,
            "facing": 1
      },
      {
            "id": "l38_e19",
            "x": 4231,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4021,
            "maxX": 4441,
            "facing": -1
      },
      {
            "id": "l38_e20",
            "x": 4430,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4310,
            "maxX": 4550,
            "facing": 1
      },
      {
            "id": "l38_e21",
            "x": 4629,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4479,
            "maxX": 4779,
            "facing": -1
      },
      {
            "id": "l38_e22",
            "x": 4828,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4648,
            "maxX": 5008,
            "facing": 1
      },
      {
            "id": "l38_e23",
            "x": 5027,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4817,
            "maxX": 5237,
            "facing": -1
      },
      {
            "id": "l38_e24",
            "x": 5226,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5106,
            "maxX": 5346,
            "facing": 1
      }
],
    parTime: 115,
    threeStarScore: 10500
  },
  // ==========================================
  // LEVEL 39: CYBER DREADNOUGHT FLIGHTDECK
  // ==========================================
  {
    id: 39,
    title: "Level 39: Cyber Dreadnought Flightdeck",
    description: "High-octane flight over a 6,000px cyber flagship packed with plasma blasters, moving laser platforms, and 24 enemies.",
    worldWidth: 5738,
    worldHeight: 735,
    theme: THEMES.cyber,
    playerStart: {"x":80,"y":480},
    goal: {"x":5558,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1549,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3099,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4476,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l39_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l39_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l39_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l39_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_cp1_base",
            "x": 1489,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l39_p_cp1_high",
            "x": 1589,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l39_lift2",
            "x": 1769,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1769,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l39_p2",
            "x": 1909,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_crumb3",
            "x": 2089,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_crumb4",
            "x": 2219,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_p3",
            "x": 2349,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_lift3",
            "x": 2509,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2509,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l39_spring2",
            "x": 2739,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l39_cp2_base",
            "x": 3039,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l39_p_cp2_high",
            "x": 3139,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l39_lift4",
            "x": 3319,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3319,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l39_p4",
            "x": 3469,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_crumb5",
            "x": 3639,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_crumb6",
            "x": 3769,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_p5",
            "x": 3899,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_lift5",
            "x": 4059,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4059,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l39_spring3",
            "x": 4279,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l39_cp3_base",
            "x": 4416,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l39_p_cp3_high",
            "x": 4516,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l39_lift6",
            "x": 4696,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4696,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l39_p6",
            "x": 4856,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_crumb7",
            "x": 5036,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_crumb8",
            "x": 5156,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l39_p7",
            "x": 5276,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l39_spring4",
            "x": 5436,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l39_goal_base",
            "x": 5478,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l39_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l39_spk2",
            "x": 1709,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l39_spk3",
            "x": 3259,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l39_spk4",
            "x": 4636,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l39_spk5",
            "x": 5218,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l39_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l39_saw2",
            "x": 1969,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1969,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l39_saw3",
            "x": 3539,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3539,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l39_saw4",
            "x": 4936,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4936,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l39_saw5",
            "x": 5338,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5338,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l39_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l39_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_fuel2",
            "x": 1629,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_fuel3",
            "x": 2249,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_fuel4",
            "x": 3179,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_fuel5",
            "x": 3799,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_fuel6",
            "x": 4556,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_fuel7",
            "x": 5196,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_fuel8",
            "x": 5378,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l39_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l39_ammo1",
            "x": 1709,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l39_ammo2",
            "x": 3259,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l39_ammo3",
            "x": 4636,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l39_shield",
            "x": 3509,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l39_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l39_c1",
            "x": 671,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c2",
            "x": 992,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c3",
            "x": 1313,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l39_c4",
            "x": 1634,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c5",
            "x": 1955,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c6",
            "x": 2276,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l39_c7",
            "x": 2597,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c8",
            "x": 2918,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c9",
            "x": 3239,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l39_c10",
            "x": 3560,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c11",
            "x": 3881,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c12",
            "x": 4202,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l39_c13",
            "x": 4523,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c14",
            "x": 4844,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l39_c15",
            "x": 5165,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l39_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l39_e1",
            "x": 644,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 494,
            "maxX": 794,
            "facing": -1
      },
      {
            "id": "l39_e2",
            "x": 838,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 658,
            "maxX": 1018,
            "facing": 1
      },
      {
            "id": "l39_e3",
            "x": 1032,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 822,
            "maxX": 1242,
            "facing": -1
      },
      {
            "id": "l39_e4",
            "x": 1226,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1106,
            "maxX": 1346,
            "facing": 1
      },
      {
            "id": "l39_e5",
            "x": 1420,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1270,
            "maxX": 1570,
            "facing": -1
      },
      {
            "id": "l39_e6",
            "x": 1614,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1434,
            "maxX": 1794,
            "facing": 1
      },
      {
            "id": "l39_e7",
            "x": 1808,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1598,
            "maxX": 2018,
            "facing": -1
      },
      {
            "id": "l39_e8",
            "x": 2002,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1882,
            "maxX": 2122,
            "facing": 1
      },
      {
            "id": "l39_e9",
            "x": 2196,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2046,
            "maxX": 2346,
            "facing": -1
      },
      {
            "id": "l39_e10",
            "x": 2390,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2210,
            "maxX": 2570,
            "facing": 1
      },
      {
            "id": "l39_e11",
            "x": 2584,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2374,
            "maxX": 2794,
            "facing": -1
      },
      {
            "id": "l39_e12",
            "x": 2778,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2658,
            "maxX": 2898,
            "facing": 1
      },
      {
            "id": "l39_e13",
            "x": 2972,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2822,
            "maxX": 3122,
            "facing": -1
      },
      {
            "id": "l39_e14",
            "x": 3166,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2986,
            "maxX": 3346,
            "facing": 1
      },
      {
            "id": "l39_e15",
            "x": 3360,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3150,
            "maxX": 3570,
            "facing": -1
      },
      {
            "id": "l39_e16",
            "x": 3554,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3434,
            "maxX": 3674,
            "facing": 1
      },
      {
            "id": "l39_e17",
            "x": 3748,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3598,
            "maxX": 3898,
            "facing": -1
      },
      {
            "id": "l39_e18",
            "x": 3942,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3762,
            "maxX": 4122,
            "facing": 1
      },
      {
            "id": "l39_e19",
            "x": 4136,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3926,
            "maxX": 4346,
            "facing": -1
      },
      {
            "id": "l39_e20",
            "x": 4330,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4210,
            "maxX": 4450,
            "facing": 1
      },
      {
            "id": "l39_e21",
            "x": 4524,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4374,
            "maxX": 4674,
            "facing": -1
      },
      {
            "id": "l39_e22",
            "x": 4718,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4538,
            "maxX": 4898,
            "facing": 1
      },
      {
            "id": "l39_e23",
            "x": 4912,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4702,
            "maxX": 5122,
            "facing": -1
      },
      {
            "id": "l39_e24",
            "x": 5106,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4986,
            "maxX": 5226,
            "facing": 1
      },
      {
            "id": "l39_e25",
            "x": 5300,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5150,
            "maxX": 5450,
            "facing": -1
      }
],
    parTime: 117,
    threeStarScore: 10700
  },
  // ==========================================
  // LEVEL 40: SUNKEN TRENCH LEVIATHAN
  // ==========================================
  {
    id: 40,
    title: "Level 40: Sunken Trench Leviathan",
    description: "Dive and fly through massive underwater chasms, chaining fuel pickups and bubble shields across kinetic saws.",
    worldWidth: 5796,
    worldHeight: 660,
    theme: THEMES.reef,
    playerStart: {"x":80,"y":480},
    goal: {"x":5616,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1565,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3130,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4521,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l40_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l40_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l40_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l40_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_cp1_base",
            "x": 1505,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l40_p_cp1_high",
            "x": 1605,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l40_lift2",
            "x": 1785,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1785,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l40_p2",
            "x": 1925,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_crumb3",
            "x": 2105,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_crumb4",
            "x": 2235,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_p3",
            "x": 2365,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_lift3",
            "x": 2525,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2525,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l40_spring2",
            "x": 2755,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l40_cp2_base",
            "x": 3070,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l40_p_cp2_high",
            "x": 3170,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l40_lift4",
            "x": 3350,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3350,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l40_p4",
            "x": 3500,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_crumb5",
            "x": 3670,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_crumb6",
            "x": 3800,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_p5",
            "x": 3930,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_lift5",
            "x": 4090,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4090,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l40_spring3",
            "x": 4310,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l40_cp3_base",
            "x": 4461,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l40_p_cp3_high",
            "x": 4561,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l40_lift6",
            "x": 4741,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4741,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l40_p6",
            "x": 4901,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_crumb7",
            "x": 5081,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_crumb8",
            "x": 5201,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l40_p7",
            "x": 5321,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l40_spring4",
            "x": 5481,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l40_goal_base",
            "x": 5536,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l40_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l40_spk2",
            "x": 1725,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l40_spk3",
            "x": 3290,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l40_spk4",
            "x": 4681,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l40_spk5",
            "x": 5276,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l40_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l40_saw2",
            "x": 1985,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 1985,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l40_saw3",
            "x": 3570,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3570,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l40_saw4",
            "x": 4981,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4981,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l40_saw5",
            "x": 5396,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5396,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l40_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l40_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_fuel2",
            "x": 1645,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_fuel3",
            "x": 2265,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_fuel4",
            "x": 3210,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_fuel5",
            "x": 3830,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_fuel6",
            "x": 4601,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_fuel7",
            "x": 5241,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_fuel8",
            "x": 5436,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l40_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l40_c1",
            "x": 675,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c2",
            "x": 1000,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c3",
            "x": 1325,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l40_c4",
            "x": 1650,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c5",
            "x": 1975,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c6",
            "x": 2300,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l40_c7",
            "x": 2625,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c8",
            "x": 2950,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c9",
            "x": 3275,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l40_c10",
            "x": 3600,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c11",
            "x": 3925,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c12",
            "x": 4250,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l40_c13",
            "x": 4575,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c14",
            "x": 4900,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l40_c15",
            "x": 5225,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l40_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l40_e1",
            "x": 639,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 489,
            "maxX": 789,
            "facing": -1
      },
      {
            "id": "l40_e2",
            "x": 828,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 648,
            "maxX": 1008,
            "facing": 1
      },
      {
            "id": "l40_e3",
            "x": 1017,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 807,
            "maxX": 1227,
            "facing": -1
      },
      {
            "id": "l40_e4",
            "x": 1206,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1086,
            "maxX": 1326,
            "facing": 1
      },
      {
            "id": "l40_e5",
            "x": 1395,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1245,
            "maxX": 1545,
            "facing": -1
      },
      {
            "id": "l40_e6",
            "x": 1584,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1404,
            "maxX": 1764,
            "facing": 1
      },
      {
            "id": "l40_e7",
            "x": 1773,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1563,
            "maxX": 1983,
            "facing": -1
      },
      {
            "id": "l40_e8",
            "x": 1962,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1842,
            "maxX": 2082,
            "facing": 1
      },
      {
            "id": "l40_e9",
            "x": 2151,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2001,
            "maxX": 2301,
            "facing": -1
      },
      {
            "id": "l40_e10",
            "x": 2340,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2160,
            "maxX": 2520,
            "facing": 1
      },
      {
            "id": "l40_e11",
            "x": 2529,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2319,
            "maxX": 2739,
            "facing": -1
      },
      {
            "id": "l40_e12",
            "x": 2718,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2598,
            "maxX": 2838,
            "facing": 1
      },
      {
            "id": "l40_e13",
            "x": 2907,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2757,
            "maxX": 3057,
            "facing": -1
      },
      {
            "id": "l40_e14",
            "x": 3096,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2916,
            "maxX": 3276,
            "facing": 1
      },
      {
            "id": "l40_e15",
            "x": 3285,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3075,
            "maxX": 3495,
            "facing": -1
      },
      {
            "id": "l40_e16",
            "x": 3474,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3354,
            "maxX": 3594,
            "facing": 1
      },
      {
            "id": "l40_e17",
            "x": 3663,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3513,
            "maxX": 3813,
            "facing": -1
      },
      {
            "id": "l40_e18",
            "x": 3852,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3672,
            "maxX": 4032,
            "facing": 1
      },
      {
            "id": "l40_e19",
            "x": 4041,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3831,
            "maxX": 4251,
            "facing": -1
      },
      {
            "id": "l40_e20",
            "x": 4230,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4110,
            "maxX": 4350,
            "facing": 1
      },
      {
            "id": "l40_e21",
            "x": 4419,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4269,
            "maxX": 4569,
            "facing": -1
      },
      {
            "id": "l40_e22",
            "x": 4608,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4428,
            "maxX": 4788,
            "facing": 1
      },
      {
            "id": "l40_e23",
            "x": 4797,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4587,
            "maxX": 5007,
            "facing": -1
      },
      {
            "id": "l40_e24",
            "x": 4986,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4866,
            "maxX": 5106,
            "facing": 1
      },
      {
            "id": "l40_e25",
            "x": 5175,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5025,
            "maxX": 5325,
            "facing": -1
      },
      {
            "id": "l40_e26",
            "x": 5364,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5184,
            "maxX": 5544,
            "facing": 1
      }
],
    parTime: 119,
    threeStarScore: 10900
  },
  // ==========================================
  // LEVEL 41: VOLCANIC THERMAL SHAFT
  // ==========================================
  {
    id: 41,
    title: "Level 41: Volcanic Thermal Shaft",
    description: "Rocket up and across towering volcanic chimney flues, dodging molten geysers and lava slimes.",
    worldWidth: 5854,
    worldHeight: 685,
    theme: THEMES.lava,
    playerStart: {"x":80,"y":480},
    goal: {"x":5674,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1581,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3161,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4566,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l41_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l41_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l41_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l41_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_cp1_base",
            "x": 1521,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l41_p_cp1_high",
            "x": 1621,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l41_lift2",
            "x": 1801,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1801,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l41_p2",
            "x": 1941,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_crumb3",
            "x": 2121,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_crumb4",
            "x": 2251,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_p3",
            "x": 2381,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_lift3",
            "x": 2541,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2541,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l41_spring2",
            "x": 2771,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l41_cp2_base",
            "x": 3101,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l41_p_cp2_high",
            "x": 3201,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l41_lift4",
            "x": 3381,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3381,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l41_p4",
            "x": 3531,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_crumb5",
            "x": 3701,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_crumb6",
            "x": 3831,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_p5",
            "x": 3961,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_lift5",
            "x": 4121,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4121,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l41_spring3",
            "x": 4341,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l41_cp3_base",
            "x": 4506,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l41_p_cp3_high",
            "x": 4606,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l41_lift6",
            "x": 4786,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4786,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l41_p6",
            "x": 4946,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_crumb7",
            "x": 5126,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_crumb8",
            "x": 5246,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l41_p7",
            "x": 5366,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l41_spring4",
            "x": 5526,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l41_goal_base",
            "x": 5594,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l41_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l41_spk2",
            "x": 1741,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l41_spk3",
            "x": 3321,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l41_spk4",
            "x": 4726,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l41_spk5",
            "x": 5334,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l41_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l41_saw2",
            "x": 2001,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2001,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l41_saw3",
            "x": 3601,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3601,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l41_saw4",
            "x": 5026,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5026,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l41_saw5",
            "x": 5454,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5454,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l41_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l41_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_fuel2",
            "x": 1661,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_fuel3",
            "x": 2281,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_fuel4",
            "x": 3241,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_fuel5",
            "x": 3861,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_fuel6",
            "x": 4646,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_fuel7",
            "x": 5286,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_fuel8",
            "x": 5494,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l41_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l41_ammo1",
            "x": 1741,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l41_ammo2",
            "x": 3321,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l41_ammo3",
            "x": 4726,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l41_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l41_c1",
            "x": 678,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c2",
            "x": 1006,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c3",
            "x": 1334,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l41_c4",
            "x": 1662,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c5",
            "x": 1990,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c6",
            "x": 2318,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l41_c7",
            "x": 2646,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c8",
            "x": 2974,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c9",
            "x": 3302,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l41_c10",
            "x": 3630,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c11",
            "x": 3958,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c12",
            "x": 4286,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l41_c13",
            "x": 4614,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c14",
            "x": 4942,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l41_c15",
            "x": 5270,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l41_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l41_e1",
            "x": 634,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 484,
            "maxX": 784,
            "facing": -1
      },
      {
            "id": "l41_e2",
            "x": 818,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 638,
            "maxX": 998,
            "facing": 1
      },
      {
            "id": "l41_e3",
            "x": 1002,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 792,
            "maxX": 1212,
            "facing": -1
      },
      {
            "id": "l41_e4",
            "x": 1186,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1066,
            "maxX": 1306,
            "facing": 1
      },
      {
            "id": "l41_e5",
            "x": 1370,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1220,
            "maxX": 1520,
            "facing": -1
      },
      {
            "id": "l41_e6",
            "x": 1554,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1374,
            "maxX": 1734,
            "facing": 1
      },
      {
            "id": "l41_e7",
            "x": 1738,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1528,
            "maxX": 1948,
            "facing": -1
      },
      {
            "id": "l41_e8",
            "x": 1922,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1802,
            "maxX": 2042,
            "facing": 1
      },
      {
            "id": "l41_e9",
            "x": 2106,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1956,
            "maxX": 2256,
            "facing": -1
      },
      {
            "id": "l41_e10",
            "x": 2290,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2110,
            "maxX": 2470,
            "facing": 1
      },
      {
            "id": "l41_e11",
            "x": 2474,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2264,
            "maxX": 2684,
            "facing": -1
      },
      {
            "id": "l41_e12",
            "x": 2658,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2538,
            "maxX": 2778,
            "facing": 1
      },
      {
            "id": "l41_e13",
            "x": 2842,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2692,
            "maxX": 2992,
            "facing": -1
      },
      {
            "id": "l41_e14",
            "x": 3026,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2846,
            "maxX": 3206,
            "facing": 1
      },
      {
            "id": "l41_e15",
            "x": 3210,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3000,
            "maxX": 3420,
            "facing": -1
      },
      {
            "id": "l41_e16",
            "x": 3394,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3274,
            "maxX": 3514,
            "facing": 1
      },
      {
            "id": "l41_e17",
            "x": 3578,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3428,
            "maxX": 3728,
            "facing": -1
      },
      {
            "id": "l41_e18",
            "x": 3762,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3582,
            "maxX": 3942,
            "facing": 1
      },
      {
            "id": "l41_e19",
            "x": 3946,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3736,
            "maxX": 4156,
            "facing": -1
      },
      {
            "id": "l41_e20",
            "x": 4130,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4010,
            "maxX": 4250,
            "facing": 1
      },
      {
            "id": "l41_e21",
            "x": 4314,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4164,
            "maxX": 4464,
            "facing": -1
      },
      {
            "id": "l41_e22",
            "x": 4498,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4318,
            "maxX": 4678,
            "facing": 1
      },
      {
            "id": "l41_e23",
            "x": 4682,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4472,
            "maxX": 4892,
            "facing": -1
      },
      {
            "id": "l41_e24",
            "x": 4866,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4746,
            "maxX": 4986,
            "facing": 1
      },
      {
            "id": "l41_e25",
            "x": 5050,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4900,
            "maxX": 5200,
            "facing": -1
      },
      {
            "id": "l41_e26",
            "x": 5234,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5054,
            "maxX": 5414,
            "facing": 1
      },
      {
            "id": "l41_e27",
            "x": 5418,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5208,
            "maxX": 5628,
            "facing": -1
      }
],
    parTime: 121,
    threeStarScore: 11100
  },
  // ==========================================
  // LEVEL 42: ARCTIC AURORA GATEWAY
  // ==========================================
  {
    id: 42,
    title: "Level 42: Arctic Aurora Gateway",
    description: "Glide under shimmering polar auroras through frozen crystal pillars, dense flyer swarms, and fuel constellations.",
    worldWidth: 5912,
    worldHeight: 710,
    theme: THEMES.tundra,
    playerStart: {"x":80,"y":480},
    goal: {"x":5732,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1596,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3192,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4611,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l42_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l42_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l42_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l42_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_cp1_base",
            "x": 1536,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l42_p_cp1_high",
            "x": 1636,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l42_lift2",
            "x": 1816,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1816,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l42_p2",
            "x": 1956,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_crumb3",
            "x": 2136,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_crumb4",
            "x": 2266,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_p3",
            "x": 2396,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_lift3",
            "x": 2556,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2556,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l42_spring2",
            "x": 2786,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l42_cp2_base",
            "x": 3132,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l42_p_cp2_high",
            "x": 3232,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l42_lift4",
            "x": 3412,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3412,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l42_p4",
            "x": 3562,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_crumb5",
            "x": 3732,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_crumb6",
            "x": 3862,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_p5",
            "x": 3992,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_lift5",
            "x": 4152,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4152,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l42_spring3",
            "x": 4372,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l42_cp3_base",
            "x": 4551,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l42_p_cp3_high",
            "x": 4651,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l42_lift6",
            "x": 4831,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4831,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l42_p6",
            "x": 4991,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_crumb7",
            "x": 5171,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_crumb8",
            "x": 5291,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l42_p7",
            "x": 5411,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l42_spring4",
            "x": 5571,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l42_goal_base",
            "x": 5652,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l42_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l42_spk2",
            "x": 1756,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l42_spk3",
            "x": 3352,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l42_spk4",
            "x": 4771,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l42_spk5",
            "x": 5392,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l42_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l42_saw2",
            "x": 2016,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2016,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l42_saw3",
            "x": 3632,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3632,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l42_saw4",
            "x": 5071,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5071,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l42_saw5",
            "x": 5512,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5512,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l42_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l42_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_fuel2",
            "x": 1676,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_fuel3",
            "x": 2296,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_fuel4",
            "x": 3272,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_fuel5",
            "x": 3892,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_fuel6",
            "x": 4691,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_fuel7",
            "x": 5331,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_fuel8",
            "x": 5552,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l42_shield",
            "x": 3602,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l42_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l42_c1",
            "x": 682,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c2",
            "x": 1014,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c3",
            "x": 1346,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l42_c4",
            "x": 1678,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c5",
            "x": 2010,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c6",
            "x": 2342,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l42_c7",
            "x": 2674,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c8",
            "x": 3006,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c9",
            "x": 3338,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l42_c10",
            "x": 3670,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c11",
            "x": 4002,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c12",
            "x": 4334,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l42_c13",
            "x": 4666,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c14",
            "x": 4998,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l42_c15",
            "x": 5330,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l42_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l42_e1",
            "x": 687,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 537,
            "maxX": 837,
            "facing": -1
      },
      {
            "id": "l42_e2",
            "x": 924,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 744,
            "maxX": 1104,
            "facing": 1
      },
      {
            "id": "l42_e3",
            "x": 1161,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 951,
            "maxX": 1371,
            "facing": -1
      },
      {
            "id": "l42_e4",
            "x": 1398,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1278,
            "maxX": 1518,
            "facing": 1
      },
      {
            "id": "l42_e5",
            "x": 1635,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1485,
            "maxX": 1785,
            "facing": -1
      },
      {
            "id": "l42_e6",
            "x": 1872,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1692,
            "maxX": 2052,
            "facing": 1
      },
      {
            "id": "l42_e7",
            "x": 2109,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1899,
            "maxX": 2319,
            "facing": -1
      },
      {
            "id": "l42_e8",
            "x": 2346,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2226,
            "maxX": 2466,
            "facing": 1
      },
      {
            "id": "l42_e9",
            "x": 2583,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2433,
            "maxX": 2733,
            "facing": -1
      },
      {
            "id": "l42_e10",
            "x": 2820,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2640,
            "maxX": 3000,
            "facing": 1
      },
      {
            "id": "l42_e11",
            "x": 3057,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2847,
            "maxX": 3267,
            "facing": -1
      },
      {
            "id": "l42_e12",
            "x": 3294,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3174,
            "maxX": 3414,
            "facing": 1
      },
      {
            "id": "l42_e13",
            "x": 3531,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3381,
            "maxX": 3681,
            "facing": -1
      },
      {
            "id": "l42_e14",
            "x": 3768,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3588,
            "maxX": 3948,
            "facing": 1
      },
      {
            "id": "l42_e15",
            "x": 4005,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3795,
            "maxX": 4215,
            "facing": -1
      },
      {
            "id": "l42_e16",
            "x": 4242,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4122,
            "maxX": 4362,
            "facing": 1
      },
      {
            "id": "l42_e17",
            "x": 4479,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4329,
            "maxX": 4629,
            "facing": -1
      },
      {
            "id": "l42_e18",
            "x": 4716,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4536,
            "maxX": 4896,
            "facing": 1
      },
      {
            "id": "l42_e19",
            "x": 4953,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4743,
            "maxX": 5163,
            "facing": -1
      },
      {
            "id": "l42_e20",
            "x": 5190,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 5070,
            "maxX": 5310,
            "facing": 1
      },
      {
            "id": "l42_e21",
            "x": 5427,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5277,
            "maxX": 5577,
            "facing": -1
      }
],
    parTime: 123,
    threeStarScore: 11300
  },
  // ==========================================
  // LEVEL 43: ACIDIC SKYWAY OUTPOST
  // ==========================================
  {
    id: 43,
    title: "Level 43: Acidic Skyway Outpost",
    description: "Soar over bubbling emerald acid trenches, refuel on moving sky shuttles, and blast toxic predators.",
    worldWidth: 5970,
    worldHeight: 735,
    theme: THEMES.toxic,
    playerStart: {"x":80,"y":480},
    goal: {"x":5790,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1612,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3224,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4657,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l43_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l43_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l43_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l43_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_cp1_base",
            "x": 1552,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l43_p_cp1_high",
            "x": 1652,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l43_lift2",
            "x": 1832,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1832,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l43_p2",
            "x": 1972,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_crumb3",
            "x": 2152,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_crumb4",
            "x": 2282,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_p3",
            "x": 2412,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_lift3",
            "x": 2572,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2572,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l43_spring2",
            "x": 2802,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l43_cp2_base",
            "x": 3164,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l43_p_cp2_high",
            "x": 3264,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l43_lift4",
            "x": 3444,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3444,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l43_p4",
            "x": 3594,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_crumb5",
            "x": 3764,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_crumb6",
            "x": 3894,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_p5",
            "x": 4024,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_lift5",
            "x": 4184,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4184,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l43_spring3",
            "x": 4404,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l43_cp3_base",
            "x": 4597,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l43_p_cp3_high",
            "x": 4697,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l43_lift6",
            "x": 4877,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4877,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l43_p6",
            "x": 5037,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_crumb7",
            "x": 5217,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_crumb8",
            "x": 5337,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l43_p7",
            "x": 5457,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l43_spring4",
            "x": 5617,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l43_goal_base",
            "x": 5710,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l43_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l43_spk2",
            "x": 1772,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l43_spk3",
            "x": 3384,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l43_spk4",
            "x": 4817,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l43_spk5",
            "x": 5450,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l43_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l43_saw2",
            "x": 2032,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2032,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l43_saw3",
            "x": 3664,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3664,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l43_saw4",
            "x": 5117,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5117,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l43_saw5",
            "x": 5570,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5570,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l43_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l43_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_fuel2",
            "x": 1692,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_fuel3",
            "x": 2312,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_fuel4",
            "x": 3304,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_fuel5",
            "x": 3924,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_fuel6",
            "x": 4737,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_fuel7",
            "x": 5377,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_fuel8",
            "x": 5610,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l43_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l43_ammo1",
            "x": 1772,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l43_ammo2",
            "x": 3384,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l43_ammo3",
            "x": 4817,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l43_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l43_c1",
            "x": 686,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c2",
            "x": 1022,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c3",
            "x": 1358,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l43_c4",
            "x": 1694,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c5",
            "x": 2030,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c6",
            "x": 2366,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l43_c7",
            "x": 2702,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c8",
            "x": 3038,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c9",
            "x": 3374,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l43_c10",
            "x": 3710,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c11",
            "x": 4046,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c12",
            "x": 4382,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l43_c13",
            "x": 4718,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c14",
            "x": 5054,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l43_c15",
            "x": 5390,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l43_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l43_e1",
            "x": 679,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 529,
            "maxX": 829,
            "facing": -1
      },
      {
            "id": "l43_e2",
            "x": 908,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 728,
            "maxX": 1088,
            "facing": 1
      },
      {
            "id": "l43_e3",
            "x": 1137,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 927,
            "maxX": 1347,
            "facing": -1
      },
      {
            "id": "l43_e4",
            "x": 1366,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1246,
            "maxX": 1486,
            "facing": 1
      },
      {
            "id": "l43_e5",
            "x": 1595,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1445,
            "maxX": 1745,
            "facing": -1
      },
      {
            "id": "l43_e6",
            "x": 1824,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1644,
            "maxX": 2004,
            "facing": 1
      },
      {
            "id": "l43_e7",
            "x": 2053,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1843,
            "maxX": 2263,
            "facing": -1
      },
      {
            "id": "l43_e8",
            "x": 2282,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2162,
            "maxX": 2402,
            "facing": 1
      },
      {
            "id": "l43_e9",
            "x": 2511,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2361,
            "maxX": 2661,
            "facing": -1
      },
      {
            "id": "l43_e10",
            "x": 2740,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2560,
            "maxX": 2920,
            "facing": 1
      },
      {
            "id": "l43_e11",
            "x": 2969,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2759,
            "maxX": 3179,
            "facing": -1
      },
      {
            "id": "l43_e12",
            "x": 3198,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3078,
            "maxX": 3318,
            "facing": 1
      },
      {
            "id": "l43_e13",
            "x": 3427,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3277,
            "maxX": 3577,
            "facing": -1
      },
      {
            "id": "l43_e14",
            "x": 3656,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3476,
            "maxX": 3836,
            "facing": 1
      },
      {
            "id": "l43_e15",
            "x": 3885,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3675,
            "maxX": 4095,
            "facing": -1
      },
      {
            "id": "l43_e16",
            "x": 4114,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3994,
            "maxX": 4234,
            "facing": 1
      },
      {
            "id": "l43_e17",
            "x": 4343,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4193,
            "maxX": 4493,
            "facing": -1
      },
      {
            "id": "l43_e18",
            "x": 4572,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4392,
            "maxX": 4752,
            "facing": 1
      },
      {
            "id": "l43_e19",
            "x": 4801,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4591,
            "maxX": 5011,
            "facing": -1
      },
      {
            "id": "l43_e20",
            "x": 5030,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4910,
            "maxX": 5150,
            "facing": 1
      },
      {
            "id": "l43_e21",
            "x": 5259,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5109,
            "maxX": 5409,
            "facing": -1
      },
      {
            "id": "l43_e22",
            "x": 5488,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5308,
            "maxX": 5668,
            "facing": 1
      }
],
    parTime: 125,
    threeStarScore: 11500
  },
  // ==========================================
  // LEVEL 44: DESERT MIRAGE CITADEL
  // ==========================================
  {
    id: 44,
    title: "Level 44: Desert Mirage Citadel",
    description: "Navigate towering ancient sandstone ruins in the sky, flying between crumbling ledges and high-speed saws.",
    worldWidth: 6028,
    worldHeight: 660,
    theme: THEMES.desert,
    playerStart: {"x":80,"y":480},
    goal: {"x":5848,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1628,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3255,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4702,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l44_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l44_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l44_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l44_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_cp1_base",
            "x": 1568,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l44_p_cp1_high",
            "x": 1668,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l44_lift2",
            "x": 1848,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1848,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l44_p2",
            "x": 1988,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_crumb3",
            "x": 2168,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_crumb4",
            "x": 2298,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_p3",
            "x": 2428,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_lift3",
            "x": 2588,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2588,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l44_spring2",
            "x": 2818,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l44_cp2_base",
            "x": 3195,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l44_p_cp2_high",
            "x": 3295,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l44_lift4",
            "x": 3475,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3475,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l44_p4",
            "x": 3625,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_crumb5",
            "x": 3795,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_crumb6",
            "x": 3925,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_p5",
            "x": 4055,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_lift5",
            "x": 4215,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4215,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l44_spring3",
            "x": 4435,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l44_cp3_base",
            "x": 4642,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l44_p_cp3_high",
            "x": 4742,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l44_lift6",
            "x": 4922,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4922,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l44_p6",
            "x": 5082,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_crumb7",
            "x": 5262,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_crumb8",
            "x": 5382,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l44_p7",
            "x": 5502,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l44_spring4",
            "x": 5662,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l44_goal_base",
            "x": 5768,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l44_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l44_spk2",
            "x": 1788,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l44_spk3",
            "x": 3415,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l44_spk4",
            "x": 4862,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l44_spk5",
            "x": 5508,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l44_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l44_saw2",
            "x": 2048,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2048,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l44_saw3",
            "x": 3695,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3695,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l44_saw4",
            "x": 5162,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5162,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l44_saw5",
            "x": 5628,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5628,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l44_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l44_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_fuel2",
            "x": 1708,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_fuel3",
            "x": 2328,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_fuel4",
            "x": 3335,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_fuel5",
            "x": 3955,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_fuel6",
            "x": 4782,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_fuel7",
            "x": 5422,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_fuel8",
            "x": 5668,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l44_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l44_c1",
            "x": 689,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c2",
            "x": 1028,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c3",
            "x": 1367,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l44_c4",
            "x": 1706,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c5",
            "x": 2045,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c6",
            "x": 2384,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l44_c7",
            "x": 2723,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c8",
            "x": 3062,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c9",
            "x": 3401,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l44_c10",
            "x": 3740,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c11",
            "x": 4079,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c12",
            "x": 4418,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l44_c13",
            "x": 4757,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c14",
            "x": 5096,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l44_c15",
            "x": 5435,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l44_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l44_e1",
            "x": 672,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 522,
            "maxX": 822,
            "facing": -1
      },
      {
            "id": "l44_e2",
            "x": 894,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 714,
            "maxX": 1074,
            "facing": 1
      },
      {
            "id": "l44_e3",
            "x": 1116,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 906,
            "maxX": 1326,
            "facing": -1
      },
      {
            "id": "l44_e4",
            "x": 1338,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1218,
            "maxX": 1458,
            "facing": 1
      },
      {
            "id": "l44_e5",
            "x": 1560,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1410,
            "maxX": 1710,
            "facing": -1
      },
      {
            "id": "l44_e6",
            "x": 1782,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1602,
            "maxX": 1962,
            "facing": 1
      },
      {
            "id": "l44_e7",
            "x": 2004,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1794,
            "maxX": 2214,
            "facing": -1
      },
      {
            "id": "l44_e8",
            "x": 2226,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2106,
            "maxX": 2346,
            "facing": 1
      },
      {
            "id": "l44_e9",
            "x": 2448,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2298,
            "maxX": 2598,
            "facing": -1
      },
      {
            "id": "l44_e10",
            "x": 2670,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2490,
            "maxX": 2850,
            "facing": 1
      },
      {
            "id": "l44_e11",
            "x": 2892,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2682,
            "maxX": 3102,
            "facing": -1
      },
      {
            "id": "l44_e12",
            "x": 3114,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2994,
            "maxX": 3234,
            "facing": 1
      },
      {
            "id": "l44_e13",
            "x": 3336,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3186,
            "maxX": 3486,
            "facing": -1
      },
      {
            "id": "l44_e14",
            "x": 3558,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3378,
            "maxX": 3738,
            "facing": 1
      },
      {
            "id": "l44_e15",
            "x": 3780,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3570,
            "maxX": 3990,
            "facing": -1
      },
      {
            "id": "l44_e16",
            "x": 4002,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3882,
            "maxX": 4122,
            "facing": 1
      },
      {
            "id": "l44_e17",
            "x": 4224,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4074,
            "maxX": 4374,
            "facing": -1
      },
      {
            "id": "l44_e18",
            "x": 4446,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4266,
            "maxX": 4626,
            "facing": 1
      },
      {
            "id": "l44_e19",
            "x": 4668,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4458,
            "maxX": 4878,
            "facing": -1
      },
      {
            "id": "l44_e20",
            "x": 4890,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4770,
            "maxX": 5010,
            "facing": 1
      },
      {
            "id": "l44_e21",
            "x": 5112,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4962,
            "maxX": 5262,
            "facing": -1
      },
      {
            "id": "l44_e22",
            "x": 5334,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5154,
            "maxX": 5514,
            "facing": 1
      },
      {
            "id": "l44_e23",
            "x": 5556,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5346,
            "maxX": 5766,
            "facing": -1
      }
],
    parTime: 127,
    threeStarScore: 11700
  },
  // ==========================================
  // LEVEL 45: THUNDER SKY CITADEL
  // ==========================================
  {
    id: 45,
    title: "Level 45: Thunder Sky Citadel",
    description: "High storm clouds crackle with lightning as you fly through dense aerial gauntlets with moving storm lifts.",
    worldWidth: 6086,
    worldHeight: 685,
    theme: THEMES.sky,
    playerStart: {"x":80,"y":480},
    goal: {"x":5906,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1643,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3286,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4747,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l45_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l45_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l45_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l45_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_cp1_base",
            "x": 1583,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l45_p_cp1_high",
            "x": 1683,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l45_lift2",
            "x": 1863,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1863,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l45_p2",
            "x": 2003,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_crumb3",
            "x": 2183,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_crumb4",
            "x": 2313,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_p3",
            "x": 2443,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_lift3",
            "x": 2603,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2603,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l45_spring2",
            "x": 2833,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l45_cp2_base",
            "x": 3226,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l45_p_cp2_high",
            "x": 3326,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l45_lift4",
            "x": 3506,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3506,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l45_p4",
            "x": 3656,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_crumb5",
            "x": 3826,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_crumb6",
            "x": 3956,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_p5",
            "x": 4086,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_lift5",
            "x": 4246,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4246,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l45_spring3",
            "x": 4466,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l45_cp3_base",
            "x": 4687,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l45_p_cp3_high",
            "x": 4787,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l45_lift6",
            "x": 4967,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 4967,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l45_p6",
            "x": 5127,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_crumb7",
            "x": 5307,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_crumb8",
            "x": 5427,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l45_p7",
            "x": 5547,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l45_spring4",
            "x": 5707,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l45_goal_base",
            "x": 5826,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l45_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l45_spk2",
            "x": 1803,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l45_spk3",
            "x": 3446,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l45_spk4",
            "x": 4907,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l45_spk5",
            "x": 5566,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l45_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l45_saw2",
            "x": 2063,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2063,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l45_saw3",
            "x": 3726,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3726,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l45_saw4",
            "x": 5207,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5207,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l45_saw5",
            "x": 5686,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5686,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l45_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l45_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_fuel2",
            "x": 1723,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_fuel3",
            "x": 2343,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_fuel4",
            "x": 3366,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_fuel5",
            "x": 3986,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_fuel6",
            "x": 4827,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_fuel7",
            "x": 5467,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_fuel8",
            "x": 5726,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l45_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l45_ammo1",
            "x": 1803,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l45_ammo2",
            "x": 3446,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l45_ammo3",
            "x": 4907,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l45_shield",
            "x": 3696,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l45_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l45_c1",
            "x": 693,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c2",
            "x": 1036,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c3",
            "x": 1379,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l45_c4",
            "x": 1722,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c5",
            "x": 2065,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c6",
            "x": 2408,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l45_c7",
            "x": 2751,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c8",
            "x": 3094,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c9",
            "x": 3437,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l45_c10",
            "x": 3780,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c11",
            "x": 4123,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c12",
            "x": 4466,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l45_c13",
            "x": 4809,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c14",
            "x": 5152,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l45_c15",
            "x": 5495,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l45_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l45_e1",
            "x": 665,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 515,
            "maxX": 815,
            "facing": -1
      },
      {
            "id": "l45_e2",
            "x": 880,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 700,
            "maxX": 1060,
            "facing": 1
      },
      {
            "id": "l45_e3",
            "x": 1095,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 885,
            "maxX": 1305,
            "facing": -1
      },
      {
            "id": "l45_e4",
            "x": 1310,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1190,
            "maxX": 1430,
            "facing": 1
      },
      {
            "id": "l45_e5",
            "x": 1525,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1375,
            "maxX": 1675,
            "facing": -1
      },
      {
            "id": "l45_e6",
            "x": 1740,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1560,
            "maxX": 1920,
            "facing": 1
      },
      {
            "id": "l45_e7",
            "x": 1955,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1745,
            "maxX": 2165,
            "facing": -1
      },
      {
            "id": "l45_e8",
            "x": 2170,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2050,
            "maxX": 2290,
            "facing": 1
      },
      {
            "id": "l45_e9",
            "x": 2385,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2235,
            "maxX": 2535,
            "facing": -1
      },
      {
            "id": "l45_e10",
            "x": 2600,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2420,
            "maxX": 2780,
            "facing": 1
      },
      {
            "id": "l45_e11",
            "x": 2815,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2605,
            "maxX": 3025,
            "facing": -1
      },
      {
            "id": "l45_e12",
            "x": 3030,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2910,
            "maxX": 3150,
            "facing": 1
      },
      {
            "id": "l45_e13",
            "x": 3245,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3095,
            "maxX": 3395,
            "facing": -1
      },
      {
            "id": "l45_e14",
            "x": 3460,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3280,
            "maxX": 3640,
            "facing": 1
      },
      {
            "id": "l45_e15",
            "x": 3675,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3465,
            "maxX": 3885,
            "facing": -1
      },
      {
            "id": "l45_e16",
            "x": 3890,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3770,
            "maxX": 4010,
            "facing": 1
      },
      {
            "id": "l45_e17",
            "x": 4105,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3955,
            "maxX": 4255,
            "facing": -1
      },
      {
            "id": "l45_e18",
            "x": 4320,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4140,
            "maxX": 4500,
            "facing": 1
      },
      {
            "id": "l45_e19",
            "x": 4535,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4325,
            "maxX": 4745,
            "facing": -1
      },
      {
            "id": "l45_e20",
            "x": 4750,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4630,
            "maxX": 4870,
            "facing": 1
      },
      {
            "id": "l45_e21",
            "x": 4965,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4815,
            "maxX": 5115,
            "facing": -1
      },
      {
            "id": "l45_e22",
            "x": 5180,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5000,
            "maxX": 5360,
            "facing": 1
      },
      {
            "id": "l45_e23",
            "x": 5395,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5185,
            "maxX": 5605,
            "facing": -1
      },
      {
            "id": "l45_e24",
            "x": 5610,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5490,
            "maxX": 5730,
            "facing": 1
      }
],
    parTime: 129,
    threeStarScore: 11900
  },
  // ==========================================
  // LEVEL 46: SHADOW CRYPT ASCENT
  // ==========================================
  {
    id: 46,
    title: "Level 46: Shadow Crypt Ascent",
    description: "Ascend the heights of a colossal shadow crypt with swinging pendulum saws, high bouncy springs, and 25 enemies.",
    worldWidth: 6144,
    worldHeight: 710,
    theme: THEMES.castle,
    playerStart: {"x":80,"y":480},
    goal: {"x":5964,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1659,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3318,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4792,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l46_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l46_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l46_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l46_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_cp1_base",
            "x": 1599,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l46_p_cp1_high",
            "x": 1699,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l46_lift2",
            "x": 1879,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1879,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l46_p2",
            "x": 2019,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_crumb3",
            "x": 2199,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_crumb4",
            "x": 2329,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_p3",
            "x": 2459,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_lift3",
            "x": 2619,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2619,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l46_spring2",
            "x": 2849,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l46_cp2_base",
            "x": 3258,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l46_p_cp2_high",
            "x": 3358,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l46_lift4",
            "x": 3538,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3538,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l46_p4",
            "x": 3688,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_crumb5",
            "x": 3858,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_crumb6",
            "x": 3988,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_p5",
            "x": 4118,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_lift5",
            "x": 4278,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4278,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l46_spring3",
            "x": 4498,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l46_cp3_base",
            "x": 4732,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l46_p_cp3_high",
            "x": 4832,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l46_lift6",
            "x": 5012,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5012,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l46_p6",
            "x": 5172,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_crumb7",
            "x": 5352,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_crumb8",
            "x": 5472,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l46_p7",
            "x": 5592,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l46_spring4",
            "x": 5752,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l46_goal_base",
            "x": 5884,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l46_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l46_spk2",
            "x": 1819,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l46_spk3",
            "x": 3478,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l46_spk4",
            "x": 4952,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l46_spk5",
            "x": 5624,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l46_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l46_saw2",
            "x": 2079,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2079,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l46_saw3",
            "x": 3758,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3758,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l46_saw4",
            "x": 5252,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5252,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l46_saw5",
            "x": 5744,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5744,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l46_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l46_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_fuel2",
            "x": 1739,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_fuel3",
            "x": 2359,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_fuel4",
            "x": 3398,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_fuel5",
            "x": 4018,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_fuel6",
            "x": 4872,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_fuel7",
            "x": 5512,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_fuel8",
            "x": 5784,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l46_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l46_c1",
            "x": 697,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c2",
            "x": 1044,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c3",
            "x": 1391,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l46_c4",
            "x": 1738,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c5",
            "x": 2085,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c6",
            "x": 2432,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l46_c7",
            "x": 2779,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c8",
            "x": 3126,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c9",
            "x": 3473,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l46_c10",
            "x": 3820,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c11",
            "x": 4167,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c12",
            "x": 4514,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l46_c13",
            "x": 4861,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c14",
            "x": 5208,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l46_c15",
            "x": 5555,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l46_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l46_e1",
            "x": 659,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 509,
            "maxX": 809,
            "facing": -1
      },
      {
            "id": "l46_e2",
            "x": 868,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 688,
            "maxX": 1048,
            "facing": 1
      },
      {
            "id": "l46_e3",
            "x": 1077,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 867,
            "maxX": 1287,
            "facing": -1
      },
      {
            "id": "l46_e4",
            "x": 1286,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1166,
            "maxX": 1406,
            "facing": 1
      },
      {
            "id": "l46_e5",
            "x": 1495,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1345,
            "maxX": 1645,
            "facing": -1
      },
      {
            "id": "l46_e6",
            "x": 1704,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1524,
            "maxX": 1884,
            "facing": 1
      },
      {
            "id": "l46_e7",
            "x": 1913,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1703,
            "maxX": 2123,
            "facing": -1
      },
      {
            "id": "l46_e8",
            "x": 2122,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2002,
            "maxX": 2242,
            "facing": 1
      },
      {
            "id": "l46_e9",
            "x": 2331,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2181,
            "maxX": 2481,
            "facing": -1
      },
      {
            "id": "l46_e10",
            "x": 2540,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2360,
            "maxX": 2720,
            "facing": 1
      },
      {
            "id": "l46_e11",
            "x": 2749,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2539,
            "maxX": 2959,
            "facing": -1
      },
      {
            "id": "l46_e12",
            "x": 2958,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2838,
            "maxX": 3078,
            "facing": 1
      },
      {
            "id": "l46_e13",
            "x": 3167,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3017,
            "maxX": 3317,
            "facing": -1
      },
      {
            "id": "l46_e14",
            "x": 3376,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3196,
            "maxX": 3556,
            "facing": 1
      },
      {
            "id": "l46_e15",
            "x": 3585,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3375,
            "maxX": 3795,
            "facing": -1
      },
      {
            "id": "l46_e16",
            "x": 3794,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3674,
            "maxX": 3914,
            "facing": 1
      },
      {
            "id": "l46_e17",
            "x": 4003,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3853,
            "maxX": 4153,
            "facing": -1
      },
      {
            "id": "l46_e18",
            "x": 4212,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4032,
            "maxX": 4392,
            "facing": 1
      },
      {
            "id": "l46_e19",
            "x": 4421,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4211,
            "maxX": 4631,
            "facing": -1
      },
      {
            "id": "l46_e20",
            "x": 4630,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4510,
            "maxX": 4750,
            "facing": 1
      },
      {
            "id": "l46_e21",
            "x": 4839,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4689,
            "maxX": 4989,
            "facing": -1
      },
      {
            "id": "l46_e22",
            "x": 5048,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4868,
            "maxX": 5228,
            "facing": 1
      },
      {
            "id": "l46_e23",
            "x": 5257,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5047,
            "maxX": 5467,
            "facing": -1
      },
      {
            "id": "l46_e24",
            "x": 5466,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5346,
            "maxX": 5586,
            "facing": 1
      },
      {
            "id": "l46_e25",
            "x": 5675,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5525,
            "maxX": 5825,
            "facing": -1
      }
],
    parTime: 131,
    threeStarScore: 12100
  },
  // ==========================================
  // LEVEL 47: EMERALD CANOPY CANOPY-FLY
  // ==========================================
  {
    id: 47,
    title: "Level 47: Emerald Canopy Canopy-Fly",
    description: "Fly through the towering canopy of an ancient rainforest, weaving between treetop platforms and bird predators.",
    worldWidth: 6202,
    worldHeight: 735,
    theme: THEMES.meadow,
    playerStart: {"x":80,"y":480},
    goal: {"x":6022,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1675,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3349,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4838,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l47_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l47_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l47_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l47_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_cp1_base",
            "x": 1615,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l47_p_cp1_high",
            "x": 1715,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l47_lift2",
            "x": 1895,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1895,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l47_p2",
            "x": 2035,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_crumb3",
            "x": 2215,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_crumb4",
            "x": 2345,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_p3",
            "x": 2475,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_lift3",
            "x": 2635,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2635,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l47_spring2",
            "x": 2865,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l47_cp2_base",
            "x": 3289,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l47_p_cp2_high",
            "x": 3389,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l47_lift4",
            "x": 3569,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3569,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l47_p4",
            "x": 3719,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_crumb5",
            "x": 3889,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_crumb6",
            "x": 4019,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_p5",
            "x": 4149,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_lift5",
            "x": 4309,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4309,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l47_spring3",
            "x": 4529,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l47_cp3_base",
            "x": 4778,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l47_p_cp3_high",
            "x": 4878,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l47_lift6",
            "x": 5058,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5058,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l47_p6",
            "x": 5218,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_crumb7",
            "x": 5398,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_crumb8",
            "x": 5518,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l47_p7",
            "x": 5638,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l47_spring4",
            "x": 5798,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l47_goal_base",
            "x": 5942,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l47_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l47_spk2",
            "x": 1835,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l47_spk3",
            "x": 3509,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l47_spk4",
            "x": 4998,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l47_spk5",
            "x": 5682,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l47_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l47_saw2",
            "x": 2095,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2095,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l47_saw3",
            "x": 3789,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3789,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l47_saw4",
            "x": 5298,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5298,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l47_saw5",
            "x": 5802,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5802,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l47_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l47_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_fuel2",
            "x": 1755,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_fuel3",
            "x": 2375,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_fuel4",
            "x": 3429,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_fuel5",
            "x": 4049,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_fuel6",
            "x": 4918,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_fuel7",
            "x": 5558,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_fuel8",
            "x": 5842,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l47_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l47_ammo1",
            "x": 1835,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l47_ammo2",
            "x": 3509,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l47_ammo3",
            "x": 4998,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l47_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l47_c1",
            "x": 700,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c2",
            "x": 1050,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c3",
            "x": 1400,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l47_c4",
            "x": 1750,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c5",
            "x": 2100,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c6",
            "x": 2450,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l47_c7",
            "x": 2800,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c8",
            "x": 3150,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c9",
            "x": 3500,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l47_c10",
            "x": 3850,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c11",
            "x": 4200,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c12",
            "x": 4550,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l47_c13",
            "x": 4900,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c14",
            "x": 5250,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l47_c15",
            "x": 5600,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l47_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l47_e1",
            "x": 654,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 504,
            "maxX": 804,
            "facing": -1
      },
      {
            "id": "l47_e2",
            "x": 858,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 678,
            "maxX": 1038,
            "facing": 1
      },
      {
            "id": "l47_e3",
            "x": 1062,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 852,
            "maxX": 1272,
            "facing": -1
      },
      {
            "id": "l47_e4",
            "x": 1266,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1146,
            "maxX": 1386,
            "facing": 1
      },
      {
            "id": "l47_e5",
            "x": 1470,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1320,
            "maxX": 1620,
            "facing": -1
      },
      {
            "id": "l47_e6",
            "x": 1674,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1494,
            "maxX": 1854,
            "facing": 1
      },
      {
            "id": "l47_e7",
            "x": 1878,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1668,
            "maxX": 2088,
            "facing": -1
      },
      {
            "id": "l47_e8",
            "x": 2082,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1962,
            "maxX": 2202,
            "facing": 1
      },
      {
            "id": "l47_e9",
            "x": 2286,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2136,
            "maxX": 2436,
            "facing": -1
      },
      {
            "id": "l47_e10",
            "x": 2490,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2310,
            "maxX": 2670,
            "facing": 1
      },
      {
            "id": "l47_e11",
            "x": 2694,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2484,
            "maxX": 2904,
            "facing": -1
      },
      {
            "id": "l47_e12",
            "x": 2898,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2778,
            "maxX": 3018,
            "facing": 1
      },
      {
            "id": "l47_e13",
            "x": 3102,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2952,
            "maxX": 3252,
            "facing": -1
      },
      {
            "id": "l47_e14",
            "x": 3306,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3126,
            "maxX": 3486,
            "facing": 1
      },
      {
            "id": "l47_e15",
            "x": 3510,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3300,
            "maxX": 3720,
            "facing": -1
      },
      {
            "id": "l47_e16",
            "x": 3714,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3594,
            "maxX": 3834,
            "facing": 1
      },
      {
            "id": "l47_e17",
            "x": 3918,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3768,
            "maxX": 4068,
            "facing": -1
      },
      {
            "id": "l47_e18",
            "x": 4122,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3942,
            "maxX": 4302,
            "facing": 1
      },
      {
            "id": "l47_e19",
            "x": 4326,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4116,
            "maxX": 4536,
            "facing": -1
      },
      {
            "id": "l47_e20",
            "x": 4530,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4410,
            "maxX": 4650,
            "facing": 1
      },
      {
            "id": "l47_e21",
            "x": 4734,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4584,
            "maxX": 4884,
            "facing": -1
      },
      {
            "id": "l47_e22",
            "x": 4938,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4758,
            "maxX": 5118,
            "facing": 1
      },
      {
            "id": "l47_e23",
            "x": 5142,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4932,
            "maxX": 5352,
            "facing": -1
      },
      {
            "id": "l47_e24",
            "x": 5346,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5226,
            "maxX": 5466,
            "facing": 1
      },
      {
            "id": "l47_e25",
            "x": 5550,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5400,
            "maxX": 5700,
            "facing": -1
      },
      {
            "id": "l47_e26",
            "x": 5754,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5574,
            "maxX": 5934,
            "facing": 1
      }
],
    parTime: 133,
    threeStarScore: 12300
  },
  // ==========================================
  // LEVEL 48: SUBTERRANEAN GEODE CORE
  // ==========================================
  {
    id: 48,
    title: "Level 48: Subterranean Geode Core",
    description: "A sparkling jewel cavern of unprecedented scale, packed with vertical lifts, spring chains, and dense enemies.",
    worldWidth: 6260,
    worldHeight: 660,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":480},
    goal: {"x":6080,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1690,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3380,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4883,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l48_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l48_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l48_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l48_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_cp1_base",
            "x": 1630,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l48_p_cp1_high",
            "x": 1730,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l48_lift2",
            "x": 1910,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1910,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l48_p2",
            "x": 2050,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_crumb3",
            "x": 2230,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_crumb4",
            "x": 2360,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_p3",
            "x": 2490,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_lift3",
            "x": 2650,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2650,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l48_spring2",
            "x": 2880,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l48_cp2_base",
            "x": 3320,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l48_p_cp2_high",
            "x": 3420,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l48_lift4",
            "x": 3600,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3600,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l48_p4",
            "x": 3750,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_crumb5",
            "x": 3920,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_crumb6",
            "x": 4050,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_p5",
            "x": 4180,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_lift5",
            "x": 4340,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4340,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l48_spring3",
            "x": 4560,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l48_cp3_base",
            "x": 4823,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l48_p_cp3_high",
            "x": 4923,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l48_lift6",
            "x": 5103,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5103,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l48_p6",
            "x": 5263,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_crumb7",
            "x": 5443,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_crumb8",
            "x": 5563,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l48_p7",
            "x": 5683,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l48_spring4",
            "x": 5843,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l48_goal_base",
            "x": 6000,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l48_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l48_spk2",
            "x": 1850,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l48_spk3",
            "x": 3540,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l48_spk4",
            "x": 5043,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l48_spk5",
            "x": 5740,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l48_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l48_saw2",
            "x": 2110,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2110,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l48_saw3",
            "x": 3820,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3820,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l48_saw4",
            "x": 5343,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5343,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l48_saw5",
            "x": 5860,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5860,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l48_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l48_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_fuel2",
            "x": 1770,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_fuel3",
            "x": 2390,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_fuel4",
            "x": 3460,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_fuel5",
            "x": 4080,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_fuel6",
            "x": 4963,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_fuel7",
            "x": 5603,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_fuel8",
            "x": 5900,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l48_shield",
            "x": 3790,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l48_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l48_c1",
            "x": 704,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c2",
            "x": 1058,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c3",
            "x": 1412,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l48_c4",
            "x": 1766,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c5",
            "x": 2120,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c6",
            "x": 2474,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l48_c7",
            "x": 2828,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c8",
            "x": 3182,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c9",
            "x": 3536,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l48_c10",
            "x": 3890,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c11",
            "x": 4244,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c12",
            "x": 4598,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l48_c13",
            "x": 4952,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c14",
            "x": 5306,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l48_c15",
            "x": 5660,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l48_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l48_e1",
            "x": 649,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 499,
            "maxX": 799,
            "facing": -1
      },
      {
            "id": "l48_e2",
            "x": 848,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 668,
            "maxX": 1028,
            "facing": 1
      },
      {
            "id": "l48_e3",
            "x": 1047,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 837,
            "maxX": 1257,
            "facing": -1
      },
      {
            "id": "l48_e4",
            "x": 1246,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1126,
            "maxX": 1366,
            "facing": 1
      },
      {
            "id": "l48_e5",
            "x": 1445,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1295,
            "maxX": 1595,
            "facing": -1
      },
      {
            "id": "l48_e6",
            "x": 1644,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1464,
            "maxX": 1824,
            "facing": 1
      },
      {
            "id": "l48_e7",
            "x": 1843,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1633,
            "maxX": 2053,
            "facing": -1
      },
      {
            "id": "l48_e8",
            "x": 2042,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1922,
            "maxX": 2162,
            "facing": 1
      },
      {
            "id": "l48_e9",
            "x": 2241,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2091,
            "maxX": 2391,
            "facing": -1
      },
      {
            "id": "l48_e10",
            "x": 2440,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2260,
            "maxX": 2620,
            "facing": 1
      },
      {
            "id": "l48_e11",
            "x": 2639,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2429,
            "maxX": 2849,
            "facing": -1
      },
      {
            "id": "l48_e12",
            "x": 2838,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2718,
            "maxX": 2958,
            "facing": 1
      },
      {
            "id": "l48_e13",
            "x": 3037,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 2887,
            "maxX": 3187,
            "facing": -1
      },
      {
            "id": "l48_e14",
            "x": 3236,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3056,
            "maxX": 3416,
            "facing": 1
      },
      {
            "id": "l48_e15",
            "x": 3435,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3225,
            "maxX": 3645,
            "facing": -1
      },
      {
            "id": "l48_e16",
            "x": 3634,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3514,
            "maxX": 3754,
            "facing": 1
      },
      {
            "id": "l48_e17",
            "x": 3833,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3683,
            "maxX": 3983,
            "facing": -1
      },
      {
            "id": "l48_e18",
            "x": 4032,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3852,
            "maxX": 4212,
            "facing": 1
      },
      {
            "id": "l48_e19",
            "x": 4231,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4021,
            "maxX": 4441,
            "facing": -1
      },
      {
            "id": "l48_e20",
            "x": 4430,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4310,
            "maxX": 4550,
            "facing": 1
      },
      {
            "id": "l48_e21",
            "x": 4629,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4479,
            "maxX": 4779,
            "facing": -1
      },
      {
            "id": "l48_e22",
            "x": 4828,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4648,
            "maxX": 5008,
            "facing": 1
      },
      {
            "id": "l48_e23",
            "x": 5027,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4817,
            "maxX": 5237,
            "facing": -1
      },
      {
            "id": "l48_e24",
            "x": 5226,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5106,
            "maxX": 5346,
            "facing": 1
      },
      {
            "id": "l48_e25",
            "x": 5425,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5275,
            "maxX": 5575,
            "facing": -1
      },
      {
            "id": "l48_e26",
            "x": 5624,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5444,
            "maxX": 5804,
            "facing": 1
      },
      {
            "id": "l48_e27",
            "x": 5823,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5613,
            "maxX": 6033,
            "facing": -1
      }
],
    parTime: 135,
    threeStarScore: 12500
  },
  // ==========================================
  // LEVEL 49: QUANTUM NEON EXPRESSWAY
  // ==========================================
  {
    id: 49,
    title: "Level 49: Quantum Neon Expressway",
    description: "Full-throttle jetpack flight through glowing holographic laser gates, moving cyber barges, and drone squadrons.",
    worldWidth: 6318,
    worldHeight: 685,
    theme: THEMES.cyber,
    playerStart: {"x":80,"y":480},
    goal: {"x":6138,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1706,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3412,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4928,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l49_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l49_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l49_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l49_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_cp1_base",
            "x": 1646,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l49_p_cp1_high",
            "x": 1746,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l49_lift2",
            "x": 1926,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1926,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l49_p2",
            "x": 2066,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_crumb3",
            "x": 2246,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_crumb4",
            "x": 2376,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_p3",
            "x": 2506,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_lift3",
            "x": 2666,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2666,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l49_spring2",
            "x": 2896,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l49_cp2_base",
            "x": 3352,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l49_p_cp2_high",
            "x": 3452,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l49_lift4",
            "x": 3632,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3632,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l49_p4",
            "x": 3782,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_crumb5",
            "x": 3952,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_crumb6",
            "x": 4082,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_p5",
            "x": 4212,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_lift5",
            "x": 4372,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4372,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l49_spring3",
            "x": 4592,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l49_cp3_base",
            "x": 4868,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l49_p_cp3_high",
            "x": 4968,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l49_lift6",
            "x": 5148,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5148,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l49_p6",
            "x": 5308,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_crumb7",
            "x": 5488,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_crumb8",
            "x": 5608,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l49_p7",
            "x": 5728,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l49_spring4",
            "x": 5888,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l49_goal_base",
            "x": 6058,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l49_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l49_spk2",
            "x": 1866,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l49_spk3",
            "x": 3572,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l49_spk4",
            "x": 5088,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l49_spk5",
            "x": 5798,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l49_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l49_saw2",
            "x": 2126,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2126,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l49_saw3",
            "x": 3852,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3852,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l49_saw4",
            "x": 5388,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5388,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l49_saw5",
            "x": 5918,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5918,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l49_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l49_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_fuel2",
            "x": 1786,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_fuel3",
            "x": 2406,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_fuel4",
            "x": 3492,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_fuel5",
            "x": 4112,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_fuel6",
            "x": 5008,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_fuel7",
            "x": 5648,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_fuel8",
            "x": 5958,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l49_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l49_ammo1",
            "x": 1866,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l49_ammo2",
            "x": 3572,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l49_ammo3",
            "x": 5088,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l49_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l49_c1",
            "x": 707,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c2",
            "x": 1064,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c3",
            "x": 1421,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l49_c4",
            "x": 1778,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c5",
            "x": 2135,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c6",
            "x": 2492,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l49_c7",
            "x": 2849,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c8",
            "x": 3206,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c9",
            "x": 3563,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l49_c10",
            "x": 3920,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c11",
            "x": 4277,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c12",
            "x": 4634,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l49_c13",
            "x": 4991,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c14",
            "x": 5348,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l49_c15",
            "x": 5705,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l49_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l49_e1",
            "x": 705,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 555,
            "maxX": 855,
            "facing": -1
      },
      {
            "id": "l49_e2",
            "x": 960,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 780,
            "maxX": 1140,
            "facing": 1
      },
      {
            "id": "l49_e3",
            "x": 1215,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1005,
            "maxX": 1425,
            "facing": -1
      },
      {
            "id": "l49_e4",
            "x": 1470,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1350,
            "maxX": 1590,
            "facing": 1
      },
      {
            "id": "l49_e5",
            "x": 1725,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1575,
            "maxX": 1875,
            "facing": -1
      },
      {
            "id": "l49_e6",
            "x": 1980,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1800,
            "maxX": 2160,
            "facing": 1
      },
      {
            "id": "l49_e7",
            "x": 2235,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2025,
            "maxX": 2445,
            "facing": -1
      },
      {
            "id": "l49_e8",
            "x": 2490,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2370,
            "maxX": 2610,
            "facing": 1
      },
      {
            "id": "l49_e9",
            "x": 2745,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2595,
            "maxX": 2895,
            "facing": -1
      },
      {
            "id": "l49_e10",
            "x": 3000,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2820,
            "maxX": 3180,
            "facing": 1
      },
      {
            "id": "l49_e11",
            "x": 3255,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3045,
            "maxX": 3465,
            "facing": -1
      },
      {
            "id": "l49_e12",
            "x": 3510,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3390,
            "maxX": 3630,
            "facing": 1
      },
      {
            "id": "l49_e13",
            "x": 3765,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3615,
            "maxX": 3915,
            "facing": -1
      },
      {
            "id": "l49_e14",
            "x": 4020,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3840,
            "maxX": 4200,
            "facing": 1
      },
      {
            "id": "l49_e15",
            "x": 4275,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4065,
            "maxX": 4485,
            "facing": -1
      },
      {
            "id": "l49_e16",
            "x": 4530,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4410,
            "maxX": 4650,
            "facing": 1
      },
      {
            "id": "l49_e17",
            "x": 4785,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4635,
            "maxX": 4935,
            "facing": -1
      },
      {
            "id": "l49_e18",
            "x": 5040,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4860,
            "maxX": 5220,
            "facing": 1
      },
      {
            "id": "l49_e19",
            "x": 5295,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5085,
            "maxX": 5505,
            "facing": -1
      },
      {
            "id": "l49_e20",
            "x": 5550,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 5430,
            "maxX": 5670,
            "facing": 1
      },
      {
            "id": "l49_e21",
            "x": 5805,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5655,
            "maxX": 5955,
            "facing": -1
      }
],
    parTime: 137,
    threeStarScore: 12700
  },
  // ==========================================
  // LEVEL 50: ABYSSAL TRENCH CITADEL
  // ==========================================
  {
    id: 50,
    title: "Level 50: Abyssal Trench Citadel",
    description: "The sunken throne of the ocean depths! Combine Bubble Shield and Jetpack to brave intense underwater currents.",
    worldWidth: 6376,
    worldHeight: 710,
    theme: THEMES.reef,
    playerStart: {"x":80,"y":480},
    goal: {"x":6196,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1722,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3443,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 4973,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l50_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l50_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l50_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l50_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_cp1_base",
            "x": 1662,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l50_p_cp1_high",
            "x": 1762,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l50_lift2",
            "x": 1942,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1942,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l50_p2",
            "x": 2082,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_crumb3",
            "x": 2262,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_crumb4",
            "x": 2392,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_p3",
            "x": 2522,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_lift3",
            "x": 2682,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2682,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l50_spring2",
            "x": 2912,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l50_cp2_base",
            "x": 3383,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l50_p_cp2_high",
            "x": 3483,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l50_lift4",
            "x": 3663,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3663,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l50_p4",
            "x": 3813,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_crumb5",
            "x": 3983,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_crumb6",
            "x": 4113,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_p5",
            "x": 4243,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_lift5",
            "x": 4403,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4403,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l50_spring3",
            "x": 4623,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l50_cp3_base",
            "x": 4913,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l50_p_cp3_high",
            "x": 5013,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l50_lift6",
            "x": 5193,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5193,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l50_p6",
            "x": 5353,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_crumb7",
            "x": 5533,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_crumb8",
            "x": 5653,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l50_p7",
            "x": 5773,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l50_spring4",
            "x": 5933,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l50_goal_base",
            "x": 6116,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l50_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l50_spk2",
            "x": 1882,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l50_spk3",
            "x": 3603,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l50_spk4",
            "x": 5133,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l50_spk5",
            "x": 5856,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l50_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l50_saw2",
            "x": 2142,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2142,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l50_saw3",
            "x": 3883,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3883,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l50_saw4",
            "x": 5433,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5433,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l50_saw5",
            "x": 5976,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5976,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l50_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l50_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_fuel2",
            "x": 1802,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_fuel3",
            "x": 2422,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_fuel4",
            "x": 3523,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_fuel5",
            "x": 4143,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_fuel6",
            "x": 5053,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_fuel7",
            "x": 5693,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_fuel8",
            "x": 6016,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l50_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l50_c1",
            "x": 711,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c2",
            "x": 1072,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c3",
            "x": 1433,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l50_c4",
            "x": 1794,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c5",
            "x": 2155,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c6",
            "x": 2516,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l50_c7",
            "x": 2877,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c8",
            "x": 3238,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c9",
            "x": 3599,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l50_c10",
            "x": 3960,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c11",
            "x": 4321,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c12",
            "x": 4682,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l50_c13",
            "x": 5043,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c14",
            "x": 5404,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l50_c15",
            "x": 5765,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l50_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l50_e1",
            "x": 697,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 547,
            "maxX": 847,
            "facing": -1
      },
      {
            "id": "l50_e2",
            "x": 944,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 764,
            "maxX": 1124,
            "facing": 1
      },
      {
            "id": "l50_e3",
            "x": 1191,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 981,
            "maxX": 1401,
            "facing": -1
      },
      {
            "id": "l50_e4",
            "x": 1438,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1318,
            "maxX": 1558,
            "facing": 1
      },
      {
            "id": "l50_e5",
            "x": 1685,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1535,
            "maxX": 1835,
            "facing": -1
      },
      {
            "id": "l50_e6",
            "x": 1932,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1752,
            "maxX": 2112,
            "facing": 1
      },
      {
            "id": "l50_e7",
            "x": 2179,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1969,
            "maxX": 2389,
            "facing": -1
      },
      {
            "id": "l50_e8",
            "x": 2426,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2306,
            "maxX": 2546,
            "facing": 1
      },
      {
            "id": "l50_e9",
            "x": 2673,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2523,
            "maxX": 2823,
            "facing": -1
      },
      {
            "id": "l50_e10",
            "x": 2920,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2740,
            "maxX": 3100,
            "facing": 1
      },
      {
            "id": "l50_e11",
            "x": 3167,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2957,
            "maxX": 3377,
            "facing": -1
      },
      {
            "id": "l50_e12",
            "x": 3414,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3294,
            "maxX": 3534,
            "facing": 1
      },
      {
            "id": "l50_e13",
            "x": 3661,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3511,
            "maxX": 3811,
            "facing": -1
      },
      {
            "id": "l50_e14",
            "x": 3908,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3728,
            "maxX": 4088,
            "facing": 1
      },
      {
            "id": "l50_e15",
            "x": 4155,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3945,
            "maxX": 4365,
            "facing": -1
      },
      {
            "id": "l50_e16",
            "x": 4402,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4282,
            "maxX": 4522,
            "facing": 1
      },
      {
            "id": "l50_e17",
            "x": 4649,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4499,
            "maxX": 4799,
            "facing": -1
      },
      {
            "id": "l50_e18",
            "x": 4896,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4716,
            "maxX": 5076,
            "facing": 1
      },
      {
            "id": "l50_e19",
            "x": 5143,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4933,
            "maxX": 5353,
            "facing": -1
      },
      {
            "id": "l50_e20",
            "x": 5390,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 5270,
            "maxX": 5510,
            "facing": 1
      },
      {
            "id": "l50_e21",
            "x": 5637,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5487,
            "maxX": 5787,
            "facing": -1
      },
      {
            "id": "l50_e22",
            "x": 5884,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5704,
            "maxX": 6064,
            "facing": 1
      }
],
    parTime: 139,
    threeStarScore: 12900
  },
  // ==========================================
  // LEVEL 51: MOLTEN CORE SUPER-VENTURE
  // ==========================================
  {
    id: 51,
    title: "Level 51: Molten Core Super-Venture",
    description: "The ultimate volcanic gauntlet! 6,400px of pure molten peril, crumbling basalt bridges, and intense aerial dodging.",
    worldWidth: 6434,
    worldHeight: 735,
    theme: THEMES.lava,
    playerStart: {"x":80,"y":480},
    goal: {"x":6254,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1737,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3474,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 5019,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l51_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l51_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l51_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l51_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_cp1_base",
            "x": 1677,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l51_p_cp1_high",
            "x": 1777,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l51_lift2",
            "x": 1957,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1957,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l51_p2",
            "x": 2097,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_crumb3",
            "x": 2277,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_crumb4",
            "x": 2407,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_p3",
            "x": 2537,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_lift3",
            "x": 2697,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2697,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l51_spring2",
            "x": 2927,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l51_cp2_base",
            "x": 3414,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l51_p_cp2_high",
            "x": 3514,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l51_lift4",
            "x": 3694,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3694,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l51_p4",
            "x": 3844,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_crumb5",
            "x": 4014,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_crumb6",
            "x": 4144,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_p5",
            "x": 4274,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_lift5",
            "x": 4434,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4434,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l51_spring3",
            "x": 4654,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l51_cp3_base",
            "x": 4959,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l51_p_cp3_high",
            "x": 5059,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l51_lift6",
            "x": 5239,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5239,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l51_p6",
            "x": 5399,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_crumb7",
            "x": 5579,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_crumb8",
            "x": 5699,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l51_p7",
            "x": 5819,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l51_spring4",
            "x": 5979,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l51_goal_base",
            "x": 6174,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l51_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l51_spk2",
            "x": 1897,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l51_spk3",
            "x": 3634,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l51_spk4",
            "x": 5179,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l51_spk5",
            "x": 5914,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l51_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l51_saw2",
            "x": 2157,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2157,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l51_saw3",
            "x": 3914,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3914,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l51_saw4",
            "x": 5479,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5479,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l51_saw5",
            "x": 6034,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 6034,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l51_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l51_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_fuel2",
            "x": 1817,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_fuel3",
            "x": 2437,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_fuel4",
            "x": 3554,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_fuel5",
            "x": 4174,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_fuel6",
            "x": 5099,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_fuel7",
            "x": 5739,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_fuel8",
            "x": 6074,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l51_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l51_ammo1",
            "x": 1897,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l51_ammo2",
            "x": 3634,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l51_ammo3",
            "x": 5179,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l51_shield",
            "x": 3884,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l51_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l51_c1",
            "x": 715,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c2",
            "x": 1080,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c3",
            "x": 1445,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l51_c4",
            "x": 1810,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c5",
            "x": 2175,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c6",
            "x": 2540,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l51_c7",
            "x": 2905,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c8",
            "x": 3270,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c9",
            "x": 3635,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l51_c10",
            "x": 4000,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c11",
            "x": 4365,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c12",
            "x": 4730,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l51_c13",
            "x": 5095,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c14",
            "x": 5460,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l51_c15",
            "x": 5825,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l51_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l51_e1",
            "x": 689,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 539,
            "maxX": 839,
            "facing": -1
      },
      {
            "id": "l51_e2",
            "x": 928,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 748,
            "maxX": 1108,
            "facing": 1
      },
      {
            "id": "l51_e3",
            "x": 1167,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 957,
            "maxX": 1377,
            "facing": -1
      },
      {
            "id": "l51_e4",
            "x": 1406,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1286,
            "maxX": 1526,
            "facing": 1
      },
      {
            "id": "l51_e5",
            "x": 1645,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1495,
            "maxX": 1795,
            "facing": -1
      },
      {
            "id": "l51_e6",
            "x": 1884,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1704,
            "maxX": 2064,
            "facing": 1
      },
      {
            "id": "l51_e7",
            "x": 2123,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1913,
            "maxX": 2333,
            "facing": -1
      },
      {
            "id": "l51_e8",
            "x": 2362,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2242,
            "maxX": 2482,
            "facing": 1
      },
      {
            "id": "l51_e9",
            "x": 2601,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2451,
            "maxX": 2751,
            "facing": -1
      },
      {
            "id": "l51_e10",
            "x": 2840,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2660,
            "maxX": 3020,
            "facing": 1
      },
      {
            "id": "l51_e11",
            "x": 3079,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2869,
            "maxX": 3289,
            "facing": -1
      },
      {
            "id": "l51_e12",
            "x": 3318,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3198,
            "maxX": 3438,
            "facing": 1
      },
      {
            "id": "l51_e13",
            "x": 3557,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3407,
            "maxX": 3707,
            "facing": -1
      },
      {
            "id": "l51_e14",
            "x": 3796,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3616,
            "maxX": 3976,
            "facing": 1
      },
      {
            "id": "l51_e15",
            "x": 4035,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3825,
            "maxX": 4245,
            "facing": -1
      },
      {
            "id": "l51_e16",
            "x": 4274,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4154,
            "maxX": 4394,
            "facing": 1
      },
      {
            "id": "l51_e17",
            "x": 4513,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4363,
            "maxX": 4663,
            "facing": -1
      },
      {
            "id": "l51_e18",
            "x": 4752,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4572,
            "maxX": 4932,
            "facing": 1
      },
      {
            "id": "l51_e19",
            "x": 4991,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4781,
            "maxX": 5201,
            "facing": -1
      },
      {
            "id": "l51_e20",
            "x": 5230,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 5110,
            "maxX": 5350,
            "facing": 1
      },
      {
            "id": "l51_e21",
            "x": 5469,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5319,
            "maxX": 5619,
            "facing": -1
      },
      {
            "id": "l51_e22",
            "x": 5708,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5528,
            "maxX": 5888,
            "facing": 1
      },
      {
            "id": "l51_e23",
            "x": 5947,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5737,
            "maxX": 6157,
            "facing": -1
      }
],
    parTime: 141,
    threeStarScore: 13100
  },
  // ==========================================
  // LEVEL 52: PERMAFROST TITAN PEAKS
  // ==========================================
  {
    id: 52,
    title: "Level 52: Permafrost Titan Peaks",
    description: "Soar across the highest glacier peaks in the world, dodging blizzards and high-speed ice flyers.",
    worldWidth: 6492,
    worldHeight: 660,
    theme: THEMES.tundra,
    playerStart: {"x":80,"y":480},
    goal: {"x":6312,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1753,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3506,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 5064,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l52_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l52_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l52_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l52_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_cp1_base",
            "x": 1693,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l52_p_cp1_high",
            "x": 1793,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l52_lift2",
            "x": 1973,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1973,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l52_p2",
            "x": 2113,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_crumb3",
            "x": 2293,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_crumb4",
            "x": 2423,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_p3",
            "x": 2553,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_lift3",
            "x": 2713,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2713,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l52_spring2",
            "x": 2943,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l52_cp2_base",
            "x": 3446,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l52_p_cp2_high",
            "x": 3546,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l52_lift4",
            "x": 3726,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3726,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l52_p4",
            "x": 3876,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_crumb5",
            "x": 4046,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_crumb6",
            "x": 4176,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_p5",
            "x": 4306,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_lift5",
            "x": 4466,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4466,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l52_spring3",
            "x": 4686,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l52_cp3_base",
            "x": 5004,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l52_p_cp3_high",
            "x": 5104,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l52_lift6",
            "x": 5284,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5284,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l52_p6",
            "x": 5444,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_crumb7",
            "x": 5624,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_crumb8",
            "x": 5744,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l52_p7",
            "x": 5864,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l52_spring4",
            "x": 6024,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l52_goal_base",
            "x": 6232,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l52_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l52_spk2",
            "x": 1913,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l52_spk3",
            "x": 3666,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l52_spk4",
            "x": 5224,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l52_spk5",
            "x": 5972,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l52_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l52_saw2",
            "x": 2173,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2173,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l52_saw3",
            "x": 3946,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3946,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l52_saw4",
            "x": 5524,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5524,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l52_saw5",
            "x": 6092,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 6092,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l52_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l52_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_fuel2",
            "x": 1833,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_fuel3",
            "x": 2453,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_fuel4",
            "x": 3586,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_fuel5",
            "x": 4206,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_fuel6",
            "x": 5144,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_fuel7",
            "x": 5784,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_fuel8",
            "x": 6132,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l52_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l52_c1",
            "x": 718,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c2",
            "x": 1086,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c3",
            "x": 1454,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l52_c4",
            "x": 1822,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c5",
            "x": 2190,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c6",
            "x": 2558,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l52_c7",
            "x": 2926,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c8",
            "x": 3294,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c9",
            "x": 3662,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l52_c10",
            "x": 4030,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c11",
            "x": 4398,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c12",
            "x": 4766,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l52_c13",
            "x": 5134,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c14",
            "x": 5502,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l52_c15",
            "x": 5870,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l52_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l52_e1",
            "x": 682,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 532,
            "maxX": 832,
            "facing": -1
      },
      {
            "id": "l52_e2",
            "x": 914,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 734,
            "maxX": 1094,
            "facing": 1
      },
      {
            "id": "l52_e3",
            "x": 1146,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 936,
            "maxX": 1356,
            "facing": -1
      },
      {
            "id": "l52_e4",
            "x": 1378,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1258,
            "maxX": 1498,
            "facing": 1
      },
      {
            "id": "l52_e5",
            "x": 1610,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1460,
            "maxX": 1760,
            "facing": -1
      },
      {
            "id": "l52_e6",
            "x": 1842,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1662,
            "maxX": 2022,
            "facing": 1
      },
      {
            "id": "l52_e7",
            "x": 2074,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1864,
            "maxX": 2284,
            "facing": -1
      },
      {
            "id": "l52_e8",
            "x": 2306,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2186,
            "maxX": 2426,
            "facing": 1
      },
      {
            "id": "l52_e9",
            "x": 2538,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2388,
            "maxX": 2688,
            "facing": -1
      },
      {
            "id": "l52_e10",
            "x": 2770,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2590,
            "maxX": 2950,
            "facing": 1
      },
      {
            "id": "l52_e11",
            "x": 3002,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2792,
            "maxX": 3212,
            "facing": -1
      },
      {
            "id": "l52_e12",
            "x": 3234,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3114,
            "maxX": 3354,
            "facing": 1
      },
      {
            "id": "l52_e13",
            "x": 3466,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3316,
            "maxX": 3616,
            "facing": -1
      },
      {
            "id": "l52_e14",
            "x": 3698,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3518,
            "maxX": 3878,
            "facing": 1
      },
      {
            "id": "l52_e15",
            "x": 3930,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3720,
            "maxX": 4140,
            "facing": -1
      },
      {
            "id": "l52_e16",
            "x": 4162,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4042,
            "maxX": 4282,
            "facing": 1
      },
      {
            "id": "l52_e17",
            "x": 4394,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4244,
            "maxX": 4544,
            "facing": -1
      },
      {
            "id": "l52_e18",
            "x": 4626,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4446,
            "maxX": 4806,
            "facing": 1
      },
      {
            "id": "l52_e19",
            "x": 4858,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4648,
            "maxX": 5068,
            "facing": -1
      },
      {
            "id": "l52_e20",
            "x": 5090,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4970,
            "maxX": 5210,
            "facing": 1
      },
      {
            "id": "l52_e21",
            "x": 5322,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5172,
            "maxX": 5472,
            "facing": -1
      },
      {
            "id": "l52_e22",
            "x": 5554,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5374,
            "maxX": 5734,
            "facing": 1
      },
      {
            "id": "l52_e23",
            "x": 5786,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5576,
            "maxX": 5996,
            "facing": -1
      },
      {
            "id": "l52_e24",
            "x": 6018,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5898,
            "maxX": 6138,
            "facing": 1
      }
],
    parTime: 143,
    threeStarScore: 13300
  },
  // ==========================================
  // LEVEL 53: TOXIC HIVE OVERLORD RUN
  // ==========================================
  {
    id: 53,
    title: "Level 53: Toxic Hive Overlord Run",
    description: "Armed to the teeth with Jetpack and Plasma Blaster, clear dense swarms of bio-engineered hive beasts.",
    worldWidth: 6550,
    worldHeight: 685,
    theme: THEMES.toxic,
    playerStart: {"x":80,"y":480},
    goal: {"x":6370,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1769,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3537,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 5109,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l53_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l53_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l53_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l53_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_cp1_base",
            "x": 1709,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l53_p_cp1_high",
            "x": 1809,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l53_lift2",
            "x": 1989,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 1989,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l53_p2",
            "x": 2129,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_crumb3",
            "x": 2309,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_crumb4",
            "x": 2439,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_p3",
            "x": 2569,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_lift3",
            "x": 2729,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2729,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l53_spring2",
            "x": 2959,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l53_cp2_base",
            "x": 3477,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l53_p_cp2_high",
            "x": 3577,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l53_lift4",
            "x": 3757,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3757,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l53_p4",
            "x": 3907,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_crumb5",
            "x": 4077,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_crumb6",
            "x": 4207,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_p5",
            "x": 4337,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_lift5",
            "x": 4497,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4497,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l53_spring3",
            "x": 4717,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l53_cp3_base",
            "x": 5049,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l53_p_cp3_high",
            "x": 5149,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l53_lift6",
            "x": 5329,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5329,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l53_p6",
            "x": 5489,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_crumb7",
            "x": 5669,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_crumb8",
            "x": 5789,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l53_p7",
            "x": 5909,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l53_spring4",
            "x": 6069,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l53_goal_base",
            "x": 6290,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l53_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l53_spk2",
            "x": 1929,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l53_spk3",
            "x": 3697,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l53_spk4",
            "x": 5269,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l53_spk5",
            "x": 6030,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l53_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l53_saw2",
            "x": 2189,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2189,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l53_saw3",
            "x": 3977,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 3977,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l53_saw4",
            "x": 5569,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5569,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l53_saw5",
            "x": 6150,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 6150,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l53_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l53_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_fuel2",
            "x": 1849,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_fuel3",
            "x": 2469,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_fuel4",
            "x": 3617,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_fuel5",
            "x": 4237,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_fuel6",
            "x": 5189,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_fuel7",
            "x": 5829,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_fuel8",
            "x": 6190,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l53_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l53_ammo1",
            "x": 1929,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l53_ammo2",
            "x": 3697,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l53_ammo3",
            "x": 5269,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l53_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l53_c1",
            "x": 722,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c2",
            "x": 1094,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c3",
            "x": 1466,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l53_c4",
            "x": 1838,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c5",
            "x": 2210,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c6",
            "x": 2582,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l53_c7",
            "x": 2954,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c8",
            "x": 3326,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c9",
            "x": 3698,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l53_c10",
            "x": 4070,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c11",
            "x": 4442,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c12",
            "x": 4814,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l53_c13",
            "x": 5186,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c14",
            "x": 5558,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l53_c15",
            "x": 5930,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l53_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l53_e1",
            "x": 675,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 525,
            "maxX": 825,
            "facing": -1
      },
      {
            "id": "l53_e2",
            "x": 900,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 720,
            "maxX": 1080,
            "facing": 1
      },
      {
            "id": "l53_e3",
            "x": 1125,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 915,
            "maxX": 1335,
            "facing": -1
      },
      {
            "id": "l53_e4",
            "x": 1350,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1230,
            "maxX": 1470,
            "facing": 1
      },
      {
            "id": "l53_e5",
            "x": 1575,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1425,
            "maxX": 1725,
            "facing": -1
      },
      {
            "id": "l53_e6",
            "x": 1800,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1620,
            "maxX": 1980,
            "facing": 1
      },
      {
            "id": "l53_e7",
            "x": 2025,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1815,
            "maxX": 2235,
            "facing": -1
      },
      {
            "id": "l53_e8",
            "x": 2250,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2130,
            "maxX": 2370,
            "facing": 1
      },
      {
            "id": "l53_e9",
            "x": 2475,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2325,
            "maxX": 2625,
            "facing": -1
      },
      {
            "id": "l53_e10",
            "x": 2700,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2520,
            "maxX": 2880,
            "facing": 1
      },
      {
            "id": "l53_e11",
            "x": 2925,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2715,
            "maxX": 3135,
            "facing": -1
      },
      {
            "id": "l53_e12",
            "x": 3150,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3030,
            "maxX": 3270,
            "facing": 1
      },
      {
            "id": "l53_e13",
            "x": 3375,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3225,
            "maxX": 3525,
            "facing": -1
      },
      {
            "id": "l53_e14",
            "x": 3600,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3420,
            "maxX": 3780,
            "facing": 1
      },
      {
            "id": "l53_e15",
            "x": 3825,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3615,
            "maxX": 4035,
            "facing": -1
      },
      {
            "id": "l53_e16",
            "x": 4050,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3930,
            "maxX": 4170,
            "facing": 1
      },
      {
            "id": "l53_e17",
            "x": 4275,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4125,
            "maxX": 4425,
            "facing": -1
      },
      {
            "id": "l53_e18",
            "x": 4500,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4320,
            "maxX": 4680,
            "facing": 1
      },
      {
            "id": "l53_e19",
            "x": 4725,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4515,
            "maxX": 4935,
            "facing": -1
      },
      {
            "id": "l53_e20",
            "x": 4950,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4830,
            "maxX": 5070,
            "facing": 1
      },
      {
            "id": "l53_e21",
            "x": 5175,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5025,
            "maxX": 5325,
            "facing": -1
      },
      {
            "id": "l53_e22",
            "x": 5400,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5220,
            "maxX": 5580,
            "facing": 1
      },
      {
            "id": "l53_e23",
            "x": 5625,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5415,
            "maxX": 5835,
            "facing": -1
      },
      {
            "id": "l53_e24",
            "x": 5850,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5730,
            "maxX": 5970,
            "facing": 1
      },
      {
            "id": "l53_e25",
            "x": 6075,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5925,
            "maxX": 6225,
            "facing": -1
      }
],
    parTime: 145,
    threeStarScore: 13500
  },
  // ==========================================
  // LEVEL 54: TWILIGHT ECLIPSE CITADEL
  // ==========================================
  {
    id: 54,
    title: "Level 54: Twilight Eclipse Citadel",
    description: "A grand cosmic palace in the stars with moving void platforms, triple checkpoints, and 26 enemies.",
    worldWidth: 6608,
    worldHeight: 710,
    theme: THEMES.twilight,
    playerStart: {"x":80,"y":480},
    goal: {"x":6428,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1784,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3568,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 5154,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l54_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l54_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l54_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l54_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_cp1_base",
            "x": 1724,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l54_p_cp1_high",
            "x": 1824,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l54_lift2",
            "x": 2004,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 2004,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l54_p2",
            "x": 2144,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_crumb3",
            "x": 2324,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_crumb4",
            "x": 2454,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_p3",
            "x": 2584,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_lift3",
            "x": 2744,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2744,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l54_spring2",
            "x": 2974,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l54_cp2_base",
            "x": 3508,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l54_p_cp2_high",
            "x": 3608,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l54_lift4",
            "x": 3788,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3788,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l54_p4",
            "x": 3938,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_crumb5",
            "x": 4108,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_crumb6",
            "x": 4238,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_p5",
            "x": 4368,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_lift5",
            "x": 4528,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4528,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l54_spring3",
            "x": 4748,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l54_cp3_base",
            "x": 5094,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l54_p_cp3_high",
            "x": 5194,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l54_lift6",
            "x": 5374,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5374,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l54_p6",
            "x": 5534,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_crumb7",
            "x": 5714,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_crumb8",
            "x": 5834,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l54_p7",
            "x": 5954,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l54_spring4",
            "x": 6114,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l54_goal_base",
            "x": 6348,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l54_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l54_spk2",
            "x": 1944,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l54_spk3",
            "x": 3728,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l54_spk4",
            "x": 5314,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l54_spk5",
            "x": 6088,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l54_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l54_saw2",
            "x": 2204,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2204,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l54_saw3",
            "x": 4008,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4008,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l54_saw4",
            "x": 5614,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5614,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l54_saw5",
            "x": 6208,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 6208,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l54_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l54_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_fuel2",
            "x": 1864,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_fuel3",
            "x": 2484,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_fuel4",
            "x": 3648,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_fuel5",
            "x": 4268,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_fuel6",
            "x": 5234,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_fuel7",
            "x": 5874,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_fuel8",
            "x": 6248,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l54_shield",
            "x": 3978,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l54_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l54_c1",
            "x": 726,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c2",
            "x": 1102,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c3",
            "x": 1478,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l54_c4",
            "x": 1854,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c5",
            "x": 2230,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c6",
            "x": 2606,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l54_c7",
            "x": 2982,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c8",
            "x": 3358,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c9",
            "x": 3734,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l54_c10",
            "x": 4110,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c11",
            "x": 4486,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c12",
            "x": 4862,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l54_c13",
            "x": 5238,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c14",
            "x": 5614,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l54_c15",
            "x": 5990,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l54_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l54_e1",
            "x": 669,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 519,
            "maxX": 819,
            "facing": -1
      },
      {
            "id": "l54_e2",
            "x": 888,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 708,
            "maxX": 1068,
            "facing": 1
      },
      {
            "id": "l54_e3",
            "x": 1107,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 897,
            "maxX": 1317,
            "facing": -1
      },
      {
            "id": "l54_e4",
            "x": 1326,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1206,
            "maxX": 1446,
            "facing": 1
      },
      {
            "id": "l54_e5",
            "x": 1545,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1395,
            "maxX": 1695,
            "facing": -1
      },
      {
            "id": "l54_e6",
            "x": 1764,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1584,
            "maxX": 1944,
            "facing": 1
      },
      {
            "id": "l54_e7",
            "x": 1983,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1773,
            "maxX": 2193,
            "facing": -1
      },
      {
            "id": "l54_e8",
            "x": 2202,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2082,
            "maxX": 2322,
            "facing": 1
      },
      {
            "id": "l54_e9",
            "x": 2421,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2271,
            "maxX": 2571,
            "facing": -1
      },
      {
            "id": "l54_e10",
            "x": 2640,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2460,
            "maxX": 2820,
            "facing": 1
      },
      {
            "id": "l54_e11",
            "x": 2859,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2649,
            "maxX": 3069,
            "facing": -1
      },
      {
            "id": "l54_e12",
            "x": 3078,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2958,
            "maxX": 3198,
            "facing": 1
      },
      {
            "id": "l54_e13",
            "x": 3297,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3147,
            "maxX": 3447,
            "facing": -1
      },
      {
            "id": "l54_e14",
            "x": 3516,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3336,
            "maxX": 3696,
            "facing": 1
      },
      {
            "id": "l54_e15",
            "x": 3735,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3525,
            "maxX": 3945,
            "facing": -1
      },
      {
            "id": "l54_e16",
            "x": 3954,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3834,
            "maxX": 4074,
            "facing": 1
      },
      {
            "id": "l54_e17",
            "x": 4173,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4023,
            "maxX": 4323,
            "facing": -1
      },
      {
            "id": "l54_e18",
            "x": 4392,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4212,
            "maxX": 4572,
            "facing": 1
      },
      {
            "id": "l54_e19",
            "x": 4611,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4401,
            "maxX": 4821,
            "facing": -1
      },
      {
            "id": "l54_e20",
            "x": 4830,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4710,
            "maxX": 4950,
            "facing": 1
      },
      {
            "id": "l54_e21",
            "x": 5049,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4899,
            "maxX": 5199,
            "facing": -1
      },
      {
            "id": "l54_e22",
            "x": 5268,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5088,
            "maxX": 5448,
            "facing": 1
      },
      {
            "id": "l54_e23",
            "x": 5487,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5277,
            "maxX": 5697,
            "facing": -1
      },
      {
            "id": "l54_e24",
            "x": 5706,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5586,
            "maxX": 5826,
            "facing": 1
      },
      {
            "id": "l54_e25",
            "x": 5925,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5775,
            "maxX": 6075,
            "facing": -1
      },
      {
            "id": "l54_e26",
            "x": 6144,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5964,
            "maxX": 6324,
            "facing": 1
      }
],
    parTime: 147,
    threeStarScore: 13700
  },
  // ==========================================
  // LEVEL 55: SANDSTORM SKYWAY HORIZON
  // ==========================================
  {
    id: 55,
    title: "Level 55: Sandstorm Skyway Horizon",
    description: "Survive roaring sandstorm winds across an epic 6,500px desert flight corridor with endless chasm leaps.",
    worldWidth: 6666,
    worldHeight: 735,
    theme: THEMES.desert,
    playerStart: {"x":80,"y":480},
    goal: {"x":6486,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1800,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3600,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 5199,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l55_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l55_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l55_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l55_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_cp1_base",
            "x": 1740,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l55_p_cp1_high",
            "x": 1840,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l55_lift2",
            "x": 2020,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 2020,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l55_p2",
            "x": 2160,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_crumb3",
            "x": 2340,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_crumb4",
            "x": 2470,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_p3",
            "x": 2600,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_lift3",
            "x": 2760,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2760,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l55_spring2",
            "x": 2990,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l55_cp2_base",
            "x": 3540,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l55_p_cp2_high",
            "x": 3640,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l55_lift4",
            "x": 3820,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3820,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l55_p4",
            "x": 3970,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_crumb5",
            "x": 4140,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_crumb6",
            "x": 4270,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_p5",
            "x": 4400,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_lift5",
            "x": 4560,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4560,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l55_spring3",
            "x": 4780,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l55_cp3_base",
            "x": 5139,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l55_p_cp3_high",
            "x": 5239,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l55_lift6",
            "x": 5419,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5419,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l55_p6",
            "x": 5579,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_crumb7",
            "x": 5759,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_crumb8",
            "x": 5879,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l55_p7",
            "x": 5999,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l55_spring4",
            "x": 6159,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l55_goal_base",
            "x": 6406,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l55_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l55_spk2",
            "x": 1960,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l55_spk3",
            "x": 3760,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l55_spk4",
            "x": 5359,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l55_spk5",
            "x": 6146,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l55_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l55_saw2",
            "x": 2220,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2220,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l55_saw3",
            "x": 4040,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4040,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l55_saw4",
            "x": 5659,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5659,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l55_saw5",
            "x": 6266,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 6266,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l55_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l55_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_fuel2",
            "x": 1880,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_fuel3",
            "x": 2500,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_fuel4",
            "x": 3680,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_fuel5",
            "x": 4300,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_fuel6",
            "x": 5279,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_fuel7",
            "x": 5919,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_fuel8",
            "x": 6306,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l55_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l55_ammo1",
            "x": 1960,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l55_ammo2",
            "x": 3760,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l55_ammo3",
            "x": 5359,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l55_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l55_c1",
            "x": 729,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c2",
            "x": 1108,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c3",
            "x": 1487,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l55_c4",
            "x": 1866,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c5",
            "x": 2245,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c6",
            "x": 2624,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l55_c7",
            "x": 3003,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c8",
            "x": 3382,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c9",
            "x": 3761,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l55_c10",
            "x": 4140,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c11",
            "x": 4519,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c12",
            "x": 4898,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l55_c13",
            "x": 5277,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c14",
            "x": 5656,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l55_c15",
            "x": 6035,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l55_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l55_e1",
            "x": 663,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 513,
            "maxX": 813,
            "facing": -1
      },
      {
            "id": "l55_e2",
            "x": 876,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 696,
            "maxX": 1056,
            "facing": 1
      },
      {
            "id": "l55_e3",
            "x": 1089,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 879,
            "maxX": 1299,
            "facing": -1
      },
      {
            "id": "l55_e4",
            "x": 1302,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1182,
            "maxX": 1422,
            "facing": 1
      },
      {
            "id": "l55_e5",
            "x": 1515,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1365,
            "maxX": 1665,
            "facing": -1
      },
      {
            "id": "l55_e6",
            "x": 1728,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1548,
            "maxX": 1908,
            "facing": 1
      },
      {
            "id": "l55_e7",
            "x": 1941,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 1731,
            "maxX": 2151,
            "facing": -1
      },
      {
            "id": "l55_e8",
            "x": 2154,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2034,
            "maxX": 2274,
            "facing": 1
      },
      {
            "id": "l55_e9",
            "x": 2367,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2217,
            "maxX": 2517,
            "facing": -1
      },
      {
            "id": "l55_e10",
            "x": 2580,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2400,
            "maxX": 2760,
            "facing": 1
      },
      {
            "id": "l55_e11",
            "x": 2793,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2583,
            "maxX": 3003,
            "facing": -1
      },
      {
            "id": "l55_e12",
            "x": 3006,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2886,
            "maxX": 3126,
            "facing": 1
      },
      {
            "id": "l55_e13",
            "x": 3219,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3069,
            "maxX": 3369,
            "facing": -1
      },
      {
            "id": "l55_e14",
            "x": 3432,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3252,
            "maxX": 3612,
            "facing": 1
      },
      {
            "id": "l55_e15",
            "x": 3645,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3435,
            "maxX": 3855,
            "facing": -1
      },
      {
            "id": "l55_e16",
            "x": 3858,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 3738,
            "maxX": 3978,
            "facing": 1
      },
      {
            "id": "l55_e17",
            "x": 4071,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3921,
            "maxX": 4221,
            "facing": -1
      },
      {
            "id": "l55_e18",
            "x": 4284,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4104,
            "maxX": 4464,
            "facing": 1
      },
      {
            "id": "l55_e19",
            "x": 4497,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 4287,
            "maxX": 4707,
            "facing": -1
      },
      {
            "id": "l55_e20",
            "x": 4710,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4590,
            "maxX": 4830,
            "facing": 1
      },
      {
            "id": "l55_e21",
            "x": 4923,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4773,
            "maxX": 5073,
            "facing": -1
      },
      {
            "id": "l55_e22",
            "x": 5136,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4956,
            "maxX": 5316,
            "facing": 1
      },
      {
            "id": "l55_e23",
            "x": 5349,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5139,
            "maxX": 5559,
            "facing": -1
      },
      {
            "id": "l55_e24",
            "x": 5562,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5442,
            "maxX": 5682,
            "facing": 1
      },
      {
            "id": "l55_e25",
            "x": 5775,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 5625,
            "maxX": 5925,
            "facing": -1
      },
      {
            "id": "l55_e26",
            "x": 5988,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 5808,
            "maxX": 6168,
            "facing": 1
      },
      {
            "id": "l55_e27",
            "x": 6201,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5991,
            "maxX": 6411,
            "facing": -1
      }
],
    parTime: 149,
    threeStarScore: 13900
  },
  // ==========================================
  // LEVEL 56: CELESTIAL FORTRESS HORIZON
  // ==========================================
  {
    id: 56,
    title: "Level 56: Celestial Fortress Horizon",
    description: "A breathtaking high-altitude fortress with multi-tiered cloudways, 28 enemies, and soaring flight paths.",
    worldWidth: 6724,
    worldHeight: 660,
    theme: THEMES.sky,
    playerStart: {"x":80,"y":480},
    goal: {"x":6544,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1815,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3631,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 5245,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l56_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l56_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l56_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l56_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_cp1_base",
            "x": 1755,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l56_p_cp1_high",
            "x": 1855,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l56_lift2",
            "x": 2035,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 2035,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l56_p2",
            "x": 2175,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_crumb3",
            "x": 2355,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_crumb4",
            "x": 2485,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_p3",
            "x": 2615,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_lift3",
            "x": 2775,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2775,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l56_spring2",
            "x": 3005,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l56_cp2_base",
            "x": 3571,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l56_p_cp2_high",
            "x": 3671,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l56_lift4",
            "x": 3851,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3851,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l56_p4",
            "x": 4001,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_crumb5",
            "x": 4171,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_crumb6",
            "x": 4301,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_p5",
            "x": 4431,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_lift5",
            "x": 4591,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4591,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l56_spring3",
            "x": 4811,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l56_cp3_base",
            "x": 5185,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l56_p_cp3_high",
            "x": 5285,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l56_lift6",
            "x": 5465,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5465,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l56_p6",
            "x": 5625,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_crumb7",
            "x": 5805,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_crumb8",
            "x": 5925,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l56_p7",
            "x": 6045,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l56_spring4",
            "x": 6205,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l56_goal_base",
            "x": 6464,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l56_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l56_spk2",
            "x": 1975,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l56_spk3",
            "x": 3791,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l56_spk4",
            "x": 5405,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l56_spk5",
            "x": 6204,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l56_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l56_saw2",
            "x": 2235,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2235,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l56_saw3",
            "x": 4071,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4071,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l56_saw4",
            "x": 5705,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5705,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l56_saw5",
            "x": 6324,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 6324,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l56_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l56_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_fuel2",
            "x": 1895,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_fuel3",
            "x": 2515,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_fuel4",
            "x": 3711,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_fuel5",
            "x": 4331,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_fuel6",
            "x": 5325,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_fuel7",
            "x": 5965,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_fuel8",
            "x": 6364,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l56_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l56_c1",
            "x": 733,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c2",
            "x": 1116,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c3",
            "x": 1499,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l56_c4",
            "x": 1882,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c5",
            "x": 2265,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c6",
            "x": 2648,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l56_c7",
            "x": 3031,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c8",
            "x": 3414,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c9",
            "x": 3797,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l56_c10",
            "x": 4180,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c11",
            "x": 4563,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c12",
            "x": 4946,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l56_c13",
            "x": 5329,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c14",
            "x": 5712,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l56_c15",
            "x": 6095,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l56_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l56_e1",
            "x": 724,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 574,
            "maxX": 874,
            "facing": -1
      },
      {
            "id": "l56_e2",
            "x": 998,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 818,
            "maxX": 1178,
            "facing": 1
      },
      {
            "id": "l56_e3",
            "x": 1272,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1062,
            "maxX": 1482,
            "facing": -1
      },
      {
            "id": "l56_e4",
            "x": 1546,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1426,
            "maxX": 1666,
            "facing": 1
      },
      {
            "id": "l56_e5",
            "x": 1820,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1670,
            "maxX": 1970,
            "facing": -1
      },
      {
            "id": "l56_e6",
            "x": 2094,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1914,
            "maxX": 2274,
            "facing": 1
      },
      {
            "id": "l56_e7",
            "x": 2368,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2158,
            "maxX": 2578,
            "facing": -1
      },
      {
            "id": "l56_e8",
            "x": 2642,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2522,
            "maxX": 2762,
            "facing": 1
      },
      {
            "id": "l56_e9",
            "x": 2916,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2766,
            "maxX": 3066,
            "facing": -1
      },
      {
            "id": "l56_e10",
            "x": 3190,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3010,
            "maxX": 3370,
            "facing": 1
      },
      {
            "id": "l56_e11",
            "x": 3464,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3254,
            "maxX": 3674,
            "facing": -1
      },
      {
            "id": "l56_e12",
            "x": 3738,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3618,
            "maxX": 3858,
            "facing": 1
      },
      {
            "id": "l56_e13",
            "x": 4012,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3862,
            "maxX": 4162,
            "facing": -1
      },
      {
            "id": "l56_e14",
            "x": 4286,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 4106,
            "maxX": 4466,
            "facing": 1
      },
      {
            "id": "l56_e15",
            "x": 4560,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4350,
            "maxX": 4770,
            "facing": -1
      },
      {
            "id": "l56_e16",
            "x": 4834,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4714,
            "maxX": 4954,
            "facing": 1
      },
      {
            "id": "l56_e17",
            "x": 5108,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4958,
            "maxX": 5258,
            "facing": -1
      },
      {
            "id": "l56_e18",
            "x": 5382,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5202,
            "maxX": 5562,
            "facing": 1
      },
      {
            "id": "l56_e19",
            "x": 5656,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5446,
            "maxX": 5866,
            "facing": -1
      },
      {
            "id": "l56_e20",
            "x": 5930,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 5810,
            "maxX": 6050,
            "facing": 1
      },
      {
            "id": "l56_e21",
            "x": 6204,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 6054,
            "maxX": 6354,
            "facing": -1
      }
],
    parTime: 151,
    threeStarScore: 14100
  },
  // ==========================================
  // LEVEL 57: THE GRAND JETPACK ODYSSEY FINALE
  // ==========================================
  {
    id: 57,
    title: "Level 57: The Grand Jetpack Odyssey Finale",
    description: "The ultimate 6,800px master challenge! Jetpack, Blaster, and Shield united against 30 enemies in a legendary showdown!",
    worldWidth: 6782,
    worldHeight: 685,
    theme: THEMES.cyber,
    playerStart: {"x":80,"y":480},
    goal: {"x":6602,"y":240,"width":44,"height":60},
    checkpoints: [
      {
            "x": 1831,
            "y": 340,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 3662,
            "y": 320,
            "width": 32,
            "height": 48,
            "activated": false
      },
      {
            "x": 5290,
            "y": 300,
            "width": 32,
            "height": 48,
            "activated": false
      }
],
    platforms: [
      {
            "id": "l57_p_start",
            "x": 0,
            "y": 520,
            "width": 440,
            "height": 140,
            "type": "solid"
      },
      {
            "id": "l57_p_intro1",
            "x": 220,
            "y": 420,
            "width": 110,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_p_intro2",
            "x": 380,
            "y": 360,
            "width": 100,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_p1",
            "x": 580,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_crumb1",
            "x": 740,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_crumb2",
            "x": 860,
            "y": 300,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_spring1",
            "x": 990,
            "y": 410,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l57_lift1",
            "x": 1140,
            "y": 360,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 1140,
            "startY": 360,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.2,
            "vx": 2.2,
            "vy": 0
      },
      {
            "id": "l57_sky1",
            "x": 1360,
            "y": 220,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_cp1_base",
            "x": 1771,
            "y": 400,
            "width": 240,
            "height": 260,
            "type": "solid"
      },
      {
            "id": "l57_p_cp1_high",
            "x": 1871,
            "y": 280,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l57_lift2",
            "x": 2051,
            "y": 420,
            "width": 90,
            "height": 22,
            "type": "solid",
            "startX": 2051,
            "startY": 420,
            "distanceX": 0,
            "distanceY": -190,
            "speed": 2.3,
            "vx": 0,
            "vy": -2.3
      },
      {
            "id": "l57_p2",
            "x": 2191,
            "y": 240,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_crumb3",
            "x": 2371,
            "y": 290,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_crumb4",
            "x": 2501,
            "y": 330,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_p3",
            "x": 2631,
            "y": 380,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_lift3",
            "x": 2791,
            "y": 340,
            "width": 105,
            "height": 22,
            "type": "solid",
            "startX": 2791,
            "startY": 340,
            "distanceX": 190,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l57_spring2",
            "x": 3021,
            "y": 270,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l57_cp2_base",
            "x": 3602,
            "y": 380,
            "width": 240,
            "height": 280,
            "type": "solid"
      },
      {
            "id": "l57_p_cp2_high",
            "x": 3702,
            "y": 250,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l57_lift4",
            "x": 3882,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 3882,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -210,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l57_p4",
            "x": 4032,
            "y": 220,
            "width": 125,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_crumb5",
            "x": 4202,
            "y": 270,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_crumb6",
            "x": 4332,
            "y": 310,
            "width": 85,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_p5",
            "x": 4462,
            "y": 360,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_lift5",
            "x": 4622,
            "y": 320,
            "width": 100,
            "height": 22,
            "type": "solid",
            "startX": 4622,
            "startY": 320,
            "distanceX": 180,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l57_spring3",
            "x": 4842,
            "y": 260,
            "width": 90,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l57_cp3_base",
            "x": 5230,
            "y": 360,
            "width": 240,
            "height": 300,
            "type": "solid"
      },
      {
            "id": "l57_p_cp3_high",
            "x": 5330,
            "y": 230,
            "width": 100,
            "height": 20,
            "type": "one-way"
      },
      {
            "id": "l57_lift6",
            "x": 5510,
            "y": 440,
            "width": 95,
            "height": 22,
            "type": "solid",
            "startX": 5510,
            "startY": 440,
            "distanceX": 0,
            "distanceY": -220,
            "speed": 2.4,
            "vx": 0,
            "vy": -2.4
      },
      {
            "id": "l57_p6",
            "x": 5670,
            "y": 210,
            "width": 130,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_crumb7",
            "x": 5850,
            "y": 260,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_crumb8",
            "x": 5970,
            "y": 310,
            "width": 80,
            "height": 20,
            "type": "crumbling"
      },
      {
            "id": "l57_p7",
            "x": 6090,
            "y": 350,
            "width": 120,
            "height": 20,
            "type": "solid"
      },
      {
            "id": "l57_spring4",
            "x": 6250,
            "y": 260,
            "width": 100,
            "height": 20,
            "type": "bouncy"
      },
      {
            "id": "l57_goal_base",
            "x": 6522,
            "y": 300,
            "width": 260,
            "height": 360,
            "type": "solid"
      }
],
    hazards: [
      {
            "id": "l57_spk1",
            "x": 440,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l57_spk2",
            "x": 1991,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l57_spk3",
            "x": 3822,
            "y": 600,
            "width": 220,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l57_spk4",
            "x": 5450,
            "y": 600,
            "width": 240,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l57_spk5",
            "x": 6262,
            "y": 600,
            "width": 260,
            "height": 20,
            "type": "spike"
      },
      {
            "id": "l57_saw1",
            "x": 780,
            "y": 220,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 780,
            "startY": 220,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.2,
            "vx": 0,
            "vy": 2.2
      },
      {
            "id": "l57_saw2",
            "x": 2251,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 2251,
            "startY": 180,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.3,
            "vx": 2.3,
            "vy": 0
      },
      {
            "id": "l57_saw3",
            "x": 4102,
            "y": 190,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 4102,
            "startY": 190,
            "distanceX": 0,
            "distanceY": 100,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      },
      {
            "id": "l57_saw4",
            "x": 5750,
            "y": 170,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 5750,
            "startY": 170,
            "distanceX": 100,
            "distanceY": 0,
            "speed": 2.4,
            "vx": 2.4,
            "vy": 0
      },
      {
            "id": "l57_saw5",
            "x": 6382,
            "y": 180,
            "width": 44,
            "height": 44,
            "type": "saw",
            "startX": 6382,
            "startY": 180,
            "distanceX": 0,
            "distanceY": 90,
            "speed": 2.3,
            "vx": 0,
            "vy": 2.3
      }
],
    collectibles: [
      {
            "id": "l57_jetpack",
            "x": 250,
            "y": 386,
            "width": 28,
            "height": 28,
            "type": "jetpack",
            "value": 1000
      },
      {
            "id": "l57_fuel1",
            "x": 880,
            "y": 260,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_fuel2",
            "x": 1911,
            "y": 246,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_fuel3",
            "x": 2531,
            "y": 290,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_fuel4",
            "x": 3742,
            "y": 216,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_fuel5",
            "x": 4362,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_fuel6",
            "x": 5370,
            "y": 196,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_fuel7",
            "x": 6010,
            "y": 270,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_fuel8",
            "x": 6422,
            "y": 220,
            "width": 22,
            "height": 22,
            "type": "jetpack_fuel",
            "value": 200
      },
      {
            "id": "l57_blaster",
            "x": 410,
            "y": 326,
            "width": 28,
            "height": 28,
            "type": "blaster",
            "value": 800
      },
      {
            "id": "l57_ammo1",
            "x": 1991,
            "y": 350,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l57_ammo2",
            "x": 3822,
            "y": 330,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l57_ammo3",
            "x": 5450,
            "y": 310,
            "width": 24,
            "height": 24,
            "type": "blaster_ammo",
            "value": 300
      },
      {
            "id": "l57_shield",
            "x": 4072,
            "y": 186,
            "width": 28,
            "height": 28,
            "type": "bubble_shield",
            "value": 800
      },
      {
            "id": "l57_c0",
            "x": 350,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l57_c1",
            "x": 736,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c2",
            "x": 1122,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c3",
            "x": 1508,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l57_c4",
            "x": 1894,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c5",
            "x": 2280,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c6",
            "x": 2666,
            "y": 290,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l57_c7",
            "x": 3052,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c8",
            "x": 3438,
            "y": 180,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c9",
            "x": 3824,
            "y": 235,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l57_c10",
            "x": 4210,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c11",
            "x": 4596,
            "y": 345,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c12",
            "x": 4982,
            "y": 180,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      },
      {
            "id": "l57_c13",
            "x": 5368,
            "y": 235,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c14",
            "x": 5754,
            "y": 290,
            "width": 20,
            "height": 20,
            "type": "coin",
            "value": 100
      },
      {
            "id": "l57_c15",
            "x": 6140,
            "y": 345,
            "width": 24,
            "height": 24,
            "type": "gem",
            "value": 500
      }
],
    enemies: [
      {
            "id": "l57_e0",
            "x": 450,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 330,
            "maxX": 570,
            "facing": 1
      },
      {
            "id": "l57_e1",
            "x": 714,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 564,
            "maxX": 864,
            "facing": -1
      },
      {
            "id": "l57_e2",
            "x": 978,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 798,
            "maxX": 1158,
            "facing": 1
      },
      {
            "id": "l57_e3",
            "x": 1242,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1032,
            "maxX": 1452,
            "facing": -1
      },
      {
            "id": "l57_e4",
            "x": 1506,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 1386,
            "maxX": 1626,
            "facing": 1
      },
      {
            "id": "l57_e5",
            "x": 1770,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 1620,
            "maxX": 1920,
            "facing": -1
      },
      {
            "id": "l57_e6",
            "x": 2034,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 1854,
            "maxX": 2214,
            "facing": 1
      },
      {
            "id": "l57_e7",
            "x": 2298,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 2088,
            "maxX": 2508,
            "facing": -1
      },
      {
            "id": "l57_e8",
            "x": 2562,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 2442,
            "maxX": 2682,
            "facing": 1
      },
      {
            "id": "l57_e9",
            "x": 2826,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 2676,
            "maxX": 2976,
            "facing": -1
      },
      {
            "id": "l57_e10",
            "x": 3090,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 2910,
            "maxX": 3270,
            "facing": 1
      },
      {
            "id": "l57_e11",
            "x": 3354,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 3144,
            "maxX": 3564,
            "facing": -1
      },
      {
            "id": "l57_e12",
            "x": 3618,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 3498,
            "maxX": 3738,
            "facing": 1
      },
      {
            "id": "l57_e13",
            "x": 3882,
            "y": 265,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 3732,
            "maxX": 4032,
            "facing": -1
      },
      {
            "id": "l57_e14",
            "x": 4146,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 3966,
            "maxX": 4326,
            "facing": 1
      },
      {
            "id": "l57_e15",
            "x": 4410,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 4200,
            "maxX": 4620,
            "facing": -1
      },
      {
            "id": "l57_e16",
            "x": 4674,
            "y": 175,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 4554,
            "maxX": 4794,
            "facing": 1
      },
      {
            "id": "l57_e17",
            "x": 4938,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.65,
            "vy": 0,
            "minX": 4788,
            "maxX": 5088,
            "facing": -1
      },
      {
            "id": "l57_e18",
            "x": 5202,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5022,
            "maxX": 5382,
            "facing": 1
      },
      {
            "id": "l57_e19",
            "x": 5466,
            "y": 310,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 2.15,
            "vy": 0,
            "minX": 5256,
            "maxX": 5676,
            "facing": -1
      },
      {
            "id": "l57_e20",
            "x": 5730,
            "y": 130,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.4,
            "vy": 0,
            "minX": 5610,
            "maxX": 5850,
            "facing": 1
      },
      {
            "id": "l57_e21",
            "x": 5994,
            "y": 380,
            "width": 28,
            "height": 24,
            "type": "slime",
            "vx": 1.2,
            "vy": 0,
            "minX": 5844,
            "maxX": 6144,
            "facing": -1
      },
      {
            "id": "l57_e22",
            "x": 6258,
            "y": 220,
            "width": 26,
            "height": 22,
            "type": "flyer",
            "vx": 1.9,
            "vy": 0,
            "minX": 6078,
            "maxX": 6438,
            "facing": 1
      }
],
    parTime: 153,
    threeStarScore: 14300
  }
];
