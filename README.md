# Rowcrest: Website

A multi-page site for Rowcrest, which provides Solo and self-directed 401(k) plan support from an
office in Fresno, California. It's static with no dependencies, built with Node and deployed to
**Netlify** at `https://rowcrest.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check (fails while the address placeholders remain)
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `rowcrest`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Pages

| Path | Page |
|---|---|
| `/` | Home: hero video, office card, services overview, how it works, roles, basics teasers, FAQ |
| `/services/` | Each service in detail: what's included and what stays with you |
| `/401k-basics/` | Solo and self-directed 401(k) guide, plus the full FAQ |
| `/about/` | The name, who we work with, standards, office visit details |
| `/contact/` | Meeting request form (Netlify Forms), phone, office, hours |

Plus `/privacy-policy/`, `/terms/` and `/disclosures/` (California law, CCPA/CPRA), `/thank-you/` and `404.html`.

## Office address (placeholder)

Rowcrest is set up as a **storefront office** (`locationType: 'office'`). Until
`business.address.streetAddress` and `postalCode` are filled in, pages show yellow
`[Street address — to be provided]` and `[ZIP]` tags, and no storefront schema or map is output.

## Design

- **Palette:** orchard green `#1C2A21`, leaf `#3C6E47`, harvest gold `#D9A53F`, sage `#BCD6A6`, valley cream `#FAF7EF`
- **Type:** Source Serif 4 (display) and Plus Jakarta Sans (text), both self-hosted
- **Logo:** a crest shield with a harvest sun rising over converging orchard rows (`src/brand.mjs`)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
