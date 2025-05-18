import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Search, Filter, Clock, Users, Star, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import NavbarWrapper from "./navbar-wrapper"

export const metadata: Metadata = {
  title: "Courses | TrainingX",
  description: "Browse our wide range of AI training courses",
}

// Mock data for courses
const courses = [
  {
    id: "ai-prompting-basics",
    title: "AI Prompting Basics",
    description: "Learn the fundamentals of effective AI prompting to get better results from AI systems.",
    image: "/course-images/ai-prompting-basics.png",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    students: 12453,
    duration: "6 weeks",
    level: "Beginner",
    category: "AI Skills",
    featured: true,
    popular: true,
    new: false,
    price: 149,
  },
  {
    id: "financial-literacy",
    title: "Financial Literacy Essentials",
    description: "Build a solid foundation for financial success with practical, actionable advice.",
    image: "/course-images/financial-literacy.png",
    instructor: "Marcus Johnson",
    rating: 4.7,
    students: 9876,
    duration: "4 weeks",
    level: "Beginner",
    category: "Personal Development",
    featured: true,
    popular: true,
    new: false,
    price: 129,
  },
  {
    id: "trade-skills",
    title: "Trade Skills for the Digital Age",
    description: "Learn how to combine traditional trade skills with modern technology and AI tools.",
    image: "/course-images/trade-skills.png",
    instructor: "Carlos Rodriguez",
    rating: 4.9,
    students: 7654,
    duration: "8 weeks",
    level: "Intermediate",
    category: "Career Skills",
    featured: true,
    popular: false,
    new: true,
    price: 199,
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Fundamentals",
    description: "Start and grow your business with proven strategies and AI-powered tools.",
    image: "/course-images/entrepreneurship.png",
    instructor: "Lisa Chen",
    rating: 4.8,
    students: 8932,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Business",
    featured: false,
    popular: true,
    new: false,
    price: 249,
  },
  {
    id: "copywriting-marketing",
    title: "AI Copywriting & Marketing",
    description: "Create compelling marketing content with the help of AI tools and techniques.",
    image: "/course-images/copywriting-marketing.png",
    instructor: "James Wilson",
    rating: 4.6,
    students: 6543,
    duration: "5 weeks",
    level: "Beginner",
    category: "Marketing",
    featured: false,
    popular: false,
    new: true,
    price: 179,
  },
  {
    id: "chatgpt-productivity",
    title: "ChatGPT for Productivity",
    description: "Boost your productivity and streamline your workflow using ChatGPT.",
    image: "/course-images/chatgpt-productivity.png",
    instructor: "Dr. Michael Brown",
    rating: 4.7,
    students: 10234,
    duration: "3 weeks",
    level: "Beginner",
    category: "AI Skills",
    featured: false,
    popular: true,
    new: false,
    price: 99,
  },
  {
    id: "seo-social-media",
    title: "AI-Powered SEO & Social Media",
    description: "Leverage AI tools to improve your SEO strategy and social media presence.",
    image: "/course-images/seo-social-media.png",
    instructor: "Emma Davis",
    rating: 4.5,
    students: 5678,
    duration: "6 weeks",
    level: "Intermediate",
    category: "Marketing",
    featured: false,
    popular: false,
    new: true,
    price: 149,
  },
  {
    id: "critical-thinking",
    title: "Critical Thinking with AI",
    description: "Develop critical thinking skills to effectively evaluate and use AI outputs.",
    image: "/course-images/critical-thinking.png",
    instructor: "Dr. Elena Martinez",
    rating: 4.8,
    students: 7654,
    duration: "4 weeks",
    level: "Intermediate",
    category: "Personal Development",
    featured: false,
    popular: false,
    new: false,
    price: 129,
  },
  {
    id: "time-management",
    title: "Effective Time Management",
    description: "Master time management techniques enhanced by AI productivity tools.",
    image: "/course-images/time-management.png",
    instructor: "Thomas Wright",
    rating: 4.6,
    students: 8932,
    duration: "3 weeks",
    level: "Beginner",
    category: "Personal Development",
    featured: false,
    popular: false,
    new: false,
    price: 89,
  },
  {
    id: "prompt-engineering",
    title: "Advanced Prompt Engineering",
    description: "Take your prompt engineering skills to the next level with advanced techniques.",
    image: "/course-images/prompt-engineering.png",
    instructor: "Dr. Sarah Johnson",
    rating: 4.9,
    students: 8765,
    duration: "8 weeks",
    level: "Advanced",
    category: "AI Skills",
    featured: true,
    popular: true,
    new: false,
    price: 249,
  },
]

