import { BadgeCheck, FileBadge2, Medal, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const iconMap = {
  award: Trophy,
  certificate: FileBadge2,
  contest: Medal,
};

export function Awards() {
  return (
    <section id="awards" className="section-shell">
      <SectionHeader
        eyebrow="Awards & Certifications"
        title="Competitive wins, publication signals, and AI certification proof."
        description="The section is intentionally recruiter-friendly: title, date, credibility signal, and impact in one scan."
      />

      <div className="awards-grid">
        {portfolioData.awards.map((award, index) => {
          const Icon = iconMap[award.kind];
          return (
            <motion.article
              className="award-card glass-panel"
              key={award.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <div className="award-icon">
                <Icon size={22} />
              </div>
              <span>{award.date}</span>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              <div className="award-proof">
                <BadgeCheck size={16} />
                <span>{award.kind}</span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
