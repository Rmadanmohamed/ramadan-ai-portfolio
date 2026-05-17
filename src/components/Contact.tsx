import { useState, type FormEvent } from 'react';
import { Code2, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  const { profile } = portfolioData;
  const [status, setStatus] = useState('');
  const [photoSrc, setPhotoSrc] = useState(profile.photoUrl);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const message = String(data.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'recruiter'}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Email draft opened.');
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeader
        eyebrow="Contact"
        title="Recruiter-friendly contact path for AI, ML, data science, and research roles."
        description="Fast links, CV download, and a clean contact form UI for direct outreach."
      />

      <div className="contact-grid">
        <motion.div
          className="contact-card glass-panel"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-avatar">
            <img src={photoSrc} alt="" onError={() => setPhotoSrc(profile.fallbackPhotoUrl)} />
          </div>
          <h3>{profile.name}</h3>
          <p>{profile.title}</p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} />
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone}`}>
              <Phone size={17} />
              <span>{profile.phone}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
              <span>LinkedIn</span>
            </a>
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={17} />
                <span>GitHub</span>
              </a>
            ) : null}
            <div>
              <MapPin size={17} />
              <span>Egypt / open to AI opportunities</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-panel"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <label>
            Name
            <input name="name" placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me about the AI role, project, or collaboration." rows={5} />
          </label>
          <button type="submit">
            <Send size={18} />
            Send Message
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </motion.form>
      </div>
    </section>
  );
}
