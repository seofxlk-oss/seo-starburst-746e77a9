import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routePaths } from "./route-paths.mjs";
import { execFileSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

const SITE_URL = "https://seofx.lk";
const today = new Date().toISOString().slice(0, 10);


// [path, priority, changefreq]
const staticRoutes = [
  ["/", "1.0", "weekly"],
  ["/seo-sri-lanka", "0.95", "monthly"],
  ["/seo-specialist-sri-lanka", "0.9", "monthly"],
  ["/seo-consultant-sri-lanka", "0.9", "monthly"],
  ["/seo-packages-sri-lanka", "0.9", "monthly"],
  ["/services", "0.9", "monthly"],
  ["/industries", "0.85", "monthly"],
  ["/google-map-optimization", "0.85", "monthly"],
  ["/google-ads-sri-lanka", "0.85", "monthly"],
  ["/services/google-ads-specialist-sri-lanka", "0.85", "monthly"],
  ["/case-studies", "0.8", "monthly"],
  ["/case-studies/porkendeli-seo-case-study", "0.7", "yearly"],
  ["/contact-us", "0.7", "yearly"],
  ["/faq", "0.7", "monthly"],
  ["/blog", "0.8", "weekly"],
];

const urls = new Map();
const add = (loc, priority = "0.7", changefreq = "monthly") => {
  if (!urls.has(loc)) urls.set(loc, { priority, changefreq });
};

for (const route of routePaths(rootDir)) {
  const settings = staticRoutes.find(([p]) => p === route);
  add(route, settings?.[1] ?? "0.7", settings?.[2] ?? "monthly");
}

// Blog posts — read slugs from src/pages/blog/Post*.tsx
const blogDir = path.join(rootDir, "src/pages/blog");
for (const file of fs.readdirSync(blogDir).filter((n) => /^Post\d+\.tsx$/.test(n))) {
  const text = fs.readFileSync(path.join(blogDir, file), "utf8");
  const slug = text.match(/slug="([^"]+)"/)?.[1];
  if (slug) add(`/blog/${slug}`, "0.7", "monthly");
}

const escapeXml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const appSource = fs.readFileSync(path.join(rootDir, "src/App.tsx"), "utf8");
const contentDate = (route) => {
  const source = route.startsWith("/services/") ? "src/lib/services.ts" : "src/lib/industries.ts";
  const literal = route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const component = appSource.match(new RegExp(`<Route\\s+path="${literal}"\\s+element=\\{<(\\w+)`))?.[1];
  const imported = component ? appSource.match(new RegExp(`import ${component} from "([^\"]+)"`))?.[1] : undefined;
  const file = imported ? `src/${imported.replace(/^\.\//, "")}.tsx` : source;
  try {
    const committed = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], { cwd: rootDir, encoding: "utf8" }).trim();
    if (committed) return committed;
  } catch { /* Deployment archives may not include Git metadata. */ }
  return new Date(fs.statSync(path.join(rootDir, file)).mtimeMs).toISOString().slice(0, 10);
};

const body = [...urls.entries()]
  .map(([loc, { priority, changefreq }]) => {
    const full = `${SITE_URL}${loc === "/" ? "" : loc}`;
    // Content modification, rather than deployment time, determines lastmod.
    const lastmod = contentDate(loc);
    return `  <url>\n    <loc>${escapeXml(full)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

// Write to dist (deployed) and public (so dev/preview & repo stay in sync)
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml);
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);

console.log(`Generated sitemap.xml with ${urls.size} URLs (lastmod: ${today}).`);
