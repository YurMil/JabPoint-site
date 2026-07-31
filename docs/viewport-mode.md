# Viewport mode (smart desktop ↔ mobile)

Mode switching is implemented as pure policy + a React hook, then consumed by `App`.

## Constants

Defined in [`src/viewport/mode.ts`](../src/viewport/mode.ts):

| Constant | Value | Meaning |
|----------|-------|---------|
| `VIEWPORT.mobileMax` | `860` | Width ≤ this → **mobile** |
| `VIEWPORT.desktopMin` | `900` | Width ≥ this → **desktop** |
| `VIEWPORT.debounceMs` | `120` | Delay before committing a resize-driven change |

Widths in **861–899** form a **hysteresis band**: the current mode is kept. This prevents flicker when the window sits on the breakpoint edge (DevTools responsive mode, split screen, rotating tablets).

## Pure API

```ts
resolveViewportMode(width, current): 'mobile' | 'desktop'
initialViewportMode(width): 'mobile' | 'desktop'
```

- `initialViewportMode` uses a hard split at `mobileMax` (no prior mode yet).
- `resolveViewportMode` applies hysteresis for subsequent updates.

## Hook API

[`src/hooks/useIsMobile.ts`](../src/hooks/useIsMobile.ts):

| Export | Returns | Notes |
|--------|---------|-------|
| `useViewportMode()` | `'mobile' \| 'desktop'` | Preferred API used by `App` |
| `useIsMobile()` | `boolean` | Thin wrapper: `mode === 'mobile'` |

Behaviour:

1. Initialize from `window.innerWidth`.
2. On `resize` / `visualViewport.resize`, schedule a debounced commit.
3. Commit only if `resolveViewportMode` differs from the current mode.

## App wiring

```tsx
const mode = useViewportMode()
return (
  <Suspense fallback={<ShellFallback />}>
    {mode === 'mobile' ? <MobileApp /> : <DesktopApp />}
  </Suspense>
)
```

Shells are `React.lazy` imports so unused CSS/JS for the other mode is not needed on first paint after the chunk loads.

## Tuning

To change when shells swap, edit **only** `VIEWPORT` in `src/viewport/mode.ts`. Tests in `mode.test.ts` and `useIsMobile.test.ts` encode the expected band and debounce behaviour — update them together with the constants.
