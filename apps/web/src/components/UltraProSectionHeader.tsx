import React from 'react';

export function UltraProSectionHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">{title}</h2>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{subtitle}</p>
    </div>
  );
}
