import { ChevronRight, Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { navigationItems } from '../../../constants/navigation.js'
import styles from './Header.module.scss'

function Header({ isMobileMenuOpen, onMenuToggle }) {
  const { pathname } = useLocation()
  const currentPath = pathname.replace(/\/+$/, '') || '/'
  const currentPage =
    navigationItems.find(
      (item) =>
        item.path === currentPath ||
        (item.path === '/create-resume' &&
          currentPath.startsWith('/create-resume/')),
    ) ?? navigationItems[0]
  const isDashboard = currentPage.path === '/'

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.mobileMenuButton}
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="primary-navigation"
        onClick={onMenuToggle}
      >
        <Menu aria-hidden="true" size={20} />
      </button>

      <div className={styles.heading}>
        <h1 className={styles.title}>{currentPage.label}</h1>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <ol>
            {isDashboard ? (
              <li aria-current="page">Dashboard</li>
            ) : (
              <>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li className={styles.separator} aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li aria-current="page">{currentPage.label}</li>
              </>
            )}
          </ol>
        </nav>
      </div>
    </header>
  )
}

export default Header
