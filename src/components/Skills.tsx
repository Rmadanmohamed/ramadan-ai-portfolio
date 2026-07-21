import { BrainCircuit, Code2, Database, Library, Network, ServerCog } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const icons = [Code2, BrainCircuit, Network, Library, ServerCog, Database];

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Technical Skills"
        title="A focused stack for production-oriented AI systems."
        description="CV-verified capabilities grouped for fast recruiter and engineering review, without subjective proficiency ratings."
      />
      <div className="skills-grid">
        {portfolioData.skills.map((group, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              className="skill-panel glass-panel"
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div className="skill-panel-head">
                <div className="skill-icon"><Icon size={20} aria-hidden="true" /></div>
                <h3>{group.title}</h3>
              </div>
              <div className="tag-row skill-tags">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
