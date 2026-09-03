import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/site/PageShell";
import { templateCategories, categoryLabel } from "@/data/templateCategories";
import { useTemplateSelection } from "@/lib/template-selection";
import { submitTemplateRequest, uploadTemplateFile } from "@/lib/templates";

const TITLE = "Claim Your Free Template Bundle | Elaro Digital";
const DESCRIPTION =
  "Share your brand details and Elaro Digital will customise your free month of social media templates with your logo, colours, offers and contact details.";
const URL = "https://elarodigital.lovable.app/templates/request";

export const Route = createFileRoute("/templates/request")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: RequestPage,
});

const steps = ["Business details", "Brand details", "Content", "Images", "Instructions", "Review"] as const;

const businessSchema = z.object({
  businessName: z.string().trim().min(2, "Business name is required").max(120),
  category: z.string().trim().min(1, "Choose your business category"),
  phone: z.string().trim().regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
  whatsapp: z.string().trim().max(15).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  location: z.string().trim().min(2, "City / area is required").max(120),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  instagram: z.string().trim().max(255).optional().or(z.literal("")),
  facebook: z.string().trim().max(255).optional().or(z.literal("")),
});

const brandSchema = z.object({
  primaryColor: z.string().trim().max(40).optional().or(z.literal("")),
  secondaryColor: z.string().trim().max(40).optional().or(z.literal("")),
  fontPreference: z.string().trim().max(80).optional().or(z.literal("")),
  tagline: z.string().trim().max(160).optional().or(z.literal("")),
});

const contentSchema = z.object({
  products: z.string().trim().min(3, "Tell us what you sell").max(1000),
  usp: z.string().trim().max(600).optional().or(z.literal("")),
  offer: z.string().trim().max(300).optional().or(z.literal("")),
  cta: z.string().trim().max(120).optional().or(z.literal("")),
});

type FormState = {
  businessName: string;
  category: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  website: string;
  instagram: string;
  facebook: string;
  primaryColor: string;
  secondaryColor: string;
  fontPreference: string;
  tagline: string;
  products: string;
  usp: string;
  offer: string;
  cta: string;
  instructions: string;
};

const initialForm: FormState = {
  businessName: "",
  category: "",
  phone: "",
  whatsapp: "",
  email: "",
  location: "",
  website: "",
  instagram: "",
  facebook: "",
  primaryColor: "",
  secondaryColor: "",
  fontPreference: "",
  tagline: "",
  products: "",
  usp: "",
  offer: "",
  cta: "",
  instructions: "",
};

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand";

function Field({
  label,
  error,
  children,
  hint,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="font-semibold text-foreground">{label}</span>
      {children}
      {hint && !error ? <span className="mt-1 block text-xs text-muted-foreground">{hint}</span> : null}
      {error ? <span className="mt-1 block text-xs font-medium text-destructive">{error}</span> : null}
    </label>
  );
}

