import { ArrowUpRight, FileText, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Research() {
  return (
    <section id="research" className="section-shell">
      <SectionHeader
        eyebrow="Research & Publications"
        title="Published work in smart agriculture and robotic path planning."
        description="Two peer-reviewed contributions spanning edge-cloud AI, autonomous systems, IoT, blockchain validation, and robotics."
      />

      <div className="research-grid">{portfolioData.research.map((paper) => (
        <motion.article
          className="research-card glass-panel"
          key={paper.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="research-icon">
            <Microscope size={28} />
          </div>
          <div className="research-content">
            <span>{paper.venue}</span>
            <h3>{paper.title}</h3>
            <p>{paper.contribution}</p>
            <div className="research-points">
              {paper.details.map((detail) => (
                <div key={detail}>
                  <FileText size={16} />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
          <a className="research-link" href={paper.link} target="_blank" rel="noopener noreferrer">
            Publication
            <ArrowUpRight size={16} />
          </a>
        </motion.article>
      ))}</div>
    </section>
  );
}
