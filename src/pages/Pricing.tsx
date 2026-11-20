import { mergeFaqs } from "@/lib/merge-faqs";
import { BriefAdditions } from "@/components/BriefAdditions";
import { CORE_FAQS } from "@/lib/core-pages";
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

const PRICING_AI_ANSWERS = [
  { q: "What is the SEO price in Sri Lanka?", a: "At SeoFX, the SEO Consultation starts from LKR 50,000 and includes on-page SEO recommendations. Every other service, including monthly SEO packages, receives a custom quote after a free analysis." },
  { q: "What SEO packages in Sri Lanka does SeoFX offer?", a: "SeoFX offers Starter, Business and Premium SEO packages. Each covers keyword targeting, on-page optimisation, link building and monthly reports, scoped and quoted after a free analysis." },
  { q: "How much should a small business pay for SEO in Sri Lanka?", a: "It depends on competition, website size and goals. A free analysis shows what work is needed, and you receive a written custom quote. A consultation from LKR 50,000 is a lower-cost way to start." },
  { q: "Are cheap SEO packages in Sri Lanka worth it?", a: "Very cheap SEO often relies on spammy links or automated content that can harm your site. SeoFX uses white-hat methods only, with scope and reporting agreed in writing." },
];

// ───────── High-converting packages ─────────
const packages = [
  {
    name: "Starter",
    icon: "🔥",
    badge: "Best for small businesses",
    goal: "Get your site visible on Google",
    desc: "Best for small businesses starting SEO in Sri Lanka",
    bestFor: "Small businesses, local shops, new websites in Colombo, Kandy or Galle that have never done SEO and need a strong, professional Google foundation with a clear plan.",
    features: [
      "SEO Strategy + Setup",
      "Keyword Targeting (Up to 5 Keywords)",
      "Full Website SEO Audit + Fix Plan",
      "1 Page Optimisation (High-Intent Page)",
      "Meta Titles & CTR Optimisation",
      "Google Indexing + Technical Setup",
      "Backlink Building",
      "Monthly Ranking Report",
    ],
  },
  {
    name: "Business",
    icon: "🚀",
    badge: "Most Popular",
    goal: "Increase traffic + generate leads",
    desc: "For businesses that want consistent leads",
    bestFor: "Established businesses with a working website that need consistent monthly leads — targeting 10–15 keywords across 2–3 service or product categories simultaneously.",
    featured: true,
    features: [
      "Everything in Starter, plus:",
      "10–15 Keywords Targeted",
      "3 Page SEO Optimisations",
      "Competitor Analysis (Top 5 competitors)",
      "Technical SEO Fixes",
      "Backlink Building",
      "Content Optimisation (Conversion-focused)",
      "Monthly Growth Strategy Call",
    ],
  },
  {
    name: "Premium",
    icon: "👑",
    badge: "Competitive markets",
    goal: "Compete in demanding markets",
    desc: "For dominating Google in Sri Lanka",
    bestFor: "Competitive industries — finance, e-commerce, real estate, hospitality — where search visibility is hard-won. Full-service SEO with weekly tracking.",
    features: [
      "Everything in Business, plus:",
      "20+ High-Intent Keywords",
      "Full Website Optimisation",
      "Quality Link Building Strategy",
      "Authority Building (PR / Guest Posts)",
      "Conversion Funnel Optimisation",
      "Weekly Tracking + Priority Support",
    ],
  },
];

