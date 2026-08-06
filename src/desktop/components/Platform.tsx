import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function Platform() {
  const { t } = useApp()

  return (
    <section id="platform" className="section section--tight">
      <div className="wrap">
        <div className="platform">
          <img className="platform__bg" src={site.images.platform} alt="" />
          <div className="platform__scrim" aria-hidden />
          <div className="platform__inner platform__inner--minimal">
            <div>
              <div className="platform__chip">{t.platBadge}</div>
              <h2 className="platform__title">{t.platTitle}</h2>
              <p className="platform__sub">{t.platTeaser}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
