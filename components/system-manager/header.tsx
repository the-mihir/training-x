"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, MessageSquare, Search, User, Settings, HelpCircle, LogOut } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [pageTitle, setPageTitle] = useState("Dashboard")

  // Update page title based on pathname
  useEffect(() => {
    const path = pathname.split("/").filter(Boolean)
    if (path.length === 1) {
      setPageTitle("Dashboard")
    } else if (path.length === 2) {
      // Convert kebab-case to Title Case
      setPageTitle(
        path[1]
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      )
    } else if (path.length === 3) {
      // For reports/x paths
      setPageTitle(`${path[2].charAt(0).toUpperCase() + path[2].slice(1)} Reports`)
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      {isMobile && (
        <Link href="/system-manager" className="mr-2">
          <div className="relative h-8 w-8">
            <Image src="/trainingx-logo.png" alt="TrainingX Logo" fill className="object-contain" />
          </div>
        </Link>
      )}
      <div className="flex-1">
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-4">
        <form className="relative w-full max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:w-[300px]" />
        </form>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              {[1, 2, 3].map((i) => (
                <DropdownMenuItem key={i} className="cursor-pointer p-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">System Alert</p>
                    <p className="text-xs text-muted-foreground">New user registration spike detected</p>
                    <p className="text-xs text-muted-foreground">{new Date().toLocaleTimeString()}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Messages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              {[1, 2].map((i) => (
                <DropdownMenuItem key={i} className="cursor-pointer p-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">Support Team</p>
                    <p className="text-xs text-muted-foreground">New feedback requires attention</p>
                    <p className="text-xs text-muted-foreground">{new Date().toLocaleTimeString()}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full border h-8 w-8">
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
