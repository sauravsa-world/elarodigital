import { Link } from "@tanstack/react-router";
import { ChevronRight, Home, Mail, MessageCircle, Phone, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SITE = "https://elarodigital.lovable.app";

export function Breadcrumbs({ items }: { items: { label: string; to?: string; params?: Record<string, string> }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-brand">
            <Home className="size-3.5" aria-hidden="true" /> Home
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} params={item.params as never} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? <ChevronRight className="size-3.5" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SocialShare({ slug, title, description }: { slug: string; title: string; description: string }) {
  const url = `${SITE}/blog/${slug}`;
  const text = `${title} — ${description}`;
  const links = [
    { label: "Share on WhatsApp", href: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}` },
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "Share on X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}` },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Share2 className="size-4" aria-hidden="true" /> Share
      </span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-brand hover:text-brand"
        >
          {l.label.replace("Share on ", "")}
        </a>
      ))}
      <button
        type="button"
        onClick={() => {
          void navigator.clipboard?.writeText(url).then(() => toast.success("Link copied"));
        }}
        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-brand hover:text-brand"
      >
        Copy link
      </button>
    </div>
  );
}

export function CtaBanner({
  heading,
  text,
  buttonLabel,
}: {
  heading: string;
  text: string;
  buttonLabel: string;
}) {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 px-6 py-10 sm:px-10">
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-indigo-50">{text}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="tel:+919431011994"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-transform hover:-translate-y-0.5"
        >
          <Phone className="size-4" aria-hidden="true" /> {buttonLabel}
        </a>
        <a
          href="https://wa.me/919431011994"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp us
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Get a free quote
        </Link>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("_subject", "New blog newsletter subscriber — ElaroDigital");
      body.append("source", "Blog newsletter");
      await fetch("https://formsubmit.co/ajax/elarodigitalagency@gmail.com", {
        method: "POST",
        body,
      });
      toast.success("You're subscribed. Check your inbox for our next guide.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please WhatsApp us at +91 94310 11994.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-3xl border border-border bg-white p-6 sm:p-8">
      <h2 className="inline-flex items-center gap-2 font-display text-xl font-bold">
        <Mail className="size-5 text-brand" aria-hidden="true" /> Get one practical marketing guide a month
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        SEO, Google Ads and local growth tactics written for Gaya, Patna and Bihar businesses. No spam.
      </p>
      <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-brand"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
        >
          {busy ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
    </section>
  );
}