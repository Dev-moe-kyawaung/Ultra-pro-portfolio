import type {
  UltraProExperienceItem,
  UltraProProjectItem,
  UltraProSocialLink,
  UltraProTestimonialItem,
} from '../models/ultraProModels';

export const navItems = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroTitle = 'Android Senior Developer';
export const heroSubtitle =
  'I build premium Flutter, Kotlin, and web experiences with strong architecture, polished UI, and production-ready delivery.';

export const experiences: UltraProExperienceItem[] = [
  {
    role: 'Senior Android Developer',
    company: 'Independent / Product Engineering',
    period: '2023 — Present',
    description:
      'Led premium mobile and web portfolio builds, implemented Material 3 systems, and shipped localization-ready UI architecture.',
  },
  {
    role: 'Flutter Developer',
    company: 'Cross-Platform Product Work',
    period: '2021 — 2023',
    description:
      'Built Flutter mobile and web apps with reusable design systems, theme synchronization, and CI/CD pipelines.',
  },
  {
    role: 'Android Developer',
    company: 'Native App Delivery',
    period: '2019 — 2021',
    description:
      'Delivered Kotlin and Jetpack Compose apps with MVVM, clean architecture, and performance-focused state management.',
  },
];

export const projects: UltraProProjectItem[] = [
  {
    title: 'Ultra Pro Portfolio',
    description:
      'Unified Android, Flutter, and Web portfolio with shared design tokens and premium visual language.',
    tags: ['Compose', 'Flutter', 'React', 'Tailwind'],
  },
  {
    title: 'Localization System',
    description:
      'Multilingual app flow supporting Burmese and English with clean separation of content and UI.',
    tags: ['i18n', 'Android', 'Flutter'],
  },
  {
    title: 'CI/CD Starter',
    description:
      'Automated build and deploy pipeline for modern portfolio delivery with consistent output.',
    tags: ['GitHub Actions', 'Firebase', 'Netlify'],
  },
];

export const testimonials: UltraProTestimonialItem[] = [
  {
    quote:
      'Extremely detail-oriented and production-focused. The final result looked premium and performed well.',
    author: 'Product Lead',
    role: 'Cross-Platform Client',
  },
  {
    quote: 'Strong architecture, clean UI delivery, and great consistency across platforms.',
    author: 'Engineering Manager',
    role: 'Mobile Team',
  },
];

export const socialLinks: UltraProSocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  { label: 'Website', href: 'https://yourdomain.com' },
];
