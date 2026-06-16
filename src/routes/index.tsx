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
      { title: "Elarodital — Premium Digital Marketing Agency in Bihar, India" },
      { name: "description", content: "Elarodital is a premium digital marketing agency offering SEO, Social Media Marketing, Meta Ads, Google Ads, Website Development, App Development, Graphic Design, WhatsApp Marketing & Lead Generation across Bihar and India." },
      { name: "keywords", content: "Digital Marketing Agency in Bihar, Digital Marketing Company in India, SEO Services in Bihar, Social Media Marketing Agency, Meta Ads Expert, Google Ads Agency, Website Development Company, App Development Company, Graphic Design Services, WhatsApp Marketing Services, Lead Generation Agency, Local SEO" },
      { property: "og:title", content: "Elarodital — Premium Digital Marketing Agency in Bihar" },
      { property: "og:description", content: "Bihar's premium digital marketing agency. SEO, ads, websites and lead generation that actually drive growth." },
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