const faqs = mergeFaqs(CORE_FAQS.pricing, [
  { q: "How is progress reported?", a: "You receive a monthly plain-English report covering work completed, Search Console clicks and impressions, available enquiry data and next priorities. Rankings are not guaranteed, because Google controls them." },
  { q: "How much do SEO packages in Sri Lanka cost?", a: "SEO packages are custom-quoted after a free analysis. The only fixed public starting price is the SEO Consultation, from LKR 50,000, which includes on-page SEO recommendations." },
  { q: "Are SEO packages in Sri Lanka worth the investment?", a: "For many businesses, yes. Unlike ads, SEO keeps working after the work is done, but results depend on competition, your website and your offer." },
  { q: "How long do SEO packages take to show results in Sri Lanka?", a: "Technical fixes can be picked up within weeks. Meaningful traffic and enquiry changes usually take several months, and longer in competitive industries." },
  { q: "How much should a small business budget for an SEO package in Sri Lanka?", a: "Budget depends on what your website needs. Start with a free analysis or an SEO Consultation from LKR 50,000, then decide on ongoing work with a clear quote." },
  { q: "Are cheap SEO packages in Sri Lanka worth it?", a: "Very cheap SEO often uses spammy backlinks, private blog networks or auto-generated content, which can lead to Google penalties. Recovering usually costs more than doing it properly." },
  { q: "Can I upgrade my SEO package in Sri Lanka as my business grows?", a: "Yes. You can change scope as your business grows; we agree the new scope and quote in writing first." },
  { q: "What is the difference between SEO packages in Sri Lanka and Google Ads?", a: "Google Ads buys immediate sponsored placements and stops when spending stops. SEO builds organic visibility over time. Many businesses use both." },
]);

const COST_TIERS = [
  { range: "Very low-cost", label: "Freelancer-level", body: "Basic on-page edits and low-quality link building. High risk of tactics that cause Google penalties. Results are inconsistent.", danger: true },
  { range: "Professional", label: "Agency (SeoFX Starter / Business)", body: "Full technical SEO, proper keyword research, white-hat link building and monthly reporting." },
  { range: "Comprehensive", label: "SeoFX Business / Premium", body: "Multi-keyword targeting, quality link building and conversion optimisation for competitive sectors." },
  { range: "Enterprise", label: "Enterprise-level", body: "Large websites, national brands or intense competition. Multiple specialists and digital PR." },
];

