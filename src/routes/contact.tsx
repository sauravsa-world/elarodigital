import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { LeadForm } from "@/components/site/LeadForm";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Get a Free Marketing Audit | Elarodital" },
      { name: "description", content: "Get in touch with Elarodital for a free digital marketing audit. SEO, ads, websites and lead generation across Bihar and India." },
      { property: "og:title", content: "Contact Elarodital" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
            { icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: "https://wa.me/919999999999" },
            { icon: Mail, label: "Email", value: "hello@elarodital.com", href: "mailto:hello@elarodital.com" },
            { icon: MapPin, label: "Office", value: "Patna, Bihar" },
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