'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { INSIGHTS_DATA } from '@/data/insightsData';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, Clock, User } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const featuredArticle = INSIGHTS_DATA.find((item) => item.featured) || INSIGHTS_DATA[0];
  const sideArticles = INSIGHTS_DATA.filter((item) => item.id !== featuredArticle.id).slice(0, 3);

  return (
    <section id="insights" className="relative py-28 sm:py-36 px-6 sm:px-8 bg-[#08090C] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="EDITORIAL INTELLIGENCE"
            number="08"
            title="Strategic Insights & Modern Marketing."
            subtitle="Thought leadership, algorithmic updates, and battle-tested frameworks from the SkyReach growth laboratory."
            dark={true}
          />
          <Link
            href="/insights"
            data-cursor="link"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-amber transition-colors pb-2"
          >
            Explore All Insights <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Layout: Large Featured Article (7 Cols) + Stacked Cards (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <Link href={`/insights/${featuredArticle.slug}`} className="block h-full">
              <div className="relative h-[280px] sm:h-[360px] overflow-hidden">
                <Image
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-brand-orange text-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                    FEATURED ESSAY
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 mb-3">
                    <span className="text-brand-orange font-semibold">{featuredArticle.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-brand-orange transition-colors leading-snug">
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-mono text-xs text-white">
                      {featuredArticle.author.name[0]}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-white block">
                        {featuredArticle.author.name}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400">
                        {featuredArticle.author.role}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono text-brand-orange font-bold uppercase group-hover:translate-x-1 transition-transform">
                    Read Essay <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side Editorial Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                <Link href={`/insights/${article.slug}`} className="block">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="text-brand-orange font-semibold">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white group-hover:text-brand-orange transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>By {article.author.name}</span>
                    <span className="inline-flex items-center gap-1 text-brand-orange group-hover:translate-x-0.5 transition-transform">
                      Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
