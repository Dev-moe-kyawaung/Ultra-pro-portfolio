import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export function UltraProButton({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
}: Props) {
  const base =
    'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ' +
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)] ' +
    'disabled:opacity-50 disabled:pointer-events-none';

  const styles: Record<Variant, string> = {
    primary:
      'bg-[var(--color-accent-primary)] text-[var(--color-text-inverse)] hover:opacity-90',
    secondary:
      'border border-[var(--color-border-default)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]',
    ghost:
      'bg-transparent text-[var(--color-accent-primary)] hover:bg-[var(--color-bg-surface)]',
  };

  return (
    <button type={type} className={`${base} ${styles[variant]}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
