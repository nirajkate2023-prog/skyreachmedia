import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/companyData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricsSection } from '@/components/home/MetricsSection';
import { CTASection } from '@/components/home/CTASection';
import { SkyReachBird } from '@/components/bird/SkyReachBird';
import { ArrowUpRight, CheckCircle2, MapPin, Award, Users, Target, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SkyReach Media | 12+ Years Digital Marketing Leadership in Pune',
  description:
    'Discover the history, culture, and strategic framework of SkyReach Media. A premier digital agency in Pune, Maharashtra helping ambitious brands scale higher.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white">
      {/* Editorial Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-20">
        <SectionHeading
          badge="OUR HERITAGE & DNA"
          number="01"
          title="Engineered for Ambition. Built in Pune, Scaling Everywhere."
          subtitle="Since 2012, SkyReach Media has operated at the intersection of creative audacity and quantitative rigor. We turn business vision into market momentum."
          dark={true}
        />
      </section>

      {/* Main Story & Visual Grid */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="SkyReach Media Strategic Studio Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent" />

            {/* Float badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <p className="text-xs text-zinc-300 font-mono">
                  {COMPANY_DATA.address.full}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              We Don't Build Noise. We Build Attention That Converts into Revenue.
            </h3>
            <p>
              Over the last <strong className="text-white">12+ years</strong>, digital marketing transformed from simple banner ads to complex multi-channel ecosystems governed by neural algorithms and split-second consumer decisions.
            </p>
            <p>
              SkyReach Media was founded on a steadfast principle: marketing without measurable unit-economics is merely guesswork. Our Pune-based agency unites veteran media buyers, cinematic video producers, brand architects, and full-stack software engineers under one unified growth protocol.
            </p>
            <p>
              Whether guiding a local hospitality empire to weekend sellouts or generating ₹18Cr+ in pipeline value for real estate landmark projects, our commitment is absolute transparency, strategic innovation, and relentless execution.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 inline-flex items-center gap-3">
                <SkyReachBird size={36} animateWing={true} glow={true} />
                <div>
                  <span className="font-mono text-xs font-bold text-white uppercase block">
                    The SkyReach Symbol
                  </span>
                  <span className="font-mono text-[10px] text-brand-orange">
                    Elevation • Freedom • Compound Reach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Stats Section */}
      <MetricsSection />

      {/* Why Choose SkyReach Pillars */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto my-28">
        <SectionHeading
          badge="WHY PARTNER WITH SKYREACH"
          number="02"
          title="The Four Cornerstones of Our Agency Model."
          subtitle="How we consistently outperform traditional agencies and deliver defensible commercial moats."
          dark={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANY_DATA.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-brand-orange block mb-4">
                  0{idx + 1}
                </span>
                <h4 className="font-display text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-brand-orange">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Strategic Principle</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
