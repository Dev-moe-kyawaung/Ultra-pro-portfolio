import React from 'react';

export function UltraProFooter({
  copyrightText,
  linksText
}: {
  copyrightText: string;
  linksText: string;
}) {
  return (
    <footer className="border-t border-[var(--color-border-default)] px-6 py-8">
      <div className="space-y-1 text-sm text-[var(--color-text-secondary)]">
        <div>{copyrightText}</div>
        <div>{linksText}</div>
      </div>
    </footer>
  );
}
