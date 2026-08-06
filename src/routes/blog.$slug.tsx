import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock, Lightbulb, MapPin, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { BlogCard, formatDate } from "@/components/blog/BlogCard";
import { BlogCover } from "@/components/blog/BlogCover";
import { Breadcrumbs, CtaBanner, Newsletter, SocialShare } from "@/components/blog/BlogWidgets";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getPost, relatedPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog/types";
import { getCategory } from "@/data/blog/categories";
import { getAuthor } from "@/data/blog/authors";

const SITE = "https://elarodigital.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE}/blog/${params.slug}`;
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable | ElaroDigital" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const author = getAuthor(post.authorId);
    const category = getCategory(post.category);
    return {
      meta: [
        { title: post.seoTitle },
        { name: "description", content: post.metaDescription },
        { name: "keywords", content: [post.focusKeyword, ...post.secondaryKeywords].join(", ") },
        { name: "author", content: author.name },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.socialShareDescription },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.publishDate },
        { name: "twitter:title", content: post.seoTitle },
        { name: "twitter:description", content: post.socialShareDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            headline: post.title,
            description: post.metaDescription,
            articleSection: category?.name,
            keywords: [post.focusKeyword, ...post.secondaryKeywords].join(", "),
            wordCount: estimateWords(post),
            timeRequired: `PT${post.readTime}M`,
            inLanguage: "en-IN",
            datePublished: post.publishDate,
            dateModified: post.updatedDate ?? post.publishDate,
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              worksFor: { "@id": `${SITE}/#organization` },
            },
            publisher: { "@id": `${SITE}/#organization` },
            about: { "@id": `${SITE}/#organization` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
              {
                "@type": "ListItem",
                position: 3,
                name: category?.name ?? "Guides",
                item: `${SITE}/blog/category/${post.category}`,
              },
              { "@type": "ListItem", position: 4, name: post.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: BlogArticle,
});

function estimateWords(post: { intro: string[]; sections: { paragraphs?: string[]; bullets?: string[] }[]; conclusion: string[] }) {
  const chunks = [
    ...post.intro,
    ...post.conclusion,
    ...post.sections.flatMap((s) => [...(s.paragraphs ?? []), ...(s.bullets ?? [])]),
  ];
  return chunks.join(" ").split(/\s+/).filter(Boolean).length;
}

function BlogArticle() {
  const post = Route.useLoaderData().post as BlogPost;
  const author = getAuthor(post.authorId);
  const category = getCategory(post.category);
  const related = relatedPosts(post, 3);

  return (
    <PageShell>
      <article className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Blog", to: "/blog" },
            { label: category?.name ?? "Guides", to: "/blog/category/$slug", params: { slug: post.category } },
            { label: post.title },
          ]}
        />

        <header className="mt-6 max-w-3xl">
          <Link
            to="/blog/category/$slug"
            params={{ slug: post.category }}
            className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand"
          >
            {category?.name}
          </Link>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <img
                src={author.image}
                alt={author.name}
                width={32}
                height={32}
                decoding="async"
                className="size-8 rounded-full object-cover"
              />
              <span className="font-medium text-foreground">{author.name}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="size-3.5" aria-hidden="true" /> {formatDate(post.publishDate)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" /> {post.readTime} min read
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3.5" aria-hidden="true" /> Gaya · Patna · Bihar
            </span>
          </div>
        </header>

        <div className="mt-8">
          <BlogCover
            category={post.category}
            categoryName={category?.name ?? "Guide"}
            alt={post.imageAlt}
            label={post.focusKeyword}
            className="aspect-[16/7]"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0">
            <div className="space-y-5 text-[17px] leading-[1.8] text-foreground/90">
              {post.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <nav aria-label="Table of contents" className="mt-10 rounded-2xl border border-border bg-white p-6 lg:hidden">
              <h2 className="font-display text-lg font-bold">Table of contents</h2>
              <ol className="mt-4 space-y-2 text-sm">
                {post.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-muted-foreground hover:text-brand">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {post.sections.map((s) => (
              <section key={s.id} id={s.id} className="mt-12 scroll-mt-28">
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{s.heading}</h2>
                <div className="mt-4 space-y-5 text-[17px] leading-[1.8] text-foreground/90">
                  {s.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {s.bullets?.length ? (
                  <ul className="mt-5 space-y-2.5 text-[17px] leading-relaxed text-foreground/90">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {s.example ? (
                  <aside className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                      <MapPin className="size-4" aria-hidden="true" /> Local example
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">{s.example}</p>
                  </aside>
                ) : null}
                {s.tip ? (
                  <aside className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      <Lightbulb className="size-4" aria-hidden="true" /> Action step
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">{s.tip}</p>
                  </aside>
                ) : null}
                {s.stat ? (
                  <aside className="mt-4 rounded-2xl border border-amber-100 bg-amber-50/70 p-5">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
                      <TrendingUp className="size-4" aria-hidden="true" /> Worth knowing
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">{s.stat}</p>
                  </aside>
                ) : null}
              </section>
            ))}

            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-6 rounded-3xl border border-border bg-white p-2 sm:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {post.faqs.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border last:border-0">
                      <AccordionTrigger className="px-4 py-5 text-left text-base font-medium hover:text-brand hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold tracking-tight">Conclusion</h2>
              <div className="mt-4 space-y-5 text-[17px] leading-[1.8] text-foreground/90">
                {post.conclusion.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <div className="mt-10">
              <CtaBanner heading={post.cta.heading} text={post.cta.text} buttonLabel={post.cta.buttonLabel} />
            </div>

            <div className="mt-10">
              <SocialShare slug={post.slug} title={post.title} description={post.socialShareDescription} />
            </div>

            <section className="mt-10 rounded-3xl border border-border bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row">
                <img
                  src={author.image}
                  alt={`${author.name}, ${author.role}`}
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="size-20 shrink-0 rounded-2xl object-cover"
                />
                <div>
                  <h2 className="font-display text-lg font-bold">About {author.name}</h2>
                  <p className="text-xs font-medium text-brand">{author.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
                  <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                    {author.credentials.map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-lg font-bold">Keep reading</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {post.internalLinks.map((l) => (
                  <li key={l.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: l.slug }}
                      className="text-sm text-brand underline-offset-4 hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="mt-8 font-display text-lg font-bold">Trusted references</h2>
              <ul className="mt-3 space-y-1.5">
                {post.externalLinks.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-white p-5">
                <h2 className="font-display text-base font-bold">On this page</h2>
                <ol className="mt-3 max-h-[60vh] space-y-2 overflow-y-auto pr-2 text-sm">
                  {post.sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-muted-foreground hover:text-brand">
                        {i + 1}. {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="rounded-2xl border border-border bg-white p-5">
                <h2 className="font-display text-base font-bold">Talk to ElaroDigital</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Powerganj, Bairagi, Gaya, Bihar 823001
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=919431011994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  WhatsApp +91 94310 11994
                </a>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:border-brand hover:text-brand"
                >
                  Free strategy call
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Related articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-14">
          <Newsletter />
        </div>
      </article>
    </PageShell>
  );
}