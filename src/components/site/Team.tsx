import { motion } from "framer-motion";
import { team } from "@/data/team";
import { SectionHeading } from "./SectionHeading";
import { Linkedin, Instagram } from "lucide-react";

export function Team() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="The Team"
          title="A small, senior team obsessed with your growth"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface-2">
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{m.role}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                <div className="mt-5 flex gap-2">
                  <a href="#" aria-label="LinkedIn" className="grid place-items-center size-9 rounded-full glass hover:text-gold transition"><Linkedin className="size-4" /></a>
                  <a href="#" aria-label="Instagram" className="grid place-items-center size-9 rounded-full glass hover:text-gold transition"><Instagram className="size-4" /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}