"use client"

import { Suspense, lazy, useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import components with SSR disabled for those that might use window
const HeroSection = lazy(() => import("@/components/landing/hero-section"))
const VideoSection = lazy(() => import("@/components/landing/video-section"))
const CourseSection = lazy(() => import("@/components/landing/course-section"))
const PracticeZone = lazy(() => import("@/components/landing/practice-zone"))
const XRRealityZone = lazy(() => import("@/components/landing/xr-reality-zone"))
const MatchingReportGrid = lazy(() => import("@/components/landing/matching-report-grid"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const MonetizationGrid = lazy(() => import("@/components/landing/monetization-grid"))
const AgentForceSlider = lazy(() => import("@/components/landing/agent-force-slider"))
const BellsAndWhistles = lazy(() => import("@/components/landing/bells-and-whistles"))
const NewsletterSection = lazy(() => import("@/components/landing/newsletter-section"))
const PartnersSection = lazy(() => import("@/components/landing/partners-section"))

export default function HomeClient() {
  const [hasError, setHasError] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleError = () => {
      setHasError(true)
      // Log error to your monitoring service
      console.error("An error occurred in the home page rendering")
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    let isMounted = true

    const performHeavyTask = () => {
      // Your heavy calculation logic here
      if (isMounted) {
        // Update state only if component is still mounted
      }
    }

    // Use requestIdleCallback or setTimeout to defer non-critical work
    const timeoutId = setTimeout(performHeavyTask, 100)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [])

  const canvasRef = { current: null } // Mock canvasRef

  useEffect(() => {
    if (typeof window === "undefined") return

    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full viewport height
    const resizeCanvas = () => {
      if (typeof window !== "undefined") {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight // Exactly 100vh
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Rest of the canvas code...

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="mb-4">We're sorry, but there was an error loading this page.</p>
          <button
            onClick={() => {
              if (typeof window !== "undefined") window.location.reload()
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Suspense fallback={<Skeleton className="h-[60vh] w-full" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <VideoSection />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <CourseSection />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <PracticeZone />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <XRRealityZone />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <MatchingReportGrid />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <MonetizationGrid />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <AgentForceSlider />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <BellsAndWhistles />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <NewsletterSection />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[40vh] w-full" />}>
        <PartnersSection />
      </Suspense>
    </>
  )
}
