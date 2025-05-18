"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MoreHorizontal,
  Search,
  PlusCircle,
  Download,
  Trash,
  PenSquare,
  Eye,
  FileEdit,
  Copy,
  BarChart3,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const courses = [
  {
    id: "c1",
    title: "AI Prompting Basics",
    category: "AI Skills",
    status: "published",
    students: 2845,
    completionRate: 78,
    rating: 4.9,
    revenue: 142250,
    lastUpdated: "2023-09-15",
    instructor: "Elena Rodriguez",
  },
  {
    id: "c2",
    title: "Financial Literacy",
    category: "Finance",
    status: "published",
    students: 2156,
    completionRate: 65,
    rating: 4.7,
    revenue: 107800,
    lastUpdated: "2023-08-22",
    instructor: "David Thompson",
  },
  {
    id: "c3",
    title: "ChatGPT Productivity",
    category: "AI Skills",
    status: "published",
    students: 1987,
    completionRate: 72,
    rating: 4.8,
    revenue: 99350,
    lastUpdated: "2023-10-05",
    instructor: "Marcus Johnson",
  },
  {
    id: "c4",
    title: "Entrepreneurship",
    category: "Business",
    status: "published",
    students: 1654,
    completionRate: 58,
    rating: 4.6,
    revenue: 82700,
    lastUpdated: "2023-07-18",
    instructor: "Aisha Patel",
  },
  {
    id: "c5",
    title: "Copywriting & Marketing",
    category: "Marketing",
    status: "published",
    students: 1432,
    completionRate: 61,
    rating: 4.5,
    revenue: 71600,
    lastUpdated: "2023-09-30",
    instructor: "Carlos Rodriguez",
  },
  {
    id: "c6",
    title: "Advanced AI Prompt Engineering",
    category: "AI Skills",
    status: "draft",
    students: 0,
    completionRate: 0,
    rating: 0,
    revenue: 0,
    lastUpdated: "2023-10-20",
    instructor: "Elena Rodriguez",
  },
  {
    id: "c7",
    title: "Trade Skills for Beginners",
    category: "Trade Skills",
    status: "review",
    students: 0,
    completionRate: 0,
    rating: 0,
    revenue: 0,
    lastUpdated: "2023-10-18",
    instructor: "Jamal Williams",
  },
  {
    id: "c8",
    title: "Critical Thinking in the AI Age",
    category: "Personal Development",
    status: "published",
    students: 876,
    completionRate: 45,
    rating: 4.3,
    revenue: 43800,
    lastUpdated: "2023-08-05",
    instructor: "Sarah Johnson",
  },
]

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "published":
      return "bg-green-100 text-green-800"
    case "draft":
      return "bg-gray-100 text-gray-800"
    case "review":
      return "bg-yellow-100 text-yellow-800"
    case "archived":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getCategoryBadgeColor = (category: string) => {
  switch (category) {
    case "AI Skills":
      return "bg-purple-100 text-purple-800"
    case "Finance":
      return "bg-blue-100 text-blue-800"
    case "Business":
      return "bg-indigo-100 text-indigo-800"
    case "Marketing":
      return "bg-pink-100 text-pink-800"
    case "Trade Skills":
      return "bg-orange-100 text-orange-800"
    case "Personal Development":
      return "bg-teal-100 text-teal-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function CoursesTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Course
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Course</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Completion</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">
                  <div>
                    <p className="font-medium">{course.title}</p>
                    <p className="text-sm text-muted-foreground">By {course.instructor}</p>
                    <p className="text-xs text-muted-foreground">
                      Updated {new Date(course.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getCategoryBadgeColor(course.category)}>
                    {course.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusBadgeColor(course.status)}>
                    {course.status}
                  </Badge>
                </TableCell>
                <TableCell>{course.students.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="w-24">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs">{course.completionRate}%</span>
                    </div>
                    <Progress value={course.completionRate} className="h-2" />
                  </div>
                </TableCell>
                <TableCell>{course.rating > 0 ? course.rating.toFixed(1) : "N/A"}</TableCell>
                <TableCell>${course.revenue.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View course
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileEdit className="mr-2 h-4 w-4" />
                        Edit content
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PenSquare className="mr-2 h-4 w-4" />
                        Edit details
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Analytics
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        Enrolled students
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete course
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
