import { 
  GameState, 
  Player, 
  Camera, 
  LevelData, 
  InputState, 
  GameStats, 
  GameSettings,
  LaunchDirection,
  CharacterConfig
} from '../types/game';
import { INITIAL_LEVELS } from './levels';
import { PhysicsEngine } from './physics';
import { ParticleSystem } from './particles';
import { GameRenderer } from './renderer';
import { sound } from './audio';
import { loadCharacterConfig, saveCharacterConfig } from './characters';

export class GameEngine {
  private canvas: HTMLCanvasElement;
  private renderer: GameRenderer;
  private physics: PhysicsEngine;
  private particles: ParticleSystem;

  public levels: LevelData[] = INITIAL_LEVELS;
  public currentLevelIndex: number = 0;
  public currentLevel: LevelData;
  public player: Player;
  public camera: Camera;
  public gameState: GameState = 'MENU';

  public input: InputState = {
    left: false,
    right: false,
    up: false,
    down: false,
    jumpPressed: false,
    jumpReleased: false,
    restartPressed: false
  };

  public stats: GameStats = {
    score: 0,
    coins: 0,
    gems: 0,
    lives: 3,
    time: 0,
    levelIndex: 0,
    levelStars: {},
    highScores: {},
    deaths: 0
  };

  public settings: GameSettings = {
    soundEnabled: true,
    musicEnabled: false,
    volume: 0.7,
    showFps: false,
    screenShake: true,
    touchControls: false,
    pixelArtMode: false
  };

  public characterConfig: CharacterConfig = loadCharacterConfig();

  private animationFrameId: number | null = null;
  private lastTime: number = 0;
  private hudUpdateTimer: number = 0;
  private lastCheckpoint: { x: number; y: number; hasJetpack: boolean; hasShield?: boolean; hasBlaster?: boolean; blasterAmmo?: number } | null = null;
  private onStateChangeCallback?: (state: GameState, stats: GameStats) => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new GameRenderer(canvas);
    this.physics = new PhysicsEngine();
    this.particles = new ParticleSystem();

    this.loadProgress();

