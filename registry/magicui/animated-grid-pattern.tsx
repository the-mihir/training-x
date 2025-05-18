"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGridPatternProps {
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
  className?: string
}

export function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
  className,
}: AnimatedGridPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const [time, setTime] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    if (!canvasRef.current) return

    const context = canvasRef.current.getContext("2d")
    setCtx(context)

    const resizeCanvas = () => {
      if (!canvasRef.current || !context) return
      canvasRef.current.width = canvasRef.current.offsetWidth * window.devicePixelRatio
      canvasRef.current.height = canvasRef.current.offsetHeight * window.devicePixelRatio
      context.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  useEffect(() => {
    if (!ctx || !canvasRef.current) return

    const animate = () => {
      if (!ctx || !canvasRef.current) return

      const width = canvasRef.current.offsetWidth
      const height = canvasRef.current.offsetHeight

      ctx.clearRect(0, 0, width, height)

      // Calculate grid size based on numSquares
      const squareSize = Math.max(width, height) / Math.sqrt(numSquares)

      // Calculate number of squares in each dimension
      const numX = Math.ceil(width / squareSize) + 1
      const numY = Math.ceil(height / squareSize) + 1

      // Calculate the progress in the animation cycle
      const totalDuration = duration + repeatDelay
      const cycleTime = time % totalDuration
      const animationProgress = cycleTime <= duration ? cycleTime / duration : 0

      // Draw grid
      ctx.strokeStyle = "currentColor"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let i = 0; i < numY; i++) {
        const y = i * squareSize
        const opacity = Math.sin(animationProgress * Math.PI) * maxOpacity
        ctx.globalAlpha = opacity

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let i = 0; i < numX; i++) {
        const x = i * squareSize
        const opacity = Math.sin(animationProgress * Math.PI) * maxOpacity
        ctx.globalAlpha = opacity

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Update time
      setTime((prevTime) => prevTime + 0.01)
      animationRef.current = requestAnimationFrame(animate)
    }

    if (isAnimating) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [ctx, isAnimating, time, numSquares, maxOpacity, duration, repeatDelay])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{ opacity: maxOpacity }}
    />
  )
}
