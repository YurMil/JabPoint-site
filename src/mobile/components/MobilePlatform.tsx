import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'
import { scrollToSection } from '../../hooks/useActiveSection'

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
          <p className="m-platform__sub">{t.platSub}</p>
          <p className="m-platform__sub">{t.platFuture}</p>
          <div className="m-platform__actions">
            <button type="button" className="m-btn m-btn--invert" onClick={() => scrollToSection('contact')}>
              {t.platCta}
            </button>
            <span className="m-platform__note">{t.platNote}</span>
          </div>
          <div className="m-platform__features">
            {t.platFeatures.map((f) => (
              <div key={f.t} className="m-feature">
                <span className="m-feature__mark" aria-hidden />
                <div>
                  <div className="m-feature__t">{f.t}</div>
                  <div className="m-feature__d">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
