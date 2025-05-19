"use client"

import { useState, useEffect } from "react"

export const useMobile = () => {
  // Start with a default value (false) for server-side rendering
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    checkMobile()

    // Listen for window resize events
    window.addEventListener("resize", checkMobile)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}
