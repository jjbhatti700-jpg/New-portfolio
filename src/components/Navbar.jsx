import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineArrowRight } from 'react-icons/hi'
import { personalInfo } from '../data/projects'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Work' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" aria-label="Junaid Abbas home">
            <span className="logo-mark">J</span>
            <span className="logo-name">Junaid Abbas</span>
          </Link>

          <div className="navbar-center">
            <ul className="navbar-links">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <li key={link.path}>
                    <Link to={link.path} className={`nav-link ${active ? 'active' : ''}`}>
                      <span>{link.label}</span>
                      {active && (
                        <motion.span
                          className="nav-indicator"
                          layoutId="navIndicator"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="navbar-right">
            <div className="nav-docs">
              <a href={personalInfo.cvPath} className="nav-cv" download>CV</a>
              <a href={personalInfo.resumePath} className="nav-cv nav-resume" download>Resume</a>
            </div>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiOutlineX size={23} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mobile-menu-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu-label">NAVIGATION</div>
              <ul className="mobile-links">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{link.label}</strong>
                      <HiOutlineArrowRight size={20} />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-docs">
                <a href={personalInfo.cvPath} className="mobile-cv" download>Download CV <HiOutlineArrowRight size={18} /></a>
                <a href={personalInfo.resumePath} className="mobile-cv" download>Download Resume <HiOutlineArrowRight size={18} /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
