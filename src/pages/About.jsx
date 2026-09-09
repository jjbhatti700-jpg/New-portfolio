import { motion } from 'framer-motion'
import { FiDownload, FiMapPin, FiMail, FiBookOpen, FiExternalLink, FiAward } from 'react-icons/fi'
import TechIcon from '../components/TechIcon'
import { skills, personalInfo, aboutMe, certifications } from '../data/projects'
import './About.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.055 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  const skillCategories = [
    { id: 'backend', label: 'Backend Development', color: '#06b6d4' },
    { id: 'frontend', label: 'Frontend Development', color: '#a855f7' },
    { id: 'languages', label: 'Languages', color: '#f59e0b' },
    { id: 'databases', label: 'Databases', color: '#22c55e' },
    { id: 'ai', label: 'AI / LLM', color: '#ec4899' },
    { id: 'devops', label: 'DevOps & Tools', color: '#38bdf8' },
  ]

  return (
    <main className="about-page">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42 }}
          >
            <span className="section-label">About Me</span>
            <h1>Crafting Digital <span className="gradient-text">Experiences</span></h1>
            <p className="about-intro">{aboutMe.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-visual"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
            >
              <div className="visual-card">
                 <div className="visual-avatar">
  <img src="/images/profile.png" alt="Junaid Abbas" loading="lazy" />
</div>
                <div className="visual-info">
                  <h3>{personalInfo.name}</h3>
                  <p>{personalInfo.role}</p>
                </div>
                <div className="visual-details">
                  <div className="detail-item">
                    <FiMapPin />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="detail-item">
                    <FiBookOpen />
                    <span>{personalInfo.university}</span>
                  </div>
                  <div className="detail-item">
                    <FiMail />
                    <span>{personalInfo.email}</span>
                  </div>
                </div>
                <div className="profile-downloads">
                  <a href={personalInfo.cvPath} className="btn btn-primary" download>
                    <FiDownload /> Download CV
                  </a>
                  <a href={personalInfo.resumePath} className="btn btn-ghost" download>
                    <FiDownload /> Download Resume
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
            >
              <h2>My <span className="gradient-text">Journey</span></h2>
              
              <div className="story-text">
                {aboutMe.story.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="story-highlight">
                <h3>What Drives Me</h3>
                <p>{aboutMe.passion}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section experience-section">
        <div className="container">
          <motion.div
            className="section-header about-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div>
              <span className="section-label">Experience</span>
              <h2>Built in the <span className="gradient-text">real world</span></h2>
            </div>
            <p className="section-header-note">Backend systems, APIs, authentication and full-stack delivery across internship and personal work.</p>
          </motion.div>

          <div className="experience-list">
            {[
              {
                period: 'Jun 2026 — Jul 2026',
                role: 'Backend Development Intern',
                company: 'DevelopersHub Corporation',
                summary: 'Built a full-stack eCommerce application and a standalone Bookstore REST API using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB Atlas, with JWT authentication, bcrypt, protected routes, search, pagination, CRUD, validation, and wishlist functionality.',
                stack: ['Node.js', 'Express.js', 'React.js', 'Tailwind CSS', 'MongoDB Atlas', 'JWT Authentication', 'bcrypt']
              },
              {
                period: 'May 2026 — Jun 2026',
                role: 'Backend Development Intern',
                company: 'DecodeLabs',
                summary: 'Completed four sequential backend projects covering REST APIs, SQLite CRUD, JWT/bcrypt authentication, and third-party OpenWeatherMap API integration using Axios.',
                stack: ['Node.js', 'Express.js', 'SQLite', 'Axios / API Integration', 'JWT Authentication', 'bcrypt']
              }
            ].map((item, index) => (
              <motion.article
                key={item.company}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.38 }}
              >
                <div className="experience-marker">0{index + 1}</div>
                <div className="experience-main">
                  <div className="experience-topline">
                    <span className="experience-period">{item.period}</span>
                    <span className="experience-line" />
                  </div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-summary">{item.summary}</p>
                  <div className="experience-stack">
                    {item.stack.map((tech) => (
                      <span key={tech}><TechIcon name={tech} size={14} />{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">My Arsenal</span>
            <h2>Technologies I <span className="gradient-text">Work With</span></h2>
          </motion.div>

          <div className="skills-container">
            {skillCategories.map((category, catIndex) => (
              <motion.div 
                key={category.id}
                className="skill-category"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="category-title" style={{ '--cat-color': category.color }}>
                  <span className="category-dot" />
                  {category.label}
                </h3>
                <div className="category-skills">
                  {skills[category.id]?.map((skill, index) => {
                    return (
                      <motion.div 
                        key={skill.name}
                        className="skill-item"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, y: -3 }}
                      >
                        <span className="skill-icon">
                          <TechIcon name={skill.name} size={22} />
                        </span>
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section certifications-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Achievements</span>
            <h2>Certifications & <span className="gradient-text">Credentials</span></h2>
          </motion.div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.id}
                className="cert-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="cert-icon">
                  <FiAward size={32} />
                </div>
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>
                  {cert.verifyUrl && (
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="cert-badge-link"
                    >
                      <FiExternalLink size={16} />
                      {cert.hasDigitalBadge ? 'View Digital Badge' : 'Verify Credential'}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section education-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Education</span>
            <h2>Academic <span className="gradient-text">Background</span></h2>
          </motion.div>

          <motion.div 
            className="education-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="edu-icon">
              <FiBookOpen size={32} />
            </div>
            <div className="edu-content">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="edu-institution">{personalInfo.university}</p>
              <p className="edu-location">{personalInfo.location}</p>
              <p className="edu-description">
                Currently pursuing my degree with a focus on software development, 
                data structures, algorithms, and web technologies. Actively building 
                projects to apply theoretical knowledge in practical scenarios.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
