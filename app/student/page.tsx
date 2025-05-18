"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GradientCard } from "@/components/ui/gradient-card"
import { AnimatedChart } from "@/components/ui/animated-chart"
import { StatsCard } from "@/components/ui/stats-card"
import { ActivityFeed } from "@/components/ui/activity-feed"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import SectionTitle from "@/components/student/section-title"
import {
  BookOpen,
  Award,
  BarChart2,
  Clock,
  Calendar,
  Zap,
  BookMarked,
  Target,
  Users,
  FileText,
  TrendingUp,
  ChevronRight,
  Play,
  Star,
} from "lucide-react"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: "AI Prompting Basics",
      description: "Learn the fundamentals of effective AI prompting to get better results from AI systems.",
      instructor: "Dr. Lisa Chen",
      category: "AI Skills",
      progress: 75,
      lastAccessed: "2 hours ago",
      image: "/course-images/ai-prompting-basics.png",
      duration: "6 weeks",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Financial Literacy Essentials",
      description: "Build a solid foundation for financial success with practical, actionable advice.",
      instructor: "Marcus Johnson",
      category: "Personal Finance",
      progress: 45,
      lastAccessed: "Yesterday",
      image: "/course-images/financial-literacy.png",
      duration: "4 weeks",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Critical Thinking with AI",
      description: "Develop critical thinking skills to effectively evaluate and use AI outputs.",
      instructor: "Sarah Williams",
      category: "Cognitive Skills",
      progress: 90,
      lastAccessed: "Last week",
      image: "/course-images/critical-thinking.png",
      duration: "5 weeks",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Time Management",
      description: "Master time management techniques enhanced by AI productivity tools.",
      instructor: "Carlos Rodriguez",
      category: "Productivity",
      progress: 30,
      lastAccessed: "2 weeks ago",
      image: "/course-images/time-management.png",
      duration: "3 weeks",
      rating: 4.6,
    },
  ]

  // Sample data for charts
  const progressData = [
    { name: "Mon", value: 40 },
    { name: "Tue", value: 30 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 45 },
    { name: "Fri", value: 80 },
    { name: "Sat", value: 65 },
    { name: "Sun", value: 75 },
  ]

  const skillsData = [
    { name: "AI Prompting", value: 85 },
    { name: "Critical Thinking", value: 70 },
    { name: "Communication", value: 65 },
    { name: "Problem Solving", value: 80 },
    { name: "Creativity", value: 75 },
  ]

  const timeSpentData = [
    { name: "Courses", value: 45 },
    { name: "Simulations", value: 30 },
    { name: "Assessments", value: 15 },
    { name: "Practice", value: 10 },
  ]

  const activityItems = [
    {
      id: "1",
      user: { name: "You", initials: "YN", avatar: "/placeholder.svg?key=r1t5x" },
      action: "completed the module",
      target: "AI Prompting Basics",
      timestamp: "2 hours ago",
      status: "success" as const,
      metadata: [
        { label: "Score", value: "92%" },
        { label: "Time", value: "45 minutes" },
      ],
    },
    {
      id: "2",
      user: { name: "You", initials: "YN", avatar: "/placeholder.svg?key=r5c63" },
      action: "started the simulation",
      target: "Customer Service Training",
      timestamp: "Yesterday",
      status: "info" as const,
    },
    {
      id: "3",
      user: { name: "You", initials: "YN", avatar: "/placeholder.svg?key=4281i" },
      action: "earned the badge",
      target: "AI Prompt Engineer",
      timestamp: "3 days ago",
      status: "success" as const,
    },
    {
      id: "4",
      user: { name: "You", initials: "YN", avatar: "/placeholder.svg?key=xzpvs" },
      action: "submitted feedback for",
      target: "Financial Literacy Course",
      timestamp: "Last week",
      status: "info" as const,
    },
  ]

  const upcomingEvents = [
    {
      id: "1",
      title: "AI Prompting Workshop",
      date: "Tomorrow, 3:00 PM",
      type: "Workshop",
    },
    {
      id: "2",
      title: "Career Counseling Session",
      date: "May 18, 2:00 PM",
      type: "Meeting",
    },
    {
      id: "3",
      title: "Financial Literacy Assessment",
      date: "May 20, 10:00 AM",
      type: "Assessment",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <SectionTitle title="Student Dashboard" subtitle="Track your progress and learning journey" />

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 pt-6">
          {/* Stats Row */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              value="4"
              label="Courses in Progress"
              variant="blue"
              icon={<BookOpen className="h-6 w-6" />}
              trend={{ value: 25, positive: true, label: "vs last month" }}
            />
            <StatsCard
              value="12"
              label="Completed Modules"
              variant="green"
              icon={<BookMarked className="h-6 w-6" />}
              trend={{ value: 10, positive: true, label: "vs last month" }}
            />
            <StatsCard
              value="3"
              label="Earned Badges"
              variant="amber"
              icon={<Award className="h-6 w-6" />}
              trend={{ value: 50, positive: true, label: "vs last month" }}
            />
            <StatsCard
              value="85%"
              label="Average Score"
              variant="purple"
              icon={<Target className="h-6 w-6" />}
              trend={{ value: 5, positive: true, label: "vs last month" }}
            />
          </div>

          {/* Charts Row */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedChart
              title="Weekly Learning Progress"
              subtitle="Hours spent learning per day"
              data={progressData}
              type="area"
              dataKeys={["value"]}
              colors={["#8b5cf6"]}
            />
            <AnimatedChart
              title="Skills Development"
              subtitle="Your current skill levels"
              data={skillsData}
              type="bar"
              dataKeys={["value"]}
              colors={["#3b82f6"]}
            />
            <AnimatedChart
              title="Time Distribution"
              subtitle="How you spend your learning time"
              data={timeSpentData}
              type="pie"
              dataKeys={["value"]}
              colors={["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"]}
            />
          </div>

           {/* Enrolled Courses Section - Moved below the tabs */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">My Enrolled Courses</h2>
          <Button variant="outline" asChild>
            <Link href="/student/courses">View All Courses</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enrolledCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="relative">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                      asChild
                    >
                      <Link href={`/student/courses/learn/${course.id}`}>
                        <Play className="h-8 w-8 fill-white" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary/90 hover:bg-primary text-white">{course.category}</Badge>
                </div>
                <div className="absolute -bottom-2 left-0 right-0 mx-4">
                  <Progress value={course.progress} className="h-1 bg-white/30" />
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1 mb-2">{course.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{course.progress}% complete</div>
                  <Button size="sm" className="gap-1" asChild>
                    <Link href={`/student/courses/learn/${course.id}`}>
                      Continue <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

          {/* Activity and Events Row */}
          <div className="grid gap-6 md:grid-cols-2">
            <ActivityFeed title="Recent Activity" items={activityItems} />

            <GradientCard title="Upcoming Events" variant="teal" icon={<Calendar className="h-5 w-5" />}>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-4 rounded-lg border p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                      {event.type === "Workshop" ? (
                        <Users className="h-5 w-5" />
                      ) : event.type === "Meeting" ? (
                        <Users className="h-5 w-5" />
                      ) : (
                        <FileText className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                      <Badge variant="outline" className="mt-1">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Events
                </Button>
              </div>
            </GradientCard>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6 pt-6">
          {/* Progress content */}
          <div className="grid gap-6 md:grid-cols-2">
            <GradientCard title="Course Progress" variant="blue" icon={<TrendingUp className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">AI Prompting Basics</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Financial Literacy</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Critical Thinking</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Time Management</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/student/courses/learn/1">Continue Course</Link>
                </Button>
              </div>
            </GradientCard>

            <GradientCard title="Earned Badges" variant="purple" icon={<Award className="h-5 w-5" />}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center rounded-lg border p-4">
                  <div className="mb-2 rounded-full bg-purple-100 p-3 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">AI Prompt Engineer</span>
                  <span className="text-xs text-muted-foreground">Earned 3 days ago</span>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-4">
                  <div className="mb-2 rounded-full bg-purple-100 p-3 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Fast Learner</span>
                  <span className="text-xs text-muted-foreground">Earned 2 weeks ago</span>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-4">
                  <div className="mb-2 rounded-full bg-purple-100 p-3 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">Perfect Score</span>
                  <span className="text-xs text-muted-foreground">Earned 1 month ago</span>
                </div>
                <Button variant="outline" className="col-span-2 mt-2">
                  View All Badges
                </Button>
              </div>
            </GradientCard>
          </div>

          <GradientCard title="Learning Analytics" variant="green" icon={<BarChart2 className="h-5 w-5" />}>
            <div className="h-80">
              <AnimatedChart
                title=""
                data={[
                  { name: "Week 1", courses: 5, simulations: 2, assessments: 1 },
                  { name: "Week 2", courses: 8, simulations: 3, assessments: 2 },
                  { name: "Week 3", courses: 6, simulations: 4, assessments: 3 },
                  { name: "Week 4", courses: 10, simulations: 5, assessments: 2 },
                  { name: "Week 5", courses: 12, simulations: 6, assessments: 4 },
                  { name: "Week 6", courses: 9, simulations: 4, assessments: 3 },
                ]}
                type="bar"
                dataKeys={["courses", "simulations", "assessments"]}
                colors={["#10b981", "#3b82f6", "#f59e0b"]}
                height={300}
              />
            </div>
          </GradientCard>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6 pt-6">
          {/* Recommendations content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GradientCard title="Recommended Courses" variant="blue" icon={<BookOpen className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="rounded-lg border p-3">
                  <h4 className="font-medium">Advanced AI Prompting</h4>
                  <p className="text-sm text-muted-foreground">Take your prompting skills to the next level</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">4 hours</span>
                    <Badge className="ml-auto">Advanced</Badge>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="font-medium">Business Communication</h4>
                  <p className="text-sm text-muted-foreground">Essential skills for workplace success</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">6 hours</span>
                    <Badge className="ml-auto">Intermediate</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View All Recommendations
                </Button>
              </div>
            </GradientCard>

            <GradientCard title="Recommended Simulations" variant="amber" icon={<Zap className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="rounded-lg border p-3">
                  <h4 className="font-medium">Job Interview Simulation</h4>
                  <p className="text-sm text-muted-foreground">Practice your interview skills</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">30 minutes</span>
                    <Badge className="ml-auto">Interactive</Badge>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="font-medium">Public Speaking</h4>
                  <p className="text-sm text-muted-foreground">Overcome your fear of public speaking</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">45 minutes</span>
                    <Badge className="ml-auto">VR Compatible</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View All Simulations
                </Button>
              </div>
            </GradientCard>

            <GradientCard title="Career Paths" variant="teal" icon={<Target className="h-5 w-5" />}>
              <div className="space-y-4">
                <div className="rounded-lg border p-3">
                  <h4 className="font-medium">AI Prompt Engineer</h4>
                  <p className="text-sm text-muted-foreground">High demand career path</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs font-medium text-emerald-600">95% match with your skills</span>
                    <Badge variant="outline" className="ml-auto">
                      Hot Job
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <h4 className="font-medium">Digital Marketing Specialist</h4>
                  <p className="text-sm text-muted-foreground">Leverage AI for marketing</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs font-medium text-emerald-600">80% match with your skills</span>
                    <Badge variant="outline" className="ml-auto">
                      Growing
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Explore Career Paths
                </Button>
              </div>
            </GradientCard>
          </div>

          <GradientCard title="Personalized Learning Path" variant="purple" icon={<TrendingUp className="h-5 w-5" />}>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800"></div>
              <div className="space-y-8 pl-10">
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-200 bg-white text-purple-700 dark:border-purple-800 dark:bg-gray-950 dark:text-purple-300">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Complete AI Prompting Basics</h4>
                    <p className="text-sm text-muted-foreground">Master the fundamentals of AI prompting</p>
                    <Badge variant="outline" className="mt-1">
                      In Progress - 75%
                    </Badge>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-200 bg-white text-purple-700 dark:border-purple-800 dark:bg-gray-950 dark:text-purple-300">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Take the Job Interview Simulation</h4>
                    <p className="text-sm text-muted-foreground">Practice your interview skills with AI</p>
                    <Badge variant="outline" className="mt-1">
                      Recommended Next Step
                    </Badge>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-200 bg-white text-purple-700 dark:border-purple-800 dark:bg-gray-950 dark:text-purple-300">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Complete Advanced AI Prompting</h4>
                    <p className="text-sm text-muted-foreground">Take your prompting skills to the next level</p>
                    <Badge variant="outline" className="mt-1">
                      Upcoming
                    </Badge>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-200 bg-white text-purple-700 dark:border-purple-800 dark:bg-gray-950 dark:text-purple-300">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Earn AI Prompt Engineer Certificate</h4>
                    <p className="text-sm text-muted-foreground">Get certified and showcase your skills</p>
                    <Badge variant="outline" className="mt-1">
                      Final Goal
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </GradientCard>
        </TabsContent>
      </Tabs>

     
    </div>
  )
}
