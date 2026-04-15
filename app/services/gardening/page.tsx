"use client";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function GardeningPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Gardening Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete garden maintenance to keep your outdoor space thriving.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
