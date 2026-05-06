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
  {
    q: "What is the SEO price in Sri Lanka?",
    a: "SEO price in Sri Lanka starts from LKR 29,900/month for the Starter package, LKR 59,900/month for Business, and LKR 99,900+/month for Premium at SeoFX. Every package is backed by a 90-Day Ranking Promise.",
  },
  {
    q: "What SEO packages in Sri Lanka does SeoFX offer?",
    a: "SeoFX offers three SEO packages in Sri Lanka — Starter (get visible on Google), Business (consistent leads + traffic), and Premium (rank #1 + dominate competitors). Each includes keyword targeting, on-page optimisation, link building, monthly reports and a 90-day ranking promise.",
  },
  {
    q: "How much should a small business pay for SEO in Sri Lanka?",
    a: "A small Sri Lankan business should budget LKR 29,900–59,900 per month for SEO. The Starter package from SeoFX targets up to 5 high-intent keywords, fixes technical issues and starts authority building.",
  },
  {
    q: "Are cheap SEO packages in Sri Lanka worth it?",
    a: "Cheap SEO packages in Sri Lanka often use spammy black-hat tactics that get sites penalised. SeoFX uses 100% white-hat SEO with a 90-Day Ranking Promise — your keywords move in 90 days or we work free until they do.",
  },
];

// ───────── High-converting packages ─────────
const packages = [
  {
    name: "Starter",
    icon: "🔥",
    badge: "Best for small businesses",
    goal: "Get your site visible on Google",
    desc: "Best for small businesses starting SEO in Sri Lanka",
    bestFor: "Small businesses, local shops, new websites in Colombo, Kandy or Galle that have never done SEO and need a strong, professional Google foundation within 90 days.",
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
    badge: "Dominate Google",
    goal: "Rank #1 + dominate competitors",
    desc: "For dominating Google in Sri Lanka",
    bestFor: "Competitive industries — finance, e-commerce, real estate, hospitality — where top-3 Google positions are worth millions in monthly revenue. Aggressive, full-service SEO with weekly tracking.",
    features: [
      "Everything in Business, plus:",
      "20+ High-Intent Keywords",
      "Full Website Optimisation",
      "Aggressive Backlink Strategy",
      "Authority Building (PR / Guest Posts)",
      "Conversion Funnel Optimisation",
      "Weekly Tracking + Priority Support",
    ],
  },
];

const faqs = [
  {
    q: "How does the 90-Day Ranking Promise work?",
    a: "SeoFX's 90-Day Ranking Promise is a written commitment included with every SEO package in Sri Lanka. If your agreed target keywords don't show significant upward movement in Google rankings within 90 days of launch, we keep working on your campaign at no additional charge until they do. It's our way of ensuring you pay for rankings, not just effort.",
  },
  {
    q: "How much do SEO packages in Sri Lanka cost?",
    a: "SeoFX SEO packages in Sri Lanka start at LKR 29,900/month (Starter — up to 5 keywords), LKR 59,900/month (Business — 10–15 keywords + strategy call), and LKR 99,900+/month (Premium — 20+ keywords, weekly tracking). All packages are month-to-month with no lock-in contracts and include a free SEO audit before you commit.",
  },
  {
    q: "Are SEO packages in Sri Lanka worth the investment?",
    a: "Yes — SEO packages in Sri Lanka are among the highest-ROI marketing investments available. Unlike Google Ads which stop the moment you stop paying, SEO builds a lasting digital asset. SeoFX clients average a 73% monthly traffic lift and 99% yearly organic growth — making the cost per organic lead significantly lower than any paid alternative within 6–12 months.",
  },
  {
    q: "How long do SEO packages take to show results in Sri Lanka?",
    a: "Most SeoFX clients see measurable ranking improvements within 60–90 days — guaranteed by our 90-Day Ranking Promise. Meaningful organic traffic and lead generation typically appear within 4–6 months. Premium clients targeting highly competitive keywords (real estate, finance, insurance) may take 6–12 months for top-3 positions.",
  },
  {
    q: "How much should a small business budget for an SEO package in Sri Lanka?",
    a: "A small Sri Lankan business should budget LKR 29,900–59,900/month for a professional SEO package. The Starter package at LKR 29,900 covers a full technical audit, on-page optimisation, backlink building and monthly reporting — everything needed to build a legitimate Google presence. Avoid SEO packages priced below LKR 15,000/month — at that price the tactics used almost always violate Google's guidelines.",
  },
  {
    q: "Are cheap SEO packages in Sri Lanka worth it?",
    a: "Cheap SEO packages priced below LKR 15,000/month almost always rely on black-hat tactics including spammy backlinks, PBNs and auto-generated content. These may produce short-term gains but inevitably trigger Google penalties. The cost of recovering from a penalty typically exceeds months of professional investment. SeoFX starts at LKR 29,900/month — the minimum for genuine, sustainable white-hat SEO.",
  },
  {
    q: "Can I upgrade my SEO package in Sri Lanka as my business grows?",
    a: "Yes. All SeoFX SEO packages in Sri Lanka are flexible. You can upgrade from Starter to Business or from Business to Premium at any time — simply discuss with your dedicated SEO specialist and the change takes effect from the following month. There are no penalties or fees for upgrading.",
  },
  {
    q: "What is the difference between SEO packages in Sri Lanka and Google Ads?",
    a: "Google Ads (PPC) delivers immediate traffic by paying for top-of-page placements — but stops the moment your budget runs out. SEO packages build organic rankings that generate free, sustained traffic over the long term. For most Sri Lankan businesses the optimal strategy combines both: Google Ads for immediate leads while SEO builds long-term organic authority.",
  },
];

