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
  BlasterBullet,
  EnemyProjectile,
  LevelTransitionState
} from '../types/game';
import { renderCharacter } from './characterRenderer';
import { DEFAULT_CHARACTER_CONFIGS } from './characters';
import { drawEnemyFigure, drawEnemyProjectileFigure } from './enemyRenderer';

export class GameRenderer {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private gameTime: number = 0;
  public collectibleStyle: 'acorn' | 'feather' = 'acorn';

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
    isPixelArt: boolean = false,
    transition?: LevelTransitionState | null
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
    level.hazards.forEach(h => this.drawHazard(h, level.theme));

    // 7. Draw Collectibles
    level.collectibles.forEach(c => {
      if (!c.collected) this.drawCollectible(c);
    });

    // 8. Draw Enemies
    level.enemies.forEach(e => {
      if (!e.isDead) this.drawEnemy(e);
    });

    // 8.5 Draw Enemy Projectiles (ants, logs, stink clouds, honk waves)
    if (level.enemyProjectiles && level.enemyProjectiles.length > 0) {
      level.enemyProjectiles.forEach(ep => this.drawEnemyProjectile(ep));
    }

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

    // Restore Camera Transform (returns to Screen Space)
    ctx.restore();

    // 13.5 Deep Sea Atmospheric Submersion Tint & Water Vignette
    if (this.isDeepSeaTheme(level.theme)) {
      ctx.save();
      const waterTint = ctx.createLinearGradient(0, 0, 0, viewHeight);
      waterTint.addColorStop(0, 'rgba(6, 78, 119, 0.06)');
      waterTint.addColorStop(0.65, 'rgba(3, 40, 64, 0.12)');
      waterTint.addColorStop(1, 'rgba(2, 20, 36, 0.25)');
      ctx.fillStyle = waterTint;
      ctx.fillRect(0, 0, viewWidth, viewHeight);

      // Deep ocean vignette
      const vigGrad = ctx.createRadialGradient(viewWidth / 2, viewHeight / 2, viewWidth * 0.35, viewWidth / 2, viewHeight / 2, viewWidth * 0.7);
      vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vigGrad.addColorStop(1, 'rgba(2, 11, 20, 0.38)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, viewWidth, viewHeight);
      ctx.restore();
    }

    // 14. Smooth Fade-to-Black Screen Transition & Cinematic Sector Card
    if (transition && transition.active) {
      this.drawScreenTransition(transition, viewWidth, viewHeight);
    }
  }

  private wrapText(text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = this.ctx.measureText(testLine).width;
      if (width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines.slice(0, 3); // Max 3 lines
  }

  private drawScreenTransition(transition: LevelTransitionState, width: number, height: number) {
    const { ctx } = this;
    const isHold = transition.phase === 'hold';
    const t = Math.max(0, Math.min(1, transition.progress));
    // Smooth cubic ease for fade phases; full 1.0 during hold phase
    const alpha = isHold ? 1.0 : t * t * (3 - 2 * t);

    ctx.save();

    // 1. Deep Obsidian Fade Backdrop
    ctx.fillStyle = `rgba(2, 3, 7, ${alpha})`;
    ctx.fillRect(0, 0, width, height);

    // 2. Subtle Radial Vignette
    if (alpha > 0.15) {
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, 20,
        width / 2, height / 2, Math.max(width, height) * 0.7
      );
      grad.addColorStop(0, `rgba(15, 23, 42, ${alpha * 0.25})`);
      grad.addColorStop(1, `rgba(0, 0, 0, ${alpha * 0.7})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    // 3. Cinematic Letterbox Borders
    const barHeight = Math.max(28, Math.floor(height * 0.085));
    ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(1, alpha * 1.2)})`;
    ctx.fillRect(0, 0, width, barHeight);
    ctx.fillRect(0, height - barHeight, width, barHeight);

    // Sleek glowing letterbox divider lines
    const lineGrad = ctx.createLinearGradient(0, 0, width, 0);
    lineGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
    lineGrad.addColorStop(0.3, `rgba(56, 189, 248, ${alpha * 0.4})`);
    lineGrad.addColorStop(0.5, `rgba(245, 158, 11, ${alpha * 0.6})`);
    lineGrad.addColorStop(0.7, `rgba(56, 189, 248, ${alpha * 0.4})`);
    lineGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = lineGrad;
    ctx.fillRect(0, barHeight, width, 1.5);
    ctx.fillRect(0, height - barHeight - 1.5, width, 1.5);

    // 4. Centered Cinematic Title Card
    if (alpha > 0.25 || isHold) {
      const textAlpha = isHold ? 1.0 : Math.min(1, Math.max(0, (alpha - 0.25) / 0.45));
      const centerY = height / 2;

      // World Badge
      const worldName = (transition.worldName || 'WORLD 1').toUpperCase();
      ctx.font = 'bold 12px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = `rgba(56, 189, 248, ${textAlpha * 0.95})`;
      ctx.fillText(worldName, width / 2, centerY - 28);

      // Level Main Title with soft atmospheric glow
      const title = transition.levelTitle || 'NEXT SECTOR';
      ctx.font = 'bold 28px system-ui, -apple-system, sans-serif';
      ctx.shadowColor = `rgba(56, 189, 248, ${textAlpha * 0.8})`;
      ctx.shadowBlur = 20;
      ctx.fillStyle = `rgba(255, 255, 255, ${textAlpha})`;
      ctx.fillText(title, width / 2, centerY + 8);
      ctx.shadowBlur = 0;

      // Animated Glowing Conduit Line / Charge Bar
      const maxLineWidth = Math.min(320, width * 0.6);
      let lineWidth: number;
      if (transition.phase === 'fade_out') {
        lineWidth = maxLineWidth * t;
      } else if (isHold) {
        const holdRatio = Math.min(1, (transition.holdTime || 0) / (transition.holdDuration || 1.1));
        lineWidth = maxLineWidth * holdRatio;
      } else {
        lineWidth = maxLineWidth * (1 - (1 - t) * 0.5);
      }

      // Background conduit groove
      const grooveY = centerY + 32;
      ctx.fillStyle = `rgba(255, 255, 255, ${textAlpha * 0.12})`;
      ctx.fillRect(width / 2 - maxLineWidth / 2, grooveY, maxLineWidth, 2);

      // Active glowing beam
      const beamGrad = ctx.createLinearGradient(
        width / 2 - lineWidth / 2, 0,
        width / 2 + lineWidth / 2, 0
      );
      beamGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      beamGrad.addColorStop(0.5, `rgba(56, 189, 248, ${textAlpha})`);
      beamGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = beamGrad;
      ctx.fillRect(width / 2 - lineWidth / 2, grooveY, lineWidth, 2);

      // Status Prompt / Skip Hint
      const statusY = centerY + 58;
      const skipPrompt = isHold 
        ? '[ TAP OR PRESS JUMP TO LAUNCH ]' 
        : (transition.phase === 'fade_out' ? 'ENTERING SECTOR...' : 'STAGE READY');
      ctx.font = '600 10.5px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = isHold 
        ? `rgba(56, 189, 248, ${textAlpha * (0.65 + 0.35 * Math.sin(this.gameTime * 7))})`
        : `rgba(100, 116, 139, ${textAlpha * 0.8})`;
      ctx.fillText(skipPrompt, width / 2, statusY);
    }

    ctx.restore();
  }

  private isNeonTheme(theme: LevelData['theme']): boolean {
    return theme.id === 'neon_night' || (theme.name ? theme.name.toLowerCase().includes('neon') : false);
  }

  private isSpaceTheme(theme: LevelData['theme']): boolean {
    return theme.id === 'space_station' || (theme.name ? theme.name.toLowerCase().includes('space') : false);
  }

  private isVolcanoTheme(theme: LevelData['theme']): boolean {
    return theme.id === 'volcano_inferno' || (theme.name ? theme.name.toLowerCase().includes('volcano') || theme.name.toLowerCase().includes('infernal') : false);
  }

  private isGlacierTheme(theme: LevelData['theme']): boolean {
    return theme.id === 'glacial_aurora' || (theme.name ? theme.name.toLowerCase().includes('glacier') || theme.name.toLowerCase().includes('borealis') : false);
  }

  private isDeepSeaTheme(theme: LevelData['theme']): boolean {
    return theme.id === 'deep_sea' || (theme.name ? theme.name.toLowerCase().includes('deep sea') || theme.name.toLowerCase().includes('abyssal') : false);
  }

  private isMedievalCastleTheme(theme: LevelData['theme']): boolean {
    return theme.id === 'medieval_castle' || (theme.name ? theme.name.toLowerCase().includes('castle') || theme.name.toLowerCase().includes('citadel') || theme.name.toLowerCase().includes('keep') : false);
  }

  private isClockworkTheme(theme: LevelData['theme']): boolean {
    return theme.id === 'clockwork_core' || (theme.name ? theme.name.toLowerCase().includes('clockwork') || theme.name.toLowerCase().includes('cogworks') || theme.name.toLowerCase().includes('steampunk') : false);
  }

  private drawBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;
    const { theme } = level;

    // Check if Neon Night aesthetic
    if (this.isNeonTheme(theme)) {
      this.drawNeonNightBackground(level, camera, width, height);
      return;
    }

    // Check if Cosmic Space aesthetic
    if (this.isSpaceTheme(theme)) {
      this.drawSpaceBackground(level, camera, width, height);
      return;
    }

    // Check if Infernal Volcano aesthetic
    if (this.isVolcanoTheme(theme)) {
      this.drawVolcanoBackground(level, camera, width, height);
      return;
    }

    // Check if Borealis Glacier aesthetic
    if (this.isGlacierTheme(theme)) {
      this.drawGlacierBackground(level, camera, width, height);
      return;
    }

    // Check if Abyssal Deep Sea aesthetic
    if (this.isDeepSeaTheme(theme)) {
      this.drawDeepSeaBackground(level, camera, width, height);
      return;
    }

    // Check if Medieval Castle Keep aesthetic
    if (this.isMedievalCastleTheme(theme)) {
      this.drawMedievalCastleBackground(level, camera, width, height);
      return;
    }

    // Check if Clockwork Cogworks aesthetic
    if (this.isClockworkTheme(theme)) {
      this.drawClockworkBackground(level, camera, width, height);
      return;
    }

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

  private drawNeonNightBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;
    const { theme } = level;

    // 1. Deep Midnight Cosmic Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, theme.skyColorTop || '#060312');
    skyGrad.addColorStop(0.5, '#16052F');
    skyGrad.addColorStop(1, theme.skyColorBottom || '#2D0B5A');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Twinkling Digital Cross-Stars & Cyber Constellations
    ctx.save();
    for (let i = 0; i < 48; i++) {
      const sx = ((i * 127 + 43) - camera.x * 0.03 + width * 10) % width;
      const sy = (i * 73 + 29) % (height * 0.58);
      const twinkle = 0.25 + 0.75 * Math.abs(Math.sin(this.gameTime * 2.5 + i * 1.7));
      const starColor = i % 3 === 0 ? '#00F0FF' : (i % 3 === 1 ? '#FF007F' : '#FFFFFF');
      
      ctx.globalAlpha = twinkle;
      ctx.fillStyle = starColor;
      // Core star
      ctx.fillRect(sx - 1, sy - 1, 2, 2);
      // Cross flares for brighter stars
      if (i % 2 === 0) {
        ctx.fillRect(sx - 3, sy, 7, 0.8);
        ctx.fillRect(sx, sy - 3, 0.8, 7);
      }
    }
    ctx.restore();

    // 3. Giant Retro Synthwave Sun with Horizontal Scanline Slices
    ctx.save();
    const sunX = ((width * 0.75 - camera.x * 0.04) % (width + 300) + width + 300) % (width + 300) - 150;
    const sunY = height * 0.38;
    const sunR = Math.min(100, Math.max(65, height * 0.17));

    // Outer Neon Glow Aura
    const sunGlow = ctx.createRadialGradient(sunX, sunY, sunR * 0.5, sunX, sunY, sunR * 1.6);
    sunGlow.addColorStop(0, 'rgba(255, 0, 127, 0.35)');
    sunGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.15)');
    sunGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = sunGlow;
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR * 1.6, 0, Math.PI * 2);
    ctx.fill();

    // Sun Body Gradient (Hot Yellow -> Neon Pink -> Deep Purple)
    const sunGrad = ctx.createLinearGradient(sunX, sunY - sunR, sunX, sunY + sunR);
    sunGrad.addColorStop(0, '#FFE600');
    sunGrad.addColorStop(0.35, '#FF007F');
    sunGrad.addColorStop(0.75, '#A855F7');
    sunGrad.addColorStop(1, '#2D0B5A');

    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
    ctx.fill();

    // Retro Horizontal Scanline Slices through the lower half of the sun
    const numSlices = 7;
    for (let s = 1; s <= numSlices; s++) {
      const sliceY = sunY + (s / (numSlices + 1)) * sunR;
      const sliceH = 2 + s * 1.2;
      const dy = sliceY - sunY;
      const chordHalfW = Math.sqrt(Math.max(0, sunR * sunR - dy * dy));
      if (chordHalfW > 0) {
        ctx.fillStyle = '#0F0422';
        ctx.fillRect(sunX - chordHalfW - 1, sliceY, chordHalfW * 2 + 2, sliceH);
      }
    }
    ctx.restore();

