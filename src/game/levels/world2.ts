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
    title: "14. Crystal Caverns: Chasm Exploration",
    worldNumber: 2,
    worldName: "Crystal Caverns",
    gameplayType: "terrain",
    category: "classic",
    description: "Explore the vertical elevations, moving platforms, and hidden secrets of Crystal Caverns.",
    worldWidth: 4100,
    worldHeight: 600,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":440},
    goal: {"x":3960,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1435,"y":470,"width":30,"height":40,"activated":false},{"x":2788,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w2_l4_p_start","x":0,"y":500,"width":320,"height":100,"type":"solid"},{"id":"w2_l4_p1","x":380,"y":426,"width":249,"height":14,"type":"one-way"},{"id":"w2_l4_p2","x":764,"y":490,"width":207,"height":26,"type":"bouncy"},{"id":"w2_l4_p3","x":1108,"y":415,"width":151,"height":26,"type":"crumbling"},{"id":"w2_l4_p4","x":1373,"y":315,"width":186,"height":26,"type":"solid"},{"id":"w2_l4_p5","x":1691,"y":415,"width":246,"height":14,"type":"one-way"},{"id":"w2_l4_p6","x":2075,"y":490,"width":220,"height":26,"type":"solid","speed":1.5599999999999998,"distanceX":140,"startX":2075,"startY":490,"vx":1.5599999999999998},{"id":"w2_l4_p7","x":2413,"y":404,"width":156,"height":26,"type":"bouncy"},{"id":"w2_l4_p8","x":2698,"y":304,"width":173,"height":26,"type":"solid"},{"id":"w2_l4_p9","x":3010,"y":404,"width":240,"height":14,"type":"one-way"},{"id":"w2_l4_p10","x":3372,"y":490,"width":232,"height":26,"type":"solid"},{"id":"w2_l4_finish_base","x":3720,"y":480,"width":380,"height":120,"type":"solid"},{"id":"w2_l4_secret_p1","x":1107,"y":160,"width":90,"height":20,"type":"solid"},{"id":"w2_l4_secret_p2","x":2296,"y":470,"width":70,"height":20,"type":"crumbling"},{"id":"w2_l4_secret_p3","x":3820,"y":220,"width":100,"height":20,"type":"solid"}],
    hazards: [{"id":"w2_l4_hz3","x":1145,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l4_hz9","x":3070,"y":574,"width":80,"height":26,"type":"spike"}],
    collectibles: [{"id":"w2_l4_acorn_1","x":1139,"y":130,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l4_acorn_2","x":2318,"y":440,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l4_acorn_3","x":3857,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l4_c_1","x":560,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l4_c_2","x":860,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l4_c_4","x":1460,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l4_c_5","x":1760,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l4_c_6","x":2060,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l4_c_7","x":2360,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l4_c_8","x":2660,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l4_c_9","x":2960,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l4_c_10","x":3260,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l4_c_11","x":3560,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w2_l4_e_1","x":491,"y":400,"width":28,"height":26,"type":"goose","vx":0.97,"vy":0,"minX":386,"maxX":623,"facing":1},{"id":"w2_l4_e_2","x":1170,"y":389,"width":28,"height":26,"type":"patroller","vx":-0.97,"vy":0,"minX":1114,"maxX":1253,"facing":-1},{"id":"w2_l4_e_3","x":1452,"y":289,"width":28,"height":26,"type":"slime","vx":0.97,"vy":0,"minX":1379,"maxX":1553,"facing":1},{"id":"w2_l4_e_4","x":1800,"y":325,"width":26,"height":22,"type":"flyer","vx":-1.3599999999999999,"vy":0,"minX":1641,"maxX":1987,"facing":-1},{"id":"w2_l4_e_5","x":2171,"y":464,"width":28,"height":26,"type":"anteater","vx":0.97,"vy":0,"minX":2081,"maxX":2289,"facing":1},{"id":"w2_l4_e_6","x":2771,"y":278,"width":28,"height":26,"type":"beaver","vx":-0.97,"vy":0,"minX":2704,"maxX":2865,"facing":-1}],
    parTime: 70,
    threeStarScore: 7400
  },
  {
    id: 15,
    title: "15. Crystal Caverns: Blaster Siege",
    worldNumber: 2,
    worldName: "Crystal Caverns",
    gameplayType: "gadget",
    category: "classic",
    description: "An action-oriented challenge wielding the Plasma Blaster to navigate hazardous passages in Crystal Caverns.",
    worldWidth: 4260,
    worldHeight: 600,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":440},
    goal: {"x":4120,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1491,"y":470,"width":30,"height":40,"activated":false},{"x":2897,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w2_l5_p_start","x":0,"y":500,"width":320,"height":100,"type":"solid"},{"id":"w2_l5_p1","x":380,"y":426,"width":249,"height":14,"type":"one-way"},{"id":"w2_l5_p2","x":764,"y":490,"width":207,"height":26,"type":"bouncy"},{"id":"w2_l5_p3","x":1108,"y":415,"width":151,"height":26,"type":"crumbling"},{"id":"w2_l5_p4","x":1373,"y":315,"width":186,"height":26,"type":"solid"},{"id":"w2_l5_p5","x":1691,"y":415,"width":246,"height":14,"type":"one-way"},{"id":"w2_l5_p6","x":2075,"y":490,"width":220,"height":26,"type":"solid","speed":1.5599999999999998,"distanceX":140,"startX":2075,"startY":490,"vx":1.5599999999999998},{"id":"w2_l5_p7","x":2413,"y":404,"width":156,"height":26,"type":"bouncy"},{"id":"w2_l5_p8","x":2698,"y":304,"width":173,"height":26,"type":"solid"},{"id":"w2_l5_p9","x":3010,"y":404,"width":240,"height":14,"type":"one-way"},{"id":"w2_l5_p10","x":3372,"y":490,"width":232,"height":26,"type":"solid"},{"id":"w2_l5_p11","x":3730,"y":392,"width":164,"height":26,"type":"solid"},{"id":"w2_l5_finish_base","x":3880,"y":480,"width":380,"height":120,"type":"solid"},{"id":"w2_l5_secret_p1","x":1150,"y":160,"width":90,"height":20,"type":"solid"},{"id":"w2_l5_secret_p2","x":2386,"y":470,"width":70,"height":20,"type":"crumbling"},{"id":"w2_l5_secret_p3","x":3980,"y":220,"width":100,"height":20,"type":"solid"}],
    hazards: [{"id":"w2_l5_hz3","x":1145,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l5_hz9","x":3070,"y":574,"width":80,"height":26,"type":"spike"}],
    collectibles: [{"id":"w2_l5_acorn_1","x":1182,"y":130,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l5_acorn_2","x":2408,"y":440,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l5_acorn_3","x":4017,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l5_gadget_pickup","x":240,"y":440,"width":28,"height":28,"type":"blaster","value":600},{"id":"w2_l5_gadget_ammo","x":2130,"y":320,"width":24,"height":24,"type":"blaster_ammo","value":200},{"id":"w2_l5_c_1","x":573,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l5_c_2","x":887,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l5_c_4","x":1513,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l5_c_5","x":1827,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l5_c_7","x":2453,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l5_c_8","x":2767,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l5_c_9","x":3080,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l5_c_10","x":3393,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l5_c_11","x":3707,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w2_l5_e_1","x":491,"y":336,"width":26,"height":22,"type":"flyer","vx":1.3599999999999999,"vy":0,"minX":330,"maxX":679,"facing":1},{"id":"w2_l5_e_2","x":1170,"y":389,"width":28,"height":26,"type":"anteater","vx":-0.97,"vy":0,"minX":1114,"maxX":1253,"facing":-1},{"id":"w2_l5_e_3","x":1452,"y":289,"width":28,"height":26,"type":"beaver","vx":0.97,"vy":0,"minX":1379,"maxX":1553,"facing":1},{"id":"w2_l5_e_4","x":1800,"y":389,"width":28,"height":26,"type":"hedgehog","vx":-0.97,"vy":0,"minX":1697,"maxX":1931,"facing":-1},{"id":"w2_l5_e_5","x":2171,"y":464,"width":28,"height":26,"type":"frog","vx":0.97,"vy":0,"minX":2081,"maxX":2289,"facing":1,"minY":420,"maxY":490},{"id":"w2_l5_e_6","x":2771,"y":164,"width":26,"height":22,"type":"pigeon","vx":-1.3599999999999999,"vy":0,"minX":2648,"maxX":2921,"facing":-1}],
    parTime: 73,
    threeStarScore: 7600
  },
  {
    id: 16,
    title: "16. Crystal Caverns: Rapid Sprint",
    worldNumber: 2,
    worldName: "Crystal Caverns",
    gameplayType: "runner",
    category: "classic",
    description: "Sprint along continuous solid ground, clear hurdles with double jumps, and outpace hazards in the Crystal Caverns!",
    worldWidth: 4420,
    worldHeight: 600,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":440},
    goal: {"x":4280,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1547,"y":470,"width":30,"height":40,"activated":false},{"x":3006,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w2_l6_g1","x":0,"y":520,"width":830,"height":80,"type":"solid"},{"id":"w2_l6_h1","x":373,"y":472,"width":48,"height":48,"type":"solid"},{"id":"w2_l6_g2","x":940,"y":520,"width":650,"height":80,"type":"solid"},{"id":"w2_l6_h2","x":1232,"y":472,"width":48,"height":48,"type":"solid"},{"id":"w2_l6_g3","x":1700,"y":520,"width":973,"height":80,"type":"solid"},{"id":"w2_l6_sp3","x":2137,"y":504,"width":44,"height":16,"type":"bouncy"},{"id":"w2_l6_g4","x":2783,"y":520,"width":1005,"height":80,"type":"solid"},{"id":"w2_l6_h4","x":3235,"y":472,"width":48,"height":48,"type":"solid"},{"id":"w2_l6_g5","x":3898,"y":520,"width":937,"height":80,"type":"solid"},{"id":"w2_l6_h5","x":4319,"y":472,"width":48,"height":48,"type":"solid"},{"id":"w2_l6_finish","x":4060,"y":490,"width":360,"height":110,"type":"solid"},{"id":"w2_l6_secret_p1","x":1238,"y":260,"width":100,"height":20,"type":"solid"},{"id":"w2_l6_secret_p3","x":3713,"y":280,"width":110,"height":20,"type":"solid"}],
    hazards: [{"id":"w2_l6_hz1","x":533,"y":506,"width":36,"height":14,"type":"spike"},{"id":"w2_l6_hz3","x":2297,"y":506,"width":36,"height":14,"type":"spike"},{"id":"w2_l6_hz5","x":4479,"y":506,"width":36,"height":14,"type":"spike"}],
    collectibles: [{"id":"w2_l6_acorn_1","x":1275,"y":230,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l6_acorn_2","x":2387,"y":410,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l6_acorn_3","x":3755,"y":250,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l6_c_1","x":587,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l6_c_2","x":913,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l6_c_4","x":1567,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l6_c_5","x":1893,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l6_c_6","x":2220,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l6_c_7","x":2547,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l6_c_8","x":2873,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l6_c_9","x":3200,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l6_c_10","x":3527,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l6_c_11","x":3853,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w2_l6_e_1","x":1251,"y":494,"width":28,"height":26,"type":"hedgehog","vx":0.97,"vy":0,"minX":946,"maxX":1584,"facing":1},{"id":"w2_l6_e_2","x":2173,"y":494,"width":28,"height":26,"type":"frog","vx":-0.97,"vy":0,"minX":1706,"maxX":2667,"facing":-1,"minY":450,"maxY":520},{"id":"w2_l6_e_3","x":3272,"y":380,"width":26,"height":22,"type":"pigeon","vx":1.3599999999999999,"vy":0,"minX":2733,"maxX":3838,"facing":1},{"id":"w2_l6_e_4","x":4353,"y":494,"width":28,"height":26,"type":"skunk","vx":-0.97,"vy":0,"minX":3904,"maxX":4829,"facing":-1},{"id":"w2_l6_e_5","x":4226,"y":464,"width":28,"height":26,"type":"goose","vx":0.97,"vy":0,"minX":4066,"maxX":4414,"facing":1}],
    parTime: 76,
    threeStarScore: 7800
  },
  {
    id: 17,
    title: "17. Crystal Caverns: Steps Exploration",
    worldNumber: 2,
    worldName: "Crystal Caverns",
    gameplayType: "terrain",
    category: "classic",
    description: "Explore the vertical elevations, moving platforms, and hidden secrets of Crystal Caverns.",
    worldWidth: 4580,
    worldHeight: 600,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":440},
    goal: {"x":4440,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1603,"y":470,"width":30,"height":40,"activated":false},{"x":3114,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w2_l7_p_start","x":0,"y":500,"width":320,"height":100,"type":"solid"},{"id":"w2_l7_p1","x":380,"y":426,"width":249,"height":14,"type":"one-way"},{"id":"w2_l7_p2","x":764,"y":490,"width":207,"height":26,"type":"bouncy"},{"id":"w2_l7_p3","x":1108,"y":415,"width":151,"height":26,"type":"crumbling"},{"id":"w2_l7_p4","x":1373,"y":315,"width":186,"height":26,"type":"solid"},{"id":"w2_l7_p5","x":1691,"y":415,"width":246,"height":14,"type":"one-way"},{"id":"w2_l7_p6","x":2075,"y":490,"width":220,"height":26,"type":"solid","speed":1.5599999999999998,"distanceX":140,"startX":2075,"startY":490,"vx":1.5599999999999998},{"id":"w2_l7_p7","x":2413,"y":404,"width":156,"height":26,"type":"bouncy"},{"id":"w2_l7_p8","x":2698,"y":304,"width":173,"height":26,"type":"solid"},{"id":"w2_l7_p9","x":3010,"y":404,"width":240,"height":14,"type":"one-way"},{"id":"w2_l7_p10","x":3372,"y":490,"width":232,"height":26,"type":"solid"},{"id":"w2_l7_p11","x":3730,"y":392,"width":164,"height":26,"type":"solid"},{"id":"w2_l7_p12","x":4033,"y":292,"width":162,"height":26,"type":"bouncy"},{"id":"w2_l7_finish_base","x":4200,"y":480,"width":380,"height":120,"type":"solid"},{"id":"w2_l7_secret_p1","x":1237,"y":160,"width":90,"height":20,"type":"solid"},{"id":"w2_l7_secret_p2","x":2565,"y":470,"width":70,"height":20,"type":"crumbling"},{"id":"w2_l7_secret_p3","x":4300,"y":220,"width":100,"height":20,"type":"solid"}],
    hazards: [{"id":"w2_l7_hz3","x":1145,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l7_hz9","x":3070,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l7_hz12","x":4073,"y":574,"width":80,"height":26,"type":"spike"}],
    collectibles: [{"id":"w2_l7_acorn_1","x":1269,"y":130,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l7_acorn_2","x":2587,"y":440,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l7_acorn_3","x":4337,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l7_c_1","x":600,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l7_c_2","x":940,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l7_c_4","x":1620,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l7_c_5","x":1960,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l7_c_6","x":2300,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l7_c_7","x":2640,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l7_c_8","x":2980,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l7_c_9","x":3320,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l7_c_10","x":3660,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l7_c_11","x":4000,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w2_l7_e_1","x":491,"y":400,"width":28,"height":26,"type":"skunk","vx":0.97,"vy":0,"minX":386,"maxX":623,"facing":1},{"id":"w2_l7_e_2","x":1170,"y":389,"width":28,"height":26,"type":"goose","vx":-0.97,"vy":0,"minX":1114,"maxX":1253,"facing":-1},{"id":"w2_l7_e_3","x":1452,"y":289,"width":28,"height":26,"type":"patroller","vx":0.97,"vy":0,"minX":1379,"maxX":1553,"facing":1},{"id":"w2_l7_e_4","x":1800,"y":389,"width":28,"height":26,"type":"slime","vx":-0.97,"vy":0,"minX":1697,"maxX":1931,"facing":-1},{"id":"w2_l7_e_5","x":2171,"y":375,"width":26,"height":22,"type":"flyer","vx":1.3599999999999999,"vy":0,"minX":2025,"maxX":2345,"facing":1},{"id":"w2_l7_e_6","x":2771,"y":278,"width":28,"height":26,"type":"anteater","vx":-0.97,"vy":0,"minX":2704,"maxX":2865,"facing":-1}],
    parTime: 79,
    threeStarScore: 8000
  },
  {
    id: 18,
    title: "18. Crystal Caverns: Aviator Flight",
    worldNumber: 2,
    worldName: "Crystal Caverns",
    gameplayType: "rocketeer",
    category: "rocketeer",
    description: "Take to the open skies! Zero ground platforms—pure aerial jetpack flight navigating fuel canisters across the Crystal Caverns.",
    worldWidth: 4800,
    worldHeight: 650,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":440},
    startWithJetpack: true,
    goal: {"x":4660,"y":420,"width":44,"height":60},
    checkpoints: [],
    platforms: [{"id":"w2_l8_launch","x":0,"y":480,"width":260,"height":170,"type":"solid"},{"id":"w2_l8_landing","x":4460,"y":440,"width":340,"height":210,"type":"solid"}],
    hazards: [],
    collectibles: [{"id":"w2_l8_jp_start","x":120,"y":440,"width":28,"height":28,"type":"jetpack","value":500},{"id":"w2_l8_acorn_1","x":1248,"y":110,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l8_acorn_2","x":2640,"y":490,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l8_acorn_3","x":3984,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l8_fuel_1","x":844,"y":396,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_fuel_2","x":1289,"y":198,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_fuel_3","x":1733,"y":152,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_fuel_4","x":2178,"y":371,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_fuel_5","x":2622,"y":318,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_fuel_6","x":3067,"y":123,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_fuel_7","x":3511,"y":265,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_fuel_8","x":3956,"y":395,"width":24,"height":24,"type":"jetpack_fuel","value":200},{"id":"w2_l8_c_1","x":618,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l8_c_2","x":977,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l8_c_5","x":2052,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l8_c_6","x":2410,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l8_c_7","x":2768,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l8_c_10","x":3843,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l8_c_11","x":4202,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w2_l8_fly_1","x":1004,"y":336,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":904,"maxX":1124,"facing":-1},{"id":"w2_l8_fly_2","x":1449,"y":138,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":1349,"maxX":1569,"facing":1},{"id":"w2_l8_fly_3","x":1893,"y":120,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":1793,"maxX":2013,"facing":-1},{"id":"w2_l8_fly_4","x":2338,"y":311,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":2238,"maxX":2458,"facing":1},{"id":"w2_l8_fly_5","x":2782,"y":258,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":2682,"maxX":2902,"facing":-1},{"id":"w2_l8_fly_6","x":3227,"y":120,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":3127,"maxX":3347,"facing":1},{"id":"w2_l8_fly_7","x":3671,"y":205,"width":26,"height":22,"type":"pigeon","vx":-2,"vy":0,"minX":3571,"maxX":3791,"facing":-1},{"id":"w2_l8_fly_8","x":4116,"y":335,"width":26,"height":22,"type":"flyer","vx":1.8,"vy":0,"minX":4016,"maxX":4236,"facing":1}],
    parTime: 82,
    threeStarScore: 8200
  },
  {
    id: 19,
    title: "19. Crystal Caverns: Chasm Exploration",
    worldNumber: 2,
    worldName: "Crystal Caverns",
    gameplayType: "terrain",
    category: "classic",
    description: "Explore the vertical elevations, moving platforms, and hidden secrets of Crystal Caverns.",
    worldWidth: 4900,
    worldHeight: 600,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":440},
    goal: {"x":4760,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1715,"y":470,"width":30,"height":40,"activated":false},{"x":3332,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w2_l9_p_start","x":0,"y":500,"width":320,"height":100,"type":"solid"},{"id":"w2_l9_p1","x":380,"y":426,"width":249,"height":14,"type":"one-way"},{"id":"w2_l9_p2","x":764,"y":490,"width":207,"height":26,"type":"bouncy"},{"id":"w2_l9_p3","x":1108,"y":415,"width":151,"height":26,"type":"crumbling"},{"id":"w2_l9_p4","x":1373,"y":315,"width":186,"height":26,"type":"solid"},{"id":"w2_l9_p5","x":1691,"y":415,"width":246,"height":14,"type":"one-way"},{"id":"w2_l9_p6","x":2075,"y":490,"width":220,"height":26,"type":"solid","speed":1.5599999999999998,"distanceX":140,"startX":2075,"startY":490,"vx":1.5599999999999998},{"id":"w2_l9_p7","x":2413,"y":404,"width":156,"height":26,"type":"bouncy"},{"id":"w2_l9_p8","x":2698,"y":304,"width":173,"height":26,"type":"solid"},{"id":"w2_l9_p9","x":3010,"y":404,"width":240,"height":14,"type":"one-way"},{"id":"w2_l9_p10","x":3372,"y":490,"width":232,"height":26,"type":"solid"},{"id":"w2_l9_p11","x":3730,"y":392,"width":164,"height":26,"type":"solid"},{"id":"w2_l9_p12","x":4033,"y":292,"width":162,"height":26,"type":"bouncy"},{"id":"w2_l9_p13","x":4321,"y":392,"width":230,"height":14,"type":"one-way"},{"id":"w2_l9_finish_base","x":4520,"y":480,"width":380,"height":120,"type":"solid"},{"id":"w2_l9_secret_p1","x":1323,"y":160,"width":90,"height":20,"type":"solid"},{"id":"w2_l9_secret_p2","x":2744,"y":470,"width":70,"height":20,"type":"crumbling"},{"id":"w2_l9_secret_p3","x":4620,"y":220,"width":100,"height":20,"type":"solid"}],
    hazards: [{"id":"w2_l9_hz3","x":1145,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l9_hz9","x":3070,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l9_hz12","x":4073,"y":574,"width":80,"height":26,"type":"spike"}],
    collectibles: [{"id":"w2_l9_acorn_1","x":1355,"y":130,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l9_acorn_2","x":2766,"y":440,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l9_acorn_3","x":4657,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l9_c_1","x":627,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l9_c_2","x":993,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l9_c_4","x":1727,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l9_c_5","x":2093,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l9_c_6","x":2460,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l9_c_7","x":2827,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l9_c_8","x":3193,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l9_c_9","x":3560,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l9_c_10","x":3927,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l9_c_11","x":4293,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w2_l9_e_1","x":491,"y":400,"width":28,"height":26,"type":"beaver","vx":0.97,"vy":0,"minX":386,"maxX":623,"facing":1},{"id":"w2_l9_e_2","x":1170,"y":389,"width":28,"height":26,"type":"hedgehog","vx":-0.97,"vy":0,"minX":1114,"maxX":1253,"facing":-1},{"id":"w2_l9_e_3","x":1452,"y":289,"width":28,"height":26,"type":"frog","vx":0.97,"vy":0,"minX":1379,"maxX":1553,"facing":1,"minY":245,"maxY":315},{"id":"w2_l9_e_4","x":1800,"y":325,"width":26,"height":22,"type":"pigeon","vx":-1.3599999999999999,"vy":0,"minX":1641,"maxX":1987,"facing":-1},{"id":"w2_l9_e_5","x":2171,"y":464,"width":28,"height":26,"type":"skunk","vx":0.97,"vy":0,"minX":2081,"maxX":2289,"facing":1},{"id":"w2_l9_e_6","x":2771,"y":278,"width":28,"height":26,"type":"goose","vx":-0.97,"vy":0,"minX":2704,"maxX":2865,"facing":-1}],
    parTime: 85,
    threeStarScore: 8400
  },
  {
    id: 20,
    title: "20. Crystal Caverns: Fortress Climax",
    worldNumber: 2,
    worldName: "Crystal Caverns",
    gameplayType: "terrain",
    category: "classic",
    description: "The grand climax of Crystal Caverns! A high-stakes gauntlet testing all your platforming prowess.",
    worldWidth: 4640,
    worldHeight: 600,
    theme: THEMES.cavern,
    playerStart: {"x":80,"y":440},
    goal: {"x":4500,"y":420,"width":44,"height":60},
    checkpoints: [{"x":1624,"y":470,"width":30,"height":40,"activated":false},{"x":3155,"y":470,"width":30,"height":40,"activated":false}],
    platforms: [{"id":"w2_l10_p_start","x":0,"y":500,"width":320,"height":100,"type":"solid"},{"id":"w2_l10_p1","x":380,"y":426,"width":249,"height":14,"type":"one-way"},{"id":"w2_l10_p2","x":764,"y":490,"width":207,"height":26,"type":"bouncy"},{"id":"w2_l10_p3","x":1108,"y":415,"width":151,"height":26,"type":"crumbling"},{"id":"w2_l10_p4","x":1373,"y":315,"width":186,"height":26,"type":"solid"},{"id":"w2_l10_p5","x":1691,"y":415,"width":246,"height":14,"type":"one-way"},{"id":"w2_l10_p6","x":2075,"y":490,"width":220,"height":26,"type":"solid","speed":1.5599999999999998,"distanceX":140,"startX":2075,"startY":490,"vx":1.5599999999999998},{"id":"w2_l10_p7","x":2413,"y":404,"width":156,"height":26,"type":"bouncy"},{"id":"w2_l10_p8","x":2698,"y":304,"width":173,"height":26,"type":"solid"},{"id":"w2_l10_p9","x":3010,"y":404,"width":240,"height":14,"type":"one-way"},{"id":"w2_l10_p10","x":3372,"y":490,"width":232,"height":26,"type":"solid"},{"id":"w2_l10_p11","x":3730,"y":392,"width":164,"height":26,"type":"solid"},{"id":"w2_l10_p12","x":4033,"y":292,"width":162,"height":26,"type":"bouncy"},{"id":"w2_l10_finish_base","x":4260,"y":480,"width":380,"height":120,"type":"solid"},{"id":"w2_l10_secret_p1","x":1253,"y":160,"width":90,"height":20,"type":"solid"},{"id":"w2_l10_secret_p2","x":2598,"y":470,"width":70,"height":20,"type":"crumbling"},{"id":"w2_l10_secret_p3","x":4360,"y":220,"width":100,"height":20,"type":"solid"}],
    hazards: [{"id":"w2_l10_hz3","x":1145,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l10_hz9","x":3070,"y":574,"width":80,"height":26,"type":"spike"},{"id":"w2_l10_hz12","x":4073,"y":574,"width":80,"height":26,"type":"spike"}],
    collectibles: [{"id":"w2_l10_acorn_1","x":1285,"y":130,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l10_acorn_2","x":2620,"y":440,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l10_acorn_3","x":4397,"y":190,"width":26,"height":26,"type":"acorn","value":1500},{"id":"w2_l10_c_1","x":605,"y":378,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l10_c_2","x":950,"y":313,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l10_c_4","x":1640,"y":216,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l10_c_5","x":1985,"y":345,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l10_c_6","x":2330,"y":365,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l10_c_7","x":2675,"y":243,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l10_c_8","x":3020,"y":182,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l10_c_9","x":3365,"y":283,"width":24,"height":24,"type":"gem","value":500},{"id":"w2_l10_c_10","x":3710,"y":379,"width":20,"height":20,"type":"coin","value":100},{"id":"w2_l10_c_11","x":4055,"y":310,"width":20,"height":20,"type":"coin","value":100}],
    enemies: [{"id":"w2_l10_e_1","x":491,"y":336,"width":26,"height":22,"type":"pigeon","vx":1.3599999999999999,"vy":0,"minX":330,"maxX":679,"facing":1},{"id":"w2_l10_e_2","x":1170,"y":389,"width":28,"height":26,"type":"skunk","vx":-0.97,"vy":0,"minX":1114,"maxX":1253,"facing":-1},{"id":"w2_l10_e_3","x":1452,"y":289,"width":28,"height":26,"type":"goose","vx":0.97,"vy":0,"minX":1379,"maxX":1553,"facing":1},{"id":"w2_l10_e_4","x":1800,"y":389,"width":28,"height":26,"type":"patroller","vx":-0.97,"vy":0,"minX":1697,"maxX":1931,"facing":-1},{"id":"w2_l10_e_5","x":2171,"y":464,"width":28,"height":26,"type":"slime","vx":0.97,"vy":0,"minX":2081,"maxX":2289,"facing":1},{"id":"w2_l10_e_6","x":2771,"y":164,"width":26,"height":22,"type":"flyer","vx":-1.3599999999999999,"vy":0,"minX":2648,"maxX":2921,"facing":-1}],
    parTime: 88,
    threeStarScore: 8600
  }
];
