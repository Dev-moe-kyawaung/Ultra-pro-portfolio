import React from 'react';

export function UltraProHero({
  title,
  subtitle,
  primaryAction,
  secondaryAction
}: {
  title: string;
  subtitle: string;
  primaryAction: React.ReactNode;
  secondaryAction: React.ReactNode;
}) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-[var(--color-text-secondary)]">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>
    </section>
  );
}
