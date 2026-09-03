'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { INSIGHTS_DATA } from '@/data/insightsData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import { ArrowUpRight, Clock, Search } from 'lucide-react';

const CATEGORIES = ['All Topics', 'Marketing Strategy', 'Social Media', 'Performance & SEO', 'Creative Intelligence'];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = INSIGHTS_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'All Topics' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white">
      {/* Header */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          badge="GROWTH INTELLIGENCE"
          number="01"
          title="Insights, Strategies & Modern Marketing Frameworks."
          subtitle="Explore the latest thinking on algorithmic customer acquisition, creative velocity, and full-funnel retention from our senior strategists in Pune."
          dark={true}
        />

        {/* Search & Category Filter Bar */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-orange text-black font-bold shadow-lg shadow-brand-orange/20'
                    : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search strategic essays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <Link href={`/insights/${article.slug}`} className="block h-full">
                <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-xs text-brand-orange font-bold uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                      <span>{article.publishedDate}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-orange transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-300 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-400">
                      By {article.author.name} ({article.author.role})
                    </span>

                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-brand-orange uppercase group-hover:translate-x-1 transition-transform">
                      Read Essay <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
