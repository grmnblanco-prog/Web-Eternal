/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface GoldenSparklesProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

export const GoldenSparkles: React.FC<GoldenSparklesProps> = ({
  className = '',
  density = 'medium'
}) => {
  // Sparkle particle definitions with slight position and animation offsets
  const sparkles = [
    { top: '12%', left: '8%', size: 14, delay: '0s', duration: '3.4s' },
    { top: '24%', left: '88%', size: 18, delay: '0.8s', duration: '3.8s' },
    { top: '65%', left: '5%', size: 12, delay: '1.4s', duration: '4.2s' },
    { top: '78%', left: '92%', size: 16, delay: '2.1s', duration: '3.6s' },
    { top: '42%', left: '48%', size: 10, delay: '0.5s', duration: '3.2s' },
    { top: '15%', left: '60%', size: 14, delay: '1.9s', duration: '4s' },
    { top: '85%', left: '35%', size: 12, delay: '1.1s', duration: '3.5s' },
    { top: '35%', left: '18%', size: 16, delay: '2.6s', duration: '4.5s' },
  ];

  const visibleSparkles = density === 'low' 
    ? sparkles.slice(0, 4) 
    : density === 'medium' 
    ? sparkles.slice(0, 6) 
    : sparkles;

  return (
    <div 
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {visibleSparkles.map((sparkle, idx) => (
        <div
          key={idx}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-gold-sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        >
          {/* Four-pointed luxury golden star */}
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]"
          >
            <path
              d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
              fill="currentColor"
            />
            {/* Center diamond glint */}
            <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
          </svg>
        </div>
      ))}
    </div>
  );
};
