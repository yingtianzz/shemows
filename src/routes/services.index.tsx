import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import CTASection from "../components/CTASection";
import { Scissors, Leaf, SprayCan, TreePine, Flower2, ArrowRight, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Lawn & Garden Services — She Mows | Reporoa, Taupō, Rotorua" },
      { name: "description", content: "Professional lawn mowing, weed eating, gardening, spraying and trimming services across Reporoa, Taupō, Rotorua and Bay of Plenty." },
      { property: "og:title", content: "Lawn & Garden Services — She Mows" },
      { property: "og:description", content: "Full range of lawn and garden maintenance services in the Bay of Plenty." },
    ],
  }),
  component: ServicesPage,
});

const allServices = [
  {
    icon: Scissors, title: "Lawn Mowing", slug: "lawn-mowing", img: "/images/services/lawn-mowing.jpg",
    desc: "Regular professional mowing to keep your lawns pristine, healthy and looking their best all year round. We use commercial-grade equipment for a perfect finish every time.",
    includes: ["Regular scheduled mowing", "Edge trimming", "Clipping removal", "Lawn health assessment"],
    benefits: ["Pristine striped finish", "Consistent cutting height", "Healthier, thicker lawn growth"],
    hasPage: true,
  },
  {
    icon: Leaf, title: "Weed Eating", slug: "weed-eating", img: "/images/services/weed-eating.jpg",
    desc: "Thorough weed eating for clean edges, fence lines, paths and those hard-to-reach areas your mower can't handle.",
    includes: ["Fence line clearing", "Path edging", "Around obstacles", "Bank and slope work"],
    benefits: ["Clean, defined edges", "Professional appearance", "Hard-to-reach areas covered"],
    hasPage: false,
  },
  {
    icon: Flower2, title: "Gardening", slug: "gardening", img: "/images/services/gardening.jpg",
    desc: "Complete garden maintenance including planting, weeding, mulching and ongoing care for beautiful outdoor spaces.",
    includes: ["Garden bed maintenance", "Planting & mulching", "Weed removal", "Seasonal clean-ups"],
    benefits: ["Year-round colour", "Weed-free beds", "Healthy soil and plants"],
    hasPage: true,
  },
  {
    icon: SprayCan, title: "Spraying", slug: "spraying", img: "/images/services/spraying.jpg",
    desc: "Targeted spraying solutions for weeds, pests and unwanted growth to keep your property clean and tidy.",
    includes: ["Weed spraying", "Pest control", "Targeted application", "Eco-conscious options"],
    benefits: ["Long-lasting results", "Environmentally responsible", "Problem areas eliminated"],
    hasPage: false,
  },
  {
    icon: TreePine, title: "Trimming", slug: "trimming", img: "/images/services/trimming.jpg",
    desc: "Hedge and tree trimming services to keep your property tidy, safe and looking sharp year-round.",
    includes: ["Hedge trimming", "Small tree pruning", "Shape maintenance", "Green waste removal"],
    benefits: ["Sharp, clean lines", "Improved property appeal", "Healthier hedge growth"],
    hasPage: false,
  },
];

function ServicesPage() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20 mb-6">Our Services</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Everything Your <span className="text-amber-300">Garden Needs</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">From regular lawn mowing to full garden makeovers across Reporoa, Taupō, Rotorua and the Bay of Plenty.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {allServices.map((s, i) => (
              <div key={s.slug} className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:*:[direction:ltr]" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl group">
                  <img src={s.img} alt={s.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{s.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">What's Included</h4>
                      <ul className="space-y-2">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">Benefits</h4>
                      <ul className="space-y-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-accent transition-colors">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    {s.slug === "lawn-mowing" && (
                      <Link to="/services/lawn-mowing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-secondary transition-colors">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                    {s.slug === "gardening" && (
                      <Link to="/services/gardening" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-secondary transition-colors">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="See Us in Action" title="Watch Our Work" description="Real footage from real jobs across the Bay of Plenty." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["DVM0mARkldN", "DVH23Dxgd19", "DQP5AKtk6s9"].map((id) => (
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
      <CTASection title="Need a Hand With Your Garden?" description="Get in touch for a free, no-obligation quote. We'd love to help keep your property looking its best!" />
    </>
  );
}
