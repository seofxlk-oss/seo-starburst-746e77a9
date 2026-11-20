import { SITE } from "@/lib/site";

export function whatsappMessage(pathname: string): string {
  const path = pathname.replace(/\/+$/, "");
  if (path === "/google-ads-sri-lanka" || path === "/services/google-ads-specialist-sri-lanka") {
    return "Hi SeoFX, I'd like a free Google Ads check.";
  }
  if (path === "/services/ai-seo-geo-sri-lanka") {
    return "Hi SeoFX, I'd like an AI search visibility check.";
  }
  if (["/seo-consultant-sri-lanka", "/seo-consultation", "/services/seo-consulting-sri-lanka"].includes(path)) {
    return "Hi SeoFX, I'd like to book an SEO consultation.";
  }
  return "Hi SeoFX, I'd like a free SEO audit for my website.";
}

export function whatsappHref(pathname: string): string {
  return `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage(pathname))}`;
}

export function headerAction(pathname: string) {
  return pathname.replace(/\/+$/, "") === "/google-ads-sri-lanka"
    ? { label: "Free Google Ads Check", href: "/contact-us#audit" }
    : { label: "Book an SEO Consultation", href: "/seo-consultant-sri-lanka" };
}