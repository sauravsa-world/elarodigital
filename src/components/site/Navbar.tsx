import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

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
          className={`flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 transition-all ${
            scrolled ? "glass-strong shadow-glow" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-1">
            <img src={logo.url} alt="Elarodital — Digital Marketing Agency" className="h-8 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground rounded-full transition-colors"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Free Audit <ArrowRight className="size-4" />
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden rounded-full p-2 hover:bg-white/5"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="lg:hidden mt-2 glass-strong rounded-3xl p-4 animate-fade-in">
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm hover:bg-white/5"
                    activeProps={{ className: "text-gold" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-gold px-4 py-3 text-sm font-medium text-primary-foreground"
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