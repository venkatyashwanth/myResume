import { useState } from 'react'
import DashboardIntro from '../../components/dashboard/DashboardIntro/DashboardIntro.jsx'
import DashboardSummary from '../../components/dashboard/DashboardSummary/DashboardSummary.jsx'
import ResumeList from '../../components/dashboard/ResumeList/ResumeList.jsx'
import { mockResumes, templateCount } from './mockResumes.js'
import styles from './Dashboard.module.scss'

function Dashboard() {
  const [resumes, setResumes] = useState(mockResumes)

  function handleDeleteResume(resumeId) {
    setResumes((currentResumes) =>
      currentResumes.filter((resume) => resume.id !== resumeId),
    )
  }

  return (
    <div className={styles.dashboard}>
      <DashboardIntro />
      <DashboardSummary resumes={resumes} templateCount={templateCount} />
      <ResumeList resumes={resumes} onDeleteResume={handleDeleteResume} />
    </div>
  )
}

export default Dashboard
