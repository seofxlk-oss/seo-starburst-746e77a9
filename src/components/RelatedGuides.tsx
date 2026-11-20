import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { RELATED_GUIDES } from "@/lib/related-guides";

export function RelatedGuides() {
  const { pathname } = useLocation();
  const guides = RELATED_GUIDES[pathname.replace(/\/$/, "") || "/"];
  if (!guides) return null;
  return (
    <section aria-labelledby="related-guides" className="border-t border-border py-10">
      <div className="container-tight">
        <h2 id="related-guides" className="font-display text-xl font-bold">Related guides</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link to={`/blog/${g.slug}`} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 font-semibold text-foreground transition hover:border-accent hover:text-accent">
                <BookOpen className="mt-0.5 size-5 shrink-0 text-accent" /> {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
