'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { SkyReachBird } from '../bird/SkyReachBird';
import { ArrowUpRight, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '@/data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090C] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling & HQ Badge (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="SkyReach Media Strategic Growth Team"
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-black/30 to-transparent" />

              {/* Floating Pune HQ Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0F1218]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brand-orange uppercase tracking-wider block font-bold">
                    ESTABLISHED 2012 • PUNE HQ
                  </span>
                  <p className="font-display text-sm font-bold text-white leading-tight mt-0.5">
                    Office 603, The Work Club, Finolex Chowk, PCMC
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Bird Floating Accent */}
            <div className="hidden sm:flex absolute -top-8 -right-8 p-4 rounded-2xl bg-brand-dark/95 border border-brand-orange/30 backdrop-blur-md shadow-xl items-center gap-3">
              <SkyReachBird size={36} animateWing={true} glow={true} />
              <div>
                <span className="font-mono text-[10px] text-brand-orange font-bold uppercase block">
                  12+ Years Heritage
                </span>
                <span className="font-mono text-[9px] text-zinc-400">
                  50+ Specialists
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              badge="AGENCY HERITAGE"
              number="06"
              title="We Believe Great Marketing Should Move People — And Business."
              subtitle="Founded over a decade ago, SkyReach Media emerged with a singular focus: to liberate ambitious businesses from cookie-cutter marketing and deliver measurable, compounding commercial results."
              dark={true}
              className="mb-8"
            />

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                From our strategic hub in Pune, Maharashtra, we have engineered over 200+ transformative digital campaigns across competitive sectors—including luxury hospitality, real estate infrastructure, clinical aesthetics, and B2B technology.
              </p>
              <p>
                We do not view ourselves as an external vendor. We operate as an embedded growth partner, combining deep consumer empathy with algorithmic rigor across Google, Meta, and proprietary CRM workflows.
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300 font-medium">
                  Direct founder & executive level strategy oversight.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300 font-medium">
                  End-to-end creative production from script to screen.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300 font-medium">
                  Transparent real-time ROAS and lead attribution metrics.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300 font-medium">
                  Proprietary WhatsApp and CRM integration workflows.
                </span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange transition-all"
              >
                Read Our Complete Story <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
