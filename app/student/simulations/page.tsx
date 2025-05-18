import type { Metadata } from "next"
import Link from "next/link"
import { Search, Filter, Gamepad2, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import SectionTitle from "@/components/student/section-title"
import CardBox from "@/components/student/card-box"

export const metadata: Metadata = {
  title: "Simulations | TrainingX",
  description: "Access interactive simulations for practical skill development",
}

// Mock simulation data
const mySimulations = [
  {
    id: 1,
    title: "Interview Simulation",
    category: "Career Development",
    progress: 40,
    lastAccessed: "3 days ago",
    image: "/simulations/interview-simulation.png",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Customer Service Simulation",
    category: "Professional Skills",
    progress: 20,
    lastAccessed: "1 week ago",
    image: "/simulations/customer-service-simulation.png",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Public Speaking Simulation",
    category: "Communication",
    progress: 100,
    lastAccessed: "2 weeks ago",
    image: "/simulations/public-speaking-simulation.png",
    status: "Completed",
  },
]

const recommendedSimulations = [
  {
    id: 4,
    title: "Sales Simulation",
    category: "Business Skills",
    duration: "45 minutes",
    difficulty: "Intermediate",
    image: "/simulations/sales-simulation.png",
  },
  {
    id: 5,
    title: "Hospitality Simulation",
    category: "Customer Service",
    duration: "30 minutes",
    difficulty: "Beginner",
    image: "/simulations/hospitality-simulation.png",
  },
  {
    id: 6,
    title: "Electrician Simulation",
    category: "Trade Skills",
    duration: "60 minutes",
    difficulty: "Advanced",
    image: "/simulations/electrician-simulation.png",
  },
]

export default function SimulationsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Interactive Simulations" description="Practice real-world scenarios in a safe environment" />

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search simulations..." className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>All Simulations</DropdownMenuItem>
            <DropdownMenuItem>Career Development</DropdownMenuItem>
            <DropdownMenuItem>Professional Skills</DropdownMenuItem>
            <DropdownMenuItem>Communication</DropdownMenuItem>
            <DropdownMenuItem>Trade Skills</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="my-simulations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="my-simulations">My Simulations</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="all">All Simulations</TabsTrigger>
        </TabsList>

        <TabsContent value="my-simulations" className="space-y-4">
          {/* My Simulations Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Simulation</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Last Accessed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mySimulations.map((simulation) => (
                  <TableRow key={simulation.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-muted/60">
                          <img
                            src={simulation.image || "/placeholder.svg"}
                            alt={simulation.title}
                            className="h-full w-full object-cover rounded"
                          />
                        </div>
                        <span className="font-medium">{simulation.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>{simulation.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={simulation.progress} className="h-2 w-20" />
                        <span className="text-sm">{simulation.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{simulation.lastAccessed}</TableCell>
                    <TableCell>
                      <Badge variant={simulation.status === "Completed" ? "default" : "secondary"}>
                        {simulation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" asChild>
                        <Link href={`/student/simulations/${simulation.id}`}>
                          {simulation.progress === 100 ? "Review" : "Continue"}
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-4">
          {/* Recommended Simulations Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recommendedSimulations.map((simulation) => (
              <CardBox
                key={simulation.id}
                className="hover:border-primary/50 transition-colors"
                footer={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{simulation.duration}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/student/simulations/${simulation.id}`}>
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                }
              >
                <div className="space-y-2">
                  <div className="h-40 rounded-md bg-muted/60 flex items-center justify-center">
                    <img
                      src={simulation.image || "/placeholder.svg"}
                      alt={simulation.title}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-semibold">{simulation.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{simulation.category}</p>
                    <Badge variant="outline">{simulation.difficulty}</Badge>
                  </div>
                </div>
              </CardBox>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <Gamepad2 className="h-10 w-10 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Explore All Simulations</h3>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Discover our complete collection of interactive simulations designed to help you practice real-world
              scenarios.
            </p>
            <Button>Browse All Simulations</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
