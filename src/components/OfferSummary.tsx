import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFER_TERMS } from "@/lib/offer-terms";

export function OfferSummary() {
  return (
    <section className="border-y border-border bg-muted/40 py-12 sm:py-16" aria-label="SEO consultation and service pricing">
      <div className="container-tight grid gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{OFFER_TERMS.consultation}</h2>
          <p className="mt-4 flex gap-2 text-muted-foreground"><CheckCircle2 className="mt-1 size-4 shrink-0 text-accent" />{OFFER_TERMS.includes}</p>
          <p className="mt-3 text-muted-foreground">Plan your keywords, website structure and SEO priorities before you build or make major changes.</p>
          <Button asChild variant="hero" className="mt-6"><Link to="/seo-consultant-sri-lanka">Book an SEO Consultation <ArrowRight /></Link></Button>
        </div>
        <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <h3 className="font-display text-xl font-bold">All other services</h3>
          <p className="mt-4 font-semibold text-accent">{OFFER_TERMS.customQuote}</p>
          <p className="mt-3 text-muted-foreground">Audits, monthly SEO, local SEO and Google Ads are scoped around your website and business goals. {OFFER_TERMS.adSpend}</p>
          <Button asChild variant="outline" className="mt-6"><Link to="/contact-us#audit">Free SEO Audit <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}