import { Particle, ScorePopup } from '../types/game';

export class ParticleSystem {
  public particles: Particle[] = [];
  public popups: ScorePopup[] = [];

  public update(dt: number) {
    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt * 60;
      p.y += p.vy * dt * 60;
      if (p.gravity) {
        p.vy += p.gravity * dt * 60;
      }
      p.life += dt;
      p.alpha = Math.max(0, 1 - (p.life / p.maxLife));

      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
      }
    }

    // Update score popups
    for (let i = this.popups.length - 1; i >= 0; i--) {
      const pop = this.popups[i];
      pop.y -= 1.2 * dt * 60;
      pop.life += dt;

      if (pop.life >= pop.maxLife) {
        this.popups.splice(i, 1);
      }
    }
  }

  public clear() {
    this.particles = [];
    this.popups = [];
  }

  // Dust on jumping / landing
  public emitDust(x: number, y: number, count: number = 6, color: string = '#E2E8F0') {
    for (let i = 0; i < count; i++) {
      const angle = Math.PI + (Math.random() * Math.PI); // upward semi-circle
      const speed = 0.5 + Math.random() * 2.0;
      this.particles.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        size: 3 + Math.random() * 3,
        color,
        alpha: 0.8,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.2,
        shape: 'circle',
        gravity: 0.08
      });
    }
  }

  // Double jump cloud poof and sparkles under feet
  public emitDoubleJump(x: number, y: number, color: string = '#60A5FA') {
    for (let i = 0; i < 10; i++) {
      const angle = (Math.PI * 0.15) + (i / 10) * (Math.PI * 0.7);
      const speed = 1.6 + Math.random() * 2.2;
      this.particles.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + 2,
        vx: Math.cos(angle) * (i % 2 === 0 ? speed : -speed),
        vy: Math.sin(angle) * speed * 0.4 + 0.4,
        size: 3.5 + Math.random() * 3,
        color: i % 2 === 0 ? '#FFFFFF' : color,
        alpha: 0.85,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.2,
        shape: 'circle',
        gravity: 0.04
      });
    }
    for (let i = 0; i < 4; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y,
        vx: (Math.random() - 0.5) * 2.5,
        vy: -1.0 - Math.random() * 1.5,
        size: 3 + Math.random() * 2,
        color: '#FDE047',
        alpha: 0.9,
        life: 0,
        maxLife: 0.3,
        shape: 'sparkle',
        gravity: 0.05
      });
    }
  }

  // Dust when running
  public emitFootstep(x: number, y: number, facing: number, color: string = '#E2E8F0') {
    if (Math.random() > 0.4) return;
    this.particles.push({
      x: x - facing * 8,
      y: y + 2,
      vx: -facing * (0.5 + Math.random() * 1.0),
      vy: -0.2 - Math.random() * 0.5,
      size: 2 + Math.random() * 2.5,
      color,
      alpha: 0.6,
      life: 0,
      maxLife: 0.25,
      shape: 'circle',
      gravity: 0.05
    });
  }

  // Coin / Gem sparkles
  public emitSparkles(x: number, y: number, color: string = '#FBBF24', count: number = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 4,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.4 + Math.random() * 0.3,
        shape: Math.random() > 0.5 ? 'sparkle' : 'star',
        gravity: 0.05
      });
    }
  }

  // Enemy defeat explosion
  public emitEnemyPop(x: number, y: number, color: string = '#EF4444', count: number = 14) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.0 + Math.random() * 4.0;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 3 + Math.random() * 5,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.5 + Math.random() * 0.3,
        shape: 'square',
        gravity: 0.15
      });
    }
  }

  // Player death burst
  public emitDeath(x: number, y: number, color: string = '#3B82F6') {
    for (let i = 0; i < 24; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 5.0;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.0,
        size: 4 + Math.random() * 6,
        color: i % 2 === 0 ? color : '#93C5FD',
        alpha: 1,
        life: 0,
        maxLife: 0.7 + Math.random() * 0.4,
        shape: 'square',
        gravity: 0.18
      });
    }
  }

  // Confetti fireworks for victory
  public emitConfetti(x: number, y: number, count: number = 30) {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#FBBF24'];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI / 4) + (Math.random() * Math.PI / 2); // mostly upward
      const speed = 3.0 + Math.random() * 7.0;
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 8,
        vy: -speed,
        size: 4 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: 0,
        maxLife: 1.2 + Math.random() * 0.8,
        shape: Math.random() > 0.5 ? 'square' : 'star',
        gravity: 0.12
      });
    }
  }

  // Jetpack thruster flame & sparks
  public emitJetpackFlame(x: number, y: number, facing: number) {
    const flameColors = ['#F97316', '#FBBF24', '#EF4444', '#38BDF8', '#FEF08A'];
    // Emit 2-3 flame / plasma particles
    for (let i = 0; i < 3; i++) {
      const color = flameColors[Math.floor(Math.random() * flameColors.length)];
      this.particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 3,
        vx: (Math.random() - 0.5) * 1.8 - facing * 0.4,
        vy: 2.8 + Math.random() * 3.2,
        size: 3 + Math.random() * 3.5,
        color,
        alpha: 0.9,
        life: 0,
        maxLife: 0.16 + Math.random() * 0.12,
        shape: Math.random() > 0.4 ? 'circle' : 'sparkle',
        gravity: 0.04
      });
    }

    // Occasional wispy smoke trailing behind
    if (Math.random() > 0.6) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 4,
        y: y + 4,
        vx: (Math.random() - 0.5) * 1.2,
        vy: 1.5 + Math.random() * 1.5,
        size: 4 + Math.random() * 3,
        color: '#64748B',
        alpha: 0.45,
        life: 0,
        maxLife: 0.35,
        shape: 'circle',
        gravity: -0.02 // slight upward drift as smoke cools
      });
    }
  }

  // Sputter when jetpack fuel is empty
  public emitJetpackSputter(x: number, y: number) {
    for (let i = 0; i < 2; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 4,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 0.5 + Math.random() * 1.0,
        size: 2.5 + Math.random() * 2.5,
        color: i === 0 ? '#475569' : '#F97316',
        alpha: 0.6,
        life: 0,
        maxLife: 0.25,
        shape: 'circle',
        gravity: 0.05
      });
    }
  }

  // Energy aura when recharging fuel on ground
  public emitFuelRecharge(x: number, y: number) {
    if (Math.random() > 0.45) return;
    this.particles.push({
      x: x + (Math.random() - 0.5) * 16,
      y: y + (Math.random() - 0.5) * 6,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -0.8 - Math.random() * 1.2,
      size: 2 + Math.random() * 2,
      color: Math.random() > 0.5 ? '#10B981' : '#38BDF8',
      alpha: 0.8,
      life: 0,
      maxLife: 0.35,
      shape: 'sparkle',
      gravity: -0.05
    });
  }

  // Score popup (+100, +500)
  public addPopup(x: number, y: number, text: string, color: string = '#FBBF24') {
    this.popups.push({
      id: Math.random().toString(36).substring(7),
      x,
      y: y - 10,
      text,
      color,
      life: 0,
      maxLife: 0.8
    });
  }

  // Bubble Shield burst / pop particles
  public emitShieldPop(x: number, y: number) {
    for (let i = 0; i < 18; i++) {
      const angle = (Math.PI * 2 * i) / 18 + (Math.random() - 0.5) * 0.2;
      const speed = 2.0 + Math.random() * 3.5;
      this.particles.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 4,
        color: Math.random() > 0.4 ? '#38BDF8' : '#67E8F9',
        alpha: 0.9,
        life: 0,
        maxLife: 0.4 + Math.random() * 0.2,
        shape: 'circle',
        gravity: 0.04
      });
    }
  }

  // Floating micro-bubbles when gliding with Bubble Shield
  public emitBubbleGlider(x: number, y: number) {
    if (Math.random() > 0.35) return;
    this.particles.push({
      x: x + (Math.random() - 0.5) * 14,
      y: y + (Math.random() - 0.5) * 6,
      vx: (Math.random() - 0.5) * 0.8,
      vy: 0.4 + Math.random() * 0.6,
      size: 2.5 + Math.random() * 3,
      color: '#A5F3FC',
      alpha: 0.75,
      life: 0,
      maxLife: 0.45,
      shape: 'circle',
      gravity: -0.02
    });
  }

  // Rising buoyant oxygen bubbles when swimming or moving in Deep Sea
  public emitWaterBubbles(x: number, y: number, count: number = 2) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 14,
        y: y + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 0.9,
        vy: -1.2 - Math.random() * 1.6, // Ascend buoyantly
        size: 2.2 + Math.random() * 3.8,
        color: Math.random() > 0.4 ? '#BAE6FD' : '#E0F2FE',
        alpha: 0.8,
        life: 0,
        maxLife: 0.55 + Math.random() * 0.4,
        shape: 'circle',
        gravity: -0.04
      });
    }
  }
}
