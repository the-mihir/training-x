"use client"

import type React from "react"

import { useState } from "react"
import SectionTitle from "@/components/system-manager/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, MoreHorizontal, Search, Megaphone, Eye, Edit, Trash2, Send } from "lucide-react"

export default function AnnouncementsPage() {
  // Mock data for announcements
  const mockAnnouncements = [
    {
      id: 1,
      title: "Platform Maintenance Scheduled",
      content:
        "The platform will be undergoing maintenance on May 20th from 2:00 AM to 4:00 AM UTC. During this time, the system may be unavailable. We apologize for any inconvenience.",
      audience: "All Users",
      status: "Scheduled",
      scheduledFor: "2023-05-20T02:00:00Z",
      createdBy: "System Admin",
      createdAt: "2023-05-14T10:30:00Z",
    },
    {
      id: 2,
      title: "New Course: Advanced AI Prompting",
      content:
        "We're excited to announce the launch of our new course 'Advanced AI Prompting' starting next week. This course builds on the basics and takes your skills to the next level.",
      audience: "Students",
      status: "Sent",
      sentAt: "2023-05-12T14:00:00Z",
      createdBy: "Content Manager",
      createdAt: "2023-05-11T09:15:00Z",
    },
    {
      id: 3,
      title: "Feedback Survey: Help Us Improve",
      content:
        "We value your opinion! Please take a moment to complete our feedback survey to help us improve your learning experience. All participants will receive a special badge.",
      audience: "Active Students",
      status: "Sent",
      sentAt: "2023-05-10T12:00:00Z",
      createdBy: "User Experience Team",
      createdAt: "2023-05-09T16:45:00Z",
    },
    {
      id: 4,
      title: "New Simulation Features Released",
      content:
        "We've added new features to our simulation platform, including improved feedback mechanisms and more realistic scenarios. Check them out in your next session!",
      audience: "Simulation Users",
      status: "Draft",
      createdBy: "Product Team",
      createdAt: "2023-05-14T08:20:00Z",
    },
    {
      id: 5,
      title: "Certificate System Update",
      content:
        "We've updated our certificate system to include more detailed information about your achievements. All previously earned certificates have been automatically updated.",
      audience: "Certificate Holders",
      status: "Sent",
      sentAt: "2023-05-08T10:30:00Z",
      createdBy: "System Admin",
      createdAt: "2023-05-07T15:10:00Z",
    },
    {
      id: 6,
      title: "Holiday Schedule Announcement",
      content:
        "Please note that our support team will have limited availability during the upcoming holiday period (May 25-27). For urgent matters, please use the emergency contact form.",
      audience: "All Users",
      status: "Scheduled",
      scheduledFor: "2023-05-22T09:00:00Z",
      createdBy: "Support Team",
      createdAt: "2023-05-14T11:05:00Z",
    },
  ]

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [audienceFilter, setAudienceFilter] = useState("all")

  // State for new announcement form
  const [newAnnouncementTitle, setNewAnnouncementTitle] = useState("")
  const [newAnnouncementContent, setNewAnnouncementContent] = useState("")
  const [newAnnouncementAudience, setNewAnnouncementAudience] = useState("all users")
  const [newAnnouncementSchedule, setNewAnnouncementSchedule] = useState("send now")

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  // Filter announcements based on search query and filters
  const filteredAnnouncements = mockAnnouncements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || announcement.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesAudience =
      audienceFilter === "all" || announcement.audience.toLowerCase() === audienceFilter.toLowerCase()

    return matchesSearch && matchesStatus && matchesAudience
  })

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the announcement data to the server
    alert("Announcement created successfully!")
    // Reset form
    setNewAnnouncementTitle("")
    setNewAnnouncementContent("")
    setNewAnnouncementAudience("all users")
    setNewAnnouncementSchedule("send now")
  }

  return (
    <div className="space-y-6">
      <SectionTitle title="Announcements" description="Create and manage system-wide announcements and notifications" />

      <Tabs defaultValue="list">
        <TabsList className="mb-4">
          <TabsTrigger value="list">Announcement List</TabsTrigger>
          <TabsTrigger value="create">Create Announcement</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-blue-500" />
                Manage Announcements
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
                      placeholder="Search announcements..."
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
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="sent">Sent</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={audienceFilter} onValueChange={setAudienceFilter}>
                    <SelectTrigger className="w-full md:w-40">
                      <SelectValue placeholder="Audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Audiences</SelectItem>
                      <SelectItem value="all users">All Users</SelectItem>
                      <SelectItem value="students">Students</SelectItem>
                      <SelectItem value="active students">Active Students</SelectItem>
                      <SelectItem value="simulation users">Simulation Users</SelectItem>
                      <SelectItem value="certificate holders">Certificate Holders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline">Export Data</Button>
              </div>

              {/* Announcements Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Announcement</TableHead>
                      <TableHead className="hidden md:table-cell">Audience</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAnnouncements.map((announcement) => (
                      <TableRow key={announcement.id}>
                        <TableCell>
                          <div className="font-medium">{announcement.title}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-xs">{announcement.content}</div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{announcement.audience}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              announcement.status === "Sent"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : announcement.status === "Scheduled"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                            }
                          >
                            {announcement.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {announcement.status === "Sent"
                            ? formatDate(announcement.sentAt!)
                            : announcement.status === "Scheduled"
                              ? formatDate(announcement.scheduledFor!)
                              : formatDate(announcement.createdAt)}
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
                              {announcement.status !== "Sent" && (
                                <>
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Now
                                  </DropdownMenuItem>
                                </>
                              )}
                              <DropdownMenuItem>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
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
        </TabsContent>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-blue-500" />
                Create New Announcement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                      Announcement Title
                    </label>
                    <Input
                      id="title"
                      placeholder="Enter announcement title"
                      value={newAnnouncementTitle}
                      onChange={(e) => setNewAnnouncementTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-1">
                      Announcement Content
                    </label>
                    <Textarea
                      id="content"
                      placeholder="Enter announcement content"
                      rows={5}
                      value={newAnnouncementContent}
                      onChange={(e) => setNewAnnouncementContent(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audience" className="block text-sm font-medium mb-1">
                        Target Audience
                      </label>
                      <Select value={newAnnouncementAudience} onValueChange={setNewAnnouncementAudience}>
                        <SelectTrigger id="audience">
                          <SelectValue placeholder="Select audience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all users">All Users</SelectItem>
                          <SelectItem value="students">Students</SelectItem>
                          <SelectItem value="active students">Active Students</SelectItem>
                          <SelectItem value="simulation users">Simulation Users</SelectItem>
                          <SelectItem value="certificate holders">Certificate Holders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="schedule" className="block text-sm font-medium mb-1">
                        Delivery Schedule
                      </label>
                      <Select value={newAnnouncementSchedule} onValueChange={setNewAnnouncementSchedule}>
                        <SelectTrigger id="schedule">
                          <SelectValue placeholder="Select schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="send now">Send Immediately</SelectItem>
                          <SelectItem value="schedule">Schedule for Later</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {newAnnouncementSchedule === "schedule" && (
                    <div>
                      <label htmlFor="scheduledDate" className="block text-sm font-medium mb-1">
                        Scheduled Date and Time
                      </label>
                      <Input id="scheduledDate" type="datetime-local" min={new Date().toISOString().slice(0, 16)} />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <div className="flex h-5 items-center space-x-2">
                      <input type="checkbox" id="sendEmail" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="sendEmail" className="text-sm font-medium">
                        Also send as email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" type="button">
                    Save as Draft
                  </Button>
                  <Button type="submit" className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {newAnnouncementSchedule === "send now" ? "Send Announcement" : "Schedule Announcement"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
