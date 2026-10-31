import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout/AppLayout.jsx'
import CreateResume from './pages/CreateResume/CreateResume.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import MyResumes from './pages/MyResumes/MyResumes.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Templates from './pages/Templates/Templates.jsx'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="resumes" element={<MyResumes />} />
        <Route path="create-resume" element={<CreateResume />} />
        <Route path="templates" element={<Templates />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
