import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { INSIGHTS_DATA } from '@/data/insightsData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import { ArrowUpRight, ChevronRight, Clock, Calendar, User, Share2 } from 'lucide-react';

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Strategic Insights`,
    description: article.excerpt,
  };
}

export default function SingleInsightPage({ params }: ArticlePageProps) {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-orange truncate max-w-xs">{article.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 mb-16">
        <div className="mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 font-mono text-xs font-bold text-brand-orange uppercase">
            {article.category}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
          {article.title}
        </h1>

        {/* Metadata & Author Card */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center text-black font-bold text-sm">
              {article.author.name[0]}
            </div>
            <div>
              <span className="font-bold text-white block text-sm">{article.author.name}</span>
              <span className="text-zinc-500">{article.author.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-orange" />
              {article.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-orange" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="my-12 relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          {article.content.map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-2">
          {article.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      <CTASection />
    </div>
  );
}
