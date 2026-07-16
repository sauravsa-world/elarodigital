import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Results } from "@/components/site/Results";
import { Testimonials } from "@/components/site/Testimonials";
import { Industries } from "@/components/site/Industries";
import { Team } from "@/components/site/Team";
import { FAQ } from "@/components/site/FAQ";
import { LeadForm } from "@/components/site/LeadForm";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Agency in Bihar & India | ElaroDigital" },
      { name: "description", content: "Digital marketing agency in Bihar delivering SEO, Google Ads, Meta Ads, websites and lead generation across Patna, Gaya, Muzaffarpur and all India." },
      { name: "keywords", content: "Digital Marketing Agency in Bihar, Digital Marketing Company in Patna, SEO Services Bihar, SEO Agency Patna, Google Ads Bihar, Meta Ads Bihar, Social Media Marketing Patna, Website Development Bihar, App Development Bihar, WhatsApp Marketing, Lead Generation Bihar, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Purnia" },
      { property: "og:title", content: "Digital Marketing Agency in Bihar & India | ElaroDigital" },
      { property: "og:description", content: "Results-driven SEO, ads, websites and lead generation for businesses across Bihar and India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
      </main>
      <Footer />
    </div>
  );
}
