import { describe, expect, it } from "vitest";
import { GOOGLE_ADS_SPECIALIST } from "../lib/google-ads-specialist";

describe("Google Ads specialist package terms", () => {
  it("charges Rs. 45,000 per month for management", () => {
    expect(GOOGLE_ADS_SPECIALIST.monthlyManagementFee).toBe(45000);
  });
  it("does not set a fixed price for Ads Now + SEO for Life", () => {
    expect(GOOGLE_ADS_SPECIALIST.bundlePrice).toBeNull();
  });
  it("keeps Google ad spend separate from the management fee", () => {
    expect(GOOGLE_ADS_SPECIALIST.adSpendIncluded).toBe(false);
  });
});