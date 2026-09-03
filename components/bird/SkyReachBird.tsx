'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkyReachBirdProps {
  className?: string;
  variant?: 'loader' | 'hero' | 'transition' | 'cta' | 'footer' | 'icon' | 'compact';
  animateWing?: boolean;
  glow?: boolean;
  size?: number;
}

export const SkyReachBird: React.FC<SkyReachBirdProps> = ({
  className = '',
  variant = 'icon',
  animateWing = true,
  glow = true,
  size = 48
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-brand-orange/25 blur-xl pointer-events-none transform -translate-y-1 scale-125"
          aria-hidden="true"
        />
      )}

      {/* Bird SVG — High Precision Origami / Ascending Geometric Bird */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="birdGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA043" />
            <stop offset="50%" stopColor="#FF5E14" />
            <stop offset="100%" stopColor="#D83B01" />
          </linearGradient>

          <linearGradient id="birdGradWingUpper" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFB366" />
            <stop offset="70%" stopColor="#FF6B1A" />
            <stop offset="100%" stopColor="#E04400" />
          </linearGradient>

          <linearGradient id="birdGradWingLower" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FF7A29" />
            <stop offset="100%" stopColor="#B32D00" />
          </linearGradient>

          <linearGradient id="birdGradBody" x1="30%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#FFAA4D" />
            <stop offset="50%" stopColor="#FF5E14" />
            <stop offset="100%" stopColor="#992600" />
          </linearGradient>

          <filter id="birdGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Tail Feathers / Aero Stream */}
        <motion.path
          d="M12 78L38 52L26 62L12 78Z"
          fill="url(#birdGradWingLower)"
          initial={{ opacity: 0.8 }}
          animate={animateWing ? { opacity: [0.7, 1, 0.7], x: [0, -1, 0] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M20 84L42 54L32 68L20 84Z"
          fill="url(#birdGradBody)"
          opacity="0.85"
        />

        {/* Lower Left Wing Facet */}
        <motion.path
          d="M36 50L18 34L44 42L36 50Z"
          fill="url(#birdGradWingLower)"
          animate={
            animateWing
              ? {
                  d: [
                    'M36 50L18 34L44 42L36 50Z',
                    'M36 50L20 28L45 40L36 50Z',
                    'M36 50L18 34L44 42L36 50Z'
                  ]
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Main Body Center Polygon */}
        <path
          d="M38 52L62 38L82 22L54 48L38 52Z"
          fill="url(#birdGradBody)"
        />

        {/* Bird Head & Sharp Beak (Aiming Upward-Right: Reach Higher) */}
        <path
          d="M62 38L88 18L76 32L62 38Z"
          fill="url(#birdGradPrimary)"
        />
        <circle cx="73" cy="27" r="1.5" fill="#FFFFFF" opacity="0.9" />

        {/* Upper Soaring Wing — Dynamic Elevation */}
        <motion.path
          d="M48 46L68 12L58 40L48 46Z"
          fill="url(#birdGradWingUpper)"
          filter="url(#birdGlowFilter)"
          animate={
            animateWing
              ? {
                  d: [
                    'M48 46L68 12L58 40L48 46Z',
                    'M48 46L72 8L60 38L48 46Z',
                    'M48 46L68 12L58 40L48 46Z'
                  ]
                }
              : {}
          }
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Chest Accent Flare */}
        <path
          d="M54 48L64 36L68 44L54 48Z"
          fill="#FFC988"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};
