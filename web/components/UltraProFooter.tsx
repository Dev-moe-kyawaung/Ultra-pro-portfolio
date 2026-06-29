import React from 'react';

type Props = {
  copyrightText: string;
  linksText: string;
};

export function UltraProFooter({ copyrightText, linksText }: Props) {
  return (
    <footer className="border-t border-[var(--color-border-default)] px-6 py-8">
      <div className="space-y-1 text-sm text-[var(--color-text-secondary)]">
        <div>{copyrightText}</div>
        <div>{linksText}</div>
      </div>
    </footer>
  );
}
