import { useEffect, useState } from 'react';
import { About } from './components/About';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { Courses } from './components/Courses';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Skills } from './components/Skills';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
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
  );
}

export default App;
