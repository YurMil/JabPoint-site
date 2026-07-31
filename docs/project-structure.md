# Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages CI
├── docs/                          # This documentation
├── public/img/                    # Static images (copied to dist as-is)
├── prototype/                     # Original HTML prototype (not built)
├── src/
│   ├── App.tsx                    # Viewport shell switch + Suspense
│   ├── App.mode.test.tsx          # Integration tests for shell switching
│   ├── main.tsx                   # React root
│   ├── vite-env.d.ts
│   ├── components/
│   │   └── AppProvider.tsx        # Lang/theme context provider
│   ├── data/
│   │   ├── site.ts                # Brand, contacts, images, storage keys
│   │   └── i18n.ts                # ET / EN / RU copy dictionaries
│   ├── desktop/
│   │   ├── DesktopApp.tsx
│   │   ├── desktop.css
│   │   └── components/            # Header, Hero, Services, …
│   ├── mobile/
│   │   ├── MobileApp.tsx
│   │   ├── mobile.css
│   │   └── components/            # TopBar, TabBar, sheets, sections, icons
│   ├── hooks/
│   │   ├── useApp.ts
│   │   ├── useIsMobile.ts         # useViewportMode + useIsMobile
│   │   ├── useActiveSection.ts    # Mobile tab highlight + scroll helper
│   │   └── *.test.ts
│   ├── viewport/
│   │   ├── mode.ts                # Pure hysteresis / breakpoint policy
│   │   └── mode.test.ts
│   ├── styles/
│   │   └── tokens.css             # Shared design tokens
│   └── test/
│       ├── setup.ts               # Vitest/jsdom stubs
│       └── helpers/viewport.ts    # resizeTo() for mode tests
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig*.json
```

## Entry points

| File | Role |
|------|------|
| `index.html` | Document shell, Google Fonts, `viewport-fit=cover`, theme-color |
| `src/main.tsx` | Mounts provider + app; imports shared `tokens.css` |
| `src/App.tsx` | Lazy-loads the active shell |

## NPM scripts

| Script | Command | Use |
|--------|---------|-----|
| `dev` | `vite` | Local development server |
| `build` | `tsc -b && vite build` | Typecheck + production bundle |
| `preview` | `vite preview` | Serve `dist/` locally |
| `test` | `vitest run` | CI-style test run |
| `test:watch` | `vitest` | Watch mode |
| `deploy` | build + `gh-pages -d dist` | Manual Pages publish |

## Build output

Vite emits separately chunked assets for desktop and mobile:

- `DesktopApp-*.js` / `DesktopApp-*.css`
- `MobileApp-*.js` / `MobileApp-*.css`
- shared `index-*.js` / `tokens` CSS

`base: './'` in `vite.config.ts` keeps relative asset URLs suitable for GitHub Pages project sites.
