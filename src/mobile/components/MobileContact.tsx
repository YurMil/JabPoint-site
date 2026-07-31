import { SocialLinks } from '../../components/SocialLinks'
import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'
import { IconChevron, IconPhone } from './icons'

export function MobileContact() {
  const { t, lang } = useApp()
  const { contact, images, brand, location, year } = site

  const rows = [
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
      href: undefined,
    },
    {
      label: t.contactLabels.hours,
      value: contact.hours[lang],
      href: undefined,
    },
  ]

  return (
    <section id="contact" className="m-section">
      <div className="m-section__kicker">03 — {t.navContact}</div>
      <h2 className="m-section__title">{t.contactTitle}</h2>
      <p className="m-section__sub">{t.contactSub}</p>

      <div className="m-contact-list">
        {rows.map((row) =>
          row.href ? (
            <a key={row.label} className="m-contact-row" href={row.href}>
              <div>
                <div className="m-contact-row__label">{row.label}</div>
                <div className="m-contact-row__value">{row.value}</div>
              </div>
              <IconChevron className="m-contact-row__chev" />
            </a>
          ) : (
            <div key={row.label} className="m-contact-row m-contact-row--static">
              <div>
                <div className="m-contact-row__label">{row.label}</div>
                <div className="m-contact-row__value">{row.value}</div>
              </div>
            </div>
          ),
        )}
      </div>

      <a className="m-call" href={contact.phone.href}>
        <IconPhone className="m-call__icon" />
        <span>
          {t.callUs}
          <strong>{contact.phone.value}</strong>
        </span>
      </a>

      <div className="m-social">
        <div className="m-contact-row__label">{t.socialLabel}</div>
        <SocialLinks label={t.socialLabel} />
      </div>

      <div className="m-map">
        <img src={images.building} alt="" />
        <div className="m-map__scrim" aria-hidden />
        <div className="m-map__caption">
          <div className="m-map__title">{t.mapTitle || `${brand} ${location}`}</div>
          <div className="m-map__sub">{t.mapSub}</div>
        </div>
      </div>

      <p className="m-footer">
        © {year} {brand} {location} — {t.footer}
      </p>
    </section>
  )
}
