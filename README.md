# JabPoint Tallinn

React marketing site for JabPoint (Tallinn). Languages: ET / EN / RU. Themes: dark / light.

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm test
```

## Documentation (English)

**Product / client requirements** (Stage 1 TZ, for upcoming development):

- **[`docs/product/`](docs/product/README.md)** — product brief, requirements IDs, technical assignment, acceptance criteria, roadmap, traceability, gap analysis
- Original client TZ (RU archive): [`docs/product/sources/tz_jabpoint_site.ru.md`](docs/product/sources/tz_jabpoint_site.ru.md)

**Code docs** live in **[`docs/`](docs/README.md)**:

- [Architecture](docs/architecture.md)
- [Project structure](docs/project-structure.md)
- [Content & i18n](docs/content-and-i18n.md)
- [Desktop & mobile shells](docs/desktop-and-mobile.md)
- [Viewport mode](docs/viewport-mode.md)
- [Styling](docs/styling.md)
- [Testing](docs/testing.md)
- [Deployment](docs/deployment.md)

## Where to edit content

| What | File |
|------|------|
| Phone, email, address, hours, brand, images | [`src/data/site.ts`](src/data/site.ts) |
| All copy (ET / EN / RU) | [`src/data/i18n.ts`](src/data/i18n.ts) |
| Image files | [`public/img/`](public/img/) |

## Layout at a glance

```
src/
  data/       shared content
  desktop/    desktop shell
  mobile/     native-style mobile shell
  viewport/   smart mode policy
  hooks/      shared React hooks
  styles/     design tokens
```

≤860px → `MobileApp` · ≥900px → `DesktopApp` · 861–899px hysteresis (see [viewport mode](docs/viewport-mode.md)).

## GitHub Pages

Production domain: **https://jabpoint.ee** (custom domain; repo still deploys via GitHub Pages).

Fallback / Pages URL: https://yurmil.github.io/JabPoint-site/

1. Push to GitHub (`main`).
2. **Settings → Pages → Source → GitHub Actions**.
3. **Settings → Pages → Custom domain** → `jabpoint.ee` (and enable HTTPS).
4. Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) deploys `dist` on push to `main`.

Or: `npm run deploy`.

`vite.config.ts` → `base: './'` (relative assets work on both `yurmil.github.io/JabPoint-site/` and `jabpoint.ee`).

## Prototype

Original HTML prototype: [`prototype/`](prototype/) (not part of the build).
