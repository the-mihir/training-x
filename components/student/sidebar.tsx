"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  BarChart2,
  BookOpen,
  Gamepad2,
  UsersRound,
  MessageSquareText,
  Award,
  MessageCircle,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const isCourseLearningPage = pathname.includes("/student/courses/learn/")

  // Don't show the sidebar on the course learning page
  if (isCourseLearningPage) {
    return null
  }

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/student",
      active: pathname === "/student",
    },
    {
      label: "Analytics",
      icon: BarChart2,
      href: "/student/analytics",
      active: pathname === "/student/analytics",
    },
    {
      label: "Courses",
      icon: BookOpen,
      href: "/student/courses",
      active: pathname === "/student/courses",
    },
    {
      label: "Simulations",
      icon: Gamepad2,
      href: "/student/simulations",
      active: pathname === "/student/simulations",
    },
    {
      label: "Matching Zone",
      icon: UsersRound,
      href: "/student/matching-zone",
      active: pathname === "/student/matching-zone",
    },
    {
      label: "Prompting Zone",
      icon: MessageSquareText,
      href: "/student/prompting-zone",
      active: pathname === "/student/prompting-zone",
    },
    {
      label: "Certificates",
      icon: Award,
      href: "/student/certificates",
      active: pathname === "/student/certificates",
    },
    {
      label: "Feedback Tools",
      icon: MessageCircle,
      href: "/student/feedback",
      active: pathname === "/student/feedback",
    },
    {
      label: "Resume Builder",
      icon: FileText,
      href: "/student/resume-builder",
      active: pathname === "/student/resume-builder",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/student/settings",
      active: pathname === "/student/settings",
    },
  ]

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleMobileSidebar}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Mobile overlay */}
      {isMobileOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={toggleMobileSidebar} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-background transition-all duration-300 md:relative",
          isCollapsed ? "w-[70px]" : "w-[240px]",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-3 border-b">
          <Link href="/student" className="flex items-center gap-2">
            <Image src="/trainingx-logo.png" alt="TrainingX Logo" width={32} height={32} className="rounded-md" />
            {!isCollapsed && <span className="font-bold text-xl">TrainingX</span>}
          </Link>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="hidden md:flex">
              {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
              <span className="sr-only">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleMobileSidebar} className="md:hidden">
              <X className="h-5 w-5" />
              <span className="sr-only">Close Sidebar</span>
            </Button>
          </div>
        </div>

        {/* Sidebar content */}
        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                <route.icon className="h-5 w-5" />
                {!isCollapsed && <span>{route.label}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>

        {/* Sidebar footer */}
        <div className="mt-auto p-4 border-t">
          {!isCollapsed && (
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">Logged in as Student</p>
              <Link href="/logout" className="text-xs text-primary hover:underline">
                Logout
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
