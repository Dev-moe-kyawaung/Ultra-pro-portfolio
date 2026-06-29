import React from 'react';
import { UltraProButton } from './UltraProButton';

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
          <div className="mt-5">
            <UltraProButton onClick={onAction}>{actionLabel}</UltraProButton>
          </div>
        ) : null}
      </div>
    </div>
  );
}
