"use client"

import { useState } from "react"
import SectionTitle from "@/components/system-manager/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer } from "@/components/ui/chart"
import {
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ChevronLeft, ChevronRight, Search, MessageSquare, BarChart3, PieChart, Download, Filter } from "lucide-react"

export default function FeedbackReportPage() {
  const [timeRange, setTimeRange] = useState("30days")
  const [contentType, setContentType] = useState("all")

  // Mock data for feedback by category
  const feedbackByCategoryData = [
    { name: "Content Issues", value: 32 },
    { name: "Technical Problems", value: 24 },
    { name: "Suggestions", value: 18 },
    { name: "Praise", value: 26 },
  ]

  // Colors for pie chart
  const COLORS = ["#ef4444", "#f97316", "#3b82f6", "#22c55e"]

  // Mock data for feedback by content
  const feedbackByContentData = [
    { name: "AI Prompting Basics", issues: 8, suggestions: 5, praise: 12 },
    { name: "Financial Literacy", issues: 6, suggestions: 3, praise: 8 },
    { name: "Trade Skills", issues: 12, suggestions: 4, praise: 6 },
    { name: "Entrepreneurship", issues: 5, suggestions: 2, praise: 10 },
    { name: "Copywriting", issues: 7, suggestions: 3, praise: 5 },
    { name: "ChatGPT Productivity", issues: 4, suggestions: 6, praise: 15 },
  ]

  // Mock data for recent feedback
  const recentFeedback = [
    {
      id: 1,
      user: "John Doe",
      content: "The AI Prompting Basics course has outdated information in module 3.",
      contentType: "Course",
      contentName: "AI Prompting Basics",
      category: "Content Issue",
      createdAt: "2023-05-12T10:30:00Z",
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "Customer Service Simulation freezes at the third scenario every time.",
      contentType: "Simulation",
      contentName: "Customer Service Simulation",
      category: "Technical Issue",
      createdAt: "2023-05-13T14:45:00Z",
    },
    {
      id: 3,
      user: "Robert Johnson",
      content: "The Financial Literacy course was extremely helpful. Would love to see an advanced version.",
      contentType: "Course",
      contentName: "Financial Literacy",
      category: "Suggestion",
      createdAt: "2023-05-11T09:15:00Z",
    },
    {
      id: 4,
      user: "Emily Davis",
      content: "Certificate download is not working for the Prompt Engineering course.",
      contentType: "Certificate",
      contentName: "Prompt Engineering",
      category: "Technical Issue",
      createdAt: "2023-05-14T12:20:00Z",
    },
    {
      id: 5,
      user: "Michael Wilson",
      content: "The Interview Simulation has incorrect scoring for verbal responses.",
      contentType: "Simulation",
      contentName: "Interview Simulation",
      category: "Content Issue",
      createdAt: "2023-05-09T16:45:00Z",
    },
    {
      id: 6,
      user: "Sarah Thompson",
      content: "Trade Skills course videos are not loading on mobile devices.",
      contentType: "Course",
      contentName: "Trade Skills",
      category: "Technical Issue",
      createdAt: "2023-05-12T08:30:00Z",
    },
    {
      id: 7,
      user: "David Martinez",
      content: "The platform is amazing! Would love to see more AI-related courses.",
      contentType: "Platform",
      contentName: "General",
      category: "Praise",
      createdAt: "2023-05-07T15:10:00Z",
    },
    {
      id: 8,
      user: "Jennifer Garcia",
      content: "SEO course has broken links in the resources section.",
      contentType: "Course",
      contentName: "SEO & Social Media",
      category: "Content Issue",
      createdAt: "2023-05-11T11:25:00Z",
    },
  ]

  // State for search
  const [searchQuery, setSearchQuery] = useState("")

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  // Filter feedback based on search query
  const filteredFeedback = recentFeedback.filter((feedback) =>
    feedback.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <SectionTitle title="Feedback Reports" description="Analyze user feedback and identify improvement areas" />

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
              <SelectItem value="platform">Platform</SelectItem>
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

      {/* Feedback Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            Feedback Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="category">
            <TabsList className="mb-4">
              <TabsTrigger value="category" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                By Category
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                By Content
              </TabsTrigger>
            </TabsList>

            <TabsContent value="category">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={feedbackByCategoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {feedbackByCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="content">
              <div className="h-80">
                <ChartContainer
                  config={{
                    issues: {
                      label: "Issues",
                      color: "hsl(var(--chart-1))",
                    },
                    suggestions: {
                      label: "Suggestions",
                      color: "hsl(var(--chart-2))",
                    },
                    praise: {
                      label: "Praise",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={feedbackByContentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="issues" fill="var(--color-issues)" />
                      <Bar dataKey="suggestions" fill="var(--color-suggestions)" />
                      <Bar dataKey="praise" fill="var(--color-praise)" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Recent Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search feedback..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Feedback</TableHead>
                  <TableHead className="hidden md:table-cell">Content</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeedback.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell>{feedback.user}</TableCell>
                    <TableCell className="max-w-xs truncate">{feedback.content}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="font-medium">{feedback.contentName}</div>
                      <div className="text-sm text-muted-foreground">{feedback.contentType}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          feedback.category === "Technical Issue" || feedback.category === "Content Issue"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : feedback.category === "Suggestion"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {feedback.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{formatDate(feedback.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
