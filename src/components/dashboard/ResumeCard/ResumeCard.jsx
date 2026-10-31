import { CalendarDays, FileText, Pencil, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../utils/formatDate.js'
import styles from './ResumeCard.module.scss'

function ResumeCard({ resume, onDelete }) {
  return (
    <article className={styles.card}>
      <div className={styles.preview} aria-hidden="true">
        <div className={styles.paper}>
          <span className={styles.previewAvatar} />
          <span className={`${styles.previewLine} ${styles.previewTitle}`} />
          <span className={styles.previewLine} />
          <span className={`${styles.previewLine} ${styles.previewShort}`} />
          <span className={`${styles.previewLine} ${styles.previewSection}`} />
          <span className={styles.previewLine} />
          <span className={`${styles.previewLine} ${styles.previewShort}`} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <div className={styles.fileIcon}>
            <FileText aria-hidden="true" size={17} />
          </div>
          <h3 className={styles.title} title={resume.title}>
            {resume.title}
          </h3>
        </div>

        <p className={styles.modified}>
          <CalendarDays aria-hidden="true" size={14} />
          <span>Edited {formatDate(resume.updatedAt)}</span>
        </p>

        <div className={styles.cardFooter}>
          <span className={styles.template}>{resume.template}</span>
          <div className={styles.actions}>
            <Link
              className={styles.actionButton}
              to="/create-resume"
              aria-label={`Edit ${resume.title}`}
              title="Edit resume"
            >
              <Pencil aria-hidden="true" size={16} />
            </Link>
            <button
              className={`${styles.actionButton} ${styles.deleteButton}`}
              type="button"
              aria-label={`Delete ${resume.title}`}
              title="Delete resume"
              onClick={() => onDelete(resume.id)}
            >
              <Trash2 aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ResumeCard
