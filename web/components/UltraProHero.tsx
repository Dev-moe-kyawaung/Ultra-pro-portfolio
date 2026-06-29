import React from 'react';

type Props = {
  title: string;
  subtitle: string;
  primaryAction: React.ReactNode;
  secondaryAction: React.ReactNode;
};

export function UltraProHero({ title, subtitle, primaryAction, secondaryAction }: Props) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-5xl">
        <h1 className="text-display font-bold tracking-tight text-[var(--color-text-primary)]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-body text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>
    </section>
  );
}
