import { Enemy, EnemyProjectile, EnemyType } from '../types/game';

/**
 * Draws a rich, stylized animated enemy on any canvas context.
 * Used both in the main GameRenderer and in the EnemyGalleryModal bestiary preview cards!
 */
export function drawEnemyFigure(
  ctx: CanvasRenderingContext2D,
  e: Partial<Enemy> & { type: EnemyType; x: number; y: number; width: number; height: number },
  gameTime: number
) {
  const cx = e.x + e.width / 2;
  const cy = e.y + e.height / 2;
  const facing = e.facing !== undefined ? e.facing : 1;
  const animTime = (e.animTimer || 0) + gameTime;

  ctx.save();

  if (e.type === 'anteater') {
    // ==========================================
    // SILLY ANIMAL: ANTEATER (Snouty)
    // Long vacuum snout, bushy tail, funny walk
    // ==========================================
    const walkBob = Math.sin(animTime * 12) * 2;
    const snoutPulse = Math.sin(animTime * 8) * 3;

    ctx.translate(cx, cy + walkBob);
    if (facing === -1) ctx.scale(-1, 1);

    // Bushy Furry Tail (curled up behind)
    ctx.fillStyle = '#78350F';
    ctx.beginPath();
    ctx.ellipse(-16, -2, 12, 8, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#92400E';
    ctx.beginPath();
    ctx.ellipse(-18, -4, 10, 6, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = '#B45309';
    ctx.beginPath();
    ctx.ellipse(0, 2, 16, 11, 0, 0, Math.PI * 2);
    ctx.fill();

    // Darker dorsal stripe
    ctx.fillStyle = '#451A03';
    ctx.beginPath();
    ctx.moveTo(-10, 2);
    ctx.quadraticCurveTo(0, -6, 12, -2);
    ctx.lineTo(8, 6);
    ctx.quadraticCurveTo(0, 0, -8, 8);
    ctx.closePath();
    ctx.fill();

    // Head
    ctx.fillStyle = '#B45309';
    ctx.beginPath();
    ctx.arc(10, -2, 8, 0, Math.PI * 2);
    ctx.fill();

    // Long Iconic Snout (vacuum tube)
    ctx.fillStyle = '#92400E';
    ctx.lineWidth = 4.5;
    ctx.strokeStyle = '#78350F';
    ctx.beginPath();
    ctx.moveTo(14, 0);
    ctx.bezierCurveTo(20, 2, 24, 6 + snoutPulse * 0.4, 28, 4);
    ctx.stroke();

    // Snout Nozzle Tip
    ctx.fillStyle = '#1C1917';
    ctx.beginPath();
    ctx.ellipse(28, 4, 2.5, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Ear
    ctx.fillStyle = '#78350F';
    ctx.beginPath();
    ctx.ellipse(8, -8, 3, 5, Math.PI / 6, 0, Math.PI * 2);
    ctx.fill();

    // Googly Eye
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(11, -3, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0F172A';
    ctx.beginPath();
    ctx.arc(12.5, -3, 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(13, -3.8, 0.8, 0, Math.PI * 2);
    ctx.fill();

    // Little scurrying paws
    const legPhase = Math.sin(animTime * 14);
    ctx.fillStyle = '#451A03';
    ctx.fillRect(-10, 10 + legPhase * 2, 4, 6 - legPhase * 2);
    ctx.fillRect(8, 10 - legPhase * 2, 4, 6 + legPhase * 2);

    // Occasional suction puff from snout
    if (Math.sin(animTime * 4) > 0.6) {
      ctx.fillStyle = 'rgba(239, 68, 68, 0.8)';
      ctx.beginPath();
      ctx.arc(32, 4, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (e.type === 'beaver') {
    // ==========================================
    // SILLY ANIMAL: BEAVER (Chomper)
    // Hardhat, buck teeth, paddle tail, timber logs
    // ==========================================
    const waddle = Math.sin(animTime * 10) * 0.08;
    ctx.translate(cx, cy);
    if (facing === -1) ctx.scale(-1, 1);
    ctx.rotate(waddle);

    // Flat textured paddle tail (flapping behind)
    const tailFlap = Math.sin(animTime * 12) * 3;
    ctx.fillStyle = '#78350F';
    ctx.beginPath();
    ctx.ellipse(-18, 4 + tailFlap * 0.5, 12, 6, -0.2, 0, Math.PI * 2);
    ctx.fill();
    // Tail cross-hatch texture
    ctx.strokeStyle = '#451A03';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-24, 2); ctx.lineTo(-12, 6);
    ctx.moveTo(-22, 6); ctx.lineTo(-14, 2);
    ctx.stroke();

    // Chubby Beaver Body
    ctx.fillStyle = '#92400E';
    ctx.beginPath();
    ctx.ellipse(0, 2, 14, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Light Tan Belly
    ctx.fillStyle = '#FDE68A';
    ctx.beginPath();
    ctx.ellipse(2, 4, 8, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Beaver Head
    ctx.fillStyle = '#92400E';
    ctx.beginPath();
    ctx.arc(6, -4, 9, 0, Math.PI * 2);
    ctx.fill();

    // Cute chubby snout
    ctx.fillStyle = '#D97706';
    ctx.beginPath();
    ctx.ellipse(10, -2, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Shiny Black Nose
    ctx.fillStyle = '#1C1917';
    ctx.beginPath();
    ctx.arc(13, -3, 2, 0, Math.PI * 2);
    ctx.fill();

    // Giant White Buck Teeth (Chompers!)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(10, 0, 2.5, 4.5);
    ctx.fillRect(12.8, 0, 2.5, 4.5);
    ctx.strokeStyle = '#78350F';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(10, 0, 2.5, 4.5);
    ctx.strokeRect(12.8, 0, 2.5, 4.5);

    // Eyes
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(7, -7, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0F172A';
    ctx.beginPath();
    ctx.arc(8, -7, 1.6, 0, Math.PI * 2);
    ctx.fill();

    // Yellow Construction Hardhat!
    ctx.fillStyle = '#FACC15';
    ctx.beginPath();
    ctx.arc(6, -11, 7.5, Math.PI, 0);
    ctx.fill();
    // Hardhat Brim
    ctx.fillStyle = '#EAB308';
    ctx.beginPath();
    ctx.ellipse(6, -11, 10, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    // Hardhat Safety Crest
    ctx.fillStyle = '#CA8A04';
    ctx.fillRect(5, -16, 2, 5);

    // Beaver Little Paws (Holding small wood log)
    ctx.fillStyle = '#78350F';
    ctx.beginPath();
    ctx.arc(6, 6, 3, 0, Math.PI * 2);
    ctx.fill();

    // Miniature Log in Paws
    ctx.fillStyle = '#78350F';
    ctx.fillRect(8, 2, 8, 6);
    ctx.fillStyle = '#B45309';
    ctx.beginPath();
    ctx.arc(16, 5, 3, 0, Math.PI * 2);
    ctx.fill();

    // Feet
    ctx.fillStyle = '#451A03';
    ctx.fillRect(-6, 12, 5, 3);
    ctx.fillRect(2, 12, 5, 3);
  } else if (e.type === 'hedgehog') {
    // ==========================================
    // SILLY ANIMAL: HEDGEHOG (Spikey)
    // Curls into razor-sharp spinning quill ball!
    // ==========================================
    const isCurled = e.state === 'rolling' || e.isSpiky;
    ctx.translate(cx, cy);

    if (isCurled) {
      // Spinning Spiky Ball
      const spin = animTime * 18 * facing;
      ctx.rotate(spin);

      // Core Spiky Ball
      ctx.fillStyle = '#581C87';
      ctx.beginPath();
      ctx.arc(0, 0, 11, 0, Math.PI * 2);
      ctx.fill();

      // Sharp Radiating Quills
      const quillCount = 12;
      for (let i = 0; i < quillCount; i++) {
        const angle = (i / quillCount) * Math.PI * 2;
        const qx = Math.cos(angle) * 11;
        const qy = Math.sin(angle) * 11;
        const tipX = Math.cos(angle) * 18;
        const tipY = Math.sin(angle) * 18;
        const perpX = -Math.sin(angle) * 3;
        const perpY = Math.cos(angle) * 3;

        ctx.fillStyle = i % 2 === 0 ? '#9333EA' : '#C084FC';
        ctx.beginPath();
        ctx.moveTo(qx + perpX, qy + perpY);
        ctx.lineTo(tipX, tipY);
        ctx.lineTo(qx - perpX, qy - perpY);
        ctx.closePath();
        ctx.fill();
      }

      // Angry cartoon eyes in center
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(-3, -1, 3, 0, Math.PI * 2);
      ctx.arc(3, -1, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(-2, -1, 1.5, 0, Math.PI * 2);
      ctx.arc(4, -1, 1.5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Uncurled cute walking hedgehog
      if (facing === -1) ctx.scale(-1, 1);
      const walkBob = Math.sin(animTime * 12) * 1.5;
      ctx.translate(0, walkBob);

      // Back of Quills
      ctx.fillStyle = '#6B21A8';
      ctx.beginPath();
      ctx.ellipse(-2, 0, 13, 10, -0.1, 0, Math.PI * 2);
      ctx.fill();

      // Individual Quill Tufts along back
      ctx.fillStyle = '#9333EA';
      for (let i = -10; i <= 6; i += 4) {
        ctx.beginPath();
        ctx.moveTo(i, -6);
        ctx.lineTo(i - 4, -13);
        ctx.lineTo(i + 3, -7);
        ctx.fill();
      }

      // Cute beige tummy & face
      ctx.fillStyle = '#FED7AA';
      ctx.beginPath();
      ctx.ellipse(4, 2, 9, 7, 0, 0, Math.PI * 2);
      ctx.fill();

      // Snout
      ctx.fillStyle = '#FDBA74';
      ctx.beginPath();
      ctx.ellipse(11, 2, 5, 3.5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Shiny Black Button Nose
      ctx.fillStyle = '#1C1917';
      ctx.beginPath();
      ctx.arc(15, 1.5, 2, 0, Math.PI * 2);
      ctx.fill();

      // Big curious eyes
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(7, -1, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#1E1B4B';
      ctx.beginPath();
      ctx.arc(8, -1, 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Feet
      ctx.fillStyle = '#78350F';
      ctx.fillRect(-6, 9, 4, 3);
      ctx.fillRect(4, 9, 4, 3);
    }
  } else if (e.type === 'frog') {
    // ==========================================
    // SILLY ANIMAL: FROG (Sir Ribbit-Hop)
    // Bulging eyes, pulsating throat, spring hops
    // ==========================================
    const isJumping = e.state === 'jumping' || (e.vy && Math.abs(e.vy) > 0.5);
    ctx.translate(cx, cy);
    if (facing === -1) ctx.scale(-1, 1);

    if (isJumping) {
      // Extended legs flying through air
      ctx.fillStyle = '#059669';
      // Hind legs stretched back
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#047857';
      ctx.beginPath();
      ctx.moveTo(-4, 6); ctx.lineTo(-12, 14); ctx.lineTo(-18, 12);
      ctx.stroke();

      // Frog Body
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.ellipse(0, 0, 13, 10, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      ctx.fillStyle = '#FBBF24';
      ctx.beginPath();
      ctx.arc(4, -8, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#064E3B';
      ctx.fillRect(4, -9, 3, 2);
    } else {
      // Squatted resting frog with pulsating throat
      const throatPulse = Math.sin(animTime * 6) * 3;
      ctx.translate(0, 2);

      // Hind thighs folded
      ctx.fillStyle = '#047857';
      ctx.beginPath();
      ctx.ellipse(-8, 4, 7, 5, -0.4, 0, Math.PI * 2);
      ctx.fill();

      // Main Frog Body
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.ellipse(2, 2, 12, 9, 0, 0, Math.PI * 2);
      ctx.fill();

      // Pulsating Cream Throat Sac
      ctx.fillStyle = '#D1FAE5';
      ctx.beginPath();
      ctx.ellipse(7, 4 + throatPulse * 0.3, 5 + throatPulse * 0.4, 4 + throatPulse * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Big Smiling Frog Mouth
      ctx.strokeStyle = '#064E3B';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(6, 2, 7, 0.1, Math.PI * 0.45);
      ctx.stroke();

      // Bulging Frog Eyes on top
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.arc(2, -7, 5, 0, Math.PI * 2);
      ctx.arc(8, -7, 5, 0, Math.PI * 2);
      ctx.fill();

      // Golden Iris with horizontal slit
      ctx.fillStyle = '#FDE047';
      ctx.beginPath();
      ctx.arc(2, -7, 3.5, 0, Math.PI * 2);
      ctx.arc(8, -7, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#064E3B';
      ctx.fillRect(0.5, -7.5, 3.5, 1.8);
      ctx.fillRect(6.5, -7.5, 3.5, 1.8);

      // Webbed front feet
      ctx.fillStyle = '#059669';
      ctx.fillRect(3, 9, 6, 2.5);
    }
  } else if (e.type === 'skunk') {
    // ==========================================
    // SILLY ANIMAL: SKUNK (Stinky Sheldon)
    // Bushy striped tail arched high, cute stroll
    // ==========================================
    const tailWave = Math.sin(animTime * 8) * 4;
    ctx.translate(cx, cy);
    if (facing === -1) ctx.scale(-1, 1);

    // Big Bushy Arched Tail (The weapon!)
    ctx.fillStyle = '#0F172A';
    ctx.beginPath();
    ctx.moveTo(-8, 4);
    ctx.bezierCurveTo(-18, 0, -22 + tailWave * 0.3, -16, -14, -20);
    ctx.bezierCurveTo(-8, -22, -6, -14, -6, 2);
    ctx.fill();

    // Bold White Racing Stripe on Tail
    ctx.strokeStyle = '#F8FAFC';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-7, 2);
    ctx.bezierCurveTo(-16, 0, -18 + tailWave * 0.3, -15, -13, -18);
    ctx.stroke();

    // Black Body
    ctx.fillStyle = '#1E293B';
    ctx.beginPath();
    ctx.ellipse(2, 2, 13, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // White Back Stripe
    ctx.fillStyle = '#F8FAFC';
    ctx.beginPath();
    ctx.ellipse(0, -4, 9, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#1E293B';
    ctx.beginPath();
    ctx.arc(10, -2, 6.5, 0, Math.PI * 2);
    ctx.fill();

    // White Stripe from Nose up to Forehead
    ctx.fillStyle = '#F8FAFC';
    ctx.beginPath();
    ctx.moveTo(14, -1);
    ctx.lineTo(9, -7);
    ctx.lineTo(8, -7);
    ctx.lineTo(13, -1);
    ctx.closePath();
    ctx.fill();

    // Pink Snout Nose
    ctx.fillStyle = '#F472B6';
    ctx.beginPath();
    ctx.arc(15, -1, 1.6, 0, Math.PI * 2);
    ctx.fill();

    // Eye
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(11, -3, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0F172A';
    ctx.beginPath();
    ctx.arc(11.8, -3, 1.2, 0, Math.PI * 2);
    ctx.fill();

    // Feet
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(-6, 9, 3.5, 3);
    ctx.fillRect(4, 9, 3.5, 3);

    // Stink Fume Hint around tail
    if (Math.sin(animTime * 6) > 0.4) {
      ctx.fillStyle = 'rgba(132, 204, 22, 0.4)';
      ctx.beginPath();
      ctx.arc(-14 + tailWave * 0.5, -22, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (e.type === 'goose') {
    // ==========================================
    // SILLY ANIMAL: GOOSE (Honkers)
    // Aggressive sprinting, long neck, orange beak
    // ==========================================
    const flap = Math.sin(animTime * 22) * 8;
    const neckStretch = Math.sin(animTime * 14) * 2;
    ctx.translate(cx, cy);
    if (facing === -1) ctx.scale(-1, 1);

    // White Goose Body
    ctx.fillStyle = '#F8FAFC';
    ctx.beginPath();
    ctx.ellipse(-2, 4, 13, 9, -0.1, 0, Math.PI * 2);
    ctx.fill();

    // Grey Tail Feathers
    ctx.fillStyle = '#CBD5E1';
    ctx.beginPath();
    ctx.moveTo(-12, 2); ctx.lineTo(-20, -2); ctx.lineTo(-14, 8);
    ctx.fill();

    // Aggressive Forward Neck
    ctx.fillStyle = '#F8FAFC';
    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.quadraticCurveTo(12, 0, 16 + neckStretch, -10);
    ctx.lineTo(20 + neckStretch, -9);
    ctx.quadraticCurveTo(15, 2, 9, 10);
    ctx.fill();

    // Goose Head
    ctx.fillStyle = '#F8FAFC';
    ctx.beginPath();
    ctx.arc(19 + neckStretch, -11, 5, 0, Math.PI * 2);
    ctx.fill();

    // Angry Slanted Eye
    ctx.fillStyle = '#0F172A';
    ctx.beginPath();
    ctx.arc(19 + neckStretch, -12, 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#DC2626';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(17 + neckStretch, -14);
    ctx.lineTo(21 + neckStretch, -12.5);
    ctx.stroke();

    // Giant Wide-Open Screaming Orange Beak!
    ctx.fillStyle = '#EA580C';
    // Top beak
    ctx.beginPath();
    ctx.moveTo(22 + neckStretch, -13);
    ctx.lineTo(31 + neckStretch, -12);
    ctx.lineTo(23 + neckStretch, -10);
    ctx.fill();
    // Bottom beak
    ctx.beginPath();
    ctx.moveTo(22 + neckStretch, -9);
    ctx.lineTo(29 + neckStretch, -6);
    ctx.lineTo(21 + neckStretch, -7);
    ctx.fill();

    // Tongue in wide-open honking mouth
    ctx.fillStyle = '#EF4444';
    ctx.fillRect(23 + neckStretch, -9.5, 4, 1.5);

    // Flapping Wing
    ctx.fillStyle = '#E2E8F0';
    ctx.beginPath();
    ctx.ellipse(0, 0, 9, 5, -flap * 0.05, 0, Math.PI * 2);
    ctx.fill();

    // Webbed Orange Running Feet
    const footPhase = Math.sin(animTime * 20);
    ctx.fillStyle = '#EA580C';
    ctx.fillRect(-6, 12 + footPhase * 2, 5, 4 - footPhase * 2);
    ctx.fillRect(4, 12 - footPhase * 2, 5, 4 + footPhase * 2);
  } else if (e.type === 'pigeon') {
    // ==========================================
    // SILLY ANIMAL: DAPPER CITY PIGEON
    // Top hat, iridescent sheen, dive flap
    // ==========================================
    const flap = Math.sin(animTime * 14) * 6;
    ctx.translate(cx, cy);
    if (facing === -1) ctx.scale(-1, 1);

    // Pigeon Body (Slate Grey)
    ctx.fillStyle = '#64748B';
    ctx.beginPath();
    ctx.ellipse(0, 2, 12, 9, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Iridescent Neck (Emerald & Purple sheen)
    ctx.fillStyle = '#059669';
    ctx.beginPath();
    ctx.ellipse(6, -2, 6, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#7C3AED';
    ctx.beginPath();
    ctx.ellipse(5, -1, 4, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(8, -6, 5.5, 0, Math.PI * 2);
    ctx.fill();

    // Orange Beak with white cere
    ctx.fillStyle = '#F97316';
    ctx.beginPath();
    ctx.moveTo(12, -6); ctx.lineTo(17, -5); ctx.lineTo(12, -4);
    ctx.fill();
    ctx.fillStyle = '#F8FAFC';
    ctx.beginPath();
    ctx.arc(12, -6, 1.2, 0, Math.PI * 2);
    ctx.fill();

    // Pigeon Eye (Orange ring with black pupil)
    ctx.fillStyle = '#F97316';
    ctx.beginPath();
    ctx.arc(9, -7, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0F172A';
    ctx.beginPath();
    ctx.arc(9.5, -7, 1.2, 0, Math.PI * 2);
    ctx.fill();

    // Dapper Miniature Top Hat!
    ctx.fillStyle = '#0F172A';
    // Brim
    ctx.fillRect(4, -13, 8, 2);
    // Crown
    ctx.fillRect(5.5, -19, 5, 6);
    // Red Ribbon Band
    ctx.fillStyle = '#EF4444';
    ctx.fillRect(5.5, -14.5, 5, 1.5);

    // Flapping Wings
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.ellipse(-2, -1 + flap * 0.3, 10, 5, -Math.PI / 4 + flap * 0.08, 0, Math.PI * 2);
    ctx.fill();
  } else if (e.type === 'patroller') {
    // ==========================================
    // CLOCKWORK BEAVER BOT (Mechanical patroller)
    // Brass gears, winding key, optic visor
    // ==========================================
    ctx.translate(cx, cy);
    if (facing === -1) ctx.scale(-1, 1);

    // Brass Gear Body
    ctx.fillStyle = '#D97706';
    ctx.beginPath();
    ctx.roundRect(-10, -10, 20, 20, 4);
    ctx.fill();

    // Rotating Cog on Top
    const cogAngle = animTime * 8;
    ctx.save();
    ctx.translate(0, -12);
    ctx.rotate(cogAngle);
    ctx.fillStyle = '#F59E0B';
    ctx.fillRect(-6, -2, 12, 4);
    ctx.fillRect(-2, -6, 4, 12);
    ctx.restore();

    // Glowing Optical Visor
    ctx.fillStyle = '#EF4444';
    ctx.fillRect(2, -4, 7, 4);
    ctx.fillStyle = '#FEE2E2';
    ctx.fillRect(5, -3, 2, 2);

    // Mechanical Legs
    const step = Math.sin(animTime * 14) * 3;
    ctx.fillStyle = '#78350F';
    ctx.fillRect(-7, 10, 4, 4 + step);
    ctx.fillRect(3, 10, 4, 4 - step);
  } else if (e.type === 'flyer') {
    // ==========================================
    // ROBO-HORNET DRONE
    // Rapid laser wings, metallic stinger
    // ==========================================
    const wingFlap = Math.sin(animTime * 20) * 10;
    ctx.translate(cx, cy);

    // Laser Wings
    ctx.fillStyle = 'rgba(139, 92, 246, 0.7)';
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(-18, -wingFlap); ctx.lineTo(-6, 4);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(18, -wingFlap); ctx.lineTo(6, 4);
    ctx.fill();

    // Metal Body
    ctx.fillStyle = '#4C1D95';
    ctx.beginPath();
    ctx.arc(0, 0, 9, 0, Math.PI * 2);
    ctx.fill();

    // Stinger
    ctx.fillStyle = '#FBBF24';
    ctx.beginPath();
    ctx.moveTo(-3, 8); ctx.lineTo(0, 16); ctx.lineTo(3, 8);
    ctx.fill();

    // Visor
    ctx.fillStyle = '#EF4444';
    ctx.fillRect(-4, -2, 8, 4);
  } else {
    // ==========================================
    // CLASSIC SLIME
    // ==========================================
    const squish = Math.sin(animTime * 10) * 2;
    const ew = e.width + squish;
    const eh = e.height - squish;

    ctx.translate(cx, cy);

    // Body
    ctx.fillStyle = '#10B981';
    ctx.beginPath();
    ctx.ellipse(0, squish * 0.5, ew / 2, eh / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Dome
    ctx.fillStyle = '#34D399';
    ctx.beginPath();
    ctx.ellipse(0, -eh * 0.15 + squish * 0.5, ew * 0.35, eh * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    const eyeOffsetX = facing === 1 ? 4 : -4;
    ctx.fillStyle = '#064E3B';
    ctx.beginPath();
    ctx.arc(eyeOffsetX - 3, 0, 2.5, 0, Math.PI * 2);
    ctx.arc(eyeOffsetX + 3, 0, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(eyeOffsetX - 3, -0.5, 1, 0, Math.PI * 2);
    ctx.arc(eyeOffsetX + 3, -0.5, 1, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

/**
 * Draws stylized enemy projectiles (ants, tumbling logs, stink clouds, honk waves)
 */
export function drawEnemyProjectileFigure(
  ctx: CanvasRenderingContext2D,
  ep: EnemyProjectile,
  gameTime: number
) {
  const cx = ep.x + ep.width / 2;
  const cy = ep.y + ep.height / 2;

  ctx.save();
  ctx.translate(cx, cy);

  if (ep.type === 'ant') {
    // ==========================================
    // MARCHING RED/BLACK ANT
    // 3 segments, twitching antennae, 6 legs
    // ==========================================
    const dir = ep.vx >= 0 ? 1 : -1;
    if (dir === -1) ctx.scale(-1, 1);

    const legWalk = Math.sin(ep.life * 28);

    // 6 Scuttling Legs
    ctx.strokeStyle = '#451A03';
    ctx.lineWidth = 1.2;
    // Front leg
    ctx.beginPath();
    ctx.moveTo(3, 1); ctx.lineTo(6, 4 + legWalk * 2); ctx.lineTo(8, 6);
    ctx.moveTo(0, 1); ctx.lineTo(0, 4 - legWalk * 2); ctx.lineTo(-1, 6);
    ctx.moveTo(-3, 1); ctx.lineTo(-6, 4 + legWalk * 2); ctx.lineTo(-8, 6);
    ctx.stroke();

    // Abdomen (rear)
    ctx.fillStyle = '#991B1B';
    ctx.beginPath();
    ctx.ellipse(-5, 0, 4.5, 3.5, -0.2, 0, Math.PI * 2);
    ctx.fill();

    // Thorax (middle)
    ctx.fillStyle = '#7F1D1D';
    ctx.beginPath();
    ctx.ellipse(0, 0, 3, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#991B1B';
    ctx.beginPath();
    ctx.arc(5, -1, 3, 0, Math.PI * 2);
    ctx.fill();

    // Antennae
    ctx.strokeStyle = '#451A03';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(6, -3); ctx.lineTo(9, -7 + Math.sin(ep.life * 15) * 1.5);
    ctx.stroke();

    // Glowing angry ant eye
    ctx.fillStyle = '#FEF08A';
    ctx.beginPath();
    ctx.arc(6, -2, 1, 0, Math.PI * 2);
    ctx.fill();
  } else if (ep.type === 'log') {
    // ==========================================
    // TUMBLING WOODEN LOG
    // Bark texture, concentric tree rings
    // ==========================================
    if (ep.rotation !== undefined) ctx.rotate(ep.rotation);

    // Main Log Cylinder
    ctx.fillStyle = '#78350F';
    ctx.beginPath();
    ctx.roundRect(-ep.width / 2, -ep.height / 2, ep.width, ep.height, 3);
    ctx.fill();

    // Tree Bark Grooves
    ctx.strokeStyle = '#451A03';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-ep.width / 2 + 4, -2); ctx.lineTo(ep.width / 2 - 4, -2);
    ctx.moveTo(-ep.width / 2 + 6, 2); ctx.lineTo(ep.width / 2 - 6, 2);
    ctx.stroke();

    // End Cut Tree Rings
    ctx.fillStyle = '#B45309';
    ctx.beginPath();
    ctx.ellipse(-ep.width / 2 + 2, 0, 2.5, ep.height / 2 - 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.ellipse(ep.width / 2 - 2, 0, 2.5, ep.height / 2 - 2, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (ep.type === 'stink_cloud') {
    // ==========================================
    // GIGGLY GREEN STINK CLOUD
    // Billowy comic puffs with toxic fumes
    // ==========================================
    const pulse = Math.sin(ep.life * 6) * 2;
    const r = ep.width / 2 + pulse;

    ctx.fillStyle = 'rgba(132, 204, 22, 0.65)';
    ctx.beginPath();
    ctx.arc(-4, 0, r * 0.7, 0, Math.PI * 2);
    ctx.arc(4, -2, r * 0.65, 0, Math.PI * 2);
    ctx.arc(0, 3, r * 0.6, 0, Math.PI * 2);
    ctx.fill();

    // Inner lighter cloud core
    ctx.fillStyle = 'rgba(190, 242, 100, 0.8)';
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
    ctx.fill();

    // Swirling toxic fume spiral
    ctx.strokeStyle = '#4D7C0F';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.35, ep.life * 4, ep.life * 4 + Math.PI);
    ctx.stroke();
  } else if (ep.type === 'honk_wave') {
    // ==========================================
    // SONIC HONK! SHOCKWAVE
    // Expanding rings with vibrato sound waves
    // ==========================================
    const r = ep.width / 2;
    ctx.strokeStyle = '#F97316';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, r, -Math.PI / 3, Math.PI / 3);
    ctx.stroke();

    ctx.strokeStyle = '#FB923C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.65, -Math.PI / 4, Math.PI / 4);
    ctx.stroke();

    // Floating HONK mini text
    ctx.fillStyle = '#EA580C';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HONK', 0, -r - 2);
  }

  ctx.restore();
}
