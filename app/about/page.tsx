"use client";

import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">About She Mows</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn the story behind our passion for beautiful gardens and professional service.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              She Mows started as a simple idea: provide professional, reliable lawn and garden services to the local community with genuine care and attention to detail.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              What began as one person with a passion for the outdoors has grown into a trusted team serving 500+ properties across Reporoa, Taupō, Rotorua, Broadlands and the wider Bay of Plenty region.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We&apos;re proud to be locally owned and woman-led. We&apos;re your neighbours, and we treat every property like it&apos;s our own.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors shadow-lg">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
