import { 
  Player, 
  Platform, 
  Hazard, 
  Collectible, 
  Enemy, 
  LevelData, 
  InputState,
  LaunchedJetpack
} from '../types/game';
import { sound } from './audio';
import { ParticleSystem } from './particles';

export class PhysicsEngine {
  // Movement Constants
  private readonly GRAVITY = 0.55;
  private readonly MAX_FALL_SPEED = 12;
  private readonly MOVE_ACCEL = 0.9;
  private readonly MOVE_SPEED = 4.8;
  private readonly FRICTION = 0.78;
  private readonly AIR_FRICTION = 0.92;
  private readonly JUMP_FORCE = -10.8;
  private readonly SPRING_FORCE = -14.8;
  private readonly COYOTE_TIME = 0.12;
  private readonly JUMP_BUFFER = 0.12;
  private gameTime: number = 0;

  public initPlatforms(level: LevelData) {
    level.platforms.forEach(p => {
      if (p.type === 'phase') {
        const period = p.phasePeriod || 2.6;
        const offset = p.phaseOffset || 0;
        const activeTime = p.phaseActiveDuration || (period * 0.55);
        const cycle = ((this.gameTime + offset) % period + period) % period;
        const isActive = cycle < activeTime;
        p.isPhaseActive = isActive;
        p.phaseTimeLeft = isActive ? (activeTime - cycle) : (period - cycle);
        p.phaseWarning = isActive && p.phaseTimeLeft < 0.6;
      }
    });
  }

  public update(
    player: Player,
    level: LevelData,
    input: InputState,
    particles: ParticleSystem,
    dt: number,
    onPlayerDeath: () => void,
    onLevelComplete: () => void,
    onScoreAdd: (pts: number) => void,
    onCheckpointActivated?: (cp: { x: number; y: number; hasJetpack: boolean; hasShield?: boolean }) => void,
    onAcornCollected?: () => void,
    onEnemyDefeated?: (enemy: Enemy) => void
  ) {
    if (player.isDead) return;

    this.gameTime += dt;

    const fpsRatio = Math.min(2.0, dt * 60);

    // Deep Sea / Underwater Physics Detection
    const isUnderwater = !!level.isUnderwater || 
                         level.theme?.id === 'deep_sea' || 
                         (level.theme?.name ? level.theme.name.toLowerCase().includes('deep sea') || level.theme.name.toLowerCase().includes('abyssal') : false);

    // 1. Timers & Powerups
    if (player.invulnerableTimer > 0) player.invulnerableTimer -= dt;
    if (player.speedBoostTimer > 0) player.speedBoostTimer -= dt;
    if (player.jumpBoostTimer > 0) player.jumpBoostTimer -= dt;
    if (player.magnetTimer && player.magnetTimer > 0) {
      player.magnetTimer -= dt;
      if (player.magnetTimer <= 0) player.magnetTimer = 0;
    }
    if (player.gravSoundTimer && player.gravSoundTimer > 0) player.gravSoundTimer -= dt;

    if (player.coyoteTimer > 0) player.coyoteTimer -= dt;
    if (player.jumpBufferTimer > 0) player.jumpBufferTimer -= dt;

    if (input.jumpPressed) {
      player.jumpBufferTimer = this.JUMP_BUFFER;
    }

    // 2. Horizontal Movement & Acceleration
    const maxSpeed = player.speedBoostTimer > 0 ? this.MOVE_SPEED * 1.4 : this.MOVE_SPEED;
    
    if (input.left) {
      player.vx -= this.MOVE_ACCEL * fpsRatio;
      player.facing = -1;
    } else if (input.right) {
      player.vx += this.MOVE_ACCEL * fpsRatio;
      player.facing = 1;
    } else {
      // Apply friction (ice platforms have low friction; water has gentle fluid drag)
      const friction = player.isGrounded 
        ? (player.standingOnIce ? 0.96 : this.FRICTION) 
        : (isUnderwater ? 0.94 : this.AIR_FRICTION);
      player.vx *= Math.pow(friction, fpsRatio);
      if (Math.abs(player.vx) < 0.05) player.vx = 0;
    }

    // Clamp speed
    player.vx = Math.max(-maxSpeed, Math.min(maxSpeed, player.vx));

    // Footstep particles when running fast on ground
    if (player.isGrounded && Math.abs(player.vx) > 2.0) {
      particles.emitFootstep(player.x + player.width / 2, player.y + player.height, player.facing, level.theme.platformTop);
    }

    // 3. Jump Logic (Coyote Time + Jump Buffering + Variable Jump Cut + Double Jump)
    if (player.isGrounded) {
      player.coyoteTimer = this.COYOTE_TIME;
      player.canDoubleJump = true;
      player.hasDoubleJumped = false;

      // Recharging jetpack fuel while resting on the ground
      if (player.hasJetpack) {
        if (player.jetpackFuel < player.maxJetpackFuel) {
          player.jetpackFuel = Math.min(player.maxJetpackFuel, player.jetpackFuel + 45 * dt);
          particles.emitFuelRecharge(player.x + player.width / 2, player.y + player.height - 2);
        }
      }
      player.isJetpacking = false;
    }

    const canJump = player.coyoteTimer > 0;
    const wantsJump = player.jumpBufferTimer > 0 || input.jumpPressed;

    if (isUnderwater && !player.isGrounded && (wantsJump || input.jumpPressed)) {
      // CONTINUOUS UNDERWATER SWIMMING STROKE
      // Tapping jump repeatedly allows swimming upward and navigating submerged 3D space
      const swimBaseImpulse = -5.4;
      if (player.vy > 0) {
        player.vy = swimBaseImpulse;
      } else {
        player.vy = Math.max(-6.8, player.vy - 3.4);
      }

      // Forward/backward aquatic paddle propulsion
      if (input.left) {
        player.vx = Math.max(player.vx - 1.5, -this.MOVE_SPEED * 1.15);
        player.facing = -1;
      } else if (input.right) {
        player.vx = Math.min(player.vx + 1.5, this.MOVE_SPEED * 1.15);
        player.facing = 1;
      }

      player.isJumping = true;
      player.ridingPlatformId = null;
      player.ridingPlatformVy = 0;
      player.jumpBufferTimer = 0;

      // Aquatic dynamic swim squash & stretch
      player.scaleX = 0.82;
      player.scaleY = 1.28;

      sound.playSwimStroke();
      particles.emitWaterBubbles(player.x + player.width / 2, player.y + player.height - 2, 7);
      if (Math.random() < 0.22) {
        particles.addPopup(player.x + player.width / 2, player.y - 12, 'SWIM! 🫧', '#38BDF8');
      }
    } else if (wantsJump && canJump) {
      const baseJumpForce = isUnderwater ? -7.8 : this.JUMP_FORCE;
      const jumpVel = player.jumpBoostTimer > 0 ? baseJumpForce * 1.25 : baseJumpForce;
      // If jumping while riding an upward-moving platform, inherit vertical momentum for an extra crisp boost
      const platformBoost = (player.ridingPlatformVy && player.ridingPlatformVy < 0) ? player.ridingPlatformVy * 0.85 : 0;
      player.vy = jumpVel + platformBoost;
      player.isGrounded = false;
      player.isJumping = true;
      player.ridingPlatformId = null;
      player.ridingPlatformVy = 0;
      player.coyoteTimer = 0;
      player.jumpBufferTimer = 0;
      
      // Squash & Stretch on jump
      player.scaleX = 0.75;
      player.scaleY = 1.35;

      sound.playJump();
      if (isUnderwater) {
        particles.emitWaterBubbles(player.x + player.width / 2, player.y + player.height, 5);
      } else {
        particles.emitDust(player.x + player.width / 2, player.y + player.height, 6, level.theme.platformTop);
      }
    } else if (wantsJump && !canJump && !player.isGrounded && !player.hasJetpack && player.canDoubleJump !== false) {
      // Mid-air Double Jump!
      const baseDJump = isUnderwater ? -7.0 : this.JUMP_FORCE;
      const dJumpVel = player.jumpBoostTimer > 0 ? baseDJump * 1.15 : baseDJump * 0.95;
      player.vy = dJumpVel;
      player.canDoubleJump = false;
      player.hasDoubleJumped = true;
      player.isJumping = true;
      player.jumpBufferTimer = 0;

      // Squash & stretch on double jump
      player.scaleX = 0.8;
      player.scaleY = 1.3;

      sound.playDoubleJump();
      if (isUnderwater) {
        particles.emitWaterBubbles(player.x + player.width / 2, player.y + player.height, 6);
        particles.addPopup(player.x + player.width / 2, player.y - 12, 'AQUA JUMP! 🫧', '#38BDF8');
      } else {
        particles.emitDoubleJump(player.x + player.width / 2, player.y + player.height);
        particles.addPopup(player.x + player.width / 2, player.y - 12, 'DOUBLE JUMP! 🪶', '#60A5FA');
      }
    }

    // Jetpack Flight Logic (holding jump button in the air)
    if (player.hasJetpack && !player.isGrounded && input.up) {
      if (player.jetpackFuel > 0) {
        player.isJetpacking = true;
        // Jetpack upward acceleration countering gravity
        player.vy -= 1.15 * fpsRatio;
        if (player.vy < -7.0) {
          player.vy = -7.0;
        }
        player.jetpackFuel = Math.max(0, player.jetpackFuel - 25 * dt);

        sound.playJetpackThrust();
        const nozzleX = player.x + (player.facing === 1 ? player.width * 0.15 : player.width * 0.85);
        const nozzleY = player.y + player.height * 0.75;
        particles.emitJetpackFlame(nozzleX, nozzleY, player.facing);
      } else {
        player.isJetpacking = false;
        sound.playJetpackEmpty();
        const nozzleX = player.x + (player.facing === 1 ? player.width * 0.15 : player.width * 0.85);
        particles.emitJetpackSputter(nozzleX, player.y + player.height * 0.75);
      }
    } else {
      player.isJetpacking = false;
    }

    // Variable jump height cut (only active when not firing jetpack)
    if (input.jumpReleased && player.vy < -2.2 && !player.isJetpacking) {
      player.vy *= isUnderwater ? 0.65 : 0.45;
    }

    // 4. Gravity (Slower underwater physics for dreamy submerged navigation)
    const effectiveGravity = isUnderwater ? 0.24 : this.GRAVITY;
    player.vy += effectiveGravity * fpsRatio;

    // Bubble Shield Float-Glide (Holding jump/up while falling in mid-air/water)
    const floatThreshold = isUnderwater ? 0.6 : 1.2;
    if (player.hasShield && !player.isGrounded && input.up && player.vy > floatThreshold && !player.hasJetpack) {
      player.vy = isUnderwater ? 0.5 : 1.2; // Extra buoyant float glide in deep sea
      particles.emitBubbleGlider(player.x + player.width / 2, player.y + player.height);
      if (isUnderwater && Math.random() < 0.4) {
        particles.emitWaterBubbles(player.x + player.width / 2, player.y + player.height / 2, 1);
      }
    }

    const effectiveMaxFall = isUnderwater ? 4.8 : this.MAX_FALL_SPEED;
    if (player.vy > effectiveMaxFall) {
      player.vy = effectiveMaxFall;
    }

    // Underwater swimming bubbles when moving
    if (isUnderwater && (Math.abs(player.vx) > 1.0 || Math.abs(player.vy) > 1.2)) {
      if (Math.random() < 0.22) {
        particles.emitWaterBubbles(player.x + player.width / 2, player.y + player.height / 2, 1);
      }
    }

    // 5. Update Dynamic Level Elements (Moving platforms, crumbling blocks, hazards, enemies, launched jetpacks, enemy projectiles)
    this.updateLevelElements(player, level, particles, dt, fpsRatio, onScoreAdd, onEnemyDefeated, onPlayerDeath);

    // 6. Sub-step Collision Resolution for Player
    player.wasGrounded = player.isGrounded;
    const wasRidingThisFrame = !!player.ridingPlatformId;
    if (!wasRidingThisFrame) {
      player.isGrounded = false;
      player.standingOnIce = false;
    }

    // Move X and resolve
    player.x += player.vx * fpsRatio;
    this.resolveHorizontalCollisions(player, level.platforms);

    // Move Y and resolve (only if not already locked to a riding platform)
    if (!wasRidingThisFrame) {
      player.y += player.vy * fpsRatio;
    }
    this.resolveVerticalCollisions(player, level.platforms, particles, level.theme);

    // 7. Visual squash/stretch recovery
    player.scaleX += (1 - player.scaleX) * 0.15 * fpsRatio;
    player.scaleY += (1 - player.scaleY) * 0.15 * fpsRatio;

    // 8. Collectibles Check
    this.checkCollectibles(player, level.collectibles, particles, onScoreAdd, onAcornCollected);

    // 9. Checkpoints Check
    if (level.checkpoints) {
      this.checkCheckpoints(player, level.checkpoints, particles, onCheckpointActivated);
    }

    // 10. Enemies Collision Check (Stomp vs Hurt)
    this.checkEnemies(player, level.enemies, particles, onPlayerDeath, onScoreAdd, onEnemyDefeated);

    // 11. Hazards & World Bounds Check
    this.checkHazards(player, level, particles, onPlayerDeath);

    // 12. Goal Check
    this.checkGoal(player, level.goal, onLevelComplete);
  }

