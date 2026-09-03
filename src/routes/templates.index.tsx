import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Check, Gift, Search, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { TemplateMockup } from "@/components/templates/TemplateMockup";
import { TemplateSteps } from "@/components/templates/TemplateSteps";
import { TemplateCategories } from "@/components/templates/TemplateCategories";
import { TemplateOfferCard } from "@/components/templates/TemplateOfferCard";
import { TemplateTrust } from "@/components/templates/TemplateTrust";
import { TemplateCrossSell } from "@/components/templates/TemplateCrossSell";
import { templateCategories, categoryLabel } from "@/data/templateCategories";
import { fetchTemplates } from "@/lib/templates";
import { useTemplateSelection } from "@/lib/template-selection";

const TITLE = "Free Social Media Templates for Local Businesses | Elaro Digital";
const DESCRIPTION =
  "Get your first month of ready-to-use Instagram and Facebook templates free. Restaurant, salon, gym, real estate and coaching designs branded with your logo by Elaro Digital, Bihar.";
const URL = "https://elarodigital.lovable.app/templates";

export const Route = createFileRoute("/templates/")({
  validateSearch: (search: Record<string, unknown>): { category?: string } =>
    typeof search.category === "string" ? { category: search.category } : {},
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          name: "First month of social media templates free",
          description: DESCRIPTION,
          price: "0",
          priceCurrency: "INR",
          url: URL,
          seller: { "@type": "Organization", name: "Elaro Digital", url: "https://elarodigital.lovable.app" },
        }),
      },
    ],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/templates" });
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string>("all");
  const { selected, isSelected, toggle, remove, clear } = useTemplateSelection();

  const { data: templates = [], isLoading, isError } = useQuery({
    queryKey: ["templates"],
    queryFn: fetchTemplates,
  });

  const types = useMemo(
    () => Array.from(new Set(templates.map((t) => t.type))).sort(),
    [templates],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      if (category && t.category !== category) return false;
      if (type !== "all" && t.type !== type) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.use_case.toLowerCase().includes(q) ||
        categoryLabel(t.category).toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.includes(q))
      );
    });
  }, [templates, category, type, query]);

  const setCategory = (slug?: string) =>
    navigate({ search: { category: slug } });

  return (
    <PageShell>
      <section className="relative border-b border-border bg-white py-16 sm:py-20">
        <div className="absolute inset-0 radial-gold opacity-90 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-2)]">
                <Gift className="size-3.5" aria-hidden="true" /> First month free
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-[1.06] tracking-tight">
                Ready-to-use social media templates for your business
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Pick the designs you like, tell us about your brand, and our design team delivers post-ready creatives
                with your logo, colours and offers — free for your first month.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#library"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 transition"
                >
                  Browse the library <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://wa.me/919431011994?text=I%20want%20my%20free%20month%20of%20social%20media%20templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)] px-6 py-3.5 text-sm font-semibold text-white hover:opacity-95 transition"
                >
                  Claim on WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TemplateMockup category="restaurant-cafe" type="Instagram Post" name="Restaurant offer post" />
              <TemplateMockup category="salon-beauty" type="Instagram Story" name="Salon story promo" />
              <TemplateMockup category="coaching-education" type="Carousel" name="Admissions carousel" />
              <TemplateMockup category="gym-fitness" type="Festival Post" name="Gym festival greeting" />
            </div>
          </div>
        </div>
      </section>

      <TemplateTrust />
      <TemplateSteps />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <TemplateOfferCard />
        </div>
      </section>

      <TemplateCategories heading onSelect={(slug) => setCategory(slug === category ? undefined : slug)} active={category ?? null} />

      <section id="library" className="scroll-mt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-border bg-white p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search templates — offer, festival, salon, gym…"
                  aria-label="Search templates"
                  className="w-full rounded-full border border-border bg-slate-50 pl-10 pr-4 py-3 text-sm outline-none focus:border-brand"
                />
              </div>
              <label className="sr-only" htmlFor="category-filter">Filter by category</label>
              <select
                id="category-filter"
                value={category ?? "all"}
                onChange={(e) => setCategory(e.target.value === "all" ? undefined : e.target.value)}
                className="rounded-full border border-border bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand"
              >
                <option value="all">All categories</option>
                {templateCategories.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.label}</option>
                ))}
              </select>
              <label className="sr-only" htmlFor="type-filter">Filter by template type</label>
              <select
                id="type-filter"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-full border border-border bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand"
              >
                <option value="all">All template types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {isLoading ? "Loading templates…" : `${filtered.length} templates available`}
              {category ? ` in ${categoryLabel(category)}` : ""}
            </p>
          </div>

          {isError ? (
            <p className="mt-8 rounded-2xl border border-border bg-white p-6 text-sm text-muted-foreground">
              We couldn't load the template library right now. Please refresh, or{" "}
              <a href="https://wa.me/919431011994" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand">
                message us on WhatsApp
              </a>{" "}
              and we'll send your bundle directly.
            </p>
          ) : null}

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((t) => {
              const picked = isSelected(t.id);
              return (
                <article key={t.id} className="flex flex-col rounded-3xl border border-border bg-white p-4">
                  <TemplateMockup category={t.category} type={t.type} name={t.name} />
                  <div className="mt-4 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{t.type}</p>
                    <h3 className="mt-1.5 font-display text-base font-bold leading-snug">{t.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.use_case}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggle({ id: t.id, name: t.name, category: t.category, type: t.type })}
                    aria-pressed={picked}
                    className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      picked
                        ? "bg-[color:var(--brand-2)] text-white"
                        : "border border-border bg-white text-foreground hover:border-brand hover:text-brand"
                    }`}
                  >
                    {picked ? (<><Check className="size-4" /> Selected</>) : "Select template"}
                  </button>
                </article>
              );
            })}
          </div>

          {!isLoading && !isError && filtered.length === 0 ? (
            <p className="mt-8 rounded-2xl border border-border bg-white p-6 text-sm text-muted-foreground">
              No templates match that search. Try another keyword or clear the filters.
            </p>
          ) : null}
        </div>
      </section>

      <TemplateCrossSell />

      {selected.length > 0 ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold">
                {selected.length} template{selected.length > 1 ? "s" : ""} selected
              </p>
              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                {selected.slice(0, 4).map((s) => (
                  <li key={s.id} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs">
                    <span className="max-w-[10rem] truncate">{s.name}</span>
                    <button type="button" onClick={() => remove(s.id)} aria-label={`Remove ${s.name}`}>
                      <X className="size-3" />
                    </button>
                  </li>
                ))}
                {selected.length > 4 ? (
                  <li className="rounded-full bg-slate-100 px-2.5 py-1 text-xs">+{selected.length - 4} more</li>
                ) : null}
              </ul>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button type="button" onClick={clear} className="rounded-full border border-border px-4 py-2.5 text-sm">
                Clear
              </button>
              <Link
                to="/templates/request"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95 transition"
              >
                Continue <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}
