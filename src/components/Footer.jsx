import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { personalInfo } from '../data/projects'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-glow" />
      
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Junaid</span>
              <span className="logo-slash">/</span>
              <span className="logo-bracket">&gt;</span>
            </Link>
            <p className="footer-tagline">
              Full Stack Developer crafting modern web experiences with passion and precision.
            </p>
            <div className="footer-socials">
              <motion.a 
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                whileHover={{ y: -4, scale: 1.1 }}
                aria-label="Email"
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>{personalInfo.location}</li>
              <li>{personalInfo.university}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom footer-bottom-minimal">
          <span aria-hidden="true" />
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
