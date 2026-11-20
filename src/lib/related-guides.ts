// Pages that link back to specific blog guides ("Link back from" in the article interlinking plan).
const G = {
  diy: { slug: "seo-expert-vs-diy-seo-sri-lanka", title: "SEO Expert vs DIY SEO: What You Can Do Yourself and When to Hire" },
  small: { slug: "seo-small-business-sri-lanka-where-to-start", title: "SEO for Small Businesses in Sri Lanka: Where to Start" },
  service: { slug: "how-to-write-service-pages-that-rank", title: "How to Write Service Pages That Rank on Google" },
  gsc: { slug: "google-search-console-guide-sri-lanka", title: "Google Search Console Guide for Sri Lankan Business Owners" },
  colombo: { slug: "seo-colombo-businesses-compete-google", title: "SEO in Colombo: How Local Businesses Compete and Win on Google" },
  tracking: { slug: "google-ads-conversion-tracking-sri-lanka", title: "Google Ads Conversion Tracking: Calls, Forms and WhatsApp" },
  landing: { slug: "google-ads-landing-pages-sri-lanka", title: "Google Ads Landing Pages That Convert: A Guide for Sri Lankan Businesses" },
};
export type Guide = (typeof G)[keyof typeof G];
export const RELATED_GUIDES: Record<string, Guide[]> = {
  "/": [G.colombo],
  "/seo-specialist-sri-lanka": [G.diy],
  "/seo-consultant-sri-lanka": [G.diy],
  "/seo-packages-sri-lanka": [G.small],
  "/blog/seo-price-sri-lanka-how-much-should-you-pay": [G.small],
  "/services/on-page-seo-sri-lanka": [G.service],
  "/services": [G.service, G.gsc],
  "/seo-sri-lanka": [G.gsc],
  "/services/website-audit-sri-lanka": [G.gsc],
  "/google-map-optimization": [G.colombo],
  "/services/google-ads-specialist-sri-lanka": [G.tracking, G.landing],
  "/google-ads-sri-lanka": [G.tracking, G.landing],
  "/blog/google-ads-mistakes-sri-lankan-businesses-make": [G.tracking],
  "/blog/how-to-choose-google-ads-agency-sri-lanka": [G.landing],
};
