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
  Gamepad2,
  Eye,
  BarChart,
  AlertTriangle,
  FileEdit,
} from "lucide-react"

export default function SimulationMonitoringPage() {
  // Mock data for simulations
  const mockSimulations = [
    {
      id: 1,
      title: "Customer Service Simulation",
      category: "Service Skills",
      sessions: 845,
      completions: 712,
      completionRate: 84,
      avgRating: 4.6,
      issueReports: 2,
      status: "Active",
    },
    {
      id: 2,
      title: "Interview Simulation",
      category: "Career Skills",
      sessions: 1245,
      completions: 987,
      completionRate: 79,
      avgRating: 4.8,
      issueReports: 1,
      status: "Active",
    },
    {
      id: 3,
      title: "Electrician Simulation",
      category: "Trade Skills",
      sessions: 532,
      completions: 423,
      completionRate: 80,
      avgRating: 4.5,
      issueReports: 4,
      status: "Active",
    },
    {
      id: 4,
      title: "Hospitality Simulation",
      category: "Service Skills",
      sessions: 678,
      completions: 521,
      completionRate: 77,
      avgRating: 4.3,
      issueReports: 3,
      status: "Active",
    },
    {
      id: 5,
      title: "Sales Simulation",
      category: "Business Skills",
      sessions: 921,
      completions: 754,
      completionRate: 82,
      avgRating: 4.7,
      issueReports: 2,
      status: "Active",
    },
    {
      id: 6,
      title: "Public Speaking Simulation",
      category: "Communication Skills",
      sessions: 456,
      completions: 321,
      completionRate: 70,
      avgRating: 4.4,
      issueReports: 5,
      status: "Under Review",
    },
    {
      id: 7,
      title: "Financial Advisor Simulation",
      category: "Finance Skills",
      sessions: 345,
      completions: 289,
      completionRate: 84,
      avgRating: 4.6,
      issueReports: 1,
      status: "Active",
    },
    {
      id: 8,
      title: "Emergency Response Simulation",
      category: "Healthcare Skills",
      sessions: 234,
      completions: 198,
      completionRate: 85,
      avgRating: 4.9,
      issueReports: 0,
      status: "Active",
    },
  ]

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter simulations based on search query and filters
  const filteredSimulations = mockSimulations.filter((simulation) => {
    const matchesSearch = simulation.title.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      categoryFilter === "all" || simulation.category.toLowerCase() === categoryFilter.toLowerCase()

    const matchesStatus = statusFilter === "all" || simulation.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Simulation Monitoring"
        description="Track simulation usage, completions, and reported issues"
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-blue-500" />
            Simulation Performance Monitoring
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
                  placeholder="Search simulations..."
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
                  <SelectItem value="service skills">Service Skills</SelectItem>
                  <SelectItem value="career skills">Career Skills</SelectItem>
                  <SelectItem value="trade skills">Trade Skills</SelectItem>
                  <SelectItem value="business skills">Business Skills</SelectItem>
                  <SelectItem value="communication skills">Communication Skills</SelectItem>
                  <SelectItem value="finance skills">Finance Skills</SelectItem>
                  <SelectItem value="healthcare skills">Healthcare Skills</SelectItem>
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

          {/* Simulations Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Simulation</TableHead>
                  <TableHead className="hidden md:table-cell">Sessions</TableHead>
                  <TableHead>Completion Rate</TableHead>
                  <TableHead className="hidden md:table-cell">Avg. Rating</TableHead>
                  <TableHead>Issues</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSimulations.map((simulation) => (
                  <TableRow key={simulation.id}>
                    <TableCell>
                      <div className="font-medium">{simulation.title}</div>
                      <div className="text-sm text-muted-foreground">{simulation.category}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {simulation.sessions}
                      <div className="text-sm text-muted-foreground">{simulation.completions} completions</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={simulation.completionRate} className="h-2" />
                        <span className="text-sm">{simulation.completionRate}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center">
                        <span className="mr-1">{simulation.avgRating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          simulation.issueReports > 4
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : simulation.issueReports > 2
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {simulation.issueReports}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          simulation.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : simulation.status === "Under Review"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                        }
                      >
                        {simulation.status}
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
