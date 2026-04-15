import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import CTASection from "../components/CTASection";
import { ArrowRight, CheckCircle, Flower2 } from "lucide-react";

export const Route = createFileRoute("/services/gardening")({
  head: () => ({
    meta: [
      { title: "Gardening Services — She Mows | Reporoa, Taupō, Rotorua" },
      { name: "description", content: "Professional gardening services including planting, weeding, mulching and garden maintenance in Reporoa, Taupō, Rotorua and Bay of Plenty." },
      { property: "og:title", content: "Gardening — She Mows" },
      { property: "og:description", content: "Complete garden maintenance across the Bay of Plenty." },
    ],
  }),
  component: GardeningPage,
});

const includes = ["Garden bed maintenance", "Planting & transplanting", "Mulching & soil prep", "Weed removal", "Seasonal clean-ups", "Garden design advice"];
const benefits = ["Year-round colour and beauty", "Weed-free, tidy garden beds", "Healthy soil and thriving plants", "Expert advice on plant selection", "Increased property value"];

function GardeningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src="/images/services/gardening.jpg" alt="Garden maintenance" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Flower2 className="w-7 h-7 text-white" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20">Our Services</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Professional <span className="text-amber-300">Gardening</span></h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">From planting to pruning, we handle everything so you can enjoy your outdoor spaces. Complete garden maintenance for beautiful, thriving gardens.</p>
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

      {/* Featured Project */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/projects/project-1.jpg" alt="Cryptomeria shelterbelt planting" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div>
              <SectionHeading label="Featured Project" title="700m Cryptomeria Shelterbelt" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">700 metres of Cryptomeria planted and settling in beautifully. These hardy evergreens will grow into a tall, dense shelterbelt — perfect for providing protection and greenery year-round.</p>
              <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
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
      <CTASection title="Ready for a Beautiful Garden?" description="Get a free, no-obligation quote for gardening services across Reporoa, Taupō, Rotorua and the Bay of Plenty." />
    </>
  );
}
