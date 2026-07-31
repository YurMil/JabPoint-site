# Desktop & mobile shells

The site maintains **two independent UI codebases**. `App` mounts exactly one of them based on viewport mode.

## Comparison

| Concern | Desktop (`src/desktop`) | Mobile (`src/mobile`) |
|---------|-------------------------|------------------------|
| Root | `DesktopApp.tsx` | `MobileApp.tsx` |
| Styles | `desktop.css` (lazy with shell) | `mobile.css` (lazy with shell) |
| Navigation | Top sticky header + anchor links | Bottom tab bar + section scroll |
| Hero | Two-column grid + float animation | Full-bleed media + stacked CTAs |
| Services | 4-column / 2-column card grid | Horizontal snap carousel |
| How-it-works | Horizontal step row | Vertical timeline |
| Settings | Inline lang + theme controls | Bottom sheet from top-bar control |
| Contact CTA | Header / section buttons | Sticky call FAB + large call row |
| Safe areas | Not required | `env(safe-area-inset-*)` |

## Desktop component inventory

| Component | Section / role |
|-----------|----------------|
| `Header` | Brand, nav, language, theme, CTA |
| `Hero` | `#top` — title, CTAs, stats, building image |
| `Services` | `#services` — four service cards |
| `Platform` | `#platform` — product pitch + feature list |
| `HowItWorks` | `#how` — four steps |
| `Contact` | `#contact` — details + map-style panel |
| `Footer` | Copyright + language legend |

## Mobile component inventory

| Component | Role |
|-----------|------|
| `MobileTopBar` | Compact brand bar + settings trigger |
| `MobileTabBar` | Five-tab primary navigation with icons |
| `MobileSettingsSheet` | Theme toggle + language picker |
| `MobileHero` | `#top` |
| `MobileServices` | `#services` |
| `MobilePlatform` | `#platform` |
| `MobileHow` | `#how` |
| `MobileContact` | `#contact` + inline footer |
| `icons.tsx` | Inline SVG icons (no icon package) |

## Section IDs

Both shells use the same fragment IDs so deep links stay consistent:

`top` · `services` · `platform` · `how` · `contact`

Mobile tab highlighting is driven by `useActiveSection()` (`IntersectionObserver`). Programmatic navigation uses `scrollToSection(id)`.

## Body class

While `MobileApp` is mounted it sets `document.body.classList` → `is-mobile-shell` (overscroll behaviour and future mobile-only body rules). The class is removed on unmount (including when switching back to desktop).

## Adding a section

1. Add copy to `i18n.ts` (all languages).
2. Implement **desktop** component under `src/desktop/components/`.
3. Implement **mobile** component under `src/mobile/components/` (native layout, not a copy-paste of desktop markup).
4. Register both in `DesktopApp` / `MobileApp`.
5. If it should appear in the mobile tab bar, extend `MobileTabBar` + `tabs` in i18n and `SECTION_IDS` in `useActiveSection`.
