import React from 'react';

type Props = {
  title: string;
  body: string;
  onClick?: () => void;
};

export function UltraProCard({ title, body, onClick }: Props) {
  const content = (
    <div className="p-5">
      <h3 className="text-title font-semibold text-[var(--color-text-primary)]">{title}</h3>
      <p className="mt-2 text-body text-[var(--color-text-secondary)]">{body}</p>
    </div>
  );

  if (!onClick) {
    return (
      <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] shadow-sm">
        {content}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] text-left shadow-sm transition hover:bg-[var(--color-bg-surfaceRaised)] focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]"
    >
      {content}
    </button>
  );
}
