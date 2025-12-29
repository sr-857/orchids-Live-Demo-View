"use client"

import * as React from "react"
import {
  LayoutDashboard,
  ShieldAlert,
  History,
  Settings,
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Threat Monitor",
      url: "#",
      icon: ShieldAlert,
    },
    {
      title: "Audit Logs",
      url: "#",
      icon: History,
    },
  ],
  security: [
    {
      title: "Jailbreak Guard",
      url: "#",
      icon: Zap,
    },
    {
      title: "PII Redaction",
      url: "#",
      icon: Lock,
    },
    {
      title: "Prompt Injection",
      url: "#",
      icon: ShieldCheck,
    },
  ],
  system: [
    {
      title: "Model Status",
      url: "#",
      icon: Cpu,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-r border-zinc-800 bg-zinc-950 text-zinc-400">
      <SidebarHeader className="h-16 border-b border-zinc-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-zinc-900">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <ShieldCheck className="size-5" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-bold text-zinc-100">AstraGuard</span>
                <span className="text-xs text-indigo-400">AI Security Hub</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-500">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} className="hover:bg-zinc-900 hover:text-zinc-100 data-[active=true]:bg-indigo-600/10 data-[active=true]:text-indigo-400">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-500">Safety Layers</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.security.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-zinc-900 hover:text-zinc-100">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-500">Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.system.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-zinc-900 hover:text-zinc-100">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-zinc-800 p-4">
        <div className="flex items-center gap-3 px-1 py-2">
          <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-xs font-medium text-zinc-400">System Secure</span>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
