import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Play, Pause, Settings, BarChart, Users, Clock, CheckCircle } from "lucide-react"

// Sample simulation data
const activeSimulations = [
  {
    id: 1,
    name: "Electrician Simulation",
    type: "Trade Skills",
    status: "Running",
    users: 45,
    startTime: "2023-05-20 09:30:00",
    duration: "2h 15m",
    load: "Medium",
  },
  {
    id: 2,
    name: "Customer Service Simulation",
    type: "Soft Skills",
    status: "Running",
    users: 78,
    startTime: "2023-05-20 10:15:00",
    duration: "1h 45m",
    load: "High",
  },
  {
    id: 3,
    name: "Hospitality Simulation",
    type: "Service Industry",
    status: "Running",
    users: 32,
    startTime: "2023-05-20 11:00:00",
    duration: "1h 30m",
    load: "Low",
  },
]

const scheduledSimulations = [
  {
    id: 4,
    name: "Interview Simulation",
    type: "Career Skills",
    status: "Scheduled",
    scheduledTime: "2023-05-21 09:00:00",
    estimatedUsers: 60,
    duration: "2h 00m",
  },
  {
    id: 5,
    name: "Sales Simulation",
    type: "Business Skills",
    status: "Scheduled",
    scheduledTime: "2023-05-21 13:30:00",
    estimatedUsers: 50,
    duration: "1h 30m",
  },
]

export default function SimulationControl() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Simulation Control</h1>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Create Simulation</span>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Simulations</CardTitle>
            <Play className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">155</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Across all simulations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">System Load</CardTitle>
            <BarChart className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Current server utilization</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Clock className="w-4 h-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Upcoming simulations</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="mb-4">
          <TabsTrigger value="active">Active Simulations</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Active Simulations</CardTitle>
              <CardDescription>Monitor and control currently running simulations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Type</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Users</th>
                        <th className="py-3 px-4 text-left font-medium">Start Time</th>
                        <th className="py-3 px-4 text-left font-medium">Duration</th>
                        <th className="py-3 px-4 text-left font-medium">Load</th>
                        <th className="py-3 px-4 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeSimulations.map((sim) => (
                        <tr key={sim.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                          <td className="py-3 px-4 align-middle font-medium">{sim.name}</td>
                          <td className="py-3 px-4 align-middle">{sim.type}</td>
                          <td className="py-3 px-4 align-middle">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                              <span>Running</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">{sim.users}</td>
                          <td className="py-3 px-4 align-middle">{sim.startTime}</td>
                          <td className="py-3 px-4 align-middle">{sim.duration}</td>
                          <td className="py-3 px-4 align-middle">
                            <div
                              className={`px-2 py-1 rounded-full text-xs inline-flex items-center ${
                                sim.load === "High"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                  : sim.load === "Medium"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              }`}
                            >
                              {sim.load}
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="outline" size="sm" className="h-8">
                                <Pause className="h-4 w-4 mr-1" />
                                Pause
                              </Button>
                              <Button variant="outline" size="sm" className="h-8">
                                <Settings className="h-4 w-4 mr-1" />
                                Configure
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

        <TabsContent value="scheduled">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Scheduled Simulations</CardTitle>
              <CardDescription>View and manage upcoming simulation sessions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Type</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Scheduled Time</th>
                        <th className="py-3 px-4 text-left font-medium">Est. Users</th>
                        <th className="py-3 px-4 text-left font-medium">Duration</th>
                        <th className="py-3 px-4 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduledSimulations.map((sim) => (
                        <tr key={sim.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                          <td className="py-3 px-4 align-middle font-medium">{sim.name}</td>
                          <td className="py-3 px-4 align-middle">{sim.type}</td>
                          <td className="py-3 px-4 align-middle">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-blue-500 mr-1" />
                              <span>Scheduled</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">{sim.scheduledTime}</td>
                          <td className="py-3 px-4 align-middle">{sim.estimatedUsers}</td>
                          <td className="py-3 px-4 align-middle">{sim.duration}</td>
                          <td className="py-3 px-4 align-middle text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="outline" size="sm" className="h-8">
                                <Play className="h-4 w-4 mr-1" />
                                Start Now
                              </Button>
                              <Button variant="outline" size="sm" className="h-8">
                                <Settings className="h-4 w-4 mr-1" />
                                Configure
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

        <TabsContent value="completed">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Completed Simulations</CardTitle>
              <CardDescription>View history and analytics of past simulations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-gray-500 dark:text-gray-400">Completed simulations history will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Simulation Templates</CardTitle>
              <CardDescription>Manage reusable simulation templates.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-gray-500 dark:text-gray-400">Simulation templates will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
