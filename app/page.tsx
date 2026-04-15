"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import AnnouncementBar from "@/src/components/AnnouncementBar";
import SectionHeading from "@/src/components/SectionHeading";
import FacebookReviews from "@/src/components/FacebookReviews";
import CTASection from "@/src/components/CTASection";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import { Scissors, Leaf, SprayCan, TreePine, Flower2, CheckCircle, ArrowRight, Star, Shield, Clock, Award, MapPin, Users, ThumbsUp, Phone, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";

const services = [
  { icon: Scissors, title: "Lawn Mowing", img: "/images/services/lawn-mowing.jpg", desc: "Regular professional mowing to keep your lawns pristine, healthy and looking their best all year round.", includes: ["Scheduled mowing", "Edge trimming", "Clipping removal"], link: "/services/lawn-mowing" },
  { icon: Leaf, title: "Weed Eating", img: "/images/services/weed-eating.jpg", desc: "Thorough weed eating for clean edges, fence lines and those hard-to-reach areas.", includes: ["Fence line clearing", "Path edging", "Bank work"], link: "/services" },
  { icon: Flower2, title: "Gardening", img: "/images/services/gardening.jpg", desc: "Complete garden maintenance including planting, weeding, mulching and ongoing care.", includes: ["Garden bed care", "Planting & mulching", "Seasonal clean-ups"], link: "/services/gardening" },
  { icon: SprayCan, title: "Spraying", img: "/images/services/spraying.jpg", desc: "Targeted spraying solutions for weeds, pests and unwanted growth.", includes: ["Weed spraying", "Pest control", "Eco options"], link: "/services" },
  { icon: TreePine, title: "Trimming", img: "/images/services/trimming.jpg", desc: "Hedge and tree trimming to keep your property tidy, safe and looking sharp.", includes: ["Hedge trimming", "Tree pruning", "Shape maintenance"], link: "/services" },
];

const stats = [
  { value: "500+", label: "Properties Serviced", icon: Users },
  { value: "5.0", label: "Star Facebook Rating", icon: Star },
  { value: "3+", label: "Years in Business", icon: Award },
  { value: "100%", label: "Satisfaction Rate", icon: ThumbsUp },
];

const whyChooseUs = [
  { icon: Shield, title: "Fully Insured", desc: "Complete peace of mind with full liability insurance on every job we undertake." },
  { icon: Clock, title: "Always On Time", desc: "We respect your schedule. Reliable, punctual service every single visit." },
  { icon: Award, title: "Quality Guaranteed", desc: "We&apos;re not happy until you are. Every job done to the highest standard." },
  { icon: Users, title: "Woman-Led Team", desc: "Proudly woman-led with a friendly, approachable and hardworking team." },
  { icon: MapPin, title: "Locally Owned", desc: "We&apos;re locals supporting locals across the Bay of Plenty region." },
  { icon: ThumbsUp, title: "Fair Pricing", desc: "Competitive, transparent pricing with no hidden fees or surprises." },
];

const faqs = [
  { q: "What areas do you service?", a: "We service Reporoa, Taupō, Rotorua, Broadlands and the wider Bay of Plenty region. If you&apos;re unsure whether we cover your area, give us a call and we&apos;ll let you know!" },
  { q: "How do I get a quote?", a: "Simply fill out our contact form, call us on +64 21 185 2793, or message us on WhatsApp. We&apos;ll get back to you with a free, no-obligation quote — usually within 24 hours." },
  { q: "Do you offer regular/scheduled services?", a: "Yes! Most of our clients are on regular schedules — weekly, fortnightly or monthly. We tailor the frequency to suit your property and budget." },
  { q: "What if it rains on my scheduled day?", a: "If the weather prevents us from completing the job, we&apos;ll reschedule to the next available day and keep you informed." },
  { q: "Do I need to be home when you come?", a: "Nope! As long as we have access to the property, we&apos;ll get the job done and send you photos when we&apos;re finished." },
  { q: "Are you insured?", a: "Yes, we carry full liability insurance for your peace of mind. Every job is covered." },
  { q: "What equipment do you use?", a: "We use professional-grade commercial equipment including ride-on mowers, push mowers, line trimmers, hedge trimmers and backpack sprayers — all well-maintained for the best results." },
  { q: "Do you remove green waste?", a: "Yes, we can remove green waste for an additional fee. Just let us know when you request your quote and we&apos;ll include it." },
];

const galleryImages = [
  "/images/gallery/gallery-1.jpg", "/images/gallery/gallery-2.jpg", "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg", "/images/gallery/gallery-5.jpg", "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg", "/images/gallery/gallery-8.jpg",
];

const reelIds = ["DUWhp8mk1yG", "DSD4wVvk-Wz", "DWnyTUbAdl7", "DVM0mARkldN", "DVH23Dxgd19", "DQP5AKtk6s9"];

const processSteps = [
  { step: "01", title: "Get in Touch", desc: "Call, WhatsApp or fill out our form for a free, no-obligation quote." },
  { step: "02", title: "We Visit & Quote", desc: "We assess your property and provide a fair, transparent quote — no hidden costs." },
  { step: "03", title: "We Get to Work", desc: "Our team arrives on time with professional equipment and gets the job done right." },
  { step: "04", title: "Enjoy Your Space", desc: "Sit back and enjoy your beautiful lawn and garden. We&apos;ll see you next visit!" },
];

export default function HomePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [galleryView, setGalleryView] = useState<"grid" | "carousel">("grid");

  return (
    <>
      <Header />
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-bg-premium.jpg" alt="Beautiful lawn and garden maintained by She Mows" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 w-full">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20">{"🌿 Locally Owned & Woman-Led"}</span>
              <span className="px-4 py-1.5 rounded-full bg-amber-400/20 backdrop-blur-md text-sm font-medium text-amber-300 border border-amber-400/30">⭐ 5.0 Star Rated</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-white mb-6">
              Professional Lawn &amp; Garden Care
              <span className="block text-amber-300 mt-2">You Can Trust</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
              Expert lawn mowing, gardening &amp; property maintenance across <strong className="text-white">Reporoa, Taupō, Rotorua</strong> and the Bay of Plenty. Trusted by 500+ local properties.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base hover:bg-accent transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/64211852793" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                <Phone className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70 text-sm">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> Free Quotes</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> Fully Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> No Lock-in Contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STATS ===== */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-2xl p-6 text-center shadow-xl border border-border hover:shadow-2xl transition-shadow">
                <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET AMANDA ===== */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img src="/images/team/team-1.jpg" alt="Amanda Fitzgerald, owner of She Mows" className="rounded-3xl object-cover w-full shadow-2xl aspect-auto max-h-[600px]" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-xl border border-border hidden md:block">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="font-semibold text-sm">5.0 Star Rating</p>
                <p className="text-xs text-muted-foreground">Based on Facebook Reviews</p>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">Meet the Owner</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                {"Hi, I'm Amanda 👋"}
                <br />
                <span className="text-primary">The Heart Behind She Mows</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>What started as a love for the outdoors has grown into a trusted local lawn and garden service. I&apos;m proud to lead a small, dedicated team that treats every property like our own.</p>
                <p>We&apos;re not a faceless franchise — we&apos;re your neighbours. We care about our community, and we care about doing a great job every single time.</p>
              </div>
              <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <img src="/images/logo/shemows-logo.jpg" alt="She Mows" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-heading font-bold">Amanda Fitzgerald</p>
                  <p className="text-sm text-muted-foreground">Founder & Owner — She Mows</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-secondary transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Services" title="Everything Your Garden Needs" description="From regular lawn mowing to full garden makeovers — professional services across Reporoa, Taupō, Rotorua & beyond." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s) => (
              <Link key={s.title} href={s.link} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1 block">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">{s.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors shadow-lg">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How It Works" title="Simple as 1-2-3-4" description="Getting your garden sorted has never been easier." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative p-8 rounded-2xl bg-card border border-border shadow-sm text-center group hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mx-auto mb-5 group-hover:scale-110 transition-transform">
                  {s.step}
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-border z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Why She Mows?" title="Why 500+ Properties Trust Us" description="Here&apos;s what sets us apart from the rest." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-5 p-7 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEFORE & AFTER ===== */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Transformations" title="See the Dramatic Difference" description="Real properties, real results. Swipe to see what our team can do." />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { before: "/images/before-after/before-1.jpg", after: "/images/before-after/after-1.jpg", title: "Complete Lawn Restoration", desc: "From overgrown and patchy to pristine and striped." },
              { before: "/images/before-after/before-2.jpg", after: "/images/before-after/after-2.jpg", title: "Garden Transformation", desc: "Wild and neglected to clean, tidy and beautiful." },
            ].map((pair) => (
              <div key={pair.title} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="p-6 pb-3">
                  <h3 className="font-heading font-bold text-xl">{pair.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pair.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4 pt-2">
                  <div className="relative rounded-xl overflow-hidden">
                    <img src={pair.before} alt={`Before - ${pair.title}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold tracking-wider uppercase shadow-lg">Before</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img src={pair.after} alt={`After - ${pair.title}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase shadow-lg">After</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-colors">
              View All Transformations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECT GALLERY ===== */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Work" title="Gallery of Beautiful Results" description="Check out some of our recent lawn and garden transformations." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors shadow-lg">
              View Full Gallery <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM REELS ===== */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Follow Our Work" title="Latest from Instagram" description="Stay updated with our latest projects and tips." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reelIds.map((id) => (
              <div key={id} className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <iframe
                  src={`https://www.instagram.com/p/${id}/embed/`}
                  width="100%"
                  height="600"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://www.instagram.com/_shemows_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors shadow-lg">
              Follow on Instagram <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Got Questions?" title="Frequently Asked Questions" description="Find answers to common questions about our services." />
          <div className="space-y-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg mb-3 overflow-hidden bg-card">
                  <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 transition-colors">
                    <span className="text-left font-semibold text-foreground">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection />

      <Footer />
      <AnnouncementBar />
      <WhatsAppButton />
    </>
  );
}
