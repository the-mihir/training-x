import SectionTitle from "@/components/student/section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function MatchingZonePage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Matching Zone" description="Discover opportunities that match your skills and interests" />

      <Card>
        <CardHeader>
          <CardTitle>Your Skill Profile</CardTitle>
          <CardDescription>Based on your courses, simulations, and assessments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { skill: "AI Prompting", level: 85 },
                { skill: "Critical Thinking", level: 70 },
                { skill: "Financial Planning", level: 60 },
                { skill: "Communication", level: 75 },
                { skill: "Problem Solving", level: 80 },
                { skill: "Data Analysis", level: 65 },
              ].map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.skill}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} />
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <Button variant="outline">Update Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="opportunities" className="space-y-4">
        <TabsList>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="courses">Recommended Courses</TabsTrigger>
          <TabsTrigger value="careers">Career Paths</TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Prompt Engineer",
                description: "Create effective prompts for AI systems",
                image: "/placeholder.svg?key=cy5m1",
                matchScore: 92,
                salary: "$70,000 - $120,000",
                demand: "High",
                tags: ["AI", "Tech", "Remote"],
              },
              {
                title: "Financial Advisor",
                description: "Help clients manage their finances and investments",
                image: "/placeholder.svg?key=gg7jm",
                matchScore: 78,
                salary: "$60,000 - $100,000",
                demand: "Medium",
                tags: ["Finance", "Client-facing", "Hybrid"],
              },
              {
                title: "Content Strategist",
                description: "Develop and implement content marketing strategies",
                image: "/placeholder.svg?key=n27os",
                matchScore: 85,
                salary: "$55,000 - $95,000",
                demand: "Medium",
                tags: ["Marketing", "Creative", "Remote"],
              },
            ].map((opportunity, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                    {opportunity.matchScore}% Match
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {opportunity.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salary Range:</span>
                      <span>{opportunity.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market Demand:</span>
                      <span>{opportunity.demand}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="grid w-full grid-cols-2 gap-2">
                    <Button variant="outline">Learn More</Button>
                    <Button>Prepare</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced AI Prompting",
                description: "Master the art of crafting effective prompts",
                image: "/placeholder.svg?key=l498b",
                matchScore: 95,
                duration: "8 weeks",
                level: "Intermediate",
                tags: ["AI", "Tech"],
              },
              {
                title: "Financial Planning Certification",
                description: "Comprehensive financial planning course",
                image: "/placeholder.svg?key=vxtu4",
                matchScore: 82,
                duration: "12 weeks",
                level: "Advanced",
                tags: ["Finance", "Certification"],
              },
            ].map((course, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                    {course.matchScore}% Match
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {course.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Level:</span>
                      <span>{course.level}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="careers">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Industry",
                description: "Career paths in artificial intelligence",
                image: "/placeholder.svg?height=150&width=300&query=AI%20Career%20Path",
                matchScore: 90,
                growthRate: "35% annually",
                entryLevel: "$65,000",
                tags: ["Tech", "Innovation"],
              },
              {
                title: "Financial Services",
                description: "Career paths in financial services",
                image: "/placeholder.svg?height=150&width=300&query=Financial%20Services%20Career",
                matchScore: 75,
                growthRate: "12% annually",
                entryLevel: "$55,000",
                tags: ["Finance", "Stability"],
              },
            ].map((career, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={career.image || "/placeholder.svg"}
                    alt={career.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                    {career.matchScore}% Match
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{career.title}</CardTitle>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {career.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Growth Rate:</span>
                      <span>{career.growthRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Entry Salary:</span>
                      <span>{career.entryLevel}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Explore Career Path</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
