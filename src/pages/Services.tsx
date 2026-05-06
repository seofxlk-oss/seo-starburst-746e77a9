import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Eye,
  Search,
  FileText,
  Wrench,
  Link2,
  LineChart,
  MapPin,
  ShoppingCart,
  Hotel,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Building2,
  TrendingUp,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { AIAnswerBlock } from "@/components/AIAnswerBlock";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";

const WHY_CHOOSE = [
  {
    icon: MapPin,
    title: "10+ Years of Sri Lankan SEO Experience",
    text: "SeoFX has been ranking Sri Lankan websites since before most current competitors existed. Our depth of local Sri Lankan market knowledge — across Sinhala, Tamil and English search behaviour — is unmatched.",
  },
  {
    icon: ShieldCheck,
    title: "100% White-Hat SEO Methodology",
    text: "We never use PBNs, black-hat link schemes or manipulative tactics that risk Google penalties. Every technique we use is Google-approved and built to survive every algorithm update.",
  },
  {
    icon: BarChart3,
    title: "Sri Lanka-Specific Keyword Intelligence",
    text: "We understand local query patterns, search behaviour and the competitive landscape across every Sri Lankan city and industry — so your SEO targets buyers, not just traffic.",
  },
  {
    icon: Eye,
    title: "Full Transparency & Monthly Reporting",
    text: "Detailed monthly reports covering rankings, organic traffic, leads and ROI. Direct access to your dedicated Sri Lankan SEO specialist — no jargon, no excuses.",
  },
  {
    icon: TrendingUp,
    title: "Results Tied to Revenue, Not Vanity Metrics",
    text: "We measure success by leads, sales and revenue growth — not just keyword rankings or traffic. Every SEO campaign is aligned to your actual business goals.",
  },
  {
    icon: CheckCircle2,
    title: "No Lock-In Contracts",
    text: "Our SEO service in Sri Lanka operates on flexible monthly arrangements. We earn your continued business through results, not contractual obligation.",
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    step: "Step 01",
    title: "Discovery & Free SEO Audit",
    text: "Complimentary technical SEO audit assessing crawl health, indexing, Core Web Vitals, content quality, backlinks and current rankings in the Sri Lankan market — identifying exactly what's holding you back from page one.",
  },
  {
    icon: FileText,
    step: "Step 02",
    title: "Keyword Research & SEO Strategy",
    text: "Comprehensive keyword research targeting high-intent Sri Lankan search queries, mapped to revenue pages on your site, with a prioritised SEO roadmap and clear monthly milestones.",
  },
  {
    icon: Wrench,
    step: "Step 03",
    title: "On-Site SEO Optimisation",
    text: "Title tags, meta descriptions, headers, internal linking, schema markup, image optimisation, URL fixes, Core Web Vitals improvements and content enhancements — every page optimised before off-site work begins.",
  },
  {
    icon: Link2,
    step: "Step 04",
    title: "Off-Site SEO & Authority Building",
    text: "Manual, white-hat outreach to acquire high-DA, niche-relevant backlinks, plus local citations, Google Business Profile optimisation and digital PR to build domain authority and trust signals.",
  },
  {
    icon: LineChart,
    step: "Step 05",
    title: "Monthly Reporting & Continuous Optimisation",
    text: "Detailed monthly performance reports covering rankings, organic traffic, leads and ROI — plus continuous analysis and optimisation to compound your results month over month.",
  },
];

const INDUSTRIES = [
  { icon: ShoppingCart, name: "E-Commerce SEO Sri Lanka", text: "Product and category page SEO, structured data, faceted navigation management and conversion optimisation for Sri Lankan online stores." },
  { icon: Hotel, name: "Hotel & Tourism SEO Sri Lanka", text: "Local SEO for hotels, villas and tour operators across Colombo, Galle, Kandy and Nuwara Eliya. Ranked for booking-intent keywords." },
  { icon: Stethoscope, name: "Healthcare SEO Sri Lanka", text: "Clinic, hospital and medical practice SEO in Colombo and across Sri Lanka. Specialising in local search and Google Maps ranking." },
  { icon: GraduationCap, name: "Education SEO Sri Lanka", text: "Schools, universities and online education providers. Student intake campaigns and long-tail keyword strategies for course-specific searches." },
  { icon: Building2, name: "Real Estate SEO Sri Lanka", text: "Property developer and real estate agency SEO. Ranking for location-specific property searches across Colombo, Kandy and Galle." },
  { icon: Briefcase, name: "Professional Services SEO", text: "Lawyers, accountants, consultants and B2B firms. Targeting high-intent commercial keywords in Colombo's competitive professional services market." },
];

