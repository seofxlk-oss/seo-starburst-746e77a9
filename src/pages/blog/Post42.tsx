import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const L = ({ children }: { children: React.ReactNode }) => <Link to="/services/seo-consulting-sri-lanka" className={c}>{children}</Link>;
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const Post42 = () => (
  <BlogPost
    slug="website-redesign-without-losing-google-rankings"
    title="Website Redesign Without Losing Google Rankings"
    metaTitle="Website Redesign Without Losing Google Rankings | SeoFX"
    metaDesc="How to redesign your website without losing Google rankings: crawl the old site, map redirects, keep content that ranks and check everything after launch."
    keywords="SEO Before You Build, SEO Sri Lanka"
    category="SEO Before You Build"
    date="2026-11-20"
    readTime="5 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
  >
<p><strong>To redesign a website without losing Google rankings, record every current URL and its traffic, keep or improve content that ranks, map each old URL to its new URL with 301 redirects, and check indexing in Search Console after launch.</strong> Most ranking drops after a redesign come from missing redirects and deleted content.</p>
<p>Our <L>SEO planning for website redesigns</L> covers each of these steps.</p>
<h2>Before the redesign</h2>
<ul><li>Crawl the current site and export every URL.</li><li>Note which pages get clicks and backlinks in Search Console.</li><li>Decide which pages to keep, merge or remove.</li></ul>
<h2>During the build</h2>
<ul><li>Keep URLs the same where you can.</li><li>Create a redirect map for every changed URL.</li><li>Keep titles, headings and content that already rank.</li><li>Block the staging site from search engines.</li></ul>
<h2>At launch</h2>
<ul><li>Add the 301 redirects and test them.</li><li>Remove the staging block and submit the new sitemap.</li></ul>
<h2>After launch</h2>
<p>Watch Search Console for 404 errors and indexing changes for several weeks. An <R to="/services/website-audit-sri-lanka">SEO audit</R> can catch problems early.</p>
<p>Planning a brand-new site? Use our <R to="/blog/seo-checklist-before-building-website-sri-lanka">SEO checklist before building a website</R> or read <R to="/blog/why-sri-lankan-businesses-get-seo-wrong">why businesses get SEO wrong</R>.</p>
  </BlogPost>
);
export default Post42;
