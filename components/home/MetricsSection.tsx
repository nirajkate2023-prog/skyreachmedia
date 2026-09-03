'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { COMPANY_DATA } from '@/data/companyData';
import { SectionHeading } from '../ui/SectionHeading';
import { Award, Briefcase, IndianRupee, Users } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // ms

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out expo
      const current = Math.floor(progress * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <span ref={ref} className="font-display tracking-tight font-extrabold text-white">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const MetricsSection: React.FC = () => {
  const icons = [Award, Briefcase, IndianRupee, Users];

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#0B0D13] text-white border-y border-white/10 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-orange/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="QUANTIFIABLE IMPACT"
          number="05"
          title="Numbers Engineered Through Precision."
          subtitle="Our 12-year trajectory is marked by compounding client wins, aggressive ROAS milestones, and sustained brand authority."
          dark={true}
          align="center"
          className="mb-16"
        />

        {/* 4-Column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_DATA.stats.map((stat, idx) => {
            const Icon = icons[idx] || Award;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    METRIC 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl text-brand-orange mb-2">
                    <AnimatedCounter
                      end={stat.numeric}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
