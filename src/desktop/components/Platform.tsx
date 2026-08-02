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
          <div className="platform__inner">
            <div>
              <div className="platform__chip">{t.platBadge}</div>
              <h2 className="platform__title">{t.platTitle}</h2>
              <p className="platform__sub">{t.platSub}</p>
              <p className="platform__sub">{t.platFuture}</p>
              <div className="platform__actions">
                <a className="btn-invert" href="#contact">
                  {t.platCta}
                </a>
                <span className="platform__note">{t.platNote}</span>
              </div>
            </div>
            <div className="platform__features">
              {t.platFeatures.map((f) => (
                <div key={f.t} className="feature">
                  <span className="feature__mark" aria-hidden />
                  <div>
                    <div className="feature__title">{f.t}</div>
                    <div className="feature__desc">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
