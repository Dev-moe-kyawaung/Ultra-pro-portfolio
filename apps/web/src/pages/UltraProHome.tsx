import React from 'react';
import { UltraProNavigation } from '@/components/UltraProNavigation';
import { UltraProHero } from '@/components/UltraProHero';
import { UltraProSectionHeader } from '@/components/UltraProSectionHeader';
import { UltraProExperienceTimeline } from '@/components/UltraProExperienceTimeline';
import { UltraProProjectGrid } from '@/components/UltraProProjectGrid';
import { UltraProTestimonial } from '@/components/UltraProTestimonial';
import { UltraProContactForm } from '@/components/UltraProContactForm';
import { UltraProSocialLinks } from '@/components/UltraProSocialLinks';
import { UltraProFooter } from '@/components/UltraProFooter';

export function UltraProHome({
  navItems,
  heroTitle,
  heroSubtitle,
  experiences,
  projects,
  testimonials,
  socialLinks,
  onContactSubmit
}: {
  navItems: { label: string; href: string; active?: boolean }[];
  heroTitle: string;
  heroSubtitle: string;
  experiences: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    tags: string[];
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  socialLinks: { label: string; href: string }[];
  onContactSubmit: (data: { name: string; email: string; message: string }) => void;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-bg-surface)] focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <UltraProNavigation items={navItems} />

      <main id="main" className="space-y-16">
        <UltraProHero
          title={heroTitle}
          subtitle={heroSubtitle}
          primaryAction={
            <button className="rounded-md bg-[var(--color-accent-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-text-inverse)]">
              Contact Me
            </button>
          }
          secondaryAction={
            <button className="rounded-md border border-[var(--color-border-default)] px-5 py-3 text-sm font-semibold text-[var(--color-text-primary)]">
              Download CV
            </button>
          }
        />

        <section className="px-6" id="experience">
          <UltraProSectionHeader title="Experience" subtitle="Selected roles and impact." />
          <UltraProExperienceTimeline items={experiences} />
        </section>

        <section className="px-6" id="projects">
          <UltraProSectionHeader title="Projects" subtitle="Featured work across mobile and web." />
          <UltraProProjectGrid projects={projects} />
        </section>

        <section className="px-6">
          <UltraProSectionHeader title="Testimonials" subtitle="What collaborators say." />
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <UltraProTestimonial key={`${item.author}-${item.role}`} item={item} />
            ))}
          </div>
        </section>

        <section className="px-6" id="contact">
          <UltraProSectionHeader title="Contact" subtitle="Start a conversation." />
          <div className="max-w-2xl">
            <UltraProContactForm onSubmit={onContactSubmit} />
          </div>
        </section>

        <section className="px-6">
          <UltraProSectionHeader title="Social" subtitle="Find me online." />
          <UltraProSocialLinks links={socialLinks} />
        </section>
      </main>

      <UltraProFooter
        copyrightText="© 2026 Ultra Pro"
        linksText="Built with Compose, Flutter, and React/Tailwind"
      />
    </div>
  );
}
