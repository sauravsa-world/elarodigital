import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumbs, CtaBanner, Newsletter } from "@/components/blog/BlogWidgets";
import { blogPosts, featuredPosts, allTags } from "@/data/blog";
import { blogCategories } from "@/data/blog/categories";

const TITLE = "Digital Marketing Blog for Gaya, Patna & Bihar | ElaroDigital";
const DESC =
  "SEO, Local SEO, Google Ads, Meta Ads and website guides written for business owners in Gaya, Patna and across Bihar by the ElaroDigital team.";
const URL = "https://elarodigital.lovable.app/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": URL,
          name: "ElaroDigital Blog",
          description: DESC,
          url: URL,
          publisher: { "@id": "https://elarodigital.lovable.app/#organization" },
          blogPost: blogPosts.slice(0, 30).map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `https://elarodigital.lovable.app/blog/${p.slug}`,
            datePublished: p.publishDate,
            description: p.metaDescription,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://elarodigital.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: URL },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const inCategory = activeCategory === "all" || p.category === activeCategory;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.focusKeyword.toLowerCase().includes(q) ||
        p.secondaryKeywords.some((k) => k.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.includes(q.replace(/\s+/g, "-")))
      );
    });
  }, [query, activeCategory]);

  return (
    <PageShell>
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <p className="mt-6 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            ElaroDigital Blog
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Digital marketing guides for Gaya, Patna and Bihar businesses
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {blogPosts.length} in-depth guides on SEO, Local SEO, Google Ads, Meta Ads, websites and lead
            generation — written from real campaigns we run for clients across Bihar.
          </p>

          <div className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-input bg-background px-5 py-3">
            <Search className="size-4 text-muted-foreground" aria-hidden="true" />
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search SEO, Google Ads, Google Maps, website cost…"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeCategory === "all" ? "border-brand bg-brand text-white" : "border-border hover:border-brand"
              }`}
            >
              All ({blogPosts.length})
            </button>
            {blogCategories.map((c) => {
              const count = blogPosts.filter((p) => p.category === c.slug).length;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setActiveCategory(c.slug)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    activeCategory === c.slug ? "border-brand bg-brand text-white" : "border-border hover:border-brand"
                  }`}
                >
                  {c.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && !query && activeCategory === "all" ? (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Featured guides</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredPosts.slice(0, 3).map((p, i) => (
              <div key={p.slug} className={i === 0 ? "lg:col-span-3" : ""}>
                <BlogCard post={p} size={i === 0 ? "lg" : "md"} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {query || activeCategory !== "all" ? `${results.length} matching articles` : "All articles"}
        </h2>
        {results.length === 0 ? (
          <p className="mt-6 text-sm text-muted-foreground">
            No articles matched that search. Try “local SEO”, “Google Ads” or “website cost”.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-xl font-bold tracking-tight">Browse by category</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((c) => (
            <Link
              key={c.slug}
              to="/blog/category/$slug"
              params={{ slug: c.slug }}
              className="rounded-2xl border border-border bg-white p-5 transition-colors hover:border-brand"
            >
              <h3 className="font-display text-lg font-bold">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </Link>
          ))}
        </div>

        <h2 className="mt-12 font-display text-xl font-bold tracking-tight">Popular tags</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setQuery(t.replace(/-/g, " "));
              }}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-brand hover:text-brand"
            >
              #{t}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-24">
        <Newsletter />
        <CtaBanner
          heading="Want these results for your own business?"
          text="Talk to the ElaroDigital team in Gaya about SEO, Google Ads, Meta Ads or a new website. We will review your current presence and share a clear, honest plan."
          buttonLabel="Call +91 94310 11994"
        />
      </section>
    </PageShell>
  );
}