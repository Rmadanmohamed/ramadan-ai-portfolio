import { BarChart3, BrainCircuit, Database, GitBranch, Orbit, ServerCog } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const orbitSkills = ['AI', 'ML', 'DL', 'NLP', 'CV', 'IoT', 'RAG', 'MLOps'];
const dashboardIcons = [BrainCircuit, BarChart3, ServerCog, Database, GitBranch, Orbit];

export function Skills() {
  const heatmapItems = portfolioData.skills.flatMap((group) => group.skills.map((skill) => skill.name));

  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Technical Skills"
        title="A professional AI skills dashboard for research, engineering, and product delivery."
        description="Skills are grouped by the exact CV categories and visualized for fast scanning."
      />

      <div className="skills-hero glass-panel">
        <div className="orbit-system" aria-label="AI specialization orbit">
          <div className="orbit-core">
            <BrainCircuit size={34} />
            <span>AI</span>
          </div>
          {orbitSkills.map((skill, index) => (
            <span key={skill} className={`orbit-node orbit-node-${index + 1}`}>
              {skill}
            </span>
          ))}
        </div>
        <div className="skills-summary">
          <span className="section-eyebrow">Specialization Map</span>
          <h3>From data pipelines to deployed intelligence.</h3>
          <p>
            The portfolio covers Python-heavy ML engineering, deep learning, transformer NLP,
            computer vision, cloud deployment, database work, robotics, IoT, and smart contract
            integration.
          </p>
        </div>
      </div>

      <div className="skills-grid">
        {portfolioData.skills.map((group, groupIndex) => {
          const Icon = dashboardIcons[groupIndex % dashboardIcons.length];
          return (
            <motion.article
              className="skill-panel glass-panel"
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: groupIndex * 0.02 }}
            >
              <div className="skill-panel-head">
                <div className={`skill-icon bg-gradient-to-br ${group.accent}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>
              </div>

              <div className="skill-bars">
                {group.skills.map((skill) => (
                  <div className="skill-bar" key={skill.name}>
                    <div>
                      <span>{skill.name}</span>
                      {skill.label ? <em>{skill.label}</em> : null}
                    </div>
                    <div className="skill-track">
                      <motion.span
                        className={`bg-gradient-to-r ${group.accent}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level ?? 70}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="heatmap-panel glass-panel">
        <div>
          <span className="section-eyebrow">Contribution-Style Skill Visual</span>
          <h3>Capability density across the AI stack</h3>
        </div>
        <div className="skill-heatmap" aria-label="Skill coverage heatmap">
          {Array.from({ length: 84 }, (_, index) => {
            const label = heatmapItems[index % heatmapItems.length];
            const intensity = (index * 7 + label.length) % 5;
            return <span key={`${label}-${index}`} className={`heat-${intensity}`} title={label} />;
          })}
        </div>
      </div>
    </section>
  );
}
