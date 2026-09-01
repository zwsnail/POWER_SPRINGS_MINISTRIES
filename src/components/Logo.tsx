import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'color' | 'white' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-10 h-10", 
  size = 40,
  variant = 'color' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Power Springs Ministries Logo with Cross and Living Water"
    >
      <defs>
        {/* Background Gradient */}
        <linearGradient id="psmBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Spring Water Waves Gradient */}
        <linearGradient id="psmWaterGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>

        {/* Cross Gold/Warm Glow Gradient */}
        <linearGradient id="psmCrossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        {/* Golden Faith Accent Gradient */}
        <linearGradient id="psmGoldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Emblem Background Squircle */}
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="26"
        fill="url(#psmBgGradient)"
      />

      {/* Subtle Inner Border */}
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="26"
        stroke="rgba(255, 255, 255, 0.18)"
        strokeWidth="2"
      />

      {/* Living Water Streams (Ascending Flow from Springs) */}
      {/* Wave Left */}
      <path
        d="M20 74 C 28 66, 36 68, 44 60 C 48 56, 48 46, 44 38 C 42 34, 38 32, 34 35"
        stroke="url(#psmWaterGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Wave Right */}
      <path
        d="M80 74 C 72 66, 64 68, 56 60 C 52 56, 52 46, 56 38 C 58 34, 62 32, 66 35"
        stroke="url(#psmWaterGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Center Spring Base (Ripples at bottom) */}
      <path
        d="M28 80 C 40 73, 60 73, 72 80"
        stroke="url(#psmWaterGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      <path
        d="M36 86 C 44 82, 56 82, 64 86"
        stroke="url(#psmWaterGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Central Holy Cross (Solid & Dignified with Golden Accent) */}
      {/* Vertical Cross Post */}
      <rect
        x="46"
        y="18"
        width="8"
        height="50"
        rx="3.5"
        fill="url(#psmCrossGradient)"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))"
      />

      {/* Horizontal Cross Beam */}
      <rect
        x="33"
        y="32"
        width="34"
        height="8"
        rx="3.5"
        fill="url(#psmCrossGradient)"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))"
      />

      {/* Radiant Faith Star / Golden Crown Light at the Cross Intersection */}
      <circle
        cx="50"
        cy="36"
        r="4.5"
        fill="url(#psmGoldAccent)"
      />
      <circle
        cx="50"
        cy="36"
        r="2"
        fill="#ffffff"
      />

      {/* Spring Droplet Top Accent */}
      <circle
        cx="50"
        cy="14"
        r="2"
        fill="#38bdf8"
        opacity="0.9"
      />
    </svg>
  );
};
