import { SectionTitle } from "@/components/student/section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Share2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CertificatesPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Certificates & Badges" description="View and download your earned credentials" />

      <Tabs defaultValue="certificates" className="space-y-4">
        <TabsList>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="progress">In Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="certificates" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Prompting Basics",
                issueDate: "April 15, 2023",
                image: "/placeholder.svg?height=200&width=300&query=Certificate%20AI%20Prompting",
                credentialId: "CERT-AI-123456",
                tags: ["AI", "Beginner"],
              },
              {
                title: "Financial Literacy Essentials",
                issueDate: "March 2, 2023",
                image: "/placeholder.svg?height=200&width=300&query=Certificate%20Financial%20Literacy",
                credentialId: "CERT-FIN-789012",
                tags: ["Finance", "Beginner"],
              },
              {
                title: "Critical Thinking in the AI Age",
                issueDate: "January 20, 2023",
                image: "/placeholder.svg?height=200&width=300&query=Certificate%20Critical%20Thinking",
                credentialId: "CERT-CT-345678",
                tags: ["Critical Thinking", "Intermediate"],
              },
            ].map((certificate, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{certificate.title}</CardTitle>
                  <CardDescription>Issued on {certificate.issueDate}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {certificate.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">Credential ID: {certificate.credentialId}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="grid w-full grid-cols-2 gap-2">
                    <Button variant="outline">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="badges" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[
              {
                title: "AI Prompt Master",
                image: "/placeholder.svg?height=150&width=150&query=Badge%20AI%20Prompt%20Master",
                description: "Awarded for excellence in AI prompting",
                issueDate: "April 20, 2023",
              },
              {
                title: "Financial Wizard",
                image: "/placeholder.svg?height=150&width=150&query=Badge%20Financial%20Wizard",
                description: "Mastery of financial concepts",
                issueDate: "March 15, 2023",
              },
              {
                title: "Critical Thinker",
                image: "/placeholder.svg?height=150&width=150&query=Badge%20Critical%20Thinker",
                description: "Excellence in critical analysis",
                issueDate: "February 10, 2023",
              },
              {
                title: "Communication Pro",
                image: "/placeholder.svg?height=150&width=150&query=Badge%20Communication%20Pro",
                description: "Outstanding communication skills",
                issueDate: "January 5, 2023",
              },
              {
                title: "Problem Solver",
                image: "/placeholder.svg?height=150&width=150&query=Badge%20Problem%20Solver",
                description: "Exceptional problem-solving abilities",
                issueDate: "December 20, 2022",
              },
              {
                title: "Team Player",
                image: "/placeholder.svg?height=150&width=150&query=Badge%20Team%20Player",
                description: "Excellence in collaborative work",
                issueDate: "November 15, 2022",
              },
            ].map((badge, i) => (
              <Card key={i} className="flex flex-col items-center text-center">
                <CardHeader className="pb-2 pt-6">
                  <div className="mx-auto mb-2 h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src={badge.image || "/placeholder.svg"}
                      alt={badge.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-base">{badge.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-2 pt-0">
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Issued: {badge.issueDate}</p>
                </CardContent>
                <CardFooter className="mt-auto p-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    <Share2 className="mr-2 h-3 w-3" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced AI Prompting",
                progress: 75,
                remaining: "2 modules",
                image: "/placeholder.svg?height=100&width=200&query=Certificate%20Advanced%20AI%20Prompting",
                estimatedCompletion: "2 weeks",
              },
              {
                title: "Business Communication",
                progress: 40,
                remaining: "4 modules",
                image: "/placeholder.svg?height=100&width=200&query=Certificate%20Business%20Communication",
                estimatedCompletion: "1 month",
              },
            ].map((certificate, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <img
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.title}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div>
                      <CardTitle className="text-base">{certificate.title}</CardTitle>
                      <CardDescription>Certificate in progress</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{certificate.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${certificate.progress}%` }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Remaining: {certificate.remaining}</span>
                      <span>Est. completion: {certificate.estimatedCompletion}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Continue Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