    this.currentLevel = this.cloneLevel(this.levels[0]);
    this.player = this.createPlayer(this.currentLevel.playerStart.x, this.currentLevel.playerStart.y);
    this.camera = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      shakeTime: 0,
      shakeIntensity: 0
    };

    this.setupKeyboardListeners();
  }

  private loadProgress() {
    try {
      const saved = localStorage.getItem('platformer_game_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.levelStars) this.stats.levelStars = parsed.levelStars;
        if (parsed.highScores) this.stats.highScores = parsed.highScores;
      }
    } catch {}
  }

  private saveProgress() {
    try {
      localStorage.setItem('platformer_game_progress', JSON.stringify({
        levelStars: this.stats.levelStars,
        highScores: this.stats.highScores
      }));
    } catch {}
  }

  private cloneLevel(lvl: LevelData): LevelData {
    return JSON.parse(JSON.stringify(lvl));
  }

  private createPlayer(x: number, y: number): Player {
    return {
      x,
      y,
      width: 24,
      height: 32,
      vx: 0,
      vy: 0,
      isGrounded: false,
      wasGrounded: false,
      facing: 1,
      isJumping: false,
      jumpTime: 0,
      coyoteTimer: 0,
      jumpBufferTimer: 0,
      isDead: false,
      respawnX: x,
      respawnY: y,
      scaleX: 1,
      scaleY: 1,
      animFrame: 0,
      animTimer: 0,
      speedBoostTimer: 0,
      jumpBoostTimer: 0,
      invulnerableTimer: 0,
      hasShield: false,
      hasJetpack: false,
      jetpackFuel: 100,
      maxJetpackFuel: 100,
      isJetpacking: false,
      character: this.characterConfig
    };
  }

  public setCharacterConfig(config: CharacterConfig) {
    this.characterConfig = config;
    saveCharacterConfig(config);
    if (this.player) {
      this.player.character = config;
    }
    this.notifyState();
  }

  public setOnStateChange(cb: (state: GameState, stats: GameStats) => void) {
    this.onStateChangeCallback = cb;
  }

  private notifyState() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(this.gameState, {
        ...this.stats,
        hasShield: this.player ? !!this.player.hasShield : false,
        hasJetpack: this.player ? this.player.hasJetpack : false,
        jetpackFuel: this.player ? this.player.jetpackFuel : 100,
        maxJetpackFuel: this.player ? this.player.maxJetpackFuel : 100,
        hasActiveCheckpoint: !!this.lastCheckpoint,
        hasBlaster: this.player ? !!this.player.hasBlaster : false,
        blasterAmmo: this.player ? (this.player.blasterAmmo ?? 0) : 0,
        maxBlasterAmmo: this.player ? (this.player.maxBlasterAmmo ?? 30) : 30
      });
    }
  }

  public startLevel(levelIndex: number, resetCheckpoints: boolean = true) {
    this.currentLevelIndex = Math.max(0, Math.min(this.levels.length - 1, levelIndex));
    this.currentLevel = this.cloneLevel(this.levels[this.currentLevelIndex]);
    
    if (resetCheckpoints) {
      this.lastCheckpoint = null;
    }

    const startX = (!resetCheckpoints && this.lastCheckpoint) ? this.lastCheckpoint.x : this.currentLevel.playerStart.x;
    const startY = (!resetCheckpoints && this.lastCheckpoint) ? this.lastCheckpoint.y : this.currentLevel.playerStart.y;

    this.player = this.createPlayer(startX, startY);

    if (!resetCheckpoints && this.lastCheckpoint) {
      this.player.respawnX = this.lastCheckpoint.x;
      this.player.respawnY = this.lastCheckpoint.y;
      this.player.hasJetpack = this.lastCheckpoint.hasJetpack;
      this.player.hasShield = this.lastCheckpoint.hasShield ?? false;
      if (this.lastCheckpoint.hasBlaster) {
        this.player.hasBlaster = true;
        this.player.blasterAmmo = this.lastCheckpoint.blasterAmmo ?? 30;
      }
      if (this.currentLevel.checkpoints) {
        this.currentLevel.checkpoints.forEach(cp => {
          if (Math.abs(cp.x - this.lastCheckpoint!.x) < 50) {
            cp.activated = true;
          }
        });
      }
    }

    this.particles.clear();
    
    this.stats.time = 0;
    this.stats.levelIndex = this.currentLevelIndex;
    this.stats.score = 0;
    this.stats.coins = 0;
    this.stats.gems = 0;
    this.stats.hasActiveCheckpoint = !!this.lastCheckpoint;

    this.camera.x = Math.max(0, Math.min(this.currentLevel.worldWidth - this.canvas.width, this.player.x - this.canvas.width / 2));
    this.camera.y = Math.max(0, Math.min(this.currentLevel.worldHeight - this.canvas.height, this.player.y - this.canvas.height / 2));

    this.gameState = 'PLAYING';
    this.notifyState();
  }

  public respawnAtCheckpoint(restoreLives: boolean = false) {
    if (!this.player || !this.currentLevel) return;

    if (restoreLives) {
      this.stats.lives = 3;
    }

    this.player.isDead = false;

    // Use saved checkpoint if available, otherwise player's active respawn coordinates
    if (this.lastCheckpoint) {
      this.player.x = this.lastCheckpoint.x;
      this.player.y = this.lastCheckpoint.y;
      this.player.hasJetpack = this.lastCheckpoint.hasJetpack;
      this.player.hasShield = this.lastCheckpoint.hasShield ?? false;
      if (this.lastCheckpoint.hasBlaster) {
        this.player.hasBlaster = true;
        this.player.blasterAmmo = this.lastCheckpoint.blasterAmmo ?? 30;
      }
    } else {
      this.player.x = this.player.respawnX;
      this.player.y = this.player.respawnY;
    }

    this.player.vx = 0;
    this.player.vy = 0;
    this.player.isGrounded = true;
    this.player.invulnerableTimer = 2.0; // 2.0s invulnerability on respawn

    if (this.player.hasJetpack) {
      this.player.jetpackFuel = this.player.maxJetpackFuel;
      this.player.isJetpacking = false;
    }

    // Reset any crumbling platforms so player doesn't respawn into missing ground
    this.currentLevel.platforms.forEach(p => {
      if (p.type === 'crumbling') {
        p.crumbling = false;
        p.crumbleTimer = undefined;
        p.respawnTimer = undefined;
      }
    });

    // Reset nearby patrolling enemies to their patrol boundaries so player isn't spawn-camped
    this.currentLevel.enemies.forEach(e => {
      if (!e.isDead && Math.hypot(e.x - this.player.x, e.y - this.player.y) < 180) {
        if (e.minX !== undefined) {
          e.x = e.facing === 1 ? (e.maxX ? e.maxX - e.width : e.x + 150) : e.minX;
        }
      }
    });

    // Instantly center camera on the player at the checkpoint
    this.camera.x = Math.max(0, Math.min(this.currentLevel.worldWidth - this.canvas.width, this.player.x - this.canvas.width / 2));
    this.camera.y = Math.max(0, Math.min(this.currentLevel.worldHeight - this.canvas.height, this.player.y - this.canvas.height / 2));
    this.camera.shakeTime = 0;

    this.particles.emitSparkles(this.player.x + 12, this.player.y + 16, '#10B981', 20);
    this.particles.addPopup(this.player.x + 12, this.player.y - 12, this.lastCheckpoint ? 'RESPAWNED AT CHECKPOINT!' : 'RESPAWNED!', '#10B981');

    this.gameState = 'PLAYING';
    this.notifyState();
  }

  public restartCurrentLevel() {
    if (this.lastCheckpoint) {
      this.respawnAtCheckpoint(true);
    } else {
      this.startLevel(this.currentLevelIndex, true);
    }
  }

  public restartFromBeginning() {
    this.lastCheckpoint = null;
    this.startLevel(this.currentLevelIndex, true);
  }

  public nextLevel() {
    this.lastCheckpoint = null;
    if (this.currentLevelIndex + 1 < this.levels.length) {
      this.startLevel(this.currentLevelIndex + 1, true);
    } else {
      this.gameState = 'VICTORY';
      this.notifyState();
    }
  }

  public pauseGame() {
    if (this.gameState === 'PLAYING') {
      this.gameState = 'PAUSED';
      this.notifyState();
    }
  }

  public resumeGame() {
    if (this.gameState === 'PAUSED') {
      this.gameState = 'PLAYING';
      this.notifyState();
    }
  }

  private handlePlayerDeath() {
    this.stats.deaths++;
    this.stats.lives = Math.max(0, this.stats.lives - 1);
    if (this.settings.screenShake) {
      this.camera.shakeTime = 0.4;
      this.camera.shakeIntensity = 8;
    }

    setTimeout(() => {
      // In checkpoint platformer, dying always respawns at the active checkpoint!
      // If lives reach 0, restore lives to 3 and continue from checkpoint so progression is never lost
      if (this.stats.lives <= 0) {
        this.stats.lives = 3;
      }
      this.respawnAtCheckpoint(false);
    }, 450);
  }

  private handleLevelComplete() {
    if (this.gameState !== 'PLAYING') return;
    this.gameState = 'LEVEL_COMPLETE';
    sound.playWin();
    this.particles.emitConfetti(this.currentLevel.goal.x + 20, this.currentLevel.goal.y + 20, 50);

    // Calculate Star Rating (1 to 3 stars)
    const timeBonus = Math.max(0, Math.floor((60 - this.stats.time) * 20));
    const totalScore = this.stats.score + timeBonus;
    this.stats.score = totalScore;

    let stars = 1;
    if (this.stats.time <= (this.currentLevel.parTime || 30)) {
      stars++;
    }
    if (this.stats.score >= (this.currentLevel.threeStarScore || 2000)) {
      stars++;
    }

    const currentStars = this.stats.levelStars[this.currentLevel.id] || 0;
    this.stats.levelStars[this.currentLevel.id] = Math.max(currentStars, stars);

    const currentHigh = this.stats.highScores[this.currentLevel.id] || 0;
    this.stats.highScores[this.currentLevel.id] = Math.max(currentHigh, totalScore);

    this.saveProgress();
    this.notifyState();
  }

  public start() {
    this.lastTime = performance.now();
    const loop = (time: number) => {
      const dt = Math.min(0.05, (time - this.lastTime) / 1000);
      this.lastTime = time;

      this.update(dt);
      this.render(dt);

      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  public stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private update(dt: number) {
    if (this.gameState === 'PLAYING') {
      this.stats.time += dt;

      // Update Physics
      this.physics.update(
        this.player,
        this.currentLevel,
        this.input,
        this.particles,
        dt,
        () => this.handlePlayerDeath(),
        () => this.handleLevelComplete(),
        (pts) => {
          this.stats.score += pts;
          if (pts === 100) this.stats.coins++;
          if (pts === 500) this.stats.gems++;
        },
        (cp) => {
          this.lastCheckpoint = {
            ...cp,
            hasShield: this.player ? !!this.player.hasShield : false,
            hasBlaster: this.player ? this.player.hasBlaster : false,
            blasterAmmo: this.player ? this.player.blasterAmmo : 0
          };
          this.notifyState();
        }
      );

      // Decrement blaster cooldown
      if (this.player.blasterCooldown && this.player.blasterCooldown > 0) {
        this.player.blasterCooldown -= dt;
      }

      // Reset single-frame jump pressed trigger
      this.input.jumpPressed = false;
      this.input.jumpReleased = false;

      // Update Camera follow (smooth lerp)
      const targetCamX = this.player.x - this.canvas.width / 2;
      const targetCamY = this.player.y - this.canvas.height / 2;

      this.camera.x += (targetCamX - this.camera.x) * 0.08;
      this.camera.y += (targetCamY - this.camera.y) * 0.08;

      // Clamp camera within world bounds
      this.camera.x = Math.max(0, Math.min(this.currentLevel.worldWidth - this.canvas.width, this.camera.x));
      this.camera.y = Math.max(0, Math.min(this.currentLevel.worldHeight - this.canvas.height, this.camera.y));

      if (this.camera.shakeTime > 0) {
        this.camera.shakeTime -= dt;
      }

      // Periodically sync stats & fuel to React HUD (~12fps)
      this.hudUpdateTimer += dt;
      if (this.hudUpdateTimer >= 0.08) {
        this.hudUpdateTimer = 0;
        this.notifyState();
      }
    }

    // Always update particles
    this.particles.update(dt);
  }

  private render(dt: number) {
    this.renderer.render(
      this.currentLevel,
      this.player,
      this.camera,
      this.particles.particles,
      this.particles.popups,
      dt,
      this.settings.pixelArtMode
    );
  }

  private setupKeyboardListeners() {
    const onKeyDown = (e: KeyboardEvent) => {
      // Prevent default scrolling for arrows/space
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          this.input.left = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.input.right = true;
          break;
        case 'ArrowUp':
        case 'KeyW':
        case 'Space':
          if (!this.input.up) {
            this.input.jumpPressed = true;
          }
          this.input.up = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          this.input.down = true;
          break;
        case 'KeyR':
          if (this.gameState === 'PLAYING') {
            this.restartCurrentLevel();
          }
          break;
        case 'KeyQ':
          if (this.gameState === 'PLAYING' && this.player.hasJetpack) {
            if (this.input.up) {
              this.launchJetpack('up-left');
            } else {
              this.launchJetpack('left');
            }
          }
          break;
        case 'KeyE':
          if (this.gameState === 'PLAYING' && this.player.hasJetpack) {
            if (this.input.up) {
              this.launchJetpack('up-right');
            } else {
              this.launchJetpack('right');
            }
          }
          break;
        case 'KeyZ':
        case 'KeyC':
          if (this.gameState === 'PLAYING' && this.player.hasJetpack) {
            // Take off / unmount jetpack without explosive launch
            this.launchJetpack('drop');
          }
          break;
        case 'KeyX':
          if (this.gameState === 'PLAYING' && this.player.hasJetpack) {
            // Contextual directional unmount & launch
            if (this.input.down) {
              this.launchJetpack('down');
            } else if (this.input.up && this.input.left) {
              this.launchJetpack('up-left');
            } else if (this.input.up && this.input.right) {
              this.launchJetpack('up-right');
            } else if (this.input.up) {
              this.launchJetpack('up');
            } else if (this.input.left) {
              this.launchJetpack('left');
            } else if (this.input.right) {
              this.launchJetpack('right');
            } else if (this.player.facing === 1) {
              this.launchJetpack('right');
            } else {
              this.launchJetpack('left');
            }
          }
          break;
        case 'KeyF':
        case 'KeyJ':
          if (this.gameState === 'PLAYING') {
            this.shootBlaster();
          }
          break;
        case 'Escape':
        case 'KeyP':
          if (this.gameState === 'PLAYING') {
            this.pauseGame();
          } else if (this.gameState === 'PAUSED') {
            this.resumeGame();
          }
          break;
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          this.input.left = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.input.right = false;
          break;
        case 'ArrowUp':
        case 'KeyW':
        case 'Space':
          this.input.up = false;
          this.input.jumpReleased = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          this.input.down = false;
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
  }

  public launchJetpack(direction: LaunchDirection) {
    if (!this.player || !this.player.hasJetpack || this.player.isDead) return;

    if (direction === 'drop') {
      // Gently unmount and drop jetpack at feet as collectible
      const remainingFuel = this.player.jetpackFuel;
      this.player.hasJetpack = false;
      this.player.isJetpacking = false;
      sound.playJetpackLaunch();
      this.particles.emitSparkles(this.player.x + 12, this.player.y + 16, '#38BDF8', 12);
      this.particles.addPopup(this.player.x + 12, this.player.y - 12, 'JETPACK UNMOUNTED', '#38BDF8');
      
      const dropX = Math.round(this.player.x + (this.player.facing === 1 ? -28 : 28));
      const dropY = Math.round(this.player.y + 4);
      this.currentLevel.collectibles.push({
        id: 'dropped_jp_' + Date.now().toString(36),
        x: Math.max(20, Math.min(this.currentLevel.worldWidth - 50, dropX)),
        y: dropY,
        width: 28,
        height: 28,
        type: 'jetpack',
        value: 500
      });
      this.notifyState();
      return;
    }

    this.player.hasJetpack = false;
    this.player.isJetpacking = false;

    let vx = 0;
    let vy = -14;
    let rotation = 0;

    switch (direction) {
      case 'left':
        vx = -14;
        vy = -2.5;
        rotation = -Math.PI / 2;
        this.player.vx += 4.5; // recoil push right
        break;
      case 'up-left':
        vx = -10;
        vy = -10;
        rotation = -Math.PI / 4;
        this.player.vx += 3.0;
        this.player.vy += 2.5;
        break;
      case 'up':
        vx = 0;
        vy = -15;
        rotation = 0;
        this.player.vy += 3.5; // recoil push down
        break;
      case 'up-right':
        vx = 10;
        vy = -10;
        rotation = Math.PI / 4;
        this.player.vx -= 3.0;
        this.player.vy += 2.5;
        break;
      case 'right':
        vx = 14;
        vy = -2.5;
        rotation = Math.PI / 2;
        this.player.vx -= 4.5; // recoil push left
        break;
      case 'down':
        vx = 0;
        vy = 15;
        rotation = Math.PI;
        this.player.vy = -13; // powerful rocket jump boost upward!
        break;
    }

    sound.playJetpackLaunch();
    this.particles.emitJetpackFlame(this.player.x + 12, this.player.y + 16, this.player.facing);
    this.particles.addPopup(this.player.x + 12, this.player.y - 12, 'UNMOUNT & LAUNCH!', '#38BDF8');

    if (!this.currentLevel.launchedJetpacks) {
      this.currentLevel.launchedJetpacks = [];
    }

    this.currentLevel.launchedJetpacks.push({
      id: 'jp_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(7),
      x: this.player.x + (this.player.width - 22) / 2,
      y: this.player.y + (this.player.height - 26) / 2,
      vx,
      vy,
      width: 22,
      height: 26,
      rotation,
      fuel: this.player.jetpackFuel,
      life: 0,
      maxLife: 2.5
    });

    this.notifyState();
  }

  // Shoot Plasma Blaster weapon
  public shootBlaster() {
    if (this.gameState !== 'PLAYING' || !this.player || !this.player.hasBlaster) return;
    if ((this.player.blasterAmmo ?? 0) <= 0) {
      sound.playJetpackEmpty();
      this.particles.addPopup(this.player.x + 12, this.player.y - 12, 'OUT OF AMMO!', '#EF4444');
      return;
    }
    if ((this.player.blasterCooldown ?? 0) > 0) return;

    this.player.blasterAmmo = Math.max(0, (this.player.blasterAmmo ?? 1) - 1);
    this.player.blasterCooldown = 0.18; // rapid fire plasma shots

    sound.playBlasterShoot();

    if (!this.currentLevel.blasterBullets) {
      this.currentLevel.blasterBullets = [];
    }

    const muzzleX = this.player.x + (this.player.facing === 1 ? this.player.width + 6 : -6);
    const muzzleY = this.player.y + this.player.height * 0.45;

    let vx = this.player.facing * 16;
    let vy = 0;
    if (this.input.up && (this.input.left || this.input.right)) {
      vx = this.player.facing * 12;
      vy = -12;
    } else if (this.input.up && !this.input.left && !this.input.right) {
      vx = 0;
      vy = -16;
    }

    this.currentLevel.blasterBullets.push({
      id: 'bullet_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(7),
      x: muzzleX,
      y: muzzleY,
      vx,
      vy,
      radius: 4,
      color: '#38BDF8',
      life: 0,
      maxLife: 1.2
    });

    this.particles.emitSparkles(muzzleX, muzzleY, '#38BDF8', 8);
    this.notifyState();
  }

  // Touch controls input setters
  public setTouchInput(action: keyof InputState, value: boolean) {
    if (action === 'jumpPressed' && value) {
      this.input.up = true;
      this.input.jumpPressed = true;
    } else if (action === 'jumpReleased' && value) {
      this.input.up = false;
      this.input.jumpReleased = true;
    } else {
      (this.input[action] as boolean) = value;
    }
  }

  public resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
}
