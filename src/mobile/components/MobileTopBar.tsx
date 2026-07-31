import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

type Props = {
  onOpenSettings: () => void
}

export function MobileTopBar({ onOpenSettings }: Props) {
  const { t, theme } = useApp()

  return (
    <header className="m-topbar">
      <a href="#top" className="m-topbar__brand">
        <img src={site.images.logo} alt="" className="m-topbar__logo" />
        <span className="m-topbar__name">
          {site.brand}
          <span className="m-topbar__dot">.</span>
        </span>
      </a>
      <button
        type="button"
        className="m-topbar__gear"
        onClick={onOpenSettings}
        aria-label={t.themeLabel}
      >
        <span className={`m-topbar__theme-dot is-${theme}`} />
      </button>
    </header>
  )
}
