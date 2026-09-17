import React from 'react';
import type { Metadata } from 'next';
import { INITIAL_BLOG_POSTS } from '@/lib/blogService';
import { BlogPostClientView } from '@/components/blog/BlogPostClientView';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INITIAL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = INITIAL_BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Blog Article | SkyReach Media',
      description: 'Strategic marketing, performance, and creative insights from SkyReach Media Pune.',
    };
  }

  return {
    title: `${post.title} | SkyReach Media Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
      type: 'article',
      publishedTime: post.publishedDate,
    },
  };
}

export default function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const initialPost = INITIAL_BLOG_POSTS.find((p) => p.slug === params.slug) || null;

  return <BlogPostClientView initialPost={initialPost} slug={params.slug} />;
}
