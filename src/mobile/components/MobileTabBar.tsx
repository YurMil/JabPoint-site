import { useApp } from '../../hooks/useApp'
import {
  IconContact,
  IconHome,
  IconHow,
  IconPlatform,
  IconServices,
} from './icons'

type Tab = {
  id: string
  label: string
  Icon: typeof IconHome
}

type Props = {
  activeId: string
  onNavigate: (id: string) => void
}

export function MobileTabBar({ activeId, onNavigate }: Props) {
  const { t } = useApp()

  const tabs: Tab[] = [
    { id: 'top', label: t.tabs.home, Icon: IconHome },
    { id: 'services', label: t.tabs.services, Icon: IconServices },
    { id: 'platform', label: t.tabs.platform, Icon: IconPlatform },
    { id: 'how', label: t.tabs.how, Icon: IconHow },
    { id: 'contact', label: t.tabs.contact, Icon: IconContact },
  ]

  return (
    <nav className="m-tabbar" aria-label="Primary">
      {tabs.map(({ id, label, Icon }) => {
        const active = activeId === id
        return (
          <button
            key={id}
            type="button"
            className={`m-tabbar__item${active ? ' is-active' : ''}`}
            onClick={() => onNavigate(id)}
            aria-current={active ? 'page' : undefined}
          >
            <Icon className="m-tabbar__icon" />
            <span className="m-tabbar__label">{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
