import React from 'react';

interface BarnabyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showSubtitle?: boolean;
  animated?: boolean;
}

export const BarnabyLogo: React.FC<BarnabyLogoProps> = ({
  size = 'hero',
  className = '',
  showSubtitle = true,
  animated = true
}) => {
  // Scale factor based on size
  const dimensions = {
    sm: { width: 180, height: 60, fontSize: 32 },
    md: { width: 260, height: 90, fontSize: 44 },
    lg: { width: 360, height: 120, fontSize: 62 },
    hero: { width: 440, height: 160, fontSize: 74 }
  }[size];

  return (
    <div 
      className={`relative inline-flex flex-col items-center justify-center select-none group ${className}`}
      style={{ filter: 'drop-shadow(0 12px 28px rgba(2, 6, 23, 0.7))' }}
    >
      <svg
        viewBox="0 0 540 190"
        width={dimensions.width}
        height={dimensions.height}
        className={`w-auto h-auto max-w-full overflow-visible transition-transform duration-300 ${
          animated ? 'group-hover:scale-105' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Gold/Orange Letter Gradient */}
          <linearGradient id="barnabyGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="25%" stopColor="#FBBF24" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Letter Highlight Gloss */}
          <linearGradient id="barnabyGlossGrad" x1="0%" y1="0%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FEF08A" stopOpacity="0.0" />
          </linearGradient>

          {/* Extrusion / 3D Bevel Gradient */}
          <linearGradient id="barnabyExtrudeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="50%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>

          {/* Outer Chrome / Cyan Glow Accent */}
          <linearGradient id="barnabyCyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>

          {/* Thruster Flame Gradient */}
          <linearGradient id="barnabyFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="35%" stopColor="#60A5FA" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>

          {/* Ribbon Gradient */}
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="25%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="75%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          {/* Radial Glow Behind Logo */}
          <radialGradient id="backdropGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </radialGradient>

          {/* Filter for glowing elements */}
          <filter id="neonSparkle" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="thrusterGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Pulsing Glow Circle */}
        <ellipse cx="270" cy="85" rx="230" ry="70" fill="url(#backdropGlow)" />

        {/* Backplate Wings / Jetpack Fins */}
        <g opacity="0.95">
          {/* Left Jetpack Fin */}
          <path
            d="M 90 85 L 15 45 Q 5 70 30 100 L 85 105 Z"
            fill="#1E293B"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 85 90 L 35 60 L 50 95 Z"
            fill="#0284C7"
            opacity="0.8"
          />

          {/* Right Jetpack Fin */}
          <path
            d="M 450 85 L 525 45 Q 535 70 510 100 L 455 105 Z"
            fill="#1E293B"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M 455 90 L 505 60 L 490 95 Z"
            fill="#0284C7"
            opacity="0.8"
          />
        </g>

        {/* Dual Jetpack Rocket Thrusters beneath letters */}
        <g id="thrusters">
          {/* Left Thruster Nozzle & Flame */}
          <g transform="translate(130, 118)">
            <rect x="-14" y="0" width="28" height="14" rx="3" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <ellipse cx="0" cy="14" rx="14" ry="4" fill="#0F172A" />
            {/* Animated Flame */}
            <path
              d="M -10 14 Q 0 44 0 46 Q 0 44 10 14 Q 5 22 0 24 Q -5 22 -10 14 Z"
              fill="url(#barnabyFlameGrad)"
              filter="url(#thrusterGlow)"
              className={animated ? 'animate-pulse' : ''}
            />
            <path
              d="M -5 14 Q 0 30 0 32 Q 0 30 5 14 Z"
              fill="#FFFFFF"
              opacity="0.9"
            />
          </g>

          {/* Right Thruster Nozzle & Flame */}
          <g transform="translate(410, 118)">
            <rect x="-14" y="0" width="28" height="14" rx="3" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <ellipse cx="0" cy="14" rx="14" ry="4" fill="#0F172A" />
            {/* Animated Flame */}
            <path
              d="M -10 14 Q 0 44 0 46 Q 0 44 10 14 Q 5 22 0 24 Q -5 22 -10 14 Z"
              fill="url(#barnabyFlameGrad)"
              filter="url(#thrusterGlow)"
              className={animated ? 'animate-pulse' : ''}
            />
            <path
              d="M -5 14 Q 0 30 0 32 Q 0 30 5 14 Z"
              fill="#FFFFFF"
              opacity="0.9"
            />
          </g>
        </g>

        {/* Mascot Barnaby Avatar Medallion perched atop logo */}
        <g transform="translate(270, 36)" className="transition-transform duration-300">
          {/* Circular Shield Badge */}
          <circle cx="0" cy="0" r="32" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" filter="url(#neonSparkle)" />
          <circle cx="0" cy="0" r="28" fill="#1E293B" />
          
          {/* Barnaby The Bird Face */}
          {/* Body/Head Blue */}
          <ellipse cx="0" cy="2" rx="20" ry="18" fill="#3B82F6" />
          
          {/* Feathery Tuft on top */}
          <path d="M -6 -14 Q 0 -24 3 -16 Q 8 -23 10 -14 Z" fill="#2563EB" />
          
          {/* Aviator Bandana / Goggles Band */}
          <rect x="-18" y="-7" width="36" height="7" rx="3" fill="#EF4444" />
          
          {/* Goggle Lenses */}
          <circle cx="-7" cy="-4" r="6" fill="#F8FAFC" stroke="#991B1B" strokeWidth="2" />
          <circle cx="7" cy="-4" r="6" fill="#F8FAFC" stroke="#991B1B" strokeWidth="2" />
          <circle cx="-5" cy="-5" r="2" fill="#38BDF8" />
          <circle cx="9" cy="-5" r="2" fill="#38BDF8" />
          
          {/* Cute Eyes (below goggles) */}
          <ellipse cx="-7" cy="3" rx="3" ry="4" fill="#0F172A" />
          <circle cx="-6" cy="1" r="1.2" fill="#FFFFFF" />
          <ellipse cx="7" cy="3" rx="3" ry="4" fill="#0F172A" />
          <circle cx="8" cy="1" r="1.2" fill="#FFFFFF" />

          {/* Cute Cheeks */}
          <circle cx="-13" cy="7" r="3" fill="#F43F5E" opacity="0.6" />
          <circle cx="13" cy="7" r="3" fill="#F43F5E" opacity="0.6" />

          {/* Golden Yellow Beak */}
          <polygon points="0,4 -6,11 6,11" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
        </g>

        {/* 3D Extrusion Shadow for "BARNABY" */}
        <g 
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif', 
            fontWeight: 900, 
            fontSize: '76px', 
            letterSpacing: '4px' 
          }} 
          textAnchor="middle"
        >
          {/* Deep Black Silhouette Underlay */}
          <text x="270" y="118" fill="#020617" stroke="#020617" strokeWidth="18" strokeLinejoin="round">
            BARNABY
          </text>

          {/* Cyan Glow Outline */}
          <text x="270" y="114" fill="none" stroke="url(#barnabyCyanGlow)" strokeWidth="12" strokeLinejoin="round" opacity="0.9">
            BARNABY
          </text>

          {/* 3D Extrusion Layers (Stacked for chunky relief) */}
          <text x="270" y="115" fill="#451A03" stroke="#451A03" strokeWidth="6" strokeLinejoin="round">
            BARNABY
          </text>
          <text x="270" y="112" fill="#78350F">
            BARNABY
          </text>
          <text x="270" y="109" fill="#92400E">
            BARNABY
          </text>
          <text x="270" y="106" fill="#B45309">
            BARNABY
          </text>
          <text x="270" y="104" fill="#D97706">
            BARNABY
          </text>

          {/* Primary Warm Golden Face */}
          <text x="270" y="102" fill="url(#barnabyGoldGrad)" stroke="#FEF08A" strokeWidth="1.5">
            BARNABY
          </text>

          {/* Top Edge Specular Reflection */}
          <text x="270" y="101" fill="none" stroke="url(#barnabyGlossGrad)" strokeWidth="2">
            BARNABY
          </text>
        </g>

        {/* Sparkle Stars on the letters */}
        <g fill="#FFFFFF" filter="url(#neonSparkle)">
          {/* Top-left of B */}
          <path d="M 85 58 Q 87 63 92 65 Q 87 67 85 72 Q 83 67 78 65 Q 83 63 85 58 Z" />
          {/* Middle star near N */}
          <path d="M 270 54 Q 272 58 276 60 Q 272 62 270 66 Q 268 62 264 60 Q 268 58 270 54 Z" />
          {/* Right star on Y */}
          <path d="M 450 62 Q 452 66 456 68 Q 452 70 450 74 Q 448 70 444 68 Q 448 66 450 62 Z" />
        </g>

        {/* Subtitle Banner Ribbon ("THE JETPACK ADVENTURE") */}
        {showSubtitle && (
          <g transform="translate(270, 150)">
            {/* Ribbon Background Ends */}
            <path
              d="M -170 0 L -190 -8 L -175 14 L -190 32 L -170 24 Z"
              fill="#1E3A8A"
              stroke="#1E40AF"
              strokeWidth="2"
            />
            <path
              d="M 170 0 L 190 -8 L 175 14 L 190 32 L 170 24 Z"
              fill="#1E3A8A"
              stroke="#1E40AF"
              strokeWidth="2"
            />

            {/* Central Ribbon Banner */}
            <path
              d="M -165 -6 L 165 -6 L 155 24 L -155 24 Z"
              fill="url(#ribbonGrad)"
              stroke="#60A5FA"
              strokeWidth="2"
              filter="url(#neonSparkle)"
            />

            {/* Star Icons on Ribbon Sides */}
            <polygon points="-135,9 -131,3 -127,9 -121,9 -125,13 -123,19 -131,15 -139,19 -137,13 -141,9" fill="#FDE047" />
            <polygon points="135,9 139,3 143,9 149,9 145,13 147,19 139,15 131,19 133,13 129,9" fill="#FDE047" />

            {/* Subtitle Text */}
            <text
              x="0"
              y="14"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 900,
                fontSize: '13px',
                letterSpacing: '3px'
              }}
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="0.5"
            >
              JETPACK ADVENTURE
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
