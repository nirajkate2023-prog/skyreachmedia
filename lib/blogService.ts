import { BlogPost } from './types/blog';
import { getSupabase } from './supabase';

const STORAGE_KEY = 'skyreach_blog_posts';

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-digital-marketing-2026',
    slug: 'future-digital-marketing-2026',
    title: 'The Future of Digital Marketing in 2026: Trends That High-Growth Brands Cannot Ignore',
    excerpt: 'How the convergence of agentic AI, predictive audience intelligence, and hyper-personalized creative is reshaping modern brand acquisition.',
    category: 'Marketing Strategy',
    author: {
      name: 'Mayur',
      role: 'Head of Growth Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    publishedDate: 'January 15, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    tags: ['AI Marketing', 'Performance', 'Strategy 2026', 'Customer Acquisition'],
    status: 'published',
    content: [
      'The era of generic digital marketing is officially over. As search algorithms shift from keyword matching to neural intent understanding and consumer attention spans fragment across micro-channels, brands that rely on traditional playbooks are experiencing rapid customer acquisition cost inflation.',
      'In 2026, winning brands treat marketing not as an expense line, but as an engineered revenue engine. This requires three core transformations: creative velocity, predictive unit-economics, and full-funnel customer retention loops.',
      '### 1. Creative Velocity Replaces Static Campaigns',
      'Rather than spending two months designing a single campaign hero asset, modern teams test dozens of hooks, formats, and angles weekly. Fast creative feedback loops determine winning combinations in 48 hours.',
      '### 2. Conversational WhatsApp Retention',
      'Direct-to-consumer and B2B brands in India are accelerating pipeline conversion by integrating automated WhatsApp journeys directly with their paid ad funnels.',
      'At SkyReach Media, we have observed that brands implementing dynamic creative testing paired with real-time conversion API integration consistently outperform category competitors by over 3.2x in ROAS.'
    ]
  },
  {
    id: 'social-media-growth-2026',
    slug: 'social-media-growth-2026',
    title: 'Why Every Business Needs Intentional Social Media Marketing in 2026',
    excerpt: 'Moving past vanity metrics: how cinematic short-form video and executive personal branding drive direct pipeline velocity and brand equity.',
    category: 'Social Media',
    author: {
      name: 'Vaibhav',
      role: 'Brand & Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    publishedDate: 'February 2, 2026',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['Social Strategy', 'Reels & Video', 'Community', 'Brand Authority'],
    status: 'published',
    content: [
      'Social media in 2026 is no longer about posting three generic graphics a week and hoping for vanity likes. Modern algorithms on Instagram, LinkedIn, and YouTube prioritize high-retention storytelling and authoritative point-of-view content.',
      '### The Power of Executive Thought Leadership',
      'Audiences do not trust faceless corporate logos; they connect with authentic founders, directors, and domain experts. Executive video content delivers 5x higher engagement and builds immediate trust with high-value prospects.',
      '### Turning Short-Form Attention Into Real Pipeline',
      'A viral reel is meaningless if it does not lead to measurable consideration. By coupling high-engagement video assets with lead magnets, DM automation, and retargeting campaigns, SkyReach Media turns passive scrollers into paying clients.'
    ]
  },
  {
    id: 'case-study-aesthetic-clinic-growth',
    slug: 'case-study-aesthetic-clinic-growth',
    title: 'Case Study: Scaling West Pune Aesthetic Clinic to ₹45L/Month Revenue',
    excerpt: 'How hyper-localized Meta ads, patient video testimonials, and automated consultation booking transformed clinic pipeline.',
    category: 'Case Study',
    author: {
      name: 'Niraj',
      role: 'Performance Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    },
    publishedDate: 'February 18, 2026',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    tags: ['Case Study', 'Meta Ads', 'Healthcare', 'High Ticket', 'Pune'],
    status: 'published',
    content: [
      '### Executive Summary',
      'The client was an established aesthetic dermatology and trichology clinic in Baner, Pune. Despite medical excellence, their client acquisition was heavily dependent on walk-ins and erratic word-of-mouth.',
      '### The Strategic Solution',
      'SkyReach Media implemented a multi-stage acquisition funnel:',
      '1. High-definition video case studies addressing common patient hesitations around skin and hair restoration.\n2. Geographically targeted ad sets constrained to high-disposable-income pincodes within a 12km radius.\n3. Automated WhatsApp CRM follow-up reducing inquiry response time from 3 hours to 45 seconds.',
      '### The Impact in 90 Days',
      '- Monthly consultations booked: Increased from 45 to 210+\n- Total tracked monthly patient revenue: ₹45,00,000+\n- Return on Ad Spend (ROAS): 4.4x blended return.'
    ]
  },
  {
    id: 'seo-vs-paid-ads-2026',
    slug: 'seo-vs-paid-ads-2026',
    title: 'SEO vs. Paid Ads in 2026: Where Should Pune Businesses Allocate Budget?',
    excerpt: 'An objective breakdown of compound organic search versus instant PPC acquisition in the age of AI search overviews.',
    category: 'Performance & SEO',
    author: {
      name: 'Mayur',
      role: 'Head of Growth Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    publishedDate: 'March 1, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['SEO', 'Google Ads', 'ROI Analysis', 'Local Business'],
    status: 'published',
    content: [
      'One of the most frequent questions business founders ask us is: "Should I invest in Google Ads or organic SEO?"',
      'The reality in 2026 is that the two channels are no longer competitive—they are complementary wings of the same growth flywheel.',
      '### When to Prioritize Paid Search (Google Ads)',
      'If you need immediate customer flow this week, need to test product-market fit, or are entering a new geographic zone, Google Search and Performance Max campaigns provide instantaneous demand capture.',
      '### When SEO Delivers Exponential ROI',
      'Organic search, local Google Maps 3-pack optimization, and authoritative domain building deliver compounding returns over 6 to 18 months. Once ranking, your cost-per-lead drops dramatically compared to paid bidding.',
      '### The SkyReach Recommendation',
      'For established businesses, we recommend a 70/30 split: 70% of initial budget into high-intent paid conversion channels to generate immediate cash flow, reinvesting 30% into long-term organic authority and search visibility.'
    ]
  }
];

// Helper: load local posts
export function getLocalPosts(): BlogPost[] {
  if (typeof window === 'undefined') return INITIAL_BLOG_POSTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BLOG_POSTS));
      return INITIAL_BLOG_POSTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_BLOG_POSTS;
  }
}

