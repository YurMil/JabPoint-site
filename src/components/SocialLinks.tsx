import type { ComponentType } from 'react'
import { site, type SocialNetwork } from '../data/site'
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconYouTube,
} from './socialIcons'

const ICONS: Record<SocialNetwork, ComponentType<{ className?: string }>> = {
  instagram: IconInstagram,
  youtube: IconYouTube,
  facebook: IconFacebook,
  linkedin: IconLinkedIn,
}

type Props = {
  className?: string
  /** Accessible group label from i18n */
  label: string
}

/** Shared social link row — URLs come from site.social in site.ts */
export function SocialLinks({ className = '', label }: Props) {
  const links = site.social.filter((s) => Boolean(s.href))

  if (!links.length) return null

  return (
    <nav className={`social-links ${className}`.trim()} aria-label={label}>
      {links.map((s) => {
        const Icon = ICONS[s.id]
        return (
          <a
            key={s.id}
            className="social-links__item"
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
          >
            <Icon className="social-links__icon" />
          </a>
        )
      })}
    </nav>
  )
}
