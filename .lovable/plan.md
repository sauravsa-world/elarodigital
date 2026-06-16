# Elarodital — Premium Digital Marketing Agency Website

A modern, dark-luxury, glassmorphism, high-converting marketing site for **Elarodital** (Bihar-based digital marketing agency). Homepage is fully focused on services + lead generation. Courses appear only as a nav link.

## Brand assets (provided)
- **Favicon logo** → uploaded image #1 (earlier)
- **Navbar logo** → uploaded image #2 (earlier)
- **Team photos**:
  - Saurav Kumar — Founder, Web Developer & Social Media Expert (navy blazer photo)
  - Piyush Kumar — SEO & Meta Ads Expert (maroon shirt photo)

Both logos and team photos will be uploaded to the CDN via `lovable-assets`.

## Design direction
- Dark luxury theme: near-black base, deep navy + soft gold/amber accent, subtle premium gradients
- Glassmorphism cards (blurred translucent surfaces + thin borders + soft glow)
- Modern typography: distinctive display serif/sans pair (e.g. Fraunces or Space Grotesk display + Inter body — not generic)
- Smooth scroll-triggered animations via Framer Motion (fades, parallax, stagger)
- Generous spacing, premium agency aesthetic
- Fully responsive, mobile-first, optimized for Core Web Vitals
- Semantic HTML, proper H1/H2/H3 hierarchy, JSON-LD schema, OG/Twitter meta, sitemap-ready

## Routes (TanStack Start file-based)
- `/` — Homepage (services + lead gen focus)
- `/about`
- `/services` (overview) + service detail routes:
  - `/services/seo`
  - `/services/social-media-marketing`
  - `/services/meta-ads`
  - `/services/google-ads`
  - `/services/website-development`
  - `/services/app-development`
  - `/services/graphic-design`
  - `/services/whatsapp-marketing`
  - `/services/lead-generation`
  - `/services/local-seo`
- `/portfolio`
- `/testimonials`
- `/courses` (nav link only — simple placeholder/landing)
- `/contact`
- `/blog` (placeholder index)

Each route has unique `head()` metadata (title, description, OG).

## Homepage sections (in order)
1. **Navbar** — glass, sticky, with logo, links (Home, About, Services dropdown, Portfolio, Courses, Blog, Contact), "Get Free Audit" CTA
2. **Hero** — H1 "Bihar's Premium Digital Marketing Agency That Drives Real Growth", subheading, dual CTAs (Book Free Strategy Call / WhatsApp), trust strip (200+ clients, 5★ avg, ROI stats), animated background
3. **Trusted-by / stats bar** — animated counters
4. **Services grid** — 10 glass cards with icons, hover glow, link to detail pages
5. **Why Choose Elarodital** — 6 differentiators with icons
6. **Process / How We Work** — 4-step timeline
7. **Results / Case studies** — 3 metric-driven cards
8. **Testimonials carousel** — all 10 testimonials, randomized ratings (mix of 5, 4.5, 4 stars for natural feel)
9. **Industries we serve** — schools, coaching, real estate, restaurants, retail, healthcare
10. **Team** — 2 real members (Saurav, Piyush) in glass cards with photo, name, role, socials
11. **FAQ** — accordion, 6–8 SEO-rich questions
12. **Lead-gen CTA section** — "Get Your Free Marketing Audit" with inline form (Name, Phone, Business, Service interested in, Message)
13. **Footer** — logo, services, quick links, contact (phone, email, WhatsApp, address), social, copyright

## SEO implementation
- H1 only on hero per page; H2 for section headings; H3 for cards
- Semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- JSON-LD: Organization + LocalBusiness on root, Service schema on service pages, FAQPage on FAQ, BreadcrumbList where applicable
- Keyword-rich copy targeting: Digital Marketing Agency in Bihar/Patna/India, SEO Services in Bihar, Social Media Marketing Agency, Meta Ads Expert, Google Ads, Website Development Company, App Development, Graphic Design, WhatsApp Marketing, Lead Generation Agency
- Alt text on all images, lazy loading, canonical tags via head()
- Mobile viewport meta, responsive images

## Lead-capture form
Frontend-only for now (toast on submit + console). When user enables Lovable Cloud later, we can wire it to a `leads` table + email notification.

## Tech / dependencies to add
- `framer-motion` for animations
- `lucide-react` (already present) for icons
- Google Fonts via `<link>` in root head (Fraunces + Inter, or similar premium pair)
- Tailwind v4 tokens added to `src/styles.css`: dark luxury palette, gold accent, glass surfaces, gradient & shadow tokens — all semantic, no hard-coded colors in components

## File plan
- `src/styles.css` — extend with dark-luxury design tokens (bg, surface, glass, gold accent, gradients, shadows, glow)
- `src/routes/__root.tsx` — add favicon link, fonts, default SEO, JSON-LD Organization
- `src/routes/index.tsx` — homepage composing section components
- `src/routes/about.tsx`, `services.tsx`, `services.$slug.tsx` (or individual files), `portfolio.tsx`, `testimonials.tsx`, `courses.tsx`, `contact.tsx`, `blog.tsx`
- `src/components/site/` — Navbar, Footer, Hero, ServicesGrid, WhyUs, Process, Results, Testimonials, Industries, Team, FAQ, LeadForm, GlassCard, AnimatedCounter, SectionHeading, JsonLd
- `src/data/` — services.ts, testimonials.ts, team.ts, faqs.ts
- `src/assets/` — `.asset.json` pointers for favicon, navbar logo, Saurav photo, Piyush photo

## Out of scope (for this build)
- Backend / database (no Lovable Cloud yet)
- Real blog posts (placeholder page only)
- Real course content (placeholder only)
- Auth

After approval I'll upload the 4 images to CDN, install framer-motion, set up design tokens, and build all routes + sections in one go.
