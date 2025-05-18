import { cn } from "@/lib/utils"

interface GridPatternBackgroundProps {
  className?: string
}

export function GridPatternBackground({ className }: GridPatternBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
          <rect width="100%" height="100%" fill="none" />
          <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
