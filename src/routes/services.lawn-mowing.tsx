import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import CTASection from "../components/CTASection";
import { ArrowRight, CheckCircle, Scissors, Star } from "lucide-react";

export const Route = createFileRoute("/services/lawn-mowing")({
  head: () => ({
    meta: [
      { title: "Lawn Mowing Services — She Mows | Reporoa, Taupō, Rotorua" },
      { name: "description", content: "Professional lawn mowing services in Reporoa, Taupō, Rotorua and Bay of Plenty. Regular mowing, edge trimming, and lawn care." },
      { property: "og:title", content: "Lawn Mowing — She Mows" },
      { property: "og:description", content: "Professional lawn mowing across the Bay of Plenty." },
    ],
  }),
  component: LawnMowingPage,
});

const includes = ["Regular scheduled mowing", "Edge trimming along paths & driveways", "Clipping removal or mulching", "Lawn health assessment", "Consistent cut height", "Obstacle-free mowing"];
const benefits = ["A pristine, striped finish every time", "Healthier, thicker lawn growth", "Consistent height for a professional look", "More free time to enjoy your weekends", "Increased property value and street appeal"];

function LawnMowingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src="/images/services/lawn-mowing.jpg" alt="Professional lawn mowing" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Scissors className="w-7 h-7 text-white" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20">Our Services</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Professional <span className="text-amber-300">Lawn Mowing</span></h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">Keep your lawn looking pristine, healthy and beautiful all year round with our professional mowing service. We use commercial-grade equipment for a perfect finish every time.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors shadow-lg">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included + Benefits */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-heading text-xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {includes.map(item => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-heading text-xl font-bold mb-6">Benefits</h3>
              <ul className="space-y-4">
                {benefits.map(item => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before After */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Results" title="See the Difference" description="Real before and after results from our lawn mowing service." />
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-2 p-4">
              <div className="relative rounded-xl overflow-hidden">
                <img src="/images/before-after/before-1.jpg" alt="Before mowing" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold uppercase shadow-lg">Before</span>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img src="/images/before-after/after-1.jpg" alt="After mowing" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase shadow-lg">After</span>
              </div>
            </div>
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
      <CTASection title="Ready for a Pristine Lawn?" description="Get a free, no-obligation quote for regular lawn mowing across Reporoa, Taupō, Rotorua and the Bay of Plenty." />
    </>
  );
}
