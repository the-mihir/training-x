"use client"

import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  description?: string
  className?: string
}

function SectionTitle({ title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-6", className)}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground mt-1">{description}</p>}
    </div>
  )
}

export default SectionTitle
