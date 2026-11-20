import { Link } from "react-router-dom";
import {
  CheckCircle2, ArrowRight, Sparkles, ShieldCheck, MessageCircle, Search,
  TrendingUp, Trophy, Zap, Target, Award, Star, AlertTriangle, Building2, Wallet, Clock, BarChart3,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { ConsultationSection } from "@/components/ConsultationSection";
import { OfferSummary } from "@/components/OfferSummary";
import { OFFER_TERMS, SEO_PRICING_FAQS } from "@/lib/offer-terms";
import { SITE } from "@/lib/site";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;

const faqs = SEO_PRICING_FAQS;

const Pricing = () => {
  const offerService = serviceSchema({ name: "SEO Consultation", description: OFFER_TERMS.summary, url: `${SITE.url}/seo-packages-sri-lanka`, offers: [{ name: "SEO Consultation", url: `${SITE.url}/seo-consultant-sri-lanka`, price: "50000", description: "Starting price; includes on-page SEO recommendations." }] });

  return (
    <Layout>
      <SEO
        title="SEO Packages Sri Lanka | Consultation & Quotes | SeoFX"
        description="SEO Consultation from LKR 50,000 with on-page recommendations. All other SEO services receive a custom quote after a free analysis."
        canonical="/seo-packages-sri-lanka"
        keywords="seo packages sri lanka, seo price sri lanka, seo packages in sri lanka, seo price in sri lanka, seo cost sri lanka, affordable seo sri lanka, cheap seo sri lanka, monthly seo sri lanka, seo plans sri lanka, seo company sri lanka"
        ogImageAlt="SEO consultation and custom-scoped SEO services from SeoFX"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          offerService,
          faqSchema(faqs, {
            pageUrl: `${SITE.url}/seo-packages-sri-lanka`,
          }),
        ]}
      />
      <Breadcrumbs items={[{ label: "SEO Packages" }]} />

      {/* ═══ HERO ═══ */}
      <section className="container-tight pt-12 pb-8 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">SEO Packages & Pricing</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">SEO Packages in Sri Lanka</span> — Transparent Pricing, Real Rankings, No Lock-In
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{OFFER_TERMS.summary}</p>
        </div>
      </section>

      <OfferSummary />

      {/* ═══ WHAT ARE SEO PACKAGES ═══ */}
      <section className="container-narrow py-12">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          What Are <span className="text-gradient-accent">SEO Packages in Sri Lanka</span> — And What Should Yours Include?
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            An <strong className="text-foreground">SEO package in Sri Lanka</strong> is a bundled monthly service that covers all the activities needed to improve your website's ranking on Google. Rather than commissioning individual SEO tasks one by one — which is expensive and hard to manage — an SEO package bundles strategy, technical fixes, content optimisation and link building into one clear monthly investment with defined deliverables and reporting.
          </p>
          <p>
            Not all SEO packages in Sri Lanka are equal. Many cheap packages list impressive deliverables but actually provide generic blog posts, low-quality backlinks from unrelated sites, and reports full of vanity numbers. When evaluating any SEO package in Sri Lanka, these are the deliverables that actually move rankings:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong className="text-foreground">Keyword research</strong> targeting what your actual Sri Lankan customers search — high-intent terms that convert visitors into leads, not just high-volume terms.</li>
            <li><strong className="text-foreground">On-page SEO</strong> — title tags, meta descriptions, H1–H3 headers, internal linking and content so Google clearly understands each page.</li>
            <li><strong className="text-foreground">Technical SEO</strong> — fixing crawl errors, improving Core Web Vitals, mobile compliance, XML sitemap and robots.txt management.</li>
            <li><strong className="text-foreground">Link building</strong> — high-DA, niche-relevant backlinks from reputable websites that genuinely increase domain authority.</li>
            <li><strong className="text-foreground">Local SEO</strong> — if you serve specific Sri Lankan cities, optimising your Google Business Profile and local citations is essential.</li>
            <li><strong className="text-foreground">Monthly reporting</strong> — clear, jargon-free reports showing keyword movements, traffic, leads generated and what happens next.</li>
          </ul>
        </div>
        <div className="mt-6 rounded-2xl border-l-4 border-destructive bg-destructive/5 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" />
            <div>
              <p className="font-display font-bold text-foreground">Warning sign</p>
              <p className="mt-1 text-sm text-muted-foreground">
                If an SEO package in Sri Lanka does not explicitly list keyword research, on-page optimisation, link building and monthly reporting — ask why. Generic packages that avoid specifics are almost always low-quality services that will not deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AFFORDABLE vs CHEAP ═══ */}
      <section className="container-narrow py-16">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          <span className="text-gradient-accent">Affordable SEO Packages Sri Lanka</span> — Quality vs Cheap
        </h2>
        <p className="mt-4 text-muted-foreground">
          There is a critical difference between <strong className="text-foreground">affordable SEO in Sri Lanka</strong> — which delivers genuine value at a fair price — and cheap SEO, which uses low-cost, low-quality tactics that can permanently damage your Google rankings.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <h3 className="font-display text-lg font-extrabold text-foreground">What cheap SEO packages actually include</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">PBNs</strong> — fake websites for backlinks; Google deindexes and penalises.</li>
              <li>• <strong className="text-foreground">Automated link building</strong> — penalised by Google's Penguin algorithm.</li>
              <li>• <strong className="text-foreground">Keyword stuffing</strong> — penalised by Google's Panda algorithm.</li>
              <li>• <strong className="text-foreground">Auto-generated content</strong> — thin content that adds no real user value.</li>
              <li>• <strong className="text-foreground">Fake reviews</strong> — violates Google's terms; can remove your GBP listing entirely.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <h3 className="font-display text-lg font-extrabold text-foreground">What makes SeoFX genuinely affordable</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">100% white-hat SEO</strong> — sustainable through algorithm updates.</li>
              <li>• <strong className="text-foreground">In-house Sri Lankan team</strong> — no offshore outsourcing markup.</li>
              <li>• <strong className="text-foreground">No long-term contracts</strong> — pay month-to-month, cancel anytime.</li>
              <li>• <strong className="text-foreground">Free SEO audit</strong> before you commit a single rupee.</li>
              <li>• <strong className="text-foreground">Agreed SEO Work Plan</strong> — deliverables and reporting agreed before starting.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ MONTHLY SEO ═══ */}
      <section className="container-narrow py-16">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          <span className="text-gradient-accent">Monthly SEO Packages Sri Lanka</span> — Why Ongoing Beats One-Time Fixes
        </h2>
        <p className="mt-4 text-muted-foreground">
          For most businesses targeting competitive keywords, ongoing <strong className="text-foreground">monthly SEO in Sri Lanka</strong> delivers dramatically better results than one-time interventions. Here's why monthly SEO compounds returns:
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { icon: TrendingUp, h: "Algorithm updates never stop", b: "Google ships ~4,000 ranking changes per year. Monthly SEO keeps your site aligned instead of falling behind after a one-time fix." },
            { icon: BarChart3, h: "Backlink building is sustained", b: "Google evaluates link acquisition pace. A spike followed by silence looks unnatural — consistent monthly link building builds authority organically." },
            { icon: Clock, h: "Content freshness is a ranking signal", b: "Google favours regularly updated, high-quality content. Monthly SEO includes ongoing content optimisation that keeps your site current." },
            { icon: Building2, h: "Competitors don't stop", b: "If you stop after a one-time fix while competitors keep building authority, you fall back. SEO is an ongoing competition, not a project." },
          ].map((m) => (
            <div key={m.h} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <m.icon className="size-4" />
                </span>
                <h3 className="font-display font-bold text-foreground">{m.h}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ NOT SURE — Free Audit ═══ */}
      <section className="container-narrow pb-16">
        <div className="rounded-3xl border-2 border-accent/30 bg-accent/5 p-8 text-center sm:p-10">
          <span className="badge-pill">Not sure which package?</span>
          <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
            Book a <span className="text-gradient-accent">free SEO audit</span> first
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We provide a complimentary website SEO audit for every potential client — covering current rankings, technical health, content gaps and backlink profile. We'll tell you exactly which package makes sense for your goals and competition. No obligation.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-6">
            <Link to="/contact-us">Get my free SEO audit <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>

      {/* ═══ PAID CONSULTATION ═══ */}
      <ConsultationSection variant="light" emitFaqSchema={false} />

      {/* ═══ FAQ ═══ */}
      <section className="bg-soft py-20">
        <div className="container-narrow">
          <div className="text-center">
            <span className="badge-pill">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Common questions about <span className="text-gradient-accent">SEO packages in Sri Lanka</span>
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold text-foreground">
                  {f.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to improve visibility on Google Sri Lanka?"
        subtitle="Start with a free SEO audit — we'll show you exactly which package fits your business and what results to expect."
      />
    </Layout>
  );
};

export default Pricing;
