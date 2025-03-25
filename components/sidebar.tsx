"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 w-64 border-r bg-card", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2 flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <h2 className="text-lg font-semibold tracking-tight">AgriConnect</h2>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Features</h2>
          <div className="space-y-1">
            <Button asChild variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start">
              <Link href="/">Dashboard</Link>
            </Button>
            <Button asChild variant={pathname === "/diagnose" ? "secondary" : "ghost"} className="w-full justify-start">
              <Link href="/diagnose">AI Crop Diagnostics</Link>
            </Button>
            <Button asChild variant={pathname === "/weather" ? "secondary" : "ghost"} className="w-full justify-start">
              <Link href="/weather">Weather Insights</Link>
            </Button>
            <Button asChild variant={pathname === "/insights" ? "secondary" : "ghost"} className="w-full justify-start">
              <Link href="/insights">Farm Insights</Link>
            </Button>
            <Button
              asChild
              variant={pathname === "/community" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/community">Community Forum</Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Marketplace</h2>
          <div className="space-y-1">
            <Button asChild variant={pathname === "/market" ? "secondary" : "ghost"} className="w-full justify-start">
              <Link href="/market">Market Access</Link>
            </Button>
            <Button
              asChild
              variant={pathname === "/equipment" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/equipment">Harvester Booking</Link>
            </Button>
            <Button asChild variant={pathname === "/experts" ? "secondary" : "ghost"} className="w-full justify-start">
              <Link href="/experts">Expert Consultations</Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Account</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              My Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Help & Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

