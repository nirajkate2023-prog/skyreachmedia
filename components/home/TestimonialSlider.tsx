'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '@/data/testimonialsData';
import { SectionHeading } from '../ui/SectionHeading';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#0B0D13] text-white border-y border-white/10 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="CLIENT ENDORSEMENTS"
            number="07"
            title="Voices of Transformation."
            subtitle="Real words and verified business outcomes from founders, operators, and developers who partner with SkyReach Media."
            dark={true}
          />

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Main Testimonial Stage */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl relative"
              data-cursor="drag"
            >
              <div className="flex items-start justify-between gap-6 mb-8">
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center gap-1.5 text-brand-orange">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                  <span className="ml-2 font-mono text-xs text-zinc-400">5.0 Verified Review</span>
                </div>

                <Quote className="w-10 h-10 text-brand-orange/30 flex-shrink-0" />
              </div>

              {/* Quote Text */}
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed tracking-tight">
                "{current.quote}"
              </p>

              {/* Author Info & Verified Metric Highlight */}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center font-mono text-sm font-bold text-black shadow-md">
                    {current.avatarPlaceholder}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="font-mono text-xs text-zinc-400">
                      {current.role} • <span className="text-zinc-300">{current.companyName}</span>
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-brand-orange/15 border border-brand-orange/30 font-mono text-xs font-bold text-brand-orange inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                  <span>{current.highlightMetric}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Progress Indicators */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
