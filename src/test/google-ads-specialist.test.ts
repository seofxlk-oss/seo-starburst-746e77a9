import { describe, expect, it } from "vitest";
import { GOOGLE_ADS_SPECIALIST } from "../lib/google-ads-specialist";

describe("Google Ads specialist package terms", () => {
  it("does not publish a fixed monthly management fee", () => {
    expect(GOOGLE_ADS_SPECIALIST.monthlyManagementFee).toBeNull();
  });
  it("does not set a fixed price for Ads Now + SEO for Life", () => {
    expect(GOOGLE_ADS_SPECIALIST.bundlePrice).toBeNull();
  });
  it("keeps Google ad spend separate from the management fee", () => {
    expect(GOOGLE_ADS_SPECIALIST.adSpendIncluded).toBe(false);
  });
});