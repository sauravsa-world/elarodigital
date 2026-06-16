import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "./SectionHeading";

function Rating({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <Star key={i} className="size-4 fill-gold text-gold" />;
        if (i === full && half)
          return (
            <div key={i} className="relative">
              <Star className="size-4 text-gold/40" />
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="size-4 fill-gold text-gold" />
              </div>
            </div>
          );
        return <Star key={i} className="size-4 text-gold/30" />;
      })}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by founders, owners and operators"
          description="Real words from real clients across schools, coaching, real estate, retail and more."
        />

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="mb-5 break-inside-avoid rounded-3xl glass p-7"
            >
              <Quote className="size-6 text-gold/60" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <Rating value={t.rating} />
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}