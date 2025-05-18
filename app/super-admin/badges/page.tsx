import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Search,
  Filter,
  Award,
  BadgeIcon as Certificate,
  Edit,
  Trash,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample badge data
const badges = [
  {
    id: 1,
    name: "AI Prompt Master",
    description: "Awarded for excellence in AI prompt engineering",
    category: "AI Skills",
    criteria: "Complete AI Prompting Basics with 90%+ score",
    issuedCount: 245,
    status: "Active",
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    name: "Financial Wizard",
    description: "Mastery of financial concepts and applications",
    category: "Finance",
    criteria: "Complete Financial Literacy with 85%+ score",
    issuedCount: 178,
    status: "Active",
    createdAt: "2023-02-10",
  },
  {
    id: 3,
    name: "Trade Skills Expert",
    description: "Proficiency in essential trade skills",
    category: "Trade Skills",
    criteria: "Complete 3 trade skills courses with 80%+ average",
    issuedCount: 132,
    status: "Active",
    createdAt: "2023-03-05",
  },
  {
    id: 4,
    name: "Entrepreneur Badge",
    description: "Recognition of entrepreneurial knowledge",
    category: "Business",
    criteria: "Complete Entrepreneurship 101 and create a business plan",
    issuedCount: 98,
    status: "Active",
    createdAt: "2023-04-20",
  },
  {
    id: 5,
    name: "Marketing Guru",
    description: "Excellence in digital marketing strategies",
    category: "Marketing",
    criteria: "Complete Digital Marketing Essentials with 85%+ score",
    issuedCount: 0,
    status: "Draft",
    createdAt: "2023-05-15",
  },
]

// Sample certificate data
const certificates = [
  {
    id: 1,
    name: "AI Prompting Certification",
    description: "Professional certification in AI prompt engineering",
    category: "AI Skills",
    courses: ["AI Prompting Basics", "Advanced AI Prompting"],
    issuedCount: 120,
    status: "Active",
    createdAt: "2023-01-20",
  },
  {
    id: 2,
    name: "Financial Advisor Certification",
    description: "Professional certification for financial advisors",
    category: "Finance",
    courses: ["Financial Literacy", "Investment Strategies"],
    issuedCount: 85,
    status: "Active",
    createdAt: "2023-02-15",
  },
  {
    id: 3,
    name: "Trade Professional Certificate",
    description: "Professional certification for trade skills",
    category: "Trade Skills",
    courses: ["Trade Skills for Beginners", "Advanced Trade Techniques"],
    issuedCount: 65,
    status: "Active",
    createdAt: "2023-03-10",
  },
]

export default function BadgesAndCertificates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Badges & Certificates</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>New Badge</span>
          </Button>
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>New Certificate</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Badges</CardTitle>
            <Award className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">4 active, 1 draft</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Certificates</CardTitle>
            <Certificate className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">All active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Issued</CardTitle>
            <Award className="w-4 h-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">923</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">653 badges, 270 certificates</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="badges">
        <TabsList className="mb-4">
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="issued">Issued History</TabsTrigger>
        </TabsList>

        <TabsContent value="badges">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Badges</CardTitle>
              <CardDescription>Manage badges that can be earned by users.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input type="search" placeholder="Search badges..." className="w-full pl-8" />
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
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Category</th>
                        <th className="py-3 px-4 text-left font-medium">Criteria</th>
                        <th className="py-3 px-4 text-left font-medium">Issued</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Created</th>
                        <th className="py-3 px-4 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {badges.map((badge) => (
                        <tr key={badge.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                          <td className="py-3 px-4 align-middle font-medium">{badge.name}</td>
                          <td className="py-3 px-4 align-middle">{badge.category}</td>
                          <td className="py-3 px-4 align-middle">{badge.criteria}</td>
                          <td className="py-3 px-4 align-middle">{badge.issuedCount}</td>
                          <td className="py-3 px-4 align-middle">
                            <div className="flex items-center">
                              {badge.status === "Active" ? (
                                <>
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                  <span>Active</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span>Draft</span>
                                </>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">{badge.createdAt}</td>
                          <td className="py-3 px-4 align-middle text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
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

        <TabsContent value="certificates">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Certificates</CardTitle>
              <CardDescription>Manage professional certificates that can be earned by users.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input type="search" placeholder="Search certificates..." className="w-full pl-8" />
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
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Category</th>
                        <th className="py-3 px-4 text-left font-medium">Required Courses</th>
                        <th className="py-3 px-4 text-left font-medium">Issued</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Created</th>
                        <th className="py-3 px-4 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificates.map((cert) => (
                        <tr key={cert.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                          <td className="py-3 px-4 align-middle font-medium">{cert.name}</td>
                          <td className="py-3 px-4 align-middle">{cert.category}</td>
                          <td className="py-3 px-4 align-middle">{cert.courses.join(", ")}</td>
                          <td className="py-3 px-4 align-middle">{cert.issuedCount}</td>
                          <td className="py-3 px-4 align-middle">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                              <span>Active</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 align-middle">{cert.createdAt}</td>
                          <td className="py-3 px-4 align-middle text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
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

        <TabsContent value="issued">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Issued History</CardTitle>
              <CardDescription>View history of issued badges and certificates.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-gray-500 dark:text-gray-400">Issued history will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
