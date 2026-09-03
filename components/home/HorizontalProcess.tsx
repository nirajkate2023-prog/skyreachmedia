'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Search, Compass, Palette, Rocket, Sliders, TrendingUp } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'DISCOVER',
    title: 'Deconstruct & Understand',
    description: 'We audit your entire unit economics, customer psychographics, competitor moats, and existing conversion bottlenecks.',
    icon: Search,
    highlight: 'Data-Driven Diagnostic',
  },
  {
    step: '02',
    name: 'STRATEGIZE',
    title: 'Architect The Growth Flywheel',
    description: 'We map out the exact paid channel mix, keyword clusters, creative hooks, and CRM funnels required to hit target ROAS.',
    icon: Compass,
    highlight: 'Unit Economic Modeling',
  },
  {
    step: '03',
    name: 'CREATE',
    title: 'High-Velocity Asset Engineering',
    description: 'Our design and video team produces thumb-stopping reels, editorial branding, and high-converting landing pages.',
    icon: Palette,
    highlight: 'Thumb-Stopping Creative',
  },
  {
    step: '04',
    name: 'ACTIVATE',
    title: 'Multi-Channel Campaign Launch',
    description: 'We deploy precision campaigns across Google Search, Meta, Instagram, WhatsApp automation, and local SEO networks.',
    icon: Rocket,
    highlight: 'Omnichannel Precision',
  },
  {
    step: '05',
    name: 'OPTIMIZE',
    title: 'Relentless Algorithmic Tuning',
    description: 'We analyze daily hook rates, negative keyword waste, bid floors, and conversion drop-offs to continuously reduce CAC.',
    icon: Sliders,
    highlight: 'CAC Reduction Engine',
  },
  {
    step: '06',
    name: 'SCALE',
    title: 'Compounding Revenue Dominance',
    description: 'We reinvest in proven high-yield creative and search queries, expanding your market footprint across Pune, Maharashtra, and India.',
    icon: TrendingUp,
    highlight: 'Predictable Scale',
  },
];

export const HorizontalProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0B0D13] text-white border-b border-white/10"
    >
      {/* Desktop Horizontal Pinned Section */}
      <div className="hidden lg:block h-[300vh] relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-8">
          <div className="max-w-7xl mx-auto w-full mb-10">
            <SectionHeading
              badge="THE GROWTH BLUEPRINT"
              number="03"
              title="How We Engineer Market Dominance."
              subtitle="A systematic, 6-stage operational protocol designed to take your brand from initial assessment to compounding scale."
              dark={true}
            />
          </div>

          {/* Horizontal Slider Track */}
          <motion.div style={{ x }} className="flex gap-8 pl-12 pr-32 w-max">
            {PROCESS_STEPS.map((stepItem) => {
              const Icon = stepItem.icon;

              return (
                <div
                  key={stepItem.step}
                  className="w-[420px] p-8 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 flex flex-col justify-between backdrop-blur-xl relative group hover:border-brand-orange/40 transition-all duration-300"
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-white/10">
                      <span className="font-mono text-3xl font-extrabold text-brand-orange">
                        {stepItem.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="mt-6 font-mono text-xs font-bold tracking-widest text-zinc-400 uppercase block">
                      STAGE {stepItem.step} • {stepItem.name}
                    </span>

                    <h3 className="mt-2 font-display text-2xl font-bold text-white leading-snug">
                      {stepItem.title}
                    </h3>

                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Step Footer Badge */}
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <span className="px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 font-mono text-[11px] font-semibold text-brand-orange inline-block">
                      {stepItem.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Vertical Stack */}
      <div className="lg:hidden py-24 px-6 sm:px-8">
        <SectionHeading
          badge="THE GROWTH BLUEPRINT"
          number="03"
          title="How We Engineer Market Dominance."
          subtitle="A systematic, 6-stage operational protocol designed to take your brand from initial assessment to compounding scale."
          dark={true}
          className="mb-12"
        />

        <div className="flex flex-col gap-6">
          {PROCESS_STEPS.map((stepItem) => {
            const Icon = stepItem.icon;

            return (
              <div
                key={stepItem.step}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-brand-orange">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-zinc-400 uppercase block">
                    STAGE {stepItem.step} • {stepItem.name}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    {stepItem.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 font-mono text-[11px] font-semibold text-brand-orange inline-block">
                    {stepItem.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
