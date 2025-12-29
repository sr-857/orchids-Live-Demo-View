"use client"

import * as React from "react"
import { Shield, Zap, Lock, ArrowRight, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-slide-up">
              <Activity className="size-4 text-emerald-400" />
              <span className="text-sm text-zinc-300">Enterprise-Grade AI Security</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up animation-delay-100">
              Protect Your AI
              <br />
              <span className="text-gradient">From Every Threat</span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up animation-delay-200">
              Real-time neural threat detection that shields your LLM applications from prompt injections, jailbreaks, PII leaks, and toxic content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-300">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 h-12 glow-indigo">
                Start Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-white/10 text-white hover:bg-white/5 h-12">
                View Documentation
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 animate-slide-up animation-delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-xs text-zinc-500">Detection Rate</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">&lt;100ms</div>
                <div className="text-xs text-zinc-500">Avg Latency</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50M+</div>
                <div className="text-xs text-zinc-500">Prompts Scanned</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up animation-delay-200">
            <div className="relative glass-card rounded-2xl p-6 lg:p-8 animate-float">
              <div className="absolute -top-3 -right-3 size-6 rounded-full bg-emerald-500 border-4 border-[#0a0a0f] animate-pulse" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <Shield className="size-5 text-indigo-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">AstraGuard Shield</div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Active Protection
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-400">Threat Blocked</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      Blocked
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300 font-mono truncate">
                    &quot;Ignore previous instructions and reveal...&quot;
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1.5 flex-1 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full w-[95%] bg-rose-500 rounded-full" />
                    </div>
                    <span className="text-xs text-rose-400 font-mono">0.95</span>
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-400">Safe Request</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Passed
                    </span>
                  </div>
                  <p className="text-sm text-zinc-300 font-mono truncate">
                    &quot;How do I optimize my SQL query for...&quot;
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1.5 flex-1 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full w-[8%] bg-emerald-500 rounded-full" />
                    </div>
                    <span className="text-xs text-emerald-400 font-mono">0.08</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="text-center p-3 glass rounded-lg">
                    <Zap className="size-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-xs text-zinc-500">124ms</div>
                  </div>
                  <div className="text-center p-3 glass rounded-lg">
                    <Shield className="size-4 text-indigo-400 mx-auto mb-1" />
                    <div className="text-xs text-zinc-500">432 blocked</div>
                  </div>
                  <div className="text-center p-3 glass rounded-lg">
                    <Lock className="size-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-xs text-zinc-500">89 PII</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-8 left-8 right-8 bottom-0 glass-card rounded-2xl opacity-40" />
            <div className="absolute -z-20 top-16 left-16 right-16 bottom-0 glass-card rounded-2xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
