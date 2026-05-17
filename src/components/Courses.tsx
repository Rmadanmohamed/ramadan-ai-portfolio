import { BookOpenCheck, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export function Courses() {
  return (
    <section id="courses" className="section-shell compact-section">
      <SectionHeader
        eyebrow="Courses & Languages"
        title="Continuous learning across vision, NLP, full-stack engineering, data science, and AI."
      />

      <div className="courses-layout">
        <div className="courses-grid">
          {portfolioData.courses.map((course, index) => (
            <motion.article
              className="course-card glass-panel"
              key={course.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <BookOpenCheck size={20} />
              <span>
                {course.provider} / {course.date}
              </span>
              <h3>{course.title}</h3>
              <p>{course.focus}</p>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="languages-card glass-panel"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <Languages size={24} />
          <h3>Languages</h3>
          {portfolioData.languages.map((language) => (
            <div key={language.name}>
              <strong>{language.name}</strong>
              <span>{language.level}</span>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}
