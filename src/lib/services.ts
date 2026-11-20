import { getServicePageContent } from "@/lib/service-page-content";
import {
  Compass,
  FileSearch,
  KeyRound,
  Wrench,
  Globe,
  Link as LinkIcon,
  Code2,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  cardIntro: string;
  bullets: string[];
  // Detail page content
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
  };
  whatIs: { heading: string; body: string[] };
  whatWeDo: { heading: string; items: { title: string; body: string }[] };
  benefits: { heading: string; items: string[] };
  process: { heading: string; steps: { title: string; body: string }[] };
  whyUs: { heading: string; body: string };
  faqs: { q: string; a: string }[];
}

const LEGACY_SERVICES: ServiceDetail[] = [
  {
    slug: "seo-consulting-sri-lanka",
    icon: Compass,
    title: "SEO Consulting Services",
    shortTitle: "SEO Consulting",
    cardIntro:
      "Every successful SEO campaign in Sri Lanka begins with strategy. Our SEO consultants align Google rankings with real business goals.",
    bullets: [
      "Free initial SEO consultation",
      "Business and competitor analysis",
      "Clear campaign planning & goal setting",
      "Monthly strategy reviews",
    ],
    seoTitle: "SEO Consulting Services in Sri Lanka | Expert SEO Consultant — SeoFX",
    seoDescription:
      "Hire a SEO consultant in Sri Lanka. SeoFX delivers strategic SEO consulting that aligns Google rankings with real business growth. Free consultation.",
    keywords:
      "seo consulting sri lanka, seo consultant sri lanka, seo strategy sri lanka, seo expert sri lanka",
    hero: {
      eyebrow: "SEO Consulting",
      h1: "SEO Consulting Services in Sri Lanka — Strategy That Actually Ranks",
      intro:
        "SeoFX provides strategic SEO consulting in Sri Lanka for businesses that want to stop guessing and start ranking. We turn SEO from a cost into a measurable growth channel.",
    },
    whatIs: {
      heading: "What is SEO Consulting?",
      body: [
        "SEO consulting is the strategic foundation of every successful search marketing campaign. Instead of randomly publishing content or buying backlinks, an SEO consultant analyses your business, your market, and your competitors to design a clear plan to dominate Google Sri Lanka.",
        "SeoFX helps businesses plan keywords, content and technical requirements around their target customers.",
      ],
    },
    whatWeDo: {
      heading: "What Our SEO Consultants Do",
      items: [
        { title: "Discovery & Goal Setting", body: "We learn your business model, customers, services and revenue goals." },
        { title: "Market & Competitor Research", body: "We map who you compete with on Google and how to beat them." },
        { title: "SEO Strategy Roadmap", body: "A 6–12 month plan covering keywords, content, technical SEO and links." },
        { title: "KPI & ROI Framework", body: "We define exactly what success looks like — rankings, traffic, leads, revenue." },
      ],
    },
    benefits: {
      heading: "Benefits of Hiring an SEO Consultant in Sri Lanka",
      items: [
        "Stop wasting budget on tactics that don't work",
        "A clear roadmap aligned to revenue, not vanity metrics",
        "Faster ranking growth through prioritised actions",
        "Independent, expert advice — no fluff",
        "Monthly reviews to keep momentum",
      ],
    },
    process: {
      heading: "Our SEO Consulting Process",
      steps: [
        { title: "Free Consultation Call", body: "30-minute discovery call to understand your business." },
        { title: "Audit & Analysis", body: "Deep audit of website, competitors and target keywords." },
        { title: "Strategy Document", body: "Custom SEO roadmap with priorities, timelines and KPIs." },
        { title: "Execution & Review", body: "We execute (or guide your team) and review monthly." },
      ],
    },
    whyUs: {
      heading: "Why Choose SeoFX as Your SEO Consultant",
      body:
        "We agree SEO priorities around your website and business goals, then report on the work and progress.",
    },
    faqs: [
      { q: "How much does SEO consulting cost in Sri Lanka?", a: "SEO Consultation from LKR 50,000 (includes on-page SEO recommendations). All other services: custom quote after a free analysis." },
      { q: "How long until I see SEO results?", a: "Most Sri Lankan businesses see early movement in 60–90 days and strong results within 4–6 months." },
      { q: "Do you offer a free SEO consultation?", a: "Yes — every new client receives a 30-minute free SEO consultation with a senior consultant." },
    ],
  },
  {
    slug: "website-audit-sri-lanka",
    icon: FileSearch,
    title: "Website Audit & Project Analysis",
    shortTitle: "Website Audit",
    cardIntro:
      "Before optimisation begins, our SEO team runs a thorough audit of your site — content, technical health, competitors and SERP positions.",
    bullets: [
      "Full technical SEO audit",
      "Content gap analysis",
      "Competitor benchmarking",
      "Page speed & Core Web Vitals analysis",
      "Penalty risk assessment",
    ],
    seoTitle: "SEO Website Audit in Sri Lanka | Free Technical SEO Audit — SeoFX",
    seoDescription:
      "Get a full SEO website audit in Sri Lanka. SeoFX analyses your technical SEO, content, backlinks & Core Web Vitals to find why you're not ranking. Free audit.",
    keywords:
      "seo audit sri lanka, website audit sri lanka, technical seo audit, free seo audit",
    hero: {
      eyebrow: "Website Audit",
      h1: "SEO Website Audit in Sri Lanka — Find Out Exactly Why You're Not Ranking",
      intro:
        "Our SEO website audit analyses 200+ ranking factors across your site to uncover the technical, content and authority issues holding you back from page one.",
    },
    whatIs: {
      heading: "What is an SEO Website Audit?",
      body: [
        "An SEO audit is a complete diagnostic of your website's health from a search engine's perspective. It uncovers technical errors, content gaps, weak backlinks and competitor advantages that are stopping you from ranking.",
        "Our Sri Lanka audit team uses the same enterprise tools as global agencies — Ahrefs, Screaming Frog, Semrush and Google Search Console — combined with manual expert review.",
      ],
    },
    whatWeDo: {
      heading: "What's Included in Our SEO Audit",
      items: [
        { title: "Technical SEO Audit", body: "Crawl errors, indexation, site structure, schema, robots, sitemaps." },
        { title: "On-Page SEO Audit", body: "Title tags, meta, headings, content depth and keyword targeting." },
        { title: "Content & Keyword Audit", body: "Identify cannibalisation, thin pages and keyword opportunities." },
        { title: "Backlink Audit", body: "Toxic link analysis and backlink gap vs. competitors." },
        { title: "Core Web Vitals", body: "LCP, INP, CLS and mobile usability review." },
      ],
    },
    benefits: {
      heading: "Why You Need an SEO Audit",
      items: [
        "Pinpoint the exact reasons your rankings are stuck",
        "Find quick wins you can implement this week",
        "Avoid Google penalties before they happen",
        "Benchmark your site against the top competitors in Sri Lanka",
        "A prioritised action plan — not a 200-page PDF nobody reads",
      ],
    },
    process: {
      heading: "Our Audit Process",
      steps: [
        { title: "Site Crawl", body: "We crawl your full website using Screaming Frog and Ahrefs." },
        { title: "Manual Review", body: "An SEO expert manually reviews top pages and competitors." },
        { title: "Audit Report", body: "Clear, prioritised report with screenshots and explanations." },
        { title: "Strategy Call", body: "We walk you through findings and next steps." },
      ],
    },
    whyUs: {
      heading: "Why Choose SeoFX for Your SEO Audit",
      body:
        "Our audits are written by senior SEO consultants — not auto-generated. Every recommendation is tied to ranking impact and revenue potential, prioritised so your team knows exactly what to fix first.",
    },
    faqs: [
      { q: "How long does an SEO audit take?", a: "A full SeoFX SEO audit takes 5–7 working days." },
      { q: "Do you offer a free SEO audit?", a: "Yes — we provide a free mini audit covering the top 10 issues on your website." },
      { q: "Will the audit help my Sri Lanka rankings?", a: "Yes. Every finding is mapped to ranking factors that affect Google.lk and Google.com results." },
    ],
  },
  {
    slug: "keyword-research-sri-lanka",
    icon: KeyRound,
    title: "Keyword Research Services",
    shortTitle: "Keyword Research",
    cardIntro:
      "We identify the highest-intent keywords your Sri Lankan customers actually use — the ones that drive leads, not just traffic.",
    bullets: [
      "High-intent keyword identification",
      "Long-tail keyword opportunities",
      "Search volume & difficulty analysis",
      "Localised keyword research for Sri Lanka",
      "Keyword-to-page mapping",
    ],
    seoTitle: "Keyword Research Services in Sri Lanka | SEO Keyword Research — SeoFX",
    seoDescription:
      "Professional keyword research services in Sri Lanka. SeoFX finds the high-intent keywords your customers actually search to drive qualified organic leads.",
    keywords:
      "keyword research sri lanka, seo keyword research, keyword analysis sri lanka, long tail keywords",
    hero: {
      eyebrow: "Keyword Research",
      h1: "Keyword Research Services in Sri Lanka — Target the Words That Drive Sales",
      intro:
        "Most SEO campaigns fail because they target the wrong keywords. SeoFX uncovers the high-intent search terms your buyers in Sri Lanka are actually typing into Google.",
    },
    whatIs: {
      heading: "What is Keyword Research?",
      body: [
        "Keyword research is the process of finding the exact phrases potential customers use on Google. The right keywords mean qualified traffic, leads and sales. The wrong keywords mean wasted time and money.",
        "We don't just look at search volume — we look at buyer intent, competition, conversion potential and how realistic it is for your site to rank.",
      ],
    },
    whatWeDo: {
      heading: "What's Included",
      items: [
        { title: "Seed Keyword Discovery", body: "We start from your services and expand to hundreds of variations." },
        { title: "Search Intent Mapping", body: "Informational, commercial, transactional — each keyword is classified." },
        { title: "Competitor Keyword Gap", body: "We extract every keyword your competitors rank for that you don't." },
        { title: "Localised Sri Lanka Research", body: "Sinhala, Tamil and English search terms relevant to your audience." },
        { title: "Keyword-to-Page Mapping", body: "Every keyword is assigned to the right page to avoid cannibalisation." },
      ],
    },
    benefits: {
      heading: "Benefits of Professional Keyword Research",
      items: [
        "Drive traffic that actually converts into customers",
        "Avoid wasting effort on impossible-to-rank keywords",
        "Discover hidden long-tail opportunities competitors miss",
        "Build a content plan that systematically captures your market",
        "Get a clear keyword ROI forecast",
      ],
    },
    process: {
      heading: "Our Keyword Research Process",
      steps: [
        { title: "Discovery", body: "We learn your services, products and ideal customers." },
        { title: "Tool-Based Research", body: "Ahrefs, Semrush, Google Keyword Planner, Search Console." },
        { title: "Competitor Gap Analysis", body: "Find every keyword your top 5 competitors rank for." },
        { title: "Final Keyword Map", body: "A complete spreadsheet with priorities, intent and target URL." },
      ],
    },
    whyUs: {
      heading: "Why SeoFX for Keyword Research",
      body:
        "We've researched keyword strategies for over 200 Sri Lankan businesses across 30+ industries. We know what ranks, what converts, and what's a waste of effort.",
    },
    faqs: [
      { q: "How many keywords will you find?", a: "Typical projects identify 300–1,000+ relevant keywords, prioritised down to 30–80 primary targets." },
      { q: "Do you research Sinhala and Tamil keywords?", a: "Yes — we research keywords in English, Sinhala and Tamil where relevant." },
      { q: "Is keyword research a one-off?", a: "We refresh keyword research every 6–12 months as the market evolves." },
    ],
  },
  {
    slug: "on-page-seo-sri-lanka",
    icon: Wrench,
    title: "On-Page SEO Services",
    shortTitle: "On-Page SEO",
    cardIntro:
      "On-page SEO makes your website Google-friendly. We optimise every element so Google can clearly understand and rank your pages.",
    bullets: [
      "Title tags & meta descriptions",
      "Header structure (H1–H3)",
      "URL & internal linking optimisation",
      "Image ALT & schema markup",
      "Core Web Vitals & mobile UX",
    ],
    seoTitle: "On-Page SEO Services in Sri Lanka | On-Site Optimisation — SeoFX",
    seoDescription:
      "Expert on-page SEO services in Sri Lanka. SeoFX optimises titles, headings, content, schema, speed & internal links to maximise your Google rankings.",
    keywords:
      "on page seo sri lanka, on site seo sri lanka, technical on page optimisation, seo optimisation sri lanka",
    hero: {
      eyebrow: "On-Page SEO",
      h1: "On-Page SEO Services in Sri Lanka — Make Every Page a Ranking Machine",
      intro:
        "On-page SEO is the foundation of high Google rankings. Our team optimises every element of your website so Google after review understands what to rank you for.",
    },
    whatIs: {
      heading: "What is On-Page SEO?",
      body: [
        "On-page SEO covers every optimisation made directly on your website to help search engines understand and rank your content. It includes content quality, HTML tags, internal linking, structured data and user experience.",
        "Done right, on-page SEO can move keywords from page 3 to page 1 — often within weeks.",
      ],
    },
    whatWeDo: {
      heading: "What's Included",
      items: [
        { title: "Title & Meta Optimisation", body: "Click-worthy, keyword-rich titles and descriptions for every page." },
        { title: "Content Optimisation", body: "Rewrite or expand content to fully match search intent." },
        { title: "Header & URL Structure", body: "Logical H1–H3 hierarchy and clean, keyword-rich URLs." },
        { title: "Internal Linking", body: "Strategic links that pass authority to your money pages." },
        { title: "Schema Markup", body: "FAQ, LocalBusiness, Service, Article, Breadcrumb and more." },
        { title: "Image SEO", body: "Compression, ALT text and lazy loading for speed and rankings." },
      ],
    },
    benefits: {
      heading: "Benefits of On-Page SEO",
      items: [
        "Higher rankings without buying a single backlink",
        "Better click-through rates from Google",
        "Faster pages and a better user experience",
        "Eligibility for rich results (FAQ, ratings, sitelinks)",
        "Long-term ranking stability",
      ],
    },
    process: {
      heading: "Our On-Page SEO Process",
      steps: [
        { title: "Page-Level Audit", body: "We audit every page targeted for ranking improvements." },
        { title: "Optimisation Plan", body: "Prioritised list of changes per page." },
        { title: "Implementation", body: "We implement directly or hand off to your dev team." },
        { title: "Monitor & Iterate", body: "Track ranking movements and refine continuously." },
      ],
    },
    whyUs: {
      heading: "Why SeoFX for On-Page SEO",
      body:
        "We've optimised tens of thousands of pages across WordPress, Shopify, custom React/Next.js, and Webflow. We know how to make any platform rank.",
    },
    faqs: [
      { q: "How quickly will on-page SEO improve rankings?", a: "Most pages see ranking shifts within 2–8 weeks of on-page optimisation." },
      { q: "Will you change my website design?", a: "No — on-page SEO improves content, code and structure without changing your visual design." },
      { q: "Do you do on-page SEO for WordPress and Shopify?", a: "Yes, plus custom-built sites, React, Next.js, Webflow and more." },
    ],
  },
  {
    slug: "off-page-seo-sri-lanka",
    icon: Globe,
    title: "Off-Page SEO Services",
    shortTitle: "Off-Page SEO",
    cardIntro:
      "Off-page SEO builds your domain's authority and trust across the wider web — the more reputable links and signals, the higher Google ranks you.",
    bullets: [
      "High-quality backlink acquisition",
      "Guest posting & content outreach",
      "Local citations & directories",
      "Social signals & brand mentions",
      "Competitor backlink analysis",
    ],
    seoTitle: "Off-Page SEO Services in Sri Lanka | Authority Building — SeoFX",
    seoDescription:
      "Off-page SEO services in Sri Lanka that build real authority. SeoFX acquires high-quality backlinks, citations & brand signals to dominate Google rankings.",
    keywords:
      "off page seo sri lanka, backlink building sri lanka, authority building seo, seo outreach sri lanka",
    hero: {
      eyebrow: "Off-Page SEO",
      h1: "Off-Page SEO Services in Sri Lanka — Build the Authority Google Rewards",
      intro:
        "Off-page SEO is what separates page one from page ten. We build your website's authority through high-quality backlinks, citations and brand mentions.",
    },
    whatIs: {
      heading: "What is Off-Page SEO?",
      body: [
        "Off-page SEO refers to everything done outside your website to build trust and authority — most importantly, backlinks from reputable sites.",
        "Google sees backlinks as votes of confidence. The more relevant, high-quality sites that link to you, the more Google trusts your business and the higher you rank.",
      ],
    },
    whatWeDo: {
      heading: "What's Included",
      items: [
        { title: "Manual Link Building", body: "100% white-hat outreach — no PBNs, no spam." },
        { title: "Guest Posting", body: "High-DA placements on niche-relevant publications." },
        { title: "Local Citations", body: "Sri Lanka business directories, GMB-aligned NAP citations." },
        { title: "Digital PR", body: "Earn mentions and links from news and media outlets." },
        { title: "Brand Signals", body: "Social profiles, reviews, forums, and Q&A presence." },
      ],
    },
    benefits: {
      heading: "Benefits of Off-Page SEO",
      items: [
        "Permanent ranking improvements",
        "Build a moat competitors can't copy quickly",
        "Drive referral traffic from authority sites",
        "Boost domain authority for every page on your site",
        "Improve trust signals for users and Google",
      ],
    },
    process: {
      heading: "Our Off-Page SEO Process",
      steps: [
        { title: "Backlink Audit", body: "Analyse current backlinks and disavow toxic ones." },
        { title: "Competitor Gap", body: "Find every quality link your competitors have that you don't." },
        { title: "Outreach Campaign", body: "Manual outreach for guest posts, mentions and citations." },
        { title: "Reporting", body: "Monthly reports of every link earned and authority gained." },
      ],
    },
    whyUs: {
      heading: "Why SeoFX for Off-Page SEO",
      body:
        "We've built thousands of safe, high-authority backlinks for Sri Lankan businesses without a single Google penalty. Quality always over quantity.",
    },
    faqs: [
      { q: "Are your backlinks safe?", a: "Yes. We use 100% white-hat manual outreach — no PBNs, no link farms." },
      { q: "How many links per month?", a: "Depends on your package. Typically 4–20 high-quality links per month." },
      { q: "Do you guarantee links?", a: "Link outreach is scoped before starting. Publishers control placements, and neither a link quantity nor a ranking is promised." },
    ],
  },
  {
    slug: "link-building-sri-lanka",
    icon: LinkIcon,
    title: "Link Building Services",
    shortTitle: "Link Building",
    cardIntro:
      "We acquire reputable, niche-relevant backlinks that genuinely move the needle on your domain authority and Google rankings.",
    bullets: [
      "Manual, white-hat link building",
      "Niche-relevant placements",
      "High-DA backlinks",
      "Toxic link audit & disavow",
    ],
    seoTitle: "Link Building Services in Sri Lanka | White-Hat Backlinks — SeoFX",
    seoDescription:
      "Premium link building services in Sri Lanka. SeoFX builds white-hat, high-authority backlinks that boost domain authority and Google rankings safely.",
    keywords:
      "link building sri lanka, backlinks sri lanka, white hat link building, high da backlinks",
    hero: {
      eyebrow: "Link Building",
      h1: "Link Building Services in Sri Lanka — High-Authority Backlinks That Rank",
      intro:
        "Relevant editorial links can support discovery and authority. We avoid link schemes and focus on useful, relevant outreach.",
    },
    whatIs: {
      heading: "What is Link Building?",
      body: [
        "Link building is the process of earning hyperlinks from other websites pointing to yours. Each quality link tells Google your site is trustworthy and authoritative.",
        "But not all links are equal — and bad links can hurt you. SeoFX only acquires links from real, relevant, high-authority websites.",
      ],
    },
    whatWeDo: {
      heading: "Types of Links We Build",
      items: [
        { title: "Guest Post Links", body: "Editorial content placed on relevant high-DA blogs." },
        { title: "Niche Edits / Link Insertions", body: "Adding your link to existing relevant content." },
        { title: "Resource Page Links", body: "Featured on industry resource lists." },
        { title: "Digital PR Links", body: "Earned mentions from news media and journalists." },
        { title: "Local Citation Links", body: "Sri Lanka directories and business listings." },
      ],
    },
    benefits: {
      heading: "Benefits of Quality Link Building",
      items: [
        "Higher rankings for your most competitive keywords",
        "Increased Domain Rating / Authority",
        "Defensive moat against competitors",
        "Referral traffic from authority sites",
        "Faster indexing of new pages",
      ],
    },
    process: {
      heading: "Our Link Building Process",
      steps: [
        { title: "Strategy & Targets", body: "Define link types, anchor text mix and target metrics." },
        { title: "Prospecting", body: "Identify relevant sites with strong organic traffic." },
        { title: "Outreach & Negotiation", body: "Manual outreach by our experienced link team." },
        { title: "Placement & Reporting", body: "Live link delivered with full transparent reporting." },
      ],
    },
    whyUs: {
      heading: "Why SeoFX for Link Building",
      body:
        "Every link we build is manually vetted for relevance, traffic, DR, and indexation. No shortcuts, no risky tactics — just safe, ranking-moving links.",
    },
    faqs: [
      { q: "What's the minimum DR/DA you target?", a: "We typically target sites with DR 30+ and real organic traffic." },
      { q: "How long do links stay live?", a: "Publishers control their pages and may change or remove links. Any monitoring and follow-up arrangements are agreed in the scope." },
      { q: "Do you offer link building only?", a: "Yes — we offer link building as a standalone service or part of full SEO." },
    ],
  },
  {
    slug: "seo-web-development-sri-lanka",
    icon: Code2,
    title: "SEO-Ready Web Development",
    shortTitle: "Web Development",
    cardIntro:
      "A beautiful website means nothing if it can't be found. We build websites that are SEO-optimised from the first line of code.",
    bullets: [
      "Lightning-fast Core Web Vitals",
      "Mobile-first responsive design",
      "Built-in technical SEO foundations",
      "Conversion-focused UX",
    ],
    seoTitle: "SEO-Ready Web Development in Sri Lanka | SEO Web Design — SeoFX",
    seoDescription:
      "SEO-ready web development in Sri Lanka. SeoFX builds fast, mobile-first websites engineered to rank on Google and convert visitors into customers.",
    keywords:
      "web development sri lanka, seo web design sri lanka, seo friendly website, fast website sri lanka",
    hero: {
      eyebrow: "Web Development",
      h1: "SEO-Ready Web Development in Sri Lanka — Built to Rank & Convert",
      intro:
        "Most websites are built for looks, not for Google. We build websites that are blazing fast, technically perfect, and engineered to rank from day one.",
    },
    whatIs: {
      heading: "What is SEO-Ready Web Development?",
      body: [
        "SEO-ready web development means every technical and structural decision — code, hosting, URLs, schema, speed, mobile UX — is made with search rankings in mind.",
        "It's the difference between a website you have to fix later, and a website that ranks the moment you launch it.",
      ],
    },
    whatWeDo: {
      heading: "What's Included",
      items: [
        { title: "Custom Design & Development", body: "WordPress, Shopify, React/Next.js — your choice." },
        { title: "Core Web Vitals Optimised", body: "All pages built to score 90+ on Lighthouse." },
        { title: "Schema-First Architecture", body: "Structured data baked in from day one." },
        { title: "Mobile-First Responsive", body: "Perfect experience on every device." },
        { title: "On-Page SEO Built-In", body: "Titles, meta, headings and internal linking pre-optimised." },
        { title: "Conversion-Focused UX", body: "CTAs, forms and flows designed to convert." },
      ],
    },
    benefits: {
      heading: "Benefits of SEO-First Web Development",
      items: [
        "Rank faster — sometimes from day one",
        "No expensive technical SEO retrofit later",
        "Better conversion rates from clean UX",
        "Future-proof, easy-to-update website",
        "Lower bounce rates and longer session times",
      ],
    },
    process: {
      heading: "Our Web Development Process",
      steps: [
        { title: "Discovery & Planning", body: "Goals, target keywords, sitemap and tech choice." },
        { title: "Design & UX", body: "Conversion-focused design with SEO baked in." },
        { title: "Development & QA", body: "Performance, accessibility and SEO testing at every stage." },
        { title: "Launch & SEO Handoff", body: "Smooth launch with full SEO migration if applicable." },
      ],
    },
    whyUs: {
      heading: "Why SeoFX for Web Development",
      body:
        "We're an SEO company first — so we build websites that rank. Our developers and SEO consultants work side-by-side from day one.",
    },
    faqs: [
      { q: "Do you migrate existing websites?", a: "Yes — we handle full SEO migrations with 301 redirects and ranking preservation." },
      { q: "Which platforms do you build on?", a: "WordPress, Shopify, Webflow, React/Next.js — based on your needs." },
      { q: "How long does a website take?", a: "Typical timeline is 4–10 weeks depending on scope and content." },
    ],
  },
  {
    slug: "social-media-digital-marketing-sri-lanka",
    icon: Megaphone,
    title: "Social Media & Digital Marketing",
    shortTitle: "Social & Digital Marketing",
    cardIntro:
      "We consult and guide your digital marketing across Facebook, Instagram, LinkedIn and more — to maximise your full digital presence in Sri Lanka.",
    bullets: [
      "Channel strategy & planning",
      "Facebook, Instagram, LinkedIn, TikTok",
      "Content & ad guidance",
      "Reporting & ROI analysis",
    ],
    seoTitle: "Social Media & Digital Marketing in Sri Lanka | Consultancy — SeoFX",
    seoDescription:
      "Social media and digital marketing consultancy in Sri Lanka. SeoFX guides your Facebook, Instagram, LinkedIn & paid ad strategy for maximum ROI.",
    keywords:
      "social media marketing sri lanka, digital marketing sri lanka, facebook ads sri lanka, instagram marketing",
    hero: {
      eyebrow: "Digital Marketing",
      h1: "Social Media & Digital Marketing Consultancy in Sri Lanka",
      intro:
        "SEO is just one part of digital growth. SeoFX helps you choose, plan and execute the right mix of channels — social, paid, content — for your business.",
    },
    whatIs: {
      heading: "What We Mean by Digital Marketing Consultancy",
      body: [
        "We don't try to be your social media agency. Instead, we act as your strategic guide — helping you decide which channels to invest in, how much to spend, and how to measure success.",
        "This is ideal for businesses that have an internal marketing team or freelancers but lack senior strategic direction.",
      ],
    },
    whatWeDo: {
      heading: "What's Included",
      items: [
        { title: "Channel Audit", body: "Review your current social and paid marketing performance." },
        { title: "Strategy & Roadmap", body: "Channel priorities, budget split, content pillars and KPIs." },
        { title: "Ad Account Optimisation", body: "Improve targeting, creatives and bidding for Meta & Google Ads." },
        { title: "Content Direction", body: "Monthly content themes aligned with SEO and sales goals." },
        { title: "Reporting Frameworks", body: "Set up dashboards so you always know what's working." },
      ],
    },
    benefits: {
      heading: "Benefits of Digital Marketing Consultancy",
      items: [
        "Stop wasting ad budget on the wrong channels",
        "Align all marketing channels around revenue goals",
        "Get senior-level strategy without hiring a CMO",
        "Faster decision-making with clear KPIs",
        "Better integration between SEO, content and ads",
      ],
    },
    process: {
      heading: "Our Consultancy Process",
      steps: [
        { title: "Discovery", body: "Understand your business, audience and current marketing." },
        { title: "Audit & Benchmark", body: "Audit your current channels vs. competitors." },
        { title: "Strategy", body: "Channel mix, budget plan, content & ad direction." },
        { title: "Monthly Guidance", body: "Ongoing reviews and tactical adjustments." },
      ],
    },
    whyUs: {
      heading: "Why SeoFX for Digital Marketing Consultancy",
      body:
        "We don't profit from your ad spend, so our advice is honest and channel-agnostic. We recommend what actually works for your business in Sri Lanka.",
    },
    faqs: [
      { q: "Do you run our ads or just consult?", a: "We primarily consult and guide — your team or agency executes. We can run ads on request." },
      { q: "Which channels do you cover?", a: "Facebook, Instagram, TikTok, LinkedIn, YouTube, Google Ads and more." },
      { q: "Do you work with agencies?", a: "Yes — we often act as a strategic layer above your existing marketing agency." },
    ],
  },
];

export const SERVICES: ServiceDetail[] = LEGACY_SERVICES.map(service => {
  const page = getServicePageContent(`/services/${service.slug}`);
  if (!page) return service;
  return { ...service, title: page.h1, seoTitle: page.title, seoDescription: page.description, cardIntro: page.intro, bullets: page.deliverables.map(([title]) => title), hero: { ...service.hero, h1: page.h1, intro: page.intro }, faqs: page.faqs };
});

export const getServiceBySlug = (slug?: string) =>
  SERVICES.find((s) => s.slug === slug);
