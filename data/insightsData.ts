export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  heroImage: string;
  featured: boolean;
  content: string[];
  tags: string[];
}

export const INSIGHTS_DATA: InsightItem[] = [
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
    content: [
      'The era of generic digital marketing is officially over. As search algorithms shift from keyword matching to neural intent understanding and consumer attention spans fragment across micro-channels, brands that rely on traditional playbooks are experiencing rapid customer acquisition cost inflation.',
      'In 2026, winning brands treat marketing not as an expense line, but as an engineered revenue engine. This requires three core transformations: creative velocity, predictive unit-economics, and full-funnel customer retention loops.',
      'At SkyReach Media, we have observed that brands implementing dynamic creative testing paired with real-time conversion API integration consistently outperform category competitors by over 3.2x in ROAS.',
      'To build sustainable equity, forward-looking CMOs are investing in proprietary first-party audience graphs and conversational WhatsApp automated journeys that capture demand the instant it is generated.'
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
    content: [
      'Social media is no longer just a broadcast channel—it is your digital storefront, your customer service hub, and the primary lens through which customers judge your credibility.',
      'A generic image post with 10 hashtags no longer cuts through the noise. Today, algorithms reward authentic human perspective, educational teardowns, behind-the-scenes craft, and cinematic pacing.',
      'When managing social ecosystems for F&B leaders, real estate innovators, and clinics, we focus strictly on high-retention video hooks and frictionless comment-to-DM conversion funnels that transform casual viewers into paying patrons.'
    ]
  },
  {
    id: 'seo-vs-paid-ads-2026',
    slug: 'seo-vs-paid-ads-2026',
    title: 'SEO vs Paid Ads in 2026: Which Growth Channel Is Better for Your Business?',
    excerpt: 'An unbiased strategic framework to balance immediate customer acquisition with long-term compounding organic equity.',
    category: 'Performance & SEO',
    author: {
      name: 'Raghav',
      role: 'Senior Performance Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    },
    publishedDate: 'February 20, 2026',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['SEO', 'Google Ads', 'PPC', 'ROI Optimization'],
    content: [
      'The debate between SEO and Paid Advertising is fundamentally flawed. High-growth businesses do not choose one over the other; they synchronize both to dominate total search engine real estate.',
      'Paid Ads (Google Ads and Meta) provide instantaneous feedback, testing product-market fit, price points, and messaging in days rather than months. Meanwhile, technical and local SEO provides defensible moats that decrease your blended CAC year after year.',
      'In our work across Pune, Maharashtra, and pan-India markets, our highest-performing client engagements allocate 60% of budget to paid demand capture while reinvesting 40% into organic topic authority and local map pack dominance.'
    ]
  },
  {
    id: 'ai-creative-velocity-2026',
    slug: 'ai-creative-velocity-2026',
    title: 'Creative Velocity in the Age of AI: Engineering High-Converting Ad Systems',
    excerpt: 'How modern agencies produce 50+ bespoke creative variants weekly to defeat ad fatigue without sacrificing brand soul.',
    category: 'Creative Intelligence',
    author: {
      name: 'Mayur',
      role: 'Head of Growth Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    publishedDate: 'March 1, 2026',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    tags: ['Creative Strategy', 'Ad Creative', 'AI Acceleration', 'Conversion Rate'],
    content: [
      'Ad fatigue sets in 3x faster than it did three years ago. Modern consumers recognize repetitive ad formats within 0.2 seconds.',
      'Creative velocity is now the primary lever in paid social performance. By combining algorithmic copy analysis with human art direction, we test dozen of visual hooks, messaging angles, and CTAs simultaneously.',
      'The key is preserving human emotional resonance while using computational precision to scale winning creative variations.'
    ]
  }
];
