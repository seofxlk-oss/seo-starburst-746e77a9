import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const L = ({ children }: { children: React.ReactNode }) => <Link to="/services/ai-seo-geo-sri-lanka" className={c}>{children}</Link>;
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const Post40 = () => (
  <BlogPost
    slug="google-ai-overviews-sri-lanka-seo"
    title="Google AI Overviews in Sri Lanka: What Changes for SEO"
    metaTitle="Google AI Overviews in Sri Lanka: What Changes for SEO | SeoFX"
    metaDesc="What Google AI Overviews mean for SEO in Sri Lanka: fewer clicks on some searches, new ways to be cited, and what local businesses should do now."
    keywords="AI Search, SEO Sri Lanka"
    category="AI Search"
    date="2026-11-20"
    readTime="5 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
  >
<p><strong>Google AI Overviews change SEO in Sri Lanka by answering some questions directly on the results page, so simple informational searches may send fewer clicks.</strong> Pages that are cited inside the overview can still win visibility. For local businesses, the fundamentals stay the same: helpful pages, strong technical SEO, a well-kept Google Business Profile and clear facts.</p>
<p>Our <L>Google AI Overviews optimisation</L> work helps your pages become cite-worthy sources.</p>
<h2>What AI Overviews are</h2>
<p>AI Overviews are AI-generated summaries that appear above the usual results for some searches, with links to the sources used.</p>
<h2>What changes for Sri Lankan businesses</h2>
<ul><li>Simple “what is” questions may get fewer clicks.</li><li>Being cited as a source becomes a new goal.</li><li>Searches with buying intent, like “SEO company near me”, still lead to websites, maps and ads.</li></ul>
<h2>What stays the same</h2>
<p>Google still draws on pages it can crawl, understand and trust. Technical health, relevant content and local signals still matter. An <R to="/services/website-audit-sri-lanka">SEO audit</R> is a good starting point.</p>
<h2>What to do now</h2>
<ul><li>Open key pages with a direct 40–60 word answer.</li><li>Add FAQs that match real questions.</li><li>Track Search Console impressions as well as clicks.</li><li>Keep your Google Business Profile complete.</li></ul>
<p>Related reading: <R to="/blog/what-is-geo-guide-sri-lankan-businesses">GEO explained</R> and <R to="/blog/seo-sri-lanka-2026-how-google-has-changed">how Google has changed</R>.</p>
  </BlogPost>
);
export default Post40;
