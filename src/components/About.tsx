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
        title="Production-oriented AI systems, from workflow to deployment."
        description="AI automation, backend services, applied machine learning, and published research in practical engineering contexts."
      />

      <div className="about-grid">
        <motion.div
          className="glass-panel about-story"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p>{profile.summary}</p>
          <p>My work connects AI automation, LLM and RAG workflows, backend engineering, data pipelines, machine learning, and computer vision to build practical systems rather than isolated demonstrations.</p>
          <p>I am positioned for AI Engineer, AI Automation Engineer, AI Systems Engineer, LLM Engineer, RAG Engineer, Machine Learning Engineer, and AI Backend Engineer roles.</p>
          <div className="signal-list">
            <span>Production ML</span>
            <span>LLM & RAG Systems</span>
            <span>Backend AI Services</span>
            <span>Published Research</span>
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
              Recent AI graduate with hands-on employment in automation, healthcare AI, and deployable machine-learning systems.
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
