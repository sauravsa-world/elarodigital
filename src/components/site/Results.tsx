import { motion } from "framer-motion";
import { TrendingUp, Users, IndianRupee } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cases = [
  { industry: "Coaching Institute", metric: "+312%", label: "Student inquiries", note: "Meta Ads + landing funnel in 90 days.", icon: Users },
  { industry: "School (Patna)", metric: "Page 1", label: "Local rankings", note: "Local SEO + GMB optimisation.", icon: TrendingUp },
  { industry: "D2C Brand", metric: "6.4×", label: "Return on ad spend", note: "Creative testing + retargeting funnel.", icon: IndianRupee },
];

export function Results() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Real results"
          title="Numbers our clients actually care about"
          description="Marketing is a means to an end — leads, customers, revenue. Here are a few wins from recent partnerships."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.industry}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-3xl glass p-8"
              >
                <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-gold/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <Icon className="size-4 text-gold" />
                    {c.industry}
                  </div>
                  <div className="mt-6 text-6xl font-display gold-gradient-text">{c.metric}</div>
                  <div className="mt-2 text-sm text-foreground/80">{c.label}</div>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{c.note}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}