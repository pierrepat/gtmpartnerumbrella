# GTM Partner — gtmpartner.ai

Pay-per-lead for personal injury law firms + outbound/RevOps for B2B SaaS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| URL | Purpose |
|---|---|
| `/` | Homepage — pay-per-lead legal offer (main conversion page) |
| `/outbound` | B2B outbound & RevOps with case studies |
| `/about` | Pierre Patrouillard, CEO |
| `/contact` | Contact form + Cal.com embed |

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4**
- **Geist + Geist Mono** fonts

## Placeholders to wire up

1. **Pilot form webhook** — in `src/components/pilot-form.tsx`, replace `WEBHOOK_URL` with your GHL webhook
2. **Contact form** — in `src/components/contact-form.tsx`, currently logs to console. Wire to GHL or email API
3. **Cal.com embed** — on `/contact`, embedded at `cal.com/gtmpartner/30min`. Update if URL changes

## Deploy to Netlify

```bash
npm run build
```

Point Netlify to:
- Build command: `npm run build`
- Use Netlify's Next.js plugin for deployment

## Assets

- `/public/logos/` — client and partner favicons
- `/public/headshot.jpg` — Pierre's headshot
- `/public/proof-*.png` — performance screenshots from live campaigns
- `/public/clay-social-proof.png` — Clay 316M+ stats
- `/public/favicon.svg` — target logo mark
