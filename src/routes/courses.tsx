import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, GraduationCap, Target, Search, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Learn Digital Marketing | Elarodital" },
      { name: "description", content: "Practical, no-fluff digital marketing courses by Elarodital — SEO, Meta Ads, Google Ads and WhatsApp Marketing taught by working practitioners." },
      { property: "og:title", content: "Digital Marketing Courses — Elarodital" },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

const courses = [
  { icon: Search, t: "SEO Mastery", d: "Rank #1 with technical, on-page, content and link-building taught hands-on." },
  { icon: Target, t: "Meta Ads Pro", d: "Build profitable funnels on Facebook & Instagram with creative testing." },
  { icon: GraduationCap, t: "Google Ads Bootcamp", d: "Search, PMax & YouTube campaigns engineered for CPL and ROAS." },
  { icon: MessageCircle, t: "WhatsApp Marketing", d: "Automation, broadcasts, chatbots and click-to-WhatsApp ads." },
];

function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Courses"
        title="Learn digital marketing from working practitioners."
        description="Cohort-based, project-driven courses designed to make you employable or your own client's hero. Enrolment opening soon."
      />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 grid sm:grid-cols-2 gap-4">
          {courses.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.t} className="rounded-3xl glass p-7">
                <Icon className="size-6 text-gold" />
                <h3 className="mt-5 text-xl font-medium">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
          >
            Join the waitlist <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}