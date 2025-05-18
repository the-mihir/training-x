"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react"

const topCourses = [
  {
    id: 1,
    title: "AI Prompting Basics",
    enrollments: 2845,
    completionRate: 78,
    rating: 4.9,
    revenue: 142250,
  },
  {
    id: 2,
    title: "Financial Literacy",
    enrollments: 2156,
    completionRate: 65,
    rating: 4.7,
    revenue: 107800,
  },
  {
    id: 3,
    title: "ChatGPT Productivity",
    enrollments: 1987,
    completionRate: 72,
    rating: 4.8,
    revenue: 99350,
  },
  {
    id: 4,
    title: "Entrepreneurship",
    enrollments: 1654,
    completionRate: 58,
    rating: 4.6,
    revenue: 82700,
  },
  {
    id: 5,
    title: "Copywriting & Marketing",
    enrollments: 1432,
    completionRate: 61,
    rating: 4.5,
    revenue: 71600,
  },
]

export function TopCourses() {
  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader>
        <CardTitle>Top Performing Courses</CardTitle>
        <CardDescription>Courses with highest enrollments and completion rates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {topCourses.map((course) => (
            <div key={course.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{course.title}</h4>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm">{course.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{course.enrollments} enrollments</span>
                <span>${course.revenue.toLocaleString()}</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Completion Rate</span>
                  <span>{course.completionRate}%</span>
                </div>
                <Progress value={course.completionRate} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
