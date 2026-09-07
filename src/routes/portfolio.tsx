import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  IndianRupee,
  Wallet,
  Building,
  Star,
  ArrowRight,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { LeadForm } from "@/components/site/LeadForm";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";

const stats = [
  { metric: "312%", label: "Student inquiries", note: "Meta Ads + landing funnel in 90 days.", industry: "Coaching Institute", icon: Users },
  { metric: "Page 1", label: "Local rankings", note: "Local SEO + Google Business Profile optimisation.", industry: "School (Patna)", icon: TrendingUp },
  { metric: "6.4×", label: "Return on ad spend", note: "Creative testing + retargeting funnel.", industry: "D2C Brand", icon: IndianRupee },
  { metric: "50M+", label: "Ad spend managed", note: "Across campaigns run for Bihar businesses.", industry: "All Channels", icon: Wallet },
  { metric: "200+", label: "Businesses served", note: "Across Patna, Gaya, Muzaffarpur and beyond.", industry: "Across Bihar", icon: Building },
];

const caseStudies = [
  {
    title: "School (Patna) — From Word of Mouth to Page 1 Rankings",
    challenge: "Relied entirely on word of mouth for admissions with almost no online visibility.",
    approach: "Complete website redesign paired with Local SEO and Google Business Profile optimization targeting parent search behaviour.",
    result: "Reached Page 1 local rankings for admission-related searches, with a clear rise in inquiry volume.",
  },
  {
    title: "Coaching Institute — 312% More Student Inquiries in 90 Days",
    challenge: "Inconsistent student inquiries with no structured way to capture and follow up on leads.",
    approach: "Targeted Meta Ads campaigns connected to a high-converting landing page funnel built specifically for exam-focused audiences.",
    result: "312% increase in student inquiries within 90 days of launch.",
  },
  {
    title: "D2C Brand — Scaling to 6.4x Return on Ad Spend",
    challenge: "High ad spend with inconsistent returns and no systematic retargeting in place.",
    approach: "Structured creative testing process combined with a full-funnel retargeting strategy across Meta platforms.",
    result: "Achieved a 6.4x return on ad spend through continuous optimization.",
  },
  {
    title: "Real Estate Builder — Qualified Site-Visit Leads, Not Just Clicks",
    challenge: "Generic advertising was generating high lead volume but poor-quality inquiries that rarely converted to site visits.",
    approach: "Restructured Meta Ads targeting and creative around serious buyer intent signals, with transparent monthly reporting.",
    result: "A consistent pipeline of qualified leads the client could track and trust.",
  },
  {
    title: "Healthcare Clinic — Measurable Growth in Patient Appointments",
    challenge: "Limited local visibility meant patients were choosing other nearby clinics they found first on Google.",
    approach: "Combined Google Ads with Local SEO optimization targeting location- and symptom-specific patient searches.",
    result: "Clear, measurable improvement in patient appointment bookings.",
  },
  {
    title: "Beauty Salon — Filling the Weekday Booking Calendar",
    challenge: "Weekday appointment slots were going unbooked, and social media engagement was inconsistent.",
    approach: "WhatsApp Marketing setup for appointment reminders and offers, paired with a consistent Reels content strategy.",
    result: "Booking calendar filled consistently across weekdays, with strong client-reported satisfaction on execution.",
  },
  {
    title: "Boutique Retail Brand — Steady Order Growth Through Instagram",
    challenge: "Instagram page had low engagement and irregular order flow from social media.",
    approach: "Took over content strategy end-to-end with creative posts and a structured Reels content calendar.",
    result: "Steady, consistent growth in orders following the handover.",
  },
  {
    title: "E-commerce Store — Month-on-Month ROAS Improvement",
    challenge: "Decent website traffic from ads was not converting into sales at an acceptable rate.",
    approach: "Combined website redesign focused on conversion with continuously optimized performance ad campaigns.",
    result: "Month-on-month improving ROAS through ongoing testing and optimization.",
  },
];

const industryProof: Record<string, string> = {
  "Schools & Colleges": "Helped a Patna school reach Page 1 local rankings",
  "Coaching Institutes": "312% inquiry growth for a coaching client in 90 days",
  "Real Estate": "Qualified site-visit leads for Bihar builders",
  "Restaurants & Cafes": "Reels-led local reach that fills tables on slow days",
  "Retail & D2C": "6.4x ROAS achieved for a D2C brand",
  "Healthcare & Clinics": "Improved patient appointments through Local SEO",
  "Clothing Brands": "Steady order growth for a boutique through Instagram",
  "Cosmetic Brands": "Creative testing that lowers cost per purchase",
  "Beauty Salons": "Weekday booking calendar filled via WhatsApp marketing",
  "Gym & Fitness": "Local ads that bring in consistent membership enquiries",
};

