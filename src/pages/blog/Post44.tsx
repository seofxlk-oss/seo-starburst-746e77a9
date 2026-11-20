import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const faqs = [
  {
    "q": "How should a small business in Sri Lanka start with SEO?",
    "a": "Start with a complete Google Business Profile, Google Search Console, consistent business details and a clear page for each main service. Then fix anything that stops Google indexing your site."
  },
  {
    "q": "How much does SEO cost for a small business?",
    "a": "It depends on your goals, competition and the work needed. At SeoFX, an SEO consultation starts from LKR 50,000 and other services are quoted after a free analysis."
  },
  {
    "q": "Can a small business compete with bigger companies on Google?",
    "a": "Yes, especially in local searches and for specific services. Small businesses often win by being more specific, more local and more helpful than larger competitors."
  },
  {
    "q": "How long until a small business sees SEO results?",
    "a": "Google Business Profile improvements can show within weeks. Website rankings usually take a few months, depending on competition."
  }
];

const Post44 = () => (
  <BlogPost
    slug="seo-small-business-sri-lanka-where-to-start"
    title="SEO for Small Businesses in Sri Lanka: Where to Start"
    metaTitle="Small Business SEO in Sri Lanka: Where to Start | SeoFX"
    metaDesc="A practical starting plan for small businesses in Sri Lanka: what to fix first, what to spend on, and how to get SEO results without wasting money."
    keywords="SEO for small business Sri Lanka"
    category="SEO"
    date="2026-11-20"
    readTime="3 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
    faqs={faqs}
  >
<p>Small businesses don't need to do everything at once. Start with the steps that bring customers soonest: a complete Google Business Profile, clear service pages and a website Google can index. Then spend on the few things you can't do yourself. To see how SEO work is priced, read our <R to="/seo-packages-sri-lanka">SEO packages and pricing</R> page.</p>
<h2>Step 1: Decide what you want SEO to do</h2>
<p>Pick one or two goals: more calls, more WhatsApp enquiries, more bookings or more online orders. Every decision after this should serve those goals.</p>
<h2>Step 2: Get the free foundations in place</h2>
<ul><li><strong>Google Business Profile:</strong> complete every section, add photos and ask for genuine reviews. For local customers this often matters more than anything else. See our <R to="/google-map-optimization">Google Maps optimisation</R> service if you'd like help.</li><li><strong>Google Search Console:</strong> connect your site so you can see what Google sees.</li><li><strong>Consistent details:</strong> the same business name, location and phone number on your website, profile and social pages.</li></ul>
<h2>Step 3: Make your website clear</h2>
<p>Most small business websites lose customers for simple reasons:</p>
<ul><li>One page tries to cover every service.</li><li>Pages don't say where you work or how to contact you.</li><li>Titles say "Home" or "Services" instead of describing the business.</li></ul>
<p>Give each main service its own page, with a clear title, a few paragraphs explaining it, prices or a "request a quote" button, and answers to common questions.</p>
<h2>Step 4: Fix what stops Google indexing you</h2>
<p>Check Search Console's Pages report for errors. Make sure your site loads quickly on mobile and that no important page is blocked or set to "noindex".</p>
<h2>Step 5: Spend where you get the most for your money</h2>
<p>On a small budget, spend on the work that's hard to do yourself and has the biggest effect:</p>
<ol><li><strong>A clear plan:</strong> an <R to="/seo-consultant-sri-lanka">SEO consultation</R> tells you exactly what to fix, in order, so you don't pay for work you don't need.</li><li><strong>Technical fixes</strong> you can't make yourself.</li><li><strong>Better service pages</strong> for the services that bring the most profit.</li></ol>
<p>Save ongoing content and link building until the foundations are working.</p>
<h2>Step 6: Track a few numbers monthly</h2>
<ul><li>Enquiries (calls, forms, WhatsApp messages)</li><li>Google Business Profile views and actions</li><li>Search Console clicks and the searches bringing visitors</li></ul>
<p>If these are moving up, the plan is working.</p>
<h2>What to avoid on a small budget</h2>
<ul><li>Cheap "guaranteed #1 ranking" packages.</li><li>Buying backlinks or reviews.</li><li>Paying for dozens of blog posts before your service pages are right.</li><li>Changing your website's URLs without redirects.</li></ul>
<h2>When to scale up</h2>
<p>When the foundations are in place and enquiries are growing, it may be time for ongoing SEO: more content, link building and regular technical work. Our <R to="/services">SEO services</R> cover each stage, and other services are custom-quoted after a free analysis. Still deciding? Read <R to="/blog/is-seo-worth-it-sri-lanka">is SEO worth it for Sri Lankan businesses?</R>, then check our <R to="/seo-packages-sri-lanka">SEO packages</R>.</p>
  </BlogPost>
);
export default Post44;
