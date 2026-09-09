import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div className="notfound-grid" aria-hidden="true" />
      <div className="notfound-orb" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="notfound-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="notfound-kicker">ERROR / 404</p>

          <div className="notfound-code" aria-label="404">
            <span>4</span>
            <span className="zero">0</span>
            <span>4</span>
          </div>

          <div className="notfound-copy">
            <p className="notfound-label">SIGNAL LOST</p>
            <h1>This page doesn't exist.</h1>
            <p>
              The route you're looking for has moved, disappeared, or never existed.
              Let's get you back to the portfolio.
            </p>
          </div>

          <div className="notfound-actions">
            <Link to="/" className="notfound-primary">
              RETURN HOME <FiArrowUpRight aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="notfound-secondary"
              onClick={() => window.history.back()}
            >
              <FiArrowLeft aria-hidden="true" /> BACK
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
