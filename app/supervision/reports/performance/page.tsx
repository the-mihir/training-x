import type { Metadata } from "next"
import Image from "next/image"
import { Download, Filter } from "lucide-react"
import ReportSection from "@/components/supervision/report-section"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Performance Reports | Supervision",
  description: "Track student performance metrics and scores",
}

// Mock data
const studentPerformance = [
  {
    id: "1",
    name: "Alex Johnson",
    image: "/abstract-profile.png",
    scores: {
      quizzes: 85,
      assignments: 78,
      simulations: 92,
      overall: 84,
    },
  },
  {
    id: "2",
    name: "Maria Garcia",
    image: "/abstract-profile.png",
    scores: {
      quizzes: 92,
      assignments: 88,
      simulations: 95,
      overall: 91,
    },
  },
  {
    id: "3",
    name: "James Wilson",
    image: "/abstract-profile.png",
    scores: {
      quizzes: 68,
      assignments: 72,
      simulations: 65,
      overall: 69,
    },
  },
  {
    id: "4",
    name: "Sarah Lee",
    image: "/abstract-profile.png",
    scores: {
      quizzes: 98,
      assignments: 95,
      simulations: 97,
      overall: 97,
    },
  },
  {
    id: "5",
    name: "David Chen",
    image: "/abstract-profile.png",
    scores: {
      quizzes: 88,
      assignments: 82,
      simulations: 90,
      overall: 86,
    },
  },
]

// Course performance data
const coursePerformance = [
  {
    id: "c1",
    name: "AI Prompting Basics",
    averageScore: 86,
    highestScore: 98,
    lowestScore: 65,
    completionRate: 92,
  },
  {
    id: "c2",
    name: "Financial Literacy",
    averageScore: 78,
    highestScore: 95,
    lowestScore: 60,
    completionRate: 85,
  },
  {
    id: "c3",
    name: "Trade Skills",
    averageScore: 82,
    highestScore: 94,
    lowestScore: 68,
    completionRate: 78,
  },
  {
    id: "c4",
    name: "Entrepreneurship",
    averageScore: 75,
    highestScore: 92,
    lowestScore: 58,
    completionRate: 72,
  },
]

// Score indicator component
function ScoreIndicator({ score }: { score: number }) {
  let color = "bg-gray-200"

  if (score >= 90) {
    color = "bg-green-500"
  } else if (score >= 80) {
    color = "bg-green-400"
  } else if (score >= 70) {
    color = "bg-yellow-400"
  } else if (score >= 60) {
    color = "bg-orange-400"
  } else {
    color = "bg-red-500"
  }

  return <div className={`h-2 w-16 rounded-full ${color}`} />
}

export default function PerformanceReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance Reports</h1>
          <p className="text-muted-foreground">Track student performance metrics and scores</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <ReportSection title="Performance Overview" description="Summary of student performance metrics">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold">82%</p>
            <p className="text-sm text-muted-foreground">Average Score</p>
          </div>
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold text-green-600">97%</p>
            <p className="text-sm text-muted-foreground">Highest Score</p>
          </div>
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold text-amber-600">69%</p>
            <p className="text-sm text-muted-foreground">Lowest Score</p>
          </div>
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">85%</p>
            <p className="text-sm text-muted-foreground">Completion Rate</p>
          </div>
        </div>

        <div className="mt-6 h-[300px] w-full rounded-md border bg-slate-50 p-4 flex items-center justify-center">
          <p className="text-center text-muted-foreground">Performance distribution chart would be displayed here</p>
        </div>
      </ReportSection>

      {/* Student Performance */}
      <ReportSection
        title="Student Performance"
        description="Individual student performance metrics"
        actions={
          <div className="flex items-center gap-2">
            <Select defaultValue="overall">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="overall">Overall Score</SelectItem>
                <SelectItem value="quizzes">Quiz Score</SelectItem>
                <SelectItem value="assignments">Assignment Score</SelectItem>
                <SelectItem value="simulations">Simulation Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
      >
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Student</TableHead>
                <TableHead>Quiz Score</TableHead>
                <TableHead>Assignment Score</TableHead>
                <TableHead>Simulation Score</TableHead>
                <TableHead className="text-right">Overall Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentPerformance.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="font-medium">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{student.scores.quizzes}%</span>
                      <ScoreIndicator score={student.scores.quizzes} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{student.scores.assignments}%</span>
                      <ScoreIndicator score={student.scores.assignments} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{student.scores.simulations}%</span>
                      <ScoreIndicator score={student.scores.simulations} />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="font-medium">{student.scores.overall}%</span>
                      <ScoreIndicator score={student.scores.overall} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ReportSection>

      {/* Course Performance */}
      <ReportSection title="Course Performance" description="Performance metrics by course">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Course</TableHead>
                    <TableHead>Average Score</TableHead>
                    <TableHead>Highest Score</TableHead>
                    <TableHead>Lowest Score</TableHead>
                    <TableHead className="text-right">Completion Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coursePerformance.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <span className="font-medium">{course.name}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{course.averageScore}%</span>
                          <ScoreIndicator score={course.averageScore} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">{course.highestScore}%</span>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">{course.lowestScore}%</span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span className="font-medium">{course.completionRate}%</span>
                          <div
                            className="h-2 w-16 rounded-full bg-blue-500"
                            style={{ width: `${(course.completionRate / 100) * 64}px` }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="detailed" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-md border p-4">
                <h3 className="text-lg font-medium mb-4">Score Distribution</h3>
                <div className="h-[250px] w-full bg-slate-50 rounded-md flex items-center justify-center">
                  <p className="text-center text-muted-foreground">Score distribution chart would be displayed here</p>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="text-lg font-medium mb-4">Completion Trends</h3>
                <div className="h-[250px] w-full bg-slate-50 rounded-md flex items-center justify-center">
                  <p className="text-center text-muted-foreground">Completion trends chart would be displayed here</p>
                </div>
              </div>
              <div className="rounded-md border p-4 md:col-span-2">
                <h3 className="text-lg font-medium mb-4">Performance by Module</h3>
                <div className="h-[250px] w-full bg-slate-50 rounded-md flex items-center justify-center">
                  <p className="text-center text-muted-foreground">Module performance chart would be displayed here</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ReportSection>

      {/* Improvement Recommendations */}
      <ReportSection
        title="Improvement Recommendations"
        description="AI-generated recommendations based on performance data"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md border p-4">
            <h3 className="text-lg font-medium mb-2">Course Content</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">!</span>
                </div>
                <span>
                  The "Financial Literacy" course has the lowest average score. Consider reviewing and simplifying
                  complex concepts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>
                  "AI Prompting Basics" is performing well with high completion rates. Consider expanding this content.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-md border p-4">
            <h3 className="text-lg font-medium mb-2">Student Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">!</span>
                </div>
                <span>
                  James Wilson is struggling across multiple courses. Consider scheduling a one-on-one session.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">i</span>
                </div>
                <span>
                  Several students are excelling in simulations but scoring lower on quizzes. Consider reviewing quiz
                  format.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </ReportSection>
    </div>
  )
}
