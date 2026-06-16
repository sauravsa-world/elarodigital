import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — What Clients Say About Elarodital" },
      { name: "description", content: "Real testimonials from school directors, coaching institutes, real estate, retail and D2C clients across India." },
      { property: "og:title", content: "Client Testimonials — Elarodital" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Testimonials" title="Trusted by 200+ growing businesses." />
      <Testimonials />
      <LeadForm />
    </PageShell>
  ),
});