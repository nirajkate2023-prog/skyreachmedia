import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { LenisProvider } from '@/lib/LenisProvider';
import { BirdLoader } from '@/components/bird/BirdLoader';
import { COMPANY_DATA } from '@/data/companyData';

export const metadata: Metadata = {
  metadataBase: new URL('https://skyreachmedia.in'),
  title: {
    default: 'SkyReach Media | Award-Winning Digital Marketing & Creative Agency in Pune',
    template: '%s | SkyReach Media',
  },
  description:
    'SkyReach Media is a modern digital marketing and creative agency based in Pune, Maharashtra. 12+ years of expertise in PPC, Meta Ads, B2B Lead Generation, SEO, and High-Impact Branding.',
  keywords: [
    'Digital Marketing Agency',
    'Marketing Agency Pune',
    'Performance Marketing Pune',
    'Social Media Marketing Agency',
    'Branding Agency Maharashtra',
    'SEO Services Pune',
    'Digital Marketing Agency in Pune',
    'B2B Lead Generation Agency',
    'Growth Marketing Agency India',
    'SkyReach Media',
  ],
  authors: [{ name: 'SkyReach Media', url: 'https://skyreachmedia.in' }],
  creator: 'SkyReach Media',
  publisher: 'SkyReach Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'SkyReach Media | Modern Digital Marketing & Creative Growth Partner',
    description:
      'We help ambitious brands reach higher through strategic growth, creative velocity, and algorithmic performance marketing. Pune HQ.',
    url: 'https://skyreachmedia.in',
    siteName: 'SkyReach Media',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkyReach Media | Digital Agency Pune',
    description:
      'Award-winning performance marketing, branding, and creative engineering for high-growth businesses.',
    creator: '@SkyReachMedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://skyreachmedia.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    url: 'https://skyreachmedia.in',
    logo: 'https://skyreachmedia.in/assets/img/logo.png',
    description: COMPANY_DATA.mission,
    telephone: COMPANY_DATA.contact.phone,
    email: COMPANY_DATA.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_DATA.address.street,
      addressLocality: COMPANY_DATA.address.city,
      addressRegion: COMPANY_DATA.address.state,
      postalCode: COMPANY_DATA.address.postalCode,
      addressCountry: COMPANY_DATA.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.6298,
      longitude: 73.7997,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      COMPANY_DATA.socials.instagram,
      COMPANY_DATA.socials.linkedin,
      COMPANY_DATA.socials.facebook,
    ],
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'AdministrativeArea', name: 'Maharashtra' },
      { '@type': 'Country', name: 'India' },
    ],
    priceRange: '₹₹₹',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#08090C] text-[#EDF2F7] relative">
        <BirdLoader />
        <LenisProvider>
          <NoiseOverlay />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen relative z-10 flex flex-col">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
