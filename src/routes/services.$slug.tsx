import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { LeadForm } from "@/components/site/LeadForm";
import { services, type Service } from "@/data/services";
import { industries } from "@/data/industries";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Phone,
  FileText,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919431011994";

type SampleProject = { title: string; summary: string; result: string };
type Detail = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroTagline: string;
  intro: string;
  benefits: { title: string; desc: string }[];
  included: string[];
  whyUs: string[];
  process: { step: string; detail: string }[];
  sampleProjects: SampleProject[];
  faqs: { q: string; a: string }[];
};

const universalFaqs = [
  {
    q: "Why should I choose your agency?",
    a: "We are a results-driven team with proven experience helping businesses across Bihar and India grow their leads, sales and brand visibility. We focus on transparent reporting, real strategy and measurable ROI — not vanity metrics.",
  },
  {
    q: "How long does it take to see results?",
    a: "Paid ads can deliver leads within 7 days. SEO usually shows momentum in 60–90 days and compounds month over month. We share clear weekly updates so you always know where you stand.",
  },
  {
    q: "Do you work with local Bihar businesses?",
    a: "Yes. We work with businesses across Patna, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Purnia and every district of Bihar — schools, coaching institutes, hospitals, real estate, retail, restaurants and D2C brands.",
  },
  {
    q: "Do you provide services across India?",
    a: "Absolutely. Our clients are spread across India and abroad. Everything we deliver — strategy, ads, content, SEO, design and development — runs fully remote with weekly review calls.",
  },
  {
    q: "Can I get a free consultation?",
    a: "Yes. Book a free 30-minute consultation and we will audit your current marketing, identify the biggest growth gaps and suggest a tailored plan — no obligation.",
  },
  {
    q: "What industries do you serve?",
    a: "Schools & colleges, coaching institutes, real estate, healthcare & clinics, restaurants & cafes, retail & D2C, clothing brands, cosmetic brands, beauty salons, gyms & fitness studios and more.",
  },
];

const benefitsCore = [
  { title: "More qualified leads", desc: "We focus on intent-driven traffic that converts into real customers, not just clicks." },
  { title: "Transparent reporting", desc: "Weekly performance dashboards and monthly reviews — you always know what's working." },
  { title: "Senior team, no juniors", desc: "Your account is handled by experienced strategists, not interns learning on the job." },
  { title: "Local + national reach", desc: "Hyper-local Bihar targeting paired with pan-India scale when you're ready." },
];

const whyUsCore = [
  "200+ businesses served across Bihar and India",
  "₹50M+ ad spend successfully managed",
  "Dedicated account manager for every client",
  "Transparent pricing, no hidden fees",
  "Local Bihar market expertise (Patna, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Purnia)",
  "Pan-India service delivery with weekly reviews",
];

