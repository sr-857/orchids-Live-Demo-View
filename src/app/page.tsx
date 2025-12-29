"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DashboardPreview } from "@/components/dashboard-preview"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { TerminalChart } from "@/components/dashboard/TerminalChart"
import { ChatButton } from "@/components/chat/ChatButton"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      {/* 1. Intro/Hero */}
      <Hero />
      
      {/* 2. Terminal Chart */}
      <TerminalChart />
      
      {/* 3. Dashboard Preview (Live Demo) */}
      <DashboardPreview />
      
      {/* 4. Features */}
      <Features />
      
      {/* 5. Testimonials */}
      <Testimonials />
      
      <Footer />
      
      {/* Floating Chatbox */}
      <ChatButton />
    </main>
  )
}
