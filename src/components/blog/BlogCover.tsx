const gradients: Record<string, string> = {
  seo: "from-indigo-600 via-indigo-500 to-sky-400",
  "local-seo": "from-emerald-600 via-teal-500 to-cyan-400",
  "paid-ads": "from-rose-600 via-orange-500 to-amber-400",
  "web-design": "from-violet-600 via-fuchsia-500 to-pink-400",
  "industry-marketing": "from-sky-700 via-blue-500 to-indigo-400",
  "growth-strategy": "from-amber-600 via-yellow-500 to-lime-400",
};

export function BlogCover({
  category,
  categoryName,
  alt,
  className = "aspect-[16/9]",
  label,
}: {
  category: string;
  categoryName: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const gradient = gradients[category] ?? gradients.seo;
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_45%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
          {categoryName}
        </span>
        {label ? (
          <span className="mt-1 line-clamp-2 font-display text-lg font-bold leading-snug text-white">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}