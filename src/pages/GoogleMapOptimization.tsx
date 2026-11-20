import { ServicePageContent } from "@/components/ServicePageContent";
import { getServicePageContent } from "@/lib/service-page-content";

export default function GoogleMapOptimization() {
  const page = getServicePageContent("/google-map-optimization");
  if (!page) return null;
  return <ServicePageContent page={page} />;
}
