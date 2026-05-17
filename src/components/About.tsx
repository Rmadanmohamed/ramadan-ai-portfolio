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
        title="An AI engineer building systems that move from research into useful products."
        description="The CV story is direct: strong applied AI, published robotics research, competitive programming discipline, and award-winning work across agriculture, healthcare, and optimization."
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
            Ramadan Mohamed Hassan is a Computer Science student in the Artificial Intelligence
            program at New Mansoura University, focused on practical AI systems that solve real
            problems. His portfolio spans high-accuracy machine learning models for healthcare,
            smart agriculture, robotics navigation, IoT systems, blockchain-backed data integrity,
            and NLP applications.
          </p>
          <p>
            His work combines the scientist and builder mindsets: published path-planning research,
            production-ready AI internship experience at ReNile, generative AI and prompt
            engineering training with NVIDIA, Huawei AI certifications, and competitive programming
            qualifications through ICPC and ECPC.
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
