/** Brand social icons — standard outline SVGs, currentColor for theming. */

type IconProps = { className?: string }

export function IconInstagram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.35" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.55" cy="6.45" r="1.15" fill="currentColor" />
    </svg>
  )
}

export function IconTikTok({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.2 3.2c.5 2.4 2.1 4.1 4.5 4.5v2.6c-1.6.1-3-.4-4.2-1.3v5.7c0 3.3-2.5 5.7-5.7 5.7S3 17.9 3 14.7s2.6-5.7 5.8-5.7c.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.1-.9-.1-1.7 0-3 1.4-3 3.1s1.3 3 3 3 2.9-1.3 2.9-3V3.2h2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconTelegram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21.5 4.3 3.9 11c-1.2.5-1.2 1.1-.2 1.4l4.5 1.4 1.7 5.3c.2.7.4.9 1 .9.6 0 .9-.3 1.2-.6l2.6-2.5 5.4 4c1 .5 1.7.2 1.9-1L22.9 5.5c.3-1.2-.5-1.8-1.4-1.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.5A9.5 9.5 0 0 0 4.3 16.7L3 21l4.4-1.2A9.5 9.5 0 1 0 12 2.5Zm5.3 13.5c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.8-.3-1.4-.5-2.4-1-4-3.5-4.1-3.7-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.3c.3-.2.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.1.3.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.6.3.1.2.1.9-.1 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconYouTube({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22.2 7.6a2.8 2.8 0 0 0-2-2C18.4 5.2 12 5.2 12 5.2s-6.4 0-8.2.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.4 12a29 29 0 0 0 .4 4.4 2.8 2.8 0 0 0 2 2c1.8.4 8.2.4 8.2.4s6.4 0 8.2-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22.6 12a29 29 0 0 0-.4-4.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 9.6v4.8L14.4 12 10 9.6Z" fill="currentColor" />
    </svg>
  )
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.1 8.8h2.2V6.2h-2.2c-2.5 0-4.1 1.6-4.1 4.3V12H7.8v2.7h2.2V22h2.9v-7.3h2.5l.5-2.7h-3V10.7c0-1 .3-1.9 1.2-1.9Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconLinkedIn({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.4 9.3H3.7V20h2.7V9.3ZM5.05 4A1.6 1.6 0 1 0 5.06 7.2 1.6 1.6 0 0 0 5.05 4ZM20.3 20h-2.7v-5.5c0-1.5-.6-2.5-2-2.5-1 0-1.6.7-1.9 1.3-.1.3-.1.6-.1.9V20H11V9.3h2.6v1.5c.5-.8 1.5-1.9 3.5-1.9 2.5 0 4.2 1.6 4.2 5.1V20Z"
        fill="currentColor"
      />
    </svg>
  )
}
