import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import CTASection from "../components/CTASection";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — She Mows | Lawn & Garden Photos" },
      { name: "description", content: "Browse our gallery of lawn mowing and garden maintenance work across Reporoa, Taupō, Rotorua and Bay of Plenty." },
      { property: "og:title", content: "Gallery — She Mows" },
      { property: "og:description", content: "Photos of our lawn and garden work across Bay of Plenty." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  "/images/projects/project-1.jpg", "/images/projects/project-2.jpg", "/images/projects/project-3.jpg",
  "/images/gallery/gallery-1.jpg", "/images/gallery/gallery-2.jpg", "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg", "/images/gallery/gallery-5.jpg", "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg", "/images/gallery/gallery-8.jpg", "/images/gallery/gallery-9.jpg",
  "/images/gallery/gallery-10.jpg", "/images/gallery/gallery-11.jpg", "/images/gallery/gallery-12.jpg",
  "/images/gallery/gallery-13.jpg", "/images/gallery/gallery-14.jpg", "/images/gallery/gallery-15.jpg",
  "/images/before-after/before-1.jpg", "/images/before-after/after-1.jpg",
  "/images/before-after/before-2.jpg", "/images/before-after/after-2.jpg",
];

function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src="/images/hero-bg-premium.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20 mb-6">Gallery</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Our Work in <span className="text-amber-300">Pictures</span></h1>
            <p className="text-lg text-white/80 leading-relaxed">A selection of our lawn and garden projects across the Bay of Plenty. Click any image to view full size.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="block w-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all break-inside-avoid cursor-pointer group relative"
              >
                <img src={src} alt={`She Mows gallery photo ${i + 1}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Follow Us" title="Latest from Instagram" description="Follow @_shemows_ for the latest updates, tips and transformations." />
          <div className="flex justify-center">
            <iframe
              src="https://www.instagram.com/_shemows_/embed/"
              className="w-full max-w-lg h-[600px] border-0 rounded-2xl shadow-lg"
              loading="lazy"
              allowFullScreen
              title="She Mows Instagram Feed"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Reviews" title="What Our Clients Say" />
          <FacebookReviews compact />
        </div>
      </section>

      {/* CTA */}
      <CTASection title="Like What You See?" description="Get a free quote and let us transform your garden too." />

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors" aria-label="Close lightbox">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : images.length - 1); }} className="absolute left-4 text-white text-4xl font-bold hover:text-white/70 transition-colors" aria-label="Previous">‹</button>
          <img src={images[lightbox]} alt={`Gallery ${lightbox + 1}`} className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < images.length - 1 ? lightbox + 1 : 0); }} className="absolute right-4 text-white text-4xl font-bold hover:text-white/70 transition-colors" aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
