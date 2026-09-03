'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  number?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  number,
  title,
  subtitle,
  dark = true,
  align = 'left',
  className = '',
}) => {
  const alignmentClass =
    align === 'center' ? 'items-center text-center mx-auto' : align === 'right' ? 'items-end text-right ml-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClass} ${className}`}>
      {/* Badge with Index Number */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
        style={{
          borderColor: dark ? 'rgba(255, 94, 20, 0.3)' : 'rgba(255, 94, 20, 0.4)',
          backgroundColor: dark ? 'rgba(255, 94, 20, 0.08)' : 'rgba(255, 94, 20, 0.1)',
          color: '#FF7A00',
        }}
      >
        {number && <span className="text-white/60 dark:text-white/60">{number} —</span>}
        <span>{badge}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] ${
          dark ? 'text-white' : 'text-brand-textDark'
        }`}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
            dark ? 'text-brand-muted' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
