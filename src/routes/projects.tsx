import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import CTASection from "../components/CTASection";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — She Mows | Lawn & Garden Transformations" },
      { name: "description", content: "View our latest lawn and garden projects across Reporoa, Taupō, Rotorua and Bay of Plenty." },
      { property: "og:title", content: "Projects — She Mows" },
      { property: "og:description", content: "See our lawn and garden transformations across Bay of Plenty." },
    ],
  }),
  component: ProjectsPage,
});

const featuredProjects = [
  { image: "/images/projects/project-1.jpg", title: "700m Cryptomeria Shelterbelt", desc: "700 metres of Cryptomeria planted and settling in beautifully. These hardy evergreens will grow into a tall, dense shelterbelt — perfect for providing protection and greenery year-round." },
  { image: "/images/projects/project-2.jpg", title: "Sharp Blade Finish", desc: "Can't beat the finish of a sharp blade! Clean, professional results every time." },
  { image: "/images/projects/project-3.jpg", title: "Mid-January Perfection", desc: "How can this possibly be a middle of January lawn! Consistent care makes all the difference." },
];

const galleryImages = [
  "/images/gallery/gallery-1.jpg", "/images/gallery/gallery-2.jpg", "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg", "/images/gallery/gallery-5.jpg", "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg", "/images/gallery/gallery-8.jpg", "/images/gallery/gallery-9.jpg",
];

function ProjectsPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const allImages = [...featuredProjects.map(p => p.image), ...galleryImages];

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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20 mb-6">Our Projects</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Lawn & Garden <span className="text-amber-300">Transformations</span></h1>
            <p className="text-lg text-white/80 leading-relaxed">Browse our recent work across Reporoa, Taupō, Rotorua and the Bay of Plenty. Real properties, real results.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Featured" title="Spotlight Projects" />
          <div className="space-y-20">
            {featuredProjects.map((p, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:*:[direction:ltr]" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl cursor-pointer group" onClick={() => setLightbox(i)}>
                  <img src={p.image} alt={p.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Before & After" title="See the Difference" description="Real properties, real transformations." />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { before: "/images/before-after/before-1.jpg", after: "/images/before-after/after-1.jpg", title: "Lawn Restoration" },
              { before: "/images/before-after/before-2.jpg", after: "/images/before-after/after-2.jpg", title: "Garden Transformation" },
            ].map((pair) => (
              <div key={pair.title} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                <div className="p-6 pb-3">
                  <h3 className="font-heading font-bold text-xl">{pair.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4 pt-2">
                  <div className="relative rounded-xl overflow-hidden">
                    <img src={pair.before} alt="Before" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold uppercase shadow-lg">Before</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img src={pair.after} alt="After" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase shadow-lg">After</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="More Work" title="Project Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group relative" onClick={() => setLightbox(featuredProjects.length + i)}>
                <img src={src} alt={`She Mows project ${i + 1}`} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Watch Us Work" title="Video Showcase" description="Real footage from real jobs." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["DUWhp8mk1yG", "DSD4wVvk-Wz", "DWnyTUbAdl7"].map((id) => (
              <div key={id} className="rounded-2xl overflow-hidden shadow-lg aspect-[9/16] bg-muted border border-border">
                <iframe src={`https://www.instagram.com/reel/${id}/embed/`} className="w-full h-full border-0" loading="lazy" allowFullScreen title="She Mows Reel" />
              </div>
            ))}
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
      <CTASection title="Want Results Like These?" description="Get a free quote and let us transform your property too." />

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors" aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : allImages.length - 1); }} className="absolute left-4 text-white text-4xl font-bold hover:text-white/70" aria-label="Previous">‹</button>
          <img src={allImages[lightbox]} alt={`Project ${lightbox + 1}`} className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < allImages.length - 1 ? lightbox + 1 : 0); }} className="absolute right-4 text-white text-4xl font-bold hover:text-white/70" aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
