import { ServicePageContent } from "@/components/ServicePageContent";
import { getServicePageContent } from "@/lib/service-page-content";

export default function EcommerceSeo() {
  const page = getServicePageContent("/ecommerce-seo-sri-lanka");
  if (!page) return null;
  return <ServicePageContent page={page} />;
}