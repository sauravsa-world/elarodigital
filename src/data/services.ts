import {
  Search,
  Megaphone,
  Target,
  MousePointerClick,
  Code2,
  Smartphone,
  Palette,
  MessageCircle,
  Magnet,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  keywords: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "seo-services",
    title: "Search Engine Optimization",
    short: "Rank #1 on Google for keywords that bring real buyers.",
    description:
      "Technical SEO, on-page optimization, content strategy and authority building that compounds month over month.",
    icon: Search,
    keywords: ["SEO Services in Bihar", "SEO Agency", "Best SEO Company"],
    related: ["google-ads", "website-development"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Build a brand people remember and follow daily.",
    description:
      "Strategy, content production, community growth and paid amplification across Instagram, Facebook, LinkedIn and YouTube.",
    icon: Megaphone,
    keywords: ["Social Media Marketing Agency", "Instagram Marketing"],
    related: ["meta-ads", "graphic-design"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    short: "Profitable ad campaigns engineered for ROAS.",
    description:
      "Full-funnel Meta campaigns with creative testing, custom audiences and pixel-driven retargeting.",
    icon: Target,
    keywords: ["Meta Ads Expert", "Facebook Ads Agency"],
    related: ["social-media-marketing", "lead-generation"],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    short: "Capture demand the moment people are ready to buy.",
    description:
      "Search, Performance Max, YouTube and Display campaigns optimised for cost-per-lead and conversion value.",
    icon: MousePointerClick,
    keywords: ["Google Ads Agency", "PPC Services"],
    related: ["lead-generation", "seo-services"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Premium, lightning-fast websites that convert.",
    description:
      "Custom websites built on modern stacks with conversion-focused UX, blazing Core Web Vitals and built-in SEO.",
    icon: Code2,
    keywords: ["Website Development Company", "Web Design Agency"],
    related: ["seo-services", "graphic-design"],
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "iOS & Android apps users actually love opening.",
    description:
      "Native and cross-platform mobile apps with elegant interfaces and rock-solid backends.",
    icon: Smartphone,
    keywords: ["App Development Company"],
    related: ["website-development", "graphic-design"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Brand identity and creatives that command attention.",
    description:
      "Logos, brand systems, ad creatives, packaging, social posts and pitch decks designed with intention.",
    icon: Palette,
    keywords: ["Graphic Design Services"],
    related: ["social-media-marketing", "website-development"],
  },
  {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    short: "Reach customers where they actually reply — instantly.",
    description:
      "Bulk WhatsApp campaigns, automation flows, chatbots and Click-to-WhatsApp ads that deliver verified leads.",
    icon: MessageCircle,
    keywords: ["WhatsApp Marketing Services"],
    related: ["lead-generation", "meta-ads"],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    short: "A predictable pipeline of qualified leads, every month.",
    description:
      "Landing pages, lead magnets, ad funnels and CRM integration that fill your sales calendar.",
    icon: Magnet,
    keywords: ["Lead Generation Agency"],
    related: ["seo-services", "google-ads"],
  },
];