import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo/shemows-logo.jpg"
              alt="She Mows Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
            />
            <div className="leading-tight">
              <span className="font-heading text-lg md:text-xl font-bold text-foreground">She Mows</span>
              <span className="hidden sm:block text-xs text-muted-foreground">Lawn & Garden Services</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: link.to === "/" }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/64211852793"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-primary text-primary-foreground hover:bg-accent transition-colors shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: link.to === "/" }}
                className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-border mt-2">
              <a
                href="https://wa.me/64211852793"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold bg-[#25D366] text-white"
              >
                <Phone className="w-4 h-4" />
                Message on WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center px-4 py-3 rounded-full text-sm font-bold bg-primary text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
