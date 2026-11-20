import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { MAIN_NAVIGATION, SEO_NAVIGATION } from "@/lib/navigation";
import { headerAction, whatsappHref } from "@/lib/contact-actions";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const action = headerAction(pathname);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceLinks = (
    <>
      {SEO_NAVIGATION.map((item) => (
        <Link key={item.href} to={item.href} className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-accent" onClick={() => { setOpen(false); setServicesOpen(false); }}>{item.label}</Link>
      ))}
      <div className="mt-2 border-t border-border pt-2">
        <p className="px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">Add-on</p>
        <Link to="/google-ads-sri-lanka" className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted hover:text-accent" onClick={() => { setOpen(false); setServicesOpen(false); }}>Google Ads <ArrowUpRight className="size-4" /></Link>
      </div>
    </>
  );

  return (
    <header className={cn("sticky top-0 z-40 w-full bg-background transition-all", scrolled && "border-b border-border/60 bg-background/95 backdrop-blur-lg")}>
      <div className="container-tight flex h-16 items-center justify-between gap-3">
        <Link to="/" aria-label="SeoFX home" className="shrink-0"><img src={logo} alt="SeoFX" className="h-8 w-auto" width={140} height={36} /></Link>
        <nav className="hidden 2xl:flex items-center gap-0.5" aria-label="Main">
          {MAIN_NAVIGATION.map((item) => item.href === "/services" ? (
            <div key={item.href} className="relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") setServicesOpen(false); }}>
              <div className="flex items-center">
                <Link to={item.href} className={cn("px-2 py-2 text-sm font-medium hover:text-accent", pathname.startsWith("/services") ? "text-accent" : "text-foreground/75")}>SEO Services</Link>
                <Button variant="ghost" size="icon" className="h-8 w-6" aria-label="Toggle SEO services" aria-expanded={servicesOpen} aria-controls="desktop-services" onClick={() => setServicesOpen((value) => !value)}><ChevronDown className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} /></Button>
              </div>
              {servicesOpen && <div id="desktop-services" className="absolute left-0 top-full w-72 pt-2"><div className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-lg border border-border bg-background p-2 shadow-card">{serviceLinks}</div></div>}
            </div>
          ) : (
            <Link key={item.href} to={item.href} aria-current={pathname === item.href ? "page" : undefined} className={cn("px-2 py-2 text-sm font-medium transition-colors hover:text-accent", pathname === item.href ? "text-accent" : "text-foreground/75")}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex" title="Call SeoFX"><a href={`tel:${SITE.phoneRaw}`} aria-label="Call SeoFX"><Phone className="size-4" /></a></Button>
          <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex" title="WhatsApp SeoFX"><a href={whatsappHref(pathname)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp SeoFX"><MessageCircle className="size-4" /></a></Button>
          <Button asChild variant="hero" className="hidden lg:inline-flex px-4"><Link to={action.href}>{action.label}</Link></Button>
          <Button variant="ghost" size="icon" className="2xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X className="size-6" /> : <Menu className="size-6" />}</Button>
        </div>
      </div>
      {open && (
        <div id="mobile-navigation" className="2xl:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background">
          <nav className="container-tight flex flex-col py-4" aria-label="Mobile">
            {MAIN_NAVIGATION.map((item) => item.href === "/services" ? (
              <div key={item.href} className="border-b border-border">
                <div className="flex items-center justify-between"><Link to="/services" className="py-3 font-medium" onClick={() => setOpen(false)}>SEO Services</Link><Button variant="ghost" size="icon" aria-label="Toggle SEO services" aria-expanded={servicesOpen} aria-controls="mobile-services" onClick={() => setServicesOpen((value) => !value)}><ChevronDown className={cn("transition-transform", servicesOpen && "rotate-180")} /></Button></div>
                {servicesOpen && <div id="mobile-services" className="mb-3 border-l border-border pl-2">{serviceLinks}</div>}
              </div>
            ) : <Link key={item.href} to={item.href} className="py-3 font-medium text-foreground/80 hover:text-accent" onClick={() => setOpen(false)}>{item.label}</Link>)}
            <div className="mt-3 border-t border-border pt-4">
              <Button asChild variant="hero" className="w-full"><Link to={action.href} onClick={() => setOpen(false)}>{action.label}</Link></Button>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <Button asChild variant="ghost"><a href={`tel:${SITE.phoneRaw}`}><Phone />{SITE.phone}</a></Button>
                <Button asChild variant="ghost"><a href={whatsappHref(pathname)} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a></Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
