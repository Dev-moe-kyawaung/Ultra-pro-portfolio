import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

export function UltraProSectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-4">
      <h2 className="text-headline font-bold text-[var(--color-text-primary)]">{title}</h2>
      {subtitle ? (
        <p className="mt-1 text-body text-[var(--color-text-secondary)]">{subtitle}</p>
      ) : null}
    </div>
  );
}
