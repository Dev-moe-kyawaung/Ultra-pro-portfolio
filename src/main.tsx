import React from 'react';
import ReactDOM from 'react-dom/client';
import { UltraProHome } from '../web/pages/UltraProHome';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UltraProHome
      navItems={[
        { label: 'Home', href: '#home', active: true },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ]}
      heroTitle="Android Senior Developer"
      heroSubtitle="I build premium Flutter, Kotlin, and web experiences."
      experiences={[]}
      projects={[]}
      testimonials={[]}
      socialLinks={[]}
      onContactSubmit={() => {}}
    />
  </React.StrictMode>
);
