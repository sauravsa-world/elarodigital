export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "seo",
    name: "SEO",
    description:
      "Search engine optimization guides written for Gaya, Patna and Bihar businesses — technical SEO, on-page work, content and authority building.",
    seoTitle: "SEO Guides for Bihar Businesses | ElaroDigital Blog",
    metaDescription:
      "Practical SEO guides for businesses in Gaya, Patna and across Bihar — keyword research, technical fixes, content and ranking checklists.",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    description:
      "Rank in Google Maps and local search across Gaya, Patna and Bihar with citations, reviews and Google Business Profile optimization.",
    seoTitle: "Local SEO Guides for Gaya & Patna | ElaroDigital Blog",
    metaDescription:
      "Local SEO playbooks for Gaya, Patna and Bihar: Google Business Profile, Maps ranking, citations, reviews and near-me search.",
  },
  {
    slug: "paid-ads",
    name: "Paid Ads",
    description:
      "Google Ads and Meta Ads strategy, budgets and campaign structures tuned for local Bihar buying behaviour.",
    seoTitle: "Google & Meta Ads Guides for Bihar | ElaroDigital Blog",
    metaDescription:
      "Google Ads and Meta Ads guides for Bihar businesses — budgets, targeting, creatives and lead cost benchmarks that actually work locally.",
  },
  {
    slug: "web-design",
    name: "Web Design & Development",
    description:
      "Website design, development, speed and Core Web Vitals guidance for local businesses that need websites to convert.",
    seoTitle: "Website Design & Development Guides | ElaroDigital Blog",
    metaDescription:
      "Website design, development cost, speed optimization and Core Web Vitals guides for businesses in Gaya, Patna and Bihar.",
  },
  {
    slug: "industry-marketing",
    name: "Industry Marketing",
    description:
      "Marketing playbooks by industry — hospitals, doctors, schools, coaching institutes, restaurants, real estate, lawyers and more.",
    seoTitle: "Industry Marketing Playbooks for Bihar | ElaroDigital",
    metaDescription:
      "Industry-specific digital marketing playbooks for hospitals, schools, coaching institutes, restaurants, builders and professionals in Bihar.",
  },
  {
    slug: "growth-strategy",
    name: "Growth Strategy",
    description:
      "Branding, content marketing, AI marketing, lead generation and the strategy layer that ties every channel together.",
    seoTitle: "Marketing Growth Strategy Guides | ElaroDigital Blog",
    metaDescription:
      "Branding, content marketing, AI marketing and lead generation strategy guides for growing businesses in Bihar and across India.",
  },
];

export function getCategory(slug: string) {
  return blogCategories.find((c) => c.slug === slug);
}