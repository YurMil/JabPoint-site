# JabPoint Tallinn — Documentation

## Product specification (what to build)

Official Stage‑1 product pack from the client technical assignment (English):

**[`docs/product/`](./product/README.md)** — brief, requirements, technical assignment, acceptance criteria, roadmap, traceability, and current-vs-target gap analysis.

Start here before content or feature work: [Product README](./product/README.md) → [Gap analysis](./product/07-current-vs-target-gap.md).

## Code documentation (how it is built)

Structural documentation for the marketing site codebase.

| Document | Description |
|----------|-------------|
| [Architecture](./architecture.md) | High-level design, runtime flow, shared vs shell code |
| [Project structure](./project-structure.md) | Folder map and file responsibilities |
| [Content & i18n](./content-and-i18n.md) | How to edit business data and translations |
| [Desktop & mobile shells](./desktop-and-mobile.md) | Dual UI codebases and component inventory |
| [Viewport mode](./viewport-mode.md) | Smart desktop ↔ mobile switching |
| [Styling](./styling.md) | Design tokens, themes, CSS loading |
| [Testing](./testing.md) | Vitest suites and how to run them |
| [Deployment](./deployment.md) | Build, GitHub Pages, assets |

**Stack:** React 19 · TypeScript · Vite 7 · Vitest  

**Product:** Static multilingual promo / business-card site for JabPoint (automotive ecosystem hub, Tallinn) — Stage 1 of a longer platform roadmap.