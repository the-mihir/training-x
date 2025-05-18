import type { Metadata } from "next"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionTitle from "@/components/student/section-title"
import CardBox from "@/components/student/card-box"

export const metadata: Metadata = {
  title: "Learning Analytics | TrainingX",
  description: "Track your learning progress and performance",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Learning Analytics" description="Track your progress and performance metrics" />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="time">Time Spent</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Learning Time Chart */}
          <CardBox title="Weekly Learning Activity">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-center p-4">
                <LineChart className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Learning Time Chart</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  This chart would display your weekly learning activity, showing hours spent each day.
                </p>
              </div>
            </div>
          </CardBox>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Daily Learning</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2 hours</div>
                <p className="text-xs text-muted-foreground">+0.3 hours compared to last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Course Completion Rate</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">+12% compared to average</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quiz Performance</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82%</div>
                <p className="text-xs text-muted-foreground">Average score across all quizzes</p>
              </CardContent>
            </Card>
          </div>

          {/* Skill Distribution */}
          <CardBox title="Skill Distribution">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-center p-4">
                <PieChart className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Skill Distribution Chart</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  This chart would display your skill distribution across different categories.
                </p>
              </div>
            </div>
          </CardBox>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <CardBox title="Course Progress">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-center p-4">
                <BarChart className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Course Progress Chart</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  This chart would display your progress across all enrolled courses.
                </p>
              </div>
            </div>
          </CardBox>

          <CardBox title="Course Engagement">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-center p-4">
                <LineChart className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Course Engagement Chart</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  This chart would display your engagement metrics for each course.
                </p>
              </div>
            </div>
          </CardBox>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <CardBox title="Skill Growth">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-center p-4">
                <LineChart className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Skill Growth Chart</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  This chart would display your skill growth over time.
                </p>
              </div>
            </div>
          </CardBox>

          <div className="grid gap-4 md:grid-cols-2">
            <CardBox title="Top Skills">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>AI Prompting</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Financial Planning</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interview Skills</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Resume Writing</span>
                  <span className="font-medium">70%</span>
                </div>
              </div>
            </CardBox>

            <CardBox title="Skill Recommendations">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Critical Thinking</span>
                  <span className="text-muted-foreground">Recommended</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Time Management</span>
                  <span className="text-muted-foreground">Recommended</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Public Speaking</span>
                  <span className="text-muted-foreground">Recommended</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data Analysis</span>
                  <span className="text-muted-foreground">Recommended</span>
                </div>
              </div>
            </CardBox>
          </div>
        </TabsContent>

        <TabsContent value="time" className="space-y-4">
          <CardBox title="Time Distribution">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-center p-4">
                <PieChart className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">Time Distribution Chart</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  This chart would display how you distribute your learning time across different activities.
                </p>
              </div>
            </div>
          </CardBox>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Course Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5 hours</div>
                <p className="text-xs text-muted-foreground">45% of total learning time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Practice Exercises</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.2 hours</div>
                <p className="text-xs text-muted-foreground">30% of total learning time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Simulations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6.8 hours</div>
                <p className="text-xs text-muted-foreground">25% of total learning time</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
