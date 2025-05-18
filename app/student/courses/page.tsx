"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Search, Clock, BookOpen, Award, Star } from "lucide-react"
import SectionTitle from "@/components/student/section-title"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: "AI Prompting Basics",
      category: "AI Skills",
      instructor: "Lisa Chen",
      enrolled: "15 Apr 2025",
      progress: 75,
      lastAccessed: "2 hours ago",
      image: "/course-images/ai-prompting-basics.png",
    },
    {
      id: 2,
      title: "Financial Literacy",
      category: "Personal Finance",
      instructor: "Marcus Johnson",
      enrolled: "10 Mar 2025",
      progress: 45,
      lastAccessed: "Yesterday",
      image: "/course-images/financial-literacy.png",
    },
    {
      id: 3,
      title: "Critical Thinking",
      category: "Cognitive Skills",
      instructor: "Sarah Williams",
      enrolled: "25 Feb 2025",
      progress: 90,
      lastAccessed: "Last week",
      image: "/course-images/critical-thinking.png",
    },
    {
      id: 4,
      title: "Time Management",
      category: "Productivity",
      instructor: "Carlos Rodriguez",
      enrolled: "2 Jan 2025",
      progress: 30,
      lastAccessed: "2 weeks ago",
      image: "/course-images/time-management.png",
    },
  ]

  // Sample recommended courses data
  const recommendedCourses = [
    {
      id: 5,
      title: "AI Copywriting & Marketing",
      category: "Marketing",
      instructor: "Lisa Chen",
      duration: "8 hours",
      level: "Intermediate",
      rating: 4.8,
      reviews: 245,
      image: "/course-images/copywriting-marketing.png",
    },
    {
      id: 6,
      title: "ChatGPT for Productivity",
      category: "AI Skills",
      instructor: "Marcus Johnson",
      duration: "6 hours",
      level: "Beginner",
      rating: 4.9,
      reviews: 312,
      image: "/course-images/chatgpt-productivity.png",
    },
    {
      id: 7,
      title: "SEO & Social Media with AI",
      category: "Digital Marketing",
      instructor: "Sarah Williams",
      duration: "10 hours",
      level: "Intermediate",
      rating: 4.7,
      reviews: 189,
      image: "/course-images/seo-social-media.png",
    },
    {
      id: 8,
      title: "Advanced Prompt Engineering",
      category: "AI Development",
      instructor: "Carlos Rodriguez",
      duration: "12 hours",
      level: "Advanced",
      rating: 4.9,
      reviews: 156,
      image: "/course-images/prompt-engineering.png",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <SectionTitle title="Your Courses" subtitle="Manage and track your enrolled courses" />

      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-9 w-full md:w-80"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>

      <Tabs defaultValue="enrolled" className="mt-4">
        <TabsList className="mb-4">
          <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="enrolled">
          <div className="grid gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 h-32 md:h-auto relative">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{course.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{course.category}</Badge>
                            <span className="text-xs text-muted-foreground">Instructor: {course.instructor}</span>
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <Button asChild>
                            <Link href={`/student/courses/learn/${course.id}`}>Continue</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            Last accessed: {course.lastAccessed}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <BookOpen className="h-3 w-3 mr-1" />
                            Enrolled: {course.enrolled}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recommendedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="h-36 relative">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    {course.category}
                  </Badge>
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Instructor: {course.instructor}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-xs">
                      <Badge variant="secondary" className="rounded-sm">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium mr-1">{course.rating}</span>
                      <span className="text-xs text-muted-foreground">({course.reviews} reviews)</span>
                    </div>
                    <Button size="sm">Enroll</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Award className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No Completed Courses Yet</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Keep learning! Once you complete a course, it will appear here with your certificate.
            </p>
            <Button variant="outline">Browse More Courses</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
