import { SocialLinks } from '../../components/SocialLinks'
import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'

export function Contact() {
  const { t, lang } = useApp()
  const { contact, images, brand, location } = site

  const items = [
    {
      label: t.contactLabels.phone,
      value: contact.phone.value,
      href: contact.phone.href,
    },
    {
      label: t.contactLabels.email,
      value: contact.email.value,
      href: contact.email.href,
    },
    {
      label: t.contactLabels.address,
      value: contact.address[lang],
      href: '#contact',
    },
    {
      label: t.contactLabels.hours,
      value: contact.hours[lang],
      href: '#contact',
    },
  ]

  return (
    <section id="contact" className="section section--contact">
      <div className="wrap contact-grid">
        <div className="contact-card">
          <div className="section-kicker">03 — {t.navContact}</div>
          <h2 className="contact-card__title">{t.contactTitle}</h2>
          <p className="contact-card__sub">{t.contactSub}</p>
          <div className="contact-list">
            {items.map((c) => (
              <div key={c.label}>
                <div className="contact-item__label">{c.label}</div>
                <a className="contact-item__value" href={c.href}>
                  {c.value}
                </a>
              </div>
            ))}
          </div>
          <div className="contact-social">
            <div className="contact-item__label">{t.socialLabel}</div>
            <SocialLinks label={t.socialLabel} />
          </div>
        </div>

        <div className="contact-map">
          <img src={images.building} alt="" />
          <div className="contact-map__scrim" aria-hidden />
          <div className="contact-map__caption">
            <div className="contact-map__title">{t.mapTitle || `${brand} ${location}`}</div>
            <div className="contact-map__sub">{t.mapSub}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
