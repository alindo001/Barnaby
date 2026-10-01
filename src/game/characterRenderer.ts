import { CharacterConfig, Player } from '../types/game';
import { DEFAULT_CHARACTER_CONFIGS } from './characters';

export interface RenderCharacterOptions {
  ctx: CanvasRenderingContext2D;
  char?: CharacterConfig;
  p?: Partial<Player>;
  x?: number;
  y?: number;
  scale?: number;
  facing?: 1 | -1;
  time?: number;
  isGrounded?: boolean;
  isJumping?: boolean;
  vx?: number;
  hasBlaster?: boolean;
  blasterAmmo?: number;
  hasJetpack?: boolean;
  jetpackFuel?: number;
  maxJetpackFuel?: number;
  isJetpacking?: boolean;
  showShadow?: boolean;
}

export function renderCharacter(opts: RenderCharacterOptions): void {
  const {
    ctx,
    char = DEFAULT_CHARACTER_CONFIGS.bird,
    p,
    x = 0,
    y = 0,
    scale = 1.0,
    facing = p?.facing ?? 1,
    time = 0,
    isGrounded = p?.isGrounded ?? true,
    isJumping = p?.isJumping ?? false,
    vx = p?.vx ?? 0,
    hasBlaster = p?.hasBlaster ?? false,
    blasterAmmo = p?.blasterAmmo ?? 0,
    hasJetpack = p?.hasJetpack ?? false,
    jetpackFuel = p?.jetpackFuel ?? 100,
    maxJetpackFuel = p?.maxJetpackFuel ?? 100,
    isJetpacking = p?.isJetpacking ?? false,
    showShadow = false
  } = opts;

  ctx.save();
  ctx.translate(x, y);

  // Optional preview shadow underneath
  if (showShadow) {
    ctx.save();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.35)';
    ctx.beginPath();
    ctx.ellipse(0, 16 * scale, 12 * scale, 4 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Facing and scale
  const scaleX = (p?.scaleX ?? 1.0) * scale * facing;
  const scaleY = (p?.scaleY ?? 1.0) * scale;
  ctx.scale(scaleX, scaleY);

  // Running lean
  const runAngle = (!isJumping && isGrounded && Math.abs(vx) > 0.5) 
    ? Math.sin(time * 15) * 0.08 
    : 0;
  ctx.rotate(runAngle);

  const pw = 24;
  const ph = 28;

  // 1. Back Layer: Cape & Jetpack
  drawBackLayer(ctx, char, pw, ph, time, vx, hasJetpack, jetpackFuel, maxJetpackFuel, isJetpacking);

  // 2. Character Base Body & Anatomy
  switch (char.type) {
    case 'bird':
      drawBird(ctx, char, pw, ph, time, vx, isGrounded, isJumping);
      break;
    case 'frog':
      drawFrog(ctx, char, pw, ph, time, vx, isGrounded, isJumping);
      break;
    case 'axolotl':
      drawAxolotl(ctx, char, pw, ph, time, vx, isGrounded, isJumping);
      break;
    case 'capybara':
      drawCapybara(ctx, char, pw, ph, time, vx, isGrounded, isJumping);
      break;
    default:
      drawBird(ctx, char, pw, ph, time, vx, isGrounded, isJumping);
      break;
  }

  // 3. Eye Expression
  drawExpression(ctx, char, pw, ph, time);

  // 4. Outfit (Scarf, Bowtie, Vest)
  drawOutfit(ctx, char, pw, ph, time, vx);

  // 5. Hat / Headgear
  drawHat(ctx, char, pw, ph, time, vx);

  // 6. Blaster Gun
  if (hasBlaster) {
    const bx = pw / 2 - 2;
    const by = 2;
    // Gun barrel
    ctx.fillStyle = '#1E293B';
    ctx.fillRect(bx, by - 2, 9, 4);
    // Metallic slide
    ctx.fillStyle = '#64748B';
    ctx.fillRect(bx - 2, by - 4, 8, 4);
    // Glowing cyan laser emitter
    ctx.fillStyle = '#38BDF8';
    ctx.fillRect(bx + 7, by - 1.5, 3, 3);
    // Energy power cell
    ctx.fillStyle = blasterAmmo > 0 ? '#38BDF8' : '#64748B';
    ctx.fillRect(bx, by + 1, 4, 3);
  }

  // Speed aura if active
  if (p && p.speedBoostTimer && p.speedBoostTimer > 0) {
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-pw / 2 - 3, -ph / 2 - 3, pw + 6, ph + 6);
  }

  ctx.restore();
}

