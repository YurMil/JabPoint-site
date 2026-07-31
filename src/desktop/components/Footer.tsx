import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'
import { SocialLinks } from '../../components/SocialLinks'

export function Footer() {
  const { t } = useApp()

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <img className="footer__logo" src={site.images.logo} alt="" />
        <span className="footer__copy">
          © {site.year} {site.brand} {site.location} — {t.footer}
        </span>
        <SocialLinks className="footer__social" label={t.socialLabel} />
        <span className="footer__langs">
          {site.langs.map((l) => l.label).join(' · ')}
        </span>
      </div>
    </footer>
  )
}
