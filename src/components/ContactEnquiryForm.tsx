import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICE_INTERESTS, trackEvent } from "@/lib/analytics";

export function ContactEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  return (
    <section id="audit" className="container-tight scroll-mt-24 pb-16">
      <span id="partner" className="scroll-mt-24" />
      <span id="consultation" className="scroll-mt-24" />
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl font-bold">Request a free SEO audit</h2>
        <form name="seofx-enquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          if (!form.reportValidity()) return;
          const data = new FormData(form);
          if (data.get("bot-field")) return;
          const service = String(data.get("service") ?? "SEO audit");
          setStatus("sending");
          try {
            // Netlify processes the form on the site's deploy, not in the editor preview.
            if (window.location.hostname === "localhost" || window.location.hostname.includes("lovable.app")) throw new Error("Netlify deployment required");
            const body = new URLSearchParams();
            data.forEach((value, key) => body.append(key, String(value)));
            const result = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
            if (!result.ok) throw new Error("Unable to send enquiry");
            trackEvent("submit_contact", service);
            setStatus("sent");
            form.reset();
          } catch { setStatus("error"); }
        }}>
          <input type="hidden" name="form-name" value="seofx-enquiry" />
          <p hidden><label>Leave this blank<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
          <div className="space-y-2"><Label htmlFor="enquiry-name">Name</Label><Input id="enquiry-name" name="name" autoComplete="name" required maxLength={100} /></div>
          <div className="space-y-2"><Label htmlFor="enquiry-business">Business name</Label><Input id="enquiry-business" name="business" autoComplete="organization" required maxLength={150} /></div>
          <div className="space-y-2"><Label htmlFor="enquiry-email">Email</Label><Input id="enquiry-email" type="email" name="email" autoComplete="email" required maxLength={254} /></div>
          <div className="space-y-2"><Label htmlFor="enquiry-website">Website URL</Label><Input id="enquiry-website" name="website" type="url" placeholder="https://" maxLength={2000} /></div>
          <div className="space-y-2 sm:col-span-2"><Label htmlFor="enquiry-service">Service interest</Label><select id="enquiry-service" name="service" defaultValue="SEO audit" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{SERVICE_INTERESTS.map((service) => <option key={service} value={service}>{service}</option>)}</select></div>
          <div className="space-y-2 sm:col-span-2"><Label htmlFor="enquiry-message">Message</Label><Textarea id="enquiry-message" name="message" required maxLength={5000} rows={5} /></div>
          <div className="sm:col-span-2"><Button type="submit" variant="hero" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request Free SEO Audit"}</Button></div>
          <p role="status" className="text-sm text-muted-foreground sm:col-span-2">{status === "sent" ? "Thank you. Your enquiry has been sent to SeoFX." : status === "error" ? "Your enquiry could not be sent here. Please contact SeoFX by phone, WhatsApp or email." : ""}</p>
        </form>
      </div>
    </section>
  );
}