import { LevelData } from '../../types/game';
import { THEMES } from '../themes';

export const WORLD_3_LEVELS: LevelData[] = [
  {
    id: 21,
    title: "21. Twilight Dunes: The Great Sandstone Oasis",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "terrain",
    category: "classic",
    description: "Embark on the grand expedition into the Twilight Dunes! Traverse the Gateway of the Sphinx, leap across crumbling sun-obelisks, uncover the sunken emerald aqueducts of the Pharaoh's Oasis, discover ancient blaster armories, and ascend the monumental steps of the Great Pyramid.",
    worldWidth: 5400,
    worldHeight: 900,
    theme: THEMES.twilightDunes || THEMES.desert,
    playerStart: { x: 80, y: 720 },
    goal: { x: 5260, y: 400, width: 44, height: 60 },
    checkpoints: [
      { x: 1360, y: 600, width: 30, height: 40, activated: false },
      { x: 2700, y: 480, width: 30, height: 40, activated: false },
      { x: 4050, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ACT 1: The Gateway of the Sphinx & Whispering Mirage Dunes
      // Starting Caravanserai Base
      { id: "w21_start_camp", x: 0, y: 760, width: 260, height: 140, type: "solid" },
      { id: "w21_gate_ceil", x: 100, y: 480, width: 220, height: 35, type: "solid" },
      // Stepped Dune Terraces
      { id: "w21_dune_step1", x: 300, y: 680, width: 120, height: 220, type: "solid" },
      { id: "w21_dune_step2", x: 460, y: 600, width: 120, height: 300, type: "solid" },
      // Palm Frond Sand Spring
      { id: "w21_spring1", x: 620, y: 584, width: 50, height: 20, type: "bouncy" },
      // Elevated Colonnade (High Route)
      { id: "w21_colonnade1", x: 720, y: 400, width: 140, height: 20, type: "one-way" },
      { id: "w21_colonnade2", x: 900, y: 340, width: 110, height: 20, type: "solid" },
      // Pharaoh's Obelisk Tip with Golden Acorn #1
      { id: "w21_obelisk_pedestal", x: 1040, y: 220, width: 80, height: 24, type: "solid" },
      { id: "w21_obelisk_crumb", x: 1150, y: 260, width: 85, height: 18, type: "crumbling" },
      // Lower Duneway (Low Route)
      { id: "w21_dune_valley", x: 740, y: 740, width: 240, height: 160, type: "solid" },
      // Horizontal Sandstone Ferry across lower valley
      { id: "w21_ferry1", x: 1020, y: 620, width: 90, height: 20, type: "solid", startX: 1020, startY: 620, distanceX: 160, speed: 1.2, vx: 1.2, vy: 0 },
      // Checkpoint 1 Station Deck
      { id: "w21_p_cp1", x: 1300, y: 640, width: 220, height: 260, type: "solid" },

      // ACT 2: The Sunken Aqueduct & Emerald Palm Oasis Grotto
      // High Cascading Aqueduct Piers
      { id: "w21_aqua_pier1", x: 1560, y: 480, width: 100, height: 20, type: "solid" },
      { id: "w21_aqua_lintel1", x: 1700, y: 420, width: 120, height: 18, type: "one-way" },
      { id: "w21_aqua_pier2", x: 1860, y: 360, width: 100, height: 20, type: "solid" },
      // Vertical Water Crane Bucket Platform (Oscillates vertically)
      { id: "w21_aqua_crane", x: 2000, y: 260, width: 85, height: 20, type: "solid", startX: 2000, startY: 180, distanceY: 180, speed: 1.3, vx: 0, vy: 1.3 },
      { id: "w21_aqua_high_tier", x: 2130, y: 220, width: 110, height: 20, type: "solid" },
      // Subterranean Oasis Grotto (Lower Route into the Lotus Pool)
      { id: "w21_oasis_shelf1", x: 1620, y: 760, width: 140, height: 140, type: "solid" },
      // Sacred Lotus Altar with PRISMATIC MAGNET
      { id: "w21_magnet_altar", x: 1840, y: 800, width: 110, height: 24, type: "solid" },
      // Sunken Pharaoh's Crypt Entrance & Chamber with Golden Acorn #2
      { id: "w21_crypt_lintel", x: 2060, y: 820, width: 110, height: 20, type: "solid" },
      { id: "w21_crypt_shelf", x: 2260, y: 840, width: 140, height: 24, type: "solid" },
      // Ascending Thermal Sand Geyser: Shoots player out of subterranean crypt
      { id: "w21_geyser1", x: 2460, y: 200, width: 95, height: 640, type: "anti_grav" },
      { id: "w21_geyser_landing", x: 2540, y: 190, width: 100, height: 20, type: "solid" },
      // Checkpoint 2 Oasis Colossus Terrace
      { id: "w21_p_cp2", x: 2660, y: 520, width: 200, height: 380, type: "solid" },

      // ACT 3: The Valley of Tombs & Guard Armory
      // Rock-Cut Tomb Entrance & Stepping Lintel
      { id: "w21_tomb_step1", x: 2900, y: 440, width: 100, height: 20, type: "solid" },
      { id: "w21_tomb_lintel1", x: 3040, y: 340, width: 120, height: 18, type: "one-way" },
      // Tomb Guard's Armory Shelf with LASER BLASTER
      { id: "w21_armory_shelf", x: 3180, y: 220, width: 95, height: 20, type: "solid" },
      // Low Tomb Walkway over quicksand bed
      { id: "w21_tomb_walk", x: 3120, y: 620, width: 130, height: 20, type: "solid" },
      // Horizontally oscillating Sand Ferry across tomb chasm
      { id: "w21_tomb_ferry", x: 3320, y: 540, width: 90, height: 20, type: "solid", startX: 3320, startY: 540, distanceX: 180, speed: 1.4, vx: 1.4, vy: 0 },
      // Mirage Phase Ledges across quicksand pit
      { id: "w21_phase1", x: 3560, y: 460, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w21_phase2", x: 3700, y: 400, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      // Mid Sentry Bastion guarded by Dune Scorpion #3
      { id: "w21_bastion_mid", x: 3820, y: 440, width: 110, height: 26, type: "solid" },
      // Crumbling stepping stone before checkpoint
      { id: "w21_tomb_crumb1", x: 3950, y: 380, width: 75, height: 18, type: "crumbling" },
      // Checkpoint 3 Base of the Great Pyramid
      { id: "w21_p_cp3", x: 4020, y: 560, width: 180, height: 340, type: "solid" },

      // ACT 4: The Great Pyramid Ascent & Apex Altar
      // Stepped Pyramid Terraces rising to the sky
      { id: "w21_pyr_tier1", x: 4240, y: 640, width: 120, height: 260, type: "solid" },
      // Bouncy Solar Spring on pyramid flank
      { id: "w21_pyr_spring", x: 4320, y: 624, width: 50, height: 16, type: "bouncy" },
      { id: "w21_pyr_tier2", x: 4400, y: 480, width: 110, height: 420, type: "solid" },
      // Cornice with BUBBLE SHIELD
      { id: "w21_pyr_cornice", x: 4560, y: 460, width: 90, height: 20, type: "solid" },
      // Great Sand Whirlwind Geyser 2: Blasts Barnaby up to the Apex Pinnacle!
      { id: "w21_pyr_geyser", x: 4680, y: 120, width: 95, height: 680, type: "anti_grav" },
      // The Apex Pinnacle & Golden Pyramidion with Golden Acorn #3
      { id: "w21_pyr_apex", x: 4800, y: 180, width: 120, height: 24, type: "solid" },
      // Stepped descending stairs down eastern flank
      { id: "w21_east_step1", x: 4970, y: 320, width: 80, height: 18, type: "one-way" },
      { id: "w21_east_crumb", x: 5080, y: 400, width: 80, height: 18, type: "crumbling" },
      // Grand Goal Altar Platform & Sphinx Promenade
      { id: "w21_goal_dais", x: 5190, y: 440, width: 210, height: 460, type: "solid" }
    ],
    hazards: [
      // Deep Bottom Abyss Quicksand Spike Beds
      { id: "w21_hz_spike1", x: 260, y: 884, width: 1040, height: 26, type: "spike" },
      { id: "w21_hz_spike2", x: 1480, y: 884, width: 1180, height: 26, type: "spike" },
      { id: "w21_hz_spike3", x: 2860, y: 884, width: 1160, height: 26, type: "spike" },
      { id: "w21_hz_spike4", x: 4200, y: 884, width: 990, height: 26, type: "spike" },

      // Overhead Ceiling Spikes in low passages
      { id: "w21_hz_spike_ceil1", x: 780, y: 40, width: 220, height: 26, type: "spike" },
      { id: "w21_hz_spike_ceil2", x: 3040, y: 40, width: 260, height: 26, type: "spike" },

      // Rotating Ancient Sun Saws
      { id: "w21_hz_saw1", x: 560, y: 480, width: 42, height: 42, type: "saw" },
      { id: "w21_hz_saw_crypt", x: 2180, y: 760, width: 44, height: 44, type: "saw" },
      { id: "w21_hz_saw3", x: 3460, y: 360, width: 44, height: 44, type: "saw" },
      { id: "w21_hz_saw4", x: 3760, y: 300, width: 44, height: 44, type: "saw" },
      { id: "w21_hz_saw5", x: 4620, y: 300, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w21_acorn_1", x: 1065, y: 170, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w21_acorn_2", x: 2320, y: 790, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w21_acorn_3", x: 4850, y: 130, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Prismatic Magnet, Laser Blaster & Ammo, Bubble Shield, Hearts
      { id: "w21_mag1", x: 1880, y: 755, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w21_blaster1", x: 3220, y: 175, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w21_ammo1", x: 3255, y: 175, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w21_shield1", x: 4595, y: 415, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w21_heart1", x: 1480, y: 595, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w21_heart2", x: 4130, y: 515, width: 22, height: 22, type: "heart", value: 0 },

      // Act 1: Caravanserai Coins & Gems
      { id: "w21_c1", x: 260, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c2", x: 410, y: 610, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem1", x: 675, y: 460, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c3", x: 790, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c4", x: 940, y: 290, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem2", x: 1190, y: 210, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c5", x: 860, y: 690, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c6", x: 1080, y: 570, width: 20, height: 20, type: "coin", value: 100 },

      // Act 2: Sunken Oasis Diamond Array (Rich vacuum field for Prismatic Magnet)
      { id: "w21_c7", x: 1720, y: 710, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem3", x: 1800, y: 660, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c8", x: 1900, y: 610, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem4", x: 2000, y: 660, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c9", x: 2080, y: 710, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem5", x: 2000, y: 770, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c10", x: 1900, y: 820, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem6", x: 1800, y: 770, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c11", x: 1760, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c12", x: 2040, y: 220, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem7", x: 2190, y: 170, width: 24, height: 24, type: "gem", value: 500 },

      // Act 3: Valley of Tombs Precision Coins & Gems
      { id: "w21_c13", x: 2950, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c14", x: 3100, y: 290, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem8", x: 3260, y: 370, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c15", x: 3410, y: 490, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c16", x: 3600, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem9", x: 3740, y: 350, width: 24, height: 24, type: "gem", value: 500 },

      // Act 4: Great Pyramid Ascent Coins & Apex Crown
      { id: "w21_c17", x: 4300, y: 580, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c18", x: 4460, y: 430, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem10", x: 4725, y: 300, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c19", x: 4790, y: 130, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_gem11", x: 4910, y: 130, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w21_c20", x: 5010, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w21_c21", x: 5130, y: 350, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Act 1: Gateway Dune Scorpion #1 & Desert Flyer #1
      { id: "w21_e_scorp1", x: 490, y: 568, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 470, maxX: 560, facing: 1 },
      { id: "w21_e_flyer1", x: 840, y: 520, width: 28, height: 24, type: "flyer", vx: 1.3, vy: 0, minX: 740, maxX: 940, facing: 1 },
      { id: "w21_e_patrol1", x: 1180, y: 604, width: 28, height: 26, type: "patroller", vx: 0.85, vy: 0, minX: 1160, maxX: 1230, facing: 1 },

      // Act 2: Sunken Pharaoh's Crypt Dune Scorpion #2 & Aqueduct Flyer
      { id: "w21_e_scorp2", x: 2320, y: 808, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 2280, maxX: 2380, facing: -1 },
      { id: "w21_e_flyer2", x: 1780, y: 320, width: 28, height: 24, type: "flyer", vx: -1.3, vy: 0, minX: 1700, maxX: 1900, facing: -1 },

      // Act 3: Tomb Canyon Sentry Bastion Dune Scorpion #3 & High Flyer
      { id: "w21_e_scorp3", x: 3840, y: 408, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 3820, maxX: 3910, facing: 1 },
      { id: "w21_e_flyer3", x: 3480, y: 240, width: 28, height: 24, type: "flyer", vx: 1.4, vy: 0, minX: 3400, maxX: 3620, facing: 1 },

      // Act 4: Great Pyramid Apex Flyer & Royal Sphinx Dune Scorpion #4 + Patroller
      { id: "w21_e_flyer4", x: 4820, y: 90, width: 28, height: 24, type: "flyer", vx: -1.3, vy: 0, minX: 4760, maxX: 4920, facing: -1 },
      { id: "w21_e_scorp4", x: 5210, y: 408, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 5200, maxX: 5270, facing: 1 },
      { id: "w21_e_patrol2", x: 5320, y: 414, width: 28, height: 26, type: "patroller", vx: -0.85, vy: 0, minX: 5280, maxX: 5380, facing: -1 }
    ],
    parTime: 110,
    threeStarScore: 19000
  },
  {
    id: 22,
    title: "22. Twilight Dunes: Aeronaut Sandstorm Chasm",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "gadget",
    category: "jetpack",
    startWithJetpack: true,
    description: "Take to the desert skies! Equip the Aeronaut Jetpack to soar across a yawning 5,500px sandstorm chasm. Ride thermal solar sand geysers, manage fuel across aerial islands, vacuum floating gem diamonds with the Prismatic Magnet, and dogfight airborne flyers and Dune Scorpions.",
    worldWidth: 5500,
    worldHeight: 900,
    theme: THEMES.twilightDunes || THEMES.desert,
    playerStart: { x: 80, y: 740 },
    goal: { x: 5320, y: 380, width: 44, height: 60 },
    checkpoints: [
      { x: 1460, y: 640, width: 30, height: 40, activated: false },
      { x: 2820, y: 500, width: 30, height: 40, activated: false },
      { x: 4160, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Launch Gantry & Obelisk Spire
      { id: "w22_p_start", x: 0, y: 780, width: 240, height: 120, type: "solid" },
      { id: "w22_p_ceil1", x: 120, y: 520, width: 200, height: 35, type: "solid" },
      // First Thermal Solar Sand Geyser: Soar up to the High Mesa Shelf!
      { id: "w22_p_well1", x: 380, y: 260, width: 95, height: 520, type: "anti_grav" },
      { id: "w22_p1_upper_shelf", x: 490, y: 260, width: 140, height: 22, type: "solid" },
      // Moving Sandstone Ferry 1
      { id: "w22_p2_moving1", x: 670, y: 280, width: 95, height: 20, type: "solid", startX: 670, startY: 280, distanceX: 180, speed: 1.3, vx: 1.3, vy: 0 },
      // High Sandstone Obelisk Tip with Golden Acorn #1
      { id: "w22_p3_obelisk_spire", x: 950, y: 150, width: 80, height: 22, type: "solid" },
      // Stepping Lintel Bridge
      { id: "w22_p4_lintel1", x: 1060, y: 380, width: 110, height: 18, type: "one-way" },
      // Sand Geyser Spring 1
      { id: "w22_p5_spring1", x: 1200, y: 520, width: 55, height: 20, type: "bouncy" },
      { id: "w22_p6_refuel1", x: 1280, y: 420, width: 90, height: 20, type: "solid" },
      // Checkpoint 1 Station Deck
      { id: "w22_p_cp1", x: 1400, y: 680, width: 190, height: 220, type: "solid" },

      // SECTOR 2: The Great Sand Chasm & Concentric Mirage Ring
      // Central Altar with PRISMATIC MAGNET POWERUP #1
      { id: "w22_p7_magnet_pedestal1", x: 1680, y: 540, width: 90, height: 22, type: "solid" },
      // Floating Core Hub in center of the aerial diamond ring
      { id: "w22_p8_ring_hub", x: 2060, y: 440, width: 70, height: 20, type: "solid" },
      // Moving Sandstone Ferry 2
      { id: "w22_p9_moving2", x: 2240, y: 360, width: 95, height: 20, type: "solid", startX: 2240, startY: 360, distanceX: 180, speed: 1.3, vx: 1.3, vy: 0 },
      // Lower Chasm Fissure Shelf with Golden Acorn #2
      { id: "w22_p10_acorn2_shelf", x: 2320, y: 840, width: 100, height: 22, type: "solid" },
      // Second Solar Sand Geyser Lift Well: Launches player out of the lower depths
      { id: "w22_p_well2", x: 2540, y: 220, width: 95, height: 600, type: "anti_grav" },
      { id: "w22_p11_high_perch", x: 2460, y: 180, width: 90, height: 20, type: "solid" },
      // Checkpoint 2 Station Island
      { id: "w22_p_cp2", x: 2760, y: 540, width: 180, height: 360, type: "solid" },

      // SECTOR 3: The Sandstone Crusher Pillars & Sentry Bastion
      // Secret High Roost with LASER BLASTER
      { id: "w22_p12_blaster_roost", x: 2980, y: 180, width: 90, height: 20, type: "solid" },
      // Oscillating Crusher Platform 1 (Moves vertically)
      { id: "w22_p13_crusher1", x: 3220, y: 360, width: 90, height: 24, type: "solid", startX: 3220, startY: 200, distanceY: 240, speed: 1.4, vx: 0, vy: 1.4 },
      // Mid Sentry Bastion 1 (Guarded by Dune Scorpion #3)
      { id: "w22_p14_bastion1", x: 3350, y: 460, width: 100, height: 30, type: "solid" },
      // Oscillating Crusher Platform 2 (Counter-moves vertically)
      { id: "w22_p15_crusher2", x: 3490, y: 440, width: 90, height: 24, type: "solid", startX: 3490, startY: 440, distanceY: -240, speed: 1.4, vx: 0, vy: -1.4 },
      // Crumbling Sandstone Lattices spanning the choke point
      { id: "w22_p16_crumb1", x: 3620, y: 400, width: 80, height: 18, type: "crumbling" },
      { id: "w22_p17_crumb2", x: 3740, y: 360, width: 80, height: 18, type: "crumbling" },
      // Mid Sentry Bastion 2 (Guarded by Dune Scorpion #4)
      { id: "w22_p18_bastion2", x: 3850, y: 460, width: 100, height: 30, type: "solid" },
      // Altar with PRISMATIC MAGNET POWERUP #2
      { id: "w22_p19_magnet_pedestal2", x: 3980, y: 280, width: 90, height: 20, type: "solid" },
      // Checkpoint 3 Station Island
      { id: "w22_p_cp3", x: 4100, y: 560, width: 180, height: 340, type: "solid" },

      // SECTOR 4: Stratospheric Sandstorm Apex & Sunken Temple Finale
      // Third Solar Sand Geyser: Soar up to the Stratospheric Apex!
      { id: "w22_p_well3", x: 4320, y: 120, width: 100, height: 660, type: "anti_grav" },
      // Stratospheric Mesa Summit with Golden Acorn #3
      { id: "w22_p20_summit", x: 4500, y: 110, width: 100, height: 20, type: "solid" },
      // Mid-Air Bubble Shield Shelf
      { id: "w22_p21_shield_shelf", x: 4380, y: 500, width: 90, height: 20, type: "solid" },
      // Bouncy Sand Geyser 2
      { id: "w22_p22_spring2", x: 4560, y: 540, width: 55, height: 20, type: "bouncy" },
      // Crumbling Sandstone Stepping Stones over final abyss
      { id: "w22_p23_crumb3", x: 4720, y: 460, width: 80, height: 20, type: "crumbling" },
      { id: "w22_p24_crumb4", x: 4860, y: 440, width: 80, height: 20, type: "crumbling" },
      // Grand Sandstone Temple Step & Goal Altar
      { id: "w22_p25_temple_step", x: 5020, y: 420, width: 140, height: 480, type: "solid" },
      { id: "w22_p_goal_altar", x: 5240, y: 420, width: 240, height: 480, type: "solid" }
    ],
    hazards: [
      // Deep Bottom Abyss Quicksand Spike Beds
      { id: "w22_hz_spike1", x: 240, y: 884, width: 1120, height: 26, type: "spike" },
      { id: "w22_hz_spike2", x: 1590, y: 884, width: 1170, height: 26, type: "spike" },
      { id: "w22_hz_spike3", x: 2940, y: 884, width: 1160, height: 26, type: "spike" },
      { id: "w22_hz_spike4", x: 4280, y: 884, width: 740, height: 26, type: "spike" },

      // Overhead Ceiling Spikes in tight passages
      { id: "w22_hz_spike_ceil1", x: 800, y: 40, width: 240, height: 26, type: "spike" },
      { id: "w22_hz_spike_ceil2", x: 3100, y: 40, width: 340, height: 26, type: "spike" },

      // Rotating Ancient Sun Saws
      { id: "w22_hz_saw1", x: 790, y: 340, width: 42, height: 42, type: "saw" },
      { id: "w22_hz_saw2", x: 2075, y: 380, width: 44, height: 44, type: "saw" },
      { id: "w22_hz_saw3", x: 3370, y: 280, width: 44, height: 44, type: "saw" },
      { id: "w22_hz_saw4", x: 3740, y: 240, width: 44, height: 44, type: "saw" },
      { id: "w22_hz_saw5", x: 4640, y: 340, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // Jetpack spawn at start gantry
      { id: "w22_jp_spawn", x: 130, y: 740, width: 24, height: 28, type: "jetpack", value: 0 },

      // 10 Jetpack Fuel Refill Canisters strategically spaced along aerial flight routes
      { id: "w22_fuel_1", x: 530, y: 220, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_2", x: 1030, y: 340, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_3", x: 1480, y: 630, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_4", x: 1940, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_5", x: 2480, y: 140, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_6", x: 2840, y: 470, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_7", x: 3380, y: 410, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_8", x: 3880, y: 410, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_9", x: 4200, y: 510, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w22_fuel_10", x: 4600, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },

      // 3 Golden Acorns
      { id: "w22_acorn_1", x: 980, y: 110, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w22_acorn_2", x: 2360, y: 800, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w22_acorn_3", x: 4535, y: 70, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Dual Prismatic Magnets, Laser Blaster & Ammo, Bubble Shield, Hearts
      { id: "w22_mag1", x: 1715, y: 500, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w22_mag2", x: 4015, y: 240, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w22_blaster1", x: 3015, y: 140, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w22_ammo1", x: 3480, y: 180, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w22_shield1", x: 4415, y: 460, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w22_heart1", x: 1520, y: 635, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w22_heart2", x: 4240, y: 515, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1: Grotto Coins & Ascent Gems
      { id: "w22_c1", x: 240, y: 720, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_c2", x: 340, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem1", x: 420, y: 200, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c3", x: 570, y: 220, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_c4", x: 740, y: 240, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem2", x: 920, y: 240, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c5", x: 1040, y: 480, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2: The Concentric Diamond Array (Magnetic pull zone for Prismatic Magnet)
      { id: "w22_c6", x: 1840, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem3", x: 1950, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c7", x: 2095, y: 280, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem4", x: 2240, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c8", x: 2350, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem5", x: 2240, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c9", x: 2095, y: 600, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem6", x: 1950, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c10", x: 2095, y: 440, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Sentry Gauntlet Precision Path Coins & Gems
      { id: "w22_c11", x: 3120, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_c12", x: 3340, y: 240, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem7", x: 3550, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c13", x: 3700, y: 300, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem8", x: 3920, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Stratospheric High Coins & Finale Arc
      { id: "w22_c14", x: 4440, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem9", x: 4620, y: 110, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c15", x: 4780, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w22_gem10", x: 4920, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w22_c16", x: 5120, y: 360, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Sentry Scorpion on high mesa & Desert Flyer
      { id: "w22_e_scorp1", x: 540, y: 228, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 510, maxX: 610, facing: 1 },
      { id: "w22_e_flyer1", x: 800, y: 240, width: 28, height: 24, type: "flyer", vx: -1.3, vy: 0, minX: 720, maxX: 920, facing: -1 },

      // Sector 2: Sentry Scorpion guarding lower fissure acorn + flyers
      { id: "w22_e_scorp2", x: 2340, y: 808, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 2320, maxX: 2400, facing: -1 },
      { id: "w22_e_flyer2", x: 1980, y: 460, width: 28, height: 24, type: "flyer", vx: 1.4, vy: 0, minX: 1880, maxX: 2120, facing: 1 },
      { id: "w22_e_flyer3", x: 2420, y: 300, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 2340, maxX: 2540, facing: -1 },

      // Sector 3: Sentry Scorpions #3 & #4 mounted on crusher bastions + flyer
      { id: "w22_e_scorp3", x: 3370, y: 428, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 3350, maxX: 3420, facing: 1 },
      { id: "w22_e_flyer4", x: 3660, y: 320, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 3580, maxX: 3780, facing: -1 },
      { id: "w22_e_scorp4", x: 3870, y: 428, width: 28, height: 26, type: "dune_scorpion", vx: -0.8, vy: 0, minX: 3850, maxX: 3920, facing: -1 },

      // Sector 4: Stratospheric Flyer & Grand Temple Sentry Scorpion #5 + Patroller
      { id: "w22_e_flyer5", x: 4460, y: 220, width: 28, height: 24, type: "flyer", vx: 1.5, vy: 0, minX: 4360, maxX: 4600, facing: 1 },
      { id: "w22_e_scorp5", x: 5080, y: 388, width: 28, height: 26, type: "dune_scorpion", vx: 0.85, vy: 0, minX: 5050, maxX: 5140, facing: 1 },
      { id: "w22_e_patrol1", x: 5300, y: 394, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 5250, maxX: 5400, facing: -1 }
    ],
    parTime: 125,
    threeStarScore: 19000
  },
  {
    id: 23,
    title: "23. Twilight Dunes: The Sunken Pharaoh Labyrinth",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "terrain",
    category: "classic",
    description: "Delve deep into the subterranean catacombs of the Twilight Dunes! Navigate an intricate sandstone temple labyrinth filled with alternating mirage phase chambers, oscillating crusher gates, and venomous Dune Scorpions guarding ancient pharaoh treasures.",
    worldWidth: 5500,
    worldHeight: 960,
    theme: THEMES.twilightDunes || THEMES.desert,
    playerStart: { x: 80, y: 760 },
    goal: { x: 5340, y: 380, width: 44, height: 60 },
    checkpoints: [
      { x: 1440, y: 640, width: 30, height: 40, activated: false },
      { x: 2800, y: 500, width: 30, height: 40, activated: false },
      { x: 4180, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Outer Hypostyle Hall & Mirage Threshold
      { id: "w23_p_start", x: 0, y: 800, width: 240, height: 160, type: "solid" },
      { id: "w23_p_ceil1", x: 120, y: 520, width: 240, height: 40, type: "solid" },
      // Alternating Mirage Phase Stepping Stones
      { id: "w23_p_phase_a1", x: 320, y: 720, width: 90, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w23_p_phase_b1", x: 460, y: 640, width: 90, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w23_p_phase_a2", x: 600, y: 560, width: 90, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      // First Solar Sand Geyser Shaft (Vertical Launch to Vault Ceiling)
      { id: "w23_p_well1", x: 740, y: 220, width: 95, height: 560, type: "anti_grav" },
      { id: "w23_p_vault_roof", x: 680, y: 180, width: 160, height: 22, type: "solid" },
      // High Secret Crypt with Golden Acorn #1
      { id: "w23_p_phase_b2", x: 890, y: 190, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w23_p_acorn1_perch", x: 1020, y: 150, width: 90, height: 20, type: "solid" },
      // Carved lintel bridge & Bouncy sand geyser
      { id: "w23_p_lintel1", x: 1140, y: 340, width: 110, height: 16, type: "one-way" },
      { id: "w23_p_spring1", x: 1280, y: 480, width: 55, height: 20, type: "bouncy" },
      // Checkpoint 1 Station Deck
      { id: "w23_p_cp1", x: 1380, y: 680, width: 200, height: 280, type: "solid" },

      // SECTOR 2: The Sunken Antechamber & Concentric Mirage Vault
      // Altar with Prismatic / Solar Magnet #1
      { id: "w23_p_magnet_altar1", x: 1680, y: 540, width: 90, height: 22, type: "solid" },
      // Phasing Mirage Diamond Array (Blinking platforms around central saw & treasure)
      { id: "w23_p_phase_a3", x: 1840, y: 440, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w23_p_phase_b3", x: 2040, y: 320, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w23_p_phase_a4", x: 2240, y: 440, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w23_p_phase_b4", x: 2040, y: 560, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      // Moving Sandstone Barge
      { id: "w23_p_moving1", x: 2360, y: 460, width: 95, height: 20, type: "solid", startX: 2360, startY: 460, distanceX: 160, speed: 1.3, vx: 1.3, vy: 0 },
      // Lower Burial Vault with Golden Acorn #2
      { id: "w23_p_acorn2_shelf", x: 2280, y: 840, width: 110, height: 24, type: "solid" },
      // Second Solar Sand Geyser
      { id: "w23_p_well2", x: 2560, y: 220, width: 95, height: 600, type: "anti_grav" },
      // Checkpoint 2 Island
      { id: "w23_p_cp2", x: 2740, y: 540, width: 190, height: 420, type: "solid" },

      // SECTOR 3: Fortress of the Scorpion Sentries & Alternating Phase Gauntlet
      // Secret High Roost with Laser Blaster
      { id: "w23_p_blaster_roost", x: 2980, y: 180, width: 90, height: 20, type: "solid" },
      // Oscillating Crusher Platform 1
      { id: "w23_p_crusher1", x: 3200, y: 360, width: 90, height: 24, type: "solid", startX: 3200, startY: 200, distanceY: 240, speed: 1.4, vx: 0, vy: 1.4 },
      // Sentry Bastion 1 (Guarded by Dune Scorpion #3)
      { id: "w23_p_bastion1", x: 3340, y: 460, width: 110, height: 30, type: "solid" },
      // Alternating Phase Slabs
      { id: "w23_p_phase_a5", x: 3500, y: 420, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w23_p_phase_b5", x: 3640, y: 380, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w23_p_phase_a6", x: 3780, y: 420, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      // Sentry Bastion 2 (Guarded by Dune Scorpion #4)
      { id: "w23_p_bastion2", x: 3920, y: 460, width: 110, height: 30, type: "solid" },
      // Altar with Prismatic / Solar Magnet #2
      { id: "w23_p_magnet_altar2", x: 4060, y: 260, width: 90, height: 20, type: "solid" },
      // Checkpoint 3 Island
      { id: "w23_p_cp3", x: 4160, y: 560, width: 180, height: 400, type: "solid" },

      // SECTOR 4: The Pharaoh's Inner Sanctum & Golden Apex
      // Third Solar Sand Geyser (Ascend to the Golden Apex)
      { id: "w23_p_well3", x: 4340, y: 120, width: 100, height: 680, type: "anti_grav" },
      // Stratospheric Pharaoh's Spire with Golden Acorn #3
      { id: "w23_p_phase_b6", x: 4500, y: 120, width: 85, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w23_p_acorn3_perch", x: 4620, y: 110, width: 85, height: 20, type: "solid" },
      // Mid-Air Bubble Shield Shelf
      { id: "w23_p_shield_shelf", x: 4420, y: 500, width: 90, height: 20, type: "solid" },
      // Bouncy Sand Geyser 2
      { id: "w23_p_spring2", x: 4620, y: 540, width: 55, height: 20, type: "bouncy" },
      // Crumbling Sandstone Steps
      { id: "w23_p_crumb1", x: 4760, y: 460, width: 80, height: 20, type: "crumbling" },
      { id: "w23_p_crumb2", x: 4900, y: 440, width: 80, height: 20, type: "crumbling" },
      // Grand Pharaoh Portal Pedestal
      { id: "w23_p_cathedral_step", x: 5080, y: 420, width: 140, height: 540, type: "solid" },
      { id: "w23_p_goal_altar", x: 5300, y: 420, width: 240, height: 540, type: "solid" }
    ],
    hazards: [
      // Deep Bottom Abyss Quicksand Spike Beds
      { id: "w23_hz_spike1", x: 240, y: 944, width: 1120, height: 26, type: "spike" },
      { id: "w23_hz_spike2", x: 1590, y: 944, width: 1170, height: 26, type: "spike" },
      { id: "w23_hz_spike3", x: 2940, y: 944, width: 1160, height: 26, type: "spike" },
      { id: "w23_hz_spike4", x: 4280, y: 944, width: 780, height: 26, type: "spike" },

      // Overhead Ceiling Spikes in tight passages
      { id: "w23_hz_spike_ceil1", x: 800, y: 40, width: 240, height: 26, type: "spike" },
      { id: "w23_hz_spike_ceil2", x: 3100, y: 40, width: 340, height: 26, type: "spike" },

      // Rotating Ancient Sun Saws
      { id: "w23_hz_saw1", x: 530, y: 480, width: 42, height: 42, type: "saw" },
      { id: "w23_hz_saw2", x: 2040, y: 440, width: 46, height: 46, type: "saw" },
      { id: "w23_hz_saw3", x: 3500, y: 320, width: 44, height: 44, type: "saw" },
      { id: "w23_hz_saw4", x: 3780, y: 280, width: 44, height: 44, type: "saw" },
      { id: "w23_hz_saw5", x: 4700, y: 360, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w23_acorn_1", x: 1050, y: 110, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w23_acorn_2", x: 2320, y: 800, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w23_acorn_3", x: 4650, y: 70, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Dual Prismatic Magnets, Laser Blaster & Ammo, Bubble Shield, Hearts
      { id: "w23_mag1", x: 1715, y: 500, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w23_mag2", x: 4095, y: 220, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w23_blaster1", x: 3015, y: 140, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w23_ammo1", x: 3480, y: 180, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w23_shield1", x: 4455, y: 460, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w23_heart1", x: 1500, y: 635, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w23_heart2", x: 4240, y: 515, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1: Ascent Coins & Gems
      { id: "w23_c1", x: 340, y: 670, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_c2", x: 480, y: 590, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem1", x: 780, y: 160, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c3", x: 920, y: 140, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_c4", x: 1180, y: 300, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem2", x: 1300, y: 430, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 2: Sunken Antechamber Concentric Diamond Array (Magnetic pull zone)
      { id: "w23_c5", x: 1860, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem3", x: 1960, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c6", x: 2060, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem4", x: 2160, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c7", x: 2260, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem5", x: 2160, y: 520, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c8", x: 2060, y: 610, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem6", x: 1960, y: 520, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c9", x: 2440, y: 410, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Sentry Bastion Precision Path Coins & Gems
      { id: "w23_c10", x: 3140, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_c11", x: 3440, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem7", x: 3580, y: 330, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c12", x: 3720, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem8", x: 3960, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Stratospheric High Coins & Finale Arc
      { id: "w23_c13", x: 4520, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem9", x: 4680, y: 110, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c14", x: 4820, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w23_gem10", x: 4960, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w23_c15", x: 5180, y: 360, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Sentry Scorpion in the hypostyle hall & Desert Flyer
      { id: "w23_e_scorp1", x: 540, y: 460, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 480, maxX: 640, facing: 1 },
      { id: "w23_e_flyer1", x: 960, y: 260, width: 28, height: 24, type: "flyer", vx: -1.3, vy: 0, minX: 880, maxX: 1080, facing: -1 },

      // Sector 2: Sentry Scorpion guarding lower vault acorn + flyer
      { id: "w23_e_scorp2", x: 2280, y: 808, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 2250, maxX: 2340, facing: -1 },
      { id: "w23_e_flyer2", x: 2420, y: 300, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 2340, maxX: 2540, facing: -1 },

      // Sector 3: Sentry Scorpions #3 & #4 guarding alternating phase gauntlet + flyer
      { id: "w23_e_scorp3", x: 3370, y: 428, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 3350, maxX: 3420, facing: 1 },
      { id: "w23_e_flyer3", x: 3660, y: 320, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 3580, maxX: 3780, facing: -1 },
      { id: "w23_e_scorp4", x: 3950, y: 428, width: 28, height: 26, type: "dune_scorpion", vx: -0.8, vy: 0, minX: 3930, maxX: 4000, facing: -1 },

      // Sector 4: Stratospheric Flyer & Grand Temple Sentry Scorpion #5 + Patroller
      { id: "w23_e_flyer4", x: 4460, y: 220, width: 28, height: 24, type: "flyer", vx: 1.5, vy: 0, minX: 4360, maxX: 4600, facing: 1 },
      { id: "w23_e_scorp5", x: 5120, y: 388, width: 28, height: 26, type: "dune_scorpion", vx: 0.85, vy: 0, minX: 5090, maxX: 5180, facing: 1 },
      { id: "w23_e_patrol1", x: 5360, y: 394, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 5310, maxX: 5460, facing: -1 }
    ],
    parTime: 125,
    threeStarScore: 19500
  },
  {
    id: 24,
    title: "24. Sunken Aquifer: The Subterranean Coral Cenote",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "terrain",
    category: "classic",
    isUnderwater: true,
    theme: THEMES.deepSea,
    description: "Plunge into the flooded subterranean depths of the Sunken Aquifer! Master continuous swimming by repeatedly tapping Jump through weightless underwater currents, equip the protective Bubble Shield to float-glide and bounce past venomous Abyssal Sea Urchins, rocket up bubbling hydrothermal geysers, and navigate phasing coral gates.",
    worldWidth: 5400,
    worldHeight: 960,
    playerStart: { x: 80, y: 760 },
    goal: { x: 5240, y: 380, width: 44, height: 60 },
    checkpoints: [
      { x: 1440, y: 640, width: 30, height: 40, activated: false },
      { x: 2780, y: 480, width: 30, height: 40, activated: false },
      { x: 4140, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Cenote Grotto & Coral Slalom (x: 0 - 1440)
      { id: "w24_p_start", x: 0, y: 800, width: 260, height: 160, type: "solid" },
      { id: "w24_p_ceil1", x: 120, y: 500, width: 220, height: 40, type: "solid" },
      { id: "w24_p1_step1", x: 380, y: 700, width: 110, height: 260, type: "solid" },
      // Hydrothermal vent spring launching into high water column
      { id: "w24_vent1", x: 620, y: 760, width: 60, height: 24, type: "bouncy" },
      // High Kelp Platform 1
      { id: "w24_kelp1", x: 740, y: 440, width: 120, height: 18, type: "one-way" },
      // Moving Reef Ferry 1
      { id: "w24_ferry1", x: 900, y: 420, width: 95, height: 20, type: "solid", startX: 900, startY: 420, distanceX: 160, speed: 1.3, vx: 1.3, vy: 0 },
      // High Secret Flooded Stalactite Vault with Golden Acorn #1
      { id: "w24_vault1", x: 960, y: 160, width: 100, height: 22, type: "solid" },
      // Lower swim passage
      { id: "w24_crumb1", x: 1120, y: 560, width: 85, height: 18, type: "crumbling" },
      { id: "w24_step2", x: 1240, y: 620, width: 90, height: 20, type: "solid" },
      // Checkpoint 1 Station Deck
      { id: "w24_cp1_deck", x: 1380, y: 680, width: 200, height: 280, type: "solid" },

      // SECTOR 2: The Bioluminescent Urchin Trench & Sunken Pearl Vortex (x: 1440 - 2780)
      // Central Coral Pedestal with PRISMATIC / PEARL MAGNET #1
      { id: "w24_pedestal1", x: 1680, y: 540, width: 90, height: 22, type: "solid" },
      // Floating Core Hub in center of the sunken pearl diamond vortex
      { id: "w24_ring_hub", x: 2060, y: 440, width: 70, height: 20, type: "solid" },
      // Moving Reef Ferry 2
      { id: "w24_ferry2", x: 2240, y: 340, width: 95, height: 20, type: "solid", startX: 2240, startY: 340, distanceX: 180, speed: 1.3, vx: 1.3, vy: 0 },
      // Deep Seabed Fissure Shelf with Golden Acorn #2
      { id: "w24_fissure_floor", x: 2300, y: 860, width: 130, height: 24, type: "solid" },
      { id: "w24_fissure_escape", x: 2450, y: 860, width: 70, height: 20, type: "crumbling" },
      // Hydrothermal Geyser Updraft Lift Well: Rockets swimmer out of the deep seabed trench!
      { id: "w24_geyser_lift1", x: 2540, y: 200, width: 100, height: 660, type: "anti_grav" },
      { id: "w24_perch1", x: 2460, y: 160, width: 90, height: 20, type: "solid" },
      // Checkpoint 2 Sanctuary Shelf
      { id: "w24_cp2_shelf", x: 2720, y: 520, width: 190, height: 440, type: "solid" },

      // SECTOR 3: The Flooded Labyrinth & Phasing Jellyfish Gates (x: 2780 - 4140)
      // Secret High Roost with LASER BLASTER
      { id: "w24_blaster_roost", x: 2980, y: 160, width: 90, height: 20, type: "solid" },
      // Oscillating Crusher Gate 1 (Moves vertically)
      { id: "w24_crusher1", x: 3200, y: 360, width: 90, height: 24, type: "solid", startX: 3200, startY: 220, distanceY: 220, speed: 1.4, vx: 0, vy: 1.4 },
      // Mid Coral Bastion 1
      { id: "w24_bastion1", x: 3340, y: 460, width: 110, height: 30, type: "solid" },
      // Alternating Phasing Coral Gates
      { id: "w24_phase_a1", x: 3500, y: 420, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w24_phase_b1", x: 3640, y: 360, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w24_phase_a2", x: 3780, y: 420, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      // Mid Coral Bastion 2
      { id: "w24_bastion2", x: 3900, y: 460, width: 110, height: 30, type: "solid" },
      // Altar with PRISMATIC / PEARL MAGNET #2
      { id: "w24_pedestal2", x: 4020, y: 260, width: 90, height: 20, type: "solid" },
      // Crumbling Phosphorescent Coral Lattices
      { id: "w24_crumb2", x: 3980, y: 400, width: 75, height: 18, type: "crumbling" },
      // Checkpoint 3 Submerged Citadel
      { id: "w24_cp3_citadel", x: 4080, y: 560, width: 180, height: 400, type: "solid" },

      // SECTOR 4: The Abyssal Leviathan Geyser Ascent & Sunken Temple Finale (x: 4140 - 5400)
      // Giant Hydrothermal Vent Geyser: Blast upward to the Stratospheric High Sunken Dome!
      { id: "w24_geyser_lift2", x: 4300, y: 100, width: 100, height: 720, type: "anti_grav" },
      // Stratospheric Sunken Dome Summit with Golden Acorn #3
      { id: "w24_phase_b2", x: 4480, y: 110, width: 85, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w24_summit", x: 4600, y: 100, width: 90, height: 20, type: "solid" },
      // Mid-Water Bubble Shield Shelf
      { id: "w24_shield_shelf", x: 4420, y: 480, width: 90, height: 20, type: "solid" },
      // Hydrothermal Geyser Vent 2
      { id: "w24_vent2", x: 4600, y: 520, width: 55, height: 20, type: "bouncy" },
      // Crumbling Coral Stepping Stones over final oceanic abyss
      { id: "w24_crumb3", x: 4740, y: 460, width: 80, height: 20, type: "crumbling" },
      { id: "w24_crumb4", x: 4880, y: 440, width: 80, height: 20, type: "crumbling" },
      // Sunken Atlantean Temple Goal Approach
      { id: "w24_temple_step", x: 5040, y: 420, width: 140, height: 540, type: "solid" },
      { id: "w24_goal_altar", x: 5220, y: 420, width: 220, height: 540, type: "solid" }
    ],
    hazards: [
      // Deep Seabed Trench Pressure Spikes
      { id: "w24_hz_spike1", x: 260, y: 944, width: 1120, height: 26, type: "spike" },
      { id: "w24_hz_spike2", x: 1580, y: 944, width: 1140, height: 26, type: "spike" },
      { id: "w24_hz_spike3", x: 2910, y: 944, width: 1170, height: 26, type: "spike" },
      { id: "w24_hz_spike4", x: 4260, y: 944, width: 780, height: 26, type: "spike" },

      // Overhead Ceiling Coral Spikes in tight chutes
      { id: "w24_hz_spike_ceil1", x: 800, y: 40, width: 260, height: 26, type: "spike" },
      { id: "w24_hz_spike_ceil2", x: 3080, y: 40, width: 340, height: 26, type: "spike" },

      // Rotating Sunken Coral Saws
      { id: "w24_hz_saw1", x: 540, y: 480, width: 42, height: 42, type: "saw" },
      { id: "w24_hz_saw2", x: 2075, y: 440, width: 46, height: 46, type: "saw" },
      { id: "w24_hz_saw3", x: 3500, y: 300, width: 44, height: 44, type: "saw" },
      { id: "w24_hz_saw4", x: 3780, y: 260, width: 44, height: 44, type: "saw" },
      { id: "w24_hz_saw5", x: 4700, y: 340, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w24_acorn_1", x: 995, y: 110, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w24_acorn_2", x: 2360, y: 820, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w24_acorn_3", x: 4635, y: 60, width: 26, height: 26, type: "acorn", value: 1500 },

      // Protective Bubble Shields for underwater buoyancy glide & safe urchin bouncing
      { id: "w24_shield1", x: 260, y: 720, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w24_shield2", x: 3380, y: 415, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w24_shield3", x: 4455, y: 440, width: 24, height: 24, type: "bubble_shield", value: 500 },

      // Power-ups: Dual Prismatic / Pearl Magnets, Laser Blaster & Ammo, Health Hearts
      { id: "w24_mag1", x: 1715, y: 500, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w24_mag2", x: 4055, y: 220, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w24_blaster1", x: 3015, y: 120, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w24_ammo1", x: 3480, y: 180, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w24_heart1", x: 1500, y: 635, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w24_heart2", x: 4200, y: 515, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1: Submerged Reef Pearls & Gems
      { id: "w24_c1", x: 300, y: 700, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_c2", x: 420, y: 630, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem1", x: 645, y: 480, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c3", x: 790, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_c4", x: 960, y: 360, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem2", x: 1140, y: 210, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c5", x: 1210, y: 510, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2: The Sunken Pearl Diamond Array (Vacuum zone for Prismatic Magnet)
      { id: "w24_c6", x: 1840, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem3", x: 1950, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c7", x: 2095, y: 280, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem4", x: 2240, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c8", x: 2350, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem5", x: 2240, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c9", x: 2095, y: 600, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem6", x: 1950, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c10", x: 2440, y: 410, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Phasing Gates Precision Path Coins & Gems
      { id: "w24_c11", x: 3140, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_c12", x: 3440, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem7", x: 3580, y: 330, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c13", x: 3720, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem8", x: 3940, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Stratospheric High Coins & Finale Arc
      { id: "w24_c14", x: 4500, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem9", x: 4660, y: 110, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c15", x: 4800, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w24_gem10", x: 4940, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w24_c16", x: 5140, y: 360, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Undulating Abyssal Sea Urchins in swim lanes & Desert Flyer
      { id: "w24_e_urchin1", x: 580, y: 500, width: 28, height: 28, type: "urchin", vx: 0, vy: 0, minY: 440, maxY: 580, facing: 1 },
      { id: "w24_e_urchin2", x: 1180, y: 420, width: 28, height: 28, type: "urchin", vx: 0, vy: 0, minY: 360, maxY: 480, facing: -1 },
      { id: "w24_e_flyer1", x: 1020, y: 220, width: 28, height: 24, type: "flyer", vx: -1.3, vy: 0, minX: 920, maxX: 1100, facing: -1 },

      // Sector 2: Sentry Urchins around Pearl Swirl + Seabed Dune Scorpion guarding Acorn #2
      { id: "w24_e_urchin3", x: 1940, y: 440, width: 28, height: 28, type: "urchin", vx: 0, vy: 0, minY: 370, maxY: 510, facing: 1 },
      { id: "w24_e_urchin4", x: 2200, y: 440, width: 28, height: 28, type: "urchin", vx: 0, vy: 0, minY: 370, maxY: 510, facing: -1 },
      { id: "w24_e_scorp1", x: 2320, y: 828, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 2300, maxX: 2400, facing: 1 },
      { id: "w24_e_urchin5", x: 2420, y: 780, width: 28, height: 28, type: "urchin", vx: 0, vy: 0, minY: 720, maxY: 840, facing: -1 },
      { id: "w24_e_flyer2", x: 2180, y: 280, width: 28, height: 24, type: "flyer", vx: 1.4, vy: 0, minX: 2100, maxX: 2320, facing: 1 },

      // Sector 3: Urchin & Dune Scorpion guarding Phasing Jellyfish Gates
      { id: "w24_e_urchin6", x: 3640, y: 460, width: 28, height: 28, type: "urchin", vx: 0, vy: 0, minY: 400, maxY: 520, facing: 1 },
      { id: "w24_e_flyer3", x: 3660, y: 220, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 3580, maxX: 3780, facing: -1 },
      { id: "w24_e_scorp2", x: 3920, y: 428, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 3880, maxX: 3980, facing: 1 },

      // Sector 4: Stratospheric Spire Urchin & Flyer, plus Sunken Temple Guardians
      { id: "w24_e_urchin7", x: 4540, y: 160, width: 28, height: 28, type: "urchin", vx: 0, vy: 0, minY: 120, maxY: 240, facing: 1 },
      { id: "w24_e_flyer4", x: 4460, y: 220, width: 28, height: 24, type: "flyer", vx: 1.5, vy: 0, minX: 4380, maxX: 4580, facing: 1 },
      { id: "w24_e_scorp3", x: 5080, y: 388, width: 28, height: 26, type: "dune_scorpion", vx: 0.85, vy: 0, minX: 5050, maxX: 5160, facing: 1 },
      { id: "w24_e_patrol1", x: 5280, y: 394, width: 28, height: 26, type: "patroller", vx: -0.85, vy: 0, minX: 5240, maxX: 5380, facing: -1 }
    ],
    parTime: 130,
    threeStarScore: 20000
  },
  {
    id: 25,
    title: "25. Twilight Dunes: The Multi-Tier Citadel of Ammon",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "terrain",
    category: "classic",
    description: "Infiltrate the colossal four-tier desert citadel of Ammon! Battle your way through unbroken ground-level highways, mezzanine colonnade galleries, fortified ramparts, and soaring vaulted catwalks. No pits to fall into—just pure, layered vertical combat and exploration up and down!",
    worldWidth: 6200,
    worldHeight: 900,
    theme: THEMES.twilightDunes || THEMES.desert,
    playerStart: { x: 80, y: 720 },
    goal: { x: 6050, y: 700, width: 44, height: 60 },
    checkpoints: [
      { x: 1550, y: 740, width: 30, height: 40, activated: false },
      { x: 3100, y: 740, width: 30, height: 40, activated: false },
      { x: 4650, y: 740, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // UNBROKEN GROUND HIGHWAY (x: 0 -> 6200)
      // ZERO PITS TO FALL INTO ACROSS THE ENTIRE LEVEL!
      // ==========================================
      { id: "w25_floor_sec1", x: 0, y: 780, width: 1600, height: 120, type: "solid" },
      { id: "w25_floor_sec2", x: 1600, y: 780, width: 1600, height: 120, type: "solid" },
      { id: "w25_floor_sec3", x: 3200, y: 780, width: 1600, height: 120, type: "solid" },
      { id: "w25_floor_sec4", x: 4800, y: 780, width: 1400, height: 120, type: "solid" },

      // ==========================================
      // SECTOR 1: OUTPOST RAMPARTS & COLONNADE PROMENADE (x: 0 -> 1600)
      // ==========================================
      // Floor 1 (Ground Pavement)
      { id: "w25_sec1_l1_tent", x: 60, y: 580, width: 140, height: 20, type: "one-way" },
      { id: "w25_sec1_l1_barricade", x: 360, y: 720, width: 80, height: 60, type: "solid" },
      { id: "w25_spring1", x: 560, y: 764, width: 50, height: 16, type: "bouncy" },

      // Floor 2 (Mezzanine Colonnade Gallery, y: 580 - 620)
      { id: "w25_sec1_l2_deck1", x: 480, y: 600, width: 220, height: 20, type: "one-way" },
      { id: "w25_sec1_l2_deck2", x: 740, y: 580, width: 180, height: 20, type: "solid" },
      { id: "w25_sec1_l2_spring", x: 880, y: 564, width: 44, height: 16, type: "bouncy" },

      // Floor 3 (Citadel Ramparts, y: 380 - 420)
      { id: "w25_sec1_l3_deck1", x: 780, y: 400, width: 240, height: 22, type: "solid" },
      { id: "w25_sec1_l3_lintel", x: 1060, y: 380, width: 140, height: 18, type: "one-way" },

      // Floor 4 (High Sentry Spire & Vault, y: 190 - 240)
      { id: "w25_sec1_lift1", x: 1120, y: 340, width: 80, height: 20, type: "solid", startX: 1120, startY: 200, distanceY: 150, speed: 1.3, vx: 0, vy: 1.3 },
      { id: "w25_sec1_l4_spire", x: 1200, y: 200, width: 120, height: 24, type: "solid" },
      { id: "w25_sec1_l4_crumb", x: 1340, y: 250, width: 90, height: 18, type: "crumbling" },

      // Checkpoint 1 Island Guard Gatehouse
      { id: "w25_sec1_cp1_deck", x: 1520, y: 720, width: 100, height: 60, type: "solid" },

      // ==========================================
      // SECTOR 2: THE GRAND BAZAAR & WEAPON ARMORY (x: 1600 -> 3200)
      // ==========================================
      // Floor 1 (Ground Pavement)
      { id: "w25_sec2_l1_stall1", x: 1740, y: 720, width: 100, height: 60, type: "solid" },
      { id: "w25_sec2_l1_stall2", x: 2160, y: 720, width: 120, height: 60, type: "solid" },
      { id: "w25_spring2", x: 2360, y: 764, width: 50, height: 16, type: "bouncy" },

      // Floor 2 (Bazaar Awnings & Lotus Terrace, y: 580 - 620)
      { id: "w25_sec2_l2_awning1", x: 1680, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w25_sec2_l2_terrace", x: 1900, y: 580, width: 220, height: 20, type: "solid" },
      { id: "w25_sec2_l2_mag_altar", x: 2560, y: 580, width: 100, height: 22, type: "solid" },
      { id: "w25_sec2_l2_bridge", x: 2700, y: 600, width: 180, height: 18, type: "one-way" },

      // Floor 3 (Armory Rampart & Sentry Deck, y: 380 - 430)
      { id: "w25_sec2_l3_armory", x: 1800, y: 390, width: 140, height: 22, type: "solid" },
      { id: "w25_sec2_l3_ferry", x: 2080, y: 400, width: 90, height: 20, type: "solid", startX: 2080, startY: 400, distanceX: 160, speed: 1.4, vx: 1.4, vy: 0 },
      { id: "w25_sec2_l3_perch", x: 2360, y: 380, width: 140, height: 20, type: "solid" },

      // Floor 4 (Royal Balcony Vault, y: 190 - 240)
      { id: "w25_sec2_lift2", x: 2680, y: 340, width: 80, height: 20, type: "solid", startX: 2680, startY: 200, distanceY: 150, speed: 1.4, vx: 0, vy: 1.4 },
      { id: "w25_sec2_l4_balcony", x: 2820, y: 210, width: 140, height: 24, type: "solid" },

      // Checkpoint 2 Gatehouse
      { id: "w25_sec2_cp2_deck", x: 3060, y: 720, width: 110, height: 60, type: "solid" },

      // ==========================================
      // SECTOR 3: THE COLOSSUS COURTYARD & BASTIONS (x: 3200 -> 4800)
      // ==========================================
      // Floor 1 (Ground Pavement)
      { id: "w25_sec3_l1_pedestal1", x: 3340, y: 720, width: 90, height: 60, type: "solid" },
      { id: "w25_sec3_l1_pedestal2", x: 3740, y: 720, width: 100, height: 60, type: "solid" },
      { id: "w25_spring3", x: 3980, y: 764, width: 50, height: 16, type: "bouncy" },

      // Floor 2 (Courtyard Colonnade, y: 580 - 620)
      { id: "w25_sec3_l2_deck1", x: 3260, y: 600, width: 180, height: 18, type: "one-way" },
      { id: "w25_sec3_l2_arch", x: 3500, y: 580, width: 220, height: 20, type: "solid" },
      { id: "w25_sec3_l2_lintel2", x: 3820, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w25_sec3_l2_deck3", x: 4100, y: 580, width: 200, height: 20, type: "solid" },

      // Floor 3 (Bastion Deck, y: 380 - 430)
      { id: "w25_sec3_l3_bastion1", x: 3400, y: 400, width: 160, height: 22, type: "solid" },
      { id: "w25_sec3_l3_ferry", x: 3660, y: 420, width: 90, height: 20, type: "solid", startX: 3660, startY: 420, distanceX: 160, speed: 1.4, vx: 1.4, vy: 0 },
      { id: "w25_sec3_l3_bastion2", x: 3920, y: 390, width: 150, height: 22, type: "solid" },
      { id: "w25_sec3_l3_lintel3", x: 4200, y: 410, width: 140, height: 18, type: "one-way" },

      // Floor 4 (Sky Sanctuary Vault, y: 190 - 240)
      { id: "w25_sec3_lift3", x: 3340, y: 320, width: 75, height: 20, type: "solid", startX: 3340, startY: 190, distanceY: 140, speed: 1.3, vx: 0, vy: 1.3 },
      { id: "w25_sec3_l4_vault", x: 3440, y: 200, width: 140, height: 22, type: "solid" },
      { id: "w25_sec3_l4_crumb", x: 3620, y: 230, width: 90, height: 18, type: "crumbling" },

      // Checkpoint 3 Gatehouse
      { id: "w25_sec3_cp3_deck", x: 4620, y: 720, width: 100, height: 60, type: "solid" },

      // ==========================================
      // SECTOR 4: INNER SANCTUM & TEMPLE CITADEL APEX (x: 4800 -> 6200)
      // ==========================================
      // Floor 1 (Imperial Paved Floor)
      { id: "w25_sec4_l1_step1", x: 4920, y: 720, width: 110, height: 60, type: "solid" },
      { id: "w25_spring4", x: 5540, y: 764, width: 50, height: 16, type: "bouncy" },

      // Floor 2 (Inner Colonnade Gallery, y: 580 - 620)
      { id: "w25_sec4_l2_lintel1", x: 4880, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w25_sec4_l2_terrace", x: 5120, y: 580, width: 220, height: 20, type: "solid" },
      { id: "w25_sec4_l2_lintel2", x: 5440, y: 600, width: 150, height: 18, type: "one-way" },

      // Floor 3 (Imperial Sanctuary Balcony, y: 380 - 430)
      { id: "w25_sec4_l3_deck1", x: 5020, y: 400, width: 180, height: 22, type: "solid" },
      { id: "w25_sec4_lift4", x: 5300, y: 340, width: 80, height: 20, type: "solid", startX: 5300, startY: 200, distanceY: 150, speed: 1.4, vx: 0, vy: 1.4 },
      { id: "w25_sec4_l3_balcony", x: 5480, y: 390, width: 160, height: 22, type: "solid" },

      // Floor 4 (Temple Apex Pinnacle, y: 190 - 240)
      { id: "w25_sec4_l4_apex", x: 5750, y: 200, width: 140, height: 24, type: "solid" },
      { id: "w25_sec4_l3_step_down", x: 5920, y: 420, width: 90, height: 18, type: "one-way" },
      { id: "w25_sec4_l2_step_down", x: 5970, y: 580, width: 90, height: 18, type: "one-way" },

      // Grand Goal Dais (Solid finish altar)
      { id: "w25_sec4_goal_dais", x: 6000, y: 760, width: 200, height: 140, type: "solid" }
    ],
    hazards: [
      // Wall-mounted rotating sun saws guarding specific tiers (NO PITS OR GROUND SPIKES!)
      { id: "w25_hz_saw1", x: 740, y: 500, width: 42, height: 42, type: "saw" },
      { id: "w25_hz_saw2", x: 2360, y: 500, width: 44, height: 44, type: "saw" },
      { id: "w25_hz_saw3", x: 3880, y: 490, width: 44, height: 44, type: "saw" },
      { id: "w25_hz_saw4", x: 5380, y: 320, width: 44, height: 44, type: "saw" },

      // High ceiling stalactites in vaulted archways
      { id: "w25_hz_ceil1", x: 1040, y: 40, width: 180, height: 26, type: "spike" },
      { id: "w25_hz_ceil2", x: 2680, y: 40, width: 200, height: 26, type: "spike" },
      { id: "w25_hz_ceil3", x: 4200, y: 40, width: 180, height: 26, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w25_acorn_1", x: 1250, y: 150, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w25_acorn_2", x: 2880, y: 160, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w25_acorn_3", x: 5820, y: 150, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Laser Blaster & 3 Ammo Caches, Bubble Shield, Prismatic Magnet, 3 Hearts
      { id: "w25_blaster1", x: 1850, y: 345, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w25_ammo1", x: 1885, y: 345, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w25_mag1", x: 2600, y: 535, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w25_ammo2", x: 3580, y: 540, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w25_shield1", x: 3480, y: 155, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w25_ammo3", x: 5200, y: 540, width: 22, height: 22, type: "blaster_ammo", value: 300 },

      // Hearts at checkpoints
      { id: "w25_heart1", x: 1500, y: 740, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w25_heart2", x: 3160, y: 740, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w25_heart3", x: 4600, y: 740, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1 Multi-Tier Coins & Gems
      { id: "w25_c1", x: 220, y: 740, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_c2", x: 520, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem1", x: 820, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c3", x: 1090, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem2", x: 1280, y: 160, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c4", x: 1420, y: 740, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2 Multi-Tier Coins & Gems
      { id: "w25_c5", x: 1720, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_c6", x: 1980, y: 540, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem3", x: 2240, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c7", x: 2440, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_c8", x: 2750, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem4", x: 2900, y: 170, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c9", x: 2960, y: 740, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3 Multi-Tier Coins & Gems
      { id: "w25_c10", x: 3300, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem5", x: 3460, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c11", x: 3680, y: 740, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_c12", x: 3960, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem6", x: 4160, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c13", x: 4420, y: 740, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 4 Multi-Tier Coins & Gems
      { id: "w25_c14", x: 4940, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem7", x: 5180, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c15", x: 5420, y: 740, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_gem8", x: 5600, y: 350, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w25_c16", x: 5860, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w25_c17", x: 5950, y: 540, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Ground Patroller, Mezzanine Scorpion #1, Airway Flyer #1
      { id: "w25_e_patrol1", x: 400, y: 744, width: 28, height: 26, type: "patroller", vx: 0.85, vy: 0, minX: 300, maxX: 500, facing: 1 },
      { id: "w25_e_scorp1", x: 580, y: 568, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 520, maxX: 660, facing: 1 },
      { id: "w25_e_flyer1", x: 920, y: 340, width: 28, height: 24, type: "flyer", vx: 1.3, vy: 0, minX: 840, maxX: 1040, facing: 1 },

      // Sector 2: Ground Scorpion #2 & Patroller #2, Mid Flyer #2, Rampart Scorpion #4, Balcony Flyer #3
      { id: "w25_e_scorp2", x: 1820, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 1760, maxX: 1960, facing: 1 },
      { id: "w25_e_flyer2", x: 2020, y: 510, width: 28, height: 24, type: "flyer", vx: -1.3, vy: 0, minX: 1920, maxX: 2160, facing: -1 },
      { id: "w25_e_patrol2", x: 2200, y: 744, width: 28, height: 26, type: "patroller", vx: -0.85, vy: 0, minX: 2100, maxX: 2320, facing: -1 },
      { id: "w25_e_scorp3", x: 2750, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 2650, maxX: 2880, facing: 1 },
      { id: "w25_e_scorp4", x: 2400, y: 348, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 2370, maxX: 2470, facing: 1 },
      { id: "w25_e_flyer3", x: 2900, y: 110, width: 28, height: 24, type: "flyer", vx: 1.4, vy: 0, minX: 2820, maxX: 2980, facing: 1 },

      // Sector 3: Ground Scorpion #5 & Patroller #3, Mezzanine Scorpion #7, Airway Flyer #4, Ground Scorpion #6
      { id: "w25_e_scorp5", x: 3420, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 3350, maxX: 3550, facing: 1 },
      { id: "w25_e_patrol3", x: 3780, y: 744, width: 28, height: 26, type: "patroller", vx: 0.85, vy: 0, minX: 3700, maxX: 3900, facing: 1 },
      { id: "w25_e_scorp6", x: 4320, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: -0.8, vy: 0, minX: 4240, maxX: 4420, facing: -1 },
      { id: "w25_e_scorp7", x: 3880, y: 568, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 3830, maxX: 3950, facing: 1 },
      { id: "w25_e_flyer4", x: 4080, y: 320, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 3980, maxX: 4200, facing: -1 },

      // Sector 4: Ground Scorpion #8 & Patroller #4, Mezzanine Flyer #5, Rampart Scorpion #10, Royal Ground Scorpion #9
      { id: "w25_e_scorp8", x: 5080, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 5000, maxX: 5180, facing: 1 },
      { id: "w25_e_flyer5", x: 5320, y: 490, width: 28, height: 24, type: "flyer", vx: 1.3, vy: 0, minX: 5220, maxX: 5440, facing: 1 },
      { id: "w25_e_patrol4", x: 5360, y: 744, width: 28, height: 26, type: "patroller", vx: -0.85, vy: 0, minX: 5280, maxX: 5460, facing: -1 },
      { id: "w25_e_scorp9", x: 5740, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.85, vy: 0, minX: 5660, maxX: 5850, facing: 1 },
      { id: "w25_e_scorp10", x: 5540, y: 358, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 5490, maxX: 5610, facing: 1 }
    ],
    parTime: 140,
    threeStarScore: 22000
  },
  {
    id: 26,
    title: "26. Twilight Dunes: Rapid Sprint",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "runner",
    category: "classic",
    description: "Sprint along continuous solid ground, clear hurdles with double jumps, and outpace hazards in the Twilight Dunes!",
    worldWidth: 4500,
    worldHeight: 600,
    theme: THEMES.desert,
    playerStart: {"x":80,"y":440},
    goal: {"x":4360,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1575,"y":470,"width":30,"height":40,"activated":false},{"x":3060,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [
      {"id":"w3_l6_g1","x":0,"y":520,"width":830,"height":80,"type":"solid"},
      {"id":"w3_l6_h1","x":373,"y":472,"width":48,"height":48,"type":"solid"},
      {"id":"w3_l6_g2","x":940,"y":520,"width":650,"height":80,"type":"solid"},
      {"id":"w3_l6_spring_acorn1","x":1090,"y":504,"width":44,"height":16,"type":"bouncy"},
      {"id":"w3_l6_step_acorn1_a","x":1150,"y":410,"width":80,"height":16,"type":"one-way"},
      {"id":"w3_l6_step_acorn1_b","x":1200,"y":330,"width":80,"height":16,"type":"one-way"},
      {"id":"w3_l6_h2","x":1232,"y":472,"width":48,"height":48,"type":"solid"},
      {"id":"w3_l6_g3","x":1700,"y":520,"width":973,"height":80,"type":"solid"},
      {"id":"w3_l6_sp3","x":2137,"y":504,"width":44,"height":16,"type":"bouncy"},
      {"id":"w3_l6_g4","x":2783,"y":520,"width":1005,"height":80,"type":"solid"},
      {"id":"w3_l6_h4","x":3235,"y":472,"width":48,"height":48,"type":"solid"},
      {"id":"w3_l6_g5","x":3898,"y":520,"width":937,"height":80,"type":"solid"},
      {"id":"w3_l6_h5","x":4319,"y":472,"width":48,"height":48,"type":"solid"},
      {"id":"w3_l6_finish","x":4140,"y":490,"width":360,"height":110,"type":"solid"},
      {"id":"w3_l6_secret_p1","x":1240,"y":280,"width":110,"height":20,"type":"solid"},
      {"id":"w3_l6_secret_p3","x":3780,"y":280,"width":110,"height":20,"type":"solid"}
    ],
    hazards: [{"id":"w3_l6_hz1","x":533,"y":506,"width":36,"height":14,"type":"spike"},{"id":"w3_l6_hz3","x":2297,"y":506,"width":36,"height":14,"type":"spike"},{"id":"w3_l6_hz5","x":4479,"y":506,"width":36,"height":14,"type":"spike"}],
    collectibles: [
      {"id":"w3_l6_acorn_1","x":1280,"y":248,"width":26,"height":26,"type":"acorn","value":1500},
      {"id":"w3_l6_acorn_2","x":2430,"y":410,"width":26,"height":26,"type":"acorn","value":1500},
      {"id":"w3_l6_acorn_3","x":3822,"y":250,"width":26,"height":26,"type":"acorn","value":1500},
      {"id":"w3_l6_c_1","x":593,"y":378,"width":20,"height":20,"type":"coin","value":100},
      {"id":"w3_l6_c_2","x":927,"y":313,"width":20,"height":20,"type":"coin","value":100},
      {"id":"w3_l6_c_4","x":1593,"y":216,"width":20,"height":20,"type":"coin","value":100},
      {"id":"w3_l6_c_5","x":1927,"y":345,"width":20,"height":20,"type":"coin","value":100},
      {"id":"w3_l6_c_6","x":2260,"y":365,"width":24,"height":24,"type":"gem","value":500},
      {"id":"w3_l6_c_7","x":2593,"y":243,"width":20,"height":20,"type":"coin","value":100},
      {"id":"w3_l6_c_8","x":2927,"y":182,"width":20,"height":20,"type":"coin","value":100},
      {"id":"w3_l6_c_9","x":3260,"y":283,"width":24,"height":24,"type":"gem","value":500},
      {"id":"w3_l6_c_10","x":3593,"y":379,"width":20,"height":20,"type":"coin","value":100},
      {"id":"w3_l6_c_11","x":3927,"y":310,"width":20,"height":20,"type":"coin","value":100}
    ],
    enemies: [{"id":"w3_l6_e_1","x":1251,"y":430,"width":26,"height":22,"type":"flyer","vx":1.44,"vy":0,"minX":890,"maxX":1640,"facing":1},{"id":"w3_l6_e_2","x":2173,"y":494,"width":28,"height":26,"type":"anteater","vx":-1.03,"vy":0,"minX":1706,"maxX":2667,"facing":-1},{"id":"w3_l6_e_3","x":3272,"y":494,"width":28,"height":26,"type":"beaver","vx":1.03,"vy":0,"minX":2789,"maxX":3782,"facing":1},{"id":"w3_l6_e_4","x":4353,"y":494,"width":28,"height":26,"type":"hedgehog","vx":-1.03,"vy":0,"minX":3904,"maxX":4829,"facing":-1},{"id":"w3_l6_e_5","x":4306,"y":464,"width":28,"height":26,"type":"frog","vx":1.03,"vy":0,"minX":4146,"maxX":4494,"facing":1,"minY":420,"maxY":490}],
    parTime: 80,
    threeStarScore: 8600
  },
  {
    id: 27,
    title: "27. Twilight Dunes: The Great Sun Temple of Osiris",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "terrain",
    category: "classic",
    description: "Ascend the colossal four-tier Sun Temple of Osiris! Conquer a relentless labyrinth of moving ferries, vertical lifts, phasing mirage bridges, and spinning sun saws across four vertical floors. Obstacles and platforms everywhere—with an unbroken ground highway below so you never fall into a bottomless pit!",
    worldWidth: 6400,
    worldHeight: 900,
    theme: THEMES.twilightDunes || THEMES.desert,
    playerStart: { x: 80, y: 720 },
    goal: { x: 6220, y: 700, width: 44, height: 60 },
    checkpoints: [
      { x: 1600, y: 740, width: 30, height: 40, activated: false },
      { x: 3200, y: 740, width: 30, height: 40, activated: false },
      { x: 4800, y: 740, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // ==========================================
      // UNBROKEN GROUND HIGHWAY (x: 0 -> 6400)
      // ZERO PITS TO FALL INTO ACROSS THE ENTIRE LEVEL!
      // ==========================================
      { id: "w27_floor_sec1", x: 0, y: 780, width: 1650, height: 120, type: "solid" },
      { id: "w27_floor_sec2", x: 1650, y: 780, width: 1600, height: 120, type: "solid" },
      { id: "w27_floor_sec3", x: 3250, y: 780, width: 1600, height: 120, type: "solid" },
      { id: "w27_floor_sec4", x: 4850, y: 780, width: 1550, height: 120, type: "solid" },

      // ==========================================
      // SECTOR 1: THE OUTER COLONNADE & HIGH SENTRY SPIRE (x: 0 -> 1600)
      // ==========================================
      // Floor 1 (Ground Pavement, y: 720 - 780)
      { id: "w27_sec1_l1_arch1", x: 240, y: 720, width: 90, height: 60, type: "solid" },
      { id: "w27_sec1_spring1", x: 440, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec1_l1_block2", x: 580, y: 710, width: 80, height: 70, type: "solid" },
      { id: "w27_sec1_l1_ramp", x: 960, y: 730, width: 100, height: 50, type: "solid" },
      { id: "w27_sec1_spring2", x: 1240, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec1_cp1_deck", x: 1550, y: 720, width: 120, height: 60, type: "solid" },

      // Floor 2 (Mezzanine Colonnade, y: 580 - 620)
      { id: "w27_sec1_l2_walkway1", x: 180, y: 600, width: 180, height: 18, type: "one-way" },
      { id: "w27_sec1_l2_balcony1", x: 420, y: 580, width: 160, height: 20, type: "solid" },
      { id: "w27_sec1_l2_phase1", x: 640, y: 590, width: 120, height: 18, type: "phase" },
      { id: "w27_sec1_l2_terrace", x: 820, y: 580, width: 200, height: 20, type: "solid" },
      { id: "w27_sec1_l2_spring", x: 1060, y: 564, width: 44, height: 16, type: "bouncy" },
      { id: "w27_sec1_l2_bridge", x: 1140, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w27_sec1_l2_crumb", x: 1350, y: 590, width: 90, height: 18, type: "crumbling" },

      // Floor 3 (Ramparts & Moving Ferry, y: 380 - 430)
      { id: "w27_sec1_l3_deck1", x: 320, y: 400, width: 160, height: 22, type: "solid" },
      { id: "w27_sec1_l3_ferry1", x: 540, y: 410, width: 90, height: 20, type: "solid", startX: 540, startY: 410, distanceX: 180, speed: 1.4, vx: 1.4, vy: 0 },
      { id: "w27_sec1_l3_bastion", x: 780, y: 390, width: 180, height: 22, type: "solid" },
      { id: "w27_sec1_l3_phase2", x: 1020, y: 400, width: 120, height: 18, type: "phase" },
      { id: "w27_sec1_l3_perch", x: 1200, y: 390, width: 140, height: 20, type: "solid" },
      { id: "w27_sec1_l3_walkway", x: 1390, y: 410, width: 130, height: 18, type: "one-way" },

      // Floor 4 (Sky Sentry Spire & Vault, y: 190 - 240)
      { id: "w27_sec1_lift1", x: 880, y: 330, width: 80, height: 20, type: "solid", startX: 880, startY: 200, distanceY: 150, speed: 1.4, vx: 0, vy: 1.4 },
      { id: "w27_sec1_l4_spire", x: 1000, y: 200, width: 140, height: 24, type: "solid" },
      { id: "w27_sec1_l4_crumb1", x: 1180, y: 220, width: 80, height: 18, type: "crumbling" },
      { id: "w27_sec1_l4_crumb2", x: 1290, y: 240, width: 80, height: 18, type: "crumbling" },
      { id: "w27_sec1_l4_vault", x: 1400, y: 210, width: 120, height: 22, type: "solid" },

      // ==========================================
      // SECTOR 2: THE LABYRINTHINE BASTION & SAWBLADE ATRIUM (x: 1600 -> 3200)
      // ==========================================
      // Floor 1 (Ground Pavement, y: 720 - 780)
      { id: "w27_sec2_l1_stall1", x: 1780, y: 720, width: 100, height: 60, type: "solid" },
      { id: "w27_sec2_spring3", x: 1980, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec2_l1_stall2", x: 2180, y: 720, width: 110, height: 60, type: "solid" },
      { id: "w27_sec2_l1_arch", x: 2480, y: 710, width: 90, height: 70, type: "solid" },
      { id: "w27_sec2_spring4", x: 2740, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec2_l1_barricade", x: 2900, y: 720, width: 100, height: 60, type: "solid" },
      { id: "w27_sec2_cp2_deck", x: 3140, y: 720, width: 120, height: 60, type: "solid" },

      // Floor 2 (Mezzanine Colonnade, y: 580 - 620)
      { id: "w27_sec2_l2_awning1", x: 1720, y: 600, width: 150, height: 18, type: "one-way" },
      { id: "w27_sec2_l2_terrace", x: 1940, y: 580, width: 220, height: 20, type: "solid" },
      { id: "w27_sec2_l2_phase3", x: 2220, y: 590, width: 110, height: 18, type: "phase" },
      { id: "w27_sec2_l2_altar", x: 2380, y: 580, width: 150, height: 20, type: "solid" },
      { id: "w27_sec2_l2_bridge", x: 2580, y: 600, width: 170, height: 18, type: "one-way" },
      { id: "w27_sec2_l2_crumb", x: 2800, y: 590, width: 90, height: 18, type: "crumbling" },
      { id: "w27_sec2_l2_balcony", x: 2940, y: 580, width: 160, height: 20, type: "solid" },

      // Floor 3 (Sawblade Bastion & Moving Ferries, y: 380 - 430)
      { id: "w27_sec2_l3_deck1", x: 1840, y: 400, width: 150, height: 22, type: "solid" },
      { id: "w27_sec2_l3_ferry2", x: 2050, y: 410, width: 90, height: 20, type: "solid", startX: 2050, startY: 410, distanceX: 180, speed: 1.5, vx: 1.5, vy: 0 },
      { id: "w27_sec2_l3_bastion2", x: 2300, y: 390, width: 170, height: 22, type: "solid" },
      { id: "w27_sec2_l3_phase4", x: 2530, y: 400, width: 110, height: 18, type: "phase" },
      { id: "w27_sec2_l3_perch2", x: 2700, y: 390, width: 150, height: 20, type: "solid" },
      { id: "w27_sec2_l3_lintel", x: 2900, y: 410, width: 140, height: 18, type: "one-way" },

      // Floor 4 (Royal Sun Balcony, y: 190 - 240)
      { id: "w27_sec2_lift2", x: 2160, y: 330, width: 80, height: 20, type: "solid", startX: 2160, startY: 190, distanceY: 150, speed: 1.4, vx: 0, vy: 1.4 },
      { id: "w27_sec2_l4_sanctum", x: 2300, y: 200, width: 160, height: 24, type: "solid" },
      { id: "w27_sec2_l4_crumb", x: 2520, y: 220, width: 90, height: 18, type: "crumbling" },
      { id: "w27_sec2_l4_balcony", x: 2660, y: 200, width: 150, height: 22, type: "solid" },

      // ==========================================
      // SECTOR 3: THE SHIFTING MIRAGE CRYPTS & ELEVATORS (x: 3200 -> 4800)
      // ==========================================
      // Floor 1 (Ground Pavement, y: 720 - 780)
      { id: "w27_sec3_l1_pedestal1", x: 3380, y: 720, width: 100, height: 60, type: "solid" },
      { id: "w27_sec3_spring5", x: 3580, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec3_l1_arch", x: 3800, y: 710, width: 100, height: 70, type: "solid" },
      { id: "w27_sec3_spring6", x: 4100, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec3_l1_pedestal2", x: 4320, y: 720, width: 110, height: 60, type: "solid" },
      { id: "w27_sec3_l1_block", x: 4560, y: 710, width: 90, height: 70, type: "solid" },
      { id: "w27_sec3_cp3_deck", x: 4740, y: 720, width: 120, height: 60, type: "solid" },

      // Floor 2 (Mezzanine Crypt Walkways, y: 580 - 620)
      { id: "w27_sec3_l2_walkway1", x: 3320, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w27_sec3_l2_terrace", x: 3540, y: 580, width: 220, height: 20, type: "solid" },
      { id: "w27_sec3_l2_phase5", x: 3820, y: 590, width: 120, height: 18, type: "phase" },
      { id: "w27_sec3_l2_arch2", x: 4000, y: 580, width: 180, height: 20, type: "solid" },
      { id: "w27_sec3_l2_bridge", x: 4240, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w27_sec3_l2_crumb", x: 4460, y: 590, width: 90, height: 18, type: "crumbling" },
      { id: "w27_sec3_l2_deck", x: 4600, y: 580, width: 150, height: 20, type: "solid" },

      // Floor 3 (Crypt Bastions & Crossing Ferries, y: 380 - 430)
      { id: "w27_sec3_l3_bastion1", x: 3420, y: 400, width: 160, height: 22, type: "solid" },
      { id: "w27_sec3_l3_ferry3", x: 3660, y: 410, width: 90, height: 20, type: "solid", startX: 3660, startY: 410, distanceX: 180, speed: 1.5, vx: 1.5, vy: 0 },
      { id: "w27_sec3_l3_bastion2", x: 3920, y: 390, width: 170, height: 22, type: "solid" },
      { id: "w27_sec3_l3_ferry4", x: 4160, y: 420, width: 90, height: 20, type: "solid", startX: 4160, startY: 420, distanceX: 160, speed: -1.4, vx: -1.4, vy: 0 },
      { id: "w27_sec3_l3_perch", x: 4400, y: 390, width: 150, height: 20, type: "solid" },
      { id: "w27_sec3_l3_lintel", x: 4600, y: 410, width: 140, height: 18, type: "one-way" },

      // Floor 4 (Sky Vault & Whispering Catwalks, y: 190 - 240)
      { id: "w27_sec3_lift3", x: 3500, y: 330, width: 80, height: 20, type: "solid", startX: 3500, startY: 190, distanceY: 150, speed: 1.4, vx: 0, vy: 1.4 },
      { id: "w27_sec3_l4_vault", x: 3640, y: 200, width: 150, height: 24, type: "solid" },
      { id: "w27_sec3_l4_crumb1", x: 3840, y: 230, width: 80, height: 18, type: "crumbling" },
      { id: "w27_sec3_l4_crumb2", x: 3960, y: 210, width: 80, height: 18, type: "crumbling" },
      { id: "w27_sec3_l4_spire", x: 4090, y: 190, width: 140, height: 22, type: "solid" },

      // ==========================================
      // SECTOR 4: INNER SANCTUM & GRAND TEMPLE APEX (x: 4800 -> 6400)
      // ==========================================
      // Floor 1 (Ground Avenue to Altar)
      { id: "w27_sec4_l1_step1", x: 4980, y: 720, width: 100, height: 60, type: "solid" },
      { id: "w27_sec4_spring7", x: 5200, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec4_l1_step2", x: 5460, y: 710, width: 110, height: 70, type: "solid" },
      { id: "w27_sec4_spring8", x: 5740, y: 764, width: 46, height: 16, type: "bouncy" },
      { id: "w27_sec4_l1_step3", x: 5960, y: 730, width: 120, height: 50, type: "solid" },
      { id: "w27_sec4_goal_dais", x: 6180, y: 760, width: 220, height: 140, type: "solid" },

      // Floor 2 (Temple Colonnade Gallery, y: 580 - 620)
      { id: "w27_sec4_l2_walkway1", x: 4920, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w27_sec4_l2_terrace", x: 5140, y: 580, width: 220, height: 20, type: "solid" },
      { id: "w27_sec4_l2_phase6", x: 5420, y: 590, width: 120, height: 18, type: "phase" },
      { id: "w27_sec4_l2_lintel", x: 5600, y: 600, width: 160, height: 18, type: "one-way" },
      { id: "w27_sec4_l2_balcony", x: 5820, y: 580, width: 170, height: 20, type: "solid" },
      { id: "w27_sec4_l2_step_down", x: 6040, y: 620, width: 90, height: 18, type: "one-way" },

      // Floor 3 (Sanctuary Ramparts, y: 380 - 430)
      { id: "w27_sec4_l3_deck1", x: 5040, y: 400, width: 180, height: 22, type: "solid" },
      { id: "w27_sec4_lift4", x: 5300, y: 340, width: 80, height: 20, type: "solid", startX: 5300, startY: 200, distanceY: 150, speed: 1.5, vx: 0, vy: 1.5 },
      { id: "w27_sec4_l3_balcony", x: 5480, y: 390, width: 170, height: 22, type: "solid" },
      { id: "w27_sec4_l3_ferry5", x: 5720, y: 400, width: 90, height: 20, type: "solid", startX: 5720, startY: 400, distanceX: 180, speed: 1.5, vx: 1.5, vy: 0 },
      { id: "w27_sec4_l3_step_down", x: 5980, y: 440, width: 90, height: 18, type: "one-way" },

      // Floor 4 (Temple Apex Pinnacle of Osiris, y: 190 - 240)
      { id: "w27_sec4_l4_apex", x: 5820, y: 200, width: 160, height: 24, type: "solid" },
      { id: "w27_sec4_l4_crumb", x: 6020, y: 240, width: 90, height: 18, type: "crumbling" }
    ],
    hazards: [
      // Rotating sun saws stationed at choke points & vertical gaps
      { id: "w27_saw1", x: 680, y: 490, width: 44, height: 44, type: "saw" },
      { id: "w27_saw2", x: 1280, y: 360, width: 44, height: 44, type: "saw" },
      { id: "w27_saw3", x: 2180, y: 490, width: 44, height: 44, type: "saw" },
      { id: "w27_saw4", x: 2540, y: 360, width: 44, height: 44, type: "saw" },
      { id: "w27_saw5", x: 3740, y: 490, width: 44, height: 44, type: "saw" },
      { id: "w27_saw6", x: 4320, y: 360, width: 44, height: 44, type: "saw" },
      { id: "w27_saw7", x: 5380, y: 320, width: 44, height: 44, type: "saw" },
      { id: "w27_saw8", x: 5660, y: 480, width: 44, height: 44, type: "saw" },

      // Ceiling stalactites in vaulted archways
      { id: "w27_ceil1", x: 940, y: 40, width: 180, height: 26, type: "spike" },
      { id: "w27_ceil2", x: 2420, y: 40, width: 200, height: 26, type: "spike" },
      { id: "w27_ceil3", x: 3960, y: 40, width: 180, height: 26, type: "spike" },
      { id: "w27_ceil4", x: 5540, y: 40, width: 200, height: 26, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w27_acorn_1", x: 1450, y: 160, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w27_acorn_2", x: 2580, y: 350, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w27_acorn_3", x: 5890, y: 150, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Laser Blaster, Ammo crates, Bubble Shield, Prismatic Magnet, Hearts
      { id: "w27_blaster1", x: 1860, y: 345, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w27_ammo1", x: 1900, y: 345, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w27_mag1", x: 2430, y: 535, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w27_ammo2", x: 3560, y: 540, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w27_shield1", x: 3700, y: 155, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w27_ammo3", x: 5180, y: 540, width: 22, height: 22, type: "blaster_ammo", value: 300 },

      // Recovery Hearts at checkpoints
      { id: "w27_heart1", x: 1590, y: 740, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w27_heart2", x: 3190, y: 740, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w27_heart3", x: 4790, y: 740, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1 Coins & Gems
      { id: "w27_c1", x: 260, y: 740, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_c2", x: 480, y: 550, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem1", x: 700, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c3", x: 920, y: 540, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem2", x: 1070, y: 160, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c4", x: 1450, y: 740, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2 Coins & Gems
      { id: "w27_c5", x: 1820, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_c6", x: 2050, y: 540, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem3", x: 2360, y: 350, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c7", x: 2620, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem4", x: 2740, y: 160, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c8", x: 3000, y: 740, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3 Coins & Gems
      { id: "w27_c9", x: 3420, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem5", x: 3680, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c10", x: 3950, y: 740, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_c11", x: 4280, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem6", x: 4480, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c12", x: 4620, y: 740, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 4 Coins & Gems
      { id: "w27_c13", x: 5040, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem7", x: 5240, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c14", x: 5540, y: 740, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_gem8", x: 5740, y: 350, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w27_c15", x: 5980, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w27_c16", x: 6080, y: 540, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Ground Patroller, Mezzanine Dune Scorpion, Airway Flyer
      { id: "w27_e_patrol1", x: 380, y: 744, width: 28, height: 26, type: "patroller", vx: 0.85, vy: 0, minX: 280, maxX: 480, facing: 1 },
      { id: "w27_e_scorp1", x: 500, y: 548, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 440, maxX: 560, facing: 1 },
      { id: "w27_e_flyer1", x: 880, y: 330, width: 28, height: 24, type: "flyer", vx: 1.3, vy: 0, minX: 800, maxX: 980, facing: 1 },

      // Sector 2: Ground Dune Scorpion, Mid Flyer, Mezzanine Frog, Rampart Scorpion, Sky Flyer
      { id: "w27_e_scorp2", x: 1860, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 1800, maxX: 1960, facing: 1 },
      { id: "w27_e_flyer2", x: 2120, y: 510, width: 28, height: 24, type: "flyer", vx: -1.3, vy: 0, minX: 2040, maxX: 2240, facing: -1 },
      { id: "w27_e_frog1", x: 2440, y: 548, width: 28, height: 26, type: "frog", vx: 0.9, vy: 0, minX: 2390, maxX: 2510, facing: 1, minY: 510, maxY: 570 },
      { id: "w27_e_scorp3", x: 2360, y: 358, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 2320, maxX: 2440, facing: 1 },
      { id: "w27_e_flyer3", x: 2720, y: 150, width: 28, height: 24, type: "flyer", vx: 1.4, vy: 0, minX: 2660, maxX: 2820, facing: 1 },

      // Sector 3: Ground Dune Scorpion, Patroller, Mezzanine Dune Scorpion, Bastion Flyer, High Vault Hedgehog
      { id: "w27_e_scorp4", x: 3460, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 3400, maxX: 3560, facing: 1 },
      { id: "w27_e_patrol2", x: 3860, y: 744, width: 28, height: 26, type: "patroller", vx: 0.85, vy: 0, minX: 3800, maxX: 3960, facing: 1 },
      { id: "w27_e_scorp5", x: 4060, y: 548, width: 28, height: 26, type: "dune_scorpion", vx: -0.8, vy: 0, minX: 4010, maxX: 4160, facing: -1 },
      { id: "w27_e_flyer4", x: 4260, y: 330, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 4180, maxX: 4360, facing: -1 },
      { id: "w27_e_hedge1", x: 4140, y: 158, width: 28, height: 26, type: "hedgehog", vx: 0.8, vy: 0, minX: 4100, maxX: 4210, facing: 1 },

      // Sector 4: Ground Dune Scorpion, Mezzanine Flyer, Ground Patroller, Rampart Dune Scorpion, Altar Guardian Scorpion
      { id: "w27_e_scorp6", x: 5120, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.8, vy: 0, minX: 5040, maxX: 5200, facing: 1 },
      { id: "w27_e_flyer5", x: 5360, y: 490, width: 28, height: 24, type: "flyer", vx: 1.3, vy: 0, minX: 5260, maxX: 5460, facing: 1 },
      { id: "w27_e_patrol3", x: 5520, y: 744, width: 28, height: 26, type: "patroller", vx: -0.85, vy: 0, minX: 5460, maxX: 5600, facing: -1 },
      { id: "w27_e_scorp7", x: 5560, y: 358, width: 28, height: 26, type: "dune_scorpion", vx: 0.75, vy: 0, minX: 5500, maxX: 5620, facing: 1 },
      { id: "w27_e_scorp8", x: 5880, y: 748, width: 28, height: 26, type: "dune_scorpion", vx: 0.85, vy: 0, minX: 5800, maxX: 5980, facing: 1 }
    ],
    parTime: 145,
    threeStarScore: 23000
  },
  {
    id: 28,
    title: "28. Twilight Dunes: Aviator Flight",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "rocketeer",
    category: "rocketeer",
    description: "Take to the open skies! Zero ground platforms—pure aerial jetpack flight navigating fuel canisters across the Twilight Dunes.",
    worldWidth: 4900,
    worldHeight: 650,
    theme: THEMES.desert,
    playerStart: {"x":80,"y":440},
    startWithJetpack: true,
    goal: {"x":4760,"y":420,"width":44,"height":60},
    checkpoints: [],
    platforms: [{"id":"w3_l8_launch","x":0,"y":480,"width":260,"height":170,"type":"solid"},{"id":"w3_l8_landing","x":4560,"y":440,"width":340,"height":210,"type":"solid"}],
    hazards: [],
    collectibles: [{"id":"w3_l8_jp_start","x":120,"y":440,"width":28,"height":28,"type":"jetpack","value":500},{"id":"w3_l8_acorn_1","x":1274,"y":110,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l8_acorn_2","x":2695,"y":490,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l8_acorn_3","x":4067,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l8_fuel_1","x":856,"y":396,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_fuel_2","x":1311,"y":198,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_fuel_3","x":1767,"y":152,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_fuel_4","x":2222,"y":371,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_fuel_5","x":2678,"y":318,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_fuel_6","x":3133,"y":123,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_fuel_7","x":3589,"y":265,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_fuel_8","x":4044,"y":395,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w3_l8_c_1","x":627,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l8_c_2","x":993,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l8_c_5","x":2093,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l8_c_6","x":2460,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w3_l8_c_7","x":2827,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l8_c_10","x":3927,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l8_c_11","x":4293,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w3_l8_fly_1","x":1016,"y":336,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":916,"maxX":1136,"facing":-1},{"id":"w3_l8_fly_2","x":1471,"y":138,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":1371,"maxX":1591,"facing":1},{"id":"w3_l8_fly_3","x":1927,"y":120,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":1827,"maxX":2047,"facing":-1},{"id":"w3_l8_fly_4","x":2382,"y":311,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":2282,"maxX":2502,"facing":1},{"id":"w3_l8_fly_5","x":2838,"y":258,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":2738,"maxX":2958,"facing":-1},{"id":"w3_l8_fly_6","x":3293,"y":120,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":3193,"maxX":3413,"facing":1},{"id":"w3_l8_fly_7","x":3749,"y":205,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":3649,"maxX":3869,"facing":-1},{"id":"w3_l8_fly_8","x":4204,"y":335,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":4104,"maxX":4324,"facing":1}],
    parTime: 86,
    threeStarScore: 9000
  },
  {
    id: 29,
    title: "29. Twilight Dunes: Sanctuary Exploration",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "terrain",
    category: "classic",
    description: "Explore the vertical elevations, moving platforms, and hidden secrets of Twilight Dunes.",
    worldWidth: 4980,
    worldHeight: 600,
    theme: THEMES.desert,
    playerStart: {"x":80,"y":440},
    goal: {"x":4840,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1743,"y":470,"width":30,"height":40,"activated":false},{"x":3386,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w3_l9_p_start","x":0,"y":500,"width":320,"height":100,"type":"solid"},{"id":"w3_l9_p1","x":380,"y":426,"width":249,"height":14,"type":"one-way"},{"id":"w3_l9_p2","x":764,"y":490,"width":207,"height":26,"type":"bouncy"},{"id":"w3_l9_p3","x":1108,"y":415,"width":151,"height":26,"type":"crumbling"},{"id":"w3_l9_p4","x":1373,"y":315,"width":186,"height":26,"type":"solid"},{"id":"w3_l9_p5","x":1691,"y":415,"width":246,"height":14,"type":"one-way"},{"id":"w3_l9_p6","x":2075,"y":490,"width":220,"height":26,"type":"solid","speed":1.64,"distanceX":140,"startX":2075,"startY":490,"vx":1.64},{"id":"w3_l9_p7","x":2413,"y":404,"width":156,"height":26,"type":"bouncy"},{"id":"w3_l9_p8","x":2698,"y":304,"width":173,"height":26,"type":"solid"},{"id":"w3_l9_p9","x":3010,"y":404,"width":240,"height":14,"type":"one-way"},{"id":"w3_l9_p10","x":3372,"y":490,"width":232,"height":26,"type":"solid"},{"id":"w3_l9_p11","x":3730,"y":392,"width":164,"height":26,"type":"solid"},{"id":"w3_l9_p12","x":4033,"y":292,"width":162,"height":26,"type":"bouncy"},{"id":"w3_l9_p13","x":4321,"y":392,"width":230,"height":14,"type":"one-way"},{"id":"w3_l9_finish_base","x":4600,"y":480,"width":380,"height":120,"type":"solid"},{"id":"w3_l9_secret_p1","x":1345,"y":160,"width":90,"height":20,"type":"solid"},{"id":"w3_l9_secret_p2","x":2789,"y":470,"width":70,"height":20,"type":"crumbling"},{"id":"w3_l9_secret_p3","x":4700,"y":220,"width":100,"height":20,"type":"solid"}],
    hazards: [{"id":"w3_l9_hz3","x":1145,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w3_l9_hz9","x":3070,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w3_l9_hz12","x":4073,"y":574,"width":80,"height":26,"type":"spike"}],
    collectibles: [{"id":"w3_l9_acorn_1","x":1377,"y":130,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l9_acorn_2","x":2811,"y":440,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l9_acorn_3","x":4737,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l9_c_1","x":633,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l9_c_2","x":1007,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l9_c_4","x":1753,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l9_c_5","x":2127,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l9_c_6","x":2500,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w3_l9_c_7","x":2873,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l9_c_8","x":3247,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l9_c_9","x":3620,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w3_l9_c_10","x":3993,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l9_c_11","x":4367,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w3_l9_e_1","x":491,"y":400,"width":28,"height":26,"type":"slime","vx":1.03,"vy":0,"minX":386,"maxX":623,"facing":1},{"id":"w3_l9_e_2","x":1170,"y":300,"width":26,"height":22,"type":"flyer","vx":-1.44,"vy":0,"minX":1058,"maxX":1309,"facing":-1},{"id":"w3_l9_e_3","x":1452,"y":289,"width":28,"height":26,"type":"anteater","vx":1.03,"vy":0,"minX":1379,"maxX":1553,"facing":1},{"id":"w3_l9_e_4","x":1800,"y":389,"width":28,"height":26,"type":"beaver","vx":-1.03,"vy":0,"minX":1697,"maxX":1931,"facing":-1},{"id":"w3_l9_e_5","x":2171,"y":464,"width":28,"height":26,"type":"hedgehog","vx":1.03,"vy":0,"minX":2081,"maxX":2289,"facing":1},{"id":"w3_l9_e_6","x":2771,"y":278,"width":28,"height":26,"type":"frog","vx":-1.03,"vy":0,"minX":2704,"maxX":2865,"facing":-1,"minY":234,"maxY":304}],
    parTime: 89,
    threeStarScore: 9200
  },
  {
    id: 30,
    title: "30. Twilight Dunes: Fortress Climax",
    worldNumber: 3,
    worldName: "Twilight Dunes",
    gameplayType: "terrain",
    category: "classic",
    description: "The grand climax of Twilight Dunes! A high-stakes gauntlet testing all your platforming prowess.",
    worldWidth: 4760,
    worldHeight: 600,
    theme: THEMES.desert,
    playerStart: {"x":80,"y":440},
    goal: {"x":4620,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1666,"y":470,"width":30,"height":40,"activated":false},{"x":3237,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w3_l10_p_start","x":0,"y":500,"width":320,"height":100,"type":"solid"},{"id":"w3_l10_p1","x":380,"y":426,"width":249,"height":14,"type":"one-way"},{"id":"w3_l10_p2","x":764,"y":490,"width":207,"height":26,"type":"bouncy"},{"id":"w3_l10_p3","x":1108,"y":415,"width":151,"height":26,"type":"crumbling"},{"id":"w3_l10_p4","x":1373,"y":315,"width":186,"height":26,"type":"solid"},{"id":"w3_l10_p5","x":1691,"y":415,"width":246,"height":14,"type":"one-way"},{"id":"w3_l10_p6","x":2075,"y":490,"width":220,"height":26,"type":"solid","speed":1.64,"distanceX":140,"startX":2075,"startY":490,"vx":1.64},{"id":"w3_l10_p7","x":2413,"y":404,"width":156,"height":26,"type":"bouncy"},{"id":"w3_l10_p8","x":2698,"y":304,"width":173,"height":26,"type":"solid"},{"id":"w3_l10_p9","x":3010,"y":404,"width":240,"height":14,"type":"one-way"},{"id":"w3_l10_p10","x":3372,"y":490,"width":232,"height":26,"type":"solid"},{"id":"w3_l10_p11","x":3730,"y":392,"width":164,"height":26,"type":"solid"},{"id":"w3_l10_p12","x":4033,"y":292,"width":162,"height":26,"type":"bouncy"},{"id":"w3_l10_finish_base","x":4380,"y":480,"width":380,"height":120,"type":"solid"},{"id":"w3_l10_secret_p1","x":1285,"y":160,"width":90,"height":20,"type":"solid"},{"id":"w3_l10_secret_p2","x":2666,"y":470,"width":70,"height":20,"type":"crumbling"},{"id":"w3_l10_secret_p3","x":4480,"y":220,"width":100,"height":20,"type":"solid"}],
    hazards: [{"id":"w3_l10_hz3","x":1145,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w3_l10_hz9","x":3070,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w3_l10_hz12","x":4073,"y":574,"width":80,"height":26,"type":"spike"}],
    collectibles: [{"id":"w3_l10_acorn_1","x":1317,"y":130,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l10_acorn_2","x":2688,"y":440,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l10_acorn_3","x":4517,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w3_l10_c_1","x":615,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l10_c_2","x":970,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l10_c_4","x":1680,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l10_c_5","x":2035,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l10_c_6","x":2390,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w3_l10_c_7","x":2745,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l10_c_8","x":3100,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l10_c_9","x":3455,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w3_l10_c_10","x":3810,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w3_l10_c_11","x":4165,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w3_l10_e_1","x":491,"y":400,"width":28,"height":26,"type":"beaver","vx":1.03,"vy":0,"minX":386,"maxX":623,"facing":1},{"id":"w3_l10_e_2","x":1170,"y":389,"width":28,"height":26,"type":"hedgehog","vx":-1.03,"vy":0,"minX":1114,"maxX":1253,"facing":-1},{"id":"w3_l10_e_3","x":1452,"y":289,"width":28,"height":26,"type":"frog","vx":1.03,"vy":0,"minX":1379,"maxX":1553,"facing":1,"minY":245,"maxY":315},{"id":"w3_l10_e_4","x":1800,"y":325,"width":26,"height":22,"type":"pigeon","vx":-1.44,"vy":0,"minX":1641,"maxX":1987,"facing":-1},{"id":"w3_l10_e_5","x":2171,"y":464,"width":28,"height":26,"type":"skunk","vx":1.03,"vy":0,"minX":2081,"maxX":2289,"facing":1},{"id":"w3_l10_e_6","x":2771,"y":278,"width":28,"height":26,"type":"goose","vx":-1.03,"vy":0,"minX":2704,"maxX":2865,"facing":-1}],
    parTime: 92,
    threeStarScore: 9400
  }
];
