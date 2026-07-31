# Deployment

## Local production check

```bash
npm run build
npm run preview
```

Output directory: `dist/`.

## GitHub Pages (recommended)

Workflow: [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)

1. Push the repo to GitHub.
2. Repository **Settings → Pages → Source → GitHub Actions**.
3. On push to `main` / `master`, the workflow runs `npm ci` → `npm run build` → deploys the `dist` artifact.

### Base path

`vite.config.ts` uses `base: '/JabPoint-site/'` for the project Pages URL:

`https://yurmil.github.io/JabPoint-site/`

If you rename the repository, update `base` to match (`'/New-Repo-Name/'`).

## Manual publish

```bash
npm run deploy
```

Uses `gh-pages` to push `dist` to the `gh-pages` branch. Requires GitHub push credentials.

## Assets checklist

Before going live, confirm in `src/data/site.ts`:

- [ ] Real phone number and `tel:` href
- [ ] Real email and `mailto:` href
- [ ] Correct address and hours per language
- [ ] Final images in `public/img/`
- [ ] Brand/year

## Environment notes

No `.env` is required for the static site. Do not commit secrets; there is no API layer in this project.
