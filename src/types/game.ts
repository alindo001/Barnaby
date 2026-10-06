export type GameState = 'MENU' | 'PLAYING' | 'PAUSED' | 'LEVEL_COMPLETE' | 'GAME_OVER' | 'VICTORY';

export type PlatformType = 'solid' | 'one-way' | 'bouncy' | 'crumbling' | 'ice' | 'anti_grav' | 'phase';

export interface Platform {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type?: PlatformType;
  // Moving platform properties
  vx?: number;
  vy?: number;
  startX?: number;
  startY?: number;
  distanceX?: number;
  distanceY?: number;
  speed?: number;
  // Crumbling platform state
  crumbleTimer?: number;
  crumbling?: boolean;
  respawnTimer?: number;
  // Phase / Disappearing platform properties
  phasePeriod?: number; // Total cycle duration in seconds (default ~2.6s)
  phaseOffset?: number; // Cycle time offset in seconds (e.g. 0s vs 1.3s for alternating groups)
  phaseActiveDuration?: number; // Active solid duration in seconds (default ~1.4s)
  isPhaseActive?: boolean; // Computed solid state for current frame
  phaseWarning?: boolean; // True when platform is about to disappear (e.g. last 0.6s)
  phaseTimeLeft?: number; // Time remaining in current phase state in seconds
}

export type HazardType = 'spike' | 'lava' | 'saw';

export interface Hazard {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: HazardType;
  // For moving hazards (like saws)
  vx?: number;
  vy?: number;
  startX?: number;
  startY?: number;
  distanceX?: number;
  distanceY?: number;
  speed?: number;
  rotation?: number;
}

export type CollectibleType = 'coin' | 'gem' | 'heart' | 'powerup_speed' | 'powerup_jump' | 'jetpack' | 'jetpack_fuel' | 'blaster' | 'blaster_ammo' | 'bubble_shield' | 'acorn' | 'snow_cannon' | 'powerup_magnet';

export interface Collectible {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: CollectibleType;
  value: number;
  collected?: boolean;
  bobOffset?: number;
  respawnTimer?: number;
}

export type LaunchDirection = 'left' | 'up-left' | 'up' | 'up-right' | 'right' | 'down' | 'drop';

export type TouchButtonSize = 'normal' | 'large' | 'xl';

export interface TouchControlSettings {
  dpadSize: TouchButtonSize;
  opacity: number; // 0.2 (high translucency) to 1.0 (solid opaque)
}

export interface LaunchedJetpack {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  rotation: number;
  fuel: number;
  life: number;
  maxLife: number;
  isExploding?: boolean;
}

export interface BlasterBullet {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
  maxLife: number;
  isSnowball?: boolean;
}

export type EnemyType = 'slime' | 'patroller' | 'flyer' | 'anteater' | 'beaver' | 'hedgehog' | 'frog' | 'pigeon' | 'skunk' | 'goose' | 'fire_imp' | 'frost_yeti' | 'urchin' | 'crystal_golem' | 'crystal_bat' | 'dune_scorpion';

export type EnemyProjectileType = 'ant' | 'log' | 'stink_cloud' | 'honk_wave' | 'fireball' | 'snowball' | 'crystal_shard' | 'sand_burst';

export interface EnemyProjectile {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  type: EnemyProjectileType;
  rotation?: number;
  life: number;
  maxLife: number;
  bounces?: number;
}

export interface Enemy {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: EnemyType;
  vx: number;
  vy: number;
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  facing: 1 | -1;
  isDead?: boolean;
  deathTimer?: number;
  shootTimer?: number;
  shootCooldown?: number;
  jumpTimer?: number;
  state?: 'idle' | 'walking' | 'shooting' | 'rolling' | 'jumping';
  isSpiky?: boolean;
  animTimer?: number;
}

export interface Player {
  x: number;
  y: number;
  width: number;
  height: number;
  vx: number;
  vy: number;
  isGrounded: boolean;
  wasGrounded: boolean;
  facing: 1 | -1;
  isJumping: boolean;
  jumpTime: number;
  coyoteTimer: number;
  jumpBufferTimer: number;
  isDead: boolean;
  respawnX: number;
  respawnY: number;
  // Visual squash/stretch
  scaleX: number;
  scaleY: number;
  // Animation state
  animFrame: number;
  animTimer: number;
  // Powerup state
  speedBoostTimer: number;
  jumpBoostTimer: number;
  invulnerableTimer: number;
  // Jetpack state
  hasJetpack: boolean;
  jetpackFuel: number;
  maxJetpackFuel: number;
  isJetpacking: boolean;
  // Blaster & gadget state
  hasBlaster?: boolean;
  blasterAmmo?: number;
  maxBlasterAmmo?: number;
  blasterCooldown?: number;
  // Snowball Cannon powerup state (rapid-fire snowballs, infinite ammo)
  hasSnowCannon?: boolean;
  snowCannonCooldown?: number;
  // Shield state
  hasShield?: boolean;
  // Prismatic Magnet powerup timer
  magnetTimer?: number;
  // Double jump state (when not wearing jetpack)
  canDoubleJump?: boolean;
  hasDoubleJumped?: boolean;
  // Moving platform riding state
  ridingPlatformId?: string | null;
  ridingPlatformVy?: number;
  // Ice platform sliding state
  standingOnIce?: boolean;
  // Character visual customization
  character?: CharacterConfig;
  gravSoundTimer?: number;
}

export type CharacterType = 'bird' | 'frog' | 'axolotl' | 'capybara';

export type HatType = 
  | 'none' 
  | 'bandana' 
  | 'beanie' 
  | 'crown' 
  | 'tophat' 
  | 'flower' 
  | 'sunglasses' 
  | 'headband' 
  | 'partyhat' 
  | 'wizard';

