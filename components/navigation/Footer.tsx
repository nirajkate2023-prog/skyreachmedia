'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SkyReachBird } from '../bird/SkyReachBird';
import { COMPANY_DATA } from '@/data/companyData';
import { SERVICES_DATA } from '@/data/servicesData';
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#06070A] text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-orange/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Grid: Brand Statement + Quick Navigation + Services Matrix + Pune HQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Positioning (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group">
                <SkyReachBird size={42} animateWing={true} glow={true} />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold tracking-tight text-white">
                    SkyReach<span className="text-brand-orange">Media</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-brand-muted uppercase">
                    Pune • Maharashtra • India
                  </span>
                </div>
              </Link>

              <p className="mt-6 text-sm text-zinc-400 leading-relaxed max-w-sm">
                A modern growth, marketing, and creative partner helping ambitious businesses reach higher through strategic clarity, creative velocity, and algorithmic ROAS.
              </p>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                <span>Taking Q3/Q4 Strategic Client Engagements</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-5">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-zinc-400 hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About SkyReach
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-zinc-400 hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact & HQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Capabilities (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-5">
              Core Capabilities
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-brand-orange transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Pune HQ & Direct Channels (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
              Pune Headquarters
            </h4>

            <div className="flex items-start gap-3 text-xs text-zinc-300">
              <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {COMPANY_DATA.address.full}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <a href={`tel:${COMPANY_DATA.contact.phone}`} className="hover:text-white transition-colors">
                {COMPANY_DATA.contact.phoneFormatted}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <a href={`mailto:${COMPANY_DATA.contact.email}`} className="hover:text-white transition-colors">
                {COMPANY_DATA.contact.email}
              </a>
            </div>

            {/* Direct WhatsApp Badge */}
            <a
              href={COMPANY_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-bold hover:bg-green-500/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Instant WhatsApp Inquiry
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Socials + Brand Tagline */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span>© {new Date().getFullYear()} SkyReach Media. All rights reserved.</span>
            <span>•</span>
            <span className="text-zinc-400">{COMPANY_DATA.tagline}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-brand-orange hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-brand-orange hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_DATA.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-brand-orange hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
