import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import { ArrowUpRight, CheckCircle2, ChevronRight, Zap, Target, Sliders } from 'lucide-react';

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Strategic Services`,
    description: service.shortDescription,
  };
}

export default function SingleServicePage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-orange">{service.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <SectionHeading
              badge={`CAPABILITY ${service.number}`}
              title={service.title}
              subtitle={service.fullDescription}
              dark={true}
            />
          </div>

          <div className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2">
              PERFORMANCE BENCHMARK
            </span>
            <div className="font-display text-3xl font-extrabold text-brand-orange mb-4">
              {service.metricsHighlight}
            </div>
            <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
              Consistently generated across active client verticals using precision attribution frameworks.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-amber text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform"
            >
              Inquire For Your Brand →
            </Link>
          </div>
        </div>
      </section>

      {/* Deliverables & Capabilities Matrix */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto my-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121620] to-[#0A0C10] border border-white/10">
          <h3 className="font-display text-2xl font-bold text-white mb-8">
            Comprehensive Deliverables & Framework
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((del, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/15 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {del}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Engineered according to rigorous industry standards and aligned directly with your quarterly conversion targets.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block mb-4">
              SUPPORTED CAPABILITIES & CHANNELS
            </span>
            <div className="flex flex-wrap gap-2.5">
              {service.capabilities.map((cap, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-zinc-300"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
