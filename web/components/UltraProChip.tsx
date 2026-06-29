import React from 'react';

type Variant = 'assist' | 'filter';

type Props = {
  label: string;
  variant?: Variant;
  selected?: boolean;
  onClick?: () => void;
};

export function UltraProChip({
  label,
  variant = 'assist',
  selected = false,
  onClick,
}: Props) {
  const base =
    'inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition ' +
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]';

  const styles =
    variant === 'filter'
      ? selected
        ? 'bg-[var(--color-accent-primary)] text-[var(--color-text-inverse)]'
        : 'bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-default)]'
      : 'bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] border border-[var(--color-border-default)]';

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
}
