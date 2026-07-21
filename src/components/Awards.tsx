import { BadgeCheck, Medal, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const iconMap = {
  award: Trophy,
  contest: Medal,
};

export function Awards() {
  return (
    <section id="awards" className="section-shell">
      <SectionHeader
        eyebrow="Awards & Recognition"
        title="Verified competitive results in AI, engineering, and problem solving."
        description="Rankings, dates, and outcomes are presented exactly from the current CV."
      />

      <div className="awards-grid">
        {portfolioData.awards.map((award, index) => {
          const Icon = award.kind === 'contest' ? iconMap.contest : iconMap.award;
          return (
            <motion.article
              className="award-card glass-panel"
              key={`${award.title}-${award.organization}`}
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
              <strong>{award.organization}</strong>
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
