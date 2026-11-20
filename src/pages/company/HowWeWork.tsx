import { Link } from "react-router-dom";
import { CoreShell, CoreSection, CoreList, CoreTable, SampleWork } from "@/components/CorePageSections";
import { CORE_PAGES, CORE_FAQS } from "@/lib/core-pages";

const a = "font-semibold text-accent hover:underline";

export default function HowWeWork() {
  return <CoreShell page={CORE_PAGES.howWeWork} faqs={CORE_FAQS.howWeWork}
    intro={<>Our SEO process moves from research to fixes to growth, with written deliverables at each stage. Here is what happens and when. Prefer to start small? Book an <Link to={CORE_PAGES.consultation.path} className={a}>SEO consultation</Link>.</>}>
    <CoreSection title="Timeline" soft>
      <CoreTable headings={["Stage", "What happens", "Deliverable"]} rows={[["Week 1", "Access set-up, crawl audit and Search Console review.", "Audit report with priorities"], ["Month 1", "Keyword research, page mapping and technical fixes.", "Keyword map and fix list"], ["Month 3", "On-page improvements, content and local SEO.", "Monthly report and next priorities"], ["Month 6", "Review of progress, links and AI search visibility.", "Six-month review and updated plan"]]} />
      <p className="text-sm">See the <a href="#sample-work" className={a}>sample deliverables</a> below.</p>
    </CoreSection>
    <CoreSection title="Reporting and Search Console access">
      <p>Each month you receive a plain-English report covering work completed, Search Console clicks and impressions, available enquiry data and next steps. You keep owner access to Search Console and GA4 at all times.</p>
    </CoreSection>
    <CoreSection title="What we need from you" soft>
      <CoreList items={["Access to your website, Search Console and GA4.", "Your main services, locations and target customers.", "One person who can approve changes.", "Timely answers to questions about your business."]} />
    </CoreSection>
    <CoreSection title="What we never do">
      <CoreList items={["Buy links or use private link networks.", "Post fake reviews.", "Stuff keywords into pages.", "Promise guaranteed rankings."]} />
    </CoreSection>
    <SampleWork title="Sample deliverables" />
  </CoreShell>;
}
