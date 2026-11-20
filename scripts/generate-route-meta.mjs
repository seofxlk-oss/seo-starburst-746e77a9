import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { routePaths } from "./route-paths.mjs";

export async function prerender(rootDir, outputDir) {
  const server = await createServer({ root: rootDir, resolve: { alias: [
    { find: /^react-router-dom$/, replacement: path.join(rootDir, "node_modules/react-router-dom/dist/index.mjs") },
    { find: /^react-router\/dom$/, replacement: path.join(rootDir, "node_modules/react-router/dist/development/dom-export.mjs") },
    { find: /^react-router$/, replacement: path.join(rootDir, "node_modules/react-router/dist/development/index.mjs") },
  ] }, server: { middlewareMode: true }, ssr: { noExternal: ["react-router-dom", "react-router"] }, appType: "custom", mode: "production" });
  try {
    // Load React and its renderer through the same module graph as the application.
    const { renderRoute } = await server.ssrLoadModule("/src/prerender.tsx");
    const template = fs.readFileSync(path.join(outputDir, "index.html"), "utf8");
    const assetManifestPath = path.join(outputDir, ".vite/manifest.json");
    const assetManifest = fs.existsSync(assetManifestPath) ? JSON.parse(fs.readFileSync(assetManifestPath, "utf8")) : {};
    const deployAssets = (html) => html.replace(/\/src\/assets\/[^"\s<>]+/g, (source) => {
      const entry = assetManifest[source.slice(1)];
      if (entry?.file) return `/${entry.file}`;
      if (fs.existsSync(assetManifestPath)) throw new Error(`Missing deployed asset for ${source}`);
      return source; // Isolated HTML verification fixture has no Vite build assets.
    });
    const clean = template.replace(/<!-- ROUTE_META_START -->[\s\S]*?<!-- ROUTE_META_END -->/, "")
      .replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "");
    const routes = routePaths(rootDir);
    const redirects = ["https://www.seofx.lk/* https://seofx.lk/:splat 301!", "http://www.seofx.lk/* https://seofx.lk/:splat 301!", "http://seofx.lk/* https://seofx.lk/:splat 301!"];
    const manifest = [];
    for (const route of [...routes, "/404"]) {
      const { body, head, title, description, canonical } = renderRoute(route);
      if ((body.match(/<h1(?:\s|>)/g) ?? []).length !== 1) throw new Error(`${route} must render exactly one H1`);
      if (!title || !description || !canonical) throw new Error(`${route} is missing required metadata`);
      const html = deployAssets(clean.replace(/<html[^>]*>/, '<html lang="en-LK">').replace("</head>", `${head}\n</head>`).replace('<div id="root"></div>', `<div id="root">${body}</div>`));
      const destination = route === "/" ? "index.html" : `${route.slice(1)}.html`;
      fs.mkdirSync(path.dirname(path.join(outputDir, destination)), { recursive: true });
      fs.writeFileSync(path.join(outputDir, destination), html);
      if (route !== "/" && route !== "/404") {
        // Netlify matches with and without a trailing slash, so a slash redirect here would loop.
        redirects.push(`${route} /${destination} 200`);
      }
      if (route !== "/404") manifest.push({ route, title, description, canonical });
      else fs.writeFileSync(path.join(outputDir, "404.html"), html);
    }
    // Preserve the existing alias; unknown paths must never rewrite to the homepage.
    redirects.push("/seo-consultation /seo-consultant-sri-lanka 301", "/* /404.html 404");
    fs.writeFileSync(path.join(outputDir, "_redirects"), `${redirects.join("\n")}\n`);
    fs.writeFileSync(path.join(outputDir, "route-manifest.json"), JSON.stringify(manifest, null, 2));
    console.log(`Pre-rendered body, metadata and schema for ${routes.length} public routes and the 404 page.`);
    return manifest;
  } finally { await server.close(); }
}

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await prerender(rootDir, path.join(rootDir, "dist"));
