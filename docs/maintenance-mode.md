# Maintenance mode

Full-site “technical works” screen that replaces the marketing site when enabled at **build time**.

## How to toggle on GitHub

### Option A — one-off (recommended)

1. Open **Actions → Deploy to GitHub Pages**.
2. Click **Run workflow**.
3. Set **Show maintenance page** to ✅ (on) or leave unchecked (off).
4. Run. After deploy, the live site shows the maintenance screen or the normal site.

### Option B — sticky repo variable

1. Repo **Settings → Secrets and variables → Actions → Variables**.
2. Create `MAINTENANCE_MODE` = `true` (or `false`).
3. Trigger a deploy (push to `main` or **Run workflow** without overriding).

Manual **Run workflow** input overrides the variable for that run.

## Local preview

```bash
# .env
VITE_MAINTENANCE_MODE=true
npm run dev
```

## Copy

ET / EN / RU strings: `maintBadge`, `maintTitle1`, `maintTitle2`, `maintSub`, `maintNote` in [`src/data/i18n.ts`](../src/data/i18n.ts).

The screen keeps a language switcher and large social icons (YouTube, Telegram, Facebook, Instagram).
