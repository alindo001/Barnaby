import { LevelData } from '../../types/game';
import { THEMES } from '../themes';

export const WORLD_1_LEVELS: LevelData[] = [
  {
    id: 1,
    title: "1. Emerald Foothills & Sky Canopy",
    worldNumber: 1,
    worldName: "Emerald Woodlands",
    gameplayType: "runner",
    category: "classic",
    description: "Welcome to Emerald Woodlands! Acclimate to core mechanics: explore highs and lows, soar on spring mushrooms, ride scenic rafts, and dodge gentle critters.",
    worldWidth: 3800,
    worldHeight: 750,
    theme: THEMES.meadow,
    playerStart: { x: 80, y: 460 },
    goal: { x: 3700, y: 320, width: 44, height: 60 },
    checkpoints: [
      { x: 1570, y: 280, width: 30, height: 40, activated: false },
      { x: 2980, y: 320, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ZONE 1: Rolling Foothills (Ground running & jump arcs)
      { id: "l1_start_meadow", x: 0, y: 520, width: 420, height: 230, type: "solid" },
      { id: "l1_step1", x: 460, y: 480, width: 120, height: 270, type: "solid" },
      { id: "l1_step2", x: 610, y: 440, width: 130, height: 310, type: "solid" },

      // ZONE 2: The Springwood Hollow & Sky Canopy (Vertical launch & elevation fork)
      { id: "l1_spring_canopy", x: 700, y: 424, width: 44, height: 16, type: "bouncy" },
      // High Path: Treetop Canopy
      { id: "l1_canopy1", x: 770, y: 240, width: 170, height: 22, type: "solid" },
      { id: "l1_canopy2", x: 980, y: 200, width: 160, height: 22, type: "solid" },
      { id: "l1_canopy_drop", x: 1180, y: 290, width: 90, height: 16, type: "one-way" },
      // Low Path: Sunken Fern Glen
      { id: "l1_glen_floor", x: 780, y: 650, width: 460, height: 100, type: "solid" },
      { id: "l1_glen_spring", x: 1190, y: 634, width: 44, height: 16, type: "bouncy" },

      // ZONE 3: Timber Lookout Tower & Checkpoint 1 (One-way platforms & stomp basics)
      { id: "l1_mid_approach", x: 1310, y: 480, width: 170, height: 270, type: "solid" },
      { id: "l1_tower_tier1", x: 1510, y: 420, width: 130, height: 16, type: "one-way" },
      { id: "l1_tower_tier2", x: 1530, y: 320, width: 130, height: 16, type: "one-way" },
      { id: "l1_tower_deck", x: 1490, y: 220, width: 170, height: 20, type: "solid" },
      { id: "l1_tower_base", x: 1690, y: 480, width: 240, height: 270, type: "solid" },

      // ZONE 4: Whispering Gorge & Ferry Crossing (Moving platforms & subterranean grotto)
      // High Route: Moving Ferry
      { id: "l1_ferry", x: 2010, y: 400, width: 96, height: 18, type: "solid", startX: 2010, startY: 400, distanceX: 230, distanceY: 0, speed: 1.3, vx: 1.3, vy: 0 },
      // Low Route: Creek Bed Stepping Stones
      { id: "l1_creek_stone1", x: 2060, y: 680, width: 60, height: 30, type: "solid" },
      { id: "l1_creek_stone2", x: 2180, y: 660, width: 70, height: 30, type: "solid" },
      { id: "l1_creek_stone3", x: 2310, y: 680, width: 60, height: 30, type: "solid" },
      { id: "l1_creek_spring", x: 2380, y: 664, width: 44, height: 16, type: "bouncy" },
      { id: "l1_gorge_shore", x: 2450, y: 440, width: 170, height: 310, type: "solid" },

      // ZONE 5: Crumbling Autumn Bridge & Aviary Roost (Crumbling mechanics with safety net)
      { id: "l1_crumb1", x: 2660, y: 420, width: 64, height: 16, type: "crumbling" },
      { id: "l1_crumb2", x: 2750, y: 390, width: 64, height: 16, type: "crumbling" },
      { id: "l1_crumb3", x: 2840, y: 360, width: 64, height: 16, type: "crumbling" },
      // Safety bank below
      { id: "l1_safety_bank", x: 2660, y: 600, width: 220, height: 150, type: "solid" },
      { id: "l1_safety_spring", x: 2820, y: 584, width: 44, height: 16, type: "bouncy" },
      // Roost Landing Ridge
      { id: "l1_roost_hill", x: 2940, y: 360, width: 220, height: 390, type: "solid" },
      { id: "l1_roost_high", x: 3040, y: 240, width: 90, height: 18, type: "one-way" },

      // ZONE 6: Sky Isles, Valley Trail & Grand Summit (Mastery synthesis)
      // High Sky Isles
      { id: "l1_sky_isle1", x: 3280, y: 240, width: 80, height: 18, type: "one-way" },
      { id: "l1_sky_isle2", x: 3410, y: 170, width: 90, height: 20, type: "solid" },
      { id: "l1_sky_isle3", x: 3540, y: 220, width: 80, height: 18, type: "one-way" },
      // Low Valley Trail
      { id: "l1_valley_floor", x: 3240, y: 520, width: 260, height: 230, type: "solid" },
      { id: "l1_valley_spring", x: 3440, y: 504, width: 44, height: 16, type: "bouncy" },
      // Summit Pedestal
      { id: "l1_summit_step1", x: 3540, y: 440, width: 80, height: 310, type: "solid" },
      { id: "l1_summit_top", x: 3640, y: 380, width: 160, height: 370, type: "solid" }
    ],
    hazards: [
      // Creek bed water hazard between stepping stones (gentle, well-spaced)
      { id: "l1_creek_water", x: 2000, y: 730, width: 440, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns (Hidden at High & Low elevation secrets)
      { id: "l1_acorn1", x: 850, y: 170, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l1_acorn2", x: 2200, y: 600, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l1_acorn3", x: 3440, y: 110, width: 26, height: 26, type: "acorn", value: 1500 },

      // Zone 1 Jump Tutorial Coins & Emerald Gem
      { id: "l1_c1", x: 180, y: 460, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c2", x: 250, y: 430, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c3", x: 320, y: 460, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_g1", x: 510, y: 410, width: 24, height: 24, type: "gem", value: 500 },

      // Zone 2 High Canopy Gem & Low Glen Coins
      { id: "l1_g2", x: 1050, y: 140, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l1_c4", x: 840, y: 600, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c5", x: 930, y: 600, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c6", x: 1020, y: 600, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c7", x: 1110, y: 600, width: 20, height: 20, type: "coin", value: 100 },

      // Zone 3 Tower Climb Coins & Speed Boost Powerup
      { id: "l1_c8", x: 1570, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c9", x: 1570, y: 170, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_speed_boost", x: 1520, y: 170, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l1_c10", x: 1760, y: 430, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c11", x: 1840, y: 430, width: 20, height: 20, type: "coin", value: 100 },

      // Zone 4 Ferry Ferry Coins & Blue Gem
      { id: "l1_c12", x: 2070, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c13", x: 2170, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_g3", x: 2520, y: 390, width: 24, height: 24, type: "gem", value: 500 },

      // Zone 5 Safety Bank Coins & Jetpack Discovery
      { id: "l1_c14", x: 2700, y: 550, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c15", x: 2760, y: 550, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_jetpack", x: 3070, y: 190, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l1_fuel1", x: 3220, y: 240, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Zone 6 Sky Isles Gem, Valley Coins & Summit Trophies
      { id: "l1_g4", x: 3560, y: 160, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l1_c16", x: 3290, y: 470, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c17", x: 3360, y: 470, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_c18", x: 3660, y: 330, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l1_g5", x: 3710, y: 250, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l1_c19", x: 3760, y: 330, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Acclimating low-level enemies with generous pacing and clear tells
      { id: "l1_e_slime1", x: 260, y: 496, width: 28, height: 24, type: "slime", vx: 0.6, vy: 0, minX: 180, maxX: 360, facing: 1 },
      { id: "l1_e_frog1", x: 920, y: 624, width: 26, height: 24, type: "frog", vx: 0.7, vy: 0, minX: 840, maxX: 1060, facing: 1 },
      { id: "l1_e_pigeon1", x: 1080, y: 150, width: 26, height: 22, type: "pigeon", vx: 0.9, vy: 0, minX: 1000, maxX: 1160, facing: -1 },
      { id: "l1_e_hedge1", x: 1750, y: 454, width: 26, height: 24, type: "hedgehog", vx: 0.75, vy: 0, minX: 1710, maxX: 1880, facing: 1 },
      { id: "l1_e_slime2", x: 2490, y: 416, width: 28, height: 24, type: "slime", vx: 0.65, vy: 0, minX: 2460, maxX: 2590, facing: -1 },
      { id: "l1_e_pigeon2", x: 2820, y: 220, width: 26, height: 22, type: "pigeon", vx: 0.95, vy: 0, minX: 2740, maxX: 2910, facing: 1 },
      { id: "l1_e_anteater1", x: 3020, y: 334, width: 30, height: 26, type: "anteater", vx: 0.65, vy: 0, minX: 2960, maxX: 3120, facing: 1 },
      { id: "l1_e_frog2", x: 3310, y: 494, width: 26, height: 24, type: "frog", vx: 0.75, vy: 0, minX: 3260, maxX: 3420, facing: 1 }
    ],
    parTime: 65,
    threeStarScore: 6500
  },
  {
    id: 2,
    title: "2. Crystal Caverns: The Towering Ascent",
    worldNumber: 1,
    worldName: "Emerald Woodlands & Caverns",
    gameplayType: "terrain",
    category: "classic",
    description: "Scale the towering crystalline peaks! Navigate 5 vertical layers of sheer cliff faces, ride crystal elevator shafts, solve scalable switchbacks, and conquer the sky summit.",
    worldWidth: 4000,
    worldHeight: 880,
    theme: THEMES.cavern,
    playerStart: { x: 80, y: 760 },
    goal: { x: 3880, y: 220, width: 44, height: 60 },
    checkpoints: [
      { x: 1360, y: 200, width: 30, height: 40, activated: false },
      { x: 2560, y: 340, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: The Cavern Floor & The Great Obsidian Pillar (x: 0 to 800)
      // ==========================================
      { id: "l2_start_floor", x: 0, y: 800, width: 340, height: 80, type: "solid" },
      { id: "l2_step1", x: 380, y: 750, width: 90, height: 130, type: "solid" },
      { id: "l2_step2", x: 500, y: 690, width: 90, height: 190, type: "solid" },
      // The towering 340px Obsidian Wall
      { id: "l2_wall_base", x: 630, y: 460, width: 140, height: 420, type: "solid" },
      // Scalable switchback nooks and ledges to conquer the wall
      { id: "l2_spring_alcove", x: 420, y: 840, width: 110, height: 40, type: "solid" },
      { id: "l2_spring1", x: 450, y: 824, width: 44, height: 16, type: "bouncy" },
      { id: "l2_climb_ledge1", x: 520, y: 580, width: 80, height: 14, type: "one-way" },
      { id: "l2_climb_ledge2", x: 430, y: 500, width: 80, height: 14, type: "one-way" },
      // Secret Golden Acorn underhang ledge
      { id: "l2_secret_ledge1", x: 240, y: 620, width: 70, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 2: Vertical Crystal Elevator Shaft & Spire Ascent (x: 800 to 1600)
      // ==========================================
      // Vertical crystal elevator gliding up the sheer mountain shaft
      { id: "l2_elev1", x: 840, y: 620, width: 90, height: 18, type: "solid", startX: 840, startY: 620, distanceX: 0, distanceY: -260, speed: 1.5, vx: 0, vy: -1.5 },
      // Ascending crumbling crystal stepping stones up the cliff
      { id: "l2_crumb1", x: 990, y: 340, width: 65, height: 18, type: "crumbling" },
      { id: "l2_crumb2", x: 1090, y: 300, width: 65, height: 18, type: "crumbling" },
      { id: "l2_crumb3", x: 1190, y: 260, width: 65, height: 18, type: "crumbling" },
      // Lower safety net terrace with launch geode
      { id: "l2_safety_terrace1", x: 960, y: 560, width: 220, height: 24, type: "solid" },
      { id: "l2_safety_spring1", x: 1120, y: 544, width: 44, height: 16, type: "bouncy" },
      // High Spire Terrace (Checkpoint 1)
      { id: "l2_spire_plat", x: 1300, y: 240, width: 220, height: 30, type: "solid" },

      // ==========================================
      // LAYER 3: Hanging Stalactite Bridges & Deep Echo Grotto (x: 1550 to 2400)
      // ==========================================
      // High suspended bridges across the abyss
      { id: "l2_stalactite1", x: 1580, y: 260, width: 110, height: 20, type: "one-way" },
      { id: "l2_stalactite2", x: 1750, y: 220, width: 120, height: 20, type: "solid" },
      { id: "l2_stalactite3", x: 1940, y: 200, width: 110, height: 20, type: "one-way" },
      { id: "l2_stalactite4", x: 2120, y: 240, width: 120, height: 22, type: "solid" },
      { id: "l2_stalactite_drop", x: 2300, y: 320, width: 90, height: 18, type: "one-way" },
      // Deep Echo Grotto stepping stones across the crystal pool
      { id: "l2_pool_stone1", x: 1740, y: 780, width: 60, height: 24, type: "solid" },
      { id: "l2_pool_stone2", x: 1880, y: 760, width: 70, height: 24, type: "solid" },
      { id: "l2_pool_stone3", x: 2030, y: 760, width: 80, height: 24, type: "solid" },
      { id: "l2_pool_stone4", x: 2180, y: 780, width: 60, height: 24, type: "solid" },
      // Grotto ascent spring and transit ledge back to high bridges
      { id: "l2_grotto_spring", x: 2240, y: 764, width: 44, height: 16, type: "bouncy" },
      { id: "l2_mid_ledge1", x: 2200, y: 540, width: 140, height: 24, type: "solid" },
      { id: "l2_mid_spring", x: 2280, y: 524, width: 44, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 4: 3-Tier Switchback Fortress (x: 2400 to 3250)
      // ==========================================
      // Tier 1: Lower Entry Terrace
      { id: "l2_fort_tier1", x: 2420, y: 540, width: 240, height: 24, type: "solid" },
      // Moving Ferry to Rock Buttress
      { id: "l2_fort_ferry", x: 2690, y: 520, width: 90, height: 18, type: "solid", startX: 2690, startY: 520, distanceX: 160, distanceY: 0, speed: 1.4, vx: 1.4, vy: 0 },
      { id: "l2_buttress1", x: 2880, y: 520, width: 80, height: 200, type: "solid" },
      // Vertical one-way ladders to Tier 2
      { id: "l2_ladder1", x: 2890, y: 440, width: 60, height: 14, type: "one-way" },
      { id: "l2_ladder2", x: 2890, y: 360, width: 60, height: 14, type: "one-way" },
      // Tier 2: Mid Fortress Gallery (Checkpoint 2)
      { id: "l2_fort_tier2", x: 2520, y: 380, width: 340, height: 24, type: "solid" },
      // Vertical Elevator to Tier 3
      { id: "l2_elev2", x: 2450, y: 360, width: 80, height: 16, type: "solid", startX: 2450, startY: 360, distanceX: 0, distanceY: -180, speed: 1.4, vx: 0, vy: -1.4 },
      // Tier 3: High Lookout & Jetpack Roost
      { id: "l2_fort_tier3", x: 2540, y: 200, width: 280, height: 24, type: "solid" },
      { id: "l2_roost_perch", x: 2860, y: 160, width: 90, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 5: Grand Sky Pinnacle Summit (x: 3100 to 4000)
      // ==========================================
      // LAYER 5: Grand Sky Pinnacle Summit (x: 3100 to 4000)
      // ==========================================
      // Stepped mountain monoliths with open cavern underpass below!
      { id: "l2_summit_step1", x: 3150, y: 360, width: 100, height: 160, type: "solid" },
      { id: "l2_summit_step2", x: 3290, y: 280, width: 110, height: 240, type: "solid" },
      { id: "l2_summit_step3", x: 3440, y: 200, width: 120, height: 320, type: "solid" },
      // Highest Sky Needle
      { id: "l2_sky_needle", x: 3580, y: 140, width: 70, height: 20, type: "one-way" },
      // Suspended crumbling arch
      { id: "l2_summit_crumb1", x: 3670, y: 170, width: 60, height: 16, type: "crumbling" },
      // Lower Valley Below Pinnacle with rescue spring (wide continuous underpass under monoliths)
      { id: "l2_summit_crumb2", x: 3750, y: 200, width: 60, height: 16, type: "crumbling" },
      // Goal Peak
      { id: "l2_summit_goal_base", x: 3830, y: 280, width: 170, height: 480, type: "solid" },
      // Lower Valley Below Pinnacle with rescue spring (wide continuous underpass under monoliths)
      { id: "l2_summit_lower", x: 3000, y: 680, width: 680, height: 120, type: "solid" },
      { id: "l2_summit_valley_spring", x: 3600, y: 664, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      { id: "l2_chasm_spikes1", x: 770, y: 860, width: 560, height: 20, type: "spike" },
      { id: "l2_crystal_pool", x: 1660, y: 840, width: 620, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns hidden at scalable secrets
      { id: "l2_acorn1", x: 260, y: 560, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l2_acorn2", x: 2060, y: 710, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l2_acorn3", x: 3600, y: 90, width: 26, height: 26, type: "acorn", value: 1500 },

      // Layer 1: Starting Floor & Wall Climb
      { id: "l2_c1", x: 160, y: 750, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c2", x: 240, y: 730, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_g1", x: 530, y: 630, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 2: Elevator Shaft & Spire
      { id: "l2_c3", x: 880, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c4", x: 1020, y: 280, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c5", x: 1120, y: 240, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_g2", x: 1440, y: 180, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 3: High Stalactite Bridges & Echo Grotto
      { id: "l2_power_jump", x: 1800, y: 170, width: 24, height: 24, type: "powerup_jump", value: 400 },
      { id: "l2_c6", x: 1630, y: 210, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c7", x: 1890, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c8", x: 2180, y: 190, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c9", x: 1760, y: 720, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c10", x: 1910, y: 700, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 4: Fortress Switchbacks & Jetpack Roost
      { id: "l2_c11", x: 2600, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c12", x: 2780, y: 460, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_g3", x: 2700, y: 330, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l2_c13", x: 2640, y: 150, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c14", x: 2780, y: 150, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_jetpack", x: 2890, y: 110, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l2_fuel1", x: 3040, y: 160, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Layer 5: Grand Sky Pinnacle Summit (Coins positioned in open underpass under monoliths!)
      { id: "l2_c15", x: 3200, y: 640, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c16", x: 3340, y: 640, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c17", x: 3480, y: 640, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_c18", x: 3840, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l2_g4", x: 3890, y: 150, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l2_c19", x: 3940, y: 230, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      { id: "l2_e_slime1", x: 200, y: 776, width: 28, height: 24, type: "slime", vx: 0.65, vy: 0, minX: 120, maxX: 300, facing: 1 },
      { id: "l2_e_frog1", x: 680, y: 434, width: 26, height: 24, type: "frog", vx: 0.7, vy: 0, minX: 640, maxX: 750, facing: 1 },
      { id: "l2_e_flyer1", x: 920, y: 220, width: 26, height: 22, type: "flyer", vx: 1.1, vy: 0, minX: 860, maxX: 1040, facing: 1 },
      { id: "l2_e_slime2", x: 1000, y: 536, width: 28, height: 24, type: "slime", vx: 0.6, vy: 0, minX: 970, maxX: 1080, facing: -1 },
      { id: "l2_e_pigeon1", x: 1780, y: 140, width: 26, height: 22, type: "pigeon", vx: 0.9, vy: 0, minX: 1700, maxX: 1860, facing: -1 },
      { id: "l2_e_frog2", x: 1890, y: 734, width: 26, height: 24, type: "frog", vx: 0.7, vy: 0, minX: 1850, maxX: 1960, facing: 1 },
      { id: "l2_e_hedge1", x: 2480, y: 514, width: 26, height: 24, type: "hedgehog", vx: 0.75, vy: 0, minX: 2440, maxX: 2600, facing: 1 },
      { id: "l2_e_anteater1", x: 2760, y: 354, width: 30, height: 26, type: "anteater", vx: 0.7, vy: 0, minX: 2680, maxX: 2820, facing: -1 },
      { id: "l2_e_pigeon2", x: 2720, y: 100, width: 26, height: 22, type: "pigeon", vx: 0.95, vy: 0, minX: 2600, maxX: 2800, facing: 1 },
      { id: "l2_e_frog3", x: 3340, y: 254, width: 26, height: 24, type: "frog", vx: 0.75, vy: 0, minX: 3300, maxX: 3390, facing: 1 },
      { id: "l2_e_flyer2", x: 3620, y: 120, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 3520, maxX: 3720, facing: -1 },
      { id: "l2_e_slime3", x: 3850, y: 256, width: 28, height: 24, type: "slime", vx: 0.6, vy: 0, minX: 3830, maxX: 3950, facing: -1 }
    ],
    parTime: 75,
    threeStarScore: 7000
  },
  {
    id: 3,
    title: "3. Molten Core: The Blaster Foundry",
    worldNumber: 1,
    worldName: "Emerald Woodlands & Molten Caldera",
    gameplayType: "gadget",
    category: "classic",
    description: "Arm the Plasma Blaster! Storm the multi-layered molten citadel, blast through robotic drones and rolling timber barrages, ride vertical magma lifts, and conquer the dragon summit.",
    worldWidth: 4200,
    worldHeight: 900,
    theme: THEMES.lava,
    playerStart: { x: 80, y: 780 },
    goal: { x: 4040, y: 220, width: 44, height: 60 },
    checkpoints: [
      { x: 1420, y: 220, width: 30, height: 40, activated: false },
      { x: 2580, y: 340, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: The Obsidian Rampart & Trench Turrets (x: 0 to 860)
      // ==========================================
      { id: "l3_entry_gate", x: 0, y: 820, width: 340, height: 80, type: "solid" },
      { id: "l3_step1", x: 360, y: 760, width: 90, height: 140, type: "solid" },
      { id: "l3_step2", x: 480, y: 700, width: 90, height: 200, type: "solid" },
      // Towering 340px Basalt Bastion
      { id: "l3_bastion1", x: 620, y: 480, width: 150, height: 420, type: "solid" },
      // Scalable switchback pumice ledges
      { id: "l3_pumice1", x: 440, y: 620, width: 75, height: 16, type: "one-way" },
      { id: "l3_pumice2", x: 530, y: 540, width: 75, height: 16, type: "one-way" },
      // Lower heat geode spring
      { id: "l3_spring_nook", x: 370, y: 860, width: 90, height: 40, type: "solid" },
      { id: "l3_spring1", x: 390, y: 844, width: 44, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 2: Molten Geyser Chimney & Elevator Lift (x: 820 to 1680)
      // ==========================================
      // Vertical Magma Elevator
      { id: "l3_magma_lift1", x: 860, y: 660, width: 90, height: 18, type: "solid", startX: 860, startY: 660, distanceX: 0, distanceY: -280, speed: 1.6, vx: 0, vy: -1.6 },
      // Ascending crumbling slag stepping stones
      { id: "l3_crumb1", x: 1040, y: 380, width: 65, height: 18, type: "crumbling" },
      { id: "l3_crumb2", x: 1140, y: 340, width: 65, height: 18, type: "crumbling" },
      { id: "l3_crumb3", x: 1240, y: 300, width: 65, height: 18, type: "crumbling" },
      // Safety net terrace with return spring
      { id: "l3_safety_ledge1", x: 1020, y: 580, width: 220, height: 24, type: "solid" },
      { id: "l3_safety_spring1", x: 1180, y: 564, width: 44, height: 16, type: "bouncy" },
      // High Basalt Battlement (Checkpoint 1)
      { id: "l3_cp1_battlement", x: 1360, y: 260, width: 220, height: 30, type: "solid" },

      // ==========================================
      // LAYER 3: Suspended Steamworks & Subterranean Lava Vault (x: 1650 to 2480)
      // ==========================================
      // High steam catwalks
      { id: "l3_catwalk1", x: 1640, y: 280, width: 110, height: 18, type: "one-way" },
      { id: "l3_catwalk2", x: 1800, y: 240, width: 120, height: 20, type: "solid" },
      { id: "l3_catwalk3", x: 2040, y: 220, width: 110, height: 18, type: "one-way" },
      { id: "l3_catwalk4", x: 2190, y: 260, width: 120, height: 22, type: "solid" },
      { id: "l3_catwalk_drop", x: 2340, y: 340, width: 80, height: 18, type: "one-way" },
      // Deep Subterranean Lava Vault stepping stones
      { id: "l3_vault_stone1", x: 1780, y: 800, width: 70, height: 24, type: "solid" },
      { id: "l3_vault_stone2", x: 1930, y: 780, width: 80, height: 24, type: "solid" },
      { id: "l3_vault_stone3", x: 2090, y: 800, width: 70, height: 24, type: "solid" },
      // Vault super-spring and transit ledge
      { id: "l3_vault_spring", x: 2200, y: 784, width: 44, height: 16, type: "bouncy" },
      { id: "l3_vault_exit_plat", x: 2180, y: 560, width: 120, height: 20, type: "solid" },
      { id: "l3_vault_exit_spring", x: 2250, y: 544, width: 44, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 4: Magma Foundry & Switchback Ramparts (x: 2400 to 3280)
      // ==========================================
      // Tier 1: Lower Foundry Hearth
      { id: "l3_foundry_tier1", x: 2420, y: 560, width: 240, height: 24, type: "solid" },
      // Moving Slag Ferry to Pillar
      { id: "l3_foundry_ferry", x: 2680, y: 540, width: 90, height: 18, type: "solid", startX: 2680, startY: 540, distanceX: 170, distanceY: 0, speed: 1.5, vx: 1.5, vy: 0 },
      { id: "l3_foundry_pillar", x: 2880, y: 520, width: 80, height: 220, type: "solid" },
      // Vertical jump ladders to Tier 2
      { id: "l3_f_ladder1", x: 2890, y: 450, width: 60, height: 14, type: "one-way" },
      { id: "l3_f_ladder2", x: 2890, y: 370, width: 60, height: 14, type: "one-way" },
      // Tier 2: Forge Gallery (Checkpoint 2)
      { id: "l3_foundry_tier2", x: 2540, y: 380, width: 340, height: 24, type: "solid" },
      // High-lift vertical elevator to Tier 3
      { id: "l3_foundry_lift", x: 2460, y: 360, width: 80, height: 16, type: "solid", startX: 2460, startY: 360, distanceX: 0, distanceY: -190, speed: 1.5, vx: 0, vy: -1.5 },
      // Tier 3: Rooftop Chimney & Roost
      { id: "l3_foundry_tier3", x: 2560, y: 190, width: 280, height: 24, type: "solid" },
      { id: "l3_foundry_roost", x: 2870, y: 150, width: 80, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 5: Caldera Summit & The Dragon's Crown (x: 3200 to 4200)
      // ==========================================
      // Stepped obsidian spires with open lower underpass
      { id: "l3_summit_step1", x: 3200, y: 360, width: 110, height: 180, type: "solid" },
      { id: "l3_summit_step2", x: 3360, y: 280, width: 110, height: 260, type: "solid" },
      { id: "l3_summit_step3", x: 3520, y: 200, width: 120, height: 340, type: "solid" },
      // Dragon's Needle peak
      { id: "l3_dragon_needle", x: 3680, y: 130, width: 70, height: 20, type: "one-way" },
      // Suspended crumbling bridges
      { id: "l3_summit_crumb1", x: 3780, y: 170, width: 60, height: 16, type: "crumbling" },
      { id: "l3_summit_crumb2", x: 3870, y: 200, width: 60, height: 16, type: "crumbling" },
      // Goal Bastion
      { id: "l3_goal_bastion", x: 3980, y: 280, width: 180, height: 500, type: "solid" },
      // Lower Magma Shore with rescue spring (wide continuous underpass under spires)
      { id: "l3_summit_lower", x: 3100, y: 700, width: 680, height: 100, type: "solid" },
      { id: "l3_summit_spring", x: 3700, y: 684, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      { id: "l3_pit1", x: 340, y: 880, width: 280, height: 20, type: "lava" },
      { id: "l3_lava_lake1", x: 770, y: 880, width: 880, height: 20, type: "lava" },
      { id: "l3_saw1", x: 980, y: 460, width: 38, height: 38, type: "saw", startX: 980, startY: 460, distanceX: 120, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      { id: "l3_saw2", x: 1960, y: 180, width: 40, height: 40, type: "saw", startX: 1960, startY: 180, distanceX: 0, distanceY: 100, speed: 2, vx: 0, vy: 2 },
      { id: "l3_vault_lava", x: 1720, y: 880, width: 520, height: 20, type: "lava" },
      { id: "l3_saw3", x: 3790, y: 260, width: 40, height: 40, type: "saw", startX: 3790, startY: 260, distanceX: 90, distanceY: 0, speed: 2, vx: 2, vy: 0 }
    ],
    collectibles: [
      // WEAPON PICKUP: Plasma Blaster & Ammo Stations
      { id: "l3_blaster", x: 220, y: 760, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "l3_ammo1", x: 380, y: 710, width: 24, height: 24, type: "blaster_ammo", value: 200 },
      { id: "l3_ammo2", x: 1060, y: 530, width: 24, height: 24, type: "blaster_ammo", value: 200 },
      { id: "l3_ammo3", x: 2680, y: 330, width: 24, height: 24, type: "blaster_ammo", value: 200 },

      // 3 Golden Acorns
      { id: "l3_acorn1", x: 1960, y: 730, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l3_acorn2", x: 2900, y: 100, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l3_acorn3", x: 3700, y: 80, width: 26, height: 26, type: "acorn", value: 1500 },

      // Layer 1: Entrance Rampart
      { id: "l3_c1", x: 160, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_g1", x: 500, y: 640, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l3_c2", x: 680, y: 430, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 2: Chimney & High Battlement
      { id: "l3_c3", x: 900, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c4", x: 1070, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c5", x: 1170, y: 280, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_g2", x: 1480, y: 200, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 3: Steam Catwalks & Subterranean Vault
      { id: "l3_power_speed", x: 1840, y: 190, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l3_c6", x: 1690, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c7", x: 2090, y: 170, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c8", x: 2240, y: 210, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c9", x: 1810, y: 750, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c10", x: 2110, y: 750, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 4: Foundry Ramparts & Jetpack Roost
      { id: "l3_c11", x: 2500, y: 510, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c12", x: 2790, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_g3", x: 2820, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l3_c13", x: 2620, y: 140, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_jetpack", x: 2700, y: 140, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l3_fuel1", x: 3020, y: 150, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Layer 5: Caldera Summit & Dragon's Crown
      { id: "l3_c14", x: 3240, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c15", x: 3400, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c16", x: 3300, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c17", x: 3420, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_c18", x: 4000, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l3_g4", x: 4050, y: 150, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l3_c19", x: 4100, y: 230, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      { id: "l3_e_flyer1", x: 540, y: 520, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 480, maxX: 600, facing: 1 },
      { id: "l3_e_anteater1", x: 680, y: 454, width: 30, height: 26, type: "anteater", vx: 0.7, vy: 0, minX: 630, maxX: 750, facing: -1 },
      { id: "l3_e_flyer2", x: 1220, y: 200, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 1120, maxX: 1320, facing: -1 },
      { id: "l3_e_slime1", x: 1060, y: 556, width: 28, height: 24, type: "slime", vx: 0.65, vy: 0, minX: 1030, maxX: 1140, facing: 1 },
      { id: "l3_e_pigeon1", x: 1740, y: 160, width: 26, height: 22, type: "pigeon", vx: 1.0, vy: 0, minX: 1660, maxX: 1820, facing: 1 },
      { id: "l3_e_beaver1", x: 2100, y: 774, width: 30, height: 26, type: "beaver", vx: 0.7, vy: 0, minX: 2060, maxX: 2140, facing: -1 },
      { id: "l3_e_hedge1", x: 2480, y: 534, width: 26, height: 24, type: "hedgehog", vx: 0.8, vy: 0, minX: 2440, maxX: 2600, facing: 1 },
      { id: "l3_e_beaver2", x: 2780, y: 354, width: 30, height: 26, type: "beaver", vx: 0.75, vy: 0, minX: 2700, maxX: 2840, facing: -1 },
      { id: "l3_e_pigeon2", x: 2740, y: 90, width: 26, height: 22, type: "pigeon", vx: 1.1, vy: 0, minX: 2640, maxX: 2840, facing: -1 },
      { id: "l3_e_frog3", x: 3400, y: 254, width: 26, height: 24, type: "frog", vx: 0.75, vy: 0, minX: 3370, maxX: 3460, facing: 1 },
      { id: "l3_e_flyer3", x: 3720, y: 120, width: 26, height: 22, type: "flyer", vx: -1.2, vy: 0, minX: 3620, maxX: 3820, facing: -1 },
      { id: "l3_e_anteater2", x: 4000, y: 254, width: 30, height: 26, type: "anteater", vx: 0.65, vy: 0, minX: 3980, maxX: 4120, facing: 1 }
    ],
    parTime: 80,
    threeStarScore: 7500
  },
  {
    id: 4,
    title: "4. Neon Night: Rooftop Circuit",
    worldNumber: 1,
    worldName: "Neon Night Metropolis",
    gameplayType: "terrain",
    category: "classic",
    description: "Leap across high-voltage cyber rooftops, ride mag-lev sky shuttles, navigate holographic laser gratings and quantum glitch platforms amidst glowing neon skyscrapers.",
    worldWidth: 4200,
    worldHeight: 880,
    theme: THEMES.neonNight,
    playerStart: { x: 80, y: 740 },
    goal: { x: 4020, y: 220, width: 44, height: 60 },
    checkpoints: [
      { x: 1400, y: 260, width: 30, height: 40, activated: false },
      { x: 2680, y: 320, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: Ground Alleyway & Sub-Station Conduits (x: 0 to 860)
      // ==========================================
      { id: "l4_ground_start", x: 0, y: 780, width: 340, height: 100, type: "solid" },
      { id: "l4_alley_step1", x: 360, y: 720, width: 90, height: 160, type: "solid" },
      { id: "l4_alley_step2", x: 480, y: 660, width: 90, height: 220, type: "solid" },
      // Towering 380px Neon Skyscraper Base
      { id: "l4_tower1", x: 620, y: 460, width: 150, height: 420, type: "solid" },
      // Holographic laser ledges on the tower wall
      { id: "l4_holo_ledge1", x: 440, y: 580, width: 75, height: 16, type: "one-way" },
      { id: "l4_holo_ledge2", x: 530, y: 500, width: 75, height: 16, type: "one-way" },
      // Kinetic Grav-pad in alley nook
      { id: "l4_grav_nook", x: 370, y: 840, width: 90, height: 40, type: "solid" },
      { id: "l4_grav_spring1", x: 390, y: 824, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 2: Mag-Lev Transit Shafts & Quantum Glitch Bridges (x: 820 to 1680)
      // ==========================================
      // Vertical Mag-Lev Elevator Shuttle
      { id: "l4_maglev_lift1", x: 860, y: 640, width: 90, height: 18, type: "solid", startX: 860, startY: 640, distanceX: 0, distanceY: -280, speed: 1.6, vx: 0, vy: -1.6 },
      // Ascending Quantum Glitch Crumbling stepping blocks
      { id: "l4_glitch1", x: 1040, y: 380, width: 70, height: 18, type: "crumbling" },
      { id: "l4_glitch2", x: 1150, y: 330, width: 70, height: 18, type: "crumbling" },
      { id: "l4_glitch3", x: 1260, y: 280, width: 70, height: 18, type: "crumbling" },
      // Lower safety net terrace with kinetic return spring
      { id: "l4_safety_terrace", x: 1020, y: 580, width: 220, height: 24, type: "solid" },
      { id: "l4_safety_spring", x: 1180, y: 564, width: 48, height: 16, type: "bouncy" },
      // High Cyber Spire Terrace (Checkpoint 1)
      { id: "l4_cp1_terrace", x: 1360, y: 260, width: 220, height: 30, type: "solid" },

      // ==========================================
      // LAYER 3: Hologram Highway & Subterranean Data Conduit (x: 1650 to 2480)
      // ==========================================
      // High holographic laser gratings
      { id: "l4_holo_grate1", x: 1640, y: 280, width: 110, height: 18, type: "one-way" },
      { id: "l4_rooftop_bridge1", x: 1800, y: 240, width: 120, height: 20, type: "solid" },
      { id: "l4_holo_grate2", x: 2040, y: 220, width: 110, height: 18, type: "one-way" },
      { id: "l4_rooftop_bridge2", x: 2190, y: 260, width: 120, height: 22, type: "solid" },
      { id: "l4_holo_drop", x: 2340, y: 340, width: 80, height: 18, type: "one-way" },
      // Deep Subterranean Data Conduit (Secret floor beneath)
      { id: "l4_data_conduit1", x: 1780, y: 800, width: 70, height: 24, type: "solid" },
      { id: "l4_data_conduit2", x: 1930, y: 780, width: 80, height: 24, type: "solid" },
      { id: "l4_data_conduit3", x: 2090, y: 800, width: 70, height: 24, type: "solid" },
      // Conduit super kinetic launch spring
      { id: "l4_conduit_spring", x: 2200, y: 784, width: 48, height: 16, type: "bouncy" },
      { id: "l4_conduit_exit_plat", x: 2180, y: 560, width: 120, height: 20, type: "solid" },
      { id: "l4_conduit_exit_spring", x: 2250, y: 544, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 4: Neon Billboard Gallery & Switchback Gantries (x: 2400 to 3280)
      // ==========================================
      // Tier 1: Lower Billboard Terrace
      { id: "l4_billboard_tier1", x: 2420, y: 560, width: 240, height: 24, type: "solid" },
      // Horizontal Mag-Lev Sky Ferry
      { id: "l4_sky_ferry", x: 2680, y: 540, width: 90, height: 18, type: "solid", startX: 2680, startY: 540, distanceX: 170, distanceY: 0, speed: 1.5, vx: 1.5, vy: 0 },
      { id: "l4_megatower_buttress", x: 2880, y: 520, width: 80, height: 220, type: "solid" },
      // Vertical holographic climbing ladders
      { id: "l4_holo_ladder1", x: 2890, y: 440, width: 60, height: 14, type: "one-way" },
      { id: "l4_holo_ladder2", x: 2890, y: 360, width: 60, height: 14, type: "one-way" },
      // Tier 2: Mid Neon Gallery (Checkpoint 2)
      { id: "l4_cp2_gallery", x: 2540, y: 380, width: 340, height: 24, type: "solid" },
      // High-lift vertical mag-lev to Tier 3
      { id: "l4_elev_lift2", x: 2460, y: 360, width: 80, height: 16, type: "solid", startX: 2460, startY: 360, distanceX: 0, distanceY: -190, speed: 1.5, vx: 0, vy: -1.5 },
      // Tier 3: Rooftop Crane & Jetpack Roost
      { id: "l4_crane_tier3", x: 2560, y: 190, width: 280, height: 24, type: "solid" },
      { id: "l4_crane_perch", x: 2870, y: 150, width: 80, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 5: Megatower Zenith Summit (x: 3200 to 4200)
      // ==========================================
      // Stepped skyscraper pinnacles with open lower underpass
      { id: "l4_zenith_step1", x: 3200, y: 360, width: 110, height: 180, type: "solid" },
      { id: "l4_zenith_step2", x: 3360, y: 280, width: 110, height: 260, type: "solid" },
      { id: "l4_zenith_step3", x: 3520, y: 200, width: 120, height: 340, type: "solid" },
      // Broadcast Antenna Needle Peak
      { id: "l4_antenna_needle", x: 3680, y: 130, width: 70, height: 20, type: "one-way" },
      // Suspended glitch bridges
      { id: "l4_zenith_glitch1", x: 3780, y: 170, width: 60, height: 16, type: "crumbling" },
      { id: "l4_zenith_glitch2", x: 3870, y: 200, width: 60, height: 16, type: "crumbling" },
      // Goal Megatower Pinnacle
      { id: "l4_goal_pinnacle", x: 3980, y: 280, width: 180, height: 500, type: "solid" },
      // Lower Alley with rescue grav spring (continuous underpass under pinnacles)
      { id: "l4_zenith_lower", x: 3100, y: 700, width: 680, height: 100, type: "solid" },
      { id: "l4_zenith_spring", x: 3700, y: 684, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      { id: "l4_alley_spikes1", x: 340, y: 860, width: 280, height: 20, type: "spike" },
      { id: "l4_acid_pool1", x: 770, y: 860, width: 880, height: 20, type: "lava" },
      { id: "l4_neon_saw1", x: 980, y: 460, width: 38, height: 38, type: "saw", startX: 980, startY: 460, distanceX: 120, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      { id: "l4_neon_saw2", x: 1960, y: 180, width: 40, height: 40, type: "saw", startX: 1960, startY: 180, distanceX: 0, distanceY: 100, speed: 2, vx: 0, vy: 2 },
      { id: "l4_conduit_acid", x: 1720, y: 860, width: 520, height: 20, type: "lava" },
      { id: "l4_neon_saw3", x: 3790, y: 260, width: 40, height: 40, type: "saw", startX: 3790, startY: 260, distanceX: 90, distanceY: 0, speed: 2, vx: 2, vy: 0 }
    ],
    collectibles: [
      // 3 Golden Acorns hidden at scalable secrets
      { id: "l4_acorn1", x: 1960, y: 730, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l4_acorn2", x: 2900, y: 100, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l4_acorn3", x: 3700, y: 80, width: 26, height: 26, type: "acorn", value: 1500 },

      // Jetpack & Fuel in Rooftop Roost
      { id: "l4_jetpack", x: 2700, y: 140, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l4_fuel1", x: 3020, y: 150, width: 22, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "l4_power_speed", x: 1840, y: 190, width: 24, height: 24, type: "powerup_speed", value: 300 },

      // Layer 1: Alleyway & Skyscraper Base
      { id: "l4_c1", x: 160, y: 730, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_g1", x: 500, y: 610, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l4_c2", x: 680, y: 410, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 2: Mag-Lev Shafts & Glitch Bridges
      { id: "l4_c3", x: 900, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c4", x: 1070, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c5", x: 1180, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_g2", x: 1480, y: 200, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 3: Hologram Highway & Conduit
      { id: "l4_c6", x: 1690, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c7", x: 2090, y: 170, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c8", x: 2240, y: 210, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c9", x: 1810, y: 750, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c10", x: 2110, y: 750, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 4: Billboard Gantries
      { id: "l4_c11", x: 2500, y: 510, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c12", x: 2790, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_g3", x: 2820, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l4_c13", x: 2620, y: 140, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 5: Megatower Zenith Summit
      { id: "l4_c14", x: 3240, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c15", x: 3400, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c16", x: 3300, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c17", x: 3420, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_c18", x: 4000, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l4_g4", x: 4050, y: 150, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l4_c19", x: 4100, y: 230, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      { id: "l4_e_drone1", x: 540, y: 500, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 480, maxX: 600, facing: 1 },
      { id: "l4_e_bot1", x: 680, y: 434, width: 30, height: 26, type: "anteater", vx: 0.7, vy: 0, minX: 630, maxX: 750, facing: -1 },
      { id: "l4_e_drone2", x: 1220, y: 220, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 1120, maxX: 1320, facing: -1 },
      { id: "l4_e_slime1", x: 1060, y: 556, width: 28, height: 24, type: "slime", vx: 0.65, vy: 0, minX: 1030, maxX: 1140, facing: 1 },
      { id: "l4_e_pigeon1", x: 1740, y: 160, width: 26, height: 22, type: "pigeon", vx: 1.0, vy: 0, minX: 1660, maxX: 1820, facing: 1 },
      { id: "l4_e_bot2", x: 2100, y: 774, width: 30, height: 26, type: "beaver", vx: 0.7, vy: 0, minX: 2060, maxX: 2140, facing: -1 },
      { id: "l4_e_hedge1", x: 2480, y: 534, width: 26, height: 24, type: "hedgehog", vx: 0.8, vy: 0, minX: 2440, maxX: 2600, facing: 1 },
      { id: "l4_e_bot3", x: 2780, y: 354, width: 30, height: 26, type: "beaver", vx: 0.75, vy: 0, minX: 2700, maxX: 2840, facing: -1 },
      { id: "l4_e_drone3", x: 2740, y: 90, width: 26, height: 22, type: "pigeon", vx: 1.1, vy: 0, minX: 2640, maxX: 2840, facing: -1 },
      { id: "l4_e_frog1", x: 3400, y: 254, width: 26, height: 24, type: "frog", vx: 0.75, vy: 0, minX: 3370, maxX: 3460, facing: 1 },
      { id: "l4_e_drone4", x: 3720, y: 120, width: 26, height: 22, type: "flyer", vx: -1.2, vy: 0, minX: 3620, maxX: 3820, facing: -1 },
      { id: "l4_e_bot4", x: 4000, y: 254, width: 30, height: 26, type: "anteater", vx: 0.65, vy: 0, minX: 3980, maxX: 4120, facing: 1 }
    ],
    parTime: 80,
    threeStarScore: 7500
  },
  {
    id: 5,
    title: "5. Neon Night: The Cyber Matrix Hub",
    worldNumber: 1,
    worldName: "Neon Night Metropolis",
    gameplayType: "gadget",
    category: "classic",
    description: "Infiltrate the pulsating Cyber Matrix Hub! Navigate dual cross-vector mag-lev elevators, branch through upper holographic laser expressways or descend into hazardous subterranean coolant vaults, arming plasma blasters and jetpacks to conquer the Zenith Core.",
    worldWidth: 4400,
    worldHeight: 960,
    theme: THEMES.neonNight,
    playerStart: { x: 80, y: 780 },
    goal: { x: 4220, y: 220, width: 44, height: 60 },
    checkpoints: [
      { x: 1440, y: 320, width: 30, height: 40, activated: false },
      { x: 2780, y: 380, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: Terminal Ingress & Sub-Pipeline Trenches (x: 0 to 860)
      // ==========================================
      { id: "l5_ground_start", x: 0, y: 820, width: 280, height: 140, type: "solid" },
      // Elevated Terminal Columns (Pillars with 136px+ clearance to walk freely underneath)
      { id: "l5_term_step1", x: 330, y: 740, width: 75, height: 24, type: "solid" },
      { id: "l5_term_step2", x: 475, y: 650, width: 75, height: 24, type: "solid" },
      // Towering Skyscraper Terminal Wall
      { id: "l5_term_wall", x: 580, y: 440, width: 140, height: 520, type: "solid" },
      // Holographic laser climbing ledges on the terminal wall
      { id: "l5_holo_ledge1", x: 410, y: 560, width: 70, height: 16, type: "one-way" },
      { id: "l5_holo_ledge2", x: 500, y: 470, width: 70, height: 16, type: "one-way" },
      // High Terminal Balcony
      { id: "l5_term_balcony", x: 580, y: 420, width: 160, height: 22, type: "solid" },
      // Sub-floor Pipeline Trench underneath (continuous open walkway under both columns)
      { id: "l5_trench_floor", x: 260, y: 900, width: 330, height: 60, type: "solid" },
      // Central kinetic launch spring in the open shaft between columns
      { id: "l5_trench_spring", x: 416, y: 884, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 2: Cross-Vector Mag-Lev Elevators & Transit Hub (x: 820 to 1720)
      // ==========================================
      // Vertical Mag-Lev Elevator Lift 1 (Ascent 320px)
      { id: "l5_maglev_v1", x: 820, y: 700, width: 85, height: 18, type: "solid", startX: 820, startY: 700, distanceX: 0, distanceY: -320, speed: 1.8, vx: 0, vy: -1.8 },
      // Horizontal Mag-Lev Transfer Shuttle
      { id: "l5_maglev_h1", x: 940, y: 420, width: 90, height: 18, type: "solid", startX: 940, startY: 420, distanceX: 160, distanceY: 0, speed: 1.6, vx: 1.6, vy: 0 },
      // Mid-shaft Junction Gantry
      { id: "l5_mid_junction", x: 1040, y: 560, width: 110, height: 22, type: "solid" },
      // Escalating Quantum Glitch stepping stones
      { id: "l5_glitch_a1", x: 1160, y: 480, width: 65, height: 18, type: "crumbling" },
      { id: "l5_glitch_a2", x: 1250, y: 410, width: 65, height: 18, type: "crumbling" },
      { id: "l5_glitch_a3", x: 1170, y: 330, width: 65, height: 18, type: "crumbling" },
      // Hidden Upper Relay Roost (holding Golden Acorn #1)
      { id: "l5_secret_roost1", x: 1240, y: 180, width: 90, height: 20, type: "solid" },
      // Lower Safety Deck with kinetic rebound spring
      { id: "l5_deck_lower", x: 920, y: 800, width: 280, height: 26, type: "solid" },
      { id: "l5_deck_spring", x: 1140, y: 784, width: 48, height: 16, type: "bouncy" },
      // Checkpoint 1 Hub Terrace & Overhead Laser Beam
      { id: "l5_cp1_terrace", x: 1380, y: 320, width: 240, height: 30, type: "solid" },
      { id: "l5_cp1_beam", x: 1450, y: 220, width: 100, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 3: The Quantum Matrix Chasm & Sub-Core Coolant Vault (x: 1680 to 2580)
      // ==========================================
      // Upper Matrix Expressway (High route with Plasma Blaster)
      { id: "l5_matrix_grate1", x: 1680, y: 280, width: 110, height: 18, type: "one-way" },
      { id: "l5_matrix_bridge1", x: 1840, y: 250, width: 130, height: 22, type: "solid" },
      // High-speed Mag-Lev Shuttle across the central chasm
      { id: "l5_maglev_shuttle2", x: 2020, y: 220, width: 85, height: 18, type: "solid", startX: 2020, startY: 220, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      // High quantum crumbling stepping stones
      { id: "l5_glitch_b1", x: 2240, y: 240, width: 65, height: 18, type: "crumbling" },
      { id: "l5_glitch_b2", x: 2340, y: 270, width: 65, height: 18, type: "crumbling" },
      { id: "l5_matrix_gantry2", x: 2440, y: 300, width: 120, height: 22, type: "solid" },

      // Lower Sub-Core Coolant Vault Route (Subterranean Crypt)
      { id: "l5_vault_drop", x: 1680, y: 460, width: 70, height: 16, type: "one-way" },
      { id: "l5_pipe_shelf", x: 1780, y: 640, width: 90, height: 20, type: "solid" },
      // Coolant Vault Islands across the cyber-flux floor
      { id: "l5_coolant_island1", x: 1910, y: 860, width: 75, height: 24, type: "solid" },
      { id: "l5_coolant_island2", x: 2050, y: 840, width: 85, height: 24, type: "solid" },
      { id: "l5_coolant_island3", x: 2210, y: 860, width: 75, height: 24, type: "solid" },
      // Sub-Core Mega Kinetic Launch Spring
      { id: "l5_vault_spring1", x: 2320, y: 844, width: 48, height: 16, type: "bouncy" },
      // Vault Exit Mid-Platform & Relay Spring
      { id: "l5_vault_mid_plat", x: 2290, y: 550, width: 110, height: 20, type: "solid" },
      { id: "l5_vault_spring2", x: 2360, y: 534, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 4: Overclocked Reactor Columns & High Crane Roost (x: 2550 to 3450)
      // ==========================================
      // Tier 1: Lower Reactor Promenade
      { id: "l5_reactor_promenade", x: 2560, y: 560, width: 230, height: 24, type: "solid" },
      // Mag-Lev Ferry traversing to Column Buttress
      { id: "l5_maglev_ferry", x: 2810, y: 540, width: 90, height: 18, type: "solid", startX: 2810, startY: 540, distanceX: 160, distanceY: 0, speed: 1.7, vx: 1.7, vy: 0 },
      // Mainframe Buttress Monolith
      { id: "l5_buttress_monolith", x: 3010, y: 480, width: 90, height: 320, type: "solid" },
      // Vertical holographic ladder array on monolith face
      { id: "l5_holo_rung1", x: 3020, y: 410, width: 70, height: 14, type: "one-way" },
      { id: "l5_holo_rung2", x: 3020, y: 340, width: 70, height: 14, type: "one-way" },
      { id: "l5_holo_rung3", x: 3020, y: 270, width: 70, height: 14, type: "one-way" },
      // Tier 2: Mid-Level Control Deck (Checkpoint 2)
      { id: "l5_cp2_deck", x: 2680, y: 380, width: 310, height: 24, type: "solid" },
      // Vertical High-Power Mag-Lev Elevator Lift to Tier 3
      { id: "l5_maglev_v2", x: 2580, y: 360, width: 80, height: 16, type: "solid", startX: 2580, startY: 360, distanceX: 0, distanceY: -210, speed: 1.8, vx: 0, vy: -1.8 },
      // Tier 3: High Sky Crane Flight Deck (Jetpack Roost)
      { id: "l5_crane_flight_deck", x: 2690, y: 150, width: 280, height: 24, type: "solid" },
      { id: "l5_crane_arm", x: 3000, y: 110, width: 80, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 5: Quantum Nexus Apex & Finish Gate (x: 3380 to 4400)
      // ==========================================
      // Stepped crystalline server monoliths with open lower underpass
      { id: "l5_nexus_step1", x: 3380, y: 400, width: 110, height: 180, type: "solid" },
      { id: "l5_nexus_step2", x: 3540, y: 320, width: 110, height: 260, type: "solid" },
      { id: "l5_nexus_step3", x: 3700, y: 240, width: 120, height: 340, type: "solid" },
      // Apex High Antenna Needle Spires (Stratosphere Secret Roost)
      { id: "l5_antenna_spire", x: 3860, y: 130, width: 70, height: 20, type: "one-way" },
      { id: "l5_trans_needle", x: 3960, y: 100, width: 60, height: 18, type: "one-way" },
      // Cascading quantum glitch stepping stones across the final void
      { id: "l5_apex_glitch1", x: 3980, y: 180, width: 60, height: 16, type: "crumbling" },
      { id: "l5_apex_glitch2", x: 4070, y: 220, width: 60, height: 16, type: "crumbling" },
      // Goal Gateway Monolith
      { id: "l5_goal_monolith", x: 4160, y: 300, width: 200, height: 540, type: "solid" },
      // Lower Safety Alley with emergency rescue grav-spring (continuous underpass under monoliths)
      { id: "l5_lower_rescue_deck", x: 3280, y: 760, width: 720, height: 120, type: "solid" },
      { id: "l5_rescue_spring", x: 3860, y: 744, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      { id: "l5_hz_acid1", x: 740, y: 920, width: 920, height: 20, type: "lava" },
      { id: "l5_hz_saw1", x: 990, y: 480, width: 38, height: 38, type: "saw", startX: 990, startY: 480, distanceX: 130, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l5_hz_saw2", x: 2000, y: 160, width: 40, height: 40, type: "saw", startX: 2000, startY: 160, distanceX: 0, distanceY: 120, speed: 2.2, vx: 0, vy: 2.2 },
      { id: "l5_hz_acid_vault", x: 1720, y: 920, width: 620, height: 20, type: "lava" },
      { id: "l5_hz_saw3", x: 3950, y: 280, width: 40, height: 40, type: "saw", startX: 3950, startY: 280, distanceX: 100, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l5_hz_goal_spikes", x: 4040, y: 880, width: 120, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns hidden at scalable secrets
      { id: "l5_acorn1", x: 1280, y: 130, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l5_acorn2", x: 2080, y: 790, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l5_acorn3", x: 3980, y: 60, width: 26, height: 26, type: "acorn", value: 1500 },

      // Weapons & Gadgets: Plasma Blaster, Jetpack, Shield, Speed & Jump Boosts
      { id: "l5_shield", x: 200, y: 770, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l5_power_speed", x: 640, y: 370, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l5_power_jump", x: 1000, y: 750, width: 24, height: 24, type: "powerup_jump", value: 300 },
      { id: "l5_blaster", x: 1860, y: 200, width: 28, height: 28, type: "blaster", value: 1000 },
      { id: "l5_jetpack", x: 2740, y: 100, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l5_fuel1", x: 3040, y: 70, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Layer 1: Terminal Ingress & Sub-Pipeline Trench
      { id: "l5_c1", x: 140, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c_trench1", x: 350, y: 860, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c_trench2", x: 520, y: 860, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_g1", x: 510, y: 605, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l5_c2", x: 650, y: 370, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 2: Elevators & Transit Hub
      { id: "l5_c3", x: 860, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c4", x: 1080, y: 510, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c5", x: 1190, y: 430, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_g2", x: 1500, y: 260, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l5_c_secret1", x: 1280, y: 230, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 3: Matrix Chasm & Sub-Core Coolant Vault
      { id: "l5_c6", x: 1720, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c7", x: 2120, y: 170, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c8", x: 2280, y: 190, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c9", x: 1820, y: 590, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c10", x: 1950, y: 810, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_g_vault", x: 2230, y: 810, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 4: Overclocked Reactor & Crane Roost
      { id: "l5_c11", x: 2620, y: 510, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c12", x: 2880, y: 490, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_g3", x: 2920, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l5_c13", x: 2780, y: 100, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c_crane", x: 3040, y: 60, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 5: Quantum Nexus Apex & Gateway
      { id: "l5_c14", x: 3420, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c15", x: 3580, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c16", x: 3480, y: 710, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c17", x: 3650, y: 710, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_c18", x: 4180, y: 250, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l5_g4", x: 4230, y: 160, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l5_c19", x: 4280, y: 250, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      { id: "l5_e_drone1", x: 500, y: 490, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 440, maxX: 580, facing: 1 },
      { id: "l5_e_bot1", x: 640, y: 394, width: 30, height: 26, type: "anteater", vx: 0.75, vy: 0, minX: 600, maxX: 720, facing: -1 },
      { id: "l5_e_drone2", x: 1120, y: 380, width: 26, height: 22, type: "flyer", vx: -1.4, vy: 0, minX: 1060, maxX: 1220, facing: -1 },
      { id: "l5_e_slime1", x: 960, y: 776, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 930, maxX: 1040, facing: 1 },
      { id: "l5_e_pigeon1", x: 1740, y: 200, width: 26, height: 22, type: "pigeon", vx: 1.1, vy: 0, minX: 1680, maxX: 1820, facing: 1 },
      { id: "l5_e_bot2", x: 2070, y: 814, width: 30, height: 26, type: "beaver", vx: 0.75, vy: 0, minX: 2050, maxX: 2130, facing: -1 },
      { id: "l5_e_hedge1", x: 2620, y: 534, width: 26, height: 24, type: "hedgehog", vx: 0.85, vy: 0, minX: 2580, maxX: 2740, facing: 1 },
      { id: "l5_e_bot3", x: 2860, y: 354, width: 30, height: 26, type: "beaver", vx: 0.8, vy: 0, minX: 2800, maxX: 2960, facing: -1 },
      { id: "l5_e_drone3", x: 2820, y: 90, width: 26, height: 22, type: "pigeon", vx: 1.2, vy: 0, minX: 2720, maxX: 2920, facing: -1 },
      { id: "l5_e_frog1", x: 3560, y: 294, width: 26, height: 24, type: "frog", vx: 0.8, vy: 0, minX: 3540, maxX: 3640, facing: 1 },
      { id: "l5_e_drone4", x: 3880, y: 150, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 3780, maxX: 3980, facing: -1 },
      { id: "l5_e_bot4", x: 4200, y: 274, width: 30, height: 26, type: "anteater", vx: 0.7, vy: 0, minX: 4170, maxX: 4320, facing: 1 }
    ],
    parTime: 85,
    threeStarScore: 8200
  },
  {
    id: 6,
    title: "6. Space Station: The Orbital Odyssey",
    worldNumber: 1,
    worldName: "Cosmic Deep Space",
    gameplayType: "gadget",
    category: "classic",
    description: "Infiltrate the colossal Starship Zenith in deep orbit! Ride anti-gravity tractor beams, traverse solar panel arrays and asteroid debris, and harness plasma blasters and jetpacks to breach the Command Bridge.",
    worldWidth: 4400,
    worldHeight: 960,
    theme: THEMES.space,
    playerStart: { x: 80, y: 780 },
    goal: { x: 4220, y: 220, width: 44, height: 60 },
    checkpoints: [
      { x: 1520, y: 380, width: 30, height: 40, activated: false },
      { x: 2640, y: 440, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: Airlock Ingress & Hangar Bay (x: 0 to 860)
      // ==========================================
      { id: "l6_deck_start", x: 0, y: 820, width: 340, height: 140, type: "solid" },
      { id: "l6_hangar_step", x: 340, y: 760, width: 75, height: 24, type: "solid" },
      // NEW PLATFORM: Anti-Gravity Grav-Lift 1 (Ascend from Hangar floor to upper deck)
      { id: "l6_grav_lift1", x: 440, y: 520, width: 64, height: 300, type: "anti_grav" },
      // Upper Hangar Observation Deck & Balcony
      { id: "l6_hangar_obs", x: 530, y: 520, width: 180, height: 24, type: "solid" },
      { id: "l6_hangar_crane", x: 730, y: 460, width: 90, height: 16, type: "one-way" },
      // Sub-floor Air Duct Trench & Launch Spring underneath
      { id: "l6_trench_floor", x: 340, y: 910, width: 380, height: 50, type: "solid" },
      { id: "l6_hangar_spring", x: 670, y: 894, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 2: Solar Panel Arrays & Meteor Asteroid Field (x: 840 to 1740)
      // ==========================================
      // High Solar Array Route (Solar Panel Gratings with Blaster)
      { id: "l6_solar1", x: 860, y: 380, width: 110, height: 16, type: "one-way" },
      { id: "l6_solar2", x: 1010, y: 320, width: 110, height: 16, type: "one-way" },
      // Mid Cargo Shuttle across deep space void
      { id: "l6_shuttle1", x: 920, y: 640, width: 85, height: 18, type: "solid", startX: 920, startY: 640, distanceX: 180, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      // Drifting Meteor Asteroid stepping stones (crumbling cosmic rock)
      { id: "l6_meteor1", x: 1150, y: 560, width: 65, height: 18, type: "crumbling" },
      { id: "l6_meteor2", x: 1250, y: 480, width: 65, height: 18, type: "crumbling" },
      { id: "l6_meteor3", x: 1160, y: 390, width: 65, height: 18, type: "crumbling" },
      // Secret Satellite Roost (Holding Golden Acorn #1)
      { id: "l6_secret_dish", x: 1210, y: 190, width: 85, height: 18, type: "solid" },
      // Anti-Gravity Grav-Lift 2 (Vertical Void Recovery)
      { id: "l6_grav_lift2", x: 1360, y: 460, width: 64, height: 320, type: "anti_grav" },
      // Checkpoint 1 Hub: Solar Array Terrace
      { id: "l6_cp1_terrace", x: 1520, y: 380, width: 260, height: 30, type: "solid" },
      { id: "l6_cp1_beam", x: 1600, y: 270, width: 100, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 3: Sub-Orbital Plasma Core & Ion Conduits (x: 1740 to 2640)
      // ==========================================
      // Upper Expressway across plasma core
      { id: "l6_express_grate", x: 1820, y: 320, width: 110, height: 18, type: "one-way" },
      { id: "l6_shuttle2", x: 1980, y: 280, width: 85, height: 18, type: "solid", startX: 1980, startY: 280, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l6_meteor4", x: 2200, y: 290, width: 65, height: 18, type: "crumbling" },
      { id: "l6_meteor5", x: 2310, y: 320, width: 65, height: 18, type: "crumbling" },
      { id: "l6_core_gantry", x: 2420, y: 350, width: 130, height: 22, type: "solid" },
      // Lower Plasma Vault Route
      { id: "l6_vault_drop", x: 1820, y: 520, width: 70, height: 16, type: "one-way" },
      { id: "l6_reactor_catwalk", x: 1940, y: 680, width: 110, height: 20, type: "solid" },
      { id: "l6_island1", x: 2080, y: 860, width: 75, height: 24, type: "solid" },
      { id: "l6_island2", x: 2200, y: 840, width: 85, height: 24, type: "solid" },
      // Anti-Gravity Grav-Lift 3 (Ascend out of Plasma Vault)
      { id: "l6_grav_lift3", x: 2330, y: 520, width: 64, height: 340, type: "anti_grav" },

      // ==========================================
      // LAYER 4: Gravity Drive Monolith & Celestial Flight Spire (x: 2600 to 3480)
      // ==========================================
      // Checkpoint 2: Gravity Drive Promenade
      { id: "l6_cp2_promenade", x: 2640, y: 440, width: 280, height: 26, type: "solid" },
      // High Sky Flight Deck (Jetpack Station)
      { id: "l6_flight_deck", x: 2720, y: 170, width: 260, height: 24, type: "solid" },
      { id: "l6_crane_beam", x: 3000, y: 120, width: 80, height: 16, type: "one-way" },
      // Anti-Gravity Grav-Lift 4 (Promenade Express to Flight Deck)
      { id: "l6_grav_lift4", x: 2950, y: 180, width: 64, height: 260, type: "anti_grav" },
      // Mainframe Monolith
      { id: "l6_monolith", x: 3060, y: 480, width: 90, height: 320, type: "solid" },
      { id: "l6_rung1", x: 3070, y: 410, width: 70, height: 14, type: "one-way" },
      { id: "l6_rung2", x: 3070, y: 340, width: 70, height: 14, type: "one-way" },
      { id: "l6_rung3", x: 3070, y: 270, width: 70, height: 14, type: "one-way" },
      // Moving Space Ferry 3
      { id: "l6_shuttle3", x: 3190, y: 460, width: 90, height: 18, type: "solid", startX: 3190, startY: 460, distanceX: 160, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },

      // ==========================================
      // LAYER 5: Command Bridge Apex & Warp Gate (x: 3420 to 4400)
      // ==========================================
      // Stepped command bridge pillars with open lower underpass
      { id: "l6_step1", x: 3420, y: 420, width: 110, height: 180, type: "solid" },
      { id: "l6_step2", x: 3580, y: 340, width: 110, height: 260, type: "solid" },
      { id: "l6_step3", x: 3740, y: 260, width: 120, height: 340, type: "solid" },
      // Stratosphere Sensor Spire (Golden Acorn #3)
      { id: "l6_spire1", x: 3880, y: 140, width: 70, height: 20, type: "one-way" },
      { id: "l6_mast", x: 3960, y: 100, width: 60, height: 18, type: "one-way" },
      // Final asteroid debris
      { id: "l6_final_meteor1", x: 3990, y: 200, width: 60, height: 16, type: "crumbling" },
      { id: "l6_final_meteor2", x: 4080, y: 240, width: 60, height: 16, type: "crumbling" },
      // Goal Monolith & Safety Deck
      { id: "l6_goal_monolith", x: 4160, y: 300, width: 200, height: 540, type: "solid" },
      // Safety Deck with rescue spring (continuous underpass under pillars)
      { id: "l6_safety_deck", x: 3320, y: 780, width: 720, height: 100, type: "solid" },
      { id: "l6_safety_spring", x: 3900, y: 764, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      { id: "l6_hz_void1", x: 760, y: 920, width: 920, height: 20, type: "lava" },
      { id: "l6_hz_saw1", x: 1020, y: 520, width: 38, height: 38, type: "saw", startX: 1020, startY: 520, distanceX: 130, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l6_hz_plasma_rift", x: 1800, y: 920, width: 660, height: 20, type: "lava" },
      { id: "l6_hz_saw2", x: 2130, y: 210, width: 40, height: 40, type: "saw", startX: 2130, startY: 210, distanceX: 0, distanceY: 130, speed: 2.2, vx: 0, vy: 2.2 },
      { id: "l6_hz_saw3", x: 3960, y: 300, width: 40, height: 40, type: "saw", startX: 3960, startY: 300, distanceX: 100, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l6_hz_spikes_goal", x: 4060, y: 880, width: 100, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "l6_acorn1", x: 1240, y: 140, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l6_acorn2", x: 2230, y: 790, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l6_acorn3", x: 3980, y: 60, width: 26, height: 26, type: "acorn", value: 1500 },

      // Weapons & Gadgets
      { id: "l6_shield", x: 200, y: 770, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l6_power_speed", x: 620, y: 470, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l6_power_jump", x: 1000, y: 750, width: 24, height: 24, type: "powerup_jump", value: 300 },
      { id: "l6_blaster", x: 1040, y: 260, width: 28, height: 28, type: "blaster", value: 1000 },
      { id: "l6_jetpack", x: 2780, y: 120, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l6_fuel1", x: 3040, y: 80, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Layer 1
      { id: "l6_c1", x: 140, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c_trench1", x: 380, y: 870, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_g1", x: 620, y: 410, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l6_c2", x: 760, y: 410, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 2
      { id: "l6_c3", x: 890, y: 330, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c4", x: 1040, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c5", x: 1180, y: 510, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_g2", x: 1640, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 3
      { id: "l6_c6", x: 1860, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c7", x: 2080, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c8", x: 2240, y: 240, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c9", x: 1980, y: 630, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_g_vault", x: 2120, y: 810, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 4
      { id: "l6_c10", x: 2700, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c11", x: 2840, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_g3", x: 2980, y: 270, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l6_c12", x: 2860, y: 120, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 5
      { id: "l6_c13", x: 3460, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c14", x: 3620, y: 290, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c15", x: 3520, y: 730, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_c16", x: 4180, y: 250, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l6_g4", x: 4230, y: 160, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      { id: "l6_e_drone1", x: 580, y: 470, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 520, maxX: 680, facing: 1 },
      { id: "l6_e_patrol1", x: 620, y: 494, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 540, maxX: 700, facing: -1 },
      { id: "l6_e_drone2", x: 1100, y: 270, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 1020, maxX: 1200, facing: -1 },
      { id: "l6_e_slime1", x: 960, y: 616, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 930, maxX: 1040, facing: 1 },
      { id: "l6_e_drone3", x: 1760, y: 270, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 1700, maxX: 1880, facing: 1 },
      { id: "l6_e_patrol2", x: 2460, y: 324, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 2430, maxX: 2540, facing: -1 },
      { id: "l6_e_slime2", x: 2110, y: 836, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 2090, maxX: 2150, facing: 1 },
      { id: "l6_e_patrol3", x: 2740, y: 414, width: 28, height: 26, type: "patroller", vx: 0.85, vy: 0, minX: 2660, maxX: 2880, facing: 1 },
      { id: "l6_e_drone4", x: 2840, y: 110, width: 26, height: 22, type: "flyer", vx: -1.2, vy: 0, minX: 2740, maxX: 2940, facing: -1 },
      { id: "l6_e_drone5", x: 3880, y: 180, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 3800, maxX: 3960, facing: 1 },
      { id: "l6_e_patrol4", x: 4200, y: 274, width: 28, height: 26, type: "patroller", vx: 0.7, vy: 0, minX: 4170, maxX: 4320, facing: 1 }
    ],
    parTime: 85,
    threeStarScore: 8500
  },
  {
    id: 7,
    title: "7. Nebula Fortress: The Starlight Array",
    worldNumber: 1,
    worldName: "Cosmic Deep Space",
    gameplayType: "gadget",
    category: "classic",
    description: "Infiltrate the deep orbital Nebula Fortress! Harness static and sweeping mobile anti-gravity tractor beams, traverse Dyson solar rings and crumbling asteroid clusters, and wield plasma blasters and jetpacks to penetrate the Starlight Warp Gate.",
    worldWidth: 4400,
    worldHeight: 960,
    theme: THEMES.space,
    playerStart: { x: 80, y: 780 },
    goal: { x: 4240, y: 200, width: 44, height: 60 },
    checkpoints: [
      { x: 1540, y: 380, width: 30, height: 40, activated: false },
      { x: 2680, y: 400, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: Fortress Citadel Ingress & Lower Sub-Level (x: 0 to 860)
      // ==========================================
      { id: "l7_deck_start", x: 0, y: 820, width: 320, height: 140, type: "solid" },
      { id: "l7_step1", x: 320, y: 760, width: 80, height: 24, type: "solid" },
      // Anti-Gravity Grav-Lift 1 (Ascend from Hangar floor to upper deck)
      { id: "l7_grav_lift1", x: 420, y: 500, width: 64, height: 320, type: "anti_grav" },
      // Upper Fortress Balcony & Sky Crane
      { id: "l7_balcony1", x: 500, y: 500, width: 190, height: 24, type: "solid" },
      { id: "l7_crane1", x: 710, y: 440, width: 100, height: 16, type: "one-way" },
      // Sub-floor Air Duct Trench & Launch Spring underneath
      { id: "l7_trench_floor", x: 320, y: 910, width: 400, height: 50, type: "solid" },
      { id: "l7_trench_spring", x: 660, y: 894, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 2: Dyson Solar Rings & Sweeping Nebula Ferry (x: 840 to 1740)
      // ==========================================
      // High Solar Ring Route (Solar Panel Gratings with Blaster)
      { id: "l7_solar_ring1", x: 840, y: 360, width: 120, height: 16, type: "one-way" },
      { id: "l7_solar_ring2", x: 1000, y: 300, width: 120, height: 16, type: "one-way" },
      // NEW MECHANIC: Sweeping Mobile Anti-Gravity Tractor Beam (drifts across deep abyss)
      { id: "l7_sweeping_grav1", x: 920, y: 520, width: 64, height: 280, type: "anti_grav", startX: 920, startY: 520, distanceX: 180, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      // Drifting Meteor Asteroid stepping stones (crumbling cosmic rock)
      { id: "l7_asteroid1", x: 1140, y: 540, width: 65, height: 18, type: "crumbling" },
      { id: "l7_asteroid2", x: 1240, y: 460, width: 65, height: 18, type: "crumbling" },
      { id: "l7_asteroid3", x: 1150, y: 380, width: 65, height: 18, type: "crumbling" },
      // Secret Starlight Observatory (Holding Golden Acorn #1)
      { id: "l7_secret_roost", x: 1220, y: 180, width: 90, height: 18, type: "solid" },
      // Anti-Gravity Grav-Lift 2 (Vertical Void Recovery)
      { id: "l7_grav_lift2", x: 1360, y: 460, width: 64, height: 320, type: "anti_grav" },
      // Checkpoint 1 Hub: Solar Ring Bastion
      { id: "l7_cp1_bastion", x: 1540, y: 380, width: 260, height: 30, type: "solid" },
      { id: "l7_cp1_gantry", x: 1620, y: 270, width: 110, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 3: Supercollider Plasma Core & Lower Reactor Trench (x: 1740 to 2680)
      // ==========================================
      // Upper Supercollider Expressway
      { id: "l7_core_rail1", x: 1820, y: 320, width: 110, height: 18, type: "one-way" },
      { id: "l7_shuttle2", x: 1980, y: 270, width: 85, height: 18, type: "solid", startX: 1980, startY: 270, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l7_asteroid4", x: 2210, y: 280, width: 65, height: 18, type: "crumbling" },
      { id: "l7_asteroid5", x: 2320, y: 310, width: 65, height: 18, type: "crumbling" },
      { id: "l7_collider_deck", x: 2430, y: 340, width: 140, height: 24, type: "solid" },
      // Lower Plasma Vault Route
      { id: "l7_vault_entry", x: 1820, y: 520, width: 70, height: 16, type: "one-way" },
      { id: "l7_reactor_catwalk", x: 1940, y: 680, width: 110, height: 20, type: "solid" },
      { id: "l7_island1", x: 2080, y: 860, width: 80, height: 24, type: "solid" },
      { id: "l7_island2", x: 2210, y: 840, width: 85, height: 24, type: "solid" },
      // Anti-Gravity Grav-Lift 3 (Ascend out of Plasma Vault)
      { id: "l7_grav_lift3", x: 2340, y: 500, width: 64, height: 350, type: "anti_grav" },

      // ==========================================
      // LAYER 4: Dyson Spire & Celestial Flight Deck (x: 2640 to 3500)
      // ==========================================
      // Checkpoint 2: Promenade Hub
      { id: "l7_cp2_promenade", x: 2680, y: 400, width: 280, height: 26, type: "solid" },
      // High Sky Flight Deck (Jetpack Station)
      { id: "l7_flight_deck", x: 2760, y: 160, width: 260, height: 24, type: "solid" },
      { id: "l7_crane_beam", x: 3040, y: 110, width: 80, height: 16, type: "one-way" },
      // Anti-Gravity Grav-Lift 4 (Promenade Express to Flight Deck)
      { id: "l7_grav_lift4", x: 2990, y: 170, width: 64, height: 240, type: "anti_grav" },
      // Dyson Core Monolith & Climbing Rungs
      { id: "l7_monolith", x: 3100, y: 460, width: 90, height: 340, type: "solid" },
      { id: "l7_rung1", x: 3110, y: 390, width: 70, height: 14, type: "one-way" },
      { id: "l7_rung2", x: 3110, y: 320, width: 70, height: 14, type: "one-way" },
      { id: "l7_rung3", x: 3110, y: 250, width: 70, height: 14, type: "one-way" },
      // Moving Space Ferry 3
      { id: "l7_shuttle3", x: 3230, y: 440, width: 90, height: 18, type: "solid", startX: 3230, startY: 440, distanceX: 160, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },

      // ==========================================
      // LAYER 5: Nebula Citadel Apex & Starlight Warp Gate (x: 3450 to 4400)
      // ==========================================
      // Stepped citadel apex spires with open lower underpass
      { id: "l7_apex_step1", x: 3460, y: 400, width: 110, height: 180, type: "solid" },
      { id: "l7_apex_step2", x: 3620, y: 320, width: 110, height: 260, type: "solid" },
      { id: "l7_apex_step3", x: 3780, y: 240, width: 120, height: 340, type: "solid" },
      // Stratosphere Sensor Spire (Golden Acorn #3)
      { id: "l7_spire1", x: 3920, y: 130, width: 70, height: 20, type: "one-way" },
      { id: "l7_mast", x: 4000, y: 90, width: 60, height: 18, type: "one-way" },
      // Final asteroid debris
      { id: "l7_final_meteor1", x: 4030, y: 190, width: 60, height: 16, type: "crumbling" },
      { id: "l7_final_meteor2", x: 4120, y: 230, width: 60, height: 16, type: "crumbling" },
      // Goal Monolith & Safety Recovery Deck
      { id: "l7_goal_monolith", x: 4180, y: 280, width: 200, height: 560, type: "solid" },
      // Safety Recovery Deck with rescue spring (continuous underpass under spires)
      { id: "l7_safety_deck", x: 3360, y: 780, width: 720, height: 100, type: "solid" },
      { id: "l7_safety_spring", x: 3920, y: 764, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      { id: "l7_hz_void1", x: 760, y: 920, width: 920, height: 20, type: "lava" },
      { id: "l7_hz_saw1", x: 1020, y: 500, width: 38, height: 38, type: "saw", startX: 1020, startY: 500, distanceX: 130, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l7_hz_plasma_rift", x: 1800, y: 920, width: 660, height: 20, type: "lava" },
      { id: "l7_hz_saw2", x: 2140, y: 200, width: 40, height: 40, type: "saw", startX: 2140, startY: 200, distanceX: 0, distanceY: 130, speed: 2.2, vx: 0, vy: 2.2 },
      { id: "l7_hz_saw3", x: 4000, y: 290, width: 40, height: 40, type: "saw", startX: 4000, startY: 290, distanceX: 100, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l7_hz_spikes_goal", x: 4080, y: 880, width: 100, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "l7_acorn1", x: 1250, y: 130, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l7_acorn2", x: 2240, y: 790, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l7_acorn3", x: 4020, y: 50, width: 26, height: 26, type: "acorn", value: 1500 },

      // Weapons & Gadgets
      { id: "l7_shield", x: 180, y: 770, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l7_power_speed", x: 580, y: 450, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l7_power_jump", x: 1020, y: 750, width: 24, height: 24, type: "powerup_jump", value: 300 },
      { id: "l7_blaster", x: 1040, y: 240, width: 28, height: 28, type: "blaster", value: 1000 },
      { id: "l7_jetpack", x: 2820, y: 110, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l7_fuel1", x: 3080, y: 70, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Layer 1
      { id: "l7_c1", x: 140, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c_trench1", x: 360, y: 870, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_g1", x: 600, y: 390, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l7_c2", x: 740, y: 390, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 2
      { id: "l7_c3", x: 880, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c4", x: 1030, y: 250, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c5", x: 1170, y: 490, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_g2", x: 1660, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 3
      { id: "l7_c6", x: 1860, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c7", x: 2080, y: 220, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c8", x: 2250, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c9", x: 1980, y: 630, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_g_vault", x: 2130, y: 810, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 4
      { id: "l7_c10", x: 2740, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c11", x: 2880, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_g3", x: 3020, y: 250, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l7_c12", x: 2900, y: 110, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 5
      { id: "l7_c13", x: 3500, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c14", x: 3660, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c15", x: 3560, y: 730, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_c16", x: 4200, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l7_g4", x: 4250, y: 140, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      { id: "l7_e_drone1", x: 560, y: 450, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 500, maxX: 660, facing: 1 },
      { id: "l7_e_patrol1", x: 600, y: 474, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 520, maxX: 680, facing: -1 },
      { id: "l7_e_drone2", x: 1080, y: 250, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 1000, maxX: 1180, facing: -1 },
      { id: "l7_e_slime1", x: 940, y: 616, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 910, maxX: 1020, facing: 1 },
      { id: "l7_e_drone3", x: 1740, y: 270, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 1680, maxX: 1860, facing: 1 },
      { id: "l7_e_patrol2", x: 2470, y: 314, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 2440, maxX: 2550, facing: -1 },
      { id: "l7_e_slime2", x: 2120, y: 836, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 2100, maxX: 2160, facing: 1 },
      { id: "l7_e_patrol3", x: 2780, y: 374, width: 28, height: 26, type: "patroller", vx: 0.85, vy: 0, minX: 2700, maxX: 2920, facing: 1 },
      { id: "l7_e_drone4", x: 2880, y: 100, width: 26, height: 22, type: "flyer", vx: -1.2, vy: 0, minX: 2780, maxX: 2980, facing: -1 },
      { id: "l7_e_drone5", x: 3920, y: 170, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 3840, maxX: 4000, facing: 1 },
      { id: "l7_e_patrol4", x: 4220, y: 254, width: 28, height: 26, type: "patroller", vx: 0.7, vy: 0, minX: 4190, maxX: 4340, facing: 1 }
    ],
    parTime: 85,
    threeStarScore: 8800
  },
  {
    id: 8,
    title: "8. Infernal Caldera: The Molten Depths",
    worldNumber: 1,
    worldName: "Infernal Volcano",
    gameplayType: "gadget",
    category: "classic",
    description: "Plunge into the blazing heart of the Infernal Caldera! Brave surging lava pits that rise and fall with the volcanic tide, dodge bouncing fireballs spit by fiery Imps, and harness cooling basalt crusts and volcanic geysers to conquer the summit.",
    worldWidth: 4400,
    worldHeight: 960,
    theme: THEMES.volcano,
    playerStart: { x: 80, y: 780 },
    goal: { x: 4240, y: 200, width: 44, height: 60 },
    checkpoints: [
      { x: 1540, y: 380, width: 30, height: 40, activated: false },
      { x: 2680, y: 400, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: Obsidian Caldera Ingress & Surging Lava Pit (x: 0 to 860)
      // ==========================================
      { id: "l8_deck_start", x: 0, y: 820, width: 320, height: 140, type: "solid" },
      { id: "l8_step1", x: 320, y: 760, width: 80, height: 24, type: "solid" },
      // Volcanic Steam Geyser (Bouncy launch pad)
      { id: "l8_geyser_spring1", x: 360, y: 744, width: 48, height: 16, type: "bouncy" },
      // High Obsidian Arch Route
      { id: "l8_arch1", x: 460, y: 480, width: 140, height: 24, type: "solid" },
      { id: "l8_gantry1", x: 640, y: 440, width: 110, height: 18, type: "one-way" },
      // Sub-floor basalt stepping stones across the rising lava pit (accessible only when lava is low!)
      { id: "l8_trench_stone1", x: 480, y: 820, width: 80, height: 24, type: "solid" },
      { id: "l8_trench_stone2", x: 620, y: 820, width: 80, height: 24, type: "solid" },
      { id: "l8_trench_spring", x: 740, y: 804, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 2: Basalt Fissure & Surging Magma Cavern (x: 840 to 1740)
      // ==========================================
      // High Scorched Magma Grate Route (holding Blaster)
      { id: "l8_ledge1", x: 840, y: 360, width: 120, height: 16, type: "one-way" },
      { id: "l8_ledge2", x: 1000, y: 300, width: 120, height: 16, type: "one-way" },
      // Mid moving basalt ferry across the second surging lava pit
      { id: "l8_shuttle1", x: 960, y: 520, width: 85, height: 18, type: "solid", startX: 960, startY: 520, distanceX: 180, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      // Low sub-floor catwalk (submerged when lava surges high!)
      { id: "l8_catwalk1", x: 1000, y: 800, width: 160, height: 24, type: "solid" },
      // Drifting Cooling Lava Rock stepping stones (crumbling volcanic rock)
      { id: "l8_crumb_rock1", x: 1160, y: 520, width: 65, height: 18, type: "crumbling" },
      { id: "l8_crumb_rock2", x: 1260, y: 450, width: 65, height: 18, type: "crumbling" },
      { id: "l8_crumb_rock3", x: 1170, y: 370, width: 65, height: 18, type: "crumbling" },
      // Secret Caldera Altar (Holding Golden Acorn #1)
      { id: "l8_secret_altar", x: 1220, y: 170, width: 90, height: 18, type: "solid" },
      // Volcanic Geyser Launch 2 (Vertical Recovery)
      { id: "l8_geyser2", x: 1380, y: 504, width: 48, height: 16, type: "bouncy" },
      // Checkpoint 1 Hub: Caldera Bastion
      { id: "l8_cp1_bastion", x: 1540, y: 380, width: 260, height: 30, type: "solid" },
      { id: "l8_cp1_gantry", x: 1620, y: 270, width: 110, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 3: The Inferno Core & Great Surging Magma Sea (x: 1740 to 2680)
      // ==========================================
      // Upper Core Expressway
      { id: "l8_core_grate1", x: 1820, y: 320, width: 110, height: 18, type: "one-way" },
      { id: "l8_shuttle2", x: 1980, y: 270, width: 85, height: 18, type: "solid", startX: 1980, startY: 270, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l8_crumb4", x: 2210, y: 280, width: 65, height: 18, type: "crumbling" },
      { id: "l8_crumb5", x: 2320, y: 310, width: 65, height: 18, type: "crumbling" },
      { id: "l8_core_deck", x: 2430, y: 340, width: 140, height: 24, type: "solid" },
      // Lower Magma Vault Route (submerged by Surging Lava Pit 3 when high!)
      { id: "l8_vault_entry", x: 1820, y: 520, width: 70, height: 16, type: "one-way" },
      { id: "l8_reactor_catwalk", x: 1940, y: 680, width: 110, height: 20, type: "solid" },
      { id: "l8_island1", x: 2080, y: 840, width: 80, height: 24, type: "solid" },
      { id: "l8_island2", x: 2210, y: 820, width: 85, height: 24, type: "solid" },
      // Volcanic Geyser Spring 3 (Catapults player out of magma vault to Core Deck)
      { id: "l8_vault_spring", x: 2340, y: 804, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 4: Volcano Spire & Rocketeer Launchpad (x: 2640 to 3500)
      // ==========================================
      // Checkpoint 2: Promenade Hub
      { id: "l8_cp2_promenade", x: 2680, y: 400, width: 280, height: 26, type: "solid" },
      // High Volcano Rim Flight Deck (Jetpack Station)
      { id: "l8_flight_deck", x: 2760, y: 160, width: 260, height: 24, type: "solid" },
      { id: "l8_crane_beam", x: 3040, y: 110, width: 80, height: 16, type: "one-way" },
      // Spire Geyser Launch to Flight Deck
      { id: "l8_spire_spring", x: 2980, y: 384, width: 48, height: 16, type: "bouncy" },
      // Obsidian Monolith & Climbing Rungs
      { id: "l8_monolith", x: 3100, y: 460, width: 90, height: 340, type: "solid" },
      { id: "l8_rung1", x: 3110, y: 390, width: 70, height: 14, type: "one-way" },
      { id: "l8_rung2", x: 3110, y: 320, width: 70, height: 14, type: "one-way" },
      { id: "l8_rung3", x: 3110, y: 250, width: 70, height: 14, type: "one-way" },
      // Moving Basalt Ferry 3
      { id: "l8_shuttle3", x: 3230, y: 440, width: 90, height: 18, type: "solid", startX: 3230, startY: 440, distanceX: 160, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },

      // ==========================================
      // LAYER 5: The Infernal Summit & Molten Portal (x: 3450 to 4400)
      // ==========================================
      // Stepped volcanic spires with open lower underpass
      { id: "l8_summit_step1", x: 3460, y: 400, width: 110, height: 180, type: "solid" },
      { id: "l8_summit_step2", x: 3620, y: 320, width: 110, height: 260, type: "solid" },
      { id: "l8_summit_step3", x: 3780, y: 240, width: 120, height: 340, type: "solid" },
      // Stratosphere Volcanic Spire (Holding Golden Acorn #3)
      { id: "l8_spire1", x: 3920, y: 130, width: 70, height: 20, type: "one-way" },
      { id: "l8_mast", x: 4000, y: 90, width: 60, height: 18, type: "one-way" },
      // Final crumbling cooling crusts
      { id: "l8_final_crumb1", x: 4030, y: 190, width: 60, height: 16, type: "crumbling" },
      { id: "l8_final_crumb2", x: 4120, y: 230, width: 60, height: 16, type: "crumbling" },
      // Goal Portal Monolith & Safety Recovery Deck
      { id: "l8_goal_monolith", x: 4180, y: 280, width: 200, height: 560, type: "solid" },
      // Safety Recovery Deck with rescue spring (continuous underpass under spires)
      { id: "l8_safety_deck", x: 3360, y: 780, width: 720, height: 100, type: "solid" },
      { id: "l8_safety_spring", x: 3920, y: 764, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      // SURGING RISING & FALLING LAVA PIT 1 (Surges up and down across Layer 1)
      { id: "l8_hz_rising_lava1", x: 400, y: 860, width: 440, height: 160, type: "lava", startX: 400, startY: 860, distanceX: 0, distanceY: -220, speed: 1.6, vx: 0, vy: -1.6 },
      // Moving saw blade in Layer 1
      { id: "l8_hz_saw1", x: 670, y: 390, width: 38, height: 38, type: "saw", startX: 670, startY: 390, distanceX: 80, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      // SURGING RISING & FALLING LAVA PIT 2 (Surges up and down across Layer 2)
      { id: "l8_hz_rising_lava2", x: 940, y: 880, width: 420, height: 180, type: "lava", startX: 940, startY: 880, distanceX: 0, distanceY: -260, speed: 1.8, vx: 0, vy: -1.8 },
      // SURGING RISING & FALLING LAVA PIT 3 (Surges up and down across Layer 3)
      { id: "l8_hz_rising_lava3", x: 1820, y: 920, width: 680, height: 200, type: "lava", startX: 1820, startY: 920, distanceX: 0, distanceY: -280, speed: 2.0, vx: 0, vy: -2.0 },
      { id: "l8_hz_saw2", x: 2140, y: 200, width: 40, height: 40, type: "saw", startX: 2140, startY: 200, distanceX: 0, distanceY: 130, speed: 2.2, vx: 0, vy: 2.2 },
      // SURGING RISING & FALLING LAVA PIT 4 (Surges up and down at Caldera Base)
      { id: "l8_hz_rising_lava4", x: 3440, y: 920, width: 700, height: 200, type: "lava", startX: 3440, startY: 920, distanceX: 0, distanceY: -220, speed: 1.8, vx: 0, vy: -1.8 },
      { id: "l8_hz_saw3", x: 4000, y: 290, width: 40, height: 40, type: "saw", startX: 4000, startY: 290, distanceX: 100, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l8_hz_spikes_goal", x: 4080, y: 880, width: 100, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "l8_acorn1", x: 1250, y: 120, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l8_acorn2", x: 2240, y: 770, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l8_acorn3", x: 4020, y: 50, width: 26, height: 26, type: "acorn", value: 1500 },

      // Weapons & Gadgets
      { id: "l8_shield", x: 180, y: 770, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l8_power_speed", x: 500, y: 430, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l8_power_jump", x: 1020, y: 750, width: 24, height: 24, type: "powerup_jump", value: 300 },
      { id: "l8_blaster", x: 1040, y: 240, width: 28, height: 28, type: "blaster", value: 1000 },
      { id: "l8_jetpack", x: 2820, y: 110, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l8_fuel1", x: 3080, y: 70, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Layer 1
      { id: "l8_c1", x: 140, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c_trench1", x: 510, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_g1", x: 570, y: 390, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l8_c2", x: 680, y: 390, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 2
      { id: "l8_c3", x: 880, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c4", x: 1030, y: 250, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c5", x: 1190, y: 470, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_g2", x: 1660, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 3
      { id: "l8_c6", x: 1860, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c7", x: 2080, y: 220, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c8", x: 2250, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c9", x: 1980, y: 630, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_g_vault", x: 2130, y: 790, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 4
      { id: "l8_c10", x: 2740, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c11", x: 2880, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_g3", x: 3020, y: 250, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l8_c12", x: 2900, y: 110, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 5
      { id: "l8_c13", x: 3500, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c14", x: 3660, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c15", x: 3560, y: 730, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_c16", x: 4200, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l8_g4", x: 4250, y: 140, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      // Fire Imps that spit leaping fireballs
      { id: "l8_e_imp1", x: 520, y: 440, width: 28, height: 28, type: "fire_imp", vx: 0.8, vy: 0, minX: 470, maxX: 590, facing: 1 },
      { id: "l8_e_patrol1", x: 600, y: 474, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 520, maxX: 680, facing: -1 },
      { id: "l8_e_imp2", x: 1640, y: 340, width: 28, height: 28, type: "fire_imp", vx: -0.9, vy: 0, minX: 1560, maxX: 1760, facing: -1 },
      { id: "l8_e_slime1", x: 1040, y: 776, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 1010, maxX: 1140, facing: 1 },
      { id: "l8_e_drone1", x: 1740, y: 270, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 1680, maxX: 1860, facing: 1 },
      { id: "l8_e_imp3", x: 2780, y: 360, width: 28, height: 28, type: "fire_imp", vx: 0.85, vy: 0, minX: 2700, maxX: 2920, facing: 1 },
      { id: "l8_e_slime2", x: 2120, y: 816, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 2090, maxX: 2150, facing: 1 },
      { id: "l8_e_patrol2", x: 2470, y: 314, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 2440, maxX: 2550, facing: -1 },
      { id: "l8_e_drone2", x: 2880, y: 100, width: 26, height: 22, type: "flyer", vx: -1.2, vy: 0, minX: 2780, maxX: 2980, facing: -1 },
      { id: "l8_e_imp4", x: 3540, y: 360, width: 28, height: 28, type: "fire_imp", vx: 0.8, vy: 0, minX: 3480, maxX: 3590, facing: 1 },
      { id: "l8_e_patrol3", x: 4220, y: 254, width: 28, height: 26, type: "patroller", vx: 0.7, vy: 0, minX: 4190, maxX: 4340, facing: 1 }
    ],
    parTime: 85,
    threeStarScore: 8800
  },
  {
    id: 9,
    title: "9. Borealis Glacier: The Frostbite Citadel",
    worldNumber: 1,
    worldName: "Borealis Glacier",
    gameplayType: "gadget",
    category: "classic",
    description: "Scale the freezing heights of the Borealis Glacier! Brave dancing aurora skies, surging sub-zero cryo-pools that rise and fall with the glacial tides, dodge rolling snowballs hurled by the Frost Yeti, and leap across honeycombed ice floes and frost-geysers to breach the Citadel Apex.",
    worldWidth: 4600,
    worldHeight: 960,
    theme: THEMES.glacier,
    playerStart: { x: 80, y: 780 },
    goal: { x: 4400, y: 200, width: 44, height: 60 },
    checkpoints: [
      { x: 1540, y: 380, width: 30, height: 40, activated: false },
      { x: 2680, y: 400, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: Glacier Ingress & Sub-Zero Cryo Surge (x: 0 to 860)
      // ==========================================
      { id: "l9_deck_start", x: 0, y: 820, width: 320, height: 140, type: "solid" },
      { id: "l9_step1", x: 320, y: 760, width: 80, height: 24, type: "solid" },
      // Cryo Steam Launch Geyser (Bouncy pad)
      { id: "l9_geyser_spring1", x: 360, y: 744, width: 48, height: 16, type: "bouncy" },
      // High Icicle Arch Route
      { id: "l9_arch1", x: 460, y: 480, width: 140, height: 24, type: "solid" },
      { id: "l9_gantry1", x: 640, y: 440, width: 110, height: 18, type: "one-way" },
      // Low Permafrost Trench stones across the surging cryo pit (accessible only when cryo tide is low!)
      { id: "l9_trench_stone1", x: 480, y: 820, width: 80, height: 24, type: "solid" },
      { id: "l9_trench_stone2", x: 620, y: 820, width: 80, height: 24, type: "solid" },
      { id: "l9_trench_spring", x: 740, y: 804, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 2: Frostbite Caverns & The Crystal Ledges (x: 840 to 1740)
      // ==========================================
      // High Crystal Ice Ledges Route (holding Blaster)
      { id: "l9_ledge1", x: 840, y: 360, width: 120, height: 16, type: "one-way" },
      { id: "l9_ledge2", x: 1000, y: 300, width: 120, height: 16, type: "one-way" },
      // Mid moving ice ferry across the second surging cryo pit
      { id: "l9_shuttle1", x: 960, y: 520, width: 85, height: 18, type: "solid", startX: 960, startY: 520, distanceX: 180, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      // Low permafrost catwalk (submerged when cryo surges high!)
      { id: "l9_catwalk1", x: 1000, y: 800, width: 160, height: 24, type: "solid" },
      // Drifting brittle honeycombed ice floes (crumbling glacial rock)
      { id: "l9_crumb_ice1", x: 1160, y: 520, width: 65, height: 18, type: "crumbling" },
      { id: "l9_crumb_ice2", x: 1260, y: 450, width: 65, height: 18, type: "crumbling" },
      { id: "l9_crumb_ice3", x: 1170, y: 370, width: 65, height: 18, type: "crumbling" },
      // Secret Crystal Glacial Altar (Holding Golden Acorn #1)
      { id: "l9_secret_altar", x: 1220, y: 170, width: 90, height: 18, type: "solid" },
      // Cryo Geyser Launch 2 (Vertical Recovery)
      { id: "l9_geyser2", x: 1380, y: 504, width: 48, height: 16, type: "bouncy" },
      // Checkpoint 1 Hub: Glacial Spire Bastion
      { id: "l9_cp1_bastion", x: 1540, y: 380, width: 260, height: 30, type: "solid" },
      { id: "l9_cp1_gantry", x: 1620, y: 270, width: 110, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 3: The Blizzard Core & Great Cryo Chasm (x: 1740 to 2680)
      // ==========================================
      // Upper Core Expressway
      { id: "l9_core_grate1", x: 1820, y: 320, width: 110, height: 18, type: "one-way" },
      { id: "l9_shuttle2", x: 1980, y: 270, width: 85, height: 18, type: "solid", startX: 1980, startY: 270, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l9_crumb4", x: 2210, y: 280, width: 65, height: 18, type: "crumbling" },
      { id: "l9_crumb5", x: 2320, y: 310, width: 65, height: 18, type: "crumbling" },
      { id: "l9_core_deck", x: 2430, y: 340, width: 140, height: 24, type: "solid" },
      // Lower Ice Vault Route (submerged by Surging Cryo Pit 3 when high!)
      { id: "l9_vault_entry", x: 1820, y: 520, width: 70, height: 16, type: "one-way" },
      { id: "l9_reactor_catwalk", x: 1940, y: 680, width: 110, height: 20, type: "solid" },
      { id: "l9_island1", x: 2080, y: 840, width: 80, height: 24, type: "solid" },
      { id: "l9_island2", x: 2210, y: 820, width: 85, height: 24, type: "solid" },
      // Cryo Geyser Spring 3 (Catapults player out of ice vault to Core Deck)
      { id: "l9_vault_spring", x: 2340, y: 804, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 4: The Auroral Spire & High Flight Deck (x: 2640 to 3500)
      // ==========================================
      // Checkpoint 2: Promenade Hub
      { id: "l9_cp2_promenade", x: 2680, y: 400, width: 280, height: 26, type: "solid" },
      // High Auroral Flight Deck (Jetpack Station)
      { id: "l9_flight_deck", x: 2760, y: 160, width: 260, height: 24, type: "solid" },
      { id: "l9_crane_beam", x: 3040, y: 110, width: 80, height: 16, type: "one-way" },
      // Spire Geyser Launch to Flight Deck
      { id: "l9_spire_spring", x: 2980, y: 384, width: 48, height: 16, type: "bouncy" },
      // Crystalline Spire Monolith & Climbing Ice Rungs
      { id: "l9_monolith", x: 3100, y: 460, width: 90, height: 340, type: "solid" },
      { id: "l9_rung1", x: 3110, y: 390, width: 70, height: 14, type: "one-way" },
      { id: "l9_rung2", x: 3110, y: 320, width: 70, height: 14, type: "one-way" },
      { id: "l9_rung3", x: 3110, y: 250, width: 70, height: 14, type: "one-way" },
      // Moving Glacial Ferry 3
      { id: "l9_shuttle3", x: 3230, y: 440, width: 90, height: 18, type: "solid", startX: 3230, startY: 440, distanceX: 160, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },

      // ==========================================
      // LAYER 5: The Frozen Apex & Auroral Warp Portal (x: 3450 to 4600)
      // ==========================================
      { id: "l9_summit_step1", x: 3460, y: 400, width: 110, height: 440, type: "solid" },
      { id: "l9_summit_step2", x: 3620, y: 320, width: 110, height: 520, type: "solid" },
      { id: "l9_summit_step3", x: 3780, y: 240, width: 120, height: 600, type: "solid" },
      // Stratosphere Auroral Spire (Holding Golden Acorn #3)
      { id: "l9_spire1", x: 3920, y: 130, width: 70, height: 20, type: "one-way" },
      { id: "l9_mast", x: 4000, y: 90, width: 60, height: 18, type: "one-way" },
      // Final crumbling fragile ice floes
      { id: "l9_final_crumb1", x: 4030, y: 190, width: 60, height: 16, type: "crumbling" },
      { id: "l9_final_crumb2", x: 4120, y: 230, width: 60, height: 16, type: "crumbling" },
      // Goal Portal Monolith & Safety Recovery Deck
      { id: "l9_goal_monolith", x: 4260, y: 280, width: 200, height: 560, type: "solid" },
      { id: "l9_safety_deck", x: 3460, y: 780, width: 700, height: 100, type: "solid" },
      { id: "l9_safety_spring", x: 3960, y: 764, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      // SURGING RISING & FALLING SUb-ZERO CRYO PIT 1 (Surges up and down across Layer 1)
      { id: "l9_hz_rising_cryo1", x: 400, y: 860, width: 440, height: 160, type: "lava", startX: 400, startY: 860, distanceX: 0, distanceY: -220, speed: 1.6, vx: 0, vy: -1.6 },
      // Moving icicle saw blade in Layer 1
      { id: "l9_hz_saw1", x: 670, y: 390, width: 38, height: 38, type: "saw", startX: 670, startY: 390, distanceX: 80, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      // SURGING RISING & FALLING CRYO PIT 2 (Surges up and down across Layer 2)
      { id: "l9_hz_rising_cryo2", x: 940, y: 880, width: 420, height: 180, type: "lava", startX: 940, startY: 880, distanceX: 0, distanceY: -260, speed: 1.8, vx: 0, vy: -1.8 },
      // SURGING RISING & FALLING CRYO PIT 3 (Surges up and down across Layer 3)
      { id: "l9_hz_rising_cryo3", x: 1820, y: 920, width: 680, height: 200, type: "lava", startX: 1820, startY: 920, distanceX: 0, distanceY: -280, speed: 2.0, vx: 0, vy: -2.0 },
      { id: "l9_hz_saw2", x: 2140, y: 200, width: 40, height: 40, type: "saw", startX: 2140, startY: 200, distanceX: 0, distanceY: 130, speed: 2.2, vx: 0, vy: 2.2 },
      // SURGING RISING & FALLING CRYO PIT 4 (Surges up and down at Glacier Base)
      { id: "l9_hz_rising_cryo4", x: 3440, y: 920, width: 760, height: 200, type: "lava", startX: 3440, startY: 920, distanceX: 0, distanceY: -220, speed: 1.8, vx: 0, vy: -1.8 },
      { id: "l9_hz_saw3", x: 4060, y: 290, width: 40, height: 40, type: "saw", startX: 4060, startY: 290, distanceX: 100, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l9_hz_spikes_goal", x: 4180, y: 880, width: 100, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "l9_acorn1", x: 1250, y: 120, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l9_acorn2", x: 2240, y: 770, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l9_acorn3", x: 4020, y: 50, width: 26, height: 26, type: "acorn", value: 1500 },

      // Weapons & Gadgets
      { id: "l9_shield", x: 180, y: 770, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l9_power_speed", x: 500, y: 430, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l9_power_jump", x: 1020, y: 750, width: 24, height: 24, type: "powerup_jump", value: 300 },
      { id: "l9_blaster", x: 1040, y: 240, width: 28, height: 28, type: "blaster", value: 1000 },
      { id: "l9_jetpack", x: 2820, y: 110, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l9_fuel1", x: 3080, y: 70, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Layer 1
      { id: "l9_c1", x: 140, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c_trench1", x: 510, y: 770, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_g1", x: 570, y: 390, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l9_c2", x: 680, y: 390, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 2
      { id: "l9_c3", x: 880, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c4", x: 1030, y: 250, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c5", x: 1190, y: 470, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_g2", x: 1660, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 3
      { id: "l9_c6", x: 1860, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c7", x: 2080, y: 220, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c8", x: 2250, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c9", x: 1980, y: 630, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_g_vault", x: 2130, y: 790, width: 24, height: 24, type: "gem", value: 500 },

      // Layer 4
      { id: "l9_c10", x: 2740, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c11", x: 2880, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_g3", x: 3020, y: 250, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l9_c12", x: 2900, y: 110, width: 20, height: 20, type: "coin", value: 100 },

      // Layer 5
      { id: "l9_c13", x: 3500, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c14", x: 3660, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c15", x: 3560, y: 730, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_c16", x: 4200, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l9_g4", x: 4320, y: 140, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      // Boreal Frost Yetis that hurl rolling snowballs
      { id: "l9_e_yeti1", x: 520, y: 436, width: 30, height: 30, type: "frost_yeti", vx: 0.8, vy: 0, minX: 470, maxX: 590, facing: 1 },
      { id: "l9_e_patrol1", x: 600, y: 474, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 520, maxX: 680, facing: -1 },
      { id: "l9_e_yeti2", x: 1640, y: 336, width: 30, height: 30, type: "frost_yeti", vx: -0.9, vy: 0, minX: 1560, maxX: 1760, facing: -1 },
      { id: "l9_e_slime1", x: 1040, y: 776, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 1010, maxX: 1140, facing: 1 },
      { id: "l9_e_drone1", x: 1740, y: 270, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 1680, maxX: 1860, facing: 1 },
      { id: "l9_e_yeti3", x: 2090, y: 806, width: 30, height: 30, type: "frost_yeti", vx: 0.7, vy: 0, minX: 2060, maxX: 2160, facing: 1 },
      { id: "l9_e_patrol2", x: 2470, y: 314, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 2440, maxX: 2550, facing: -1 },
      { id: "l9_e_yeti4", x: 2780, y: 356, width: 30, height: 30, type: "frost_yeti", vx: 0.85, vy: 0, minX: 2700, maxX: 2920, facing: 1 },
      { id: "l9_e_drone2", x: 2880, y: 100, width: 26, height: 22, type: "flyer", vx: -1.2, vy: 0, minX: 2780, maxX: 2980, facing: -1 },
      { id: "l9_e_yeti5", x: 3540, y: 356, width: 30, height: 30, type: "frost_yeti", vx: 0.8, vy: 0, minX: 3480, maxX: 3590, facing: 1 },
      { id: "l9_e_patrol3", x: 4300, y: 254, width: 28, height: 26, type: "patroller", vx: 0.7, vy: 0, minX: 4260, maxX: 4380, facing: 1 }
    ],
    parTime: 85,
    threeStarScore: 8800
  },
  {
    id: 10,
    title: "10. Borealis Glacier: Frostbite Citadel Climax",
    worldNumber: 1,
    worldName: "Borealis Glacier",
    gameplayType: "gadget",
    category: "classic",
    description: "The epic climax of Borealis Glacier! Armed with the legendary rapid-fire Snowball Cannon with infinite ammo, hold down fire to unleash a torrent of snowballs and carve through swarms of Frost Yetis, airborne Cryo Drones, Canadian Geese, and invading Fire Imps to conquer the Glacial Citadel Throne!",
    worldWidth: 4800,
    worldHeight: 960,
    theme: THEMES.glacier,
    playerStart: { x: 80, y: 660 },
    goal: { x: 4620, y: 180, width: 44, height: 60 },
    checkpoints: [
      { x: 1600, y: 380, width: 30, height: 40, activated: false },
      { x: 3100, y: 380, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // LAYER 1: Glacial Approach Plains & Fortified Terraces (x: 0 to 1080)
      // Flat plains stretch followed by elevated battle decks and fortress lookout
      // ==========================================
      // Flat Stretch 1: The Glacial Plains (Continuous flat runway for rapid-fire cannon mowing!)
      { id: "l10_plains_flat1", x: 0, y: 700, width: 500, height: 260, type: "solid" },
      // Architectural Elevation Step 1
      { id: "l10_step_terrace1", x: 500, y: 640, width: 80, height: 320, type: "solid" },
      // Flat Stretch 2: Elevated Fortified Parade Deck (Solid elevated flat battle runway at y: 580)
      { id: "l10_promenade_deck", x: 580, y: 580, width: 360, height: 380, type: "solid" },
      // Dual-Route Flat Stretch 3: Lower Subterranean Causeway (Alternative flat route under parade deck)
      { id: "l10_under_causeway", x: 620, y: 840, width: 280, height: 120, type: "solid" },
      // High Fortress Elevation: Watchtower Gantry & Sniper Battlement
      { id: "l10_watchtower_rung", x: 660, y: 460, width: 110, height: 18, type: "one-way" },
      { id: "l10_watchtower_apex", x: 790, y: 380, width: 140, height: 24, type: "solid" },
      // Moving Ice Ferry crossing the Citadel Moat into Layer 2
      { id: "l10_shuttle0", x: 920, y: 500, width: 95, height: 18, type: "solid", startX: 920, startY: 500, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },

      // ==========================================
      // LAYER 2: Frostbite Caverns & Crystal Spires (x: 920 to 1800)
      // ==========================================
      { id: "l10_ledge1", x: 920, y: 360, width: 120, height: 16, type: "one-way" },
      { id: "l10_ledge2", x: 1080, y: 300, width: 120, height: 16, type: "one-way" },
      // Moving Ferry 2
      { id: "l10_shuttle1", x: 1040, y: 560, width: 85, height: 18, type: "solid", startX: 1040, startY: 560, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l10_catwalk1", x: 1040, y: 800, width: 160, height: 24, type: "solid" },
      // Crumbling fragile ice floes
      { id: "l10_crumb_ice1", x: 1140, y: 480, width: 65, height: 18, type: "crumbling" },
      { id: "l10_crumb_ice2", x: 1240, y: 420, width: 65, height: 18, type: "crumbling" },
      { id: "l10_crumb_ice3", x: 1340, y: 360, width: 65, height: 18, type: "crumbling" },
      // Secret High Altar (Golden Acorn #1)
      { id: "l10_secret_altar1", x: 1260, y: 150, width: 90, height: 18, type: "solid" },
      // Cryo Geyser Launch 2
      { id: "l10_geyser2", x: 1440, y: 504, width: 48, height: 16, type: "bouncy" },
      // Checkpoint 1 Hub: Citadel Bastion Courtyard
      { id: "l10_cp1_bastion", x: 1600, y: 380, width: 260, height: 30, type: "solid" },
      { id: "l10_cp1_gantry", x: 1680, y: 270, width: 110, height: 16, type: "one-way" },

      // ==========================================
      // LAYER 3: Blizzard Core & Glacial Engine (x: 1800 to 2800)
      // ==========================================
      { id: "l10_core_grate1", x: 1880, y: 320, width: 110, height: 18, type: "one-way" },
      { id: "l10_core_grate2", x: 2060, y: 260, width: 110, height: 18, type: "one-way" },
      { id: "l10_shuttle2", x: 2180, y: 280, width: 85, height: 18, type: "solid", startX: 2180, startY: 280, distanceX: 180, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l10_crumb4", x: 2420, y: 300, width: 65, height: 18, type: "crumbling" },
      { id: "l10_crumb5", x: 2530, y: 320, width: 65, height: 18, type: "crumbling" },
      { id: "l10_core_deck", x: 2620, y: 340, width: 150, height: 24, type: "solid" },
      // Lower Ice Sump & Secret Grotto (Golden Acorn #2)
      { id: "l10_vault_entry", x: 1860, y: 520, width: 80, height: 16, type: "one-way" },
      { id: "l10_reactor_catwalk", x: 1980, y: 680, width: 120, height: 20, type: "solid" },
      { id: "l10_island1", x: 2160, y: 820, width: 85, height: 24, type: "solid" },
      { id: "l10_island2", x: 2320, y: 800, width: 90, height: 24, type: "solid" },
      { id: "l10_secret_altar2", x: 2360, y: 720, width: 80, height: 18, type: "solid" },
      // Cryo Geyser Launch 3
      { id: "l10_vault_spring", x: 2460, y: 784, width: 48, height: 16, type: "bouncy" },

      // ==========================================
      // LAYER 4: The Auroral Skybridge & Flight Promenade (x: 2750 to 3700)
      // ==========================================
      // Checkpoint 2: The Aurora Skybridge
      { id: "l10_cp2_skybridge", x: 3100, y: 380, width: 280, height: 26, type: "solid" },
      // High Flight Promenade & Jetpack Station
      { id: "l10_flight_deck", x: 3180, y: 160, width: 280, height: 24, type: "solid" },
      { id: "l10_crane_beam", x: 3460, y: 110, width: 90, height: 16, type: "one-way" },
      // Spire Geyser Launch to Skybridge
      { id: "l10_spire_spring", x: 2980, y: 364, width: 48, height: 16, type: "bouncy" },
      // Crystalline Spire Monolith & Climbing Ice Rungs
      { id: "l10_monolith", x: 3500, y: 460, width: 90, height: 340, type: "solid" },
      { id: "l10_rung1", x: 3510, y: 390, width: 70, height: 14, type: "one-way" },
      { id: "l10_rung2", x: 3510, y: 320, width: 70, height: 14, type: "one-way" },
      { id: "l10_rung3", x: 3510, y: 250, width: 70, height: 14, type: "one-way" },
      // Moving Ferry 3
      { id: "l10_shuttle3", x: 3320, y: 440, width: 90, height: 18, type: "solid", startX: 3320, startY: 440, distanceX: 180, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },

      // ==========================================
      // LAYER 5: The Frozen Apex & Citadel Throne (x: 3700 to 4800)
      // ==========================================
      { id: "l10_summit_step1", x: 3740, y: 420, width: 130, height: 460, type: "solid" },
      { id: "l10_summit_step2", x: 3940, y: 340, width: 130, height: 540, type: "solid" },
      { id: "l10_summit_step3", x: 4140, y: 260, width: 140, height: 620, type: "solid" },
      // Stratosphere Auroral Spire (Golden Acorn #3)
      { id: "l10_spire1", x: 4260, y: 130, width: 70, height: 20, type: "one-way" },
      { id: "l10_mast", x: 4340, y: 90, width: 60, height: 18, type: "one-way" },
      // Final Crumbling Floes
      { id: "l10_final_crumb1", x: 4380, y: 190, width: 60, height: 16, type: "crumbling" },
      { id: "l10_final_crumb2", x: 4460, y: 220, width: 60, height: 16, type: "crumbling" },
      // Citadel Throne Monolith & Warp Portal
      { id: "l10_goal_monolith", x: 4560, y: 240, width: 240, height: 660, type: "solid" },
      { id: "l10_safety_deck", x: 3800, y: 780, width: 650, height: 100, type: "solid" },
      { id: "l10_safety_spring", x: 4320, y: 764, width: 48, height: 16, type: "bouncy" }
    ],
    hazards: [
      // Surging Sub-Zero Cryo Pits (Rise and fall dynamically!)
      // Chasm Moat 1: Located at the transition between Layer 1 Plains and Layer 2 Caverns
      { id: "l10_hz_cryo1", x: 940, y: 880, width: 260, height: 160, type: "lava", startX: 940, startY: 880, distanceX: 0, distanceY: -220, speed: 1.8, vx: 0, vy: -1.8 },
      { id: "l10_hz_saw1", x: 750, y: 510, width: 38, height: 38, type: "saw", startX: 750, startY: 510, distanceX: 80, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      { id: "l10_hz_cryo2", x: 960, y: 880, width: 600, height: 180, type: "lava", startX: 960, startY: 880, distanceX: 0, distanceY: -260, speed: 2.0, vx: 0, vy: -2.0 },
      { id: "l10_hz_saw2", x: 1160, y: 360, width: 40, height: 40, type: "saw", startX: 1160, startY: 360, distanceX: 0, distanceY: 100, speed: 2.0, vx: 0, vy: 2.0 },
      { id: "l10_hz_cryo3", x: 1880, y: 920, width: 780, height: 200, type: "lava", startX: 1880, startY: 920, distanceX: 0, distanceY: -280, speed: 2.2, vx: 0, vy: -2.2 },
      { id: "l10_hz_saw3", x: 2260, y: 220, width: 40, height: 40, type: "saw", startX: 2260, startY: 220, distanceX: 120, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l10_hz_cryo4", x: 3700, y: 920, width: 860, height: 200, type: "lava", startX: 3700, startY: 920, distanceX: 0, distanceY: -240, speed: 2.0, vx: 0, vy: -2.0 },
      { id: "l10_hz_saw4", x: 4200, y: 290, width: 40, height: 40, type: "saw", startX: 4200, startY: 290, distanceX: 100, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "l10_hz_spikes_apex", x: 4480, y: 880, width: 100, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "l10_acorn1", x: 1290, y: 100, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l10_acorn2", x: 2390, y: 670, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l10_acorn3", x: 4360, y: 50, width: 26, height: 26, type: "acorn", value: 1500 },

      // NEW POWER-UP: RAPID-FIRE SNOWBALL CANNON!
      { id: "l10_snow_cannon_start", x: 160, y: 650, width: 28, height: 28, type: "snow_cannon", value: 1000 },
      // Backup Cannons after checkpoints in case player respawns
      { id: "l10_snow_cannon_cp1", x: 1640, y: 340, width: 28, height: 28, type: "snow_cannon", value: 500 },
      { id: "l10_snow_cannon_cp2", x: 3140, y: 340, width: 28, height: 28, type: "snow_cannon", value: 500 },

      // Supporting Powerups & Gadgets
      { id: "l10_shield", x: 260, y: 650, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l10_power_speed", x: 840, y: 330, width: 24, height: 24, type: "powerup_speed", value: 300 },
      { id: "l10_power_jump", x: 1060, y: 750, width: 24, height: 24, type: "powerup_jump", value: 300 },
      { id: "l10_jetpack", x: 3200, y: 120, width: 28, height: 28, type: "jetpack", value: 1000 },
      { id: "l10_fuel1", x: 3440, y: 70, width: 22, height: 22, type: "jetpack_fuel", value: 200 },

      // Coins & Gems throughout Fortress
      { id: "l10_c1", x: 210, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c2", x: 360, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c3", x: 480, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_g1", x: 890, y: 330, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l10_c_sump", x: 720, y: 790, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c4", x: 960, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c5", x: 1110, y: 250, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c6", x: 1180, y: 430, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_g2", x: 1720, y: 220, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l10_c7", x: 1920, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c8", x: 2100, y: 210, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c9", x: 2280, y: 230, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_g_vault", x: 2220, y: 770, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l10_c10", x: 2820, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c11", x: 2980, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_g3", x: 3260, y: 110, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l10_c12", x: 3380, y: 110, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c13", x: 3820, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c14", x: 4020, y: 290, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_c15", x: 4220, y: 210, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l10_g4", x: 4420, y: 140, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      // ==========================================
      // CITADEL ENEMY GAUNTLET: 32+ ENEMIES FOR RAPID CANNON TARGETING!
      // ==========================================
      // Wave 1: Glacial Plains & Fortified Terraces
      { id: "l10_e_patrol1", x: 320, y: 654, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 240, maxX: 460, facing: -1 },
      { id: "l10_e_slime1", x: 430, y: 656, width: 28, height: 24, type: "slime", vx: -0.7, vy: 0, minX: 350, maxX: 490, facing: -1 },
      { id: "l10_e_drone1", x: 380, y: 550, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 300, maxX: 460, facing: 1 },
      { id: "l10_e_yeti1", x: 700, y: 536, width: 30, height: 30, type: "frost_yeti", vx: 0.8, vy: 0, minX: 600, maxX: 840, facing: 1 },
      { id: "l10_e_patrol2", x: 840, y: 534, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 740, maxX: 920, facing: -1 },
      { id: "l10_e_imp1", x: 840, y: 334, width: 26, height: 26, type: "fire_imp", vx: 0.7, vy: 0, minX: 800, maxX: 910, facing: 1 },
      { id: "l10_e_drone2", x: 740, y: 320, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 660, maxX: 820, facing: -1 },
      { id: "l10_e_yeti2", x: 880, y: 536, width: 30, height: 30, type: "frost_yeti", vx: -0.85, vy: 0, minX: 800, maxX: 940, facing: -1 },

      // Wave 2: Frostbite Caverns & Spires
      { id: "l10_e_yeti3", x: 1020, y: 516, width: 30, height: 30, type: "frost_yeti", vx: 0.8, vy: 0, minX: 960, maxX: 1100, facing: 1 },
      { id: "l10_e_slime1", x: 1080, y: 776, width: 28, height: 24, type: "slime", vx: 0.7, vy: 0, minX: 1040, maxX: 1180, facing: 1 },
      { id: "l10_e_drone3", x: 1180, y: 220, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 1100, maxX: 1280, facing: 1 },
      { id: "l10_e_goose1", x: 1240, y: 270, width: 30, height: 30, type: "goose", vx: 0.9, vy: 0, minX: 1180, maxX: 1320, facing: -1 },
      { id: "l10_e_drone4", x: 1380, y: 180, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 1300, maxX: 1460, facing: -1 },
      { id: "l10_e_slime2", x: 1380, y: 776, width: 28, height: 24, type: "slime", vx: -0.7, vy: 0, minX: 1320, maxX: 1480, facing: -1 },
      { id: "l10_e_yeti4", x: 1560, y: 336, width: 30, height: 30, type: "frost_yeti", vx: -0.9, vy: 0, minX: 1500, maxX: 1640, facing: -1 },
      { id: "l10_e_patrol2", x: 1680, y: 354, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 1620, maxX: 1760, facing: 1 },

      // Wave 3: Blizzard Core & Glacial Engine
      { id: "l10_e_yeti5", x: 1920, y: 276, width: 30, height: 30, type: "frost_yeti", vx: 0.85, vy: 0, minX: 1860, maxX: 2000, facing: 1 },
      { id: "l10_e_drone5", x: 1960, y: 180, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 1880, maxX: 2060, facing: 1 },
      { id: "l10_e_patrol3", x: 2020, y: 654, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 1980, maxX: 2100, facing: -1 },
      { id: "l10_e_imp2", x: 2100, y: 216, width: 26, height: 26, type: "fire_imp", vx: 0.7, vy: 0, minX: 2060, maxX: 2180, facing: 1 },
      { id: "l10_e_drone6", x: 2140, y: 140, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 2080, maxX: 2260, facing: -1 },
      { id: "l10_e_yeti6", x: 2260, y: 756, width: 30, height: 30, type: "frost_yeti", vx: 0.8, vy: 0, minX: 2180, maxX: 2340, facing: 1 },
      { id: "l10_e_goose2", x: 2380, y: 250, width: 30, height: 30, type: "goose", vx: 0.85, vy: 0, minX: 2300, maxX: 2460, facing: -1 },
      { id: "l10_e_imp3", x: 2480, y: 294, width: 26, height: 26, type: "fire_imp", vx: 0.75, vy: 0, minX: 2420, maxX: 2540, facing: 1 },
      { id: "l10_e_yeti7", x: 2600, y: 316, width: 30, height: 30, type: "frost_yeti", vx: -0.8, vy: 0, minX: 2540, maxX: 2700, facing: -1 },

      // Wave 4: Auroral Skybridge & Flight Promenade
      { id: "l10_e_yeti8", x: 2840, y: 356, width: 30, height: 30, type: "frost_yeti", vx: 0.85, vy: 0, minX: 2760, maxX: 2940, facing: 1 },
      { id: "l10_e_drone7", x: 2900, y: 160, width: 26, height: 22, type: "flyer", vx: 1.4, vy: 0, minX: 2820, maxX: 3020, facing: 1 },
      { id: "l10_e_patrol4", x: 2940, y: 374, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 2880, maxX: 3040, facing: -1 },
      { id: "l10_e_drone8", x: 3080, y: 110, width: 26, height: 22, type: "flyer", vx: -1.4, vy: 0, minX: 3000, maxX: 3200, facing: -1 },
      { id: "l10_e_goose3", x: 3240, y: 110, width: 30, height: 30, type: "goose", vx: 0.9, vy: 0, minX: 3180, maxX: 3340, facing: 1 },
      { id: "l10_e_drone9", x: 3340, y: 80, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 3260, maxX: 3440, facing: 1 },
      { id: "l10_e_imp4", x: 3440, y: 110, width: 26, height: 26, type: "fire_imp", vx: 0.8, vy: 0, minX: 3380, maxX: 3500, facing: -1 },
      { id: "l10_e_yeti9", x: 3580, y: 356, width: 30, height: 30, type: "frost_yeti", vx: 0.8, vy: 0, minX: 3500, maxX: 3660, facing: 1 },

      // Wave 5: The Frozen Apex & Citadel Throne Grand Climax
      { id: "l10_e_yeti10", x: 3780, y: 376, width: 30, height: 30, type: "frost_yeti", vx: 0.85, vy: 0, minX: 3720, maxX: 3880, facing: 1 },
      { id: "l10_e_patrol5", x: 3820, y: 394, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 3760, maxX: 3900, facing: -1 },
      { id: "l10_e_drone10", x: 3860, y: 200, width: 26, height: 22, type: "flyer", vx: 1.4, vy: 0, minX: 3800, maxX: 3980, facing: 1 },
      { id: "l10_e_yeti11", x: 3980, y: 296, width: 30, height: 30, type: "frost_yeti", vx: -0.85, vy: 0, minX: 3920, maxX: 4080, facing: -1 },
      { id: "l10_e_drone11", x: 4060, y: 150, width: 26, height: 22, type: "flyer", vx: -1.4, vy: 0, minX: 3980, maxX: 4160, facing: -1 },
      { id: "l10_e_yeti12", x: 4180, y: 216, width: 30, height: 30, type: "frost_yeti", vx: 0.9, vy: 0, minX: 4120, maxX: 4280, facing: 1 },
      { id: "l10_e_imp5", x: 4220, y: 216, width: 26, height: 26, type: "fire_imp", vx: 0.8, vy: 0, minX: 4160, maxX: 4300, facing: -1 },
      { id: "l10_e_drone12", x: 4260, y: 130, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 4180, maxX: 4380, facing: 1 },
      { id: "l10_e_goose4", x: 4360, y: 160, width: 30, height: 30, type: "goose", vx: 0.9, vy: 0, minX: 4280, maxX: 4440, facing: -1 },
      { id: "l10_e_drone13", x: 4460, y: 140, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 4380, maxX: 4540, facing: -1 },
      { id: "l10_e_yeti13", x: 4580, y: 196, width: 30, height: 30, type: "frost_yeti", vx: 0.8, vy: 0, minX: 4540, maxX: 4680, facing: -1 }
    ],
    parTime: 95,
    threeStarScore: 14500
  }
];
