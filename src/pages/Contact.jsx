import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, 
  FiAlertCircle, FiUser, FiMessageSquare 
} from 'react-icons/fi'
import { personalInfo } from '../data/projects'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xreljadj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const data = await response.json()
        console.error('Formspree error:', data)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Submit error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <FiMapPin size={24} />,
      label: 'Location',
      value: personalInfo.location,
      href: null
    },
    {
      icon: <FiGithub size={24} />,
      label: 'GitHub',
      value: 'jjbhatti700-jpg',
      href: personalInfo.github
    },
    {
      icon: <FiLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'junaidabbas0',
      href: personalInfo.linkedin
    }
  ]

  return (
    <main className="contact-page">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42 }}
          >
            <span className="section-label">Get In Touch</span>
            <h1>Let's Build <span className="gradient-text">Together</span></h1>
            <p>
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Drop me a message and let's create something amazing!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Info Side */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42 }}
            >
              <h2>Contact <span className="gradient-text">Information</span></h2>
              <p className="info-subtitle">
                Feel free to reach out through any of these channels.
                For project inquiries, collaborations, or technical conversations, send a message below.
              </p>

              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.label}
                    className="info-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-text">
                      <span className="info-label">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} {...(!info.href.startsWith('mailto:') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-socials">
                <h4>Follow Me</h4>
                <div className="social-links">
                  <motion.a 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <FiGithub size={22} />
                  </motion.a>
                  <motion.a 
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <FiLinkedin size={22} />
                  </motion.a>
                  <motion.a 
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <FiMail size={22} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, delay: 0.08 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Me a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser size={16} />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail size={16} />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FiMessageSquare size={16} />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare size={16} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hi..."
                    rows="6"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary btn-submit ${status}`}
                  disabled={status === 'loading'}
                >
                  {status === 'idle' && (
                    <>Send Message <FiSend size={18} /></>
                  )}
                  {status === 'loading' && (
                    <><span className="spinner" /> Sending...</>
                  )}
                  {status === 'success' && (
                    <>Message Sent! <FiCheck size={18} /></>
                  )}
                  {status === 'error' && (
                    <>Failed. Try Again <FiAlertCircle size={18} /></>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p 
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p 
                    className="error-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ❌ Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}