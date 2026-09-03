export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  metricsHighlight: string;
  deliverables: string[];
  capabilities: string[];
  gradient: string;
  accentColor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ppc-google-ads',
    slug: 'ppc-google-ads',
    number: '01',
    title: 'PPC & Google Ads',
    shortDescription: 'High-intent search, dynamic display, YouTube video funnels, and performance max campaigns engineered for immediate commercial acquisition.',
    fullDescription: 'We build data-driven pay-per-click engines that intercept active buyers at the exact moment of search intent. Through precision keyword clustering, negative search term isolation, and automated bidding algorithms, we maximize customer acquisition while minimizing wasted budget.',
    category: 'Performance Marketing',
    metricsHighlight: '+185% ROAS Improvement',
    deliverables: [
      'Search Network & Shopping Campaigns',
      'Performance Max (PMax) Architecture',
      'High-Intent Negative Keyword Mining',
      'Landing Page Split Testing & Conversion Rate Optimization',
      'Granular Attribution & Call Tracking Setup'
    ],
    capabilities: ['Google Search', 'YouTube Ads', 'Google Shopping', 'Display Remarketing', 'Local Services Ads'],
    gradient: 'from-orange-500/20 to-amber-500/5',
    accentColor: '#FF5E14'
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    number: '02',
    title: 'Meta Ads & Paid Social',
    shortDescription: 'Hyper-targeted Facebook & Instagram acquisition systems combining thumb-stopping creative with algorithmic audience scaling.',
    fullDescription: 'Our Meta advertising framework combines high-velocity creative testing with deep-funnel retargeting. We turn passive scrollers into passionate customers by delivering personalized narrative angles that speak directly to audience pain points.',
    category: 'Social Acquisition',
    metricsHighlight: '3.8x Average Return on Ad Spend',
    deliverables: [
      'Lookalike & Broad Targeting Segmentation',
      'Dynamic Product Ads (DPA) for Catalog Scaling',
      'Video Hook Rate & Retention Rate Optimization',
      'Custom Conversion API (CAPI) Tracking Integration',
      'Iterative Creative Testing Matrix'
    ],
    capabilities: ['Instagram Reels Ads', 'Facebook Feed Funnels', 'Catalog Sales', 'Lead Forms Optimization', 'Retargeting Stacks'],
    gradient: 'from-amber-500/20 to-orange-500/5',
    accentColor: '#FF7A00'
  },
  {
    id: 'lead-generation',
    slug: 'lead-generation',
    number: '03',
    title: 'B2B & High-Ticket Lead Generation',
    shortDescription: 'Predictable multi-channel qualification funnels that fill your sales pipeline with decision-makers and high-value prospects.',
    fullDescription: 'We engineer turnkey lead generation systems specifically designed for B2B enterprises, real estate developers, professional clinics, and high-ticket service providers. Every lead is pre-filtered and scored for intent before reaching your sales team.',
    category: 'Growth & Pipeline',
    metricsHighlight: '+127% Increase in Qualified SQLs',
    deliverables: [
      'Multi-Step Interactive Funnel Architecture',
      'Automated CRM Lead Routing & Instant Notifications',
      'WhatsApp & Email Qualification Sequences',
      'Lead Magnet & Whitepaper Production',
      'Sales Rep Follow-Up Optimization Scripts'
    ],
    capabilities: ['LinkedIn Ads', 'Interactive Quizzes', 'Automated Calendar Bookings', 'CRM Sync (HubSpot/Zoho)', 'Lead Scoring'],
    gradient: 'from-orange-600/20 to-amber-600/5',
    accentColor: '#FF4500'
  },
  {
    id: 'online-branding',
    slug: 'online-branding',
    number: '04',
    title: 'Online Branding & Creative Direction',
    shortDescription: 'Distinctive brand identities, visual systems, editorial menu designs, and creative toolkits that make your business impossible to ignore.',
    fullDescription: 'Branding is how your business feels in the mind of the customer. We craft comprehensive brand identities—from typography systems and color harmonies to physical collateral and spatial aesthetics—that establish premium authority.',
    category: 'Brand Architecture',
    metricsHighlight: '98% Client Brand Recall Rate',
    deliverables: [
      'Comprehensive Brand Style Guides & Typography',
      'Visual Identity, Logo Refinement & Asset Kits',
      'Physical & Digital Menu Design (F&B / Hospitality)',
      'High-Impact Social Media Template Systems',
      'Motion Design & Animated Brand Guidelines'
    ],
    capabilities: ['Brand Positioning', 'Visual Guidelines', 'Editorial Layouts', 'Packaging & Print', 'Iconography Systems'],
    gradient: 'from-amber-400/20 to-orange-500/5',
    accentColor: '#FFA34D'
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    number: '05',
    title: 'Social Media & Viral Content',
    shortDescription: 'Cinematic video reels, thought-leadership LinkedIn management, and organic community growth that turns audiences into brand advocates.',
    fullDescription: 'We manage your complete social presence with cultural relevance and creative velocity. From on-location shoot direction to viral short-form editing and community engagement, we build passionate audiences that convert.',
    category: 'Organic Dominance',
    metricsHighlight: '+214% Engagement Velocity',
    deliverables: [
      'Full-Service Reel & Short-Form Video Production',
      'Editorial Content Calendars & Scriptwriting',
      'Executive Ghostwriting & LinkedIn Authority',
      'Community Management & Active Comment Engagement',
      'Influencer & Creator Collaboration Strategy'
    ],
    capabilities: ['Instagram Growth', 'LinkedIn B2B', 'YouTube Shorts', 'Script to Screen', 'Brand Community'],
    gradient: 'from-orange-500/20 to-amber-500/5',
    accentColor: '#FF5E14'
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    number: '06',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Dominant local and national organic visibility through technical architecture, programmatic content systems, and authority link acquisition.',
    fullDescription: 'We make your brand the definitive answer on Google. Through deep technical audits, entity-based keyword strategies, and local Google Business Profile dominance across Pune and Maharashtra, we drive sustained organic acquisition.',
    category: 'Organic Visibility',
    metricsHighlight: '#1 Rankings for High-Intent Terms',
    deliverables: [
      'Technical SEO Audits & Core Web Vitals Optimization',
      'Local SEO & Google Business Profile (GBP) Dominance',
      'Semantic Topic Clustering & High-Intent Copywriting',
      'Authoritative Backlink Acquisition & Digital PR',
      'Structured Data & Schema Markup Implementation'
    ],
    capabilities: ['Local Pune SEO', 'Technical Audits', 'E-E-A-T Strategy', 'Schema Architecture', 'Voice Search SEO'],
    gradient: 'from-amber-500/20 to-orange-600/5',
    accentColor: '#FF7A00'
  },
  {
    id: 'web-design-development',
    slug: 'web-design-development',
    number: '07',
    title: 'Web Design & Digital Experience',
    shortDescription: 'Ultra-fast, award-winning, interactive digital flagships built with Next.js, motion design, and conversion-first user flows.',
    fullDescription: 'Your website is your ultimate growth asset. We design and develop bespoke digital experiences that load in milliseconds, mesmerize visitors with buttery micro-animations, and guide them effortlessly toward conversion.',
    category: 'Digital Experience',
    metricsHighlight: '<0.8s Load Times & 90+ Lighthouse',
    deliverables: [
      'Next.js / React Modern Web Development',
      'Interactive UI/UX Prototyping in Figma',
      'GSAP & Lenis Smooth Motion Choreography',
      'Mobile-First Responsive Layout Engineering',
      'Conversion-Optimized Checkout & Lead Capture Funnels'
    ],
    capabilities: ['Headless CMS', 'Next.js 14/15', 'Tailwind CSS', 'GSAP & Framer Motion', 'Full SEO Architecture'],
    gradient: 'from-orange-600/20 to-amber-500/5',
    accentColor: '#FF5E14'
  },
  {
    id: 'ecommerce-marketing',
    slug: 'ecommerce-marketing',
    number: '08',
    title: 'Ecommerce & Amazon Scaling',
    shortDescription: 'Complete multi-channel commerce acceleration covering Shopify conversion optimization, Amazon PPC, and customer lifetime value expansion.',
    fullDescription: 'We scale direct-to-consumer and retail brands by optimizing the entire unit-economic flywheel. From marketplace PPC and Amazon A+ content to Shopify retention and cart-recovery automation, we maximize revenue per visitor.',
    category: 'Commerce Growth',
    metricsHighlight: '+142% MoM Revenue Surge',
    deliverables: [
      'Shopify Theme Customization & Speed Optimization',
      'Amazon Ads (Sponsored Products, Brands & Video)',
      'Amazon Listing Optimization & A+ Content Design',
      'Klaviyo Email & SMS Abandoned Cart Automation',
      'Post-Purchase Upsell & Subscription Retention Loops'
    ],
    capabilities: ['Shopify Plus', 'Amazon Seller Central', 'Klaviyo SMS/Email', 'Inventory Velocity', 'AOV Optimization'],
    gradient: 'from-amber-500/20 to-orange-500/5',
    accentColor: '#FFA34D'
  },
  {
    id: 'whatsapp-marketing',
    slug: 'whatsapp-marketing',
    number: '09',
    title: 'WhatsApp Business & Automated Funnels',
    shortDescription: 'Direct-to-consumer conversational commerce and instant customer engagement with 98% open rates and automated chatbot workflows.',
    fullDescription: 'In high-growth markets like India, WhatsApp is the definitive communication channel. We deploy official WhatsApp Business API integrations with automated conversational workflows, catalog browsing, and instant appointment booking.',
    category: 'Conversational Marketing',
    metricsHighlight: '98% Open Rate / 45% Click Rate',
    deliverables: [
      'Official WhatsApp Business API Provisioning',
      'Automated Lead Qualification & FAQ Chatbots',
      'Segmented Broadcast Campaigns with High Delivery Rates',
      'Instant Click-to-WhatsApp Ad Integration',
      'Live Agent Multi-Inbox Support Configuration'
    ],
    capabilities: ['WhatsApp API', 'Broadcast Funnels', 'Chatbot Logic', 'Instant Booking', 'Retention CRM'],
    gradient: 'from-orange-500/20 to-amber-600/5',
    accentColor: '#25D366'
  },
  {
    id: 'synergetic-consulting',
    slug: 'synergetic-consulting',
    number: '10',
    title: 'Synergetic Growth Consulting',
    shortDescription: 'Executive marketing leadership, go-to-market roadmaps, and full-funnel marketing audits to unlock non-linear business growth.',
    fullDescription: 'For established enterprises and ambitious startups seeking strategic clarity, our consulting engagements provide fractional CMO leadership, competitive intelligence, and unified growth roadmaps that align marketing directly with P&L objectives.',
    category: 'Strategic Advisory',
    metricsHighlight: '12+ Years Advisory Heritage',
    deliverables: [
      'Comprehensive Full-Funnel Marketing Audits',
      'Go-to-Market (GTM) Strategy & Customer Archetyping',
      'Marketing Tech Stack Consolidation',
      'CAC vs LTV Optimization Modeling',
      'Monthly Executive Growth Reviews & KPI Benchmarking'
    ],
    capabilities: ['Fractional CMO', 'GTM Roadmaps', 'Full-Funnel Audits', 'Unit Economics', 'Executive Strategy'],
    gradient: 'from-amber-400/20 to-orange-500/5',
    accentColor: '#FF7A00'
  }
];
