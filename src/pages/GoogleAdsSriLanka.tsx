import { BriefAdditions } from "@/components/BriefAdditions";
import { Link } from "react-router-dom";
import {
  Target,
  Zap,
  Wallet,
  SlidersHorizontal,
  BarChart3,
  Globe2,
  Check,
  X,
  ArrowRight,
  Phone,
  AlertTriangle,
  Info,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { orgSchema, websiteSchema, serviceSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { GOOGLE_ADS as PAGE, GOOGLE_ADS_FAQS as FAQS, GOOGLE_ADS_PACKAGE_FAQS as PACKAGE_FAQS, SEARCH_BUDGET_LIMITS } from "@/lib/google-ads";
import office from "@/assets/google-ads-specialist-office.jpg";

const WHY_CARDS = [
  { icon: Target, title: "Pure intent targeting", body: "Reach relevant searches with focused keyword groups and search-term reviews. Match types can expand reach, so we check relevance continually." },
  { icon: Zap, title: "Visibility after approval", body: "Eligible Search ads can appear in sponsored placements after approval. Position depends on the auction; launch timing and top placement are not guaranteed." },
  { icon: Wallet, title: "Pay only per click", body: "Search campaigns commonly use click-based charging. We connect spend with tracked contact actions and sales where measurable, not just visits." },
  { icon: SlidersHorizontal, title: "Full budget control", body: "Set an average daily budget, review monthly spending limits and adjust or pause campaigns. Some days can spend more than the daily average." },
  { icon: BarChart3, title: "Measurable ROI", body: "Test conversion tracking for agreed actions and distinguish contact clicks from qualified leads. Consent and available follow-up data affect reporting." },
  { icon: Globe2, title: "Local & national reach", body: "Plan targeting for the areas you serve, including Colombo, Kandy and Galle, or suitable overseas markets. Location signals are not perfectly accurate." },
];

const COMPARE = [
  { factor: "Time to results", ads: "After approval and account readiness", seo: "Usually months; varies by site and competition", winner: "ads" },
  { factor: "Top of Google placement", ads: "Auction-dependent; not guaranteed", seo: "Earned over time — not guaranteed", winner: "ads" },
  { factor: "Cost per visitor", ads: "Varies by auction and campaign", seo: "No click charge; SEO work still has a cost", winner: "seo" },
  { factor: "Stops when you pause", ads: "Yes — traffic stops immediately", seo: "Organic traffic may continue; rankings can change", winner: "seo" },
  { factor: "Budget control", ads: "Average daily budget and spending limits", seo: "Monthly agency retainer (ongoing)", winner: "ads" },
  { factor: "Targeting precision", ads: "Keywords and supported location, device and time settings", seo: "Broader — rank for many queries", winner: "ads" },
  { factor: "Long-term cost", ads: "Ongoing spend required", seo: "Potential long-term value; results vary", winner: "seo" },
  { factor: "Best use case", ads: "Immediate leads & bridging while SEO grows", seo: "Sustainable long-term organic growth", winner: "both" },
];

const PROCESS = [
  { n: "01", title: "Discovery & goal setting (Day 1)", body: "We learn your business, target customers in Sri Lanka, geographic focus (Colombo, Kandy, island-wide) and what a conversion means to you — call, form, sale or walk-in. We define KPIs before spending a single rupee." },
  { n: "02", title: "Sri Lanka keyword research & competitor audit (Days 1–2)", body: "We research high-intent searches, review keyword forecasts and competitors’ public ads, and build an initial negative keyword list. Competitor bids are not publicly visible." },
  { n: "03", title: "Ad copy creation & landing page optimisation (Days 2–3)", body: "We write multiple ad variations tested for Sri Lankan market language and intent. We review your landing page and advise on improvements to maximise conversion." },
  { n: "04", title: "Campaign build & approval", body: "We configure themed ad groups, bidding, location settings and agreed conversion actions, then test the destination and submit ads for approval. Policy reviews and account readiness determine launch timing." },
  { n: "05", title: "Weekly optimisation (Ongoing)", body: "Every week we review search term reports, pause underperforming keywords, raise bids on high-converters, test new ad copy and refine negative keywords. This is what separates ROI from waste." },
  { n: "06", title: "Monthly reporting & SEO handoff (Ongoing)", body: "Reports separate Google spend from management fees and show tracked conversions, cost per conversion and lead quality where available. If you also use SEO, we test paid budget changes against total business outcomes." },
];

const INDUSTRIES = [
  "🏥 Healthcare & Clinics", "🏠 Real Estate", "📚 Education & Tuition", "🛒 E-Commerce",
  "⚖️ Legal Services", "🏨 Hotels & Tourism", "🍽️ Restaurants", "💻 IT & Software",
  "🔧 Home Services", "💄 Beauty & Wellness", "🏗️ Construction", "📦 Logistics",
];

const PACKAGES = [
  {
    name: "Search Ads Bridge",
    tagline: "Reach relevant searches with managed Search campaigns while your SEO develops.",
    price: "Custom quote",
    period: "",
    note: "Management fee only. Ad spend paid separately to Google — you choose an average daily budget and review spending limits.",
    features: [
      "Google Search Ads campaign setup & launch",
      "Sri Lanka keyword research & competitor audit",
      "Ad copy writing with A/B testing",
      "Negative keyword management to reduce irrelevant clicks",
      "Weekly bid & budget optimisation",
      "Conversion tracking setup (calls, forms, sales)",
      "Monthly performance report",
      "Landing page audit & recommendations",
    ],
    limitation: "Limitation: traffic stops if you stop paying. Best used alongside SEO.",
    featured: false,
  },
  {
    name: "Ads Now + SEO for Life",
    tagline: "Combine paid search with an organic growth strategy and review both channels together.",
    price: null,
    period: null,
    note: "Google Ads management fee + SEO retainer quoted separately. Bundle discount available — ask us.",
    features: [
      "Everything in Search Ads Bridge",
      "Full SEO campaign running in parallel",
      "Paid budgets reviewed as organic visibility improves",
      "Paid and organic campaigns planned around agreed business goals",
      "Monthly combined report: Ads performance + SEO ranking progress",
      "Your website content and campaign data stay with your business",
      "Cost per lead monitored across paid and organic channels",
      "Priority support & dedicated account manager",
    ],
    limitation: null,
    featured: true,
  },
];

const GoogleAdsSriLanka = () => {
  const pageUrl = `${SITE.url}${PAGE.path}`;

  const svcSchema = serviceSchema({
    name: "Google Ads Sri Lanka",
    description:
      PAGE.description,
    url: pageUrl,
    serviceType: "Google Ads Management & PPC",
    offers: [
      { name: "Search Ads Bridge — Google Ads Sri Lanka", url: pageUrl, description: "Google Search Ads campaign setup, Sri Lanka keyword research, ad copy A/B testing, weekly bid & budget optimisation, conversion tracking, monthly reporting and landing page audit. Ad spend paid separately to Google." },
      { name: "Ads Now + SEO for Life — Google Ads + SEO Bundle", url: pageUrl, description: "Search Ads management and a separately scoped SEO campaign with combined reporting. Paid budgets reviewed against total outcomes. Bundle pricing on request." },
    ],
  });

  const faqJsonLd = faqSchema([...FAQS, ...PACKAGE_FAQS], { pageUrl });

  return (
    <Layout>
      <SEO
        title={PAGE.title}
        description={PAGE.description}
        canonical={PAGE.path}
        keywords="Google Ads Sri Lanka, Google Search Ads Sri Lanka, PPC Sri Lanka, pay per click Sri Lanka, Google Ads agency Sri Lanka, Google advertising Sri Lanka, SEM Sri Lanka, Google Ads Colombo, Google Ads management Sri Lanka"
        jsonLd={[orgSchema(), websiteSchema(), webPageSchema({ name: PAGE.title, description: PAGE.description, url: pageUrl }), svcSchema, faqJsonLd]}
      />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Google Ads Sri Lanka" }]} />

      {/* HERO */}
      <section className="border-b border-border bg-background py-10 sm:py-14">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <span className="badge-pill tracking-normal"><Target className="size-3.5" /> Search campaigns · PPC management</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">Google Ads Sri Lanka</h1>
            <p className="mt-5 text-xl font-semibold">Reach the right searches. Measure what becomes a customer.</p>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">SeoFX plans and manages Google Search Ads for Sri Lankan businesses, with local keyword research, conversion tracking and weekly optimisation. Management from Rs.Management is a custom quote after a free analysis; Google advertising spend is separate.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg"><Link to="/contact-us">Book a Free Strategy Call <ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><a href="#packages">Explore Ads Packages</a></Button>
            </div>
          </div>
          <div className="mt-9 grid gap-5 border-t border-border pt-6 text-center sm:grid-cols-3">
            {[['Your account', 'Keep your access and campaign history'], ['Search-first strategy', 'Keywords, landing pages and tracking'], ['Transparent reporting', 'Ad spend, conversions and next steps']].map(([title, body]) => <div key={title}><p className="font-semibold text-foreground">{title}</p><p className="mt-1 text-sm text-muted-foreground">{body}</p></div>)}
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="py-12 sm:py-16">
        <div className="container-tight grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-sm font-semibold text-accent">Paid search, explained</span>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">What is Google Ads in Sri Lanka?</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground"><strong className="text-foreground">Google Ads is Google’s paid advertising platform.</strong> For Sri Lankan businesses, Search campaigns can place eligible sponsored ads in front of people looking for products or services. Keywords, audience location, your offer and the auction determine when an ad can appear.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Our core package focuses on Google Search Ads: research, campaign setup, ad copy, negative keywords, conversion tracking and weekly management. It is separate from organic <Link to="/seo-sri-lanka" className="text-accent underline underline-offset-4">SEO Sri Lanka</Link> and from <Link to="/google-map-optimization" className="text-accent underline underline-offset-4">Google Business Profile optimisation</Link>.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Search campaigns work best when there is relevant demand, a useful landing page and a viable cost per customer. We assess those factors before recommending a budget rather than promise a first position or instant sales.</p>
          </div>
          <figure className="overflow-hidden rounded-lg"><img src={office} alt="Illustrative Google Ads campaign planning scene in a Colombo office" width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full object-cover" /><figcaption className="mt-3 text-xs text-muted-foreground">Campaign strategy combines search demand, a clear offer and measurable enquiry actions.</figcaption></figure>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-normal text-primary">Why Google Ads in Sri Lanka?</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Why use Google Search Ads for your business?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Searches such as “dentist Colombo”, “hotel in Galle” or “accounting services Kandy” can indicate a specific need. A focused campaign connects relevant searches with your offer, then measures whether those visits become useful enquiries.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CARDS.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-card p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-20">
        <div className="container-tight max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-normal text-primary">Google Ads vs SEO Sri Lanka</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Google Ads vs SEO: Which One Does Your Sri Lankan Business Need?
          </h2>
          <p className="mt-5 text-muted-foreground">
            The practical answer: <strong className="text-foreground">choose based on your goals, margins and available budget. Some businesses benefit from both; others should establish one channel first.</strong>
          </p>

          <div className="mt-10 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">Google Search Ads</th>
                  <th className="px-4 py-3 text-left font-semibold">Organic SEO</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-semibold text-foreground">{row.factor}</td>
                    <td className={`px-4 py-3 text-muted-foreground ${row.winner === "ads" ? "bg-primary/5" : ""}`}>
                      <span className="inline-flex items-start gap-1.5">
                        {row.winner === "ads" ? <Check className="mt-0.5 size-4 flex-shrink-0 text-google-green" /> :
                         row.winner === "seo" ? <X className="mt-0.5 size-4 flex-shrink-0 text-google-red" /> : null}
                        <span>{row.ads}</span>
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-muted-foreground ${row.winner === "seo" ? "bg-primary/5" : ""}`}>
                      <span className="inline-flex items-start gap-1.5">
                        {row.winner === "seo" ? <Check className="mt-0.5 size-4 flex-shrink-0 text-google-green" /> :
                         row.winner === "ads" ? <X className="mt-0.5 size-4 flex-shrink-0 text-google-red" /> : null}
                        <span>{row.seo}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-muted-foreground">
            <strong className="text-foreground">The SeoFX approach:</strong> Keep Ads and SEO reporting separate enough to understand each channel, then compare the combined results. An organic ranking alone is not a reason to stop an ad: lead quality, brand searches, competitors and total conversions should guide that decision. Explore our <Link to="/seo-consultant-sri-lanka" className="text-accent underline underline-offset-4">SEO consultation</Link> if your website needs a broader search plan.
          </p>
        </div>
      </section>

      {/* PPC EXPLAINED */}
      <section id="budgets" className="scroll-mt-24 bg-muted/40 py-12 sm:py-16">
        <div className="container-tight max-w-4xl">
          <span className="text-sm font-semibold text-accent">Budget and measurement</span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">How much does Google Ads cost in Sri Lanka?</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">Separate the two costs: SeoFX’s Search Ads Bridge management fee is a custom quote after a free analysis, while your advertising spend is paid directly to Google. Click prices are set by a live auction, not a fixed Sri Lankan rate card.</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="border-t border-border pt-5"><h3 className="font-display text-lg font-bold">Build a budget from your economics</h3><p className="mt-3 leading-relaxed text-muted-foreground">Review keyword forecasts for your target location, your profit per sale and how many enquiries become customers. Start with a test budget that can gather useful data without exceeding what your business can afford. A click is not a sale.</p><p className="mt-3 text-sm text-muted-foreground">For example, a business earning Rs. 10,000 gross profit per customer and closing one in five qualified leads has Rs. 2,000 gross profit per lead before advertising, management and other costs. Your actual figures should determine an acceptable acquisition cost.</p></div>
            <div className="border-t border-border pt-5"><h3 className="font-display text-lg font-bold">An average daily budget is not a daily cap</h3><p className="mt-3 leading-relaxed text-muted-foreground">For most campaigns, Google can charge up to {SEARCH_BUDGET_LIMITS.dailyMultiplier} times the average daily budget on a day. With an unchanged budget, the monthly spending limit is {SEARCH_BUDGET_LIMITS.monthlyMultiplier} times that daily average. An average of Rs. 3,000 means up to Rs. {(3000 * SEARCH_BUDGET_LIMITS.dailyMultiplier).toLocaleString("en-LK")} on a day and Rs. {(3000 * SEARCH_BUDGET_LIMITS.monthlyMultiplier).toLocaleString("en-LK")} in a month. Budget changes and some campaign types have different rules.</p><a href="https://support.google.com/google-ads/answer/1704443?hl=en" className="mt-3 inline-block text-sm text-accent underline underline-offset-4" target="_blank" rel="noopener noreferrer">Google’s official budget and overdelivery guidance</a></div>
          </div>
          <h3 className="mt-10 font-display text-xl font-bold">Measure qualified enquiries, not just clicks</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">We test agreed conversion actions before launch and review calls, enquiry forms, purchases and contact clicks where the tools and consent settings support them. A WhatsApp click does not confirm a conversation, and a phone-button click does not confirm a completed call. Business follow-up helps connect those actions to lead quality and revenue.</p>
          <p className="mt-4 text-muted-foreground">Cost per lead = ad spend ÷ qualified leads. Return on ad spend = attributed revenue ÷ ad spend; it does not deduct management fees or product costs. Compare profitability as well as reported ROAS.</p>
          <p className="mt-5 text-sm text-muted-foreground">Further reading: <Link to="/blog/how-much-does-google-ads-cost-sri-lanka" className="text-accent underline underline-offset-4">planning your Google Ads budget</Link> and <Link to="/blog/google-ads-mistakes-sri-lankan-businesses-make" className="text-accent underline underline-offset-4">common campaign mistakes</Link>.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="how-it-works" className="scroll-mt-24 py-20">
        <div className="container-tight max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-normal text-primary">Our Process</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            How SeoFX Runs Your Google Ads Campaign in Sri Lanka
          </h2>
          <p className="mt-5 text-muted-foreground">
            From research and tracking checks to weekly optimisation, this is our campaign workflow. Planning stages are indicative; launch depends on approval and account readiness.
          </p>

          <div className="mt-12 space-y-6">
            {PROCESS.map((s) => (
              <div key={s.n} className="flex gap-5 rounded-lg border border-border bg-card p-6">
                <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="scroll-mt-24 bg-muted/40 py-20">
        <div className="container-tight">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-normal text-primary">Google Ads Sri Lanka Packages</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Transparent Google Ads Management Pricing
            </h2>
            <p className="mt-5 text-muted-foreground">
              All packages include campaign setup, weekly optimisation, conversion tracking and monthly reporting.
              Ad spend is paid directly to Google and is separate from management fees.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:max-w-4xl md:mx-auto">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col overflow-hidden rounded-lg border bg-card ${
                  p.featured ? "border-primary shadow-xl ring-2 ring-primary" : "border-border"
                }`}
              >
                <div className="border-b border-border p-6">
                  {p.featured && (
                    <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-normal text-primary-foreground">
                      ⭐ Recommended
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                </div>
                <div className="border-b border-border bg-muted/30 p-6">
                  {p.price ? (
                    <div className="text-3xl font-extrabold text-foreground">
                      {p.price}
                      <span className="ml-1 text-sm font-normal text-muted-foreground">{p.period}</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-extrabold text-foreground">Custom Quote</div>
                  )}
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.note}</p>
                </div>
                <ul className="flex-1 space-y-3 p-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 flex-shrink-0 text-google-green" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {p.limitation && (
                  <div className="mx-6 mb-4 flex items-start gap-2 rounded-lg border-l-2 border-destructive bg-destructive/5 px-3 py-2 text-xs text-muted-foreground">
                    <Info className="mt-0.5 size-3.5 flex-shrink-0 text-destructive" />
                    <span>{p.limitation}</span>
                  </div>
                )}
                <div className="p-6 pt-0">
                  <Button asChild className="w-full" variant={p.featured ? "default" : "outline"}>
                    <Link to="/contact-us">Get started →</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE FAQ */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-normal text-primary">Package Questions</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Search Ads Bridge & Ads Now + SEO for Life — FAQs
          </h2>

          <div className="mt-10 space-y-3">
            {PACKAGE_FAQS.map((f, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
                id={`faq-${FAQS.length + i + 1}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  <span>{f.q}</span>
                  <span className="text-2xl font-light text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="container-tight max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-normal text-primary">Industries We Serve</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Google Ads Sri Lanka — Industries We Specialise In
          </h2>
          <p className="mt-5 text-muted-foreground">
            Campaign planning should reflect your industry, service area and customer journey. Regulated sectors require additional eligibility and policy checks.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <div key={i} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                {i}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-r-lg border-l-4 border-primary bg-primary/5 p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-5 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground">
                Don't see your industry?{" "}
                <Link to="/contact-us" className="font-semibold text-primary underline">
                  Contact us
                </Link>{" "}
                — we manage Google Ads campaigns across virtually every business category in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20">
        <div className="container-tight max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-normal text-primary">Frequently Asked Questions</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Google Ads Sri Lanka — Common Questions Answered
          </h2>

          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
                id={`faq-${i + 1}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  <span>{f.q}</span>
                  <span className="text-2xl font-light text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-16"><div className="container-tight max-w-4xl"><h2 className="font-display text-2xl font-bold sm:text-3xl">Choosing Google Ads management in Sri Lanka</h2><p className="mt-5 leading-relaxed text-muted-foreground">Before choosing a provider, confirm who owns the account, what the fee includes, how conversions are tested and how often changes are reviewed. Ask for relevant, verifiable work rather than ranking promises. SeoFX provides Search campaign management, a landing page audit and monthly reporting; additional campaign formats or development should be agreed separately.</p><p className="mt-4 text-muted-foreground">Our <Link to="/services/google-ads-specialist-sri-lanka" className="text-accent underline underline-offset-4">Google Ads specialist services</Link> explain additional campaign options and account reviews. Read our <Link to="/blog/how-to-choose-google-ads-agency-sri-lanka" className="text-accent underline underline-offset-4">agency selection guide</Link> or compare <Link to="/blog/google-ads-vs-facebook-ads-sri-lanka" className="text-accent underline underline-offset-4">Google Ads and Facebook Ads</Link> before choosing a channel.</p><h3 className="mt-8 text-xl font-bold">Local businesses and overseas audiences</h3><p className="mt-3 leading-relaxed text-muted-foreground">SeoFX is based in Rajagiriya and plans campaigns for businesses serving Colombo, Kandy, Galle, Negombo, Jaffna and other Sri Lankan locations. A hotel or tour operator may need to reach overseas trip planners rather than only people currently in Sri Lanka. We choose location settings, search terms and relevant landing pages around your actual customer journey.</p><p className="mt-4 text-sm text-muted-foreground">SeoFX · {SITE.address} · <a href={`mailto:${SITE.email}`} className="text-accent underline">{SITE.email}</a></p></div></section>

      {/* CTA */}
      <section className="border-t border-accent/20 bg-accent/5 py-16 text-center">
        <div className="container-tight max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Plan a Google Ads campaign for your business
          </h2>
          <p className="mt-5 text-muted-foreground">
            Share your website, service area and goals. We’ll discuss your Search campaign options, tracking and a practical budget in a free, no-obligation strategy call.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact-us">Book Your Free Strategy Call <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" >
              <a href={`tel:${SITE.phoneRaw}`}><Phone className="mr-2 size-4" /> {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </section>
      <BriefAdditions samples />
    </Layout>
  );
};

export default GoogleAdsSriLanka;
