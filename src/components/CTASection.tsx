import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  showPhone?: boolean;
}

export default function CTASection({ 
  title = "Ready to Transform Your Garden?", 
  description = "Get a free, no-obligation quote today. We service Reporoa, Taupō, Rotorua, Broadlands and the wider Bay of Plenty.",
  showPhone = true
}: CTASectionProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-bg-premium.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/95 to-brand-green/90" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-bold text-base hover:bg-white/90 transition-all shadow-xl hover:-translate-y-0.5">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          {showPhone && (
            <a href="tel:+64211852793" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 border border-white/30 text-white font-bold text-base hover:bg-white/25 transition-colors backdrop-blur-sm">
              <Phone className="w-5 h-5" /> Call +64 21 185 2793
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