const processSteps = [
  { n: "01", t: "Discover", d: "Deep-dive into your business, customers, competitors and goals." },
  { n: "02", t: "Strategy", d: "A clear 90-day roadmap with channels, KPIs and creative direction." },
  { n: "03", t: "Execute", d: "Specialists ship campaigns, content and product weekly — not quarterly." },
  { n: "04", t: "Optimise", d: "Measure, iterate, double down on what wins. Compound the growth." },
];

const featuredNames = ["Rajesh Kumar", "Priya Singh", "Amit Kumar", "Pooja Kumari"];
const featuredTestimonials = featuredNames
  .map((n) => testimonials.find((t) => t.name === n))
  .filter((t): t is (typeof testimonials)[number] => Boolean(t));

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | Digital Marketing Results in Bihar | ElaroDigital" },
      {
        name: "description",
        content:
          "Real SEO, Google Ads, Meta Ads and website results for schools, coaching institutes, real estate, healthcare and D2C brands across Patna, Gaya, Muzaffarpur and Bihar.",
      },
      { property: "og:title", content: "Portfolio & Case Studies | Digital Marketing Results in Bihar | ElaroDigital" },
      {
        property: "og:description",
        content:
          "Real SEO, Google Ads, Meta Ads and website results for schools, coaching institutes, real estate, healthcare and D2C brands across Patna, Gaya, Muzaffarpur and Bihar.",
      },
      { property: "og:url", content: "https://elarodigital.lovable.app/portfolio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Portfolio & Case Studies | Digital Marketing Results in Bihar | ElaroDigital" },
      {
        name: "twitter:description",
        content:
          "Real SEO, Google Ads, Meta Ads and website results for businesses across Patna, Gaya, Muzaffarpur and Bihar.",
      },
    ],
    links: [{ rel: "canonical", href: "https://elarodigital.lovable.app/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title="Real Results for Real Bihar Businesses"
        description="Every campaign we run starts with a clear goal and ends with a measurable result. Here's a closer look at the SEO, Google Ads, Meta Ads and website projects that have helped businesses across Patna, Gaya, Muzaffarpur and Bihar grow."
      />

      {/* Results overview */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Real results"
            title="Numbers Our Clients Actually Care About"
            description="Marketing is a means to an end — leads, customers, revenue. Here are a few wins from recent partnerships."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.article
                  key={c.metric}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative overflow-hidden rounded-3xl glass p-8"
                >
                  <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-gold/10 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <Icon className="size-4 text-gold" />
                      {c.industry}
                    </div>
                    <div className="mt-6 text-5xl sm:text-6xl font-display gold-gradient-text">{c.metric}</div>
                    <div className="mt-2 text-sm text-foreground/80">{c.label}</div>
                    <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{c.note}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Case studies"
            title="Case Studies Across Industries"
            description="From coaching institutes filling batches faster to real estate builders qualifying serious buyers, here is how we've approached growth for different types of businesses across Bihar."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="rounded-3xl glass p-8 hover:border-gold/40 transition"
              >
                <h3 className="text-xl sm:text-2xl font-medium leading-snug">{cs.title}</h3>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Challenge</dt>
                    <dd className="mt-1 text-foreground/80">{cs.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Approach</dt>
                    <dd className="mt-1 text-foreground/80">{cs.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-gold">Result</dt>
                    <dd className="mt-1 font-medium">{cs.result}</dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Industries" title="Built for India's Growing Businesses" />
          <div className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                  className="rounded-2xl glass p-6 hover:border-gold/40 transition"
                >
                  <Icon className="size-7 text-gold" />
                  <h3 className="mt-4 text-base font-medium">{it.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{industryProof[it.name]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process recap */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How we work"
            title="How We Approach Every Project"
            description="The same four steps behind every result on this page."
          />
          <div className="relative mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="hidden md:block absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            {processSteps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-3xl glass p-7"
              >
                <div className="text-xs tracking-[0.2em] text-gold">{s.n}</div>
                <h3 className="mt-4 text-xl font-medium">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              See our full process on the About page <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials tie-in */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Client words"
            title="What These Businesses Say About Working With Us"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {featuredTestimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="rounded-3xl glass p-8"
              >
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`size-4 ${s < Math.round(t.rating) ? "text-gold fill-gold" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-foreground/85">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              Read all testimonials <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <LeadForm />
    </PageShell>
  );
}
