import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Team } from "@/components/site/Team";
import { WhyUs } from "@/components/site/WhyUs";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elarodital | Digital Marketing Agency in Bihar" },
      { name: "description", content: "About Elaro Digital — a Gaya, Bihar based digital marketing agency serving Patna, Muzaffarpur, Darbhanga, Bhagalpur and Purnia with SEO, ads, websites and lead generation for local businesses." },
      { name: "keywords", content: "digital marketing agency Bihar, digital marketing company Gaya, marketing agency Patna, about Elaro Digital" },
      { property: "og:title", content: "About Elaro Digital | Marketing Agency in Gaya, Bihar" },
      { property: "og:description", content: "Gaya-based digital marketing team helping Bihar businesses grow with SEO, Google Ads, Meta Ads and websites." },
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