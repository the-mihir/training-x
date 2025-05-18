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

export default function PerformanceReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance Reports</h1>
          <p className="text-muted-foreground">
            Track student performance metrics and scores
          </p>
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
      <ReportSection
        title="Performance Overview"
        description="Summary of student performance metrics"
      >
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
          <p className="text-center text-muted-foreground">
            Performance distribution chart would be displayed here
          </p>
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
                      <span>{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.scores.quizzes}%</TableCell>
                  <TableCell>{student.scores.assignments}%</TableCell>
                  <TableCell>{student.scores.simulations}%</TableCell>
                  <TableCell className="text-right">{student.scores.overall}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ReportSection>

      {/* Course Performance */}
      <ReportSection
        title="Course Performance"
        description="Course-wise performance metrics"
      >
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Average Score</TableHead>
                <TableHead>Highest Score</TableHead>
                <TableHead>Lowest Score</TableHead>
                <TableHead>Completion Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coursePerformance.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.averageScore}%</TableCell>
                  <TableCell>{course.highestScore}%</TableCell>
                  <TableCell>{course.lowestScore}%</TableCell>
                  <TableCell>{course.completionRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ReportSection>
    </div>
  )
}
