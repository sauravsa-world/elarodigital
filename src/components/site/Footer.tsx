import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin, type LucideIcon } from "lucide-react";
import logo from "@/assets/elaro-mark.png.asset.json";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src={logo.url}
                alt="Elaro Digital — digital marketing agency in Bihar logo"
              width={44}
              height={44}
                loading="lazy"
                decoding="async"
                className="h-11 w-11 rounded-lg"
              />
            </Link>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Elarodital is a premium digital marketing agency in Bihar building brands, websites and lead-generation systems that drive measurable growth.
            </p>
            <div className="mt-6 flex gap-2">
              {([
                { Icon: Instagram, label: "Follow Elaro Digital on Instagram", href: "https://www.instagram.com/elarodigital" },
                { Icon: Facebook, label: "Follow Elaro Digital on Facebook", href: "https://www.facebook.com/elarodigital" },
                { Icon: Linkedin, label: "Connect with Elaro Digital on LinkedIn", href: "https://www.linkedin.com/company/elarodigital" },
                { Icon: Youtube, label: "Subscribe to Elaro Digital on YouTube", href: "https://www.youtube.com/@elarodigital" },
              ] as { Icon: LucideIcon; label: string; href: string }[]).map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid place-items-center size-10 rounded-full border border-border bg-white hover:text-brand transition"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Services</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="hover:text-foreground transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Company</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition">Portfolio</Link></li>
              <li><Link to="/testimonials" className="hover:text-foreground transition">Testimonials</Link></li>
              <li><Link to="/courses" className="hover:text-foreground transition">Courses</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-gold" /> <a href="tel:+919431011994" className="hover:text-foreground">+91 94310 11994 (WhatsApp)</a></li>
              <li className="flex items-start gap-3"><Mail className="size-4 mt-0.5 text-gold" /> <a href="mailto:elarodigitalagency@gmail.com" className="hover:text-foreground">elarodigitalagency@gmail.com</a></li>
              <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-gold" /> Powerganj, Bairagi, Gaya, Bihar</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Elarodital. All rights reserved.</p>
          <p>Crafted in Bihar · Built for growth</p>
        </div>
      </div>
    </footer>
  );
}