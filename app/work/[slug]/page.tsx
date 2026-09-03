import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES_DATA } from '@/data/caseStudiesData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import { ArrowUpRight, ChevronRight, TrendingUp, CheckCircle, Quote } from 'lucide-react';

interface WorkPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const project = CASE_STUDIES_DATA.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Case Study Not Found' };

  return {
    title: `${project.title} | Case Study`,
    description: project.challenge,
  };
}

export default function SingleWorkPage({ params }: WorkPageProps) {
  const project = CASE_STUDIES_DATA.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-orange truncate max-w-xs">{project.title}</span>
        </div>
      </div>

      {/* Case Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          badge={project.industry}
          title={project.title}
          subtitle={`Strategic Client Partner: ${project.client} (${project.clientRole}) • ${project.location} • Timeline: ${project.timeline}`}
          dark={true}
        />

        {/* 3 Metric Callout Boxes */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
            <span className="font-display text-4xl font-extrabold text-brand-orange block">
              {project.results.primaryMetric}
            </span>
            <span className="font-mono text-xs text-zinc-400 uppercase mt-1 block">
              {project.results.primaryLabel}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
            <span className="font-display text-4xl font-extrabold text-brand-amber block">
              {project.results.secondaryMetric}
            </span>
            <span className="font-mono text-xs text-zinc-400 uppercase mt-1 block">
              {project.results.secondaryLabel}
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
            <span className="font-display text-4xl font-extrabold text-white block">
              {project.results.tertiaryMetric}
            </span>
            <span className="font-mono text-xs text-zinc-400 uppercase mt-1 block">
              {project.results.tertiaryLabel}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image Showcase */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16">
        <div className="relative h-[380px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* The Case Breakdown (Challenge, Strategy, Execution) */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Story (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
              <h3 className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider mb-3">
                01 / THE CORE BOTTLENECK
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
              <h3 className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider mb-3">
                02 / THE GROWTH STRATEGY
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {project.strategy}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
              <h3 className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider mb-3">
                03 / THE EXECUTION & SOLUTION
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-orange/15 to-transparent border border-brand-orange/30 flex items-start gap-4">
              <Quote className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-lg font-medium text-white italic">
                  "{project.testimonialQuote}"
                </p>
                <span className="font-mono text-xs text-brand-amber font-bold mt-2 block">
                  — {project.client}, {project.clientRole}
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block">
                DISCIPLINES DEPLOYED
              </span>
              <ul className="flex flex-col gap-2">
                {project.servicesUsed.map((srv, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-brand-orange" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <span className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider block">
                HAVE A SIMILAR PROJECT?
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We replicate these frameworks with custom adaptability for ambitious brands.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-amber text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Inquire For Your Brand →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
