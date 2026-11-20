import { Helmet } from "react-helmet-async";
import { orgSchema, websiteSchema } from "@/lib/schema";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article" | "profile" | "product";
  twitterCard?: "summary" | "summary_large_image";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/tmIaoo88z2Xx6RhZlq0u8oH6sQ62/social-images/social-1777087076617-logo_(1).webp";
const TWITTER_HANDLE = "@seofxlk";

export const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = "SeoFX — SEO company in Rajagiriya, Sri Lanka",
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const clip = (value: string, limit: number) => value.length <= limit ? value : `${value.slice(0, limit - 1).replace(/\s+\S*$/, "").trim()}…`;
  title = clip(title, 60);
  description = clip(description, 155);
  const fullCanonical = (canonical.startsWith("http") ? canonical : `https://seofx.lk${canonical}`).replace(/\/$/, "");
  const supplied = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const jsonLdArray = [orgSchema(), websiteSchema(), ...supplied.filter((item) => !["Organization", "WebSite"].includes(String(item["@type"])) )];

  return (
    <Helmet>
      <html lang="en-LK" />
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <meta name="author" content="SeoFX" />
      <meta name="publisher" content="SeoFX" />
      <meta name="geo.region" content="LK" />
      <meta name="geo.placename" content="Rajagiriya, Sri Lanka" />
      <meta name="language" content="English" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_LK" />
      <meta property="og:locale:alternate" content="si_LK" />
      <meta property="og:site_name" content="SeoFX" />

      {/* Twitter / X */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:domain" content="seofx.lk" />
      <meta name="twitter:url" content={fullCanonical} />

      {/* Structured data */}
      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
