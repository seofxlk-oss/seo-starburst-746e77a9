import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const faqs = [
  {
    "q": "How long should a service page be?",
    "a": "Long enough to answer what customers need to know: what's included, who it's for, how it works, pricing and common questions. For most services that's several hundred words or more, but completeness matters more than word count."
  },
  {
    "q": "Should each service have its own page?",
    "a": "Yes. Each main service should have its own page targeting its own keyword group, so Google knows which page to show for which search."
  },
  {
    "q": "Should I show prices on service pages?",
    "a": "Showing a price, a \"from\" price or how you quote helps visitors decide and reduces drop-off. If prices vary, explain what affects the quote."
  },
  {
    "q": "Do FAQs help SEO?",
    "a": "Yes. FAQs answer additional searches, help AI tools understand the page and give visitors the details they need to contact you."
  }
];

const Post45 = () => (
  <BlogPost
    slug="how-to-write-service-pages-that-rank"
    title="How to Write Service Pages That Rank on Google"
    metaTitle="How to Write Service Pages That Rank on Google | SeoFX"
    metaDesc="A step-by-step template for writing service pages that rank on Google and convert visitors: structure, headings, keywords, FAQs and calls to action."
    keywords="service page SEO"
    category="SEO"
    date="2026-11-20"
    readTime="3 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
    faqs={faqs}
  >
<p>A service page that ranks answers three questions quickly: what you offer, who it's for and how to get started. It also covers the details customers ask about before they buy. Strong service pages are the core of good <R to="/services/on-page-seo-sri-lanka">on-page SEO services</R>, and the template below works for most Sri Lankan businesses.</p>
<h2>Start with one service and one keyword group</h2>
<p>Each service gets its own page, built around one main keyword and its close variations, for example "solar panel installation Colombo" with "solar installation price" and "home solar system". If you haven't researched your keywords yet, start with <R to="/services/keyword-research-sri-lanka">keyword research</R>.</p>
<h2>The service page template</h2>
<h3>1. Title tag and H1</h3>
<ul><li><strong>Title tag (under about 60 characters):</strong> service + location or audience + brand. Example: "Solar Panel Installation in Colombo | Your Brand".</li><li><strong>H1:</strong> a clear statement of the service. Use only one H1 per page.</li></ul>
<h3>2. Opening paragraph that answers first</h3>
<p>In two or three sentences, say what the service is, who it's for and the main benefit. Include the main keyword naturally. Many visitors, and AI search tools, read only this part.</p>
<h3>3. What's included</h3>
<p>List the deliverables or steps in a short bulleted list. Specifics build trust.</p>
<h3>4. Who it's for</h3>
<p>Describe the customers or situations the service suits. This helps people quickly tell whether they're in the right place.</p>
<h3>5. How it works</h3>
<p>Three to five numbered steps from enquiry to completion.</p>
<h3>6. Pricing</h3>
<p>Show a price, a "from" price or how you quote. Pages that hide all pricing information often lose visitors to competitors who explain it.</p>
<h3>7. Proof</h3>
<p>Add real examples of your work, real reviews or a case study, with permission. Don't invent results or testimonials.</p>
<h3>8. FAQs</h3>
<p>Answer four to six questions customers actually ask, each in two to four sentences. FAQs capture extra searches and help AI tools understand the page.</p>
<h3>9. A clear call to action</h3>
<p>One main action, such as a call, WhatsApp, quote form or booking, repeated near the top and bottom.</p>
<h2>Writing tips that help rankings</h2>
<ul><li><strong>Write for people first.</strong> Use the main keyword in the title, H1, first paragraph and a subheading, then write naturally.</li><li><strong>Use descriptive subheadings</strong> so readers and search engines can scan the page.</li><li><strong>Be specific to Sri Lanka:</strong> mention the areas you serve, local delivery or service details, and prices in LKR.</li><li><strong>Link to related services</strong> and guides with descriptive anchor text.</li><li><strong>Keep it current:</strong> update prices, services and FAQs when they change.</li></ul>
<h2>Mistakes to avoid</h2>
<ul><li>Repeating the keyword in every sentence.</li><li>Copying text from competitors or manufacturers.</li><li>One page covering ten different services.</li><li>Big image banners with almost no text.</li><li>Several pages targeting the same keyword.</li></ul>
<h2>Check your page before publishing</h2>
<ul><li>[ ] Unique title tag and meta description</li><li>[ ] One H1 that matches the service</li><li>[ ] Main keyword in the first paragraph</li><li>[ ] What's included, process, pricing, FAQs and CTA all on the page</li><li>[ ] Links to two or three related pages</li><li>[ ] Images compressed, with descriptive alt text</li></ul>
<h2>Need help with your pages?</h2>
<p>If your service pages aren't ranking, our <R to="/services">SEO services in Sri Lanka</R> include rewriting and optimising them around the searches your customers use. For what a full SEO engagement should cover, read <R to="/blog/seo-services-sri-lanka-what-is-included">SEO services in Sri Lanka: what's included</R>, or see our <R to="/services/on-page-seo-sri-lanka">on-page SEO services</R>.</p>
  </BlogPost>
);
export default Post45;
