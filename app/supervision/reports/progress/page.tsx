import type { Metadata } from "next"
import Image from "next/image"
import { Download, Filter } from "lucide-react"
import ReportSection from "@/components/supervision/report-section"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Progress Reports | Supervision",
  description: "Track student progress across courses and simulations",
}

// Mock data
const studentProgress = [
  {
    id: "1",
    name: "Alex Johnson",
    image: "/abstract-profile.png",
    courses: [
      { id: "c1", name: "AI Prompting Basics", progress: 100 },
      { id: "c2", name: "Financial Literacy", progress: 75 },
      { id: "c3", name: "Trade Skills", progress: 60 },
      { id: "c4", name: "Entrepreneurship", progress: 40 },
    ],
    simulations: [
      { id: "s1", name: "Customer Service", progress: 100 },
      { id: "s2", name: "Interview Simulation", progress: 80 },
    ],
    overallProgress: 78,
  },
  {
    id: "2",
    name: "Maria Garcia",
    image: "/abstract-profile.png",
    courses: [
      { id: "c1", name: "AI Prompting Basics", progress: 90 },
      { id: "c2", name: "Financial Literacy", progress: 60 },
      { id: "c3", name: "Trade Skills", progress: 45 },
    ],
    simulations: [{ id: "s1", name: "Customer Service", progress: 100 }],
    overallProgress: 65,
  },
  {
    id: "3",
    name: "James Wilson",
    image: "/abstract-profile.png",
    courses: [
      { id: "c1", name: "AI Prompting Basics", progress: 50 },
      { id: "c2", name: "Financial Literacy", progress: 40 },
    ],
    simulations: [],
    overallProgress: 45,
  },
  {
    id: "4",
    name: "Sarah Lee",
    image: "/abstract-profile.png",
    courses: [
      { id: "c1", name: "AI Prompting Basics", progress: 100 },
      { id: "c2", name: "Financial Literacy", progress: 100 },
      { id: "c3", name: "Trade Skills", progress: 85 },
      { id: "c4", name: "Entrepreneurship", progress: 90 },
      { id: "c5", name: "Copywriting & Marketing", progress: 85 },
    ],
    simulations: [
      { id: "s1", name: "Customer Service", progress: 100 },
      { id: "s2", name: "Interview Simulation", progress: 100 },
      { id: "s3", name: "Sales Simulation", progress: 90 },
    ],
    overallProgress: 92,
  },
]

export default function ProgressReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Progress Reports</h1>
          <p className="text-muted-foreground">Track student progress across courses and simulations</p>
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

      {/* Overall Progress */}
      <ReportSection title="Overall Progress" description="Average progress across all courses and simulations">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold">42</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </div>
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold text-green-600">12</p>
            <p className="text-sm text-muted-foreground">Completed All</p>
          </div>
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold">68%</p>
            <p className="text-sm text-muted-foreground">Average Progress</p>
          </div>
          <div className="rounded-md border p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">8</p>
            <p className="text-sm text-muted-foreground">Courses Offered</p>
          </div>
        </div>

        <div className="mt-6 h-[300px] w-full rounded-md border bg-slate-50 p-4 flex items-center justify-center">
          <p className="text-center text-muted-foreground">Overall progress chart would be displayed here</p>
        </div>
      </ReportSection>

      {/* Course Progress */}
      <ReportSection
        title="Course Progress"
        description="Student progress by course"
        actions={
          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="ai-basics">AI Prompting Basics</SelectItem>
                <SelectItem value="financial">Financial Literacy</SelectItem>
                <SelectItem value="trade">Trade Skills</SelectItem>
                <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
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
                <TableHead>AI Prompting Basics</TableHead>
                <TableHead>Financial Literacy</TableHead>
                <TableHead>Trade Skills</TableHead>
                <TableHead>Entrepreneurship</TableHead>
                <TableHead className="text-right">Overall</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentProgress.map((student) => (
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
                  {["AI Prompting Basics", "Financial Literacy", "Trade Skills", "Entrepreneurship"].map(
                    (courseName) => {
                      const course = student.courses.find((c) => c.name === courseName)
                      return (
                        <TableCell key={courseName}>
                          {course ? (
                            <div className="flex items-center gap-2">
                              <Progress value={course.progress} className="h-2 w-full max-w-[100px]" />
                              <span className="text-xs font-medium">{course.progress}%</span>
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground">Not enrolled</span>
                          )}
                        </TableCell>
                      )
                    },
                  )}
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Progress value={student.overallProgress} className="h-2 w-full max-w-[100px]" />
                      <span className="text-xs font-medium">{student.overallProgress}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ReportSection>

      {/* Simulation Progress */}
      <ReportSection
        title="Simulation Progress"
        description="Student progress in practical simulations"
        actions={
          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Simulation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Simulations</SelectItem>
                <SelectItem value="customer-service">Customer Service</SelectItem>
                <SelectItem value="interview">Interview Simulation</SelectItem>
                <SelectItem value="sales">Sales Simulation</SelectItem>
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
                <TableHead>Customer Service</TableHead>
                <TableHead>Interview Simulation</TableHead>
                <TableHead>Sales Simulation</TableHead>
                <TableHead className="text-right">Overall</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentProgress.map((student) => (
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
                  {["Customer Service", "Interview Simulation", "Sales Simulation"].map((simName) => {
                    const simulation = student.simulations.find((s) => s.name === simName)
                    return (
                      <TableCell key={simName}>
                        {simulation ? (
                          <div className="flex items-center gap-2">
                            <Progress value={simulation.progress} className="h-2 w-full max-w-[100px]" />
                            <span className="text-xs font-medium">{simulation.progress}%</span>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">Not started</span>
                        )}
                      </TableCell>
                    )
                  })}
                  <TableCell className="text-right">
                    {student.simulations.length > 0 ? (
                      <div className="flex items-center justify-end gap-2">
                        <Progress
                          value={
                            student.simulations.reduce((acc, sim) => acc + sim.progress, 0) / student.simulations.length
                          }
                          className="h-2 w-full max-w-[100px]"
                        />
                        <span className="text-xs font-medium">
                          {Math.round(
                            student.simulations.reduce((acc, sim) => acc + sim.progress, 0) /
                              student.simulations.length,
                          )}
                          %
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">No simulations</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ReportSection>
    </div>
  )
}
