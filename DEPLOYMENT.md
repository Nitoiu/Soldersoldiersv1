# Deployment Guide — Solder Soldiers

The site is a fully static React + Vite (TanStack Start) build. All content, text,
images and fonts references live in this repository. There is no backend, no
database, no authentication and no external API — nothing needs to be configured
at runtime.

## 1. Upload to GitHub

```sh
# inside the unzipped project folder (no node_modules included)
git init
git add .
git commit -m "Solder Soldiers website"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

`node_modules`, `dist` and local caches are already excluded by `.gitignore`.
Keep `package-lock.json` committed so GitHub and Vercel install identical
dependency versions.

## 2. Vercel settings

Import the GitHub repository in Vercel ("Add New… → Project") and use:

| Setting            | Value          |
| ------------------ | -------------- |
| Framework preset   | Vite           |
| Node.js version    | 22.x           |
| Install command    | `npm install`  |
| Build command      | `npm run build` |
| Output directory   | `dist`         |
| Root directory     | `./`           |

These values are also declared in `vercel.json`, so the defaults normally need no
changes. `engines.node` in `package.json` pins Node 22.

## 3. Environment variables

**None are required.** The site does not use Lovable Cloud, Supabase, server
functions, storage or any API key, so there is no `.env` file to create. If you
later add a service, add browser-safe variables with the `VITE_` prefix in
Vercel → Project → Settings → Environment Variables.

## 4. Routing

Every route is prerendered to static HTML at build time (`/`, `/card`,
`/contact`, `/achievements`, `/projects`, each project page, `/team`, each team
member page). `vercel.json` also adds an SPA fallback rewrite
(`/(.*) → /index.html`), so opening or refreshing any internal URL directly never
returns a Vercel 404.

## 5. Local commands

```sh
npm install     # install dependencies
npm run dev     # local dev server
npm run build   # production build into ./dist
npm run preview # serve the production build locally
```

## 6. Redeploying updates

Push to `main` — Vercel builds and deploys automatically:

```sh
git add .
git commit -m "Update content"
git push
```

Content lives in editable data files under `src/data/` (`site.ts`,
`team.ts`, `projects.ts`, `achievements.ts`, `capabilities.ts`); images live in
`src/assets/` and `public/`.
