'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '@/data/servicesData';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';

export const ServicesInteractive: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090C] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="CAPABILITIES MATRIX"
            number="02"
            title="Strategic Capabilities Built for Growth."
            subtitle="Explore how our integrated marketing disciplines engineer attention, acquisition, and compounding equity."
            dark={true}
          />
          <Link
            href="/services"
            data-cursor="link"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-amber transition-colors pb-2"
          >
            View Full Service Catalog <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Desktop Matrix & Preview Split */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: List of Services with Hover Elevation (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {SERVICES_DATA.map((service) => {
              const isSelected = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative py-6 px-4 cursor-pointer transition-all duration-300 rounded-2xl ${
                    isSelected ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                  }`}
                  data-cursor="project"
                  data-cursor-text="EXPAND"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-mono text-sm font-bold transition-colors ${
                          isSelected ? 'text-brand-orange' : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`font-display text-2xl font-bold tracking-tight transition-all duration-300 ${
                          isSelected ? 'text-white translate-x-2' : 'text-zinc-300 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-zinc-500 hidden sm:inline-block">
                        {service.category}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? 'border-brand-orange bg-brand-orange text-black'
                            : 'border-white/20 text-zinc-400 group-hover:border-white/50 group-hover:text-white'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Staggered description on active */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 ml-12 text-sm text-zinc-400 max-w-xl"
                    >
                      {service.shortDescription}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Live Deep-Dive Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="p-8 rounded-3xl bg-gradient-to-br from-[#121620] to-[#0A0C10] border border-white/10 shadow-2xl relative overflow-hidden"
              >
                {/* Accent Radial Background */}
                <div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: activeService.accentColor }}
                />

                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
                    {activeService.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-white">
                    {activeService.metricsHighlight}
                  </span>
                </div>

                <h4 className="mt-6 font-display text-3xl font-extrabold text-white">
                  {activeService.title}
                </h4>

                <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Key Deliverables */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                    Core Deliverables:
                  </span>
                  <ul className="flex flex-col gap-2.5">
                    {activeService.deliverables.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange transition-all"
                  >
                    Deep Dive Service <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-mono text-brand-orange hover:underline"
                  >
                    Request Proposal →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden flex flex-col gap-4">
          {SERVICES_DATA.map((service) => {
            const isOpen = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setActiveServiceId(isOpen ? '' : service.id)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {service.number}
                    </span>
                    <span className="font-display text-lg font-bold text-white">
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-zinc-400 transition-transform ${
                      isOpen ? 'rotate-90 text-brand-orange' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 text-sm text-zinc-400 border-t border-white/5 pt-4"
                    >
                      <p className="leading-relaxed mb-4">{service.shortDescription}</p>
                      <div className="mb-4">
                        <span className="font-mono text-xs font-bold text-white block mb-2">
                          Key Capabilities:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.capabilities.map((cap, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-orange uppercase"
                      >
                        Explore Service Specs <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
