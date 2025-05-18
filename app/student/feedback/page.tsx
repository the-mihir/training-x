import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/student/section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Send, MessageSquare, HelpCircle } from "lucide-react"

export default function FeedbackToolsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Feedback Tools" description="Share your thoughts and get support" />

      <Tabs defaultValue="feedback" className="space-y-4">
        <TabsList>
          <TabsTrigger value="feedback">Course Feedback</TabsTrigger>
          <TabsTrigger value="support">Support Tickets</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Feedback</CardTitle>
              <CardDescription>Share your thoughts on courses you've completed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course">Select Course</Label>
                <select id="course" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Select a course...</option>
                  <option value="ai-prompting-basics">AI Prompting Basics</option>
                  <option value="financial-literacy">Financial Literacy Essentials</option>
                  <option value="critical-thinking">Critical Thinking in the AI Age</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Overall Rating</Label>
                <RadioGroup defaultValue="4" className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value} className="flex flex-col items-center">
                      <RadioGroupItem value={value.toString()} id={`rating-${value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`rating-${value}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-input peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                      >
                        {value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">What did you like about this course?</Label>
                <Textarea id="content" placeholder="Share what you enjoyed..." className="min-h-24" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="improvements">What could be improved?</Label>
                <Textarea
                  id="improvements"
                  placeholder="Share your suggestions for improvement..."
                  className="min-h-24"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Feedback
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>Your previously submitted feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 text-center">
                <p className="text-sm text-muted-foreground">You haven't submitted any feedback yet.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Support Ticket</CardTitle>
              <CardDescription>Get help with any issues you're experiencing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select id="category" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Select a category...</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="course">Course Content</option>
                  <option value="account">Account Access</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide details about your issue..."
                  className="min-h-32"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachment">Attachments (optional)</Label>
                <Input id="attachment" type="file" />
                <p className="text-xs text-muted-foreground">Max file size: 5MB. Supported formats: JPG, PNG, PDF</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <HelpCircle className="mr-2 h-4 w-4" />
                Submit Ticket
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Tickets</CardTitle>
              <CardDescription>Track the status of your support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 text-center">
                <p className="text-sm text-muted-foreground">You don't have any active support tickets.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Suggest an Improvement</CardTitle>
              <CardDescription>Share your ideas to make TrainingX better</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="suggestion-title">Title</Label>
                <Input id="suggestion-title" placeholder="Brief title for your suggestion" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestion-area">Area</Label>
                <select id="suggestion-area" className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="">Select an area...</option>
                  <option value="courses">Courses & Content</option>
                  <option value="platform">Platform Features</option>
                  <option value="ui">User Interface</option>
                  <option value="mobile">Mobile Experience</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestion-details">Details</Label>
                <Textarea
                  id="suggestion-details"
                  placeholder="Describe your suggestion in detail..."
                  className="min-h-32"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Submit Suggestion
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Suggestions</CardTitle>
              <CardDescription>Popular suggestions from the TrainingX community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "More interactive simulations",
                  area: "Content",
                  votes: 245,
                  status: "Under Review",
                },
                {
                  title: "Dark mode for mobile app",
                  area: "UI/UX",
                  votes: 189,
                  status: "Planned",
                },
                {
                  title: "Group learning features",
                  area: "Platform",
                  votes: 156,
                  status: "Considering",
                },
              ].map((suggestion, i) => (
                <div key={i} className="flex items-center justify-between rounded-md border p-4">
                  <div>
                    <h4 className="font-medium">{suggestion.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {suggestion.area} • {suggestion.votes} votes
                    </p>
                  </div>
                  <Badge variant="outline">{suggestion.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
