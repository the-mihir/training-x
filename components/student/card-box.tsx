import type React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardBoxProps {
  title?: string
  description?: string
  className?: string
  contentClassName?: string
  headerClassName?: string
  footerClassName?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export default function CardBox({
  title,
  description,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  children,
  footer,
}: CardBoxProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      {(title || description) && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn("", contentClassName)}>{children}</CardContent>
      {footer && <CardFooter className={cn("border-t bg-muted/50", footerClassName)}>{footer}</CardFooter>}
    </Card>
  )
}
