import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const L = ({ children }: { children: React.ReactNode }) => <Link to="/services/seo-consulting-sri-lanka" className={c}>{children}</Link>;
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const Post41 = () => (
  <BlogPost
    slug="seo-checklist-before-building-website-sri-lanka"
    title="SEO Checklist Before Building a Website in Sri Lanka"
    metaTitle="SEO Checklist Before Building a Website in Sri Lanka | SeoFX"
    metaDesc="A practical SEO checklist to complete before building a website in Sri Lanka: keywords, page structure, URLs, technical requirements and content."
    keywords="SEO Before You Build, SEO Sri Lanka"
    category="SEO Before You Build"
    date="2026-11-20"
    readTime="5 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
  >
<p><strong>Before building a website in Sri Lanka, research the keywords customers use, plan one page per main service and location, fix your URL structure, and give your developer written SEO requirements.</strong> Doing this first costs far less than fixing a finished site, and it means the website launches ready to be found on Google.</p>
<p>This is the core of our <L>SEO before you build</L> service.</p>
<h2>1. Keyword research</h2>
<p>List the services you sell and research how people in Sri Lanka search for them, including locations and Sinhala or Tamil terms where relevant.</p>
<h2>2. Page and URL plan</h2>
<ul><li>One page per main service.</li><li>Short, readable URLs without dates.</li><li>A clear menu that matches the page plan.</li></ul>
<h2>3. Technical requirements for your developer</h2>
<ul><li>Content visible in HTML, not only after scripts run.</li><li>Unique title and meta description per page.</li><li>One H1 per page, mobile-friendly design and fast loading.</li><li>XML sitemap, robots.txt and correct redirects.</li></ul>
<h2>4. Content briefs</h2>
<p>Write a brief for each page: target topic, questions to answer and internal links.</p>
<h2>5. Tracking</h2>
<p>Set up Search Console and GA4 before launch so you can measure from day one.</p>
<p>Already have a site? Read <R to="/blog/website-redesign-without-losing-google-rankings">how to redesign without losing rankings</R> or <R to="/blog/seo-before-making-website-sri-lanka">why SEO comes before the website</R>. You can also book an <R to="/seo-consultant-sri-lanka">SEO consultation</R>.</p>
  </BlogPost>
);
export default Post41;
