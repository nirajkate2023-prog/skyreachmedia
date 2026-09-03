'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dynamic cursor state detection based on data attributes
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverable = target.closest('[data-cursor]') as HTMLElement | null;
      if (hoverable) {
        const type = hoverable.getAttribute('data-cursor');
        const text = hoverable.getAttribute('data-cursor-text') || '';
        if (type === 'project') {
          setCursorVariant('project');
          setCursorText(text || 'VIEW');
        } else if (type === 'drag') {
          setCursorVariant('drag');
          setCursorText(text || 'DRAG');
        } else if (type === 'link') {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        const isClickable = target.closest('a, button, input, select, textarea');
        if (isClickable) {
          setCursorVariant('hover');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Spring Follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorVariant === 'project' || cursorVariant === 'drag' ? 44 : cursorVariant === 'hover' ? 24 : 12),
          y: mousePosition.y - (cursorVariant === 'project' || cursorVariant === 'drag' ? 44 : cursorVariant === 'hover' ? 24 : 12),
          width: cursorVariant === 'project' || cursorVariant === 'drag' ? 88 : cursorVariant === 'hover' ? 48 : 24,
          height: cursorVariant === 'project' || cursorVariant === 'drag' ? 88 : cursorVariant === 'hover' ? 48 : 24,
          backgroundColor:
            cursorVariant === 'project'
              ? 'rgba(255, 94, 20, 0.95)'
              : cursorVariant === 'drag'
              ? 'rgba(255, 122, 0, 0.9)'
              : cursorVariant === 'hover'
              ? 'rgba(255, 94, 20, 0.15)'
              : 'rgba(255, 255, 255, 0.08)',
          borderColor:
            cursorVariant === 'hover'
              ? 'rgba(255, 94, 20, 0.6)'
              : cursorVariant === 'project' || cursorVariant === 'drag'
              ? 'transparent'
              : 'rgba(255, 255, 255, 0.25)',
          borderWidth: cursorVariant === 'default' || cursorVariant === 'hover' ? '1px' : '0px',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4
        }}
      >
        {cursorText && (
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-orange pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorVariant === 'project' || cursorVariant === 'drag' ? 0 : 1,
          scale: cursorVariant === 'hover' ? 0.6 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 45,
          stiffness: 800,
          mass: 0.1
        }}
      />
    </div>
  );
};
