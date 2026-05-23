# TallyKonnect — Next.js App Router refactor

A component-based refactor of the original single-page JSX landing page.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Replace `NEXT_PUBLIC_SITE_URL` with your live domain before deploying so canonical, sitemap, robots and structured-data URLs are correct.

## Structure

- `app/layout.jsx`: global metadata, layout, navbar and footer
- `app/page.jsx`: semantic homepage composition plus JSON-LD
- `app/sitemap.js`, `app/robots.js`, `app/opengraph-image.jsx`, `app/icon.jsx`: SEO/shareability files
- `components/ui/Button.jsx`: reusable CTA
- `components/layout/*`: reusable navigation and footer
- `components/sections/*`: isolated animated page sections

## Notes

The animated sections remain Client Components because they use GSAP, Framer Motion, refs, state and browser measurements. The route and metadata files stay server-rendered for SEO and cleaner code ownership.
