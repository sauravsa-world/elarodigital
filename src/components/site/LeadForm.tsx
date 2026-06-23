import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { submitContactForm } from "@/lib/contact.functions";

export function LeadForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;

    try {
      await submitContactForm({ data: payload as Parameters<typeof submitContactForm>[0]["data"] });
      toast.success("Thank you! Your details have been sent to elarodigitalagency@gmail.com.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again or email us at elarodigitalagency@gmail.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-14 grid lg:grid-cols-2 gap-12">
          <div aria-hidden className="absolute -top-32 -left-32 size-[420px] rounded-full bg-gold/15 blur-[120px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              Free Marketing Audit
            </div>
            <h2 className="mt-5 text-4xl sm:text-5xl font-medium leading-[1.05]">
              Let's grow your business — <span className="gold-gradient-text italic">together</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              Tell us about your business and goals. We'll send back a free 15-minute strategy plan within 24 hours — no obligations, no pushy sales.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              <li>✓ Free 30-min consultation</li>
              <li>✓ Custom strategy snapshot</li>
              <li>✓ Transparent quote, no hidden fees</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="relative grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Your name" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
              <input required name="phone" type="tel" placeholder="Phone number" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
            </div>
            <input required name="email" type="email" placeholder="Email address" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
            <input name="business" placeholder="Business name" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
            <select name="service" defaultValue="" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40">
              <option value="" disabled>Service interested in</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title} className="bg-surface text-foreground">{s.title}</option>
              ))}
            </select>
            <textarea name="message" placeholder="Tell us a bit about your goals..." rows={4} className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40 resize-none" />
            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition disabled:opacity-60"
            >
              {loading ? "Sending…" : <>Request my free audit <ArrowRight className="size-4" /></>}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Form details go directly to elarodigitalagency@gmail.com.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}