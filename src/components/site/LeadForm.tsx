import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const CONTACT_EMAIL = "elarodigitalagency@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export function LeadForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {
      _subject: "New lead from ElaroDigital website",
      _template: "table",
      _captcha: "false",
    };

    fd.forEach((value, key) => {
      const stringValue = String(value).trim();
      if (stringValue) {
        payload[key] = stringValue;
      }
    });

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };

      if (!response.ok || String(result.success) !== "true") {
        throw new Error(result.message || "Failed to submit contact form");
      }

      toast.success(`Thank you! Your details have been sent to ${CONTACT_EMAIL}.`);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error(`Something went wrong. Please try again or email us at ${CONTACT_EMAIL}.`);
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
              <input required name="name" aria-label="Your name" placeholder="Your name" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
              <input required name="phone" type="tel" aria-label="Phone number" placeholder="Phone number" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
            </div>
            <input required name="email" type="email" aria-label="Email address" placeholder="Email address" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
            <input name="business" aria-label="Business name" placeholder="Business name" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40" />
            <select name="service" aria-label="Service you're interested in" defaultValue="" className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40">
              <option value="" disabled>Service interested in</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title} className="bg-surface text-foreground">{s.title}</option>
              ))}
            </select>
            <textarea name="message" aria-label="Tell us about your goals" placeholder="Tell us a bit about your goals..." rows={4} className="rounded-2xl glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-gold/40 resize-none" />
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