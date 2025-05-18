"use client"

import { useState } from "react"
import SectionTitle from "@/components/system-manager/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Search, ServerCog, Download, RefreshCw } from "lucide-react"

export default function SystemLogsPage() {
  // Mock data for system logs
  const mockLogs = [
    {
      id: 1,
      timestamp: "2023-05-14T12:34:56",
      level: "ERROR",
      service: "API Gateway",
      message: "Rate limit exceeded for user ID 12345",
      details: "Too many requests from IP 192.168.1.1",
    },
    {
      id: 2,
      timestamp: "2023-05-14T12:30:22",
      level: "INFO",
      service: "Authentication",
      message: "User login successful",
      details: "User ID: 8765, IP: 192.168.1.2",
    },
    {
      id: 3,
      timestamp: "2023-05-14T12:28:15",
      level: "WARNING",
      service: "Content Delivery",
      message: "Slow response time detected",
      details: "Response time: 3.5s, Threshold: 2s",
    },
    {
      id: 4,
      timestamp: "2023-05-14T12:25:01",
      level: "INFO",
      service: "Database",
      message: "Backup completed successfully",
      details: "Backup size: 2.3GB, Duration: 45s",
    },
    {
      id: 5,
      timestamp: "2023-05-14T12:20:33",
      level: "ERROR",
      service: "Course Engine",
      message: "Failed to load course content",
      details: "Course ID: 456, Error: Resource not found",
    },
    {
      id: 6,
      timestamp: "2023-05-14T12:15:47",
      level: "INFO",
      service: "User Management",
      message: "New user registered",
      details: "User ID: 9876, Email: user@example.com",
    },
    {
      id: 7,
      timestamp: "2023-05-14T12:10:12",
      level: "WARNING",
      service: "Payment Gateway",
      message: "Payment processing delayed",
      details: "Transaction ID: TX123456, Delay: 5s",
    },
    {
      id: 8,
      timestamp: "2023-05-14T12:05:59",
      level: "INFO",
      service: "Notification Service",
      message: "Batch notifications sent",
      details: "Count: 1250, Success: 1248, Failed: 2",
    },
    {
      id: 9,
      timestamp: "2023-05-14T12:01:23",
      level: "ERROR",
      service: "Simulation Engine",
      message: "Simulation crashed unexpectedly",
      details: "Simulation ID: SIM789, Error: Out of memory",
    },
    {
      id: 10,
      timestamp: "2023-05-14T12:00:01",
      level: "INFO",
      service: "System",
      message: "System health check",
      details: "All services operational, Response time: 0.8s",
    },
  ]

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [serviceFilter, setServiceFilter] = useState("all")

  // Format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  // Filter logs based on search query and filters
  const filteredLogs = mockLogs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.service.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLevel = levelFilter === "all" || log.level.toLowerCase() === levelFilter.toLowerCase()

    const matchesService = serviceFilter === "all" || log.service.toLowerCase() === serviceFilter.toLowerCase()

    return matchesSearch && matchesLevel && matchesService
  })

  return (
    <div className="space-y-6">
      <SectionTitle title="System Logs" description="Monitor system logs, errors, and operational events" />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ServerCog className="h-5 w-5 text-blue-500" />
            System Logs
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
                  placeholder="Search logs..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-full md:w-32">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="info">INFO</SelectItem>
                  <SelectItem value="warning">WARNING</SelectItem>
                  <SelectItem value="error">ERROR</SelectItem>
                </SelectContent>
              </Select>
              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="api gateway">API Gateway</SelectItem>
                  <SelectItem value="authentication">Authentication</SelectItem>
                  <SelectItem value="content delivery">Content Delivery</SelectItem>
                  <SelectItem value="database">Database</SelectItem>
                  <SelectItem value="course engine">Course Engine</SelectItem>
                  <SelectItem value="user management">User Management</SelectItem>
                  <SelectItem value="payment gateway">Payment Gateway</SelectItem>
                  <SelectItem value="notification service">Notification Service</SelectItem>
                  <SelectItem value="simulation engine">Simulation Engine</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export Logs
              </Button>
            </div>
          </div>

          {/* Logs Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead className="hidden md:table-cell">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="whitespace-nowrap">{formatTimestamp(log.timestamp)}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          log.level === "ERROR"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : log.level === "WARNING"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }
                      >
                        {log.level}
                      </Badge>
                    </TableCell>
                    <TableCell>{log.service}</TableCell>
                    <TableCell className="max-w-xs truncate">{log.message}</TableCell>
                    <TableCell className="hidden md:table-cell max-w-xs truncate">{log.details}</TableCell>
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
