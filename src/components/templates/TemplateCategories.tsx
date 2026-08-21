import { Link } from "@tanstack/react-router";
import { templateCategories } from "@/data/templateCategories";

export function TemplateCategories({
  heading = true,
  onSelect,
  active,
}: {
  heading?: boolean;
  onSelect?: (slug: string) => void;
  active?: string | null;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {heading ? (
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Template categories</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Templates built for your type of business
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every bundle is designed around what actually drives enquiries in that industry — offers, trust posts,
              festival greetings and clear calls to action.
            </p>
          </div>
        ) : null}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templateCategories.map(({ slug, label, blurb, icon: Icon, accent }) => {
            const isActive = active === slug;
            const inner = (
              <>
                <span
                  className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${accent} text-white`}
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{label}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand">
                  {onSelect ? "Filter templates" : "View templates"} →
                </span>
              </>
            );

            const className = `group text-left rounded-3xl border p-6 bg-white transition hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.25)] ${
              isActive ? "border-brand ring-1 ring-brand" : "border-border"
            }`;

            return onSelect ? (
              <button key={slug} type="button" onClick={() => onSelect(slug)} className={className}>
                {inner}
              </button>
            ) : (
              <Link key={slug} to="/templates" search={{ category: slug }} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
