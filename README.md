# Lumina Beauty Studio — Makeup Artist Website (frontend only)

Professional one-page website for a makeup artist / beauty studio, built to the
reference design (Lumina Beauty Studio). **Frontend only, mock data** — real
data replaces `src/lib/data/site.ts` after the client approves the design.

## Stack

- Svelte 5.58 + SvelteKit 3.3.1 + Vite 8.3.8 + TypeScript (strict)
- Tailwind CSS 4.3.5 (`@tailwindcss/vite`, `@theme` tokens in `src/app.css`)
- `@sveltejs/adapter-static` + `prerender = true` (SSR on, never `ssr: false`)
- Fonts self-hosted via `@fontsource`: Playfair Display (headings) + Inter (body)
- Icons: `@lucide/svelte` + custom SVG (24×24, 2px stroke)
- Images: generated PNG masters → AVIF → WebP → JPG → PNG fallback via
  native `<picture>` (`src/lib/components/Picture.svelte`)

## Pages / sections

Home (`/`) — Header, Hero (“Reveal Your Natural Beauty.”), Services (Hair,
Nail, Skin, Beauty), About, Gallery, Pricing (₹, en-IN), Testimonials,
Booking form (mock, validates name / Indian mobile / date), Blog, Footer.
Plus `sitemap.xml` and `robots.txt` as `+server.ts` endpoints, SEO meta +
BeautySalon JSON-LD.

## Scripts

```bash
npm install
npm run images   # convert static/images/original/*.png → avif/webp/jpg @ 480/800/1200/1600
npm run dev      # vite dev
npm run check    # svelte-kit sync + svelte-check (must be 0 errors)
npm run build    # vite build → build/ (static output, deploy anywhere)
npm run preview
```

## Images — how to add one

1. Generate the PNG master into `static/images/original/<name>.png`
   (transparent PNG if transparency is needed, name it `<name>-transparent.png`).
2. Run `npm run images`.
3. Reference only the base name in `src/lib/data/site.ts` — `Picture.svelte`
   builds the AVIF → WebP → JPG → PNG chain automatically.

## Deploy

Static output in `build/` — Cloudflare Pages, Netlify, Vercel (static) or any
static host. No server, no secrets, no `.env` needed for this frontend-only site.

## Mock data

Everything in `src/lib/data/site.ts` is mock data (names, prices, reviews,
hours, address in Mumbai, India). Swap that one file for real data later.
