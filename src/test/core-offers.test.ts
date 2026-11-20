import { describe, expect, it } from "vitest";
import { OFFER_TERMS } from "@/lib/offer-terms";
import { CORE_FAQS } from "@/lib/core-pages";

describe("core-page offer scope", () => {
  it("retains the consultation starting price of LKR 50,000", () => {
    expect(OFFER_TERMS.consultationStartingPrice).toBe(50000);
  });
  it("does not imply implementation or monthly work is included in the consultation", () => {
    expect(CORE_FAQS.consultation.find(f => f.q === "What do I receive afterwards?")?.a).toContain("implementation or monthly SEO is not automatically included");
  });
});