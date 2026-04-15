import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import CTASection from "../components/CTASection";
import { ArrowRight, Heart, Users, MapPin, Shield, Clock, Award, Target, Eye, Handshake, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About She Mows — Woman-Led Lawn & Garden Services" },
      { name: "description", content: "Meet Amanda Fitzgerald and the She Mows team. Locally owned, woman-led lawn and garden services in Reporoa, Bay of Plenty." },
      { property: "og:title", content: "About She Mows" },
      { property: "og:description", content: "Locally owned, woman-led lawn and garden services in Reporoa, Bay of Plenty." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2021", title: "The Beginning", desc: "She Mows was founded by Amanda Fitzgerald with a passion for outdoor spaces and a commitment to reliable, quality service." },
  { year: "2022", title: "Growing Strong", desc: "Word spread quickly and the team expanded to cover more properties across Reporoa and surrounding areas." },
  { year: "2023", title: "Bay of Plenty", desc: "Services expanded to Taupō, Rotorua, Broadlands and the wider Bay of Plenty region." },
  { year: "2024", title: "500+ Properties", desc: "Now proudly servicing over 500 properties with a growing team and a 5.0 star Facebook rating." },
];

const values = [
  { icon: Heart, title: "Passion", desc: "We genuinely love what we do. Every lawn and garden we tend is done with care and pride." },
  { icon: Users, title: "Community", desc: "We're locals supporting locals. We care about our community and giving back where we can." },
  { icon: MapPin, title: "Local Knowledge", desc: "We understand the climate, soils, and challenges unique to the Bay of Plenty region." },
  { icon: Shield, title: "Reliability", desc: "We show up on time, every time. You can count on us to keep your property looking great." },
  { icon: Eye, title: "Attention to Detail", desc: "From clean edges to tidy garden beds, we notice the little things that make a big difference." },
  { icon: Handshake, title: "Trust", desc: "We build genuine relationships with our clients. Your property is safe in our hands." },
];

function AboutPage() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20 mb-6">About Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Keeping the Bay of Plenty <span className="text-amber-300">Looking Its Best</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              At She Mows, we're passionate about keeping Reporoa and the Bay of Plenty looking its best — one lawn at a time. Proudly woman-led and community-focused.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide honest, reliable lawn and garden services that locals can trust — treating every property like our own." },
              { icon: Eye, title: "Our Vision", desc: "To be the most trusted lawn and garden service in the Bay of Plenty, known for quality, reliability and community spirit." },
              { icon: Heart, title: "Our Promise", desc: "We'll always be friendly, fair and transparent. No hidden fees, no surprises — just great work, every time." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Amanda */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading label="Meet Amanda" title="The Heart Behind She Mows" centered={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>Amanda Fitzgerald founded She Mows with a simple goal: to provide friendly, reliable lawn and garden services that locals can trust.</p>
                <p>Based in Reporoa and serving the wider Bay of Plenty, Amanda and her team bring professionalism, warmth, and a genuine love of the outdoors to every job.</p>
                <p className="italic border-l-4 border-primary pl-4">"I believe in honest work and treating every property like it's my own. Our clients aren't just customers — they're our neighbours and friends."</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {["500+ Properties", "5.0 Star Rating", "3+ Years", "100% Insured"].map(stat => (
                  <div key={stat} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {stat}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img src="/images/team/team-1.jpg" alt="Amanda Fitzgerald" className="rounded-3xl object-cover w-full shadow-2xl aspect-auto max-h-[550px]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Values" title="What Drives Us Every Day" description="These aren't just words on a page — they're how we run our business." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 p-7 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Journey" title="How We Got Here" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm shrink-0 shadow-lg">{t.year}</div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-lg font-bold mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Images */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="The Team" title="Meet the She Mows Crew" description="A friendly, hardworking team that takes pride in every job." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/images/team/team-1.jpg" alt="She Mows team" className="rounded-2xl object-cover w-full aspect-auto max-h-[400px] shadow-lg" loading="lazy" />
            <img src="/images/team/team-2.jpg" alt="She Mows at work" className="rounded-2xl object-cover w-full aspect-auto max-h-[400px] shadow-lg" loading="lazy" />
            <img src="/images/team/team-3.jpg" alt="She Mows team" className="rounded-2xl object-cover w-full aspect-auto max-h-[400px] shadow-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Reviews" title="What Our Clients Say" />
          <FacebookReviews compact />
        </div>
      </section>

      {/* CTA */}
      <CTASection title="Ready to Work With Us?" description="Get a free, no-obligation quote today. We'd love to help keep your property looking its best!" />
    </>
  );
}
