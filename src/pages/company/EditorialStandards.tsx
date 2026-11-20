import { Link } from "react-router-dom";
import { CoreShell, CoreSection, CoreList } from "@/components/CorePageSections";
import { CORE_PAGES, CORE_FAQS } from "@/lib/core-pages";

export default function EditorialStandards() {
  return <CoreShell page={CORE_PAGES.editorial} faqs={CORE_FAQS.editorial}
    intro={<>Our blog explains SEO, local SEO, AI search and Google Ads for Sri Lankan businesses. These standards explain who writes it and how we keep it accurate. <Link to="/blog" className="font-semibold text-accent hover:underline">Read the blog</Link>.</>}>
    <CoreSection title="Who writes our content" soft>
      <p>Every article is written by the SeoFX Editorial Team: the people who deliver SEO work for our clients. We publish under the team name rather than individual names.</p>
    </CoreSection>
    <CoreSection title="How posts are researched and sourced">
      <CoreList items={["We start from real questions Sri Lankan businesses ask.", "Facts about Google come from Google's own documentation where possible.", "Statistics are cited or left out; we do not invent numbers.", "Examples labelled “Sample” are fictional and are not client results."]} />
    </CoreSection>
    <CoreSection title="Review and update schedule" soft>
      <p>Each article is reviewed at least once a year, and sooner when search changes affect the advice. Every post shows its published date and last updated date.</p>
    </CoreSection>
    <CoreSection title="Corrections policy">
      <p>If you find an error, email <a href="mailto:seofx.lk@gmail.com" className="font-semibold text-accent hover:underline">seofx.lk@gmail.com</a> with the article link. We check it and correct the article if needed, updating the last updated date.</p>
    </CoreSection>
  </CoreShell>;
}
