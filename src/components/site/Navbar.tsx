import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import logo from "@/assets/elaro-mark.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/courses", label: "Courses" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 bg-white/95 backdrop-blur transition-all ${
            scrolled ? "border border-border shadow-[0_10px_30px_-12px_rgba(15,23,42,0.12)]" : "border border-border/70"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-1">
            <img
              src={logo.url}
              alt="ElaroDigital — Digital Marketing Agency"
              width={40}
              height={40}
              decoding="async"
              fetchPriority="high"
              className="h-9 w-9 rounded-lg"
            />
            <span className="font-display text-lg sm:text-xl tracking-tight">
              <span className="text-foreground">Elaro</span>
              <span className="text-brand italic">Digital</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-3 py-2 text-sm text-slate-600 hover:text-foreground rounded-full transition-colors"
                  activeProps={{ className: "text-brand" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/919431011994"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-2)] px-3.5 py-2 text-sm font-semibold text-white hover:opacity-95 transition"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-95 transition"
            >
              Free Audit <ArrowRight className="size-4" />
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden rounded-full p-2 hover:bg-slate-100"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="lg:hidden mt-2 rounded-3xl bg-white border border-border p-4 shadow-lg animate-fade-in">
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm hover:bg-slate-100"
                    activeProps={{ className: "text-brand" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/919431011994"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-[color:var(--brand-2)] px-4 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="size-4" /> WhatsApp Now
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Get Free Audit <ArrowRight className="size-4" />
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}