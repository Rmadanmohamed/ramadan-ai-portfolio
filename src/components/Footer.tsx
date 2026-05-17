import { BrainCircuit, Download, ExternalLink, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { profile } = portfolioData;

  return (
    <footer className="site-footer">
      <div>
        <BrainCircuit size={22} />
        <strong>{profile.name}</strong>
        <span>{profile.title}</span>
      </div>
      <nav aria-label="Footer links">
        <a href={profile.cvUrl} download>
          <Download size={16} />
          CV
        </a>
        <a href={`mailto:${profile.email}`}>
          <Mail size={16} />
          Email
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <ExternalLink size={16} />
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}
