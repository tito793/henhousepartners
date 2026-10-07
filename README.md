# HenHouse Partners — Source Package

Target: https://henhousepartners.com
Prepared: 2026-10-07

## Contents
- `src/index.html`: editable HTML and application JavaScript.
- `src/styles.css` and `tailwind.config.cjs`: stylesheet source and pinned design settings.
- `public/`: local assets and security headers.
- `dist/`: ready-to-upload static website, including compiled CSS.
- `package.json` and `package-lock.json`: pinned build dependencies.
- `scripts/build.mjs`: reproducible production build.
- `wrangler.jsonc`: independent Cloudflare static hosting configuration; no credentials or account-specific resources.

## Build and preview
Use Node.js 20 or later and Python 3 for the optional preview.

```sh
npm ci
npm run build
npm run preview
```

Then open http://localhost:8080. To deploy without a build, upload the entire `dist/` folder to a static host. For Cloudflare Workers, run `npx wrangler deploy` after authenticating in your own account, then configure the custom domain in Cloudflare. Keep existing DNS until the replacement deployment is verified.

## Scope and dependencies
This is a static website. Google Fonts and Font Awesome are loaded from external services. Tailwind is compiled locally; no runtime Tailwind CDN is required. No database, private server code, secrets, or account access is included.

## Publication status
The existing published static HTML and its local logo were retrieved from henhousepartners.com, then the supplied Tito Hen biography was applied. This update has NOT been deployed to the original domain because its hosting account is not connected. This is an editable static export, not an export of the hosting account or any unseen backend. The contact form opens the visitor’s email client addressed to contact@henhouse.jp; the visitor must send the email.
