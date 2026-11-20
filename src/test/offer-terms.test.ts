import { describe, expect, it } from "vitest";
import { OFFER_TERMS } from "@/lib/offer-terms";
import { GOOGLE_ADS } from "@/lib/google-ads";
import { GOOGLE_ADS_SPECIALIST } from "@/lib/google-ads-specialist";

describe("consultation-first offer rules", () => {
  it("sets the consultation starting price to LKR 50,000", () => {
    expect(OFFER_TERMS.consultationStartingPrice).toBe(50000);
  });
  it("quotes other services rather than publishing fixed fees", () => {
    expect(GOOGLE_ADS.monthlyManagementFee).toBeNull();
    expect(GOOGLE_ADS_SPECIALIST.monthlyManagementFee).toBeNull();
    expect(GOOGLE_ADS.pricing).toBe(OFFER_TERMS.customQuote);
    expect(GOOGLE_ADS_SPECIALIST.pricing).toBe(OFFER_TERMS.customQuote);
  });
  it("keeps Google advertising spend separate", () => {
    expect(GOOGLE_ADS.adSpendIncluded).toBe(false);
    expect(GOOGLE_ADS_SPECIALIST.adSpendIncluded).toBe(false);
  });
});