import { LayoutGrid, Package, Building2, Wand2 } from "lucide-react";

const steps = [
  {
    icon: LayoutGrid,
    title: "Choose your category",
    body: "Pick the business type that matches you — restaurant, salon, gym, real estate and more.",
  },
  {
    icon: Package,
    title: "Get your free bundle",
    body: "Your first month of ready-to-use social media templates is unlocked instantly — no payment needed.",
  },
  {
    icon: Building2,
    title: "Share brand details",
    body: "Send your logo, colours, offers and contact details through one simple guided form.",
  },
  {
    icon: Wand2,
    title: "We customise & deliver",
    body: "Our designers brand every template for you and deliver post-ready files with captions.",
  },
];

export function TemplateSteps() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">How it works</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Four steps from blank feed to branded posts
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative rounded-3xl border border-border bg-slate-50/70 p-6">
              <span className="absolute right-5 top-5 font-display text-3xl font-bold text-slate-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand" aria-hidden="true">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
