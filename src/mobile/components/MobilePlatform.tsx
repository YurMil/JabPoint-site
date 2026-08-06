import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function MobilePlatform() {
  const { t } = useApp()

  return (
    <section id="platform" className="m-section m-section--flush">
      <div className="m-platform">
        <img className="m-platform__bg" src={site.images.platform} alt="" />
        <div className="m-platform__scrim" aria-hidden />
        <div className="m-platform__content">
          <div className="m-platform__chip">{t.platBadge}</div>
          <h2 className="m-platform__title">{t.platTitle}</h2>
          <p className="m-platform__sub">{t.platTeaser}</p>
        </div>
      </div>
    </section>
  )
}
