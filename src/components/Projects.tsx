import { useState } from 'react';
import { ArrowUpRight, BrainCircuit, Cpu, GitBranch, Leaf, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../data/projects';
import { SectionHeader } from './SectionHeader';
import { ProjectModal } from './ProjectModal';

const categoryIcons: Record<ProjectCategory, typeof Stethoscope> = {
  'Machine Learning': BrainCircuit,
  'Medical AI': Stethoscope,
  'Smart Agriculture': Leaf,
  Optimization: Cpu,
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Five systems that show applied AI engineering depth."
        description="Production-oriented work across smart agriculture, medical imaging, scientific ML, recommendation systems, and optimization."
      />

      <div className="project-results-summary">
        <BrainCircuit size={16} aria-hidden="true" />
        <span>Exactly five projects selected from the current CV</span>
      </div>

      <motion.div className="projects-grid" layout>
        {portfolioData.projects.map((project, index) => {
          const Icon = categoryIcons[project.category];
          return (
            <motion.article
              className={`project-card glass-panel ${index === 0 ? 'project-card--flagship' : ''}`}
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div className="project-card-top">
                <div className="project-icon"><Icon size={22} aria-hidden="true" /></div>
                <div><span>{project.category}</span><strong>{index === 0 ? 'Flagship' : project.level}</strong></div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-metrics"><strong>{project.results[0]}</strong></div>
              <div className="tag-row">
                {project.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-actions">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-action">
                  <GitBranch size={16} aria-hidden="true" /> GitHub Repository
                </a>
                <button type="button" className="project-open" onClick={() => setSelectedProject(project)}>
                  View Details <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
