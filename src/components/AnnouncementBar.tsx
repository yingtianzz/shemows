import { Phone, Star } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-green-dark text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
          </div>
          <span className="font-medium">5.0 Rated on Facebook</span>
        </div>
        <p className="text-center flex-1 sm:flex-none font-medium">
          🌿 <span className="hidden md:inline">Now servicing</span> Reporoa • Taupō • Rotorua • Broadlands
        </p>
        <a href="tel:+64211852793" className="hidden sm:flex items-center gap-1.5 font-semibold hover:underline">
          <Phone className="w-3 h-3" /> +64 21 185 2793
        </a>
      </div>
    </div>
  );
}
