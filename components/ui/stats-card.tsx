import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { cva, type VariantProps } from "class-variance-authority"

const statsCardVariants = cva("relative overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-lg", {
  variants: {
    variant: {
      default: "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800",
      purple: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900",
      blue: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900",
      green: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900",
      amber: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900",
      pink: "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-900",
      teal: "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const valueVariants = cva("text-2xl font-bold", {
  variants: {
    variant: {
      default: "text-gray-900 dark:text-gray-50",
      purple: "text-purple-700 dark:text-purple-300",
      blue: "text-blue-700 dark:text-blue-300",
      green: "text-emerald-700 dark:text-emerald-300",
      amber: "text-amber-700 dark:text-amber-300",
      pink: "text-pink-700 dark:text-pink-300",
      teal: "text-teal-700 dark:text-teal-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const labelVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-gray-500 dark:text-gray-400",
      purple: "text-purple-600 dark:text-purple-400",
      blue: "text-blue-600 dark:text-blue-400",
      green: "text-emerald-600 dark:text-emerald-400",
      amber: "text-amber-600 dark:text-amber-400",
      pink: "text-pink-600 dark:text-pink-400",
      teal: "text-teal-600 dark:text-teal-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof statsCardVariants> {
  value: string | number
  label: string
  icon?: React.ReactNode
  trend?: {
    value: number
    label?: string
    positive?: boolean
  }
}

export function StatsCard({ className, variant, value, label, icon, trend, ...props }: StatsCardProps) {
  return (
    <Card className={cn(statsCardVariants({ variant }), className)} {...props}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className={cn(valueVariants({ variant }))}>{value}</p>
            <p className={cn(labelVariants({ variant }))}>{label}</p>

            {trend && (
              <div className="mt-2 flex items-center text-xs font-medium">
                <span
                  className={cn(
                    "mr-1 flex items-center",
                    trend.positive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400",
                  )}
                >
                  {trend.positive ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-3 w-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-3 w-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-1.025.275l-4.287-2.475a.75.75 0 01.75-1.3l2.71 1.565a19.422 19.422 0 00-3.013-6.024L7.53 11.533a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {trend.value}%
                </span>
                {trend.label && <span className="text-gray-500 dark:text-gray-400">{trend.label}</span>}
              </div>
            )}
          </div>

          {icon && (
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                variant === "default" ? "bg-gray-100 dark:bg-gray-800" : `bg-${variant}-100 dark:bg-${variant}-900/30`,
                valueVariants({ variant }),
              )}
            >
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
