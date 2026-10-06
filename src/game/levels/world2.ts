import { LevelData } from '../../types/game';
import { THEMES } from '../themes';

export const WORLD_2_LEVELS: LevelData[] = [
  {
    id: 11,
    title: "11. Borealis Glacier: Stratosphere Rocketeer Flight",
    worldNumber: 2,
    worldName: "Borealis Glacier",
    gameplayType: "rocketeer",
    category: "rocketeer",
    description: "Embark on an epic high-altitude rocketeer flight through the sub-zero skies of Borealis Glacier! With vast abyssal gulfs and sparse, razor-thin ice pinnacles to land on, master jetpack flight arcs, dive through mid-air fuel canisters, dodge floating frost saws, and soar past airborne cryo patrols across 5,800 meters of arctic skies to reach the Stratosphere Beacon.",
    worldWidth: 5800,
    worldHeight: 960,
    theme: THEMES.glacier,
    startWithJetpack: true,
    playerStart: { x: 80, y: 740 },
    goal: { x: 5640, y: 340, width: 44, height: 60 },
    checkpoints: [
      { x: 2300, y: 320, width: 30, height: 40, activated: false },
      { x: 4540, y: 280, width: 30, height: 40, activated: false }
    ],
    // SPARSE, LIMITED LANDING AREAS ACROSS 5,800 METERS OF FREEZING SKY
    platforms: [
      // SECTOR 1: Outpost Launchpad
      { id: "l11_launchpad", x: 0, y: 780, width: 220, height: 180, type: "solid" },
      // Sparse Landing Needle 1 (Pinnacle 1 atop yawning cryo gulf)
      { id: "l11_pinnacle1", x: 1040, y: 420, width: 70, height: 540, type: "solid" },

      // SECTOR 2: The Frostbite Sky-Abyss & Checkpoint Spire 1
      // Floating fragile crumbling floe mid-abyss
      { id: "l11_crumb_floe1", x: 1560, y: 480, width: 60, height: 18, type: "crumbling" },
      // Secret High Acorn Arch
      { id: "l11_secret_acorn_arch1", x: 1660, y: 160, width: 70, height: 16, type: "one-way" },
      // Checkpoint Spire 1: Isolated Needle Tower
      { id: "l11_cp1_spire", x: 2280, y: 360, width: 80, height: 600, type: "solid" },

      // SECTOR 3: The Blizzard Jetstream
      // Isolated Floating Crystal Needle Perch
      { id: "l11_crystal_perch", x: 2900, y: 480, width: 70, height: 24, type: "solid" },
      // Moving Ice Shuttle across the central abyss
      { id: "l11_shuttle_mid", x: 3260, y: 400, width: 80, height: 18, type: "solid", startX: 3260, startY: 400, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      // Secret Low Dive Altar (Golden Acorn #2)
      { id: "l11_secret_altar2", x: 2920, y: 760, width: 70, height: 20, type: "solid" },

      // SECTOR 4: The Auroral Ion Winds & Checkpoint Spire 2
      // Suspended crumbling ice needle
      { id: "l11_crumb_floe2", x: 4080, y: 420, width: 60, height: 18, type: "crumbling" },
      // Checkpoint Spire 2: Towering Needle Monolith
      { id: "l11_cp2_spire", x: 4520, y: 320, width: 80, height: 640, type: "solid" },
      // High roost above checkpoint
      { id: "l11_goose_mast", x: 4540, y: 160, width: 50, height: 16, type: "one-way" },

      // SECTOR 5: The Stratosphere Pinnacle & Beacon Landing
      // Floating stepping needle
      { id: "l11_stepping_needle", x: 4980, y: 380, width: 70, height: 24, type: "solid" },
      // Single crumbling ice ledge
      { id: "l11_crumb_floe3", x: 5260, y: 300, width: 65, height: 18, type: "crumbling" },
      // Stratosphere High Mast (Golden Acorn #3)
      { id: "l11_stratosphere_mast", x: 5380, y: 80, width: 60, height: 18, type: "one-way" },
      // Beacon Landing Bastion (Final Goal Deck)
      { id: "l11_goal_bastion", x: 5520, y: 400, width: 280, height: 560, type: "solid" }
    ],
    hazards: [
      // Surging Sub-Zero Cryo Pits (Rise and fall dynamically below the flight lanes!)
      { id: "l11_hz_cryo1", x: 1100, y: 900, width: 1100, height: 180, type: "lava", startX: 1100, startY: 900, distanceX: 0, distanceY: -200, speed: 1.8, vx: 0, vy: -1.8 },
      { id: "l11_hz_saw_acorn1", x: 1675, y: 220, width: 40, height: 40, type: "saw", startX: 1675, startY: 220, distanceX: 0, distanceY: 100, speed: 2.2, vx: 0, vy: 2.2 },
      { id: "l11_hz_cryo2", x: 2700, y: 920, width: 900, height: 180, type: "lava", startX: 2700, startY: 920, distanceX: 0, distanceY: -240, speed: 2.0, vx: 0, vy: -2.0 },
      { id: "l11_hz_saw_mid1", x: 2660, y: 380, width: 40, height: 40, type: "saw", startX: 2660, startY: 380, distanceX: 0, distanceY: 120, speed: 2.2, vx: 0, vy: 2.2 },
      { id: "l11_hz_saw_mid2", x: 3480, y: 320, width: 40, height: 40, type: "saw", startX: 3480, startY: 320, distanceX: 80, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "l11_hz_cryo3", x: 3900, y: 920, width: 900, height: 180, type: "lava", startX: 3900, startY: 920, distanceX: 0, distanceY: -220, speed: 1.8, vx: 0, vy: -1.8 },
      { id: "l11_hz_saw_ion", x: 4320, y: 240, width: 40, height: 40, type: "saw", startX: 4320, startY: 240, distanceX: 0, distanceY: 110, speed: 2.2, vx: 0, vy: 2.2 },
      { id: "l11_hz_cryo4", x: 5040, y: 920, width: 460, height: 180, type: "lava", startX: 5040, startY: 920, distanceX: 0, distanceY: -200, speed: 1.8, vx: 0, vy: -1.8 },
      { id: "l11_hz_spikes_goal", x: 5440, y: 880, width: 80, height: 20, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "l11_acorn1", x: 1680, y: 110, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l11_acorn2", x: 2940, y: 710, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l11_acorn3", x: 5400, y: 40, width: 26, height: 26, type: "acorn", value: 1500 },

      // Starting Equipment & Safety Items on Launchpad
      { id: "l11_start_jp", x: 120, y: 740, width: 28, height: 28, type: "jetpack", value: 500 },
      { id: "l11_shield", x: 170, y: 740, width: 28, height: 28, type: "bubble_shield", value: 600 },

      // DYNAMIC MID-AIR FUEL CANISTERS (Spaced along the flight arcs)
      // Sector 1 Ascent
      { id: "l11_fuel_1", x: 480, y: 600, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_2", x: 780, y: 460, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      // Sector 2 Sky-Abyss
      { id: "l11_fuel_3", x: 1360, y: 380, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_4", x: 1780, y: 420, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_5", x: 2020, y: 340, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_cp1", x: 2340, y: 320, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      // Sector 3 Blizzard Jetstream
      { id: "l11_fuel_6", x: 2580, y: 340, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_7", x: 2780, y: 420, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_8", x: 3100, y: 360, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_9", x: 3420, y: 300, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      // Sector 4 Auroral Ion Winds
      { id: "l11_fuel_10", x: 3800, y: 360, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_11", x: 3960, y: 280, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_12", x: 4240, y: 340, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_13", x: 4400, y: 260, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_cp2", x: 4580, y: 280, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      // Sector 5 Stratosphere Pinnacle
      { id: "l11_fuel_14", x: 4860, y: 320, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_15", x: 5120, y: 260, width: 24, height: 24, type: "jetpack_fuel", value: 250 },
      { id: "l11_fuel_16", x: 5360, y: 220, width: 24, height: 24, type: "jetpack_fuel", value: 250 },

      // Mid-Air Flight Ring Coins & Stratosphere Gems
      { id: "l11_c1", x: 340, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c2", x: 410, y: 640, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c3", x: 620, y: 530, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c4", x: 700, y: 490, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_g1", x: 920, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l11_c5", x: 1220, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c6", x: 1480, y: 420, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_g2", x: 1680, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l11_c7", x: 1900, y: 380, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c8", x: 2160, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c9", x: 2480, y: 350, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c10", x: 2680, y: 380, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_g3", x: 3000, y: 440, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l11_c11", x: 3340, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c12", x: 3620, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c13", x: 3880, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c14", x: 4120, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_g4", x: 4460, y: 220, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l11_c15", x: 4720, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_c16", x: 5040, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l11_g5", x: 5200, y: 220, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l11_c17", x: 5460, y: 280, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sparse ground threats on the isolated needle pinnacles + Airborne Cryo Drones & Yetis
      // Pinnacle 1 Yeti throwing snowballs across the first chasm
      { id: "l11_e_yeti1", x: 1060, y: 376, width: 30, height: 30, type: "frost_yeti", vx: 0.6, vy: 0, minX: 1040, maxX: 1090, facing: -1 },
      // Sector 2 Airborne Cryo Patrols
      { id: "l11_e_drone1", x: 1420, y: 300, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 1340, maxX: 1500, facing: 1 },
      { id: "l11_e_drone2", x: 1880, y: 260, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 1800, maxX: 1960, facing: -1 },
      // Checkpoint 1 Spire Guard
      { id: "l11_e_patrol1", x: 2300, y: 334, width: 28, height: 26, type: "patroller", vx: 0.7, vy: 0, minX: 2280, maxX: 2350, facing: 1 },

      // Sector 3 Blizzard Drones & High Yeti
      { id: "l11_e_drone3", x: 2720, y: 280, width: 26, height: 22, type: "flyer", vx: 1.4, vy: 0, minX: 2640, maxX: 2800, facing: 1 },
      { id: "l11_e_yeti2", x: 2920, y: 436, width: 30, height: 30, type: "frost_yeti", vx: 0.5, vy: 0, minX: 2900, maxX: 2950, facing: 1 },
      { id: "l11_e_drone4", x: 3360, y: 220, width: 26, height: 22, type: "flyer", vx: -1.4, vy: 0, minX: 3280, maxX: 3440, facing: -1 },

      // Sector 4 Auroral Ion Winds Interceptors
      { id: "l11_e_drone5", x: 3900, y: 240, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 3820, maxX: 3980, facing: 1 },
      { id: "l11_e_drone6", x: 4180, y: 200, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 4100, maxX: 4260, facing: -1 },
      { id: "l11_e_drone7", x: 4360, y: 160, width: 26, height: 22, type: "flyer", vx: 1.4, vy: 0, minX: 4280, maxX: 4440, facing: 1 },
      { id: "l11_e_goose1", x: 4540, y: 120, width: 30, height: 30, type: "goose", vx: 0.6, vy: 0, minX: 4530, maxX: 4580, facing: -1 },

      // Sector 5 Stratosphere Gauntlet
      { id: "l11_e_yeti3", x: 5000, y: 336, width: 30, height: 30, type: "frost_yeti", vx: 0.5, vy: 0, minX: 4980, maxX: 5040, facing: 1 },
      { id: "l11_e_drone8", x: 4920, y: 220, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 4840, maxX: 5000, facing: 1 },
      { id: "l11_e_drone9", x: 5180, y: 180, width: 26, height: 22, type: "flyer", vx: -1.4, vy: 0, minX: 5100, maxX: 5260, facing: -1 },
      { id: "l11_e_drone10", x: 5440, y: 240, width: 26, height: 22, type: "flyer", vx: 1.3, vy: 0, minX: 5360, maxX: 5520, facing: 1 }
    ],
    parTime: 125,
    threeStarScore: 18500
  },
  {
    id: 12,
    title: "12. Abyssal Trench: Sunken Coral Caverns",
    worldNumber: 2,
    worldName: "Abyssal Deep Sea",
    gameplayType: "gadget",
    category: "classic",
    description: "Submerge into the sun-dappled mystery of the Abyssal Deep Sea! Master continuous swimming by tapping Jump repeatedly to paddle through vertical coral canyons and deep ocean trenches, equip the protective Bubble Shield to safely bounce past venomous Sea Urchins, ride bubbling hydrothermal vents, and collect 3 ancient Sunken Pearls across 5,200 meters to reach the Sunken Coral Portal.",
    worldWidth: 5200,
    worldHeight: 980,
    theme: THEMES.deepSea,
    isUnderwater: true,
    playerStart: { x: 80, y: 720 },
    goal: { x: 5040, y: 460, width: 44, height: 60 },
    checkpoints: [
      { x: 1780, y: 460, width: 30, height: 40, activated: false },
      { x: 3480, y: 440, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: Submerged Shallows & High Coral Kelp Ascent (0 - 900m)
      { id: "l12_p_start", x: 0, y: 760, width: 280, height: 220, type: "solid" },
      { id: "l12_p_step1", x: 340, y: 700, width: 110, height: 280, type: "solid" },
      // Hydrothermal vent spring launching into open water
      { id: "l12_vent1", x: 490, y: 660, width: 70, height: 20, type: "bouncy" },
      // High Kelp Canopy (Golden Acorn #1 Chamber - reached by swimming upward!)
      { id: "l12_kelp_acorn1", x: 630, y: 220, width: 90, height: 16, type: "one-way" },
      { id: "l12_kelp_step1", x: 650, y: 480, width: 90, height: 16, type: "one-way" },
      { id: "l12_p_shelf1", x: 800, y: 620, width: 140, height: 360, type: "solid" },

      // SECTOR 2: Urchin Chasm & Coral Slalom (900 - 1750m)
      { id: "l12_shield_perch1", x: 1000, y: 540, width: 80, height: 20, type: "solid" },
      { id: "l12_crumb1", x: 1140, y: 580, width: 75, height: 18, type: "crumbling" },
      { id: "l12_p_pillar1", x: 1260, y: 500, width: 85, height: 480, type: "solid" },
      // Moving Coral Platform ferry through open swim waters
      { id: "l12_p_shuttle1", x: 1400, y: 460, width: 85, height: 20, type: "solid", speed: 2.0, distanceX: 160, startX: 1400, startY: 460, vx: 2.0, vy: 0 },
      { id: "l12_kelp_step2", x: 1640, y: 480, width: 90, height: 18, type: "one-way" },

      // SECTOR 3: Sunken Galleon "Abyssal Queen" & Sunken Hold (1750 - 2650m)
      { id: "l12_cp1_deck", x: 1760, y: 500, width: 110, height: 480, type: "solid" },
      { id: "l12_galleon_bow", x: 1910, y: 440, width: 80, height: 16, type: "one-way" },
      // Towering Crow's Nest Mast (high swim path)
      { id: "l12_galleon_mast_high", x: 1980, y: 260, width: 80, height: 16, type: "one-way" },
      { id: "l12_vent2", x: 2060, y: 660, width: 70, height: 20, type: "bouncy" },
      { id: "l12_trench_floor1", x: 2190, y: 720, width: 170, height: 260, type: "solid" },
      // Deep Flooded Cargo Hold (Deep Dive for Golden Acorn #2)
      { id: "l12_crumb_secret2", x: 2420, y: 880, width: 65, height: 18, type: "crumbling" },
      { id: "l12_vent_secret2", x: 2510, y: 890, width: 60, height: 20, type: "bouncy" },
      { id: "l12_trench_wall_right", x: 2620, y: 520, width: 90, height: 460, type: "solid" },

      // SECTOR 4: Hydrothermal Geyser Trench & Urchin Crosswinds (2650 - 3450m)
      { id: "l12_coral_arch", x: 2780, y: 460, width: 110, height: 22, type: "solid" },
      { id: "l12_vent3", x: 2950, y: 720, width: 70, height: 20, type: "bouncy" },
      { id: "l12_kelp_mine1", x: 3080, y: 420, width: 80, height: 16, type: "one-way" },
      // Vertically oscillating coral shelf
      { id: "l12_p_shuttle2", x: 3240, y: 460, width: 80, height: 20, type: "solid", speed: 1.8, distanceY: 100, startX: 3240, startY: 460, vx: 0, vy: 1.8 },
      { id: "l12_crumb2", x: 3380, y: 460, width: 65, height: 18, type: "crumbling" },

      // SECTOR 5: Bioluminescent Coral Grotto & Checkpoint 2 (3450 - 4250m)
      { id: "l12_cp2_grotto", x: 3460, y: 480, width: 110, height: 500, type: "solid" },
      { id: "l12_vent4", x: 3660, y: 680, width: 70, height: 20, type: "bouncy" },
      { id: "l12_kelp_high2", x: 3780, y: 320, width: 80, height: 16, type: "one-way" },
      { id: "l12_vent5", x: 3940, y: 640, width: 70, height: 20, type: "bouncy" },
      { id: "l12_spire_mid", x: 4080, y: 440, width: 90, height: 540, type: "solid" },

      // SECTOR 6: Sunken Atlantean Temple & Coral Bastion Portal (4250 - 5200m)
      { id: "l12_p_temple_step1", x: 4240, y: 480, width: 80, height: 20, type: "solid" },
      { id: "l12_crumb_temple", x: 4380, y: 420, width: 70, height: 18, type: "crumbling" },
      { id: "l12_temple_tier1", x: 4500, y: 500, width: 100, height: 480, type: "solid" },
      // Flooded Temple Cupola Dome (Golden Acorn #3 - swim up into the dome!)
      { id: "l12_cupola_perch", x: 4620, y: 190, width: 80, height: 16, type: "one-way" },
      { id: "l12_temple_roof", x: 4740, y: 440, width: 110, height: 540, type: "solid" },
      { id: "l12_finish_bastion", x: 4940, y: 520, width: 260, height: 460, type: "solid" }
    ],
    hazards: [
      // Deep oceanic abyss pits (bottom spike/pressure hazards)
      { id: "l12_hz_spike1", x: 1340, y: 950, width: 420, height: 30, type: "spike" },
      { id: "l12_hz_spike2", x: 2780, y: 950, width: 480, height: 30, type: "spike" },
      { id: "l12_hz_spike3", x: 3740, y: 950, width: 340, height: 30, type: "spike" },
      // Rotating coral grinding saw in the deep trench
      { id: "l12_saw_deep", x: 2320, y: 620, width: 36, height: 36, type: "saw", startX: 2320, startY: 620, distanceX: 0, distanceY: 80, speed: 2.0, vx: 0, vy: 2.0 }
    ],
    collectibles: [
      // 3 Golden Acorns (Ancient Sunken Pearls)
      { id: "l12_acorn1", x: 655, y: 170, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l12_acorn2", x: 2440, y: 820, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "l12_acorn3", x: 4645, y: 140, width: 26, height: 26, type: "acorn", value: 1500 },

      // BUBBLE SHIELD POWER-UPS (Protects Barnaby against venomous sea urchins!)
      { id: "l12_shield_start", x: 160, y: 710, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l12_shield_sector2", x: 1025, y: 490, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l12_shield_cp1", x: 1810, y: 450, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l12_shield_sector4", x: 3020, y: 370, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l12_shield_cp2", x: 3510, y: 430, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "l12_shield_temple", x: 4400, y: 370, width: 28, height: 28, type: "bubble_shield", value: 600 },

      // Speed Boost pearl for fluid propulsion
      { id: "l12_speed_pearl", x: 3590, y: 430, width: 24, height: 24, type: "powerup_speed", value: 400 },

      // Sunken Treasure Coins & Abyssal Gems along swim arcs
      { id: "l12_c1", x: 220, y: 710, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c2", x: 370, y: 650, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c3", x: 520, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_g1", x: 670, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l12_c4", x: 880, y: 570, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c5", x: 1040, y: 500, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c6", x: 1440, y: 420, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_g2", x: 1680, y: 430, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l12_c7", x: 1940, y: 380, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c8", x: 2010, y: 220, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c9", x: 2480, y: 740, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_g3", x: 2820, y: 410, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l12_c10", x: 3120, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c11", x: 3700, y: 580, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_g4", x: 3820, y: 270, width: 24, height: 24, type: "gem", value: 500 },
      { id: "l12_c12", x: 4280, y: 430, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_c13", x: 4540, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "l12_g5", x: 4800, y: 390, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      // NEW AQUATIC ENEMY: SEA URCHINS (Needle-spined hazards requiring Bubble Shield!)
      // Sector 1: Ground Urchin & High Bobbing Chimney Urchin
      { id: "l12_urchin1", x: 400, y: 666, width: 34, height: 34, type: "urchin", vx: 0.5, vy: 0, minX: 350, maxX: 440, facing: 1 },
      { id: "l12_urchin_acorn1", x: 650, y: 320, width: 34, height: 34, type: "urchin", vx: 0, vy: 0.9, minY: 270, maxY: 380, facing: -1 },

      // Sector 2: Coral Labyrinth Floating Urchins
      { id: "l12_urchin2", x: 1290, y: 466, width: 34, height: 34, type: "urchin", vx: 0.4, vy: 0, minX: 1270, maxX: 1330, facing: 1 },
      { id: "l12_urchin_float1", x: 1480, y: 380, width: 34, height: 34, type: "urchin", vx: 0, vy: 1.0, minY: 320, maxY: 430, facing: -1 },
      { id: "l12_urchin_float2", x: 1580, y: 430, width: 34, height: 34, type: "urchin", vx: 0, vy: -1.0, minY: 370, maxY: 480, facing: 1 },
      { id: "l12_patrol_sector2", x: 860, y: 592, width: 28, height: 28, type: "patroller", vx: 0.8, vy: 0, minX: 820, maxX: 920, facing: 1 },

      // Sector 3: Galleon Keel & Deep Cave Urchins
      { id: "l12_urchin3", x: 2240, y: 686, width: 34, height: 34, type: "urchin", vx: 0.6, vy: 0, minX: 2200, maxX: 2320, facing: -1 },
      { id: "l12_urchin_secret2a", x: 2360, y: 830, width: 34, height: 34, type: "urchin", vx: 0, vy: 0.8, minY: 790, maxY: 870, facing: 1 },
      { id: "l12_urchin_secret2b", x: 2470, y: 830, width: 34, height: 34, type: "urchin", vx: 0, vy: -0.8, minY: 790, maxY: 870, facing: -1 },
      { id: "l12_flyer_galleon", x: 1960, y: 370, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 1910, maxX: 2030, facing: 1 },

      // Sector 4: Trench Slalom Floating Urchins
      { id: "l12_urchin_slalom1", x: 2880, y: 390, width: 34, height: 34, type: "urchin", vx: 0, vy: 1.1, minY: 330, maxY: 460, facing: 1 },
      { id: "l12_urchin_slalom2", x: 3040, y: 440, width: 34, height: 34, type: "urchin", vx: 0, vy: -1.1, minY: 360, maxY: 490, facing: -1 },
      { id: "l12_urchin_slalom3", x: 3200, y: 380, width: 34, height: 34, type: "urchin", vx: 0, vy: 0.9, minY: 320, maxY: 440, facing: 1 },

      // Sector 5: Hydrothermal Basin Urchins & Flyers
      { id: "l12_urchin4", x: 3840, y: 380, width: 34, height: 34, type: "urchin", vx: 0, vy: 0.9, minY: 320, maxY: 430, facing: -1 },
      { id: "l12_urchin5", x: 4000, y: 330, width: 34, height: 34, type: "urchin", vx: 0, vy: -0.9, minY: 270, maxY: 380, facing: 1 },
      { id: "l12_urchin_spire", x: 4120, y: 406, width: 34, height: 34, type: "urchin", vx: 0.5, vy: 0, minX: 4090, maxX: 4160, facing: -1 },

      // Sector 6: Sunken Temple Apex & Cupola Urchins
      { id: "l12_urchin_cupola1", x: 4580, y: 180, width: 34, height: 34, type: "urchin", vx: 0, vy: 0.8, minY: 130, maxY: 230, facing: 1 },
      { id: "l12_urchin_cupola2", x: 4700, y: 180, width: 34, height: 34, type: "urchin", vx: 0, vy: -0.8, minY: 130, maxY: 230, facing: -1 },
      { id: "l12_urchin_roof", x: 4780, y: 406, width: 34, height: 34, type: "urchin", vx: 0.6, vy: 0, minX: 4750, maxX: 4830, facing: 1 }
    ],
    parTime: 110,
    threeStarScore: 16000
  },
  {
    id: 13,
    title: "13. Citadel of Shadows: The Grand Keep",
    worldNumber: 2,
    worldName: "Citadel of Shadows",
    gameplayType: "terrain",
    category: "classic",
    description: "Infiltrate the colossal Citadel of Shadows! Traverse the perilous moat drawbridges, navigate the treacherous dungeon undercroft, scale the moving chain-lifts of the Clocktower, and brave the wind-swept outer ramparts to breach the Royal Keep.",
    worldWidth: 5200,
    worldHeight: 860,
    theme: THEMES.medievalCastle,
    playerStart: { x: 80, y: 700 },
    goal: { x: 5080, y: 300, width: 44, height: 60 },
    checkpoints: [
      { x: 1380, y: 680, width: 30, height: 40, activated: false },
      { x: 2720, y: 440, width: 30, height: 40, activated: false },
      { x: 4160, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Outer Moat & Portcullis Gatehouse (x: 0 - 1400)
      { id: "w13_p_start_courtyard", x: 0, y: 740, width: 280, height: 120, type: "solid" },
      { id: "w13_p1_timber", x: 340, y: 680, width: 150, height: 18, type: "one-way" },
      { id: "w13_p2_crumb", x: 550, y: 630, width: 100, height: 18, type: "crumbling" },
      { id: "w13_p3_drawbridge", x: 710, y: 590, width: 140, height: 18, type: "one-way" },
      { id: "w13_p4_bouncy", x: 910, y: 680, width: 80, height: 26, type: "bouncy" },
      { id: "w13_p5_gatehouse_top", x: 1040, y: 480, width: 160, height: 26, type: "solid" },
      // Secret lower dungeon alcove below moat (Golden Acorn #1)
      { id: "w13_p_secret_lower", x: 520, y: 760, width: 120, height: 20, type: "solid" },
      { id: "w13_p_secret_spring", x: 670, y: 760, width: 60, height: 22, type: "bouncy" },
      // Gatehouse descent to CP1
      { id: "w13_p6_descent_beam", x: 1240, y: 580, width: 110, height: 18, type: "one-way" },
      { id: "w13_p_cp1_base", x: 1360, y: 720, width: 200, height: 140, type: "solid" },

      // SECTOR 2: The Dungeon Undercroft & Oubliette Shaft (x: 1400 - 2750)
      // Vertical moving chain-lift 1
      { id: "w13_p_lift1", x: 1620, y: 720, width: 90, height: 22, type: "solid", startX: 1620, startY: 720, distanceX: 0, distanceY: -180, speed: 1.8, vx: 0, vy: -1.8 },
      { id: "w13_p_cell_mid", x: 1770, y: 520, width: 130, height: 24, type: "solid" },
      { id: "w13_p_cell_crumb", x: 1940, y: 490, width: 90, height: 20, type: "crumbling" },
      // Horizontal moving chain-shuttle 1
      { id: "w13_p_shuttle1", x: 2070, y: 460, width: 100, height: 20, type: "solid", startX: 2070, startY: 460, distanceX: 150, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      // High rafters secret alcove (Golden Acorn #2)
      { id: "w13_p_rafter1", x: 2120, y: 260, width: 80, height: 18, type: "one-way" },
      { id: "w13_p_rafter_acorn", x: 2260, y: 210, width: 90, height: 18, type: "solid" },
      // Lower undercroft path & spring
      { id: "w13_p_lower_bed", x: 2240, y: 640, width: 180, height: 26, type: "solid" },
      { id: "w13_p_spring2", x: 2460, y: 620, width: 80, height: 26, type: "bouncy" },
      { id: "w13_p_clock_ledge", x: 2570, y: 480, width: 120, height: 22, type: "solid" },
      { id: "w13_p_cp2_base", x: 2710, y: 480, width: 160, height: 380, type: "solid" },

      // SECTOR 3: The Grand Hall & Clocktower Ascent (x: 2750 - 4180)
      { id: "w13_p_tower_beam1", x: 2920, y: 420, width: 130, height: 18, type: "one-way" },
      // Vertical moving chain-lift 2
      { id: "w13_p_lift2", x: 3100, y: 500, width: 90, height: 22, type: "solid", startX: 3100, startY: 500, distanceX: 0, distanceY: -160, speed: 2.0, vx: 0, vy: -2.0 },
      { id: "w13_p_arch_high", x: 3240, y: 300, width: 120, height: 22, type: "solid" },
      { id: "w13_p_clock_crumb1", x: 3410, y: 340, width: 85, height: 18, type: "crumbling" },
      // Horizontal moving chain-shuttle 2
      { id: "w13_p_shuttle2", x: 3540, y: 380, width: 100, height: 22, type: "solid", startX: 3540, startY: 380, distanceX: 160, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "w13_p_bridge_high", x: 3760, y: 320, width: 120, height: 18, type: "one-way" },
      { id: "w13_p_stair1", x: 3930, y: 400, width: 90, height: 20, type: "solid" },
      { id: "w13_p_stair2", x: 4050, y: 480, width: 80, height: 20, type: "crumbling" },
      { id: "w13_p_cp3_base", x: 4150, y: 560, width: 180, height: 300, type: "solid" },

      // SECTOR 4: Outer Ramparts & Royal Throne Keep (x: 4180 - 5200)
      { id: "w13_p_rampart1", x: 4360, y: 500, width: 150, height: 24, type: "solid" },
      { id: "w13_p_rampart_spring", x: 4540, y: 500, width: 70, height: 26, type: "bouncy" },
      // Secret High Turret (Golden Acorn #3)
      { id: "w13_p_turret_high", x: 4620, y: 200, width: 90, height: 18, type: "solid" },
      { id: "w13_p_parapet_crumb", x: 4660, y: 380, width: 80, height: 18, type: "crumbling" },
      { id: "w13_p_parapet_timber", x: 4780, y: 360, width: 120, height: 18, type: "one-way" },
      { id: "w13_p_goal_bridge", x: 4940, y: 360, width: 90, height: 18, type: "crumbling" },
      { id: "w13_p_goal_throne", x: 5020, y: 360, width: 180, height: 500, type: "solid" }
    ],
    hazards: [
      // Sector 1: Boiling Pitch Moat & Swinging Flail
      { id: "w13_hz_moat", x: 280, y: 810, width: 1080, height: 80, type: "lava" },
      { id: "w13_hz_flail1", x: 620, y: 480, width: 36, height: 36, type: "saw", startX: 620, startY: 480, distanceX: 0, distanceY: 90, speed: 2.0, vx: 0, vy: 2.0 },
      { id: "w13_hz_spikes1", x: 880, y: 790, width: 70, height: 20, type: "spike" },

      // Sector 2: Dungeon Undercroft Spikes & Flail
      { id: "w13_hz_spikes2", x: 1580, y: 810, width: 260, height: 20, type: "spike" },
      { id: "w13_hz_flail2", x: 2200, y: 190, width: 34, height: 34, type: "saw", startX: 2200, startY: 190, distanceX: 60, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "w13_hz_spikes3", x: 2360, y: 810, width: 200, height: 20, type: "spike" },

      // Sector 3: Grand Hall Boiling Pitch & Clocktower Flail
      { id: "w13_hz_hall_pitch", x: 2880, y: 810, width: 1200, height: 80, type: "lava" },
      { id: "w13_hz_flail3", x: 3670, y: 290, width: 38, height: 38, type: "saw", startX: 3670, startY: 290, distanceX: 0, distanceY: 100, speed: 2.4, vx: 0, vy: 2.4 },

      // Sector 4: Rampart Chasm Spikes & Executioner Blade
      { id: "w13_hz_rampart_spikes", x: 4520, y: 810, width: 380, height: 20, type: "spike" },
      { id: "w13_hz_flail4", x: 4730, y: 310, width: 36, height: 36, type: "saw", startX: 4730, startY: 310, distanceX: 0, distanceY: 80, speed: 2.2, vx: 0, vy: 2.2 }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w13_acorn_1", x: 570, y: 715, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w13_acorn_2", x: 2290, y: 165, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w13_acorn_3", x: 4650, y: 155, width: 26, height: 26, type: "acorn", value: 1500 },

      // Castle Gadgets & Health
      { id: "w13_shield", x: 1470, y: 680, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "w13_blaster", x: 2780, y: 440, width: 28, height: 28, type: "blaster", value: 600 },
      { id: "w13_ammo1", x: 2820, y: 445, width: 20, height: 20, type: "blaster_ammo", value: 200 },
      { id: "w13_ammo2", x: 3970, y: 370, width: 20, height: 20, type: "blaster_ammo", value: 200 },
      { id: "w13_heart1", x: 1280, y: 540, width: 22, height: 22, type: "heart", value: 300 },
      { id: "w13_heart2", x: 4260, y: 520, width: 22, height: 22, type: "heart", value: 300 },

      // Gold Coins & Rubies (Sectors 1 - 4)
      { id: "w13_c1", x: 400, y: 640, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c2", x: 590, y: 590, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_gem1", x: 760, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w13_c3", x: 940, y: 600, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c4", x: 1100, y: 440, width: 20, height: 20, type: "coin", value: 100 },

      { id: "w13_gem2", x: 1650, y: 660, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w13_c5", x: 1820, y: 470, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c6", x: 1980, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c7", x: 2110, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c8", x: 2320, y: 590, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_gem3", x: 2500, y: 540, width: 24, height: 24, type: "gem", value: 500 },

      { id: "w13_c9", x: 2970, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_gem4", x: 3140, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w13_c10", x: 3290, y: 260, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c11", x: 3450, y: 300, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c12", x: 3590, y: 330, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_gem5", x: 3810, y: 270, width: 24, height: 24, type: "gem", value: 500 },

      { id: "w13_c13", x: 4420, y: 450, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_gem6", x: 4570, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w13_c14", x: 4700, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_c15", x: 4830, y: 310, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w13_gem7", x: 4970, y: 310, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      // Ground enemies strictly on platforms with constrained patrol bounds:
      // 1. Skunk on outer drawbridge timber (platform y: 680, height: 26 -> y: 654)
      { id: "w13_e_skunk1", x: 390, y: 654, width: 28, height: 26, type: "skunk", vx: 0.95, vy: 0, minX: 345, maxX: 460, facing: 1 },
      // 2. Patroller atop outer gatehouse (platform y: 480, height: 26 -> y: 454)
      { id: "w13_e_patrol1", x: 1080, y: 454, width: 28, height: 26, type: "patroller", vx: 0.95, vy: 0, minX: 1045, maxX: 1170, facing: 1 },
      // 3. Anteater in dungeon prison cell (platform y: 520, height: 26 -> y: 494)
      { id: "w13_e_anteater1", x: 1810, y: 494, width: 28, height: 26, type: "anteater", vx: 0.95, vy: 0, minX: 1775, maxX: 1870, facing: 1 },
      // 4. Frog on lower undercroft floor (platform y: 640, height: 26 -> y: 614)
      { id: "w13_e_frog1", x: 2280, y: 614, width: 28, height: 26, type: "frog", vx: 0.95, vy: 0, minX: 2245, maxX: 2390, facing: 1, minY: 570, maxY: 640 },
      // 5. Hedgehog on clocktower lower beam (platform y: 420, height: 26 -> y: 394)
      { id: "w13_e_hedgehog1", x: 2960, y: 394, width: 28, height: 26, type: "hedgehog", vx: 0.95, vy: 0, minX: 2925, maxX: 3020, facing: 1 },
      // 6. Flying pigeon in clocktower chasm airspace
      { id: "w13_e_pigeon1", x: 3390, y: 260, width: 26, height: 22, type: "pigeon", vx: -1.3, vy: 0, minX: 3260, maxX: 3520, facing: -1 },
      // 7. Patroller on high clocktower bridge (platform y: 320, height: 26 -> y: 294)
      { id: "w13_e_patrol2", x: 3800, y: 294, width: 28, height: 26, type: "patroller", vx: 0.95, vy: 0, minX: 3765, maxX: 3850, facing: 1 },
      // 8. Skunk on outer rampart battlement (platform y: 500, height: 26 -> y: 474)
      { id: "w13_e_skunk2", x: 4400, y: 474, width: 28, height: 26, type: "skunk", vx: 0.95, vy: 0, minX: 4365, maxX: 4480, facing: 1 },
      // 9. Flying goose guarding high secret turret
      { id: "w13_e_goose1", x: 4580, y: 160, width: 28, height: 26, type: "goose", vx: -1.2, vy: 0, minX: 4520, maxX: 4740, facing: -1 },
      // 10. Patroller on final parapet before throne keep (platform y: 360, height: 26 -> y: 334)
      { id: "w13_e_patrol3", x: 4810, y: 334, width: 28, height: 26, type: "patroller", vx: 0.95, vy: 0, minX: 4785, maxX: 4870, facing: 1 }
    ],
    parTime: 110,
    threeStarScore: 16500
  },
  {
    id: 14,
    title: "14. Citadel of Shadows: The Belfry & Foundry",
    worldNumber: 2,
    worldName: "Citadel of Shadows",
    gameplayType: "gadget",
    category: "classic",
    description: "Plunge from the dizzying heights of the Gothic Belfry down into the roaring subterranean armory and foundry, mastering rapid descents and icy munitions!",
    worldWidth: 4900,
    worldHeight: 920,
    theme: THEMES.medievalCastle,
    playerStart: { x: 80, y: 160 },
    goal: { x: 4760, y: 480, width: 44, height: 60 },
    checkpoints: [
      { x: 1220, y: 680, width: 30, height: 40, activated: false },
      { x: 2520, y: 480, width: 30, height: 40, activated: false },
      { x: 3880, y: 560, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The High Belfry & Chime Towers (x: 0 - 1250)
      // High Spire Timber Start Platform
      { id: "w14_p_start_belfry", x: 0, y: 200, width: 220, height: 40, type: "solid" },
      // Secret Spire Apex (Golden Acorn #1)
      { id: "w14_p_spire_apex", x: 180, y: 110, width: 100, height: 18, type: "solid" },
      // Stepped Rafter Descents
      { id: "w14_p1_rafter", x: 260, y: 280, width: 140, height: 18, type: "one-way" },
      { id: "w14_p2_rafter", x: 440, y: 360, width: 120, height: 18, type: "crumbling" },
      { id: "w14_p3_timber", x: 280, y: 460, width: 130, height: 18, type: "one-way" },
      { id: "w14_p4_timber", x: 480, y: 540, width: 140, height: 18, type: "solid" },
      { id: "w14_p5_spring", x: 680, y: 620, width: 70, height: 24, type: "bouncy" },
      { id: "w14_p6_belfry_arch", x: 820, y: 480, width: 140, height: 20, type: "solid" },
      { id: "w14_p7_chime_drop", x: 1020, y: 580, width: 110, height: 18, type: "crumbling" },
      { id: "w14_p8_antechamber_step", x: 1080, y: 660, width: 90, height: 18, type: "one-way" },
      { id: "w14_p_cp1_base", x: 1180, y: 720, width: 160, height: 200, type: "solid" },

      // SECTOR 2: The Royal Armory & Crossbow Galleries (x: 1250 - 2500)
      { id: "w14_p_armory_floor", x: 1340, y: 720, width: 320, height: 200, type: "solid" },
      { id: "w14_p_armory_step1", x: 1720, y: 660, width: 140, height: 20, type: "solid" },
      { id: "w14_p_armory_grate", x: 1910, y: 600, width: 120, height: 18, type: "one-way" },
      // Secret Vault Rafters (Golden Acorn #2)
      { id: "w14_p_vault_strut", x: 1840, y: 380, width: 90, height: 18, type: "one-way" },
      { id: "w14_p_vault_rafter", x: 2080, y: 270, width: 130, height: 18, type: "solid" },
      { id: "w14_p_armory_upper", x: 2070, y: 540, width: 150, height: 20, type: "solid" },
      { id: "w14_p_portcullis_bridge", x: 2280, y: 520, width: 140, height: 18, type: "crumbling" },
      { id: "w14_p_cp2_base", x: 2480, y: 520, width: 160, height: 400, type: "solid" },

      // SECTOR 3: Chained Trampoline Chasms & The Grand Flail Gorge (x: 2500 - 3800)
      { id: "w14_p_tramp1", x: 2740, y: 620, width: 76, height: 26, type: "bouncy" },
      { id: "w14_p_chain_beam1", x: 2880, y: 460, width: 60, height: 18, type: "crumbling" },
      { id: "w14_p_tramp2", x: 3010, y: 540, width: 80, height: 26, type: "bouncy" },
      // Secret Flail Arch Ledge (Golden Acorn #3)
      { id: "w14_p_arch_secret", x: 3260, y: 220, width: 90, height: 18, type: "solid" },
      { id: "w14_p_tramp3", x: 3270, y: 580, width: 84, height: 26, type: "bouncy" },
      { id: "w14_p_chain_beam2", x: 3430, y: 460, width: 60, height: 18, type: "crumbling" },
      { id: "w14_p_tramp4", x: 3560, y: 520, width: 80, height: 26, type: "bouncy" },
      { id: "w14_p_pier", x: 3710, y: 540, width: 100, height: 22, type: "one-way" },
      { id: "w14_p_cp3_base", x: 3840, y: 600, width: 160, height: 320, type: "solid" },

      // SECTOR 4: The Great Subterranean Foundry & Molten Vats (x: 3800 - 4900)
      { id: "w14_p_foundry_walk1", x: 4050, y: 580, width: 130, height: 22, type: "solid" },
      { id: "w14_p_slag_grate1", x: 4220, y: 520, width: 100, height: 18, type: "crumbling" },
      { id: "w14_p_crane_beam", x: 4320, y: 360, width: 120, height: 20, type: "one-way" },
      { id: "w14_p_slag_grate2", x: 4480, y: 500, width: 110, height: 18, type: "crumbling" },
      { id: "w14_p_iron_anvil", x: 4620, y: 520, width: 90, height: 24, type: "solid" },
      { id: "w14_p_goal_deck", x: 4700, y: 540, width: 200, height: 380, type: "solid" }
    ],
    hazards: [
      // Sector 1: Belfry Pit Spikes & Pendulum Saws
      { id: "w14_hz_belfry_spikes", x: 220, y: 880, width: 960, height: 40, type: "spike" },
      { id: "w14_hz_bell_saw1", x: 480, y: 240, width: 38, height: 38, type: "saw", startX: 480, startY: 240, distanceX: 80, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },
      { id: "w14_hz_bell_saw2", x: 740, y: 420, width: 36, height: 36, type: "saw", startX: 740, startY: 420, distanceX: 0, distanceY: 100, speed: 2.5, vx: 0, vy: 2.5 },

      // Sector 2: Armory Halberd Spikes & Rapid Saw
      { id: "w14_hz_armory_spikes", x: 1660, y: 880, width: 400, height: 40, type: "spike" },
      { id: "w14_hz_armory_saw", x: 2180, y: 460, width: 34, height: 34, type: "saw", startX: 2180, startY: 460, distanceX: 80, distanceY: 0, speed: 2.2, vx: 2.2, vy: 0 },

      // Sector 3: Boiling Pitch Cauldron Gorge & Swinging Flails
      { id: "w14_hz_pitch_gorge", x: 2640, y: 860, width: 1200, height: 60, type: "lava" },
      { id: "w14_hz_flail1", x: 2950, y: 480, width: 38, height: 38, type: "saw", startX: 2950, startY: 480, distanceX: 0, distanceY: 100, speed: 2.6, vx: 0, vy: 2.6 },
      { id: "w14_hz_flail2", x: 3480, y: 420, width: 38, height: 38, type: "saw", startX: 3480, startY: 420, distanceX: 60, distanceY: 0, speed: 2.4, vx: 2.4, vy: 0 },

      // Sector 4: Molten Slag Vat & Crusher Piston
      { id: "w14_hz_slag_vat", x: 4180, y: 870, width: 520, height: 50, type: "lava" },
      { id: "w14_hz_piston", x: 4370, y: 440, width: 36, height: 36, type: "saw", startX: 4370, startY: 440, distanceX: 0, distanceY: 90, speed: 2.5, vx: 0, vy: 2.5 }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w14_acorn_1", x: 220, y: 80, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w14_acorn_2", x: 2130, y: 235, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w14_acorn_3", x: 3290, y: 185, width: 26, height: 26, type: "acorn", value: 1500 },

      // Gadgets & Health
      { id: "w14_snow_cannon", x: 1370, y: 680, width: 28, height: 28, type: "snow_cannon", value: 600 },
      { id: "w14_power_speed", x: 1770, y: 620, width: 26, height: 26, type: "powerup_speed", value: 400 },
      { id: "w14_heart1", x: 2090, y: 500, width: 22, height: 22, type: "heart", value: 300 },
      { id: "w14_heart2", x: 4360, y: 320, width: 22, height: 22, type: "heart", value: 300 },

      // Castle Gold Coins & Gems
      // Sector 1: Belfry Rafters
      { id: "w14_c1", x: 320, y: 240, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_c2", x: 500, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem1", x: 340, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w14_c3", x: 540, y: 500, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_c4", x: 710, y: 580, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem2", x: 880, y: 440, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w14_c5", x: 1060, y: 540, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2: Armory
      { id: "w14_c6", x: 1530, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_c7", x: 1610, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem3", x: 1880, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w14_c8", x: 1960, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_c9", x: 2340, y: 480, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Trampoline Arcs
      { id: "w14_c10", x: 2810, y: 520, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem4", x: 2900, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w14_c11", x: 3090, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem5", x: 3280, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w14_c12", x: 3450, y: 420, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem6", x: 3620, y: 430, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Foundry & Treasury Deck
      { id: "w14_c13", x: 4110, y: 540, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_c14", x: 4270, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem7", x: 4380, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w14_c15", x: 4530, y: 460, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w14_gem8", x: 4660, y: 480, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      // Sector 1: Belfry
      { id: "w14_e_pigeon1", x: 350, y: 310, width: 26, height: 22, type: "pigeon", vx: 1.2, vy: 0, minX: 250, maxX: 460, facing: 1 },
      // Patroller on w14_p4_timber (x: 480, y: 540, w: 140) -> y: 514
      { id: "w14_e_patrol1", x: 520, y: 514, width: 28, height: 26, type: "patroller", vx: 0.9, vy: 0, minX: 485, maxX: 585, facing: 1 },
      { id: "w14_e_flyer1", x: 880, y: 410, width: 26, height: 22, type: "flyer", vx: -1.3, vy: 0, minX: 820, maxX: 950, facing: -1 },

      // Sector 2: Armory
      // Anteater on w14_p_armory_floor (x: 1340, y: 720, w: 320) -> y: 694
      { id: "w14_e_anteater1", x: 1460, y: 694, width: 28, height: 26, type: "anteater", vx: -0.95, vy: 0, minX: 1360, maxX: 1620, facing: -1 },
      // Hedgehog on w14_p_armory_upper (x: 2070, y: 540, w: 150) -> y: 514
      { id: "w14_e_hedgehog1", x: 2120, y: 514, width: 28, height: 26, type: "hedgehog", vx: 0.95, vy: 0, minX: 2075, maxX: 2185, facing: 1 },
      { id: "w14_e_goose1", x: 2320, y: 420, width: 28, height: 26, type: "goose", vx: -1.1, vy: 0, minX: 2260, maxX: 2420, facing: -1 },

      // Sector 3: Flail Chasm Airspace
      { id: "w14_e_pigeon2", x: 3120, y: 390, width: 26, height: 22, type: "pigeon", vx: -1.3, vy: 0, minX: 3040, maxX: 3220, facing: -1 },
      { id: "w14_e_flyer2", x: 3640, y: 380, width: 26, height: 22, type: "flyer", vx: 1.2, vy: 0, minX: 3560, maxX: 3720, facing: 1 },

      // Sector 4: Foundry
      // Skunk on w14_p_foundry_walk1 (x: 4050, y: 580, w: 130) -> y: 554
      { id: "w14_e_skunk1", x: 4090, y: 554, width: 28, height: 26, type: "skunk", vx: 0.95, vy: 0, minX: 4055, maxX: 4145, facing: 1 },
      { id: "w14_e_goose2", x: 4430, y: 280, width: 28, height: 26, type: "goose", vx: -1.2, vy: 0, minX: 4340, maxX: 4520, facing: -1 },
      // Patroller on w14_p_iron_anvil (x: 4620, y: 520, w: 90) -> y: 494
      { id: "w14_e_patrol2", x: 4650, y: 494, width: 28, height: 26, type: "patroller", vx: 0.9, vy: 0, minX: 4625, maxX: 4675, facing: 1 }
    ],
    parTime: 105,
    threeStarScore: 16000
  },
  {
    id: 15,
    title: "15. The Clockwork Spire: Brass Cogworks",
    worldNumber: 2,
    worldName: "Clockwork Spire",
    gameplayType: "gadget",
    category: "classic",
    description: "Ascend through the roaring steam shafts, interlocking gear trains, and swinging pendulum escapements of the Great Clockwork Spire!",
    worldWidth: 5180,
    worldHeight: 900,
    theme: THEMES.clockworkCore,
    playerStart: { x: 80, y: 720 },
    goal: { x: 5040, y: 320, width: 44, height: 60 },
    checkpoints: [
      { x: 1360, y: 560, width: 30, height: 40, activated: false },
      { x: 2680, y: 460, width: 30, height: 40, activated: false },
      { x: 3960, y: 500, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Boiler Intake & Steam Geyser Shafts (x: 0 - 1380)
      { id: "w15_p_start", x: 0, y: 760, width: 260, height: 140, type: "solid" },
      // Obstacle 1: High-Pressure Steam Column 1 (Anti-Grav Tractor Beam)
      { id: "w15_p_steam1", x: 320, y: 360, width: 70, height: 400, type: "anti_grav" },
      // Secret Valve Beam (Golden Acorn #1)
      { id: "w15_p_secret1", x: 220, y: 200, width: 100, height: 18, type: "solid" },
      { id: "w15_p1_catwalk", x: 440, y: 460, width: 140, height: 20, type: "one-way" },
      // Interlocking Cog Shuttle 1 (Horizontal moving)
      { id: "w15_p2_cog_shuttle1", x: 640, y: 440, width: 100, height: 22, type: "solid", startX: 640, startY: 440, distanceX: 160, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "w15_p3_valve_bridge", x: 930, y: 520, width: 110, height: 18, type: "crumbling" },
      // Obstacle 2: High-Pressure Steam Column 2 (Anti-Grav Lift)
      { id: "w15_p_steam2", x: 1090, y: 300, width: 70, height: 360, type: "anti_grav" },
      { id: "w15_p4_arch", x: 1200, y: 420, width: 100, height: 20, type: "solid" },
      { id: "w15_p_cp1", x: 1320, y: 600, width: 150, height: 300, type: "solid" },

      // SECTOR 2: The Differential Gearbox & Piston Stamps (x: 1380 - 2700)
      // Obstacle 3: Sweeping Mobile Steam Lift (Horizontal traveling Anti-Grav beam over boiling oil)
      { id: "w15_p_steam_sweeper", x: 1560, y: 460, width: 74, height: 360, type: "anti_grav", startX: 1560, startY: 460, distanceX: 180, distanceY: 0, speed: 1.8, vx: 1.8, vy: 0 },
      { id: "w15_p5_gear_stator", x: 1840, y: 520, width: 130, height: 22, type: "solid" },
      // Stamping Piston Anvil Blocks
      { id: "w15_p6_anvil1", x: 2010, y: 540, width: 90, height: 22, type: "solid" },
      { id: "w15_p7_anvil2", x: 2150, y: 540, width: 90, height: 22, type: "solid" },
      // Secret Pendulum Chamber (Golden Acorn #2)
      { id: "w15_p_pend_secret", x: 2260, y: 230, width: 100, height: 18, type: "solid" },
      { id: "w15_p8_grate1", x: 2320, y: 560, width: 100, height: 18, type: "crumbling" },
      { id: "w15_p9_grate2", x: 2480, y: 520, width: 110, height: 18, type: "crumbling" },
      { id: "w15_p_cp2", x: 2640, y: 500, width: 160, height: 400, type: "solid" },

      // SECTOR 3: The Great Escapement & Pendulum Chasm (x: 2700 - 4000)
      { id: "w15_p10_spring1", x: 2870, y: 580, width: 76, height: 26, type: "bouncy" },
      // Synchronized Vertical Cog Lift
      { id: "w15_p11_vert_cog", x: 3040, y: 540, width: 90, height: 22, type: "solid", startX: 3040, startY: 540, distanceX: 0, distanceY: -160, speed: 2.2, vx: 0, vy: -2.2 },
      // Obstacle 4: Central Steam Column 3
      { id: "w15_p_steam3", x: 3220, y: 320, width: 70, height: 380, type: "anti_grav" },
      { id: "w15_p12_spring2", x: 3480, y: 520, width: 76, height: 26, type: "bouncy" },
      // Central Spindle Apex (Golden Acorn #3)
      { id: "w15_p_spindle_apex", x: 3600, y: 200, width: 100, height: 18, type: "solid" },
      // Synchronized Horizontal Cog Shuttle
      { id: "w15_p13_horiz_cog", x: 3660, y: 440, width: 100, height: 22, type: "solid", startX: 3660, startY: 440, distanceX: 140, distanceY: 0, speed: 2.0, vx: 2.0, vy: 0 },
      { id: "w15_p14_bridge", x: 3840, y: 480, width: 90, height: 18, type: "crumbling" },
      { id: "w15_p_cp3", x: 3930, y: 540, width: 150, height: 360, type: "solid" },

      // SECTOR 4: The Grand Chronometer & Master Tower Observatory (x: 4000 - 5200)
      { id: "w15_p15_catwalk", x: 4120, y: 500, width: 120, height: 20, type: "one-way" },
      // Obstacle 5: Master Clock Steam Lift
      { id: "w15_p_steam4", x: 4280, y: 240, width: 74, height: 380, type: "anti_grav" },
      { id: "w15_p16_catwalk", x: 4470, y: 440, width: 110, height: 18, type: "one-way" },
      { id: "w15_p17_grate", x: 4640, y: 400, width: 100, height: 18, type: "crumbling" },
      { id: "w15_p18_anvil", x: 4800, y: 380, width: 110, height: 22, type: "solid" },
      { id: "w15_p19_crumble", x: 4940, y: 380, width: 80, height: 18, type: "crumbling" },
      { id: "w15_p_goal_deck", x: 5000, y: 380, width: 180, height: 520, type: "solid" }
    ],
    hazards: [
      // Sector 1: Boiler Spikes & Cog Saw
      { id: "w15_hz_spikes1", x: 260, y: 870, width: 830, height: 30, type: "spike" },
      { id: "w15_hz_saw1", x: 840, y: 380, width: 38, height: 38, type: "saw", startX: 840, startY: 380, distanceX: 0, distanceY: 90, speed: 2.2, vx: 0, vy: 2.2 },

      // Sector 2: Boiling Machine Oil Pit & Stamping Pistons
      { id: "w15_hz_oil_pit1", x: 1470, y: 840, width: 1180, height: 60, type: "lava" },
      { id: "w15_hz_piston1", x: 2040, y: 380, width: 36, height: 36, type: "saw", startX: 2040, startY: 380, distanceX: 0, distanceY: 100, speed: 2.8, vx: 0, vy: 2.8 },
      { id: "w15_hz_piston2", x: 2180, y: 360, width: 36, height: 36, type: "saw", startX: 2180, startY: 360, distanceX: 0, distanceY: 110, speed: 3.0, vx: 0, vy: 3.0 },
      { id: "w15_hz_pend_saw", x: 2290, y: 270, width: 36, height: 36, type: "saw", startX: 2290, startY: 270, distanceX: 60, distanceY: 0, speed: 2.4, vx: 2.4, vy: 0 },

      // Sector 3: Grand Chasm Boiling Oil & Escapement Saws
      { id: "w15_hz_oil_pit2", x: 2800, y: 840, width: 1120, height: 60, type: "lava" },
      { id: "w15_hz_saw2", x: 3360, y: 390, width: 38, height: 38, type: "saw", startX: 3360, startY: 390, distanceX: 0, distanceY: 100, speed: 2.6, vx: 0, vy: 2.6 },

      // Sector 4: Master Clock Hour & Minute Hand Spindles
      { id: "w15_hz_hour_saw", x: 4430, y: 320, width: 38, height: 38, type: "saw", startX: 4430, startY: 320, distanceX: 80, distanceY: 0, speed: 2.5, vx: 2.5, vy: 0 },
      { id: "w15_hz_minute_saw", x: 4610, y: 260, width: 38, height: 38, type: "saw", startX: 4610, startY: 260, distanceX: 0, distanceY: 90, speed: 2.8, vx: 0, vy: 2.8 },
      { id: "w15_hz_final_spikes", x: 4750, y: 860, width: 250, height: 40, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w15_acorn_1", x: 255, y: 165, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w15_acorn_2", x: 2295, y: 195, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w15_acorn_3", x: 3635, y: 165, width: 26, height: 26, type: "acorn", value: 1500 },

      // Gadgets & Munitions
      { id: "w15_blaster", x: 1420, y: 560, width: 28, height: 28, type: "blaster", value: 600 },
      { id: "w15_ammo1", x: 1460, y: 565, width: 20, height: 20, type: "blaster_ammo", value: 200 },
      { id: "w15_ammo2", x: 2650, y: 465, width: 20, height: 20, type: "blaster_ammo", value: 200 },
      { id: "w15_heart1", x: 1880, y: 480, width: 22, height: 22, type: "heart", value: 300 },
      { id: "w15_heart2", x: 4160, y: 460, width: 22, height: 22, type: "heart", value: 300 },

      // Brass Coins & Polished Clockwork Gems
      // Sector 1: Steam Shaft 1 & Pipe Catwalk
      { id: "w15_c1", x: 350, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_c2", x: 350, y: 520, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem1", x: 350, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w15_c3", x: 500, y: 420, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_c4", x: 720, y: 400, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem2", x: 970, y: 480, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w15_c5", x: 1120, y: 440, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2: Sweeping Steam Lift & Piston Anvils
      { id: "w15_c6", x: 1620, y: 540, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem3", x: 1710, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w15_c7", x: 1900, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_c8", x: 2050, y: 500, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_c9", x: 2190, y: 500, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem4", x: 2360, y: 520, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w15_c10", x: 2520, y: 480, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Compression Springs & Escapement
      { id: "w15_c11", x: 2900, y: 520, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem5", x: 3080, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w15_c12", x: 3250, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem6", x: 3510, y: 420, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w15_c13", x: 3720, y: 400, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 4: Clock Face & Observatory Deck
      { id: "w15_c14", x: 4310, y: 380, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem7", x: 4310, y: 220, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w15_c15", x: 4520, y: 400, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_c16", x: 4680, y: 360, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w15_gem8", x: 4850, y: 340, width: 24, height: 24, type: "gem", value: 500 }
    ],
    enemies: [
      // Sector 1: Boiler Intake
      // Patroller on w15_p_start (x: 0, y: 760, w: 260) -> y: 734
      { id: "w15_e_patrol1", x: 120, y: 734, width: 28, height: 26, type: "patroller", vx: 0.95, vy: 0, minX: 50, maxX: 200, facing: 1 },
      { id: "w15_e_fireimp1", x: 740, y: 260, width: 26, height: 22, type: "fire_imp", vx: -1.2, vy: 0, minX: 660, maxX: 820, facing: -1 },

      // Sector 2: Differential Gearbox
      { id: "w15_e_pigeon1", x: 1720, y: 360, width: 26, height: 22, type: "pigeon", vx: 1.3, vy: 0, minX: 1640, maxX: 1800, facing: 1 },
      // Anteater on w15_p5_gear_stator (x: 1840, y: 520, w: 130) -> y: 494
      { id: "w15_e_anteater1", x: 1870, y: 494, width: 28, height: 26, type: "anteater", vx: -0.9, vy: 0, minX: 1850, maxX: 1930, facing: -1 },
      // Hedgehog on w15_p7_anvil2 (x: 2150, y: 540, w: 90) -> y: 514
      { id: "w15_e_hedgehog1", x: 2170, y: 514, width: 28, height: 26, type: "hedgehog", vx: 0.9, vy: 0, minX: 2155, maxX: 2205, facing: 1 },
      // Skunk on w15_p_cp2 (x: 2640, y: 500, w: 160) -> y: 474
      { id: "w15_e_skunk1", x: 2700, y: 474, width: 28, height: 26, type: "skunk", vx: 0.95, vy: 0, minX: 2650, maxX: 2760, facing: 1 },

      // Sector 3: Escapement Chasm
      { id: "w15_e_goose1", x: 3100, y: 280, width: 28, height: 26, type: "goose", vx: -1.2, vy: 0, minX: 3000, maxX: 3200, facing: -1 },
      { id: "w15_e_fireimp2", x: 3780, y: 300, width: 26, height: 22, type: "fire_imp", vx: 1.2, vy: 0, minX: 3700, maxX: 3880, facing: 1 },

      // Sector 4: Clock Face Observatory
      { id: "w15_e_goose2", x: 4540, y: 220, width: 28, height: 26, type: "goose", vx: -1.3, vy: 0, minX: 4450, maxX: 4650, facing: -1 },
      // Patroller on w15_p18_anvil (x: 4800, y: 380, w: 110) -> y: 354
      { id: "w15_e_patrol2", x: 4830, y: 354, width: 28, height: 26, type: "patroller", vx: 0.9, vy: 0, minX: 4810, maxX: 4870, facing: 1 }
    ],
    parTime: 110,
    threeStarScore: 17000
  },
  {
    id: 16,
    title: "16. The Clockwork Spire: Aeronaut Boiler Flight",
    worldNumber: 2,
    worldName: "Clockwork Spire",
    gameplayType: "gadget",
    category: "jetpack",
    startWithJetpack: true,
    description: "Strap on the aeronaut jetpack to navigate soaring boiler chimneys, giant rotating saw gauntlets, and high-altitude turbine flues high above the Clockwork Spire!",
    worldWidth: 5100,
    worldHeight: 900,
    theme: THEMES.clockworkCore,
    playerStart: { x: 80, y: 720 },
    goal: { x: 4960, y: 340, width: 44, height: 60 },
    checkpoints: [
      { x: 1300, y: 560, width: 30, height: 40, activated: false },
      { x: 2580, y: 440, width: 30, height: 40, activated: false },
      { x: 3860, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // Sector 1: Launch Gantry & Boiler Chimneys
      { id: "w16_p_launch", x: 0, y: 760, width: 220, height: 140, type: "solid" },
      { id: "w16_p_intake", x: 300, y: 180, width: 90, height: 20, type: "solid" },
      { id: "w16_p1_flue", x: 480, y: 640, width: 100, height: 260, type: "solid" },
      { id: "w16_p2_flue", x: 880, y: 560, width: 90, height: 340, type: "solid" },
      { id: "w16_p3_moving", x: 1060, y: 420, width: 100, height: 20, type: "solid", startX: 1060, startY: 280, distanceY: 240, speed: 1.2, vx: 0, vy: 1.2 },
      // Checkpoint 1 Deck
      { id: "w16_p_cp1", x: 1260, y: 600, width: 140, height: 300, type: "solid" },

      // Sector 2: The Furnace Ducts & Cog Rails
      { id: "w16_p4_hanging", x: 1500, y: 480, width: 90, height: 20, type: "solid" },
      { id: "w16_p5_arch_low", x: 1720, y: 540, width: 90, height: 20, type: "solid" },
      { id: "w16_p6_arch_high", x: 1800, y: 320, width: 90, height: 20, type: "solid" },
      { id: "w16_p7_refill", x: 1940, y: 440, width: 100, height: 20, type: "solid" },
      { id: "w16_p8_moving_horiz", x: 2120, y: 360, width: 90, height: 20, type: "solid", startX: 2120, startY: 360, distanceX: 240, speed: 1.2, vx: 1.2, vy: 0 },
      { id: "w16_p9_cage_top", x: 2200, y: 260, width: 90, height: 20, type: "solid" },
      // Checkpoint 2 Station
      { id: "w16_p_cp2", x: 2540, y: 480, width: 150, height: 420, type: "solid" },

      // Sector 3: High Turbine Flues & Catwalks
      { id: "w16_p10_chimney", x: 2820, y: 580, width: 90, height: 320, type: "solid" },
      { id: "w16_p11_moving_diag", x: 3040, y: 460, width: 90, height: 20, type: "solid", startX: 3040, startY: 280, distanceY: 240, speed: 1.3, vx: 0, vy: -1.3 },
      { id: "w16_p12_spindle", x: 3240, y: 360, width: 100, height: 20, type: "solid" },
      { id: "w16_p13_hanging", x: 3480, y: 460, width: 90, height: 20, type: "solid" },
      { id: "w16_p14_moving", x: 3640, y: 380, width: 90, height: 20, type: "solid", startX: 3640, startY: 380, distanceX: 160, speed: 1.1, vx: 1.1, vy: 0 },
      // Checkpoint 3 Hangar
      { id: "w16_p_cp3", x: 3820, y: 560, width: 150, height: 340, type: "solid" },

      // Sector 4: Observatory Final Approach & Rafters
      { id: "w16_p15_rafter_secret", x: 4280, y: 170, width: 90, height: 20, type: "solid" },
      { id: "w16_p16_anvil", x: 4760, y: 400, width: 100, height: 500, type: "solid" },
      { id: "w16_p_observatory", x: 4900, y: 400, width: 200, height: 500, type: "solid" }
    ],
    hazards: [
      // Boiling machine oil vats below
      { id: "w16_hz_pit1", x: 220, y: 880, width: 1040, height: 20, type: "lava" },
      { id: "w16_hz_pit2", x: 1400, y: 880, width: 1140, height: 20, type: "lava" },
      { id: "w16_hz_pit3", x: 2690, y: 880, width: 1130, height: 20, type: "lava" },
      { id: "w16_hz_pit4", x: 3970, y: 880, width: 790, height: 20, type: "lava" },

      // Aerial rotating brass saws
      { id: "w16_hz_saw1", x: 680, y: 420, width: 40, height: 40, type: "saw" },
      { id: "w16_hz_saw2", x: 1620, y: 380, width: 44, height: 44, type: "saw" },
      { id: "w16_hz_saw3", x: 2230, y: 310, width: 40, height: 40, type: "saw" },
      { id: "w16_hz_saw4", x: 3380, y: 300, width: 44, height: 44, type: "saw" },
      { id: "w16_hz_saw5", x: 4140, y: 380, width: 44, height: 44, type: "saw" },
      { id: "w16_hz_saw6", x: 4500, y: 260, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // Jetpack pickup at start gantry
      { id: "w16_jp_spawn", x: 130, y: 720, width: 24, height: 28, type: "jetpack", value: 0 },

      // 10 Jetpack Fuel Refill Canisters along flight arcs
      { id: "w16_fuel_1", x: 520, y: 590, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_2", x: 920, y: 510, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_3", x: 1540, y: 430, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_4", x: 1980, y: 390, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_5", x: 2360, y: 310, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_6", x: 2860, y: 530, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_7", x: 3280, y: 310, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_8", x: 3680, y: 330, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_9", x: 4180, y: 460, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w16_fuel_10", x: 4580, y: 360, width: 20, height: 22, type: "jetpack_fuel", value: 200 },

      // 3 Golden Acorns
      { id: "w16_acorn_1", x: 340, y: 140, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w16_acorn_2", x: 2240, y: 220, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w16_acorn_3", x: 4320, y: 130, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups
      { id: "w16_shield_1", x: 1840, y: 280, width: 24, height: 24, type: "bubble_shield", value: 0 },
      { id: "w16_heart_1", x: 1380, y: 555, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w16_heart_2", x: 3940, y: 515, width: 22, height: 22, type: "heart", value: 0 },

      // Flight path guiding coins & gems
      { id: "w16_c_1", x: 380, y: 660, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_2", x: 420, y: 630, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_3", x: 620, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_4", x: 780, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_5", x: 1080, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w16_c_6", x: 1420, y: 520, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_7", x: 1460, y: 500, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_8", x: 1680, y: 450, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_9", x: 2060, y: 380, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_10", x: 2180, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w16_c_11", x: 2720, y: 520, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_12", x: 2760, y: 500, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_13", x: 3160, y: 380, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_14", x: 3400, y: 400, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w16_c_15", x: 3760, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_16", x: 4020, y: 480, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w16_c_17", x: 4440, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w16_c_18", x: 4700, y: 360, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Ground patrollers strictly grounded
      { id: "w16_e_patrol1", x: 100, y: 734, width: 28, height: 26, type: "patroller", vx: 0.8, vy: 0, minX: 40, maxX: 170, facing: 1 },
      { id: "w16_e_anteater1", x: 1980, y: 414, width: 28, height: 26, type: "anteater", vx: 0.7, vy: 0, minX: 1945, maxX: 2025, facing: 1 },
      { id: "w16_e_hedgehog1", x: 2620, y: 454, width: 28, height: 26, type: "hedgehog", vx: -0.8, vy: 0, minX: 2560, maxX: 2670, facing: -1 },
      { id: "w16_e_patrol2", x: 4810, y: 374, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 4770, maxX: 4850, facing: -1 },

      // Aerial flyers guarding air channels
      { id: "w16_e_fireimp1", x: 740, y: 320, width: 28, height: 26, type: "fire_imp", vx: 1.2, vy: 0, minX: 620, maxX: 840, facing: 1 },
      { id: "w16_e_pigeon1", x: 1140, y: 240, width: 26, height: 22, type: "pigeon", vx: -1.3, vy: 0, minX: 1020, maxX: 1240, facing: -1 },
      { id: "w16_e_flyer1", x: 1760, y: 220, width: 28, height: 24, type: "flyer", vx: 1.4, vy: 0, minX: 1680, maxX: 1900, facing: 1 },
      { id: "w16_e_goose1", x: 2400, y: 360, width: 28, height: 26, type: "goose", vx: -1.2, vy: 0, minX: 2300, maxX: 2520, facing: -1 },
      { id: "w16_e_fireimp2", x: 3000, y: 240, width: 28, height: 26, type: "fire_imp", vx: 1.3, vy: 0, minX: 2900, maxX: 3180, facing: 1 },
      { id: "w16_e_flyer2", x: 3560, y: 280, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 3440, maxX: 3700, facing: -1 },
      { id: "w16_e_pigeon2", x: 4120, y: 220, width: 26, height: 22, type: "pigeon", vx: 1.3, vy: 0, minX: 4020, maxX: 4260, facing: 1 },
      { id: "w16_e_goose2", x: 4540, y: 240, width: 28, height: 26, type: "goose", vx: -1.2, vy: 0, minX: 4420, maxX: 4680, facing: -1 }
    ],
    parTime: 105,
    threeStarScore: 16500
  },
  {
    id: 17,
    title: "17. Prismatic Geode Sanctum: The Crystal Colonnade",
    worldNumber: 2,
    worldName: "Prismatic Geode Sanctum",
    gameplayType: "terrain",
    category: "classic",
    description: "Delve into the glittering depths of the Prismatic Geode Sanctum! Collect the new Prismatic Magnet to vacuum up vast crystal riches, jump across resonant geode drums, and dodge razor crystal shards fired by the formidable Crystal Golems.",
    worldWidth: 5300,
    worldHeight: 940,
    theme: THEMES.prismaticSanctum,
    playerStart: { x: 80, y: 760 },
    goal: { x: 5120, y: 360, width: 44, height: 60 },
    checkpoints: [
      { x: 1720, y: 560, width: 30, height: 40, activated: false },
      { x: 3460, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Geode Cavern Threshold (Descent & First Golem Sentry)
      { id: "w17_p_start", x: 0, y: 800, width: 280, height: 140, type: "solid" },
      { id: "w17_p1_step", x: 340, y: 740, width: 140, height: 200, type: "solid" },
      { id: "w17_p2_spring", x: 530, y: 730, width: 50, height: 20, type: "bouncy" },
      // High Route: Light Bridges
      { id: "w17_p3_light1", x: 610, y: 560, width: 110, height: 16, type: "one-way" },
      { id: "w17_p4_shelf", x: 750, y: 480, width: 120, height: 24, type: "solid" },
      // Low Route: Cavern Floor
      { id: "w17_p5_floor", x: 620, y: 820, width: 250, height: 120, type: "solid" },

      // SECTOR 2: The Amethyst Chasm & Magnetic Prism Chamber
      // Moving Levitation Platform across the deep fissure
      { id: "w17_p6_lift1", x: 920, y: 640, width: 90, height: 20, type: "solid", startX: 920, startY: 640, distanceX: 220, speed: 1.3, vx: 1.3, vy: 0 },
      // Central Altar perched with the PRISMATIC MAGNET POWERUP
      { id: "w17_p7_magnet_pedestal", x: 1040, y: 480, width: 90, height: 22, type: "solid" },
      // High Bouncy Geode to Golden Acorn #1
      { id: "w17_p8_spring_high", x: 1260, y: 520, width: 50, height: 20, type: "bouncy" },
      { id: "w17_p9_spire", x: 1380, y: 220, width: 90, height: 20, type: "solid" },
      // Crumbling Crystal Lattices spanning the chasm
      { id: "w17_p10_crumb1", x: 1350, y: 660, width: 70, height: 18, type: "crumbling" },
      { id: "w17_p11_crumb2", x: 1470, y: 640, width: 70, height: 18, type: "crumbling" },
      // Checkpoint 1 Deck
      { id: "w17_p_cp1", x: 1640, y: 600, width: 200, height: 340, type: "solid" },

      // SECTOR 3: The Resonant Geode Minefield & Crystal Bats
      { id: "w17_p12_golem_tier", x: 1940, y: 540, width: 260, height: 400, type: "solid" },
      { id: "w17_p13_geode_spring1", x: 2250, y: 520, width: 55, height: 20, type: "bouncy" },
      { id: "w17_p14_secret_blaster", x: 2720, y: 200, width: 90, height: 20, type: "solid" },
      // Dual Synchronized Moving Crystal Prisms
      { id: "w17_p15_moving_vert", x: 2420, y: 440, width: 90, height: 20, type: "solid", startX: 2420, startY: 280, distanceY: 240, speed: 1.4, vx: 0, vy: 1.4 },
      { id: "w17_p16_moving_horiz", x: 2580, y: 380, width: 90, height: 20, type: "solid", startX: 2580, startY: 380, distanceX: 240, speed: 1.3, vx: 1.3, vy: 0 },

      // SECTOR 4: The Great Subterranean Crystal River & Checkpoint 2
      { id: "w17_p17_river_floor", x: 2880, y: 880, width: 440, height: 60, type: "solid" },
      { id: "w17_p18_vault_shelf", x: 3040, y: 860, width: 100, height: 80, type: "solid" },
      { id: "w17_p_cp2", x: 3380, y: 560, width: 190, height: 380, type: "solid" },

      // SECTOR 5: The Crystal Golem Sentry Gauntlet
      { id: "w17_p19_tier1", x: 3680, y: 500, width: 240, height: 440, type: "solid" },
      { id: "w17_p20_light_bridge", x: 3970, y: 440, width: 110, height: 16, type: "one-way" },
      { id: "w17_p21_tier2", x: 4140, y: 400, width: 260, height: 540, type: "solid" },
      { id: "w17_p22_spire_summit", x: 4390, y: 240, width: 85, height: 20, type: "solid" },

      // SECTOR 6: The Grand Amethyst Cathedral & Goal Pedestal
      { id: "w17_p23_crumb3", x: 4500, y: 460, width: 80, height: 20, type: "crumbling" },
      { id: "w17_p24_spring_final", x: 4640, y: 480, width: 55, height: 20, type: "bouncy" },
      { id: "w17_p_finish_approach", x: 4760, y: 420, width: 140, height: 520, type: "solid" },
      { id: "w17_p_finish_altar", x: 4980, y: 420, width: 280, height: 520, type: "solid" }
    ],
    hazards: [
      // Fissure spike beds & crystal spires
      { id: "w17_hz1", x: 880, y: 914, width: 240, height: 26, type: "spike" },
      { id: "w17_hz2", x: 1940, y: 914, width: 260, height: 26, type: "spike" },
      { id: "w17_hz3", x: 3340, y: 914, width: 80, height: 26, type: "spike" },
      { id: "w17_hz4", x: 4500, y: 914, width: 180, height: 26, type: "spike" }
    ],
    collectibles: [
      // 3 Golden Acorns
      { id: "w17_acorn1", x: 1412, y: 180, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w17_acorn2", x: 3075, y: 820, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w17_acorn3", x: 4420, y: 200, width: 26, height: 26, type: "acorn", value: 1500 },

      // NEW POWERUP: PRISMATIC MAGNET (Vacuum up surrounding treasure with tractor beams!)
      { id: "w17_mag1", x: 1070, y: 440, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w17_mag2", x: 3260, y: 840, width: 28, height: 28, type: "powerup_magnet", value: 600 },

      // Defensive Bubble Shield & Secret Laser Blaster
      { id: "w17_shield1", x: 2380, y: 300, width: 28, height: 28, type: "bubble_shield", value: 600 },
      { id: "w17_blaster1", x: 2750, y: 160, width: 28, height: 28, type: "blaster", value: 800 },

      // Sector 1: Entrance Stepping Gems & Coins
      { id: "w17_c1", x: 390, y: 690, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_c2", x: 440, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_gem1", x: 790, y: 430, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w17_c3", x: 660, y: 520, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2: Wide Chasm Parabolic Coin Arc (Vacuumed by Prismatic Magnet!)
      { id: "w17_c4", x: 960, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_c5", x: 1000, y: 510, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_gem2", x: 1050, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w17_c6", x: 1140, y: 510, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_c7", x: 1190, y: 560, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_c8", x: 1370, y: 620, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_c9", x: 1490, y: 600, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Geode Minefield Gems & Coins
      { id: "w17_gem3", x: 2060, y: 440, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w17_c10", x: 2450, y: 380, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_c11", x: 2620, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_gem4", x: 2780, y: 320, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Subterranean Crystal River Treasure Hoard
      { id: "w17_c12", x: 2940, y: 840, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_gem5", x: 3000, y: 840, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w17_c13", x: 3160, y: 840, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_gem6", x: 3220, y: 840, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 5: Sentry Gauntlet Coins
      { id: "w17_c14", x: 3800, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_gem7", x: 4020, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w17_c15", x: 4260, y: 340, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 6: Cathedral Altar Finale Arc
      { id: "w17_c16", x: 4820, y: 360, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w17_gem8", x: 4920, y: 320, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w17_c17", x: 5040, y: 360, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Sentry Anteater
      { id: "w17_e_anteater1", x: 670, y: 794, width: 28, height: 26, type: "anteater", vx: -0.9, vy: 0, minX: 630, maxX: 780, facing: -1 },

      // Sector 2: Swooping Crystal Bat across the Amethyst Fissure
      { id: "w17_e_bat1", x: 1200, y: 460, width: 26, height: 22, type: "crystal_bat", vx: 1.3, vy: 0, minX: 1120, maxX: 1320, facing: 1 },

      // Sector 3: PRISMOR THE CRYSTAL GOLEM #1 (Shooting razor crystal shards!)
      { id: "w17_e_golem1", x: 2040, y: 508, width: 28, height: 32, type: "crystal_golem", vx: 0.9, vy: 0, minX: 1960, maxX: 2160, facing: 1 },
      // Airborne Crystal Bat
      { id: "w17_e_bat2", x: 2340, y: 340, width: 26, height: 22, type: "crystal_bat", vx: -1.3, vy: 0, minX: 2220, maxX: 2460, facing: -1 },

      // Sector 4: Subterranean River Hedgehog
      { id: "w17_e_hedge1", x: 3180, y: 854, width: 28, height: 26, type: "hedgehog", vx: 0.9, vy: 0, minX: 3120, maxX: 3280, facing: 1 },

      // Sector 5: PRISMOR THE CRYSTAL GOLEM #2 & #3 (Dual sentry gauntlet)
      { id: "w17_e_golem2", x: 3760, y: 468, width: 28, height: 32, type: "crystal_golem", vx: -0.9, vy: 0, minX: 3700, maxX: 3880, facing: -1 },
      { id: "w17_e_bat3", x: 4040, y: 280, width: 26, height: 22, type: "crystal_bat", vx: 1.4, vy: 0, minX: 3960, maxX: 4180, facing: 1 },
      { id: "w17_e_golem3", x: 4220, y: 368, width: 28, height: 32, type: "crystal_golem", vx: 0.95, vy: 0, minX: 4160, maxX: 4360, facing: 1 }
    ],
    parTime: 110,
    threeStarScore: 16800
  },
  {
    id: 18,
    title: "18. Prismatic Geode Sanctum: Aeronaut Geode Chasm",
    worldNumber: 2,
    worldName: "Prismatic Geode Sanctum",
    gameplayType: "gadget",
    category: "jetpack",
    startWithJetpack: true,
    description: "Take flight across the yawning crystal expanse of the Prismatic Geode Sanctum! Ride vertical anti-gravity resonance wells, collect the Prismatic Magnet in mid-air to vacuum up vast constellations of floating riches, and dogfight through swarms of Crystal Bats and Crystal Golem snipers.",
    worldWidth: 5400,
    worldHeight: 900,
    theme: THEMES.prismaticSanctum,
    playerStart: { x: 80, y: 720 },
    goal: { x: 5220, y: 360, width: 44, height: 60 },
    checkpoints: [
      { x: 1420, y: 560, width: 30, height: 40, activated: false },
      { x: 2780, y: 460, width: 30, height: 40, activated: false },
      { x: 4080, y: 500, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Crystal Launch Gantry & First Anti-Grav Resonance Well
      { id: "w18_p_launch", x: 0, y: 760, width: 220, height: 140, type: "solid" },
      // First Anti-Gravity Lift Well: Ascend effortlessly to the high cavern canopy
      { id: "w18_p_well1", x: 400, y: 220, width: 100, height: 540, type: "anti_grav" },
      { id: "w18_p1_high_shelf", x: 340, y: 180, width: 140, height: 22, type: "solid" },
      { id: "w18_p2_light1", x: 540, y: 320, width: 110, height: 16, type: "one-way" },
      { id: "w18_p3_float1", x: 720, y: 460, width: 100, height: 22, type: "solid" },
      // Moving Crystal Sentry Platform
      { id: "w18_p4_moving1", x: 920, y: 500, width: 90, height: 20, type: "solid", startX: 920, startY: 500, distanceX: 180, speed: 1.2, vx: 1.2, vy: 0 },
      // High Spire Roost with Golden Acorn #1
      { id: "w18_p5_spire1", x: 1140, y: 160, width: 90, height: 20, type: "solid" },
      // Checkpoint 1 Station Deck
      { id: "w18_p_cp1", x: 1360, y: 600, width: 180, height: 300, type: "solid" },

      // SECTOR 2: The Constellation Chasm & Mid-Air Magnet Rush
      // Floating Altar perched with PRISMATIC MAGNET POWERUP #1
      { id: "w18_p6_magnet_altar", x: 1660, y: 480, width: 100, height: 22, type: "solid" },
      // High Anti-Grav Well 2 (Lifts Barnaby over the crystal saw trap)
      { id: "w18_p_well2", x: 2160, y: 180, width: 90, height: 500, type: "anti_grav" },
      // Secret High Roost with LASER BLASTER
      { id: "w18_p7_blaster_roost", x: 2320, y: 160, width: 100, height: 20, type: "solid" },
      // Bouncy Geode Launch Drum
      { id: "w18_p8_spring1", x: 2420, y: 560, width: 55, height: 20, type: "bouncy" },
      // Secret Lower Alcove with Golden Acorn #2
      { id: "w18_p9_secret_cave", x: 2160, y: 780, width: 110, height: 24, type: "solid" },
      // Moving Crystal Sentry Platform 2
      { id: "w18_p10_moving2", x: 2520, y: 440, width: 90, height: 20, type: "solid", startX: 2520, startY: 440, distanceX: 160, speed: 1.3, vx: 1.3, vy: 0 },
      // Checkpoint 2 Island Deck
      { id: "w18_p_cp2", x: 2720, y: 500, width: 180, height: 400, type: "solid" },

      // SECTOR 3: The Crystal Golem Sentry Gauntlet & Saw Lattices
      // Elevated Golem Bastion 1
      { id: "w18_p11_golem_ped1", x: 3020, y: 380, width: 110, height: 24, type: "solid" },
      { id: "w18_p12_spindle", x: 3240, y: 260, width: 90, height: 20, type: "solid" },
      // Crumbling Crystal Stepping Slabs across the saw gauntlet
      { id: "w18_p13_crumb1", x: 3440, y: 460, width: 80, height: 18, type: "crumbling" },
      { id: "w18_p14_crumb2", x: 3560, y: 420, width: 80, height: 18, type: "crumbling" },
      // Vertical Moving Crystal Sentry Platform
      { id: "w18_p15_moving_vert", x: 3720, y: 380, width: 90, height: 20, type: "solid", startX: 3720, startY: 260, distanceY: 240, speed: 1.3, vx: 0, vy: 1.3 },
      // Altar with PRISMATIC MAGNET POWERUP #2
      { id: "w18_p16_magnet_altar2", x: 3840, y: 220, width: 90, height: 20, type: "solid" },
      // Checkpoint 3 Island Deck
      { id: "w18_p_cp3", x: 4000, y: 540, width: 180, height: 360, type: "solid" },

      // SECTOR 4: The Great Amethyst Stratosphere & High Sentry Roosts
      // Third Anti-Grav Well: Soar up to the Stratospheric Pinnacle!
      { id: "w18_p_well3", x: 4260, y: 140, width: 90, height: 600, type: "anti_grav" },
      // High Stratospheric Spire Summit with Golden Acorn #3
      { id: "w18_p17_summit", x: 4440, y: 130, width: 100, height: 20, type: "solid" },
      // Mid-Air Shield Refuel Shelf
      { id: "w18_p18_shield_shelf", x: 4320, y: 520, width: 90, height: 20, type: "solid" },
      // Crumbling Crystal Bridges to Grand Cathedral
      { id: "w18_p19_crumb3", x: 4660, y: 460, width: 80, height: 20, type: "crumbling" },
      { id: "w18_p20_crumb4", x: 4800, y: 440, width: 80, height: 20, type: "crumbling" },
      // Final Grand Altar approach & Goal Pedestal
      { id: "w18_p21_cathedral_step", x: 4960, y: 420, width: 130, height: 480, type: "solid" },
      { id: "w18_p_goal_altar", x: 5150, y: 420, width: 250, height: 480, type: "solid" }
    ],
    hazards: [
      // Deep Bottom Abyss Crystal Spike Beds
      { id: "w18_hz_spike1", x: 220, y: 884, width: 1140, height: 26, type: "spike" },
      { id: "w18_hz_spike2", x: 1540, y: 884, width: 1180, height: 26, type: "spike" },
      { id: "w18_hz_spike3", x: 2900, y: 884, width: 1100, height: 26, type: "spike" },
      { id: "w18_hz_spike4", x: 4180, y: 884, width: 780, height: 26, type: "spike" },

      // Rotating Ancient Crystal Saws
      { id: "w18_hz_saw1", x: 780, y: 380, width: 42, height: 42, type: "saw" },
      { id: "w18_hz_saw2", x: 1960, y: 320, width: 44, height: 44, type: "saw" },
      { id: "w18_hz_saw3", x: 3160, y: 320, width: 44, height: 44, type: "saw" },
      { id: "w18_hz_saw4", x: 3580, y: 260, width: 44, height: 44, type: "saw" },
      { id: "w18_hz_saw5", x: 4540, y: 320, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // Jetpack spawn at start gantry
      { id: "w18_jp_spawn", x: 130, y: 720, width: 24, height: 28, type: "jetpack", value: 0 },

      // 10 Jetpack Fuel Refill Canisters strategically spaced along flight arcs
      { id: "w18_fuel_1", x: 390, y: 140, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_2", x: 760, y: 420, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_3", x: 1440, y: 550, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_4", x: 1920, y: 360, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_5", x: 2360, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_6", x: 2800, y: 450, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_7", x: 3280, y: 210, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_8", x: 3760, y: 210, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_9", x: 4100, y: 490, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w18_fuel_10", x: 4500, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },

      // 3 Golden Acorns
      { id: "w18_acorn_1", x: 1170, y: 120, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w18_acorn_2", x: 2200, y: 740, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w18_acorn_3", x: 4475, y: 90, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Dual Prismatic Magnets, Laser Blaster & Ammo, Bubble Shield, Hearts
      { id: "w18_mag1", x: 1695, y: 440, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w18_mag2", x: 3870, y: 180, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w18_blaster1", x: 2355, y: 120, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w18_ammo1", x: 3070, y: 340, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w18_shield1", x: 4350, y: 480, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w18_heart1", x: 1480, y: 555, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w18_heart2", x: 4140, y: 495, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1: Ascent Coins & Gems
      { id: "w18_c1", x: 360, y: 640, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_c2", x: 360, y: 520, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem1", x: 450, y: 140, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w18_c3", x: 590, y: 280, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_c4", x: 740, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_c5", x: 960, y: 450, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2: The Constellation Chasm (Vast diamond array of treasure for the Prismatic Magnet!)
      { id: "w18_c6", x: 1780, y: 420, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_c7", x: 1840, y: 360, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem2", x: 1900, y: 300, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w18_c8", x: 1960, y: 260, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem3", x: 2020, y: 300, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w18_c9", x: 2080, y: 360, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_c10", x: 2140, y: 420, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem4", x: 2260, y: 520, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w18_c11", x: 2480, y: 510, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Sentry Gauntlet Flight Path Coins & Gems
      { id: "w18_c12", x: 3120, y: 340, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem5", x: 3340, y: 220, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w18_c13", x: 3500, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_c14", x: 3620, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem6", x: 3800, y: 160, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Stratospheric High Coins & Finale Arc
      { id: "w18_c15", x: 4380, y: 180, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem7", x: 4560, y: 120, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w18_c16", x: 4720, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w18_gem8", x: 4860, y: 390, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w18_c17", x: 5020, y: 370, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Swooping Crystal Bats in the lower grotto
      { id: "w18_e_bat1", x: 620, y: 360, width: 26, height: 22, type: "crystal_bat", vx: 1.3, vy: 0, minX: 540, maxX: 740, facing: 1 },
      { id: "w18_e_bat2", x: 1040, y: 280, width: 26, height: 22, type: "crystal_bat", vx: -1.3, vy: 0, minX: 960, maxX: 1160, facing: -1 },

      // Sector 2: Mid-air chasm patrol (Pigeon & Flyer dogfight)
      { id: "w18_e_flyer1", x: 1780, y: 380, width: 28, height: 24, type: "flyer", vx: 1.4, vy: 0, minX: 1700, maxX: 1920, facing: 1 },
      { id: "w18_e_bat3", x: 2040, y: 240, width: 26, height: 22, type: "crystal_bat", vx: -1.4, vy: 0, minX: 1960, maxX: 2180, facing: -1 },
      { id: "w18_e_pigeon1", x: 2460, y: 320, width: 26, height: 22, type: "pigeon", vx: 1.3, vy: 0, minX: 2380, maxX: 2560, facing: 1 },

      // Sector 3: Mounted Sentry Crystal Golems & High Bats
      { id: "w18_e_golem1", x: 3050, y: 348, width: 28, height: 32, type: "crystal_golem", vx: 0.8, vy: 0, minX: 3025, maxX: 3105, facing: 1 },
      { id: "w18_e_bat4", x: 3380, y: 220, width: 26, height: 22, type: "crystal_bat", vx: -1.4, vy: 0, minX: 3280, maxX: 3500, facing: -1 },
      { id: "w18_e_golem2", x: 3750, y: 348, width: 28, height: 32, type: "crystal_golem", vx: -0.8, vy: 0, minX: 3725, maxX: 3795, facing: -1 },

      // Sector 4: Stratospheric Bat & Grand Cathedral Sentry
      { id: "w18_e_bat5", x: 4420, y: 260, width: 26, height: 22, type: "crystal_bat", vx: 1.5, vy: 0, minX: 4320, maxX: 4560, facing: 1 },
      { id: "w18_e_golem3", x: 4990, y: 388, width: 28, height: 32, type: "crystal_golem", vx: 0.85, vy: 0, minX: 4970, maxX: 5060, facing: 1 },
      { id: "w18_e_patrol1", x: 5220, y: 394, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 5170, maxX: 5320, facing: -1 }
    ],
    parTime: 115,
    threeStarScore: 17500
  },
  {
    id: 19,
    title: "19. Prismatic Geode Sanctum: The Resonant Geode Labyrinth",
    worldNumber: 2,
    worldName: "Prismatic Geode Sanctum",
    gameplayType: "gadget",
    category: "jetpack",
    startWithJetpack: true,
    description: "Navigate an intricate multi-tiered subterranean crystal labyrinth! Ride thermal resonance lift wells through tight geode caverns, vacuum up concentric rings of floating diamonds with the Prismatic Magnet, and weave past oscillating crystal crusher gates and Crystal Golem fortifications.",
    worldWidth: 5500,
    worldHeight: 960,
    theme: THEMES.prismaticSanctum,
    playerStart: { x: 80, y: 760 },
    goal: { x: 5320, y: 380, width: 44, height: 60 },
    checkpoints: [
      { x: 1460, y: 640, width: 30, height: 40, activated: false },
      { x: 2820, y: 480, width: 30, height: 40, activated: false },
      { x: 4160, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Geode Labyrinth Entrance & Thermal Lift Wells
      { id: "w19_p_start", x: 0, y: 800, width: 240, height: 160, type: "solid" },
      // Low crystal ceiling creating an authentic enclosed cavern grotto entry
      { id: "w19_p_ceiling1", x: 140, y: 520, width: 220, height: 40, type: "solid" },
      // First Thermal Lift Well: Shoots Barnaby up into the upper grotto!
      { id: "w19_p_well1", x: 380, y: 260, width: 95, height: 520, type: "anti_grav" },
      { id: "w19_p1_upper_grotto", x: 490, y: 260, width: 140, height: 22, type: "solid" },
      // Moving Crystal Sentry Platform 1
      { id: "w19_p2_moving1", x: 660, y: 280, width: 90, height: 20, type: "solid", startX: 660, startY: 280, distanceX: 180, speed: 1.3, vx: 1.3, vy: 0 },
      // High Secret Roost with Golden Acorn #1
      { id: "w19_p3_acorn_roost", x: 890, y: 150, width: 85, height: 20, type: "solid" },
      // Stepping Crystal Light Bridge
      { id: "w19_p4_light1", x: 990, y: 380, width: 110, height: 16, type: "one-way" },
      // Bouncy Geode Launch Drum 1
      { id: "w19_p5_spring1", x: 1140, y: 520, width: 55, height: 20, type: "bouncy" },
      { id: "w19_p6_refuel1", x: 1240, y: 420, width: 90, height: 20, type: "solid" },
      // Checkpoint 1 Station Island
      { id: "w19_p_cp1", x: 1400, y: 680, width: 190, height: 280, type: "solid" },

      // SECTOR 2: The Resonant Geyser Hollow & Concentric Magnet Ring
      // Central Altar perched with PRISMATIC MAGNET POWERUP #1
      { id: "w19_p7_magnet_pedestal1", x: 1680, y: 540, width: 90, height: 22, type: "solid" },
      // Floating Core Hub in center of the concentric diamond array
      { id: "w19_p8_ring_hub", x: 2060, y: 440, width: 70, height: 20, type: "solid" },
      // Moving Crystal Sentry Platform 2
      { id: "w19_p10_moving2", x: 2240, y: 360, width: 90, height: 20, type: "solid", startX: 2240, startY: 360, distanceX: 180, speed: 1.3, vx: 1.3, vy: 0 },
      // Secret Lower Fissure Shelf with Golden Acorn #2
      { id: "w19_p9_acorn2_shelf", x: 2320, y: 840, width: 100, height: 22, type: "solid" },
      // Second Anti-Gravity Lift Well: Launches player out of the lower depths
      { id: "w19_p_well2", x: 2540, y: 220, width: 95, height: 600, type: "anti_grav" },
      { id: "w19_p11_high_perch", x: 2460, y: 180, width: 90, height: 20, type: "solid" },
      // Checkpoint 2 Station Island
      { id: "w19_p_cp2", x: 2760, y: 520, width: 180, height: 440, type: "solid" },

      // SECTOR 3: The Crystal Crusher Gates & Sentry Bastion
      // Secret High Roost with LASER BLASTER
      { id: "w19_p12_blaster_roost", x: 2980, y: 180, width: 90, height: 20, type: "solid" },
      // Oscillating Crusher Platform 1 (Moves vertically)
      { id: "w19_p13_crusher1", x: 3220, y: 360, width: 90, height: 24, type: "solid", startX: 3220, startY: 200, distanceY: 240, speed: 1.4, vx: 0, vy: 1.4 },
      // Mid Bastion 1 (Mounted Crystal Golem)
      { id: "w19_p14_bastion1", x: 3350, y: 460, width: 100, height: 30, type: "solid" },
      // Oscillating Crusher Platform 2 (Counter-moves vertically)
      { id: "w19_p15_crusher2", x: 3490, y: 440, width: 90, height: 24, type: "solid", startX: 3490, startY: 440, distanceY: -240, speed: 1.4, vx: 0, vy: -1.4 },
      // Crumbling Crystal Lattices spanning the choke point
      { id: "w19_p16_crumb1", x: 3620, y: 400, width: 80, height: 18, type: "crumbling" },
      { id: "w19_p17_crumb2", x: 3740, y: 360, width: 80, height: 18, type: "crumbling" },
      // Mid Bastion 2 (Mounted Crystal Golem 2)
      { id: "w19_p18_bastion2", x: 3850, y: 460, width: 100, height: 30, type: "solid" },
      // Altar perched with PRISMATIC MAGNET POWERUP #2
      { id: "w19_p19_magnet_pedestal2", x: 3980, y: 280, width: 90, height: 20, type: "solid" },
      // Checkpoint 3 Station Island
      { id: "w19_p_cp3", x: 4100, y: 560, width: 180, height: 400, type: "solid" },

      // SECTOR 4: The Stratospheric Geyser Apex
      // Third Thermal Lift Well: Soar up to the Stratospheric Apex!
      { id: "w19_p_well3", x: 4320, y: 120, width: 100, height: 660, type: "anti_grav" },
      // Stratospheric Summit with Golden Acorn #3
      { id: "w19_p20_summit", x: 4500, y: 110, width: 100, height: 20, type: "solid" },
      // Mid-Air Bubble Shield Shelf
      { id: "w19_p21_shield_shelf", x: 4380, y: 500, width: 90, height: 20, type: "solid" },
      // Bouncy Geode Launch Drum 2
      { id: "w19_p22_spring2", x: 4560, y: 540, width: 55, height: 20, type: "bouncy" },
      // Crumbling Crystal Stepping Stones over the final abyss
      { id: "w19_p23_crumb3", x: 4720, y: 460, width: 80, height: 20, type: "crumbling" },
      { id: "w19_p24_crumb4", x: 4860, y: 440, width: 80, height: 20, type: "crumbling" },

      // SECTOR 5: The Grand Crystal Portal Sanctum
      { id: "w19_p25_cathedral_step", x: 5020, y: 420, width: 140, height: 540, type: "solid" },
      { id: "w19_p_goal_altar", x: 5240, y: 420, width: 240, height: 540, type: "solid" }
    ],
    hazards: [
      // Deep Bottom Abyss Crystal Spike Beds
      { id: "w19_hz_spike1", x: 240, y: 944, width: 1120, height: 26, type: "spike" },
      { id: "w19_hz_spike2", x: 1590, y: 944, width: 1170, height: 26, type: "spike" },
      { id: "w19_hz_spike3", x: 2940, y: 944, width: 1160, height: 26, type: "spike" },
      { id: "w19_hz_spike4", x: 4280, y: 944, width: 740, height: 26, type: "spike" },

      // Overhead Ceiling Spikes in tight passages
      { id: "w19_hz_spike_ceil1", x: 800, y: 40, width: 240, height: 26, type: "spike" },
      { id: "w19_hz_spike_ceil2", x: 3100, y: 40, width: 340, height: 26, type: "spike" },

      // Rotating Ancient Crystal Saws
      { id: "w19_hz_saw1", x: 790, y: 340, width: 42, height: 42, type: "saw" },
      { id: "w19_hz_saw2", x: 2075, y: 380, width: 44, height: 44, type: "saw" },
      { id: "w19_hz_saw3", x: 3370, y: 280, width: 44, height: 44, type: "saw" },
      { id: "w19_hz_saw4", x: 3740, y: 240, width: 44, height: 44, type: "saw" },
      { id: "w19_hz_saw5", x: 4640, y: 340, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // Jetpack spawn at start gantry
      { id: "w19_jp_spawn", x: 130, y: 760, width: 24, height: 28, type: "jetpack", value: 0 },

      // 10 Jetpack Fuel Refill Canisters strategically spaced along labyrinth routes
      { id: "w19_fuel_1", x: 530, y: 220, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_2", x: 1030, y: 340, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_3", x: 1480, y: 630, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_4", x: 1940, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_5", x: 2480, y: 140, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_6", x: 2840, y: 470, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_7", x: 3380, y: 410, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_8", x: 3880, y: 410, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_9", x: 4200, y: 510, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w19_fuel_10", x: 4600, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },

      // 3 Golden Acorns
      { id: "w19_acorn_1", x: 920, y: 110, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w19_acorn_2", x: 2360, y: 800, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w19_acorn_3", x: 4535, y: 70, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Dual Prismatic Magnets, Laser Blaster & Ammo, Bubble Shield, Hearts
      { id: "w19_mag1", x: 1715, y: 500, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w19_mag2", x: 4015, y: 240, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w19_blaster1", x: 3015, y: 140, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w19_ammo1", x: 3480, y: 180, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w19_shield1", x: 4415, y: 460, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w19_heart1", x: 1520, y: 635, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w19_heart2", x: 4240, y: 515, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1: Grotto Coins & Ascent Gems
      { id: "w19_c1", x: 240, y: 720, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_c2", x: 340, y: 680, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem1", x: 420, y: 200, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c3", x: 570, y: 220, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_c4", x: 740, y: 240, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem2", x: 920, y: 240, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c5", x: 1040, y: 480, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 2: The Concentric Geode Ring (Concentric diamond pattern around the hub)
      { id: "w19_c6", x: 1840, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem3", x: 1950, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c7", x: 2095, y: 280, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem4", x: 2240, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c8", x: 2350, y: 440, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem5", x: 2240, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c9", x: 2095, y: 600, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem6", x: 1950, y: 540, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c10", x: 2095, y: 440, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Sentry Gauntlet Precision Path Coins & Gems
      { id: "w19_c11", x: 3120, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_c12", x: 3340, y: 240, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem7", x: 3550, y: 360, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c13", x: 3700, y: 300, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem8", x: 3920, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Stratospheric High Coins & Finale Arc
      { id: "w19_c14", x: 4440, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem9", x: 4620, y: 110, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c15", x: 4780, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w19_gem10", x: 4920, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w19_c16", x: 5120, y: 360, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Crystal Bats in the upper grotto
      { id: "w19_e_bat1", x: 580, y: 220, width: 26, height: 22, type: "crystal_bat", vx: 1.3, vy: 0, minX: 500, maxX: 700, facing: 1 },
      { id: "w19_e_bat2", x: 800, y: 240, width: 26, height: 22, type: "crystal_bat", vx: -1.3, vy: 0, minX: 720, maxX: 920, facing: -1 },

      // Sector 2: Sentry Golem guarding lower fissure acorn + airborne flyer & bat
      { id: "w19_e_golem1", x: 2280, y: 808, width: 28, height: 32, type: "crystal_golem", vx: 0.8, vy: 0, minX: 2250, maxX: 2330, facing: 1 },
      { id: "w19_e_bat3", x: 1980, y: 480, width: 26, height: 22, type: "crystal_bat", vx: 1.4, vy: 0, minX: 1880, maxX: 2120, facing: 1 },
      { id: "w19_e_flyer1", x: 2420, y: 300, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 2340, maxX: 2540, facing: -1 },

      // Sector 3: Crusher Gauntlet Sentry Golems #2 & #3 + Bat
      { id: "w19_e_golem2", x: 3380, y: 428, width: 28, height: 32, type: "crystal_golem", vx: 0.8, vy: 0, minX: 3360, maxX: 3430, facing: 1 },
      { id: "w19_e_bat4", x: 3660, y: 320, width: 26, height: 22, type: "crystal_bat", vx: -1.4, vy: 0, minX: 3580, maxX: 3780, facing: -1 },
      { id: "w19_e_golem3", x: 3880, y: 428, width: 28, height: 32, type: "crystal_golem", vx: -0.8, vy: 0, minX: 3860, maxX: 3930, facing: -1 },

      // Sector 4 & 5: Stratospheric Bat & Grand Cathedral Sentry Golem #4 + Patroller
      { id: "w19_e_bat5", x: 4460, y: 220, width: 26, height: 22, type: "crystal_bat", vx: 1.5, vy: 0, minX: 4360, maxX: 4600, facing: 1 },
      { id: "w19_e_golem4", x: 5060, y: 388, width: 28, height: 32, type: "crystal_golem", vx: 0.85, vy: 0, minX: 5030, maxX: 5130, facing: 1 },
      { id: "w19_e_patrol1", x: 5300, y: 394, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 5250, maxX: 5400, facing: -1 }
    ],
    parTime: 120,
    threeStarScore: 18000
  },
  {
    id: 20,
    title: "20. Prismatic Geode Sanctum: The Prism Core Climax",
    worldNumber: 2,
    worldName: "Prismatic Geode Sanctum",
    gameplayType: "gadget",
    category: "jetpack",
    startWithJetpack: true,
    description: "The grand climax of the Prismatic Geode Sanctum! Conquer the perilous Prism Core featuring rhythmic phase-shift disappearing crystal floors, soaring anti-gravity resonance shafts, rotating crystal saw hazard grids, and heavy Crystal Golem bastions.",
    worldWidth: 5600,
    worldHeight: 960,
    theme: THEMES.prismaticSanctum,
    playerStart: { x: 80, y: 760 },
    goal: { x: 5420, y: 380, width: 44, height: 60 },
    checkpoints: [
      { x: 1460, y: 640, width: 30, height: 40, activated: false },
      { x: 2840, y: 500, width: 30, height: 40, activated: false },
      { x: 4220, y: 520, width: 30, height: 40, activated: false }
    ],
    platforms: [
      // SECTOR 1: The Phasing Grotto & Synchronized Stepping Stones
      { id: "w20_p_start", x: 0, y: 800, width: 240, height: 160, type: "solid" },
      { id: "w20_p_ceiling1", x: 140, y: 520, width: 220, height: 40, type: "solid" },

      // NEW MECHANIC: Rhythmic Phase-Shift Disappearing Crystal Floors (Group A vs Group B)
      { id: "w20_p_phase_a1", x: 320, y: 720, width: 90, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w20_p_phase_b1", x: 460, y: 640, width: 90, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w20_p_phase_a2", x: 600, y: 560, width: 90, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },

      // First Anti-Gravity Lift Well: Soar up to the High Tower
      { id: "w20_p_well1", x: 740, y: 220, width: 95, height: 560, type: "anti_grav" },
      { id: "w20_p_tower_top", x: 680, y: 180, width: 150, height: 22, type: "solid" },

      // Secret Phase Bridge to Golden Acorn #1
      { id: "w20_p_phase_b2", x: 890, y: 190, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w20_p_acorn1_perch", x: 1020, y: 150, width: 85, height: 20, type: "solid" },
      { id: "w20_p_light1", x: 1140, y: 340, width: 110, height: 16, type: "one-way" },
      { id: "w20_p_spring1", x: 1280, y: 480, width: 55, height: 20, type: "bouncy" },
      // Checkpoint 1 Station Deck
      { id: "w20_p_cp1", x: 1400, y: 680, width: 190, height: 280, type: "solid" },

      // SECTOR 2: The Core Crucible & Phasing Magnet Ring
      // Floating Altar with PRISMATIC MAGNET POWERUP #1
      { id: "w20_p_magnet_altar1", x: 1680, y: 540, width: 90, height: 22, type: "solid" },

      // Phasing Diamond Ring (Blinking platforms surrounding central rotating saw & treasure)
      { id: "w20_p_phase_a3", x: 1840, y: 440, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w20_p_phase_b3", x: 2040, y: 320, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w20_p_phase_a4", x: 2240, y: 440, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w20_p_phase_b4", x: 2040, y: 560, width: 80, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },

      // Moving Crystal Sentry Platform
      { id: "w20_p_moving1", x: 2360, y: 460, width: 90, height: 20, type: "solid", startX: 2360, startY: 460, distanceX: 160, speed: 1.3, vx: 1.3, vy: 0 },
      // Lower Fissure Alcove with Golden Acorn #2
      { id: "w20_p_acorn2_perch", x: 2280, y: 840, width: 100, height: 24, type: "solid" },
      // Second Anti-Gravity Lift Well: Launches player out of the lower depths
      { id: "w20_p_well2", x: 2560, y: 220, width: 95, height: 600, type: "anti_grav" },
      // Checkpoint 2 Station Island
      { id: "w20_p_cp2", x: 2780, y: 540, width: 180, height: 420, type: "solid" },

      // SECTOR 3: Fortress of the Prism Golems & Alternating Phase Gauntlet
      // Secret High Roost with LASER BLASTER
      { id: "w20_p_blaster_roost", x: 3000, y: 180, width: 90, height: 20, type: "solid" },
      // Elevated Golem Bastion 1
      { id: "w20_p_bastion1", x: 3260, y: 460, width: 110, height: 30, type: "solid" },

      // 3 Alternating Phase Slabs over the saw-lined chasm
      { id: "w20_p_phase_a5", x: 3420, y: 420, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },
      { id: "w20_p_phase_b5", x: 3560, y: 380, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w20_p_phase_a6", x: 3700, y: 420, width: 85, height: 18, type: "phase", phasePeriod: 2.6, phaseOffset: 0, phaseActiveDuration: 1.4 },

      // Elevated Golem Bastion 2
      { id: "w20_p_bastion2", x: 3840, y: 460, width: 110, height: 30, type: "solid" },
      // Altar with PRISMATIC MAGNET POWERUP #2
      { id: "w20_p_magnet_altar2", x: 4020, y: 260, width: 90, height: 20, type: "solid" },
      // Checkpoint 3 Station Island
      { id: "w20_p_cp3", x: 4160, y: 560, width: 180, height: 400, type: "solid" },

      // SECTOR 4: The Stratospheric Geode Apex & Phase Spire
      // Third Thermal Lift Well: Soar up to the Stratospheric Apex!
      { id: "w20_p_well3", x: 4340, y: 120, width: 100, height: 680, type: "anti_grav" },
      // High Stratospheric Phase Spire with Golden Acorn #3
      { id: "w20_p_phase_b6", x: 4500, y: 120, width: 85, height: 20, type: "phase", phasePeriod: 2.6, phaseOffset: 1.3, phaseActiveDuration: 1.4 },
      { id: "w20_p_acorn3_perch", x: 4620, y: 110, width: 85, height: 20, type: "solid" },
      // Mid-Air Bubble Shield Shelf
      { id: "w20_p_shield_shelf", x: 4420, y: 500, width: 90, height: 20, type: "solid" },
      // Bouncy Geode Launch Drum 2
      { id: "w20_p_spring2", x: 4620, y: 540, width: 55, height: 20, type: "bouncy" },
      // Crumbling Crystal Stepping Stones over the final abyss
      { id: "w20_p_crumb1", x: 4760, y: 460, width: 80, height: 20, type: "crumbling" },
      { id: "w20_p_crumb2", x: 4900, y: 440, width: 80, height: 20, type: "crumbling" },

      // SECTOR 5: Grand Portal Climax
      { id: "w20_p_cathedral_step", x: 5080, y: 420, width: 140, height: 540, type: "solid" },
      { id: "w20_p_goal_altar", x: 5340, y: 420, width: 260, height: 540, type: "solid" }
    ],
    hazards: [
      // Deep Bottom Abyss Crystal Spike Beds
      { id: "w20_hz_spike1", x: 240, y: 944, width: 1120, height: 26, type: "spike" },
      { id: "w20_hz_spike2", x: 1590, y: 944, width: 1170, height: 26, type: "spike" },
      { id: "w20_hz_spike3", x: 2940, y: 944, width: 1160, height: 26, type: "spike" },
      { id: "w20_hz_spike4", x: 4280, y: 944, width: 780, height: 26, type: "spike" },

      // Overhead Ceiling Spikes in tight passages
      { id: "w20_hz_spike_ceil1", x: 800, y: 40, width: 240, height: 26, type: "spike" },
      { id: "w20_hz_spike_ceil2", x: 3100, y: 40, width: 340, height: 26, type: "spike" },

      // Rotating Ancient Crystal Saws
      { id: "w20_hz_saw1", x: 530, y: 480, width: 42, height: 42, type: "saw" },
      { id: "w20_hz_saw2", x: 2040, y: 440, width: 46, height: 46, type: "saw" },
      { id: "w20_hz_saw3", x: 3500, y: 320, width: 44, height: 44, type: "saw" },
      { id: "w20_hz_saw4", x: 3780, y: 280, width: 44, height: 44, type: "saw" },
      { id: "w20_hz_saw5", x: 4700, y: 360, width: 44, height: 44, type: "saw" }
    ],
    collectibles: [
      // Jetpack spawn at start gantry
      { id: "w20_jp_spawn", x: 130, y: 760, width: 24, height: 28, type: "jetpack", value: 0 },

      // 10 Jetpack Fuel Refill Canisters strategically spaced along labyrinth routes
      { id: "w20_fuel_1", x: 530, y: 220, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_2", x: 1050, y: 340, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_3", x: 1480, y: 630, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_4", x: 1940, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_5", x: 2480, y: 140, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_6", x: 2860, y: 490, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_7", x: 3400, y: 410, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_8", x: 3900, y: 410, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_9", x: 4240, y: 510, width: 20, height: 22, type: "jetpack_fuel", value: 200 },
      { id: "w20_fuel_10", x: 4620, y: 380, width: 20, height: 22, type: "jetpack_fuel", value: 200 },

      // 3 Golden Acorns
      { id: "w20_acorn_1", x: 1050, y: 110, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w20_acorn_2", x: 2320, y: 800, width: 26, height: 26, type: "acorn", value: 1500 },
      { id: "w20_acorn_3", x: 4650, y: 70, width: 26, height: 26, type: "acorn", value: 1500 },

      // Power-ups: Dual Prismatic Magnets, Laser Blaster & Ammo, Bubble Shield, Hearts
      { id: "w20_mag1", x: 1715, y: 500, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w20_mag2", x: 4055, y: 220, width: 28, height: 28, type: "powerup_magnet", value: 600 },
      { id: "w20_blaster1", x: 3035, y: 140, width: 28, height: 28, type: "blaster", value: 800 },
      { id: "w20_ammo1", x: 3500, y: 180, width: 22, height: 22, type: "blaster_ammo", value: 300 },
      { id: "w20_shield1", x: 4455, y: 460, width: 24, height: 24, type: "bubble_shield", value: 500 },
      { id: "w20_heart1", x: 1520, y: 635, width: 22, height: 22, type: "heart", value: 0 },
      { id: "w20_heart2", x: 4280, y: 515, width: 22, height: 22, type: "heart", value: 0 },

      // Sector 1: Ascent Coins & Gems
      { id: "w20_c1", x: 340, y: 670, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_c2", x: 480, y: 590, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem1", x: 780, y: 160, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c3", x: 920, y: 140, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_c4", x: 1180, y: 300, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem2", x: 1300, y: 430, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 2: The Core Crucible Phasing Diamond Array (Vast magnetic pull zone)
      { id: "w20_c5", x: 1860, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem3", x: 1960, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c6", x: 2060, y: 270, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem4", x: 2160, y: 340, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c7", x: 2260, y: 390, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem5", x: 2160, y: 520, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c8", x: 2060, y: 610, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem6", x: 1960, y: 520, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c9", x: 2440, y: 410, width: 20, height: 20, type: "coin", value: 100 },

      // Sector 3: Sentry Gauntlet Precision Path Coins & Gems
      { id: "w20_c10", x: 3140, y: 320, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_c11", x: 3440, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem7", x: 3580, y: 330, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c12", x: 3720, y: 370, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem8", x: 3960, y: 220, width: 24, height: 24, type: "gem", value: 500 },

      // Sector 4: Stratospheric High Coins & Finale Arc
      { id: "w20_c13", x: 4520, y: 160, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem9", x: 4680, y: 110, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c14", x: 4820, y: 410, width: 20, height: 20, type: "coin", value: 100 },
      { id: "w20_gem10", x: 4960, y: 380, width: 24, height: 24, type: "gem", value: 500 },
      { id: "w20_c15", x: 5180, y: 360, width: 20, height: 20, type: "coin", value: 100 }
    ],
    enemies: [
      // Sector 1: Crystal Bats in the lower grotto
      { id: "w20_e_bat1", x: 540, y: 460, width: 26, height: 22, type: "crystal_bat", vx: 1.3, vy: 0, minX: 460, maxX: 660, facing: 1 },
      { id: "w20_e_bat2", x: 960, y: 260, width: 26, height: 22, type: "crystal_bat", vx: -1.3, vy: 0, minX: 880, maxX: 1080, facing: -1 },

      // Sector 2: Sentry Golem guarding lower fissure acorn + flyer & bat
      { id: "w20_e_golem1", x: 2240, y: 808, width: 28, height: 32, type: "crystal_golem", vx: 0.8, vy: 0, minX: 2210, maxX: 2290, facing: 1 },
      { id: "w20_e_bat3", x: 1980, y: 480, width: 26, height: 22, type: "crystal_bat", vx: 1.4, vy: 0, minX: 1880, maxX: 2120, facing: 1 },
      { id: "w20_e_flyer1", x: 2420, y: 300, width: 28, height: 24, type: "flyer", vx: -1.4, vy: 0, minX: 2340, maxX: 2540, facing: -1 },

      // Sector 3: Sentry Golems #2 & #3 guarding alternating phase bridges
      { id: "w20_e_golem2", x: 3290, y: 428, width: 28, height: 32, type: "crystal_golem", vx: 0.8, vy: 0, minX: 3270, maxX: 3340, facing: 1 },
      { id: "w20_e_bat4", x: 3660, y: 320, width: 26, height: 22, type: "crystal_bat", vx: -1.4, vy: 0, minX: 3580, maxX: 3780, facing: -1 },
      { id: "w20_e_golem3", x: 3870, y: 428, width: 28, height: 32, type: "crystal_golem", vx: -0.8, vy: 0, minX: 3850, maxX: 3920, facing: -1 },

      // Sector 4 & 5: Stratospheric Bat & Grand Cathedral Sentry Golem #4 + Patroller
      { id: "w20_e_bat5", x: 4460, y: 220, width: 26, height: 22, type: "crystal_bat", vx: 1.5, vy: 0, minX: 4360, maxX: 4600, facing: 1 },
      { id: "w20_e_golem4", x: 5120, y: 388, width: 28, height: 32, type: "crystal_golem", vx: 0.85, vy: 0, minX: 5090, maxX: 5190, facing: 1 },
      { id: "w20_e_patrol1", x: 5380, y: 394, width: 28, height: 26, type: "patroller", vx: -0.8, vy: 0, minX: 5330, maxX: 5480, facing: -1 }
    ],
    parTime: 125,
    threeStarScore: 18800
  }
];
