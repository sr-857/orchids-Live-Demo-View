"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Shield, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative size-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
              <Shield className="size-5 text-indigo-400" />
              <div className="absolute inset-0 rounded-lg bg-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-white">
              Astra<span className="text-indigo-400">Guard</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-white/5"
            >
              Sign In
            </Button>
            <Button className="glass-button text-white font-medium">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="justify-start text-zinc-400 hover:text-white hover:bg-white/5"
                >
                  Sign In
                </Button>
                <Button className="glass-button text-white font-medium justify-center">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
