import React from 'react';

type Link = {
  label: string;
  href: string;
};

type Props = {
  links: Link[];
};

export function UltraProSocialLinks({ links }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)] hover:bg-[var(--color-bg-surfaceRaised)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
