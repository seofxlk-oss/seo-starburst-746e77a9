import { Link } from "react-router-dom";
import { CoreShell, CoreSection, CoreList, CoreTable, SampleWork, ConsultationOffer } from "@/components/CorePageSections";
import { CORE_PAGES, CORE_FAQS } from "@/lib/core-pages";

const a = "font-semibold text-accent hover:underline";

export default function BestSeoCompany() {
  return <CoreShell page={CORE_PAGES.bestCompany} faqs={CORE_FAQS.bestCompany}
    intro={<>Searching for the best SEO company in Sri Lanka? The right choice depends on method, honesty and fit, not on who claims to be number one. Use this checklist to compare any <Link to="/" className={a}>SEO company in Sri Lanka</Link>, including us.</>}>
    <CoreSection title="What the best SEO companies in Sri Lanka deliver" soft>
      <CoreList items={["A written audit with clear priorities, not just an automated score.", "Keyword research mapped to specific pages and customer intent.", "Technical fixes your developer can act on.", "Useful content and relevant, earned links — never bulk packages.", "Monthly reports from Search Console, with honest limitations.", "Owner access to your Search Console, GA4 and Google Business Profile."]} />
    </CoreSection>
    <CoreSection title="Questions to ask before you hire">
      <CoreTable headings={["Question", "A good answer sounds like"]} rows={[
        ["Who will do the work?", <>A named <Link to={CORE_PAGES.specialists.path} className={a}>SEO specialist Sri Lanka</Link> team, not an unknown outsourcer.</>],
        ["What will I get in month one?", "An audit, keyword map, fix list and reporting baseline."],
        ["How do you build links?", "Relevant outreach and genuine mentions, no paid networks."],
        ["Can you guarantee rankings?", "No — Google decides rankings; we explain what we will improve."],
        ["Who owns the accounts?", "You do, from day one."],
      ]} />
    </CoreSection>
    <CoreSection title="Red flags and green flags" soft>
      <div className="grid gap-6 md:grid-cols-2">
        <div><h3 className="font-display text-lg font-bold text-foreground">Red flags</h3><CoreList items={["Guaranteed page-one or #1 rankings.", "Hundreds of links for a low fixed fee.", "Fake reviews or invented case results.", "Reports you cannot verify in Search Console."]} /></div>
        <div><h3 className="font-display text-lg font-bold text-foreground">Green flags</h3><CoreList items={["Clear scope and named deliverables.", "Plain-English monthly reporting.", "Honest timelines and limitations.", "Advice to plan SEO before building a website."]} /></div>
      </div>
    </CoreSection>
    <CoreSection title="How SeoFX approaches SEO">
      <p>SeoFX is an SEO company in Rajagiriya that helps businesses get SEO right before they build, then grow on Google, Google Maps and AI search. Read <Link to="/how-we-work" className={a}>how we work</Link>, explore our <Link to={CORE_PAGES.services.path} className={a}>SEO services in Sri Lanka</Link>, or start small with an <Link to={CORE_PAGES.consultation.path} className={a}>SEO consultant Sri Lanka</Link> session. For a wider overview, see our <Link to={CORE_PAGES.guide.path} className={a}>SEO Sri Lanka guide</Link>.</p>
    </CoreSection>
    <SampleWork title="Sample deliverables to compare against" />
    <ConsultationOffer />
  </CoreShell>;
}
