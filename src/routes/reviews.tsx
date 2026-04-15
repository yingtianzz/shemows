import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import CTASection from "../components/CTASection";
import { Star, ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — She Mows | What Our Clients Say" },
      { name: "description", content: "Read reviews from happy She Mows clients across Reporoa, Taupō, Rotorua and Bay of Plenty." },
      { property: "og:title", content: "Reviews — She Mows" },
      { property: "og:description", content: "What our clients say about She Mows lawn and garden services." },
    ],
  }),
  component: ReviewsPage,
});

const testimonials = [
  { name: "Sarah Thompson", rating: 5, text: "Amanda and her team are absolutely fantastic! My lawn has never looked better. Reliable, friendly and always on time. I wouldn't use anyone else.", location: "Reporoa" },
  { name: "John Mitchell", rating: 5, text: "Been using She Mows for over a year now. Consistently great work and such a lovely team. Highly recommend to anyone in the area!", location: "Taupō" },
  { name: "Rachel King", rating: 5, text: "The before and after of my garden was incredible. They really go above and beyond. So happy with the results — my neighbours are jealous!", location: "Rotorua" },
  { name: "Mike Patterson", rating: 5, text: "Professional, punctual and the lawn always looks amazing. Best lawn service in the area by far. Very fair pricing too.", location: "Broadlands" },
  { name: "Lisa Walker", rating: 5, text: "We've tried other services but She Mows is by far the best. Amanda is so approachable and the work speaks for itself. Our garden has never looked better.", location: "Reporoa" },
  { name: "David Harrison", rating: 5, text: "Great communication, fair pricing and excellent results. What more could you ask for? Amanda and the team are legends.", location: "Bay of Plenty" },
];

function ReviewsPage() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20 mb-6">Reviews</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">What Our <span className="text-amber-300">Clients Say</span></h1>
            <p className="text-lg text-white/80 leading-relaxed">We're proud of the relationships we've built. Here's what our clients have to say about She Mows.</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-2xl font-heading font-bold text-white">5.0</span>
              <span className="text-white/60">on Facebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-sm border border-border relative hover:shadow-lg hover:-translate-y-1 transition-all">
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-lg">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <span className="font-semibold block">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Reviews Widget */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Facebook" title="Live Facebook Reviews" description="See what our clients are saying on Facebook." />
          <FacebookReviews />
        </div>
      </section>

      {/* Appreciation */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <img src="/images/team/client-appreciation.jpg" alt="She Mows team with clients" className="rounded-3xl shadow-2xl w-full object-cover aspect-auto max-h-[500px]" loading="lazy" />
            <div>
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />)}
              </div>
              <blockquote className="font-heading text-2xl sm:text-3xl font-bold leading-snug">
                "We feel incredibly lucky to work with such wonderful clients. Every kind word and review means the world to us."
              </blockquote>
              <p className="mt-6 text-muted-foreground text-lg">— Amanda Fitzgerald, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection title="Join Our Happy Clients" description="Get your free quote today and see why so many locals trust She Mows." />
    </>
  );
}
