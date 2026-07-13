import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Results } from "@/components/site/Results";
import { Industries } from "@/components/site/Industries";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | Digital Marketing Agency in Bihar" },
      { name: "description", content: "Real growth results from Elaro Digital — SEO, Google Ads and website case studies for schools, coaching, real estate, clinics and D2C brands across Patna, Gaya, Muzaffarpur and Bihar." },
      { name: "keywords", content: "digital marketing case studies Bihar, SEO results Patna, Google Ads case study Gaya, marketing portfolio Bihar" },
      { property: "og:title", content: "Portfolio — Elaro Digital | Bihar Marketing Case Studies" },
      { property: "og:description", content: "Selected projects and campaigns from businesses across Bihar." },
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