const Pricing = () => {

  const offerService = serviceSchema({
    name: "SEO Packages in Sri Lanka",
    description:
      "Transparent SEO packages in Sri Lanka — Starter, Business and Premium SEO plans, custom-quoted after a free analysis.",
    url: `${SITE.url}/seo-packages-sri-lanka`,
    offers: packages.map((p) => ({
      name: `${p.name} SEO Package`,
      url: `${SITE.url}/seo-packages-sri-lanka#${p.name.toLowerCase()}`,
      description: p.desc,
    })),
  });

  return (
    <Layout>
      <SEO
        title="SEO Packages & Prices in Sri Lanka | SeoFX"
        description="SEO consultation from LKR 50,000 with on-page SEO recommendations. Monthly SEO, audits and other services are custom-quoted after a free analysis."
        canonical="/seo-packages-sri-lanka"
        keywords="seo packages sri lanka, seo price sri lanka, seo packages in sri lanka, seo price in sri lanka, seo cost sri lanka, affordable seo sri lanka, cheap seo sri lanka, monthly seo sri lanka, seo plans sri lanka, seo company sri lanka"
        ogImageAlt="SEO packages in Sri Lanka by SeoFX"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          offerService,
          faqSchema([...faqs, ...PRICING_AI_ANSWERS], {
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
            <span className="text-gradient-accent">SEO Packages in Sri Lanka</span> — Clear Scope, Custom Quotes
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            SeoFX offers the most transparent <strong className="text-foreground">SEO packages in Sri Lanka</strong> — three clearly defined plans, each{" "}
            <strong className="text-foreground">custom-quoted after a free analysis</strong>. Whether you're a local business starting your first Google campaign or a competitive brand, there's an{" "}
            <Link to="/services" className="text-accent underline-offset-4 hover:underline">SEO service in Sri Lanka</Link> built for your stage.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Unlike most SEO packages in Sri Lanka that hide deliverables behind vague promises, SeoFX publishes exactly what is included, what each plan is built to achieve and how progress is reported. No hidden fees. No lock-in contracts. Just clear <strong className="text-foreground">SEO pricing in Sri Lanka</strong> with written deliverables.
          </p>
        </div>

        {/* 🔥 90-Day Promise hook — the conversion booster */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border-2 border-accent/40 bg-hero p-6 text-center text-white shadow-glow sm:p-8">
          <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <ShieldCheck className="size-3.5" /> Get SEO Right Before You Build
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              Start With an <span className="text-gradient-accent">SEO Consultation</span> from LKR 50,000
            </h2>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Includes on-page SEO recommendations. Scope is confirmed before booking; all other services are custom-quoted after a free analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROOF STRIP ═══ */}
      <section className="container-tight py-8">
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 shadow-card sm:grid-cols-4">
          {[
            { icon: TrendingUp, n: "Written", l: "Deliverables & reports" },
            { icon: Trophy, n: "Free", l: "SEO audit first" },
            { icon: ShieldCheck, n: "White-hat", l: "Methods only" },
            { icon: Star, n: "Rajagiriya", l: "Serving all of Sri Lanka" },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-3 text-left">
              <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <s.icon className="size-5" />
              </div>
              <div>
                <div className="font-display text-lg font-extrabold text-foreground">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* ═══ PACKAGES ═══ */}
      <section className="container-tight pb-20 pt-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            SeoFX <span className="text-gradient-accent">SEO Packages</span> — What You Get and Why It Works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every package is a custom quote after a free analysis. Only the SEO Consultation has a public starting price: from LKR 50,000.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              id={p.name.toLowerCase()}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all hover:-translate-y-1 ${
                p.featured
                  ? "border-accent bg-hero text-white shadow-glow lg:scale-[1.03]"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
                  <Sparkles className="-mt-0.5 mr-1 inline size-3" /> {p.badge}
                </span>
              )}

              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>{p.icon}</span>
                <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
              </div>
              <p className={`mt-2 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>

              {/* spacer */}
              <div className="mt-5" />

              {/* GOAL */}
              <div className={`mt-4 rounded-xl border px-4 py-3 ${
                p.featured ? "border-white/20 bg-white/10" : "border-accent/20 bg-accent/5"
              }`}>
                <div className="flex items-center gap-2">
                  <Target className="size-4 text-accent" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Goal</span>
                </div>
                <p className={`mt-1 font-display text-sm font-bold ${p.featured ? "text-white" : "text-foreground"}`}>
                  {p.goal}
                </p>
              </div>

              {/* BEST FOR */}
              <div className={`mt-3 rounded-xl px-4 py-3 text-xs leading-relaxed ${
                p.featured ? "bg-white/5 text-white/80" : "bg-soft text-muted-foreground"
              }`}>
                <span className={`block text-[11px] font-bold uppercase tracking-wider ${p.featured ? "text-accent" : "text-accent"}`}>
                  Best for
                </span>
                <p className="mt-1">{p.bestFor}</p>
              </div>

              <div className={`my-6 h-px ${p.featured ? "bg-white/15" : "bg-border"}`} />

              <ul className="flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <div className="mt-7">
                <Button
                  asChild
                  variant={p.featured ? "hero" : "whatsapp"}
                  size="lg"
                  className="w-full"
                >
                  <a
                    href={wa(`Hi SeoFX, I'm interested in the ${p.name} SEO package. Can you share more details and pricing?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>

              <p className={`mt-4 flex items-center justify-center gap-1.5 text-[11px] ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                <ShieldCheck className="size-3" /> Custom quote after a free analysis
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-soft px-6 py-5 text-center">
          <p className="text-sm text-muted-foreground">
            <Zap className="-mt-0.5 mr-1.5 inline size-4 text-accent" />
            <strong className="text-foreground">No long-term contracts.</strong> Cancel anytime.
            <strong className="text-foreground"> No hidden fees.</strong>{" "}
            <Link to="/contact-us" className="text-accent underline-offset-4 hover:underline">Free SEO audit</Link> before you commit.
          </p>
        </div>
      </section>

      {/* ═══ SEO COST IN SRI LANKA ═══ */}
      <section className="bg-soft py-16">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill"><Wallet className="size-3.5" /> SEO Cost Guide</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              <span className="text-gradient-accent">SEO Cost in Sri Lanka</span> — What You Actually Pay and Why
            </h2>
            <p className="mt-4 text-muted-foreground">
              SEO pricing in Sri Lanka varies widely. Here's an honest breakdown of what different levels of service usually deliver.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {COST_TIERS.map((t) => (
              <div
                key={t.range}
                className={`rounded-2xl border bg-card p-6 shadow-sm ${t.danger ? "border-destructive/40" : "border-border"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display text-lg font-extrabold text-foreground">{t.range}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">{t.label}</div>
                  </div>
                  {t.danger && <AlertTriangle className="size-5 shrink-0 text-destructive" />}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            The most important principle when evaluating <strong className="text-foreground">SEO cost in Sri Lanka</strong>: the cheapest option almost always costs more in the long run. Low-quality SEO can trigger Google penalties that take months to recover from. SeoFX packages are priced to deliver the minimum investment level required for genuine, sustainable results — not the minimum price to win a sale.
          </p>
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
              <li>• <strong className="text-foreground">White-hat SEO only</strong> — sustainable through algorithm updates.</li>
              <li>• <strong className="text-foreground">Rajagiriya-based team</strong> — direct contact with specialists.</li>
              <li>• <strong className="text-foreground">Clear terms</strong> — scope and notice period agreed upfront.</li>
              <li>• <strong className="text-foreground">Free SEO audit</strong> before you commit a single rupee.</li>
              <li>• <strong className="text-foreground">Monthly reporting</strong> — plain-English progress updates.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ DECISION GUIDE ═══ */}
      <section className="bg-soft py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill"><Award className="size-3.5" /> Decision Guide</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Which <span className="text-gradient-accent">SEO package</span> fits your business?
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { stage: "Choose Starter if", body: "You've never done SEO. Your site gets <100 organic visitors/month. You're a local business targeting one city. You need to prove SEO ROI before scaling." },
              { stage: "Choose Business if", body: "You've done some SEO but results disappointed. You need consistent monthly leads. You're targeting 2–3 service areas. You want a strategy call and dedicated specialist." },
              { stage: "Choose Premium if", body: "You're in a competitive industry (real estate, finance, e-commerce, hospitality). You need top-3 rankings for high-value keywords. SEO is a primary growth channel." },
              { stage: "Consider Custom if", body: "You have a 100+ page website. Targeting Sri Lankan and international markets. Specific compliance requirements. Need SEO + Google Ads management combined." },
            ].map((s) => (
              <div key={s.stage} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">{s.stage}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
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

      {/* ═══ RESULTS ═══ */}
      <section className="bg-soft py-16">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            <span className="text-gradient-accent">Sample Package Plans</span> — What Work Could Look Like
          </h2>
          <p className="mt-4 text-muted-foreground">
            These are fictional samples showing how a scope might be planned for different businesses. They are not client results.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { tag: "Sample · Online shop, Colombo (Business)", r: "Plan: fix category page indexing, map product keywords and improve internal links." },
              { tag: "Sample · Guesthouse, Galle (Premium)", r: "Plan: build booking-intent pages, optimise the Google Business Profile and earn relevant travel mentions." },
              { tag: "Sample · Tuition institute, Kandy (Business)", r: "Plan: create course pages for each subject and location, with FAQs parents ask." },
              { tag: "Sample · Consultancy, Nugegoda (Starter)", r: "Plan: audit the site, rewrite five service pages and set up Search Console reporting." },
            ].map((r) => (
              <li key={r.tag} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">{r.tag}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{r.r}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ WHY CHOOSE SEOFX ═══ */}
      <section className="container-tight py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Why <span className="text-gradient-accent">SeoFX SEO Packages</span> Are Built Differently
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "Agreed Scope & Reporting", b: "Deliverables, fees and reporting are agreed in writing before work starts, and you see progress every month." },
            { h: "Rajagiriya-Based Team", b: "Direct communication with the specialists doing the work." },
            { h: "Local Search Knowledge", b: "We plan around Sri Lankan search behaviour, including Sinhala, Tamil and English queries." },
            { h: "White-Hat Methods Only", b: "Every technique is Google-approved and ethical. No PBNs, no link schemes, no keyword stuffing. Your rankings stay safe through every algorithm update." },
          ].map((w) => (
            <div key={w.h} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display font-bold text-foreground">{w.h}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.b}</p>
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

      {/* ═══ AI ANSWER BLOCK ═══ */}
      <section className="container-tight py-16">
        <AIAnswerBlock
          title="SEO Price & Packages in Sri Lanka"
          answers={PRICING_AI_ANSWERS}
          emitSchema={false}
        />
      </section>

      <BriefAdditions samples />
      <CTASection
        title="Ready to plan your SEO properly?"
        subtitle="Start with a free SEO audit — we'll recommend the right scope and send a custom quote."
      />
    </Layout>
  );
};

export default Pricing;
