"use client"

import { useState, useEffect } from "react"

export const useMobile = () => {
  // Start with a default value (false) for server-side rendering
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
    }

    // Only run on client side
    if (typeof window !== "undefined") {
      // Set initial value
      handleResize()

      // Listen for window resize events
      window.addEventListener("resize", handleResize)

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }

    // Return empty cleanup function for SSR
    return () => {}
  }, [])

  return isMobile
}
