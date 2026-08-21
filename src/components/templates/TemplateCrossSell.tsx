import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function TemplateCrossSell() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Want more than templates?</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Templates fill your feed. Our services fill your enquiries.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            When you are ready to grow beyond posting, we handle the full growth engine — SEO, paid ads, websites and
            lead generation for businesses across Bihar and India.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-3xl border border-border p-6 transition hover:border-brand hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.25)]"
            >
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.excerpt ?? s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explore service <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95 transition"
          >
            Book a free strategy call <ArrowRight className="size-4" />
          </Link>
          <a
            href="https://wa.me/919431011994"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