    // 4. Parallax Cyber City Skyline (Far Layer 1 - Silhouettes with Lit Window Grids)
    ctx.save();
    const farOffset = (camera.x * 0.08) % 360;
    const farBldCount = 14;
    for (let i = -1; i < farBldCount + 2; i++) {
      const bx = i * 110 - farOffset;
      const bw = 85 + (Math.abs(i * 29) % 35);
      const bh = 140 + (Math.abs(i * 47) % 110);
      const by = height - 120 - bh;

      // Building silhouette
      ctx.fillStyle = '#10072B';
      ctx.fillRect(bx, by, bw, bh + 120);

      // Lit neon window grid
      const cols = Math.floor((bw - 16) / 10);
      const rows = Math.floor((bh - 20) / 14);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const seed = Math.abs(i * 31 + r * 13 + c * 7) % 10;
          if (seed > 4) {
            const winColor = seed === 5 ? 'rgba(0, 240, 255, 0.45)' : (seed === 6 ? 'rgba(255, 0, 127, 0.45)' : 'rgba(253, 224, 71, 0.35)');
            ctx.fillStyle = winColor;
            ctx.fillRect(bx + 8 + c * 10, by + 12 + r * 14, 5, 6);
          }
        }
      }

      // Spire antenna with blinking beacon
      if (Math.abs(i) % 3 === 0) {
        const antennaX = bx + bw / 2;
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(antennaX, by);
        ctx.lineTo(antennaX, by - 24);
        ctx.stroke();

        const beaconFlash = Math.sin(this.gameTime * 5 + i * 2) > 0.2;
        if (beaconFlash) {
          ctx.fillStyle = i % 2 === 0 ? '#EF4444' : '#00F0FF';
          ctx.beginPath();
          ctx.arc(antennaX, by - 24, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.restore();

    // 5. Parallax Cyber City Skyline (Near Layer 2 - Darker with Neon Outline Highlights)
    ctx.save();
    const nearOffset = (camera.x * 0.2) % 300;
    const nearBldCount = 10;
    for (let i = -1; i < nearBldCount + 2; i++) {
      const bx = i * 160 - nearOffset;
      const bw = 120 + (Math.abs(i * 37) % 40);
      const bh = 100 + (Math.abs(i * 53) % 90);
      const by = height - 90 - bh;

      // Dark obsidian skyscraper
      ctx.fillStyle = '#080518';
      ctx.fillRect(bx, by, bw, bh + 90);

      // Neon roof trim edge
      const trimColor = i % 2 === 0 ? '#00F0FF' : '#FF007F';
      ctx.fillStyle = trimColor;
      ctx.globalAlpha = 0.8;
      ctx.fillRect(bx, by, bw, 2.5);

      // Vertical neon light strip down building facade
      ctx.globalAlpha = 0.6;
      ctx.fillRect(bx + 8, by + 2, 2, bh);
      ctx.fillRect(bx + bw - 10, by + 2, 2, bh);
      ctx.globalAlpha = 1.0;

      // Floating holographic billboard icon on some buildings
      if (Math.abs(i) % 4 === 1) {
        const hx = bx + bw * 0.5;
        const hy = by + 28;
        const pulse = 0.4 + 0.3 * Math.sin(this.gameTime * 3 + i);
        ctx.save();
        ctx.globalAlpha = pulse;
        ctx.strokeStyle = '#00F0FF';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(hx - 18, hy - 10, 36, 20);
        ctx.fillStyle = '#FF007F';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('NEON', hx, hy + 3);
        ctx.restore();
      }
    }
    ctx.restore();

    // 6. 3D Perspective Digital Cyber Grid (Horizon Grid at bottom)
    ctx.save();
    const gridY = height - 80;
    const gridGrad = ctx.createLinearGradient(0, gridY, 0, height);
    gridGrad.addColorStop(0, 'rgba(6, 3, 18, 0.9)');
    gridGrad.addColorStop(1, 'rgba(22, 5, 47, 0.95)');
    ctx.fillStyle = gridGrad;
    ctx.fillRect(0, gridY, width, height - gridY);

    // Glowing horizon separation line
    ctx.strokeStyle = '#FF007F';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.moveTo(0, gridY);
    ctx.lineTo(width, gridY);
    ctx.stroke();

    // Perspective converging rays radiating from vanishing point
    const vpX = width * 0.5 - (camera.x * 0.05) % width;
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
    ctx.lineWidth = 1.2;
    const numRays = 18;
    for (let r = 0; r <= numRays; r++) {
      const bottomX = (r / numRays) * (width + 400) - 200;
      ctx.beginPath();
      ctx.moveTo(vpX, gridY);
      ctx.lineTo(bottomX, height);
      ctx.stroke();
    }

    // Scrolling horizontal grid lines
    const gridScroll = (camera.x * 0.35 + this.gameTime * 25) % 18;
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
    for (let d = 0; d < 5; d++) {
      const t = (d * 18 + gridScroll) / 90;
      if (t > 0 && t <= 1) {
        const lineY = gridY + Math.pow(t, 1.8) * (height - gridY);
        ctx.lineWidth = 0.8 + t * 1.5;
        ctx.globalAlpha = 0.2 + t * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();
      }
    }
    ctx.restore();

    // 7. Floating Neon Cyber Motes / Upward Drifting Data Embers
    ctx.save();
    for (let p = 0; p < 18; p++) {
      const px = ((p * 181 + 67) - camera.x * 0.15 + width * 10) % width;
      const cycle = (this.gameTime * 20 + p * 37) % height;
      const py = height - cycle;
      const wobble = Math.sin(this.gameTime * 2 + p) * 10;
      const pColor = p % 2 === 0 ? '#00F0FF' : '#FF007F';
      const pAlpha = 0.2 + 0.6 * Math.sin((cycle / height) * Math.PI);

      ctx.globalAlpha = pAlpha;
      ctx.fillStyle = pColor;
      ctx.beginPath();
      ctx.arc(px + wobble, py, p % 3 === 0 ? 2 : 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private drawSpaceBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;

    // 1. Deep Inky Cosmic Void Gradient
    const voidGrad = ctx.createLinearGradient(0, 0, 0, height);
    voidGrad.addColorStop(0, '#010008');
    voidGrad.addColorStop(0.45, '#070314');
    voidGrad.addColorStop(1, '#110526');
    ctx.fillStyle = voidGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Translucent Cosmic Nebulae Clouds (Parallax drifting galaxy dust)
    ctx.save();
    // Violet Nebula
    const neb1X = ((width * 0.28) - (camera.x * 0.02) + width * 2) % (width + 400) - 200;
    const neb1Y = height * 0.35;
    const neb1Grad = ctx.createRadialGradient(neb1X, neb1Y, 20, neb1X, neb1Y, 260);
    neb1Grad.addColorStop(0, 'rgba(124, 58, 237, 0.26)');
    neb1Grad.addColorStop(0.5, 'rgba(147, 51, 234, 0.12)');
    neb1Grad.addColorStop(1, 'rgba(124, 58, 237, 0)');
    ctx.fillStyle = neb1Grad;
    ctx.fillRect(neb1X - 260, neb1Y - 260, 520, 520);

    // Cyan/Blue Stellar Nursery
    const neb2X = ((width * 0.72) - (camera.x * 0.035) + width * 2) % (width + 400) - 200;
    const neb2Y = height * 0.52;
    const neb2Grad = ctx.createRadialGradient(neb2X, neb2Y, 30, neb2X, neb2Y, 280);
    neb2Grad.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
    neb2Grad.addColorStop(0.55, 'rgba(30, 64, 175, 0.12)');
    neb2Grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = neb2Grad;
    ctx.fillRect(neb2X - 280, neb2Y - 280, 560, 560);
    ctx.restore();

    // 3. Multi-layer Parallax Starfield & Constellations
    ctx.save();
    for (let i = 0; i < 56; i++) {
      const sx = ((i * 139 + 31) - camera.x * 0.025 + width * 10) % width;
      const sy = (i * 83 + 19) % (height * 0.85);
      const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(this.gameTime * 2.2 + i * 1.3));
      const starColor = i % 4 === 0 ? '#38BDF8' : (i % 4 === 1 ? '#C084FC' : '#F8FAFC');

      ctx.globalAlpha = twinkle;
      ctx.fillStyle = starColor;
      ctx.fillRect(sx, sy, i % 5 === 0 ? 2 : 1.2, i % 5 === 0 ? 2 : 1.2);

      // Diffraction cross on the brightest major stars
      if (i % 7 === 0) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(sx - 3, sy, 7, 1);
        ctx.fillRect(sx, sy - 3, 1, 7);
      }
    }

    // Faint Constellation Tracer Lines
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    const cX1 = ((220) - camera.x * 0.025 + width * 10) % width;
    const cX2 = ((310) - camera.x * 0.025 + width * 10) % width;
    const cX3 = ((390) - camera.x * 0.025 + width * 10) % width;
    if (Math.abs(cX1 - cX2) < 200 && Math.abs(cX2 - cX3) < 200) {
      ctx.moveTo(cX1, 140);
      ctx.lineTo(cX2, 190);
      ctx.lineTo(cX3, 160);
      ctx.stroke();
    }
    ctx.restore();

    // 4. Majestic Ringed Exoplanet & Moon
    ctx.save();
    const planetX = ((width * 0.78) - (camera.x * 0.04) + width * 3) % (width + 360) - 80;
    const planetY = height * 0.26;
    const pRadius = 46;

    // Back half of planetary rings (drawn behind planet)
    ctx.save();
    ctx.translate(planetX, planetY);
    ctx.rotate(-0.35);
    ctx.beginPath();
    ctx.ellipse(0, 0, pRadius * 2.2, pRadius * 0.52, 0, Math.PI, 0);
    ctx.strokeStyle = 'rgba(147, 197, 253, 0.45)';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, 0, pRadius * 2.38, pRadius * 0.56, 0, Math.PI, 0);
    ctx.strokeStyle = 'rgba(192, 132, 252, 0.35)';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    // Planet Body Sphere
    const pGrad = ctx.createRadialGradient(
      planetX - pRadius * 0.35, planetY - pRadius * 0.35, pRadius * 0.1,
      planetX, planetY, pRadius
    );
    pGrad.addColorStop(0, '#93C5FD');
    pGrad.addColorStop(0.3, '#3B82F6');
    pGrad.addColorStop(0.7, '#1E1B4B');
    pGrad.addColorStop(1, '#020617');
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.arc(planetX, planetY, pRadius, 0, Math.PI * 2);
    ctx.fill();

    // Planet Atmospheric Rim Glow
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Surface Atmospheric Bands
    ctx.save();
    ctx.beginPath();
    ctx.arc(planetX, planetY, pRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.35)';
    ctx.fillRect(planetX - pRadius, planetY - 14, pRadius * 2, 7);
    ctx.fillRect(planetX - pRadius, planetY + 8, pRadius * 2, 9);
    ctx.fillRect(planetX - pRadius, planetY + 24, pRadius * 2, 5);
    ctx.restore();

    // Front half of planetary rings (drawn in front of planet)
    ctx.save();
    ctx.translate(planetX, planetY);
    ctx.rotate(-0.35);
    ctx.beginPath();
    ctx.ellipse(0, 0, pRadius * 2.2, pRadius * 0.52, 0, 0, Math.PI);
    ctx.strokeStyle = 'rgba(147, 197, 253, 0.55)';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, 0, pRadius * 2.38, pRadius * 0.56, 0, 0, Math.PI);
    ctx.strokeStyle = 'rgba(192, 132, 252, 0.45)';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    // Distant Cratered Moon
    const moonX = planetX - 82;
    const moonY = planetY + 54;
    const moonGrad = ctx.createRadialGradient(moonX - 3, moonY - 3, 2, moonX, moonY, 13);
    moonGrad.addColorStop(0, '#E2E8F0');
    moonGrad.addColorStop(0.5, '#64748B');
    moonGrad.addColorStop(1, '#0F172A');
    ctx.fillStyle = moonGrad;
    ctx.beginPath();
    ctx.arc(moonX, moonY, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 5. Distant Orbital Space Station Silhouette
    ctx.save();
    const stX = ((width * 0.18) - (camera.x * 0.06) + width * 2) % (width + 400) - 100;
    const stY = height * 0.48;
    ctx.fillStyle = '#090D1A';
    // Central Hub
    ctx.fillRect(stX, stY, 44, 18);
    // Solar Array Wings
    ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
    ctx.fillRect(stX - 36, stY + 2, 32, 14);
    ctx.fillRect(stX + 48, stY + 2, 32, 14);
    // Antenna Mast
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(stX + 22, stY);
    ctx.lineTo(stX + 22, stY - 14);
    ctx.stroke();
    // Blinking Navigation Beacons
    const beaconPulse = Math.sin(this.gameTime * 4) > 0 ? 1 : 0.2;
    ctx.fillStyle = `rgba(239, 68, 68, ${beaconPulse})`;
    ctx.fillRect(stX + 21, stY - 15, 2, 2);
    ctx.fillStyle = `rgba(34, 197, 94, ${beaconPulse})`;
    ctx.fillRect(stX - 36, stY + 1, 2, 2);
    ctx.restore();

    // 6. Floating Cosmic Stardust Motes
    ctx.save();
    for (let p = 0; p < 20; p++) {
      const px = ((p * 179 + 53) - camera.x * 0.12 + width * 10) % width;
      const cycle = (this.gameTime * 18 + p * 41) % height;
      const py = height - cycle;
      const wobble = Math.sin(this.gameTime * 2 + p) * 8;
      const pColor = p % 2 === 0 ? '#38BDF8' : '#C084FC';
      const pAlpha = 0.2 + 0.5 * Math.sin((cycle / height) * Math.PI);

      ctx.globalAlpha = pAlpha;
      ctx.fillStyle = pColor;
      ctx.beginPath();
      ctx.arc(px + wobble, py, p % 3 === 0 ? 2 : 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private drawVolcanoBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;
    const { theme } = level;

    // 1. Smoky Ash Sky Gradient (Charcoal black to deep dark crimson to burning magma)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, theme.skyColorTop || '#0C0202');
    skyGrad.addColorStop(0.45, '#2D0505');
    skyGrad.addColorStop(0.85, theme.skyColorBottom || '#5C0F0F');
    skyGrad.addColorStop(1, '#831808');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Parallax Distant Calderas & Volcanic Mountain Peaks (Layer 1 - slow)
    ctx.save();
    ctx.fillStyle = theme.mountainColor || '#1E0505';
    ctx.globalAlpha = 0.55;
    const caldOffset = (camera.x * 0.1) % 500;
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let x = -500; x < width + 500; x += 250) {
      const peakX = x - caldOffset;
      const peakY = height - 260 - Math.sin(x * 0.008) * 90;
      // Crater flat top
      ctx.lineTo(peakX, peakY);
      ctx.lineTo(peakX + 40, peakY + 12);
      ctx.lineTo(peakX + 70, peakY);
      ctx.lineTo(peakX + 130, height - 120);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Lava rivers flowing down distant peaks
    ctx.strokeStyle = '#EA580C';
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = 0.75;
    for (let x = -500; x < width + 500; x += 250) {
      const peakX = x - caldOffset;
      const peakY = height - 260 - Math.sin(x * 0.008) * 90;
      ctx.beginPath();
      ctx.moveTo(peakX + 55, peakY + 6);
      ctx.quadraticCurveTo(peakX + 45, peakY + 70, peakX + 75, height - 90);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Parallax Mid Basalt Crags (Layer 2 - medium)
    ctx.save();
    ctx.fillStyle = '#140303';
    ctx.globalAlpha = 0.75;
    const cragOffset = (camera.x * 0.28) % 360;
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let x = -360; x < width + 360; x += 180) {
      const cragX = x - cragOffset;
      const cragY = height - 160 - Math.cos(x * 0.015) * 55;
      ctx.lineTo(cragX, cragY);
      ctx.lineTo(cragX + 90, height - 90);
    }
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Glowing magma rim on mid crags
    ctx.strokeStyle = '#DC2626';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    for (let x = -360; x < width + 360; x += 180) {
      const cragX = x - cragOffset;
      const cragY = height - 160 - Math.cos(x * 0.015) * 55;
      if (x === -360) ctx.moveTo(cragX, cragY);
      else ctx.lineTo(cragX, cragY);
      ctx.lineTo(cragX + 90, height - 90);
    }
    ctx.stroke();
    ctx.restore();

    // 4. Billowing Smoldering Ash & Smoke Clouds
    ctx.save();
    const cloudTime = this.gameTime * 12;
    const smokeOffset = (camera.x * 0.18 + cloudTime) % (width + 360);
    for (let i = 0; i < 5; i++) {
      const sx = (i * 260 - smokeOffset + width * 2) % (width + 360) - 120;
      const sy = 40 + (i % 3) * 50;
      const r = 55 + (i % 2) * 25;
      ctx.fillStyle = 'rgba(40, 8, 8, 0.45)';
      ctx.beginPath();
      ctx.arc(sx, sy, r * 0.5, 0, Math.PI * 2);
      ctx.arc(sx + r * 0.4, sy - r * 0.2, r * 0.6, 0, Math.PI * 2);
      ctx.arc(sx + r * 0.8, sy, r * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // Glowing under-edge of ash clouds
      ctx.fillStyle = 'rgba(234, 88, 12, 0.18)';
      ctx.beginPath();
      ctx.arc(sx + r * 0.4, sy + r * 0.1, r * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 5. Rising Fiery Sparks & Lava Embers
    ctx.save();
    for (let p = 0; p < 26; p++) {
      const px = ((p * 167 + 41) - camera.x * 0.14 + width * 10) % width;
      const cycle = (this.gameTime * 24 + p * 43) % height;
      const py = height - cycle;
      const wobble = Math.sin(this.gameTime * 3 + p) * 10;
      const emberAlpha = 0.25 + 0.65 * Math.sin((cycle / height) * Math.PI);
      const emberColor = p % 3 === 0 ? '#FEF08A' : (p % 3 === 1 ? '#F97316' : '#EF4444');

      ctx.globalAlpha = emberAlpha;
      ctx.fillStyle = emberColor;
      ctx.beginPath();
      ctx.arc(px + wobble, py, p % 4 === 0 ? 2 : 1.3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 6. Subterranean Boiling Magma Horizon Glow (At bottom of screen)
    ctx.save();
    const bottomGlow = ctx.createLinearGradient(0, height - 70, 0, height);
    bottomGlow.addColorStop(0, 'rgba(234, 88, 12, 0)');
    bottomGlow.addColorStop(0.6, 'rgba(220, 38, 38, 0.25)');
    bottomGlow.addColorStop(1, 'rgba(249, 115, 22, 0.45)');
    ctx.fillStyle = bottomGlow;
    ctx.fillRect(0, height - 70, width, 70);
    ctx.restore();
  }

  private drawGlacierBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;

    // 1. Polar Night Sky Gradient (Arctic Void to Twilight Deep Indigo Navy)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, '#020617');
    skyGrad.addColorStop(0.35, '#0B192C');
    skyGrad.addColorStop(0.75, '#0A2540');
    skyGrad.addColorStop(1, '#083344');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Starfield & Arctic Crystals (Parallax twinkle with cross spikes)
    ctx.save();
    for (let i = 0; i < 75; i++) {
      const sx = ((i * 137.5 + camera.x * 0.03) % (width + 60)) - 30;
      const sy = (i * 97.3) % (height * 0.65);
      const twinkle = Math.sin(this.gameTime * 3 + i * 2.1) * 0.5 + 0.5;
      const size = (i % 5 === 0 ? 2.2 : 1.2) * (0.6 + twinkle * 0.4);

      ctx.fillStyle = i % 3 === 0 ? '#BAE6FD' : (i % 4 === 0 ? '#E0F2FE' : '#FFFFFF');
      ctx.globalAlpha = 0.35 + twinkle * 0.6;
      ctx.beginPath();
      ctx.arc(sx, sy, size, 0, Math.PI * 2);
      ctx.fill();

      // Cross spikes for bright crystal stars
      if (i % 8 === 0 && twinkle > 0.6) {
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(sx - 4, sy); ctx.lineTo(sx + 4, sy);
        ctx.moveTo(sx, sy - 4); ctx.lineTo(sx, sy + 4);
        ctx.stroke();
      }
    }
    ctx.restore();

    // 3. Dynamic Waving Aurora Borealis Ribbons (Northern Lights)
    ctx.save();
    // 3 layered undulating aurora curtains: Emerald Green, Electric Cyan, Amethyst Purple
    const auroraBands = [
      { color1: 'rgba(16, 185, 129, 0.4)', color2: 'rgba(16, 185, 129, 0)', yBase: height * 0.22, amp: 45, freq: 0.0035, speed: 0.8 },
      { color1: 'rgba(6, 182, 212, 0.45)', color2: 'rgba(6, 182, 212, 0)', yBase: height * 0.28, amp: 55, freq: 0.0028, speed: 1.1 },
      { color1: 'rgba(168, 85, 247, 0.35)', color2: 'rgba(168, 85, 247, 0)', yBase: height * 0.35, amp: 40, freq: 0.0042, speed: 0.6 }
    ];

    auroraBands.forEach((band, bandIdx) => {
      ctx.beginPath();
      const waveOffset = this.gameTime * band.speed;
      const camOffset = camera.x * (0.05 + bandIdx * 0.02);

      // Top edge of aurora wave
      ctx.moveTo(0, 0);
      for (let x = 0; x <= width + 40; x += 25) {
        const worldX = x + camOffset;
        const waveY = band.yBase + Math.sin(worldX * band.freq + waveOffset) * band.amp + Math.cos(worldX * band.freq * 2.1 - waveOffset * 0.7) * (band.amp * 0.4);
        ctx.lineTo(x, waveY);
      }
      ctx.lineTo(width, 0);
      ctx.closePath();

      const auroraGrad = ctx.createLinearGradient(0, band.yBase - band.amp, 0, band.yBase + band.amp * 2.2);
      auroraGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      auroraGrad.addColorStop(0.45, band.color1);
      auroraGrad.addColorStop(1, band.color2);
      ctx.fillStyle = auroraGrad;
      ctx.fill();

      // Vertical shimmer striations / light pillars
      ctx.save();
      ctx.globalAlpha = 0.22;
      for (let x = 0; x <= width; x += 40) {
        const worldX = x + camOffset;
        const waveY = band.yBase + Math.sin(worldX * band.freq + waveOffset) * band.amp;
        const pillarHeight = 70 + Math.sin(worldX * 0.02 + this.gameTime * 2) * 30;
        const pGrad = ctx.createLinearGradient(x, waveY - pillarHeight, x, waveY);
        pGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        pGrad.addColorStop(0.6, band.color1);
        pGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = pGrad;
        ctx.fillRect(x - 6, waveY - pillarHeight, 12, pillarHeight);
      }
      ctx.restore();
    });
    ctx.restore();

    // 4. Parallax Layer 1: Distant Jagged Glacial Ice Spires (camera.x * 0.12)
    ctx.save();
    ctx.fillStyle = '#081726';
    ctx.strokeStyle = '#0E3B5A';
    ctx.lineWidth = 1.5;
    const offset1 = (camera.x * 0.12) % 600;
    ctx.beginPath();
    ctx.moveTo(-600, height);
    for (let x = -600; x < width + 600; x += 150) {
      const px = x - offset1;
      const peakY = height - 240 - Math.abs(Math.sin(x * 0.015)) * 140;
      ctx.lineTo(px, peakY);
      ctx.lineTo(px + 75, height - 120);
    }
    ctx.lineTo(width + 600, height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Rim gleam on distant ice peaks
    ctx.strokeStyle = 'rgba(125, 211, 252, 0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // 5. Parallax Layer 2: Mid-ground Glacial Ice Floes & Frozen Peaks (camera.x * 0.28)
    ctx.save();
    const offset2 = (camera.x * 0.28) % 400;
    const midGrad = ctx.createLinearGradient(0, height - 220, 0, height);
    midGrad.addColorStop(0, '#0F2642');
    midGrad.addColorStop(1, '#051324');
    ctx.fillStyle = midGrad;
    ctx.beginPath();
    ctx.moveTo(-400, height);
    for (let x = -400; x < width + 400; x += 100) {
      const px = x - offset2;
      const py = height - 140 - Math.sin(x * 0.02) * 55;
      ctx.lineTo(px, py);
      ctx.lineTo(px + 50, height - 80);
    }
    ctx.lineTo(width + 400, height);
    ctx.closePath();
    ctx.fill();

    // Glacial Ice Shading & Crystal Edges on mid peaks
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.55;
    ctx.stroke();
    ctx.restore();

    // 6. Swirling Drifting Snowflakes & Crystalline Frost Motes
    ctx.save();
    for (let p = 0; p < 65; p++) {
      const seed = p * 131.7;
      const speed = 25 + (p % 5) * 15;
      const px = ((seed + camera.x * 0.15 + this.gameTime * speed) % (width + 60)) - 30;
      const py = ((seed * 1.6 + this.gameTime * 45) % (height + 40)) - 20;
      const sway = Math.sin(this.gameTime * 2.5 + p) * 12;
      const pAlpha = 0.35 + (p % 4) * 0.18;

      ctx.globalAlpha = pAlpha;
      ctx.fillStyle = p % 3 === 0 ? '#E0F2FE' : (p % 2 === 0 ? '#7DD3FC' : '#FFFFFF');
      ctx.beginPath();
      ctx.arc(px + sway, py, p % 4 === 0 ? 2.4 : 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 7. Sub-Zero Ground Freeze Fog / Cryo-Mist (Bottom horizon glow)
    ctx.save();
    const bottomMist = ctx.createLinearGradient(0, height - 80, 0, height);
    bottomMist.addColorStop(0, 'rgba(6, 182, 212, 0)');
    bottomMist.addColorStop(0.5, 'rgba(56, 189, 248, 0.18)');
    bottomMist.addColorStop(1, 'rgba(224, 242, 254, 0.4)');
    ctx.fillStyle = bottomMist;
    ctx.fillRect(0, height - 80, width, 80);
    ctx.restore();
  }

  private drawDeepSeaBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;

    // 1. Deep Submerged Abyssal Ocean Gradient
    const seaGrad = ctx.createLinearGradient(0, 0, 0, height);
    seaGrad.addColorStop(0, '#020B14');    // Deep midnight ocean abyss
    seaGrad.addColorStop(0.35, '#031E30'); // Mid water column
    seaGrad.addColorStop(0.75, '#042A42'); // Sunken trench floor
    seaGrad.addColorStop(1, '#021828');    // Deepest abyssal seabed
    ctx.fillStyle = seaGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Crepuscular Light Shafts / Sunken Water Caustics from above
    ctx.save();
    const shaftCount = 6;
    for (let s = 0; s < shaftCount; s++) {
      const shaftOffset = (camera.x * 0.05 + s * 140) % (width + 200) - 100;
      const angleWobble = Math.sin(this.gameTime * 0.8 + s) * 0.08;
      const shaftWidth = 60 + Math.sin(this.gameTime + s * 2) * 15;
      
      const shaftGrad = ctx.createLinearGradient(shaftOffset, 0, shaftOffset + 120, height * 0.85);
      shaftGrad.addColorStop(0, 'rgba(56, 189, 248, 0.18)');
      shaftGrad.addColorStop(0.4, 'rgba(34, 211, 238, 0.08)');
      shaftGrad.addColorStop(0.85, 'rgba(6, 182, 212, 0.02)');
      shaftGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = shaftGrad;
      ctx.beginPath();
      ctx.moveTo(shaftOffset - shaftWidth * 0.3, 0);
      ctx.lineTo(shaftOffset + shaftWidth * 0.7, 0);
      ctx.lineTo(shaftOffset + 180 + angleWobble * 100, height * 0.85);
      ctx.lineTo(shaftOffset + 80 + angleWobble * 100, height * 0.85);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    // 3. Parallax Layer 1: Distant Abyssal Trench Walls & Sunken Sea Chimneys (camera.x * 0.08)
    ctx.save();
    ctx.fillStyle = '#010E18';
    ctx.strokeStyle = '#032035';
    ctx.lineWidth = 1.5;
    const trenchOffset = (camera.x * 0.08) % 500;
    ctx.beginPath();
    ctx.moveTo(-500, height);
    for (let x = -500; x < width + 500; x += 125) {
      const px = x - trenchOffset;
      const py = height - 220 - Math.abs(Math.sin(x * 0.012)) * 120;
      ctx.lineTo(px, py);
      ctx.lineTo(px + 60, height - 100);
    }
    ctx.lineTo(width + 500, height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 4. Parallax Layer 2: Mid-ground Coral Reefs & Swaying Giant Kelp (camera.x * 0.22)
    ctx.save();
    const reefOffset = (camera.x * 0.22) % 360;
    const midGrad = ctx.createLinearGradient(0, height - 180, 0, height);
    midGrad.addColorStop(0, '#042236');
    midGrad.addColorStop(1, '#021220');
    ctx.fillStyle = midGrad;
    ctx.beginPath();
    ctx.moveTo(-360, height);
    for (let x = -360; x < width + 360; x += 90) {
      const px = x - reefOffset;
      const py = height - 130 - Math.sin(x * 0.025) * 45;
      ctx.lineTo(px, py);
      ctx.lineTo(px + 45, height - 70);
    }
    ctx.lineTo(width + 360, height);
    ctx.closePath();
    ctx.fill();

    // Swaying Giant Kelp Fronds
    ctx.strokeStyle = 'rgba(13, 148, 136, 0.45)';
    ctx.lineWidth = 4;
    for (let k = 0; k < 12; k++) {
      const kx = ((k * 120 + 35) - camera.x * 0.22 + width * 2) % (width + 100) - 50;
      const ky = height;
      const kelpHeight = 160 + (k % 3) * 40;
      const sway = Math.sin(this.gameTime * 2.0 + k) * 18;

      ctx.beginPath();
      ctx.moveTo(kx, ky);
      ctx.quadraticCurveTo(kx + sway * 0.5, ky - kelpHeight * 0.5, kx + sway, ky - kelpHeight);
      ctx.stroke();

      // Kelp leaf pods
      ctx.fillStyle = 'rgba(45, 212, 191, 0.35)';
      ctx.beginPath();
      ctx.ellipse(kx + sway, ky - kelpHeight, 8, 4, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 5. Rising Ambient Sea Bubbles (Multi-sized buoyant bubbles floating up)
    ctx.save();
    for (let b = 0; b < 50; b++) {
      const seed = b * 117.3;
      const speed = 25 + (b % 5) * 12;
      const bx = ((seed + camera.x * 0.12 + Math.sin(this.gameTime * 2 + b) * 10) % (width + 40)) - 20;
      const cycle = (this.gameTime * speed + seed * 2) % (height + 30);
      const by = height - cycle;
      const bRadius = 1.5 + (b % 4) * 1.2;
      const bAlpha = 0.3 + 0.45 * Math.sin((cycle / height) * Math.PI);

      ctx.globalAlpha = bAlpha;
      ctx.fillStyle = 'rgba(186, 230, 253, 0.6)';
      ctx.beginPath();
      ctx.arc(bx, by, bRadius, 0, Math.PI * 2);
      ctx.fill();

      // Glossy highlight on bubble
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(bx - bRadius * 0.3, by - bRadius * 0.3, bRadius * 0.35, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 6. Glowing Bioluminescent Marine Snow / Plankton
    ctx.save();
    for (let p = 0; p < 35; p++) {
      const px = ((p * 153 + 47) - camera.x * 0.06 + width * 10) % width;
      const py = (p * 89 + this.gameTime * 8) % (height * 0.9);
      const pulse = Math.sin(this.gameTime * 3 + p * 1.5) * 0.5 + 0.5;
      const pColor = p % 2 === 0 ? '#22D3EE' : '#34D399';

      ctx.globalAlpha = 0.25 + pulse * 0.55;
      ctx.fillStyle = pColor;
      ctx.beginPath();
      ctx.arc(px, py, 1.8 + pulse, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 7. Ambient Bioluminescent Trench Mist (Seabed glow)
    ctx.save();
    const bedMist = ctx.createLinearGradient(0, height - 100, 0, height);
    bedMist.addColorStop(0, 'rgba(6, 182, 212, 0)');
    bedMist.addColorStop(0.6, 'rgba(6, 182, 212, 0.15)');
    bedMist.addColorStop(1, 'rgba(13, 148, 136, 0.32)');
    ctx.fillStyle = bedMist;
    ctx.fillRect(0, height - 100, width, 100);
    ctx.restore();
  }

  private drawMedievalCastleBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;
    const { theme } = level;

    // 1. Deep Midnight Gothic Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, theme.skyColorTop || '#080612');      // Obsidian gothic void
    skyGrad.addColorStop(0.55, '#150E26');                        // Stormy twilight purple
    skyGrad.addColorStop(1, theme.skyColorBottom || '#1E1532');   // Deep plum horizon
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Large Mystic Blood/Pale Full Moon with Ominous Glow
    ctx.save();
    const moonX = ((width * 0.72 - camera.x * 0.03) % (width + 300) + width + 300) % (width + 300) - 150;
    const moonY = height * 0.22;
    const moonR = Math.min(65, Math.max(45, height * 0.12));

    // Outer moon halo glow
    const moonGlow = ctx.createRadialGradient(moonX, moonY, moonR * 0.6, moonX, moonY, moonR * 2.2);
    moonGlow.addColorStop(0, 'rgba(251, 191, 36, 0.22)');
    moonGlow.addColorStop(0.5, 'rgba(147, 51, 234, 0.12)');
    moonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = moonGlow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR * 2.2, 0, Math.PI * 2);
    ctx.fill();

    // Moon disc
    const moonGrad = ctx.createRadialGradient(moonX - moonR * 0.3, moonY - moonR * 0.3, moonR * 0.2, moonX, moonY, moonR);
    moonGrad.addColorStop(0, '#FEF3C7');
    moonGrad.addColorStop(0.7, '#FDE68A');
    moonGrad.addColorStop(1, '#D97706');
    ctx.fillStyle = moonGrad;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
    ctx.fill();

    // Lunar Maria / Crater silhouettes
    ctx.fillStyle = 'rgba(180, 83, 9, 0.25)';
    ctx.beginPath();
    ctx.arc(moonX - moonR * 0.25, moonY - moonR * 0.1, moonR * 0.32, 0, Math.PI * 2);
    ctx.arc(moonX + moonR * 0.3, moonY + moonR * 0.2, moonR * 0.22, 0, Math.PI * 2);
    ctx.arc(moonX + moonR * 0.05, moonY + moonR * 0.35, moonR * 0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 3. Rolling Gothic Thunderhead Clouds across sky
    ctx.save();
    ctx.fillStyle = 'rgba(30, 21, 50, 0.45)';
    for (let c = 0; c < 5; c++) {
      const cx = ((c * 260 + this.gameTime * 6 - camera.x * 0.04) % (width + 300) + width + 300) % (width + 300) - 150;
      const cy = height * 0.15 + (c % 3) * 35;
      ctx.beginPath();
      ctx.arc(cx, cy, 55, 0, Math.PI * 2);
      ctx.arc(cx + 45, cy - 10, 45, 0, Math.PI * 2);
      ctx.arc(cx + 90, cy + 5, 50, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 4. Parallax Layer 1: Distant Crags & Gothic Spire Towers (camera.x * 0.06)
    ctx.save();
    ctx.fillStyle = '#0D091A';
    ctx.strokeStyle = '#18112C';
    ctx.lineWidth = 1.2;
    const distantOffset = (camera.x * 0.06) % 600;
    ctx.beginPath();
    ctx.moveTo(-600, height);
    for (let x = -600; x < width + 600; x += 150) {
      const px = x - distantOffset;
      const towerHeight = 220 + Math.abs(Math.sin(x * 0.015)) * 140;
      const py = height - towerHeight;
      // Castle spire profile
      ctx.lineTo(px, height - 120);
      ctx.lineTo(px + 30, py + 50);
      ctx.lineTo(px + 45, py); // Spire peak
      ctx.lineTo(px + 60, py + 50);
      ctx.lineTo(px + 90, height - 130);
    }
    ctx.lineTo(width + 600, height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 5. Parallax Layer 2: Mid-ground Fortress Ramparts, Buttresses & Stained Glass Rosettes (camera.x * 0.18)
    ctx.save();
    const rampartOffset = (camera.x * 0.18) % 400;
    const midWallGrad = ctx.createLinearGradient(0, height - 260, 0, height);
    midWallGrad.addColorStop(0, '#1A1429');
    midWallGrad.addColorStop(1, '#0C0816');
    ctx.fillStyle = midWallGrad;
    ctx.strokeStyle = '#281E3E';
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(-400, height);
    for (let x = -400; x < width + 400; x += 200) {
      const rx = x - rampartOffset;
      const wallTop = height - 200 - ((Math.abs(x) / 200) % 2 === 0 ? 40 : 0);
      ctx.lineTo(rx, wallTop);
      // Crenellations
      for (let cr = 0; cr < 4; cr++) {
        const cx = rx + cr * 50;
        ctx.lineTo(cx + 10, wallTop);
        ctx.lineTo(cx + 10, wallTop + 14);
        ctx.lineTo(cx + 25, wallTop + 14);
        ctx.lineTo(cx + 25, wallTop);
        ctx.lineTo(cx + 45, wallTop);
      }
    }
    ctx.lineTo(width + 400, height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Midground Gothic Arched Stained Glass Windows
    for (let x = -400; x < width + 400; x += 200) {
      const wx = x - rampartOffset + 60;
      const wy = height - 160;
      // Stained glass arched window frame
      ctx.fillStyle = '#0F0B18';
      ctx.beginPath();
      ctx.arc(wx + 16, wy, 16, Math.PI, 0);
      ctx.lineTo(wx + 32, wy + 45);
      ctx.lineTo(wx, wy + 45);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#3B2D54';
      ctx.stroke();

      // Glowing Stained Glass panes (amber/ruby/amethyst)
      const glowGrad = ctx.createLinearGradient(wx, wy - 16, wx, wy + 45);
      glowGrad.addColorStop(0, 'rgba(245, 158, 11, 0.45)');
      glowGrad.addColorStop(0.5, 'rgba(219, 39, 119, 0.4)');
      glowGrad.addColorStop(1, 'rgba(129, 140, 248, 0.35)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(wx + 16, wy, 13, Math.PI, 0);
      ctx.lineTo(wx + 29, wy + 42);
      ctx.lineTo(wx + 3, wy + 42);
      ctx.closePath();
      ctx.fill();

      // Window tracery mullions
      ctx.strokeStyle = 'rgba(15, 11, 24, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(wx + 16, wy - 13);
      ctx.lineTo(wx + 16, wy + 42);
      ctx.moveTo(wx + 3, wy + 16);
      ctx.lineTo(wx + 29, wy + 16);
      ctx.stroke();
    }

    // Midground Wall Torches with Animated Fire & Embers
    for (let x = -400; x < width + 400; x += 200) {
      const tx = x - rampartOffset + 140;
      const ty = height - 145;

      // Iron bracket
      ctx.fillStyle = '#334155';
      ctx.fillRect(tx - 2, ty + 6, 4, 16);
      ctx.fillRect(tx - 4, ty + 18, 8, 3);
      // Brazier cup
      ctx.fillStyle = '#1E293B';
      ctx.beginPath();
      ctx.moveTo(tx - 6, ty + 6);
      ctx.lineTo(tx + 6, ty + 6);
      ctx.lineTo(tx + 4, ty + 12);
      ctx.lineTo(tx - 4, ty + 12);
      ctx.closePath();
      ctx.fill();

      // Warm torchlight glow aura
      const tGlow = ctx.createRadialGradient(tx, ty, 4, tx, ty, 55);
      tGlow.addColorStop(0, 'rgba(245, 158, 11, 0.32)');
      tGlow.addColorStop(0.4, 'rgba(239, 68, 68, 0.16)');
      tGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = tGlow;
      ctx.beginPath();
      ctx.arc(tx, ty, 55, 0, Math.PI * 2);
      ctx.fill();

      // Animated flickering flame
      const flameWobble = Math.sin(this.gameTime * 12 + x) * 2;
      const flameH = 12 + Math.cos(this.gameTime * 14 + x) * 3;
      const fGrad = ctx.createLinearGradient(tx, ty + 6, tx + flameWobble, ty + 6 - flameH);
      fGrad.addColorStop(0, '#EF4444');
      fGrad.addColorStop(0.5, '#F97316');
      fGrad.addColorStop(1, '#FEF08A');
      ctx.fillStyle = fGrad;
      ctx.beginPath();
      ctx.moveTo(tx - 5, ty + 6);
      ctx.quadraticCurveTo(tx - 3, ty, tx + flameWobble, ty + 6 - flameH);
      ctx.quadraticCurveTo(tx + 3, ty, tx + 5, ty + 6);
      ctx.closePath();
      ctx.fill();

      // Sparks / Embers rising
      ctx.fillStyle = '#FDE047';
      for (let em = 0; em < 2; em++) {
        const eProg = (this.gameTime * 2.5 + em * 0.5 + (x % 7) * 0.2) % 1;
        const ex = tx + Math.sin(this.gameTime * 4 + em * 3) * 6;
        const ey = ty - eProg * 28;
        ctx.globalAlpha = 1 - eProg;
        ctx.fillRect(ex - 1, ey - 1, 2, 2);
      }
      ctx.globalAlpha = 1;

      // Royal heraldry banner hanging beneath the torch
      const bannerW = 22;
      const bannerH = 46;
      const bx = tx - 11;
      const by = ty + 24;
      const sway = Math.sin(this.gameTime * 2.2 + x) * 2.5;

      ctx.fillStyle = theme.bannerRed || '#991B1B';
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx + bannerW, by);
      ctx.lineTo(bx + bannerW + sway, by + bannerH);
      ctx.lineTo(bx + bannerW / 2 + sway, by + bannerH - 8); // Swallowtail
      ctx.lineTo(bx + sway, by + bannerH);
      ctx.closePath();
      ctx.fill();

      // Gold embroidery trim
      ctx.strokeStyle = theme.bannerGold || '#FBBF24';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Gold heraldic emblem (diamond / fleur)
      ctx.fillStyle = theme.bannerGold || '#FBBF24';
      ctx.fillRect(bx + bannerW / 2 - 2 + sway * 0.5, by + 12, 4, 8);
      ctx.fillRect(bx + bannerW / 2 - 4 + sway * 0.5, by + 14, 8, 4);
    }
    ctx.restore();

    // 6. Ambient Mist over the fortress foundations
    ctx.save();
    const mistGrad = ctx.createLinearGradient(0, height - 90, 0, height);
    mistGrad.addColorStop(0, 'rgba(30, 21, 50, 0)');
    mistGrad.addColorStop(0.5, 'rgba(30, 21, 50, 0.2)');
    mistGrad.addColorStop(1, 'rgba(15, 10, 25, 0.45)');
    ctx.fillStyle = mistGrad;
    ctx.fillRect(0, height - 90, width, 90);
    ctx.restore();
  }

  private drawClockworkBackground(level: LevelData, camera: Camera, width: number, height: number) {
    const { ctx } = this;
    const { theme } = level;

    // 1. Soot & Boiler Smoke Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, theme.skyColorTop || '#0C0806');
    skyGrad.addColorStop(0.5, '#1B0F08');
    skyGrad.addColorStop(1, theme.skyColorBottom || '#26160C');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Colossal Parallax Clockwork Gears in Background (Layer 1 - slow, camera.x * 0.03)
    ctx.save();
    const gearList1 = [
      { xRel: 0.15, yRel: 0.35, r: 140, speed: 0.25, dir: 1, color: 'rgba(217, 119, 6, 0.10)', stroke: 'rgba(245, 158, 11, 0.18)', teeth: 16 },
      { xRel: 0.45, yRel: 0.20, r: 210, speed: 0.16, dir: -1, color: 'rgba(180, 83, 9, 0.09)', stroke: 'rgba(217, 119, 6, 0.15)', teeth: 24 },
      { xRel: 0.80, yRel: 0.40, r: 160, speed: 0.22, dir: 1, color: 'rgba(217, 119, 6, 0.10)', stroke: 'rgba(245, 158, 11, 0.18)', teeth: 18 }
    ];

    for (const g of gearList1) {
      const gx = ((width * g.xRel - camera.x * 0.03) % (width + 400) + width + 400) % (width + 400) - 200;
      const gy = height * g.yRel;
      const rot = this.gameTime * g.speed * g.dir;

      ctx.save();
      ctx.translate(gx, gy);
      ctx.rotate(rot);

      // Gear teeth
      ctx.fillStyle = g.color;
      ctx.strokeStyle = g.stroke;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let t = 0; t < g.teeth; t++) {
        const a1 = (t / g.teeth) * Math.PI * 2;
        const a2 = a1 + (Math.PI / g.teeth) * 0.6;
        ctx.lineTo(Math.cos(a1) * g.r, Math.sin(a1) * g.r);
        ctx.lineTo(Math.cos(a2) * (g.r * 0.85), Math.sin(a2) * (g.r * 0.85));
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Gear spokes
      for (let s = 0; s < 6; s++) {
        const sa = (s / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(sa) * (g.r * 0.8), Math.sin(sa) * (g.r * 0.8));
        ctx.stroke();
      }

      // Center Hub
      ctx.beginPath();
      ctx.arc(0, 0, g.r * 0.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();

    // 3. Parallax Layer 2: Midground Copper Pipes & Rotating Brass Cogs (camera.x * 0.07)
    ctx.save();
    const pipeOffset = (camera.x * 0.07) % 360;
    // Horizontal steam pipe truss
    ctx.fillStyle = '#1A100A';
    ctx.strokeStyle = '#78350F';
    ctx.lineWidth = 1.5;
    ctx.fillRect(0, height * 0.62, width, 12);
    ctx.strokeRect(0, height * 0.62, width, 12);

    // Pipe joints & flanges
    for (let px = -pipeOffset; px < width + 60; px += 120) {
      ctx.fillStyle = '#B45309';
      ctx.fillRect(px, height * 0.62 - 3, 10, 18);
      // Small brass rivet
      ctx.fillStyle = '#FEF08A';
      ctx.fillRect(px + 3, height * 0.62 + 3, 3, 3);
    }

    // Midground Interlocking Gears
    const gearList2 = [
      { xRel: 0.28, yRel: 0.58, r: 80, speed: 0.45, dir: -1, teeth: 12 },
      { xRel: 0.65, yRel: 0.55, r: 95, speed: 0.38, dir: 1, teeth: 14 }
    ];

    for (const g of gearList2) {
      const gx = ((width * g.xRel - camera.x * 0.07) % (width + 300) + width + 300) % (width + 300) - 150;
      const gy = height * g.yRel;
      const rot = this.gameTime * g.speed * g.dir;

      ctx.save();
      ctx.translate(gx, gy);
      ctx.rotate(rot);

      ctx.fillStyle = 'rgba(180, 83, 9, 0.18)';
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let t = 0; t < g.teeth; t++) {
        const a1 = (t / g.teeth) * Math.PI * 2;
        const a2 = a1 + (Math.PI / g.teeth) * 0.65;
        ctx.lineTo(Math.cos(a1) * g.r, Math.sin(a1) * g.r);
        ctx.lineTo(Math.cos(a2) * (g.r * 0.82), Math.sin(a2) * (g.r * 0.82));
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, g.r * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = '#26160C';
      ctx.fill();
      ctx.stroke();

      // Brass Center Rivet
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();

    // 4. Parallax Layer 3: Giant Background Clock Faces with illuminated needles (camera.x * 0.05)
    ctx.save();
    for (let cf = 0; cf < 3; cf++) {
      const cx = ((cf * 550 + 200 - camera.x * 0.05) % (width + 500) + width + 500) % (width + 500) - 250;
      const cy = height * 0.28 + (cf % 2) * 50;
      const cr = 48;

      // Outer brass clock bezel
      ctx.strokeStyle = '#B45309';
      ctx.lineWidth = 3;
      ctx.fillStyle = 'rgba(26, 18, 13, 0.7)';
      ctx.beginPath();
      ctx.arc(cx, cy, cr, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Amber dial glow
      const dialGlow = ctx.createRadialGradient(cx, cy, 2, cx, cy, cr);
      dialGlow.addColorStop(0, 'rgba(245, 158, 11, 0.25)');
      dialGlow.addColorStop(1, 'rgba(120, 53, 15, 0.05)');
      ctx.fillStyle = dialGlow;
      ctx.fill();

      // Roman tick marks
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.5;
      for (let t = 0; t < 12; t++) {
        const ta = (t / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ta) * (cr - 3), cy + Math.sin(ta) * (cr - 3));
        ctx.lineTo(cx + Math.cos(ta) * (cr - 8), cy + Math.sin(ta) * (cr - 8));
        ctx.stroke();
      }

      // Ticking Clock Hands
      const hourA = this.gameTime * 0.15 + cf;
      const minA = this.gameTime * 1.8 + cf * 2;
      ctx.strokeStyle = '#FEF3C7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(hourA) * (cr * 0.5), cy + Math.sin(hourA) * (cr * 0.5));
      ctx.stroke();

      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(minA) * (cr * 0.75), cy + Math.sin(minA) * (cr * 0.75));
      ctx.stroke();

      ctx.fillStyle = '#D97706';
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 5. Rising Steam Exhaust Puffs
    ctx.save();
    for (let s = 0; s < 6; s++) {
      const sx = ((s * 280 + 70 - camera.x * 0.08) % (width + 300) + width + 300) % (width + 300) - 150;
      const cycle = (this.gameTime * 0.8 + s * 0.4) % 1;
      const sy = height - cycle * (height * 0.7);
      const sRadius = 16 + cycle * 35;
      const sAlpha = (1 - cycle) * 0.22;

      ctx.fillStyle = `rgba(254, 215, 170, ${sAlpha})`;
      ctx.beginPath();
      ctx.arc(sx, sy, sRadius, 0, Math.PI * 2);
      ctx.arc(sx + sRadius * 0.5, sy - 8, sRadius * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private drawVolcanoPlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;
    const orange = theme.accentColor || '#F97316';
    const crimson = theme.platformBorder || '#DC2626';

    // 1. BOUNCY PLATFORM (Volcanic Steam Geyser Pad)
    if (p.type === 'bouncy') {
      ctx.save();
      // Basalt base frame
      ctx.fillStyle = '#1C1917';
      ctx.fillRect(p.x, p.y + p.height - 6, p.width, 6);
      ctx.strokeStyle = crimson;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y + p.height - 6, p.width, 6);

      // Steam geyser vent coil
      const coilSteps = 3;
      const stepH = (p.height - 10) / coilSteps;
      ctx.strokeStyle = orange;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < coilSteps; i++) {
        const sy = p.y + p.height - 6 - i * stepH;
        ctx.moveTo(p.x + 8, sy);
        ctx.lineTo(p.x + p.width - 8, sy - stepH * 0.5);
      }
      ctx.stroke();

      // Bouncing volcanic top plate
      const pulse = Math.sin(this.gameTime * 8) * 3;
      ctx.fillStyle = '#B91C1C';
      ctx.beginPath();
      ctx.roundRect(p.x + 2, p.y + pulse, p.width - 4, 8, 4);
      ctx.fill();

      // Scorched gold crest
      ctx.fillStyle = '#FEF08A';
      ctx.fillRect(p.x + 6, p.y + pulse + 2, p.width - 12, 2.5);
      ctx.restore();
      return;
    }

    // 2. ONE-WAY PLATFORM (Scorched Magma Grate)
    if (p.type === 'one-way') {
      ctx.save();
      ctx.fillStyle = 'rgba(69, 10, 10, 0.45)';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      // Top glowing molten lip
      ctx.fillStyle = orange;
      ctx.fillRect(p.x, p.y, p.width, 3);
      ctx.fillStyle = '#FEF08A';
      ctx.fillRect(p.x + 4, p.y + 0.5, p.width - 8, 1.2);

      ctx.fillStyle = '#1C1917';
      ctx.fillRect(p.x, p.y + p.height - 2, p.width, 2);

      // Vertical red-hot iron bars
      const barW = 16;
      const numBars = Math.floor(p.width / barW);
      ctx.strokeStyle = 'rgba(234, 88, 12, 0.55)';
      ctx.lineWidth = 1.2;
      for (let i = 1; i < numBars; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x + i * barW, p.y + 3);
        ctx.lineTo(p.x + i * barW, p.y + p.height - 2);
        ctx.stroke();
      }
      ctx.restore();
      return;
    }

    // 3. CRUMBLING PLATFORM (Cooling Volcanic Crust Rock)
    if (p.type === 'crumbling') {
      if (p.respawnTimer !== undefined && p.respawnTimer > 0) {
        if (p.respawnTimer < 0.75) {
          ctx.save();
          const pulse = 0.3 + Math.sin(this.gameTime * 25) * 0.2;
          ctx.globalAlpha = Math.max(0, pulse);
          ctx.strokeStyle = orange;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(p.x + 1, p.y + 1, p.width - 2, p.height - 2);
          ctx.restore();
        }
        return;
      }

      ctx.save();
      if (p.crumbling && p.crumbleTimer !== undefined) {
        const shake = Math.min(5, (0.65 - p.crumbleTimer) * 10);
        ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * (shake * 0.5));
      }

      // Dark basalt crust
      ctx.fillStyle = p.crumbling ? '#450A0A' : '#1C1917';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      ctx.strokeStyle = p.crumbling ? '#F97316' : '#DC2626';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x + 1, p.y + 1, p.width - 2, p.height - 2);

      // Searing glowing cracks through crust
      ctx.strokeStyle = '#FEF08A';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(p.x + p.width * 0.3, p.y);
      ctx.lineTo(p.x + p.width * 0.5, p.y + p.height * 0.5);
      ctx.lineTo(p.x + p.width * 0.8, p.y + p.height);
      ctx.stroke();

      ctx.restore();
      return;
    }

    // 4. SOLID / MOVING PLATFORMS (Basalt Obsidian with Glowing Magma Veins)
    ctx.save();

    // Radiant magma under-glow
    const underGlow = ctx.createLinearGradient(0, p.y + p.height, 0, p.y + p.height + 12);
    underGlow.addColorStop(0, 'rgba(234, 88, 12, 0.35)');
    underGlow.addColorStop(1, 'rgba(234, 88, 12, 0)');
    ctx.fillStyle = underGlow;
    ctx.fillRect(p.x + 4, p.y + p.height, p.width - 8, 12);

    // Deep Obsidian Basalt Chassis Body
    const bodyGrad = ctx.createLinearGradient(0, p.y + 6, 0, p.y + p.height);
    bodyGrad.addColorStop(0, '#262220');
    bodyGrad.addColorStop(0.4, '#1C1917');
    bodyGrad.addColorStop(1, '#0C0A09');
    ctx.fillStyle = bodyGrad;
    ctx.fillRect(p.x, p.y + 6, p.width, Math.max(0, p.height - 6));

    // Outer frame stroke
    ctx.strokeStyle = 'rgba(220, 38, 38, 0.6)';
    ctx.lineWidth = 1;
    ctx.strokeRect(p.x, p.y, p.width, p.height);

    // Embedded glowing magma fissure veins
    if (p.width >= 40 && p.height >= 16) {
      const midY = p.y + p.height * 0.55;
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.65)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(p.x + 10, midY);
      ctx.lineTo(p.x + p.width * 0.4, midY - 2);
      ctx.lineTo(p.x + p.width * 0.55, midY + 3);
      ctx.lineTo(p.x + p.width - 10, midY + 1);
      ctx.stroke();

      // Glowing heat nodes
      ctx.fillStyle = '#FEF08A';
      ctx.beginPath();
      ctx.arc(p.x + 10, midY, 1.8, 0, Math.PI * 2);
      ctx.arc(p.x + p.width - 10, midY + 1, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Top Scorched Magma Rail
    ctx.fillStyle = orange;
    ctx.fillRect(p.x, p.y, p.width, 6);

    // Incandescent white-gold core crest
    ctx.fillStyle = '#FEF08A';
    ctx.fillRect(p.x + 2, p.y + 1, p.width - 4, 2.5);

    // Moving Platform: Fiery volcanic thrusters
    if (p.speed && p.speed > 0) {
      ctx.strokeStyle = '#FEF08A';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x - 1, p.y - 1, p.width + 2, p.height + 2);
    }

    ctx.restore();
  }

  private drawGlacierPlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;
    const cyan = theme.accentColor || '#38BDF8';
    const border = theme.platformBorder || '#0284C7';

    // 1. BOUNCY PLATFORM (Cryo Frost Geyser Pad / Pressure Vent)
    if (p.type === 'bouncy') {
      ctx.save();
      // Permafrost base
      ctx.fillStyle = '#0F2038';
      ctx.fillRect(p.x, p.y + p.height - 6, p.width, 6);
      ctx.strokeStyle = border;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y + p.height - 6, p.width, 6);

      // Pressure vent grille
      ctx.fillStyle = '#1E3A5F';
      ctx.fillRect(p.x + 2, p.y, p.width - 4, p.height - 6);

      // Cryo Frost Jet Upward Ripples
      const ventPulse = Math.sin(this.gameTime * 12) * 4;
      const geyserGrad = ctx.createLinearGradient(p.x, p.y, p.x, p.y - 30);
      geyserGrad.addColorStop(0, 'rgba(224, 242, 254, 0.7)');
      geyserGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.45)');
      geyserGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = geyserGrad;
      ctx.beginPath();
      ctx.moveTo(p.x + 4, p.y);
      ctx.lineTo(p.x + p.width - 4, p.y);
      ctx.lineTo(p.x + p.width / 2 + 10, p.y - 25 - ventPulse);
      ctx.lineTo(p.x + p.width / 2 - 10, p.y - 25 - ventPulse);
      ctx.closePath();
      ctx.fill();

      // Vent rim
      ctx.strokeStyle = '#7DD3FC';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.width, p.y);
      ctx.stroke();

      ctx.restore();
      return;
    }

    // 2. ONE-WAY PLATFORM (Crystalline Ice Bridge / Frosted Runic Rail)
    if (p.type === 'one-way') {
      ctx.save();
      // Translucent crystal ice slab
      const railGrad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.height);
      railGrad.addColorStop(0, 'rgba(224, 242, 254, 0.9)');
      railGrad.addColorStop(0.4, 'rgba(125, 211, 252, 0.7)');
      railGrad.addColorStop(1, 'rgba(15, 32, 56, 0.85)');
      ctx.fillStyle = railGrad;
      ctx.fillRect(p.x, p.y, p.width, p.height);

      // Glowing Cyan Top Edge
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(p.x, p.y, p.width, 2.5);
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1.2;
      ctx.strokeRect(p.x, p.y, p.width, p.height);

      // Hanging crystal ice droplets
      ctx.fillStyle = 'rgba(224, 242, 254, 0.8)';
      for (let ix = p.x + 12; ix < p.x + p.width - 8; ix += 20) {
        ctx.beginPath();
        ctx.moveTo(ix - 2, p.y + p.height);
        ctx.lineTo(ix, p.y + p.height + 5);
        ctx.lineTo(ix + 2, p.y + p.height);
        ctx.fill();
      }

      ctx.restore();
      return;
    }

    // 3. CRUMBLING PLATFORM (Brittle Honeycombed Ice Floe)
    if (p.type === 'crumbling') {
      ctx.save();
      const shake = p.crumbling ? (Math.random() - 0.5) * 4 : 0;
      const alpha = p.crumbleTimer !== undefined ? Math.max(0.2, p.crumbleTimer / 30) : 1;
      ctx.globalAlpha = alpha;

      const px = p.x + shake;
      const py = p.y + shake;

      // Brittle ice gradient
      const crumbGrad = ctx.createLinearGradient(px, py, px, py + p.height);
      crumbGrad.addColorStop(0, '#E0F2FE');
      crumbGrad.addColorStop(0.5, '#7DD3FC');
      crumbGrad.addColorStop(1, '#0C4A6E');
      ctx.fillStyle = crumbGrad;
      ctx.fillRect(px, py, p.width, p.height);

      // Ice fracture veins
      ctx.strokeStyle = p.crumbling ? '#FFFFFF' : 'rgba(2, 132, 199, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(px + 8, py + 2); ctx.lineTo(px + p.width * 0.35, py + p.height - 2); ctx.lineTo(px + p.width * 0.6, py + 4); ctx.lineTo(px + p.width - 6, py + p.height - 3);
      ctx.stroke();

      ctx.strokeStyle = '#BAE6FD';
      ctx.lineWidth = 1;
      ctx.strokeRect(px, py, p.width, p.height);

      ctx.restore();
      return;
    }

    // 4. SOLID PLATFORM (Permafrost Glacial Bedrock with Frosted Top & Icicles)
    ctx.save();
    // Deep Glacial Stone Fill
    const bodyGrad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.height);
    bodyGrad.addColorStop(0, '#0F2038');
    bodyGrad.addColorStop(0.3, '#0A1828');
    bodyGrad.addColorStop(1, '#040B14');
    ctx.fillStyle = bodyGrad;
    ctx.fillRect(p.x, p.y, p.width, p.height);

    // Frosted Snow/Ice Top Crust
    const capHeight = Math.min(8, p.height * 0.4);
    const capGrad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + capHeight);
    capGrad.addColorStop(0, '#FFFFFF');
    capGrad.addColorStop(0.6, '#BAE6FD');
    capGrad.addColorStop(1, '#38BDF8');
    ctx.fillStyle = capGrad;
    ctx.fillRect(p.x, p.y, p.width, capHeight);

    // Crystalline Glints (sparkles) on top surface
    ctx.fillStyle = '#FFFFFF';
    for (let gx = p.x + 18; gx < p.x + p.width - 10; gx += 45) {
      const glintPulse = Math.sin(this.gameTime * 4 + gx) * 0.5 + 0.5;
      if (glintPulse > 0.4) {
        ctx.fillRect(gx, p.y + 2, 2, 2);
        ctx.fillRect(gx - 1, p.y + 2.5, 4, 1);
        ctx.fillRect(gx + 0.5, p.y + 1, 1, 4);
      }
    }

    // Hanging Translucent Icicles underneath
    ctx.fillStyle = 'rgba(224, 242, 254, 0.75)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
    ctx.lineWidth = 0.8;
    for (let ix = p.x + 10; ix < p.x + p.width - 8; ix += 18) {
      const icicleLen = 4 + Math.sin(ix * 0.1) * 3 + (ix % 3 === 0 ? 5 : 0);
      ctx.beginPath();
      ctx.moveTo(ix - 2, p.y + p.height);
      ctx.lineTo(ix, p.y + p.height + icicleLen);
      ctx.lineTo(ix + 2, p.y + p.height);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Border
    ctx.strokeStyle = border;
    ctx.lineWidth = 1.2;
    ctx.strokeRect(p.x, p.y, p.width, p.height);

    // Moving Platform: Crystalline Auroral Thrusters
    if (p.speed && p.speed > 0) {
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 1.8;
      ctx.strokeRect(p.x - 1, p.y - 1, p.width + 2, p.height + 2);
    }

    ctx.restore();
  }

  private drawDeepSeaPlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;
    const cyan = theme.accentColor || '#22D3EE';
    const border = theme.platformBorder || '#0284C7';

    // 1. BOUNCY PLATFORM: Hydrothermal Bubbling Sea Vent
    if (p.type === 'bouncy') {
      ctx.save();
      // Volcanic marine bedrock base
      ctx.fillStyle = '#061826';
      ctx.fillRect(p.x, p.y + p.height - 6, p.width, 6);
      ctx.strokeStyle = border;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y + p.height - 6, p.width, 6);

      // Vent geyser coil
      const coilSteps = 3;
      const stepH = (p.height - 10) / coilSteps;
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < coilSteps; i++) {
        const sy = p.y + p.height - 6 - i * stepH;
        ctx.moveTo(p.x + 8, sy);
        ctx.lineTo(p.x + p.width - 8, sy - stepH * 0.5);
      }
      ctx.stroke();

      // Bouncing phosphorescent sea sponge top plate
      const pulse = Math.sin(this.gameTime * 8) * 3;
      ctx.fillStyle = '#0D9488';
      ctx.beginPath();
      ctx.roundRect(p.x + 2, p.y + pulse, p.width - 4, 8, 4);
      ctx.fill();

      // Glowing bioluminescent cyan crest
      ctx.fillStyle = '#67E8F9';
      ctx.fillRect(p.x + 6, p.y + pulse + 2, p.width - 12, 2.5);

      // Rising bubble geyser puffs from vent
      ctx.fillStyle = 'rgba(186, 230, 253, 0.7)';
      for (let b = 0; b < 3; b++) {
        const bPhase = (this.gameTime * 3 + b * 0.3) % 1;
        const bx = p.x + p.width * 0.25 + b * (p.width * 0.25);
        const by = p.y + pulse - bPhase * 16;
        ctx.beginPath();
        ctx.arc(bx, by, 2 + bPhase, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      return;
    }

    // 2. CRUMBLING PLATFORM: Brittle Porous Coral Shelf
    if (p.type === 'crumbling') {
      ctx.save();
      const shakeOffset = (p.crumbling && p.crumbleTimer !== undefined)
        ? Math.sin(p.crumbleTimer * 40) * 2.5
        : 0;

      const alpha = p.respawnTimer ? 0.3 : 1;
      ctx.globalAlpha = alpha;

      // Porous coral body
      ctx.fillStyle = '#0F2E47';
      ctx.fillRect(p.x + shakeOffset, p.y, p.width, p.height);

      // Coral fissures and pores
      ctx.fillStyle = '#061826';
      for (let cx = p.x + 8; cx < p.x + p.width - 6; cx += 16) {
        ctx.beginPath();
        ctx.arc(cx + shakeOffset, p.y + p.height * 0.5, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Fragile glowing coral crest
      ctx.fillStyle = '#2DD4BF';
      ctx.fillRect(p.x + shakeOffset, p.y, p.width, 3);

      ctx.strokeStyle = '#0284C7';
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x + shakeOffset, p.y, p.width, p.height);

      ctx.restore();
      return;
    }

    // 3. ONE-WAY PLATFORM: Bioluminescent Sea Kelp / Shelf Coral
    if (p.type === 'one-way') {
      ctx.save();
      // Glowing turquoise shelf body
      const shelfGrad = ctx.createLinearGradient(0, p.y, 0, p.y + p.height);
      shelfGrad.addColorStop(0, '#06B6D4');
      shelfGrad.addColorStop(1, '#083344');
      ctx.fillStyle = shelfGrad;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y, p.width, p.height, [4, 4, 8, 8]);
      ctx.fill();

      // Top phosphorescent crest
      ctx.fillStyle = '#67E8F9';
      ctx.fillRect(p.x + 4, p.y, p.width - 8, 2.5);

      // Hanging bioluminescent tendrils underneath
      ctx.fillStyle = 'rgba(45, 212, 191, 0.6)';
      for (let tx = p.x + 8; tx < p.x + p.width - 6; tx += 14) {
        const tendrilLen = 4 + Math.sin(this.gameTime * 3 + tx) * 2;
        ctx.fillRect(tx, p.y + p.height, 2, tendrilLen);
        ctx.beginPath();
        ctx.arc(tx + 1, p.y + p.height + tendrilLen, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      return;
    }

    // 4. SOLID PLATFORM: Ancient Sunken Abyssal Coral Bedrock
    ctx.save();
    // Bedrock Fill (Deep sunken trench rock)
    const fillGrad = ctx.createLinearGradient(0, p.y, 0, p.y + p.height);
    fillGrad.addColorStop(0, '#062033');
    fillGrad.addColorStop(1, '#020F1A');
    ctx.fillStyle = fillGrad;
    ctx.fillRect(p.x, p.y, p.width, p.height);

    // Coral Bedrock Texture: Barnacles and coral pores
    ctx.fillStyle = '#082F49';
    for (let bx = p.x + 12; bx < p.x + p.width - 8; bx += 22) {
      ctx.beginPath();
      ctx.arc(bx, p.y + 10, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Bioluminescent Cyan Coral Crest
    const topGrad = ctx.createLinearGradient(0, p.y, 0, p.y + 6);
    topGrad.addColorStop(0, '#22D3EE');
    topGrad.addColorStop(1, '#0891B2');
    ctx.fillStyle = topGrad;
    ctx.fillRect(p.x, p.y, p.width, 6);

    // Glistening sea minerals on surface
    ctx.fillStyle = '#FFFFFF';
    for (let gx = p.x + 14; gx < p.x + p.width - 10; gx += 38) {
      const glintPulse = Math.sin(this.gameTime * 4 + gx) * 0.5 + 0.5;
      if (glintPulse > 0.4) {
        ctx.fillRect(gx, p.y + 2, 2, 2);
      }
    }

    // Little sea anemones waving on top
    ctx.fillStyle = '#F472B6';
    for (let ax = p.x + 20; ax < p.x + p.width - 15; ax += 50) {
      const anemoneSway = Math.sin(this.gameTime * 3 + ax) * 2;
      ctx.fillRect(ax + anemoneSway, p.y - 3, 3, 4);
    }

    // Border
    ctx.strokeStyle = border;
    ctx.lineWidth = 1.2;
    ctx.strokeRect(p.x, p.y, p.width, p.height);

    // Moving Platform: Oceanic Hydro-Current Thrusters
    if (p.speed && p.speed > 0) {
      ctx.strokeStyle = '#22D3EE';
      ctx.lineWidth = 1.8;
      ctx.strokeRect(p.x - 1, p.y - 1, p.width + 2, p.height + 2);
    }

    ctx.restore();
  }

  private drawMedievalCastlePlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;
    const gold = theme.accentColor || '#F59E0B';
    const border = theme.platformBorder || '#1A1824';
    const iron = theme.ironTrim || '#475569';

    // 1. BOUNCY PLATFORM: Royal Velvet Spring Cushion
    if (p.type === 'bouncy') {
      ctx.save();
      // Heavy wrought-iron base frame
      ctx.fillStyle = '#1A1824';
      ctx.fillRect(p.x, p.y + p.height - 6, p.width, 6);
      ctx.strokeStyle = iron;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y + p.height - 6, p.width, 6);

      // Heavy coiled iron spring
      const coilSteps = 3;
      const stepH = (p.height - 10) / coilSteps;
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < coilSteps; i++) {
        const sy = p.y + p.height - 6 - i * stepH;
        ctx.moveTo(p.x + 8, sy);
        ctx.lineTo(p.x + p.width - 8, sy - stepH * 0.5);
      }
      ctx.stroke();

      // Royal velvet cushion top plate
      const pulse = Math.sin(this.gameTime * 8) * 3;
      ctx.fillStyle = theme.bannerRed || '#991B1B';
      ctx.beginPath();
      ctx.roundRect(p.x + 2, p.y + pulse, p.width - 4, 9, 4);
      ctx.fill();

      // Gilded gold tassels & embroidered crest
      ctx.fillStyle = theme.bannerGold || '#FBBF24';
      ctx.fillRect(p.x + 6, p.y + pulse + 2, p.width - 12, 2.5);

      // Brass studs along cushion
      for (let bx = p.x + 8; bx < p.x + p.width - 6; bx += 14) {
        ctx.beginPath();
        ctx.arc(bx, p.y + pulse + 5, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      return;
    }

    // 2. CRUMBLING PLATFORM: Fractured Fortress Flagstones
    if (p.type === 'crumbling') {
      ctx.save();
      const shakeOffset = (p.crumbling && p.crumbleTimer !== undefined)
        ? Math.sin(p.crumbleTimer * 40) * 2.5
        : 0;

      const alpha = p.respawnTimer ? 0.3 : 1;
      ctx.globalAlpha = alpha;

      // Weathered stone slab body
      ctx.fillStyle = '#2E2A38';
      ctx.fillRect(p.x + shakeOffset, p.y, p.width, p.height);

      // Fractures and deep cracks
      ctx.strokeStyle = '#120F18';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let cx = p.x + 12; cx < p.x + p.width - 10; cx += 24) {
        ctx.moveTo(cx + shakeOffset, p.y);
        ctx.lineTo(cx + 6 + shakeOffset, p.y + p.height * 0.6);
        ctx.lineTo(cx + 2 + shakeOffset, p.y + p.height);
      }
      ctx.stroke();

      // Worn stone top lip
      ctx.fillStyle = '#5A5266';
      ctx.fillRect(p.x + shakeOffset, p.y, p.width, 2.5);

      ctx.strokeStyle = border;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x + shakeOffset, p.y, p.width, p.height);

      // Crumbling stone dust falling when triggered
      if (p.crumbling) {
        ctx.fillStyle = '#64748B';
        for (let d = 0; d < 3; d++) {
          const dx = p.x + ((d * 29 + this.gameTime * 70) % p.width);
          const dy = p.y + p.height + ((this.gameTime * 50 + d * 15) % 18);
          ctx.fillRect(dx, dy, 2, 2);
        }
      }

      ctx.restore();
      return;
    }

    // 3. ONE-WAY PLATFORM: Ancient Drawbridge Oak Timber
    if (p.type === 'one-way') {
      ctx.save();
      // Rich dark oak timber planks
      const oakGrad = ctx.createLinearGradient(0, p.y, 0, p.y + p.height);
      oakGrad.addColorStop(0, '#5C2D11');
      oakGrad.addColorStop(1, '#3B1B08');
      ctx.fillStyle = oakGrad;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y, p.width, p.height, [3, 3, 4, 4]);
      ctx.fill();

      // Iron strapping bands with bolt heads
      ctx.fillStyle = '#334155';
      ctx.fillRect(p.x + 6, p.y, 4, p.height);
      ctx.fillRect(p.x + p.width - 10, p.y, 4, p.height);

      // Rivet bolts on iron bands
      ctx.fillStyle = '#94A3B8';
      ctx.fillRect(p.x + 7, p.y + 2, 2, 2);
      ctx.fillRect(p.x + 7, p.y + p.height - 4, 2, 2);
      ctx.fillRect(p.x + p.width - 9, p.y + 2, 2, 2);
      ctx.fillRect(p.x + p.width - 9, p.y + p.height - 4, 2, 2);

      // Heraldic upward-pointing arrowheads
      ctx.fillStyle = '#F59E0B';
      for (let ax = p.x + 24; ax < p.x + p.width - 20; ax += 32) {
        ctx.beginPath();
        ctx.moveTo(ax, p.y + p.height - 3);
        ctx.lineTo(ax + 4, p.y + 2);
        ctx.lineTo(ax + 8, p.y + p.height - 3);
        ctx.closePath();
        ctx.fill();
      }

      // Top wood-grain edge
      ctx.fillStyle = '#78350F';
      ctx.fillRect(p.x + 1, p.y, p.width - 2, 2);

      ctx.strokeStyle = '#1E1510';
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y, p.width, p.height);

      ctx.restore();
      return;
    }

    // 4. SOLID PLATFORM: Castle Ashlar Stone Fortress Masonry
    ctx.save();
    // Heavy stone masonry fill
    const fillGrad = ctx.createLinearGradient(0, p.y, 0, p.y + p.height);
    fillGrad.addColorStop(0, '#282535');
    fillGrad.addColorStop(0.3, '#1E1C29');
    fillGrad.addColorStop(1, '#13111C');
    ctx.fillStyle = fillGrad;
    ctx.fillRect(p.x, p.y, p.width, p.height);

    // Ashlar stone block courses with mortar lines
    ctx.strokeStyle = '#14121C';
    ctx.lineWidth = 1.2;
    const blockH = 18;
    const blockW = 34;
    const rows = Math.ceil(p.height / blockH);
    for (let r = 0; r < rows; r++) {
      const by = p.y + r * blockH;
      // Horizontal mortar line
      if (r > 0) {
        ctx.beginPath();
        ctx.moveTo(p.x, by);
        ctx.lineTo(p.x + p.width, by);
        ctx.stroke();
      }
      // Vertical mortar seams staggered by half a block
      const xOffset = (r % 2) * (blockW * 0.5);
      for (let bx = p.x + xOffset; bx < p.x + p.width; bx += blockW) {
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(bx, Math.min(p.y + p.height, by + blockH));
        ctx.stroke();
      }
    }

    // Battlement flagstone top rim
    const topGrad = ctx.createLinearGradient(0, p.y, 0, p.y + 6);
    topGrad.addColorStop(0, '#473E55');
    topGrad.addColorStop(1, '#2E273A');
    ctx.fillStyle = topGrad;
    ctx.fillRect(p.x, p.y, p.width, 6);

    // Carved gold/amber masonry edge highlight
    ctx.fillStyle = '#B45309';
    ctx.fillRect(p.x, p.y, p.width, 1.8);

    // Cast-iron corner reinforcing brackets
    ctx.fillStyle = '#334155';
    ctx.fillRect(p.x, p.y, 4, 8);
    ctx.fillRect(p.x, p.y, 8, 4);
    ctx.fillRect(p.x + p.width - 4, p.y, 4, 8);
    ctx.fillRect(p.x + p.width - 8, p.y, 8, 4);

    // Decorative chains hanging underneath large solid platforms
    if (p.width >= 90 && p.height >= 24) {
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      for (let chX = p.x + 25; chX <= p.x + p.width - 25; chX += 50) {
        ctx.beginPath();
        const chainLen = 8 + (chX % 7) * 2;
        ctx.moveTo(chX, p.y + p.height);
        ctx.lineTo(chX, p.y + p.height + chainLen);
        ctx.stroke();
        // Iron weight / ring at end
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(chX, p.y + p.height + chainLen + 2, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Moving Platform: Castle Clockwork Chains & Suspension Pulleys
    if (p.speed && p.speed > 0) {
      // Iron trim border
      ctx.strokeStyle = gold;
      ctx.lineWidth = 1.8;
      ctx.strokeRect(p.x - 1, p.y - 1, p.width + 2, p.height + 2);

      // Heavy suspension chains going upward from both ends of the platform
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 2;
      const chainY = Math.max(0, p.y - 40);
      ctx.beginPath();
      ctx.moveTo(p.x + 10, p.y);
      ctx.lineTo(p.x + 10, chainY);
      ctx.moveTo(p.x + p.width - 10, p.y);
      ctx.lineTo(p.x + p.width - 10, chainY);
      ctx.stroke();

      // Spinning brass chain gear cog atop the chains
      ctx.fillStyle = '#D97706';
      ctx.beginPath();
      ctx.arc(p.x + 10, chainY, 4, 0, Math.PI * 2);
      ctx.arc(p.x + p.width - 10, chainY, 4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeStyle = border;
      ctx.lineWidth = 1.2;
      ctx.strokeRect(p.x, p.y, p.width, p.height);
    }

    ctx.restore();
  }

  private drawClockworkPlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;
    const brass = theme.brassGear || '#D97706';
    const copper = theme.copperPipe || '#EA580C';
    const border = theme.platformBorder || '#652B09';

    // 1. ANTI-GRAVITY PLATFORM: Pneumatic Steam Column Elevator
    if (p.type === 'anti_grav') {
      ctx.save();
      // Steam Column Beam Body
      const beamGrad = ctx.createLinearGradient(p.x, 0, p.x + p.width, 0);
      beamGrad.addColorStop(0, 'rgba(217, 119, 6, 0.08)');
      beamGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.24)');
      beamGrad.addColorStop(0.5, 'rgba(254, 240, 199, 0.35)');
      beamGrad.addColorStop(0.7, 'rgba(245, 158, 11, 0.24)');
      beamGrad.addColorStop(1, 'rgba(217, 119, 6, 0.08)');
      ctx.fillStyle = beamGrad;
      ctx.fillRect(p.x, p.y, p.width, p.height);

      // Rising steam rings
      ctx.strokeStyle = 'rgba(254, 240, 199, 0.5)';
      ctx.lineWidth = 2;
      const numRings = Math.max(2, Math.floor(p.height / 50));
      for (let i = 0; i < numRings; i++) {
        const ringProg = (this.gameTime * 2.2 + (i / numRings)) % 1;
        const ringY = p.y + p.height - ringProg * p.height;
        ctx.beginPath();
        ctx.ellipse(p.x + p.width / 2, ringY, p.width * 0.42, 6, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Copper Base Nozzle Manifold
      ctx.fillStyle = '#1A120D';
      ctx.fillRect(p.x - 4, p.y + p.height - 12, p.width + 8, 12);
      ctx.strokeStyle = copper;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x - 4, p.y + p.height - 12, p.width + 8, 12);

      // Warning hazard stripes on base
      ctx.fillStyle = '#F59E0B';
      for (let st = p.x - 2; st < p.x + p.width + 4; st += 14) {
        ctx.fillRect(st, p.y + p.height - 10, 6, 8);
      }

      // Top Vent Ring
      ctx.fillStyle = '#B45309';
      ctx.fillRect(p.x - 2, p.y, p.width + 4, 8);
      ctx.fillStyle = '#FEF08A';
      ctx.fillRect(p.x + p.width / 2 - 4, p.y + 2, 8, 4);

      ctx.restore();
      return;
    }

    // 2. BOUNCY PLATFORM: Heavy Clockwork Pneumatic Compression Spring
    if (p.type === 'bouncy') {
      ctx.save();
      // Heavy cast-iron base
      ctx.fillStyle = '#1A120D';
      ctx.fillRect(p.x, p.y + p.height - 6, p.width, 6);
      ctx.strokeStyle = copper;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y + p.height - 6, p.width, 6);

      // Heavy copper coil spring
      const coilSteps = 3;
      const stepH = (p.height - 10) / coilSteps;
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      for (let i = 0; i < coilSteps; i++) {
        const sy = p.y + p.height - 6 - i * stepH;
        ctx.moveTo(p.x + 8, sy);
        ctx.lineTo(p.x + p.width - 8, sy - stepH * 0.5);
      }
      ctx.stroke();

      // Polished brass piston top plate
      const pulse = Math.sin(this.gameTime * 8) * 3;
      ctx.fillStyle = '#D97706';
      ctx.beginPath();
      ctx.roundRect(p.x + 2, p.y + pulse, p.width - 4, 9, 3);
      ctx.fill();
      ctx.strokeStyle = '#FDE047';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Center pressure manometer badge
      ctx.fillStyle = '#1A120D';
      ctx.beginPath();
      ctx.arc(p.x + p.width / 2, p.y + pulse + 4.5, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FEF08A';
      ctx.beginPath();
      ctx.arc(p.x + p.width / 2, p.y + pulse + 4.5, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      return;
    }

    // 3. CRUMBLING PLATFORM: Slotted Brass Steam Grate
    if (p.type === 'crumbling') {
      ctx.save();
      const shakeOffset = (p.crumbling && p.crumbleTimer !== undefined)
        ? Math.sin(p.crumbleTimer * 40) * 2.5
        : 0;

      const alpha = p.respawnTimer ? 0.3 : 1;
      ctx.globalAlpha = alpha;

      // Brass steam grate body
      ctx.fillStyle = '#78350F';
      ctx.fillRect(p.x + shakeOffset, p.y, p.width, p.height);

      // Venting steam slots
      ctx.fillStyle = '#1A120D';
      for (let vx = p.x + shakeOffset + 6; vx < p.x + shakeOffset + p.width - 6; vx += 12) {
        ctx.fillRect(vx, p.y + 3, 5, p.height - 6);
      }

      // Steam wisps rising when activated
      if (p.crumbling) {
        ctx.fillStyle = 'rgba(254, 215, 170, 0.6)';
        for (let vx = p.x + shakeOffset + 8; vx < p.x + shakeOffset + p.width - 8; vx += 24) {
          ctx.beginPath();
          ctx.arc(vx, p.y - 6, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.strokeStyle = '#B45309';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x + shakeOffset, p.y, p.width, p.height);
      ctx.restore();
      return;
    }

    // 4. ONE-WAY PLATFORM: Polished Brass Catwalk Girder
    if (p.type === 'one-way') {
      ctx.save();
      ctx.fillStyle = '#92400E';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      // Gilded brass rail top
      ctx.fillStyle = '#F59E0B';
      ctx.fillRect(p.x, p.y, p.width, 2.5);

      // Copper rivets along girder
      ctx.fillStyle = '#FEF08A';
      for (let rx = p.x + 8; rx < p.x + p.width - 6; rx += 16) {
        ctx.beginPath();
        ctx.arc(rx, p.y + p.height / 2, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = '#451A03';
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y, p.width, p.height);
      ctx.restore();
      return;
    }

    // 5. SOLID PLATFORM: Heavy Cast-Iron & Riveted Brass Machine Housing
    ctx.save();
    // Heavy iron body fill
    const fillGrad = ctx.createLinearGradient(0, p.y, 0, p.y + p.height);
    fillGrad.addColorStop(0, '#261A12');
    fillGrad.addColorStop(0.3, '#1A120D');
    fillGrad.addColorStop(1, '#0F0A07');
    ctx.fillStyle = fillGrad;
    ctx.fillRect(p.x, p.y, p.width, p.height);

    // Burnished Brass Top Track
    const topGrad = ctx.createLinearGradient(0, p.y, 0, p.y + 6);
    topGrad.addColorStop(0, '#D97706');
    topGrad.addColorStop(1, '#92400E');
    ctx.fillStyle = topGrad;
    ctx.fillRect(p.x, p.y, p.width, 6);

    // Brass Gear Teeth serrations along top rim
    ctx.fillStyle = '#F59E0B';
    const toothStep = 12;
    for (let tx = p.x; tx < p.x + p.width; tx += toothStep) {
      ctx.fillRect(tx, p.y - 1.5, 6, 2.5);
    }

    // Copper corner brackets
    ctx.fillStyle = copper;
    ctx.fillRect(p.x, p.y, 4, 8);
    ctx.fillRect(p.x, p.y, 8, 4);
    ctx.fillRect(p.x + p.width - 4, p.y, 4, 8);
    ctx.fillRect(p.x + p.width - 8, p.y, 8, 4);

    // Copper rivets along sides and bottom
    ctx.fillStyle = '#FDE047';
    for (let rx = p.x + 16; rx < p.x + p.width - 16; rx += 20) {
      ctx.beginPath();
      ctx.arc(rx, p.y + Math.min(14, p.height - 4), 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Moving Platform: Interlocking Clockwork Gear Assembly & Suspension Chains
    if (p.speed && p.speed > 0) {
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.8;
      ctx.strokeRect(p.x - 1, p.y - 1, p.width + 2, p.height + 2);

      // Rotating gear emblem on moving platform face
      const gRadius = Math.min(10, p.height / 2 - 2);
      if (gRadius >= 5) {
        const gx = p.x + p.width / 2;
        const gy = p.y + p.height / 2;
        const gRot = this.gameTime * 4;
        ctx.save();
        ctx.translate(gx, gy);
        ctx.rotate(gRot);
        ctx.fillStyle = brass;
        ctx.beginPath();
        for (let t = 0; t < 8; t++) {
          const a1 = (t / 8) * Math.PI * 2;
          const a2 = a1 + (Math.PI / 8) * 0.6;
          ctx.lineTo(Math.cos(a1) * gRadius, Math.sin(a1) * gRadius);
          ctx.lineTo(Math.cos(a2) * (gRadius * 0.7), Math.sin(a2) * (gRadius * 0.7));
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    } else {
      ctx.strokeStyle = border;
      ctx.lineWidth = 1.2;
      ctx.strokeRect(p.x, p.y, p.width, p.height);
    }

    ctx.restore();
  }

  private drawPlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;

    // Check if Neon Night theme platform styles
    if (this.isNeonTheme(theme)) {
      this.drawNeonPlatform(p, theme);
      return;
    }

    // Check if Cosmic Space theme platform styles
    if (this.isSpaceTheme(theme)) {
      this.drawSpacePlatform(p, theme);
      return;
    }

    // Check if Infernal Volcano theme platform styles
    if (this.isVolcanoTheme(theme)) {
      this.drawVolcanoPlatform(p, theme);
      return;
    }

    // Check if Borealis Glacier theme platform styles
    if (this.isGlacierTheme(theme)) {
      this.drawGlacierPlatform(p, theme);
      return;
    }

    // Check if Abyssal Deep Sea theme platform styles
    if (this.isDeepSeaTheme(theme)) {
      this.drawDeepSeaPlatform(p, theme);
      return;
    }

    // Check if Medieval Castle theme platform styles
    if (this.isMedievalCastleTheme(theme)) {
      this.drawMedievalCastlePlatform(p, theme);
      return;
    }

    // Check if Clockwork Cogworks theme platform styles
    if (this.isClockworkTheme(theme)) {
      this.drawClockworkPlatform(p, theme);
      return;
    }

    // Generic Anti-Gravity Tractor Beam platform fallback
    if (p.type === 'anti_grav') {
      this.drawSpacePlatform(p, theme);
      return;
    }

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

    if (p.type === 'ice') {
      // Frosted ice platform with crystalline sheen and glistening highlights
      ctx.save();
      const iceGrad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.height);
      iceGrad.addColorStop(0, '#E0F2FE');
      iceGrad.addColorStop(0.2, '#BAE6FD');
      iceGrad.addColorStop(1, '#38BDF8');
      ctx.fillStyle = iceGrad;
      ctx.fillRect(p.x, p.y + 4, p.width, Math.max(0, p.height - 4));

      // Crisp frozen glistening top rim
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(p.x, p.y, p.width, 4);

      // Frost sparkle highlight line
      ctx.fillStyle = '#7DD3FC';
      ctx.fillRect(p.x, p.y + 4, p.width, 2);

      // Ice crystal facets
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1;
      const numFacets = Math.floor(p.width / 36);
      for (let i = 0; i < numFacets; i++) {
        const fx = p.x + 12 + i * 36;
        ctx.beginPath();
        ctx.moveTo(fx, p.y + 5);
        ctx.lineTo(fx + 10, p.y + p.height - 4);
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

  private drawNeonPlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;
    const cyan = theme.neonCyan || '#00F0FF';
    const magenta = theme.neonMagenta || '#FF007F';

    // 1. BOUNCY PLATFORM (Kinetic Grav-Pad / Ion Shock Ring)
    if (p.type === 'bouncy') {
      ctx.save();
      // Cyber base bracket
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(p.x, p.y + p.height - 6, p.width, 6);
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y + p.height - 6, p.width, 6);

      // Kinetic magnetic ring coil
      const coilSteps = 3;
      const stepH = (p.height - 10) / coilSteps;
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < coilSteps; i++) {
        const sy = p.y + p.height - 6 - i * stepH;
        ctx.moveTo(p.x + 10, sy);
        ctx.lineTo(p.x + p.width - 10, sy - stepH * 0.5);
      }
      ctx.stroke();

      // Pulsing energy rings
      const pulse = Math.sin(this.gameTime * 8) * 3;
      const ringAlpha = 0.35 + 0.35 * Math.sin(this.gameTime * 6);
      ctx.fillStyle = magenta;
      ctx.globalAlpha = ringAlpha;
      ctx.beginPath();
      ctx.ellipse(p.x + p.width / 2, p.y + 4 + pulse, p.width * 0.45, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Top kinetic launch bar
      ctx.globalAlpha = 1.0;
      ctx.fillStyle = magenta;
      ctx.beginPath();
      ctx.roundRect(p.x + 2, p.y + pulse, p.width - 4, 8, 4);
      ctx.fill();

      // Blinding white-hot core strip
      ctx.fillStyle = '#FFE4E6';
      ctx.fillRect(p.x + 6, p.y + pulse + 2, p.width - 12, 2.5);
      ctx.restore();
      return;
    }

    // 2. ONE-WAY PLATFORM (Holographic Laser Grating)
    if (p.type === 'one-way') {
      ctx.save();
      // Holographic semi-transparent emitter fill
      ctx.fillStyle = 'rgba(0, 240, 255, 0.16)';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      // Upper laser guide beam
      ctx.fillStyle = cyan;
      ctx.fillRect(p.x, p.y, p.width, 3);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(p.x + 4, p.y + 0.5, p.width - 8, 1.2);

      // Lower guide beam
      ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.fillRect(p.x, p.y + p.height - 2, p.width, 2);

      // Left and right metallic emitter projector brackets
      ctx.fillStyle = '#1E293B';
      ctx.fillRect(p.x, p.y - 1, 6, p.height + 2);
      ctx.fillRect(p.x + p.width - 6, p.y - 1, 6, p.height + 2);
      ctx.fillStyle = magenta;
      ctx.fillRect(p.x + 2, p.y + 2, 2, p.height - 4);
      ctx.fillRect(p.x + p.width - 4, p.y + 2, 2, p.height - 4);

      // Animated glowing chevrons indicating jump-through
      const chevronCount = Math.max(1, Math.floor((p.width - 24) / 22));
      const sweepOffset = (this.gameTime * 25) % 22;
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < chevronCount; i++) {
        const cx = p.x + 14 + i * 22 + (sweepOffset * 0.3);
        if (cx + 8 < p.x + p.width - 8) {
          ctx.beginPath();
          ctx.moveTo(cx, p.y + p.height - 3);
          ctx.lineTo(cx + 4, p.y + 3);
          ctx.lineTo(cx + 8, p.y + p.height - 3);
          ctx.stroke();
        }
      }
      ctx.restore();
      return;
    }

    // 3. CRUMBLING PLATFORM (Quantum Glitch / Hologram Platform)
    if (p.type === 'crumbling') {
      if (p.respawnTimer !== undefined && p.respawnTimer > 0) {
        if (p.respawnTimer < 0.75) {
          ctx.save();
          const pulse = 0.3 + Math.sin(this.gameTime * 25) * 0.2;
          ctx.globalAlpha = Math.max(0, pulse);
          ctx.strokeStyle = cyan;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(p.x + 1, p.y + 1, p.width - 2, p.height - 2);
          ctx.restore();
        }
        return;
      }

      ctx.save();
      // Glitch shaking with chromatic aberration offset
      if (p.crumbling && p.crumbleTimer !== undefined) {
        const glitchAmt = Math.min(6, (0.65 - p.crumbleTimer) * 11);
        const gx = (Math.random() - 0.5) * glitchAmt;
        const gy = (Math.random() - 0.5) * (glitchAmt * 0.5);
        ctx.translate(gx, gy);

        // Red/Cyan Chromatic Aberration ghosting
        ctx.globalAlpha = 0.35;
        ctx.fillStyle = '#FF0055';
        ctx.fillRect(p.x - 3, p.y, p.width, p.height);
        ctx.fillStyle = '#00F0FF';
        ctx.fillRect(p.x + 3, p.y, p.width, p.height);
        ctx.globalAlpha = 1.0;
      }

      // Main Glitch Platform Body
      ctx.fillStyle = p.crumbling ? '#1F0A2E' : '#110724';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      // Glowing Neon Frame
      ctx.strokeStyle = p.crumbling ? magenta : cyan;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x + 1, p.y + 1, p.width - 2, p.height - 2);

      // Digital Grid Mesh
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1;
      const numVGrid = Math.floor(p.width / 14);
      for (let i = 1; i < numVGrid; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x + i * 14, p.y + 1);
        ctx.lineTo(p.x + i * 14, p.y + p.height - 1);
        ctx.stroke();
      }

      // Glitch fracture lines if crumbling
      if (p.crumbling) {
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p.x + p.width * 0.25, p.y);
        ctx.lineTo(p.x + p.width * 0.45, p.y + p.height * 0.7);
        ctx.lineTo(p.x + p.width * 0.8, p.y + p.height);
        ctx.stroke();
      }

      ctx.restore();
      return;
    }

    // 4. SOLID / MOVING PLATFORMS (Cyber Chassis with Neon Laser Rail & Circuit Nodes)
    ctx.save();

    // Soft Neon Under-Glow
    const underGlow = ctx.createLinearGradient(0, p.y + p.height, 0, p.y + p.height + 12);
    underGlow.addColorStop(0, 'rgba(0, 240, 255, 0.22)');
    underGlow.addColorStop(1, 'rgba(0, 240, 255, 0)');
    ctx.fillStyle = underGlow;
    ctx.fillRect(p.x + 4, p.y + p.height, p.width - 8, 12);

    // Dark Cyber Chassis Body
    const bodyGrad = ctx.createLinearGradient(0, p.y + 6, 0, p.y + p.height);
    bodyGrad.addColorStop(0, '#0F172A');
    bodyGrad.addColorStop(1, '#050914');
    ctx.fillStyle = bodyGrad;
    ctx.fillRect(p.x, p.y + 6, p.width, Math.max(0, p.height - 6));

    // Outer cyber frame stroke
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(p.x, p.y, p.width, p.height);

    // Embedded glowing circuit trace lines
    ctx.strokeStyle = 'rgba(255, 0, 127, 0.35)';
    ctx.lineWidth = 1;
    if (p.width >= 40 && p.height >= 16) {
      const midY = p.y + p.height * 0.55;
      ctx.beginPath();
      ctx.moveTo(p.x + 12, midY);
      ctx.lineTo(p.x + p.width * 0.4, midY);
      ctx.lineTo(p.x + p.width * 0.48, midY + 4);
      ctx.lineTo(p.x + p.width - 12, midY + 4);
      ctx.stroke();

      // Pulsing circuit data nodes
      const nodePulse = 0.4 + 0.6 * Math.sin(this.gameTime * 5 + p.x);
      ctx.fillStyle = cyan;
      ctx.globalAlpha = nodePulse;
      ctx.beginPath();
      ctx.arc(p.x + 12, midY, 2, 0, Math.PI * 2);
      ctx.arc(p.x + p.width - 12, midY + 4, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }

    // Blinding Top Neon Laser Rail
    ctx.fillStyle = cyan;
    ctx.fillRect(p.x, p.y, p.width, 6);

    // Ultra-bright laser core filament
    ctx.fillStyle = '#E0FFFF';
    ctx.fillRect(p.x + 2, p.y + 1, p.width - 4, 2.5);

    // Terminal capacitors on left and right edges
    ctx.fillStyle = magenta;
    ctx.fillRect(p.x, p.y, 4, 6);
    ctx.fillRect(p.x + p.width - 4, p.y, 4, 6);

    // Moving Platform: Mag-Lev Thruster Pods & Animated Direction Lights
    if (p.speed && p.speed > 0) {
      // Mag-lev border glow
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x - 1, p.y - 1, p.width + 2, p.height + 2);

      // Downward plasma exhaust jet cones
      const thrusterW = 14;
      const leftTX = p.x + 14;
      const rightTX = p.x + p.width - 14 - thrusterW;
      const jetPulse = 4 + Math.sin(this.gameTime * 20) * 3;

      ctx.fillStyle = cyan;
      // Left thruster jet
      ctx.beginPath();
      ctx.moveTo(leftTX, p.y + p.height);
      ctx.lineTo(leftTX + thrusterW, p.y + p.height);
      ctx.lineTo(leftTX + thrusterW / 2, p.y + p.height + jetPulse);
      ctx.closePath();
      ctx.fill();

      // Right thruster jet
      ctx.beginPath();
      ctx.moveTo(rightTX, p.y + p.height);
      ctx.lineTo(rightTX + thrusterW, p.y + p.height);
      ctx.lineTo(rightTX + thrusterW / 2, p.y + p.height + jetPulse);
      ctx.closePath();
      ctx.fill();

      // Animated travel direction chevron lights
      const dir = (p.vx ?? 0) >= 0 ? 1 : -1;
      const animX = (this.gameTime * 30 * dir) % 16;
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(p.x + p.width / 2 + animX, p.y + p.height / 2, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  private drawSpacePlatform(p: Platform, theme: LevelData['theme']) {
    const { ctx } = this;
    const cyan = theme.accentColor || '#38BDF8';
    const indigo = theme.platformBorder || '#818CF8';

    // 1. ANTI-GRAVITY TRACTOR BEAM / GRAV-LIFT PLATFORM
    if (p.type === 'anti_grav') {
      ctx.save();
      const emitterH = Math.min(14, p.height * 0.15);
      const beamH = p.height - emitterH;

      // Base Emitter Bracket at bottom
      const baseGrad = ctx.createLinearGradient(0, p.y + beamH, 0, p.y + p.height);
      baseGrad.addColorStop(0, '#1E293B');
      baseGrad.addColorStop(1, '#0B0F19');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(p.x, p.y + beamH, p.width, emitterH);
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1.2;
      ctx.strokeRect(p.x, p.y + beamH, p.width, emitterH);

      // Warning hazard stripes on emitter face
      const stripeW = 10;
      ctx.save();
      ctx.beginPath();
      ctx.rect(p.x, p.y + beamH, p.width, emitterH);
      ctx.clip();
      ctx.fillStyle = '#F59E0B';
      for (let sx = p.x - emitterH; sx < p.x + p.width; sx += stripeW * 2) {
        ctx.beginPath();
        ctx.moveTo(sx, p.y + p.height);
        ctx.lineTo(sx + stripeW, p.y + p.height);
        ctx.lineTo(sx + stripeW + emitterH, p.y + beamH);
        ctx.lineTo(sx + emitterH, p.y + beamH);
        ctx.fill();
      }
      ctx.restore();

      // Pulsing central power crystal on emitter
      const crystalPulse = 0.5 + 0.5 * Math.sin(this.gameTime * 8);
      ctx.fillStyle = cyan;
      ctx.globalAlpha = crystalPulse;
      ctx.fillRect(p.x + p.width / 2 - 8, p.y + beamH + 2, 16, emitterH - 4);
      ctx.globalAlpha = 1.0;

      // Vertical Upward Tractor Beam Column
      const beamGrad = ctx.createLinearGradient(p.x, 0, p.x + p.width, 0);
      beamGrad.addColorStop(0, 'rgba(56, 189, 248, 0.28)');
      beamGrad.addColorStop(0.3, 'rgba(124, 58, 237, 0.16)');
      beamGrad.addColorStop(0.7, 'rgba(124, 58, 237, 0.16)');
      beamGrad.addColorStop(1, 'rgba(56, 189, 248, 0.28)');
      ctx.fillStyle = beamGrad;
      ctx.fillRect(p.x + 2, p.y, p.width - 4, beamH);

      // Left & Right Magnetic Containment Laser Rails
      ctx.fillStyle = cyan;
      ctx.fillRect(p.x, p.y, 2, beamH);
      ctx.fillRect(p.x + p.width - 2, p.y, 2, beamH);

      // Animated Ascending Tractor Chevrons (indicating upward buoyancy)
      const chevronSpacing = 36;
      const sweepOffset = (this.gameTime * 55) % chevronSpacing;
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 2;
      const numChevrons = Math.floor(beamH / chevronSpacing) + 1;
      for (let i = 0; i <= numChevrons; i++) {
        const cy = p.y + beamH - (i * chevronSpacing + sweepOffset);
        if (cy >= p.y && cy <= p.y + beamH) {
          const ratio = (cy - p.y) / beamH;
          ctx.globalAlpha = 0.25 + 0.65 * (1 - Math.abs(ratio - 0.5) * 1.5);
          ctx.beginPath();
          ctx.moveTo(p.x + 8, cy + 6);
          ctx.lineTo(p.x + p.width / 2, cy - 2);
          ctx.lineTo(p.x + p.width - 8, cy + 6);
          ctx.stroke();
        }
      }

      // Top Dissipation Ion Halo
      const topPulse = 0.6 + 0.4 * Math.sin(this.gameTime * 10);
      ctx.globalAlpha = topPulse;
      ctx.fillStyle = '#E0F2FE';
      ctx.fillRect(p.x + 4, p.y, p.width - 8, 2);
      ctx.restore();
      return;
    }

    // 2. KINETIC BOUNCY PLATFORM (Orbital Ion Launch Pad)
    if (p.type === 'bouncy') {
      ctx.save();
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(p.x, p.y + p.height - 6, p.width, 6);
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1;
      ctx.strokeRect(p.x, p.y + p.height - 6, p.width, 6);

      const coilSteps = 3;
      const stepH = (p.height - 10) / coilSteps;
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < coilSteps; i++) {
        const sy = p.y + p.height - 6 - i * stepH;
        ctx.moveTo(p.x + 10, sy);
        ctx.lineTo(p.x + p.width - 10, sy - stepH * 0.5);
      }
      ctx.stroke();

      const pulse = Math.sin(this.gameTime * 8) * 3;
      ctx.fillStyle = '#0284C7';
      ctx.beginPath();
      ctx.roundRect(p.x + 2, p.y + pulse, p.width - 4, 8, 4);
      ctx.fill();

      ctx.fillStyle = '#E0F2FE';
      ctx.fillRect(p.x + 6, p.y + pulse + 2, p.width - 12, 2.5);
      ctx.restore();
      return;
    }

    // 3. ONE-WAY PLATFORM (Holographic Solar Array Grating)
    if (p.type === 'one-way') {
      ctx.save();
      ctx.fillStyle = 'rgba(14, 165, 233, 0.16)';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      ctx.fillStyle = cyan;
      ctx.fillRect(p.x, p.y, p.width, 3);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(p.x + 4, p.y + 0.5, p.width - 8, 1.2);

      ctx.fillStyle = 'rgba(30, 41, 59, 0.7)';
      ctx.fillRect(p.x, p.y + p.height - 2, p.width, 2);

      const cellW = 18;
      const numCells = Math.floor(p.width / cellW);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 1;
      for (let i = 1; i < numCells; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x + i * cellW, p.y + 3);
        ctx.lineTo(p.x + i * cellW, p.y + p.height - 2);
        ctx.stroke();
      }

      const chevronCount = Math.max(1, Math.floor((p.width - 24) / 22));
      const sweepOffset = (this.gameTime * 25) % 22;
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < chevronCount; i++) {
        const cx = p.x + 14 + i * 22 + (sweepOffset * 0.3);
        if (cx + 8 < p.x + p.width - 8) {
          ctx.beginPath();
          ctx.moveTo(cx, p.y + p.height - 3);
          ctx.lineTo(cx + 4, p.y + 3);
          ctx.lineTo(cx + 8, p.y + p.height - 3);
          ctx.stroke();
        }
      }
      ctx.restore();
      return;
    }

    // 4. CRUMBLING PLATFORM (Unstable Cosmic Meteorite / Asteroid Rock)
    if (p.type === 'crumbling') {
      if (p.respawnTimer !== undefined && p.respawnTimer > 0) {
        if (p.respawnTimer < 0.75) {
          ctx.save();
          const pulse = 0.3 + Math.sin(this.gameTime * 25) * 0.2;
          ctx.globalAlpha = Math.max(0, pulse);
          ctx.strokeStyle = indigo;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(p.x + 1, p.y + 1, p.width - 2, p.height - 2);
          ctx.restore();
        }
        return;
      }

      ctx.save();
      if (p.crumbling && p.crumbleTimer !== undefined) {
        const shake = Math.min(5, (0.65 - p.crumbleTimer) * 10);
        ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * (shake * 0.5));
      }

      ctx.fillStyle = p.crumbling ? '#1E1B4B' : '#0F172A';
      ctx.fillRect(p.x, p.y, p.width, p.height);

      ctx.strokeStyle = p.crumbling ? '#C084FC' : '#38BDF8';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x + 1, p.y + 1, p.width - 2, p.height - 2);

      ctx.strokeStyle = 'rgba(192, 132, 252, 0.5)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(p.x + p.width * 0.25, p.y);
      ctx.lineTo(p.x + p.width * 0.45, p.y + p.height * 0.6);
      ctx.lineTo(p.x + p.width * 0.75, p.y + p.height);
      ctx.stroke();

      ctx.restore();
      return;
    }

    // 5. SOLID / MOVING PLATFORMS (Starship Modular Titanium Hull Plating)
    ctx.save();

    // Soft Starlight Under-Glow
    const underGlow = ctx.createLinearGradient(0, p.y + p.height, 0, p.y + p.height + 10);
    underGlow.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
    underGlow.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = underGlow;
    ctx.fillRect(p.x + 4, p.y + p.height, p.width - 8, 10);

    // Dark Titanium Chassis Body
    const bodyGrad = ctx.createLinearGradient(0, p.y + 6, 0, p.y + p.height);
    bodyGrad.addColorStop(0, '#0F172A');
    bodyGrad.addColorStop(1, '#050914');
    ctx.fillStyle = bodyGrad;
    ctx.fillRect(p.x, p.y + 6, p.width, Math.max(0, p.height - 6));

    // Outer frame stroke
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
    ctx.lineWidth = 1;
    ctx.strokeRect(p.x, p.y, p.width, p.height);

    // Embedded glowing data conduit line
    if (p.width >= 40 && p.height >= 16) {
      const midY = p.y + p.height * 0.55;
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x + 12, midY);
      ctx.lineTo(p.x + p.width * 0.45, midY);
      ctx.lineTo(p.x + p.width * 0.52, midY + 4);
      ctx.lineTo(p.x + p.width - 12, midY + 4);
      ctx.stroke();

      ctx.fillStyle = cyan;
      ctx.beginPath();
      ctx.arc(p.x + 12, midY, 2, 0, Math.PI * 2);
      ctx.arc(p.x + p.width - 12, midY + 4, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Top Stellar Laser Rail
    ctx.fillStyle = cyan;
    ctx.fillRect(p.x, p.y, p.width, 6);

    // Ultra-bright core filament
    ctx.fillStyle = '#F0F9FF';
    ctx.fillRect(p.x + 2, p.y + 1, p.width - 4, 2.5);

    // Moving Platform: Ion Plasma Thruster Pods
    if (p.speed && p.speed > 0) {
      ctx.strokeStyle = cyan;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x - 1, p.y - 1, p.width + 2, p.height + 2);

      const thrusterW = 14;
      const leftTX = p.x + 14;
      const rightTX = p.x + p.width - 14 - thrusterW;
      const jetPulse = 4 + Math.sin(this.gameTime * 20) * 3;

      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.moveTo(leftTX, p.y + p.height);
      ctx.lineTo(leftTX + thrusterW, p.y + p.height);
      ctx.lineTo(leftTX + thrusterW / 2, p.y + p.height + jetPulse);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(rightTX, p.y + p.height);
      ctx.lineTo(rightTX + thrusterW, p.y + p.height);
      ctx.lineTo(rightTX + thrusterW / 2, p.y + p.height + jetPulse);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  private drawHazard(h: Hazard, theme?: LevelData['theme']) {
    const { ctx } = this;
    const isNeon = theme ? this.isNeonTheme(theme) : false;
    const isSpace = theme ? this.isSpaceTheme(theme) : false;
    const isGlacier = theme ? this.isGlacierTheme(theme) : false;
    const isCastle = theme ? this.isMedievalCastleTheme(theme) : false;
    const isClockwork = theme ? this.isClockworkTheme(theme) : false;

    if (h.type === 'spike') {
      ctx.fillStyle = isGlacier ? '#BAE6FD' : (isSpace ? '#38BDF8' : (isNeon ? '#FF007F' : (isCastle ? '#334155' : (isClockwork ? '#B45309' : '#DC2626'))));
      ctx.strokeStyle = isGlacier ? '#E0F2FE' : (isSpace ? '#93C5FD' : (isNeon ? '#00F0FF' : (isCastle ? '#64748B' : (isClockwork ? '#F59E0B' : '#991B1B'))));
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
      ctx.fillStyle = (isNeon || isSpace || isGlacier) ? '#FFFFFF' : ((isCastle || isClockwork) ? '#F59E0B' : '#FCA5A5');
      for (let i = 0; i < numSpikes; i++) {
        const sx = h.x + i * spikeW;
        ctx.fillRect(sx + spikeW * 0.45, h.y + 2, 2, 4);
      }
    } else if (h.type === 'saw') {
      // Spinning Buzzsaw / Orbital Plasma Orb / Glacial Ice Chakram / Medieval Spiked Flail / Brass Clockwork Cog
      ctx.save();
      const cx = h.x + h.width / 2;
      const cy = h.y + h.height / 2;
      const r = h.width / 2;
      const rot = (h.rotation || 0) + this.gameTime * 8;

      ctx.translate(cx, cy);
      ctx.rotate(rot);

      if (isSpace || isGlacier) {
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 8;
      } else if (isCastle || isClockwork) {
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 6;
      }

      // Outer saw teeth
      ctx.fillStyle = isGlacier ? '#0F2642' : ((isNeon || isSpace) ? '#0E172A' : (isCastle ? '#1E293B' : (isClockwork ? '#78350F' : '#E2E8F0')));
      ctx.strokeStyle = (isSpace || isGlacier) ? '#38BDF8' : (isNeon ? '#00F0FF' : (isCastle ? '#94A3B8' : (isClockwork ? '#F59E0B' : '#64748B')));
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
      ctx.fillStyle = isGlacier ? '#7DD3FC' : (isSpace ? '#818CF8' : (isNeon ? '#FF007F' : (isCastle ? '#B45309' : (isClockwork ? '#D97706' : '#EF4444'))));
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = isGlacier ? '#FFFFFF' : (isSpace ? '#E0F2FE' : (isNeon ? '#00F0FF' : ((isCastle || isClockwork) ? '#FDE047' : '#F87171')));
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    } else if (h.type === 'lava') {
      const isVolcano = theme ? this.isVolcanoTheme(theme) : false;
      const fillHeight = Math.max(h.height, 960 - h.y);

      // Deep Molten Magma / Plasma Void / Sub-Zero Cryo / Boiling Pitch / Molten Brass Machine Oil Gradient
      const lavaGrad = ctx.createLinearGradient(0, h.y, 0, h.y + fillHeight);
      if (isGlacier) {
        lavaGrad.addColorStop(0, '#E0F2FE');
        lavaGrad.addColorStop(0.15, '#38BDF8');
        lavaGrad.addColorStop(0.45, '#0284C7');
        lavaGrad.addColorStop(0.8, '#0A2540');
        lavaGrad.addColorStop(1, '#020617');
      } else if (isSpace) {
        lavaGrad.addColorStop(0, '#6366F1');
        lavaGrad.addColorStop(0.3, '#312E81');
        lavaGrad.addColorStop(1, '#04020C');
      } else if (isNeon) {
        lavaGrad.addColorStop(0, '#FF007F');
        lavaGrad.addColorStop(0.3, '#701A75');
        lavaGrad.addColorStop(1, '#0B0726');
      } else if (isCastle) {
        // Boiling pitch & molten brimstone
        lavaGrad.addColorStop(0, '#78350F');
        lavaGrad.addColorStop(0.12, '#451A03');
        lavaGrad.addColorStop(0.45, '#1C1917');
        lavaGrad.addColorStop(1, '#0A080C');
      } else if (isClockwork) {
        // Boiling Engine Oil & Molten Copper Slag
        lavaGrad.addColorStop(0, '#D97706');
        lavaGrad.addColorStop(0.12, '#78350F');
        lavaGrad.addColorStop(0.45, '#26160C');
        lavaGrad.addColorStop(1, '#0C0806');
      } else {
        // Volcanic Incandescent Molten Magma
        lavaGrad.addColorStop(0, '#F97316');
        lavaGrad.addColorStop(0.12, '#EF4444');
        lavaGrad.addColorStop(0.45, '#991B1B');
        lavaGrad.addColorStop(1, '#1C0606');
      }
      ctx.fillStyle = lavaGrad;
      ctx.fillRect(h.x, h.y, h.width, fillHeight);

      // Bubbling Magma / Freezing Nitrogen / Boiling Pitch / Engine Oil Wave Crest
      ctx.fillStyle = isGlacier ? '#FFFFFF' : (isSpace ? '#38BDF8' : (isNeon ? '#00F0FF' : ((isCastle || isClockwork) ? '#F59E0B' : '#FEF08A')));
      ctx.beginPath();
      ctx.moveTo(h.x, h.y);
      for (let x = h.x; x <= h.x + h.width; x += 16) {
        const wave = Math.sin(x * 0.05 + this.gameTime * 6) * 4.5;
        ctx.lineTo(x, h.y + wave);
      }
      ctx.lineTo(h.x + h.width, h.y + 12);
      ctx.lineTo(h.x, h.y + 12);
      ctx.closePath();
      ctx.fill();

      // Bubbling Magma & Floating Charred Crust Rocks / Floating Icebergs / Boiling Pitch Slag
      if (isGlacier) {
        // Floating ice floe chunks in the cryo pool
        ctx.fillStyle = 'rgba(224, 242, 254, 0.85)';
        const chunkSpacing = 52;
        const numChunks = Math.floor(h.width / chunkSpacing);
        for (let i = 0; i < numChunks; i++) {
          const cx = h.x + 14 + i * chunkSpacing + Math.sin(this.gameTime * 2 + i) * 6;
          const waveY = h.y + Math.sin(cx * 0.05 + this.gameTime * 6) * 4.5;
          ctx.beginPath();
          ctx.moveTo(cx - 8, waveY);
          ctx.lineTo(cx, waveY - 5);
          ctx.lineTo(cx + 8, waveY);
          ctx.lineTo(cx + 4, waveY + 5);
          ctx.lineTo(cx - 4, waveY + 5);
          ctx.closePath();
          ctx.fill();
        }

        // Sub-zero nitrogen vapor bubbles
        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 4; i++) {
          const bx = h.x + ((i * 113 + this.gameTime * 35) % Math.max(10, h.width - 20)) + 10;
          const bWave = h.y + Math.sin(bx * 0.05 + this.gameTime * 6) * 4.5;
          const bRadius = 2 + Math.abs(Math.sin(this.gameTime * 8 + i * 2)) * 3;
          ctx.beginPath();
          ctx.arc(bx, bWave, bRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (isCastle) {
        // Floating charred slag & brimstone crust in boiling pitch
        ctx.fillStyle = '#1C1917';
        const chunkSpacing = 44;
        const numChunks = Math.floor(h.width / chunkSpacing);
        for (let i = 0; i < numChunks; i++) {
          const cx = h.x + 10 + i * chunkSpacing + Math.sin(this.gameTime * 2 + i) * 6;
          const waveY = h.y + Math.sin(cx * 0.05 + this.gameTime * 6) * 4.5;
          ctx.fillRect(cx, waveY - 2, 12, 4);
        }

        // Fiery Tar Bubbles
        ctx.fillStyle = '#F59E0B';
        for (let i = 0; i < 4; i++) {
          const bx = h.x + ((i * 113 + this.gameTime * 35) % Math.max(10, h.width - 20)) + 10;
          const bWave = h.y + Math.sin(bx * 0.05 + this.gameTime * 6) * 4.5;
          const bRadius = 2 + Math.abs(Math.sin(this.gameTime * 8 + i * 2)) * 3;
          ctx.beginPath();
          ctx.arc(bx, bWave, bRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (isVolcano || (!isSpace && !isNeon)) {
        // Floating basalt crust chunks bobbing on magma surface
        ctx.fillStyle = '#292524';
        const chunkSpacing = 48;
        const numChunks = Math.floor(h.width / chunkSpacing);
        for (let i = 0; i < numChunks; i++) {
          const cx = h.x + 12 + i * chunkSpacing + Math.sin(this.gameTime * 2 + i) * 6;
          const waveY = h.y + Math.sin(cx * 0.05 + this.gameTime * 6) * 4.5;
          ctx.fillRect(cx, waveY - 2, 14, 5);
        }

        // Bursting Magma Bubbles
        ctx.fillStyle = '#FEF08A';
        for (let i = 0; i < 4; i++) {
          const bx = h.x + ((i * 113 + this.gameTime * 35) % Math.max(10, h.width - 20)) + 10;
          const bWave = h.y + Math.sin(bx * 0.05 + this.gameTime * 6) * 4.5;
          const bRadius = 2 + Math.abs(Math.sin(this.gameTime * 8 + i * 2)) * 3;
          ctx.beginPath();
          ctx.arc(bx, bWave, bRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Rising steam / cryo-vapor warning indicators along moving pits
      if (h.speed && h.distanceY) {
        ctx.fillStyle = isGlacier ? 'rgba(224, 242, 254, 0.45)' : 'rgba(254, 240, 138, 0.45)';
        ctx.fillRect(h.x + 2, h.y - 4, h.width - 4, 2);
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
    } else if (c.type === 'bubble_shield') {
      // Bubble Shield Collectible Item
      const cx = c.x + c.width / 2;
      const cy = c.y + c.height / 2 + bob;
      const radius = c.width * 0.58;
      const pulse = Math.sin(this.gameTime * 4) * 1.5;

      ctx.save();
      // Outer glow
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius + pulse);
      grad.addColorStop(0, 'rgba(186, 230, 253, 0.25)');
      grad.addColorStop(0.7, 'rgba(56, 189, 248, 0.45)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0.75)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius + pulse, 0, Math.PI * 2);
      ctx.fill();

      // Bubble outline
      ctx.strokeStyle = '#E0F2FE';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius + pulse, 0, Math.PI * 2);
      ctx.stroke();

      // Inner mini shield icon / emblem
      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.moveTo(cx, cy - 6);
      ctx.lineTo(cx + 6, cy - 3);
      ctx.lineTo(cx + 5, cy + 5);
      ctx.lineTo(cx, cy + 9);
      ctx.lineTo(cx - 5, cy + 5);
      ctx.lineTo(cx - 6, cy - 3);
      ctx.closePath();
      ctx.fill();

      // Inner specular gleam
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(cx - radius * 0.35, cy - radius * 0.35, radius * 0.22, 0, Math.PI * 2);
      ctx.fill();

      // Floating label
      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SHIELD', cx, cy - radius - 5);
      ctx.restore();
    } else if (c.type === 'snow_cannon') {
      // Rapid-Fire Snowball Cannon Weapon Pickup
      const cx = c.x + c.width / 2;
      const cy = c.y + c.height / 2 + bob;

      // Pulsing Arctic Cyan Aura
      const aura = Math.sin(this.gameTime * 4) * 0.15 + 0.4;
      ctx.fillStyle = `rgba(6, 182, 212, ${aura})`;
      ctx.beginPath();
      ctx.arc(cx, cy, c.width * 0.95, 0, Math.PI * 2);
      ctx.fill();

      // Outer rotating frost sparkles
      ctx.fillStyle = '#FFFFFF';
      for (let i = 0; i < 4; i++) {
        const ang = this.gameTime * 2 + (i * Math.PI) / 2;
        const sx = cx + Math.cos(ang) * (c.width * 0.85);
        const sy = cy + Math.sin(ang) * (c.width * 0.85);
        ctx.fillRect(sx - 1, sy - 1, 2, 2);
      }

      // Heavy Cannon Chassis (Deep navy/glacial alloy)
      ctx.fillStyle = '#0F2642';
      ctx.beginPath();
      ctx.roundRect(cx - 10, cy - 6, 20, 10, 2);
      ctx.fill();

      // Frosted Cannon Barrel
      ctx.fillStyle = '#BAE6FD';
      ctx.fillRect(cx + 8, cy - 7, 5, 12);
      ctx.fillStyle = '#00F0FF';
      ctx.fillRect(cx + 12, cy - 5, 2, 8);

      // Cryo Battery Core
      ctx.fillStyle = '#38BDF8';
      ctx.fillRect(cx - 5, cy - 4, 10, 6);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(cx - 2, cy - 2.5, 4, 3);

      // Handle
      ctx.fillStyle = '#081726';
      ctx.fillRect(cx - 7, cy + 3, 6, 8);

      // Floating label
      ctx.fillStyle = '#7DD3FC';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('❄️ CANNON', cx, cy - 16);
    } else if (c.type === 'acorn') {
      // Golden Bird Acorn (with optional feather plumage style)
      const cx = c.x + c.width / 2;
      const cy = c.y + c.height / 2 + bob;
      const isFeather = this.collectibleStyle === 'feather';

      if (isFeather) {
        // Celestial Golden Feather
        const aura = Math.sin(this.gameTime * 4) * 0.15 + 0.35;
        ctx.fillStyle = `rgba(245, 158, 11, ${aura})`;
        ctx.beginPath();
        ctx.arc(cx, cy, c.width * 0.9, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(0.25 + Math.sin(this.gameTime * 3) * 0.08);

        // Vanes (Gold plumage)
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.bezierCurveTo(7, -8, 8, 4, 0, 12);
        ctx.bezierCurveTo(-8, 4, -7, -8, 0, -14);
        ctx.fill();

        // Inner quill highlight
        ctx.fillStyle = '#FEF08A';
        ctx.beginPath();
        ctx.moveTo(0, -12);
        ctx.bezierCurveTo(3, -6, 3, 2, 0, 9);
        ctx.bezierCurveTo(-3, 2, -3, -6, 0, -12);
        ctx.fill();

        // Quill spine
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(0, 14);
        ctx.stroke();

        ctx.restore();

        ctx.fillStyle = '#FBBF24';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('FEATHER', cx, cy - 16);
      } else {
        // Glowing Golden Acorn
        const aura = Math.sin(this.gameTime * 4) * 0.15 + 0.35;
        ctx.fillStyle = `rgba(245, 158, 11, ${aura})`;
        ctx.beginPath();
        ctx.arc(cx, cy, c.width * 0.95, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(cx, cy);
        const wobble = Math.sin(this.gameTime * 3 + c.x * 0.02) * 0.08;
        ctx.rotate(wobble);

        // Nut gradient
        const nutGrad = ctx.createLinearGradient(-8, -4, 8, 10);
        nutGrad.addColorStop(0, '#FDE047');
        nutGrad.addColorStop(0.5, '#F59E0B');
        nutGrad.addColorStop(1, '#B45309');

        ctx.fillStyle = nutGrad;
        ctx.beginPath();
        ctx.moveTo(-8, -2);
        ctx.bezierCurveTo(-8, 6, -5, 11, 0, 13);
        ctx.bezierCurveTo(5, 11, 8, 6, 8, -2);
        ctx.closePath();
        ctx.fill();

        // Nut specular glint
        ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.beginPath();
        ctx.ellipse(-3, 2, 2.5, 5, -0.3, 0, Math.PI * 2);
        ctx.fill();

        // Acorn Cupule / Wooden Cap
        ctx.fillStyle = '#78350F';
        ctx.beginPath();
        ctx.ellipse(0, -3, 9, 5, 0, Math.PI, 0);
        ctx.fill();

        // Cap rim
        ctx.fillStyle = '#92400E';
        ctx.beginPath();
        ctx.ellipse(0, -3, 9, 3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Cap crosshatch / texture lines
        ctx.strokeStyle = '#451A03';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-6, -3);
        ctx.lineTo(-2, -7);
        ctx.moveTo(0, -3);
        ctx.lineTo(2, -7);
        ctx.moveTo(5, -3);
        ctx.lineTo(6, -6);
        ctx.stroke();

        // Acorn Stem at top
        ctx.strokeStyle = '#451A03';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, -7);
        ctx.quadraticCurveTo(2, -12, 4, -13);
        ctx.stroke();

        // Sparkle stars around acorn
        const sparkTime = this.gameTime * 4;
        const sparkX = Math.cos(sparkTime) * 11;
        const sparkY = Math.sin(sparkTime) * 11;
        ctx.fillStyle = '#FEF08A';
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Floating label
        ctx.fillStyle = '#FBBF24';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🌰 ACORN', cx, cy - 16);
      }
    }
  }

  private drawEnemy(e: Enemy) {
    drawEnemyFigure(this.ctx, e, this.gameTime);
  }

  private drawEnemyProjectile(ep: EnemyProjectile) {
    drawEnemyProjectileFigure(this.ctx, ep, this.gameTime);
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
      hasSnowCannon: p.hasSnowCannon,
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

    // Active Bubble Shield aura around player
    if (p.hasShield) {
      const shieldRadius = Math.max(p.width, p.height) * 0.72;
      const shieldPulse = Math.sin(this.gameTime * 4) * 1.5;
      const shieldCenterY = p.y + p.height / 2;

      ctx.save();
      // Outer bubble glow
      const grad = ctx.createRadialGradient(cx, shieldCenterY, shieldRadius * 0.35, cx, shieldCenterY, shieldRadius + shieldPulse);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.05)');
      grad.addColorStop(0.7, 'rgba(125, 211, 252, 0.25)');
      grad.addColorStop(1, 'rgba(34, 211, 238, 0.65)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, shieldCenterY, shieldRadius + shieldPulse, 0, Math.PI * 2);
      ctx.fill();

      // Shimmering bubble rim
      ctx.strokeStyle = 'rgba(224, 242, 254, 0.85)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, shieldCenterY, shieldRadius + shieldPulse, 0, Math.PI * 2);
      ctx.stroke();

      // Specular highlight reflection on upper-left of bubble
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.beginPath();
      ctx.ellipse(
        cx - (shieldRadius + shieldPulse) * 0.45,
        shieldCenterY - (shieldRadius + shieldPulse) * 0.45,
        (shieldRadius + shieldPulse) * 0.28,
        (shieldRadius + shieldPulse) * 0.14,
        -Math.PI / 4,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.restore();
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

    if (b.isSnowball) {
      // Solid clean snowball projectile
      const r = b.radius;
      ctx.translate(b.x, b.y);

      // Base solid white compacted snow sphere
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();

      // Soft solid spherical lower shadow (crescent)
      ctx.fillStyle = '#E0F2FE';
      ctx.beginPath();
      ctx.arc(0, r * 0.25, r * 0.75, 0, Math.PI);
      ctx.closePath();
      ctx.fill();

      // Crisp solid perimeter rim
      ctx.strokeStyle = '#BAE6FD';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.stroke();

      // Top specular highlight gleam
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(-r * 0.32, -r * 0.32, r * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      return;
    }

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
