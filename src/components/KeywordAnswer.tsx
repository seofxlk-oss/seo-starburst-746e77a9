import { Link } from "react-router-dom";

type Block = { h: string; p: string };
type Props = { badge: string; title: string; intro: string; blocks: Block[]; link?: { to: string; label: string } };

/** Short, direct keyword-answer section for money pages (Google + AI answers). */
export function KeywordAnswer({ badge, title, intro, blocks, link }: Props) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-narrow">
        <span className="badge-pill">{badge}</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.h} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold">{b.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.p}</p>
            </div>
          ))}
        </div>
        {link && (
          <p className="mt-6 text-muted-foreground">
            Next step: <Link to={link.to} className="font-semibold text-primary underline-offset-4 hover:underline">{link.label}</Link>
          </p>
        )}
      </div>
    </section>
  );
}
