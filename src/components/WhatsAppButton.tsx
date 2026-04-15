import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/64211852793?text=Hi%20She%20Mows!%20I'd%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-xl hover:bg-[#20bd5a] transition-all animate-pulse-whatsapp group"
      aria-label="Message Us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold">Message Us on WhatsApp</span>
    </a>
  );
}
