import { describe, expect, it } from "vitest";
import { orgSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SERVICE_INTERESTS, serviceForPath } from "@/lib/analytics";

describe("technical SEO rules", () => {
  it("uses Rajagiriya with no street address", () => {
    expect(orgSchema().address.addressLocality).toBe("Rajagiriya");
    expect(orgSchema().address).not.toHaveProperty("streetAddress");
    expect(localBusinessSchema().address).not.toHaveProperty("streetAddress");
  });
  it("has no self-serving review or rating schema", () => {
    expect(localBusinessSchema()).not.toHaveProperty("aggregateRating");
    expect(localBusinessSchema()).not.toHaveProperty("review");
  });
  it("uses the consultation starting price only in shared business schema", () => {
    expect(localBusinessSchema().priceRange).toBe("From LKR 50,000");
  });
  it("uses the company email and Sri Lankan language", () => {
    expect(orgSchema().email).toBe("seofx.lk@gmail.com");
    expect(websiteSchema().inLanguage).toBe("en-LK");
  });
  it("provides every specified enquiry interest", () => {
    expect([...SERVICE_INTERESTS]).toEqual(["SEO consultation", "SEO before building a website", "SEO audit", "monthly SEO", "local SEO", "ecommerce SEO", "AI SEO & GEO", "Google Ads"]);
  });
  it("attributes clicks to the relevant service", () => {
    expect(serviceForPath("/google-ads-sri-lanka")).toBe("Google Ads");
    expect(serviceForPath("/seo-consultant-sri-lanka")).toBe("SEO consultation");
    expect(serviceForPath("/services/ai-seo-geo-sri-lanka")).toBe("AI SEO & GEO");
  });
});