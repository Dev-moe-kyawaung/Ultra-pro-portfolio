import React from 'react';

type Props = {
  className?: string;
};

export function UltraProSkeletonText({ className = '' }: Props) {
  return (
    <div
      className={`animate-pulse rounded-md bg-[var(--color-bg-surfaceRaised)] ${className}`}
      aria-hidden="true"
    />
  );
}

export function UltraProSkeletonCard() {
  return (
    <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5">
      <div className="animate-pulse space-y-3">
        <div className="h-5 w-3/5 rounded-md bg-[var(--color-bg-surfaceRaised)]" />
        <div className="h-4 w-full rounded-md bg-[var(--color-bg-surfaceRaised)]" />
        <div className="h-4 w-11/12 rounded-md bg-[var(--color-bg-surfaceRaised)]" />
        <div className="flex gap-3 pt-2">
          <div className="h-8 w-20 rounded-full bg-[var(--color-bg-surfaceRaised)]" />
          <div className="h-8 w-16 rounded-full bg-[var(--color-bg-surfaceRaised)]" />
        </div>
      </div>
    </div>
  );
}
