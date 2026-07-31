# Testing

## Tooling

- **Vitest** (Vite-native)
- **jsdom** environment
- **Testing Library** (`@testing-library/react`, `jest-dom` matchers)
- Setup: [`src/test/setup.ts`](../src/test/setup.ts) — stubs `IntersectionObserver` and `matchMedia`

## Commands

```bash
npm test          # single run
npm run test:watch
```

## Suites

| File | What it verifies |
|------|------------------|
| `src/viewport/mode.test.ts` | Hysteresis band and initial split |
| `src/hooks/useIsMobile.test.ts` | Debounced transitions, burst resize, `useIsMobile` mirror |
| `src/App.mode.test.tsx` | Real App mounts desktop vs mobile shells and switches smartly |
| `src/hooks/useActiveSection.test.ts` | `scrollToSection` behaviour |

## Helpers

`src/test/helpers/viewport.ts` → `resizeTo(width)` sets `window.innerWidth` / `innerHeight` and dispatches `resize`. Mode-hook tests use Vitest fake timers with `VIEWPORT.debounceMs`.

## Writing new tests

1. Prefer pure functions (`resolveViewportMode`) for policy changes.
2. For shell UI, assert distinctive landmarks (`navigation` name `Main` vs `Primary`) or root classes (`.jp-desktop` / `.m-app`).
3. Keep `src/test` excluded from `tsconfig.app.json` production typecheck; Vitest still typechecks via Vite.

## CI expectation

`npm test` should pass before `npm run build`. The GitHub Pages workflow currently builds only; add a test step there if you want CI gates on PRs.
