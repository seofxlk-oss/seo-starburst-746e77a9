import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { SEO_NAVIGATION, ADD_ON_NAVIGATION, COMPANY_NAVIGATION } from "@/lib/navigation";
import { whatsappHref } from "@/lib/contact-actions";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-tight py-14">
        <div className="mb-10 flex flex-col gap-4 border-b border-primary-foreground/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" aria-label="SeoFX home" className="inline-flex w-fit rounded-lg bg-background px-3 py-2"><img src={logo} alt="SeoFX" className="h-9 w-auto" width={160} height={40} /></Link>
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/75">Get SEO right before you build. SEO planning and ongoing support for businesses in Sri Lanka.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[{ title: "SEO Services", links: SEO_NAVIGATION }, { title: "Add-ons", links: ADD_ON_NAVIGATION }, { title: "Company", links: COMPANY_NAVIGATION }].map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-base font-bold">{column.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">{column.links.map((item) => <li key={item.href}><Link to={item.href} className="transition-colors hover:text-accent">{item.label}</Link></li>)}</ul>
            </div>
          ))}
          <div>
            <h3 className="font-display text-base font-bold">Contact</h3>
            <div className="mt-4 space-y-4 text-sm text-primary-foreground/75">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-accent"><Phone className="size-4 shrink-0" />{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-accent"><Mail className="size-4 shrink-0" />{SITE.email}</a>
              <a href={whatsappHref(pathname)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><MessageCircle className="size-4 shrink-0" />WhatsApp</a>
              <p className="flex items-center gap-2"><MapPin className="size-4 shrink-0" />{SITE.address}</p>
              <Link to="/contact-us#audit" className="inline-block hover:text-accent">Free SEO Audit</Link>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">© {new Date().getFullYear()} SeoFX</p>
      </div>
    </footer>
  );
};
