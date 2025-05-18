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
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
  BookOpen,
  Eye,
  BarChart,
  AlertTriangle,
  FileEdit,
} from "lucide-react"

export default function CourseMonitoringPage() {
  // Mock data for courses
  const mockCourses = [
    {
      id: 1,
      title: "AI Prompting Basics",
      category: "AI Skills",
      enrollments: 1245,
      completions: 876,
      completionRate: 70,
      avgRating: 4.7,
      issueReports: 3,
      status: "Active",
    },
    {
      id: 2,
      title: "Financial Literacy",
      category: "Finance",
      enrollments: 987,
      completions: 543,
      completionRate: 55,
      avgRating: 4.2,
      issueReports: 8,
      status: "Active",
    },
    {
      id: 3,
      title: "Trade Skills Fundamentals",
      category: "Vocational",
      enrollments: 756,
      completions: 432,
      completionRate: 57,
      avgRating: 4.5,
      issueReports: 2,
      status: "Active",
    },
    {
      id: 4,
      title: "Entrepreneurship 101",
      category: "Business",
      enrollments: 1102,
      completions: 687,
      completionRate: 62,
      avgRating: 4.8,
      issueReports: 1,
      status: "Active",
    },
    {
      id: 5,
      title: "Copywriting & Marketing",
      category: "Marketing",
      enrollments: 843,
      completions: 521,
      completionRate: 62,
      avgRating: 4.3,
      issueReports: 5,
      status: "Active",
    },
    {
      id: 6,
      title: "ChatGPT Productivity",
      category: "AI Skills",
      enrollments: 1532,
      completions: 1024,
      completionRate: 67,
      avgRating: 4.6,
      issueReports: 4,
      status: "Active",
    },
    {
      id: 7,
      title: "SEO & Social Media",
      category: "Marketing",
      enrollments: 921,
      completions: 578,
      completionRate: 63,
      avgRating: 4.4,
      issueReports: 3,
      status: "Active",
    },
    {
      id: 8,
      title: "Critical Thinking",
      category: "Personal Development",
      enrollments: 654,
      completions: 321,
      completionRate: 49,
      avgRating: 4.1,
      issueReports: 7,
      status: "Under Review",
    },
  ]

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter courses based on search query and filters
  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || course.category.toLowerCase() === categoryFilter.toLowerCase()

    const matchesStatus = statusFilter === "all" || course.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Course Monitoring"
        description="Track course enrollments, completions, and reported issues"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Course Performance Monitoring
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
                  placeholder="Search courses..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ai skills">AI Skills</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="vocational">Vocational</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="personal development">Personal Development</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="under review">Under Review</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline">Export Data</Button>
          </div>

          {/* Courses Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead className="hidden md:table-cell">Enrollments</TableHead>
                  <TableHead>Completion Rate</TableHead>
                  <TableHead className="hidden md:table-cell">Avg. Rating</TableHead>
                  <TableHead>Issues</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <div className="font-medium">{course.title}</div>
                      <div className="text-sm text-muted-foreground">{course.category}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {course.enrollments}
                      <div className="text-sm text-muted-foreground">{course.completions} completions</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={course.completionRate} className="h-2" />
                        <span className="text-sm">{course.completionRate}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center">
                        <span className="mr-1">{course.avgRating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          course.issueReports > 5
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : course.issueReports > 2
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {course.issueReports}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          course.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : course.status === "Under Review"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                        }
                      >
                        {course.status}
                      </Badge>
                    </TableCell>
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
                            <BarChart className="mr-2 h-4 w-4" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            View Issues
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileEdit className="mr-2 h-4 w-4" />
                            Edit Status
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
