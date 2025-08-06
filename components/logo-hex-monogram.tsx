import React from 'react';

interface LogoHexMonogramProps {
  size?: number;
  className?: string;
  monochrome?: boolean;
}

export function LogoHexMonogram({ size = 28, className = "", monochrome = false }: LogoHexMonogramProps) {
  const gradientId = `hex-gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Jack Stewart Logo"
    >
      <defs>
        {!monochrome && (
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        )}
      </defs>
      
      {/* Hexagon with rounded corners */}
      <path
        d="M30 25 L70 25 Q75 25 78 30 L90 50 Q90 55 87 60 L70 75 Q65 80 60 80 L40 80 Q35 80 32 75 L10 50 Q10 45 13 40 L25 30 Q28 25 30 25 Z"
        fill={monochrome ? "currentColor" : `url(#${gradientId})`}
        stroke="none"
      />
      
      {/* JS Text */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="32"
        fontWeight="800"
        fill="white"
        fontFamily="system-ui, -apple-system, sans-serif"
        style={{ letterSpacing: '-0.05em' }}
      >
        JS
      </text>
    </svg>
  );
}

// Favicon variant (24x24)
export function LogoFavicon() {
  return <LogoHexMonogram size={24} />;
}

// Large mark variant (120x120)
export function LogoLarge() {
  return <LogoHexMonogram size={120} />;
}
