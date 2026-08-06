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

### Base path & custom domain

Production site: **https://jabpoint.ee**

`vite.config.ts` uses `base: './'` so asset URLs stay relative to the HTML file. That works for:

- `https://yurmil.github.io/JabPoint-site/`
- `https://jabpoint.ee/` (after custom domain DNS + GitHub Pages CNAME)

Do **not** use `base: '/'` while the live URL is still the project Pages path — CSS/JS would 404 from `yurmil.github.io/assets/...`.

`public/CNAME` contains `jabpoint.ee` and is published with the build. Also set the same custom domain in GitHub → **Settings → Pages**.

DNS at Zone.ee typically needs:

| Type | Host | Value |
|------|------|--------|
| A | `@` | GitHub Pages IPs (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)) |
| CNAME | `www` | `yurmil.github.io` (optional www) |

After DNS propagates, turn on **Enforce HTTPS** in Pages settings.

Legacy project path `https://yurmil.github.io/JabPoint-site/` may redirect or still work depending on Pages settings; canonical SEO points to `https://jabpoint.ee/`.

### Troubleshooting: deploy job hangs, then "Timeout reached, aborting!"

Symptom: the `build` job is green, but `deploy` prints `Current status: deployment_queued`
(or `deployment_in_progress`) every 5 s until it aborts and cancels the deployment.

This is the GitHub Pages backend being slow or jammed, not a build problem. Two things keep
it from cascading:

- Both workflows use `concurrency: group: pages` with **`cancel-in-progress: false`**.
  Cancelling a run while `actions/deploy-pages` is mid-deployment leaves a stuck deployment
  server-side, and the next run then hangs too. Do not flip this back to `true`.
- The deploy step allows 20 min (`timeout: 1200000`) and retries once after a 60 s pause
  before failing the job.

If a run still fails this way, re-run the `deploy` job (**Actions → run → Re-run failed jobs**);
avoid pushing several commits in quick succession while a deployment is in flight.

## SEO & Open Graph

Crawl-facing defaults live in [`index.html`](../index.html) (title, description, keywords, canonical, Open Graph, Twitter Card, JSON-LD).

Runtime language switches update title / description / `og:locale` via [`src/hooks/useDocumentMeta.ts`](../src/hooks/useDocumentMeta.ts) and copy in `i18n.ts` (`seoTitle`, `seoDescription`).

| Setting | Where |
|---------|--------|
| Production origin | `site.siteUrl` → `https://jabpoint.ee` in [`src/data/site.ts`](../src/data/site.ts) |
| Shared SEO helpers | [`src/data/seo.ts`](../src/data/seo.ts) |
| `robots.txt` / `sitemap.xml` / `CNAME` | [`public/`](../public/) |

If the domain changes, update `site.siteUrl`, absolute URLs in `index.html`, and `public/robots.txt` + `public/sitemap.xml` + `public/CNAME`.

## Manual publish

```bash
npm run deploy
```

Uses `gh-pages` to push `dist` to the `gh-pages` branch. Requires GitHub push credentials. Prefer the GitHub Actions workflow above when using custom domain + Pages.

## Maintenance mode

To show the full-site “technical works” screen without a code change:

**Actions → Deploy to GitHub Pages → Run workflow →** enable **Show maintenance page**.

Details: [maintenance-mode.md](./maintenance-mode.md).

## Staging preview (pre-release)

For a GitHub-linked test deploy that is **not** the live release, use branch `staging` and `/staging/` on Pages.

Details and URLs: [staging.md](./staging.md).

## Assets checklist

Before going live, confirm in `src/data/site.ts`:

- [x] Real phone number and `tel:` href
- [x] Real email and `mailto:` href
- [x] Correct address and hours per language
- [ ] Final lounge / hero images in `public/img/` (OG currently uses `building.png`)
- [x] Brand/year
- [x] SEO / Open Graph tags in `index.html`

## Environment notes

No `.env` is required for the static site. Do not commit secrets; there is no API layer in this project.
