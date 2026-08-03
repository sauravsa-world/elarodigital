import { Link } from "@tanstack/react-router";
import { Clock, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/data/blog/types";
import { getCategory } from "@/data/blog/categories";
import { getAuthor } from "@/data/blog/authors";
import { BlogCover } from "./BlogCover";

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function BlogCard({ post, size = "md" }: { post: BlogPost; size?: "md" | "lg" }) {
  const category = getCategory(post.category);
  const author = getAuthor(post.authorId);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block p-3">
        <BlogCover
          category={post.category}
          categoryName={category?.name ?? "Guide"}
          alt={post.imageAlt}
          className={size === "lg" ? "aspect-[16/8]" : "aspect-[16/9]"}
        />
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-6 pt-2">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <Link
            to="/blog/category/$slug"
            params={{ slug: post.category }}
            className="rounded-full bg-indigo-50 px-3 py-1 font-semibold uppercase tracking-wider text-brand"
          >
            {category?.name}
          </Link>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="size-3.5" aria-hidden="true" /> {formatDate(post.publishDate)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" /> {post.readTime} min read
          </span>
        </div>
        <h3
          className={`mt-3 font-display font-bold leading-snug tracking-tight ${
            size === "lg" ? "text-2xl" : "text-lg"
          }`}
        >
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="transition-colors group-hover:text-brand"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-3 pt-5">
          <img
            src={author.image}
            alt={author.name}
            width={32}
            height={32}
            loading="lazy"
            className="size-8 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-foreground">{author.name}</span>
        </div>
      </div>
    </article>
  );
}