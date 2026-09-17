'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SkyReachBird } from '../bird/SkyReachBird';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowUpRight, ArrowDown, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '@/data/companyData';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMouseOffset({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 bg-[#08090C] text-white overflow-hidden"
    >
      {/* Dynamic Ambient Background Elements */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[900px] h-[250px] sm:h-[500px] bg-brand-orange/15 blur-[80px] sm:blur-[160px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] bg-amber-500/10 blur-[60px] sm:blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] left-[5%] w-[180px] sm:w-[400px] h-[180px] sm:h-[400px] bg-sky-500/5 blur-[50px] sm:blur-[120px] rounded-full" />

        {/* Minimal Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* Main Hero Container */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="max-w-7xl mx-auto w-full relative z-10 my-auto"
      >
        {/* Top Floating Badge with Animated Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
            2026 Innovation &amp; Elevation Partner
          </span>
          <span className="text-zinc-600">•</span>
          <span className="font-mono text-xs text-brand-orange font-semibold">12+ Years Expertise</span>
        </motion.div>

        {/* The Hero Headline Grid: Massive Editorial Typography + Interactive Floating Bird */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-extrabold tracking-tight leading-[0.96] text-white">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="block"
              >
                WE MAKE BRANDS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-brand-flare"
              >
                IMPOSSIBLE TO IGNORE.
              </motion.span>
            </h1>
          </div>

          {/* Soaring Interactive Bird Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{
              transform: `translate3d(${mouseOffset.x * 1.5}px, ${mouseOffset.y * 1.5}px, 0px)`,
            }}
            className="hidden lg:flex lg:col-span-3 justify-center items-center relative transition-transform duration-300 ease-out"
          >
            <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl group hover:border-brand-orange/40 transition-colors">
              <SkyReachBird size={120} animateWing={true} glow={true} />
              <div className="mt-4 text-center">
                <span className="font-mono text-[10px] font-bold tracking-widest text-brand-orange uppercase flex items-center justify-center gap-1">
                  <span>Innovate</span>
                  <span className="text-white/40">·</span>
                  <span>Elevate</span>
                </span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase">
                  Kasarwadi HQ · Dominate
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supporting Narrative & High-Converting CTAs */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-white/10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-7 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl"
          >
            SkyReach Media merges <strong className="text-white font-semibold">creative velocity</strong>,{' '}
            <strong className="text-white font-semibold">performance engineering</strong>, and{' '}
            <strong className="text-white font-semibold">data intelligence</strong> to scale high-growth businesses across Pune, Maharashtra, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="md:col-span-5 flex flex-wrap items-center gap-4"
          >
            <MagneticButton as="a" href="/contact">
              <span
                data-cursor="link"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-brand-orange via-brand-amber to-brand-flare text-black font-mono text-sm font-extrabold uppercase tracking-wider shadow-xl shadow-brand-orange/30 overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start A Project
                  <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </span>
            </MagneticButton>

            <MagneticButton as="a" href="/work">
              <span
                data-cursor="link"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-mono text-sm font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Explore Work
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Floating Highlights Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="max-w-7xl mx-auto w-full relative z-10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/5 text-xs font-mono text-zinc-400"
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-orange" />
            <span>200+ Delivered Campaigns</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span>₹50L+ Media Managed</span>
          </div>
        </div>

        <a
          href="#statement"
          className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 text-brand-orange transform transition-transform group-hover:translate-y-1" />
        </a>
      </motion.div>
    </section>
  );
};
