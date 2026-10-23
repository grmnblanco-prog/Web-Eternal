/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'square' | 'symbol' | 'full';
  theme?: 'color' | 'monochrome' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withSparkle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'color',
  className = '',
  size = 'md',
  withSparkle = true,
}) => {
  // Sizing definitions
  const sizeMap = {
    sm: {
      emblem: 'w-9 h-9',
      horizontalHeight: 'h-9',
      fullWidth: 'w-48',
      textMain: 'text-sm sm:text-base',
      textSub: 'text-[8px] sm:text-[9px]',
    },
    md: {
      emblem: 'w-11 h-11 sm:w-12 sm:h-12',
      horizontalHeight: 'h-11 sm:h-12',
      fullWidth: 'w-60',
      textMain: 'text-base sm:text-lg',
      textSub: 'text-[9px] sm:text-[10px]',
    },
    lg: {
      emblem: 'w-14 h-14 sm:w-16 sm:h-16',
      horizontalHeight: 'h-14 sm:h-16',
      fullWidth: 'w-72',
      textMain: 'text-lg sm:text-xl',
      textSub: 'text-[10px] sm:text-[11px]',
    },
    xl: {
      emblem: 'w-24 h-24 sm:w-28 sm:h-28',
      horizontalHeight: 'h-24 sm:h-28',
      fullWidth: 'w-88',
      textMain: 'text-2xl',
      textSub: 'text-xs',
    },
  }[size];

  const isWhite = theme === 'white';
  const isMono = theme === 'monochrome';

  // Palette colors matching user reference image
  const goldPrimary = isWhite ? '#F5DE9B' : isMono ? '#333333' : '#C29B38';
  const goldSecondary = isWhite ? '#FFFFFF' : isMono ? '#494D50' : '#D4AF37';
  const slateGray = isWhite ? '#FAF7F2' : isMono ? '#666666' : '#52565E';
  const clockStroke = isWhite ? 'rgba(245, 222, 155, 0.45)' : isMono ? 'rgba(51, 51, 51, 0.25)' : 'rgba(194, 155, 56, 0.45)';
  const clockText = isWhite ? 'rgba(245, 222, 155, 0.65)' : isMono ? 'rgba(51, 51, 51, 0.45)' : 'rgba(194, 155, 56, 0.65)';

  /**
   * SVG Monogram with integrated Roman Clock (Reloj) in the background
   */
  const ClockMonogramSvg = ({ idPrefix = 'logo' }: { idPrefix?: string }) => (
    <svg
      viewBox="0 0 120 120"
      className="w-full h-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Monograma Eternal Institute con reloj"
    >
      <defs>
        {/* Soft radial aura behind clock */}
        <radialGradient id={`${idPrefix}-clockAura`} cx="60" cy="60" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={goldPrimary} stopOpacity="0.15" />
          <stop offset="70%" stopColor={goldPrimary} stopOpacity="0.04" />
          <stop offset="100%" stopColor={goldPrimary} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient soft glow */}
      <circle cx="60" cy="60" r="48" fill={`url(#${idPrefix}-clockAura)`} />

      {/* CLOCK BACKGROUND (Reloj) */}
      <g opacity="0.95">
        {/* Outer bezel circle */}
        <circle cx="60" cy="60" r="48" stroke={clockStroke} strokeWidth="1.2" />
        {/* Inner concentric track circle */}
        <circle cx="60" cy="60" r="42" stroke={clockStroke} strokeWidth="0.7" strokeDasharray="1.5 2.5" />
        <circle cx="60" cy="60" r="39" stroke={clockStroke} strokeWidth="0.4" />

        {/* Roman Numerals at 12, 3, 6, 9 */}
        <text x="60" y="24" fontFamily="'Playfair Display', Georgia, serif" fontSize="7" fontWeight="600" fill={clockText} textAnchor="middle">XII</text>
        <text x="96" y="62.5" fontFamily="'Playfair Display', Georgia, serif" fontSize="7" fontWeight="600" fill={clockText} textAnchor="middle">III</text>
        <text x="60" y="100" fontFamily="'Playfair Display', Georgia, serif" fontSize="7" fontWeight="600" fill={clockText} textAnchor="middle">VI</text>
        <text x="24" y="62.5" fontFamily="'Playfair Display', Georgia, serif" fontSize="7" fontWeight="600" fill={clockText} textAnchor="middle">IX</text>

        {/* Hour tick marks for remaining hours */}
        {/* 1 */} <line x1="79.5" y1="26.5" x2="77.5" y2="30" stroke={clockStroke} strokeWidth="0.8" />
        {/* 2 */} <line x1="93.5" y1="40.5" x2="90" y2="42.5" stroke={clockStroke} strokeWidth="0.8" />
        {/* 4 */} <line x1="93.5" y1="79.5" x2="90" y2="77.5" stroke={clockStroke} strokeWidth="0.8" />
        {/* 5 */} <line x1="79.5" y1="93.5" x2="77.5" y2="90" stroke={clockStroke} strokeWidth="0.8" />
        {/* 7 */} <line x1="40.5" y1="93.5" x2="42.5" y2="90" stroke={clockStroke} strokeWidth="0.8" />
        {/* 8 */} <line x1="26.5" y1="79.5" x2="30" y2="77.5" stroke={clockStroke} strokeWidth="0.8" />
        {/* 10 */} <line x1="26.5" y1="40.5" x2="30" y2="42.5" stroke={clockStroke} strokeWidth="0.8" />
        {/* 11 */} <line x1="40.5" y1="26.5" x2="42.5" y2="30" stroke={clockStroke} strokeWidth="0.8" />

        {/* Elegant Slender Clock Hands (Classic 10:10 setting for harmony and timeless beauty) */}
        {/* Hour hand pointing towards 10 o'clock */}
        <line x1="60" y1="60" x2="42" y2="45" stroke={goldPrimary} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        {/* Minute hand pointing towards 2 o'clock */}
        <line x1="60" y1="60" x2="80" y2="42" stroke={goldPrimary} strokeWidth="0.9" strokeLinecap="round" opacity="0.8" />
        {/* Center pivot point */}
        <circle cx="60" cy="60" r="1.8" fill={goldPrimary} />
      </g>

      {/* FOREGROUND MONOGRAM (Letter E in Gold & Letter I in Slate Gray) */}
      <g>
        {/* Letter 'E' in Gold */}
        <text
          x="44"
          y="78"
          fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
          fontSize="64"
          fontWeight="700"
          fill={goldPrimary}
          textAnchor="middle"
        >
          E
        </text>

        {/* Letter 'I' in Slate Gray (Interlocking on the right) */}
        <text
          x="72"
          y="80"
          fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
          fontSize="66"
          fontWeight="600"
          fill={slateGray}
          textAnchor="middle"
        >
          I
        </text>
      </g>
    </svg>
  );

  // Destello Dorado (Sparkle ✦) positioned on the upper apex
  const GoldenGlint = () => (
    <div className="absolute -top-1 -right-1 pointer-events-none animate-gold-sparkle">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
          fill={goldSecondary}
        />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    </div>
  );

  // 1. Symbol Only Variant
  if (variant === 'symbol') {
    return (
      <div className={`relative inline-flex items-center justify-center ${sizeMap.emblem} aspect-square ${className}`}>
        <ClockMonogramSvg idPrefix="sym" />
        {withSparkle && <GoldenGlint />}
      </div>
    );
  }

  // 2. Square / Full Reference Image Variant (Matches user attached image exactly)
  if (variant === 'square' || variant === 'full') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center p-6 text-center select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
      >
        {/* Top Text: ESTÉTICA RESPONSABLE */}
        <span
          className="font-sans font-semibold text-[11px] sm:text-xs tracking-[0.28em] uppercase mb-1"
          style={{ color: goldPrimary }}
        >
          Estética Responsable
        </span>

        {/* Center: Clock + Monogram EI */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 my-1">
          <ClockMonogramSvg idPrefix="full" />
          {withSparkle && (
            <div className="absolute top-1 right-2 pointer-events-none animate-gold-sparkle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
                  fill="#D4AF37"
                />
                <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
              </svg>
            </div>
          )}
        </div>

        {/* Bottom Text: ETERNAL INSTITUTE */}
        <span
          className="font-serif font-bold text-lg sm:text-xl tracking-[0.14em] uppercase mt-1"
          style={{ color: goldPrimary }}
        >
          Eternal Institute
        </span>
      </div>
    );
  }

  // 3. Horizontal Variant (For Navbar, Header, and Footer)
  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Emblem with Clock Background and Monogram */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeMap.emblem} transition-transform duration-300 group-hover:scale-105`}>
        <ClockMonogramSvg idPrefix="nav" />
        {withSparkle && <GoldenGlint />}
      </div>

      {/* Typography Hierarchy */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-bold ${sizeMap.textMain} tracking-[0.1em] leading-tight transition-colors duration-200 ${
            isWhite ? 'text-white' : isMono ? 'text-[#333333]' : 'text-[#67235E] group-hover:text-[#B88508]'
          }`}
        >
          ETERNAL INSTITUTE
        </span>
        <span
          className={`font-sans font-semibold ${sizeMap.textSub} tracking-[0.24em] uppercase leading-tight ${
            isWhite ? 'text-[#D4AF37]' : isMono ? 'text-[#555555]' : 'text-[#C29B38]'
          }`}
        >
          Estética Responsable
        </span>
      </div>
    </div>
  );
};
