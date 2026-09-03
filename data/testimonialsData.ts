export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  industry: string;
  companyName: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  avatarPlaceholder: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'umesh-jadhav',
    name: 'Umesh Jadhav',
    role: 'Owner & Operator',
    industry: 'F&B and Fitness',
    companyName: 'Premium GYM & Cafe Concept',
    quote: 'SkyReach Media handled our branding and digital marketing beautifully. From menu design to viral reels, everything was creative and professional. Our footfall improved significantly within weeks.',
    rating: 5,
    highlightMetric: '+180% Footfall Growth',
    avatarPlaceholder: 'UJ'
  },
  {
    id: 'vaibhav-gholap',
    name: 'Vaibhav Gholap',
    role: 'Founder & Managing Director',
    industry: 'B2B Consulting & Services',
    companyName: 'Synergy Corporate Advisory',
    quote: 'The team is extremely professional and understands business communication very well. They created engaging content, managed our LinkedIn, and helped us build unmatched corporate credibility.',
    rating: 5,
    highlightMetric: '+320% Inbound B2B Inquiries',
    avatarPlaceholder: 'VG'
  },
  {
    id: 'rajesh-khanna',
    name: 'Rajesh Khanna',
    role: 'Real Estate Developer',
    industry: 'Commercial & Residential Real Estate',
    companyName: 'Skyline Landmark Ventures',
    quote: 'We struggled with online visibility before partnering with SkyReach Media. Within 45 days, our project got massive traction and site visits increased significantly. Their performance marketing is top-notch.',
    rating: 5,
    highlightMetric: '45-Day High-Ticket Influx',
    avatarPlaceholder: 'RK'
  },
  {
    id: 'reema-shah',
    name: 'Mrs. Reema Shah',
    role: 'Founder & Head Chef',
    industry: 'Hospitality & Dining',
    companyName: 'Artisan Dining Lounge',
    quote: 'The team helped us create an amazing online presence. Our Instagram page grew fast and we started getting consistent table reservations through social media. A genuinely wonderful experience!',
    rating: 5,
    highlightMetric: '3.4x Table Reservation Surge',
    avatarPlaceholder: 'RS'
  },
  {
    id: 'simran-mehta',
    name: 'Dr. Simran Mehta',
    role: 'Consultant Dermatologist',
    industry: 'Healthcare & Aesthetics',
    companyName: 'Aesthetic Skin & Laser Clinic',
    quote: 'I wanted to promote my clinic ethically and professionally. SkyReach Media delivered exactly that. Their content, educational videos, and ads brought more patient inquiries while strictly maintaining medical accuracy.',
    rating: 5,
    highlightMetric: '+240% Qualified Patient Consultations',
    avatarPlaceholder: 'SM'
  }
];
