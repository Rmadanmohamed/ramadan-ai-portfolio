import { useEffect, useState } from 'react';
import { BrainCircuit, Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

type NavbarProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#hero" className="brand-mark" aria-label="Ramadan Mohamed Hassan home">
        <span>
          <BrainCircuit size={20} />
        </span>
        <strong>Ramadan AI</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {portfolioData.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Toggle color theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="icon-button nav-menu-button"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile navigation"
          >
            {portfolioData.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
