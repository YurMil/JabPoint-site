import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'
import { scrollToSection } from '../../hooks/useActiveSection'

export function MobileHero() {
  const { t } = useApp()

  return (
    <section id="top" className="m-hero">
      <div className="m-hero__media">
        <img src={site.images.building} alt={`${site.brand} ${site.location}`} />
        <div className="m-hero__scrim" aria-hidden />
        <div className="m-hero__badge">
          <span className="m-hero__pulse" />
          {t.heroBadge}
        </div>
      </div>

      <div className="m-hero__body">
        <h1 className="m-hero__title">
          {t.heroTitle1}{' '}
          <span className="m-hero__accent">{t.heroTitle2}</span>
        </h1>
        <p className="m-hero__sub">{t.heroSub}</p>

        <div className="m-hero__actions">
          <a
            className="m-btn m-btn--primary"
            href={site.booking.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.heroCta1}
          </a>
          <button type="button" className="m-btn m-btn--ghost" onClick={() => scrollToSection('services')}>
            {t.heroCta2}
          </button>
        </div>

        <div className="m-stats">
          {t.stats.map((s) => (
            <div key={s.k + s.v} className="m-stats__item">
              <div className="m-stats__k">{s.k}</div>
              <div className="m-stats__v">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
