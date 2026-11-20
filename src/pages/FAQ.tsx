import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { orgSchema, websiteSchema, localBusinessSchema, faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const faqs = [
  { q: "How does working with SeoFX start?", a: "We begin with a free analysis of your website and goals. You then receive a recommended scope and a written quote, or you can start with an SEO Consultation from LKR 50,000." },
  { q: "What is your process?", a: "Research and audit first, then fixes and page improvements, then ongoing content, local SEO and reporting. See How We Work for the full timeline." },
  { q: "How do payments work?", a: "Fees and payment terms are agreed in writing before work starts. One-time work is usually paid in stages; ongoing work is billed monthly." },
  { q: "Do I have to sign a long contract?", a: "No long lock-in is required. Ongoing SEO usually needs a few months to show progress, so we agree the scope and notice period with you upfront." },
  { q: "Who owns my website and accounts?", a: "You do. Your website, Search Console, GA4 and Google Business Profile stay in your name." },
  { q: "Where are you located?", a: "SeoFX is based in Rajagiriya, Sri Lanka, and works with businesses across the country online and by phone." },
  { q: "Where can I find answers about a specific service?", a: "Each service page has its own questions and answers, for example SEO audits, Google Maps optimisation, Google Ads and AI SEO." },
];

const FAQ = () => {
  const jsonLd = [
    orgSchema(),
    websiteSchema(),
    localBusinessSchema(),
    faqSchema(faqs, { pageUrl: `${SITE.url}/faq` }),
  ];

  return (
    <Layout>
      <SEO
        title="FAQ – Working With SeoFX | SeoFX"
        description="Answers about working with SeoFX: how we start, our process, payments, contracts, account ownership and our Rajagiriya location."
        canonical="/faq"
        keywords="seo faq sri lanka, seo questions sri lanka, seo price sri lanka, seo cost sri lanka, how long does seo take sri lanka, seo packages sri lanka, seo company sri lanka, seo service questions sri lanka"
        ogImageAlt="SEO FAQ — Sri Lanka SEO pricing, timelines & results explained by SeoFX"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">FAQ</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            SEO Questions Answered by Sri Lanka's <span className="text-gradient-accent">SeoFX SEO Specialists</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Have questions about SEO services in Sri Lanka? You are not alone. Here are the most frequently asked
            questions we receive from Sri Lankan business owners — answered honestly by our team.
          </p>
        </div>
      </section>

      <section className="container-narrow pb-20">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all open:shadow-card"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-lg font-bold text-foreground">
                <span><span className="text-accent">{i + 1}.</span> {f.q}</span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default FAQ;
