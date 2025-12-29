"use client"

import * as React from "react"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "AstraGuard reduced our security incidents by 94%. The real-time detection is incredibly fast and accurate.",
    author: "Sarah Chen",
    role: "CTO, TechFlow AI",
    rating: 5
  },
  {
    quote: "Finally, a solution that understands the nuances of prompt injection attacks. Worth every penny.",
    author: "Marcus Rodriguez",
    role: "Security Lead, DataVault",
    rating: 5
  },
  {
    quote: "Integration took less than an hour. Our compliance team loves the PII detection capabilities.",
    author: "Emily Watson",
    role: "VP Engineering, FinServe",
    rating: 5
  },
  {
    quote: "The neural threat detection catches attacks that our previous rule-based system completely missed.",
    author: "David Park",
    role: "AI Security Architect, CloudScale",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by <span className="text-gradient">Security Teams</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Leading companies rely on AstraGuard to protect their AI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-6 right-6 size-8 text-indigo-500/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-zinc-500">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">50M+</div>
              <div className="text-sm text-zinc-500">Prompts Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">99.8%</div>
              <div className="text-sm text-zinc-500">Detection Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">&lt;100ms</div>
              <div className="text-sm text-zinc-500">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
