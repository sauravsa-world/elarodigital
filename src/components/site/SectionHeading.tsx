import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
          <span className="size-1.5 rounded-full bg-gold" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-5 text-4xl sm:text-5xl font-medium leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}