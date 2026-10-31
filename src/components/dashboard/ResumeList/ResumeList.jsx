import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import EmptyResumesState from '../EmptyResumesState/EmptyResumesState.jsx'
import ResumeCard from '../ResumeCard/ResumeCard.jsx'
import styles from './ResumeList.module.scss'

function ResumeList({ resumes, onDeleteResume }) {
  return (
    <section className={styles.section} aria-labelledby="recent-resumes-title">
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.title} id="recent-resumes-title">
            Recent Resumes
          </h2>
          <p className={styles.description}>
            Pick up where you left off.
          </p>
        </div>
        {resumes.length > 0 && (
          <Link className={styles.viewAll} to="/resumes">
            View all
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        )}
      </div>

      {resumes.length === 0 ? (
        <EmptyResumesState />
      ) : (
        <div className={styles.grid} aria-live="polite">
          {resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              onDelete={onDeleteResume}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ResumeList
