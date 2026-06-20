import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "./SectionHeading";

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to grow online"
          description="From visibility to conversion — a single team handling SEO, ads, content, design and development with one obsession: results."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-3xl glass p-7 hover:border-gold/40 transition-all duration-500"
              >
                <div className="absolute -top-24 -right-24 size-56 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="grid place-items-center size-12 rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-6 inline-flex items-center gap-1 text-sm text-gold hover:gap-2 transition-all"
                  >
                    Learn more <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}