import {
  UtensilsCrossed,
  Scissors,
  Building2,
  Dumbbell,
  GraduationCap,
  Store,
  ShoppingBag,
  Megaphone,
  Stethoscope,
  Plane,
  Shirt,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type TemplateCategory = {
  slug: string;
  label: string;
  blurb: string;
  icon: LucideIcon;
  accent: string;
};

/** Business categories the template library is organised by. */
export const templateCategories: TemplateCategory[] = [
  { slug: "restaurant-cafe", label: "Restaurant & Cafe", blurb: "Menus, offers, new dish launches and delivery promos.", icon: UtensilsCrossed, accent: "from-orange-500/85 to-rose-500/85" },
  { slug: "salon-beauty", label: "Salon & Beauty", blurb: "Service menus, before/after posts and festive packages.", icon: Scissors, accent: "from-pink-500/85 to-fuchsia-500/85" },
  { slug: "real-estate", label: "Real Estate", blurb: "Property listings, site visits, price drops and possession news.", icon: Building2, accent: "from-sky-600/85 to-indigo-600/85" },
  { slug: "gym-fitness", label: "Gym & Fitness", blurb: "Membership offers, transformation posts and class schedules.", icon: Dumbbell, accent: "from-emerald-600/85 to-teal-600/85" },
  { slug: "coaching-education", label: "Coaching & Education", blurb: "Admission open, results, batch timings and demo classes.", icon: GraduationCap, accent: "from-indigo-600/85 to-violet-600/85" },
  { slug: "local-business", label: "Local Business", blurb: "Shop offers, opening hours, service highlights and reviews.", icon: Store, accent: "from-amber-500/85 to-orange-600/85" },
  { slug: "ecommerce", label: "E-commerce", blurb: "Product launches, sale banners, bestsellers and shipping info.", icon: ShoppingBag, accent: "from-violet-600/85 to-purple-700/85" },
  { slug: "digital-marketing", label: "Digital Marketing", blurb: "Case studies, tips, client wins and service posts.", icon: Megaphone, accent: "from-indigo-700/85 to-blue-600/85" },
  { slug: "healthcare", label: "Healthcare", blurb: "Clinic timings, health tips, camps and appointment posts.", icon: Stethoscope, accent: "from-cyan-600/85 to-sky-700/85" },
  { slug: "travel", label: "Travel", blurb: "Tour packages, destinations, seasonal deals and itineraries.", icon: Plane, accent: "from-teal-500/85 to-cyan-600/85" },
  { slug: "fashion", label: "Fashion", blurb: "New arrivals, lookbooks, discounts and festive collections.", icon: Shirt, accent: "from-rose-600/85 to-pink-700/85" },
  { slug: "other-business", label: "Other Business", blurb: "Flexible layouts that suit any product or service business.", icon: Sparkles, accent: "from-slate-700/85 to-slate-900/85" },
];

export const templateTypes = [
  "Instagram Post",
  "Instagram Story",
  "Carousel",
  "Facebook Post",
  "LinkedIn Post",
  "Reel Cover",
  "Offer Post",
  "Festival Post",
] as const;

export function categoryLabel(slug: string) {
  return templateCategories.find((c) => c.slug === slug)?.label ?? slug;
}