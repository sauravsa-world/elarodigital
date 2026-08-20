import { templateCategories } from "@/data/templateCategories";

function accentFor(category: string) {
  return templateCategories.find((c) => c.slug === category)?.accent ?? "from-indigo-600/85 to-violet-600/85";
}

/** Lightweight CSS-only preview so the library stays fast and needs no image assets. */
export function TemplateMockup({
  category,
  type,
  name,
  ratio = "square",
}: {
  category: string;
  type: string;
  name: string;
  ratio?: "square" | "story";
}) {
  const isStory = ratio === "story" || type.toLowerCase().includes("story");
  const label = templateCategories.find((c) => c.slug === category)?.label ?? category;

  return (
    <div
      role="img"
      aria-label={`${name} — ${label} ${type} template preview`}
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${accentFor(category)} ${
        isStory ? "aspect-[9/16]" : "aspect-square"
      }`}
    >
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_25%_20%,white,transparent_55%)]" />
      <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
          <span>Your Logo</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5">{type}</span>
        </div>
        <div>
          <div className="h-2 w-10 rounded-full bg-white/70" />
          <p className="mt-3 font-display text-lg sm:text-2xl font-bold leading-tight text-white">{label}</p>
          <p className="mt-1 text-xs text-white/85">Your headline goes here</p>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-4/5 rounded-full bg-white/45" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/30" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-slate-900">Book Now</span>
          <span className="text-[10px] text-white/85">+91 94310 11994</span>
        </div>
      </div>
    </div>
  );
}