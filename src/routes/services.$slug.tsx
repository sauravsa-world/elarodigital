import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { LeadForm } from "@/components/site/LeadForm";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

type ServiceDetail = {
  tagline: string;
  intro: string;
  includes: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

const details: Record<string, ServiceDetail> = {
  seo: {
    tagline: "Rank where your buyers actually search.",
    intro:
      "We engineer SEO programs that compound — combining technical excellence, intent-mapped content and trusted backlinks to put your business on page one of Google for the queries that move revenue.",
    includes: [
      "Full technical SEO audit & fixes",
      "Keyword research with buyer-intent mapping",
      "On-page optimisation (titles, meta, schema)",
      "Content strategy & SEO-led blog publishing",
      "Authority link building from real publications",
      "Monthly performance reporting & strategy calls",
    ],
    deliverables: ["Audit doc", "Keyword map", "Optimised pages", "Monthly reports"],
    process: [
      { step: "Audit", detail: "Deep crawl, Core Web Vitals and competitor gap analysis." },
      { step: "Strategy", detail: "Keyword clusters mapped to your funnel and offers." },
      { step: "Execution", detail: "On-page, content and link building shipped weekly." },
      { step: "Scale", detail: "Double-down on what wins, prune what doesn't." },
    ],
    faqs: [
      { q: "How long until I see SEO results?", a: "First wins in 30–60 days, compounding growth from month 4 onwards." },
      { q: "Do you guarantee #1 rankings?", a: "No agency credibly can. We guarantee transparent work and measurable progress." },
    ],
  },
  "social-media-marketing": {
    tagline: "Build a brand people follow, trust and buy from.",
    intro:
      "Strategy-led social media that builds an audience, not just impressions. We handle creative direction, content production, community management and paid amplification across Instagram, Facebook, LinkedIn and YouTube.",
    includes: [
      "Content calendar & creative direction",
      "Reels, posts, carousels and shorts production",
      "Community management & DM handling",
      "Influencer & collab outreach",
      "Boosted post strategy",
      "Analytics & monthly reviews",
    ],
    deliverables: ["20–30 posts/month", "8–12 reels", "Stories pack", "Insights report"],
    process: [
      { step: "Brand voice", detail: "Define tone, pillars and visual system." },
      { step: "Production", detail: "Shoot, design, write — done by senior creatives." },
      { step: "Publish", detail: "Optimised posting schedule across platforms." },
      { step: "Iterate", detail: "Double down on formats that grow followers and sales." },
    ],
    faqs: [
      { q: "Do you shoot content?", a: "Yes — we plan, shoot and edit content for Reels and posts." },
      { q: "Which platforms do you cover?", a: "Instagram, Facebook, LinkedIn, YouTube Shorts and X." },
    ],
  },
  "meta-ads": {
    tagline: "Profitable Facebook & Instagram ad campaigns.",
    intro:
      "Full-funnel Meta campaigns engineered for ROAS — from scroll-stopping creatives to surgical audience segmentation, pixel-driven retargeting and creative testing at scale.",
    includes: [
      "Account & pixel setup with CAPI",
      "Creative production for ads (static + video)",
      "Cold, warm and retargeting funnel build",
      "A/B creative & audience testing",
      "Daily monitoring & optimisation",
      "Weekly performance dashboards",
    ],
    deliverables: ["Campaign architecture", "10+ creatives/month", "Dashboards", "Weekly reports"],
    process: [
      { step: "Setup", detail: "Pixel, events, CAPI, conversion API hardened." },
      { step: "Creative", detail: "Hook-led ads built for thumb-stopping performance." },
      { step: "Launch", detail: "Structured tests across audiences and angles." },
      { step: "Scale", detail: "Lock winners, scale spend, protect ROAS." },
    ],
    faqs: [
      { q: "Minimum ad budget?", a: "We recommend at least ₹30,000/month ad spend to gather meaningful data." },
      { q: "Will I own the ad account?", a: "Yes. Your account, your data — we just manage it." },
    ],
  },
  "google-ads": {
    tagline: "Capture demand the moment people are ready to buy.",
    intro:
      "Search, Performance Max, YouTube and Display campaigns built for cost-per-lead and revenue. We obsess over Quality Score, search-term hygiene and conversion tracking.",
    includes: [
      "Account & conversion tracking setup",
      "Keyword research & negative lists",
      "High-CTR ad copy & extensions",
      "Landing page recommendations",
      "Bid strategy & budget pacing",
      "Search-term audits & weekly optimisation",
    ],
    deliverables: ["Campaign build", "Tracking setup", "Weekly optimisations", "Reports"],
    process: [
      { step: "Research", detail: "Keyword & competitor analysis." },
      { step: "Build", detail: "Tight ad groups, strong copy, clean tracking." },
      { step: "Optimise", detail: "Daily monitoring, weekly negatives, bid strategy tuning." },
      { step: "Scale", detail: "Expand into Pmax, YouTube and Display once profitable." },
    ],
    faqs: [
      { q: "Do you handle landing pages?", a: "Yes — we can design and build conversion-optimised landing pages." },
      { q: "How fast can leads start?", a: "Typically within 7 days of launch." },
    ],
  },
  "website-development": {
    tagline: "Premium, lightning-fast websites that convert.",
    intro:
      "Custom websites built on modern stacks with conversion-focused UX, blazing Core Web Vitals and SEO built into the foundation. No bloated templates, no slow page builders.",
    includes: [
      "UX wireframes & visual design",
      "Custom development (Next.js / TanStack / WordPress)",
      "CMS for easy content updates",
      "On-page SEO baked in",
      "Analytics & conversion tracking",
      "Post-launch support",
    ],
    deliverables: ["Design files", "Fully built site", "CMS access", "Training video"],
    process: [
      { step: "Discovery", detail: "Goals, audience, sitemap." },
      { step: "Design", detail: "Wireframes → high-fidelity visual design." },
      { step: "Build", detail: "Custom code, performance-first." },
      { step: "Launch", detail: "QA, deploy, train, iterate." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "4–8 weeks depending on complexity." },
      { q: "Will I own the code?", a: "Yes — full ownership and source code handover." },
    ],
  },
  "app-development": {
    tagline: "iOS & Android apps users love opening.",
    intro:
      "Native and cross-platform mobile apps with elegant interfaces and rock-solid backends. Built by senior engineers — not interns following tutorials.",
    includes: [
      "Product discovery & UX design",
      "iOS + Android (React Native / Flutter / Native)",
      "Backend & API development",
      "Push notifications & analytics",
      "App Store & Play Store submission",
      "Maintenance retainers available",
    ],
    deliverables: ["Designs", "Published apps", "Backend", "Admin panel"],
    process: [
      { step: "Scope", detail: "Features, screens and tech stack locked." },
      { step: "Design", detail: "UX flows and high-fidelity UI." },
      { step: "Build", detail: "Sprints with weekly demos." },
      { step: "Launch", detail: "Store submission and post-launch support." },
    ],
    faqs: [
      { q: "Cross-platform or native?", a: "Depends on your needs — we'll recommend the right stack." },
      { q: "Timeline for an MVP?", a: "Typically 8–14 weeks for a polished MVP." },
    ],
  },
  "graphic-design": {
    tagline: "Brand identity & creatives that command attention.",
    intro:
      "Logos, full brand systems, ad creatives, packaging, social posts and pitch decks — designed by senior designers with intention behind every pixel.",
    includes: [
      "Logo & brand identity",
      "Brand guidelines",
      "Social media creatives",
      "Ad creatives (static + motion)",
      "Packaging & print design",
      "Pitch decks & brochures",
    ],
    deliverables: ["Source files", "Export bundles", "Brand book PDF"],
    process: [
      { step: "Brief", detail: "Understand brand, audience and goals." },
      { step: "Concepts", detail: "Multiple directions to react to." },
      { step: "Refine", detail: "Iterate to a polished final." },
      { step: "Handover", detail: "All formats, source files and guidelines." },
    ],
    faqs: [
      { q: "How many logo concepts?", a: "3 initial concepts, 2 rounds of revisions on the chosen one." },
      { q: "Do you do motion design?", a: "Yes — animated logos, ad creatives and explainers." },
    ],
  },
  "whatsapp-marketing": {
    tagline: "Reach customers where they actually reply.",
    intro:
      "Bulk WhatsApp campaigns, automation flows, AI chatbots and Click-to-WhatsApp ads that turn conversations into qualified leads and repeat customers.",
    includes: [
      "Official WhatsApp Business API setup",
      "Template message approvals",
      "Bulk campaign broadcasts",
      "Automated chatbot flows",
      "Click-to-WhatsApp ad campaigns",
      "CRM integration",
    ],
    deliverables: ["WABA account", "Bot flows", "Campaign reports"],
    process: [
      { step: "Setup", detail: "Verified Business API and number." },
      { step: "Design", detail: "Conversation flows and templates." },
      { step: "Launch", detail: "Campaigns and automations live." },
      { step: "Optimise", detail: "Improve open & reply rates monthly." },
    ],
    faqs: [
      { q: "Is bulk WhatsApp legal?", a: "Yes — via the official WhatsApp Business API." },
      { q: "Can I integrate my CRM?", a: "Yes — Zoho, HubSpot, Google Sheets and more." },
    ],
  },
  "lead-generation": {
    tagline: "A predictable pipeline of qualified leads.",
    intro:
      "Landing pages, magnetic lead offers, ad funnels and CRM integration that fill your sales calendar with people ready to buy.",
    includes: [
      "Lead magnet & offer design",
      "High-converting landing pages",
      "Multi-channel ad funnels",
      "Lead nurture sequences (email + WhatsApp)",
      "CRM setup & integration",
      "Lead quality reporting",
    ],
    deliverables: ["Landing pages", "Funnels", "CRM setup", "Lead dashboards"],
    process: [
      { step: "Offer", detail: "Craft an irresistible lead magnet." },
      { step: "Funnel", detail: "Build the page, ads and follow-up sequence." },
      { step: "Drive traffic", detail: "Meta + Google + WhatsApp campaigns." },
      { step: "Optimise", detail: "Improve cost-per-lead and qualification rate." },
    ],
    faqs: [
      { q: "Do you guarantee leads?", a: "We commit to a target cost-per-lead based on industry benchmarks." },
      { q: "Who follows up?", a: "We can set up automation or train your sales team." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service || !details[params.slug]) throw notFound();
    return { service, detail: details[params.slug] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service — ElaroDigital" }] };
    const { service } = loaderData;
    const title = `${service.title} — ElaroDigital`;
    const desc = service.description;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [{ rel: "canonical", href: `/services/${service.slug}` }],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="py-32 text-center">
        <h1 className="text-4xl font-medium">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex text-gold">← Back to services</Link>
      </div>
    </PageShell>
  ),
  errorComponent: () => (
    <PageShell>
      <div className="py-32 text-center">
        <h1 className="text-4xl font-medium">Something went wrong</h1>
      </div>
    </PageShell>
  ),
});

function ServiceDetailPage() {
  const { service, detail } = Route.useLoaderData();
  const Icon = service.icon;

  return (
    <PageShell>
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 radial-gold opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-4 grid gap-10 sm:grid-cols-[auto_1fr] items-center">
          <div className="grid place-items-center size-28 sm:size-36 rounded-3xl glass-strong text-gold ring-1 ring-gold/20">
            <Icon className="size-14 sm:size-16" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              Service
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-medium leading-tight">{service.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{detail.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.keywords.map((k) => (
                <span key={k} className="text-xs px-3 py-1 rounded-full glass text-muted-foreground">
                  {k}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Get a free strategy call <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl glass p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-medium">Overview</h2>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed">{detail.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl glass p-8">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles className="size-5" /> <span className="text-xs uppercase tracking-[0.2em]">What's included</span>
            </div>
            <ul className="mt-5 space-y-3">
              {detail.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="size-4 text-gold mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl glass p-8">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles className="size-5" /> <span className="text-xs uppercase tracking-[0.2em]">Deliverables</span>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {detail.deliverables.map((d) => (
                <li key={d} className="rounded-2xl glass px-4 py-3 text-sm text-center">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-medium text-center">Our process</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {detail.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl glass p-6"
              >
                <div className="text-gold text-sm">0{i + 1}</div>
                <h3 className="mt-2 text-lg font-medium">{p.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-medium text-center">Frequently asked</h2>
          <div className="mt-8 space-y-4">
            {detail.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl glass p-6">
                <div className="font-medium">{f.q}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
    </PageShell>
  );
}