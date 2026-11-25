import { projectCategories, type Project, type ProjectFilter, type ProjectSort } from './projects.ts';

const categoryLabels = Object.fromEntries(projectCategories.map(({ id, label }) => [id, label]));

export type ProjectFilterOptions = {
  projects: Project[];
  category: ProjectFilter;
  query?: string;
  sort: ProjectSort;
};

export function getVisibleProjects({ projects, category, query = '', sort }: ProjectFilterOptions) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filtered = projects.filter((project) => {
    const categoryMatches =
      category === 'all' ||
      (category === 'featured' ? Boolean(project.featured) : project.categories.includes(category));
    const searchableText = [
      project.title,
      project.repo,
      project.primaryCategory,
      ...project.categories,
      ...project.categories.map((id) => categoryLabels[id]),
      categoryLabels[project.primaryCategory],
      project.level,
      project.summary,
      project.description,
      ...project.technologies,
      ...project.models,
      ...(project.aliases ?? []),
    ]
      .join(' ')
      .toLocaleLowerCase();

    return categoryMatches && (!normalizedQuery || searchableText.includes(normalizedQuery));
  });

  return [...filtered].sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.updatedAt ?? b.createdAt ?? '1970-01-01').getTime() - new Date(a.updatedAt ?? a.createdAt ?? '1970-01-01').getTime();
    }
    if (sort === 'aiHeavy') {
      return Number(Boolean(b.aiHeavy)) - Number(Boolean(a.aiHeavy)) || Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    }
    if (sort === 'webApps') {
      return Number(Boolean(b.webApp)) - Number(Boolean(a.webApp)) || Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    }
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.title.localeCompare(b.title);
  });
}
