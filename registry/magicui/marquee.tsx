"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  direction?: "horizontal" | "vertical"
}

export const Marquee = ({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  direction = "horizontal",
}: MarqueeProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)

    // Duplicate the content for a seamless loop
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })
  }, [])

  const isHorizontal = direction === "horizontal"

  return (
    <div
      ref={containerRef}
      className={cn("flex overflow-hidden", isHorizontal ? "w-full" : "h-full flex-col", className)}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex gap-4 py-4",
          isHorizontal ? "animate-marquee flex-nowrap" : "animate-marquee-vertical flex-col",
          reverse && (isHorizontal ? "animate-marquee-reverse" : "animate-marquee-vertical-reverse"),
          isHovered && "animate-pause",
        )}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
          animationDuration: "var(--duration, 40s)",
        }}
      >
        {children}
      </div>
    </div>
  )
}
