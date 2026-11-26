import { useCallback, useMemo, useState } from 'react';
import { ArrowUpRight, Atom, BrainCircuit, BriefcaseBusiness, Cpu, ExternalLink, FlaskConical, GitBranch, Leaf, Microscope, MonitorSmartphone, Search, SlidersHorizontal, Stethoscope, Waypoints } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { getVisibleProjects } from '../data/projectFilters';
import { projectCategories, projectSortOptions, type Project, type ProjectCategory, type ProjectFilter, type ProjectSort } from '../data/projects';
import { SectionHeader } from './SectionHeader';
import { ProjectModal } from './ProjectModal';

const categoryIcons: Record<ProjectCategory, typeof Stethoscope> = {
  'medical-ai': Stethoscope,
  'smart-agriculture': Leaf,
  'computer-vision': Microscope,
  'machine-learning': BrainCircuit,
  'deep-learning': BrainCircuit,
  'data-science': Atom,
  'robotics-iot': Waypoints,
  optimization: Cpu,
  'full-stack': BriefcaseBusiness,
  frontend: MonitorSmartphone,
  research: FlaskConical,
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>('all');
  const [query, setQuery] = useState('');
  const [sortMode, setSortMode] = useState<ProjectSort>('featured');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(() => new Set());
  const closeProject = useCallback(() => setSelectedProject(null), []);
  const projects = useMemo(
    () => getVisibleProjects({ projects: portfolioData.projects, category: activeCategory, query, sort: sortMode }),
    [activeCategory, query, sortMode],
  );
  const selectedCategory = projectCategories.find(({ id }) => id === activeCategory);

  return (
    <section id="projects" className="section-shell project-section">
      <SectionHeader
        eyebrow="Selected Work · 21 projects"
        title="Projects at the intersection of models, data, and useful software."
        description="Explore applied AI, scientific work, and shipped interfaces. Each project appears once and can be discovered through every relevant technical or domain lens."
      />

      <div className="project-toolbar">
        <label className="project-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input type="search" placeholder="Search projects, methods, or tools" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label className="project-sort">
          <SlidersHorizontal size={18} aria-hidden="true" />
          <span className="sr-only">Sort projects</span>
          <select value={sortMode} onChange={(event) => setSortMode(event.target.value as ProjectSort)}>
            {projectSortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
      </div>

      <div className="filter-bar" role="group" aria-label="Filter projects by category">
        {projectCategories.map(({ id, label }) => (
          <button key={id} className={activeCategory === id ? 'active' : ''} type="button" aria-pressed={activeCategory === id} onClick={() => setActiveCategory(id)}>
            {label}
          </button>
        ))}
      </div>

      <div className="project-results-summary" aria-live="polite" aria-atomic="true">
        <Atom size={16} aria-hidden="true" />
        <span><strong>{projects.length}</strong> {projects.length === 1 ? 'project' : 'projects'}{selectedCategory?.id !== 'all' ? ` in ${selectedCategory?.label}` : ''}{query.trim() ? ' matching your search' : ''}</span>
        <span className="results-total">of {portfolioData.projects.length}</span>
      </div>

      {projects.length ? (
        <motion.div className="projects-grid" layout>
          {projects.map((project, index) => {
            const Icon = categoryIcons[project.primaryCategory];
            const primary = projectCategories.find(({ id }) => id === project.primaryCategory)?.label ?? 'Project';
            const highlights = [...new Set([...project.technologies.slice(0, 3), ...project.skills])];
            const expanded = expandedSkills.has(project.id);
            const visibleHighlights = expanded ? highlights : highlights.slice(0, 4);
            const remaining = highlights.length - visibleHighlights.length;
            return (
              <motion.article
                className={`project-card ${project.id === 'brain-tumor-mri-ai-system' ? 'project-card--spotlight' : ''}`}
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.2) }}
              >
                <div className="project-card-top">
                  <span className="project-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <div className="project-card-meta"><span>{primary}</span><strong>{project.level}</strong></div>
                  {project.featured ? <span className="featured-label">Selected</span> : null}
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="project-taxonomy" aria-label="Project categories">
                  {project.categories.filter((category) => category !== project.primaryCategory).slice(0, 3).map((category) => (
                    <span key={category}>{projectCategories.find(({ id }) => id === category)?.label}</span>
                  ))}
                  {project.categories.length > 4 ? <span>+{project.categories.length - 4}</span> : null}
                </div>

                <div className="tag-row project-tech-tags" aria-label="Key technologies and skills">
                  {visibleHighlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
                  {remaining > 0 || expanded ? (
                    <button type="button" className="project-more-tags" aria-expanded={expanded} onClick={() => setExpandedSkills((current) => {
                      const next = new Set(current);
                      if (next.has(project.id)) next.delete(project.id);
                      else next.add(project.id);
                      return next;
                    })}>{expanded ? 'Show less' : `+${remaining} more`}</button>
                  ) : null}
                </div>
                <div className="project-actions">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-action">
                    <GitBranch size={15} aria-hidden="true" /> Repository
                  </a>
                  <button type="button" className="project-open" onClick={() => setSelectedProject(project)}>
                    Case study <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
                {project.liveDemoUrl ? (
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-live">
                    <ExternalLink size={15} aria-hidden="true" /> Live Demo
                  </a>
                ) : null}
              </motion.article>
            );
          })}
        </motion.div>
      ) : (
        <div className="project-empty" role="status">
          <Search size={22} aria-hidden="true" />
          <h3>No projects match this view</h3>
          <p>Try another category or broaden the search terms.</p>
          <button type="button" onClick={() => { setQuery(''); setActiveCategory('all'); }}>Clear filters <ArrowUpRight size={15} /></button>
        </div>
      )}

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </section>
  );
}
