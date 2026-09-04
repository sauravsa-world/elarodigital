import { motion } from "framer-motion";
import { Award, BarChart3, Clock, HeartHandshake, Rocket, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: BarChart3, title: "Performance-first", desc: "Every campaign tied to a real business metric — leads, revenue, ROAS." },
  { icon: Rocket, title: "Senior team only", desc: "No juniors learning on your account. Specialists run your strategy." },
  { icon: HeartHandshake, title: "Transparent reporting", desc: "Live dashboards, monthly reviews, zero black-box marketing." },
  { icon: ShieldCheck, title: "Conversion-engineered", desc: "Sites and funnels built around how visitors actually decide." },
  { icon: Clock, title: "On-time, every time", desc: "Predictable delivery windows backed by a project promise." },
  { icon: Award, title: "Industry-proven", desc: "Schools, coaching, healthcare, real estate, D2C — we've shipped wins everywhere." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why ElaroDigital"
          title="A premium agency standard, finally accessible."
          description="We bring the rigour of global agencies to growing Indian businesses — with the speed and warmth of a partner who actually picks up the phone."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="rounded-3xl glass p-7"
              >
                <Icon className="size-6 text-gold" />
                <h3 className="mt-5 text-lg font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}