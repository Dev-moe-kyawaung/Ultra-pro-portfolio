import React from 'react';
import ReactDOM from 'react-dom/client';
import { UltraProHome } from '../web/pages/UltraProHome';
import {
  navItems,
  heroTitle,
  heroSubtitle,
  experiences,
  projects,
  testimonials,
  socialLinks,
} from '../web/data/portfolioData';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UltraProHome
      navItems={navItems}
      heroTitle={heroTitle}
      heroSubtitle={heroSubtitle}
      experiences={experiences}
      projects={projects}
      testimonials={testimonials}
      socialLinks={socialLinks}
      onContactSubmit={() => {}}
    />
  </React.StrictMode>
);
