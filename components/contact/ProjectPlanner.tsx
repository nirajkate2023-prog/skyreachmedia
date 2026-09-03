'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_DATA } from '@/data/companyData';
import { SERVICES_DATA } from '@/data/servicesData';
import { ArrowUpRight, Check, Sparkles, MessageSquare, Send, CheckCircle2, Phone, MapPin, Mail } from 'lucide-react';

const BUDGET_RANGES = [
  '₹50K - ₹1.5 Lac / mo',
  '₹1.5 Lac - ₹3 Lac / mo',
  '₹3 Lac - ₹7 Lac / mo',
  '₹7 Lac+ / mo (Enterprise Scale)',
];

const TIMELINE_OPTIONS = [
  'Immediately (< 2 weeks)',
  'Within 1 Month',
  'Next Quarter (Planning Phase)',
];

export const ProjectPlanner: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['PPC & Google Ads', 'Meta Ads & Paid Social']);
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_RANGES[1]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(TIMELINE_OPTIONS[0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (srvTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(srvTitle) ? prev.filter((s) => s !== srvTitle) : [...prev, srvTitle]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Interactive Scope Form (7 Cols) */}
      <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Step 1: Select Services */}
              <div>
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">
                  01 / WHAT GROWTH DISCIPLINES DO YOU NEED?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = selectedServices.includes(srv.title);

                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.title)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-brand-orange/15 border-brand-orange text-white'
                            : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-2">{srv.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-orange flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Budget Range */}
              <div>
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">
                  02 / ESTIMATED MONTHLY GROWTH BUDGET
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                  {BUDGET_RANGES.map((bgt) => {
                    const isSelected = selectedBudget === bgt;

                    return (
                      <button
                        type="button"
                        key={bgt}
                        onClick={() => setSelectedBudget(bgt)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-brand-orange/15 border-brand-orange text-white'
                            : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span>{bgt}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-orange flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div>
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">
                  03 / DESIRED LAUNCH TIMELINE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3">
                  {TIMELINE_OPTIONS.map((tm) => {
                    const isSelected = selectedTimeline === tm;

                    return (
                      <button
                        type="button"
                        key={tm}
                        onClick={() => setSelectedTimeline(tm)}
                        className={`p-3 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-brand-orange/15 border-brand-orange text-white'
                            : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span className="text-[11px]">{tm}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">
                  04 / YOUR CONTACT & BRAND DETAILS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Umesh Jadhav"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 92766 86868"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Skyline Ventures"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Tell us about your core objectives *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current bottleneck, target metrics, and what success looks like..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-orange via-brand-amber to-brand-flare text-black font-mono text-sm font-extrabold uppercase tracking-wider shadow-xl shadow-brand-orange/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Transmitting Strategic Brief...</span>
                ) : (
                  <>
                    <span>Submit Strategic Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400 mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white">
                Brief Received Successfully.
              </h3>
              <p className="mt-3 text-sm text-zinc-300 max-w-md leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth strategists in Pune are reviewing your scope and will connect within 4 business hours.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href={COMPANY_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 font-mono text-xs font-bold uppercase tracking-wider hover:bg-green-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant WhatsApp Follow-up
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Column: HQ Contact, WhatsApp, & Fast Info (5 Cols) */}
      <div className="lg:col-span-5 space-y-6">
        {/* Direct WhatsApp Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-green-950/40 to-[#0A1A10] border border-green-500/30 backdrop-blur-xl">
          <div className="flex items-center gap-3 text-green-400 mb-4">
            <MessageSquare className="w-6 h-6" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">
              FAST-TRACK RESPONSE
            </span>
          </div>
          <h4 className="font-display text-2xl font-bold text-white">
            Need an Immediate Consultation?
          </h4>
          <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
            Connect directly with our senior agency leadership on WhatsApp for rapid scope evaluation and portfolio walkthroughs.
          </p>
          <a
            href={COMPANY_DATA.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-green-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-green-400 transition-colors shadow-lg shadow-green-500/20"
          >
            Open WhatsApp Chat →
          </a>
        </div>

        {/* Pune Headquarters Card */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange block">
            PUNE HEADQUARTERS
          </span>

          <div className="flex items-start gap-3 text-sm text-zinc-300">
            <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block">SkyReach Media</strong>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {COMPANY_DATA.address.full}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-zinc-300 pt-4 border-t border-white/10">
            <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <div>
              <span className="text-xs text-zinc-500 block font-mono">PHONE INQUIRIES</span>
              <a href={`tel:${COMPANY_DATA.contact.phone}`} className="text-white font-mono hover:text-brand-orange transition-colors">
                {COMPANY_DATA.contact.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-zinc-300 pt-4 border-t border-white/10">
            <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <div>
              <span className="text-xs text-zinc-500 block font-mono">EMAIL DISPATCH</span>
              <a href={`mailto:${COMPANY_DATA.contact.email}`} className="text-white font-mono hover:text-brand-orange transition-colors">
                {COMPANY_DATA.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
