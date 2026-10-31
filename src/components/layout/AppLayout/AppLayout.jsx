import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import styles from './AppLayout.module.scss'

function AppLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  return (
    <div
      className={styles.layout}
      data-sidebar-collapsed={isSidebarCollapsed}
    >
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={() => setIsMobileMenuOpen(false)}
        onToggleCollapse={() =>
          setIsSidebarCollapsed((isCollapsed) => !isCollapsed)
        }
      />
      {isMobileMenuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close navigation"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className={styles.contentColumn}>
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          onMenuToggle={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        />
        <main className={styles.mainContent} id="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
