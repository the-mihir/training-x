"use client"

import { useState } from "react"
import SectionTitle from "@/components/system-manager/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart3, LineChartIcon, PieChartIcon, Download, Filter } from "lucide-react"
import { ChartContainer } from "@/components/ui/chart"
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts"

export default function PerformanceReportsPage() {
  const [timeRange, setTimeRange] = useState("30days")
  const [contentType, setContentType] = useState("all")

  // Mock data for performance over time
  const performanceData = [
    { month: "Jan", avgScore: 72, completionRate: 58 },
    { month: "Feb", avgScore: 75, completionRate: 62 },
    { month: "Mar", avgScore: 78, completionRate: 65 },
    { month: "Apr", avgScore: 74, completionRate: 60 },
    { month: "May", avgScore: 80, completionRate: 68 },
    { month: "Jun", avgScore: 82, completionRate: 70 },
    { month: "Jul", avgScore: 85, completionRate: 72 },
    { month: "Aug", avgScore: 83, completionRate: 75 },
    { month: "Sep", avgScore: 87, completionRate: 78 },
    { month: "Oct", avgScore: 89, completionRate: 80 },
    { month: "Nov", avgScore: 86, completionRate: 76 },
    { month: "Dec", avgScore: 90, completionRate: 82 },
  ]

  // Mock data for course performance
  const coursePerformanceData = [
    { name: "AI Prompting Basics", avgScore: 88, completionRate: 75 },
    { name: "Financial Literacy", avgScore: 76, completionRate: 62 },
    { name: "Trade Skills", avgScore: 82, completionRate: 68 },
    { name: "Entrepreneurship", avgScore: 85, completionRate: 70 },
    { name: "Copywriting", avgScore: 79, completionRate: 65 },
    { name: "ChatGPT Productivity", avgScore: 90, completionRate: 78 },
  ]

  // Mock data for score distribution
  const scoreDistributionData = [
    { name: "90-100", value: 25, color: "#22c55e" },
    { name: "80-89", value: 35, color: "#84cc16" },
    { name: "70-79", value: 20, color: "#facc15" },
    { name: "60-69", value: 12, color: "#f97316" },
    { name: "Below 60", value: 8, color: "#ef4444" },
  ]

  // Mock data for top performers
  const topPerformers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      avgScore: 95,
      completedCourses: 8,
      badges: 12,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avgScore: 93,
      completedCourses: 7,
      badges: 10,
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      avgScore: 91,
      completedCourses: 6,
      badges: 9,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      avgScore: 90,
      completedCourses: 9,
      badges: 14,
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      avgScore: 89,
      completedCourses: 5,
      badges: 8,
    },
  ]

  return (
    <div className="space-y-6">
      <SectionTitle title="Performance Reports" description="Analyze user performance across courses and simulations" />

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Select value={contentType} onValueChange={setContentType}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Content</SelectItem>
              <SelectItem value="courses">Courses Only</SelectItem>
              <SelectItem value="simulations">Simulations Only</SelectItem>
              <SelectItem value="assessments">Assessments Only</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-500" />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="timeline">
            <TabsList className="mb-4">
              <TabsTrigger value="timeline" className="flex items-center gap-2">
                <LineChartIcon className="h-4 w-4" />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                By Course
              </TabsTrigger>
              <TabsTrigger value="distribution" className="flex items-center gap-2">
                <PieChartIcon className="h-4 w-4" />
                Score Distribution
              </TabsTrigger>
            </TabsList>

            <TabsContent value="timeline">
              <div className="h-80">
                <ChartContainer
                  config={{
                    avgScore: {
                      label: "Average Score",
                      color: "hsl(var(--chart-1))",
                    },
                    completionRate: {
                      label: "Completion Rate",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="avgScore" stroke="var(--color-avgScore)" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="completionRate" stroke="var(--color-completionRate)" />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="h-80">
                <ChartContainer
                  config={{
                    avgScore: {
                      label: "Average Score",
                      color: "hsl(var(--chart-1))",
                    },
                    completionRate: {
                      label: "Completion Rate",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={coursePerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="avgScore" fill="var(--color-avgScore)" />
                      <Bar dataKey="completionRate" fill="var(--color-completionRate)" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </TabsContent>

            <TabsContent value="distribution">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={scoreDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {scoreDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Average Score</TableHead>
                <TableHead>Completed Courses</TableHead>
                <TableHead>Badges Earned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPerformers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    >
                      {user.avgScore}%
                    </Badge>
                  </TableCell>
                  <TableCell>{user.completedCourses}</TableCell>
                  <TableCell>{user.badges}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Low Performers */}
      <Card>
        <CardHeader>
          <CardTitle>Areas Needing Improvement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Critical Thinking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">62%</div>
                  <p className="text-xs text-muted-foreground mt-1">Average score across all users</p>
                  <div className="mt-2 text-sm text-red-600">Lowest performing course</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Financial Literacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <p className="text-xs text-muted-foreground mt-1">Average score across all users</p>
                  <div className="mt-2 text-sm text-amber-600">Below target performance</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Interview Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">65%</div>
                  <p className="text-xs text-muted-foreground mt-1">Average score across all users</p>
                  <div className="mt-2 text-sm text-amber-600">High dropout rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
