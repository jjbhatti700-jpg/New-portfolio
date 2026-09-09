import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowDown,
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiLayers,
  FiCpu,
  FiMonitor,
  FiDatabase,
  FiCode,
  FiServer,
  FiCloud
} from 'react-icons/fi'
import { projects, personalInfo, services, skills, stats } from '../data/projects'
import TechIcon from '../components/TechIcon'
import PyramidLoader from '../components/PyramidLoader'
import './Home.css'

const serviceIcons = {
  layers: FiLayers,
  plug: FiCpu,
  layout: FiMonitor,
  database: FiDatabase,
  server: FiServer,
  cloud: FiCloud
}

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
  }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } }
}

function HeroPyramid() {
  return (
    <div className="hero-pyramid-wrap">
      <PyramidLoader />
      <div className="hero-pyramid-caption">
        <span>INTERFACE / ENGINEERING / AI</span>
        <strong>BUILD WHAT'S NEXT.</strong>
      </div>
    </div>
  )
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 5)
  const technologyPreview = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.languages,
    ...skills.databases,
    ...skills.ai,
    ...skills.devops
  ]

  return (
    <main className="home">
      <div className="home-noise" aria-hidden="true" />
      <div className="home-grid" aria-hidden="true" />

      <section className="hero" id="top">
        <div className="hero-ambient" aria-hidden="true" />
        <div className="container hero-container">
          <motion.div
            className="hero-copy"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-kicker" variants={reveal}>
              <span className="kicker-line" />
              FULL STACK DEVELOPER <span>·</span> AI / LLM
            </motion.div>

            <motion.h1 className="hero-title" variants={reveal}>
              BUILDING
              <span className="hero-title-outline">WHAT'S</span>
              <span>NEXT.</span>
            </motion.h1>

            <motion.p className="hero-lead" variants={reveal}>
              Full-stack development, backend systems, and practical AI/LLM experiences
              built with modern technologies and a product-first mindset.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <Link to="/projects" className="btn btn-primary">
                Explore Work <FiArrowRight />
              </Link>
              <a href={personalInfo.cvPath} className="btn btn-ghost" download>
                <FiDownload /> Download CV
              </a>
              <a href={personalInfo.resumePath} className="btn btn-ghost" download>
                <FiDownload /> Download Resume
              </a>
            </motion.div>

            <motion.div className="hero-links" variants={reveal}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroPyramid />
          </motion.div>

          <motion.a
            href="#work"
            className="hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.3 }}
          >
            <span>SCROLL TO EXPLORE</span>
            <FiArrowDown />
          </motion.a>
        </div>
      </section>

      <section className="ticker" aria-label="Technology areas">
        <div className="ticker-track">
          {[...technologyPreview, ...technologyPreview].map((tech, index) => (
            <span key={`${tech.name}-${index}`}>
              <TechIcon name={tech.name} size={15} />
              {tech.name}
              <i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="section intro-section">
        <div className="container intro-layout">
          <motion.div
            className="section-index"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            01 / CAPABILITIES
          </motion.div>
          <motion.div
            className="intro-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <p className="eyebrow">WHAT I BUILD</p>
            <h2>From interface to API, I turn ideas into <em>working products.</em></h2>
          </motion.div>
        </div>

        <div className="container capabilities-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] || FiCode
            return (
              <motion.article
                key={service.id}
                className="capability"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
              >
                <span className="capability-number">0{index + 1}</span>
                <Icon className="capability-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <div>
              <span className="eyebrow">02 / SELECTED WORK</span>
              <h2>Projects that <em>solve problems.</em></h2>
            </div>
            <Link to="/projects" className="text-link">
              View all work <FiArrowRight />
            </Link>
          </motion.div>

          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`project-row ${index === 0 ? 'project-row-featured' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <span className="project-label">{project.label}</span>
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc}</p>
                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <span key={tech} className="project-tech">
                        <TechIcon name={tech} size={14} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-arrow"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <FiExternalLink />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{String(stat.value).padStart(2, '0')}{stat.suffix}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section tech-section">
        <div className="container tech-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="eyebrow">03 / TECHNOLOGY</span>
            <h2>Built with the <em>right tools.</em></h2>
            <p className="tech-description">
              A practical stack spanning frontend interfaces, backend systems,
              databases, DevOps, and AI/LLM integrations.
            </p>
            <Link to="/about" className="text-link">Explore my stack <FiArrowRight /></Link>
          </motion.div>

          <motion.div
            className="tech-cloud"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {technologyPreview.map((tech) => (
              <motion.span key={tech.name} variants={reveal}>
                <TechIcon name={tech.name} size={16} />
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="eyebrow">04 / LET'S CONNECT</span>
            <h2>Have an idea?<br /><em>Let's build it.</em></h2>
            <Link to="/contact" className="btn btn-primary">Start a conversation <FiArrowRight /></Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
