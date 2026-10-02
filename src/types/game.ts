export type GameState = 'MENU' | 'PLAYING' | 'PAUSED' | 'LEVEL_COMPLETE' | 'GAME_OVER' | 'VICTORY';

export type PlatformType = 'solid' | 'one-way' | 'bouncy' | 'crumbling' | 'ice';

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

export type CollectibleType = 'coin' | 'gem' | 'heart' | 'powerup_speed' | 'powerup_jump' | 'jetpack' | 'jetpack_fuel' | 'blaster' | 'blaster_ammo' | 'bubble_shield' | 'acorn';

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
}

export type EnemyType = 'slime' | 'patroller' | 'flyer' | 'anteater' | 'beaver' | 'hedgehog' | 'frog' | 'pigeon' | 'skunk' | 'goose';

export type EnemyProjectileType = 'ant' | 'log' | 'stink_cloud' | 'honk_wave';

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
  // Shield state
  hasShield?: boolean;
  // Double jump state (when not wearing jetpack)
  canDoubleJump?: boolean;
  hasDoubleJumped?: boolean;
  // Moving platform riding state
  ridingPlatformId?: string | null;
  ridingPlatformVy?: number;
  // Character visual customization
  character?: CharacterConfig;
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
  name: string;
  skyColorTop: string;
  skyColorBottom: string;
  cloudColor: string;
  mountainColor: string;
  platformFill: string;
  platformTop: string;
  platformBorder: string;
  accentColor: string;
}

export interface LevelData {
  id: number;
  title: string;
  category?: 'classic' | 'ascent' | 'masters' | 'jetpack' | 'rocketeer';
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
  hasShield?: boolean;
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
}
