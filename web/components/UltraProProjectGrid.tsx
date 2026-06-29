import React from 'react';
import type { UltraProProjectItem } from '../models/ultraProModels';

type Props = {
  projects: UltraProProjectItem[];
};

export function UltraProProjectGrid({ projects }: Props) {
  return (
    <section aria-label="Projects" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5 shadow-sm"
        >
          <h3 className="text-title font-semibold text-[var(--color-text-primary)]">{project.title}</h3>
          <p className="mt-3 text-body text-[var(--color-text-secondary)]">{project.description}</p>
          {project.tags.length > 0 ? (
            <ul aria-label="Tags" className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex items-center rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)]">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </section>
  );
}
