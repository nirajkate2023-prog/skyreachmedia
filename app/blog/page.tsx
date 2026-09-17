'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogService, INITIAL_BLOG_POSTS } from '@/lib/blogService';
import { BlogPost } from '@/lib/types/blog';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import { ArrowUpRight, Clock, Search, Sparkles, Tag } from 'lucide-react';

const CATEGORIES = [
  'All Topics',
  'Marketing Strategy',
  'Social Media',
  'Case Study',
  'Performance & SEO',
  'Creative Intelligence',
  'Brand Building',
  'Company News',
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const livePosts = await blogService.getAllPosts(false);
        if (livePosts && livePosts.length > 0) {
          setPosts(livePosts);
        }
      } catch (err) {
        console.warn('Failed to fetch live posts, using static defaults', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Topics' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Featured post is the first featured one or first post
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white min-h-screen">
      {/* Header Section */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-14">
        <SectionHeading
          badge="STRATEGY & GROWTH BLOG"
          number="01"
          title="Actionable Insights, Growth Blueprints & Agency News."
          subtitle="Explore the latest playbooks on modern customer acquisition, paid performance, cinematic creative, and digital business transformation from the SkyReach Media team in Pune."
          dark={true}
        />

        {/* Search & Category Filter Bar */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-white/10 py-6">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
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
              placeholder="Search topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange"
            />
          </div>
        </div>
      </section>

      {/* Featured Article Banner (Only on "All Topics" and without search) */}
      {selectedCategory === 'All Topics' && !searchQuery && featuredPost && (
        <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-white/[0.03] border border-brand-orange/30 overflow-hidden hover:border-brand-orange/60 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative h-[320px] sm:h-[420px] overflow-hidden">
                <Image
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#08090C]/80" />
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-brand-orange/40 font-mono text-xs font-bold text-brand-orange uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Insight
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-xs text-white">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:pr-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                    <span>{featuredPost.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-brand-orange">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">{featuredPost.author.name}</div>
                      <div className="text-[10px] text-zinc-500 font-mono">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-orange hover:underline uppercase"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
            {selectedCategory === 'All Topics' ? 'All Published Articles' : `Category: ${selectedCategory}`} ({filteredPosts.length})
          </h3>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/10">
            <Search className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white">No articles match your search</h4>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => { setSelectedCategory('All Topics'); setSearchQuery(''); }}
              className="mt-5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-mono text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative h-[240px] sm:h-[280px] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-xs text-brand-orange font-bold uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                        <span>{post.publishedDate}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-zinc-400">
                          <Clock className="w-3.5 h-3.5 text-brand-orange" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                        {post.title}
                      </h3>

                      <p className="mt-3 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-mono">{post.author.name}</div>
                          <div className="text-[10px] text-zinc-500 font-mono">{post.author.role}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-mono font-bold text-brand-orange uppercase">
                        <span>Read</span>
                        <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <div className="mt-24">
        <CTASection />
      </div>
    </div>
  );
}
