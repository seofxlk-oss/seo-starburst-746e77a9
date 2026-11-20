import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { CoreSection, CoreList, CoreTable } from "@/components/CorePageSections";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { OFFER_TERMS } from "@/lib/offer-terms";
import type { ServicePageContent as Content } from "@/lib/service-page-content";

export function ServicePageContent({ page }: { page: Content }) {
  return <Layout>
    <SEO title={page.title} description={page.description} canonical={page.path} jsonLd={[serviceSchema({ name: page.h1, description: page.description, url: `https://seofx.lk${page.path}` }), faqSchema(page.faqs, { pageUrl: `https://seofx.lk${page.path}` })]} />
    <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: page.h1 }]} />
    <section className="container-tight py-12 sm:py-16"><div className="max-w-4xl"><span className="badge-pill">SEO services · SeoFX</span><h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl">{page.h1}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{page.intro}</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="hero" size="lg"><Link to="/seo-consultant-sri-lanka">Book an SEO Consultation <ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/contact-us#audit">Free SEO Audit</Link></Button></div></div></section>
    <CoreSection title="What’s included" soft><CoreTable headings={["Deliverable", "What you receive"]} rows={page.deliverables} /></CoreSection>
    <CoreSection title="Who it’s for"><CoreList items={page.audience} /></CoreSection>
    <CoreSection title="How we do it" soft><ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{page.steps.map(([title, body], i) => <li key={title}><span className="font-display text-3xl font-bold text-accent">0{i + 1}</span><h3 className="mt-3 font-display text-lg font-bold text-foreground">{title}</h3><p className="mt-3 text-sm">{body}</p></li>)}</ol></CoreSection>
    <CoreSection title="Sample deliverable"><p className="font-semibold text-accent">Sample · {page.sample.business}</p><CoreTable headings={page.sample.headings} rows={page.sample.rows} /><p className="text-sm">Fictional example business. This preview illustrates the deliverable, not a real client result or a promised outcome.</p></CoreSection>
    <CoreSection title="Pricing" soft><p className="font-display text-xl font-bold text-foreground">{OFFER_TERMS.customQuote}</p><p>We confirm scope, responsibilities and fees before starting. Implementation and ongoing review are agreed separately where relevant.</p><Link to="/seo-packages-sri-lanka" className="font-semibold text-accent hover:underline">SEO packages & pricing</Link></CoreSection>
    <CoreSection title="FAQ"><div className="max-w-4xl"><Accordion type="single" collapsible>{page.faqs.map((f, i) => <AccordionItem key={f.q} id={`faq-${i + 1}`} value={`q-${i}`}><AccordionTrigger className="gap-4 text-left text-base font-semibold text-foreground">{f.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}</Accordion></div></CoreSection>
    <CoreSection title="Related services" soft><div className="grid gap-5 sm:grid-cols-3">{page.related.map(([title, href]) => <Link key={href} to={href} className="flex items-center justify-between gap-3 border-b border-border py-4 font-semibold text-accent hover:underline">{title}<ArrowRight className="size-4 shrink-0" /></Link>)}</div></CoreSection>
    <CTASection />
  </Layout>;
}