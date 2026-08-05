import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Team } from "@/components/site/Team";
import { LeadForm } from "@/components/site/LeadForm";
import { testimonials } from "@/data/testimonials";
import aboutHero from "@/assets/about-hero.jpg.asset.json";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Search,
  MapPinned,
  Globe2,
  Target,
  MousePointerClick,
  Megaphone,
  FileText,
  Magnet,
  Palette,
  Mail as MailIcon,
  LayoutTemplate,
  ShieldCheck,
  BarChart3,
  HeartHandshake,
  Wallet,
  Trophy,
  Award,
  Building2,
  GraduationCap,
  Stethoscope,
  Utensils,
  Hotel,
  Scissors,
  Sparkles,
  ShoppingBag,
  Home,
  BookOpen,
  Dumbbell,
  Scale,
  Rocket,
  Store,
  Star,
  CheckCircle2,
  LineChart,
  Users,
  FileSearch,
  BrainCog,
  Play,
  TrendingUp,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elaro Digital | SEO, Websites & Digital Marketing Agency in Bihar" },
      { name: "description", content: "Elaro Digital is a results-driven digital marketing agency helping local businesses, schools, hospitals, clinics, hotels & startups grow with Local SEO, Google Business Profile, websites, Meta Ads & Google Ads." },
      { name: "keywords", content: "Digital Marketing Agency, SEO Company, Local SEO Services, Google Business Profile Optimization, Website Development, Social Media Marketing, Google Ads, Meta Ads, Lead Generation, Digital Marketing Agency in Bihar, SEO Company in Bihar, Local SEO Expert, Website Development Company" },
      { property: "og:title", content: "About Elaro Digital — Digital Marketing Agency in Bihar" },
      { property: "og:description", content: "Helping local businesses grow with SEO, Google Business Profile, websites, Meta & Google Ads and content marketing." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elarodigital.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Elaro Digital — Digital Marketing Agency in Bihar" },
      { name: "twitter:description", content: "Helping local businesses grow with SEO, Google Business Profile, websites, Meta & Google Ads and content marketing." },
    ],
    links: [{ rel: "canonical", href: "https://elarodigital.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Elaro Digital",
          url: "https://elarodigital.lovable.app/about",
          about: {
            "@type": "Organization",
            name: "Elaro Digital Agency",
            url: "https://elarodigital.lovable.app",
            telephone: "+91-9431011994",
            email: "info@elarodigital.lovable.app",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Powerganj, Bairagi",
              addressLocality: "Gaya",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

// ─────────────────────────────────────────────────────────────

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl mx-auto text-center mb-14">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-5 font-display text-3xl sm:text-5xl font-bold leading-[1.05] tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc?: string;
}) {
  return (
    <div className="group rounded-3xl bg-white border border-border p-6 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_-20px_rgba(79,70,229,0.25)] hover:border-indigo-200 transition-all duration-300">
      <div className="grid place-items-center size-11 rounded-2xl bg-indigo-50 text-brand group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{title}</h3>
      {desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}

const whyUs = [
  { icon: MapPinned, title: "Local SEO Experts", desc: "Rank in Google Map Pack across Bihar." },
  { icon: Building2, title: "Google Business Specialists", desc: "Optimized profiles that convert." },
  { icon: LayoutTemplate, title: "SEO-Friendly Websites", desc: "Fast, mobile-first, built to rank." },
  { icon: LineChart, title: "Performance Marketing", desc: "Meta & Google Ads engineered for ROAS." },
  { icon: BarChart3, title: "Transparent Reporting", desc: "Monthly reports with real numbers." },
  { icon: HeartHandshake, title: "Dedicated Support", desc: "A team that actually picks up the phone." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Enterprise craft, SMB-friendly pricing." },
  { icon: Trophy, title: "Result-Oriented Strategy", desc: "Every plan tied to a business outcome." },
];

const industries: { icon: LucideIcon; name: string }[] = [
  { icon: GraduationCap, name: "Schools" },
  { icon: Stethoscope, name: "Hospitals" },
  { icon: Stethoscope, name: "Clinics" },
  { icon: Utensils, name: "Restaurants" },
  { icon: Hotel, name: "Hotels" },
  { icon: Scissors, name: "Beauty Salons" },
  { icon: Sparkles, name: "Makeup Artists" },
  { icon: ShoppingBag, name: "Retail Shops" },
  { icon: Home, name: "Real Estate" },
  { icon: BookOpen, name: "Educational Institutes" },
  { icon: Dumbbell, name: "Gyms" },
  { icon: BookOpen, name: "Coaching Centers" },
  { icon: Scale, name: "Law Firms" },
  { icon: Rocket, name: "Startups" },
  { icon: Store, name: "Small Businesses" },
];

const aboutServices: { icon: LucideIcon; title: string; slug?: string }[] = [
  { icon: MapPinned, title: "Local SEO", slug: "seo-services" },
  { icon: Search, title: "SEO", slug: "seo-services" },
  { icon: Building2, title: "Google Business Profile Optimization", slug: "seo-services" },
  { icon: Globe2, title: "Website Development", slug: "website-development" },
  { icon: LayoutTemplate, title: "Landing Page Design", slug: "website-development" },
  { icon: Target, title: "Meta Ads", slug: "meta-ads" },
  { icon: MousePointerClick, title: "Google Ads", slug: "google-ads" },
  { icon: Megaphone, title: "Social Media Management", slug: "social-media-marketing" },
  { icon: FileText, title: "Content Marketing" },
  { icon: Magnet, title: "Lead Generation", slug: "lead-generation" },
  { icon: Palette, title: "Branding", slug: "graphic-design" },
  { icon: MailIcon, title: "Email Marketing" },
];

const process = [
  { icon: FileSearch, step: "01", title: "Business Analysis", desc: "Deep-dive into your business, goals and current numbers." },
  { icon: Search, step: "02", title: "Market Research", desc: "Competitors, keywords, audience and local search behaviour." },
  { icon: BrainCog, step: "03", title: "Strategy Planning", desc: "A custom roadmap across SEO, ads, content and website." },
  { icon: Play, step: "04", title: "Implementation", desc: "Execution by specialists — designers, developers, marketers." },
  { icon: RefreshCw, step: "05", title: "Optimization", desc: "Continuous A/B testing and conversion rate optimization." },
  { icon: TrendingUp, step: "06", title: "Growth & Reporting", desc: "Transparent monthly reports with real growth metrics." },
];

const stats = [
  { value: "95%", label: "Client Satisfaction" },
  { value: "300+", label: "Projects Completed" },
  { value: "500+", label: "Keywords Ranked" },
  { value: "100+", label: "Businesses Helped" },
];

const trust = [
  { icon: ShieldCheck, label: "Transparent Process" },
  { icon: Award, label: "White Hat SEO" },
  { icon: BarChart3, label: "Monthly Reports" },
  { icon: Trophy, label: "Real Results" },
  { icon: HeartHandshake, label: "Dedicated Support" },
  { icon: ShieldCheck, label: "Secure Website" },
];

const faqs = [
  { q: "What is Local SEO?", a: "Local SEO is the process of optimizing your Google Business Profile, website and citations so your business shows up when nearby customers search for what you offer — for example 'best clinic near me' or 'restaurant in Gaya'." },
  { q: "How long does SEO take?", a: "Most businesses see meaningful movement in 3–6 months and compounding growth from 6–12 months. Local SEO and Google Business Profile can produce leads within the first 30–60 days." },
  { q: "How much does SEO cost?", a: "Our SEO plans are custom-built based on your industry, location and competition. We offer affordable packages for small businesses as well as advanced plans for scaling brands. Book a free consultation for a transparent quote." },
  { q: "Do you build websites?", a: "Yes — we design and develop SEO-friendly, mobile-first websites and high-converting landing pages using modern tech stacks and Core Web Vitals best practices." },
  { q: "Do you manage Google Business Profile?", a: "Absolutely. GBP optimization, weekly posts, review management and Q&A handling are part of our Local SEO service." },
  { q: "Can you run Meta Ads?", a: "Yes. We plan, launch and optimize Facebook & Instagram ad campaigns focused on quality leads and ROAS." },
  { q: "Do you work with schools?", a: "Yes. We help schools, coaching institutes and educational brands grow admissions through SEO, social media and paid ads." },
  { q: "Do you work with local businesses?", a: "Local businesses are our specialty — from clinics and salons to restaurants, retail shops and real estate across Bihar and India." },
];

// ─────────────────────────────────────────────────────────────

function AboutPage() {
  return (
    <PageShell>
      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 radial-gold opacity-80 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:pt-16 pb-20 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              About Elaro Digital
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold leading-[1.02] tracking-tight">
              Helping Local Businesses Grow with{" "}
              <span className="gold-gradient-text">SEO, Websites & Digital Marketing</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We help businesses rank higher on Google, generate quality leads, increase online visibility, and grow through SEO, Google Business Profile Optimization, Website Development, Social Media Marketing, and Paid Advertising.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow hover:opacity-95 transition"
              >
                Get Free Consultation <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-6 py-3.5 text-sm font-semibold hover:border-brand hover:text-brand transition"
              >
                View Our Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-[color:var(--brand-2)]" /> 100+ Businesses Helped</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-[color:var(--brand-2)]" /> 500+ Keywords Ranked</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-[color:var(--brand-2)]" /> White-Hat SEO</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-[2rem] bg-white border border-border p-6 sm:p-10 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.25)]">
              <img
                src={aboutHero.url}
                alt="Business growth illustration showing rising bar chart — Elaro Digital marketing results"
                width={1024}
                height={1024}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white border border-border shadow-lg px-4 py-3">
                <div className="text-xs text-muted-foreground">Avg. traffic growth</div>
                <div className="font-display text-2xl font-bold text-brand">+312%</div>
              </div>
              <div className="absolute -top-6 -right-4 rounded-2xl bg-white border border-border shadow-lg px-4 py-3">
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                <div className="font-display text-2xl font-bold text-[color:var(--brand-2)]">95%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 · WHO WE ARE ───────────────────────── */}
      <Section eyebrow="Who We Are" title="A results-driven digital marketing agency." className="bg-white border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Elaro Digital Agency</strong> is a results-driven digital marketing agency helping businesses build a strong online presence. We combine <strong className="text-foreground">Local SEO, Search Engine Optimization, Google Business Profile Optimization, Website Development, Meta Ads, Google Ads, Social Media Marketing, Content Marketing</strong> and <strong className="text-foreground">Branding</strong> into one growth engine — engineered to generate more leads, improve visibility and increase revenue through ethical, white-hat digital marketing.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Users, title: "Local-First", desc: "Bihar-based, India-focused." },
            { icon: ShieldCheck, title: "Ethical", desc: "Only white-hat strategies." },
            { icon: LineChart, title: "Data-Driven", desc: "Every decision is measured." },
          ].map((c) => (
            <Card key={c.title} icon={c.icon} title={c.title} desc={c.desc} />
          ))}
        </div>
      </Section>

      {/* ── SECTIONS 3+4 · MISSION & VISION ─────────────── */}
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8 sm:p-12 shadow-glow">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
              Our Mission
            </div>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Empower businesses with digital marketing that drives measurable growth.
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              To help every business — small or large — increase visibility, unlock consistent lead flow and build long-term online success through innovative, ethical digital marketing.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-border p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Our Vision
            </div>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold leading-tight">
              India's most trusted digital marketing agency for local businesses.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become the go-to growth partner for local Indian businesses — known for measurable results, transparent reporting and world-class customer experience.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 5 · WHY CHOOSE US ───────────────────── */}
      <Section eyebrow="Why Choose Us" title="Built for growth. Trusted for results." className="bg-white border-y border-border">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map((w) => (
            <Card key={w.title} icon={w.icon} title={w.title} desc={w.desc} />
          ))}
        </div>
      </Section>

      {/* ── SECTION 6 · INDUSTRIES ───────────────────────── */}
      <Section eyebrow="Industries We Serve" title="Growth partners for every kind of business." description="From schools and clinics to hotels, salons and startups — we've built marketing systems for them all.">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.map((i) => (
            <div key={i.name} className="rounded-2xl bg-white border border-border p-5 text-center hover:border-brand hover:shadow-[0_15px_40px_-20px_rgba(79,70,229,0.25)] transition">
              <div className="grid place-items-center size-10 rounded-xl bg-indigo-50 text-brand mx-auto">
                <i.icon className="size-5" aria-hidden="true" />
              </div>
              <div className="mt-3 text-sm font-medium">{i.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SECTION 7 · OUR SERVICES ─────────────────────── */}
      <Section eyebrow="Our Services" title="Everything you need to grow, under one roof." className="bg-white border-y border-border">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutServices.map((s) => {
            const inner = (
              <div className="group h-full rounded-3xl bg-white border border-border p-6 hover:border-brand hover:shadow-[0_20px_45px_-20px_rgba(79,70,229,0.25)] transition-all">
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center size-11 rounded-2xl bg-indigo-50 text-brand group-hover:bg-brand group-hover:text-primary-foreground transition">
                    <s.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                </div>
                {s.slug && (
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Learn more <ArrowRight className="size-4" />
                  </div>
                )}
              </div>
            );
            return s.slug ? (
              <Link key={s.title} to="/services/$slug" params={{ slug: s.slug }}>{inner}</Link>
            ) : (
              <div key={s.title}>{inner}</div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow hover:opacity-95 transition">
            Explore all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* ── SECTION 8 · OUR PROCESS ──────────────────────── */}
      <Section eyebrow="Our Process" title="A proven 6-step growth process.">
        <ol className="relative grid md:grid-cols-2 gap-4">
          {process.map((p) => (
            <li key={p.step} className="rounded-3xl bg-white border border-border p-6 flex gap-5">
              <div className="shrink-0 grid place-items-center size-14 rounded-2xl bg-indigo-50 text-brand font-display text-xl font-bold">
                {p.step}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p.icon className="size-4 text-brand" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold tracking-tight">{p.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── SECTION 9 · CLIENT SUCCESS ───────────────────── */}
      <Section eyebrow="Client Success" title="Real growth. Real numbers." className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center backdrop-blur">
              <div className="font-display text-5xl font-bold text-white">{s.value}</div>
              <div className="mt-2 text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {["Google Ranking Improvements", "Lead Generation", "Traffic Growth", "GBP Optimization", "Social Media Growth"].map((c) => (
            <div key={c} className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-center text-white/90">
              ✓ {c}
            </div>
          ))}
        </div>
      </Section>

      {/* ── SECTION 10 · WHY LOCAL SEO ───────────────────── */}
      <Section eyebrow="Why Local SEO" title="Why Local SEO is essential for your business.">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <ul className="space-y-4">
            {[
              { t: "People search on Google before buying.", d: "97% of consumers search online for local businesses before making a decision." },
              { t: "Businesses ranking higher receive more traffic.", d: "The top 3 Google results capture over 75% of all clicks." },
              { t: "Google Business Profile increases trust.", d: "Verified profiles with reviews convert 5× more than unverified ones." },
              { t: "Local SEO generates quality leads.", d: "Nearby, high-intent customers ready to call, visit or book." },
              { t: "SEO is a long-term investment.", d: "Compounding organic traffic that keeps paying back — for years." },
            ].map((p) => (
              <li key={p.t} className="flex gap-4 rounded-2xl bg-white border border-border p-5">
                <CheckCircle2 className="size-5 text-[color:var(--brand-2)] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">{p.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.d}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl bg-white border border-border p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.2)]">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Local Search Infographic</div>
            <div className="mt-4 space-y-4">
              {[
                { label: "Searches with 'near me'", val: 82 },
                { label: "Convert within 24 hours", val: 76 },
                { label: "Trust GBP reviews", val: 88 },
                { label: "Prefer top-3 Google results", val: 75 },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{b.label}</span>
                    <span className="text-brand font-bold">{b.val}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-[color:var(--brand-2)]"
                      style={{ width: `${b.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 11 · TESTIMONIALS ────────────────────── */}
      <Section eyebrow="Testimonials" title="Loved by local businesses across Bihar." className="bg-white border-y border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 6).map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white border border-border p-6 flex flex-col">
              <div className="flex items-center gap-1 text-[color:var(--gold-soft)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-4 ${i < Math.floor(t.rating) ? "fill-current" : "text-slate-200"}`} />
                ))}
                <span className="ml-1 text-xs text-muted-foreground">{t.rating.toFixed(1)}</span>
              </div>
              <blockquote className="mt-4 text-sm text-foreground leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid place-items-center size-10 rounded-full bg-indigo-50 text-brand font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ── SECTION 12 · FAQ ─────────────────────────────── */}
      <Section eyebrow="FAQ" title="Answers to what business owners ask us most.">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-border p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border last:border-0">
                <AccordionTrigger className="px-4 py-5 text-left text-base font-semibold hover:no-underline hover:text-brand">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ── SECTION 16 · TRUST ELEMENTS ──────────────────── */}
      <Section className="!pt-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {trust.map((t) => (
            <div key={t.label} className="rounded-2xl bg-white border border-border px-4 py-4 flex items-center gap-3">
              <t.icon className="size-5 text-[color:var(--brand-2)] shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SECTION 13 · CTA BANNER ──────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white p-10 sm:p-16 text-center shadow-glow">
            <div aria-hidden className="absolute -top-24 -right-24 size-[380px] rounded-full bg-white/10 blur-[100px]" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Let's build your online success together. Book a free 30-minute consultation with our team today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 text-sm font-bold hover:bg-slate-50 transition"
              >
                Book Free Consultation <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+919431011994"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 backdrop-blur px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Phone className="size-4" /> Call Now
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919431011994"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)] px-6 py-3.5 text-sm font-bold text-white hover:opacity-95 transition"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <Team />

      {/* ── SECTION 14 · CONTACT ─────────────────────────── */}
      <Section id="contact-info" eyebrow="Contact" title="Get in touch with Elaro Digital." className="bg-white border-y border-border">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Globe2, label: "Website", value: "elarodigital.lovable.app", href: "https://elarodigital.lovable.app" },
            { icon: Phone, label: "Phone", value: "+91 94310 11994", href: "tel:+919431011994" },
            { icon: Mail, label: "Email", value: "info@elarodigital.lovable.app", href: "mailto:info@elarodigital.lovable.app" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://api.whatsapp.com/send?phone=919431011994" },
          ].map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="rounded-3xl bg-white border border-border p-6 hover:border-brand hover:shadow-[0_20px_45px_-20px_rgba(79,70,229,0.25)] transition block">
              <c.icon className="size-5 text-brand" aria-hidden="true" />
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.label}</div>
              <div className="mt-1 text-sm font-semibold break-all">{c.value}</div>
            </a>
          ))}
        </div>
        <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-[0_25px_60px_-30px_rgba(15,23,42,0.2)]">
          <iframe
            title="Elaro Digital office location — Powerganj, Bairagi, Gaya, Bihar"
            src="https://www.google.com/maps?q=Powerganj+Bairagi+Gaya+Bihar&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full block"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-brand" /> Powerganj, Bairagi, Gaya, Bihar 823001
        </div>
      </Section>

      {/* ── LEAD FORM ────────────────────────────────────── */}
      <LeadForm />
    </PageShell>
  );
}