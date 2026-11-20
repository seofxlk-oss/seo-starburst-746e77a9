import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { whatsappHref } from "@/lib/contact-actions";

export const CTASection = ({
  title = "Building or redesigning a website? Talk to us first.",
  subtitle = "Plan your keywords, pages and SEO priorities before investing in your website.",
}: { title?: string; subtitle?: string }) => {
  const { pathname } = useLocation();
  const wa = whatsappHref(pathname);
  return (
    <section className="relative overflow-hidden bg-hero py-20 text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden />
      <div className="container-tight relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill-light">SEO Consultation</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/75 sm:text-lg">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/seo-consultant-sri-lanka">Book an SEO Consultation <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <Link to="/contact-us#audit">Free SEO Audit</Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href={`tel:${SITE.phoneRaw}`}><Phone className="size-4" /> {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
