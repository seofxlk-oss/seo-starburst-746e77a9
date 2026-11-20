# Project architecture
- Travel-specific educational sections and FAQ data are isolated from the shared industry layout; this keeps improvements to the travel page from changing other industries and shares visible FAQ answers with JSON-LD.
- Industry title and description data remain the source for both runtime metadata and Netlify-generated route metadata, so travel metadata stays consistent across both outputs.
- Keep Google Ads specialist metadata and package terms in its shared data module so the service page, Netlify source metadata and pricing tests agree.
- Keep the main Google Ads page metadata, offer terms and FAQ answers in its own shared data module so navigation, Netlify HTML, visible answers and JSON-LD agree.
- Pre-render the actual React routes at deploy time using Vite's server module loader and StaticRouter; runtime page content and Helmet are the single source for deployed body, metadata and schema.
- Discover deploy routes from App and service/industry slugs in one shared script; generate explicit Netlify rewrites and a real 404 fallback so crawler URLs match the app.
- Track contact actions centrally from href clicks and submit enquiries through Netlify Forms; no separate persistent application server is needed.
- Keep shared navigation and page-specific contact actions in dedicated data modules; header, footer and shared CTAs must agree, and planned links are only exposed once their routes exist.

- Keep consultation starting terms and custom-quote wording in the shared offer-terms module; public offers may expose only the consultation starting price, keeping displays and schema consistent.
- Keep core-page metadata, service navigation and FAQ answers in the shared core-page data module; reusable sections render visible answers and matching schema, while pre-build SEO uses an explicit route ahead of the generic service template.
- Keep service-specific deliverables, sample records and FAQ answers in the shared service-page content module; one presentation renders this data and matching schema without altering other industry pages.
- Keep AI SEO & GEO page terms and FAQs in its shared data module so the page, schema and tests agree.
