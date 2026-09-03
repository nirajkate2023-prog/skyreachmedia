'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading } from '../ui/AnimatedHeading';
import { Sparkles, Zap, Flame } from 'lucide-react';

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#0B0D12] text-white border-y border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-8 h-[1px] bg-brand-orange" />
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
            01 — THE SKYREACH PHILOSOPHY
          </span>
        </div>

        {/* Oversized Statement Typography */}
        <div className="max-w-5xl">
          <AnimatedHeading
            as="h2"
            text="We don't just market brands. We capture attention, engineer demand, and turn growth into unstoppable momentum."
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
            highlightWords={['market', 'attention,', 'demand,', 'unstoppable', 'momentum.']}
            highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-brand-flare"
          />
        </div>

        {/* Supporting Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Attention First</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              If nobody looks, nothing else matters. We craft visual hooks and compelling narratives that stop the scroll within 0.4 seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-brand-amber">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Algorithmic Demand</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We align high-intent Google and Meta algorithms with buyer psychographics to transform passive interest into committed pipeline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Compounding Equity</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Growth is not a one-week spike. We build sustainable moats with SEO dominance, customer retention, and brand prestige.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