  private updateLevelElements(
    player: Player,
    level: LevelData, 
    particles: ParticleSystem, 
    dt: number, 
    fpsRatio: number,
    onScoreAdd: (pts: number) => void,
    onEnemyDefeated?: (enemy: Enemy) => void,
    onPlayerDeath?: () => void
  ) {
    // 1. Moving Platforms
    level.platforms.forEach(p => {
      if (p.speed && p.startX !== undefined && p.startY !== undefined) {
        // Detect if player is resting on top of this platform before it moves
        // If player is jumping (isJumping or vy < -0.5), they are leaving the platform freely
        const isJumpingAway = player.isJumping || player.vy < -0.5;
        const isStandingOnTop = 
          !player.isDead &&
          !isJumpingAway &&
          player.vy >= 0 &&
          Math.abs((player.y + player.height) - p.y) <= 8 &&
          player.x + player.width > p.x + 3 &&
          player.x < p.x + p.width - 3;

        const prevX = p.x;
        const prevY = p.y;

        if (p.distanceX && p.distanceX !== 0) {
          p.x += (p.vx || 0) * fpsRatio;
          if (p.distanceX > 0) {
            if (p.x > p.startX + p.distanceX) {
              p.x = p.startX + p.distanceX;
              p.vx = -(p.vx || p.speed);
            } else if (p.x < p.startX) {
              p.x = p.startX;
              p.vx = Math.abs(p.vx || p.speed);
            }
          }
        }
        if (p.distanceY && p.distanceY !== 0) {
          p.y += (p.vy || 0) * fpsRatio;
          const minY = Math.min(p.startY, p.startY + p.distanceY);
          const maxY = Math.max(p.startY, p.startY + p.distanceY);
          if (p.y < minY) {
            p.y = minY;
            p.vy = Math.abs(p.vy || p.speed);
          } else if (p.y > maxY) {
            p.y = maxY;
            p.vy = -Math.abs(p.vy || p.speed);
          }
        }

        const deltaX = p.x - prevX;
        const deltaY = p.y - prevY;

        // If player is standing on this platform, smoothly carry them along without falling, bouncing, or sliding
        if (isStandingOnTop) {
          player.x += deltaX;
          player.y = p.y - player.height;
          player.vy = 0;
          player.isGrounded = true;
          player.wasGrounded = true;
          player.isJumping = false;
          player.canDoubleJump = true;
          player.hasDoubleJumped = false;
          player.ridingPlatformId = p.id;
          player.ridingPlatformVy = p.vy || 0;
          player.coyoteTimer = this.COYOTE_TIME; // Guarantees jump is always immediately available!
        } else if (player.ridingPlatformId === p.id) {
          player.ridingPlatformId = null;
          player.ridingPlatformVy = 0;
        }
      }

      // Crumbling / Disappearing platforms
      if (p.type === 'crumbling') {
        const isPlayerOnPlatform = 
          !player.isDead &&
          player.vy >= 0 &&
          Math.abs((player.y + player.height) - p.y) <= 6 &&
          player.x + player.width > p.x + 2 &&
          player.x < p.x + p.width - 2;

        // When character steps on the platform, trigger crumbling immediately
        if (isPlayerOnPlatform && !p.crumbling && (!p.respawnTimer || p.respawnTimer <= 0)) {
          p.crumbling = true;
          p.crumbleTimer = 0.55; // 0.55s before disappearing
          sound.playCrumble();
          particles.emitDust(player.x + player.width / 2, p.y + 2, 8, '#78716C');
        }

        if (p.crumbling && p.crumbleTimer !== undefined) {
          p.crumbleTimer -= dt;
          // Emit cracking dust while shaking
          if (Math.random() < 0.4) {
            particles.emitDust(p.x + Math.random() * p.width, p.y + 2, 2, '#78716C');
          }

          if (p.crumbleTimer <= 0) {
            // Disintegrate & disappear!
            p.crumbling = false;
            p.crumbleTimer = undefined;
            p.respawnTimer = 2.6; // stays disappeared for 2.6s
            sound.playCrumble();
            particles.emitEnemyPop(p.x + p.width / 2, p.y + p.height / 2, '#78716C', 18);
            particles.emitDust(p.x + p.width / 2, p.y + p.height / 2, 12, '#57534E');
          }
        } else if (p.respawnTimer !== undefined && p.respawnTimer > 0) {
          p.respawnTimer -= dt;
          if (p.respawnTimer <= 0) {
            p.respawnTimer = undefined;
            p.crumbleTimer = undefined;
            p.crumbling = false;
            // Respawn dust puff
            particles.emitSparkles(p.x + p.width / 2, p.y + p.height / 2, '#A8A29E', 10);
            particles.emitDust(p.x + p.width / 2, p.y + p.height / 2, 6, '#78716C');
          }
        }
      }

      // Rhythmic Phase-Shift Disappearing Crystal Platforms
      if (p.type === 'phase') {
        const period = p.phasePeriod || 2.6;
        const offset = p.phaseOffset || 0;
        const activeTime = p.phaseActiveDuration || (period * 0.55);
        const cycle = ((this.gameTime + offset) % period + period) % period;
        const isActive = cycle < activeTime;
        p.isPhaseActive = isActive;
        p.phaseTimeLeft = isActive ? (activeTime - cycle) : (period - cycle);
        p.phaseWarning = isActive && p.phaseTimeLeft < 0.6;

        if (!isActive && player.ridingPlatformId === p.id) {
          player.ridingPlatformId = null;
          player.isGrounded = false;
        }
      }
    });

    // 2. Moving Hazards (Buzzsaws)
    level.hazards.forEach(h => {
      if (h.speed && h.startX !== undefined && h.startY !== undefined) {
        if (h.distanceX) {
          h.x += (h.vx || 0) * fpsRatio;
          if (h.x > h.startX + h.distanceX || h.x < h.startX) {
            h.vx = -(h.vx || h.speed);
          }
        }
        if (h.distanceY) {
          h.y += (h.vy || 0) * fpsRatio;
          const minY = Math.min(h.startY, h.startY + h.distanceY);
          const maxY = Math.max(h.startY, h.startY + h.distanceY);
          if (h.y < minY) {
            h.y = minY;
            h.vy = Math.abs(h.vy || h.speed);
          } else if (h.y > maxY) {
            h.y = maxY;
            h.vy = -Math.abs(h.vy || h.speed);
          }
        }
      }
    });

    // 3. Enemies Patrol & Silly Animal Behaviors
    level.enemies.forEach(e => {
      if (e.isDead) return;

      // Base patrol movement (unless rolling or preparing attack)
      e.x += e.vx * fpsRatio;

      // Min/Max patrol bounds
      if (e.minX !== undefined && e.maxX !== undefined) {
        if (e.x < e.minX) {
          e.x = e.minX;
          e.vx = Math.abs(e.vx);
          e.facing = 1;
        } else if (e.x + e.width > e.maxX) {
          e.x = e.maxX - e.width;
          e.vx = -Math.abs(e.vx);
          e.facing = -1;
        }
      }
      const isFlyer = e.type === 'flyer' || e.type === 'pigeon';

      if (isFlyer) {
        if (e.vy && e.minY !== undefined && e.maxY !== undefined) {
          e.y += e.vy * fpsRatio;
          if (e.y < e.minY) {
            e.y = e.minY;
            e.vy = Math.abs(e.vy);
          } else if (e.y + e.height > e.maxY) {
            e.y = e.maxY - e.height;
            e.vy = -Math.abs(e.vy);
          }
        }
      } else {
        // Ground Enemy Platform & Ledge Intelligence (prevents mid-air floating!)
        // 1. Ledge check: If approaching platform edge while walking, turn around!
        if (e.state !== 'jumping') {
          const frontX = e.vx > 0 ? e.x + e.width + 4 : e.x - 4;
          const feetY = e.y + e.height;
          let hasFooting = false;
          for (const p of level.platforms) {
            if ((p.type === 'crumbling' && p.respawnTimer !== undefined && p.respawnTimer > 0) || (p.type === 'phase' && p.isPhaseActive === false)) continue;
            if (frontX >= p.x && frontX <= p.x + p.width && Math.abs(p.y - feetY) <= 10) {
              hasFooting = true;
              break;
            }
          }
          if (!hasFooting) {
            e.vx = -e.vx;
            e.facing = e.vx > 0 ? 1 : -1;
          }
        }

        // 2. Gravity and Platform Snapping (ensures ground enemies stay firmly planted on platforms)
        if (e.state !== 'jumping') {
          const enemyCenterX = e.x + e.width / 2;
          const feetY = e.y + e.height;
          let restingPlat = null;
          for (const p of level.platforms) {
            if ((p.type === 'crumbling' && p.respawnTimer !== undefined && p.respawnTimer > 0) || (p.type === 'phase' && p.isPhaseActive === false)) continue;
            if (enemyCenterX >= p.x && enemyCenterX <= p.x + p.width) {
              if (feetY >= p.y - 4 && feetY <= p.y + 14) {
                restingPlat = p;
                break;
              }
            }
          }

          if (restingPlat) {
            e.y = restingPlat.y - e.height;
            e.vy = 0;
          } else {
            // Apply gravity until grounded
            e.vy = Math.min(10, (e.vy || 0) + 0.45 * fpsRatio);
            e.y += e.vy * fpsRatio;

            // Check landing on platform below
            for (const p of level.platforms) {
              if ((p.type === 'crumbling' && p.respawnTimer !== undefined && p.respawnTimer > 0) || (p.type === 'phase' && p.isPhaseActive === false)) continue;
              if (enemyCenterX >= p.x && enemyCenterX <= p.x + p.width) {
                if (e.y + e.height >= p.y && (e.y + e.height - e.vy * fpsRatio) <= p.y + 6) {
                  e.y = p.y - e.height;
                  e.vy = 0;
                  break;
                }
              }
            }

            if (e.y > level.worldHeight + 60) {
              e.isDead = true;
            }
          }
        }
      }

      // SILLY ANIMAL 1: ANTEATER (shoots fast ants along the ground)
      if (e.type === 'anteater') {
        if (e.shootTimer === undefined) e.shootTimer = 1.8 + Math.random() * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          e.shootTimer = 3.2;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x + e.width : e.x - 14;
          level.enemyProjectiles.push({
            id: `ant_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + e.height - 12,
            vx: e.facing * 3.6,
            vy: 0,
            width: 16,
            height: 12,
            type: 'ant',
            life: 0,
            maxLife: 5.0
          });
          particles.emitDust(projX, e.y + e.height - 4, 6, '#78350F');
        }
      }

      // SILLY ANIMAL 2: BEAVER (tosses rolling timber logs)
      if (e.type === 'beaver') {
        if (e.shootTimer === undefined) e.shootTimer = 2.0 + Math.random() * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          e.shootTimer = 3.4;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x + e.width : e.x - 22;
          level.enemyProjectiles.push({
            id: `log_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + 4,
            vx: e.facing * 2.8,
            vy: -3.2,
            width: 22,
            height: 16,
            type: 'log',
            rotation: 0,
            life: 0,
            maxLife: 6.0,
            bounces: 0
          });
          particles.emitDust(projX, e.y + e.height - 4, 8, '#92400E');
        }
      }

      // SILLY ANIMAL 3: HEDGEHOG (curls into spiky ball when player is near)
      if (e.type === 'hedgehog') {
        const dist = Math.hypot(player.x - (e.x + e.width / 2), player.y - (e.y + e.height / 2));
        if (dist < 130) {
          e.state = 'rolling';
          e.isSpiky = true;
          // Spin roll towards player
          e.vx = player.x < e.x ? -1.6 : 1.6;
        } else {
          e.state = 'walking';
          e.isSpiky = false;
        }
      }

      // SILLY ANIMAL 4: FROG (high spring hops)
      if (e.type === 'frog') {
        if (e.jumpTimer === undefined) e.jumpTimer = 1.5 + Math.random() * 1.2;
        e.jumpTimer -= dt;
        if (e.jumpTimer <= 0 && (!e.vy || e.vy === 0)) {
          e.jumpTimer = 2.4 + Math.random() * 0.8;
          e.vy = -7.5;
          e.state = 'jumping';
          particles.emitDust(e.x + e.width / 2, e.y + e.height, 5, '#10B981');
        }

        if (e.vy !== 0 || e.state === 'jumping') {
          e.vy += 0.45 * fpsRatio;
          e.y += e.vy * fpsRatio;

          // Check if landing on any platform
          const frogBottom = e.y + e.height;
          const frogCenterX = e.x + e.width / 2;
          let landed = false;
          for (const p of level.platforms) {
            if ((p.type === 'crumbling' && p.respawnTimer !== undefined && p.respawnTimer > 0) || (p.type === 'phase' && p.isPhaseActive === false)) continue;
            if (frogCenterX >= p.x && frogCenterX <= p.x + p.width) {
              if (frogBottom >= p.y && (frogBottom - e.vy * fpsRatio) <= p.y + 8 && e.vy > 0) {
                e.y = p.y - e.height;
                e.vy = 0;
                e.state = 'idle';
                landed = true;
                break;
              }
            }
          }
          if (!landed && e.maxY !== undefined && e.y >= e.maxY - e.height) {
            e.y = e.maxY - e.height;
            e.vy = 0;
            e.state = 'idle';
          }
        }
      }

      // SILLY ANIMAL 5: PIGEON (swoop flapping)
      if (e.type === 'pigeon') {
        e.y += Math.sin(this.gameTime * 4 + e.x * 0.04) * 1.8 * fpsRatio;
      }

      // SILLY ANIMAL 6: SKUNK (periodically stops and sprays giggly stink clouds behind it)
      if (e.type === 'skunk') {
        if (e.shootTimer === undefined) e.shootTimer = 2.0 + Math.random() * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          e.shootTimer = 3.8;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x - 12 : e.x + e.width;
          level.enemyProjectiles.push({
            id: `stink_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + 4,
            vx: -e.facing * 1.5,
            vy: -0.6,
            width: 24,
            height: 24,
            type: 'stink_cloud',
            life: 0,
            maxLife: 4.5
          });
          particles.emitSparkles(projX + 12, e.y + 8, '#84CC16', 8);
          particles.addPopup(e.x + e.width / 2, e.y - 10, 'PUFF! 🦨', '#84CC16');
        }
      }

      // SILLY ANIMAL 7: GOOSE (fast aggressive charge + sonic honk shockwave)
      if (e.type === 'goose') {
        // Fast runner
        e.vx = e.facing * 2.6;
        if (e.shootTimer === undefined) e.shootTimer = 2.4 + Math.random() * 2.0;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          e.shootTimer = 4.2;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x + e.width : e.x - 24;
          level.enemyProjectiles.push({
            id: `honk_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + 2,
            vx: e.facing * 4.4,
            vy: 0,
            width: 26,
            height: 26,
            type: 'honk_wave',
            life: 0,
            maxLife: 3.2
          });
          sound.playHit();
          particles.emitSparkles(projX + 12, e.y + 12, '#F97316', 8);
          particles.addPopup(e.x + e.width / 2, e.y - 12, 'HONK! 🪿', '#F97316');
        }
      }

      // NEW FIRE ENEMY: FIRE IMP (spits leaping fireballs)
      if (e.type === 'fire_imp') {
        if (e.shootTimer === undefined) e.shootTimer = 1.8 + Math.random() * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          e.shootTimer = 3.2;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x + e.width : e.x - 18;
          level.enemyProjectiles.push({
            id: `fireball_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + 4,
            vx: e.facing * 3.2,
            vy: -1.8,
            width: 18,
            height: 18,
            type: 'fireball',
            rotation: 0,
            life: 0,
            maxLife: 5.0,
            bounces: 0
          });
          particles.emitSparkles(projX, e.y + 8, '#F97316', 8);
          particles.addPopup(e.x + e.width / 2, e.y - 10, 'BURN! 🔥', '#EA580C');
        }
      }

      // NEW ICE ENEMY: FROST YETI (hurls rolling snowballs)
      if (e.type === 'frost_yeti') {
        if (e.shootTimer === undefined) e.shootTimer = 2.0 + Math.random() * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0) {
          e.shootTimer = 3.4;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x + e.width : e.x - 22;
          level.enemyProjectiles.push({
            id: `snowball_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + 6,
            vx: e.facing * 3.0,
            vy: -1.6,
            width: 20,
            height: 20,
            type: 'snowball',
            rotation: 0,
            life: 0,
            maxLife: 5.5,
            bounces: 0
          });
          particles.emitSparkles(projX, e.y + 10, '#38BDF8', 10);
          particles.addPopup(e.x + e.width / 2, e.y - 12, 'SNOWBALL! ❄️', '#38BDF8');
        }
      }

