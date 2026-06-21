import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Star, Sparkles, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 radial-gold opacity-80 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gold/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em]"
        >
          <Sparkles className="size-3.5 text-gold" />
          Bihar's Premium Digital Marketing Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-7 text-4xl sm:text-6xl lg:text-[72px] font-medium leading-[1.02] tracking-tight"
        >
          Grow Your Business with{" "}
          <span className="gold-gradient-text italic font-normal">Results-Driven</span>{" "}
          Digital Marketing Services in Bihar & India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-7 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          We help businesses generate more leads, increase sales, improve online visibility and scale faster through SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, App Development, WhatsApp Marketing, Graphic Design and Lead Generation services across Patna, Muzaffarpur, Gaya, Darbhanga, Bhagalpur, Purnia and all over India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
          >
            Get Free Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            hash="quote"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:text-gold transition"
          >
            <FileText className="size-4" /> Request Quote
          </Link>
          <a
            href="https://wa.me/919431011994"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:text-gold transition"
          >
            <MessageCircle className="size-4" /> WhatsApp Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <span>4.9 / 5 average from 200+ clients</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <span>50M+ ad spend managed</span>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <span>10x average ROAS</span>
        </motion.div>
      </div>
    </section>
  );
}