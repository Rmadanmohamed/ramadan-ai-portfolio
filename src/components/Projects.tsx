import { useMemo, useState } from 'react';
import { ArrowUpRight, Filter, Layers3, Stethoscope, Waypoints } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData, projectCategories, type Project, type ProjectCategory } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import { ProjectModal } from './ProjectModal';

const categoryIcons: Record<ProjectCategory, typeof Stethoscope> = {
  'Healthcare & Medical AI': Stethoscope,
  'Robotics, IoT & Blockchain': Waypoints,
  'Advanced Algorithms & Software Engineering': Layers3,
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = useMemo(() => {
    if (activeCategory === 'All') return portfolioData.projects;
    return portfolioData.projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects Portfolio"
        title="Applied AI projects with measurable outcomes and recruiter-ready context."
        description="Every project listed in the CV is represented here, grouped by domain and opened through a focused details view."
      />

      <div className="filter-bar" aria-label="Project filters">
        <Filter size={18} />
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

      <motion.div className="projects-grid" layout>
        {projects.map((project, index) => {
          const Icon = categoryIcons[project.category];
          return (
            <motion.article
              className="project-card glass-panel"
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card-top">
                <div className="project-icon">
                  <Icon size={22} />
                </div>
                <span>{project.category}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.metrics?.length ? (
                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <strong key={metric}>{metric}</strong>
                  ))}
                </div>
              ) : null}

              <div className="tag-row">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <button type="button" className="project-open" onClick={() => setSelectedProject(project)}>
                View details
                <ArrowUpRight size={16} />
              </button>
            </motion.article>
          );
        })}
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
