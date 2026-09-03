import { Link } from "@tanstack/react-router";
import { Check, Gift } from "lucide-react";

const freeIncludes = [
  "Ready-to-use templates for your business category",
  "Your logo, brand colours and contact details added",
  "Offer, festival and trust-building post layouts",
  "Delivered post-ready for Instagram & Facebook",
];

const paidIncludes = [
  "Full month of fresh templates every month",
  "Priority customisation with unlimited minor edits",
  "Caption + hashtag pack written for your city",
  "Reel covers and story sets included",
];

export function TemplateOfferCard() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-3xl border-2 border-brand bg-white p-7 shadow-[0_24px_60px_-32px_rgba(79,70,229,0.45)]">
        <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--brand-2)]">
          <Gift className="size-3.5" aria-hidden="true" /> New customer special
        </div>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight">1 Month FREE</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          No card, no commitment. Just tell us about your business and we brand your first bundle.
        </p>
        <ul className="mt-5 space-y-2.5 text-sm">
          {freeIncludes.map((f) => (
            <li key={f} className="flex gap-2.5">
              <Check className="mt-0.5 size-4 shrink-0 text-[color:var(--brand-2)]" aria-hidden="true" />
              <span className="text-slate-700">{f}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/templates"
          search={{}}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95 transition"
        >
          Claim my free month
        </Link>
      </div>

      <div className="rounded-3xl border border-border bg-slate-50/70 p-7">
        <div className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
          After your free month
        </div>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight">
          ₹299 <span className="text-base font-medium text-muted-foreground">/ month</span>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Optional upgrade — continue only if the free month works for you.
        </p>
        <ul className="mt-5 space-y-2.5 text-sm">
          {paidIncludes.map((f) => (
            <li key={f} className="flex gap-2.5">
              <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              <span className="text-slate-700">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/919431011994?text=I%20want%20to%20know%20more%20about%20the%20%E2%82%B9299%20monthly%20template%20plan"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-2)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
        >
          Ask about the ₹299 plan
        </a>
      </div>
    </div>
  );
}
