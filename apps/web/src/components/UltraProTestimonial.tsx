import React from 'react';
import type { TestimonialItem } from '@/models/portfolioModels';

export function UltraProTestimonial({ item }: { item: TestimonialItem }) {
  return (
    <figure className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5">
      <blockquote className="text-sm text-[var(--color-text-primary)]">“{item.quote}”</blockquote>
      <figcaption className="mt-4">
        <div className="font-semibold text-[var(--color-text-primary)]">{item.author}</div>
        <div className="text-sm text-[var(--color-text-secondary)]">{item.role}</div>
      </figcaption>
    </figure>
  );
}
