import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectPlanner } from '@/components/contact/ProjectPlanner';

export const metadata: Metadata = {
  title: 'Contact & Project Scope Planner | SkyReach Media Pune HQ',
  description:
    'Start a conversation with SkyReach Media. Contact our Pune headquarters at Office 603 The Work Club Finolex Chowk PCMC or submit a project brief.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#08090C] text-white">
      <section className="px-6 sm:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          badge="INITIATE A CONVERSATION"
          number="01"
          title="Ready to Scale Your Brand to New Heights?"
          subtitle="Use our interactive project planner below to define your growth disciplines, budget range, and timeline, or connect directly with our Pune leadership."
          dark={true}
        />
      </section>

      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <ProjectPlanner />
      </section>
    </div>
  );
}
