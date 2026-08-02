import { LocationMap } from '../../components/LocationMap'
import { QuickContacts } from '../../components/QuickContacts'
import { SocialLinks } from '../../components/SocialLinks'
import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function Contact() {
  const { t, lang } = useApp()
  const { contact } = site

  const items = [
    {
      label: t.contactLabels.phone,
      value: contact.phone.value,
      href: contact.phone.href as string | undefined,
    },
    {
      label: t.contactLabels.email,
      value: contact.email.value,
      href: contact.email.href as string | undefined,
    },
    {
      label: t.contactLabels.address,
      value: contact.address[lang],
      href: site.maps.openUrl as string | undefined,
    },
    {
      label: t.contactLabels.hours,
      value: contact.hours[lang],
      href: undefined as string | undefined,
    },
  ]

  return (
    <section id="contact" className="section section--contact">
      <div className="wrap contact-grid">
        <div className="contact-card">
          <div className="section-kicker">05 — {t.navContact}</div>
          <h2 className="contact-card__title">{t.contactTitle}</h2>
          <p className="contact-card__sub">{t.contactSub}</p>
          <div className="contact-list">
            {items.map((c) => (
              <div key={c.label}>
                <div className="contact-item__label">{c.label}</div>
                {c.href ? (
                  <a
                    className="contact-item__value"
                    href={c.href}
                    {...(c.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {c.value}
                  </a>
                ) : (
                  <div className="contact-item__value">{c.value}</div>
                )}
              </div>
            ))}
          </div>
          <QuickContacts />
          <div className="contact-social">
            <div className="contact-item__label">{t.socialLabel}</div>
            <SocialLinks label={t.socialLabel} />
          </div>
        </div>

        <LocationMap className="contact-map" />
      </div>
    </section>
  )
}
