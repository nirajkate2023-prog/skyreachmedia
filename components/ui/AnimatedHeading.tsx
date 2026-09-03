'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  stagger?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  as = 'h2',
  stagger = 0.04,
  highlightWords = [],
  highlightClassName = 'text-brand-orange'
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
      rotateZ: 3,
    },
    visible: {
      opacity: 1,
      y: '0%',
      rotateZ: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const Tag = as as any;

  return (
    <Tag className={`overflow-hidden ${className}`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        {words.map((word, index) => {
          const isHighlighted = highlightWords.some(
            (hw) => word.toLowerCase().includes(hw.toLowerCase())
          );

          return (
            <span key={index} className="inline-block overflow-hidden py-1">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
};
