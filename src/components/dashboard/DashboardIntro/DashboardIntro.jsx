import { ArrowRight, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './DashboardIntro.module.scss'

function DashboardIntro() {
  return (
    <section className={styles.intro} aria-labelledby="welcome-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>YOUR CAREER WORKSPACE</p>
        <h2 className={styles.title} id="welcome-title">
          Welcome back
        </h2>
        <p className={styles.description}>
          Keep your experience organized and take the next step in your career.
        </p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.primaryAction} to="/create-resume">
          <Plus aria-hidden="true" size={18} />
          <span>Create New Resume</span>
        </Link>
        <Link className={styles.secondaryAction} to="/templates">
          <span>Browse templates</span>
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  )
}

export default DashboardIntro
