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
import { ChevronLeft, ChevronRight, MoreHorizontal, Search, Users, Eye, BarChart, MessageSquare } from "lucide-react"

export default function UserActivityPage() {
  // Mock data for users
  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      lastLogin: "10 minutes ago",
      engagement: "High",
      lastActivity: "Completed AI Prompting Basics course",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      lastLogin: "2 hours ago",
      engagement: "Medium",
      lastActivity: "Started Customer Service Simulation",
      status: "Active",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      lastLogin: "1 day ago",
      engagement: "Low",
      lastActivity: "Viewed Financial Literacy course",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      lastLogin: "3 hours ago",
      engagement: "High",
      lastActivity: "Completed Prompt Engineering assessment",
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      lastLogin: "5 days ago",
      engagement: "Low",
      lastActivity: "Logged in",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      email: "sarah.thompson@example.com",
      lastLogin: "12 hours ago",
      engagement: "Medium",
      lastActivity: "Submitted feedback for Trade Skills course",
      status: "Active",
    },
    {
      id: 7,
      name: "David Martinez",
      email: "david.martinez@example.com",
      lastLogin: "2 days ago",
      engagement: "Medium",
      lastActivity: "Downloaded certificate",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Jennifer Garcia",
      email: "jennifer.garcia@example.com",
      lastLogin: "4 hours ago",
      engagement: "High",
      lastActivity: "Completed 3 modules in SEO course",
      status: "Active",
    },
  ]

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [engagementFilter, setEngagementFilter] = useState("all")

  // Filter users based on search query and filters
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastActivity.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesEngagement =
      engagementFilter === "all" || user.engagement.toLowerCase() === engagementFilter.toLowerCase()

    return matchesSearch && matchesStatus && matchesEngagement
  })

  return (
    <div className="space-y-6">
      <SectionTitle title="User Activity" description="Monitor user engagement and activity across the platform" />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            User Activity Monitoring
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
                  placeholder="Search users..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={engagementFilter} onValueChange={setEngagementFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Engagement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Engagement</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline">Export Data</Button>
          </div>

          {/* Users Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead className="hidden md:table-cell">Last Activity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.engagement === "High"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : user.engagement === "Medium"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                        }
                      >
                        {user.engagement}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell max-w-xs truncate">{user.lastActivity}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                        }
                      >
                        {user.status}
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
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart className="mr-2 h-4 w-4" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Send Message
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