// Categories for filtering
const categories = [
  { id: "all", name: "All Categories" },
  { id: "ai-skills", name: "AI Skills" },
  { id: "personal-development", name: "Personal Development" },
  { id: "career-skills", name: "Career Skills" },
  { id: "business", name: "Business" },
  { id: "marketing", name: "Marketing" },
]

// Levels for filtering
const levels = [
  { id: "all", name: "All Levels" },
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
]

export default function CoursesPage() {
  return (
    <>
      <NavbarWrapper />

      {/* Hero Section - styled similar to About page */}
      <section className="relative py-24 pt-[200px] overflow-hidden bg-gradient-to-br from-[#0D1223] via-[#131b36] to-[#0D1223] text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Optimized animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse will-change-transform"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse will-change-transform"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse will-change-transform"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          {/* Optimized background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="absolute left-0 top-0 h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.3)" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Expand Your Skills with Our{" "}
                <span className="relative">
                  <span className="relative z-10 gradient-text">AI Courses</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 rounded-full blur-sm"></span>
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Discover a wide range of courses designed to help you master AI tools, develop practical skills, and
                advance your career.
              </p>

              <div className="w-full max-w-2xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search for courses..."
                    className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full"
                  />
                  <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-12 px-6">Search</Button>
                </div>
              </div>

              <div
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">50+</div>
                  <div className="text-gray-400 text-sm">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">100K+</div>
                  <div className="text-gray-400 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">4.8</div>
                  <div className="text-gray-400 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">92%</div>
                  <div className="text-gray-400 text-sm">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Filters */}
          <div className="bg-background/60 backdrop-blur-sm rounded-xl border border-border p-6 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Level</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    {levels.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Duration</label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option value="all">Any Duration</option>
                    <option value="short">Short (0-4 weeks)</option>
                    <option value="medium">Medium (5-8 weeks)</option>
                    <option value="long">Long (9+ weeks)</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 self-end">
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" /> More Filters
                </Button>
                <Button variant="outline">Clear All</Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-8 w-full justify-start border-b rounded-none p-0 h-auto">
              <TabsTrigger
                value="all"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-6 py-3"
              >
                All Courses
              </TabsTrigger>
              <TabsTrigger
                value="featured"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-6 py-3"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="popular"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-6 py-3"
              >
                Most Popular
              </TabsTrigger>
              <TabsTrigger
                value="new"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-6 py-3"
              >
                New Releases
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="featured" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses
                  .filter((course) => course.featured)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses
                  .filter((course) => course.popular)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses
                  .filter((course) => course.new)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span>...</span>
              <Button variant="outline" size="sm">
                10
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Start Your AI Learning Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of individuals and organizations who are transforming their future with TrainingX.AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8"
                >
                  Take Free Assessment
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="px-8 border-primary/20 hover:border-primary/40">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Course Card Component
function CourseCard({ course }: { course: any }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group">
        <div className="aspect-video relative">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {course.new && <Badge className="absolute top-3 left-3 bg-accent text-white">New</Badge>}
          {course.featured && !course.new && (
            <Badge className="absolute top-3 left-3 bg-primary text-white">Featured</Badge>
          )}
          <Badge variant="secondary" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
            ${course.price}
          </Badge>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Course
          </Button>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {course.level}
            </Badge>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
              {course.category}
            </Badge>
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{course.description}</p>
          <div className="text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{course.instructor}</span>
          </div>
        </CardContent>
        <CardFooter className="px-5 py-4 border-t flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
