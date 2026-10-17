# Overwatch Hack — [overwatchhack.net](https://overwatchhack.net)

Marketing site for **Overwatch Hack**: Overwatch aimbot, ESP, wallhack, and radar on Windows PC.  
Canonical domain: **https://overwatchhack.net** (www redirects to apex).

GitHub: [aroojnewcode/overwatch-hack-.net](https://github.com/aroojnewcode/overwatch-hack-.net)

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
npx wrangler deploy
```

## Stack

- Astro + React (static export)
- Cloudflare Workers (`workers/site.js`) + assets from `dist/`
- Routes: `overwatchhack.net`, `www.overwatchhack.net`
- Checkout: Zadeyo affiliate → Overwatch product

## Cloudflare deploy

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → worker bound to this repo (name may still show legacy `dayzqrh` in the dashboard).
2. Custom domains must be **overwatchhack.net** and **www.overwatchhack.net** (see `wrangler.toml`).
3. If Git connect fails, use **GitHub Actions** (`.github/workflows/deploy.yml`) with secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.

## SEO

- Single sitemap: `/sitemap.xml` (22 pages)
- `npm run verify:seo` runs after `npm run build`
