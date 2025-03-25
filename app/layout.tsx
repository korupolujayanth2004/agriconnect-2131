import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import MobileNav from "@/components/mobile-nav"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgriConnect - AI & Expert Agriculture for Farmer Prosperity",
  description: "Empowering farmers with AI tools and expert advice for improved crop management and market access",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen">
            <Sidebar className="hidden md:flex" />
            <div className="flex-1 flex flex-col">
              <MobileNav />
              <main className="flex-1 p-4 md:p-6">{children}</main>
              <footer className="p-4 border-t text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} AgriConnect | Team Equation #17
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'