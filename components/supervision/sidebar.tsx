"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, BarChart2, Users, FileText, Settings, Menu, X } from "lucide-react"
import Image from "next/image"

export default function SupervisionSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/supervision",
      active: pathname === "/supervision",
    },
    {
      label: "Students",
      icon: Users,
      href: "/supervision/students",
      active: pathname === "/supervision/students",
    },
    {
      label: "Reports",
      icon: BarChart2,
      href: "#",
      active: pathname.includes("/supervision/reports"),
      subItems: [
        {
          label: "Progress",
          href: "/supervision/reports/progress",
          active: pathname === "/supervision/reports/progress",
        },
        {
          label: "Performance",
          href: "/supervision/reports/performance",
          active: pathname === "/supervision/reports/performance",
        },
        {
          label: "Activity",
          href: "/supervision/reports/activity",
          active: pathname === "/supervision/reports/activity",
        },
        {
          label: "Certificates",
          href: "/supervision/reports/certificates",
          active: pathname === "/supervision/reports/certificates",
        },
        {
          label: "Feedback",
          href: "/supervision/reports/feedback",
          active: pathname === "/supervision/reports/feedback",
        },
      ],
    },
    {
      label: "Resume Status",
      icon: FileText,
      href: "/supervision/resume-status",
      active: pathname === "/supervision/resume-status",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/supervision/settings",
      active: pathname === "/supervision/settings",
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
          <Link href="/supervision" className="flex items-center gap-2">
            <Image src="/trainingx-logo.png" alt="TrainingX Logo" width={32} height={32} className="rounded-md" />
            {!isCollapsed && (
              <div className="flex items-center">
                <span className="font-bold text-xl">TrainingX</span>
                <span className="ml-1 rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-800 dark:text-purple-100">
                  Supervision
                </span>
              </div>
            )}
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
            {routes.map((route) => {
              if (route.subItems) {
                return (
                  <div key={route.href} className="space-y-1">
                    <div
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        route.active
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      <route.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{route.label}</span>}
                    </div>
                    {!isCollapsed && route.subItems && (
                      <div className="pl-9 space-y-1">
                        {route.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                              subItem.active
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                            )}
                          >
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
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
              )
            })}
          </nav>
        </ScrollArea>

        {/* Sidebar footer */}
        <div className="mt-auto p-4 border-t">
          {!isCollapsed && (
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">Logged in as Supervisor</p>
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
