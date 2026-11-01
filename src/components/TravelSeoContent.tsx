import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TRAVEL_SEO_FAQS } from "@/lib/travel-seo";

export function TravelSeoOverview() {
  return (
    <section className="container-tight pb-16" aria-labelledby="travel-seo-definition">
      <div className="max-w-3xl">
        <h2 id="travel-seo-definition" className="font-display text-3xl font-extrabold">What is travel SEO in Sri Lanka?</h2>
        <p className="mt-4 text-lg leading-relaxed">{TRAVEL_SEO_FAQS[0].a}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">The goal is not simply more visitors. It is helping the right traveller find a suitable tour, understand your offer and send a qualified enquiry. Someone researching Ella needs a helpful guide; someone comparing a private 10-day tour needs an itinerary, inclusions and a clear next step.</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ["Inbound tour operators & DMCs", "Connect destination guides, multi-day itineraries and private tours for overseas travellers. Explain your local support, transport arrangements and what can be customised."],
          ["Travel agencies", "Match your pages to the services you actually provide: inbound holidays, outbound packages, ticketing or corporate travel. Keep different customer needs on distinct pages."],
          ["Experiences & local guides", "Make day trips, safaris and guided experiences easy to evaluate with departure points, duration, accessibility details and a straightforward booking enquiry."],
        ].map(([title, body]) => <article key={title} className="border-t-2 border-accent pt-5"><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}
      </div>
    </section>
  );
}

export function TravelSeoStrategy() {
  return <>
    <section className="container-tight py-16" aria-labelledby="travel-process">
      <h2 id="travel-process" className="font-display text-3xl font-extrabold">Our travel website SEO process</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">A useful strategy starts with your business model, not a generic keyword list. We prioritise the tours you can deliver, the markets you want to reach and the pages that can turn interest into enquiries.</p>
      <ol className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {[
          ["Audit the website and enquiry journey", "Check crawl access, indexing, redirects, canonical URLs, mobile usability, page speed and enquiry forms. Establish a Search Console and analytics baseline before judging progress."],
          ["Research travellers and competitors", "Group destination, itinerary and booking searches by intent. Compare relevant ranking pages and identify what your business can add: first-hand route knowledge, original photography or clearer tour details."],
          ["Build the right page structure", "Map one primary search intent to each useful page. Connect Sri Lanka destination guides to relevant tour packages and link packages to their enquiry forms. Resolve competing or near-duplicate pages."],
          ["Improve content and trust", "Publish accurate day-by-day itineraries, inclusions, exclusions, transport details and cancellation information where available. Identify the business and the people responsible for the travel advice."],
          ["Implement and measure", "Improve metadata, internal links, image descriptions and relevant structured data. Track qualified enquiries as well as search visibility; revise priorities using actual performance and seasonal demand."],
        ].map(([title, body], i) => <li key={title} className="border-t border-border pt-5"><span className="text-sm font-bold text-accent">0{i + 1}</span><h3 className="mt-2 font-display text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></li>)}
      </ol>
    </section>

    <section className="bg-secondary py-16">
      <div className="container-tight">
        <h2 className="font-display text-3xl font-extrabold">A content structure built around travel enquiries</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Use these examples as a planning framework, not a promise of search volume. Every page should reflect an actual service or useful destination insight.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            ["Destination guides", "Example: things to do in Ella", "Answer practical questions about attractions, travel time and route choices. Link to tours that genuinely include the destination rather than adding unrelated booking links."],
            ["Itinerary and tour pages", "Example: Sri Lanka itinerary 10 days", "Describe who the route suits, daily stops, accommodation arrangements and what is included. Give travellers a visible way to request a customised itinerary."],
            ["Special-interest holidays", "Example: Sri Lanka family tours", "Explain the differences that matter to that audience, such as journey lengths and activity suitability. Do not duplicate a general tour page with a different heading."],
            ["Practical travel answers", "Example: best time to visit Sri Lanka", "Explain regional and seasonal differences with checked sources. For entry rules or safety advice, link to current official guidance instead of leaving outdated claims online."],
          ].map(([title, example, body]) => <article key={title} className="rounded-lg border border-border bg-card p-6"><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-2 text-sm font-semibold">{example}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="container-tight py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold">Travel SEO for Google and AI search</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Clear, original travel information can help search systems understand your business. Google's guidance for AI Overviews and AI Mode says the existing SEO fundamentals still apply; there is no special AI markup or extra technical requirement for inclusion.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Put important answers in visible text. Use descriptive headings, accurate business details and structured data that matches the page. Keep pages crawlable and connect related content with meaningful links. Hidden keyword blocks and mass-produced destination pages are not a substitute for useful information.</p>
          <a href="https://developers.google.com/search/docs/appearance/ai-features" className="mt-4 inline-block text-sm text-accent underline underline-offset-4">Google's guidance on AI features and your website</a>
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold">Local visibility and international demand</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">An eligible Google Business Profile can help customers find your real travel office or service-area business. Keep contact details, opening hours and services accurate. Our <Link to="/google-map-optimization" className="text-accent underline underline-offset-4">Google Map Optimization Sri Lanka</Link> service addresses this alongside website SEO.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">International targeting needs more than country names in headings. Research the markets you serve, provide appropriate language versions when justified and avoid duplicate regional pages. Accommodation businesses can also explore our <Link to="/hotel-seo-sri-lanka" className="text-accent underline underline-offset-4">hotel SEO services in Sri Lanka</Link>.</p>
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-secondary py-12">
      <div className="container-tight flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl"><h2 className="font-display text-2xl font-extrabold">Find the gaps between search traffic and tour enquiries</h2><p className="mt-3 text-muted-foreground">Share your website and priority tour products. Start with a travel SEO audit, or work with an <Link to="/seo-consultant-sri-lanka" className="text-accent underline underline-offset-4">SEO consultant Sri Lanka</Link> on a structured plan before implementation.</p></div>
        <Button asChild variant="hero" size="lg"><Link to="/contact-us">Request a travel SEO audit <ArrowRight className="size-4" /></Link></Button>
      </div>
    </section>

    <section className="container-narrow py-16" aria-labelledby="travel-faq">
      <h2 id="travel-faq" className="font-display text-3xl font-extrabold">Travel SEO Sri Lanka: frequently asked questions</h2>
      <div className="mt-8 divide-y divide-border">{TRAVEL_SEO_FAQS.map((faq, i) => <article id={`faq-${i + 1}`} key={faq.q} className="py-6"><h3 className="font-display text-lg font-bold">{faq.q}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p></article>)}</div>
    </section>
  </>;
}