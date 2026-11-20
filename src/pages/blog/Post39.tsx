import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const L = ({ children }: { children: React.ReactNode }) => <Link to="/services/ai-seo-geo-sri-lanka" className={c}>{children}</Link>;
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const Post39 = () => (
  <BlogPost
    slug="get-business-mentioned-chatgpt-gemini-sri-lanka"
    title="How to Get Your Business Mentioned in ChatGPT and Gemini in Sri Lanka"
    metaTitle="How to Get Your Business Mentioned in ChatGPT and Gemini in Sri Lanka | SeoFX"
    metaDesc="Practical steps for Sri Lankan businesses to improve their chances of being mentioned in ChatGPT and Gemini answers, without shortcuts or guarantees."
    keywords="AI Search, SEO Sri Lanka"
    category="AI Search"
    date="2026-11-20"
    readTime="5 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
  >
<p><strong>To get your business mentioned in ChatGPT and Gemini, make it easy for them to find clear, consistent facts about you.</strong> That means readable web pages that answer customer questions, the same business details on every profile, genuine reviews and mentions on trusted Sri Lankan sites, and structured data. No one can guarantee a mention, but these steps improve your chances.</p>
<p>Our <L>AI SEO in Sri Lanka</L> service tests real prompts and fixes these signals for you.</p>
<h2>1. Check what AI tools say today</h2>
<p>Ask 10–20 questions your customers would ask, such as “best wedding planner in Colombo”. Record whether you appear, who does and which sources are cited.</p>
<h2>2. Let AI crawlers read your site</h2>
<p>Check robots.txt does not block AI crawlers you want, make key content visible in the page HTML and consider an llms.txt file.</p>
<h2>3. Write answer-first pages</h2>
<p>Open service pages with a direct answer, add FAQs, comparison tables and plain facts such as locations served and opening hours. Our <R to="/services/on-page-seo-sri-lanka">on-page SEO</R> work follows this approach.</p>
<h2>4. Keep business facts consistent</h2>
<p>Use the same name, location and service descriptions on your website, Google Business Profile, Facebook, LinkedIn and directories. Start with <R to="/google-map-optimization">Google Maps optimisation</R>.</p>
<h2>5. Earn genuine third-party mentions</h2>
<p>AI tools rely on trusted sources: industry directories, news sites and review platforms. Earn mentions honestly; fake reviews damage trust.</p>
<h2>6. Add structured data</h2>
<p>Organization, Service and FAQ schema help machines understand who you are and what you offer.</p>
<p>New to the topic? Read <R to="/blog/what-is-geo-guide-sri-lankan-businesses">what GEO is</R> or <R to="/blog/google-ai-overviews-sri-lanka-seo">how AI Overviews change SEO</R>.</p>
  </BlogPost>
);
export default Post39;
