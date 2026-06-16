import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", t: "Discover", d: "Deep-dive into your business, customers, competitors and goals." },
  { n: "02", t: "Strategy", d: "A clear 90-day roadmap with channels, KPIs and creative direction." },
  { n: "03", t: "Execute", d: "Specialists ship campaigns, content and product weekly — not quarterly." },
  { n: "04", t: "Optimise", d: "Measure, iterate, double down on what wins. Compound the growth." },
];

export function Process() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="How we work"
          title="A clear, repeatable path to growth"
        />
        <div className="relative mt-16 grid gap-4 md:grid-cols-4">
          <div className="hidden md:block absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl glass p-7"
            >
              <div className="text-xs tracking-[0.2em] text-gold">{s.n}</div>
              <h3 className="mt-4 text-xl font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}