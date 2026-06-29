import React from 'react';
import type { SocialLinkItem } from '@/models/portfolioModels';

export function UltraProSocialLinks({ links }: { links: SocialLinkItem[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition hover:bg-[var(--color-bg-surfaceRaised)] focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
