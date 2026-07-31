# Styling

## CSS loading strategy

| File | Loaded by | Scope |
|------|-----------|--------|
| `src/styles/tokens.css` | `main.tsx` (always) | Reset, CSS variables, shared keyframes |
| `src/desktop/desktop.css` | `DesktopApp` (lazy chunk) | Desktop layout/components |
| `src/mobile/mobile.css` | `MobileApp` (lazy chunk) | Mobile layout/components |

Class prefixes reduce collisions when both stylesheets exist in the browser after a mode switch during a session:

- Desktop: `.header`, `.hero`, `.service-card`, …
- Mobile: `.m-topbar`, `.m-hero`, `.m-tabbar`, …

## Design tokens

Root theme class: `.jp` (dark) / `.jp.light` (light).

Important custom properties (defined on `.jp`):

| Token | Role |
|-------|------|
| `--bg`, `--fg`, `--muted`, `--dim` | Surfaces and text hierarchy |
| `--line`, `--hair`, `--chip`, `--glass` | Borders and translucent panels |
| `--red` | Brand accent (`#E1191F`) |
| `--title-grad` | Hero gradient text |
| `--card`, `--card-hi` | Card backgrounds |
| `--scrim*` | Image overlays |
| `--safe-top`, `--safe-bottom` | iOS safe-area insets |

Both shells should prefer these variables over hard-coded colours so theme toggle stays consistent.

## Typography

Loaded in `index.html` from Google Fonts:

- **Space Grotesk** — display / headings
- **Manrope** — body
- **JetBrains Mono** — labels, badges, language chips

## Motion

Shared keyframes live in `tokens.css` (`jpPulse`, `jpFloat`, `jpScan`, `fadeUp`, sheet animations). Mobile and desktop opt into them via class names; keep motion purposeful and limited.

## Responsive rules inside desktop CSS

`desktop.css` may still contain tablet breakpoints (e.g. ≤1024px) for **desktop shell** layout density. It must not try to become the phone UI — that is `MobileApp`’s job once viewport mode is `mobile`.
