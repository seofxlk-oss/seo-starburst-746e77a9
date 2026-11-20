import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { CoreSection, CoreList, CoreTable } from "@/components/CorePageSections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { OFFER_TERMS } from "@/lib/offer-terms";
import { AI_SEO_GEO as P, AI_SEO_GEO_FAQS } from "@/lib/ai-seo-geo";
import { whatsappHref } from "@/lib/contact-actions";

const url = `https://seofx.lk${P.path}`;
const link = "font-semibold text-accent hover:underline";

export default function AiSeoGeo() {
  const service = { ...serviceSchema({ name: "AI SEO & GEO Sri Lanka", description: P.description, url }), serviceType: P.serviceType };
  return <Layout>
    <SEO title={P.title} description={P.description} canonical={P.path} jsonLd={[service, faqSchema(AI_SEO_GEO_FAQS, { pageUrl: url })]} />
    <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "AI SEO & GEO" }]} />
    <section className="container-tight py-12 sm:py-16"><div className="max-w-4xl">
      <span className="badge-pill">AI SEO Sri Lanka · SeoFX</span>
      <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl">{P.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Generative engine optimisation (GEO) is the work of making your business the one AI tools mention when people ask for recommendations. It builds on SEO: AI answers draw on pages that already rank, trusted third-party sites and clear facts about your business.</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild variant="hero" size="lg"><Link to={P.ctaHref}>{P.ctaLabel} <ArrowRight className="size-4" /></Link></Button>
        <Button asChild variant="outline" size="lg"><a href={whatsappHref(P.path)} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a></Button>
      </div>
    </div></section>

    <CoreSection title="What is GEO (generative engine optimisation)?" soft>
      <p className="max-w-4xl">GEO is the practice of improving how AI assistants such as ChatGPT, Gemini and Perplexity understand, trust and cite your business. It combines readable website content, direct answers, consistent business facts and credible third-party mentions, so that when someone asks an AI tool for a recommendation, your business is a clear and accurate option.</p>
      <p className="max-w-4xl"><strong className="text-foreground">AEO (answer engine optimisation)</strong> focuses on structuring content as direct answers to specific questions. <strong className="text-foreground">Google AI Overviews</strong> are AI-generated summaries at the top of some Google results, which link to the sources they draw on.</p>
    </CoreSection>

    <CoreSection title="How AI tools decide which businesses to mention">
      <CoreList items={[
        "Content crawlers can read: pages that load and render text without depending on blocked scripts.",
        "Clear answers: direct, factual responses to the questions customers actually ask.",
        "Consistent business facts: the same name, location and services everywhere you are listed.",
        "Mentions and reviews on trusted third-party sites that AI tools already cite.",
        "Structured data that matches the visible content on your pages.",
      ]} />
    </CoreSection>

    <CoreSection title="What our AI SEO & GEO service includes" soft>
      <CoreTable headings={["Deliverable", "What we do"]} rows={[
        ["AI visibility audit", "Test 20–30 real prompts in ChatGPT, Gemini, Perplexity, Copilot and Google AI Mode, and record where you appear."],
        ["Technical access", "Review robots.txt, AI crawler access, llms.txt and rendering checks."],
        ["Entity cleanup", "Make your name, location and services consistent across your Google Business Profile, LinkedIn, Facebook and directories."],
        ["Answer-ready content", "Restructure key pages with direct answers, FAQs, comparison tables and facts."],
        ["Structured data", "Organization, Service and FAQ schema."],
        ["Third-party mentions", "Listings and profiles on the review platforms and directories AI tools cite."],
        ["Monthly AI visibility report", "Prompt results, AI referral traffic and next priorities."],
      ]} />
    </CoreSection>

    <CoreSection title="GEO vs traditional SEO">
      <CoreTable headings={["", "Traditional SEO", "GEO"]} rows={[
        ["Goal", "Rank pages in search results.", "Be mentioned or cited in AI-generated answers."],
        ["Where you appear", "Google and Bing results pages.", "ChatGPT, Gemini, Perplexity, Copilot and AI Overviews."],
        ["Main signals", "Relevance, technical health, links.", "Readable facts, clear answers, consistent entity data, trusted mentions."],
        ["How it's measured", "Rankings, clicks and Search Console data.", "Prompt tracking, AI referral traffic and branded search."],
        ["Timeline", "Usually months.", "Usually months; varies by tool and topic."],
      ]} />
    </CoreSection>

    <CoreSection title="Building a new website? Plan for AI search from day one" soft>
      <p className="max-w-4xl">It is easier to build crawlable pages, clear answers and correct schema into a new site than to retrofit them. Our <Link to="/services/seo-consulting-sri-lanka" className={link}>SEO Before You Build</Link> plan includes AI search requirements alongside keywords, URLs and the developer specification.</p>
    </CoreSection>

    <CoreSection title="How we measure AI visibility">
      <CoreList items={[
        "Prompt tracking: the same agreed prompts tested each month across AI tools.",
        "AI referral traffic in GA4 from tools such as ChatGPT, Perplexity and Copilot.",
        "Branded search growth in Google Search Console.",
      ]} />
    </CoreSection>

    <CoreSection title="Sample AI visibility report" soft>
      <p className="font-semibold text-accent">Sample · Fictional business: "Lanka Leaf Tours", Kandy</p>
      <CoreTable headings={["Prompt", "ChatGPT", "Gemini", "Perplexity", "Next action"]} rows={[
        ["Best tea estate tours near Kandy", "Not mentioned", "Mentioned", "Cited (website)", "Add a direct-answer tour comparison section."],
        ["Family-friendly day tours from Kandy", "Mentioned", "Not mentioned", "Not mentioned", "Gain listings on cited travel directories."],
        ["Who offers private tea tours in Sri Lanka?", "Not mentioned", "Not mentioned", "Mentioned", "Align business facts across profiles."],
      ]} />
      <p className="text-sm">Illustrative example only; not a real client or real results.</p>
    </CoreSection>

    <CoreSection title="Pricing">
      <p>{P.pricing}. Or start with an <Link to="/seo-consultant-sri-lanka" className={link}>{OFFER_TERMS.consultation.replace("SEO Consultation", "SEO consultation")}</Link>.</p>
      <Button asChild variant="hero"><Link to={P.ctaHref}>{P.ctaLabel}</Link></Button>
    </CoreSection>

    <CoreSection title="AI SEO & GEO questions" soft>
      <div className="max-w-4xl"><Accordion type="single" collapsible>{AI_SEO_GEO_FAQS.map((f, i) => <AccordionItem key={f.q} value={`faq-${i}`}><AccordionTrigger className="gap-4 text-left text-base font-semibold text-foreground">{f.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}</Accordion></div>
    </CoreSection>

    <CoreSection title="Related services">
      <ul className="flex flex-wrap gap-4">
        <li><Link to="/services/website-audit-sri-lanka" className={link}>SEO Audit</Link></li>
        <li><Link to="/services/on-page-seo-sri-lanka" className={link}>On-Page SEO</Link></li>
        <li><Link to="/services/seo-consulting-sri-lanka" className={link}>SEO Before You Build</Link></li>
      </ul>
    </CoreSection>
    <CTASection />
  </Layout>;
}
