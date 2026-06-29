import React from 'react';

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export function UltraProNavigation({ items }: { items: NavItem[] }) {
  return (
    <nav
      aria-label="Primary"
      className="flex items-center justify-between border-b border-[var(--color-border-default)] bg-[var(--color-bg-canvas)] px-6 py-4"
    >
      <div className="text-lg font-semibold text-[var(--color-text-primary)]">Ultra Pro</div>
      <ul className="flex items-center gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={[
                'rounded-md px-3 py-2 text-sm font-medium transition',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-canvas)]',
                item.active
                  ? 'bg-[var(--color-bg-surface)] text-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-surface)] hover:text-[var(--color-text-primary)]'
              ].join(' ')}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
