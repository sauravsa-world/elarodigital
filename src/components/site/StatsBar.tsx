import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // Start at the real value so SSR / slow JS always shows a correct number.
  const [value, setValue] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf = 0;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setValue(0);
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(node);

    // Reliability net: if the observer never fires (already scrolled past,
    // hidden container, etc.) the animation still runs once.
    const fallback = window.setTimeout(() => {
      observer.disconnect();
      run();
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-IN")}
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
