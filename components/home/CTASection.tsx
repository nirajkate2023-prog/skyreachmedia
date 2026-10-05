'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BrandLogo } from '../brand/BrandLogo';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowUpRight, MessageSquare, Phone, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '@/data/companyData';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-44 px-6 sm:px-8 bg-[#0B0D13] text-white border-t border-white/10 overflow-hidden">
      {/* Dynamic Background Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-orange/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Atmospheric Gliding Bird in Background */}
      <motion.div
        initial={{ x: -200, y: 100, opacity: 0 }}
        whileInView={{ x: 200, y: -80, opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ duration: 4, ease: 'easeOut' }}
        className="absolute top-12 left-1/4 pointer-events-none hidden md:block"
      >
        <BrandLogo variant="mark" size={160} />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/15 border border-brand-orange/30 backdrop-blur-md mb-8"
        >
          <BrandLogo variant="mark" size={24} />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange">
            NEXT LEVEL SCALE
          </span>
        </motion.div>

        {/* Oversized Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-white"
        >
          READY TO REACH <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-brand-flare">HIGHER?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl leading-relaxed"
        >
          Tell us where you want to go. We'll help you architect the strategy, creative, and performance engine to get there.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <MagneticButton as="a" href="/contact">
            <span
              data-cursor="link"
              className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-brand-orange via-brand-amber to-brand-flare text-black font-mono text-sm font-extrabold uppercase tracking-wider shadow-2xl shadow-brand-orange/40 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start A Conversation
                <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </span>
          </MagneticButton>

          <a
            href={COMPANY_DATA.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="inline-flex items-center gap-2.5 px-7 py-5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 font-mono text-sm font-bold uppercase tracking-wider hover:bg-green-500/25 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Direct WhatsApp Chat
          </a>
        </motion.div>

        {/* Pune Contact Summary Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 w-full max-w-2xl flex flex-col sm:flex-row items-center justify-around gap-6 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-orange" />
            <span>PCMC Metro Station, Pune</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-orange" />
            <a href={`tel:${COMPANY_DATA.contact.phone}`} className="hover:text-white transition-colors">
              +91 92766 86868
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
