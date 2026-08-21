import { ShieldCheck, Clock, IndianRupee, Users } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Designed by an agency", body: "Same design team that runs paid campaigns for Bihar brands." },
  { icon: Clock, title: "Delivered in 24–48 hours", body: "Share your details today, post branded creatives this week." },
  { icon: IndianRupee, title: "Free first month", body: "You only pay if you want to continue after seeing results." },
  { icon: Users, title: "Made for local businesses", body: "Copy and layouts tuned for Patna, Gaya and small-town India." },
];

export function TemplateTrust() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl border border-border bg-white p-6">
              <Icon className="size-5 text-gold" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
