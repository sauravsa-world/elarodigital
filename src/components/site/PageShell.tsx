import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <main className="pt-32">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative py-20 sm:py-28 text-center border-b border-border bg-white">
      <div className="absolute inset-0 radial-gold opacity-90 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-4">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="mt-6 font-display font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight">{title}</h1>
        {description ? (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
        ) : null}
      </div>
    </section>
  );
}