// Helper: save local posts
export function saveLocalPosts(posts: BlogPost[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (err) {
    console.error('Failed to save to local storage', err);
  }
}

// Map Supabase row to BlogPost
function mapRowToPost(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    author: typeof row.author === 'string' ? JSON.parse(row.author) : row.author,
    publishedDate: row.published_date || row.publishedDate,
    readTime: row.read_time || row.readTime || '5 min read',
    heroImage: row.hero_image || row.heroImage,
    featured: Boolean(row.featured),
    content: Array.isArray(row.content)
      ? row.content
      : typeof row.content === 'string'
      ? JSON.parse(row.content)
      : [row.content || ''],
    tags: Array.isArray(row.tags)
      ? row.tags
      : typeof row.tags === 'string'
      ? JSON.parse(row.tags)
      : [],
    status: row.status || 'published',
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// Map BlogPost to Supabase row
function mapPostToRow(post: BlogPost) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    author: post.author,
    published_date: post.publishedDate,
    read_time: post.readTime,
    hero_image: post.heroImage,
    featured: post.featured,
    content: post.content,
    tags: post.tags,
    status: post.status || 'published',
    updated_at: new Date().toISOString(),
  };
}

// Blog Service API
export const blogService = {
  // Get all posts
  async getAllPosts(includeDrafts = false): Promise<BlogPost[]> {
    const supabase = getSupabase();

    if (supabase) {
      try {
        let query = supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
        if (!includeDrafts) {
          query = query.eq('status', 'published');
        }
        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          const posts = data.map(mapRowToPost);
          saveLocalPosts(posts); // sync to local cache
          return posts;
        }
      } catch (err) {
        console.warn('Supabase fetch failed, falling back to local posts:', err);
      }
    }

    const localPosts = getLocalPosts();
    if (includeDrafts) return localPosts;
    return localPosts.filter((p) => (p.status || 'published') === 'published');
  },

  // Get post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const supabase = getSupabase();

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (!error && data) {
          return mapRowToPost(data);
        }
      } catch (err) {
        console.warn('Supabase getPostBySlug failed, checking local:', err);
      }
    }

    const localPosts = getLocalPosts();
    return localPosts.find((p) => p.slug === slug) || null;
  },

  // Save (create or update) post
  async savePost(postData: Partial<BlogPost> & { title: string; excerpt: string }): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const slug =
      postData.slug?.trim() ||
      postData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const id = postData.id || `post_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const fullPost: BlogPost = {
      id,
      slug,
      title: postData.title,
      excerpt: postData.excerpt,
      category: postData.category || 'Marketing Strategy',
      author: postData.author || {
        name: 'SkyReach Editorial',
        role: 'Growth Strategist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
      },
      publishedDate: postData.publishedDate || formattedDate,
      readTime: postData.readTime || '5 min read',
      heroImage: postData.heroImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      featured: Boolean(postData.featured),
      content: postData.content && postData.content.length > 0 ? postData.content : ['New blog post content.'],
      tags: postData.tags || ['SkyReach', 'Marketing'],
      status: postData.status || 'published',
      updatedAt: now.toISOString(),
      createdAt: postData.createdAt || now.toISOString(),
    };

    // Save locally first
    const current = getLocalPosts();
    const existingIndex = current.findIndex((p) => p.id === fullPost.id || p.slug === fullPost.slug);
    let updatedList: BlogPost[];
    if (existingIndex >= 0) {
      updatedList = [...current];
      updatedList[existingIndex] = { ...updatedList[existingIndex], ...fullPost };
    } else {
      updatedList = [fullPost, ...current];
    }
    saveLocalPosts(updatedList);

    // Save to Supabase if available
    const supabase = getSupabase();
    if (supabase) {
      try {
        const row = mapPostToRow(fullPost);
        const { error } = await supabase.from('blog_posts').upsert(row, { onConflict: 'id' });
        if (error) {
          console.error('Supabase upsert error:', error);
          return { success: true, post: fullPost, error: `Saved locally, cloud sync error: ${error.message}` };
        }
      } catch (err: any) {
        console.warn('Supabase save failed:', err);
        return { success: true, post: fullPost, error: `Saved locally. Cloud: ${err?.message || 'Offline'}` };
      }
    }

    return { success: true, post: fullPost };
  },

  // Delete post
  async deletePost(id: string): Promise<{ success: boolean; error?: string }> {
    const current = getLocalPosts();
    const updated = current.filter((p) => p.id !== id);
    saveLocalPosts(updated);

    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error } = await supabase.from('blog_posts').delete().eq('id', id);
        if (error) {
          return { success: true, error: `Deleted locally, cloud warning: ${error.message}` };
        }
      } catch (err: any) {
        return { success: true, error: `Deleted locally. ${err?.message}` };
      }
    }

    return { success: true };
  },

  // Sync all local posts to Supabase cloud
  async syncAllToSupabase(): Promise<{ success: boolean; count: number; error?: string }> {
    const supabase = getSupabase();
    if (!supabase) {
      return { success: false, count: 0, error: 'Supabase is not configured yet. Add your Supabase URL & Key.' };
    }

    try {
      const posts = getLocalPosts();
      const rows = posts.map(mapPostToRow);
      const { error } = await supabase.from('blog_posts').upsert(rows, { onConflict: 'id' });
      if (error) throw error;
      return { success: true, count: rows.length };
    } catch (err: any) {
      return { success: false, count: 0, error: err?.message || 'Sync failed' };
    }
  }
};
