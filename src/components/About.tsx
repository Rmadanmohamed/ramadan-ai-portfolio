import { useState } from 'react';
import { Brain, Cpu, Network, ScanEye } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const focusIcons = [Brain, ScanEye, Network, Cpu];

export function About() {
  const { profile, specializations } = portfolioData;
  const [photoSrc, setPhotoSrc] = useState(profile.photoUrl);

  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About Me"
        title="Applied AI, research thinking, and product-minded engineering."
        description="A concise view of the domains I work across and the kind of engineering roles I am preparing for."
      />

      <div className="about-grid">
        <motion.div
          className="glass-panel about-story"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I am an Artificial Intelligence and Computer Science student specializing in applied
            machine learning, computer vision, medical AI, smart agriculture systems, robotics, and
            full-stack AI applications.
          </p>
          <p>
            My work focuses on building intelligent systems that connect research, model
            development, software engineering, and real-world problem solving. I have developed
            projects across healthcare AI, crop intelligence, robotic path planning, optimization
            algorithms, graph neural networks, recommender systems, and interactive dashboards.
          </p>
          <p>
            I am especially interested in AI Engineer, Machine Learning Engineer, Computer Vision
            Engineer, Data Science, and Software Engineering roles where I can build reliable,
            practical, and impactful AI-powered systems.
          </p>
          <div className="signal-list">
            <span>Production ML</span>
            <span>Published Robotics Research</span>
            <span>Medical AI</span>
            <span>Smart Agriculture</span>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel about-profile"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={photoSrc} alt="" onError={() => setPhotoSrc(profile.fallbackPhotoUrl)} />
          <div>
            <span>Recruiter Signal</span>
            <strong>Ready for AI engineering teams</strong>
            <p>
              Strong match for AI engineer, ML engineer, data scientist, computer vision, NLP, and
              robotics-focused roles.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="specialization-grid">
        {specializations.map((specialization, index) => {
          const Icon = focusIcons[index % focusIcons.length];
          return (
            <motion.div
              key={specialization}
              className="specialization-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
            >
              <Icon size={20} />
              <span>{specialization}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
