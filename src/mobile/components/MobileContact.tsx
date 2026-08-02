import { LocationMap } from '../../components/LocationMap'
import { QuickContacts } from '../../components/QuickContacts'
import { SocialLinks } from '../../components/SocialLinks'
import { site } from '../../data/site'
import { useApp } from '../../hooks/useApp'
import { IconChevron, IconPhone } from './icons'

export function MobileContact() {
  const { t, lang } = useApp()
  const { contact, brand, location, year } = site

  const rows = [
    {
      label: t.contactLabels.phone,
      value: contact.phone.value,
      href: contact.phone.href as string | undefined,
      external: false,
    },
    {
      label: t.contactLabels.email,
      value: contact.email.value,
      href: contact.email.href as string | undefined,
      external: false,
    },
    {
      label: t.contactLabels.address,
      value: contact.address[lang],
      href: site.maps.openUrl as string | undefined,
      external: true,
    },
    {
      label: t.contactLabels.hours,
      value: contact.hours[lang],
      href: undefined as string | undefined,
      external: false,
    },
  ]

  return (
    <section id="contact" className="m-section">
      <div className="m-section__kicker">05 — {t.navContact}</div>
      <h2 className="m-section__title">{t.contactTitle}</h2>
      <p className="m-section__sub">{t.contactSub}</p>

      <div className="m-contact-list">
        {rows.map((row) =>
          row.href ? (
            <a
              key={row.label}
              className="m-contact-row"
              href={row.href}
              {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
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

      <QuickContacts className="m-quick-contacts" />

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

      <LocationMap className="m-map" />

      <footer className="m-footer">
        © {year} {brand} {location} — {t.footer}
      </footer>
    </section>
  )
}
