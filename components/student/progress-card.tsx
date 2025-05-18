import type React from "react"
import { Progress } from "@/components/ui/progress"
import CardBox from "./card-box"
import { cn } from "@/lib/utils"

interface ProgressCardProps {
  title: string
  value: number
  max: number
  icon?: React.ReactNode
  description?: string
  className?: string
  progressColor?: string
}

export default function ProgressCard({
  title,
  value,
  max,
  icon,
  description,
  className,
  progressColor = "bg-primary",
}: ProgressCardProps) {
  const percentage = Math.round((value / max) * 100)

  return (
    <CardBox className={className}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{title}</h3>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>

      <div className="space-y-2">
        <Progress value={percentage} className="h-2" indicatorClassName={cn(progressColor)} />

        <div className="flex items-center justify-between text-sm">
          <p className="text-muted-foreground">{description || `${value} of ${max} complete`}</p>
          <p className="font-medium">{percentage}%</p>
        </div>
      </div>
    </CardBox>
  )
}
