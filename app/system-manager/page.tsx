"use client"

import { useState } from "react"
import SectionTitle from "@/components/system-manager/section-title"
import StatsCard from "@/components/system-manager/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChartContainer } from "@/components/ui/chart"
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {
  Users,
  BookOpen,
  Gamepad2,
  AlertTriangle,
  BarChart3,
  Activity,
  Clock,
  Eye,
  ArrowRight,
  RefreshCw,
} from "lucide-react"

export default function SystemManagerDashboard() {
  const [timeRange, setTimeRange] = useState("7days")

  // Mock data for stats
  const statsData = [
    {
      title: "Total Users",
      value: "12,845",
      icon: <Users className="h-4 w-4" />,
      description: "Active platform users",
      trend: {
        value: 12,
        isPositive: true,
      },
    },
    {
      title: "Active Sessions",
      value: "1,284",
      icon: <Activity className="h-4 w-4" />,
      description: "Current active users",
      trend: {
        value: 8,
        isPositive: true,
      },
    },
    {
      title: "Course Enrollments",
      value: "8,492",
      icon: <BookOpen className="h-4 w-4" />,
      description: "Total course enrollments",
      trend: {
        value: 5,
        isPositive: true,
      },
    },
    {
      title: "Simulation Usage",
      value: "3,156",
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Total simulation sessions",
      trend: {
        value: 3,
        isPositive: false,
      },
    },
  ]

  // Mock data for system alerts
  const systemAlerts = [
    {
      id: 1,
      title: "API Rate Limit Exceeded",
      description: "The API rate limit was exceeded for the content delivery service.",
      severity: "High",
      time: "10 minutes ago",
      status: "Active",
    },
    {
      id: 2,
      title: "Database Backup Completed",
      description: "The daily database backup was completed successfully.",
      severity: "Info",
      time: "2 hours ago",
      status: "Resolved",
    },
    {
      id: 3,
      title: "Slow Response Time",
      description: "The course content service is experiencing slow response times.",
      severity: "Medium",
      time: "1 hour ago",
      status: "Active",
    },
    {
      id: 4,
      title: "New User Registration Spike",
      description: "Unusual spike in new user registrations detected.",
      severity: "Low",
      time: "3 hours ago",
      status: "Monitoring",
    },
    {
      id: 5,
      title: "Payment Gateway Error",
      description: "Intermittent errors reported with the payment gateway.",
      severity: "Medium",
      time: "4 hours ago",
      status: "Investigating",
    },
  ]

  // Mock data for user activity
  const userActivity = [
    {
      id: 1,
      user: "John Doe",
      action: "Completed AI Prompting Basics course",
      time: "15 minutes ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Started Customer Service Simulation",
      time: "32 minutes ago",
    },
    {
      id: 3,
      user: "Robert Johnson",
      action: "Submitted feedback for Financial Literacy course",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: "Emily Davis",
      action: "Earned 'AI Prompt Engineer' certificate",
      time: "2 hours ago",
    },
    {
      id: 5,
      user: "Michael Wilson",
      action: "Registered new account",
      time: "3 hours ago",
    },
  ]

  // Mock data for usage trends
  const usageTrendsData = [
    { day: "Mon", courses: 120, simulations: 45, assessments: 78 },
    { day: "Tue", courses: 132, simulations: 62, assessments: 85 },
    { day: "Wed", courses: 145, simulations: 55, assessments: 97 },
    { day: "Thu", courses: 155, simulations: 75, assessments: 105 },
    { day: "Fri", courses: 165, simulations: 80, assessments: 110 },
    { day: "Sat", courses: 180, simulations: 65, assessments: 95 },
    { day: "Sun", courses: 190, simulations: 70, assessments: 100 },
  ]

  // Mock data for content engagement
  const contentEngagementData = [
    { name: "AI Prompting", value: 85 },
    { name: "Financial Literacy", value: 65 },
    { name: "Trade Skills", value: 75 },
    { name: "Entrepreneurship", value: 80 },
    { name: "Copywriting", value: 60 },
    { name: "ChatGPT", value: 90 },
  ]

  return (
    <div className="space-y-6">
      <SectionTitle title="System Manager Dashboard" description="Monitor platform activity and system health" />

      {/* Time Range Filter */}
      <div className="flex justify-between items-center">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24hours">Last 24 Hours</SelectItem>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="90days">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Usage Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-500" />
            Platform Usage Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ChartContainer
              config={{
                courses: {
                  label: "Course Views",
                  color: "hsl(var(--chart-1))",
                },
                simulations: {
                  label: "Simulation Sessions",
                  color: "hsl(var(--chart-2))",
                },
                assessments: {
                  label: "Assessments Taken",
                  color: "hsl(var(--chart-3))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={usageTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="courses" stroke="var(--color-courses)" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="simulations" stroke="var(--color-simulations)" />
                  <Line type="monotone" dataKey="assessments" stroke="var(--color-assessments)" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Content Engagement Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-500" />
            Content Engagement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ChartContainer
              config={{
                value: {
                  label: "Engagement Score",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={contentEngagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="var(--color-value)" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Two Column Layout for Alerts and Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* System Alerts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              System Alerts
            </CardTitle>
            <Button variant="ghost" size="sm" className="gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div
                    className={`mt-0.5 h-2 w-2 rounded-full ${
                      alert.severity === "High"
                        ? "bg-red-500"
                        : alert.severity === "Medium"
                          ? "bg-amber-500"
                          : alert.severity === "Low"
                            ? "bg-blue-500"
                            : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">{alert.title}</p>
                      <Badge
                        variant="outline"
                        className={
                          alert.status === "Active" || alert.status === "Investigating"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : alert.status === "Monitoring"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {alert.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {alert.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent User Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              Recent User Activity
            </CardTitle>
            <Button variant="ghost" size="sm" className="gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-sm">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
