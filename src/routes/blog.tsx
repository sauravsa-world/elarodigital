import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Digital Marketing Insights | Elarodital" },
      { name: "description", content: "Articles on SEO, paid ads, social media and growth from the Elarodital team." },
      { property: "og:title", content: "Elarodital Blog" },
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