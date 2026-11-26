import { ArrowDown, ArrowUpRight, Braces, Download, GitBranch, Mail, Network, ScanEye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

function ModelDiagram() {
  return (
    <div className="model-diagram" aria-label="Illustration of a connected AI engineering workflow">
      <svg className="model-diagram-lines" viewBox="0 0 560 500" role="img" aria-labelledby="diagram-title">
        <title id="diagram-title">AI systems workflow illustration</title>
        <defs>
          <pattern id="diagram-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth=".6" opacity=".14" />
          </pattern>
        </defs>
        <rect x="25" y="22" width="510" height="456" rx="18" fill="url(#diagram-grid)" />
        <path className="diagram-path diagram-path--one" d="M142 130 C215 130 210 220 280 220 S350 310 418 310" />
        <path className="diagram-path diagram-path--two" d="M140 350 C205 350 215 275 280 275 S355 160 420 160" />
        <path className="diagram-path diagram-path--three" d="M280 95V400" />
        <circle cx="140" cy="130" r="6" /><circle cx="140" cy="350" r="6" />
        <circle cx="280" cy="95" r="6" /><circle cx="280" cy="400" r="6" />
        <circle cx="420" cy="160" r="6" /><circle cx="420" cy="310" r="6" />
      </svg>
      <div className="diagram-node diagram-node--vision"><ScanEye size={19} /><span>Computer vision</span><small>Image signals</small></div>
      <div className="diagram-node diagram-node--core"><Network size={22} /><span>AI systems</span><small>Models · APIs · data</small></div>
      <div className="diagram-node diagram-node--automation"><Braces size={19} /><span>Automation</span><small>Reliable workflows</small></div>
      <div className="diagram-index"><span>FIELD NOTE</span><strong>01 / 03</strong></div>
      <div className="diagram-coordinate">MODEL → SERVICE<br />DATA → DECISION</div>
    </div>
  );
}

export function Hero() {
  const { profile, stats, specializations } = portfolioData;
  const [photoSrc, setPhotoSrc] = useState(profile.photoUrl);

  return (
    <section id="hero" className="hero-section section-shell">
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
          <span className="hero-kicker"><Sparkles size={15} aria-hidden="true" /> AI ENGINEERING · RESEARCH · PRODUCT</span>
          <p className="hero-overline">Portfolio / 2026</p>
          <h1>{profile.name}<span>Building AI that works in the real world.</span></h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.headline}</p>
          <p className="hero-support">{profile.summary}</p>

          <div className="hero-actions">
            <MagneticButton href="#projects" icon={<ArrowDown size={17} />}>Explore selected work</MagneticButton>
            <MagneticButton href={profile.cvUrl} download icon={<Download size={17} />} variant="secondary">Download CV</MagneticButton>
            <MagneticButton href={profile.github} target="_blank" rel="noopener noreferrer" icon={<GitBranch size={17} />} variant="ghost">GitHub</MagneticButton>
            <MagneticButton href="#contact" icon={<Mail size={17} />} variant="ghost">Get in touch</MagneticButton>
          </div>
          <div className="hero-specializations" aria-label="Areas of work">
            {specializations.slice(0, 5).map((specialization) => <span key={specialization}>{specialization}</span>)}
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
          <ModelDiagram />
          <div className="profile-card">
            <div className="profile-frame"><img src={photoSrc} alt="Portrait of Ramadan Mohamed Hassan" width="1200" height="1600" fetchPriority="high" decoding="async" onError={() => setPhotoSrc(profile.fallbackPhotoUrl)} /></div>
            <div className="profile-card-copy"><span>AREAS OF EXPERTISE</span><strong>AI Systems &amp; AI Automation</strong><p>AI Solutions · LLMs · RAG · Automation · Machine Learning · Computer Vision</p></div>
            <ArrowUpRight className="profile-arrow" size={17} aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <motion.div className="stats-strip" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.42 }}>
        {stats.map((stat, index) => <div key={stat.label} className="stat-card"><span className="stat-index">0{index + 1}</span><strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.detail}</p></div>)}
      </motion.div>
    </section>
  );
}
