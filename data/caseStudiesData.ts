export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientRole: string;
  industry: string;
  location: string;
  featured: boolean;
  heroImage: string;
  color: string;
  challenge: string;
  strategy: string;
  solution: string;
  results: {
    primaryMetric: string;
    primaryLabel: string;
    secondaryMetric: string;
    secondaryLabel: string;
    tertiaryMetric: string;
    tertiaryLabel: string;
  };
  servicesUsed: string[];
  testimonialQuote: string;
  timeline: string;
}

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'gym-cafe-concept',
    slug: 'gym-cafe-concept',
    title: 'Transforming Brand Identity & Footfall for a High-Energy Fitness & Cafe Concept',
    client: 'Umesh Jadhav',
    clientRole: 'Owner & Operator',
    industry: 'Hospitality, Fitness & F&B',
    location: 'Pune, Maharashtra',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    color: '#FF5E14',
    challenge: 'A newly launched premium hybrid gym & healthy cafe concept suffered from low offline walk-ins and lacked an integrated visual identity across printed menus, interior signage, and social media.',
    strategy: 'We designed a cohesive editorial visual identity paired with hyper-local geo-targeted Meta & Instagram video reels showcasing the energetic workout vibe and gourmet health meals.',
    solution: 'Engineered a modern physical & digital menu system, executed a 30-day viral local influencer campaign, and set up automated WhatsApp reservation funnels with exclusive first-visit perks.',
    results: {
      primaryMetric: '+180%',
      primaryLabel: 'Increase in Daily Footfall',
      secondaryMetric: '4.2x',
      secondaryLabel: 'Return on Meta Ad Spend',
      tertiaryMetric: '25,000+',
      tertiaryLabel: 'Local Reel Views per Post'
    },
    servicesUsed: ['Online Branding & Menu Design', 'Social Media Marketing', 'Meta Ads', 'WhatsApp Automation'],
    testimonialQuote: 'SkyReach Media handled our branding and digital marketing beautifully. From menu design to reels, everything was creative and professional. Our footfall improved within weeks.',
    timeline: '3 Months'
  },
  {
    id: 'real-estate-traction',
    slug: 'real-estate-traction',
    title: 'Generating ₹18Cr+ in Pipeline Value for Premium Residential Landmark Project',
    client: 'Rajesh Khanna',
    clientRole: 'Real Estate Developer',
    industry: 'Real Estate & Infrastructure',
    location: 'PCMC / Pune, Maharashtra',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    color: '#FFA043',
    challenge: 'The developer was experiencing high cost-per-lead (CPL) and poor lead quality from generic real estate portals with unverified buyer contact details.',
    strategy: 'Deployed high-intent Google Search and hyper-targeted Meta Lead Ads with dynamic qualification questions to filter high-net-worth buyers looking for 3BHK & Penthouse configurations.',
    solution: 'Designed an interactive landing page with virtual 3D floorplan tours, automated SMS & WhatsApp brochure delivery, and direct synchronization with the developer sales CRM within 15 seconds of submission.',
    results: {
      primaryMetric: '45 Days',
      primaryLabel: 'To Complete Project Traction',
      secondaryMetric: '+127%',
      secondaryLabel: 'Site Visit Conversion Rate',
      tertiaryMetric: '-42%',
      tertiaryLabel: 'Reduction in Cost Per Qualified Buyer'
    },
    servicesUsed: ['Google Ads / PPC', 'Lead Generation Funnels', 'Meta Ads', 'Web Experience'],
    testimonialQuote: 'We struggled with online visibility before partnering with SkyReach Media. Within 45 days, our project got massive traction and site visits increased significantly. Their performance marketing is top-notch.',
    timeline: '45 Days Launch'
  },
  {
    id: 'aesthetic-dermatology-growth',
    slug: 'aesthetic-dermatology-growth',
    title: 'Ethical Medical Marketing & 240% Consultation Surge for Aesthetic Dermatology Clinic',
    client: 'Dr. Simran Mehta',
    clientRole: 'Consultant Dermatologist',
    industry: 'Healthcare & Aesthetic Medicine',
    location: 'Pune, Maharashtra',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    color: '#38BDF8',
    challenge: 'The clinic wanted to scale high-value aesthetic and skin rejuvenation treatments without resorting to clickbait or compromising clinical ethics and medical precision.',
    strategy: 'Created an educational content series where the doctor debunked common skincare myths, explained laser treatments in detail, and established local medical authority on Google and Instagram.',
    solution: 'Targeted hyper-local affluent pin codes with Google Local Service Ads and Instagram video testimonials, combined with a seamless one-tap WhatsApp consultation booking flow.',
    results: {
      primaryMetric: '+240%',
      primaryLabel: 'Growth in New Patient Bookings',
      secondaryMetric: '#1 Rank',
      secondaryLabel: 'For "Aesthetic Dermatologist Pune"',
      tertiaryMetric: '94%',
      tertiaryLabel: 'Appointment Show-Up Rate'
    },
    servicesUsed: ['SEO & Local Search Dominance', 'Content & Reel Production', 'Meta Ads', 'WhatsApp Booking'],
    testimonialQuote: 'I wanted to promote my clinic ethically and professionally. SkyReach Media delivered exactly that. Their content, videos, and ads brought more patient inquiries while maintaining medical accuracy.',
    timeline: '6 Months Ongoing'
  },
  {
    id: 'b2b-executive-authority',
    slug: 'b2b-executive-authority',
    title: 'Scaling Corporate Positioning & Inbound Deal Flow for Synergy Advisory',
    client: 'Vaibhav Gholap',
    clientRole: 'Founder & Managing Director',
    industry: 'Corporate & B2B Consulting',
    location: 'Maharashtra, India',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    color: '#A855F7',
    challenge: 'Synergy Advisory was relying entirely on offline word-of-mouth, creating an unpredictable pipeline and lack of digital corporate authority when pitching enterprise clients.',
    strategy: 'Formulated an executive thought-leadership framework on LinkedIn, restructuring corporate branding and developing downloadable strategic intelligence reports.',
    solution: 'Designed an editorial web presence, ghostwrote weekly analytical LinkedIn breakdowns, and implemented automated enterprise retargeting ads targeting C-level executives.',
    results: {
      primaryMetric: '+320%',
      primaryLabel: 'Increase in Inbound Enterprise RFPs',
      secondaryMetric: '14,000+',
      secondaryLabel: 'Executive Network Reach',
      tertiaryMetric: '5.2x',
      tertiaryLabel: 'Pipeline Value Expansion'
    },
    servicesUsed: ['B2B Marketing', 'Synergetic Consulting', 'Online Branding', 'Web Development'],
    testimonialQuote: 'The team is extremely professional and understands business communication very well. They created engaging content, managed our LinkedIn, and helped us build credibility.',
    timeline: '4 Months'
  },
  {
    id: 'artisan-dining-lounge',
    slug: 'artisan-dining-lounge',
    title: 'Viral Social Storytelling & Weekend Table Sellouts for Artisan Dining Lounge',
    client: 'Mrs. Reema Shah',
    clientRole: 'Founder & Head Chef',
    industry: 'Hospitality & Fine Dining',
    location: 'Pune, Maharashtra',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    color: '#FBBF24',
    challenge: 'Weekday occupancy was low and the restaurant struggled to stand out amidst hundreds of competing dining establishments in central Pune.',
    strategy: 'Engineered behind-the-scenes culinary storytelling reels featuring signature recipes, chef pairings, and atmospheric evening dining experiences.',
    solution: 'Built an automated Instagram DM chatbot that triggered immediate weekend table reservations with exclusive welcome cocktail codes upon commenting on reels.',
    results: {
      primaryMetric: '3.4x',
      primaryLabel: 'Growth in Weekend Reservations',
      secondaryMetric: '+350%',
      secondaryLabel: 'Instagram Engagement Rate',
      tertiaryMetric: '80%',
      tertiaryLabel: 'Weekday Table Occupancy Surge'
    },
    servicesUsed: ['Social Media Marketing', 'Online Branding', 'Meta Ads', 'WhatsApp Automation'],
    testimonialQuote: 'The team helped us create an amazing online presence. Our Instagram page grew fast and we started getting more reservations through social media. Great experience!',
    timeline: '2 Months'
  }
];
