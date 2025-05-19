"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GradientCard } from "@/components/ui/gradient-card"
import { AnimatedChart } from "@/components/ui/animated-chart"
import { StatsCard } from "@/components/ui/stats-card"
import { ActivityFeed } from "@/components/ui/activity-feed"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  DollarSign,
  BookOpen,
  BarChart2,
  AlertTriangle,
  CheckCircle,
  Bell,
  Server,
  Database,
  Shield,
  Settings,
} from "lucide-react"

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data for charts
  const revenueData = [
    { name: "Jan", value: 12000 },
    { name: "Feb", value: 15000 },
    { name: "Mar", value: 18000 },
    { name: "Apr", value: 22000 },
    { name: "May", value: 28000 },
    { name: "Jun", value: 32000 },
  ]

  const userGrowthData = [
    { name: "Jan", value: 500 },
    { name: "Feb", value: 800 },
    { name: "Mar", value: 1200 },
    { name: "Apr", value: 1800 },
    { name: "May", value: 2500 },
    { name: "Jun", value: 3200 },
  ]

  const courseEngagementData = [
    { name: "AI Prompting", value: 35 },
    { name: "Financial Literacy", value: 25 },
    { name: "Critical Thinking", value: 15 },
    { name: "Trade Skills", value: 10 },
    { name: "Time Management", value: 15 },
  ]

  const activityItems = [
    {
      id: "1",
      user: { name: "John Smith", initials: "JS", avatar: "/placeholder.svg?key=7lpwf" },
      action: "created a new course",
      target: "Advanced AI Prompting",
      timestamp: "1 hour ago",
      status: "success" as const,
    },
    {
      id: "2",
      user: { name: "Sarah Johnson", initials: "SJ", avatar: "/placeholder.svg?key=oh9lj" },
      action: "updated the billing settings",
      timestamp: "3 hours ago",
      status: "info" as const,
    },
    {
      id: "3",
      user: { name: "Michael Chen", initials: "MC", avatar: "/placeholder.svg?key=wq8vc" },
      action: "deleted a user account",
      target: "user@example.com",
      timestamp: "Yesterday",
      status: "warning" as const,
    },
    {
      id: "4",
      user: { name: "Lisa Wong", initials: "LW", avatar: "/placeholder.svg?key=8vg3f" },
      action: "approved a new showcase submission",
      timestamp: "2 days ago",
      status: "success" as const,
    },
  ]

  const alertItems = [
    {
      id: "1",
      title: "System Maintenance",
      description: "Scheduled maintenance on May 20, 2023, from 2:00 AM to 4:00 AM UTC",
      severity: "info",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      title: "Payment Processing Error",
      description: "Multiple failed payment attempts detected for subscription renewals",
      severity: "error",
      timestamp: "5 hours ago",
    },
    {
      id: "3",
      title: "New Feature Deployed",
      description: "AI Companion feature has been successfully deployed to production",
      severity: "success",
      timestamp: "Yesterday",
    },
    {
      id: "4",
      title: "High Server Load",
      description: "Unusual traffic spike detected on the simulation servers",
      severity: "warning",
      timestamp: "2 days ago",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Super Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your platform, users, and content from a central location</p>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 pt-6">
          {/* Stats Row */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              value="3,245"
              label="Total Users"
              variant="blue"
              icon={<Users className="h-6 w-6" />}
              trend={{ value: 12, positive: true, label: "vs last month" }}
            />
            <StatsCard
              value="$48,250"
              label="Monthly Revenue"
              variant="green"
              icon={<DollarSign className="h-6 w-6" />}
              trend={{ value: 8, positive: true, label: "vs last month" }}
            />
            <StatsCard
              value="24"
              label="Active Courses"
              variant="amber"
              icon={<BookOpen className="h-6 w-6" />}
              trend={{ value: 4, positive: true, label: "vs last month" }}
            />
            <StatsCard
              value="92%"
              label="User Satisfaction"
              variant="purple"
              icon={<CheckCircle className="h-6 w-6" />}
              trend={{ value: 3, positive: true, label: "vs last month" }}
            />
          </div>

          {/* Charts Row */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedChart
              title="Revenue Growth"
              subtitle="Monthly revenue in USD"
              data={revenueData}
              type="area"
              dataKeys={["value"]}
              colors={["#10b981"]}
            />
            <AnimatedChart
              title="User Growth"
              subtitle="Monthly new user registrations"
              data={userGrowthData}
              type="line"
              dataKeys={["value"]}
              colors={["#3b82f6"]}
            />
            <AnimatedChart
              title="Course Engagement"
              subtitle="Distribution by course category"
              data={courseEngagementData}
              type="pie"
              dataKeys={["value"]}
              colors={["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"]}
            />
          </div>

          {/* Activity and Alerts Row */}
          <div className="grid gap-6 md:grid-cols-2">
            <ActivityFeed title="Admin Activity Log" items={activityItems} />

            <GradientCard title="System Alerts" variant="pink" icon={<Bell className="h-5 w-5" />}>
              <div className="space-y-4">
                {alertItems.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-4 rounded-lg border p-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full",
                        alert.severity === "error"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          : alert.severity === "warning"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                            : alert.severity === "success"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                      )}
                    >
                      {alert.severity === "error" ? (
                        <AlertTriangle className="h-5 w-5" />
                      ) : alert.severity === "warning" ? (
                        <AlertTriangle className="h-5 w-5" />
                      ) : alert.severity === "success" ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <Bell className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{alert.title}</h4>
                      <p className="text-xs text-muted-foreground">{alert.description}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge
                          variant={
                            alert.severity === "error"
                              ? "destructive"
                              : alert.severity === "warning"
                                ? "warning"
                                : alert.severity === "success"
                                  ? "success"
                                  : "secondary"
                          }
                        >
                          {alert.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Alerts
                </Button>
              </div>
            </GradientCard>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6 pt-6">
          {/* Analytics content */}
          <div className="grid gap-6 md:grid-cols-2">
            <GradientCard title="Revenue Breakdown" variant="green" icon={<DollarSign className="h-5 w-5" />}>
              <div className="h-80">
                <AnimatedChart
                  title=""
                  data={[
                    { name: "Jan", subscriptions: 8000, courses: 3000, other: 1000 },
                    { name: "Feb", subscriptions: 10000, courses: 4000, other: 1000 },
                    { name: "Mar", subscriptions: 12000, courses: 5000, other: 1000 },
                    { name: "Apr", subscriptions: 15000, courses: 6000, other: 1000 },
                    { name: "May", subscriptions: 18000, courses: 8000, other: 2000 },
                    { name: "Jun", subscriptions: 22000, courses: 8000, other: 2000 },
                  ]}
                  type="bar"
                  dataKeys={["subscriptions", "courses", "other"]}
                  colors={["#10b981", "#3b82f6", "#f59e0b"]}
                  height={300}
                />
              </div>
            </GradientCard>

            <GradientCard title="User Demographics" variant="blue" icon={<Users className="h-5 w-5" />}>
              <div className="h-80">
                <AnimatedChart
                  title=""
                  data={[
                    { name: "Students", value: 45 },
                    { name: "Professionals", value: 30 },
                    { name: "Entrepreneurs", value: 15 },
                    { name: "Others", value: 10 },
                  ]}
                  type="pie"
                  dataKeys={["value"]}
                  colors={["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981"]}
                  height={300}
                />
              </div>
            </GradientCard>
          </div>

          <GradientCard title="Course Performance" variant="amber" icon={<BarChart2 className="h-5 w-5" />}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left text-sm font-medium">Course Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Enrollments</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Completion Rate</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Avg. Rating</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm">AI Prompting Basics</td>
                    <td className="px-4 py-3 text-sm">1,245</td>
                    <td className="px-4 py-3 text-sm">78%</td>
                    <td className="px-4 py-3 text-sm">4.8/5</td>
                    <td className="px-4 py-3 text-sm">$12,450</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm">Financial Literacy</td>
                    <td className="px-4 py-3 text-sm">980</td>
                    <td className="px-4 py-3 text-sm">65%</td>
                    <td className="px-4 py-3 text-sm">4.5/5</td>
                    <td className="px-4 py-3 text-sm">$9,800</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm">Critical Thinking</td>
                    <td className="px-4 py-3 text-sm">750</td>
                    <td className="px-4 py-3 text-sm">72%</td>
                    <td className="px-4 py-3 text-sm">4.7/5</td>
                    <td className="px-4 py-3 text-sm">$7,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm">Trade Skills</td>
                    <td className="px-4 py-3 text-sm">620</td>
                    <td className="px-4 py-3 text-sm">80%</td>
                    <td className="px-4 py-3 text-sm">4.9/5</td>
                    <td className="px-4 py-3 text-sm">$6,200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Time Management</td>
                    <td className="px-4 py-3 text-sm">540</td>
                    <td className="px-4 py-3 text-sm">68%</td>
                    <td className="px-4 py-3 text-sm">4.3/5</td>
                    <td className="px-4 py-3 text-sm">$5,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">
                Export Report
              </Button>
            </div>
          </GradientCard>
        </TabsContent>

        <TabsContent value="system" className="space-y-6 pt-6">
          {/* System content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GradientCard title="System Health" variant="green" icon={<CheckCircle className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-green-500" />
                    <span className="font-medium">API Server</span>
                  </div>
                  <Badge variant="success">Operational</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Database</span>
                  </div>
                  <Badge variant="success">Operational</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-amber-500" />
                    <span className="font-medium">AI Services</span>
                  </div>
                  <Badge variant="warning">Degraded</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Storage</span>
                  </div>
                  <Badge variant="success">Operational</Badge>
                </div>
              </div>
            </GradientCard>

            <GradientCard title="Security Status" variant="blue" icon={<Shield className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-medium">SSL Certificate</span>
                  </div>
                  <Badge variant="success">Valid</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Firewall</span>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-amber-500" />
                    <span className="font-medium">Vulnerability Scan</span>
                  </div>
                  <Badge variant="warning">3 Issues</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Data Encryption</span>
                  </div>
                  <Badge variant="success">Enabled</Badge>
                </div>
              </div>
            </GradientCard>

            <GradientCard title="System Resources" variant="purple" icon={<Settings className="h-5 w-5" />}>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">CPU Usage</span>
                    <span className="text-sm text-muted-foreground">42%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-2 rounded-full bg-blue-500" style={{ width: "42%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Memory Usage</span>
                    <span className="text-sm text-muted-foreground">68%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-2 rounded-full bg-amber-500" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Storage Usage</span>
                    <span className="text-sm text-muted-foreground">35%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "35%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Network Bandwidth</span>
                    <span className="text-sm text-muted-foreground">56%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: "56%" }}></div>
                  </div>
                </div>
              </div>
            </GradientCard>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <GradientCard title="Scheduled Maintenance" variant="amber" icon={<Settings className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium">Database Optimization</h3>
                  <p className="mt-1 text-xs text-muted-foreground">May 20, 2023 - 2:00 AM to 4:00 AM UTC</p>
                  <p className="mt-2 text-sm">
                    Scheduled maintenance to optimize database performance and apply security patches.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline">Database</Badge>
                    <Badge variant="outline">Maintenance</Badge>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium">AI Model Updates</h3>
                  <p className="mt-1 text-xs text-muted-foreground">May 25, 2023 - 1:00 AM to 3:00 AM UTC</p>
                  <p className="mt-2 text-sm">
                    Deploying new AI models and updating existing ones for improved performance.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline">AI Services</Badge>
                    <Badge variant="outline">Update</Badge>
                  </div>
                </div>
              </div>
            </GradientCard>

            <GradientCard title="System Logs" variant="red" icon={<AlertTriangle className="h-5 w-5" />}>
              <div className="space-y-2">
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900/50 dark:bg-red-900/20">
                  <p className="text-xs text-red-800 dark:text-red-300">
                    <span className="font-mono font-bold">[ERROR]</span> Failed to process payment for user ID: 8721 -
                    2023-05-18 14:32:15
                  </p>
                </div>
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-900/20">
                  <p className="text-xs text-amber-800 dark:text-amber-300">
                    <span className="font-mono font-bold">[WARNING]</span> High memory usage detected on AI service -
                    2023-05-18 12:15:43
                  </p>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900/50 dark:bg-blue-900/20">
                  <p className="text-xs text-blue-800 dark:text-blue-300">
                    <span className="font-mono font-bold">[INFO]</span> New course "Advanced AI Prompting" created by
                    admin - 2023-05-18 10:45:22
                  </p>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900/50 dark:bg-blue-900/20">
                  <p className="text-xs text-blue-800 dark:text-blue-300">
                    <span className="font-mono font-bold">[INFO]</span> System backup completed successfully -
                    2023-05-18 03:00:05
                  </p>
                </div>
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-900/20">
                  <p className="text-xs text-amber-800 dark:text-amber-300">
                    <span className="font-mono font-bold">[WARNING]</span> Unusual login activity detected for user ID:
                    5432 - 2023-05-17 22:18:37
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    View All Logs
                  </Button>
                </div>
              </div>
            </GradientCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
