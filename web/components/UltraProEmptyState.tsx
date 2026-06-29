import React from 'react';

type Props = {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function UltraProEmptyState({ title, message, actionLabel, onAction }: Props) {
  return (
    <div className="flex min-h-[240px] items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h3 className="text-title font-semibold text-[var(--color-text-primary)]">{title}</h3>
        <p className="mt-3 text-body text-[var(--color-text-secondary)]">{message}</p>
        {actionLabel && onAction ? (
          <button
            type="button"
            onClick={onAction}
            className="mt-5 inline-flex items-center justify-center rounded-md bg-[var(--color-accent-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-text-inverse)] focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