export type OutfitType = 
  | 'none' 
  | 'scarf' 
  | 'cape' 
  | 'bowtie' 
  | 'vest';

export type ExpressionType = 
  | 'happy' 
  | 'sparkle' 
  | 'cool' 
  | 'determined' 
  | 'winking';

export interface CharacterConfig {
  type: CharacterType;
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  hat: HatType;
  hatColor: string;
  outfit: OutfitType;
  outfitColor: string;
  expression: ExpressionType;
  specialFeature: string;
  specialColor?: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  shape?: 'circle' | 'square' | 'sparkle' | 'star' | 'smoke' | 'flame';
  gravity?: number;
}

export interface ScorePopup {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  life: number;
  maxLife: number;
}

export interface Camera {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  shakeTime: number;
  shakeIntensity: number;
}

export interface LevelTheme {
  id?: string;
  name: string;
  skyColorTop: string;
  skyColorBottom: string;
  cloudColor: string;
  mountainColor: string;
  platformFill: string;
  platformTop: string;
  platformBorder: string;
  accentColor: string;
  neonCyan?: string;
  neonMagenta?: string;
  neonPurple?: string;
  neonYellow?: string;
  gridLineColor?: string;
  sunColor?: string;
  spaceVoid?: string;
  spaceNebula1?: string;
  spaceNebula2?: string;
  spaceStarColor?: string;
  magmaGlow?: string;
  emberColor?: string;
  auroraGreen?: string;
  auroraCyan?: string;
  auroraPurple?: string;
  frostGlow?: string;
  iceShimmer?: string;
  waterColor?: string;
  bubbleColor?: string;
  coralGlow?: string;
  bioluminescence?: string;
  torchGlow?: string;
  bannerRed?: string;
  bannerGold?: string;
  ironTrim?: string;
  stainedGlass?: string;
  brassGear?: string;
  copperPipe?: string;
  steamGlow?: string;
  amberDial?: string;
  crystalCyan?: string;
  crystalPurple?: string;
  crystalPink?: string;
  crystalGold?: string;
  geodeGlow?: string;
  sparkleColor?: string;
  sandGold?: string;
  ruinTerracotta?: string;
  hieroglyphGold?: string;
  oasisTurquoise?: string;
  duneShadow?: string;
}

export type LevelGameplayType = 'runner' | 'terrain' | 'rocketeer' | 'gadget';

export interface LevelData {
  id: number;
  title: string;
  category?: 'classic' | 'ascent' | 'masters' | 'jetpack' | 'rocketeer';
  worldNumber?: number;
  worldName?: string;
  gameplayType?: LevelGameplayType;
  description: string;
  worldWidth: number;
  worldHeight: number;
  theme: LevelTheme;
  playerStart: { x: number; y: number };
  goal: { x: number; y: number; width: number; height: number };
  checkpoints?: { x: number; y: number; width: number; height: number; activated?: boolean }[];
  platforms: Platform[];
  hazards: Hazard[];
  collectibles: Collectible[];
  enemies: Enemy[];
  launchedJetpacks?: LaunchedJetpack[];
  blasterBullets?: BlasterBullet[];
  enemyProjectiles?: EnemyProjectile[];
  startWithJetpack?: boolean;
  isUnderwater?: boolean;
  requiredAcorns?: number; // Total golden acorns needed across the game to unlock this stage
  parTime?: number; // target time in seconds
  threeStarScore?: number;
}

export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  showFps: boolean;
  screenShake: boolean;
  touchControls: boolean;
  pixelArtMode: boolean;
  collectibleStyle?: 'acorn' | 'feather';
  unlockAllLevels?: boolean;
}

export interface GameStats {
  score: number;
  coins: number;
  gems: number;
  acorns: number; // Golden acorns collected in current level run (0 - 3)
  totalLevelAcorns: number; // Sum of best acorns collected across all levels (0 - 180)
  levelAcorns: Record<number, number>; // levelId -> acorns collected (0 - 3)
  highestClearedLevelId: number; // Highest level ID cleared (1 - 60)
  lives: number;
  time: number;
  levelIndex: number;
  levelStars: Record<number, number>; // levelId -> stars (1-3)
  highScores: Record<number, number>; // levelId -> highScore
  deaths: number;
  enemiesDefeated: Record<string, number>; // enemyType -> count defeated
  totalEnemiesDefeated: number; // total defeated
  hasJetpack?: boolean;
  jetpackFuel?: number;
  maxJetpackFuel?: number;
  hasActiveCheckpoint?: boolean;
  hasBlaster?: boolean;
  blasterAmmo?: number;
  maxBlasterAmmo?: number;
  hasSnowCannon?: boolean;
  hasShield?: boolean;
  magnetTimer?: number;
  isTransitioning?: boolean;
  transitionProgress?: number;
}

export interface LevelTransitionState {
  active: boolean;
  phase: 'fade_out' | 'hold' | 'fade_in';
  progress: number; // 0 to 1
  holdTime?: number;
  holdDuration?: number;
  duration: number; // Duration of each fade phase in seconds
  targetLevelIndex: number;
  resetCheckpoints: boolean;
  levelTitle?: string;
  worldName?: string;
  category?: string;
  description?: string;
  parTime?: number;
  threeStarScore?: number;
  onComplete?: () => void;
}

export interface InputState {
  left: boolean;
  right: boolean;
  up: boolean; // Jump
  down: boolean; // Drop through one-way
  jumpPressed: boolean;
  jumpReleased: boolean;
  restartPressed: boolean;
  shootPressed?: boolean;
  fire?: boolean;
}
