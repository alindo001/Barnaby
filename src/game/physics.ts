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

  public update(
    player: Player,
    level: LevelData,
    input: InputState,
    particles: ParticleSystem,
    dt: number,
    onPlayerDeath: () => void,
    onLevelComplete: () => void,
    onScoreAdd: (pts: number) => void,
    onCheckpointActivated?: (cp: { x: number; y: number; hasJetpack: boolean }) => void
  ) {
    if (player.isDead) return;

    const fpsRatio = Math.min(2.0, dt * 60);

    // 1. Timers & Powerups
    if (player.invulnerableTimer > 0) player.invulnerableTimer -= dt;
    if (player.speedBoostTimer > 0) player.speedBoostTimer -= dt;
    if (player.jumpBoostTimer > 0) player.jumpBoostTimer -= dt;

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
      // Apply friction
      const friction = player.isGrounded ? this.FRICTION : this.AIR_FRICTION;
      player.vx *= Math.pow(friction, fpsRatio);
      if (Math.abs(player.vx) < 0.05) player.vx = 0;
    }

    // Clamp speed
    player.vx = Math.max(-maxSpeed, Math.min(maxSpeed, player.vx));

    // Footstep particles when running fast on ground
    if (player.isGrounded && Math.abs(player.vx) > 2.0) {
      particles.emitFootstep(player.x + player.width / 2, player.y + player.height, player.facing, level.theme.platformTop);
    }

    // 3. Jump Logic (Coyote Time + Jump Buffering + Variable Jump Cut)
    if (player.isGrounded) {
      player.coyoteTimer = this.COYOTE_TIME;

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
    const wantsJump = player.jumpBufferTimer > 0;

    if (wantsJump && canJump) {
      const jumpVel = player.jumpBoostTimer > 0 ? this.JUMP_FORCE * 1.25 : this.JUMP_FORCE;
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
      particles.emitDust(player.x + player.width / 2, player.y + player.height, 6, level.theme.platformTop);
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
    if (input.jumpReleased && player.vy < -3 && !player.isJetpacking) {
      player.vy *= 0.45;
    }

    // 4. Gravity
    player.vy += this.GRAVITY * fpsRatio;
    if (player.vy > this.MAX_FALL_SPEED) {
      player.vy = this.MAX_FALL_SPEED;
    }

    // 5. Update Dynamic Level Elements (Moving platforms, crumbling blocks, hazards, enemies, launched jetpacks)
    this.updateLevelElements(player, level, particles, dt, fpsRatio, onScoreAdd);

    // 6. Sub-step Collision Resolution for Player
    player.wasGrounded = player.isGrounded;
    const wasRidingThisFrame = !!player.ridingPlatformId;
    if (!wasRidingThisFrame) {
      player.isGrounded = false;
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
    this.checkCollectibles(player, level.collectibles, particles, onScoreAdd);

    // 9. Checkpoints Check
    if (level.checkpoints) {
      this.checkCheckpoints(player, level.checkpoints, particles, onCheckpointActivated);
    }

    // 10. Enemies Collision Check (Stomp vs Hurt)
    this.checkEnemies(player, level.enemies, particles, onPlayerDeath, onScoreAdd);

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
    onScoreAdd: (pts: number) => void
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
          if (h.y < minY || h.y > maxY) {
            h.vy = -(h.vy || h.speed);
          }
        }
      }
    });

    // 3. Enemies Patrol
    level.enemies.forEach(e => {
      if (e.isDead) return;
      e.x += e.vx * fpsRatio;
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
          if (p.type === 'one-way') continue;
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

        // Plasma trail sparkles
        particles.emitSparkles(b.x, b.y, b.color || '#38BDF8', 2);

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
            sound.playBlasterHit();
            particles.emitEnemyPop(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, '#EF4444', 20);
            particles.emitSparkles(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, '#38BDF8', 18);
            particles.addPopup(enemy.x + enemy.width / 2, enemy.y, 'BLASTED! +300', '#38BDF8');
            onScoreAdd(300);
            level.blasterBullets.splice(i, 1);
            hit = true;
            break;
          }
        }
        if (hit) continue;

        // Check solid platform collision
        for (const p of level.platforms) {
          if (p.type === 'one-way') continue;
          if (
            b.x >= p.x &&
            b.x <= p.x + p.width &&
            b.y >= p.y &&
            b.y <= p.y + p.height
          ) {
            sound.playBlasterHit();
            particles.emitSparkles(b.x, b.y, '#38BDF8', 8);
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
      if (p.type === 'one-way') continue; // Pass-through on X
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

      // ONE-WAY Platforms
      if (p.type === 'one-way') {
        // Only collide when moving downwards and player's feet were previously above the top edge
        const prevBottom = player.y - player.vy + player.height;
        if (player.vy >= 0 && prevBottom <= p.y + 8 && this.isOverlapping(player, p)) {
          player.y = p.y - player.height;
          player.vy = 0;
          player.isGrounded = true;
          player.isJumping = false;
          player.coyoteTimer = this.COYOTE_TIME;
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
            player.ridingPlatformId = null;
            player.scaleX = 0.65;
            player.scaleY = 1.45;
            sound.playSpring();
            particles.emitDust(player.x + player.width / 2, player.y + player.height, 8, '#EF4444');
          } else {
            // Normal landing
            player.vy = 0;
            player.isGrounded = true;
            player.isJumping = false;
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
    onScoreAdd: (pts: number) => void
  ) {
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
          player.hasJetpack = true;
          player.jetpackFuel = player.maxJetpackFuel;
          sound.playFuelRefill();
          particles.emitSparkles(c.x + c.width / 2, c.y + c.height / 2, '#10B981', 18);
          particles.addPopup(c.x + c.width / 2, c.y - 12, '+FUEL (FULL TANK)', '#34D399');
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
        }
      }
    });
  }

  private checkCheckpoints(
    player: Player, 
    checkpoints: NonNullable<LevelData['checkpoints']>, 
    particles: ParticleSystem,
    onCheckpointActivated?: (cp: { x: number; y: number; hasJetpack: boolean }) => void
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
            hasJetpack: player.hasJetpack
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
    onScoreAdd: (pts: number) => void
  ) {
    enemies.forEach(e => {
      if (e.isDead) return;
      if (this.isOverlapping(player, e)) {
        // Check if player landed on top of enemy (Stomp!)
        const playerBottom = player.y + player.height;
        const enemyTop = e.y + e.height * 0.4;

        if (player.vy > 0 && playerBottom <= enemyTop + 10) {
          // Stomped enemy
          e.isDead = true;
          player.vy = -8.5; // Stomp bounce
          player.scaleX = 0.75;
          player.scaleY = 1.35;
          sound.playStomp();
          particles.emitEnemyPop(e.x + e.width / 2, e.y + e.height / 2, '#10B981', 14);
          particles.addPopup(e.x + e.width / 2, e.y, '+250', '#34D399');
          onScoreAdd(250);
        } else {
          // Player hit by enemy
          if (player.invulnerableTimer <= 0) {
            this.killPlayer(player, particles, onPlayerDeath);
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
    // Fell off bottom of map
    if (player.y > level.worldHeight + 60) {
      this.killPlayer(player, particles, onPlayerDeath);
      return;
    }

    if (player.invulnerableTimer > 0) return;

    // Hazard spikes, saws, lava
    for (const h of level.hazards) {
      if (this.isOverlapping(player, h)) {
        this.killPlayer(player, particles, onPlayerDeath);
        return;
      }
    }
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
