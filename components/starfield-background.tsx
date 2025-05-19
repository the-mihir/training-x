"use client"

import { useEffect, useRef } from "react"

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Only run the animation on the client side
  useEffect(() => {
    if (typeof window === "undefined") return

    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full viewport height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight // Exactly 100vh
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Star properties
    const stars: {
      x: number
      y: number
      z: number
      radius: number
      color: string
    }[] = []

    const STAR_COUNT = 1000
    const STAR_SPEED = 0.2
    const STAR_MAX_DEPTH = 1000
    const COLORS = ["#ffffff", "#33C3F0", "#8B5CF6", "#D6BCFA", "#1EAEDB"]

    // Initialize stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * STAR_MAX_DEPTH,
        radius: Math.random() * 1.5 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "#0a0e17"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Move star closer to viewer
        star.z -= STAR_SPEED

        // Reset star to far plane if it's too close
        if (star.z <= 0) {
          star.z = STAR_MAX_DEPTH
          star.x = Math.random() * canvas.width - centerX
          star.y = Math.random() * canvas.height - centerY
        }

        // Project star position onto the 2D screen
        const scaleFactor = STAR_MAX_DEPTH / star.z
        const projectedX = centerX + star.x * scaleFactor
        const projectedY = centerY + star.y * scaleFactor

        // Only draw if within bounds
        if (projectedX >= 0 && projectedX <= canvas.width && projectedY >= 0 && projectedY <= canvas.height) {
          // Scale size based on depth
          const projectedRadius = star.radius * scaleFactor

          // Draw star with fading based on depth
          const opacity = Math.min(1, (STAR_MAX_DEPTH - star.z) / (STAR_MAX_DEPTH * 0.75))
          ctx.globalAlpha = opacity
          ctx.fillStyle = star.color

          ctx.beginPath()
          ctx.arc(projectedX, projectedY, projectedRadius, 0, Math.PI * 2)
          ctx.fill()

          // Add glow effect to brighter stars
          if (projectedRadius > 0.8) {
            ctx.globalAlpha = opacity * 0.4
            ctx.shadowBlur = projectedRadius * 5
            ctx.shadowColor = star.color

            ctx.beginPath()
            ctx.arc(projectedX, projectedY, projectedRadius * 1.5, 0, Math.PI * 2)
            ctx.fill()

            ctx.shadowBlur = 0
          }

          ctx.globalAlpha = 1.0
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* 3D starfield canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ display: "block" }} />

      {/* Star-like aura effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 -z-5"></div>

      {/* Star aura points */}
      <div className="fixed top-1/4 left-1/4 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full -z-5 animate-pulse"></div>
      <div
        className="fixed bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full -z-5 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="fixed top-1/3 right-1/4 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full -z-5 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </>
  )
}
