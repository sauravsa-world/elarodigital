export type BlogSection = {
  /** kebab-case anchor id, used by the table of contents */
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Local business example callout */
  example?: string;
  /** Actionable tip callout */
  tip?: string;
  /** Statistic callout */
  stat?: string;
};

export type BlogFaq = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  searchIntent: "informational" | "commercial" | "transactional" | "navigational";
  category: string;
  tags: string[];
  authorId: string;
  publishDate: string;
  updatedDate?: string;
  readTime: number;
  excerpt: string;
  imageAlt: string;
  imagePlacement?: string;
  socialShareDescription: string;
  featured?: boolean;
  /** Pillar posts sit at the top of a topic cluster */
  pillar?: boolean;
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  conclusion: string[];
  cta: { heading: string; text: string; buttonLabel: string };
  internalLinks: { slug: string; label: string }[];
  externalLinks: { url: string; label: string }[];
};