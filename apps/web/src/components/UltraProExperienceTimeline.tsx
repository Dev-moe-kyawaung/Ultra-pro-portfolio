import React from 'react';
import type { ExperienceItem } from '@/models/portfolioModels';

export function UltraProExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article
          key={`${item.company}-${item.role}-${item.period}`}
          className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5"
        >
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{item.role}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            {item.company} • {item.period}
          </p>
          <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
