import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import favicon from "../assets/favicon.png.asset.json";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f8fafc" },
      { name: "author", content: "ElaroDigital" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ElaroDigital" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Elaro Digital | Digital Marketing Agency in Bihar" },
      { property: "og:title", content: "Elaro Digital | Digital Marketing Agency in Bihar" },
      { name: "twitter:title", content: "Elaro Digital | Digital Marketing Agency in Bihar" },
      { name: "description", content: "Elaro Digital is a results-driven digital marketing agency in Bihar offering SEO, Meta Ads, Google Ads, websites and lead generation for local businesses." },
      { property: "og:description", content: "Results-driven SEO, ads, websites and lead generation for businesses across Bihar and India." },
      { name: "twitter:description", content: "Results-driven SEO, ads, websites and lead generation for businesses across Bihar and India." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hgGQFntifjMMefGsvzyoWEfWwa32/social-images/social-1782043893977-ChatGPT_Image_Jun_21,_2026,_05_40_15_PM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hgGQFntifjMMefGsvzyoWEfWwa32/social-images/social-1782043893977-ChatGPT_Image_Jun_21,_2026,_05_40_15_PM.webp" },
   { name: "google-site-verification", content: "yNbHtrM-nzLXbKLoAujC-ORONFMJIT-_IKsUPkbw2zg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: favicon.url },
      { rel: "apple-touch-icon", href: favicon.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://elarodigital.lovable.app/#organization",
          name: "Elaro Digital",
          alternateName: "ElaroDigital",
          url: "https://elarodigital.lovable.app",
          logo: favicon.url,
          image: favicon.url,
          telephone: "+91-9431011994",
          email: "elarodigitalagency@gmail.com",
          priceRange: "₹₹",
          description:
            "Elaro Digital is a premium digital marketing agency in Bihar, India serving Patna, Gaya, Muzaffarpur, Darbhanga, Bhagalpur and Purnia with SEO, Local SEO, Social Media Marketing, Meta Ads, Google Ads, Website Development, App Development, Graphic Design, WhatsApp Marketing and Lead Generation.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Powerganj, Bairagi",
            addressLocality: "Gaya",
            addressRegion: "Bihar",
            postalCode: "823001",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "State", name: "Bihar" },
            { "@type": "City", name: "Patna" },
            { "@type": "City", name: "Gaya" },
            { "@type": "City", name: "Muzaffarpur" },
            { "@type": "City", name: "Darbhanga" },
            { "@type": "City", name: "Bhagalpur" },
            { "@type": "City", name: "Purnia" },
            { "@type": "Country", name: "India" },
          ],
          sameAs: [
            "https://www.instagram.com/elarodigitalagency.in/",
            "https://www.facebook.com/Elarodigitalagency",
            "https://www.linkedin.com/in/elarodigitalagency-baa08a3b1/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://elarodigital.lovable.app/#elaro-organization",
          name: "Elaro Digital",
          alternateName: "ElaroDigital",
          url: "https://elarodigital.lovable.app",
          logo: {
            "@type": "ImageObject",
            url: favicon.url,
          },
          email: "elarodigitalagency@gmail.com",
          foundingLocation: { "@type": "Place", name: "Gaya, Bihar, India" },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91-9431011994",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Powerganj, Bairagi",
            addressLocality: "Gaya",
            addressRegion: "Bihar",
            postalCode: "823001",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.instagram.com/elarodigitalagency.in/",
            "https://www.facebook.com/Elarodigitalagency",
            "https://www.linkedin.com/in/elarodigitalagency-baa08a3b1/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://elarodigital.lovable.app/#website",
          url: "https://elarodigital.lovable.app",
          name: "Elaro Digital",
          inLanguage: "en-IN",
          description:
            "Digital marketing agency in Bihar offering SEO, Google Ads, Meta Ads, website development and lead generation.",
          publisher: { "@id": "https://elarodigital.lovable.app/#organization" },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://elarodigital.lovable.app/blog?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
