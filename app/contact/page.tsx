"use client";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss your lawn and garden needs. We&apos;re here to help!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+64211852793" className="text-primary hover:underline">+64 21 185 2793</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:mandafitz@live.com" className="text-primary hover:underline">mandafitz@live.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Reporoa, Bay of Plenty, New Zealand</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-border bg-background" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-border bg-background" rows={5} placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
