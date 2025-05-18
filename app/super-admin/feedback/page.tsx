import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, MessageSquare, AlertCircle, Clock, Eye, Reply, ThumbsUp } from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample support tickets
const supportTickets = [
  {
    id: 1,
    subject: "Issue with course video playback",
    user: "john.doe@example.com",
    status: "Open",
    priority: "High",
    category: "Technical",
    createdAt: "2023-05-20 09:30:00",
    lastUpdated: "2023-05-20 10:15:00",
  },
  {
    id: 2,
    subject: "Cannot access certificate after completion",
    user: "jane.smith@example.com",
    status: "In Progress",
    priority: "Medium",
    category: "Certificates",
    createdAt: "2023-05-19 14:45:00",
    lastUpdated: "2023-05-20 11:30:00",
  },
  {
    id: 3,
    subject: "Billing question about subscription",
    user: "robert.johnson@example.com",
    status: "Open",
    priority: "Low",
    category: "Billing",
    createdAt: "2023-05-20 08:15:00",
    lastUpdated: "2023-05-20 08:15:00",
  },
  {
    id: 4,
    subject: "Request for course refund",
    user: "emily.davis@example.com",
    status: "Closed",
    priority: "Medium",
    category: "Billing",
    createdAt: "2023-05-18 11:20:00",
    lastUpdated: "2023-05-19 15:45:00",
  },
]

// Sample feedback data
const feedbackItems = [
  {
    id: 1,
    content: "The AI Prompting Basics course was excellent! Very informative and practical.",
    user: "michael.wilson@example.com",
    course: "AI Prompting Basics",
    rating: 5,
    sentiment: "Positive",
    createdAt: "2023-05-20 10:30:00",
  },
  {
    id: 2,
    content: "Good content but the videos were too long. Could be more concise.",
    user: "sarah.brown@example.com",
    course: "Financial Literacy",
    rating: 4,
    sentiment: "Neutral",
    createdAt: "2023-05-19 15:45:00",
  },
  {
    id: 3,
    content: "The course material was outdated. Please update with more recent information.",
    user: "david.miller@example.com",
    course: "Trade Skills for Beginners",
    rating: 2,
    sentiment: "Negative",
    createdAt: "2023-05-18 09:15:00",
  },
  {
    id: 4,
    content: "Absolutely loved the interactive simulations! Made learning much more engaging.",
    user: "jennifer.taylor@example.com",
    course: "Entrepreneurship 101",
    rating: 5,
    sentiment: "Positive",
    createdAt: "2023-05-20 14:20:00",
  },
]

export default function FeedbackAndSupport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Feedback & Support</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <AlertCircle className="w-4 h-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Awaiting response</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Being addressed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <MessageSquare className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2h</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Last 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Satisfaction Rate</CardTitle>
            <ThumbsUp className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Based on ticket resolutions</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="support">
        <TabsList className="mb-4">
          <TabsTrigger value="support">Support Tickets</TabsTrigger>
          <TabsTrigger value="feedback">User Feedback</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="support">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Manage and respond to user support requests.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input type="search" placeholder="Search tickets..." className="w-full pl-8" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-4 text-left font-medium">ID</th>
                        <th className="py-3 px-4 text-left font-medium">Subject</th>
                        <th className="py-3 px-4 text-left font-medium">User</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Priority</th>
                        <th className="py-3 px-4 text-left font-medium">Category</th>
                        <th className="py-3 px-4 text-left font-medium">Created</th>
                        <th className="py-3 px-4 text-left font-medium">Updated</th>
                        <th className="py-3 px-4 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supportTickets.map((ticket) => (
                        <tr key={ticket.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                          <td className="py-3 px-4 align-middle">#{ticket.id}</td>
                          <td className="py-3 px-4 align-middle font-medium">{ticket.subject}</td>
                          <td className="py-3 px-4 align-middle">{ticket.user}</td>
                          <td className="py-3 px-4 align-middle">
                            <div
                              className={`px-2 py-1 rounded-full text-xs inline-flex items-center ${
                                ticket.status === "Open"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                  : ticket.status === "In Progress"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              }`}
                            >
                              {ticket.status}
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">
                            <div
                              className={`px-2 py-1 rounded-full text-xs inline-flex items-center ${
                                ticket.priority === "High"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                  : ticket.priority === "Medium"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                              }`}
                            >
                              {ticket.priority}
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">{ticket.category}</td>
                          <td className="py-3 px-4 align-middle">{ticket.createdAt}</td>
                          <td className="py-3 px-4 align-middle">{ticket.lastUpdated}</td>
                          <td className="py-3 px-4 align-middle text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Reply className="h-4 w-4" />
                                <span className="sr-only">Reply</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>User Feedback</CardTitle>
              <CardDescription>Review feedback from users about courses and platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input type="search" placeholder="Search feedback..." className="w-full pl-8" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-4 text-left font-medium">Feedback</th>
                        <th className="py-3 px-4 text-left font-medium">User</th>
                        <th className="py-3 px-4 text-left font-medium">Course</th>
                        <th className="py-3 px-4 text-left font-medium">Rating</th>
                        <th className="py-3 px-4 text-left font-medium">Sentiment</th>
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feedbackItems.map((feedback) => (
                        <tr key={feedback.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                          <td className="py-3 px-4 align-middle max-w-xs truncate">{feedback.content}</td>
                          <td className="py-3 px-4 align-middle">{feedback.user}</td>
                          <td className="py-3 px-4 align-middle">{feedback.course}</td>
                          <td className="py-3 px-4 align-middle">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-sm ${i < feedback.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">
                            <div
                              className={`px-2 py-1 rounded-full text-xs inline-flex items-center ${
                                feedback.sentiment === "Positive"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                  : feedback.sentiment === "Neutral"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                              }`}
                            >
                              {feedback.sentiment}
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">{feedback.createdAt}</td>
                          <td className="py-3 px-4 align-middle text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Reply className="h-4 w-4" />
                                <span className="sr-only">Reply</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Feedback Reports</CardTitle>
              <CardDescription>Analytics and reports based on user feedback.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-gray-500 dark:text-gray-400">Feedback reports and analytics will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
