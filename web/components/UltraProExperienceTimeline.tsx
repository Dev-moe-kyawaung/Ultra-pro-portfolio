import React from 'react';

type Item = {
  role: string;
  company: string;
  period: string;
  description: string;
};

type Props = {
  items: Item[];
};

export function UltraProExperienceTimeline({ items }: Props) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article
          key={`${item.company}-${item.role}-${item.period}`}
          className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5"
        >
          <h3 className="text-title font-semibold text-[var(--color-text-primary)]">{item.role}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            {item.company} • {item.period}
          </p>
          <p className="mt-3 text-body text-[var(--color-text-secondary)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
