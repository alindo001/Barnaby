import { 
  LevelData, 
  Player, 
  Camera, 
  Platform, 
  Hazard, 
  Collectible, 
  Enemy,
  Particle,
  ScorePopup,
  LaunchedJetpack,
  BlasterBullet
} from '../types/game';
import { renderCharacter } from './characterRenderer';
import { DEFAULT_CHARACTER_CONFIGS } from './characters';

export class GameRenderer {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private gameTime: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) throw new Error('Could not get 2D context');
    this.ctx = context;
  }

  public render(
    level: LevelData,
    player: Player,
    camera: Camera,
    particles: Particle[],
    popups: ScorePopup[],
    dt: number,
    isPixelArt: boolean = false
  ) {
    this.gameTime += dt;
    const { ctx, canvas } = this;
    const viewWidth = canvas.width;
    const viewHeight = canvas.height;

    ctx.imageSmoothingEnabled = !isPixelArt;

    // 1. Draw Parallax Background
    this.drawBackground(level, camera, viewWidth, viewHeight);

    // 2. Apply Camera Transform with Screen Shake
    ctx.save();
    let shakeOffsetX = 0;
    let shakeOffsetY = 0;
    if (camera.shakeTime > 0) {
      shakeOffsetX = (Math.random() - 0.5) * camera.shakeIntensity;
      shakeOffsetY = (Math.random() - 0.5) * camera.shakeIntensity;
    }
    ctx.translate(-Math.floor(camera.x + shakeOffsetX), -Math.floor(camera.y + shakeOffsetY));

    // 3. Draw Checkpoints
    if (level.checkpoints) {
      level.checkpoints.forEach(cp => this.drawCheckpoint(cp));
    }

    // 4. Draw Goal Flag / Portal
    this.drawGoal(level.goal);

    // 5. Draw Platforms
    level.platforms.forEach(p => this.drawPlatform(p, level.theme));

    // 6. Draw Hazards
    level.hazards.forEach(h => this.drawHazard(h));

    // 7. Draw Collectibles
    level.collectibles.forEach(c => {
      if (!c.collected) this.drawCollectible(c);
    });

    // 8. Draw Enemies
    level.enemies.forEach(e => {
      if (!e.isDead) this.drawEnemy(e);
    });

    // 9. Draw Player
    if (!player.isDead) {
      this.drawPlayer(player);
    }

    // 10. Draw Launched Jetpacks (Rocket projectiles)
    if (level.launchedJetpacks && level.launchedJetpacks.length > 0) {
      level.launchedJetpacks.forEach(jp => this.drawLaunchedJetpack(jp));
    }

    // 11. Draw Blaster Laser Bolts
    if (level.blasterBullets && level.blasterBullets.length > 0) {
      level.blasterBullets.forEach(b => this.drawBlasterBullet(b));
    }

    // 12. Draw Particles
    this.drawParticles(particles);

    // 13. Draw Floating Score Popups
    this.drawPopups(popups);

    // Restore Camera Transform
    ctx.restore();
  }

  private drawBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;
    const { theme } = level;

    // Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, theme.skyColorTop);
    skyGrad.addColorStop(1, theme.skyColorBottom);
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // Parallax Distant Mountains/Hills (Layer 1 - slow)
    ctx.fillStyle = theme.mountainColor;
    ctx.globalAlpha = 0.25;
    const mountainOffset = (camera.x * 0.15) % 400;
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let x = -400; x < width + 400; x += 200) {
      const peakX = x - mountainOffset;
      const peakY = height - 160 - Math.sin(x * 0.01) * 60;
      ctx.lineTo(peakX, peakY);
      ctx.lineTo(peakX + 100, height - 90);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Parallax Mid Hills (Layer 2 - medium)
    ctx.fillStyle = theme.mountainColor;
    ctx.globalAlpha = 0.4;
    const hillOffset = (camera.x * 0.35) % 300;
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let x = -300; x < width + 300; x += 150) {
      const hX = x - hillOffset;
      const hY = height - 100 - Math.cos(x * 0.02) * 40;
      ctx.lineTo(hX, hY);
      ctx.lineTo(hX + 75, height - 60);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Animated Floating Clouds
    ctx.fillStyle = theme.cloudColor;
    ctx.globalAlpha = 0.35;
    const cloudTime = this.gameTime * 15;
    const cloudOffset = (camera.x * 0.2 + cloudTime) % (width + 300);
    
    for (let i = 0; i < 4; i++) {
      const cx = (i * 280 - cloudOffset + width * 2) % (width + 300) - 100;
      const cy = 60 + (i % 3) * 45;
      this.drawCloud(cx, cy, 60 + (i % 2) * 20);
    }

    ctx.globalAlpha = 1.0;
  }

  private drawCloud(x: number, y: number, radius: number) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2);
    ctx.arc(x + radius * 0.4, y - radius * 0.2, radius * 0.6, 0, Math.PI * 2);
    ctx.arc(x + radius * 0.8, y, radius * 0.45, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawPlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;

    if (p.type === 'bouncy') {
      // Spring / Bouncy Pad
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(p.x, p.y + p.height - 4, p.width, 4);

      // Spring coil
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      const coilSteps = 3;
      const stepH = (p.height - 8) / coilSteps;
      for (let i = 0; i < coilSteps; i++) {
        const sy = p.y + p.height - 4 - i * stepH;
        ctx.moveTo(p.x + 8, sy);
        ctx.lineTo(p.x + p.width - 8, sy - stepH * 0.5);
      }
      ctx.stroke();

      // Glowing bounce cap
      const bouncePulse = Math.sin(this.gameTime * 8) * 2;
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.roundRect(p.x + 2, p.y + bouncePulse, p.width - 4, 8, 4);
      ctx.fill();
      ctx.fillStyle = '#FCA5A5';
      ctx.fillRect(p.x + 6, p.y + bouncePulse + 1, p.width - 12, 2);
      return;
    }

    if (p.type === 'one-way') {
      // One-way jump-through semi-solid platform (wooden / scaffolding styling)
      ctx.fillStyle = '#D97706';
      ctx.fillRect(p.x, p.y, p.width, 6);

      ctx.fillStyle = '#B45309';
      ctx.fillRect(p.x, p.y + 6, p.width, p.height - 6);

      // Chevrons indicating jump-through
      ctx.fillStyle = '#FEF3C7';
      const numArrows = Math.floor(p.width / 24);
      for (let i = 0; i < numArrows; i++) {
        const ax = p.x + 12 + i * 24;
        const ay = p.y + 10;
        ctx.beginPath();
        ctx.moveTo(ax, ay + 4);
        ctx.lineTo(ax + 5, ay);
        ctx.lineTo(ax + 10, ay + 4);
        ctx.stroke();
      }
      return;
    }

    if (p.type === 'crumbling') {
      // 1. If currently disappeared (waiting to respawn), DO NOT DRAW SOLID PLATFORM!
      if (p.respawnTimer !== undefined && p.respawnTimer > 0) {
        // Ghostly preview outline only right before reappearing (< 0.7s)
        if (p.respawnTimer < 0.7) {
          ctx.save();
          const pulse = 0.25 + Math.sin(this.gameTime * 20) * 0.15;
          ctx.globalAlpha = Math.max(0, pulse);
          ctx.strokeStyle = '#CBD5E1';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(p.x + 2, p.y + 2, p.width - 4, p.height - 4);
          ctx.restore();
        }
        return; // Platform has completely disappeared!
      }

      ctx.save();

      // 2. If character stepped on it and it's crumbling, shake and fracture!
      if (p.crumbling && p.crumbleTimer !== undefined) {
        const shakeIntensity = Math.min(5, (0.65 - p.crumbleTimer) * 9);
        const shakeX = (Math.random() - 0.5) * shakeIntensity;
        const shakeY = (Math.random() - 0.5) * (shakeIntensity * 0.5);
        ctx.translate(shakeX, shakeY);
      }

      // Crumbling Stone Block
      ctx.fillStyle = p.crumbling ? '#57534E' : '#78716C';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      ctx.strokeStyle = '#44403C';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x + 1, p.y + 1, p.width - 2, p.height - 2);

      // Cracks in stone (widen when crumbling)
      ctx.strokeStyle = p.crumbling ? '#1C1917' : '#44403C';
      ctx.lineWidth = p.crumbling ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.moveTo(p.x + p.width * 0.3, p.y);
      ctx.lineTo(p.x + p.width * 0.4, p.y + p.height * 0.6);
      ctx.lineTo(p.x + p.width * 0.7, p.y + p.height);
      ctx.moveTo(p.x + p.width * 0.6, p.y);
      ctx.lineTo(p.x + p.width * 0.5, p.y + p.height * 0.4);
      ctx.stroke();

      if (p.crumbling) {
        // Additional deep fracture lines when crumbling
        ctx.beginPath();
        ctx.moveTo(p.x + p.width * 0.15, p.y + 3);
        ctx.lineTo(p.x + p.width * 0.35, p.y + p.height - 3);
        ctx.moveTo(p.x + p.width * 0.82, p.y + 2);
        ctx.lineTo(p.x + p.width * 0.65, p.y + p.height - 4);
        ctx.stroke();
      }

      ctx.restore();
      return;
    }

    // Standard Solid / Moving Platforms
    ctx.fillStyle = theme.platformFill;
    ctx.fillRect(p.x, p.y + 8, p.width, Math.max(0, p.height - 8));

    // Top lush rim
    ctx.fillStyle = theme.platformTop;
    ctx.fillRect(p.x, p.y, p.width, 8);

    // Decorative edge beads
    ctx.fillStyle = theme.platformBorder;
    ctx.fillRect(p.x, p.y + 7, p.width, 2);

    // Moving platform glow indicator
    if (p.speed && p.speed > 0) {
      ctx.strokeStyle = '#60A5FA';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x, p.y, p.width, p.height);
      
      // Direction dots
      ctx.fillStyle = '#93C5FD';
      ctx.beginPath();
      ctx.arc(p.x + 8, p.y + p.height / 2, 2.5, 0, Math.PI * 2);
      ctx.arc(p.x + p.width - 8, p.y + p.height / 2, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawHazard(h: Hazard) {
    const { ctx } = this;

    if (h.type === 'spike') {
      ctx.fillStyle = '#DC2626';
      ctx.strokeStyle = '#991B1B';
      ctx.lineWidth = 1.5;

      const numSpikes = Math.max(1, Math.floor(h.width / 14));
      const spikeW = h.width / numSpikes;

      ctx.beginPath();
      for (let i = 0; i < numSpikes; i++) {
        const sx = h.x + i * spikeW;
        ctx.moveTo(sx, h.y + h.height);
        ctx.lineTo(sx + spikeW * 0.5, h.y);
        ctx.lineTo(sx + spikeW, h.y + h.height);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Gleam on spike tips
      ctx.fillStyle = '#FCA5A5';
      for (let i = 0; i < numSpikes; i++) {
        const sx = h.x + i * spikeW;
        ctx.fillRect(sx + spikeW * 0.45, h.y + 2, 2, 4);
      }
    } else if (h.type === 'saw') {
      // Spinning Buzzsaw
      ctx.save();
      const cx = h.x + h.width / 2;
      const cy = h.y + h.height / 2;
      const r = h.width / 2;
      const rot = (h.rotation || 0) + this.gameTime * 8;

      ctx.translate(cx, cy);
      ctx.rotate(rot);

      // Outer saw teeth
      ctx.fillStyle = '#E2E8F0';
      ctx.strokeStyle = '#64748B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const teeth = 8;
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const outerAngle = angle + (Math.PI / teeth) * 0.6;
        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        ctx.lineTo(Math.cos(outerAngle) * (r * 0.7), Math.sin(outerAngle) * (r * 0.7));
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Center core
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#F87171';
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    } else if (h.type === 'lava') {
      // Molten Lava
      ctx.fillStyle = '#DC2626';
      ctx.fillRect(h.x, h.y, h.width, h.height);

      // Bubbling top wave
      ctx.fillStyle = '#F97316';
      ctx.beginPath();
      ctx.moveTo(h.x, h.y);
      for (let x = h.x; x <= h.x + h.width; x += 20) {
        const wave = Math.sin(x * 0.05 + this.gameTime * 5) * 4;
        ctx.lineTo(x, h.y + wave);
      }
      ctx.lineTo(h.x + h.width, h.y + h.height);
      ctx.lineTo(h.x, h.y + h.height);
      ctx.closePath();
      ctx.fill();

      // Glowing yellow hot rim
      ctx.fillStyle = '#FDE047';
      for (let x = h.x; x < h.x + h.width; x += 40) {
        const bx = x + Math.sin(x + this.gameTime * 3) * 6;
        const by = h.y + 2 + Math.cos(x + this.gameTime * 4) * 2;
        ctx.fillRect(bx, by, 6, 2);
      }
    }
  }

  private drawCollectible(c: Collectible) {
    const { ctx } = this;
    const bob = Math.sin(this.gameTime * 5 + (c.x * 0.01)) * 4;
    const cy = c.y + bob;

    if (c.type === 'coin') {
      // Golden Coin with 3D spin effect
      const spinScale = Math.abs(Math.sin(this.gameTime * 4 + c.x));
      const w = c.width * Math.max(0.15, spinScale);
      const cx = c.x + (c.width - w) / 2;

      // Glow halo
      ctx.fillStyle = 'rgba(251, 191, 36, 0.25)';
      ctx.beginPath();
      ctx.arc(c.x + c.width / 2, cy + c.height / 2, c.width * 0.8, 0, Math.PI * 2);
      ctx.fill();

      // Outer gold rim
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.ellipse(cx + w / 2, cy + c.height / 2, w / 2, c.height / 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Inner coin shine
      ctx.fillStyle = '#FDE047';
      ctx.beginPath();
      ctx.ellipse(cx + w / 2, cy + c.height / 2, w * 0.35, c.height * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (c.type === 'gem') {
      // Multifaceted Emerald/Diamond Gem
      const cx = c.x + c.width / 2;
      const midY = cy + c.height * 0.4;

      // Gem glow
      ctx.fillStyle = 'rgba(168, 85, 247, 0.3)';
      ctx.beginPath();
      ctx.arc(cx, cy + c.height / 2, c.width * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Gem body
      ctx.fillStyle = '#A855F7';
      ctx.beginPath();
      ctx.moveTo(c.x + c.width * 0.2, cy);
      ctx.lineTo(c.x + c.width * 0.8, cy);
      ctx.lineTo(c.x + c.width, midY);
      ctx.lineTo(cx, cy + c.height);
      ctx.lineTo(c.x, midY);
      ctx.closePath();
      ctx.fill();

      // Gem Facets
      ctx.fillStyle = '#C084FC';
      ctx.beginPath();
      ctx.moveTo(c.x + c.width * 0.2, cy);
      ctx.lineTo(cx, midY);
      ctx.lineTo(c.x + c.width * 0.8, cy);
      ctx.closePath();
      ctx.fill();

      // Top glint
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(c.x + c.width * 0.3, cy + 4, 1.5, 0, Math.PI * 2);
      ctx.fill();
    } else if (c.type === 'jetpack') {
      // Sleek Sci-Fi Jetpack Pickup
      const cx = c.x + c.width / 2;
      const cy = c.y + c.height / 2 + bob;

      // Outer cyan aura pulse
      const aura = Math.sin(this.gameTime * 4) * 0.15 + 0.35;
      ctx.fillStyle = `rgba(56, 189, 248, ${aura})`;
      ctx.beginPath();
      ctx.arc(cx, cy, c.width * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Main jetpack chassis
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.roundRect(cx - 10, cy - 10, 20, 18, 4);
      ctx.fill();

      // Dual fuel tanks (Left & Right cylinders)
      ctx.fillStyle = '#DC2626';
      ctx.beginPath();
      ctx.roundRect(cx - 9, cy - 12, 6, 18, 3);
      ctx.roundRect(cx + 3, cy - 12, 6, 18, 3);
      ctx.fill();

      // Tank chrome bands
      ctx.fillStyle = '#E2E8F0';
      ctx.fillRect(cx - 9, cy - 6, 6, 2);
      ctx.fillRect(cx + 3, cy - 6, 6, 2);

      // Center power core / turbine
      ctx.fillStyle = '#0284C7';
      ctx.beginPath();
      ctx.arc(cx, cy - 1, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.arc(cx, cy - 1, 2, 0, Math.PI * 2);
      ctx.fill();

      // Thruster nozzles at bottom
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(cx - 8, cy + 6, 4, 4);
      ctx.fillRect(cx + 4, cy + 6, 4, 4);

      // Micro idle flame sparks
      const flameFlicker = Math.sin(this.gameTime * 20) * 2;
      ctx.fillStyle = '#F97316';
      ctx.beginPath();
      ctx.moveTo(cx - 8, cy + 10);
      ctx.lineTo(cx - 6, cy + 13 + flameFlicker);
      ctx.lineTo(cx - 4, cy + 10);
      ctx.moveTo(cx + 4, cy + 10);
      ctx.lineTo(cx + 6, cy + 13 + flameFlicker);
      ctx.lineTo(cx + 8, cy + 10);
      ctx.fill();

      // Floating label above pickup
      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('JETPACK', cx, cy - 16);
    } else if (c.type === 'jetpack_fuel') {
      // Glowing Fuel Canister
      const cx = c.x + c.width / 2;
      const cy = c.y + c.height / 2 + bob;

      // Glow halo
      ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.beginPath();
      ctx.arc(cx, cy, c.width * 0.85, 0, Math.PI * 2);
      ctx.fill();

      // Canister Body
      ctx.fillStyle = '#1E293B';
      ctx.beginPath();
      ctx.roundRect(cx - 7, cy - 10, 14, 20, 3);
      ctx.fill();

      // Canister Glass Tube
      ctx.fillStyle = '#064E3B';
      ctx.fillRect(cx - 5, cy - 7, 10, 14);

      // Glowing Neon Fuel Fluid Level
      const fluidPulse = Math.sin(this.gameTime * 6) * 1.5;
      ctx.fillStyle = '#10B981';
      ctx.fillRect(cx - 4, cy - 4 + fluidPulse, 8, 10 - fluidPulse);

      ctx.fillStyle = '#6EE7B7';
      ctx.fillRect(cx - 2, cy - 3 + fluidPulse, 4, 2);

      // Caps
      ctx.fillStyle = '#F59E0B';
      ctx.fillRect(cx - 6, cy - 11, 12, 3);
      ctx.fillRect(cx - 6, cy + 8, 12, 3);

      // Floating label
      ctx.fillStyle = '#34D399';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('+FUEL', cx, cy - 15);
    } else if (c.type === 'blaster') {
      // Sci-Fi Plasma Blaster Gun Pickup
      const cx = c.x + c.width / 2;
      const cy = c.y + c.height / 2 + bob;

      // Outer cyan aura
      const aura = Math.sin(this.gameTime * 4) * 0.15 + 0.35;
      ctx.fillStyle = `rgba(56, 189, 248, ${aura})`;
      ctx.beginPath();
      ctx.arc(cx, cy, c.width * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Gun Body Chassis
      ctx.fillStyle = '#1E293B';
      ctx.beginPath();
      ctx.roundRect(cx - 8, cy - 6, 18, 8, 2);
      ctx.fill();

      // Gun Grip / Handle
      ctx.fillStyle = '#0F172A';
      ctx.beginPath();
      ctx.roundRect(cx - 6, cy, 6, 9, 2);
      ctx.fill();

      // Energy Emitter Barrel
      ctx.fillStyle = '#38BDF8';
      ctx.fillRect(cx + 8, cy - 5, 4, 6);

      // Glowing power cell indicator
      ctx.fillStyle = '#0284C7';
      ctx.fillRect(cx - 3, cy - 4, 7, 4);
      ctx.fillStyle = '#38BDF8';
      ctx.fillRect(cx - 1, cy - 3, 3, 2);

      // Floating label
      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('BLASTER', cx, cy - 16);
    } else if (c.type === 'blaster_ammo') {
      // Energy Cell Ammo Pickup
      const cx = c.x + c.width / 2;
      const cy = c.y + c.height / 2 + bob;

      ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.beginPath();
      ctx.arc(cx, cy, c.width * 0.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1E293B';
      ctx.beginPath();
      ctx.roundRect(cx - 6, cy - 8, 12, 16, 2);
      ctx.fill();

      // Battery level bars
      ctx.fillStyle = '#38BDF8';
      ctx.fillRect(cx - 4, cy - 6, 8, 3);
      ctx.fillRect(cx - 4, cy - 1, 8, 3);
      ctx.fillRect(cx - 4, cy + 4, 8, 3);

      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('+AMMO', cx, cy - 14);
    }
  }

  private drawEnemy(e: Enemy) {
    const { ctx } = this;

    if (e.type === 'slime') {
      // Squishy Patrolling Slime
      const squish = Math.sin(this.gameTime * 10) * 2;
      const ew = e.width + squish;
      const eh = e.height - squish;
      const ex = e.x - squish * 0.5;
      const ey = e.y + squish;

      // Slime Body
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.ellipse(ex + ew / 2, ey + eh / 2, ew / 2, eh / 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Slime highlight dome
      ctx.fillStyle = '#34D399';
      ctx.beginPath();
      ctx.ellipse(ex + ew / 2, ey + eh * 0.35, ew * 0.35, eh * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      const eyeOffsetX = e.facing === 1 ? 4 : -4;
      ctx.fillStyle = '#064E3B';
      ctx.beginPath();
      ctx.arc(ex + ew / 2 + eyeOffsetX - 3, ey + eh * 0.45, 2.5, 0, Math.PI * 2);
      ctx.arc(ex + ew / 2 + eyeOffsetX + 3, ey + eh * 0.45, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Eye glints
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(ex + ew / 2 + eyeOffsetX - 3, ey + eh * 0.42, 1, 0, Math.PI * 2);
      ctx.arc(ex + ew / 2 + eyeOffsetX + 3, ey + eh * 0.42, 1, 0, Math.PI * 2);
      ctx.fill();
    } else if (e.type === 'flyer') {
      // Flying Bat / Drone
      const wingFlap = Math.sin(this.gameTime * 14) * 8;
      const cx = e.x + e.width / 2;
      const cy = e.y + e.height / 2;

      // Wings
      ctx.fillStyle = '#7C3AED';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx - 16, cy - wingFlap);
      ctx.lineTo(cx - 8, cy + 4);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + 16, cy - wingFlap);
      ctx.lineTo(cx + 8, cy + 4);
      ctx.closePath();
      ctx.fill();

      // Body Core
      ctx.fillStyle = '#4C1D95';
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fill();

      // Glowing red visor / eye
      ctx.fillStyle = '#EF4444';
      const eyeX = cx + e.facing * 3;
      ctx.fillRect(eyeX - 2, cy - 2, 4, 3);
    }
  }

  private drawGoal(goal: LevelData['goal']) {
    const { ctx } = this;
    const cx = goal.x + goal.width / 2;
    const bottomY = goal.y + goal.height;

    // Portal Base
    ctx.fillStyle = '#334155';
    ctx.fillRect(goal.x - 4, bottomY - 6, goal.width + 8, 6);

    // Glowing Archway / Flagpole
    const auraPulse = Math.sin(this.gameTime * 4) * 0.2 + 0.8;
    ctx.strokeStyle = `rgba(251, 191, 36, ${auraPulse})`;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, goal.y + goal.height * 0.45, goal.width * 0.5, Math.PI, 0);
    ctx.lineTo(cx + goal.width * 0.5, bottomY - 6);
    ctx.lineTo(cx - goal.width * 0.5, bottomY - 6);
    ctx.stroke();

    // Portal Inner Energy Swirl
    ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
    ctx.beginPath();
    ctx.arc(cx, goal.y + goal.height * 0.45, goal.width * 0.45, 0, Math.PI * 2);
    ctx.fill();

    // Fluttering Victory Flag
    const wave1 = Math.sin(this.gameTime * 6) * 4;
    const wave2 = Math.cos(this.gameTime * 6) * 4;
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.moveTo(cx, goal.y + 4);
    ctx.lineTo(cx + 26 + wave1, goal.y + 14 + wave2);
    ctx.lineTo(cx, goal.y + 24);
    ctx.closePath();
    ctx.fill();

    // Golden Star icon on banner
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx + 10, goal.y + 14, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawCheckpoint(cp: NonNullable<LevelData['checkpoints']>[0]) {
    const { ctx } = this;
    const cx = cp.x + cp.width / 2;
    const bottomY = cp.y + cp.height;

    // Pole
    ctx.strokeStyle = '#64748B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, bottomY);
    ctx.lineTo(cx, cp.y);
    ctx.stroke();

    // Flag
    const isAct = cp.activated;
    ctx.fillStyle = isAct ? '#10B981' : '#94A3B8';
    const flagY = isAct ? cp.y + 2 : bottomY - 14;
    const flutter = isAct ? Math.sin(this.gameTime * 7) * 3 : 0;

    ctx.beginPath();
    ctx.moveTo(cx, flagY);
    ctx.lineTo(cx + 16 + flutter, flagY + 6);
    ctx.lineTo(cx, flagY + 12);
    ctx.closePath();
    ctx.fill();

    if (isAct) {
      // Sparkle glow around active checkpoint
      ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.beginPath();
      ctx.arc(cx, flagY + 6, 12, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawPlayer(p: Player) {
    const { ctx } = this;

    // Invulnerability flashing
    if (p.invulnerableTimer > 0 && Math.floor(p.invulnerableTimer * 20) % 2 === 0) {
      return;
    }

    const cx = p.x + p.width / 2;
    const cy = p.y + p.height / 2;

    // Render character model with chosen species, appearance, and accessories
    const char = p.character ?? DEFAULT_CHARACTER_CONFIGS.bird;
    renderCharacter({
      ctx,
      char,
      p,
      x: cx,
      y: cy,
      scale: 1.0,
      facing: p.facing,
      time: this.gameTime,
      isGrounded: p.isGrounded,
      isJumping: p.isJumping,
      vx: p.vx,
      hasBlaster: p.hasBlaster,
      blasterAmmo: p.blasterAmmo,
      hasJetpack: p.hasJetpack,
      jetpackFuel: p.jetpackFuel,
      maxJetpackFuel: p.maxJetpackFuel,
      isJetpacking: p.isJetpacking
    });

    // Floating overhead fuel gauge (when equipped and flying or not at 100% fuel)
    if (p.hasJetpack && (p.isJetpacking || p.jetpackFuel < p.maxJetpackFuel || !p.isGrounded)) {
      const barW = 34;
      const barH = 5;
      const barX = cx - barW / 2;
      const barY = p.y - 14;
      const fuelRatio = Math.max(0, Math.min(1, p.jetpackFuel / p.maxJetpackFuel));

      // Bar dark container
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(barX - 1, barY - 1, barW + 2, barH + 2, 3);
      ctx.fill();
      ctx.stroke();

      // Fuel fill
      const fillColor = fuelRatio > 0.5 ? '#10B981' : fuelRatio > 0.2 ? '#F59E0B' : '#EF4444';
      ctx.fillStyle = fillColor;
      if (fuelRatio > 0) {
        ctx.beginPath();
        ctx.roundRect(barX, barY, Math.max(2, barW * fuelRatio), barH, 2);
        ctx.fill();
      }

      // Recharging indicator pulsing border
      if (p.isGrounded && fuelRatio < 1) {
        const pulse = Math.sin(this.gameTime * 10) * 0.4 + 0.6;
        ctx.strokeStyle = `rgba(52, 211, 153, ${pulse})`;
        ctx.lineWidth = 1.2;
        ctx.strokeRect(barX - 2, barY - 2, barW + 4, barH + 4);
      }
    }
  }

  private drawParticles(particles: Particle[]) {
    const { ctx } = this;
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;

      if (p.shape === 'sparkle' || p.shape === 'star') {
        const s = p.size;
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.3, -s * 0.3);
        ctx.lineTo(s, 0);
        ctx.lineTo(s * 0.3, s * 0.3);
        ctx.lineTo(0, s);
        ctx.lineTo(-s * 0.3, s * 0.3);
        ctx.lineTo(-s, 0);
        ctx.lineTo(-s * 0.3, -s * 0.3);
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'square') {
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      } else {
        // Circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });
  }

  private drawPopups(popups: ScorePopup[]) {
    const { ctx } = this;
    popups.forEach(pop => {
      ctx.save();
      const alpha = Math.max(0, 1 - (pop.life / pop.maxLife));
      ctx.globalAlpha = alpha;
      ctx.font = 'bold 15px sans-serif';
      ctx.textAlign = 'center';
      
      // Text drop shadow
      ctx.fillStyle = '#000000';
      ctx.fillText(pop.text, pop.x + 1, pop.y + 1);

      // Fore text
      ctx.fillStyle = pop.color;
      ctx.fillText(pop.text, pop.x, pop.y);

      ctx.restore();
    });
  }

  private drawLaunchedJetpack(jp: LaunchedJetpack) {
    const { ctx } = this;
    ctx.save();

    const cx = jp.x + jp.width / 2;
    const cy = jp.y + jp.height / 2;
    ctx.translate(cx, cy);
    ctx.rotate(jp.rotation);

    // Glowing cyan/orange plasma aura
    ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, Math.PI * 2);
    ctx.fill();

    // Jetpack chassis
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.roundRect(-10, -10, 20, 18, 4);
    ctx.fill();

    // Dual red fuel tanks
    ctx.fillStyle = '#DC2626';
    ctx.beginPath();
    ctx.roundRect(-9, -12, 6, 18, 3);
    ctx.roundRect(3, -12, 6, 18, 3);
    ctx.fill();

    // Chrome bands
    ctx.fillStyle = '#E2E8F0';
    ctx.fillRect(-9, -6, 6, 2);
    ctx.fillRect(3, -6, 6, 2);

    // Power core turbine
    ctx.fillStyle = '#38BDF8';
    ctx.beginPath();
    ctx.arc(0, -1, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Exhaust nozzles at bottom
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(-8, 6, 4, 4);
    ctx.fillRect(4, 6, 4, 4);

    // Blazing rocket exhaust fire blast
    const flameLen = 18 + Math.sin(this.gameTime * 40) * 8;
    const flameW = 10;

    // Outer Orange fire
    ctx.fillStyle = '#F97316';
    ctx.beginPath();
    ctx.moveTo(-flameW / 2, 10);
    ctx.lineTo(0, 10 + flameLen);
    ctx.lineTo(flameW / 2, 10);
    ctx.closePath();
    ctx.fill();

    // Inner bright yellow/white core
    ctx.fillStyle = '#FEF08A';
    ctx.beginPath();
    ctx.moveTo(-flameW * 0.35, 10);
    ctx.lineTo(0, 10 + flameLen * 0.6);
    ctx.lineTo(flameW * 0.35, 10);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  private drawBlasterBullet(b: BlasterBullet) {
    const { ctx } = this;
    ctx.save();

    // Outer cyan plasma glow
    ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius * 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Rotate bolt in direction of travel
    const angle = Math.atan2(b.vy, b.vx);
    ctx.translate(b.x, b.y);
    ctx.rotate(angle);

    // Trailing plasma trail
    const trailGrad = ctx.createLinearGradient(-14, 0, 8, 0);
    trailGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
    trailGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.6)');
    trailGrad.addColorStop(1, '#38BDF8');
    ctx.fillStyle = trailGrad;
    ctx.beginPath();
    ctx.roundRect(-14, -2.5, 20, 5, 2.5);
    ctx.fill();

    // Main plasma bolt pill
    ctx.fillStyle = '#38BDF8';
    ctx.beginPath();
    ctx.roundRect(-6, -3, 14, 6, 3);
    ctx.fill();

    // Bright intense white core
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(-3, -1.5, 9, 3, 1.5);
    ctx.fill();

    ctx.restore();
  }
}
