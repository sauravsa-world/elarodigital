import { createFileRoute } from "@tanstack/react-router";
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
        <div className="mx-auto max-w-5xl px-4 space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl glass p-8 sm:p-10 flex flex-col sm:flex-row gap-6 scroll-mt-32"
              >
                <div className="shrink-0 grid place-items-center size-14 rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
                  <Icon className="size-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-medium">{s.title}</h2>
                  <p className="mt-3 text-base text-foreground/80 leading-relaxed">{s.short}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.keywords.map((k) => (
                      <span key={k} className="text-xs px-3 py-1 rounded-full glass text-muted-foreground">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
      <LeadForm />
    </PageShell>
  );
}