# Part 3: claims and pricing cleanup

## Completed
- Removed Starter, Business and Premium package cards and obsolete fixed service prices.
- Introduced consultation starting pricing with on-page SEO recommendations and custom quotes for other services, including Ads and Maps.
- Removed unsupported ranking promises, traffic figures, review badges, rating schema and anonymous testimonials.
- Removed the duplicate homepage FAQ display; one visible FAQ set matches one FAQPage schema.
- Preserved all existing URLs and the real PorKenDeli project. Removed Alexa and inconsistent numerical outcomes; qualitative outcomes are now used instead of inventing figures.
- Updated blog pricing and self-ranking claims while keeping educational warnings about ranking guarantees.

## Verification
- All 78 route outputs checked: one H1, no keyword metadata, no rating schema, no duplicate FAQPage schema and no obsolete prices.
- Public Offer prices, where present, are only the consultation starting price of LKR 50,000.
- All 24 tests passed.
- Eight key pages checked in the browser, with no runtime errors.
- Pricing-to-consultation journey verified; pricing fits 603px and 390px screens.

## Not completed in this part
- Hosted Netlify response, form receipt and PageSpeed checks still require deployment.
- Links to new company and GEO pages remain deferred until those pages are created in Parts 6–7.
- Part 4's detailed core-page rewrites start only after Continue.

## Changed files
- AGENTS.md
- roadmap.md
- src/components/ConsultationSection.tsx
- src/components/GoogleSearchHero.tsx
- src/lib/blogInterlinks.ts
- src/lib/google-ads-specialist.ts
- src/lib/google-ads.ts
- src/lib/industries.ts
- src/lib/services.ts
- src/lib/site.ts
- src/pages/About.tsx
- src/pages/Blog.tsx
- src/pages/CaseStudies.tsx
- src/pages/Contact.tsx
- src/pages/FAQ.tsx
- src/pages/GoogleAdsSpecialist.tsx
- src/pages/GoogleAdsSriLanka.tsx
- src/pages/GoogleMapOptimization.tsx
- src/pages/Home.tsx
- src/pages/IndustryPage.tsx
- src/pages/PorKenDeliCase.tsx
- src/pages/Pricing.tsx
- src/pages/SeoConsultation.tsx
- src/pages/SeoSriLanka.tsx
- src/pages/Services.tsx
- src/pages/blog/Post1.tsx
- src/pages/blog/Post10.tsx
- src/pages/blog/Post11.tsx
- src/pages/blog/Post12.tsx
- src/pages/blog/Post13.tsx
- src/pages/blog/Post14.tsx
- src/pages/blog/Post19.tsx
- src/pages/blog/Post24.tsx
- src/pages/blog/Post33.tsx
- src/pages/blog/Post34.tsx
- src/pages/blog/Post4.tsx
- src/pages/blog/Post5.tsx
- src/pages/blog/Post6.tsx
- src/pages/blog/Post7.tsx
- src/pages/blog/Post8.tsx
- src/pages/blog/Post9.tsx
- src/test/google-ads-specialist.test.ts
- src/test/google-ads.test.ts
- src/lib/offer-terms.ts
- src/components/OfferSummary.tsx
- src/test/offer-terms.test.ts
