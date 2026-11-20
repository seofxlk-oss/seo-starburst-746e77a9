# Part 1: technical SEO foundation

## Completed
- Actual React page content is pre-rendered during the existing Netlify deploy step, including H1, body, closed FAQ answers, route metadata and JSON-LD.
- All 78 existing public URLs are preserved. Output checks confirmed one H1, one title, one canonical, unique titles/descriptions, title limits of 60 characters and description limits of 155 characters.
- Added en-LK, removed keyword meta tags and Tamil alternate locale, corrected shared organisation location and removed self-serving ratings.
- Added explicit Netlify route rewrites, per-route trailing-slash redirects, canonical-host redirects and a real HTTP 404 fallback.
- Sitemap uses the same route discovery as page generation and includes 78 unique URLs with modification dates.
- Replaced robots.txt with the supplied crawler rules and llms.txt with the supplied text, omitting three pages not built yet. Those links should be added when Parts 6 and 7 create their destinations.
- Existing GA4 tag is retained. Phone, email, WhatsApp and consultation-link events include a service parameter.
- Added a Netlify enquiry form with the specified service choices, validation, honeypot and audit/partner/consultation anchors. An email field is included so enquiries can receive a reply.
- BlogPosting uses the organisation rather than a personal author; removed its duplicate breadcrumb schema.

## Verified
- Full HTML generation for 78 public pages and the 404 page.
- No duplicate FAQPage blocks in generated pages; all public inner pages have visible breadcrumbs.
- 13 relevant tests passed, including six new technical rules.
- Desktop consultation FAQ interaction and enquiry form validation; mobile width of 603 pixels fits without overflow; no browser runtime errors.
- Latest automatic preview check reported build OK.

## Remaining / deployment-dependent
- Deploy on Netlify before verifying actual production 301/404 responses, form detection and receipt, and analytics event receipt. Enable Netlify form detection if disabled in that site's settings. The editor preview does not accept real Netlify form submissions and never reports a false success.
- PageSpeed/LCP/INP/CLS targets have not been measured. Full image conversion, page-specific hero preloads and media optimisation remain unfinished.
- Existing social image URLs are retained; their physical 1200×630 size is not verified.
- Site-wide old prices, claims, testimonials, personal details and copy are reserved for Part 3. Existing copy therefore still appears in pre-rendered HTML until that cleanup.
- The Netlify deployment step has not run here; complete HTML was verified with an isolated output fixture, not a manually invoked project build.

## Files changed
- `AGENTS.md`, `roadmap.md`, `index.html`, `netlify.toml`, `vite.config.ts`
- `public/_redirects`, `public/robots.txt`, `public/llms.txt`, `public/sitemap.xml`
- `scripts/generate-route-meta.mjs`, `scripts/generate-sitemap.mjs`, `scripts/route-paths.mjs`
- `src/App.tsx`, `src/main.tsx`, `src/prerender.tsx`
- `src/components/SEO.tsx`, `src/components/Layout.tsx`, `src/components/Breadcrumbs.tsx`, `src/components/BlogPost.tsx`, `src/components/ui/accordion.tsx`, `src/components/ContactEnquiryForm.tsx`
- `src/lib/schema.ts`, `src/lib/analytics.ts`, `src/pages/Contact.tsx`, `src/test/technical-seo.test.ts`

Part 2 starts only after you say “Continue”.