import { Link, NavLink } from 'react-router-dom'
import { PanelLeftClose, PanelLeftOpen, X } from 'lucide-react'
import { navigationItems } from '../../../constants/navigation.js'
import styles from './Sidebar.module.scss'

function Sidebar({
  isCollapsed,
  isMobileOpen,
  onClose,
  onNavigate,
  onToggleCollapse,
}) {
  return (
    <aside
      id="primary-navigation"
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''} ${
        isMobileOpen ? styles.mobileOpen : ''
      }`}
      aria-label="Primary navigation"
    >
      <div className={styles.brandRow}>
        <Link
          className={styles.brand}
          to="/"
          aria-label="Resume Maker home"
          onClick={onNavigate}
        >
          <span className={styles.brandFull}>Resume Maker</span>
          <span className={styles.brandMark} aria-hidden="true">
            RM
          </span>
        </Link>
        <button
          type="button"
          className={styles.mobileClose}
          aria-label="Close navigation"
          onClick={onClose}
        >
          <X aria-hidden="true" size={18} />
        </button>
      </div>

      <nav className={styles.navigation} aria-label="Main menu">
        {navigationItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `${styles.navigationLink} ${isActive ? styles.active : ''}`
            }
            aria-label={label}
            data-tooltip={label}
            onClick={onNavigate}
          >
            <Icon className={styles.navigationIcon} aria-hidden="true" size={20} />
            <span className={styles.navigationLabel}>{label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className={styles.collapseToggle}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        aria-pressed={isCollapsed}
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        onClick={onToggleCollapse}
      >
        {isCollapsed ? (
          <PanelLeftOpen aria-hidden="true" size={16} />
        ) : (
          <PanelLeftClose aria-hidden="true" size={16} />
        )}
      </button>
    </aside>
  )
}

export default Sidebar
