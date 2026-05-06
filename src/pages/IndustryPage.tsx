import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { FULL_KEYWORDS, getIndustryBySlug, INDUSTRIES, type IntentBucket } from "@/lib/industries";
import NotFound from "@/pages/NotFound";

const intentClasses: Record<IntentBucket, string> = {
  informational: "bg-blue-50 text-blue-700 border-blue-100",
  commercial: "bg-amber-50 text-amber-800 border-amber-100",
  transactional: "bg-green-50 text-green-700 border-green-100",
};

const IndustryPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").split("/")[0];
  const industry = getIndustryBySlug(slug);

  if (!industry) return <NotFound />;

  const fullKeywords = FULL_KEYWORDS[industry.slug] ?? industry.topKeywords;
  const url = `${SITE.url}/${industry.slug}`;

  // ── FAQ-style schema from intent queries (3 representative answers) ──
  const intentFaqs = industry.intents.map((bucket) => ({
    q: `What are ${bucket.label.toLowerCase()} searches for ${industry.navLabel.toLowerCase()} in Sri Lanka?`,
    a: `${bucket.label} searches include: ${bucket.queries.join(", ")}.`,
  }));

  return (
    <Layout>
      <SEO
        title={industry.seoTitle}
        description={industry.seoDescription}
        canonical={`/${industry.slug}`}
        keywords={industry.keywords}
        ogImageAlt={`${industry.navLabel} in Sri Lanka by SeoFX`}
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          serviceSchema({
            name: industry.navLabel,
            description: industry.seoDescription,
            url,
            serviceType: industry.navLabel,
            offers: industry.services.map((s) => ({
              name: s.title,
              description: s.body,
            })),
          }),
          faqSchema(intentFaqs, { pageUrl: url }),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Industries", href: "/industries" },
          { label: industry.navLabel },
        ]}
      />

      {/* ═══ HERO ═══ */}
      <section className="container-tight py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-start">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${industry.themeBadge}`}>
              {industry.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              {industry.h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {industry.intro}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Talk to a senior{" "}
              <Link
                to="/seo-consultant-sri-lanka"
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                seo consultant sri lanka
              </Link>{" "}
              before you build — get a keyword, structure and competitor blueprint
              tailored to {industry.navLabel.toLowerCase()}.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact-us">{industry.ctaButton} <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${SITE.phoneRaw}`}>
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </Button>
            </div>
          </div>

          {/* Keyword pill cloud */}
          <aside className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {industry.keywordBoxTitle}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {fullKeywords.map((kw) => (
                <li key={kw}>
                  <span className={`inline-block rounded-full border px-3 py-1.5 text-xs font-medium ${industry.themeBadge}`}>
                    {kw}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="container-tight pb-12">
        <div className="grid gap-3 rounded-2xl border border-border bg-soft p-6 sm:grid-cols-4">
          {industry.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className={`font-display text-2xl font-extrabold sm:text-3xl ${industry.themeText}`}>
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SEARCH INTENT GRID ═══ */}
      <section className="container-tight pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Search Intent</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            {industry.intentTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{industry.intentSub}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {industry.intents.map((bucket) => (
            <article
              key={bucket.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${intentClasses[bucket.type]}`}>
                {bucket.label}
              </span>
              <ul className="mt-5 space-y-2.5 text-sm">
                {bucket.queries.map((q) => (
                  <li key={q} className="flex gap-2 text-foreground">
                    <span className={`mt-1.5 inline-block size-1.5 shrink-0 rounded-full ${industry.themeText.replace("text-", "bg-")}`} aria-hidden />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ INDUSTRY-SPECIFIC SERVICES ═══ */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Services</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              {industry.servicesLabel}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="text-3xl" aria-hidden>{s.emoji}</div>
                <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY CTA ═══ */}
      <section className="container-tight py-16">
        <div className="rounded-3xl border border-border bg-hero p-8 text-white shadow-glow sm:p-12">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div>
              <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                {industry.ctaTitle}
              </h2>
              <p className="mt-3 text-white/80">{industry.ctaBody}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/contact-us">{industry.ctaButton}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                <a href={`tel:${SITE.phoneRaw}`}>
                  <Phone className="size-4" /> Call {SITE.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SEO CONSULTATION PACKAGE ═══ */}
      <section className="container-tight pb-16">
        <Link
          to="/seo-consultant-sri-lanka"
          className="group relative block rounded-3xl border-2 border-accent/30 bg-card p-8 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:p-10"
          aria-label="Book Your SEO Consultation — Rs. 50,000"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr] lg:items-start">
            <div>
              <span className="badge-pill">SEO Consultation Package</span>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-4xl font-extrabold text-gradient-accent sm:text-5xl">
                  Rs.50,000
                </span>
                <span className="text-sm text-muted-foreground">one-time fee</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Delivered within 5–7 business days. Includes a 2-hour strategy session.
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Keyword Research Report",
                  "Site Structure Blueprint",
                  "Competitor Gap Analysis",
                  "Content Roadmap & Page Briefs",
                  "Technical SEO Specification",
                  "Local / International Strategy",
                  "60-Day Post-Launch Action Plan",
                  "2-Hour Strategy Session",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-soft p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                This consultation is the cheapest investment you will make. One missed
                keyword or wrong URL structure costs more to fix than Rs. 50,000 —
                guaranteed.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full pointer-events-none">
                <span>
                  Book Your Consultation <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </Button>
            </div>
          </div>
        </Link>
      </section>

      <section className="container-tight pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">More Industries</span>
          <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
            Explore industry-specific{" "}
            <Link to="/" className="text-accent hover:underline">SEO Sri Lanka</Link>{" "}
            services
          </h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.filter((i) => i.slug !== industry.slug).map((other) => {
            const Icon = other.icon;
            return (
              <Link
                key={other.slug}
                to={`/${other.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/50"
              >
                <span className={`inline-flex size-9 shrink-0 items-center justify-center rounded-lg ${other.themeBadge}`}>
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground group-hover:text-accent">
                    {other.navLabel}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <MapPin className="size-3.5 text-accent" />
          <span>Industry SEO services across Sri Lanka — Colombo, Kandy, Galle, Jaffna and beyond.</span>
        </div>
      </section>

      {/* ═══ INTERNAL LINK: SEO Sri Lanka anchor → Home ═══ */}
      <section className="container-tight pb-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
          <h2 className="font-display text-xl font-extrabold sm:text-2xl">
            Looking for full-service{" "}
            <Link to="/" className="text-accent underline-offset-4 hover:underline">
              SEO Sri Lanka
            </Link>{" "}
            beyond {industry.navLabel.toLowerCase()}?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            SeoFX is a leading{" "}
            <Link to="/" className="text-accent underline-offset-4 hover:underline">
              SEO Sri Lanka
            </Link>{" "}
            agency helping {industry.navLabel.toLowerCase()} businesses and brands across every
            sector rank on Google. Explore our complete{" "}
            <Link to="/services" className="text-accent underline-offset-4 hover:underline">
              SEO services
            </Link>{" "}
            and{" "}
            <Link to="/seo-packages-sri-lanka" className="text-accent underline-offset-4 hover:underline">
              SEO packages
            </Link>{" "}
            built for Sri Lankan businesses.
          </p>
          <div className="mt-5">
            <Button asChild variant="outline" size="sm">
              <Link to="/">
                Visit SEO Sri Lanka home <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a custom industry SEO strategy?"
        subtitle="Talk to a Sri Lankan SEO specialist who knows your industry — free, no obligation."
      />

      {/* ── Hidden visually but kept for AI/LLM crawlers (verbatim keyword block) ── */}
      <div className="sr-only" aria-hidden>
        <p>{industry.navLabel} in Sri Lanka by SeoFX. Keywords: {fullKeywords.join("; ")}.</p>
        <ul>
          {industry.services.map((s) => (
            <li key={s.title}>{s.title}: {s.body}</li>
          ))}
        </ul>
        <p>
          <CheckCircle2 className="inline size-3" aria-hidden /> Free SEO audit available for {industry.navLabel.toLowerCase()} businesses in Sri Lanka.
        </p>
      </div>
    </Layout>
  );
};

export default IndustryPage;
