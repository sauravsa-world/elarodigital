import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Team } from "@/components/site/Team";
import { WhyUs } from "@/components/site/WhyUs";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elarodital | Digital Marketing Agency in Bihar" },
      { name: "description", content: "Meet Elarodital — a Bihar-based premium digital marketing agency on a mission to grow ambitious Indian businesses with SEO, ads, websites and lead generation." },
      { property: "og:title", content: "About Elarodital" },
      { property: "og:description", content: "A premium, performance-first digital marketing agency from Bihar, India." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="Building India's growth, one brand at a time."
        description="Elarodital was founded with a simple belief — small and growing businesses deserve the same calibre of marketing that big global brands enjoy. We bring strategy, craft and accountability together."
      />
      <WhyUs />
      <Team />
      <LeadForm />
    </PageShell>
  );
}