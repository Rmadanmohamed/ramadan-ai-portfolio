import { BriefcaseBusiness, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Professional Experience"
        title="Applied AI delivery across automation, healthcare, and deployment-oriented systems."
        description="Professional roles focused on production workflows, backend AI services, and practical machine learning."
      />

      <div className="experience-layout">
        <div className="experience-rail" aria-hidden="true">
          <Sparkles size={18} />
        </div>
        {portfolioData.experiences.map((experience, index) => (
          <motion.article
            className="experience-card glass-panel"
            key={`${experience.company}-${experience.role}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div className="experience-icon">
              <BriefcaseBusiness size={20} />
            </div>
            <div className="experience-meta">
              <span>{experience.date}</span>
              <h3>{experience.company}</h3>
              <strong>{experience.role}</strong>
              <p className="experience-arrangement">{experience.arrangement}</p>
            </div>
            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="tag-row">
              {experience.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
