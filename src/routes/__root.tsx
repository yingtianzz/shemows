import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-heading">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-accent transition-colors">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "She Mows — Lawn & Garden Services | Reporoa, Taupō, Rotorua" },
      { name: "description", content: "Professional lawn mowing and garden maintenance services in Reporoa, Taupō, Rotorua, Broadlands & Bay of Plenty. Locally owned, woman-led, reliable service." },
      { name: "author", content: "She Mows" },
      { property: "og:title", content: "She Mows — Lawn & Garden Services" },
      { property: "og:description", content: "Professional lawn and garden services across Reporoa, Taupō, Rotorua & Bay of Plenty. Locally owned and woman-led." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/logo/shemows-logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/images/logo/shemows-logo.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "She Mows",
          "description": "Professional lawn mowing and garden maintenance services",
          "url": "https://shemows.co.nz",
          "telephone": "+64211852793",
          "email": "mandafitz@live.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Reporoa",
            "addressRegion": "Bay of Plenty",
            "addressCountry": "NZ",
            "postalCode": "3081"
          },
          "areaServed": ["Reporoa", "Taupō", "Rotorua", "Broadlands", "Bay of Plenty"],
          "image": "/images/logo/shemows-logo.jpg",
          "priceRange": "$$"
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
