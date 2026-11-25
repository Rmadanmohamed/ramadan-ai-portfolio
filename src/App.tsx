import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { About } from './components/About';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { Courses } from './components/Courses';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Skills } from './components/Skills';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <MotionConfig reducedMotion="user">
    <>
      <AnimatedBackground />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Awards />
        <Skills />
        <Courses />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
    </MotionConfig>
  );
}

export default App;
