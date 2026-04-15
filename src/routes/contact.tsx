import { createFileRoute, Link } from "@tanstack/react-router";
import SectionHeading from "../components/SectionHeading";
import FacebookReviews from "../components/FacebookReviews";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, ArrowRight, Shield, Star } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact She Mows — Get a Free Quote" },
      { name: "description", content: "Get a free lawn and garden quote from She Mows. Phone, email or fill out our contact form. Serving Reporoa, Taupō, Rotorua and Bay of Plenty." },
      { property: "og:title", content: "Contact She Mows" },
      { property: "og:description", content: "Get a free quote for lawn and garden services in Bay of Plenty." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

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
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20 mb-6">Contact Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Get Your <span className="text-amber-300">Free Quote</span> Today</h1>
            <p className="text-lg text-white/80 leading-relaxed">Fill out the form below, give us a call, or message us on WhatsApp. We typically respond within 24 hours.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> Free Quotes</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> No Obligation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> 24hr Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-secondary rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-2">Thanks! We'll be in touch shortly.</h3>
                  <p className="text-muted-foreground">We typically respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-1">Send Us a Message</h3>
                    <p className="text-sm text-muted-foreground">We'll get back to you with a free quote — usually within 24 hours.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                      <input type="text" id="name" name="name" required maxLength={100} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                      <input type="email" id="email" name="email" required maxLength={255} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
                      <input type="tel" id="phone" name="phone" maxLength={20} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="+64 21 ..." />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2">Service Required</label>
                      <select id="service" name="service" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all">
                        <option value="">Select a service</option>
                        <option value="Lawn Mowing">Lawn Mowing</option>
                        <option value="Weed Eating">Weed Eating</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Spraying">Spraying</option>
                        <option value="Trimming">Trimming</option>
                        <option value="Multiple Services">Multiple Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={5} maxLength={1000} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your property and what you need..." />
                  </div>
                  <button type="submit" disabled={loading} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors disabled:opacity-50 shadow-lg text-base">
                    <Send className="w-5 h-5" /> {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/images/logo/shemows-logo.jpg" alt="She Mows" className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <h3 className="font-heading text-xl font-bold">She Mows</h3>
                    <p className="text-sm text-muted-foreground">Lawn & Garden Services</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  <li>
                    <a href="tel:+64211852793" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
                      <div><span className="block text-xs text-muted-foreground">Phone / WhatsApp</span><span className="font-semibold">+64 21 185 2793</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mandafitz@live.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                      <div><span className="block text-xs text-muted-foreground">Email</span><span className="font-semibold">mandafitz@live.com</span></div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                      <div><span className="block text-xs text-muted-foreground">Location</span><span className="font-semibold">Reporoa, Bay of Plenty, NZ</span></div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                      <div><span className="block text-xs text-muted-foreground">Response Time</span><span className="font-semibold">Within 24 hours</span></div>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <a href="https://wa.me/64211852793" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors w-full">
                    <Phone className="w-4 h-4" /> Message on WhatsApp
                  </a>
                  <a href="tel:+64211852793" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-secondary transition-colors w-full">
                    <Phone className="w-4 h-4" /> Call Us Now
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h4 className="font-heading font-bold">Why Contact Us?</h4>
                </div>
                <ul className="space-y-2">
                  {["Free, no-obligation quotes", "Fast response — usually within 24 hours", "Friendly, local team", "Fully insured & reliable", "500+ happy clients"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12519.474!2d176.31!3d-38.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c0a0a0a0a0a0a%3A0x0!2sReporoa%2C+New+Zealand!5e0!3m2!1sen!2snz!4v1"
                  className="w-full h-64 border-0"
                  loading="lazy"
                  title="She Mows Location"
                  allowFullScreen
                />
              </div>
            </div>
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
    </>
  );
}
