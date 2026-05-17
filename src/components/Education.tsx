import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" className="section-shell compact-section">
      <SectionHeader
        eyebrow="Education"
        title="Academic base in computer science and artificial intelligence."
      />

      <div className="timeline">
        {portfolioData.education.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.school}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="timeline-marker">
              <GraduationCap size={18} />
            </div>
            <div className="glass-panel timeline-content">
              <span>{item.date}</span>
              <h3>{item.school}</h3>
              <strong>{item.program}</strong>
              <p>{item.details}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
