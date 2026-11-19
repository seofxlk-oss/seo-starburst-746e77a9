import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Check, Globe2, Search, Target, Video, ShoppingBag, Phone, MessageCircle, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE } from "@/lib/site";
import { faqSchema, orgSchema, serviceSchema } from "@/lib/schema";
import { GOOGLE_ADS_SPECIALIST as PAGE, SPECIALIST_FAQS } from "@/lib/google-ads-specialist";
import office from "@/assets/google-ads-specialist-office.jpg";

const SERVICES = [
  { icon: Search, title: "Google Search Ads", body: "Reach people searching for exactly what you sell. We build focused keyword groups, add negative keywords and write relevant ads for Sri Lankan customers." },
  { icon: Target, title: "Performance Max", body: "Reach eligible audiences across Google's channels from one campaign. We supply relevant assets, audience signals and conversion data so optimisation focuses on business outcomes." },
  { icon: Video, title: "YouTube & Display Ads", body: "Build awareness with video and image campaigns, and reconnect with past visitors where consent, audience size and Google's policies allow." },
  { icon: ShoppingBag, title: "Shopping & Product Campaigns", body: "For eligible e-commerce stores and supported target markets, we help configure Merchant Center, product feeds and campaigns. Availability is checked before recommending this format." },
  { icon: BarChart3, title: "Conversion Tracking — GA4 & GTM", body: "Measure calls, WhatsApp clicks, forms and sales with Google Analytics 4 and Google Tag Manager. We distinguish contact clicks from actual leads so reports stay meaningful." },
  { icon: SlidersHorizontal, title: "Account Audit & Rescue", body: "Already running ads? We review search terms, bidding, account structure, landing pages and tracking to find wasted spend and prioritise practical improvements." },
];
const BENEFITS = [
  ["Less wasted ad spend", "Search-term reviews identify irrelevant searches. We use negative keywords thoughtfully rather than blocking searches that could bring customers."],
  ["Better ad relevance", "Stronger ads and useful landing pages can improve performance in Google's auction. We test improvements rather than promise a fixed cost per click."],
  ["Sri Lankan market knowledge", "Mobile-first searches, WhatsApp enquiries, Singlish terms and seasonal demand all inform your campaign strategy."],
  ["Your time back", "Focus on your business while we handle campaign changes, tests, policy updates and clear reporting."],
];
const STEPS = [
  ["Free Audit & Strategy Call", "We learn your goals, margins and customers, then review your website or existing account."],
  ["Keyword & Competitor Research", "We find high-intent searches and map the competition in your target markets."],
  ["Tracking Setup", "We configure and test meaningful conversion events before campaign launch."],
  ["Campaign Build & Launch", "We build a clear account structure, prepare ads and submit campaigns for Google's approval."],
  ["Weekly Optimisation", "We review bids, search terms, ad tests and budgets, using conversion data to guide changes."],
  ["Monthly Report & Review", "See spend, enquiries, cost per lead and revenue where measurable, alongside the next month's priorities."],
];
const INDUSTRIES = ["Healthcare & Dental Clinics", "Real Estate & Apartments", "Education & Tuition", "Hotels & Tourism", "Restaurants & Food Delivery", "E-commerce Stores", "Legal & Professional Services", "Construction & Interiors", "Vehicle Sales & Rentals", "Beauty Salons & Spas", "IT & Software", "Export & B2B"];
const RELATED = [
  ["Google Ads Sri Lanka", "/google-ads-sri-lanka", "Understand PPC, campaign costs and Ads vs SEO."],
  ["SEO Sri Lanka", "/seo-sri-lanka", "Build organic visibility alongside paid campaigns."],
  ["Google Map Optimization", "/google-map-optimization", "Strengthen your local business presence."],
  ["SEO Services", "/services", "Explore keyword research, audits and technical SEO."],
  ["SEO Consultation", "/seo-consultant-sri-lanka", "Plan a stronger website and search strategy."],
  ["Case Studies", "/case-studies", "Explore our published client work."],
];
const whatsapp = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi SeoFX, I'd like a free Google Ads audit.")}`;

