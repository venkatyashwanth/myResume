import { Clock3, Files, Layers3 } from 'lucide-react'
import SummaryCard from '../SummaryCard/SummaryCard.jsx'
import { formatDate } from '../../../utils/formatDate.js'
import styles from './DashboardSummary.module.scss'

function DashboardSummary({ resumes, templateCount }) {
  const latestResume = resumes.reduce((latest, resume) => {
    if (!latest || resume.updatedAt > latest.updatedAt) {
      return resume
    }

    return latest
  }, null)

  const summaryItems = [
    {
      label: 'Total Resumes',
      value: String(resumes.length),
      detail: resumes.length === 1 ? 'Resume in your workspace' : 'Resumes in your workspace',
      icon: Files,
      tone: 'blue',
    },
    {
      label: 'Last Edited',
      value: latestResume ? formatDate(latestResume.updatedAt) : '—',
      detail: latestResume?.title ?? 'No edits yet',
      icon: Clock3,
      tone: 'green',
    },
    {
      label: 'Available Templates',
      value: String(templateCount),
      detail: 'Styles ready to explore',
      icon: Layers3,
      tone: 'violet',
    },
  ]

  return (
    <section aria-label="Resume overview">
      <div className={styles.summary}>
        {summaryItems.map((item) => (
          <SummaryCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}

export default DashboardSummary
