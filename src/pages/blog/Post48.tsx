import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";

const c = "text-accent underline-offset-4 hover:underline";
const R = ({ to, children }: { to: string; children: React.ReactNode }) => <Link to={to} className={c}>{children}</Link>;

const faqs = [
  {
    "q": "What is conversion tracking in Google Ads?",
    "a": "Conversion tracking records when someone takes a valuable action after clicking your ad, such as calling, submitting a form, sending a WhatsApp message or buying. It shows which keywords and ads bring real customers."
  },
  {
    "q": "Can I track WhatsApp enquiries from Google Ads?",
    "a": "Yes. Track clicks on your WhatsApp links as a conversion using Google Tag Manager. It counts the click that opens WhatsApp, not whether a message was sent."
  },
  {
    "q": "Do I need Google Tag Manager?",
    "a": "It isn't required, but it makes tracking calls, WhatsApp clicks and forms much easier to set up and change without editing your website's code."
  },
  {
    "q": "Why does Google Ads need conversion data for bidding?",
    "a": "Automated bidding strategies use conversion data to decide how much to bid for each search. Without it, they can only optimise for clicks, which may not bring enquiries."
  }
];

const Post48 = () => (
  <BlogPost
    slug="google-ads-conversion-tracking-sri-lanka"
    title="Google Ads Conversion Tracking: Calls, Forms and WhatsApp"
    metaTitle="Google Ads Tracking: Calls, Forms & WhatsApp | SeoFX"
    metaDesc="How Sri Lankan businesses can track Google Ads conversions from calls, forms and WhatsApp clicks, so you know which keywords bring real customers."
    keywords="Google Ads conversion tracking"
    category="Google Ads"
    date="2026-11-20"
    readTime="3 min read"
    cta="Want help applying this to your business? Talk to the SeoFX team."
    faqs={faqs}
  >
<p>Conversion tracking tells you which Google Ads keywords and ads bring real enquiries, not just clicks. Without it, you're guessing where your budget works, and Google's automated bidding has nothing to learn from. For most Sri Lankan businesses, the conversions that matter are phone calls, form submissions and WhatsApp messages. Our <R to="/services/google-ads-specialist-sri-lanka">Google Ads specialists</R> set all three up before a campaign goes live.</p>
<h2>Why clicks aren't enough</h2>
<p>A click only means someone visited your site. Some keywords bring lots of clicks and no enquiries; others bring fewer clicks but most of your customers. Conversion tracking shows the difference, so you can put more budget into what works and cut what doesn't.</p>
<h2>The conversions to track</h2>
<h3>1. Form submissions</h3>
<p>Track when someone submits your contact or quote form. The most reliable way is to count a visit to a "thank you" page shown after the form is sent, or a form-submit event.</p>
<h3>2. Phone calls</h3>
<ul><li><strong>Calls from the ad itself:</strong> if you add a call asset (your phone number) to your ads, Google Ads can count calls made directly from the ad.</li><li><strong>Calls from your website:</strong> track clicks on your phone number links (tel: links), especially on mobile.</li></ul>
<h3>3. WhatsApp clicks</h3>
<p>Many Sri Lankan customers prefer WhatsApp. Track clicks on your WhatsApp links (wa.me links) as a conversion. It's often the most common enquiry type.</p>
<h3>4. Purchases (for online stores)</h3>
<p>Track completed orders and their value, so you can see the return on your ad spend.</p>
<h2>How to set it up</h2>
<h3>Step 1: Install the Google tag</h3>
<p>Add the Google tag (or Google Tag Manager) to every page of your website. Most platforms let you do this without editing code.</p>
<h3>Step 2: Create conversion actions in Google Ads</h3>
<p>In Google Ads, go to <strong>Goals → Conversions</strong> and create an action for each conversion type: form submit, website call click, WhatsApp click, purchase.</p>
<h3>Step 3: Fire each conversion on the right event</h3>
<p>Use Google Tag Manager to trigger each conversion: the thank-you page view, a click on a tel: link, a click on a wa.me link, or the order confirmation.</p>
<h3>Step 4: Choose which conversions count for bidding</h3>
<p>Mark your most important actions (real enquiries) as primary conversions. Keep softer signals as secondary, so bidding optimises for what matters.</p>
<h3>Step 5: Test everything</h3>
<p>Submit a test form, tap your phone and WhatsApp links on mobile, and check that each conversion appears in Google Ads (it can take a few hours).</p>
<h2>Linking Google Ads and Google Analytics</h2>
<p>Linking your Google Ads account with Google Analytics (GA4) lets you see what ad visitors do on your site and import GA4 key events as conversions. Use one source for each conversion, not both, to avoid counting the same enquiry twice.</p>
<h2>Common tracking mistakes</h2>
<ul><li>Counting page views or button clicks that aren't real enquiries.</li><li>Counting the same conversion twice (for example, in both Google Ads and GA4).</li><li>Not tracking WhatsApp, which hides a large share of enquiries.</li><li>Forgetting to re-test after a website update.</li><li>Optimising for clicks because no conversions are set up.</li></ul>
<h2>What to do with the data</h2>
<p>Once conversions are flowing, review them weekly. Raise bids or budget on keywords and ads that bring enquiries at a cost you're happy with. Pause or refine those that don't. Add negative keywords for searches that never convert. This data also shows which keywords deserve strong SEO pages, so you can rely less on paid clicks over time.</p>
<h2>Need it set up properly?</h2>
<p>Our <R to="/google-ads-sri-lanka">Google Ads management</R> includes conversion tracking for calls, forms and WhatsApp from day one, with monthly reports showing cost per enquiry. If you're running ads already and aren't sure the tracking works, our <R to="/services/google-ads-specialist-sri-lanka">Google Ads specialists</R> can check it. For budgeting, read <R to="/blog/how-much-does-google-ads-cost-sri-lanka">how much Google Ads costs in Sri Lanka</R>.</p>
  </BlogPost>
);
export default Post48;
