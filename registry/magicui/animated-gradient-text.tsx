"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export const AnimatedGradientText = ({ children, className }: AnimatedGradientTextProps) => {
  const [isAnimated, setIsAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return (
    <span
      ref={elementRef}
      className={cn(
        "inline-flex animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-transparent",
        isAnimated ? "animate-gradient" : "",
        className,
      )}
    >
      {children}
    </span>
  )
}
