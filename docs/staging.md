# Staging preview (pre-release)

Alternative GitHub Pages deploy for testing **before** merging to production.

Production stays at the site root. Staging is published under **`/staging/`** on the same Pages site — not a separate public “release”.

## URLs

| Target | URL |
|--------|-----|
| Production | https://jabpoint.ee/ · https://yurmil.github.io/JabPoint-site/ |
| Staging preview | https://yurmil.github.io/JabPoint-site/staging/ · https://jabpoint.ee/staging/ |

## How it works

1. Branch **`staging`** holds the pre-release code.
2. Workflow [`.github/workflows/deploy-staging.yml`](../.github/workflows/deploy-staging.yml) runs on push to `staging` (or manual **Run workflow**).
3. It builds **main → site root** and **staging → `/staging/`**, then deploys one Pages artifact.
4. Production workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) also re-attaches `origin/staging` into `/staging/` when that branch exists, so a main deploy does not wipe the preview.

Staging builds set `VITE_STAGING=true`, which:

- shows a red **TEST / STAGING** ribbon
- adds `noindex, nofollow`
- writes `robots.txt` `Disallow: /` under `/staging/`

## First-time setup

```bash
git checkout main
git pull
git checkout -b staging
git push -u origin staging
```

Then open **Actions → Deploy staging preview** and confirm the run succeeds. Visit the staging URL above (hard-refresh if needed).

## Day-to-day

1. Commit WIP features on `staging` (or merge a feature branch into `staging`).
2. Push — preview updates at `/staging/`.
3. When ready to go live, open a PR **`staging` → `main`** (or merge main-bound PRs as usual).
4. Production deploy on `main` publishes the release at the root.

## Local staging build

```bash
VITE_STAGING=true npm run build
npm run preview
```

On Windows PowerShell:

```powershell
$env:VITE_STAGING="true"; npm run build; npm run preview
```

## Notes

- Same concurrency group (`pages`) as production — only one Pages deploy runs at a time.
- Staging is still reachable on the public internet; it is marked as test + noindex, not access-gated.
- Do not put secrets or private client data only in staging expecting privacy.
