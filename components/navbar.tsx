"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"
import { memo, useState, useCallback, useEffect } from "react"

// Wrap the component with memo
const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 50) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
    }

    // Only add the event listener on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      // Initial check
      handleScroll()
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "AI Companion", href: "/ai-companion" },
    { name: "Courses", href: "/courses" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  // Use useCallback for event handlers
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div
          className={cn(
            "flex h-20 items-center justify-between px-6 transition-all duration-300 rounded-[50px] border",
            scrolled
              ? "bg-white/95 backdrop-blur-md border-gray-200 dark:bg-slate-900/95 dark:border-gray-800"
              : "bg-transparent backdrop-blur-md supports-[backdrop-filter]:bg-background/20 border-white/10 dark:border-white/5",
          )}
        >
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-[60px] h-[60px]">
                <Image src="/trainingx-logo.webp" alt="TrainingX AI Logo" fill className="object-contain" priority />
              </div>
              <span
                className={cn(
                  "font-bold text-xl transition-colors",
                  scrolled
                    ? "text-gray-900 dark:text-white"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-[#7ED957] to-[#00A0E3]",
                )}
              >
                TrainingX
              </span>
            </Link>
          </div>

          {!isMobile ? (
            <nav className="hidden md:flex gap-8 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center",
                    pathname === link.href ? "text-primary" : scrolled ? "text-gray-800 dark:text-white" : "text-white",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          ) : null}
          <div className="flex items-center gap-2">
            {!isMobile ? (
              <>
                <ModeToggle />
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "transition-colors",
                      scrolled
                        ? "border-gray-300 text-gray-800 dark:border-gray-600 dark:text-white"
                        : "border-white/20 text-dark dark:text-white",
                    )}
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="gradient-btn text-white">
                    Sign up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <ModeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle Menu"
                  onClick={toggleMenu}
                  className={scrolled ? "text-gray-800 dark:text-white" : "text-white"}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen ? (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col gap-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-lg border border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary block py-2",
                  pathname === link.href ? "text-primary" : "text-gray-800 dark:text-gray-200",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full gradient-btn text-white">Sign up</Button>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
})

export default Navbar