const details: Record<string, Detail> = {
  "seo-services": {
    metaTitle: "SEO Services in Bihar | Best SEO Agency in Patna India",
    metaDescription:
      "Improve your Google rankings, increase organic traffic and generate more leads with professional SEO services in Bihar and across India.",
    h1: "SEO Services in Bihar & India",
    heroTagline: "Rank #1 on Google for the keywords your customers are searching every day.",
    intro:
      "We deliver complete SEO solutions for businesses in Patna, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Purnia and across India. From Local SEO and Google Business Profile optimization to Technical SEO, On-Page SEO, Off-Page SEO and high-authority link building — our SEO services help you dominate Google search results and drive qualified organic traffic that turns into real customers.",
    benefits: [
      { title: "Higher Google rankings", desc: "Rank on page 1 for high-intent local and national keywords." },
      { title: "Free organic traffic", desc: "Reduce dependency on paid ads with compounding SEO growth." },
      { title: "Better local visibility", desc: "Dominate 'near me' searches in your city with Local SEO and GMB." },
      { title: "Long-term ROI", desc: "Every blog, backlink and page keeps generating leads month after month." },
    ],
    included: [
      "Local SEO for Bihar businesses",
      "On-Page SEO (titles, meta, content, schema)",
      "Off-Page SEO & high-authority link building",
      "Technical SEO (site speed, crawlability, Core Web Vitals)",
      "Google Business Profile optimization",
      "Keyword research & buyer-intent mapping",
      "SEO audits & competitor analysis",
      "Monthly SEO reports & strategy reviews",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Audit", detail: "Full technical, on-page and backlink audit of your website." },
      { step: "Strategy", detail: "Keyword map and content plan aligned to your business goals." },
      { step: "Execution", detail: "On-page fixes, content publishing and authority link building every month." },
      { step: "Scale", detail: "Double down on winning keywords, expand to new cities and verticals." },
    ],
    sampleProjects: [
      { title: "Real Estate SEO", summary: "Patna-based builder targeting flats & plots keywords.", result: "3.2x organic leads in 6 months" },
      { title: "Coaching Institute SEO", summary: "Bihar coaching brand ranking for exam-prep keywords.", result: "Page 1 for 40+ keywords" },
      { title: "Healthcare SEO", summary: "Multi-specialty clinic in Muzaffarpur dominating local search.", result: "5x GMB calls" },
    ],
    faqs: [
      { q: "How long does SEO take to deliver results?", a: "Initial wins in 60 days; strong compounding growth from month 4 onwards." },
      { q: "Do you do Local SEO for small Bihar businesses?", a: "Yes — Local SEO and Google Business Profile optimization is one of our core specialities." },
    ],
  },
  "social-media-marketing": {
    metaTitle: "Social Media Marketing Agency in Bihar | Patna, India",
    metaDescription:
      "Grow your brand on Instagram, Facebook, LinkedIn and YouTube with a results-driven social media marketing agency in Bihar serving clients across India.",
    h1: "Social Media Marketing Services",
    heroTagline: "Build a brand customers trust, follow and buy from — every single day.",
    intro:
      "We help businesses in Patna, Bihar and across India build powerful social media presences on Instagram, Facebook, LinkedIn and YouTube. From scroll-stopping reels and creative content to community management and influencer marketing — our social media services turn followers into customers.",
    benefits: [
      { title: "Real brand awareness", desc: "Become the brand people recognise, remember and recommend." },
      { title: "Engaged community", desc: "Active followers who like, share and buy — not just empty numbers." },
      { title: "Consistent content", desc: "Senior creatives shipping reels, posts and stories every week." },
      { title: "Measurable growth", desc: "Track followers, reach, engagement and leads with full transparency." },
    ],
    included: [
      "Facebook Marketing",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Content Creation (posts, carousels, reels)",
      "Reels Marketing & short-form video strategy",
      "Community management & DM handling",
      "Influencer marketing & collaborations",
      "Monthly analytics & reporting",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Brand voice", detail: "Define tone, content pillars and visual identity." },
      { step: "Production", detail: "Shoot, design and write content done by senior creatives." },
      { step: "Publish", detail: "Optimised posting schedule across every platform that matters." },
      { step: "Iterate", detail: "Double down on what grows followers and sales." },
    ],
    sampleProjects: [
      { title: "D2C Brand Instagram", summary: "Patna clothing brand built from 200 to 60K followers.", result: "60K+ organic followers" },
      { title: "Coaching Reels", summary: "Bihar coaching institute driving admissions via reels.", result: "10M+ monthly views" },
      { title: "Restaurant Brand", summary: "Premium cafe in Patna boosting walk-ins via Instagram.", result: "3x weekend footfall" },
    ],
    faqs: [
      { q: "Do you shoot the content yourself?", a: "Yes — we plan, shoot and edit reels and posts in-house or on-location." },
      { q: "Which platforms do you focus on?", a: "Instagram, Facebook, LinkedIn, YouTube Shorts and X depending on your audience." },
    ],
  },
  "meta-ads": {
    metaTitle: "Facebook & Instagram Ads Agency in Bihar | Meta Ads Expert",
    metaDescription:
      "Profitable Facebook and Instagram ad campaigns from a Meta Ads expert agency in Bihar. Lead generation, ecommerce, retargeting and video ads across India.",
    h1: "Meta Ads Services",
    heroTagline: "Profitable Facebook and Instagram ad campaigns engineered for ROAS.",
    intro:
      "We run full-funnel Meta ad campaigns for Bihar and India businesses — from lead generation and ecommerce conversions to retargeting and video ads. Our scroll-stopping creatives, surgical audience targeting and daily optimisation consistently deliver lower CPL and higher ROAS than industry benchmarks.",
    benefits: [
      { title: "Lower cost per lead", desc: "Tight audience targeting + winning creatives drive down CPL fast." },
      { title: "Higher ROAS", desc: "Funnel-led campaigns optimise every rupee for revenue, not impressions." },
      { title: "Scalable growth", desc: "Once a campaign wins, we scale spend without breaking performance." },
      { title: "Full creative production", desc: "Static, video and motion ads built in-house, refreshed weekly." },
    ],
    included: [
      "Lead Generation Ads",
      "Conversion Ads",
      "Ecommerce Ads (catalog & DPA)",
      "Retargeting Ads",
      "Video Ads & Reels Ads",
      "Custom audience targeting & lookalikes",
      "Pixel & Conversion API (CAPI) setup",
      "Weekly performance dashboards",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Setup", detail: "Pixel, events, CAPI and conversion tracking hardened." },
      { step: "Creative", detail: "Hook-led ads designed to stop the thumb." },
      { step: "Launch", detail: "Structured tests across audiences and angles." },
      { step: "Scale", detail: "Lock winners, scale spend, protect ROAS." },
    ],
    sampleProjects: [
      { title: "Real Estate Lead Ads", summary: "Patna builder generating site-visit appointments.", result: "₹85 per qualified lead" },
      { title: "D2C Cosmetic Brand", summary: "Bihar beauty brand scaling Shopify sales.", result: "6.4x ROAS" },
      { title: "Coaching Admissions", summary: "Education brand running lead-gen + retargeting.", result: "1,200 admissions / quarter" },
    ],
    faqs: [
      { q: "What is the minimum ad budget?", a: "We recommend at least ₹30,000/month in ad spend to gather meaningful data and scale profitably." },
      { q: "Will I own the ad account?", a: "Yes. Your Business Manager, your account, your data — we manage it on your behalf." },
    ],
  },
  "google-ads": {
    metaTitle: "Google Ads Services in Bihar | Best Google Ads Agency Patna",
    metaDescription:
      "Capture high-intent buyers with Google Ads management services in Bihar. Search, Display, YouTube, Shopping and Remarketing campaigns built for ROI.",
    h1: "Google Ads Management Services",
    heroTagline: "Capture customers the moment they are ready to buy.",
    intro:
      "Our certified Google Ads team builds and manages Search, Display, YouTube, Shopping and Remarketing campaigns for businesses in Patna, Bihar and across India. Every campaign is optimised for cost-per-lead, conversion value and long-term profitability.",
    benefits: [
      { title: "Instant traffic", desc: "Get qualified visitors and leads from day one of campaign launch." },
      { title: "High-intent buyers", desc: "Reach people actively searching for your products or services." },
      { title: "Granular tracking", desc: "Every click, call and conversion measured end-to-end." },
      { title: "Profitable scaling", desc: "Scale budgets only when CPA and ROAS are locked in." },
    ],
    included: [
      "Search Ads",
      "Display Ads",
      "YouTube Ads",
      "Shopping Ads",
      "Remarketing Ads",
      "Performance Max campaigns",
      "Conversion tracking & GA4 setup",
      "Landing page recommendations",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Research", detail: "Keyword and competitor analysis." },
      { step: "Build", detail: "Tight ad groups, strong copy and clean tracking." },
      { step: "Optimise", detail: "Daily monitoring, weekly negatives, bid tuning." },
      { step: "Scale", detail: "Expand into Pmax, YouTube and Display once profitable." },
    ],
    sampleProjects: [
      { title: "Healthcare Clinic", summary: "Patna multi-specialty clinic driving appointment bookings.", result: "₹110 per booked appointment" },
      { title: "Ecommerce Shopping", summary: "D2C brand scaling Google Shopping nationwide.", result: "4.8x ROAS" },
      { title: "Education Search", summary: "Coaching institute search campaign in Bihar.", result: "320% rise in form fills" },
    ],
    faqs: [
      { q: "Do you handle landing pages too?", a: "Yes — we design and build conversion-focused landing pages to maximise ROAS." },
      { q: "How quickly will I see leads?", a: "Typically within 7 days of launch with proper tracking in place." },
    ],
  },
  "website-development": {
    metaTitle: "Website Development Company in Bihar | Web Design Patna India",
    metaDescription:
      "Premium website development services in Bihar. Custom business websites, ecommerce stores, WordPress and high-converting landing pages built for speed and SEO.",
    h1: "Website Development Services",
    heroTagline: "Premium, lightning-fast websites that convert visitors into customers.",
    intro:
      "We design and develop custom websites for businesses in Patna, Bihar and across India. From business websites and ecommerce stores to WordPress builds, custom development and high-converting landing pages — every site we ship is responsive, SEO-optimised and built on a foundation of blazing Core Web Vitals.",
    benefits: [
      { title: "Conversion-first design", desc: "Every page is designed around the action you want visitors to take." },
      { title: "Lightning-fast performance", desc: "Optimised Core Web Vitals for better SEO and user experience." },
      { title: "SEO baked in", desc: "Schema, semantic HTML and clean URLs from day one." },
      { title: "Full ownership", desc: "You get the source code, CMS access and complete control." },
    ],
    included: [
      "Business Websites",
      "Ecommerce Websites (Shopify, WooCommerce, custom)",
      "Landing Pages for ad campaigns",
      "WordPress Development",
      "Custom Development (Next.js, TanStack, React)",
      "Responsive Design for all devices",
      "On-page SEO setup",
      "Analytics & conversion tracking",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Discovery", detail: "Goals, audience and sitemap finalised." },
      { step: "Design", detail: "Wireframes to high-fidelity visual design." },
      { step: "Build", detail: "Custom code with performance-first development." },
      { step: "Launch", detail: "QA, deploy, train and iterate." },
    ],
    sampleProjects: [
      { title: "Real Estate Website", summary: "Patna builder website with project gallery & lead forms.", result: "100/100 Lighthouse" },
      { title: "D2C Ecommerce", summary: "Bihar cosmetic brand Shopify store redesign.", result: "+42% conversion rate" },
      { title: "Coaching Website", summary: "Multi-course coaching institute platform.", result: "3x admission inquiries" },
    ],
    faqs: [
      { q: "How long does website development take?", a: "Most websites go live in 4–8 weeks depending on complexity." },
      { q: "Will I own the source code?", a: "Yes — full ownership and source-code handover at the end." },
    ],
  },
  "app-development": {
    metaTitle: "Mobile App Development Company in Bihar | Android & iOS Apps",
    metaDescription:
      "Custom Android, iOS and Flutter app development company in Bihar. Ecommerce apps, business apps and ongoing app maintenance for clients across India.",
    h1: "App Development Services",
    heroTagline: "Android & iOS apps users actually love opening.",
    intro:
      "We design and build native and cross-platform mobile apps for businesses in Bihar and across India. From Android and iOS apps to Flutter cross-platform builds, ecommerce apps, business apps and long-term app maintenance — our engineering team ships polished, production-grade apps that users love.",
    benefits: [
      { title: "Premium UX", desc: "Apps users love to open every day, with thoughtful UX." },
      { title: "Cross-platform efficiency", desc: "Reach Android and iOS users with a single, optimised codebase." },
      { title: "Rock-solid backend", desc: "Scalable APIs and infrastructure for thousands of users." },
      { title: "Ongoing support", desc: "Maintenance retainers so your app stays fast and bug-free." },
    ],
    included: [
      "Android Apps (Native Kotlin)",
      "iOS Apps (Native Swift)",
      "Flutter Apps (cross-platform)",
      "Ecommerce Apps",
      "Business Apps & internal tools",
      "App Maintenance & updates",
      "Push notifications, analytics, payments",
      "Play Store & App Store submission",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Scope", detail: "Features, screens and tech stack locked in." },
      { step: "Design", detail: "UX flows and high-fidelity UI." },
      { step: "Build", detail: "Sprints with weekly demos." },
      { step: "Launch", detail: "Store submission and post-launch support." },
    ],
    sampleProjects: [
      { title: "Ecommerce App", summary: "D2C brand mobile app with payments and order tracking.", result: "4.7★ Play Store rating" },
      { title: "Education App", summary: "Coaching institute live class app for Bihar students.", result: "25K downloads in 90 days" },
      { title: "Field Service App", summary: "Real estate site-visit booking app for sales team.", result: "60% faster reporting" },
    ],
    faqs: [
      { q: "Cross-platform or native?", a: "Depends on your features and budget — we recommend the right stack after discovery." },
      { q: "Timeline for an MVP?", a: "Typically 8–14 weeks for a polished MVP with backend and admin panel." },
    ],
  },
  "graphic-design": {
    metaTitle: "Graphic Design Services in Bihar | Branding Agency Patna",
    metaDescription:
      "Logo design, branding, social media creatives, brochure, banner and packaging design services in Bihar. Premium graphic design for brands across India.",
    h1: "Graphic Design & Branding Services",
    heroTagline: "Brand identity and creatives that command attention.",
    intro:
      "We design logos, full brand identities, social media creatives, brochures, banners and packaging for businesses in Bihar and across India. Every design is crafted by senior designers with strategy and intention — no templates, no clipart.",
    benefits: [
      { title: "Distinctive identity", desc: "Stand out in a crowded market with unique, premium design." },
      { title: "Consistent brand", desc: "Brand guidelines that keep everything you ship on-brand." },
      { title: "Conversion-driven creatives", desc: "Ad creatives engineered to stop the scroll and drive clicks." },
      { title: "Print-ready files", desc: "All formats and source files delivered for any future use." },
    ],
    included: [
      "Logo Design",
      "Social Media Creatives",
      "Branding & Brand Guidelines",
      "Brochure Design",
      "Banner Design (digital + print)",
      "Packaging Design",
      "Pitch decks & business presentations",
      "Motion graphics & animated logos",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Brief", detail: "Understand brand, audience and goals." },
      { step: "Concepts", detail: "Multiple directions to react to." },
      { step: "Refine", detail: "Iterate to a polished, on-brand final." },
      { step: "Handover", detail: "All formats, source files and brand guidelines." },
    ],
    sampleProjects: [
      { title: "D2C Brand Identity", summary: "Cosmetic brand built from scratch with packaging design.", result: "Launched in 200+ stores" },
      { title: "Coaching Rebrand", summary: "Bihar coaching institute new logo and identity system.", result: "Refreshed across 12 cities" },
      { title: "Real Estate Brochures", summary: "Premium project brochures for Patna builder.", result: "2x site-visit conversions" },
    ],
    faqs: [
      { q: "How many logo concepts will I see?", a: "3 strong initial concepts, with 2 rounds of refinement on the chosen direction." },
      { q: "Do you offer motion design?", a: "Yes — animated logos, ad creatives and short explainers." },
    ],
  },
  "whatsapp-marketing": {
    metaTitle: "WhatsApp Marketing Services in Bihar | Bulk WhatsApp Agency",
    metaDescription:
      "Official WhatsApp Business API marketing services in Bihar. Bulk campaigns, automation, broadcast marketing, lead nurturing and customer retention across India.",
    h1: "WhatsApp Marketing Services",
    heroTagline: "Reach customers where they actually reply — instantly.",
    intro:
      "We help businesses in Patna, Bihar and across India run powerful WhatsApp marketing campaigns on the official WhatsApp Business API. From bulk broadcasts and automation flows to lead nurturing and customer retention sequences — WhatsApp marketing has the highest open and reply rates of any channel.",
    benefits: [
      { title: "98% open rates", desc: "Customers actually see and reply to WhatsApp messages." },
      { title: "Instant lead capture", desc: "Click-to-WhatsApp ads turn ad clicks into live conversations." },
      { title: "Repeat sales on autopilot", desc: "Automation flows nurture leads and upsell customers." },
      { title: "Official & compliant", desc: "Verified WhatsApp Business API — fully approved by Meta." },
    ],
    included: [
      "WhatsApp Campaigns (bulk broadcast)",
      "WhatsApp Automation & chatbots",
      "Broadcast Marketing",
      "Lead Nurturing sequences",
      "Customer Retention flows",
      "Click-to-WhatsApp ad campaigns",
      "Template message approvals",
      "CRM integration (Zoho, HubSpot, Sheets)",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Setup", detail: "Verified WhatsApp Business API and number." },
      { step: "Design", detail: "Conversation flows, templates and segments." },
      { step: "Launch", detail: "Campaigns and automations go live." },
      { step: "Optimise", detail: "Improve open, reply and conversion rates monthly." },
    ],
    sampleProjects: [
      { title: "Coaching Admissions", summary: "Bihar coaching institute WhatsApp lead nurture.", result: "38% inquiry-to-admission rate" },
      { title: "Real Estate Follow-up", summary: "Patna builder reactivation campaign on WhatsApp.", result: "240+ site visits booked" },
      { title: "D2C Retention", summary: "Cosmetic brand repeat-purchase automation.", result: "29% repeat order rate" },
    ],
    faqs: [
      { q: "Is bulk WhatsApp legal?", a: "Yes — when sent via the official WhatsApp Business API, which we set up for you." },
      { q: "Can I integrate my existing CRM?", a: "Yes — Zoho, HubSpot, Google Sheets and most modern CRMs." },
    ],
  },
  "lead-generation": {
    metaTitle: "Lead Generation Services in Bihar | B2B & B2C Leads Patna India",
    metaDescription:
      "Professional lead generation services in Bihar for B2B, B2C, real estate, education, healthcare and appointment-based businesses across India.",
    h1: "Lead Generation Services",
    heroTagline: "A predictable pipeline of qualified leads — every month.",
    intro:
      "We build lead generation systems for businesses in Patna, Bihar and across India — covering B2B, B2C, real estate, education, healthcare and appointment-based businesses. From lead magnets and high-converting landing pages to multi-channel ad funnels and CRM-integrated nurture flows, our systems fill your sales calendar with people ready to buy.",
    benefits: [
      { title: "Predictable pipeline", desc: "Know exactly how many leads you'll get this month and next." },
      { title: "Qualified leads only", desc: "Pre-qualification filters out tyre-kickers before they reach you." },
      { title: "Lower cost per lead", desc: "Funnel optimisation drives CPL down quarter over quarter." },
      { title: "Sales-ready handoff", desc: "Leads land in your CRM with full context — ready to close." },
    ],
    included: [
      "B2B Lead Generation",
      "B2C Lead Generation",
      "Real Estate Leads (site visits & bookings)",
      "Education Leads (admissions & enrolments)",
      "Healthcare Leads (appointments)",
      "Appointment Booking systems",
      "Landing pages + lead magnets",
      "CRM setup & integration",
    ],
    whyUs: whyUsCore,
    process: [
      { step: "Offer", detail: "Craft an irresistible lead magnet." },
      { step: "Funnel", detail: "Build landing page, ads and follow-up sequence." },
      { step: "Drive traffic", detail: "Meta, Google and WhatsApp campaigns." },
      { step: "Optimise", detail: "Improve cost-per-lead and qualification rate." },
    ],
    sampleProjects: [
      { title: "Real Estate Leads", summary: "Patna builder funnel for premium apartments.", result: "180 site visits / month" },
      { title: "Education Leads", summary: "Coaching institute admissions funnel.", result: "₹65 cost per lead" },
      { title: "Healthcare Appointments", summary: "Bihar multi-specialty clinic booking system.", result: "12x ROAS" },
    ],
    faqs: [
      { q: "Do you guarantee a fixed number of leads?", a: "We commit to a target cost-per-lead range based on your industry and benchmarks." },
      { q: "Who follows up with the leads?", a: "We can set up automated WhatsApp & email follow-up, or train your sales team to handle live calls." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    const detail = details[params.slug];
    if (!service || !detail) throw notFound();
    return { service, detail };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service — ElaroDigital" }] };
    const { detail } = loaderData;
    const url = `/services/${params.slug}`;
    return {
      meta: [
        { title: detail.metaTitle },
        { name: "description", content: detail.metaDescription },
        { property: "og:title", content: detail.metaTitle },
        { property: "og:description", content: detail.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [...universalFaqs, ...detail.faqs].map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
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

function ServiceCTAs() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-95 transition"
      >
        <Phone className="size-4" /> Get Free Consultation
      </Link>
      <Link
        to="/contact"
        hash="quote"
        className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:text-gold transition"
      >
        <FileText className="size-4" /> Request Quote
      </Link>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:text-gold transition"
      >
        <MessageCircle className="size-4" /> WhatsApp Now
      </a>
    </div>
  );
}

function RelatedServices({ current }: { current: Service }) {
  const relatedItems = current.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];
  if (!relatedItems.length) return null;
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-medium">Related services</h2>
        <p className="mt-2 text-sm text-muted-foreground">Pair this service with another for compounding results.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {relatedItems.map((r) => {
            const Icon = r.icon;
            return (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group flex items-start gap-4 rounded-2xl glass p-6 hover:border-gold/40 transition"
              >
                <div className="shrink-0 grid place-items-center size-12 rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium group-hover:text-gold transition">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.short}</p>
                </div>
                <ArrowRight className="size-4 text-gold ml-auto shrink-0 mt-1.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailPage() {
  const data = Route.useLoaderData() as { service: Service; detail: Detail };
  const { service, detail } = data;
  const Icon = service.icon;
  const benefitIcons = [TrendingUp, ShieldCheck, Users, Zap];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 radial-gold opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
          <div className="min-w-0 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Icon className="size-3.5" /> Service
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-medium leading-tight">{detail.h1}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{detail.heroTagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.keywords.map((k) => (
                <span key={k} className="text-xs px-3 py-1 rounded-full glass text-muted-foreground">{k}</span>
              ))}
            </div>
            <div className="mt-8">
              <ServiceCTAs />
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-2xl" />
            <img
              src={service.image}
              alt={`${service.title} illustration`}
              width={1280}
              height={800}
              className="relative w-full h-auto rounded-3xl ring-1 ring-gold/20 glass-strong"
            />
          </div>
        </div>
      </section>

      {/* Overview / Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl glass p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-medium">Overview</h2>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed">{detail.intro}</p>
          </div>

          <h2 className="mt-16 text-3xl font-medium text-center">Key Benefits</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {detail.benefits.map((b, i) => {
              const Bi = benefitIcons[i % benefitIcons.length];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-3xl glass p-6"
                >
                  <div className="grid place-items-center size-11 rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
                    <Bi className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-medium text-center">Services Included</h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Everything we deliver under {service.title.toLowerCase()} for Bihar and India clients.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {detail.included.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl glass p-5">
                <Check className="size-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-medium text-center">Why Choose ElaroDigital</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.whyUs.map((w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl glass p-6 flex gap-3"
              >
                <Sparkles className="size-4 text-gold mt-1 shrink-0" />
                <span className="text-sm">{w}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-medium text-center">Our Process</h2>
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

      {/* Sample Projects */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-medium text-center">Sample Projects & Case Studies</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {detail.sampleProjects.map((p) => (
              <div key={p.title} className="rounded-3xl glass p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Case study</div>
                <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 text-xs text-gold ring-1 ring-gold/20">
                  <TrendingUp className="size-3.5" /> {p.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-medium text-center">Industries We Serve</h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Trusted by businesses across Patna, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Purnia and all India.
          </p>
          <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((it) => {
              const Ii = it.icon;
              return (
                <div key={it.name} className="rounded-2xl glass p-5 text-center">
                  <Ii className="mx-auto size-6 text-gold" />
                  <div className="mt-3 text-sm">{it.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices current={service} />

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-medium text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {[...universalFaqs, ...detail.faqs].map((f) => (
              <div key={f.q} className="rounded-2xl glass p-6">
                <div className="font-medium">{f.q}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-10 sm:p-14 text-center">
            <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 size-[420px] rounded-full bg-gold/15 blur-[120px]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-medium">Ready to Grow Your Business?</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Get more leads, more traffic, and more sales with our expert digital marketing solutions across Bihar and India.
              </p>
              <div className="mt-8 flex justify-center">
                <ServiceCTAs />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </PageShell>
  );
}