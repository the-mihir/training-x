"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Award,
  MessageSquare,
  Settings,
  CreditCard,
  BarChart,
  Gamepad2,
  ChevronDown,
  ChevronRight,
  Layers,
  FileText,
  Bell,
  ShieldCheck,
  Globe,
  Palette,
  Database,
  Mail,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function Sidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    settings: false,
    reports: false,
  })
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
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
          <Link href="/super-admin" className="flex items-center gap-2">
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
            <Link href="/super-admin" passHref>
              <Button
                variant={isActive("/super-admin") ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "justify-center px-0")}
                size="sm"
              >
                <LayoutDashboard className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && <span>Dashboard</span>}
              </Button>
            </Link>

            <Link href="/super-admin/users" passHref>
              <Button
                variant={isActive("/super-admin/users") ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "justify-center px-0")}
                size="sm"
              >
                <Users className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && <span>Users</span>}
              </Button>
            </Link>

            <Link href="/super-admin/courses" passHref>
              <Button
                variant={isActive("/super-admin/courses") ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "justify-center px-0")}
                size="sm"
              >
                <BookOpen className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && <span>Courses</span>}
              </Button>
            </Link>

            <Link href="/super-admin/simulations" passHref>
              <Button
                variant={isActive("/super-admin/simulations") ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "justify-center px-0")}
                size="sm"
              >
                <Gamepad2 className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && <span>Simulations</span>}
              </Button>
            </Link>

            <Link href="/super-admin/badges" passHref>
              <Button
                variant={isActive("/super-admin/badges") ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "justify-center px-0")}
                size="sm"
              >
                <Award className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && <span>Badges & Certificates</span>}
              </Button>
            </Link>

            <Link href="/super-admin/feedback" passHref>
              <Button
                variant={isActive("/super-admin/feedback") ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "justify-center px-0")}
                size="sm"
              >
                <MessageSquare className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && <span>Feedback & Support</span>}
              </Button>
            </Link>

            {!isCollapsed && (
              <Button
                variant="ghost"
                className="w-full justify-between"
                size="sm"
                onClick={() => toggleMenu("reports")}
              >
                <div className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5" />
                  Reports & Analytics
                </div>
                {openMenus.reports ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            )}

            {!isCollapsed && openMenus.reports && (
              <div className="ml-4 grid gap-1">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Layers className="mr-2 h-4 w-4" />
                  Course Analytics
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  User Engagement
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Financial Reports
                </Button>
              </div>
            )}

            {!isCollapsed && (
              <Button
                variant="ghost"
                className="w-full justify-between"
                size="sm"
                onClick={() => toggleMenu("settings")}
              >
                <div className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </div>
                {openMenus.settings ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            )}

            {!isCollapsed && openMenus.settings && (
              <div className="ml-4 grid gap-1">
                <Link href="/super-admin/settings" passHref>
                  <Button
                    variant={isActive("/super-admin/settings") ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    size="sm"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    General Settings
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Security
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Globe className="mr-2 h-4 w-4" />
                  Localization
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Palette className="mr-2 h-4 w-4" />
                  Appearance
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Database className="mr-2 h-4 w-4" />
                  Integrations
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Templates
                </Button>
              </div>
            )}

            <Link href="/super-admin/billing" passHref>
              <Button
                variant={isActive("/super-admin/billing") ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "justify-center px-0")}
                size="sm"
              >
                <CreditCard className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {!isCollapsed && <span>Billing & Subscriptions</span>}
              </Button>
            </Link>
          </nav>
        </ScrollArea>

        {/* Sidebar footer */}
        <div className="mt-auto p-4 border-t">
          {!isCollapsed && (
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">Logged in as Admin</p>
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
