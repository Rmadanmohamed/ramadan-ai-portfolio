import { BadgeCheck, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Courses() {
  return (
    <section id="certifications" className="section-shell compact-section">
      <SectionHeader
        eyebrow="Certifications & Training"
        title="Focused training in LLM applications and industry AI practice."
      />

      <div className="courses-layout">
        <div className="courses-grid">
          {portfolioData.certifications.map((certificate, index) => (
            <motion.article
              className="course-card glass-panel"
              key={certificate.provider}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <BadgeCheck size={20} />
              <span>{certificate.provider}</span>
              <h3>{certificate.title}</h3>
              <p>{certificate.details}</p>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="languages-card glass-panel"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <Languages size={24} />
          <h3>Languages</h3>
          {portfolioData.languages.map((language) => (
            <div key={language.name}>
              <strong>{language.name}</strong>
              <span>{language.level}</span>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}
