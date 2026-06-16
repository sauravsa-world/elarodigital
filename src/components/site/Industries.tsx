import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Industries"
          title="Built for India's growing businesses"
        />
        <div className="mt-16 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl glass p-6 text-center hover:border-gold/40 transition"
              >
                <Icon className="mx-auto size-7 text-gold" />
                <div className="mt-4 text-sm">{it.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}