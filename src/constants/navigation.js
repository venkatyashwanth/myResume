import {
  FilePlus,
  FileText,
  LayoutDashboard,
  LayoutTemplate,
  Settings,
} from 'lucide-react'

export const navigationItems = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: 'My Resumes', path: '/resumes', icon: FileText },
  { label: 'Create Resume', path: '/create-resume', icon: FilePlus },
  { label: 'Templates', path: '/templates', icon: LayoutTemplate },
  { label: 'Settings', path: '/settings', icon: Settings },
]
