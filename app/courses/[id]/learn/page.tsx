"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Play,
  CheckCircle,
  BookOpen,
  Clock,
  Download,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"

// Mock data for the course
const getCourseData = (id: string) => {
  return {
    id,
    title: "AI Prompting Mastery: From Basics to Advanced Techniques",
    image: "/course-images/ai-prompting-basics.png",
    instructor: {
      name: "Dr. Sarah Johnson",
      image: "/testimonials/sarah-johnson.png",
    },
    curriculum: [
      {
        id: "module-1",
        title: "Introduction to AI Prompting",
        duration: "1 hour",
        lessons: [
          {
            id: "lesson-1-1",
            title: "What is AI Prompting?",
            duration: "10 min",
            videoUrl: "https://example.com/video1",
            transcript:
              "In this lesson, we'll explore what AI prompting is and why it's important. AI prompting is the art and science of crafting effective instructions for AI models to get the best possible results. As AI systems become more integrated into our daily lives and work, the ability to communicate effectively with these systems becomes increasingly valuable. Throughout this course, we'll learn how to master this skill and apply it to various scenarios.",
            resources: [
              { name: "AI Prompting Basics PDF", url: "#", type: "pdf" },
              { name: "Lesson Slides", url: "#", type: "slides" },
            ],
          },
          {
            id: "lesson-1-2",
            title: "How AI Models Process Text",
            duration: "15 min",
            videoUrl: "https://example.com/video2",
            transcript:
              "This lesson covers how AI language models process and understand text. We'll explore concepts like tokenization, embeddings, and the attention mechanism that allows models to generate coherent responses.",
            resources: [
              { name: "AI Text Processing Guide", url: "#", type: "pdf" },
              { name: "Visual Guide to Transformers", url: "#", type: "image" },
            ],
          },
          {
            id: "lesson-1-3",
            title: "The Importance of Clear Communication",
            duration: "12 min",
            videoUrl: "https://example.com/video3",
            transcript:
              "In this lesson, we discuss why clear communication with AI is crucial for getting accurate and useful responses. We'll look at examples of good and poor prompts and analyze the differences in results.",
            resources: [{ name: "Communication Checklist", url: "#", type: "pdf" }],
          },
          {
            id: "lesson-1-4",
            title: "Basic Prompt Structure",
            duration: "18 min",
            videoUrl: "https://example.com/video4",
            transcript:
              "This lesson introduces the fundamental structure of effective prompts. We'll cover the key components that should be included in most prompts and how to organize information for optimal results.",
            resources: [
              { name: "Prompt Structure Template", url: "#", type: "doc" },
              { name: "Practice Exercises", url: "#", type: "exercises" },
            ],
          },
          {
            id: "lesson-1-5",
            title: "Module 1 Quiz",
            duration: "5 min",
            videoUrl: "https://example.com/video5",
            transcript:
              "This quiz will test your understanding of the basic concepts covered in Module 1. Complete all questions to proceed to the next module.",
            resources: [{ name: "Study Guide", url: "#", type: "pdf" }],
          },
        ],
      },
      {
        id: "module-2",
        title: "Basic Prompting Techniques",
        duration: "2 hours",
        lessons: [
          {
            id: "lesson-2-1",
            title: "Clarity and Specificity",
            duration: "15 min",
            videoUrl: "https://example.com/video6",
            transcript:
              "In this lesson, we focus on making prompts clear and specific. We'll explore techniques to eliminate ambiguity and ensure the AI understands exactly what you're asking for.",
            resources: [{ name: "Clarity Checklist", url: "#", type: "pdf" }],
          },
          {
            id: "lesson-2-2",
            title: "Context Setting",
            duration: "20 min",
            videoUrl: "https://example.com/video7",
            transcript:
              "This lesson covers how to provide appropriate context in your prompts. We'll discuss when and how much context to include for different types of requests.",
            resources: [{ name: "Context Examples", url: "#", type: "pdf" }],
          },
          // Additional lessons would be here
        ],
      },
      // Additional modules would be here
    ],
  }
}

