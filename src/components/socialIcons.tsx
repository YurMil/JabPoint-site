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
