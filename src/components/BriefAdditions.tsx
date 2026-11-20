import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { CORE_SERVICES, CORE_PAGES } from "@/lib/core-pages";
import { SampleWork } from "@/components/CorePageSections";

type Props = { buildFirst?: boolean; services?: boolean; samples?: boolean; companyLinks?: boolean };

/** Extra sections from the SEO build brief, added beneath a page's own content. */
export function BriefAdditions({ buildFirst, services, samples, companyLinks }: Props) {
  return (
    <>
      {buildFirst && (
        <section className="bg-soft py-14 sm:py-16">
          <div className="container-tight grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
            <Compass className="size-12 text-accent" />
            <div>
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Get SEO right before you build</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                Most SEO problems start before a website goes live: wrong keywords, weak page structure and URLs that later need redirects.
                We plan keywords, pages and URLs first, so your developer builds a site that is ready to be found.
              </p>
              <Link to={CORE_PAGES.planning.path} className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
                See SEO Before You Build <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
      {services && (
        <section className="py-14 sm:py-16">
          <div className="container-tight">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Explore each SEO service</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_SERVICES.map((s) => (
                <Link key={s.href} to={s.href} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-accent">
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  <p className="mt-3 text-xs font-semibold text-accent">Best for: {s.bestFor}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {samples && <SampleWork />}
      {companyLinks && (
        <section className="py-10">
          <div className="container-tight flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <span className="font-semibold text-foreground">Get to know SeoFX:</span>
            <Link to={CORE_PAGES.about.path} className="font-semibold text-accent hover:underline">About SeoFX</Link>
            <Link to={CORE_PAGES.howWeWork.path} className="font-semibold text-accent hover:underline">How we work</Link>
            <Link to={CORE_PAGES.editorial.path} className="font-semibold text-accent hover:underline">Editorial standards</Link>
            <Link to="/case-studies" className="font-semibold text-accent hover:underline">Our work</Link>
          </div>
        </section>
      )}
    </>
  );
}
