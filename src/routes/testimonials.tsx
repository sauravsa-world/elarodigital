import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Elaro Digital Marketing Agency Bihar" },
      { name: "description", content: "Read testimonials from schools, coaching institutes, real estate, clinics and retail brands across Patna, Gaya, Muzaffarpur and Bihar who grew with Elaro Digital." },
      { name: "keywords", content: "digital marketing agency reviews Bihar, Elaro Digital testimonials, SEO agency reviews Patna, marketing agency reviews Gaya" },
      { property: "og:title", content: "Client Testimonials — Elaro Digital, Bihar" },
      { property: "og:description", content: "Trusted by 200+ growing businesses across Bihar and India." },
      { property: "og:url", content: "https://elarodigital.lovable.app/testimonials" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Client Testimonials — Elaro Digital, Bihar" },
      { name: "twitter:description", content: "Trusted by 200+ growing businesses across Bihar and India." },
    ],
    links: [{ rel: "canonical", href: "https://elarodigital.lovable.app/testimonials" }],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Testimonials" title="Trusted by 200+ growing businesses." />
      <Testimonials />
      <LeadForm />
    </PageShell>
  ),
});