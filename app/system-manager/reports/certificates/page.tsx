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
import { ChevronLeft, ChevronRight, MoreHorizontal, Search, Download, Filter, Award, Eye, FileText } from "lucide-react"

export default function CertificatesReportPage() {
  // Mock data for certificates
  const mockCertificates = [
    {
      id: 1,
      user: "John Doe",
      email: "john.doe@example.com",
      certificate: "AI Prompt Engineer",
      course: "AI Prompting Basics",
      issueDate: "2023-05-10T14:30:00Z",
      status: "Issued",
      downloadCount: 3,
    },
    {
      id: 2,
      user: "Jane Smith",
      email: "jane.smith@example.com",
      certificate: "Financial Literacy Specialist",
      course: "Financial Literacy",
      issueDate: "2023-05-08T10:15:00Z",
      status: "Issued",
      downloadCount: 1,
    },
    {
      id: 3,
      user: "Robert Johnson",
      email: "robert.johnson@example.com",
      certificate: "Trade Skills Professional",
      course: "Trade Skills Fundamentals",
      issueDate: "2023-05-12T09:45:00Z",
      status: "Issued",
      downloadCount: 2,
    },
    {
      id: 4,
      user: "Emily Davis",
      email: "emily.davis@example.com",
      certificate: "Entrepreneurship Mastery",
      course: "Entrepreneurship 101",
      issueDate: "2023-05-05T16:20:00Z",
      status: "Issued",
      downloadCount: 4,
    },
    {
      id: 5,
      user: "Michael Wilson",
      email: "michael.wilson@example.com",
      certificate: "Marketing & Copywriting Expert",
      course: "Copywriting & Marketing",
      issueDate: "2023-05-11T11:30:00Z",
      status: "Issued",
      downloadCount: 0,
    },
    {
      id: 6,
      user: "Sarah Thompson",
      email: "sarah.thompson@example.com",
      certificate: "ChatGPT Power User",
      course: "ChatGPT Productivity",
      issueDate: "2023-05-09T13:45:00Z",
      status: "Issued",
      downloadCount: 2,
    },
    {
      id: 7,
      user: "David Martinez",
      email: "david.martinez@example.com",
      certificate: "SEO & Social Media Specialist",
      course: "SEO & Social Media",
      issueDate: "2023-05-07T15:10:00Z",
      status: "Issued",
      downloadCount: 1,
    },
    {
      id: 8,
      user: "Jennifer Garcia",
      email: "jennifer.garcia@example.com",
      certificate: "Critical Thinking Master",
      course: "Critical Thinking",
      issueDate: "2023-05-06T09:30:00Z",
      status: "Issued",
      downloadCount: 3,
    },
  ]

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [courseFilter, setCourseFilter] = useState("all")
  const [timeRange, setTimeRange] = useState("all")

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  // Filter certificates based on search query and filters
  const filteredCertificates = mockCertificates.filter((certificate) => {
    const matchesSearch =
      certificate.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      certificate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      certificate.certificate.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCourse = courseFilter === "all" || certificate.course === courseFilter

    // Time range filtering logic would go here
    // For now, we'll just return true for all time ranges
    const matchesTimeRange = true

    return matchesSearch && matchesCourse && matchesTimeRange
  })

  // Get unique courses for filter
  const uniqueCourses = Array.from(new Set(mockCertificates.map((cert) => cert.course)))

  // Certificate stats
  const totalCertificates = mockCertificates.length
  const totalDownloads = mockCertificates.reduce((sum, cert) => sum + cert.downloadCount, 0)
  const uniqueUsers = new Set(mockCertificates.map((cert) => cert.user)).size

  return (
    <div className="space-y-6">
      <SectionTitle title="Certificates Report" description="Track issued certificates and download statistics" />

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCertificates}</div>
            <p className="text-xs text-muted-foreground mt-1">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDownloads}</div>
            <p className="text-xs text-muted-foreground mt-1">Certificate downloads</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unique Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniqueUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">With certificates</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            Certificate Issuance Report
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
                  placeholder="Search certificates..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={courseFilter} onValueChange={setCourseFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  {uniqueCourses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="90days">Last 90 Days</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Certificates Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Certificate</TableHead>
                  <TableHead className="hidden md:table-cell">Course</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead className="hidden md:table-cell">Downloads</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCertificates.map((certificate) => (
                  <TableRow key={certificate.id}>
                    <TableCell>
                      <div className="font-medium">{certificate.user}</div>
                      <div className="text-sm text-muted-foreground">{certificate.email}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{certificate.certificate}</div>
                      <Badge variant="outline" className="mt-1">
                        {certificate.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{certificate.course}</TableCell>
                    <TableCell>{formatDate(certificate.issueDate)}</TableCell>
                    <TableCell className="hidden md:table-cell">{certificate.downloadCount}</TableCell>
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
                            View Certificate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            View Course Details
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
