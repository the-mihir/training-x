import { SectionTitle } from "@/components/student/section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Download, Edit, Plus, Trash2, Eye } from "lucide-react"

export default function ResumeBuilderPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Resume Builder" description="Create and manage professional resumes" />

      <Tabs defaultValue="builder" className="space-y-4">
        <TabsList>
          <TabsTrigger value="builder">Resume Builder</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="saved">Saved Resumes</TabsTrigger>
        </TabsList>

        <TabsContent value="builder" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Sections</CardTitle>
                  <CardDescription>Build your resume section by section</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {[
                      { name: "Personal Information", completed: true },
                      { name: "Professional Summary", completed: true },
                      { name: "Work Experience", completed: false },
                      { name: "Education", completed: false },
                      { name: "Skills", completed: false },
                      { name: "Certifications", completed: false },
                      { name: "Projects", completed: false },
                      { name: "References", completed: false },
                    ].map((section, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-4 ${section.completed ? "bg-muted/50" : ""}`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`mr-3 h-2 w-2 rounded-full ${
                              section.completed ? "bg-green-500" : "bg-muted-foreground"
                            }`}
                          />
                          <span className="text-sm">{section.name}</span>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Plus className="mr-1 h-3 w-3" />
                    Add Section
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="mr-1 h-3 w-3" />
                    Preview
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                  <CardDescription>Add your work history, starting with the most recent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" placeholder="e.g., Software Developer" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="e.g., Acme Corporation" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="month" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="month" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job-description">Description</Label>
                    <Textarea
                      id="job-description"
                      placeholder="Describe your responsibilities and achievements..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Key Achievements</Label>
                    <div className="space-y-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Input placeholder={`Achievement ${i}`} />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm">
                        <Plus className="mr-1 h-3 w-3" />
                        Add Achievement
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save & Continue</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Resume Assistant</CardTitle>
              <CardDescription>Get AI-powered suggestions to improve your resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <h4 className="mb-2 font-medium">Suggestions</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-500/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <span>
                      Use action verbs to start your bullet points (e.g., "Developed," "Managed," "Implemented")
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-500/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <span>Quantify your achievements with numbers and percentages when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-500/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <span>Tailor your resume to match the job description for better results</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full">Get Personalized Suggestions</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Professional",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Template%20Professional",
                description: "Clean and professional design suitable for most industries",
              },
              {
                name: "Creative",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Template%20Creative",
                description: "Modern design with creative elements for creative fields",
              },
              {
                name: "Technical",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Template%20Technical",
                description: "Focused on technical skills and achievements",
              },
              {
                name: "Executive",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Template%20Executive",
                description: "Elegant design for senior positions and executives",
              },
              {
                name: "Minimalist",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Template%20Minimalist",
                description: "Simple and clean design with minimal elements",
              },
              {
                name: "Academic",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Template%20Academic",
                description: "Designed for academic and research positions",
              },
            ].map((template, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Use Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Software Developer Resume",
                lastUpdated: "May 15, 2023",
                template: "Professional",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Software%20Developer",
              },
              {
                name: "Marketing Specialist Resume",
                lastUpdated: "April 10, 2023",
                template: "Creative",
                image: "/placeholder.svg?height=200&width=150&query=Resume%20Marketing%20Specialist",
              },
            ].map((resume, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src={resume.image || "/placeholder.svg"}
                    alt={resume.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{resume.name}</CardTitle>
                  <CardDescription>
                    Last updated: {resume.lastUpdated}
                    <br />
                    Template: {resume.template}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <div className="grid w-full grid-cols-2 gap-2">
                    <Button variant="outline">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
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
      </Tabs>
    </div>
  )
}
