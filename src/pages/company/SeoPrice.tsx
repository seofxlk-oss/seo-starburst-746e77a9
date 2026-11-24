import { Link } from "react-router-dom";
import { CoreShell, CoreSection, CoreList, CoreTable, ConsultationOffer } from "@/components/CorePageSections";
import { CORE_PAGES, CORE_FAQS } from "@/lib/core-pages";

const a = "font-semibold text-accent hover:underline";

export default function SeoPrice() {
  return <CoreShell page={CORE_PAGES.seoPrice} faqs={CORE_FAQS.seoPrice}
    intro={<>SEO price in Sri Lanka varies because the work varies. Here is what affects the cost, what you should get for it, and how to get an exact quote. Compare options on our <Link to={CORE_PAGES.pricing.path} className={a}>SEO packages Sri Lanka</Link> page.</>}>
    <CoreSection title="What affects SEO price in Sri Lanka" soft>
      <CoreTable headings={["Factor", "Why it changes the cost"]} rows={[
        ["Website size", "More pages mean more auditing, fixes and content work."],
        ["Competition", "Crowded searches need deeper research, content and links."],
        ["Locations", "Several cities or countries need separate local planning."],
        ["Content needs", "New service pages and guides take writing and review time."],
        ["Technical health", "Slow or badly structured sites need more fixes first."],
        ["Implementation", "Advice only costs less than done-for-you changes."],
      ]} />
    </CoreSection>
    <CoreSection title="Our pricing">
      <p>The only fixed public price is the SEO Consultation from LKR 50,000. Every other service — audits, monthly SEO, Google Maps, link building — receives a custom quote after a free analysis, so you only pay for what your website needs.</p>
    </CoreSection>
    <CoreSection title="What you should get for your money" soft>
      <CoreList items={["A named list of deliverables before work starts.", "Owner access to Search Console and GA4.", "Monthly reports showing work done and next priorities.", "No bought links, fake reviews or ranking guarantees."]} />
    </CoreSection>
    <CoreSection title="Next steps">
      <p>Not sure where to start? Book an <Link to={CORE_PAGES.consultation.path} className={a}>SEO consultation</Link>, browse our <Link to={CORE_PAGES.services.path} className={a}>SEO services in Sri Lanka</Link>, or read our guide to choosing the <Link to={CORE_PAGES.bestCompany.path} className={a}>best SEO company in Sri Lanka</Link>.</p>
    </CoreSection>
    <ConsultationOffer />
  </CoreShell>;
}
