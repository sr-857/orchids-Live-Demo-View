"use client"

import * as React from "react"
import { useState } from "react"
import { Shield, Send, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer id="contact" className="py-16 px-4 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Shield className="size-5 text-indigo-400" />
              </div>
              <span className="text-xl font-bold text-white">
                Astra<span className="text-indigo-400">Guard</span>
              </span>
            </a>
            <p className="text-zinc-400 max-w-md mb-6">
              Enterprise-grade AI security that protects your applications from prompt injections, jailbreaks, and data leaks in real-time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="size-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github className="size-5" />
              </a>
              <a href="#" className="size-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="size-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="size-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Get the latest security insights and product updates.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 glass-input text-white placeholder:text-zinc-500"
              />
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6">
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/5">
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>hello@astraguard.ai</li>
              <li>San Francisco, CA</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} AstraGuard. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Protected by AstraGuard Neural Security
          </p>
        </div>
      </div>
    </footer>
  )
}
