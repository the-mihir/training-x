"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { MultiStepSurveyForm } from "@/components/survey/multi-step-survey-form"
import { AnimatedGradientText } from "@/registry/magicui/animated-gradient-text"
import { HyperText } from "@/registry/magicui/hyper-text"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isSurveyOpen, setIsSurveyOpen] = useState(false)

  useEffect(() => {
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

  useEffect(() => {
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

  return (
    <section ref={sectionRef} className="h-screen relative overflow-hidden">
      {/* 3D starfield canvas - fixed at 100vh */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ display: "block" }} />

      {/* Star-like aura effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 -z-5"></div>

      {/* Star aura points */}
      <div className="absolute top-1/4 left-1/4 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full -z-5 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full -z-5 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full -z-5 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Navbar at the top of hero section */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero content centered both vertically and horizontally */}
      <div className="flex items-center justify-center h-[calc(100vh-5rem)] pt-[200px] relative z-10">
        <div className="container mx-auto px-4 -mt-[50px]">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Endless Possibilities with <HyperText>TrainingX.AI</HyperText>
              </h1>
              <p className="text-xl md:text-1xl text-gray-300 mb-8">
                Take your first step into the world of AI. Whether you're a student, job seeker, or
                entrepreneur—prompting unlocks your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg py-4 px-8 h-auto"
                  onClick={() => setIsSurveyOpen(true)}
                >
                  Start Your Free Assessment
                </Button>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    className="border-white/20 text-dark dark:text-white text-lg py-4 px-8 h-auto group relative overflow-hidden"
                  >
                    <AnimatedGradientText className="text-lg font-medium">Explore Courses</AnimatedGradientText>
                    <span
                      className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/10 via-[#9c40ff]/10 to-[#ffaa40]/10 bg-[length:300%_100%] p-[1px] opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "subtract",
                        WebkitClipPath: "padding-box",
                      }}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-step Survey Form */}
      <MultiStepSurveyForm open={isSurveyOpen} onOpenChange={setIsSurveyOpen} />
    </section>
  )
}
