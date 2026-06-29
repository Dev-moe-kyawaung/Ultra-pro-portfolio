import React from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
};

type Props = {
  projects: Project[];
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
            <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
              {project.tags.join(' • ')}
            </p>
          ) : null}
        </article>
      ))}
    </section>
  );
}
