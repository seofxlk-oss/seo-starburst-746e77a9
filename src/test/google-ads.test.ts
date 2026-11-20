import { describe, expect, it } from "vitest";
import { GOOGLE_ADS, SEARCH_BUDGET_LIMITS } from "../lib/google-ads";

describe("Google Ads Sri Lanka offer terms", () => {
  it("does not publish a fixed Search Ads management fee", () => {
    expect(GOOGLE_ADS.monthlyManagementFee).toBeNull();
  });
  it("does not publish a fixed Ads Now + SEO for Life price", () => {
    expect(GOOGLE_ADS.bundlePrice).toBeNull();
  });
  it("excludes Google advertising spend from management", () => {
    expect(GOOGLE_ADS.adSpendIncluded).toBe(false);
  });
  it("uses Google's standard Search budget limits, not a hard daily cap", () => {
    expect(3000 * SEARCH_BUDGET_LIMITS.dailyMultiplier).toBe(6000);
    expect(3000 * SEARCH_BUDGET_LIMITS.monthlyMultiplier).toBe(91200);
  });
});