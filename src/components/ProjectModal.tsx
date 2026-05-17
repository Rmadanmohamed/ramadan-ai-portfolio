import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Activity, CheckCircle2, Cpu, X } from 'lucide-react';
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
            </div>

            <div className="project-modal-body">
              <span className="section-eyebrow">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.metrics?.length ? (
                <div className="metric-grid">
                  {project.metrics.map((metric) => (
                    <div key={metric}>
                      <Activity size={16} />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {project.achievements?.length ? (
                <div className="modal-block">
                  <strong>Impact</strong>
                  {project.achievements.map((achievement) => (
                    <p key={achievement}>
                      <CheckCircle2 size={16} />
                      <span>{achievement}</span>
                    </p>
                  ))}
                </div>
              ) : null}

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
