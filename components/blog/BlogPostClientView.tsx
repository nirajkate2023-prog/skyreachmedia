'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types/blog';
import { blogService, INITIAL_BLOG_POSTS } from '@/lib/blogService';
import { CTASection } from '@/components/home/CTASection';
import {
  ChevronRight,
  Clock,
  Calendar,
  Share2,
  Check,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Tag
} from 'lucide-react';

interface BlogPostClientViewProps {
  initialPost: BlogPost | null;
  slug: string;
}

export const BlogPostClientView: React.FC<BlogPostClientViewProps> = ({ initialPost, slug }) => {
  const [post, setPost] = useState<BlogPost | null>(initialPost);
  const [copied, setCopied] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function loadPost() {
      // Check if there's an updated version or newly created post
      const live = await blogService.getPostBySlug(slug);
      if (live) {
        setPost(live);
      }

      // Fetch related posts
      const all = await blogService.getAllPosts(false);
      const related = all.filter((p) => p.slug !== slug).slice(0, 2);
      setRelatedPosts(related);
    }
    loadPost();
  }, [slug]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (platform: 'twitter' | 'linkedin' | 'whatsapp') => {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || 'SkyReach Media Article');

    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  if (!post) {
    return (
      <div className="pt-40 pb-24 bg-[#08090C] text-white min-h-screen text-center px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-3">Article Not Found</h2>
          <p className="text-sm text-zinc-400 mb-6 font-mono">
            This article may have been moved or is still being published.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-black font-bold text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 bg-[#08090C] text-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-orange truncate max-w-xs">{post.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 mb-16">
        <div className="mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 font-mono text-xs font-bold text-brand-orange uppercase">
            {post.category}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-8">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Metadata & Author Card */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-bold text-white block text-sm">{post.author.name}</span>
              <span className="text-zinc-500">{post.author.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-orange" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-orange" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="my-10 relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body - Rich Content Renderer */}
        <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          {post.content.map((paragraph, pIdx) => {
            // Heading 3
            if (paragraph.startsWith('### ')) {
              return (
                <h3
                  key={pIdx}
                  className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight pt-6 pb-2"
                >
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }

            // Heading 2
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={pIdx}
                  className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight pt-8 pb-2"
                >
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }

            // Blockquote
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote
                  key={pIdx}
                  className="my-6 p-6 rounded-2xl bg-brand-orange/5 border-l-4 border-brand-orange text-white italic text-lg sm:text-xl"
                >
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }

            // Bullet points block
            if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
              const lines = paragraph.split('\n');
              return (
                <ul key={pIdx} className="space-y-2.5 my-4 pl-4">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-orange mt-2.5 flex-shrink-0" />
                      <span>{line.replace(/^[-\*]\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            // Numbered list block
            if (paragraph.includes('\n1. ') || /^\d+\.\s/.test(paragraph)) {
              const lines = paragraph.split('\n');
              return (
                <ol key={pIdx} className="space-y-3 my-4 pl-2">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3">
                      <span className="font-mono text-sm font-bold text-brand-orange flex-shrink-0 mt-0.5">
                        {(lIdx + 1).toString().padStart(2, '0')}.
                      </span>
                      <span>{line.replace(/^\d+\.\s*/, '')}</span>
                    </li>
                  ))}
                </ol>
              );
            }

            return <p key={pIdx}>{paragraph}</p>;
          })}
        </div>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Share & Social Controls */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Share2 className="w-4 h-4 text-brand-orange" />
            <span>Share this article with your network:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleShare('whatsapp')}
              className="px-3 py-1.5 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 text-xs font-mono transition-colors cursor-pointer"
            >
              WhatsApp
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-mono transition-colors cursor-pointer"
            >
              LinkedIn
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer"
            >
              X (Twitter)
            </button>
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : null}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="mt-12 p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-brand-orange/40 flex-shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-white text-base">{post.author.name}</h4>
              <span className="text-zinc-500 font-mono text-xs">• {post.author.role}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Leading client growth and full-funnel strategy at SkyReach Media. Helping ambitious brands in India scale acquisition channels and command market dominance.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 sm:px-8 mb-20 border-t border-white/10 pt-16">
          <h3 className="font-display text-2xl font-bold text-white mb-8">
            Explore More Insights & Strategies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 transition-all block"
              >
                <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-wider block mb-2">
                  {rel.category}
                </span>
                <h4 className="font-bold text-white text-base group-hover:text-brand-orange transition-colors leading-snug">
                  {rel.title}
                </h4>
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>{rel.publishedDate}</span>
                  <span className="flex items-center gap-1 text-brand-orange font-bold">
                    Read <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
