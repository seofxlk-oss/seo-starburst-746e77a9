import fs from "node:fs";
import path from "node:path";

// Enumerate only real public routes; redirects and the catch-all are excluded.
export function routePaths(rootDir) {
  const app = fs.readFileSync(path.join(rootDir, "src/App.tsx"), "utf8");
  const routes = [...app.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<(\w+)/g)]
    .filter(([, route, element]) => !route.includes(":") && route !== "*" && element !== "Navigate")
    .map(([, route]) => route);
  for (const [file, prefix] of [["services.ts", "/services/"], ["industries.ts", "/"]]) {
    const content = fs.readFileSync(path.join(rootDir, "src/lib", file), "utf8");
    routes.push(...[...content.matchAll(/slug:\s*"([^"]+)"/g)].map(([, slug]) => prefix + slug));
  }
  return [...new Set(routes)];
}