export default function CourseLearnPage({ params }: { params: { id: string } }) {
  const course = getCourseData(params.id)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)

  const currentModule = course.curriculum[currentModuleIndex]
  const currentLesson = currentModule.lessons[currentLessonIndex]

  // Calculate progress
  const totalLessons = course.curriculum.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = 1 // This would be tracked in a real app
  const progressPercentage = (completedLessons / totalLessons) * 100

  const handleNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    } else if (currentModuleIndex < course.curriculum.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1)
      setCurrentLessonIndex(0)
    }
  }

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1)
      setCurrentLessonIndex(course.curriculum[currentModuleIndex - 1].lessons.length - 1)
    }
  }

  const navigateToLesson = (moduleIndex: number, lessonIndex: number) => {
    setCurrentModuleIndex(moduleIndex)
    setCurrentLessonIndex(lessonIndex)
    setSidebarOpen(false)
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={`/courses/${course.id}`} className="flex items-center">
              <ChevronLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Course</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousLesson}
              disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextLesson}
              disabled={
                currentModuleIndex === course.curriculum.length - 1 &&
                currentLessonIndex === currentModule.lessons.length - 1
              }
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block mr-4">
              <div className="text-sm text-muted-foreground">Your Progress</div>
              <div className="flex items-center">
                <Progress value={progressPercentage} className="w-32 h-2 mr-2" />
                <span className="text-xs font-medium">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Image
              src={course.instructor.image || "/placeholder.svg"}
              alt={course.instructor.name}
              width={32}
              height={32}
              className="rounded-full ml-2"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container py-8 max-w-4xl">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                <span>{currentLesson.duration}</span>
                <span className="mx-2">•</span>
                <BookOpen className="w-4 h-4 mr-1" />
                <span>
                  Lesson {currentLessonIndex + 1} of {currentModule.lessons.length}
                </span>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative bg-black aspect-video rounded-lg overflow-hidden mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" size="icon" className="rounded-full w-16 h-16">
                  <Play className="w-6 h-6" />
                </Button>
              </div>
              <Image
                src={course.image || "/placeholder.svg"}
                alt={currentLesson.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            {/* Lesson Content */}
            <Tabs defaultValue="transcript" className="mb-8">
              <TabsList>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="transcript" className="mt-4">
                <div className="prose max-w-none">
                  <p>{currentLesson.transcript}</p>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-4">
                <div className="space-y-4">
                  <h3 className="font-medium">Lesson Resources</h3>
                  {currentLesson.resources.map((resource, index) => (
                    <div key={index} className="flex items-center p-3 border border-border rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <Download className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{resource.name}</div>
                        <div className="text-xs text-muted-foreground uppercase">{resource.type}</div>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-4">
                <div className="border border-border rounded-lg p-4">
                  <textarea
                    className="w-full h-64 bg-transparent resize-none focus:outline-none"
                    placeholder="Take notes for this lesson..."
                  ></textarea>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>Save Notes</Button>
                </div>
              </TabsContent>

              <TabsContent value="discussion" className="mt-4">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/testimonials/michael-chen.png"
                      alt="Michael Chen"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="font-medium mb-1">Michael Chen</div>
                        <p>
                          Great explanation of AI prompting basics! I'm curious about how these techniques might differ
                          across various AI models. Has anyone tried these with different systems?
                        </p>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <button className="flex items-center mr-4">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          <span>12</span>
                        </button>
                        <button className="flex items-center mr-4">
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          <span>2</span>
                        </button>
                        <button className="mr-4">Reply</button>
                        <span>2 days ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Image
                      src="/testimonials/elena-rodriguez.png"
                      alt="Elena Rodriguez"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="font-medium mb-1">Elena Rodriguez</div>
                        <p>
                          I've been applying these techniques to my work with GPT-4 and seeing much better results
                          already. The part about context setting was particularly helpful!
                        </p>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <button className="flex items-center mr-4">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          <span>8</span>
                        </button>
                        <button className="flex items-center mr-4">
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          <span>0</span>
                        </button>
                        <button className="mr-4">Reply</button>
                        <span>1 day ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Image
                      src={course.instructor.image || "/placeholder.svg"}
                      alt={course.instructor.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        rows={3}
                        placeholder="Add to the discussion..."
                      ></textarea>
                      <div className="mt-2 flex justify-end">
                        <Button>Post Comment</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePreviousLesson}
                disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous Lesson
              </Button>

              <Button
                onClick={handleNextLesson}
                disabled={
                  currentModuleIndex === course.curriculum.length - 1 &&
                  currentLessonIndex === currentModule.lessons.length - 1
                }
              >
                Next Lesson
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </main>

        {/* Sidebar - now on the right */}
        <aside
          className={`w-80 border-l border-border bg-card overflow-y-auto transition-all duration-300 ${
            sidebarOpen ? "fixed inset-y-0 right-0 z-50" : "hidden md:block"
          }`}
        >
          <div className="p-4 border-b border-border">
            <h2 className="font-bold truncate">{course.title}</h2>
            <div className="flex items-center mt-2">
              <Progress value={progressPercentage} className="h-2 flex-1 mr-2" />
              <span className="text-xs font-medium">
                {completedLessons}/{totalLessons}
              </span>
            </div>
          </div>

          <div className="p-2">
            {course.curriculum.map((module, moduleIndex) => (
              <Accordion
                key={module.id}
                type="single"
                collapsible
                defaultValue={moduleIndex === currentModuleIndex ? module.id : undefined}
              >
                <AccordionItem value={module.id} className="border-b-0">
                  <AccordionTrigger className="py-2 px-3 hover:bg-muted/50 rounded-lg">
                    <div className="flex flex-col items-start text-left">
                      <div className="font-medium">{module.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {module.lessons.length} lessons • {module.duration}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lesson.id}
                        onClick={() => navigateToLesson(moduleIndex, lessonIndex)}
                        className={`w-full flex items-center p-2 rounded-lg text-left mb-1 ${
                          moduleIndex === currentModuleIndex && lessonIndex === currentLessonIndex
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="w-6 h-6 flex items-center justify-center mr-3">
                          {moduleIndex < currentModuleIndex ||
                          (moduleIndex === currentModuleIndex && lessonIndex < currentLessonIndex) ? (
                            <CheckCircle className="w-5 h-5 text-primary" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{lesson.title}</div>
                          <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                        </div>
                      </button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
