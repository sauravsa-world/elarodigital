import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Results } from "@/components/site/Results";
import { Industries } from "@/components/site/Industries";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Elarodital" },
      { name: "description", content: "Real results from Elarodital — case studies across coaching, schools, real estate, D2C and more." },
      { property: "og:title", content: "Portfolio — Elarodital" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: () => (
    <PageShell>
      <PageHero eyebrow="Portfolio" title="Wins worth showing." description="Selected projects, campaigns and brands we've helped scale." />
      <Results />
      <Industries />
      <LeadForm />
    </PageShell>
  ),
});