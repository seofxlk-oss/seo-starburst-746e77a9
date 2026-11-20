export type Faq = { q: string; a: string };

/** Combine a page's own FAQs with extra answers, dropping repeated questions. */
export function mergeFaqs(extra: Faq[], own: Faq[]): Faq[] {
  const seen = new Set<string>();
  const key = (q: string) => q.toLowerCase().replace(/[^a-z0-9]/g, "");
  return [...own, ...extra].filter((f) => {
    const k = key(f.q);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
