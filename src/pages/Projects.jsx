import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiArrowUpRight, FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/projects'
import TechIcon from '../components/TechIcon'
import './Projects.css'

const filters = ['all', 'frontend', 'fullstack']

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <main className="projects-page">
      <div className="projects-atmosphere" aria-hidden="true" />
      <div className="projects-grid-lines" aria-hidden="true" />

      <section className="projects-hero">
        <div className="container projects-hero-inner">
          <motion.div
            className="projects-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="kicker-line" /> Selected work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            Built to <span className="gradient-text">solve.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Five selected projects spanning full-stack development, AI/LLM integration, APIs, and modern frontend experiences.
          </motion.p>
        </div>
      </section>

      <section className="projects-toolbar" aria-label="Project filters">
        <div className="container toolbar-inner">
          <div className="project-count"><strong>{String(filteredProjects.length).padStart(2, '0')}</strong> projects</div>
          <div className="filter-wrapper">
            {filters.map((f) => (
              <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : f === 'fullstack' ? 'Full Stack' : 'Frontend'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-grid-section">
        <div className="container">
          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className={`project-card-large project-card-${index + 1}`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.24, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="project-visual">
                    <div className="visual-number">{project.number}</div>
                    <div className="visual-orb orb-one" />
                    <div className="visual-orb orb-two" />
                    <div className="visual-grid" />
                    <div className="visual-monogram">{project.title.split(' ').map((w) => w[0]).join('').slice(0, 3)}</div>
                    <span className="visual-label">{project.label}</span>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="visual-github" aria-label={`Open ${project.title} GitHub repository`}>
                      <FiGithub size={17} />
                      <span>View on GitHub</span>
                      <FiArrowUpRight size={15} />
                    </a>
                  </div>

                  <div className="project-content">
                    <div className="project-meta">
                      <span>{project.category === 'fullstack' ? 'FULL STACK' : 'FRONTEND / API'}</span>
                      <span>{project.number}</span>
                    </div>
                    <h2>{project.title}</h2>
                    <p className="project-desc">{project.shortDesc}</p>

                    <div className="project-tech-stack">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge"><TechIcon name={t} size={15} />{t}</span>
                      ))}
                    </div>

                    <ul className="project-features">
                      {project.features.slice(0, 4).map((feature) => <li key={feature}><span />{feature}</li>)}
                    </ul>

                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-repo-link">
                      View on GitHub <FiArrowUpRight size={17} />
                    </a>
                    <span className="project-repo-url">{project.githubUrl.replace('https://', '')}</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section projects-cta">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}>
            <span className="projects-kicker"><span className="kicker-line" /> Have an idea?</span>
            <h2>Let's build something <span className="gradient-text">useful.</span></h2>
            <p>I'm open to backend, full-stack, and practical AI/LLM projects.</p>
            <Link to="/contact" className="btn btn-primary">Start a conversation <FiArrowRight /></Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
