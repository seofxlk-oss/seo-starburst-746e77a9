import { Link } from "react-router-dom";
import {
  Award,
  Brain,
  Heart,
  MessageSquare,
  ShieldCheck,
  Target,
  ArrowRight,
  CheckCircle2,
  Search,
  Code2,
  PenTool,
  Link2,
  MapPin,
  BarChart3,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import {
  orgSchema,
  websiteSchema,
  localBusinessSchema,
  webPageSchema,
  faqSchema,
} from "@/lib/schema";

const PAGE_URL = "https://seofx.lk/seo-specialist-sri-lanka";

const STATS = [
  { stat: "10+", text: "Years as SEO experts in Sri Lanka" },
  { stat: "50+", text: "Sri Lankan businesses ranked on Google" },
  { stat: "90 Days", text: "Written ranking promise per client" },
];

const TEAM = [
  {
    icon: Brain,
    title: "SEO Strategy Specialists",
    text:
      "Senior strategists with 10+ years developing keyword strategies, content plans and link roadmaps for Sri Lankan businesses across every major industry.",
  },
  {
    icon: Code2,
    title: "Technical SEO Engineers",
    text:
      "Specialists in Core Web Vitals, site architecture, crawl optimisation and schema markup — the backend factors that decide whether Google can rank you at all.",
  },
  {
    icon: PenTool,
    title: "Content SEO Writers",
    text:
      "In-house Sri Lankan writers producing keyword-optimised English content with guidance on Sinhala and Tamil content strategy across the local search landscape.",
  },
  {
    icon: Link2,
    title: "Link Building Specialists",
    text:
      "Outreach experts who manually acquire high-DA, niche-relevant backlinks from reputable Sri Lankan and international publications. No PBNs, no spam, no shortcuts.",
  },
  {
    icon: MapPin,
    title: "Local SEO Specialists",
    text:
      "Experts in Google Business Profile, local citations and Google Maps ranking for Sri Lankan cities — Colombo, Kandy, Galle, Negombo and Jaffna.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    text:
      "GA4, Google Search Console and custom reporting specialists who turn raw SEO data into clear business intelligence on what your investment is delivering.",
  },
];

const METHODOLOGY = [
  {
    title: "Deep Business Discovery",
    text:
      "Before any SEO begins, our experts learn your business model, revenue goals, target customer and competitive landscape. SEO not aligned to business goals is wasted spend.",
  },
  {
    title: "Technical Foundation Audit",
    text:
      "A 150-point audit using Screaming Frog, Ahrefs, SEMrush and Google Search Console — fixing crawl, indexing, duplicate content, redirect chains and missing schema.",
  },
  {
    title: "Sri Lanka Keyword Research",
    text:
      "We chase high-intent terms that convert — not vanity volume. Real search volume, competition and SERP feature analysis across English, Sinhala and Tamil where relevant.",
  },
  {
    title: "Expert On-Page Optimisation",
    text:
      "Senior specialists optimise titles, meta, headings, content depth, internal linking, images, URLs and page speed — matched precisely to search intent.",
  },
  {
    title: "Ethical Authority Building",
    text:
      "Manually-acquired high-DA backlinks via genuine outreach, guest posting, digital PR and partnerships. Every link vetted for relevance, authority and traffic.",
  },
  {
    title: "Monthly Reporting & Strategy",
    text:
      "Detailed monthly reports on rankings, traffic, leads and next-month strategy. SEO is continuous — strategy is refined based on data and algorithm updates.",
  },
];

const COMPARISON = [
  {
    factor: "Strategic depth",
    expert:
      "Dedicated SEO experts who live and breathe search — actively following every algorithm update and testing ranking factors.",
    agency:
      "Account managers handling SEO alongside 10 other services — broad knowledge, shallow depth.",
  },
  {
    factor: "Technical capability",
    expert:
      "Full technical SEO including Core Web Vitals, schema, crawl optimisation and site architecture.",
    agency:
      "Basic on-page SEO — rarely addresses the deep technical issues that block rankings.",
  },
  {
    factor: "Local Sri Lanka knowledge",
    expert:
      "Deep understanding of Sri Lankan search behaviour, Sinhala/Tamil queries and local competition.",
    agency:
      "Generic strategies applied to Sri Lanka without local customisation.",
  },
  {
    factor: "Link building quality",
    expert:
      "Manual, white-hat link acquisition from relevant high-DA sites — every link vetted.",
    agency:
      "Automated tools or low-quality directories that risk Google penalties.",
  },
  {
    factor: "Accountability",
    expert:
      "90-Day Ranking Promise — rankings move in 90 days or we keep working free.",
    agency:
      "Vague promises about 'improvement over time' with no written guarantee.",
  },
  {
    factor: "Reporting depth",
    expert:
      "Granular monthly reports: rankings, traffic, leads, ROI and next-month strategy.",
    agency:
      "Traffic reports with no business context — numbers without meaning.",
  },
  {
    factor: "Contract flexibility",
    expert: "Month-to-month — no lock-in. We earn your business through results.",
    agency: "6–12 month minimum contracts — locked in regardless of results.",
  },
];

const RESULTS = [
  "E-commerce store in Colombo: +220% organic traffic, +360% conversions in 8 months.",
  "Hotel in Galle: ranked #1 for primary booking-intent keyword — 40+ direct enquiries/month from organic search.",
  "Education institute in Kandy: 6 of 10 target keywords on Google page 1 within 5 months.",
  "Real estate agency in Colombo 3: 3× qualified leads from organic, 60% lower cost per lead vs Google Ads.",
  "Professional services firm in Nugegoda: page 1 for 3 of 5 target keywords within 87 days.",
  "Restaurant group in Colombo: top 3 in Google Maps for 8 local search terms — direct walk-in customers.",
];

const WHEN_TO_HIRE = [
  "Your website gets fewer than 500 organic visitors per month after 12+ months active.",
  "You run Google Ads or Facebook Ads but have not invested in organic SEO.",
  "You have worked with an SEO agency before but saw no meaningful results in 6 months.",
  "A competitor that launched after you is outranking you on Google.",
  "You are launching a new website or expanding into a new Sri Lankan city.",
  "Your website was hit by a Google penalty and traffic dropped suddenly.",
  "You want to reduce dependence on paid ads and build sustainable organic leads.",
];

const FAQS = [
  {
    q: "What does an SEO expert in Sri Lanka do?",
    a: "An SEO expert in Sri Lanka analyses, strategises and implements every search engine optimisation activity needed to rank a Sri Lankan business on Google page one — generating organic traffic, leads and revenue without paid ads. This includes technical SEO audits, keyword research for Sri Lankan search intent, on-page optimisation, content strategy, white-hat link building, local SEO, Google Business Profile management and monthly performance reporting. A genuine SEO expert focuses on business outcomes — leads and sales — not just rankings.",
  },
  {
    q: "How do I find the best SEO expert in Sri Lanka?",
    a: "Look for four things: (1) documented case studies with real numbers, (2) transparent methodology you can verify, (3) a 100% white-hat approach with no PBNs or AI-generated content, and (4) clear monthly reporting on rankings, traffic and leads. SeoFX meets all four and adds Sri Lanka's only written 90-Day Ranking Promise.",
  },
  {
    q: "How much does an SEO expert cost in Sri Lanka?",
    a: "A professional SEO expert in Sri Lanka typically costs LKR 29,900–99,900+ per month depending on scope, keyword count and competition. SeoFX packages start at LKR 29,900/month for the Starter (up to 5 keywords) and scale to LKR 99,900+/month for Premium campaigns. All packages are month-to-month with no lock-in and include a free SEO audit. Avoid SEO services priced below LKR 15,000/month — quality and ethics are almost always compromised at that level.",
  },
  {
    q: "How long does it take to see results from an SEO expert in Sri Lanka?",
    a: "Most SeoFX clients see measurable ranking improvements within 60–90 days — guaranteed by our 90-Day Ranking Promise. Meaningful traffic and lead growth typically appears in 4–6 months. Highly competitive niches like finance, insurance and legal can take 6–12 months for top-3 positions. SEO compounds — the longer your campaign runs, the stronger your rankings become.",
  },
  {
    q: "What is the difference between an SEO expert and an SEO consultant in Sri Lanka?",
    a: "An SEO consultant in Sri Lanka typically provides strategic advice and a roadmap without managing day-to-day execution. An SEO expert handles both strategy and implementation, actively managing your campaign from audit through to reporting. SeoFX offers both — a standalone SEO consultation session for businesses wanting expert direction, and full-service SEO expert packages for end-to-end campaign management.",
  },
  {
    q: "Can an SEO expert in Sri Lanka help my local business rank on Google Maps?",
    a: "Yes — local SEO and Google Maps ranking is one of the highest-impact areas an SEO expert in Sri Lanka can deliver. Our local SEO specialists optimise your Google Business Profile, build consistent local citations across Sri Lankan directories, earn reviews and implement LocalBusiness schema. Local businesses in Colombo, Kandy, Galle, Negombo and Jaffna typically achieve major Google Maps improvements within 60–90 days.",
  },
  {
    q: "Is SeoFX the best SEO expert team in Sri Lanka?",
    a: "SeoFX is widely recognised as one of Sri Lanka's most results-focused and transparent SEO expert teams — with 87+ verified 4.9-star Google reviews, 50+ Sri Lankan businesses ranked on page one, 10+ years of local market experience and Sri Lanka's only written 90-Day Ranking Promise. Our entire team focuses exclusively on SEO, delivering deeper specialist knowledge than any generalist agency.",
  },
  {
    q: "Does SeoFX offer a free SEO audit before I hire them?",
    a: "Yes — SeoFX provides a comprehensive free SEO audit for every potential client before any commitment. Your audit covers current ranking positions, technical SEO health (crawl errors, Core Web Vitals, mobile compliance), content gap analysis, backlink profile review and a prioritised list of the highest-impact opportunities. Delivered in 3–5 business days with zero obligation.",
  },
];

const expertLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SeoFX — SEO Expert Sri Lanka",
  description:
    "Sri Lanka's leading SEO expert team — technical SEO, on-page SEO, link building, local SEO and e-commerce SEO for Sri Lankan businesses. 90-Day Ranking Promise included.",
  url: PAGE_URL,
  telephone: "+94777797035",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajagiriya",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  geo: { "@type": "GeoCoordinates", latitude: "6.9022", longitude: "79.8975" },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  priceRange: "LKR 29,900 - LKR 99,900",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
  },
  knowsAbout: [
    "SEO",
    "Search Engine Optimisation",
    "Technical SEO",
    "Link Building",
    "Local SEO",
    "E-commerce SEO",
    "Keyword Research",
    "On-Page SEO",
    "Off-Page SEO",
    "Google Business Profile",
  ],
};

