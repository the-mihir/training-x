"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMobile } from "@/hooks/use-mobile"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Gamepad2,
  BarChart3,
  Flag,
  ServerCog,
  Megaphone,
  ChevronRight,
  Menu,
  X,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    // Close mobile sidebar when route changes
    setIsMobileOpen(false)
  }, [pathname])

  // Handle sidebar toggle
  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen)
    } else {
      setIsCollapsed(!isCollapsed)
    }
  }

  // Navigation items
  const navItems = [
    {
      title: "Dashboard",
      href: "/system-manager",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "User Activity",
      href: "/system-manager/user-activity",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Course Monitoring",
      href: "/system-manager/course-monitoring",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Simulation Monitoring",
      href: "/system-manager/simulation-monitoring",
      icon: <Gamepad2 className="h-5 w-5" />,
    },
    {
      title: "Reports",
      icon: <BarChart3 className="h-5 w-5" />,
      submenu: [
        {
          title: "Performance",
          href: "/system-manager/reports/performance",
          icon: <ChevronRight className="h-4 w-4" />,
        },
        {
          title: "Certificates",
          href: "/system-manager/reports/certificates",
          icon: <ChevronRight className="h-4 w-4" />,
        },
        {
          title: "Feedback",
          href: "/system-manager/reports/feedback",
          icon: <ChevronRight className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "Feedback Management",
      href: "/system-manager/feedback-management",
      icon: <Flag className="h-5 w-5" />,
    },
    {
      title: "System Logs",
      href: "/system-manager/system-logs",
      icon: <ServerCog className="h-5 w-5" />,
    },
    {
      title: "Announcements",
      href: "/system-manager/announcements",
      icon: <Megaphone className="h-5 w-5" />,
    },
  ]

  // Sidebar content
  const sidebarContent = (
    <>
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/system-manager" className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
          <div className="relative h-8 w-8">
            <Image src="/trainingx-logo.png" alt="TrainingX Logo" fill className="object-contain" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-lg">TrainingX</span>
              <span className="text-xs bg-amber-200 text-amber-800 px-1 rounded">System Manager</span>
            </div>
          )}
        </Link>
        {!isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8">
            <ChevronRight className={cn("h-4 w-4 transition-transform", isCollapsed ? "" : "rotate-180")} />
          </Button>
        )}
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-8 w-8 lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-2">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                    isCollapsed && "justify-center px-2",
                  )}
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              ) : (
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                    isCollapsed && "justify-center px-2",
                  )}
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.title}</span>}
                </div>
              )}
              {item.submenu && !isCollapsed && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      href={subitem.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        pathname === subitem.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                      )}
                    >
                      {subitem.icon}
                      <span>{subitem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className={cn("mt-auto border-t p-4", isCollapsed && "flex flex-col items-center")}>
        <div className={cn("flex items-center gap-3 rounded-lg px-3 py-2", isCollapsed && "flex-col")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">System Manager</span>
              <span className="text-xs text-muted-foreground">manager@trainingx.com</span>
            </div>
          )}
        </div>
        <div className={cn("mt-2 flex gap-1", isCollapsed ? "flex-col" : "justify-around")}>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )

  // Mobile overlay
  const mobileOverlay = isMobile && isMobileOpen && (
    <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMobileOpen(false)} />
  )

  // Mobile toggle button
  const mobileToggle = isMobile && !isMobileOpen && (
    <Button variant="ghost" size="icon" onClick={toggleSidebar} className="fixed left-4 top-4 z-40 lg:hidden">
      <Menu className="h-5 w-5" />
    </Button>
  )

  return (
    <>
      {mobileToggle}
      {mobileOverlay}
      <aside
        className={cn(
          "flex flex-col z-50 bg-background border-r transition-all duration-300",
          isCollapsed ? "w-[70px]" : "w-64",
          isMobile ? (isMobileOpen ? "fixed inset-y-0 left-0" : "hidden") : "relative",
        )}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
