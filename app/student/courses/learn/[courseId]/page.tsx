"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Flag,
  Download,
  Bookmark,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipBack,
  SkipForward,
  Clock,
  Award,
  Star,
  Info,
  HelpCircle,
  PenLine,
  CheckSquare,
  Menu,
  X,
} from "lucide-react"
import { QuizComponent } from "@/components/course/quiz-component"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function CourseLearningPage({ params }: { params: { courseId: string } }) {
  const [currentModule, setCurrentModule] = useState(3)
  const [activeTab, setActiveTab] = useState("content")
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [videoProgress, setVideoProgress] = useState(35)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [notes, setNotes] = useState("")
  const [showQuiz, setShowQuiz] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  const courseModules = [
    {
      id: 1,
      title: "Introduction to AI Prompting",
      duration: "15 minutes",
      completed: true,
    },
    {
      id: 2,
      title: "Crafting Effective Prompts",
      duration: "25 minutes",
      completed: true,
    },
    {
      id: 3,
      title: "Context & Instructions",
      duration: "20 minutes",
      completed: false,
      current: true,
    },
    {
      id: 4,
      title: "Advanced Prompt Techniques",
      duration: "30 minutes",
      completed: false,
    },
    {
      id: 5,
      title: "Troubleshooting & Iteration",
      duration: "20 minutes",
      completed: false,
    },
    {
      id: 6,
      title: "Practical Applications",
      duration: "35 minutes",
      completed: false,
    },
    {
      id: 7,
      title: "Final Assessment",
      duration: "45 minutes",
      completed: false,
      isAssessment: true,
    },
  ]

  // Calculate overall course progress
  const totalModules = courseModules.length
  const completedModules = courseModules.filter((module) => module.completed).length
  const overallProgress = Math.round((completedModules / totalModules) * 100)

  const goToNextModule = () => {
    if (currentModule < courseModules.length) {
      setCurrentModule(currentModule + 1)
    }
  }

  const goToPreviousModule = () => {
    if (currentModule > 1) {
      setCurrentModule(currentModule - 1)
    }
  }

  // Handle video controls
  const togglePlay = () => setVideoPlaying(!videoPlaying)
  const toggleMute = () => setIsMuted(!isMuted)
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-background">
      {/* Single Header Bar */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-4">
            <Link href="/student/courses" className="flex items-center">
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span className="font-medium">Back to Courses</span>
            </Link>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold">AI Prompting Basics</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center mr-2">
              <Progress value={overallProgress} className="w-32 h-2 mr-2" />
              <span className="text-xs font-medium">{overallProgress}% complete</span>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="space-y-4 py-4">
                  <h3 className="text-lg font-semibold">Course Help</h3>
                  <div className="space-y-2">
                    <p>Need assistance with this course?</p>
                    <Button className="w-full">Contact Instructor</Button>
                    <Button variant="outline" className="w-full">
                      Technical Support
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 py-6">
            {/* Video Player Section - Smaller Size */}
            <div className="bg-black rounded-lg overflow-hidden mb-6" ref={videoRef}>
              <div className="aspect-video max-h-[450px]">
                <Image
                  src="/modern-video-player.png"
                  alt="Video Lesson"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-16 w-16 rounded-full bg-black/30 hover:bg-black/50 text-white"
                    onClick={togglePlay}
                  >
                    {videoPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </Button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex flex-col gap-2">
                    <Progress value={videoProgress} className="h-1" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20"
                          onClick={togglePlay}
                        >
                          {videoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>

                        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                          <SkipBack className="h-4 w-4" />
                        </Button>

                        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                          <SkipForward className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white hover:bg-white/20"
                            onClick={toggleMute}
                          >
                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </Button>
                        </div>

                        <span className="text-xs text-white">07:15 / 20:00</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                          <Settings className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20"
                          onClick={toggleFullscreen}
                        >
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Title and Info */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Context & Instructions in AI Prompting</h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-muted-foreground">
                  Module {currentModule} of {courseModules.length}
                </p>
                <div className="flex items-center">
                  <Progress value={overallProgress} className="w-24 h-2 mr-2" />
                  <span className="text-xs font-medium">{overallProgress}% complete</span>
                </div>
              </div>
            </div>

            {/* Udemy-style Tabs Below Video */}
            <Tabs defaultValue="content" className="mb-8">
              <TabsList className="w-full justify-start border-b rounded-none h-10 bg-transparent p-0">
                <TabsTrigger
                  value="content"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-10"
                >
                  Content
                </TabsTrigger>
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-10"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-10"
                >
                  Notes
                </TabsTrigger>
                <TabsTrigger
                  value="announcements"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-10"
                >
                  Announcements
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-10"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="pt-6">
                {showQuiz ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" onClick={() => setShowQuiz(false)}>
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Content
                      </Button>
                    </div>

                    <QuizComponent
                      quiz={{
                        id: "context-quiz",
                        title: "Context & Instructions Quiz",
                        description: "Test your understanding of providing context and instructions to AI models.",
                        timeLimit: 10,
                        passingScore: 70,
                        allowRetry: true,
                        showExplanation: true,
                        randomizeQuestions: false,
                        questions: [
                          {
                            id: "q1",
                            type: "single-choice",
                            question: "Why is context important when prompting AI models?",
                            options: [
                              {
                                id: "a",
                                text: "It's not important, AI can figure out what you want",
                                isCorrect: false,
                              },
                              {
                                id: "b",
                                text: "It helps the AI understand the background and purpose of your request",
                                isCorrect: true,
                              },
                              { id: "c", text: "It only matters for creative tasks", isCorrect: false },
                              { id: "d", text: "Context is only needed for technical questions", isCorrect: false },
                            ],
                            explanation:
                              "Context provides the AI with the necessary background information and purpose of your request, which helps it generate more relevant and accurate responses.",
                            points: 10,
                          },
                          {
                            id: "q2",
                            type: "multiple-choice",
                            question: "Which of the following are elements of good context? (Select all that apply)",
                            options: [
                              { id: "a", text: "Background information", isCorrect: true },
                              { id: "b", text: "Purpose of the request", isCorrect: true },
                              { id: "c", text: "Audience considerations", isCorrect: true },
                              { id: "d", text: "Your personal contact information", isCorrect: false },
                            ],
                            explanation:
                              "Good context includes relevant background information, the purpose of your request, and considerations about the intended audience.",
                            points: 15,
                          },
                          {
                            id: "q3",
                            type: "true-false",
                            question:
                              "Clear instructions should always specify the format, tone, and style of the response you want.",
                            options: [
                              { id: "a", text: "True", isCorrect: true },
                              { id: "b", text: "False", isCorrect: false },
                            ],
                            explanation:
                              "Clear instructions should specify format, tone, and style to guide the AI in generating the exact type of response you're looking for.",
                            points: 10,
                          },
                        ],
                      }}
                      onComplete={(score, passed, answers) => {
                        console.log("Quiz completed", { score, passed, answers })
                        // You can add logic here to handle quiz completion
                      }}
                      onExit={() => {
                        setShowQuiz(false)
                      }}
                    />
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-muted-foreground mb-6 text-lg">
                        Learn how to provide appropriate context and clear instructions to get better results from AI
                        models.
                      </p>

                      <h2 className="text-xl font-semibold mt-6 mb-3">Why Context Matters</h2>
                      <p className="mb-4">
                        AI models respond based on the information you provide. Without proper context, the AI may make
                        assumptions or provide generic responses that don't address your specific needs. Good context
                        sets the stage for high-quality outputs.
                      </p>

                      <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg my-6">
                        <h3 className="font-medium text-primary mb-2">Key Insight</h3>
                        <p className="text-foreground">
                          Context isn't just background information. It includes the purpose of your request,
                          constraints, format requirements, audience considerations, and more.
                        </p>
                      </div>

                      <h2 className="text-xl font-semibold mt-8 mb-3">Crafting Clear Instructions</h2>
                      <p className="mb-4">
                        Clear instructions guide the AI on exactly what you want it to do. Be specific about the format,
                        tone, length, and style of the response you're looking for.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="border rounded-lg p-4 bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
                          <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">❌ Weak Instruction</h4>
                          <p className="text-gray-700 dark:text-gray-300">"Tell me about AI."</p>
                        </div>
                        <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
                          <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">✅ Strong Instruction</h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            "Explain how AI neural networks function in 3-4 paragraphs for a high school student with no
                            technical background. Include a simple analogy."
                          </p>
                        </div>
                      </div>

                      <h2 className="text-xl font-semibold mt-8 mb-3">Practical Examples</h2>
                      <p className="mb-4">
                        Let's look at some examples of how providing context and clear instructions can dramatically
                        improve AI responses:
                      </p>

                      <div className="border rounded-lg overflow-hidden my-6">
                        <div className="bg-muted p-3 border-b font-medium">Example 1: Writing a Business Email</div>
                        <div className="p-4 space-y-4">
                          <div className="space-y-2">
                            <div className="font-medium text-sm text-muted-foreground">WITHOUT CONTEXT:</div>
                            <div className="bg-muted/50 p-3 rounded-md text-sm">"Write an email to a client."</div>
                          </div>
                          <div className="space-y-2">
                            <div className="font-medium text-sm text-muted-foreground">WITH CONTEXT:</div>
                            <div className="bg-primary/5 p-3 rounded-md text-sm">
                              "Write a follow-up email to a potential client who expressed interest in our web design
                              services during a call last week but hasn't responded to my initial proposal. I want to
                              gently remind them about our conversation without being pushy. Our company tone is
                              professional but friendly, and I'd like to offer a 10% discount if they sign up within the
                              next 7 days."
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 bg-card">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">Module Quiz</h2>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          5 Questions
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Test your understanding of providing context and instructions to AI models.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button onClick={() => setShowQuiz(true)}>
                          <CheckSquare className="h-4 w-4 mr-2" />
                          Start Quiz
                        </Button>
                        <div className="text-sm text-muted-foreground">Estimated time: 10 minutes</div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6 bg-card">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">Practice Exercise</h2>
                        <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                          Hands-on
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Apply what you've learned by crafting effective prompts with proper context and instructions.
                      </p>
                      <div className="flex items-center gap-4">
                        <Button variant="outline">
                          <PenLine className="h-4 w-4 mr-2" />
                          Start Exercise
                        </Button>
                        <div className="text-sm text-muted-foreground">Estimated time: 15 minutes</div>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="overview" className="pt-6">
                <div className="space-y-6">
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h2 className="text-xl font-semibold mb-4">About This Course</h2>
                    <p>
                      AI Prompting Basics is designed to help you master the art of communicating effectively with AI
                      models. Whether you're using ChatGPT, DALL-E, or other AI tools, this course will teach you how to
                      craft prompts that get you the results you want.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">What You'll Learn</h3>
                    <ul>
                      <li>Understand how AI models interpret and respond to prompts</li>
                      <li>Craft clear, effective prompts for different AI applications</li>
                      <li>Provide appropriate context to get better results</li>
                      <li>Troubleshoot and refine prompts when you don't get the desired output</li>
                      <li>Apply prompting techniques to real-world scenarios</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Course Structure</h3>
                    <p>
                      This course consists of 7 modules, including 6 learning modules and 1 final assessment. Each
                      module includes video lessons, practical examples, quizzes, and hands-on exercises to reinforce
                      your learning.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Prerequisites</h3>
                    <p>
                      No prior experience with AI is required. This course is designed for beginners who want to learn
                      how to use AI tools more effectively.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          Course Details
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Total Length:</span>
                            <span className="font-medium">3 hours</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Modules:</span>
                            <span className="font-medium">7</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Level:</span>
                            <span className="font-medium">Beginner</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Last Updated:</span>
                            <span className="font-medium">June 2023</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Certification
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Complete all modules and pass the final assessment to earn your certificate.
                        </p>
                        <div className="flex items-center gap-2">
                          <Progress value={overallProgress} className="h-2 flex-1" />
                          <span className="text-xs font-medium">{overallProgress}%</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Your Notes</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" /> Export
                      </Button>
                      <Button size="sm">
                        <Bookmark className="h-4 w-4 mr-2" /> Save
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <textarea
                      className="w-full min-h-[300px] bg-transparent outline-none resize-none"
                      placeholder="Type your notes here..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-primary" />
                      Note-taking Tips
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Focus on key concepts rather than trying to write everything down</li>
                      <li>• Use your own words to better remember the material</li>
                      <li>• Create connections between new information and what you already know</li>
                      <li>• Review your notes within 24 hours to improve retention</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="announcements" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Course Announcements</h2>

                  <Card className="mb-4">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <Image
                            src="/testimonials/marcus-johnson.png"
                            alt="Instructor Avatar"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="font-semibold">New Practice Exercises Added</h3>
                            <span className="text-xs text-muted-foreground">Posted 3 days ago</span>
                          </div>
                          <p className="text-sm mt-2">
                            I've added new practice exercises to Module 3 and 4 based on your feedback. These exercises
                            will help you apply what you've learned about context setting and instruction crafting in
                            real-world scenarios. Don't forget to check them out!
                          </p>
                          <div className="mt-4 pt-4 border-t">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <Image
                            src="/testimonials/marcus-johnson.png"
                            alt="Instructor Avatar"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="font-semibold">Live Q&A Session Next Week</h3>
                            <span className="text-xs text-muted-foreground">Posted 1 week ago</span>
                          </div>
                          <p className="text-sm mt-2">
                            Join me for a live Q&A session next Wednesday at 3 PM EST where I'll be answering your
                            questions about AI prompting techniques. This is a great opportunity to get clarification on
                            any concepts you're struggling with.
                          </p>
                          <div className="mt-4 pt-4 border-t">
                            <Button variant="outline" size="sm">
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="text-xl font-semibold">Course Reviews</h2>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium">4.8</span>
                      <span className="text-muted-foreground">(1,245 reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                            <Image src="/testimonials/sarah-johnson.png" alt="User Avatar" width={40} height={40} />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h3 className="font-semibold">Sarah Johnson</h3>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">Posted 2 weeks ago</p>
                            <p className="text-sm mt-2">
                              This course has completely transformed how I interact with AI tools. The section on
                              context setting was particularly helpful - I'm getting much better results now!
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                            <Image src="/testimonials/michael-chen.png" alt="User Avatar" width={40} height={40} />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h3 className="font-semibold">Michael Chen</h3>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star, i) => (
                                  <Star
                                    key={star}
                                    className={cn(
                                      "h-4 w-4",
                                      i < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground",
                                    )}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">Posted 1 month ago</p>
                            <p className="text-sm mt-2">
                              Great content and well-structured course. I would have liked more advanced examples, but
                              overall it's excellent for beginners. The instructor explains concepts clearly.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Navigation Footer */}
            <div className="border-t mt-8 pt-4 flex justify-between items-center">
              <Button variant="outline" onClick={goToPreviousModule} disabled={currentModule === 1}>
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous Module
              </Button>
              <div className="text-center hidden sm:block">
                <p className="text-sm text-muted-foreground">
                  Module {currentModule} of {courseModules.length}
                </p>
                <Progress value={(currentModule / courseModules.length) * 100} className="w-40 h-2 mt-1" />
              </div>
              <Button onClick={goToNextModule} disabled={currentModule === courseModules.length}>
                Next Module <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="right" className="w-[300px] p-0">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg">AI Prompting Basics</h2>
                  <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center mt-2">
                  <Progress value={overallProgress} className="h-2 flex-1" />
                  <span className="ml-2 text-sm font-medium">{overallProgress}% Complete</span>
                </div>
              </div>

              <ScrollArea className="flex-1">
                <div className="p-4">
                  <h3 className="font-medium text-sm text-muted-foreground mb-3">COURSE MODULES</h3>
                  <div className="space-y-1">
                    {courseModules.map((module) => (
                      <button
                        key={module.id}
                        onClick={() => {
                          setCurrentModule(module.id)
                          setSidebarOpen(false)
                        }}
                        className={cn(
                          "w-full text-left p-3 rounded-lg text-sm transition-colors flex items-start justify-between",
                          currentModule === module.id ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {module.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : module.current ? (
                              <div className="h-4 w-4 rounded-full bg-primary"></div>
                            ) : module.isAssessment ? (
                              <Flag className="h-4 w-4" />
                            ) : (
                              <BookOpen className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <span className={cn(module.completed && "line-through text-muted-foreground")}>
                              {module.title}
                            </span>
                            <p className="text-xs text-muted-foreground mt-0.5">{module.duration}</p>
                          </div>
                        </div>
                        {module.current && !module.completed && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">Current</Badge>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Course Sidebar - Right side (Desktop only) */}
      <div className="w-80 border-l h-full bg-card overflow-y-auto hidden md:block">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">AI Prompting Basics</h2>
          <div className="flex items-center mt-2">
            <Progress value={overallProgress} className="h-2 flex-1" />
            <span className="ml-2 text-sm font-medium">{overallProgress}% Complete</span>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="p-4">
            <h3 className="font-medium text-sm text-muted-foreground mb-3">COURSE MODULES</h3>
            <div className="space-y-1">
              {courseModules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setCurrentModule(module.id)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg text-sm transition-colors flex items-start justify-between",
                    currentModule === module.id ? "bg-primary/10 text-primary" : "hover:bg-muted",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {module.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : module.current ? (
                        <div className="h-4 w-4 rounded-full bg-primary"></div>
                      ) : module.isAssessment ? (
                        <Flag className="h-4 w-4" />
                      ) : (
                        <BookOpen className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <span className={cn(module.completed && "line-through text-muted-foreground")}>
                        {module.title}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">{module.duration}</p>
                    </div>
                  </div>
                  {module.current && !module.completed && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">Current</Badge>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t">
            <h3 className="font-medium text-sm text-muted-foreground mb-3">COURSE INFORMATION</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>3 hours total length</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>7 modules</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span>Certificate on completion</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-muted-foreground" />
                <span>4.8 rating (1,245 reviews)</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <h3 className="font-medium text-sm text-muted-foreground mb-3">INSTRUCTOR</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <Image src="/testimonials/marcus-johnson.png" alt="Instructor Avatar" width={40} height={40} />
              </div>
              <div>
                <p className="font-medium">Dr. Marcus Johnson</p>
                <p className="text-xs text-muted-foreground">AI Prompt Engineering Expert</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
