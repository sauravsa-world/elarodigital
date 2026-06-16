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
    <section className="relative py-20 sm:py-28 text-center">
      <div className="absolute inset-0 radial-gold opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-4">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="mt-6 text-5xl sm:text-6xl font-medium leading-[1.05]">{title}</h1>
        {description ? (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
        ) : null}
      </div>
    </section>
  );
}