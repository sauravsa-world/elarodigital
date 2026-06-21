import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { services } from "@/data/services";
import { LeadForm } from "@/components/site/LeadForm";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SEO, Ads, Web & App Development | Elarodital" },
      { name: "description", content: "Explore Elarodital's full-service offering: SEO, Local SEO, Social Media Marketing, Meta Ads, Google Ads, Website & App Development, Graphic Design, WhatsApp Marketing and Lead Generation." },
      { property: "og:title", content: "Digital Marketing Services — Elarodital" },
      { property: "og:description", content: "End-to-end digital marketing services for growing Indian businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Everything we do, in one place."
        description="A single, senior team handling the strategy, creative and execution behind your growth."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.05 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block rounded-3xl glass p-8 hover:border-gold/40 transition h-full"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 grid place-items-center size-14 rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-medium group-hover:text-gold transition">{s.title}</h2>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm text-gold">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
      <LeadForm />
    </PageShell>
  );
}