# Keyword-to-page SEO plan for seofx.lk (no changes made yet)

Data: your Google Keyword Planner file (Sri Lanka, Nov 2025 – Oct 2026). All keywords show low ad competition, so these terms are winnable for a focused site. No one can guarantee position 1, but this map gives each keyword one clear "owner" page so Google is not confused.

## 1. Priority order (by monthly searches)

| Rank | Keyword group | Searches/mo | Owner page |
|---|---|---|---|
| 1 | seo specialist sri lanka, seo specialist in sri lanka, seo expert (in) sri lanka, best seo expert | ~2,100 | /seo-specialist-sri-lanka |
| 2 | seo sri lanka, search engine optimization/optimisation sri lanka, seo srilanka | ~1,480 | /seo-sri-lanka |
| 3 | seo company in sri lanka, best seo company/companies, best seo sri lanka, seo agency (in) sri lanka | ~1,110 | / (Home) |
| 4 | seo packages sri lanka, seo price in sri lanka | ~250 | /seo-packages-sri-lanka |
| 5 | seo service(s) in sri lanka, best seo service | ~150 | /services |
| 6 | seo consultant (in) sri lanka, seo consulting sri lanka | ~160 | /seo-consultant-sri-lanka |

Biggest opportunity: "seo specialist sri lanka" has 1,600 searches and grew 296% year on year — more than double "seo company". This page deserves the most work.

## 2. Page-by-page changes

### A. /seo-specialist-sri-lanka (top priority)
- Meta title: `SEO Specialist Sri Lanka | Expert SEO Services | SeoFX`
- Meta description: `Hire an SEO specialist in Sri Lanka who plans keywords, fixes technical SEO and grows Google and AI rankings. Work directly with experts. Free SEO audit.`
- H1: "SEO Specialist in Sri Lanka" (singular — matches search; currently "Specialists").
- Use "SEO specialist Sri Lanka" in first 100 words, one H2, and image alt text; "SEO expert Sri Lanka" in one H2 ("Why work with an SEO expert in Sri Lanka").
- Add a "What an SEO specialist does" section with a 40–60 word direct answer (for Google and AI answers).
- Add FAQs: "How much does an SEO specialist cost in Sri Lanka?", "SEO specialist vs SEO agency?", "How do I find the best SEO expert in Sri Lanka?".
- Internal links: Posts 15–20 (specialist cluster) and Home must link here with the anchor "SEO specialist Sri Lanka"; Expert vs DIY post links with "SEO expert Sri Lanka".

### B. /seo-sri-lanka (second priority)
- Meta title: `SEO Sri Lanka | Search Engine Optimization Services | SeoFX`
- Meta description: `SEO Sri Lanka explained: how search engine optimization works for local businesses, costs, timelines and where to start. Get a free SEO audit from SeoFX.`
- Note: this replaces your earlier title "Professional SEO Services for Businesses" to capture the 720-search "search engine optimization sri lanka" term.
- H1: "SEO Sri Lanka — Search Engine Optimization for Local Businesses".
- Add an H2 "What is search engine optimization in Sri Lanka?" with a short direct answer.
- Blog guides (Posts 10, 24, 26) link here with anchor "SEO Sri Lanka" instead of to Home.

### C. Home /
- Meta title: `SEO Company in Sri Lanka | Best SEO Agency | SeoFX`
- Meta description: `SeoFX is a Rajagiriya-based SEO company in Sri Lanka. We plan SEO before you build, then grow Google, Maps and AI rankings. Book a free SEO audit today.`
- Keep H1 "SEO Company in Sri Lanka — Get SEO Right Before You Build".
- Add one honest section "What makes the best SEO company in Sri Lanka?" (criteria, not claims) to catch "best seo company" searches without unprovable "we are #1" wording.
- Link to the specialist page and SEO Sri Lanka guide high on the page.
- Posts 6–9, 12, 21, 23, 27 link to Home with anchor "SEO company in Sri Lanka".

### D. /seo-packages-sri-lanka
- Meta title: `SEO Packages Sri Lanka | SEO Price & Plans | SeoFX`
- Meta description: `Compare SEO packages in Sri Lanka and see what affects SEO price. Consultation from LKR 50,000; monthly SEO is custom-quoted after a free analysis.`
- H1: "SEO Packages & SEO Price in Sri Lanka".
- Add an H2 "How much does SEO cost in Sri Lanka?" (searches up 800% year on year). Explain price factors, show only the consultation starting price.
- Posts 13 and 14 already link here; keep them.

### E. /services
- Meta title: `SEO Services in Sri Lanka | Audit, On-Page & Local SEO | SeoFX`
- Meta description: `Professional SEO services in Sri Lanka: audits, keyword research, on-page, link building, Google Maps and AI search SEO. Custom quote after free analysis.`
- Add "SEO service in Sri Lanka" once in the intro; Post11 links here with that anchor.

### F. /seo-consultant-sri-lanka
- Meta title: `SEO Consultant Sri Lanka | SEO Consulting from LKR 50,000`
- Meta description: `Book an SEO consultant in Sri Lanka for a 1-on-1 SEO consulting session: site review, keyword direction and a written roadmap. From LKR 50,000.`
- Problem found: /services/seo-consulting-sri-lanka also targets "SEO consulting Sri Lanka", so two pages compete. Fix: retitle that page to `SEO Before You Build – New Website SEO Planning | SeoFX` and let the consultant page own both "consultant" and "consulting".

## 3. Site-wide actions
1. Publish the latest build on Netlify (live pages still show the home title — the biggest blocker).
2. Request indexing in Search Console for the 6 owner pages.
3. Get real Google reviews and a few Sri Lankan directory/business listings linking to the site.
4. Skip "seo engineer sri lanka" and "the creative web team" (no real volume / competitor brand).

## Technical details (for when you approve)
- Titles/descriptions live in `src/lib/core-pages.ts`; restored pages may also set their own Helmet tags, which must be updated to match so prerendered HTML stays consistent.
- Anchor changes go through the related-guides module and individual post files.
- Re-run tests and `npm run check:live` after publishing.
