import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cva, type VariantProps } from "class-variance-authority"

const gradientVariants = cva("relative overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-lg", {
  variants: {
    variant: {
      purple: "bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border-purple-200 dark:border-purple-900",
      blue: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-200 dark:border-blue-900",
      green: "bg-gradient-to-br from-emerald-500/10 to-green-500/5 border-emerald-200 dark:border-emerald-900",
      amber: "bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border-amber-200 dark:border-amber-900",
      pink: "bg-gradient-to-br from-pink-500/10 to-rose-500/5 border-pink-200 dark:border-pink-900",
      teal: "bg-gradient-to-br from-teal-500/10 to-emerald-500/5 border-teal-200 dark:border-teal-900",
    },
  },
  defaultVariants: {
    variant: "blue",
  },
})

const titleVariants = cva("text-lg font-semibold tracking-tight", {
  variants: {
    variant: {
      purple: "text-purple-700 dark:text-purple-300",
      blue: "text-blue-700 dark:text-blue-300",
      green: "text-emerald-700 dark:text-emerald-300",
      amber: "text-amber-700 dark:text-amber-300",
      pink: "text-pink-700 dark:text-pink-300",
      teal: "text-teal-700 dark:text-teal-300",
    },
  },
  defaultVariants: {
    variant: "blue",
  },
})

export interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gradientVariants> {
  title?: string
  icon?: React.ReactNode
  animation?: "pulse" | "bounce" | "none"
}

export function GradientCard({
  className,
  title,
  children,
  variant,
  icon,
  animation = "none",
  ...props
}: GradientCardProps) {
  const animationClass = animation === "pulse" ? "animate-pulse" : animation === "bounce" ? "animate-bounce" : ""

  return (
    <Card className={cn(gradientVariants({ variant }), className)} {...props}>
      {title && (
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            {icon && <div className={animationClass}>{icon}</div>}
            <span className={cn(titleVariants({ variant }))}>{title}</span>
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-2xl" />
    </Card>
  )
}