const About = () => {
  return (
    <Layout>
      <SEO
        title="SEO Expert Sri Lanka | SEO Specialist & Consultant | SeoFX"
        description="SeoFX — Sri Lanka's leading SEO expert team. 10+ years ranking Sri Lankan businesses on Google. SEO specialist services in Colombo, island-wide. Free SEO audit."
        canonical="/seo-specialist-sri-lanka"
        keywords="seo expert sri lanka, seo specialist sri lanka, seo consultant sri lanka, best seo expert sri lanka, hire seo expert sri lanka, seo expert colombo, local seo expert sri lanka"
        ogImageAlt="SeoFX — SEO Expert Sri Lanka, leading SEO specialists & consultants"
        jsonLd={[
          orgSchema(),
          websiteSchema(),
          localBusinessSchema(),
          expertLocalBusiness,
          webPageSchema({
            type: "AboutPage",
            name: "SEO Expert Sri Lanka — SeoFX",
            description:
              "SeoFX is Sri Lanka's leading SEO expert team — technical SEO, on-page SEO, link building, local SEO and e-commerce SEO with a written 90-Day Ranking Promise.",
            url: PAGE_URL,
          }),
          faqSchema(FAQS, { pageUrl: PAGE_URL }),
        ]}
      />
      <Breadcrumbs items={[{ label: "SEO Expert Sri Lanka" }]} />

      {/* HERO */}
      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">SEO Expert Sri Lanka</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">SEO Expert Sri Lanka</span> — SeoFX, Sri Lanka's Most Trusted SEO Specialist Team
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            When Sri Lankan businesses need a proven{" "}
            <strong className="text-foreground">SEO expert in Sri Lanka</strong> — not a
            generic agency, not an overseas freelancer, but a dedicated team of SEO
            specialists who understand the local market from the inside — they come to
            SeoFX. Based in Rajagiriya, Colombo, we are the most results-driven{" "}
            <strong className="text-foreground">SEO specialist team in Sri Lanka</strong>,
            with 10+ years ranking Sri Lankan businesses on Google page one.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Our SEO experts combine deep technical knowledge, strategic content expertise
            and ethical link building with an intimate understanding of how Sri Lankan
            consumers search — in Sinhala, Tamil and English. Whether you need a local
            SEO specialist in Colombo or a senior{" "}
            <Link
              to="/seo-consultant-sri-lanka"
              className="text-accent underline-offset-4 hover:underline"
            >
              SEO consultant Sri Lanka
            </Link>{" "}
            for a complex e-commerce or enterprise project, SeoFX has the documented
            expertise, methodology and measurable results to back every claim.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact-us">Get a Free SEO Audit <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/seo-packages-sri-lanka">View SEO Packages</Link>
            </Button>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.stat}
              className="rounded-2xl border border-border bg-soft p-6 text-center"
            >
              <div className="font-display text-4xl font-extrabold text-gradient-accent">
                {s.stat}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IS AN SEO EXPERT */}
      <section className="bg-soft py-20">
        <div className="container-tight mx-auto max-w-4xl">
          <span className="badge-pill">Definition</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            What is an SEO Expert in Sri Lanka — and Why Does It Matter?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              An <strong className="text-foreground">SEO expert in Sri Lanka</strong> is a
              specialist who combines technical website knowledge, search engine
              optimisation strategy and deep local market understanding to rank Sri Lankan
              businesses higher on Google — consistently generating more organic traffic,
              leads and revenue from search.
            </p>
            <p>
              The difference between an SEO expert and a generalist digital marketer is
              the depth of knowledge. A true SEO expert understands not just what to do —
              but why it works, when to apply it, and how to adapt when Google's algorithm
              changes. They read Google's Search Quality Rater Guidelines, test ranking
              factors actively, and build strategies based on data rather than guesswork.
            </p>
            <p className="text-foreground font-semibold">
              In Sri Lanka specifically, an SEO expert needs additional layers of
              knowledge that international consultants lack:
            </p>
            <ul className="space-y-2 pl-5 [list-style:disc] marker:text-accent">
              <li>Sri Lankan search behaviour across Sinhala, Tamil and English queries.</li>
              <li>The local competition landscape and what it really takes to outrank them.</li>
              <li>Google Business Profile optimisation for Colombo, Kandy, Galle, Negombo and Jaffna.</li>
              <li>Sri Lankan website infrastructure issues — slow shared hosting that hurts rankings.</li>
              <li>Industry-specific SEO — hotels, e-commerce, legal, real estate all require different strategies.</li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-accent/30 bg-card p-6">
            <p className="font-display text-base font-bold text-foreground">
              Why local expertise matters
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              An SEO expert in Sri Lanka who has never worked locally will make costly
              strategic errors — chasing keywords with zero local search volume, or
              missing high-value Sinhala and Tamil opportunities a locally-experienced
              specialist would spot immediately.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container-tight py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Our Team</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            The SeoFX SEO Expert Team — Sri Lanka's Most Experienced SEO Specialists
          </h2>
          <p className="mt-4 text-muted-foreground">
            SeoFX is not a one-person operation or a generalist digital agency. We are a
            dedicated SEO specialist team in Sri Lanka — every member works exclusively on
            search engine optimisation, going deeper than any generalist team can.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t) => (
            <article key={t.title} className="card-feature">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                <t.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-soft py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">Methodology</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              How Our SEO Experts in Sri Lanka Approach Every Campaign
            </h2>
            <p className="mt-4 text-muted-foreground">
              What separates a genuine SEO expert in Sri Lanka from an agency going
              through the motions is methodology — the systematic, data-driven approach
              that turns SEO from guesswork into a predictable process.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {METHODOLOGY.map((m, i) => (
              <li key={m.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-gradient font-display text-sm font-extrabold text-accent-foreground">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold">{m.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="container-tight py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Expert vs Agency</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            SEO Expert vs Generic Agency — Why Specialist Knowledge Wins
          </h2>
          <p className="mt-4 text-muted-foreground">
            Many Sri Lankan businesses have had disappointing experiences with generic
            agencies that offer SEO alongside ten other services. Here is why a dedicated
            SEO expert in Sri Lanka consistently produces better results:
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-soft">
              <tr>
                <th className="p-4 font-display text-base">Factor</th>
                <th className="p-4 font-display text-base text-accent">SEO Expert (SeoFX)</th>
                <th className="p-4 font-display text-base text-muted-foreground">Generic Agency</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((c) => (
                <tr key={c.factor} className="border-t border-border align-top">
                  <td className="p-4 font-semibold">{c.factor}</td>
                  <td className="p-4 text-muted-foreground">{c.expert}</td>
                  <td className="p-4 text-muted-foreground">{c.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-soft py-20">
        <div className="container-tight mx-auto max-w-4xl">
          <span className="badge-pill">Expert Services</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            SEO Expert Services in Sri Lanka — What SeoFX Delivers
          </h2>
          <p className="mt-4 text-muted-foreground">
            As Sri Lanka's leading SEO expert team, SeoFX delivers the full spectrum of{" "}
            <Link to="/services" className="text-accent underline-offset-4 hover:underline">
              SEO services in Sri Lanka
            </Link>{" "}
            — every discipline a Sri Lankan business needs to dominate Google.
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                title: "Technical SEO Expertise",
                text:
                  "Our technical SEO experts audit and fix the backend factors that decide whether Google can rank your site at all — Core Web Vitals, crawl errors, indexing, mobile compliance, site speed, sitemaps, robots.txt, canonicals, structured data and redirects.",
              },
              {
                title: "On-Page SEO Specialist Services",
                text:
                  "Every page that targets a revenue keyword is optimised by a dedicated on-page specialist — titles, meta, H1–H3, content depth, internal linking, images and schema. On-page ensures Google understands precisely what each page is about.",
              },
              {
                title: "Off-Page SEO and Link Building",
                text:
                  "Our SEO experts build domain authority through ethical, white-hat link acquisition — manually sourcing high-DA, niche-relevant backlinks from authoritative Sri Lankan and international publications.",
              },
              {
                title: "Local SEO Expert Services in Sri Lanka",
                text:
                  "For businesses serving specific Sri Lankan cities, our local SEO specialists optimise Google Business Profile, build local citations, create location pages and implement local schema — driving Google Maps and local search rankings.",
              },
              {
                title: "Content SEO Strategy",
                text:
                  "Our content SEO specialists develop strategies that build topical authority across your industry — creating the depth of coverage Google's algorithm rewards with sustained high rankings.",
              },
              {
                title: "SEO Consulting and Strategy",
                text: (
                  <>
                    For businesses with internal teams who need expert direction, our{" "}
                    <Link
                      to="/seo-consultant-sri-lanka"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      SEO consultant Sri Lanka
                    </Link>{" "}
                    sessions deliver strategy, audits and ongoing advisory engagements —
                    one-time or monthly.
                  </>
                ),
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-tight py-20">
        <div className="mx-auto max-w-4xl">
          <span className="badge-pill">Proven Results</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            What Sri Lankan Businesses Achieve with SeoFX SEO Experts
          </h2>
          <p className="mt-4 text-muted-foreground">
            The measure of any SEO expert in Sri Lanka is documented, verifiable results
            — see our{" "}
            <Link to="/case-studies" className="text-accent underline-offset-4 hover:underline">
              case studies
            </Link>{" "}
            for the full picture:
          </p>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {RESULTS.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-3xl border border-accent/40 bg-accent-gradient p-8 text-accent-foreground">
            <h3 className="font-display text-2xl font-extrabold">
              90-Day Ranking Promise — Sri Lanka's Only Written SEO Guarantee
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-95">
              Every SeoFX SEO expert engagement includes our written 90-Day Ranking
              Promise. If your target keywords do not move significantly within 90 days,
              our SEO specialists keep working at no additional cost until they do. No
              other SEO expert or agency in Sri Lanka offers this guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN TO HIRE */}
      <section className="bg-soft py-20">
        <div className="container-tight mx-auto max-w-4xl">
          <span className="badge-pill">When to Hire</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            When Does Your Business Need an SEO Expert in Sri Lanka?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Not every business needs a dedicated SEO expert immediately — but these are
            the clear signals that professional engagement is overdue:
          </p>
          <ul className="mt-6 space-y-3">
            {WHEN_TO_HIRE.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <Search className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-tight py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill">Why us</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Why We Are the Best SEO Expert Team in Sri Lanka
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Brain, title: "Knowledge-Based SEO", text: "Built on genuine expert knowledge — never outdated black-hat shortcuts." },
            { icon: Heart, title: "Passionate & Results-Driven", text: "Marketers and strategists who genuinely care about your success." },
            { icon: Target, title: "Custom Strategies", text: "Tailored to your industry, audience, competition and business goals." },
            { icon: MessageSquare, title: "Full Transparency", text: "Regular reports, clear communication, honest updates — always." },
          ].map((f) => (
            <article key={f.title} className="card-feature">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: "100% white-hat SEO" },
            { icon: Award, label: "Proven results across industries" },
            { icon: CheckCircle2, label: "Local Sri Lanka market expertise" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <b.icon className="size-5 text-accent" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft py-20">
        <div className="container-tight mx-auto max-w-4xl">
          <span className="badge-pill">FAQ</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Frequently Asked Questions — SEO Expert Sri Lanka
          </h2>
          <dl className="mt-10 space-y-6">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                <dt className="font-display text-lg font-bold">{f.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Hire Sri Lanka's Most Trusted SEO Expert Team"
        subtitle="Get a free SEO audit from SeoFX and a clear roadmap to dominate Google in Sri Lanka."
      />
    </Layout>
  );
};

export default About;