const LOCATIONS = [
  "Colombo", "Kandy", "Galle", "Negombo", "Jaffna", "Kurunegala",
  "Matara", "Nuwara Eliya", "Anuradhapura", "Trincomalee", "Batticaloa", "Ratnapura",
];

const HERO_STATS = [
  { num: "50+", label: "Sri Lankan businesses ranked" },
  { num: "3×", label: "Average traffic increase" },
  { num: "10+", label: "Years of SEO experience" },
  { num: "100%", label: "White-hat methodology" },
];

const RESULT_STATS = [
  { num: "300%", label: "Average organic traffic increase" },
  { num: "85%", label: "Clients on Google page 1 in 6 months" },
  { num: "50+", label: "Sri Lankan businesses ranked" },
  { num: "LKR 890", label: "Average cost per organic lead" },
];

const SERVICES_AI_ANSWERS = [
  {
    q: "What does an SEO service in Sri Lanka include?",
    a: "A complete SEO service in Sri Lanka from SeoFX includes a comprehensive website SEO audit, keyword research targeting Sri Lankan search intent across Sinhala, Tamil and English queries, on-page optimisation (titles, headers, schema, internal links, content), technical SEO (Core Web Vitals, mobile compliance, crawl health), white-hat off-page SEO and link building, local SEO for Google Maps ranking, and detailed monthly performance reporting.",
  },
  {
    q: "How much does an SEO service in Sri Lanka cost?",
    a: "SEO service pricing in Sri Lanka typically ranges from LKR 30,000 to LKR 150,000+ per month for ongoing managed services. SeoFX's Starter SEO package begins at LKR 30,000/month for local businesses, Growth at LKR 60,000/month for established SMEs, and Enterprise from LKR 120,000/month for highly competitive national keywords.",
  },
  {
    q: "How long does an SEO service take to show results in Sri Lanka?",
    a: "Most Sri Lankan businesses see measurable ranking improvements within 3–4 months. Meaningful organic traffic increases typically appear within 4–6 months. Highly competitive keywords in finance, real estate or insurance may require 6–12 months to achieve top-3 positions.",
  },
  {
    q: "Is an SEO service worth it for small businesses in Sri Lanka?",
    a: "Yes — SEO service in Sri Lanka is one of the highest-ROI marketing investments for small Sri Lankan businesses. Unlike Google Ads or Facebook Ads, a well-executed SEO service builds compounding organic traffic that continues delivering leads and sales indefinitely. SeoFX's Starter package at LKR 30,000/month is specifically designed for SMEs.",
  },
  {
    q: "What makes SeoFX different from other SEO companies in Sri Lanka?",
    a: "SeoFX differentiates through three core principles: 100% white-hat SEO methodology (no PBNs or black-hat shortcuts); full transparency with detailed monthly reports and direct access to your dedicated Sri Lankan SEO specialist; and a revenue focus — we measure success by leads and sales generated, not just rankings.",
  },
  {
    q: "Do you offer a free SEO audit for Sri Lankan businesses?",
    a: "Yes — SeoFX provides a complimentary website SEO audit for Sri Lankan businesses covering current Google rankings, technical SEO health, Core Web Vitals, content quality and gaps, backlink profile analysis and a prioritised list of high-impact improvements. The free audit takes 3–5 business days with no obligation.",
  },
  {
    q: "Which industries do you provide SEO service for in Sri Lanka?",
    a: "SeoFX provides SEO service across e-commerce, hotels and tourism, healthcare clinics, education providers, real estate agencies, professional services (lawyers, accountants, agencies), manufacturing, logistics and B2B companies — across Colombo, Kandy, Galle, Negombo, Jaffna and the entire island.",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="SEO Service in Sri Lanka — Rank #1 on Google | SeoFX"
        description="The best SEO service in Sri Lanka. Full SEO service: audit, keyword research, on-page, technical, link building, local & e-commerce SEO. 50+ brands ranked. Free audit."
        canonical="/services"
        keywords="seo service sri lanka, seo services sri lanka, best seo service sri lanka, seo company sri lanka, technical seo sri lanka, on page seo sri lanka, off page seo sri lanka, local seo sri lanka, ecommerce seo sri lanka, link building sri lanka, seo service price sri lanka"
        ogImageAlt="Best SEO service in Sri Lanka by SeoFX — rank #1 on Google"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          serviceSchema({
            name: "SEO Service in Sri Lanka",
            description:
              "End-to-end SEO service in Sri Lanka — SEO consulting, technical audits, keyword research, on-page SEO, link building, local SEO and content SEO from SeoFX.",
            url: `${SITE.url}/services`,
            offers: SERVICES.map((s) => ({
              name: s.title,
              url: `${SITE.url}/services/${s.slug}`,
              description: s.cardIntro,
            })),
          }),
          faqSchema(SERVICES_AI_ANSWERS, { pageUrl: `${SITE.url}/services` }),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* HERO */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">SEO Service Sri Lanka</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">SEO Service in Sri Lanka</span> — Rank #1 on Google with SeoFX
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            SeoFX delivers the most comprehensive <strong className="text-foreground">SEO service in Sri Lanka</strong> — a complete,
            results-driven search engine optimisation solution that takes Sri Lankan businesses from invisible to page one of Google.
            Whether you are a startup in Colombo, an e-commerce store in Kandy, or an established brand targeting global markets, our
            <strong className="text-foreground"> SEO service</strong> is engineered around one objective: generating real leads, sales and revenue through organic search.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            As the <strong className="text-foreground">best SEO service in Sri Lanka</strong> for businesses that demand measurable results, SeoFX combines deep technical SEO expertise,
            strategic content optimisation, ethical link building and granular keyword research — tailored to Sri Lanka's unique search landscape. With 10+ years of SEO experience
            and 50+ Sri Lankan brands ranked on Google page one, SeoFX is the trusted <strong className="text-foreground">SEO company in Sri Lanka</strong> for businesses serious about dominating search.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm">
                <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">{s.num}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS AN SEO SERVICE */}
      <section className="container-tight pb-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            What is an SEO Service in Sri Lanka?
          </h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              An <strong className="text-foreground">SEO service in Sri Lanka</strong> is a professionally managed search engine optimisation programme that improves your website's
              visibility, ranking and organic traffic on Google. Unlike paid advertising — which stops delivering results the moment your budget runs out — a quality
              <strong className="text-foreground"> SEO service</strong> builds compounding organic growth: the longer you invest, the stronger and more sustainable your results become.
            </p>
            <p>
              In Sri Lanka's rapidly digitalising economy, <strong className="text-foreground">83% of consumers use Google</strong> to find local products and services before making a purchase decision.
              If your business does not appear on the first page of Google for your target keywords, you are invisible to the majority of your potential customers — and losing business directly to competitors who do rank.
            </p>
            <p>A full SEO service in Sri Lanka from SeoFX covers every dimension of search optimisation:</p>
            <ul className="space-y-2">
              {[
                "Technical SEO — ensuring Google can crawl, index and understand your website",
                "On-page SEO — optimising content, headings, meta tags, internal links and schema",
                "Off-page SEO — building your domain authority through quality backlinks and citations",
                "Local SEO — ranking your business in Google Maps and local search results in Sri Lanka",
                "Content SEO — creating keyword-targeted content that attracts and converts your ideal customers",
                "E-commerce SEO — optimising product and category pages for Sri Lankan online stores",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-accent bg-accent/5 p-5">
            <div className="font-display text-xs font-bold tracking-widest text-accent">KEY FACT</div>
            <p className="mt-2 text-sm text-foreground sm:text-base">
              83% of Sri Lankan consumers search on Google before purchasing. Businesses on page 1 capture 91% of all organic clicks. Businesses on page 2 receive less than 5% of total search traffic.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLETE SERVICES */}
      <section className="container-tight pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Full Service Range</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Complete SEO Services in Sri Lanka — Everything Under One Roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            SeoFX provides the full spectrum of SEO services that Sri Lankan businesses need to dominate Google. Every service is delivered by in-house Sri Lankan SEO specialists — never outsourced, never templated.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.slug} className="card-feature group">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-display text-xs font-bold tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">
                  <Link to={`/services/${s.slug}`} className="hover:text-accent">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.cardIntro}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.slice(0, 4).map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE SEOFX */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Why SeoFX</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Why SeoFX is the Best SEO Service in Sri Lanka
            </h2>
            <p className="mt-4 text-muted-foreground">
              There is no shortage of SEO companies in Sri Lanka making promises. The difference with SeoFX is documented, verifiable results — and a methodology that survives every Google algorithm update.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w, i) => {
              const Icon = w.icon;
              return (
                <article key={w.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-xs font-bold tracking-widest text-muted-foreground">
                        0{i + 1}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-bold">{w.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Real Results</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            SEO Service Results — What Sri Lankan Businesses Achieve with SeoFX
          </h2>
          <p className="mt-4 text-muted-foreground">
            Numbers speak louder than promises. Here is what Sri Lankan businesses consistently achieve within 6 months of engaging SeoFX's SEO service in Sri Lanka.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {RESULT_STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
              <div className="font-display text-2xl font-extrabold text-accent sm:text-3xl">{s.num}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <ul className="space-y-3 text-base text-muted-foreground sm:text-lg">
            {[
              "E-commerce store in Colombo: 220% increase in organic traffic, 360% increase in conversions within 8 months.",
              "Hotel in Galle: Ranked #1 for 'hotels in Galle' — generating 40+ direct booking enquiries per month from organic search.",
              "Professional services firm in Kandy: 6 of 10 target keywords on Google page 1 within 5 months.",
              "Real estate agency in Colombo: 3× increase in qualified leads with 60% reduction in cost per acquisition vs Google Ads.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border-l-4 border-accent bg-accent/5 p-5">
            <div className="font-display text-xs font-bold tracking-widest text-accent">CLIENT RESULT</div>
            <p className="mt-2 text-sm text-foreground sm:text-base">
              A Colombo-based education institute engaged SeoFX's SEO service in Sri Lanka targeting 'MBA programmes Sri Lanka' and 12 related keywords. Within 7 months: <strong>#1 ranking</strong> for the primary keyword, <strong>285% increase</strong> in organic enquiries, and cost per lead <strong>70% lower</strong> than their previous PPC campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Our SEO Process</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              How Our SEO Service in Sri Lanka Works — 5-Step Proven Process
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every SeoFX SEO service engagement follows the same proven 5-step process — built around your specific business goals, competitive landscape and Sri Lankan market position.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                  <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <div className="mt-3 font-display text-xs font-bold tracking-widest text-accent">{p.step}</div>
                  <h3 className="mt-1 font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Industries</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              SEO Service in Sri Lanka — Industry-Specific Expertise
            </h2>
            <p className="mt-4 text-muted-foreground">
              Effective SEO requires deep industry knowledge. Generic SEO strategies fail because every industry has different search intent, competition levels and conversion patterns. SeoFX delivers specialised SEO service for Sri Lankan businesses across every major industry.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <article key={ind.name} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold">{ind.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{ind.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Locations</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            SEO Service Across Sri Lanka
          </h2>
          <p className="mt-4 text-muted-foreground">
            Headquartered in Colombo and serving SEO clients island-wide — and Sri Lankan businesses targeting global markets in the UK, Australia, USA and the Middle East.
          </p>
        </div>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {LOCATIONS.map((loc) => (
            <span
              key={loc}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground shadow-sm"
            >
              <MapPin className="size-3.5 text-accent" />
              SEO in {loc}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-tight">
          <AIAnswerBlock
            title="Frequently Asked Questions — SEO Service in Sri Lanka"
            answers={SERVICES_AI_ANSWERS}
            emitSchema={false}
          />
        </div>
      </section>

      <CTASection
        title="Ready to rank #1 on Google in Sri Lanka?"
        subtitle="Get your free SEO audit today — talk to a Sri Lankan SEO specialist, no obligation."
      />
    </Layout>
  );
};

export default Services;
