import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { LeadForm } from "@/components/site/LeadForm";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Elaro Digital | Digital Marketing Agency in Gaya, Bihar" },
      { name: "description", content: "Contact Elaro Digital in Powerganj, Bairagi, Gaya, Bihar. Call +91 94310 11994 or WhatsApp for a free digital marketing audit — SEO, ads, websites and lead generation across Patna, Gaya, Muzaffarpur, Darbhanga, Bhagalpur and Purnia." },
      { name: "keywords", content: "contact digital marketing agency Bihar, marketing agency Gaya contact, SEO company Patna contact, WhatsApp marketing Bihar" },
      { property: "og:title", content: "Contact Elaro Digital — Marketing Agency in Gaya, Bihar" },
      { property: "og:description", content: "Call, WhatsApp or email Elaro Digital for a free marketing audit across Bihar." },
      { property: "og:url", content: "https://elarodigital.lovable.app/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Elaro Digital — Marketing Agency in Gaya, Bihar" },
      { name: "twitter:description", content: "Call, WhatsApp or email Elaro Digital for a free marketing audit across Bihar." },
    ],
    links: [{ rel: "canonical", href: "https://elarodigital.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Elaro Digital",
          url: "https://elarodigital.lovable.app/contact",
          about: { "@id": "https://elarodigital.lovable.app/#organization" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://elarodigital.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://elarodigital.lovable.app/contact" },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's talk growth."
        description="Pick the channel you prefer — we'll respond within 24 hours."
      />
      <section className="pt-8">
        <div className="mx-auto max-w-5xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Phone, label: "Call / WhatsApp", value: "+91 94310 11994", href: "tel:+919431011994" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: "https://wa.me/919431011994" },
            { icon: Mail, label: "Email", value: "elarodigitalagency@gmail.com", href: "mailto:elarodigitalagency@gmail.com" },
            { icon: MapPin, label: "Office", value: "Powerganj, Bairagi, Gaya, Bihar" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href ?? "#"} className="rounded-3xl glass p-6 hover:border-gold/40 transition block">
              <Icon className="size-5 text-gold" />
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
              <div className="mt-1 text-sm">{value}</div>
            </a>
          ))}
        </div>
      </section>
      <LeadForm />
    </PageShell>
  );
}