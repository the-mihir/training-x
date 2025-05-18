import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ReportSectionProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  actions?: React.ReactNode
}

const ReportSection = ({ title, description, children, className, actions }: ReportSectionProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        {actions && <div>{actions}</div>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default ReportSection
