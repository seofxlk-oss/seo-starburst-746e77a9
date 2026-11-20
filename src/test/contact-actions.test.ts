import { describe, expect, it } from "vitest";
import { headerAction, whatsappHref, whatsappMessage } from "@/lib/contact-actions";

describe("page-specific contact actions", () => {
  it("uses the SEO audit message on SEO pages", () => {
    expect(whatsappMessage("/services/on-page-seo-sri-lanka")).toBe("Hi SeoFX, I'd like a free SEO audit for my website.");
  });
  it("uses the booking message on consultation pages", () => {
    for (const path of ["/seo-consultant-sri-lanka", "/seo-consultation", "/services/seo-consulting-sri-lanka"]) {
      expect(whatsappMessage(path)).toBe("Hi SeoFX, I'd like to book an SEO consultation.");
    }
  });
  it("uses the Google Ads check message on Ads pages", () => {
    expect(whatsappMessage("/google-ads-sri-lanka/")).toBe("Hi SeoFX, I'd like a free Google Ads check.");
  });
  it("uses the AI visibility check message on the GEO page", () => {
    expect(whatsappMessage("/services/ai-seo-geo-sri-lanka")).toBe("Hi SeoFX, I'd like an AI search visibility check.");
  });
  it("targets the consultation page by default", () => {
    expect(headerAction("/")).toEqual({ label: "Book an SEO Consultation", href: "/seo-consultant-sri-lanka" });
  });
  it("targets a free check only on the main Google Ads page", () => {
    expect(headerAction("/google-ads-sri-lanka")).toEqual({ label: "Free Google Ads Check", href: "/contact-us#audit" });
    expect(headerAction("/services/google-ads-specialist-sri-lanka").href).toBe("/seo-consultant-sri-lanka");
  });
  it("encodes the message for the company WhatsApp number", () => {
    const url = new URL(whatsappHref("/seo-consultant-sri-lanka"));
    expect(url.pathname).toBe("/94777797035");
    expect(url.searchParams.get("text")).toBe("Hi SeoFX, I'd like to book an SEO consultation.");
  });
});