/**
 * ============================================================================
 *  ROWCREST — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for every page, the footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://rowcrest.netlify.app', // no trailing slash
    googleSiteVerification: 'uQuSXe-Je-RhFQvAuUw3HgrQl4iCKOdcKjo_poqB0bKw', // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Rowcrest',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the Fictitious Business Name is filed (Fresno County)
    owner: null, // optional
    foundingYear: null,

    phone: '(559) 354-6814',
    phoneE164: '+15593546814',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '1306 W Herndon Ave', // real, staffed office
      addressLocality: 'Fresno',
      addressRegion: 'CA',
      postalCode: '93711',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Fresno, CA'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Pacific Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  form: { name: 'consultation' },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 16722209 — aerial over California orchard rows (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no people — sources in docs/MEDIA.md
    images: {
      city: { src: '/assets/media/city.webp', pos: '50% 40%', alt: 'Historic high-rise tower in downtown Fresno against a blue sky' },
      records: { src: '/assets/media/records.webp', pos: '50% 50%', alt: 'Stack of paper-clipped documents beside reading glasses on a desk' },
      orchard: { src: '/assets/media/orchard.webp', pos: '50% 50%', alt: 'Aerial view of orchard rows' },
      desk: { src: '/assets/media/desk.webp', pos: '50% 60%', alt: 'Clipboard, notebook and folders on a wooden desk' },
      valley: { src: '/assets/media/valley.webp', pos: '50% 50%', alt: 'Orchard rows stretching toward the mountains under a clear sky' },
    },
  },
};
