import { useParams, Navigate, Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import { ServicePageContent } from "@/components/ServicePageContent";
import { getServicePageContent } from "@/lib/service-page-content";

const ServiceDetail = () => {
  const { slug } = useParams();
  const page = getServicePageContent(`/services/${slug}`);
  if (page) return <ServicePageContent page={page} />;
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    provider: { "@id": "https://seofx.lk/#organization" },
    description: service.seoDescription,
    url: `https://seofx.lk/services/${service.slug}`,
  };

  return (
    <Layout>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`/services/${service.slug}`}
        keywords={service.keywords}
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* Hero */}
      <section className="container-tight py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="badge-pill">{service.hero.eyebrow}</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              {service.hero.h1}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{service.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link to="/contact-us">
                  Get a Free Quote <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/seo-packages-sri-lanka">View Packages</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card-feature">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-accent-foreground shadow-glow">
                <Icon className="size-6" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold">{service.shortTitle} — At a Glance</h2>
              <ul className="mt-4 space-y-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is */}
      {service.slug === "seo-web-development-sri-lanka" && <section className="container-tight pb-10"><p className="text-muted-foreground">Before approving a design or rebuilding your site, explore <Link to="/services/seo-consulting-sri-lanka" className="font-semibold text-accent hover:underline">SEO planning for new websites and redesigns</Link> to align keyword research, URLs and developer requirements.</p></section>}
      <section className="bg-soft py-16">
        <div className="container-tight grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-extrabold">{service.whatIs.heading}</h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-base text-muted-foreground">
            {service.whatIs.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="container-tight py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{service.whatWeDo.heading}</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {service.whatWeDo.items.map((item) => (
            <article key={item.title} className="card-feature">
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-soft py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{service.benefits.heading}</h2>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
            {service.benefits.items.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border bg-background p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="container-tight py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{service.process.heading}</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.steps.map((step, i) => (
            <article key={step.title} className="card-feature">
              <span className="font-display text-xs font-bold tracking-widest text-muted-foreground">
                STEP 0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-soft py-16">
        <div className="container-tight max-w-4xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{service.whyUs.heading}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{service.whyUs.body}</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="container-tight py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {service.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border bg-background p-5">
                <summary className="cursor-pointer list-none font-display font-semibold">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-soft py-16">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-pill">More Services</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Explore Our Other SEO Services
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="card-feature transition hover:-translate-y-1"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground">
                    <SIcon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold">{s.shortTitle}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.cardIntro}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to start with ${service.shortTitle}?`}
        subtitle="Talk to a Sri Lankan SEO specialist today — free, no obligation."
      />
    </Layout>
  );
};

export default ServiceDetail;
