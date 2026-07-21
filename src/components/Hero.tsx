import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, Code2, Download, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

function useTyping(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && visible.length < current.length) {
          setVisible(current.slice(0, visible.length + 1));
          return;
        }

        if (!isDeleting && visible.length === current.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && visible.length > 0) {
          setVisible(current.slice(0, visible.length - 1));
          return;
        }

        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      },
      isDeleting ? 45 : 82,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, visible, wordIndex, words]);

  return visible;
}

function seededUnit(index: number) {
  const value = Math.sin(index * 9301 + 49297) * 233280;
  return value - Math.floor(value);
}

function AICore() {
  const groupRef = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const vertices: number[] = [];
    for (let i = 0; i < 240; i += 1) {
      const phi = Math.acos(2 * seededUnit(i + 1) - 1);
      const theta = seededUnit(i + 241) * Math.PI * 2;
      const radius = 1.65 + seededUnit(i + 481) * 0.35;
      vertices.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      );
    }
    return new Float32Array(vertices);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.25;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={0.45}
          metalness={0.76}
          roughness={0.28}
          wireframe
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 16, 160]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.78} />
      </mesh>
      <mesh rotation={[0.35, 0.85, 0]}>
        <torusGeometry args={[1.85, 0.01, 16, 180]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.62} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#e0f2fe" size={0.018} transparent opacity={0.86} />
      </points>
    </group>
  );
}

export function Hero() {
  const { profile, stats } = portfolioData;
  const typedRole = useTyping(profile.roles);
  const [photoSrc, setPhotoSrc] = useState(profile.photoUrl);

  return (
    <section id="hero" className="hero-section section-shell">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <span className="hero-kicker">
            <Sparkles size={16} />
            Production-oriented AI engineer and published researcher
          </span>
          <h1>
            {profile.name}
            <span>{typedRole}</span>
          </h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.headline}</p>
          <p className="hero-support">{profile.summary}</p>

          <div className="hero-actions">
            <MagneticButton href="#projects" icon={<ArrowDown size={18} />}>
              View Projects
            </MagneticButton>
            <MagneticButton href={profile.cvUrl} download icon={<Download size={18} />} variant="secondary">
              Download CV
            </MagneticButton>
            <MagneticButton href={profile.github} target="_blank" rel="noopener noreferrer" icon={<Code2 size={18} />} variant="ghost">
              GitHub
            </MagneticButton>
            <MagneticButton href={profile.linkedin} target="_blank" rel="noopener noreferrer" icon={<ExternalLink size={18} />} variant="ghost">
              LinkedIn
            </MagneticButton>
            <MagneticButton href="#contact" icon={<Mail size={18} />} variant="ghost">
              Contact Me
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
        >
          <div className="ai-core-card" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.8} />
              <pointLight position={[3, 3, 3]} intensity={2} color="#7dd3fc" />
              <pointLight position={[-3, -2, 2]} intensity={1.5} color="#c084fc" />
              <AICore />
            </Canvas>
          </div>

          <motion.div className="profile-card" whileHover={{ rotateX: 4, rotateY: -5, y: -6 }}>
            <div className="profile-frame">
              <img
                src={photoSrc}
                alt="Ramadan Mohamed Hassan"
                onError={() => setPhotoSrc(profile.fallbackPhotoUrl)}
              />
            </div>
            <div>
              <span>Quick Profile</span>
              <strong>AI Systems & Automation</strong>
              <p>LLM applications, RAG, FastAPI, n8n, machine learning, and computer vision.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="stats-strip"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <p>{stat.detail}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
