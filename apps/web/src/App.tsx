import React from 'react';
import { UltraProHome } from '@/pages/UltraProHome';
import {
  heroTitle,
  heroSubtitle,
  experiences,
  projects,
  testimonials,
  socialLinks
} from '@/data/portfolioData';

export default function App() {
  return (
    <UltraProHome
      navItems={[
        { label: 'Home', href: '#home', active: true },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]}
      heroTitle={heroTitle}
      heroSubtitle={heroSubtitle}
      experiences={experiences}
      projects={projects}
      testimonials={testimonials}
      socialLinks={socialLinks}
      onContactSubmit={() => {}}
    />
  );
}
