import { renderToString } from "react-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";

export function renderRoute(route: string) {
  const context = {} as { helmet?: HelmetServerState };
  const body = renderToString(<App serverPath={route} helmetContext={context} />);
  const helmet = context.helmet;
  if (!helmet) throw new Error(`Missing server head for ${route}`);
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((tag) => tag.toString()).join("\n");
  const title = helmet.title.toString().replace(/<[^>]+>/g, "");
  const description = helmet.meta.toString().match(/name="description" content="([^"]+)"/)?.[1];
  const canonical = helmet.link.toString().match(/rel="canonical" href="([^"]+)"/)?.[1];
  return { body, head, title, description, canonical };
}
