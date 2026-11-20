export const SERVICE_INTERESTS = ["SEO consultation", "SEO before building a website", "SEO audit", "monthly SEO", "local SEO", "ecommerce SEO", "AI SEO & GEO", "Google Ads"] as const;

export function serviceForPath(path: string): string {
  if (path.includes("google-ads")) return "Google Ads";
  if (path.includes("ai-seo-geo")) return "AI SEO & GEO";
  if (path.includes("seo-consultant") || path === "/seo-consultation") return "SEO consultation";
  if (path.includes("seo-consulting")) return "SEO before building a website";
  if (path.includes("google-map")) return "local SEO";
  if (path.includes("ecommerce")) return "ecommerce SEO";
  return "SEO audit";
}

export function trackEvent(event: string, service: string) {
  const analyticsWindow = window as Window & { gtag?: (...args: unknown[]) => void };
  analyticsWindow.gtag?.("event", event, { service });
}

export function trackContactClick(event: MouseEvent) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") ?? "";
  const service = serviceForPath(window.location.pathname);
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) trackEvent("click_whatsapp", service);
  else if (href.startsWith("tel:")) trackEvent("click_phone", service);
  else if (href.startsWith("mailto:")) trackEvent("click_email", service);
  else if (new URL(link.href).pathname === "/seo-consultant-sri-lanka") trackEvent("book_consultation", service);
}