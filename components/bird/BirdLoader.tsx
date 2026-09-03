'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkyReachBird } from './SkyReachBird';

interface BirdLoaderProps {
  onComplete?: () => void;
}

export const BirdLoader: React.FC<BirdLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user already saw the loader in this session
    const hasLoaded = sessionStorage.getItem('skyreach_loaded');
    if (hasLoaded) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsFinished(true);
              sessionStorage.setItem('skyreach_loaded', 'true');
              if (onComplete) onComplete();
            }, 900);
          }, 200);
          return 100;
        }
        // Organic progress acceleration
        const increment = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 8;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#08090C] text-white overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

          {/* Center Composition with Bird & Motion Trail */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* The Soaring Bird with Departure Flight Physics */}
            <motion.div
              className="relative z-10"
              animate={
                isExiting
                  ? {
                      x: [0, 180, 500],
                      y: [0, -120, -450],
                      scale: [1, 1.25, 0.4],
                      rotate: [0, -12, -24],
                      opacity: [1, 1, 0],
                      transition: { duration: 0.85, ease: [0.6, 0.05, -0.01, 0.9] }
                    }
                  : {
                      y: [0, -8, 0],
                      rotate: [0, 2, 0],
                      transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                    }
              }
            >
              <SkyReachBird size={88} animateWing={true} glow={true} />

              {/* Luminous Flight Trail */}
              {isExiting && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-1/2 w-48 h-3 bg-gradient-to-r from-transparent via-brand-orange/60 to-brand-glow blur-sm rounded-full pointer-events-none"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: [0, 0.8, 0], scaleX: [0, 1.5, 0.5] }}
                  transition={{ duration: 0.7 }}
                />
              )}
            </motion.div>

            {/* Brand Title */}
            <motion.div
              className="mt-6 flex flex-col items-center"
              animate={isExiting ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-display text-xl tracking-[0.2em] uppercase font-bold text-white">
                SkyReach<span className="text-brand-orange">Media</span>
              </span>
              <span className="font-mono text-xs tracking-widest text-brand-muted mt-1 uppercase">
                Reach Higher
              </span>
            </motion.div>

            {/* Progress Counter & Minimal Progress Line */}
            <div className="mt-8 w-48 flex flex-col items-center gap-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-amber via-brand-orange to-brand-flare"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between w-full font-mono text-[11px] text-brand-muted">
                <span>SYSTEM INIT</span>
                <span className="text-brand-orange font-semibold">{progress}%</span>
              </div>
            </div>
          </motion.div>

          {/* Curtain Wipe reveal on exit */}
          {isExiting && (
            <motion.div
              className="absolute inset-0 bg-brand-orange/5 pointer-events-none"
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
