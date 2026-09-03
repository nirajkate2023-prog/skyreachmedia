import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strategic Marketing Services & Capabilities',
  description:
    'Explore SkyReach Media\'s full suite of marketing services: PPC, Google Ads, Meta Ads, B2B Lead Generation, SEO, Online Branding, and Web Engineering in Pune, India.',
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white">
      {/* Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20">
        <SectionHeading
          badge="OUR CAPABILITIES"
          number="01"
          title="Integrated Marketing Services Engineered for Commercial Scale."
          subtitle="From high-intent search acquisition to viral short-form creative and conversational CRM automation, we deploy full-funnel systems that generate compounding enterprise value."
          dark={true}
        />
      </section>

      {/* Services Grid */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="font-mono text-xl font-bold text-brand-orange">
                    {service.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Deliverables */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="font-mono text-xs font-bold uppercase text-zinc-400 block mb-3">
                    Deliverables:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-brand-orange">
                  {service.metricsHighlight}
                </span>

                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="project"
                  data-cursor-text="SPECS"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange transition-all"
                >
                  Service Specs <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
