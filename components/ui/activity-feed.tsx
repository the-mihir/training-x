import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export interface ActivityItem {
  id: string
  user: {
    name: string
    avatar?: string
    initials: string
  }
  action: string
  target?: string
  timestamp: string
  status?: "success" | "warning" | "error" | "info"
  metadata?: {
    label: string
    value: string
  }[]
}

interface ActivityFeedProps {
  title?: string
  items: ActivityItem[]
  className?: string
  maxItems?: number
}

export function ActivityFeed({ title = "Recent Activity", items, className, maxItems = 5 }: ActivityFeedProps) {
  const displayItems = items.slice(0, maxItems)

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-6">
          {displayItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-4">
              <Avatar className="h-9 w-9 border-2 border-background">
                <AvatarImage src={item.user.avatar || "/placeholder.svg"} alt={item.user.name} />
                <AvatarFallback className="bg-primary/10 text-primary">{item.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">{item.user.name}</p>
                  <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                  {item.status && (
                    <Badge
                      variant={
                        item.status === "success"
                          ? "success"
                          : item.status === "warning"
                            ? "warning"
                            : item.status === "error"
                              ? "destructive"
                              : "secondary"
                      }
                      className="ml-auto"
                    >
                      {item.status}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.action}
                  {item.target && <span className="font-medium text-foreground"> {item.target}</span>}
                </p>
                {item.metadata && item.metadata.length > 0 && (
                  <div className="mt-2 rounded-md bg-muted/50 p-2">
                    <dl className="grid grid-cols-2 gap-1 text-xs">
                      {item.metadata.map((meta, index) => (
                        <div key={index} className="flex flex-col">
                          <dt className="font-medium text-muted-foreground">{meta.label}:</dt>
                          <dd className="text-foreground">{meta.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {items.length > maxItems && (
          <div className="mt-4 text-center">
            <button className="text-xs font-medium text-primary hover:underline">
              View all {items.length} activities
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