function RequestPage() {
  const { selected, clear } = useTemplateSelection();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [logo, setLogo] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validateStep = () => {
    const schema = step === 0 ? businessSchema : step === 1 ? brandSchema : step === 2 ? contentSchema : null;
    if (!schema) return true;
    const result = schema.safeParse(form);
    if (result.success) {
      setErrors({});
      return true;
    }
    const next: Record<string, string> = {};
    for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
    setErrors(next);
    return false;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      const folder = `${new Date().toISOString().slice(0, 10)}-${crypto.randomUUID()}`;
      const logoPath = logo ? await uploadTemplateFile(logo, folder) : null;
      const imagePaths: string[] = [];
      for (const file of images) imagePaths.push(await uploadTemplateFile(file, folder));

      await submitTemplateRequest({
        business_name: form.businessName,
        category: form.category,
        phone: form.phone,
        whatsapp: form.whatsapp || form.phone,
        email: form.email || null,
        website: form.website || null,
        location: form.location,
        social_links: {
          ...(form.instagram ? { instagram: form.instagram } : {}),
          ...(form.facebook ? { facebook: form.facebook } : {}),
        },
        logo_url: logoPath,
        brand_colors: {
          ...(form.primaryColor ? { primary: form.primaryColor } : {}),
          ...(form.secondaryColor ? { secondary: form.secondaryColor } : {}),
        },
        font_preference: form.fontPreference || null,
        tagline: form.tagline || null,
        products_services: {
          products: form.products,
          ...(form.usp ? { usp: form.usp } : {}),
        },
        offer: form.offer || null,
        cta: form.cta || null,
        uploaded_images: imagePaths,
        selected_templates: selected,
        special_instructions: form.instructions || null,
      });

      clear();
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("We couldn't submit your request. Please try again or message us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <PageShell>
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <CheckCircle2 className="mx-auto size-14 text-[color:var(--brand-2)]" aria-hidden="true" />
            <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Request received — your free bundle is on the way
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our design team will brand your templates and send them on WhatsApp within 24–48 hours. If we need any
              extra detail, we'll message you on {form.whatsapp || form.phone}.
            </p>
            <div className="mt-9 rounded-3xl border-2 border-brand bg-white p-7 text-left">
              <h2 className="font-display text-2xl font-bold">Want fresh templates every month?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Continue after your free month for ₹299/month — a full monthly set, priority customisation, captions and
                story/reel covers included.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919431011994?text=I%20want%20to%20upgrade%20to%20the%20%E2%82%B9299%20monthly%20template%20plan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)] px-5 py-3 text-sm font-semibold text-white"
                >
                  Upgrade for ₹299/month
                </a>
                <Link
                  to="/templates"
                  search={{ category: undefined }}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold"
                >
                  Back to templates
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Link to="/templates" search={{ category: undefined }} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            <ArrowLeft className="size-4" /> Back to template library
          </Link>
          <h1 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Tell us about your brand
          </h1>
          <p className="mt-3 text-muted-foreground">
            Step {step + 1} of {steps.length} — {steps[step]}. Your first month is free; no payment details needed.
          </p>

          <ol className="mt-7 flex flex-wrap gap-2" aria-label="Progress">
            {steps.map((s, i) => (
              <li
                key={s}
                aria-current={i === step ? "step" : undefined}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  i === step
                    ? "bg-brand text-primary-foreground"
                    : i < step
                      ? "bg-[color:var(--brand-2)]/10 text-[color:var(--brand-2)]"
                      : "bg-slate-100 text-slate-500"
                }`}
              >
                {i < step ? <Check className="mr-1 inline size-3" /> : null}
                {s}
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-3xl border border-border bg-white p-6 sm:p-8">
            {selected.length > 0 ? (
              <p className="mb-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-muted-foreground">
                {selected.length} template{selected.length > 1 ? "s" : ""} selected from the library.
              </p>
            ) : (
              <p className="mb-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-muted-foreground">
                No templates selected yet — we'll recommend the best set for your category, or{" "}
                <Link to="/templates" search={{ category: undefined }} className="font-semibold text-brand">pick your favourites</Link>.
              </p>
            )}

            {step === 0 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Business name *" error={errors.businessName}>
                  <input className={inputClass} value={form.businessName} onChange={set("businessName")} maxLength={120} />
                </Field>
                <Field label="Business category *" error={errors.category}>
                  <select className={inputClass} value={form.category} onChange={set("category")}>
                    <option value="">Select category</option>
                    {templateCategories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.label}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Phone number *" error={errors.phone}>
                  <input className={inputClass} value={form.phone} onChange={set("phone")} inputMode="tel" maxLength={15} />
                </Field>
                <Field label="WhatsApp number" hint="Leave blank if same as phone" error={errors.whatsapp}>
                  <input className={inputClass} value={form.whatsapp} onChange={set("whatsapp")} inputMode="tel" maxLength={15} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input className={inputClass} type="email" value={form.email} onChange={set("email")} maxLength={255} />
                </Field>
                <Field label="City / area *" error={errors.location}>
                  <input className={inputClass} value={form.location} onChange={set("location")} maxLength={120} />
                </Field>
                <Field label="Website" error={errors.website}>
                  <input className={inputClass} value={form.website} onChange={set("website")} maxLength={255} />
                </Field>
                <Field label="Instagram handle">
                  <input className={inputClass} value={form.instagram} onChange={set("instagram")} maxLength={255} />
                </Field>
                <Field label="Facebook page">
                  <input className={inputClass} value={form.facebook} onChange={set("facebook")} maxLength={255} />
                </Field>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Upload your logo" hint="PNG or JPG. Skip if you don't have one — we'll use your business name.">
                    <input
                      className={inputClass}
                      type="file"
                      accept="image/png,image/jpeg,image/webp,image/svg+xml"
                      onChange={(e) => setLogo(e.target.files?.[0] ?? null)}
                    />
                  </Field>
                </div>
                <Field label="Primary brand colour" hint="Colour name or hex code">
                  <input className={inputClass} value={form.primaryColor} onChange={set("primaryColor")} maxLength={40} />
                </Field>
                <Field label="Secondary brand colour">
                  <input className={inputClass} value={form.secondaryColor} onChange={set("secondaryColor")} maxLength={40} />
                </Field>
                <Field label="Font preference" hint="Modern, bold, elegant, handwritten…">
                  <input className={inputClass} value={form.fontPreference} onChange={set("fontPreference")} maxLength={80} />
                </Field>
                <Field label="Tagline / slogan">
                  <input className={inputClass} value={form.tagline} onChange={set("tagline")} maxLength={160} />
                </Field>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-5">
                <Field label="Products / services you want highlighted *" error={errors.products}>
                  <textarea className={inputClass} rows={4} value={form.products} onChange={set("products")} maxLength={1000} />
                </Field>
                <Field label="What makes you different?" error={errors.usp}>
                  <textarea className={inputClass} rows={3} value={form.usp} onChange={set("usp")} maxLength={600} />
                </Field>
                <Field label="Current offer or discount" hint="e.g. 20% off this week, free home delivery" error={errors.offer}>
                  <input className={inputClass} value={form.offer} onChange={set("offer")} maxLength={300} />
                </Field>
                <Field label="Preferred call to action" hint="Call now, Book appointment, Order on WhatsApp…" error={errors.cta}>
                  <input className={inputClass} value={form.cta} onChange={set("cta")} maxLength={120} />
                </Field>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="grid gap-5">
                <Field
                  label="Upload business images"
                  hint="Product photos, shop photos, staff or interior shots. You can select multiple files."
                >
                  <input
                    className={inputClass}
                    type="file"
                    multiple
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(e) => setImages(Array.from(e.target.files ?? []))}
                  />
                </Field>
                {images.length > 0 ? (
                  <ul className="grid gap-1.5 text-sm text-muted-foreground">
                    {images.map((f) => (
                      <li key={f.name}>• {f.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No images? No problem — we'll use premium stock visuals that suit your category.
                  </p>
                )}
              </div>
            ) : null}

            {step === 4 ? (
              <Field label="Special instructions" hint="Anything we should know — style you like, things to avoid, deadlines.">
                <textarea className={inputClass} rows={6} value={form.instructions} onChange={set("instructions")} maxLength={1000} />
              </Field>
            ) : null}

            {step === 5 ? (
              <div className="space-y-5 text-sm">
                <h2 className="font-display text-xl font-bold">Review your request</h2>
                <dl className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Business", form.businessName],
                    ["Category", form.category ? categoryLabel(form.category) : "—"],
                    ["Phone", form.phone],
                    ["WhatsApp", form.whatsapp || form.phone],
                    ["Email", form.email || "—"],
                    ["City / area", form.location],
                    ["Brand colours", [form.primaryColor, form.secondaryColor].filter(Boolean).join(", ") || "—"],
                    ["Font preference", form.fontPreference || "—"],
                    ["Tagline", form.tagline || "—"],
                    ["Offer", form.offer || "—"],
                    ["Call to action", form.cta || "—"],
                    ["Logo", logo ? logo.name : "Not uploaded"],
                    ["Images", images.length ? `${images.length} file(s)` : "None"],
                    ["Templates selected", selected.length ? String(selected.length) : "We'll recommend"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-slate-50 px-4 py-3">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{k}</dt>
                      <dd className="mt-1 break-words text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Products / services</p>
                  <p className="mt-1 whitespace-pre-line">{form.products || "—"}</p>
                </div>
                {form.instructions ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Special instructions</p>
                    <p className="mt-1 whitespace-pre-line">{form.instructions}</p>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold disabled:opacity-40"
              >
                <ArrowLeft className="size-4" /> Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95 transition"
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-2)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
                >
                  {submitting ? <Loader2 className="size-4 animate-spin" /> : null}
                  {submitting ? "Submitting…" : "Submit & claim free month"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
