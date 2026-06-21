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
import seoImg from "@/assets/services/seo.jpg";
import smmImg from "@/assets/services/social-media.jpg";
import metaImg from "@/assets/services/meta-ads.jpg";
import googleImg from "@/assets/services/google-ads.jpg";
import webImg from "@/assets/services/web-dev.jpg";
import appImg from "@/assets/services/app-dev.jpg";
import gdImg from "@/assets/services/graphic-design.jpg";
import waImg from "@/assets/services/whatsapp.jpg";
import leadImg from "@/assets/services/lead-gen.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
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
    image: seoImg,
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
    image: smmImg,
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
    image: metaImg,
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
    image: googleImg,
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
    image: webImg,
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
    image: appImg,
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
    image: gdImg,
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
    image: waImg,
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
    image: leadImg,
    keywords: ["Lead Generation Agency"],
    related: ["seo-services", "google-ads"],
  },
];