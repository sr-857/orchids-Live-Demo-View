"use client"

import * as React from "react"
import { 
  ShieldAlert, 
  Lock, 
  Zap, 
  Eye, 
  Cpu, 
  FileCode,
  ArrowRight
} from "lucide-react"

const features = [
  {
    icon: ShieldAlert,
    title: "Prompt Injection Detection",
    description: "Advanced pattern recognition to identify and block malicious prompt injection attempts before they reach your AI models.",
    color: "indigo"
  },
  {
    icon: Lock,
    title: "PII Protection",
    description: "Automatically detect and redact personally identifiable information to ensure compliance and protect user privacy.",
    color: "emerald"
  },
  {
    icon: Eye,
    title: "Jailbreak Prevention",
    description: "Multi-layer defense against sophisticated jailbreak attempts designed to circumvent AI safety measures.",
    color: "rose"
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Sub-100ms latency ensures your applications remain responsive while maintaining robust security coverage.",
    color: "amber"
  },
  {
    icon: Cpu,
    title: "Neural Threat Detection",
    description: "Powered by custom-trained transformer models that understand context and intent beyond simple pattern matching.",
    color: "violet"
  },
  {
    icon: FileCode,
    title: "Easy Integration",
    description: "Drop-in SDK for Python, Node.js, and REST API. Get protected in minutes with minimal code changes.",
    color: "cyan"
  }
]

const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  indigo: { bg: "bg-indigo-600/20", border: "border-indigo-500/30", icon: "text-indigo-400", glow: "group-hover:shadow-indigo-500/20" },
  emerald: { bg: "bg-emerald-600/20", border: "border-emerald-500/30", icon: "text-emerald-400", glow: "group-hover:shadow-emerald-500/20" },
  rose: { bg: "bg-rose-600/20", border: "border-rose-500/30", icon: "text-rose-400", glow: "group-hover:shadow-rose-500/20" },
  amber: { bg: "bg-amber-600/20", border: "border-amber-500/30", icon: "text-amber-400", glow: "group-hover:shadow-amber-500/20" },
  violet: { bg: "bg-violet-600/20", border: "border-violet-500/30", icon: "text-violet-400", glow: "group-hover:shadow-violet-500/20" },
  cyan: { bg: "bg-cyan-600/20", border: "border-cyan-500/30", icon: "text-cyan-400", glow: "group-hover:shadow-cyan-500/20" }
}

export function Features() {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Enterprise-Grade <span className="text-gradient">Security Features</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Comprehensive protection powered by advanced neural networks and real-time threat intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color]
            return (
              <div
                key={feature.title}
                className={`group glass-card glass-card-hover rounded-2xl p-6 cursor-pointer ${colors.glow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`size-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <feature.icon className={`size-6 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm text-zinc-500 group-hover:text-indigo-400 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
