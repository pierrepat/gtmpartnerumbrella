# GTM Partner LLC, gtmpartner.ai

Company page for GTM Partner LLC plus one offer page: exclusive MVA leads
for personal injury firms. The AI intake product lives at plaintiffpilot.com,
the consumer site at mvacompensation.com.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| URL | Purpose |
|---|---|
| `/` | Company page: two brand cards, lead offer teaser, proof, about |
| `/leads` | Exclusive MVA lead offer (the only thing sold on this domain) |
| `/apply` | Fit quiz, then redirect to the Cal.com booking link (noindex) |

Everything else 301s. AI and reactivation paths go to plaintiffpilot.com,
`/outbound` goes to `/#track-record`, other removed pages go to `/`. The
list is in `next.config.ts`.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- Geist and Geist Mono fonts

## Config

- `src/lib/site.ts`: contact email, booking link, brand URLs, CTA label.
- `NEXT_PUBLIC_QUIZ_WEBHOOK_URL`: optional. Set it in Netlify to POST every
  completed quiz as JSON before the booking redirect. Empty means skip.
- Google Ads tag `AW-18250922700` and the LeadConnector chat widget are in
  `src/app/layout.tsx` and `src/components/chat-widget.tsx`.

## Deploy

Netlify with `@netlify/plugin-nextjs`. Build command `npm run build`.

## Assets

- `/public/logos/`: firm wordmarks for the `/leads` strip and CRM wordmarks
  for the CRM FAQ answer.
- `/public/headshot.jpg`: Pierre's headshot, used in About.
- `/public/proof-*.png`: campaign screenshots from live accounts.
- `/public/vsl-poster.jpg` and `src/components/vsl.tsx`: the YouTube player
  is not mounted anywhere right now. Kept for reuse on plaintiffpilot.com.
- `/public/favicon.svg`: target logo mark.
