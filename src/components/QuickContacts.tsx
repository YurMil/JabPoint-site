import { site } from '../data/site'
import { useApp } from '../hooks/useApp'
import { IconTelegram, IconWhatsApp } from './socialIcons'

type Props = {
  className?: string
}

/** Phone / WhatsApp / Telegram / Book Now — conversion shortcuts from contacts. */
export function QuickContacts({ className = '' }: Props) {
  const { t } = useApp()
  const { contact, booking } = site

  const items = [
    {
      id: 'phone',
      href: contact.phone.href,
      label: t.callUs,
      external: false,
      Icon: null as null | typeof IconWhatsApp,
    },
    {
      id: 'whatsapp',
      href: contact.whatsapp.href,
      label: t.whatsapp,
      external: true,
      Icon: IconWhatsApp,
    },
    {
      id: 'telegram',
      href: contact.telegram.href,
      label: t.telegram,
      external: true,
      Icon: IconTelegram,
    },
    {
      id: 'book',
      href: booking.href,
      label: t.navCta,
      external: true,
      Icon: null,
    },
  ]

  return (
    <div className={`quick-contacts ${className}`.trim()}>
      <div className="quick-contacts__label">{t.quickContactsLabel}</div>
      <div className="quick-contacts__row">
        {items.map((item) => (
          <a
            key={item.id}
            className={`quick-contacts__btn${item.id === 'book' ? ' is-primary' : ''}`}
            href={item.href}
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {item.Icon ? <item.Icon className="quick-contacts__icon" /> : null}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