const COST_TIERS = [
  {
    range: "LKR 10,000–20,000/mo",
    label: "Freelancer-level",
    body: "Basic on-page edits and low-quality link building. High risk of black-hat tactics that cause Google penalties. Results are inconsistent.",
    danger: true,
  },
  {
    range: "LKR 29,900–60,000/mo",
    label: "Professional agency (SeoFX Starter / Business)",
    body: "Full technical SEO, proper keyword research, white-hat link building and monthly reporting. The minimum for sustainable results.",
  },
  {
    range: "LKR 60,000–100,000/mo",
    label: "Comprehensive (SeoFX Business / Premium)",
    body: "Multi-keyword targeting, aggressive link building and conversion optimisation. Suitable for finance, real estate and e-commerce.",
  },
  {
    range: "LKR 100,000–300,000+/mo",
    label: "Enterprise-level",
    body: "Large websites, national brands or extreme competition. Multiple specialists and digital PR. Rarely necessary for most Sri Lankan SMEs.",
  },
];

const Pricing = () => {
  const PACKAGE_PRICES: Record<string, string> = {
    Starter: "29900",
    Business: "59900",
    Premium: "99900",
  };

  const offerService = serviceSchema({
    name: "SEO Packages in Sri Lanka",
    description:
      "Transparent SEO packages in Sri Lanka — Starter, Business and Premium SEO plans backed by a 90-Day Ranking Promise.",
    url: `${SITE.url}/seo-packages-sri-lanka`,
    offers: packages.map((p) => ({
      name: `${p.name} SEO Package`,
      url: `${SITE.url}/seo-packages-sri-lanka#${p.name.toLowerCase()}`,
      price: PACKAGE_PRICES[p.name],
      description: p.desc,
    })),
  });

  return (
    <Layout>
      <SEO
        title="SEO Packages Sri Lanka — Prices from LKR 29,900 | SeoFX"
        description="Transparent SEO packages in Sri Lanka from LKR 29,900/month. Starter, Business & Premium plans. 90-Day Ranking Promise — rank or we work free. Get a quote."
        canonical="/seo-packages-sri-lanka"
        keywords="seo packages sri lanka, seo price sri lanka, seo packages in sri lanka, seo price in sri lanka, seo cost sri lanka, affordable seo sri lanka, cheap seo sri lanka, monthly seo sri lanka, seo plans sri lanka, seo company sri lanka"
        ogImageAlt="SEO packages in Sri Lanka from LKR 29,900/month — 90-day ranking promise by SeoFX"
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
            <span className="text-gradient-accent">SEO Packages in Sri Lanka</span> — Transparent Pricing, Real Rankings, No Lock-In
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            SeoFX offers the most transparent <strong className="text-foreground">SEO packages in Sri Lanka</strong> — three clearly defined plans starting from{" "}
            <strong className="text-foreground">LKR 29,900/month</strong>, backed by Sri Lanka's only{" "}
            <strong className="text-foreground">90-Day Ranking Promise</strong>. Whether you're a local business starting your first Google campaign or a competitive brand fighting for #1, there's an{" "}
            <Link to="/services" className="text-accent underline-offset-4 hover:underline">SEO service in Sri Lanka</Link> built for your stage.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Unlike most SEO packages in Sri Lanka that hide deliverables behind vague promises, SeoFX publishes exactly what is included, what each plan is built to achieve, and the results Sri Lankan businesses consistently see within 90 days. No hidden fees. No lock-in contracts. Just clear <strong className="text-foreground">SEO pricing in Sri Lanka</strong> tied to measurable Google results.
          </p>
        </div>

        {/* 🔥 90-Day Promise hook — the conversion booster */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border-2 border-accent/40 bg-hero p-6 text-center text-white shadow-glow sm:p-8">
          <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <ShieldCheck className="size-3.5" /> Our 90-Day Ranking Promise
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              Rank on Google in <span className="text-gradient-accent">90 Days</span> — or We Work Free Until You Do.
            </h2>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              You only pay for results. If your target keywords don't move in 90 days, we keep working at no extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROOF STRIP ═══ */}
      <section className="container-tight py-8">
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 shadow-card sm:grid-cols-4">
          {[
            { icon: TrendingUp, n: "73%", l: "Avg. monthly traffic lift" },
            { icon: Trophy, n: "99%", l: "Yearly organic growth" },
            { icon: ShieldCheck, n: "100%", l: "White-hat SEO" },
            { icon: Star, n: "4.9★", l: "Google reviews (87+)" },
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
            Every package includes a 90-Day Ranking Promise — your keywords move in 90 days or we work free until they do.
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
                <ShieldCheck className="size-3" /> 90-Day Ranking Promise included
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
              SEO pricing in Sri Lanka varies enormously — from LKR 10,000/month freelancers to LKR 300,000+/month agency retainers. Here's an honest breakdown of what each price range delivers.
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
              <li>• <strong className="text-foreground">100% white-hat SEO</strong> — sustainable through algorithm updates.</li>
              <li>• <strong className="text-foreground">In-house Sri Lankan team</strong> — no offshore outsourcing markup.</li>
              <li>• <strong className="text-foreground">No long-term contracts</strong> — pay month-to-month, cancel anytime.</li>
              <li>• <strong className="text-foreground">Free SEO audit</strong> before you commit a single rupee.</li>
              <li>• <strong className="text-foreground">90-Day Ranking Promise</strong> — the only written guarantee in Sri Lankan SEO.</li>
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
            <span className="text-gradient-accent">SEO Package Results</span> — What Sri Lankan Businesses Achieve
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our SEO packages in Sri Lanka are backed by documented, verifiable results — not promises. Here's what Sri Lankan businesses consistently achieve across our Starter, Business and Premium packages:
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { tag: "E-commerce, Colombo (Business)", r: "220% increase in organic traffic and 360% increase in conversions within 8 months." },
              { tag: "Hotel, Galle (Premium)", r: "Ranked #1 for primary booking-intent keyword — generating 40+ direct enquiries per month from organic search." },
              { tag: "Education institute, Kandy (Business)", r: "6 of 10 target keywords on Google page 1 within 5 months." },
              { tag: "Real estate, Colombo (Premium)", r: "3× increase in qualified leads with 60% lower cost per acquisition vs previous Google Ads spend." },
              { tag: "Professional services, Nugegoda (Starter)", r: "Page 1 for 3 of 5 target keywords within 87 days — inside the 90-Day Ranking Promise window." },
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
            Why <span className="text-gradient-accent">SeoFX SEO Packages</span> Outperform the Competition
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "90-Day Ranking Promise", b: "Every package includes our written guarantee. Your keywords move in 90 days or we work free. No other SEO company in Sri Lanka makes this commitment." },
            { h: "100% In-House Sri Lankan Team", b: "Every specialist works in-house in Rajagiriya. No outsourcing. No quality-control issues. Direct communication with the people doing the work." },
            { h: "10+ Years of Sri Lankan SEO", b: "Decade-deep understanding of Sri Lankan search behaviour, Sinhala/Tamil/English query patterns and local competition — unmatched in the market." },
            { h: "100% White-Hat Methodology", b: "Every technique is Google-approved and ethical. No PBNs, no link schemes, no keyword stuffing. Your rankings stay safe through every algorithm update." },
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

      <CTASection
        title="Ready to rank #1 on Google Sri Lanka?"
        subtitle="Start with a free SEO audit — we'll show you exactly which package fits your business and what results to expect."
      />
    </Layout>
  );
};

export default Pricing;
