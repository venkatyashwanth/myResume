import { ArrowRight, FilePlus2, LayoutTemplate } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './EmptyResumesState.module.scss'

function EmptyResumesState() {
  return (
    <div className={styles.emptyState}>
      <div className={styles.iconWrap}>
        <FilePlus2 aria-hidden="true" size={25} />
      </div>
      <h3 className={styles.title}>Your next opportunity starts here</h3>
      <p className={styles.description}>
        Create your first resume to bring your experience and strengths together.
      </p>
      <div className={styles.actions}>
        <Link className={styles.primaryAction} to="/create-resume">
          <FilePlus2 aria-hidden="true" size={16} />
          Create New Resume
        </Link>
        <Link className={styles.templateAction} to="/templates">
          <LayoutTemplate aria-hidden="true" size={16} />
          Browse templates
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </div>
  )
}

export default EmptyResumesState
