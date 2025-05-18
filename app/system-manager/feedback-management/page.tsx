"use client"

import { useState } from "react"
import SectionTitle from "@/components/system-manager/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
  Flag,
  Eye,
  CheckCircle,
  XCircle,
  MessageSquare,
  User,
} from "lucide-react"

export default function FeedbackManagementPage() {
  // Mock data for feedback items
  const mockFeedback = [
    {
      id: 1,
      user: "John Doe",
      email: "john.doe@example.com",
      content: "The AI Prompting Basics course has outdated information in module 3.",
      contentType: "Course",
      contentName: "AI Prompting Basics",
      category: "Content Issue",
      status: "Open",
      priority: "Medium",
      assignedTo: "Content Team",
      createdAt: "2 days ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      email: "jane.smith@example.com",
      content: "Customer Service Simulation freezes at the third scenario every time.",
      contentType: "Simulation",
      contentName: "Customer Service Simulation",
      category: "Technical Issue",
      status: "In Progress",
      priority: "High",
      assignedTo: "Tech Support",
      createdAt: "1 day ago",
    },
    {
      id: 3,
      user: "Robert Johnson",
      email: "robert.johnson@example.com",
      content: "The Financial Literacy course was extremely helpful. Would love to see an advanced version.",
      contentType: "Course",
      contentName: "Financial Literacy",
      category: "Suggestion",
      status: "Open",
      priority: "Low",
      assignedTo: "Unassigned",
      createdAt: "3 days ago",
    },
    {
      id: 4,
      user: "Emily Davis",
      email: "emily.davis@example.com",
      content: "Certificate download is not working for the Prompt Engineering course.",
      contentType: "Certificate",
      contentName: "Prompt Engineering",
      category: "Technical Issue",
      status: "Open",
      priority: "High",
      assignedTo: "Unassigned",
      createdAt: "12 hours ago",
    },
    {
      id: 5,
      user: "Michael Wilson",
      email: "michael.wilson@example.com",
      content: "The Interview Simulation has incorrect scoring for verbal responses.",
      contentType: "Simulation",
      contentName: "Interview Simulation",
      category: "Content Issue",
      status: "Resolved",
      priority: "Medium",
      assignedTo: "Content Team",
      createdAt: "5 days ago",
    },
    {
      id: 6,
      user: "Sarah Thompson",
      email: "sarah.thompson@example.com",
      content: "Trade Skills course videos are not loading on mobile devices.",
      contentType: "Course",
      contentName: "Trade Skills",
      category: "Technical Issue",
      status: "In Progress",
      priority: "High",
      assignedTo: "Tech Support",
      createdAt: "2 days ago",
    },
    {
      id: 7,
      user: "David Martinez",
      email: "david.martinez@example.com",
      content: "The platform is amazing! Would love to see more AI-related courses.",
      contentType: "Platform",
      contentName: "General",
      category: "Praise",
      status: "Resolved",
      priority: "Low",
      assignedTo: "Product Team",
      createdAt: "1 week ago",
    },
    {
      id: 8,
      user: "Jennifer Garcia",
      email: "jennifer.garcia@example.com",
      content: "SEO course has broken links in the resources section.",
      contentType: "Course",
      contentName: "SEO & Social Media",
      category: "Content Issue",
      status: "Open",
      priority: "Medium",
      assignedTo: "Unassigned",
      createdAt: "3 days ago",
    },
  ]

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  // Filter feedback based on search query and filters
  const filteredFeedback = mockFeedback.filter((feedback) => {
    const matchesSearch =
      feedback.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.contentName.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || feedback.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesCategory = categoryFilter === "all" || feedback.category.toLowerCase() === categoryFilter.toLowerCase()

    const matchesPriority = priorityFilter === "all" || feedback.priority.toLowerCase() === priorityFilter.toLowerCase()

    return matchesSearch && matchesStatus && matchesCategory && matchesPriority
  })

  return (
    <div className="space-y-6">
      <SectionTitle title="Feedback Management" description="Track and manage user feedback, issues, and suggestions" />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flag className="h-5 w-5 text-blue-500" />
            Feedback & Issue Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search feedback..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technical issue">Technical Issue</SelectItem>
                  <SelectItem value="content issue">Content Issue</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                  <SelectItem value="praise">Praise</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-full md:w-32">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline">Export Data</Button>
          </div>

          {/* Feedback Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feedback</TableHead>
                  <TableHead className="hidden md:table-cell">Content</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Priority</TableHead>
                  <TableHead className="hidden md:table-cell">Assigned To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFeedback.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell>
                      <div className="font-medium truncate max-w-xs">{feedback.content}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {feedback.user} • {feedback.createdAt}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="font-medium">{feedback.contentName}</div>
                      <div className="text-sm text-muted-foreground">{feedback.contentType}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          feedback.category === "Technical Issue"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : feedback.category === "Content Issue"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : feedback.category === "Suggestion"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {feedback.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          feedback.status === "Open"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : feedback.status === "In Progress"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {feedback.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge
                        variant="outline"
                        className={
                          feedback.priority === "High"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : feedback.priority === "Medium"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {feedback.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{feedback.assignedTo}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Resolved
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4" />
                            Close Issue
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Reply to User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
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
