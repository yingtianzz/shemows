import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "She Mows — Lawn & Garden Services | Reporoa, Taupō, Rotorua",
  description:
    "Professional lawn mowing and garden maintenance services in Reporoa, Taupō, Rotorua, Broadlands & Bay of Plenty. Locally owned, woman-led, reliable service.",
  openGraph: {
    title: "She Mows — Lawn & Garden Services",
    description:
      "Professional lawn and garden services across Reporoa, Taupō, Rotorua & Bay of Plenty. Locally owned and woman-led.",
    type: "website",
    images: [
      {
        url: "/images/logo/shemows-logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff7b2c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "She Mows",
              description:
                "Professional lawn mowing and garden maintenance services",
              url: "https://shemows.co.nz",
              telephone: "+64211852793",
              email: "mandafitz@live.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Reporoa",
                addressRegion: "Bay of Plenty",
                addressCountry: "NZ",
                postalCode: "3081",
              },
              areaServed: [
                "Reporoa",
                "Taupō",
                "Rotorua",
                "Broadlands",
                "Bay of Plenty",
              ],
              image: "/images/logo/shemows-logo.jpg",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
