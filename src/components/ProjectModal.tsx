import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Activity, ArrowUpRight, CheckCircle2, Cpu, GitBranch, Layers3, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/portfolioData';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, project]);

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.article
            className="project-modal glass-panel"
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
          >
            <button className="icon-button modal-close" type="button" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>

              <div className="project-modal-visual">
                <div className="project-glyph">
                  <Cpu size={42} />
                </div>
                <div className="project-modal-meta">
                  <span>{project.level}</span>
                  <span>{project.repo ?? 'Repository not found'}</span>
                </div>
              </div>

              <div className="project-modal-body">
                <span className="section-eyebrow">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="modal-actions">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link modal-link--primary">
                    <GitBranch size={17} />
                    Open GitHub
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <div className="modal-block">
                  <strong>Problem Solved</strong>
                  <p>{project.problem}</p>
                </div>

                <div className="modal-block">
                  <strong>Key Features</strong>
                  {project.features.map((feature) => (
                    <p key={feature}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </p>
                  ))}
                </div>

                {project.achievements?.length ? (
                  <div className="modal-block">
                    <strong>Achievements</strong>
                    {project.achievements.map((achievement) => (
                      <p key={achievement}>
                        <CheckCircle2 size={16} />
                        <span>{achievement}</span>
                      </p>
                    ))}
                  </div>
                ) : null}

                <div className="metric-grid">
                  <div>
                    <Activity size={16} />
                    <span>{project.results[0]}</span>
                  </div>
                  <div>
                    <Layers3 size={16} />
                    <span>{project.dataset}</span>
                  </div>
                </div>

                <div className="case-study-grid">
                  <div className="modal-block">
                    <strong>AI/ML Models</strong>
                    {project.models.map((model) => (
                      <p key={model}>
                        <CheckCircle2 size={16} />
                        <span>{model}</span>
                      </p>
                    ))}
                  </div>

                  <div className="modal-block">
                    <strong>Results / Metrics</strong>
                    {project.results.map((result) => (
                      <p key={result}>
                        <Activity size={16} />
                        <span>{result}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="modal-block">
                  <strong>Architecture / Workflow</strong>
                  <p>{project.architecture}</p>
                </div>

                <div className="modal-block">
                  <strong>Skills Demonstrated</strong>
                  <div className="tag-row">
                    {project.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-block">
                  <strong>Technologies</strong>
                  <div className="tag-row">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                  ))}
                  </div>
                </div>


            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
