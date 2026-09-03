'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CASE_STUDIES_DATA } from '@/data/caseStudiesData';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090C] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="CASE STUDIES & RESULTS"
            number="04"
            title="Proof in Performance."
            subtitle="Explore how we turned business challenges into high-converting campaigns, measurable revenue, and market leadership."
            dark={true}
          />
          <Link
            href="/work"
            data-cursor="link"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-amber transition-colors pb-2"
          >
            Explore All Case Studies <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Immersive Stacked Case Study Cards */}
        <div className="flex flex-col gap-16">
          {CASE_STUDIES_DATA.slice(0, 3).map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-all duration-500 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left (or Right) Content Info (6 Cols) */}
                  <div className={`p-8 sm:p-10 lg:p-12 lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      {/* Project Index & Industry */}
                      <div className="flex items-center justify-between pb-6 border-b border-white/10">
                        <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
                          PROJECT 0{idx + 1} • {project.industry}
                        </span>
                        <span className="font-mono text-xs text-zinc-400">
                          {project.location}
                        </span>
                      </div>

                      {/* Project Title & Client */}
                      <h3 className="mt-6 font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs font-mono text-brand-amber">
                        Client Partner: {project.client} ({project.clientRole})
                      </p>

                      {/* Challenge & Solution Summary */}
                      <div className="mt-6 space-y-3 text-sm text-zinc-300">
                        <p>
                          <strong className="text-white font-semibold">Challenge: </strong>
                          {project.challenge}
                        </p>
                        <p>
                          <strong className="text-white font-semibold">Execution: </strong>
                          {project.solution}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.servicesUsed.map((srv, srvIdx) => (
                          <span
                            key={srvIdx}
                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-300"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Bar & CTA */}
                    <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 items-center">
                      <div>
                        <span className="font-display text-3xl font-extrabold text-brand-orange block">
                          {project.results.primaryMetric}
                        </span>
                        <span className="font-mono text-[11px] text-zinc-400 uppercase">
                          {project.results.primaryLabel}
                        </span>
                      </div>

                      <div className="text-right">
                        <Link
                          href={`/work/${project.slug}`}
                          data-cursor="project"
                          data-cursor-text="CASE"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-mono text-xs font-bold uppercase hover:bg-brand-orange hover:text-black transition-all"
                        >
                          View Case <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right (or Left) Visual Showcase (6 Cols) */}
                  <div className={`relative h-[340px] sm:h-[420px] lg:h-[500px] lg:col-span-6 overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-60" />

                    {/* Floating Metric Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center text-black font-bold">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-zinc-400 block uppercase">
                            Verified Outcome
                          </span>
                          <span className="font-display text-base font-bold text-white">
                            {project.results.secondaryMetric} {project.results.secondaryLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
