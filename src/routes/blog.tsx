import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Digital Marketing Insights for Bihar Businesses" },
      { name: "description", content: "SEO, Google Ads, Meta Ads and growth articles from Elaro Digital — practical marketing insights for businesses in Patna, Gaya and across Bihar." },
      { name: "keywords", content: "digital marketing blog Bihar, SEO tips Patna, Google Ads guide Bihar, marketing blog Gaya" },
      { property: "og:title", content: "Elaro Digital Blog — Marketing Insights for Bihar" },
      { property: "og:description", content: "Deep-dives on SEO, ads and brand growth from a Bihar-based agency." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Fresh posts coming soon."
        description="We're cooking up deep-dives on SEO, performance ads and brand building. Subscribe via the contact form to get notified."
      />
      <div className="h-40" />
    </PageShell>
  ),
});