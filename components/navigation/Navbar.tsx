'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SkyReachBird } from '../bird/SkyReachBird';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowUpRight, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_DATA } from '@/data/companyData';

const NAV_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-brand-dark/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo with Bird Mark */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            data-cursor="link"
          >
            <div className="relative transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
              <SkyReachBird size={36} animateWing={true} glow={true} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white flex items-center">
                SkyReach<span className="text-brand-orange">Media</span>
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-muted -mt-0.5 flex items-center gap-1">
                <span>Innovate</span>
                <span className="text-brand-orange">·</span>
                <span>Elevate</span>
                <span className="text-brand-orange">·</span>
                <span>Dominate</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  data-cursor="link"
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-brand-orange/20 border border-brand-orange/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton as="a" href="/contact">
              <span
                data-cursor="link"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-amber text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-orange/25 overflow-hidden transition-all duration-300 hover:shadow-brand-orange/40 hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Let's Talk
                  <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Cinematic Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden text-white"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs tracking-widest text-brand-orange uppercase">
                Menu Navigation
              </span>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-3xl font-bold tracking-tight text-white hover:text-brand-orange transition-colors flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-brand-orange/60" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>KASARWADI HQ</span>
                <span className="text-white">+91 92766 86868</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_DATA.contact.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  Call Direct
                </a>
                <a
                  href={COMPANY_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-green-400" />
                  WhatsApp
                </a>
              </div>
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-amber text-black font-mono text-xs font-bold text-center uppercase tracking-wider shadow-lg shadow-brand-orange/20"
              >
                Start A Project →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
