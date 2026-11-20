import { Link } from "react-router-dom";
import { CoreShell, CoreSection, CoreList, CoreTable } from "@/components/CorePageSections";
import { CORE_PAGES, CORE_FAQS } from "@/lib/core-pages";
import { orgSchema } from "@/lib/schema";

const a = "font-semibold text-accent hover:underline";

export default function AboutUs() {
  const page = CORE_PAGES.about;
  return <CoreShell page={page} faqs={CORE_FAQS.about} schema={[{ "@context": "https://schema.org", "@type": "AboutPage", name: page.title, url: `https://seofx.lk${page.path}` }, orgSchema()]}
    intro={<>SeoFX is an SEO company in Rajagiriya, Sri Lanka. We help businesses get SEO right before they build a website, then grow visibility on Google, Google Maps and AI search. Start with an <Link to={CORE_PAGES.consultation.path} className={a}>SEO consultation</Link> or see <Link to="/how-we-work" className={a}>how we work</Link>.</>}>
    <CoreSection title="What we do and why SEO comes before the build" soft>
      <p>Many Sri Lankan websites are designed first and optimised later. That often means rebuilding pages, changing URLs and losing time. We plan keywords, page structure and technical requirements first, so the website launches ready to be found. Read more about <Link to={CORE_PAGES.planning.path} className={a}>SEO before you build</Link>.</p>
    </CoreSection>
    <CoreSection title="How we're different">
      <CoreList items={["Planning first: keyword maps and URL structures before design starts.", "Specialists do the work, and you can talk to them directly.", "Clear written deliverables, labelled samples and plain-English reporting.", "No guaranteed rankings, bought links or fake reviews.", "Your accounts, data and website stay in your name."]} />
    </CoreSection>
    <CoreSection title="Team expertise by role" soft>
      <CoreTable headings={["Role", "Focus"]} rows={[["Technical SEO", "Crawling, indexing, redirects, speed and structured data."], ["Content & on-page", "Keyword mapping, page briefs, titles, headings and internal links."], ["Local SEO", "Google Business Profile and location relevance."], ["AI search", "Clear facts and answers that AI tools can read and cite."], ["Paid search", "Google Ads set-up and management alongside SEO."]]} />
    </CoreSection>
    <CoreSection title="Tools we use">
      <p>Google Search Console, GA4, Google Business Profile, Screaming Frog, Ahrefs and Semrush. Tool estimates guide research; they are not business results.</p>
    </CoreSection>
    <CoreSection title="Rajagiriya, serving all of Sri Lanka" soft>
      <p>We are based in Rajagiriya and work with businesses in Colombo, Kandy, Galle and across Sri Lanka. See the <Link to="/industries" className={a}>industries we work with</Link> or <Link to="/case-studies" className={a}>our work</Link>.</p>
    </CoreSection>
  </CoreShell>;
}
