import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const faqs = [
  {
    "q": "Is Google Search Console free?",
    "a": "Yes. Google Search Console is free for any website owner who verifies their site."
  },
  {
    "q": "What is a good click-through rate?",
    "a": "It depends on your position and the search. Higher positions get more clicks. If a page ranks well but has a much lower CTR than your other pages, improve its title and meta description."
  },
  {
    "q": "Why is my page not indexed?",
    "a": "Common reasons are thin or duplicate content, a \"noindex\" tag, a robots.txt block or a broken URL. The Pages report and URL Inspection tool show the specific reason."
  },
  {
    "q": "How is Search Console different from Google Analytics?",
    "a": "Search Console shows how your site performs in Google search before people arrive. Google Analytics shows what visitors do once they're on your site."
  }
];

const Post46 = () => (
  <BlogPost
    slug="google-search-console-guide-sri-lanka"
    title="Google Search Console Guide for Sri Lankan Business Owners"
    metaTitle="Google Search Console Guide for Business Owners | SeoFX"
    metaDesc="A plain-English guide to Google Search Console for Sri Lankan business owners: setup, the reports that matter and how to spot SEO opportunities."
    keywords="Google Search Console guide"
    category="SEO"
    date="2026-11-20"
    readTime="3 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
    faqs={faqs}
  >
<p>Google Search Console is a free tool that shows how your website performs in Google search: which searches you appear for, how many people click, and what's stopping pages from being indexed. Ten minutes a month in it tells you more about your SEO than most reports, and it's the first tool any provider of <R to="/services">SEO services</R> should look at.</p>
<h2>How to set it up</h2>
<ol><li>Go to search.google.com/search-console and sign in with a Google account.</li><li>Add your website. The "Domain" option covers all versions of your site.</li><li>Verify ownership, usually by adding a DNS record through your domain or hosting provider, or another method Google offers.</li><li>Submit your XML sitemap under <strong>Sitemaps</strong>.</li></ol>
<p>Data starts appearing within a few days.</p>
<h2>The four numbers in the Performance report</h2>
<p>The <strong>Performance → Search results</strong> report shows:</p>
<ul><li><strong>Impressions:</strong> how many times your pages appeared in search results.</li><li><strong>Clicks:</strong> how many times people clicked through to your site.</li><li><strong>CTR (click-through rate):</strong> clicks divided by impressions.</li><li><strong>Average position:</strong> your typical ranking position. 1–10 is roughly page one.</li></ul>
<p>Use the <strong>Queries</strong> and <strong>Pages</strong> tabs to see which searches and pages these numbers come from.</p>
<h2>Three opportunities to look for</h2>
<h3>1. High impressions, low clicks</h3>
<p>Searches where you appear often but few people click usually mean your title tag or meta description isn't compelling, or you're sitting just below the top results. Rewrite the title and description for those pages.</p>
<h3>2. Positions 8–20</h3>
<p>Keywords where you rank on the bottom of page one or on page two are often the quickest wins. Improving the content and internal links on those pages can push them higher.</p>
<h3>3. Searches you didn't expect</h3>
<p>Queries that don't match any page on your site can show demand for a service you offer but haven't written about, or one you could add.</p>
<h2>The Pages (indexing) report</h2>
<p>Under <strong>Indexing → Pages</strong>, check that your important pages are indexed. Common reasons pages aren't:</p>
<ul><li><strong>Crawled – currently not indexed:</strong> Google saw the page but didn't think it was worth indexing. Improve the content.</li><li><strong>Duplicate without user-selected canonical:</strong> several URLs show the same content. Choose one and set a canonical or redirect.</li><li><strong>Excluded by "noindex" tag:</strong> check whether that was intended.</li><li><strong>Not found (404):</strong> broken URLs. Redirect them if they used to have traffic or links.</li></ul>
<h2>Other useful tools inside Search Console</h2>
<ul><li><strong>URL Inspection:</strong> paste any URL to see whether it's indexed and how Google sees it. After updating a page, you can request indexing.</li><li><strong>Core Web Vitals:</strong> flags pages that are slow or unstable on mobile and desktop.</li><li><strong>Links:</strong> shows which sites link to you and your most-linked pages.</li></ul>
<h2>A 10-minute monthly routine</h2>
<ol><li>Compare the last 28 days with the previous period in Performance.</li><li>Note your top 10 queries and any big changes.</li><li>Check the Pages report for new errors.</li><li>Pick one page with high impressions and low CTR, and improve its title and description.</li></ol>
<h2>When to get help</h2>
<p>If the reports show errors you don't understand, or rankings have dropped and you don't know why, an <R to="/seo-specialist-sri-lanka">SEO specialist</R> can read the data and fix the cause. A <R to="/services/website-audit-sri-lanka">website SEO audit</R> uses Search Console as its starting point. For background, see our guide to <R to="/seo-sri-lanka">SEO in Sri Lanka</R>, and read <R to="/blog/results-to-expect-from-seo-specialist-sri-lanka">what results to expect from an SEO specialist</R>.</p>
  </BlogPost>
);
export default Post46;
