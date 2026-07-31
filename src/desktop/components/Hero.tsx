import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function Hero() {
  const { t } = useApp()

  return (
    <section id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="reveal">
          <div className="badge">
            <span className="badge__dot" />
            {t.heroBadge}
          </div>
          <h1 className="hero__title">
            {t.heroTitle1}
            <br />
            <span className="hero__title-accent">{t.heroTitle2}</span>
          </h1>
          <p className="hero__sub">{t.heroSub}</p>
          <div className="hero__actions">
            <a className="btn-primary" href="#contact">
              {t.heroCta1} →
            </a>
            <a className="btn-ghost" href="#platform">
              {t.heroCta2}
            </a>
          </div>
          <div className="stats">
            {t.stats.map((s) => (
              <div key={s.k + s.v}>
                <div className="stats__value">{s.k}</div>
                <div className="stats__label">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" aria-hidden />
          <div className="hero__frame">
            <img src={site.images.building} alt={`${site.brand} ${site.location}`} />
            <div className="hero__scrim" aria-hidden />
            <div className="hero__scan" aria-hidden />
            <div className="hero__tag">
              {site.brand} {site.location} · {t.heroImgTag}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