export default function GoogleAdsSpecialist() {
  const pageUrl = `${SITE.url}${PAGE.path}`;
  return (
    <Layout>
      <SEO title={PAGE.title} description={PAGE.description} canonical={PAGE.path} keywords="Google Ads specialist Sri Lanka, Google Ads management Sri Lanka, PPC specialist Sri Lanka" jsonLd={[
        orgSchema(),
        serviceSchema({ name: "Google Ads Specialist Services in Sri Lanka", description: PAGE.description, url: pageUrl, serviceType: "Google Ads management (PPC)", offers: [
          { name: "Search Ads Bridge", price: String(PAGE.monthlyManagementFee), priceCurrency: "LKR", url: pageUrl, description: "Monthly management fee. Ad spend is paid separately to Google." },
          { name: "Ads Now + SEO for Life", url: pageUrl, description: "Google Ads and SEO management bundle, quoted separately according to scope." },
        ] }),
        faqSchema(SPECIALIST_FAQS, { pageUrl }),
      ]} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Google Ads Specialist Sri Lanka" }]} />

      <section className="border-b border-border bg-background py-10 sm:py-14">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <span className="badge-pill tracking-normal"><Target className="size-3.5" /> Google Ads Management · Sri Lanka</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl md:text-6xl"><span className="text-gradient-accent">Google Ads Specialist</span><br />in Sri Lanka</h1>
            <p className="mt-5 text-xl font-semibold">Turn clicks into customers.</p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Stop paying for clicks that never call. SeoFX builds, manages and optimises your campaigns every week, with a clear focus on leads, sales and cost per customer.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg"><Link to="/contact-us">Get a Free Google Ads Audit <ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><a href={whatsapp}><MessageCircle className="mr-2 size-4" /> WhatsApp Us</a></Button>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="size-4 shrink-0 text-success" /> Your account. Your budget. Transparent management.</p>
          </div>
          <div className="mt-10 grid gap-5 border-t border-border pt-6 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
            <div className="sm:px-5"><p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Monthly management</p><p className="mt-2 font-display text-xl font-extrabold tracking-normal text-accent">From Rs. {PAGE.monthlyManagementFee.toLocaleString("en-LK")}</p><p className="mt-1 text-sm text-muted-foreground">Ad spend paid separately to Google</p></div>
            <div className="sm:px-5"><p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Campaign approach</p><p className="mt-2 font-display text-xl font-extrabold tracking-normal">Research. Test. Optimise.</p><p className="mt-1 text-sm text-muted-foreground">Weekly improvements, monthly reporting</p></div>
            <div className="sm:px-5"><p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Based in Rajagiriya</p><p className="mt-2 font-display text-xl font-extrabold tracking-normal">Serving Sri Lanka</p><p className="mt-1 text-sm text-muted-foreground">Local and overseas audience strategies</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-tight grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold text-accent">Expertise behind every click</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-normal sm:text-3xl">What Is a Google Ads Specialist?</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground"><strong className="text-foreground">A Google Ads specialist plans, builds and manages paid advertising campaigns.</strong> They choose keywords, write ads, set bids and budgets, track conversions and optimise performance so your advertising supports measurable business goals.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Anyone can switch on Google Ads. The hard part is avoiding wasted spend: irrelevant search terms, weak ads, poor landing pages and broken tracking. A specialist connects these pieces and evaluates what actually brings qualified enquiries.</p>
            <p className="mt-4 text-muted-foreground">For a broader introduction, read our <Link className="font-medium text-accent underline underline-offset-4" to="/google-ads-sri-lanka">Google Ads Sri Lanka guide</Link>.</p>
          </div>
          <figure className="overflow-hidden rounded-lg">
            <img src={office} alt="Illustrative campaign planning scene in a Colombo office" width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full object-cover" />
          </figure>
        </div>
      </section>

      <section className="bg-muted/40 py-12 sm:py-16"><div className="container-tight">
        <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold text-accent">Our Services</p><h2 className="mt-2 font-display text-2xl font-extrabold tracking-normal sm:text-3xl">What Our Google Ads Specialists Do for You</h2></div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.map(({ icon: Icon, title, body }) => <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm"><span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent"><Icon className="size-5" /></span><h3 className="mt-4 font-display text-lg font-bold tracking-normal">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}</div>
      </div></section>

      <section className="py-12 sm:py-16"><div className="container-tight"><h2 className="max-w-3xl font-display text-2xl font-extrabold tracking-normal sm:text-3xl">Why Hire a Google Ads Specialist in Sri Lanka?</h2><div className="mt-9 grid gap-x-12 gap-y-8 sm:grid-cols-2">{BENEFITS.map(([title, body]) => <article key={title} className="border-t border-border pt-5"><h3 className="font-display text-lg font-bold tracking-normal">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></article>)}</div></div></section>

      <section id="packages" className="scroll-mt-20 border-y border-border bg-muted/40 py-12 sm:py-16"><div className="container-tight"><p className="text-sm font-semibold text-accent">Pricing</p><h2 className="mt-2 font-display text-2xl font-extrabold tracking-normal sm:text-3xl">Google Ads Specialist Pricing in Sri Lanka</h2><p className="mt-4 text-muted-foreground">Transparent management fees. Your ad budget is paid directly to Google through your own account.</p><div className="mt-9 grid gap-6 md:grid-cols-2">{[
        { name: "Search Ads Bridge", featured: false, items: ["Google Search campaigns", "Keyword research & negative keywords", "Conversion tracking setup (GA4, GTM)", "Weekly optimisation", "Monthly performance report", "Landing page audit & recommendations"] },
        { name: "Ads Now + SEO for Life", featured: true, items: ["Everything in Search Ads Bridge", "Additional campaign types where suitable", "Full SEO campaign alongside your ads", "Paid spend reviewed as organic visibility grows", "Monthly strategy call", "Combined Ads and SEO reporting"] },
      ].map(p => <article key={p.name} className={`flex flex-col rounded-lg border bg-card p-6 sm:p-8 ${p.featured ? "border-accent shadow-md" : "border-border shadow-sm"}`}>
        <p className="min-h-5 text-xs font-semibold text-accent">{p.featured ? "Recommended · Ads + SEO" : "Search-first management"}</p><h3 className="mt-3 font-display text-xl font-bold tracking-normal">{p.name}</h3><div className="mt-5 min-h-16">{p.featured ? <p className="text-2xl font-bold">Tailored to your business</p> : <><p className="text-3xl font-bold">Rs. {PAGE.monthlyManagementFee.toLocaleString("en-LK")}</p><p className="text-sm text-muted-foreground">per month · management only</p></>}</div><p className="mt-3 text-sm text-muted-foreground">{p.featured ? "Ads management and SEO are scoped separately. Ask about a bundle discount." : "Ad spend is separate. Paid traffic stops when your campaign stops serving."}</p><ul className="my-6 flex-1 space-y-3">{p.items.map(item => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-success" /><span>{item}</span></li>)}</ul><Button asChild variant={p.featured ? "hero" : "outline"}><Link to="/contact-us">{p.featured ? "Request Your Bundle Quote" : "Start With a Free Audit"}<ArrowRight className="ml-2 size-4" /></Link></Button></article>)}</div><p className="mt-6 text-sm leading-relaxed text-muted-foreground">Suggested starting ad budget: Rs. 1,500–3,000 per day, depending on competition and your goals. This is a planning range, not a minimum or a results guarantee.</p></div></section>

      <section className="py-12 sm:py-16"><div className="container-tight"><p className="text-sm font-semibold text-accent">How It Works</p><h2 className="mt-2 font-display text-2xl font-extrabold tracking-normal sm:text-3xl">Our Google Ads Management Process</h2><ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{STEPS.map(([title, body], i) => <li key={title} className="border-t border-border pt-5"><span className="text-sm font-bold text-accent">0{i + 1}</span><h3 className="mt-3 font-display text-lg font-bold tracking-normal">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></li>)}</ol></div></section>

      <section className="bg-muted/40 py-12 sm:py-16"><div className="container-narrow"><h2 className="font-display text-2xl font-extrabold tracking-normal sm:text-3xl">SeoFX, a Freelancer or Doing It Yourself?</h2><p className="mt-4 text-muted-foreground">Compare the scope of support, not just the fee. Freelancers differ, so confirm deliverables before choosing.</p><div className="mt-8 overflow-x-auto"><table className="w-full min-w-[600px] text-left text-sm"><thead className="bg-secondary text-secondary-foreground"><tr>{["What to check", "SeoFX", "Freelancer", "DIY"].map(x => <th key={x} className="p-4">{x}</th>)}</tr></thead><tbody>{[
        ["Weekly campaign reviews", "Included", "Confirm frequency", "Your responsibility"], ["Calls, forms & WhatsApp tracking", "Setup included", "Confirm scope", "Configure and test"], ["Local keyword research", "Included", "Confirm coverage", "Research yourself"], ["SEO alongside paid campaigns", "Available as a bundle", "Confirm expertise", "Separate workstream"], ["Account and data ownership", "Your account", "Confirm in writing", "Your account"], ["Monthly performance reporting", "Included", "Confirm detail", "Prepare yourself"],
      ].map(row => <tr key={row[0]} className="border-b border-border">{row.map((cell, i) => <td key={i} className={`p-4 ${i === 0 ? "font-semibold" : "text-muted-foreground"}`}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>



      <section className="bg-muted/40 py-12 sm:py-16"><div className="container-tight"><h2 className="font-display text-2xl font-extrabold tracking-normal sm:text-3xl">Industries We Run Google Ads For</h2><ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">{INDUSTRIES.map(x => <li key={x} className="flex items-center gap-2 text-sm"><Globe2 className="size-4 shrink-0 text-accent" />{x}</li>)}</ul><h2 className="mt-12 text-2xl font-bold tracking-normal">Google Ads Specialist Services Across Sri Lanka</h2><p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">Based in Rajagiriya, we help businesses in Colombo, Nugegoda, Dehiwala, Negombo, Gampaha, Kandy, Kurunegala, Galle, Matara, Jaffna and Batticaloa. We also plan overseas campaigns for Sri Lankan brands targeting relevant audiences in the UK, Australia, the Middle East and beyond. Regulated industries and target markets require policy checks before launch.</p></div></section>

      <section className="py-12 sm:py-16">
        <div className="container-narrow">
          <div className="text-center"><p className="text-sm font-semibold text-accent">Your questions, answered</p><h2 className="mt-3 font-display text-2xl font-extrabold tracking-normal sm:text-3xl">Google Ads Specialist — Frequently Asked Questions</h2></div>
          <Accordion type="single" collapsible className="mt-8 border-t border-border">
            {SPECIALIST_FAQS.map((f, i) => <AccordionItem key={f.q} value={`faq-${i + 1}`} id={`faq-${i + 1}`}><AccordionTrigger className="gap-5 py-5 text-left font-semibold hover:text-accent hover:no-underline">{f.q}</AccordionTrigger><AccordionContent className="pr-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section className="bg-muted/40 py-12 sm:py-16"><div className="container-tight"><h2 className="font-display text-2xl font-extrabold tracking-normal sm:text-3xl">Grow With Ads + SEO Together</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{RELATED.map(([title, href, body]) => <Link key={href} to={href} className="group border-t border-border py-5"><h3 className="flex items-center justify-between gap-2 font-display text-lg font-bold tracking-normal group-hover:text-accent">{title}<ArrowRight className="size-4 shrink-0" /></h3><p className="mt-2 text-sm text-muted-foreground">{body}</p></Link>)}</div></div></section>

      <section className="border-t border-accent/20 bg-accent/5 py-12 sm:py-16"><div className="container-narrow text-center"><p className="text-sm font-semibold text-muted-foreground">Free Google Ads Audit</p><h2 className="mt-3 font-display text-2xl font-extrabold tracking-normal sm:text-3xl text-foreground">Ready to Hire a Google Ads Specialist in Sri Lanka?</h2><p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Send us your website or ask about an account review. We'll identify where your budget could work harder and discuss your next steps, with no obligation.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild variant="hero" size="lg"><a href={whatsapp}><MessageCircle className="mr-2 size-4" />WhatsApp for a Free Audit</a></Button><Button asChild variant="outline" size="lg"><a href={`tel:${SITE.phoneRaw}`}><Phone className="mr-2 size-4" />{SITE.phone}</a></Button></div><p className="mt-6 text-sm text-muted-foreground">SeoFX · {SITE.address} · <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a></p></div></section>
    </Layout>
  );
}