      // NEW AQUATIC ENEMY: SEA URCHIN (floating or patrolling spiky hazard with undulating venom spines)
      if (e.type === 'urchin') {
        e.isSpiky = true; // Urchins are permanently covered in sharp venomous quills
        if (e.minY !== undefined && e.maxY !== undefined) {
          // Floating in the water column
          e.y += Math.sin(this.gameTime * 2.4 + e.x * 0.05) * 1.2 * fpsRatio;
          if (e.y < e.minY) e.y = e.minY;
          if (e.y > e.maxY - e.height) e.y = e.maxY - e.height;
        } else {
          // Subtle marine bobbing
          e.y += Math.sin(this.gameTime * 3.0 + e.x * 0.02) * 0.4 * fpsRatio;
        }
        if (Math.random() < 0.03) {
          particles.emitWaterBubbles(e.x + e.width / 2, e.y + 4, 1);
        }
      }

      // NEW PRISMATIC ENEMY: CRYSTAL GOLEM (Faceted amethyst automaton firing razor-sharp crystal shards)
      if (e.type === 'crystal_golem') {
        e.isSpiky = true; // Crystalline shoulder clusters prevent direct stomping!
        // Face player if nearby
        const distToPlayer = Math.hypot(player.x - (e.x + e.width / 2), player.y - (e.y + e.height / 2));
        if (distToPlayer < 400) {
          e.facing = player.x < e.x ? -1 : 1;
        }

        if (e.shootTimer === undefined) e.shootTimer = 2.0 + Math.random() * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0 && distToPlayer < 440) {
          e.shootTimer = 3.5;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x + e.width : e.x - 22;
          level.enemyProjectiles.push({
            id: `shard_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + 6,
            vx: e.facing * 3.6,
            vy: 0,
            width: 20,
            height: 16,
            type: 'crystal_shard',
            rotation: 0,
            life: 0,
            maxLife: 4.8,
            bounces: 0
          });
          particles.emitSparkles(projX, e.y + 8, '#C084FC', 14);
          particles.emitSparkles(projX, e.y + 8, '#06B6D4', 10);
          particles.addPopup(e.x + e.width / 2, e.y - 12, 'CRYSTAL SHARD! 💎', '#C084FC');
        }
      }

      // NEW PRISMATIC ENEMY: CRYSTAL BAT (Sinusoidal cavern swooper)
      if (e.type === 'crystal_bat') {
        e.y += Math.sin(this.gameTime * 4.2 + e.x * 0.035) * 2.2 * fpsRatio;
        if (Math.random() < 0.05) {
          particles.emitSparkles(e.x + e.width / 2, e.y + e.height / 2, '#C084FC', 1);
        }
      }

      // NEW TWILIGHT DUNES ENEMY: DUNE SCORPION (Armored arachnid firing whirling sand bursts)
      if (e.type === 'dune_scorpion') {
        e.isSpiky = true; // Venomous stinger protects against overhead stomps!
        const distToPlayer = Math.hypot(player.x - (e.x + e.width / 2), player.y - (e.y + e.height / 2));
        if (distToPlayer < 380) {
          e.facing = player.x < e.x ? -1 : 1;
        }

        if (e.shootTimer === undefined) e.shootTimer = 1.8 + Math.random() * 1.5;
        e.shootTimer -= dt;
        if (e.shootTimer <= 0 && distToPlayer < 420) {
          e.shootTimer = 3.2;
          level.enemyProjectiles = level.enemyProjectiles || [];
          const projX = e.facing === 1 ? e.x + e.width : e.x - 20;
          level.enemyProjectiles.push({
            id: `sand_${Date.now()}_${Math.random()}`,
            x: projX,
            y: e.y + 8,
            vx: e.facing * 3.4,
            vy: 0,
            width: 18,
            height: 18,
            type: 'sand_burst',
            rotation: 0,
            life: 0,
            maxLife: 4.5,
            bounces: 0
          });
          particles.emitSparkles(projX, e.y + 8, '#F59E0B', 12);
          particles.emitSparkles(projX, e.y + 8, '#FEF3C7', 8);
          particles.addPopup(e.x + e.width / 2, e.y - 12, 'SAND BURST! 🦂', '#F59E0B');
        }
      }
    });

    // 3.8 Update Enemy Projectiles (ants, tumbling logs, stink clouds, honk waves, fireballs)
    if (level.enemyProjectiles && level.enemyProjectiles.length > 0) {
      for (let i = level.enemyProjectiles.length - 1; i >= 0; i--) {
        const ep = level.enemyProjectiles[i];
        ep.life += dt;

        if (ep.type === 'fireball') {
          // Bouncing spinning fireball
          ep.vy += 0.28 * fpsRatio;
          ep.x += ep.vx * fpsRatio;
          ep.y += ep.vy * fpsRatio;
          ep.rotation = (ep.rotation || 0) + (ep.vx > 0 ? 0.22 : -0.22) * fpsRatio;
          if (Math.random() < 0.4) {
            particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height / 2, '#F97316', 2);
          }

          // Platform bounces
          for (const p of level.platforms) {
            if (
              ep.x + ep.width > p.x &&
              ep.x < p.x + p.width &&
              ep.y + ep.height >= p.y &&
              ep.y + ep.height <= p.y + 16 &&
              ep.vy > 0
            ) {
              ep.y = p.y - ep.height;
              ep.vy = -Math.abs(ep.vy) * 0.7;
              ep.bounces = (ep.bounces || 0) + 1;
              particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height, '#F59E0B', 4);
              break;
            }
          }
        } else if (ep.type === 'log') {
          ep.vy += 0.35 * fpsRatio;
          ep.x += ep.vx * fpsRatio;
          ep.y += ep.vy * fpsRatio;
          ep.rotation = (ep.rotation || 0) + (ep.vx > 0 ? 0.16 : -0.16) * fpsRatio;

          // Platform bounces
          for (const p of level.platforms) {
            if (
              ep.x + ep.width > p.x &&
              ep.x < p.x + p.width &&
              ep.y + ep.height >= p.y &&
              ep.y + ep.height <= p.y + 16 &&
              ep.vy > 0
            ) {
              ep.y = p.y - ep.height;
              ep.vy = -Math.abs(ep.vy) * 0.55;
              ep.bounces = (ep.bounces || 0) + 1;
              particles.emitDust(ep.x + ep.width / 2, ep.y + ep.height, 4, '#78350F');
              break;
            }
          }
        } else if (ep.type === 'stink_cloud') {
          // Drifts slowly upward with wavy float
          ep.x += ep.vx * fpsRatio;
          ep.y += (ep.vy + Math.sin(ep.life * 4) * 0.5) * fpsRatio;
          particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height / 2, '#84CC16', 1);
        } else if (ep.type === 'honk_wave') {
          // Sonic honk shockwave expands and speeds forward
          ep.x += ep.vx * fpsRatio;
          ep.width = 26 + ep.life * 6;
          ep.height = 26 + ep.life * 6;
        } else if (ep.type === 'snowball') {
          // Rolling & bouncing packed snow boulder
          ep.vy += 0.32 * fpsRatio;
          ep.x += ep.vx * fpsRatio;
          ep.y += ep.vy * fpsRatio;
          ep.rotation = (ep.rotation || 0) + (ep.vx > 0 ? 0.18 : -0.18) * fpsRatio;
          if (Math.random() < 0.4) {
            particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height / 2, '#BAE6FD', 2);
          }

          // Platform bounces
          for (const p of level.platforms) {
            if (
              ep.x + ep.width > p.x &&
              ep.x < p.x + p.width &&
              ep.y + ep.height >= p.y &&
              ep.y + ep.height <= p.y + 16 &&
              ep.vy > 0
            ) {
              ep.y = p.y - ep.height;
              ep.vy = -Math.abs(ep.vy) * 0.5;
              ep.bounces = (ep.bounces || 0) + 1;
              particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height, '#E0F2FE', 5);
              break;
            }
          }
        } else if (ep.type === 'crystal_shard') {
          // Swift spinning multifaceted crystal prism
          ep.x += ep.vx * fpsRatio;
          ep.rotation = (ep.rotation || 0) + (ep.vx > 0 ? 0.28 : -0.28) * fpsRatio;
          if (Math.random() < 0.3) {
            particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height / 2, '#C084FC', 1);
            particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height / 2, '#06B6D4', 1);
          }
        } else if (ep.type === 'sand_burst') {
          // Whirling spinning sand burst
          ep.x += ep.vx * fpsRatio;
          ep.rotation = (ep.rotation || 0) + (ep.vx > 0 ? 0.32 : -0.32) * fpsRatio;
          if (Math.random() < 0.3) {
            particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height / 2, '#F59E0B', 1);
            particles.emitSparkles(ep.x + ep.width / 2, ep.y + ep.height / 2, '#FEF3C7', 1);
          }
        } else {
          // Ant: crawls forward along ground
          ep.x += ep.vx * fpsRatio;
          for (const p of level.platforms) {
            if (
              ep.x + ep.width > p.x &&
              ep.x < p.x + p.width &&
              ep.y + ep.height >= p.y - 6 &&
              ep.y + ep.height <= p.y + 12
            ) {
              ep.y = p.y - ep.height;
              break;
            }
          }
        }

        // Collision with Player
        if (this.isOverlapping(player, ep)) {
          const playerBottom = player.y + player.height;
          // Player stomping on ant: squish ant!
          if (ep.type === 'ant' && player.vy > 0 && playerBottom <= ep.y + ep.height * 0.5 + 8) {
            player.vy = -6.5;
            sound.playStomp();
            particles.emitEnemyPop(ep.x + ep.width / 2, ep.y + ep.height / 2, '#EF4444', 10);
            particles.addPopup(ep.x + ep.width / 2, ep.y, 'ANT SQUISHED! +100', '#EF4444');
            onScoreAdd(100);
            level.enemyProjectiles.splice(i, 1);
            continue;
          }

          // Otherwise player hit by projectile
          if (player.invulnerableTimer <= 0) {
            if (player.hasShield) {
              this.popPlayerShield(player, particles);
              level.enemyProjectiles.splice(i, 1);
              continue;
            } else if (onPlayerDeath) {
              this.killPlayer(player, particles, onPlayerDeath);
              level.enemyProjectiles.splice(i, 1);
              continue;
            }
          }
        }

        // Collision with Blaster Bullets
        if (level.blasterBullets && level.blasterBullets.length > 0) {
          let destroyed = false;
          for (let bi = level.blasterBullets.length - 1; bi >= 0; bi--) {
            const bb = level.blasterBullets[bi];
            const bbBox = { x: bb.x - bb.radius, y: bb.y - bb.radius, width: bb.radius * 2, height: bb.radius * 2 };
            if (this.isOverlapping(bbBox, ep)) {
              sound.playBlasterHit();
              const popColor = ep.type === 'snowball' ? '#BAE6FD' : (ep.type === 'fireball' ? '#F97316' : (ep.type === 'log' ? '#78350F' : (ep.type === 'stink_cloud' ? '#84CC16' : (ep.type === 'honk_wave' ? '#F97316' : '#EF4444'))));
              const popLabel = ep.type === 'snowball' ? 'SNOWBALL SHATTERED! +150' : (ep.type === 'fireball' ? 'FIRE EXTINGUISHED! +150' : (ep.type === 'log' ? 'LOG SMASHED! +150' : (ep.type === 'stink_cloud' ? 'FUMES DISPERSED! +120' : (ep.type === 'honk_wave' ? 'HONK CANCELLED! +150' : 'ANT BLASTED! +100'))));
              particles.emitEnemyPop(ep.x + ep.width / 2, ep.y + ep.height / 2, popColor, 12);
              particles.addPopup(ep.x + ep.width / 2, ep.y, popLabel, '#38BDF8');
              onScoreAdd(ep.type === 'log' || ep.type === 'snowball' || ep.type === 'fireball' ? 150 : 100);
              level.blasterBullets.splice(bi, 1);
              level.enemyProjectiles.splice(i, 1);
              destroyed = true;
              break;
            }
          }
          if (destroyed) continue;
        }

        // Expire off-screen or max life
        if (ep.life >= ep.maxLife || ep.x < -100 || ep.x > level.worldWidth + 100 || ep.y > level.worldHeight + 100) {
          level.enemyProjectiles.splice(i, 1);
        }
      }
    }

    // 3.5 Dynamic Collectibles Respawn (Mid-air fuel canisters regeneration)
    level.collectibles.forEach(c => {
      if (c.collected && c.respawnTimer !== undefined && c.respawnTimer > 0) {
        c.respawnTimer -= dt;
        if (c.respawnTimer <= 0) {
          c.collected = false;
          c.respawnTimer = undefined;
          if (c.type === 'jetpack_fuel') {
            particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#34D399', 10);
          }
        }
      }
    });

    // 4. Update Launched Jetpacks (Rocket projectiles)
    if (level.launchedJetpacks && level.launchedJetpacks.length > 0) {
      for (let i = level.launchedJetpacks.length - 1; i >= 0; i--) {
        const jp = level.launchedJetpacks[i];
        jp.life += dt;
        jp.x += jp.vx * fpsRatio;
        jp.y += jp.vy * fpsRatio;

        // Blazing rocket thruster exhaust particles
        const speed = Math.hypot(jp.vx, jp.vy);
        const normVx = speed > 0 ? jp.vx / speed : 0;
        const normVy = speed > 0 ? jp.vy / speed : 1;
        const flameOffsetDist = jp.height * 0.55;
        const flameX = jp.x + jp.width / 2 - normVx * flameOffsetDist;
        const flameY = jp.y + jp.height / 2 - normVy * flameOffsetDist;
        particles.emitJetpackFlame(flameX, flameY, normVx > 0 ? -1 : 1);

        let exploded = false;

        // Check enemy collision (Rocket Strike!)
        for (const enemy of level.enemies) {
          if (enemy.isDead) continue;
          if (this.isOverlapping(jp, enemy)) {
            enemy.isDead = true;
            if (onEnemyDefeated) onEnemyDefeated(enemy);
            sound.playExplosion();
            particles.emitEnemyPop(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, '#EF4444', 22);
            particles.emitSparkles(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, '#38BDF8', 16);
            particles.addPopup(enemy.x + enemy.width / 2, enemy.y, 'ROCKET STRIKE! +500', '#F43F5E');
            onScoreAdd(500);
            this.explodeJetpack(jp, level, particles);
            level.launchedJetpacks.splice(i, 1);
            exploded = true;
            break;
          }
        }
        if (exploded) continue;

        // Check solid platform collision
        for (const p of level.platforms) {
          if (p.type === 'one-way' || (p.type === 'phase' && p.isPhaseActive === false)) continue;
          if (this.isOverlapping(jp, p)) {
            this.explodeJetpack(jp, level, particles);
            level.launchedJetpacks.splice(i, 1);
            exploded = true;
            break;
          }
        }
        if (exploded) continue;

        // Check world boundaries or max flight duration
        if (
          jp.life >= jp.maxLife || 
          jp.x < 0 || 
          jp.x > level.worldWidth || 
          jp.y < -50 || 
          jp.y > level.worldHeight
        ) {
          this.explodeJetpack(jp, level, particles);
          level.launchedJetpacks.splice(i, 1);
        }
      }
    }

    // 5. Update Blaster Laser Projectiles
    if (level.blasterBullets && level.blasterBullets.length > 0) {
      for (let i = level.blasterBullets.length - 1; i >= 0; i--) {
        const b = level.blasterBullets[i];
        b.life += dt;
        b.x += b.vx * fpsRatio;
        b.y += b.vy * fpsRatio;

        // Plasma trail sparkles (only for plasma blaster; keep solid snowballs clean)
        if (!b.isSnowball) {
          particles.emitSparkles(b.x, b.y, b.color || '#38BDF8', 2);
        }

        let hit = false;
        // Check enemy hit
        for (const enemy of level.enemies) {
          if (enemy.isDead) continue;
          if (
            b.x >= enemy.x &&
            b.x <= enemy.x + enemy.width &&
            b.y >= enemy.y &&
            b.y <= enemy.y + enemy.height
          ) {
            enemy.isDead = true;
            if (onEnemyDefeated) onEnemyDefeated(enemy);
            sound.playBlasterHit();
            const popColor = b.isSnowball ? '#BAE6FD' : '#EF4444';
            particles.emitEnemyPop(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, popColor, b.isSnowball ? 12 : 20);
            if (!b.isSnowball) {
              particles.emitSparkles(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, '#38BDF8', 18);
            }
            const popText = b.isSnowball ? 'FROST SMASH! +300' : 'BLASTED! +300';
            particles.addPopup(enemy.x + enemy.width / 2, enemy.y, popText, '#38BDF8');
            onScoreAdd(300);
            level.blasterBullets.splice(i, 1);
            hit = true;
            break;
          }
        }
        if (hit) continue;

        // Check solid platform collision
        for (const p of level.platforms) {
          if (p.type === 'one-way' || (p.type === 'phase' && p.isPhaseActive === false)) continue;
          if (
            b.x >= p.x &&
            b.x <= p.x + p.width &&
            b.y >= p.y &&
            b.y <= p.y + p.height
          ) {
            sound.playBlasterHit();
            particles.emitSparkles(b.x, b.y, b.isSnowball ? '#FFFFFF' : '#38BDF8', b.isSnowball ? 3 : 8);
            level.blasterBullets.splice(i, 1);
            hit = true;
            break;
          }
        }
        if (hit) continue;

        // Check boundaries or expiry
        if (b.life >= b.maxLife || b.x < 0 || b.x > level.worldWidth || b.y < -50 || b.y > level.worldHeight + 50) {
          level.blasterBullets.splice(i, 1);
        }
      }
    }
  }

  private explodeJetpack(jp: LaunchedJetpack, level: LevelData, particles: ParticleSystem) {
    sound.playExplosion();
    particles.emitEnemyPop(jp.x + jp.width / 2, jp.y + jp.height / 2, '#F97316', 18);
    particles.emitSparkles(jp.x + jp.width / 2, jp.y + jp.height / 2, '#38BDF8', 14);

    // Drops as a pickable jetpack item on the ground/platform near the explosion
    const dropX = Math.max(20, Math.min(level.worldWidth - 40, jp.x));
    const dropY = Math.max(40, Math.min(level.worldHeight - 40, jp.y));
    level.collectibles.push({
      id: 'c_drop_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(7),
      x: dropX,
      y: dropY,
      width: 28,
      height: 28,
      type: 'jetpack',
      value: 100
    });
    particles.addPopup(dropX + 14, dropY - 14, 'JETPACK DROPPED', '#38BDF8');
  }

  private resolveHorizontalCollisions(player: Player, platforms: Platform[]) {
    for (const p of platforms) {
      if (p.type === 'one-way' || p.type === 'anti_grav' || p.type === 'phase') continue; // Pass-through on X for floating ledges/phase slabs
      if (p.id === player.ridingPlatformId) continue; // Don't block horizontal movement against the platform you are riding
      if (p.type === 'crumbling' && p.respawnTimer !== undefined && p.respawnTimer > 0) continue;

      // Only check side wall collision if the player's body actually hits the side of the platform,
      // NOT when the player is resting or standing on the top surface
      const playerBottom = player.y + player.height;
      if (playerBottom <= p.y + 6) continue;
      if (player.y >= p.y + p.height - 4) continue;

      if (this.isOverlapping(player, p)) {
        if (player.vx > 0) {
          player.x = p.x - player.width;
          player.vx = 0;
        } else if (player.vx < 0) {
          player.x = p.x + p.width;
          player.vx = 0;
        }
      }
    }
  }

  private resolveVerticalCollisions(
    player: Player, 
    platforms: Platform[], 
    particles: ParticleSystem,
    theme: LevelData['theme']
  ) {
    for (const p of platforms) {
      if (p.type === 'crumbling' && p.respawnTimer !== undefined && p.respawnTimer > 0) continue;

      // PHASE / DISAPPEARING PLATFORMS
      if (p.type === 'phase') {
        if (!p.isPhaseActive) {
          // If player was riding this platform, and it became inactive, detach immediately
          if (player.ridingPlatformId === p.id) {
            player.ridingPlatformId = null;
            player.isGrounded = false;
          }
          continue; // Inactive: pass straight through!
        }

        // When active, acts as a firm stepping stone
        const prevBottom = player.y - player.vy + player.height;
        const playerBottom = player.y + player.height;
        const isLanding = player.vy >= 0 && prevBottom <= p.y + 14 && playerBottom >= p.y - 2;
        const isHorizAligned = player.x + player.width > p.x + 1 && player.x < p.x + p.width - 1;

        if ((this.isOverlapping(player, p) && player.vy >= 0) || (isLanding && isHorizAligned)) {
          player.y = p.y - player.height;
          player.vy = 0;
          player.isGrounded = true;
          player.isJumping = false;
          player.canDoubleJump = true;
          player.hasDoubleJumped = false;
          player.ridingPlatformId = p.id;
          player.coyoteTimer = this.COYOTE_TIME;

          if (!player.wasGrounded) {
            player.scaleX = 1.3;
            player.scaleY = 0.75;
            sound.playJump();
            particles.emitDust(player.x + player.width / 2, player.y + player.height, 4, theme.platformTop);
          }
        } else if (player.ridingPlatformId === p.id) {
          // If player has walked off the platform boundaries
          if (!isHorizAligned) {
            player.ridingPlatformId = null;
          }
        }
        continue;
      }

      // ONE-WAY Platforms
      if (p.type === 'one-way') {
        // Only collide when moving downwards and player's feet were previously above the top edge
        const prevBottom = player.y - player.vy + player.height;
        if (player.vy >= 0 && prevBottom <= p.y + 8 && this.isOverlapping(player, p)) {
          player.y = p.y - player.height;
          player.vy = 0;
          player.isGrounded = true;
          player.isJumping = false;
          player.canDoubleJump = true;
          player.hasDoubleJumped = false;
          player.coyoteTimer = this.COYOTE_TIME;
        }
        continue;
      }

      // ANTI-GRAVITY TRACTOR BEAM PLATFORMS
      if (p.type === 'anti_grav') {
        if (this.isOverlapping(player, p)) {
          // Buoyant anti-gravity upward tractor force
          player.vy = Math.max(-7.4, player.vy - 0.95);
          player.isGrounded = false;
          player.isJumping = true;
          player.canDoubleJump = true;
          player.hasDoubleJumped = false;
          player.ridingPlatformId = null;

          // Sweeping mobile tractor beam horizontal momentum
          if (p.vx) {
            player.x += p.vx;
          }

          // Ion particles rising inside beam
          if (Math.random() < 0.35) {
            particles.emitDust(
              player.x + Math.random() * player.width, 
              player.y + player.height * 0.8, 
              2, 
              '#38BDF8'
            );
          }
          if (sound && (!player.gravSoundTimer || player.gravSoundTimer <= 0)) {
            sound.playGravBeam();
            player.gravSoundTimer = 0.28;
          }
        }
        continue;
      }

      // STANDARD SOLID, BOUNCY & CRUMBLING PLATFORMS
      if (this.isOverlapping(player, p)) {
        if (player.vy >= 0) {
          // Landing on top
          player.y = p.y - player.height;
          
          if (p.type === 'bouncy') {
            // High spring bounce!
            player.vy = this.SPRING_FORCE;
            player.isGrounded = false;
            player.isJumping = true;
            player.canDoubleJump = true;
            player.hasDoubleJumped = false;
            player.ridingPlatformId = null;
            player.scaleX = 0.65;
            player.scaleY = 1.45;
            sound.playSpring();
            particles.emitDust(player.x + player.width / 2, player.y + player.height, 8, '#EF4444');
          } else {
            // Normal landing
            player.vy = 0;
            player.isGrounded = true;
            player.standingOnIce = p.type === 'ice';
            player.isJumping = false;
            player.canDoubleJump = true;
            player.hasDoubleJumped = false;
            player.coyoteTimer = this.COYOTE_TIME;

            // Landing squash effect
            if (!player.wasGrounded) {
              player.scaleX = 1.3;
              player.scaleY = 0.75;
              sound.playJump(); // subtle tap or dust
              particles.emitDust(player.x + player.width / 2, player.y + player.height, 4, theme.platformTop);
            }

            // Trigger crumbling
            if (p.type === 'crumbling' && !p.crumbling && (!p.respawnTimer || p.respawnTimer <= 0)) {
              p.crumbling = true;
              p.crumbleTimer = 0.55;
              sound.playCrumble();
              particles.emitDust(player.x + player.width / 2, p.y + 2, 8, '#78716C');
            }
          }
        } else if (player.vy < 0) {
          // Hitting head on ceiling: only if player's head was previously BELOW the platform bottom
          const prevTop = player.y - player.vy;
          if (prevTop >= p.y + p.height - 6) {
            player.y = p.y + p.height;
            player.vy = 0;
          }
        }
      }
    }
  }

  private checkCollectibles(
    player: Player, 
    collectibles: Collectible[], 
    particles: ParticleSystem,
    onScoreAdd: (pts: number) => void,
    onAcornCollected?: () => void
  ) {
    // PRISMATIC MAGNET ATTRACTION FIELD (pulls coins, gems, fuel, ammo, acorns)
    if (player.magnetTimer && player.magnetTimer > 0) {
      const px = player.x + player.width / 2;
      const py = player.y + player.height / 2;
      const magnetRange = 320;

      collectibles.forEach(c => {
        if (c.collected) return;
        const cx = c.x + c.width / 2;
        const cy = c.y + c.height / 2;
        const dx = px - cx;
        const dy = py - cy;
        const dist = Math.hypot(dx, dy);

        if (dist < magnetRange && dist > 1) {
          const pullForce = Math.min(16, (1 - dist / magnetRange) * 13 + 5);
          c.x += (dx / dist) * pullForce;
          c.y += (dy / dist) * pullForce;
          if (Math.random() < 0.2) {
            particles.emitSparkles(cx, cy, '#C084FC', 1);
            particles.emitSparkles(cx, cy, '#06B6D4', 1);
          }
        }
      });
    }

    collectibles.forEach(c => {
      if (c.collected) return;
      if (this.isOverlapping(player, c)) {
        c.collected = true;
        onScoreAdd(c.value);

        if (c.type === 'coin') {
          sound.playCoin();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#FBBF24', 8);
          particles.addPopup(c.x + c.width / 2, c.y, '+100', '#FBBF24');
        } else if (c.type === 'gem') {
          sound.playGem();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#A855F7', 14);
          particles.addPopup(c.x + c.width / 2, c.y, '+500', '#C084FC');
        } else if (c.type === 'acorn') {
          sound.playAcorn();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#F59E0B', 24);
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#FDE047', 16);
          particles.addPopup(c.x + c.width / 2, c.y - 14, '🌰 GOLDEN ACORN! +1500', '#F59E0B');
          if (onAcornCollected) {
            onAcornCollected();
          }
        } else if (c.type === 'snow_cannon') {
          player.hasSnowCannon = true;
          player.snowCannonCooldown = 0;
          sound.playPowerup();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#38BDF8', 30);
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#FFFFFF', 20);
          particles.addPopup(c.x + c.width / 2, c.y - 14, '❄️ SNOW CANNON! [HOLD FIRE]', '#38BDF8');
        } else if (c.type === 'blaster') {
          player.hasBlaster = true;
          player.blasterAmmo = 30;
          player.maxBlasterAmmo = 30;
          sound.playBlasterShoot();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#38BDF8', 24);
          particles.addPopup(c.x + c.width / 2, c.y - 12, 'PLASMA BLASTER! [F / FIRE]', '#38BDF8');
        } else if (c.type === 'blaster_ammo') {
          player.hasBlaster = true;
          player.blasterAmmo = Math.min(30, (player.blasterAmmo || 0) + 15);
          player.maxBlasterAmmo = 30;
          sound.playFuelRefill();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#38BDF8', 16);
          particles.addPopup(c.x + c.width / 2, c.y - 12, '+15 AMMO', '#38BDF8');
        } else if (c.type === 'jetpack') {
          player.hasJetpack = true;
          player.jetpackFuel = player.maxJetpackFuel;
          sound.playJetpackPickup();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#38BDF8', 24);
          particles.addPopup(c.x + c.width / 2, c.y - 12, 'JETPACK EQUIPPED! [HOLD JUMP]', '#38BDF8');
        } else if (c.type === 'jetpack_fuel') {
          if (player.hasJetpack) {
            player.jetpackFuel = player.maxJetpackFuel;
            sound.playFuelRefill();
            particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#10B981', 18);
            particles.addPopup(c.x + c.width / 2, c.y - 12, '+FUEL (FULL TANK)', '#34D399');
          } else {
            // Fuel gives bonus points but NEVER grants a jetpack!
            sound.playCoin();
            particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#94A3B8', 12);
            particles.addPopup(c.x + c.width / 2, c.y - 12, '+200 PTS (NO JETPACK)', '#94A3B8');
          }
          c.respawnTimer = 4.0; // Regenerate fuel canisters after 4s so flight corridors never go dry
        } else if (c.type === 'powerup_speed') {
          player.speedBoostTimer = 8;
          sound.playGem();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#38BDF8', 12);
          particles.addPopup(c.x + c.width / 2, c.y, 'SPEED BOOST!', '#38BDF8');
        } else if (c.type === 'powerup_jump') {
          player.jumpBoostTimer = 8;
          sound.playGem();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#F59E0B', 12);
          particles.addPopup(c.x + c.width / 2, c.y, 'SUPER JUMP!', '#F59E0B');
        } else if (c.type === 'bubble_shield') {
          player.hasShield = true;
          sound.playShieldPickup();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#38BDF8', 24);
          particles.addPopup(c.x + c.width / 2, c.y - 12, 'BUBBLE SHIELD! [HOLD JUMP TO GLIDE]', '#38BDF8');
        } else if (c.type === 'powerup_magnet') {
          player.magnetTimer = 20;
          sound.playMagnetActivate();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#A855F7', 30);
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#06B6D4', 20);
          particles.addPopup(c.x + c.width / 2, c.y - 14, '🧲 PRISMATIC MAGNET! [20s]', '#C084FC');
        }
      }
    });
  }

  private checkCheckpoints(
    player: Player, 
    checkpoints: NonNullable<LevelData['checkpoints']>, 
    particles: ParticleSystem,
    onCheckpointActivated?: (cp: { x: number; y: number; hasJetpack: boolean; hasShield?: boolean }) => void
  ) {
    checkpoints.forEach(cp => {
      if (!cp.activated && this.isOverlapping(player, cp)) {
        cp.activated = true;
        // Position player feet safely on top of platform at the base of the checkpoint flag
        const groundY = cp.y + cp.height;
        player.respawnX = Math.round(cp.x + (cp.width - player.width) / 2);
        player.respawnY = Math.round(groundY - player.height);
        sound.playCheckpoint();
        particles.emitSparkles(cp.x + cp.width / 2, cp.y + cp.height / 2, '#10B981', 20);
        particles.addPopup(cp.x + cp.width / 2, cp.y - 12, 'CHECKPOINT SAVED!', '#10B981');
        if (onCheckpointActivated) {
          onCheckpointActivated({
            x: player.respawnX,
            y: player.respawnY,
            hasJetpack: player.hasJetpack,
            hasShield: player.hasShield
          });
        }
      }
    });
  }

  private checkEnemies(
    player: Player, 
    enemies: Enemy[], 
    particles: ParticleSystem,
    onPlayerDeath: () => void,
    onScoreAdd: (pts: number) => void,
    onEnemyDefeated?: (enemy: Enemy) => void
  ) {
    enemies.forEach(e => {
      if (e.isDead) return;
      if (this.isOverlapping(player, e)) {
        // Check if player landed on top of enemy (Stomp!)
        const playerBottom = player.y + player.height;
        const enemyTop = e.y + e.height * 0.4;

        if (player.vy > 0 && playerBottom <= enemyTop + 10) {
          // If the enemy is currently spiky (like curled hedgehog, sea urchin, or crystal golem)
          if (e.isSpiky || e.type === 'urchin' || e.type === 'crystal_golem' || e.type === 'dune_scorpion') {
            if (player.hasShield) {
              this.popPlayerShield(player, particles);
              player.vy = -7.5;
            } else if (player.invulnerableTimer <= 0) {
              sound.playHit();
              const spikyMsg = e.type === 'urchin' ? 'OUCH! SEA URCHIN SPINES!' : (e.type === 'crystal_golem' ? 'OUCH! CRYSTAL GOLEM ARMOR!' : (e.type === 'dune_scorpion' ? 'OUCH! VENOMOUS SCORPION STINGER! 🦂' : 'OUCH! SPIKY QUILLS!'));
              particles.addPopup(e.x + e.width / 2, e.y - 12, spikyMsg, '#F43F5E');
              this.killPlayer(player, particles, onPlayerDeath);
            }
            return;
          }

          // Stomped enemy!
          e.isDead = true;
          player.vy = -8.5; // Stomp bounce
          player.scaleX = 0.75;
          player.scaleY = 1.35;
          sound.playStomp();
          if (onEnemyDefeated) onEnemyDefeated(e);
          particles.emitEnemyPop(e.x + e.width / 2, e.y + e.height / 2, '#10B981', 16);
          const pts = (e.type === 'frost_yeti') ? 500 : (e.type === 'goose' ? 450 : (e.type === 'fire_imp' ? 400 : (e.type === 'beaver' ? 400 : (e.type === 'anteater' || e.type === 'crystal_bat' ? 350 : 250))));
          particles.addPopup(e.x + e.width / 2, e.y, `+${pts}`, '#34D399');
          onScoreAdd(pts);
        } else {
          // Player hit by enemy
          if (player.invulnerableTimer <= 0) {
            if (player.hasShield) {
              this.popPlayerShield(player, particles);
            } else {
              if (e.type === 'urchin') {
                particles.addPopup(e.x + e.width / 2, e.y - 12, 'OUCH! SEA URCHIN SPINES!', '#F43F5E');
              }
              this.killPlayer(player, particles, onPlayerDeath);
            }
          }
        }
      }
    });
  }

  private checkHazards(
    player: Player, 
    level: LevelData, 
    particles: ParticleSystem,
    onPlayerDeath: () => void
  ) {
    // Fell off bottom of map (void death)
    if (player.y > level.worldHeight + 60) {
      this.killPlayer(player, particles, onPlayerDeath);
      return;
    }

    if (player.invulnerableTimer > 0) return;

    // Hazard spikes, saws, lava
    for (const h of level.hazards) {
      if (this.isOverlapping(player, h)) {
        if (player.hasShield) {
          this.popPlayerShield(player, particles);
          return;
        } else {
          this.killPlayer(player, particles, onPlayerDeath);
          return;
        }
      }
    }
  }

  private popPlayerShield(player: Player, particles: ParticleSystem) {
    player.hasShield = false;
    player.invulnerableTimer = 1.6; // Invulnerability buffer to recover and escape
    player.vy = -6.5; // Recoil bounce upward
    sound.playShieldPop();
    particles.emitShieldPop(player.x + player.width / 2, player.y + player.height / 2);
    particles.addPopup(player.x + player.width / 2, player.y - 14, 'SHIELD POPPED!', '#38BDF8');
  }

  private killPlayer(player: Player, particles: ParticleSystem, onPlayerDeath: () => void) {
    if (player.isDead) return;
    player.isDead = true;
    sound.playDeath();
    particles.emitDeath(player.x + player.width / 2, player.y + player.height / 2);
    onPlayerDeath();
  }

  private checkGoal(player: Player, goal: LevelData['goal'], onLevelComplete: () => void) {
    if (this.isOverlapping(player, goal)) {
      onLevelComplete();
    }
  }

  private isOverlapping(
    a: { x: number; y: number; width: number; height: number },
    b: { x: number; y: number; width: number; height: number }
  ): boolean {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
}
