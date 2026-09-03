import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StatementSection } from '@/components/home/StatementSection';
import { ServicesInteractive } from '@/components/home/ServicesInteractive';
import { HorizontalProcess } from '@/components/home/HorizontalProcess';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { MetricsSection } from '@/components/home/MetricsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { TestimonialSlider } from '@/components/home/TestimonialSlider';
import { InsightsSection } from '@/components/home/InsightsSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <ServicesInteractive />
      <HorizontalProcess />
      <FeaturedWork />
      <MetricsSection />
      <AboutSection />
      <TestimonialSlider />
      <InsightsSection />
      <CTASection />
    </>
  );
}
