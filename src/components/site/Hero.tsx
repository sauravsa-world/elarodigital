import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";

const CONTACT_EMAIL = "elarodigitalagency@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=919431011994";

const businessTypes = [
  "Coaching Institute",
  "Real Estate / Builder",
  "Healthcare / Clinic",
  "E-commerce / D2C",
  "Restaurant / Cafe",
  "Retail Store",
  "Beauty Salon / Gym",
  "School / College",
  "Other",
];

export function Hero() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {
      _subject: "New hero lead from ElaroDigital website",
      _template: "table",
      _captcha: "false",
      source: "Homepage hero form",
    };
    fd.forEach((v, k) => {
      const s = String(v).trim();
      if (s) payload[k] = s;
    });
    try {
      const r = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await r.json().catch(() => ({}))) as { success?: string | boolean };
      if (!r.ok || String(data.success) !== "true") throw new Error("failed");
      toast.success("Thanks! We'll reach out on WhatsApp within 15 minutes.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Something went wrong. WhatsApp us at +91 94310 11994.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 radial-gold opacity-90 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-brand text-xs sm:text-sm font-semibold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              Bihar's Top-Rated Performance Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight"
            >
              Grow your business in{" "}
              <span className="italic text-brand">Bihar &amp; India</span> with data-driven digital marketing.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              We help coaching institutes, real estate builders, clinics, D2C brands and local businesses in Patna, Gaya, Muzaffarpur and across India generate more leads through SEO, Meta Ads, Google Ads and high-converting websites.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-2)] px-6 py-3.5 text-sm font-bold text-white shadow-emerald hover:opacity-95 transition"
              >
                <MessageCircle className="size-5" /> Free WhatsApp Audit
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-border px-6 py-3.5 text-sm font-bold text-foreground hover:bg-slate-50 transition"
              >
                View Our Services <ArrowRight className="size-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9 / 5</span>
                <span>from 200+ clients</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand" /> ₹50M+ ad spend managed
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_25px_70px_-25px_rgba(15,23,42,0.25)] border border-border relative">
              <div className="absolute -top-4 -left-4 bg-brand text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wider">
                GET 2X LEADS
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-1">Get a Free Strategy Proposal</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Reply within 15 minutes on WhatsApp. No spam, ever.
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="hero-name" className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Full name</label>
                  <input id="hero-name" name="name" required type="text" placeholder="Rahul Sharma" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]" />
                </div>
                <div>
                  <label htmlFor="hero-business" className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Business type</label>
                  <select id="hero-business" name="business_type" defaultValue={businessTypes[0]} className="w-full mt-1 px-4 py-3 bg-slate-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]">
                    {businessTypes.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="hero-phone" className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">WhatsApp number</label>
                  <div className="flex gap-2 mt-1">
                    <span className="px-3 py-3 bg-slate-100 border border-border rounded-lg text-sm text-muted-foreground">+91</span>
                    <input id="hero-phone" name="phone" required type="tel" placeholder="9876543210" className="flex-1 px-4 py-3 bg-slate-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="hero-service" className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Primary need</label>
                  <select id="hero-service" name="service" defaultValue="" className="w-full mt-1 px-4 py-3 bg-slate-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]">
                    <option value="" disabled>Choose a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-brand text-primary-foreground rounded-lg text-sm font-bold hover:opacity-95 transition disabled:opacity-60">
                  {loading ? "Sending…" : "Get Free Quote"}
                </button>
                <p className="text-center text-[11px] text-muted-foreground uppercase tracking-widest">
                  Fastest response · 15 minutes
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}