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
      { name: "theme-color", content: "#0e1220" },
      { name: "author", content: "Elarodital" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Elarodital" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Elaro Digital | Digital Marketing Agency in Bihar" },
      { property: "og:title", content: "Elaro Digital | Digital Marketing Agency in Bihar" },
      { name: "twitter:title", content: "Elaro Digital | Digital Marketing Agency in Bihar" },
      { name: "description", content: "Looking for a Digital Marketing Agency in Bihar? Elaro Digital provides SEO Services, Website Development, Social Media Marketing, Meta Ads, Graphic Design, App" },
      { property: "og:description", content: "Looking for a Digital Marketing Agency in Bihar? Elaro Digital provides SEO Services, Website Development, Social Media Marketing, Meta Ads, Graphic Design, App" },
      { name: "twitter:description", content: "Looking for a Digital Marketing Agency in Bihar? Elaro Digital provides SEO Services, Website Development, Social Media Marketing, Meta Ads, Graphic Design, App" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hgGQFntifjMMefGsvzyoWEfWwa32/social-images/social-1782043893977-ChatGPT_Image_Jun_21,_2026,_05_40_15_PM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hgGQFntifjMMefGsvzyoWEfWwa32/social-images/social-1782043893977-ChatGPT_Image_Jun_21,_2026,_05_40_15_PM.webp" },
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
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap",
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
          alternateName: "Elarodital",
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
          sameAs: [],
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
