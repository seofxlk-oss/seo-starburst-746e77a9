export interface ServicePageContent {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  deliverables: [string, string][];
  audience: string[];
  steps: [string, string][];
  sample: { business: string; headings: string[]; rows: string[][] };
  faqs: { q: string; a: string }[];
  related: [string, string][];
}

export const SERVICE_PAGE_CONTENT: ServicePageContent[] = [
  {
    "path": "/services/website-audit-sri-lanka",
    "title": "SEO Audit Sri Lanka – Website SEO Audit | SeoFX",
    "description": "SEO audits in Sri Lanka: technical access, content, search data and a prioritised issue report. Custom quote after a free analysis.",
    "h1": "Website SEO Audit in Sri Lanka",
    "intro": "An SEO audit reviews crawlability, content, links and available performance data to identify practical website improvements. It is for businesses that need a diagnosis before commissioning fixes, a redesign or an ongoing SEO programme.",
    "deliverables": [
      [
        "Technical review",
        "Response codes, indexability, canonicals, redirects, sitemap and rendering."
      ],
      [
        "Page review",
        "Titles, headings, content intent, internal links and contact actions."
      ],
      [
        "Search baseline",
        "Available Search Console and analytics data, with limitations recorded."
      ],
      [
        "Priority report",
        "Affected URLs, evidence, recommended fixes, owners and verification steps."
      ]
    ],
    "audience": [
      "A live website with unclear search performance.",
      "A business planning a migration or redesign.",
      "A developer or marketing team that needs a prioritised issue list."
    ],
    "steps": [
      [
        "Agree scope",
        "Confirm important page types, account access and business goals."
      ],
      [
        "Crawl & review",
        "Combine technical checks with manual page and search review."
      ],
      [
        "Prioritise",
        "Separate urgent access problems from content and usability improvements."
      ],
      [
        "Explain & verify",
        "Walk through the report and agree how implemented fixes will be checked."
      ]
    ],
    "sample": {
      "business": "Example Office & Home Supplies",
      "headings": [
        "Issue",
        "Evidence to check",
        "Recommendation"
      ],
      "rows": [
        [
          "Service URL",
          "Canonical points to the homepage.",
          "Review canonical and inspect the corrected page."
        ],
        [
          "Contact page",
          "Enquiry action is difficult to use on mobile.",
          "Test the form and simplify the contact journey."
        ]
      ]
    },
    "faqs": [
      {
        "q": "What does a website SEO audit include?",
        "a": "A website SEO audit includes technical access checks, page-level content review and available search data analysis, within the agreed scope. The report connects each finding with an affected URL, evidence and a recommended next step. It is a diagnostic, not a guarantee that every ranking problem has one simple cause."
      },
      {
        "q": "Is the free audit the same as a full technical SEO audit?",
        "a": "No, a free analysis is an initial review used to discuss priorities and a suitable scope. A full technical SEO audit can examine more pages, templates and implementation details and is custom quoted. We confirm access, deliverables and exclusions before starting rather than imply every diagnostic task is included for free."
      },
      {
        "q": "Will you implement SEO audit fixes?",
        "a": "Implementation can be scoped separately, or your developer can use the recommendations to make the changes. The audit identifies priorities and verification steps so responsibilities are clear. Before approving fixes, agree which templates and URLs are affected, how changes will be tested and whether any migration or redirect work is necessary."
      },
      {
        "q": "How long does an SEO audit take?",
        "a": "The audit schedule depends on site size, access, page types and the depth of review agreed. We confirm the delivery arrangements before starting rather than publish one deadline for every website. Missing account access or complex platform issues can affect the work, and completed fixes still need separate testing and search monitoring."
      },
      {"q": "How much does an SEO audit cost in Sri Lanka?", "a": "A full SEO audit receives a custom quote after a free analysis, because cost depends on site size, platform and how deep the review needs to go. If you want expert direction first, an SEO Consultation starts from LKR 50,000 and includes on-page SEO recommendations."},
      {"q": "What access do you need for an SEO audit?", "a": "Ideally read access to Google Search Console and GA4, plus a list of your main services and locations. We can start with public crawling alone, but account data shows which pages Google indexes and where clicks come from, so findings are more precise."},
      {"q": "Will an audit tell me why my traffic dropped?", "a": "An audit looks for likely causes such as indexing problems, lost pages, redirects, content changes or wider search updates. We compare available data around the date of the drop and list the evidence for each possible cause, rather than claim one certain answer."},
      {"q": "Do you audit WordPress, Shopify and custom websites?", "a": "Yes. We review WordPress, Shopify, Wix, Webflow and custom-built sites. Recommendations are written for your platform, so your developer knows whether a fix needs a setting, a plugin, a template change or custom code."},
      {"q": "How often should a website have an SEO audit?", "a": "Most business websites benefit from a full audit once a year and a lighter check after major changes such as a redesign, platform move or new section. Ongoing monitoring between audits catches broken pages and indexing issues earlier."},
      {"q": "What happens after the audit report?", "a": "We walk you through the priorities, answer questions and agree who fixes what. You can implement the fixes yourself, hand them to your developer or ask us to scope implementation. A follow-up check confirms changes were made correctly."}
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "SEO services",
        "/services"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  },
  {
    "path": "/services/keyword-research-sri-lanka",
    "title": "Keyword Research Services in Sri Lanka | SeoFX",
    "description": "Keyword research for Sri Lankan businesses: search intent, English, Sinhala and Tamil queries, and URL mapping. Custom quote after free analysis.",
    "h1": "Keyword Research for Sri Lankan Businesses",
    "intro": "Keyword research identifies how customers search and maps relevant topics to useful website pages. It is for Sri Lankan businesses planning new content, reviewing existing pages or targeting local and overseas audiences.",
    "deliverables": [
      [
        "Audience discovery",
        "Products, services, locations, languages and customer questions."
      ],
      [
        "Search intent review",
        "Compare real search results and classify needs beyond search volume."
      ],
      [
        "Language research",
        "Relevant English, Sinhala, Tamil and transliterated query patterns."
      ],
      [
        "Keyword map",
        "Topic groups, proposed URLs, priorities and source notes."
      ]
    ],
    "audience": [
      "A new website needing a page plan.",
      "A business attracting irrelevant traffic.",
      "A content team planning categories, service pages or guides."
    ],
    "steps": [
      [
        "Brief",
        "Agree customer segments and business priorities."
      ],
      [
        "Research",
        "Combine tools, customer questions and current search data."
      ],
      [
        "Validate intent",
        "Review what users need and the pages search engines show."
      ],
      [
        "Map & hand over",
        "Assign topic groups to URLs and document priorities."
      ]
    ],
    "sample": {
      "business": "Example Office & Home Supplies",
      "headings": [
        "Topic example",
        "Intent",
        "Proposed page"
      ],
      "rows": [
        [
          "office chair Colombo",
          "Compare a local product range.",
          "/office-chairs"
        ],
        [
          "how to choose an office chair",
          "Understand features before buying.",
          "/guides/choosing-office-chairs"
        ]
      ]
    },
    "faqs": [
      {
        "q": "Do you research Sinhala and Tamil keywords?",
        "a": "Yes, research can include Sinhala, Tamil, English and relevant transliterated phrases when they match your audience. We review how people describe the need rather than assume direct translations have identical intent. Language and subject review should also guide the content, so a keyword list alone is not a multilingual publishing strategy."
      },
      {
        "q": "How many keywords will I receive?",
        "a": "The number depends on your products, services, locations and agreed research scope, not a fixed bulk quota. The deliverable prioritises relevant topic groups and maps them to pages your business can support. Search-volume estimates are labelled as estimates, and a large keyword list is not a prediction of traffic or sales."
      },
      {
        "q": "How does keyword-to-page mapping help?",
        "a": "Keyword-to-page mapping gives each priority URL a clear topic and customer purpose. It can reveal overlapping pages, missing information and opportunities to improve existing content instead of create duplicates. Related searches may belong together on one useful page; the map is a planning document, not a promise of rankings for every phrase."
      },
      {
        "q": "Is keyword research a one-time task?",
        "a": "Keyword research can be a one-time deliverable, but it should be reviewed when your offer, customers or search results change. New performance data can reveal queries that need different content or a clearer landing page. The frequency of updates is agreed around the business rather than an automatic refresh schedule for every site."
      },
      {"q": "How much does keyword research cost?", "a": "Keyword research is custom quoted after a free analysis, based on the number of services, locations and pages involved. An SEO Consultation from LKR 50,000 includes keyword direction if you need a smaller starting point."},
      {"q": "Do Sri Lankans search in Sinhala and Tamil?", "a": "Many do, especially on mobile and for local services, although English queries are common for business and professional searches. We check search data in each language where your customers search and only recommend pages in a language your team can support properly."},
      {"q": "Which keyword tools do you use?", "a": "We use Google Search Console, Google Keyword Planner, Semrush and live Google results. Tool volumes for Sri Lanka are estimates, so we combine them with search intent and your business knowledge instead of relying on one number."},
      {"q": "Should I target high-volume keywords first?", "a": "Not always. Broad terms are often highly competitive and less likely to bring enquiries. We usually prioritise specific searches that match what you sell, then build towards broader terms as the site earns authority."},
      {"q": "What is a keyword map?", "a": "A keyword map assigns each important search topic to one page on your site, with its intent, primary term and supporting questions. It stops two pages competing for the same search and gives writers and developers a clear brief."},
      {"q": "Can keyword research help with Google Ads too?", "a": "Yes. The same research shows which searches signal buying intent, which can inform an ad campaign. Google Ads management is quoted separately, and ad spend is paid directly to Google."}
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "SEO services",
        "/services"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  },
  {
    "path": "/services/on-page-seo-sri-lanka",
    "title": "On-Page SEO Services in Sri Lanka | SeoFX",
    "description": "On-page SEO in Sri Lanka: useful content, titles, headings, internal links and accurate schema. Custom quote after a free analysis.",
    "h1": "On-Page SEO Services in Sri Lanka",
    "intro": "On-page SEO improves the content, headings, metadata and internal links on your website so visitors and search engines can understand each page. It is for businesses with unclear service pages, overlapping topics or content that does not answer customer questions.",
    "deliverables": [
      [
        "Page intent",
        "One clear purpose and a useful information hierarchy."
      ],
      [
        "Titles & headings",
        "Descriptive metadata, a main heading and relevant supporting sections."
      ],
      [
        "Content & links",
        "Answer gaps, natural internal anchors and clear next steps."
      ],
      [
        "Images & schema",
        "Appropriate image descriptions and structured data matching visible facts."
      ]
    ],
    "audience": [
      "Service pages that do not explain the offer clearly.",
      "A site with duplicate titles or competing pages.",
      "A shop or content team improving existing page templates."
    ],
    "steps": [
      [
        "Review pages",
        "Confirm priority URLs and customer intent."
      ],
      [
        "Plan changes",
        "Document content, metadata and internal link recommendations."
      ],
      [
        "Implement",
        "Agree direct changes or a handover to your team."
      ],
      [
        "Check & review",
        "Validate the published page and review available search data."
      ]
    ],
    "sample": {
      "business": "Example Office & Home Supplies",
      "headings": [
        "Page element",
        "Sample recommendation",
        "Check"
      ],
      "rows": [
        [
          "Title",
          "Office Chairs in Colombo | Example Shop",
          "Descriptive and unique to the page."
        ],
        [
          "Heading",
          "Office chairs for home and workplace",
          "One main heading; content matches the range."
        ]
      ]
    },
    "faqs": [
      {
        "q": "What do on-page SEO services include?",
        "a": "On-page SEO services include reviewing page purpose, titles, headings, content, internal links and appropriate structured data. Image descriptions and contact actions can also be part of the agreed work. We prioritise pages and confirm implementation responsibilities before starting, so a metadata edit is not presented as a complete technical SEO programme."
      },
      {
        "q": "Will on-page SEO change my website design?",
        "a": "On-page work may improve text, headings, links or page structure, and some recommendations can affect the layout. We agree changes and review responsibilities before implementation rather than promise the design will never change. The aim is clearer, useful information and a working customer journey, not visual changes for their own sake."
      },
      {
        "q": "Can you optimise WordPress, Shopify and WooCommerce pages?",
        "a": "Platform-specific on-page requirements can be reviewed for WordPress, Shopify, WooCommerce and other websites within the agreed scope. The available controls depend on themes, plugins and development access. We distinguish content changes from template or code work and confirm who will implement each requirement instead of assume a plugin solves every issue."
      },
      {
        "q": "How quickly does on-page SEO improve rankings?",
        "a": "Ranking changes have no fixed timetable after on-page improvements. Search engines must discover and reassess the page, while competition, content quality and other signals still matter. We verify that changes are published correctly and monitor available search data, without promise of page-one movement within a certain number of weeks."
      },
      {"q": "How much does on-page SEO cost in Sri Lanka?", "a": "On-page SEO is custom quoted after a free analysis, depending on how many pages need work and whether we write content or advise your team. An SEO Consultation from LKR 50,000 includes on-page SEO recommendations for key pages."},
      {"q": "What is the difference between on-page and technical SEO?", "a": "On-page SEO improves what each page says: titles, headings, content, images and internal links. Technical SEO covers how search engines access the site: speed, crawling, indexing, redirects and structured data. Most sites need some of both."},
      {"q": "Do you rewrite my website content?", "a": "We can rewrite or create content, or give your writer a detailed brief. Either way, the content must stay accurate to your business, so we ask you to confirm facts, services and claims before anything is published."},
      {"q": "How long before on-page changes show results?", "a": "Google needs to recrawl the page first, which can take days to weeks. Ranking changes usually follow over the next few months, and depend on competition and the site's overall authority. We track progress in Search Console."},
      {"q": "Is keyword stuffing still effective?", "a": "No. Repeating a keyword unnaturally can make a page harder to read and may hurt performance. We use the main term where it fits naturally, in the title and headings, and cover related questions customers actually ask."},
      {"q": "Will on-page SEO help me appear in AI answers?", "a": "Clear, well-structured pages that answer questions directly are easier for Google AI Overviews, ChatGPT and Gemini to understand and cite. It improves your chances but cannot guarantee a mention."}
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "SEO services",
        "/services"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  },
  {
    "path": "/services/off-page-seo-sri-lanka",
    "title": "Off-Page SEO Services in Sri Lanka | SeoFX",
    "description": "Off-page SEO in Sri Lanka: genuine brand mentions, relevant citations, review guidance and digital PR. Custom quote after a free analysis.",
    "h1": "Off-Page SEO Services in Sri Lanka",
    "intro": "Off-page SEO develops accurate business references and useful exposure beyond your website through mentions, listings, genuine reviews and digital PR. It is for businesses that need clearer third-party information and relevant discovery, rather than a bulk backlink package.",
    "deliverables": [
      [
        "Brand references",
        "Review business information on relevant third-party profiles."
      ],
      [
        "Listings & citations",
        "Identify appropriate platforms and correct inaccurate business details."
      ],
      [
        "Genuine review guidance",
        "Feedback requests without fabricated reviews, incentives or gating."
      ],
      [
        "Digital PR",
        "Relevant story and expert contribution opportunities; coverage remains editorial."
      ]
    ],
    "audience": [
      "A business with inconsistent third-party information.",
      "A local company improving its public profiles.",
      "A team seeking relevant brand exposure and PR opportunities."
    ],
    "steps": [
      [
        "Review footprint",
        "Check existing profiles, mentions and customer information."
      ],
      [
        "Prioritise platforms",
        "Select relevant, legitimate sources your audience uses."
      ],
      [
        "Improve & outreach",
        "Correct information and propose worthwhile stories or contributions."
      ],
      [
        "Report",
        "Record completed work, genuine mentions and limitations."
      ]
    ],
    "sample": {
      "business": "Example Office & Home Supplies",
      "headings": [
        "Platform type",
        "Sample finding",
        "Action"
      ],
      "rows": [
        [
          "Business profile",
          "Old opening hours still visible.",
          "Confirm current hours with the owner and correct the profile."
        ],
        [
          "Industry publication",
          "Relevant customer question lacks an expert explanation.",
          "Pitch a factual contribution; publication is not guaranteed."
        ]
      ]
    },
    "faqs": [
      {
        "q": "How is off-page SEO different from link building?",
        "a": "Off-page SEO covers the wider business footprint, including brand mentions, relevant citations, genuine reviews and digital PR. Link building focuses specifically on earning editorial hyperlinks to useful website content. These activities can overlap, but they have different deliverables, and a business listing or unlinked mention is not reported as an editorial backlink."
      },
      {
        "q": "Do you buy reviews or guarantee media coverage?",
        "a": "No, reviews must reflect genuine customer experiences and coverage is controlled by publishers. We can advise on compliant feedback requests and propose relevant stories or contributions, but we do not fabricate ratings or guarantee publication. The scope records work completed and references earned, not an invented promise of positive publicity."
      },
      {
        "q": "Which directories or citations do you use?",
        "a": "We assess relevant, legitimate platforms based on your industry, customer locations and existing business footprint. There is no universal directory count that every Sri Lankan business needs. Accurate information and usefulness matter more than bulk submissions, and we avoid low-quality platforms whose primary purpose is selling links or manipulating search results."
      },
      {
        "q": "Does off-page SEO guarantee better rankings?",
        "a": "No, off-page activity cannot guarantee a search position or permanent visibility. Relevant references may support discovery and customer understanding, but Google considers many signals and competitors continue to change. We report the agreed work and available observations without treating a mention count or third-party authority score as proof of sales."
      },
      {"q": "How much does off-page SEO cost?", "a": "Off-page SEO is custom quoted after a free analysis, because the work depends on your industry, competitors and the outreach needed. We do not sell fixed bundles of links."},
      {"q": "Is off-page SEO the same as link building?", "a": "Link building is part of off-page SEO. Off-page work also covers business mentions, directory and profile accuracy, digital PR, partnerships and reviews that help search engines trust your business."},
      {"q": "Are paid links safe?", "a": "Buying links to manipulate rankings breaks Google's spam policies and can lead to lost visibility. We focus on relevant, earned mentions and properly labelled sponsorships where appropriate."},
      {"q": "Which Sri Lankan websites can mention my business?", "a": "Relevant options often include industry associations, local news, supplier and partner sites, chambers of commerce and trusted business directories. We look for sources your customers would actually recognise."},
      {"q": "How long does off-page SEO take to work?", "a": "Off-page work builds slowly, usually over several months. Each new relevant mention adds a little trust, so results depend on consistency and on the quality of your website itself."},
      {"q": "Can off-page SEO fix a poor website?", "a": "No. Mentions and links help most when the pages they point to are useful and technically sound. We usually recommend fixing major on-page and technical issues first."}
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "Editorial link building",
        "/services/link-building-sri-lanka"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  },
  {
    "path": "/services/link-building-sri-lanka",
    "title": "Link Building Services in Sri Lanka | SeoFX",
    "description": "Editorial link building in Sri Lanka: relevant resources, manual outreach and clear reporting. Custom quote after a free analysis.",
    "h1": "White-Hat Link Building in Sri Lanka",
    "intro": "Link building earns editorial hyperlinks from relevant websites to content that genuinely helps their readers. It is for businesses with useful resources or expertise to share, not those seeking guaranteed link quantities or permanent placements.",
    "deliverables": [
      [
        "Content & target review",
        "Identify useful pages worth referencing and relevant audiences."
      ],
      [
        "Editorial prospecting",
        "Assess publication relevance, quality and reader value."
      ],
      [
        "Manual outreach",
        "Pitch resources or contributions without manipulative link schemes."
      ],
      [
        "Link log",
        "Record source, destination, context, attributes and monitoring arrangements."
      ]
    ],
    "audience": [
      "A business with useful guides, research or resources.",
      "A content team seeking relevant editorial references.",
      "An SEO programme needing a separately scoped outreach plan."
    ],
    "steps": [
      [
        "Identify value",
        "Choose genuinely useful resources and target audiences."
      ],
      [
        "Research publishers",
        "Review relevance and editorial quality, not just a score."
      ],
      [
        "Pitch",
        "Propose a helpful reference or contribution; publishers decide."
      ],
      [
        "Document",
        "Record earned links and follow-up checks in the agreed scope."
      ]
    ],
    "sample": {
      "business": "Example Office & Home Supplies",
      "headings": [
        "Outreach example",
        "Destination",
        "Status"
      ],
      "rows": [
        [
          "Industry resource guide",
          "/guides/choosing-office-chairs",
          "Sample pitch drafted; no placement claimed."
        ],
        [
          "Relevant workplace publication",
          "/guides/ergonomic-workspace",
          "Editorial decision pending; no link quantity promised."
        ]
      ]
    },
    "faqs": [
      {
        "q": "What does white-hat link building include?",
        "a": "White-hat link building includes identifying useful resources, researching relevant publications and proposing references that help their readers. We avoid private blog networks, automated spam and paid schemes intended to manipulate ranking signals. Publishers decide whether to include a link, and reporting distinguishes a drafted pitch from an actual published editorial reference."
      },
      {
        "q": "Do you guarantee a number of backlinks?",
        "a": "No, we do not guarantee a fixed number of editorial backlinks or a ranking outcome. Outreach work and deliverables are agreed before starting, while publishers control publication decisions. Quality, relevance and accurate reporting are more useful than a bulk quota that encourages placements on unrelated sites created mainly to sell links."
      },
      {
        "q": "How long will an editorial link stay live?",
        "a": "Publishers can edit or remove their content and links, so no lifetime placement is promised. Any monitoring or follow-up arrangements are agreed within the scope. The link log records its source, destination and context when checked; an initially live link is not a guarantee that the page will remain unchanged forever."
      },
      {
        "q": "Is link building the same as off-page SEO?",
        "a": "No, link building focuses on editorial hyperlinks, while off-page SEO also includes unlinked brand mentions, business citations, genuine review guidance and digital PR. We separate these deliverables in reporting so a directory listing is not counted as an editorial placement. Either service should support useful discovery rather than manipulate search signals."
      },
      {"q": "How much does link building cost in Sri Lanka?", "a": "Link building is custom quoted after a free analysis. Cost depends on the outreach effort and content needed to earn relevant links, not a fixed price per link."},
      {"q": "How many links do I need to rank?", "a": "There is no fixed number. One relevant link from a trusted Sri Lankan site can matter more than many weak ones. We compare your profile with the pages that currently rank and set realistic targets."},
      {"q": "Do you use private blog networks (PBNs)?", "a": "No. Private blog networks and link schemes break Google's spam policies and put your site at risk. We only pursue editorial, relevant links."},
      {"q": "What makes a good backlink?", "a": "A good backlink comes from a real, relevant website, sits naturally inside useful content and is likely to send interested visitors. Domain metrics help, but relevance and trust matter more."},
      {"q": "Can you remove bad links pointing to my site?", "a": "We can review your link profile, identify clearly harmful patterns and request removal where possible. Google ignores most low-quality links on its own, so disavowing is only used in specific cases."},
      {"q": "Will I own the links you build?", "a": "Links are placed on third-party sites, so no one can fully own them. We report every earned link with its URL and source so you know exactly what was achieved."}
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "Off-page SEO",
        "/services/off-page-seo-sri-lanka"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  },
  {
    "path": "/services/seo-web-development-sri-lanka",
    "title": "SEO-Friendly Web Development in Sri Lanka | SeoFX",
    "description": "SEO-friendly website development in Sri Lanka: clear URLs, accessible content and launch checks. Custom quote after a free analysis.",
    "h1": "SEO-Friendly Website Development in Sri Lanka",
    "intro": "SEO-friendly development implements a website with accessible content, clear URLs and tested search-related requirements. It is for businesses building or redesigning a site, ideally after keyword research and page planning are agreed with the business and developer.",
    "deliverables": [
      [
        "Pre-build requirements",
        "Page structure, content requirements and platform responsibilities."
      ],
      [
        "Technical foundations",
        "Rendering, canonicals, redirects, sitemap and indexability."
      ],
      [
        "Mobile usability",
        "Readable pages, image handling and usable contact actions."
      ],
      [
        "Launch handover",
        "Verification checklist, account ownership and documented maintenance needs."
      ]
    ],
    "audience": [
      "A new website that needs search requirements from the beginning.",
      "A redesign or platform migration with existing URLs to protect.",
      "A developer implementing a documented SEO brief."
    ],
    "steps": [
      [
        "Plan before design",
        "Agree keywords, URLs and content briefs with the team."
      ],
      [
        "Build to scope",
        "Implement approved templates and technical requirements."
      ],
      [
        "Test",
        "Check desktop/mobile usability, source content, links and forms."
      ],
      [
        "Launch & review",
        "Verify live routes, redirects and indexing signals after deployment."
      ]
    ],
    "sample": {
      "business": "Example Office & Home Supplies",
      "headings": [
        "Launch check",
        "Sample requirement",
        "Owner"
      ],
      "rows": [
        [
          "Old service URL",
          "Redirect to its relevant new destination, not a generic homepage.",
          "Developer"
        ],
        [
          "Published service page",
          "Readable source content, one main heading and correct canonical.",
          "Developer & SEO reviewer"
        ]
      ]
    },
    "faqs": [
      {
        "q": "Do I need SEO planning before website development?",
        "a": "Yes, planning before development helps agree keyword topics, URLs, content briefs and technical requirements while changes are easier to coordinate. Your business, writer and developer can work from a shared brief. It reduces avoidable rework but does not guarantee launch-day rankings, and the build remains separately scoped from the planning engagement."
      },
      {
        "q": "Can you work with my existing web developer?",
        "a": "Yes, your developer can implement a search-focused brief within the agreed project responsibilities. We clarify requirements for rendering, URLs, redirects, metadata and launch checks, and identify review points. Any implementation performed by SeoFX is scoped separately, so technical advice does not automatically include a full replacement of your existing development team."
      },
      {
        "q": "Does SEO-friendly development guarantee page one?",
        "a": "No, a search-accessible website is a foundation, not a guarantee of page-one rankings. Content relevance, competition, business evidence and ongoing maintenance still affect outcomes. We verify the requirements that can be tested, such as working routes and canonical URLs, without turning a performance score or a new design into a ranking promise."
      },
      {
        "q": "What happens to existing URLs during a redesign?",
        "a": "Existing URLs should be inventoried before a redesign and retained where practical, with relevant redirects planned for necessary changes. We review internal links, canonical settings and live responses after launch. A migration still carries risk, so no provider should promise unchanged traffic without assess the actual pages, implementation and post-launch behaviour."
      },
      {"q": "How much does an SEO-friendly website cost in Sri Lanka?", "a": "Website development is custom quoted after a free analysis, based on the number of pages, features and platform. SEO planning can be added before the build, and an SEO Consultation starts from LKR 50,000."},
      {"q": "Which platform is best for SEO: WordPress, Shopify or custom?", "a": "Each can perform well when set up correctly. WordPress suits content-led sites, Shopify suits online shops and custom builds suit specific needs. We recommend the platform that fits your business and team, not one that suits us."},
      {"q": "Will a new website lose my current Google rankings?", "a": "It can if URLs change without redirects or content is removed. We map old URLs to new ones, keep valuable content and check the launch carefully to protect existing traffic."},
      {"q": "Do you make websites fast on mobile?", "a": "Yes. We plan image sizes, fonts, scripts and hosting with mobile speed in mind and test Core Web Vitals before launch. Speed is one ranking factor among many, but it also improves enquiries."},
      {"q": "Can you work with my existing designer?", "a": "Yes. We can provide SEO requirements for page structure, headings, URLs and content while your designer handles the look and feel."},
      {"q": "What happens after the website launches?", "a": "We check indexing, redirects, forms and Search Console in the weeks after launch. Ongoing SEO support can be scoped separately if you want continued growth."}
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "SEO services",
        "/services"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  },
  {
    "path": "/ecommerce-seo-sri-lanka",
    "title": "Ecommerce SEO in Sri Lanka – Online Store SEO | SeoFX",
    "description": "Ecommerce SEO in Sri Lanka: product content, categories, Shopify and WooCommerce technical checks. Custom quote after a free analysis.",
    "h1": "Ecommerce SEO for Online Stores in Sri Lanka",
    "intro": "Ecommerce SEO improves product and category information, store navigation and technical access so shoppers can find and evaluate your range. It is for Sri Lankan online stores using Shopify, WooCommerce or other platforms, with work tailored to the catalogue and target markets.",
    "deliverables": [
      [
        "Category & product review",
        "Useful descriptions, product differences and buying information."
      ],
      [
        "Catalogue navigation",
        "Internal links, categories, filters and duplicate-page handling."
      ],
      [
        "Technical store checks",
        "Canonicals, availability changes, rendering and crawl paths."
      ],
      [
        "Product data & reporting",
        "Accurate eligible structured data and search/purchase measurement where available."
      ]
    ],
    "audience": [
      "An online shop with unclear categories or duplicate product variations.",
      "A Shopify or WooCommerce store planning growth or migration.",
      "A retailer targeting Sri Lanka and relevant overseas buyers."
    ],
    "steps": [
      [
        "Review catalogue",
        "Agree products, customer needs and platform access."
      ],
      [
        "Map topics",
        "Align categories, products and guides with shopping intent."
      ],
      [
        "Improve templates",
        "Implement approved content and technical changes."
      ],
      [
        "Verify & review",
        "Check published pages and available search and purchase data."
      ]
    ],
    "sample": {
      "business": "Example Office & Home Supplies",
      "headings": [
        "Store page",
        "Sample requirement",
        "Verification"
      ],
      "rows": [
        [
          "/office-chairs",
          "Clear category range and links to available products.",
          "Check navigation and customer intent."
        ],
        [
          "/products/task-chair",
          "Accurate specifications, availability and purchase action.",
          "Confirm visible facts match any product markup."
        ]
      ]
    },
    "faqs": [
      {
        "q": "What do ecommerce SEO services include?",
        "a": "Ecommerce SEO services can cover product and category content, catalogue navigation, technical crawl issues and accurate structured data. The priorities depend on platform, product range and customer intent. We agree templates and implementation responsibilities before starting, and distinguish an organic visit from a tracked purchase or a confirmed profitable sale."
      },
      {
        "q": "Do you work with Shopify and WooCommerce stores?",
        "a": "Shopify and WooCommerce requirements can be reviewed within an agreed ecommerce SEO scope. Themes, apps, plugins and access permissions affect the changes available. We document which improvements belong in product content and which need template or development work, rather than assume installing one SEO app fixes the complete catalogue."
      },
      {
        "q": "How do you handle filters and duplicate products?",
        "a": "Filters, variants and duplicate product URLs need a platform-specific review of navigation, canonicals and indexing rules. Useful categories should remain discoverable, while unnecessary duplicate paths should not confuse the site structure. We test the chosen approach before rollout because a blanket block or canonical rule can hide valuable product pages."
      },
      {
        "q": "Will ecommerce SEO generate free sales permanently?",
        "a": "No, ecommerce SEO does not guarantee free or permanent sales. Organic visits have no advertising click charge, but research, content, development and maintenance still cost time and money. Purchases depend on demand, stock, pricing and the customer experience, so reporting should assess useful visits and available sales data without promise lifetime results."
      },
      {"q": "How much does ecommerce SEO cost in Sri Lanka?", "a": "Ecommerce SEO is custom quoted after a free analysis, depending on the number of products and categories, the platform and the competition. An SEO Consultation from LKR 50,000 is available as a starting point."},
      {"q": "Which ecommerce platforms do you work with?", "a": "We work with Shopify, WooCommerce, Magento and custom stores. Recommendations are written for your platform's templates, so changes apply across all products where possible."},
      {"q": "Should every product have a unique description?", "a": "Yes, where practical. Copied manufacturer descriptions appear on many sites and give Google little reason to rank yours. We prioritise your best-selling and highest-margin products first."},
      {"q": "How do you handle out-of-stock products?", "a": "Temporarily unavailable products usually stay live with a clear stock message. Permanently discontinued products may be redirected to a close alternative or category, depending on their traffic and links."},
      {"q": "Can SEO help my store appear in Google Shopping?", "a": "Free product listings in Google Shopping use your product feed and Merchant Center, which we can help set up and optimise. Paid Shopping ads are a separate Google Ads service."},
      {"q": "Do category pages matter for SEO?", "a": "Very much. Category pages often match broader searches like 'buy running shoes Sri Lanka', so we give them helpful introductions, clear filters and strong internal links."}
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "SEO services",
        "/services"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  },
  {
    "path": "/google-map-optimization",
    "title": "Google Maps SEO & Local SEO in Sri Lanka | SeoFX",
    "description": "Google Maps and local SEO in Sri Lanka: profile review, accurate business information and useful local content. Custom quote after free analysis.",
    "h1": "Google Maps Optimisation & Local SEO in Sri Lanka",
    "intro": "Local SEO improves accurate business information and location-relevant content across your website and eligible Google Business Profile. It is for businesses serving nearby customers who need clear services, contact details and directions, without a promised Maps position.",
    "deliverables": [
      [
        "Profile review",
        "Eligibility, ownership, categories, services and genuine business details."
      ],
      [
        "Local website content",
        "Relevant service areas, contact information and useful local pages."
      ],
      [
        "Genuine feedback guidance",
        "Review requests and responses that comply with platform policies."
      ],
      [
        "Handover & measurement",
        "Document changes and review available profile and contact activity."
      ]
    ],
    "audience": [
      "Eligible shops, clinics, hotels and local service businesses.",
      "A profile with outdated hours, categories or contact details.",
      "A team planning a clearer local customer journey."
    ],
    "steps": [
      [
        "Check eligibility",
        "Confirm the business model, ownership and service areas."
      ],
      [
        "Review relevance",
        "Assess profile information and local website content."
      ],
      [
        "Implement agreed changes",
        "Update genuine details and improve contact paths."
      ],
      [
        "Verify & review",
        "Check published information and available local performance data."
      ]
    ],
    "sample": {
      "business": "Example Colombo Showroom",
      "headings": [
        "Profile element",
        "Sample finding",
        "Recommendation"
      ],
      "rows": [
        [
          "Hours",
          "Example showroom hours are outdated.",
          "Confirm current opening hours with the owner."
        ],
        [
          "Services",
          "Repair service is unclear on the website.",
          "Explain the actual service area and booking contact."
        ]
      ]
    },
    "faqs": [
      {
        "q": "What is Google Maps SEO in Sri Lanka?",
        "a": "Google Maps SEO in Sri Lanka improves the accuracy and relevance of an eligible business profile and supporting local website information. Categories, genuine service details and clear contact options help customers assess the business. Results depend on relevance, distance and prominence, and no provider can guarantee a top-three Maps position."
      },
      {
        "q": "Can every business have a Google Business Profile?",
        "a": "No, Google Business Profile eligibility depends on the business model and Google’s policies, including relevant in-person customer contact requirements. Online-only businesses may not qualify. We review eligibility and genuine service areas before recommending changes, and never create a fictional office or add keywords to a business name that does not use them."
      },
      {
        "q": "How long does Google Maps optimisation take?",
        "a": "Setup and review timing depends on profile access, eligibility, verification and the changes agreed. Google controls verification and publication, while local results vary with competition and searcher location. We confirm practical delivery arrangements and review available observations rather than promise a top-three position within thirty, sixty or ninety days."
      },
      {
        "q": "Do you buy reviews or change the business name for keywords?",
        "a": "No, reviews must be genuine and the profile name must reflect the real business under Google’s policies. We can advise on compliant feedback requests and accurate service information, without incentives or review gating. Keyword stuffing and fabricated ratings are not a substitute for a relevant, trustworthy local customer experience."
      }
    ],
    "related": [
      [
        "SEO Before You Build",
        "/services/seo-consulting-sri-lanka"
      ],
      [
        "SEO services",
        "/services"
      ],
      [
        "SEO consultation",
        "/seo-consultant-sri-lanka"
      ]
    ]
  }
];

export const getServicePageContent = (path: string) => SERVICE_PAGE_CONTENT.find(page => page.path === path);