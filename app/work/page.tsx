'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES_DATA } from '@/data/caseStudiesData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import { ArrowUpRight, TrendingUp, Filter } from 'lucide-react';

const CATEGORIES = ['All Verticals', 'Hospitality & F&B', 'Real Estate', 'Healthcare & Aesthetics', 'B2B & Corporate'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Verticals');

  const filteredProjects = CASE_STUDIES_DATA.filter((proj) => {
    if (selectedCategory === 'All Verticals') return true;
    if (selectedCategory === 'Hospitality & F&B') return proj.industry.includes('F&B') || proj.industry.includes('Hospitality');
    if (selectedCategory === 'Real Estate') return proj.industry.includes('Real Estate');
    if (selectedCategory === 'Healthcare & Aesthetics') return proj.industry.includes('Healthcare');
    if (selectedCategory === 'B2B & Corporate') return proj.industry.includes('B2B') || proj.industry.includes('Corporate');
    return true;
  });

  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white">
      {/* Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          badge="CASE STUDIES"
          number="01"
          title="Engineered Results for Forward-Thinking Brands."
          subtitle="Explore the strategy, creative velocity, and quantifiable performance milestones achieved alongside our client partners."
          dark={true}
        />

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-orange text-black font-bold shadow-lg shadow-brand-orange/20'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Gallery Grid */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 overflow-hidden flex flex-col justify-between transition-all duration-500"
              >
                <div className="relative h-[280px] sm:h-[340px] overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-black/30 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-xs text-brand-orange font-bold uppercase">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-xs text-zinc-300">
                      {project.location}
                    </span>
                  </div>

                  {/* Primary Metric Badge */}
                  <div className="absolute bottom-5 left-5 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                    <span className="font-display text-2xl font-extrabold text-brand-orange block leading-none">
                      {project.results.primaryMetric}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">
                      {project.results.primaryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-brand-orange transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs font-mono text-brand-amber">
                      Partner: {project.client} ({project.clientRole})
                    </p>
                    <p className="mt-4 text-sm text-zinc-300 line-clamp-3 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.servicesUsed.slice(0, 2).map((srv, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      data-cursor="project"
                      data-cursor-text="CASE"
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-brand-orange uppercase group-hover:translate-x-1 transition-transform"
                    >
                      Case Deep-Dive <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTASection />
    </div>
  );
}
