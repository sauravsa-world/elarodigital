import type { BlogPost } from "./types";

import { post as p01 } from "./posts/best-digital-marketing-agency-in-gaya";
import { post as p02 } from "./posts/best-seo-company-in-patna";
import { post as p03 } from "./posts/local-seo-guide-for-bihar-businesses";
import { post as p04 } from "./posts/website-development-cost-in-bihar";
import { post as p05 } from "./posts/google-ads-guide-for-local-businesses";
import { post as p06 } from "./posts/facebook-instagram-ads-guide";
import { post as p07 } from "./posts/seo-checklist-for-small-businesses";
import { post as p08 } from "./posts/google-business-profile-optimization";
import { post as p09 } from "./posts/website-design-trends-2026";
import { post as p10 } from "./posts/ai-marketing-for-small-businesses";
import { post as p11 } from "./posts/digital-marketing-for-hospitals";
import { post as p12 } from "./posts/marketing-for-coaching-institutes";
import { post as p13 } from "./posts/restaurant-marketing-ideas";
import { post as p14 } from "./posts/real-estate-digital-marketing";
import { post as p15 } from "./posts/digital-marketing-for-schools";
import { post as p16 } from "./posts/seo-for-lawyers";
import { post as p17 } from "./posts/seo-for-doctors";
import { post as p18 } from "./posts/ecommerce-seo-guide";
import { post as p19 } from "./posts/content-marketing-strategy";
import { post as p20 } from "./posts/branding-guide";
import { post as p21 } from "./posts/website-speed-optimization";
import { post as p22 } from "./posts/technical-seo-guide";
import { post as p23 } from "./posts/local-citation-guide";
import { post as p24 } from "./posts/how-to-rank-on-google-maps";
import { post as p25 } from "./posts/lead-generation-strategy";
import { post as p26 } from "./posts/complete-seo-guide-2026";
import { post as p27 } from "./posts/google-algorithm-updates-explained";
import { post as p28 } from "./posts/digital-marketing-trends-in-bihar";
import { post as p29 } from "./posts/ultimate-local-seo-checklist";
import { post as p30 } from "./posts/complete-digital-marketing-guide-for-bihar-businesses";

export const blogPosts: BlogPost[] = [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10,
  p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
  p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,
].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function postsByCategory(categorySlug: string) {
  return blogPosts.filter((p) => p.category === categorySlug);
}

export const featuredPosts = blogPosts.filter((p) => p.featured);

export const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags))).sort();

export function relatedPosts(post: BlogPost, limit = 3) {
  const scored = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      let score = p.category === post.category ? 2 : 0;
      score += p.tags.filter((t) => post.tags.includes(t)).length;
      if (post.internalLinks.some((l) => l.slug === p.slug)) score += 3;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.p);
}

export { blogCategories, getCategory } from "./categories";
export { blogAuthors, getAuthor } from "./authors";
export type { BlogPost } from "./types";