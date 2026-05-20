import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Atom,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  ExternalLink,
  FlaskConical,
  GitBranch,
  Leaf,
  Microscope,
  Search,
  SlidersHorizontal,
  Stethoscope,
  Waypoints,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  projectCategories,
  projectSortOptions,
  type Project,
  type ProjectCategory,
  type ProjectFilter,
  type ProjectSort,
} from '../data/projects';
import { SectionHeader } from './SectionHeader';
import { ProjectModal } from './ProjectModal';

const categoryIcons: Record<ProjectCategory, typeof Stethoscope> = {
  'Machine Learning': BrainCircuit,
  'Data Science': Atom,
  'Medical AI': Stethoscope,
  'Computer Vision': Microscope,
  'Smart Agriculture': Leaf,
  'Robotics & IoT': Waypoints,
  'Full Stack': BriefcaseBusiness,
  Optimization: Cpu,
  Research: FlaskConical,
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>('All');
  const [query, setQuery] = useState('');
  const [sortMode, setSortMode] = useState<ProjectSort>('featured');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = portfolioData.projects.filter((project) => {
      const categoryMatches =
        activeCategory === 'All' || (activeCategory === 'Featured' ? project.featured : project.category === activeCategory);
      const searchableText = [
        project.title,
        project.repo,
        project.category,
        project.level,
        project.summary,
        project.description,
        project.technologies.join(' '),
        project.models.join(' '),
        project.aliases?.join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return categoryMatches && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });

    return [...filtered].sort((a, b) => {
      if (sortMode === 'newest') {
        return new Date(b.updatedAt ?? b.createdAt ?? '1970-01-01').getTime() - new Date(a.updatedAt ?? a.createdAt ?? '1970-01-01').getTime();
      }

      if (sortMode === 'aiHeavy') {
        return Number(Boolean(b.aiHeavy)) - Number(Boolean(a.aiHeavy)) || Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      }

      if (sortMode === 'webApps') {
        return Number(Boolean(b.webApp)) - Number(Boolean(a.webApp)) || Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      }

      return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.title.localeCompare(b.title);
    });
  }, [activeCategory, query, sortMode]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects Portfolio"
        title="A recruiter-ready map of applied AI, data, and product work."
        description="Search, filter, and open each project as a mini case study with honest metrics, datasets, models, repository links, and demo links when available."
      />

      <div className="project-toolbar">
        <label className="project-search">
          <Search size={18} />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search projects, models, tech..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <label className="project-sort">
          <SlidersHorizontal size={18} />
          <span className="sr-only">Sort projects</span>
          <select value={sortMode} onChange={(event) => setSortMode(event.target.value as ProjectSort)}>
            {projectSortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="filter-bar" aria-label="Project category filters">
        {projectCategories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-results-summary">
        <Atom size={16} />
        <span>
          Showing {projects.length} of {portfolioData.projects.length} projects
        </span>
      </div>

      <motion.div className="projects-grid" layout>
        {projects.map((project, index) => {
          const Icon = categoryIcons[project.category];
          return (
            <motion.article
              className="project-card glass-panel"
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="project-card-top">
                <div className="project-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <span>{project.category}</span>
                  <strong>{project.level}</strong>
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="project-metrics">
                <strong>{project.featured ? 'Featured' : project.aiHeavy ? 'AI-heavy' : project.webApp ? 'Web app' : 'Case study'}</strong>
                <strong>{project.results[0] === 'Not specified' ? 'Metrics not specified' : 'Results noted'}</strong>
              </div>

              <div className="tag-row">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action"
                  onClick={(event) => event.stopPropagation()}
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
                <button
                  type="button"
                  className="project-open"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Details
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-live"
                  onClick={(event) => event.stopPropagation()}
                >
                  <ExternalLink size={15} />
                  Live demo
                </a>
              ) : null}
            </motion.article>
          );
        })}
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
