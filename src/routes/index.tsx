import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { faqs } from "@/data/faqs";

const StatsBar = lazy(() => import("@/components/site/StatsBar").then(m => ({ default: m.StatsBar })));
const ServicesGrid = lazy(() => import("@/components/site/ServicesGrid").then(m => ({ default: m.ServicesGrid })));
const WhyUs = lazy(() => import("@/components/site/WhyUs").then(m => ({ default: m.WhyUs })));
const Process = lazy(() => import("@/components/site/Process").then(m => ({ default: m.Process })));
const Results = lazy(() => import("@/components/site/Results").then(m => ({ default: m.Results })));
const Industries = lazy(() => import("@/components/site/Industries").then(m => ({ default: m.Industries })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const Team = lazy(() => import("@/components/site/Team").then(m => ({ default: m.Team })));
const FAQ = lazy(() => import("@/components/site/FAQ").then(m => ({ default: m.FAQ })));
const LeadForm = lazy(() => import("@/components/site/LeadForm").then(m => ({ default: m.LeadForm })));
const Footer = lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Agency in Bihar & India | ElaroDigital" },
      { name: "description", content: "Digital marketing agency in Bihar delivering SEO, Google Ads, Meta Ads, websites and lead generation across Patna, Gaya, Muzaffarpur and all India." },
      { name: "keywords", content: "Digital Marketing Agency in Bihar, Digital Marketing Company in Patna, SEO Services Bihar, SEO Agency Patna, Google Ads Bihar, Meta Ads Bihar, Social Media Marketing Patna, Website Development Bihar, App Development Bihar, WhatsApp Marketing, Lead Generation Bihar, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Purnia" },
      { property: "og:title", content: "Digital Marketing Agency in Bihar & India | ElaroDigital" },
      { property: "og:description", content: "Results-driven SEO, ads, websites and lead generation for businesses across Bihar and India." },
      { property: "og:url", content: "https://elarodigital.lovable.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Digital Marketing Agency in Bihar & India | ElaroDigital" },
      { name: "twitter:description", content: "Results-driven SEO, ads, websites and lead generation for businesses across Bihar and India." },
    ],
    links: [{ rel: "canonical", href: "https://elarodigital.lovable.app" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <StatsBar />
          <ServicesGrid />
          <WhyUs />
          <Process />
          <Results />
          <Industries />
          <Testimonials />
          <Team />
          <FAQ />
          <LeadForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
