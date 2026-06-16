import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Avg. ROAS", value: 10, suffix: "x" },
  { label: "Ad Spend Managed", value: 50, suffix: "M+" },
  { label: "Projects Delivered", value: 350, suffix: "+" },
];

export function StatsBar() {
  return (
    <section className="relative -mt-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-strong rounded-3xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-display font-medium gold-gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}