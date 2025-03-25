"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, Menu, Bell } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import Sidebar from "@/components/sidebar"

export default function MobileNav() {
  return (
    <header className="md:hidden sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-60 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-2">
        <Leaf className="h-6 w-6 text-primary" />
        <Link href="/" className="font-semibold">
          AgriConnect
        </Link>
      </div>

      <div className="flex-1"></div>

      <Button variant="ghost" size="icon" className="shrink-0">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>

      <ModeToggle />
    </header>
  )
}

