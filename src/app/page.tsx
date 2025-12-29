"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DashboardPreview } from "@/components/dashboard-preview"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Testimonials />
      <Footer />
    </main>
  )
}
