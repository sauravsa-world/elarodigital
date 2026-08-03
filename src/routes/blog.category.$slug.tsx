import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumbs, CtaBanner, Newsletter } from "@/components/blog/BlogWidgets";
import { postsByCategory } from "@/data/blog";
import { getCategory } from "@/data/blog/categories";
import type { BlogPost } from "@/data/blog/types";

const SITE = "https://elarodigital.lovable.app";

export const Route = createFileRoute("/blog/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, posts: postsByCategory(params.slug) };
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE}/blog/category/${params.slug}`;
    if (!loaderData) {
      return { meta: [{ title: "Category unavailable | ElaroDigital" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.name} Guides for Bihar Businesses | ElaroDigital`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.description },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: loaderData.category.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
              { "@type": "ListItem", position: 3, name: loaderData.category.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const data = Route.useLoaderData();
  const category = data.category;
  const posts = data.posts as BlogPost[];

  return (
    <PageShell>
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: category.name }]} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">New articles in this category are coming soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-24">
        <Newsletter />
        <CtaBanner
          heading="Need help applying this to your business?"
          text="ElaroDigital works with businesses in Gaya, Patna and across Bihar on SEO, ads, websites and lead generation."
          buttonLabel="Call +91 94310 11994"
        />
      </section>
    </PageShell>
  );
}