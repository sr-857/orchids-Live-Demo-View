"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Activity, 
  Settings, 
  CreditCard, 
  HelpCircle, 
  LogOut,
  Shield,
  Bell,
  Search,
  User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Threat Analysis", href: "/dashboard/analysis", icon: ShieldCheck },
  { name: "Live Logs", href: "/dashboard/logs", icon: Activity },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-[#09090b] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#09090b] hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative size-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
              <Shield className="size-4 text-indigo-400" />
            </div>
            <span className="text-lg font-bold">AstraGuard</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" 
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                <link.icon className="size-4" />
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-1">
          <Link
            href="/help"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <HelpCircle className="size-4" />
            Support
          </Link>
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LogOut className="size-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-white/5 bg-[#09090b]/50 backdrop-blur-xl flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              <Input 
                placeholder="Search threats, logs..." 
                className="pl-10 h-9 bg-white/5 border-white/10 text-sm focus-visible:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white relative">
              <Bell className="size-5" />
              <span className="absolute top-2 right-2 size-2 bg-indigo-500 rounded-full border-2 border-[#09090b]" />
            </Button>
            <div className="h-8 w-px bg-white/10 mx-1" />
            <Button variant="ghost" className="flex items-center gap-2 px-2 hover:bg-white/5">
              <div className="size-8 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-bold">
                JD
              </div>
              <span className="text-sm font-medium text-zinc-300 hidden sm:inline-block">John Doe</span>
            </Button>
          </div>
        </header>

        {/* Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#09090b]">
          {children}
        </main>
      </div>
    </div>
  )
}
