"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Users, BookOpen, Award, DollarSign, Activity, Clock, Star } from "lucide-react"

export function AnalyticsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,548</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              12%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">145</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              8%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Certifications</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3,782</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              15%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$248,590</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              18%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">78.3%</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              5%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24m 32s</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              3%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">68.7%</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              7%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
          <Star className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.8/5.0</div>
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <span className="text-green-500 flex items-center mr-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              2%
            </span>
            from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
