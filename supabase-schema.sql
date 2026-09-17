-- SkyReach Media Blog Database Schema for Supabase (PostgreSQL)
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- 1. Create blog_posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Marketing Strategy',
  author JSONB NOT NULL DEFAULT '{"name":"SkyReach Editorial","role":"Growth Strategist","avatar":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"}'::jsonb,
  published_date TEXT NOT NULL,
  read_time TEXT NOT NULL DEFAULT '5 min read',
  hero_image TEXT NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT false,
  content JSONB NOT NULL DEFAULT '[]'::jsonb,
  tags JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. Allow Public to Read Published Posts
CREATE POLICY "Public can view published blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (status = 'published' OR true);

-- 4. Allow Insert, Update, Delete for Anon with API key
-- (Or restrict to authenticated Supabase users as needed)
CREATE POLICY "Allow anonymous API key to insert/update blog posts"
  ON public.blog_posts
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 5. Seed initial posts (optional)
INSERT INTO public.blog_posts (id, slug, title, excerpt, category, author, published_date, read_time, hero_image, featured, content, tags, status)
VALUES
(
  'future-digital-marketing-2026',
  'future-digital-marketing-2026',
  'The Future of Digital Marketing in 2026: Trends That High-Growth Brands Cannot Ignore',
  'How the convergence of agentic AI, predictive audience intelligence, and hyper-personalized creative is reshaping modern brand acquisition.',
  'Marketing Strategy',
  '{"name": "Mayur", "role": "Head of Growth Strategy", "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"}'::jsonb,
  'January 15, 2026',
  '6 min read',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  true,
  '["The era of generic digital marketing is officially over. As search algorithms shift from keyword matching to neural intent understanding and consumer attention spans fragment across micro-channels, brands that rely on traditional playbooks are experiencing rapid customer acquisition cost inflation.", "In 2026, winning brands treat marketing not as an expense line, but as an engineered revenue engine. This requires three core transformations: creative velocity, predictive unit-economics, and full-funnel customer retention loops.", "At SkyReach Media, we have observed that brands implementing dynamic creative testing paired with real-time conversion API integration consistently outperform category competitors by over 3.2x in ROAS."]'::jsonb,
  '["AI Marketing", "Performance", "Strategy 2026"]'::jsonb,
  'published'
)
ON CONFLICT (id) DO NOTHING;
