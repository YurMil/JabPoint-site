# Desktop & mobile shells

The site maintains **two independent UI codebases**. `App` mounts exactly one of them based on viewport mode.

## Comparison

| Concern | Desktop (`src/desktop`) | Mobile (`src/mobile`) |
|---------|-------------------------|------------------------|
| Root | `DesktopApp.tsx` | `MobileApp.tsx` |
| Styles | `desktop.css` (lazy with shell) | `mobile.css` (lazy with shell) |
| Navigation | Top sticky header + anchor links | Bottom tab bar + section scroll |
| Hero | Two-column grid + float animation | Full-bleed media + stacked CTAs |
| Services | Responsive card grid | Horizontal snap carousel |
| Community | Image + highlight list | Visual strip + list |
| How-it-works | Horizontal step row | Vertical timeline |
| Partners | Three pillars + geography band | Stacked pillars + geo CTA |
| Settings | Inline lang + theme controls | Compact ET/EN/RU chips + theme toggle in top bar |
| Contact CTA | Header / section buttons | Sticky call FAB + large call row |
| Safe areas | Not required | `env(safe-area-inset-*)` |

## Desktop component inventory

| Component | Section / role |
|-----------|----------------|
| `Header` | Brand, nav, language, theme, CTA |
| `Hero` | `#top` — title, CTAs, stats, building image |
| `Services` | `#services` — service cards |
| `Community` | `#community` — lounge / club atmosphere |
| `Platform` | `#platform` — product pitch + feature list |
| `HowItWorks` | `#how` — four steps |
| `Partners` | `#partners` — masters, brands, franchise + geography |
| `Contact` | `#contact` — details + map-style panel |
| `Footer` | Copyright + language legend |

## Mobile component inventory

| Component | Role |
|-----------|------|
| `MobileTopBar` | Compact brand bar + language chips + theme toggle |
| `MobileTabBar` | Five-tab primary navigation with icons |
| `MobileHero` | `#top` |
| `MobileServices` | `#services` |
| `MobileCommunity` | `#community` |
| `MobilePlatform` | `#platform` |
| `MobileHow` | `#how` |
| `MobilePartners` | `#partners` |
| `MobileContact` | `#contact` + inline footer |
| `icons.tsx` | Inline SVG icons (no icon package) |

## Section IDs

Both shells use the same fragment IDs so deep links stay consistent:

`top` · `services` · `community` · `platform` · `how` · `partners` · `contact`

Primary nav / mobile tabs (TZ): Services · Platform · Community · Contacts  

Mobile tab highlighting is driven by `useActiveSection()` over `SECTION_IDS` (`top`, `services`, `community`, `platform`, `contact`). Programmatic navigation uses `scrollToSection(id)`.

## Body class

While `MobileApp` is mounted it sets `document.body.classList` → `is-mobile-shell` (overscroll behaviour and future mobile-only body rules). The class is removed on unmount (including when switching back to desktop).

## Adding a section

1. Add copy to `i18n.ts` (all languages).
2. Implement **desktop** component under `src/desktop/components/`.
3. Implement **mobile** component under `src/mobile/components/` (native layout, not a copy-paste of desktop markup).
4. Register both in `DesktopApp` / `MobileApp`.
5. If it should appear in the mobile tab bar, extend `MobileTabBar` + `tabs` in i18n and `SECTION_IDS` in `useActiveSection`.