// ----------------------------------------------------
// BACK LAYER (Cape, Jetpack, etc.)
// ----------------------------------------------------
function drawBackLayer(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number,
  vx: number,
  hasJetpack: boolean,
  jetpackFuel: number,
  maxJetpackFuel: number,
  isJetpacking: boolean
) {
  // Cape if equipped
  if (char.outfit === 'cape') {
    const capeWave = -vx * 1.8 + Math.sin(time * 10) * 3;
    ctx.fillStyle = char.outfitColor || '#EF4444';
    ctx.beginPath();
    ctx.moveTo(-pw / 2 + 3, -ph / 2 + 10);
    ctx.lineTo(-pw / 2 - 14 + capeWave, ph / 2 + 2);
    ctx.lineTo(-pw / 2 - 6 + capeWave * 0.5, ph / 2 + 6);
    ctx.lineTo(-pw / 2 + 6, -ph / 2 + 12);
    ctx.closePath();
    ctx.fill();

    // Cape border / shadow
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Jetpack on back
  if (hasJetpack) {
    // Mounting straps
    ctx.fillStyle = '#1E293B';
    ctx.fillRect(-pw / 2, -ph / 2 + 8, pw * 0.7, 3);
    ctx.fillRect(-pw / 2, ph / 2 - 12, pw * 0.7, 3);

    // Jetpack canister body
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.roundRect(-pw / 2 - 7, -ph / 2 + 7, 8, ph - 16, 3);
    ctx.fill();

    // Red tank highlight
    ctx.fillStyle = '#EF4444';
    ctx.fillRect(-pw / 2 - 6, -ph / 2 + 10, 6, ph - 22);

    // Metal ring band
    ctx.fillStyle = '#94A3B8';
    ctx.fillRect(-pw / 2 - 7, -ph / 2 + 16, 8, 2);

    // Fuel LED
    const fuelRatio = jetpackFuel / maxJetpackFuel;
    ctx.fillStyle = fuelRatio > 0.5 ? '#10B981' : fuelRatio > 0.2 ? '#F59E0B' : '#EF4444';
    ctx.fillRect(-pw / 2 - 5, -ph / 2 + 9, 4, 3);

    // Nozzle
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(-pw / 2 - 6, ph / 2 - 9, 6, 5);

    // Flames if jetpacking
    if (isJetpacking) {
      const flameLen = 14 + Math.sin(time * 35) * 5;
      const flameW = 7;
      const nozX = -pw / 2 - 3;
      const nozY = ph / 2 - 4;

      ctx.fillStyle = '#F97316';
      ctx.beginPath();
      ctx.moveTo(nozX - flameW / 2, nozY);
      ctx.lineTo(nozX, nozY + flameLen);
      ctx.lineTo(nozX + flameW / 2, nozY);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FEF08A';
      ctx.beginPath();
      ctx.moveTo(nozX - flameW * 0.3, nozY);
      ctx.lineTo(nozX, nozY + flameLen * 0.65);
      ctx.lineTo(nozX + flameW * 0.3, nozY);
      ctx.closePath();
      ctx.fill();
    }
  }
}

// ----------------------------------------------------
// 1. BIRD (MAIN CHARACTER)
// ----------------------------------------------------
function drawBird(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number,
  vx: number,
  isGrounded: boolean,
  isJumping: boolean
) {
  const stepOffset = isGrounded && Math.abs(vx) > 0.5 ? Math.sin(time * 20) * 3 : 0;

  // Tail feathers at back
  const tailWave = Math.sin(time * 12) * 2;
  ctx.fillStyle = char.accentColor || char.primaryColor;
  ctx.beginPath();
  ctx.moveTo(-pw / 2 + 1, 2);
  ctx.lineTo(-pw / 2 - 7, -2 + tailWave);
  ctx.lineTo(-pw / 2 - 9, 5 + tailWave);
  ctx.lineTo(-pw / 2 - 5, 9 + tailWave);
  ctx.lineTo(-pw / 2 + 2, 8);
  ctx.closePath();
  ctx.fill();

  // Bird Feet (Talons)
  ctx.fillStyle = '#F59E0B';
  // Back foot
  ctx.beginPath();
  ctx.roundRect(-pw / 2 + 2, ph / 2 - 5 - stepOffset, 6, 4, 2);
  ctx.fill();
  // Front foot
  ctx.beginPath();
  ctx.roundRect(pw / 2 - 9, ph / 2 - 5 + stepOffset, 6, 4, 2);
  ctx.fill();

  // Plump Bird Torso (Rounded oval body)
  ctx.fillStyle = char.primaryColor;
  ctx.beginPath();
  ctx.ellipse(0, 0, pw / 2 + 1, ph / 2 - 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Soft Golden/Contrasting Belly patch
  ctx.fillStyle = char.secondaryColor;
  ctx.beginPath();
  ctx.ellipse(pw / 4 - 1, 3, pw / 3.2, ph / 3.4, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Head Crest Feathers
  const crestColor = char.specialColor || char.accentColor || char.primaryColor;
  if (char.specialFeature === 'crest') {
    // Elegant sweeping crest
    ctx.fillStyle = crestColor;
    ctx.beginPath();
    ctx.moveTo(-1, -ph / 2 + 2);
    ctx.quadraticCurveTo(-4, -ph / 2 - 9, -10, -ph / 2 - 6);
    ctx.quadraticCurveTo(-3, -ph / 2 - 3, 2, -ph / 2 + 2);
    ctx.closePath();
    ctx.fill();
  } else if (char.specialFeature === 'tuft') {
    // Double bouncy tuft
    ctx.fillStyle = crestColor;
    ctx.beginPath();
    ctx.ellipse(-2, -ph / 2 - 3, 3, 5, -0.3, 0, Math.PI * 2);
    ctx.ellipse(3, -ph / 2 - 2, 2.5, 4, 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cute Triangular Bird Beak
  ctx.fillStyle = '#F59E0B'; // warm golden beak
  ctx.beginPath();
  ctx.moveTo(pw / 2 - 2, -ph / 2 + 7);
  ctx.lineTo(pw / 2 + 7, -ph / 2 + 10);
  ctx.lineTo(pw / 2 - 2, -ph / 2 + 13);
  ctx.closePath();
  ctx.fill();
  // Lower beak depth
  ctx.fillStyle = '#D97706';
  ctx.beginPath();
  ctx.moveTo(pw / 2 - 2, -ph / 2 + 10);
  ctx.lineTo(pw / 2 + 7, -ph / 2 + 10);
  ctx.lineTo(pw / 2 - 2, -ph / 2 + 13);
  ctx.closePath();
  ctx.fill();

  // Fluttering Side Wing
  const wingFlap = isJumping 
    ? Math.sin(time * 26) * 6 
    : Math.abs(vx) > 0.5 
    ? Math.sin(time * 16) * 3 
    : Math.sin(time * 4) * 1;
  ctx.fillStyle = char.accentColor || char.primaryColor;
  ctx.beginPath();
  ctx.ellipse(-2, 2 + wingFlap * 0.3, 6, 8, -0.3 + wingFlap * 0.05, 0, Math.PI * 2);
  ctx.fill();
  // Wing inner accent line
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

// ----------------------------------------------------
// 2. FROG (TREEFROG / HOPPER)
// ----------------------------------------------------
function drawFrog(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number,
  vx: number,
  isGrounded: boolean,
  isJumping: boolean
) {
  const stepOffset = isGrounded && Math.abs(vx) > 0.5 ? Math.sin(time * 20) * 3 : 0;

  // Webbed Feet / Hopper Legs
  ctx.fillStyle = char.accentColor || '#15803D';
  // Back leg
  ctx.beginPath();
  ctx.roundRect(-pw / 2 + 1, ph / 2 - 6 - stepOffset, 7, 5, 2);
  ctx.fill();
  // Front leg
  ctx.beginPath();
  ctx.roundRect(pw / 2 - 9, ph / 2 - 6 + stepOffset, 7, 5, 2);
  ctx.fill();

  // Round Frog Body
  ctx.fillStyle = char.primaryColor;
  ctx.beginPath();
  ctx.roundRect(-pw / 2, -ph / 2 + 5, pw, ph - 9, 8);
  ctx.fill();

  // Creamy Frog Belly Patch
  ctx.fillStyle = char.secondaryColor;
  ctx.beginPath();
  ctx.ellipse(0, 4, pw / 2.8, ph / 3.4, 0, 0, Math.PI * 2);
  ctx.fill();

  // Frog Eye Domes (Iconic bulging eyes on top of head)
  ctx.fillStyle = char.primaryColor;
  // Left eye dome
  ctx.beginPath();
  ctx.arc(-pw / 4, -ph / 2 + 5, 5, 0, Math.PI * 2);
  ctx.fill();
  // Right eye dome
  ctx.beginPath();
  ctx.arc(pw / 4 + 1, -ph / 2 + 5, 5.5, 0, Math.PI * 2);
  ctx.fill();

  // Wide Smiling Frog Mouth
  ctx.strokeStyle = '#0F172A';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(1, -ph / 2 + 13, 6, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();

  // Special feature: blush, dots, stripes
  if (char.specialFeature === 'blush') {
    ctx.fillStyle = char.specialColor || '#FB7185';
    ctx.beginPath();
    ctx.arc(-pw / 3, -ph / 2 + 12, 2.5, 0, Math.PI * 2);
    ctx.arc(pw / 3, -ph / 2 + 12, 2.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.specialFeature === 'dots') {
    ctx.fillStyle = char.specialColor || '#14532D';
    ctx.beginPath();
    ctx.arc(-pw / 3, 0, 1.8, 0, Math.PI * 2);
    ctx.arc(-pw / 4, 6, 2, 0, Math.PI * 2);
    ctx.arc(-pw / 2 + 4, 3, 1.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.specialFeature === 'stripes') {
    ctx.strokeStyle = char.specialColor || '#0284C7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-pw / 2 + 3, -1);
    ctx.lineTo(-2, 3);
    ctx.moveTo(-pw / 2 + 3, 5);
    ctx.lineTo(-3, 8);
    ctx.stroke();
  }
}

// ----------------------------------------------------
// 3. AXOLOTL (WATER DRAGON)
// ----------------------------------------------------
function drawAxolotl(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number,
  vx: number,
  isGrounded: boolean,
  isJumping: boolean
) {
  const stepOffset = isGrounded && Math.abs(vx) > 0.5 ? Math.sin(time * 20) * 3 : 0;

  // Wavy Translucent Aquatic Tail
  const tailSway = Math.sin(time * 9) * 3;
  ctx.fillStyle = char.secondaryColor;
  ctx.beginPath();
  ctx.moveTo(-pw / 2 + 2, 3);
  ctx.quadraticCurveTo(-pw / 2 - 8, 4 + tailSway, -pw / 2 - 12, 1 + tailSway);
  ctx.quadraticCurveTo(-pw / 2 - 9, 8 + tailSway, -pw / 2 + 1, 9);
  ctx.closePath();
  ctx.fill();

  // Little Salamander Paws
  ctx.fillStyle = char.accentColor || char.primaryColor;
  ctx.beginPath();
  ctx.roundRect(-pw / 2 + 2, ph / 2 - 5 - stepOffset, 6, 4, 2);
  ctx.roundRect(pw / 2 - 8, ph / 2 - 5 + stepOffset, 6, 4, 2);
  ctx.fill();

  // External Frill Gills (3 Branches on Back/Sides of Head)
  const gillColor = char.specialColor || char.secondaryColor;
  ctx.fillStyle = gillColor;
  for (let i = 0; i < 3; i++) {
    const sway = Math.sin(time * 6 + i * 1.3) * 2;
    const gy = -ph / 2 + 3 + i * 4;
    // Left/back gills
    ctx.beginPath();
    if (char.specialFeature === 'spiky') {
      ctx.moveTo(-pw / 2 + 4, gy);
      ctx.lineTo(-pw / 2 - 7 + sway, gy - 2);
      ctx.lineTo(-pw / 2 + 2, gy + 3);
    } else {
      // Fluffy rounded plumes
      ctx.ellipse(-pw / 2 - 4 + sway, gy, 4.5, 2.5, -0.3, 0, Math.PI * 2);
    }
    ctx.fill();

    // Starry sparkles on tips
    if (char.specialFeature === 'starry') {
      ctx.fillStyle = '#FEF08A';
      ctx.beginPath();
      ctx.arc(-pw / 2 - 7 + sway, gy, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = gillColor;
    }
  }

  // Smooth Axolotl Body
  ctx.fillStyle = char.primaryColor;
  ctx.beginPath();
  ctx.roundRect(-pw / 2, -ph / 2 + 4, pw, ph - 8, 7);
  ctx.fill();

  // Tender Belly Patch
  ctx.fillStyle = char.secondaryColor;
  ctx.beginPath();
  ctx.ellipse(0, 3, pw / 3, ph / 3.6, 0, 0, Math.PI * 2);
  ctx.fill();

  // Axolotl Cute Wide Smile
  ctx.strokeStyle = '#0F172A';
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.arc(1, -ph / 2 + 12, 5, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();

  // Rosy Ghyroid cheeks
  ctx.fillStyle = 'rgba(244, 63, 94, 0.45)';
  ctx.beginPath();
  ctx.arc(-pw / 3 + 1, -ph / 2 + 11, 2, 0, Math.PI * 2);
  ctx.arc(pw / 3 - 1, -ph / 2 + 11, 2, 0, Math.PI * 2);
  ctx.fill();
}

// ----------------------------------------------------
// 4. CAPYBARA (ZEN ONsen FRIEND)
// ----------------------------------------------------
function drawCapybara(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number,
  vx: number,
  isGrounded: boolean,
  isJumping: boolean
) {
  const stepOffset = isGrounded && Math.abs(vx) > 0.5 ? Math.sin(time * 20) * 3 : 0;

  // Sturdy Little Paws
  ctx.fillStyle = char.accentColor || '#451A03';
  ctx.beginPath();
  ctx.roundRect(-pw / 2 + 2, ph / 2 - 5 - stepOffset, 7, 5, 2);
  ctx.roundRect(pw / 2 - 8, ph / 2 - 5 + stepOffset, 7, 5, 2);
  ctx.fill();

  // Sturdy Blocky Capybara Body
  ctx.fillStyle = char.primaryColor;
  ctx.beginPath();
  ctx.roundRect(-pw / 2, -ph / 2 + 3, pw, ph - 7, 6);
  ctx.fill();

  // Characteristic Capybara Muzzle / Snout (Rectangular blocky snout)
  ctx.fillStyle = char.secondaryColor;
  ctx.beginPath();
  ctx.roundRect(pw / 4 - 3, -ph / 2 + 6, pw / 3 + 4, ph / 2 - 3, [3, 5, 5, 3]);
  ctx.fill();

  // Nostrils
  ctx.fillStyle = '#451A03';
  ctx.beginPath();
  ctx.arc(pw / 2 - 1, -ph / 2 + 11, 1.2, 0, Math.PI * 2);
  ctx.fill();

  // Capybara Ears on top
  ctx.fillStyle = char.accentColor || '#78350F';
  ctx.beginPath();
  ctx.ellipse(-pw / 4, -ph / 2 + 3, 3, 2, -0.4, 0, Math.PI * 2);
  ctx.fill();

  // Peaceful Relaxed Smile Line
  ctx.strokeStyle = '#451A03';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(pw / 4, -ph / 2 + 14);
  ctx.lineTo(pw / 2 - 1, -ph / 2 + 14);
  ctx.stroke();

  // Special feature on top of head (Yuzu, Sprout, Coffee)
  if (char.specialFeature === 'yuzu') {
    // The famous onsen Yuzu citrus!
    const yuzuY = -ph / 2 - 3;
    ctx.fillStyle = '#F59E0B'; // bright golden citrus
    ctx.beginPath();
    ctx.arc(0, yuzuY, 5, 0, Math.PI * 2);
    ctx.fill();
    // Yuzu green leaf
    ctx.fillStyle = '#22C55E';
    ctx.beginPath();
    ctx.ellipse(3, yuzuY - 4, 3, 1.5, 0.4, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.specialFeature === 'sprout') {
    // Little plant sprout
    const sproutY = -ph / 2;
    ctx.strokeStyle = '#15803D';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, sproutY);
    ctx.lineTo(0, sproutY - 6);
    ctx.stroke();
    // Two green leaves
    ctx.fillStyle = '#22C55E';
    ctx.beginPath();
    ctx.ellipse(-3, sproutY - 6, 3, 1.5, -0.4, 0, Math.PI * 2);
    ctx.ellipse(3, sproutY - 6, 3, 1.5, 0.4, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.specialFeature === 'coffee') {
    // Mini coffee mug
    const mugY = -ph / 2 - 2;
    ctx.fillStyle = '#F8FAFC';
    ctx.fillRect(-3, mugY, 6, 5);
    ctx.fillStyle = '#78350F';
    ctx.fillRect(-2, mugY + 1, 4, 2);
    // Steam
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, mugY);
    ctx.lineTo(0, mugY - 3);
    ctx.stroke();
  }
}

// ----------------------------------------------------
// EXPRESSIONS (Eyes & Shine)
// ----------------------------------------------------
function drawExpression(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number
) {
  const eyeX = char.type === 'frog' ? pw / 4 + 1 : char.type === 'capybara' ? 2 : 2.5;
  const eyeY = char.type === 'frog' ? -ph / 2 + 5 : -ph / 2 + 7.5;

  if (char.expression === 'cool' || char.hat === 'sunglasses') {
    // Sleek cool sunglasses
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(eyeX - 4, eyeY - 3, 9, 6);
    // Lens highlight reflection
    ctx.fillStyle = '#38BDF8';
    ctx.beginPath();
    ctx.moveTo(eyeX - 2, eyeY - 2);
    ctx.lineTo(eyeX + 1, eyeY - 2);
    ctx.lineTo(eyeX - 1, eyeY + 2);
    ctx.closePath();
    ctx.fill();
    return;
  }

  if (char.expression === 'sparkle') {
    // Big anime sparkle star eye
    ctx.fillStyle = '#1E293B';
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 3.2, 0, Math.PI * 2);
    ctx.fill();
    // Star glints
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(eyeX + 1, eyeY - 1, 1.4, 0, Math.PI * 2);
    ctx.arc(eyeX - 1, eyeY + 1, 0.8, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (char.expression === 'determined') {
    // Adventurer brow & eye
    ctx.strokeStyle = '#0F172A';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(eyeX - 4, eyeY - 3);
    ctx.lineTo(eyeX + 3, eyeY - 1);
    ctx.stroke();

    ctx.fillStyle = '#1E293B';
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(eyeX + 0.8, eyeY - 0.6, 0.8, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (char.expression === 'winking') {
    // Cute winking arc
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 3, 0.8 * Math.PI, 0.2 * Math.PI, true);
    ctx.stroke();
    return;
  }

  // Default 'happy'
  ctx.fillStyle = '#1E293B';
  ctx.beginPath();
  ctx.arc(eyeX, eyeY, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Eye glint
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(eyeX + 0.8, eyeY - 0.7, 1, 0, Math.PI * 2);
  ctx.fill();
}

// ----------------------------------------------------
// OUTFITS (Scarf, Bowtie, Vest)
// ----------------------------------------------------
function drawOutfit(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number,
  vx: number
) {
  const outfitColor = char.outfitColor || '#EF4444';

  if (char.outfit === 'scarf') {
    // Scarf neckband
    ctx.fillStyle = outfitColor;
    ctx.beginPath();
    ctx.roundRect(-pw / 2 + 1, -ph / 2 + 13, pw - 2, 5, 2);
    ctx.fill();

    // Fluttering scarf tail
    const scarfWave = -vx * 1.5 + Math.sin(time * 12) * 2;
    ctx.beginPath();
    ctx.moveTo(-pw / 2 + 3, -ph / 2 + 14);
    ctx.lineTo(-pw / 2 - 8, -ph / 2 + 18 + scarfWave);
    ctx.lineTo(-pw / 2 - 6, -ph / 2 + 23 + scarfWave);
    ctx.lineTo(-pw / 2 + 4, -ph / 2 + 17);
    ctx.closePath();
    ctx.fill();
  } else if (char.outfit === 'bowtie') {
    // Classy Bowtie
    ctx.fillStyle = outfitColor;
    const by = -ph / 2 + 14;
    ctx.beginPath();
    ctx.moveTo(1, by);
    ctx.lineTo(-4, by - 3);
    ctx.lineTo(-4, by + 3);
    ctx.lineTo(1, by);
    ctx.lineTo(6, by - 3);
    ctx.lineTo(6, by + 3);
    ctx.closePath();
    ctx.fill();
    // Bowtie knot
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, by - 1.5, 2.5, 3);
  } else if (char.outfit === 'vest') {
    // Adventurer open vest
    ctx.fillStyle = outfitColor;
    ctx.fillRect(-pw / 2 + 1, 0, 4, ph / 2 - 4);
    ctx.fillRect(pw / 2 - 5, 0, 4, ph / 2 - 4);
  }
}

// ----------------------------------------------------
// HATS & HEADGEAR
// ----------------------------------------------------
function drawHat(
  ctx: CanvasRenderingContext2D,
  char: CharacterConfig,
  pw: number,
  ph: number,
  time: number,
  vx: number
) {
  const hatColor = char.hatColor || '#EF4444';

  if (char.hat === 'bandana' || char.hat === 'headband') {
    // Bandana band across forehead
    ctx.fillStyle = hatColor;
    ctx.beginPath();
    ctx.roundRect(-pw / 2 - 1, -ph / 2, pw + 2, 5, [3, 3, 0, 0]);
    ctx.fill();

    // Trailing ribbon knot waving in wind
    const bandWave = -vx * 1.5 + Math.sin(time * 12) * 2;
    ctx.strokeStyle = hatColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-pw / 2 + 2, -ph / 2 + 3);
    ctx.quadraticCurveTo(-pw / 2 - 8, -ph / 2 + 5 + bandWave, -pw / 2 - 14, -ph / 2 + 3 + bandWave);
    ctx.stroke();
  } else if (char.hat === 'beanie') {
    // Cozy winter knit beanie
    ctx.fillStyle = hatColor;
    ctx.beginPath();
    ctx.roundRect(-pw / 2 - 1, -ph / 2 - 4, pw + 2, 7, [6, 6, 0, 0]);
    ctx.fill();
    // Folded rim
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(-pw / 2 - 2, -ph / 2 + 1, pw + 4, 3);
    // Fluffy Pom-pom on top
    ctx.beginPath();
    ctx.arc(0, -ph / 2 - 6, 3.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.hat === 'crown') {
    // Royal 3-spire gold crown
    ctx.fillStyle = hatColor;
    ctx.beginPath();
    ctx.moveTo(-pw / 2 + 2, -ph / 2);
    ctx.lineTo(-pw / 2 + 2, -ph / 2 - 7);
    ctx.lineTo(-pw / 4, -ph / 2 - 3);
    ctx.lineTo(0, -ph / 2 - 9);
    ctx.lineTo(pw / 4, -ph / 2 - 3);
    ctx.lineTo(pw / 2 - 2, -ph / 2 - 7);
    ctx.lineTo(pw / 2 - 2, -ph / 2);
    ctx.closePath();
    ctx.fill();
    // Crown ruby jewel
    ctx.fillStyle = '#EF4444';
    ctx.beginPath();
    ctx.arc(0, -ph / 2 - 3, 1.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.hat === 'tophat') {
    // Gentleman Top Hat
    ctx.fillStyle = hatColor;
    // Brim
    ctx.fillRect(-pw / 2 - 2, -ph / 2, pw + 4, 3);
    // Tall cylinder
    ctx.fillRect(-pw / 3, -ph / 2 - 10, pw * 0.65, 10);
    // Ribbon band
    ctx.fillStyle = '#EF4444';
    ctx.fillRect(-pw / 3, -ph / 2 - 2, pw * 0.65, 2);
  } else if (char.hat === 'flower') {
    // Tropical blooming flower
    const fx = pw / 4;
    const fy = -ph / 2 + 1;
    ctx.fillStyle = hatColor;
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5;
      ctx.beginPath();
      ctx.arc(fx + Math.cos(angle) * 3.5, fy + Math.sin(angle) * 3.5, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
    // Center pollen
    ctx.fillStyle = '#FEF08A';
    ctx.beginPath();
    ctx.arc(fx, fy, 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.hat === 'partyhat') {
    // Festive party cone
    ctx.fillStyle = hatColor;
    ctx.beginPath();
    ctx.moveTo(-pw / 4, -ph / 2);
    ctx.lineTo(0, -ph / 2 - 12);
    ctx.lineTo(pw / 4, -ph / 2);
    ctx.closePath();
    ctx.fill();
    // Stripes
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-4, -ph / 2 - 3);
    ctx.lineTo(4, -ph / 2 - 5);
    ctx.stroke();
    // Pom-pom on tip
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(0, -ph / 2 - 13, 2.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.hat === 'wizard') {
    // Magical sorcerer hat
    ctx.fillStyle = hatColor;
    // Brim
    ctx.beginPath();
    ctx.ellipse(0, -ph / 2, pw / 2 + 2, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    // Curved wizard cone
    ctx.beginPath();
    ctx.moveTo(-pw / 3, -ph / 2);
    ctx.quadraticCurveTo(-2, -ph / 2 - 8, -6, -ph / 2 - 14);
    ctx.quadraticCurveTo(2, -ph / 2 - 8, pw / 3, -ph / 2);
    ctx.closePath();
    ctx.fill();
    // Gold star
    ctx.fillStyle = '#FBBF24';
    ctx.beginPath();
    ctx.arc(-2, -ph / 2 - 7, 1.8, 0, Math.PI * 2);
    ctx.fill();
  }
}
