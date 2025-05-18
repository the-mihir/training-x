"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "/testimonials/sarah-johnson.png",
    },
    action: "completed",
    item: "AI Prompting Basics",
    itemType: "course",
    time: "2 minutes ago",
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      email: "michael.c@example.com",
      avatar: "/testimonials/michael-chen.png",
    },
    action: "enrolled",
    item: "Financial Literacy",
    itemType: "course",
    time: "15 minutes ago",
  },
  {
    id: 3,
    user: {
      name: "Elena Rodriguez",
      email: "elena.r@example.com",
      avatar: "/testimonials/elena-rodriguez.png",
    },
    action: "earned",
    item: "AI Prompt Engineer",
    itemType: "badge",
    time: "45 minutes ago",
  },
  {
    id: 4,
    user: {
      name: "Jamal Williams",
      email: "jamal.w@example.com",
      avatar: "/testimonials/jamal-williams.png",
    },
    action: "completed",
    item: "Interview Simulation",
    itemType: "simulation",
    time: "1 hour ago",
  },
  {
    id: 5,
    user: {
      name: "David Thompson",
      email: "david.t@example.com",
      avatar: "/testimonials/david-thompson.png",
    },
    action: "submitted",
    item: "AI Art Project",
    itemType: "showcase",
    time: "2 hours ago",
  },
  {
    id: 6,
    user: {
      name: "Aisha Patel",
      email: "aisha.p@example.com",
      avatar: "/testimonials/aisha-patel.png",
    },
    action: "purchased",
    item: "Premium Subscription",
    itemType: "subscription",
    time: "3 hours ago",
  },
]

const getActionColor = (action: string) => {
  switch (action) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "enrolled":
      return "bg-blue-100 text-blue-800"
    case "earned":
      return "bg-purple-100 text-purple-800"
    case "submitted":
      return "bg-yellow-100 text-yellow-800"
    case "purchased":
      return "bg-pink-100 text-pink-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getItemTypeColor = (itemType: string) => {
  switch (itemType) {
    case "course":
      return "bg-blue-100 text-blue-800"
    case "badge":
      return "bg-purple-100 text-purple-800"
    case "simulation":
      return "bg-green-100 text-green-800"
    case "showcase":
      return "bg-yellow-100 text-yellow-800"
    case "subscription":
      return "bg-pink-100 text-pink-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function RecentActivities() {
  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest user activities across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.user.name}</p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity.user.email}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className={getActionColor(activity.action)}>
                    {activity.action}
                  </Badge>
                  <span className="text-sm">{activity.item}</span>
                  <Badge variant="outline" className={getItemTypeColor(activity.itemType)}>
                    {activity.itemType}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
