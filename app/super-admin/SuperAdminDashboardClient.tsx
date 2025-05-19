"use client"

import { useState } from "react"
import {
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Clock,
  Filter,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer } from "@/components/ui/chart"
import {
  AreaChart as RechartsAreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { motion } from "framer-motion"

export default function SuperAdminDashboardClient() {
  const [timeRange, setTimeRange] = useState("30days")

  // Mock data for revenue chart
  const revenueData = [
    { name: "Jan", revenue: 4000, target: 3000 },
    { name: "Feb", revenue: 3500, target: 3000 },
    { name: "Mar", revenue: 5000, target: 4000 },
    { name: "Apr", revenue: 4500, target: 4000 },
    { name: "May", revenue: 6000, target: 5000 },
    { name: "Jun", revenue: 5500, target: 5000 },
    { name: "Jul", revenue: 7000, target: 6000 },
    { name: "Aug", revenue: 8000, target: 6000 },
    { name: "Sep", revenue: 7500, target: 7000 },
    { name: "Oct", revenue: 9000, target: 7000 },
    { name: "Nov", revenue: 8500, target: 8000 },
    { name: "Dec", revenue: 10000, target: 8000 },
  ]

  // Mock data for user acquisition
  const userAcquisitionData = [
    { name: "Jan", organic: 400, paid: 240, referral: 180 },
    { name: "Feb", organic: 380, paid: 250, referral: 190 },
    { name: "Mar", organic: 450, paid: 280, referral: 220 },
    { name: "Apr", organic: 470, paid: 270, referral: 200 },
    { name: "May", organic: 540, paid: 300, referral: 240 },
    { name: "Jun", organic: 580, paid: 320, referral: 260 },
    { name: "Jul", organic: 620, paid: 350, referral: 280 },
    { name: "Aug", organic: 650, paid: 370, referral: 300 },
    { name: "Sep", organic: 700, paid: 400, referral: 320 },
    { name: "Oct", organic: 750, paid: 420, referral: 350 },
    { name: "Nov", organic: 800, paid: 450, referral: 380 },
    { name: "Dec", organic: 850, paid: 480, referral: 400 },
  ]

  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      user: "John Doe",
      action: "enrolled in",
      target: "AI Prompting Basics",
      time: "10 minutes ago",
      avatar: "/testimonials/david-thompson.png",
    },
    {
      id: 2,
      user: "Sarah Johnson",
      action: "completed",
      target: "Financial Literacy",
      time: "25 minutes ago",
      avatar: "/testimonials/sarah-johnson.png",
    },
    {
      id: 3,
      user: "Michael Chen",
      action: "purchased",
      target: "Premium Subscription",
      time: "1 hour ago",
      avatar: "/testimonials/michael-chen.png",
    },
    {
      id: 4,
      user: "Elena Rodriguez",
      action: "earned certificate for",
      target: "AI Basics",
      time: "2 hours ago",
      avatar: "/testimonials/elena-rodriguez.png",
    },
    {
      id: 5,
      user: "Jamal Williams",
      action: "left a review for",
      target: "Trade Skills Course",
      time: "3 hours ago",
      avatar: "/testimonials/jamal-williams.png",
    },
  ]

  // Mock data for top courses
  const topCourses = [
    {
      id: 1,
      name: "AI Prompting Basics",
      enrolled: 1245,
      completion: 78,
      revenue: "$24,900",
      trend: 12,
    },
    {
      id: 2,
      name: "Financial Literacy",
      enrolled: 980,
      completion: 65,
      revenue: "$19,600",
      trend: 8,
    },
    {
      id: 3,
      name: "Trade Skills",
      enrolled: 875,
      completion: 82,
      revenue: "$17,500",
      trend: 15,
    },
    {
      id: 4,
      name: "Entrepreneurship",
      enrolled: 1120,
      completion: 71,
      revenue: "$22,400",
      trend: 10,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header with Time Range Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <p className="text-muted-foreground">Monitor platform performance and user activity</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-900/20 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold">$124,580</h3>
                    <span className="flex items-center text-sm font-medium text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      12%
                    </span>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="mt-4 h-2 bg-blue-100 dark:bg-blue-900/50 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 dark:bg-blue-400 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>$100,000 target</span>
                <span>85% achieved</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/40 dark:to-fuchsia-900/20 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold">12,845</h3>
                    <span className="flex items-center text-sm font-medium text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      8%
                    </span>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                  <span>New: 845</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-purple-300"></div>
                  <span>Returning: 12,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-900/20 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Course Enrollments</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold">8,492</h3>
                    <span className="flex items-center text-sm font-medium text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      15%
                    </span>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-md bg-emerald-100 dark:bg-emerald-900/30 p-2 text-center">
                  <p className="text-xs text-muted-foreground">AI</p>
                  <p className="font-semibold text-emerald-700 dark:text-emerald-300">3,245</p>
                </div>
                <div className="rounded-md bg-emerald-100 dark:bg-emerald-900/30 p-2 text-center">
                  <p className="text-xs text-muted-foreground">Finance</p>
                  <p className="font-semibold text-emerald-700 dark:text-emerald-300">2,890</p>
                </div>
                <div className="rounded-md bg-emerald-100 dark:bg-emerald-900/30 p-2 text-center">
                  <p className="text-xs text-muted-foreground">Skills</p>
                  <p className="font-semibold text-emerald-700 dark:text-emerald-300">2,357</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-900/20 shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold">72%</h3>
                    <span className="flex items-center text-sm font-medium text-amber-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      5%
                    </span>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1 text-xs">
                  <span>Previous: 67%</span>
                  <span>Current: 72%</span>
                </div>
                <div className="h-2 bg-amber-100 dark:bg-amber-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-600 dark:bg-amber-400 rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Revenue Chart */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Revenue Overview
                </CardTitle>
                <CardDescription>Monthly revenue performance</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-3.5 w-3.5" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-80">
              <ChartContainer
                config={{
                  revenue: {
                    label: "Revenue",
                    color: "hsl(var(--chart-1))",
                  },
                  target: {
                    label: "Target",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsAreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--color-revenue)"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                    <Area type="monotone" dataKey="target" stroke="var(--color-target)" fillOpacity={0} />
                  </RechartsAreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activities */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Card className="border-0 shadow-lg h-full">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activities</CardTitle>
                <Button variant="ghost" size="sm" className="gap-1">
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={activity.avatar || "/placeholder.svg"}
                        alt={activity.user}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">
                        <span className="text-blue-600">{activity.user}</span> {activity.action}{" "}
                        <span className="font-semibold">{activity.target}</span>
                      </p>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* User Acquisition */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Card className="border-0 shadow-lg h-full">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Acquisition</CardTitle>
                  <CardDescription>User growth by channel</CardDescription>
                </div>
                <Select defaultValue="monthly">
                  <SelectTrigger className="w-[120px] h-8 text-xs">
                    <SelectValue placeholder="View by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    organic: {
                      label: "Organic",
                      color: "hsl(var(--chart-1))",
                    },
                    paid: {
                      label: "Paid",
                      color: "hsl(var(--chart-2))",
                    },
                    referral: {
                      label: "Referral",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={userAcquisitionData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="organic" fill="var(--color-organic)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="paid" fill="var(--color-paid)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="referral" fill="var(--color-referral)" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Top Performing Courses</CardTitle>
                <CardDescription>Courses with highest enrollment and completion rates</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All Courses
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-slate-50 dark:bg-slate-900/50">
                    <th className="text-left p-4 font-medium">Course Name</th>
                    <th className="text-left p-4 font-medium">Enrolled</th>
                    <th className="text-left p-4 font-medium">Completion</th>
                    <th className="text-left p-4 font-medium">Revenue</th>
                    <th className="text-left p-4 font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {topCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4">
                        <div className="font-medium">{course.name}</div>
                      </td>
                      <td className="p-4">{course.enrolled.toLocaleString()}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${course.completion}%` }}
                              className="h-full bg-blue-500 rounded-full"
                            ></div>
                          </div>
                          <span>{course.completion}%</span>
                        </div>
                      </td>
                      <td className="p-4">{course.revenue}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-sm font-medium">
                          {course.trend > 0 ? (
                            <>
                              <ArrowUpRight className="h-4 w-4 text-green-500" />
                              <span className="text-green-500">{course.trend}%</span>
                            </>
                          ) : (
                            <>
                              <ArrowDownRight className="h-4 w-4 text-red-500" />
                              <span className="text-red-500">{Math.abs(course.trend)}%</span>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
