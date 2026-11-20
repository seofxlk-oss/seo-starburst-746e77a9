import { describe, it, expect } from "vitest";
import { AI_SEO_GEO, AI_SEO_GEO_FAQS } from "@/lib/ai-seo-geo";
import { SEO_NAVIGATION } from "@/lib/navigation";
import { whatsappMessage } from "@/lib/contact-actions";

describe("AI SEO & GEO page", () => {
  it("uses the brief's URL and custom-quote pricing", () => {
    expect(AI_SEO_GEO.path).toBe("/services/ai-seo-geo-sri-lanka");
    expect(AI_SEO_GEO.pricing).toBe("Custom quote after a free analysis");
  });
  it("is in the SEO Services menu", () => {
    expect(SEO_NAVIGATION.some(l => l.href === AI_SEO_GEO.path)).toBe(true);
  });
  it("uses the AI visibility WhatsApp message", () => {
    expect(whatsappMessage(AI_SEO_GEO.path)).toContain("AI search visibility");
  });
  it("never promises a ChatGPT mention", () => {
    const g = AI_SEO_GEO_FAQS.find(f => f.q.includes("guarantee"))!;
    expect(g.a.startsWith("No.")).toBe(true);
  });
});
