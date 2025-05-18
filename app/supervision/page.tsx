import { Activity, Award, BookOpen, Clock, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionTitle from "@/components/supervision/section-title"
import { Card, CardContent } from "@/components/ui/card"

export default function SupervisionDashboard() {
  // Mock data
  const recentActivities = [
    {
      id: 1,
      student: "Alex Johnson",
      action: "completed",
      item: "AI Prompting Basics",
      time: "10 minutes ago",
    },
    {
      id: 2,
      student: "Maria Garcia",
      action: "started",
      item: "Financial Literacy",
      time: "25 minutes ago",
    },
    {
      id: 3,
      student: "James Wilson",
      action: "submitted",
      item: "Resume for review",
      time: "1 hour ago",
    },
    {
      id: 4,
      student: "Sarah Lee",
      action: "earned",
      item: "AI Basics Certificate",
      time: "2 hours ago",
    },
    {
      id: 5,
      student: "David Chen",
      action: "completed",
      item: "Customer Service Simulation",
      time: "3 hours ago",
    },
  ]

  const topCourses = [
    {
      id: 1,
      name: "AI Prompting Basics",
      enrolled: 24,
      completion: 78,
    },
    {
      id: 2,
      name: "Financial Literacy",
      enrolled: 18,
      completion: 65,
    },
    {
      id: 3,
      name: "Trade Skills",
      enrolled: 15,
      completion: 82,
    },
    {
      id: 4,
      name: "Entrepreneurship",
      enrolled: 21,
      completion: 45,
    },
  ]

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Supervision Dashboard"
        description="Overview of your supervised students and their progress"
      />

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Total Students</p>
              <Users className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <h3 className="text-2xl font-bold">42</h3>
              <p className="text-xs text-green-500">+12 this month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Active Students</p>
              <Activity className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <h3 className="text-2xl font-bold">38</h3>
              <p className="text-xs text-green-500">90% active</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Course Completion</p>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <h3 className="text-2xl font-bold">76%</h3>
              <p className="text-xs text-green-500">+5% this month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Certificates Issued</p>
              <Award className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <h3 className="text-2xl font-bold">27</h3>
              <p className="text-xs text-green-500">+15 this month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activities */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Recent Activities</h3>
                <p className="text-sm text-muted-foreground">Latest student activities</p>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start justify-between border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action} <span className="font-medium">{activity.item}</span>
                    </p>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Courses */}
        <Card>
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Top Courses</h3>
              <p className="text-sm text-muted-foreground">Most popular courses among your students</p>
            </div>
            <div className="space-y-4">
              {topCourses.map((course) => (
                <div key={course.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">{course.enrolled} students</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={course.completion} className="h-2" />
                    <span className="text-xs font-medium">{course.completion}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium">Performance Overview</h3>
          </div>
          <Tabs defaultValue="weekly">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                Download Report
              </Button>
            </div>
            <TabsContent value="weekly" className="mt-4 space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-muted-foreground">Course Progress</p>
                    <h3 className="text-2xl font-bold mt-1">+12%</h3>
                    <p className="text-xs text-muted-foreground">Avg. weekly progress</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                    <h3 className="text-2xl font-bold mt-1">76%</h3>
                    <p className="text-xs text-muted-foreground">Weekly completion rate</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-muted-foreground">Engagement Score</p>
                    <h3 className="text-2xl font-bold mt-1">8.4/10</h3>
                    <p className="text-xs text-muted-foreground">Weekly engagement</p>
                  </CardContent>
                </Card>
              </div>
              <div className="h-[300px] w-full rounded-md border bg-slate-50 p-4 flex items-center justify-center">
                <p className="text-center text-muted-foreground">Weekly performance chart would be displayed here</p>
              </div>
            </TabsContent>
            <TabsContent value="monthly" className="mt-4">
              <div className="h-[300px] w-full rounded-md border bg-slate-50 p-4 flex items-center justify-center">
                <p className="text-center text-muted-foreground">Monthly performance chart would be displayed here</p>
              </div>
            </TabsContent>
            <TabsContent value="quarterly" className="mt-4">
              <div className="h-[300px] w-full rounded-md border bg-slate-50 p-4 flex items-center justify-center">
                <p className="text-center text-muted-foreground">Quarterly performance chart would be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Resume Status Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">Resume Status</h3>
              <p className="text-sm text-muted-foreground">Overview of student resume completion</p>
            </div>
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-md border p-4 text-center">
              <p className="text-3xl font-bold">42</p>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
            <div className="rounded-md border p-4 text-center">
              <p className="text-3xl font-bold text-green-600">28</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="rounded-md border p-4 text-center">
              <p className="text-3xl font-bold text-amber-600">9</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </div>
            <div className="rounded-md border p-4 text-center">
              <p className="text-3xl font-bold text-red-600">5</p>
              <p className="text-sm text-muted-foreground">Not Started</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
