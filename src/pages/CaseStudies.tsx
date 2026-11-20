import { Link } from "react-router-dom";
import { ArrowRight, Award, MapPin, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { SampleWork } from "@/components/CorePageSections";
import caseImg from "@/assets/case-porkendeli.jpg";

const CaseStudies = () => {
  return (
    <Layout>
      <SEO
        title="Our Work – SEO Samples & Results | SeoFX"
        description="See SeoFX project work: the PorKenDeli restaurant case study, labelled sample deliverables and our founding client programme."
        canonical="/case-studies"
        keywords="seo case studies sri lanka, seo results sri lanka, seo success stories sri lanka, sri lanka seo portfolio, seo company sri lanka, best seo company sri lanka, proven seo results sri lanka"
        ogImageAlt="SEO case studies from Sri Lankan brands — real ranking & traffic results by SeoFX"
      />
      <Breadcrumbs items={[{ label: "Our Work" }]} />

      <section className="container-tight py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-pill">Our Work</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Our Work
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A featured project, sample deliverables showing exactly what you receive, and a founding client programme for businesses that want to start early.
          </p>
        </div>
      </section>

      <section className="container-tight pb-20">
        <article className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src={caseImg}
              alt="PorKenDeli SEO case study"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-accent-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-glow">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> Dehiwala, Colombo
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              PorKenDeli.lk — Restaurant SEO Case Study
            </h2>
            <p className="mt-2 text-sm text-accent font-semibold">Industry: Food & Restaurant</p>
            <p className="mt-4 text-muted-foreground">
              Read the full case study to learn how we transformed PorKenDeli.lk from a website with zero organic
              traffic into a thriving online lead generation machine.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-border py-5">
              <div>
                <TrendingUp className="size-4 text-accent" />
                <div className="mt-2 font-display text-sm font-bold">Organic Traffic ↑</div>
                <div className="text-xs text-muted-foreground">Significant growth</div>
              </div>
              <div>
                <Award className="size-4 text-accent" />
                <div className="mt-2 font-display text-sm font-bold">Local visibility</div>
                <div className="text-xs text-muted-foreground">Profile and website improvements</div>
              </div>
              <div>
                <MapPin className="size-4 text-accent" />
                <div className="mt-2 font-display text-sm font-bold">Reach</div>
                <div className="text-xs text-muted-foreground">National & intl.</div>
              </div>
            </div>

            <Button asChild variant="hero" size="lg" className="mt-6">
              <Link to="/case-studies/porkendeli-seo-case-study">
                Read Full Case Study <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </article>

      </section>

      <SampleWork title="Sample deliverables" />

      <section className="container-tight py-16">
        <div className="rounded-2xl border border-border bg-soft p-8">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Founding client programme</h2>
          <p className="mt-3 text-muted-foreground">We are taking on a limited number of founding clients at a reduced fee. In return, we publish the results as case studies, only with your permission. Places and terms are confirmed after a free analysis.</p>
          <Button asChild variant="hero" size="lg" className="mt-5"><Link to="/contact-us#partner">Ask about a founding place <ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CaseStudies;
