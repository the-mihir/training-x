import { SectionTitle } from "@/components/student/section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Copy, Save, Send, Sparkles } from "lucide-react"

export default function PromptingZonePage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Prompting Zone" description="Practice and refine your AI prompting skills" />

      <Tabs defaultValue="playground" className="space-y-4">
        <TabsList>
          <TabsTrigger value="playground">Playground</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="saved">Saved Prompts</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        <TabsContent value="playground" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Prompt Playground</CardTitle>
              <CardDescription>Craft and test your prompts in a safe environment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium">Your Prompt</label>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Sparkles className="mr-1 h-3 w-3" />
                      <span className="text-xs">Enhance</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Save className="mr-1 h-3 w-3" />
                      <span className="text-xs">Save</span>
                    </Button>
                  </div>
                </div>
                <Textarea placeholder="Enter your prompt here..." className="min-h-32" />
              </div>

              <div className="flex items-center gap-2">
                <Button className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Prompt
                </Button>
                <Button variant="outline">Clear</Button>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium">Response</label>
                  <Button variant="ghost" size="sm">
                    <Copy className="mr-1 h-3 w-3" />
                    <span className="text-xs">Copy</span>
                  </Button>
                </div>
                <div className="min-h-32 rounded-md border border-input bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">Your response will appear here...</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prompt Analysis</CardTitle>
              <CardDescription>Get feedback on your prompt effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border bg-card p-3">
                    <div className="text-sm font-medium">Clarity</div>
                    <div className="mt-1 text-2xl font-bold">-</div>
                    <div className="mt-1 text-xs text-muted-foreground">How clear your instructions are</div>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="text-sm font-medium">Specificity</div>
                    <div className="mt-1 text-2xl font-bold">-</div>
                    <div className="mt-1 text-xs text-muted-foreground">Level of detail in your prompt</div>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="text-sm font-medium">Structure</div>
                    <div className="mt-1 text-2xl font-bold">-</div>
                    <div className="mt-1 text-xs text-muted-foreground">Organization of your prompt</div>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-sm font-medium">Suggestions</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit a prompt to receive AI-powered suggestions for improvement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Creative Writing",
                description: "Templates for stories, poems, and creative content",
                count: 12,
                tags: ["Creative", "Writing"],
              },
              {
                title: "Business Communication",
                description: "Templates for emails, reports, and presentations",
                count: 15,
                tags: ["Business", "Professional"],
              },
              {
                title: "Learning & Education",
                description: "Templates for explanations and educational content",
                count: 10,
                tags: ["Education", "Learning"],
              },
              {
                title: "Problem Solving",
                description: "Templates for analyzing and solving problems",
                count: 8,
                tags: ["Analysis", "Solutions"],
              },
              {
                title: "Personal Development",
                description: "Templates for goal setting and reflection",
                count: 7,
                tags: ["Personal", "Growth"],
              },
              {
                title: "Technical Writing",
                description: "Templates for documentation and technical content",
                count: 9,
                tags: ["Technical", "Documentation"],
              },
            ].map((category, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag, j) => (
                      <Badge key={j} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{category.count} templates</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Browse Templates</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="rounded-md border p-8 text-center">
            <h3 className="text-lg font-medium">No Saved Prompts Yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your saved prompts will appear here. Start by saving prompts from the playground.
            </p>
            <Button className="mt-4">Go to Playground</Button>
          </div>
        </TabsContent>

        <TabsContent value="challenges">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Clarity Challenge",
                description: "Create the clearest instructions possible",
                difficulty: "Beginner",
                points: 100,
                completions: 0,
                total: 5,
              },
              {
                title: "Specificity Master",
                description: "Craft highly detailed and specific prompts",
                difficulty: "Intermediate",
                points: 200,
                completions: 0,
                total: 5,
              },
              {
                title: "Prompt Optimization",
                description: "Refine prompts for maximum effectiveness",
                difficulty: "Advanced",
                points: 300,
                completions: 0,
                total: 5,
              },
            ].map((challenge, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span>{challenge.difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Points:</span>
                      <span>{challenge.points}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress:</span>
                      <span>
                        {challenge.completions}/{challenge.total} completed
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Challenge</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
