import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { TemplateMockup } from "@/components/templates/TemplateMockup";
import { TemplateOfferCard } from "@/components/templates/TemplateOfferCard";

const previews = [
  { category: "restaurant-cafe", type: "Instagram Post", name: "Restaurant offer post" },
  { category: "salon-beauty", type: "Instagram Story", name: "Salon story promo" },
  { category: "gym-fitness", type: "Offer Post", name: "Gym membership offer" },
  { category: "real-estate", type: "Carousel", name: "Property carousel" },
];

export function TemplatesPromo() {
  return (
    <section id="free-templates" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-2)]">
              <Sparkles className="size-3.5" aria-hidden="true" /> Limited launch offer
            </div>
            <h2 className="mt-5 font-display text-3xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
              Your First Month of Social Media Templates is FREE 🎁
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Ready-to-use, professionally designed Instagram and Facebook templates for restaurants, salons, gyms, real
              estate, coaching centres and more — customised with your logo, colours and offers by our design team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 transition"
              >
                Browse free templates <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/919431011994?text=I%20want%20my%20free%20month%20of%20social%20media%20templates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)] px-6 py-3.5 text-sm font-semibold text-white hover:opacity-95 transition"
              >
                Claim on WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No payment required · Delivered in 24–48 hours · Upgrade later for just ₹299/month
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {previews.map((p) => (
              <TemplateMockup key={p.name} category={p.category} type={p.type} name={p.name} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <TemplateOfferCard />
        </div>
      </div>
    </section>
  );
}
