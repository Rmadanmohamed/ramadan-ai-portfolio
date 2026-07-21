import { BadgeCheck, Check, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Courses() {
  return (
    <section id="certifications" className="section-shell compact-section">
      <SectionHeader
        eyebrow="Certifications & Training"
        title="Industry-recognized AI training and credentials."
        description="Industry-recognized training and credentials across AI, LLM applications, and applied machine learning."
      />

      <div className="certifications-grid">
        {portfolioData.certifications.map((certificate, index) => (
          <motion.article
            className="certification-card glass-panel"
            key={certificate.provider}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <div className="certification-head">
              <BadgeCheck size={22} aria-hidden="true" />
              <div>
                <span>{certificate.provider}</span>
                <h3>{certificate.title}</h3>
              </div>
            </div>
            <ul className="credential-list">
              {certificate.credentials.map((credential) => (
                <li key={credential}>
                  <Check size={16} aria-hidden="true" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
            <p>{certificate.description}</p>
            <div className="tag-row certification-tags">
              {certificate.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.aside
        className="languages-card languages-card--inline glass-panel"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="languages-title">
          <Languages size={22} aria-hidden="true" />
          <h3>Languages</h3>
        </div>
        <div className="languages-list">
          {portfolioData.languages.map((language) => (
            <div key={language.name}>
              <strong>{language.name}</strong>
              <span>{language.level}</span>
            </div>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
