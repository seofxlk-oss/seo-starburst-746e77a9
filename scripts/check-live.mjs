#!/usr/bin/env node
// Post-deploy check of the live site: run `npm run check:live` (optionally pass a base URL).
const BASE = (process.argv[2] || "https://seofx.lk").replace(/\/$/, "");
const PAGES = ["/", "/services", "/seo-consultant-sri-lanka", "/seo-specialist-sri-lanka", "/seo-packages-sri-lanka",
  "/seo-sri-lanka", "/google-ads-sri-lanka", "/google-map-optimization", "/services/ai-seo-geo-sri-lanka",
  "/about-us", "/contact-us", "/blog", "/blog/what-is-geo-guide-sri-lankan-businesses", "/hotel-seo-sri-lanka"];

/** Follow redirects by hand so loops are caught (max 5 hops). */
async function load(url) {
  const hops = [];
  for (let i = 0; i < 5; i++) {
    const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "SeoFX-live-check" } });
    if (res.status >= 300 && res.status < 400) {
      const next = new URL(res.headers.get("location"), url).href;
      if (hops.includes(next) || next === url) return { error: `redirect loop to ${next}` };
      hops.push(url); url = next; continue;
    }
    return { status: res.status, url, html: await res.text(), hops: hops.length };
  }
  return { error: "too many redirects" };
}

const problems = []; const titles = new Map();
for (const path of PAGES) {
  for (const variant of [path, path === "/" ? null : `${path}/`].filter(Boolean)) {
    const r = await load(BASE + variant);
    const label = variant.padEnd(52);
    if (r.error) { problems.push(`${variant}: ${r.error}`); console.log(`FAIL ${label} ${r.error}`); continue; }
    if (r.status !== 200) { problems.push(`${variant}: HTTP ${r.status}`); console.log(`FAIL ${label} HTTP ${r.status}`); continue; }
    if (variant !== path) { console.log(`ok   ${label} loads (${r.hops} redirect)`); continue; }
    const title = (r.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "").trim();
    const h1 = (r.html.match(/<h1[\s>]/gi) || []).length;
    const issues = [];
    if (!title) issues.push("no title");
    if (titles.has(title)) issues.push(`same title as ${titles.get(title)}`); else titles.set(title, path);
    if (h1 !== 1) issues.push(`${h1} H1 headings`);
    issues.forEach(i => problems.push(`${path}: ${i}`));
    console.log(`${issues.length ? "FAIL" : "ok  "} ${label} ${issues.join(", ") || title}`);
  }
}

const sm = await load(`${BASE}/sitemap.xml`);
const count = sm.html ? (sm.html.match(/<loc>/g) || []).length : 0;
if (sm.status !== 200 || count === 0) problems.push(`sitemap: ${sm.error || `HTTP ${sm.status}`}, ${count} URLs`);
console.log(`${sm.status === 200 && count ? "ok  " : "FAIL"} /sitemap.xml ${count} URLs`);

console.log(problems.length ? `\n${problems.length} problem(s) found` : "\nAll live checks passed");
process.exit(problems.length ? 1 : 0);
