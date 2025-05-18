import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Calendar,
  Clock,
  Globe,
  PlayCircle,
  Share2,
  Star,
  CheckCircle,
  BookOpen,
  MessageSquare,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  BarChart,
  Briefcase,
  GraduationCap,
  Laptop,
  Stethoscope,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export const metadata: Metadata = {
  title: "Course Details | TrainingX",
  description: "Explore our comprehensive course details and enroll to start learning today.",
}

// Mock data for the course
const courseData = {
  id: "1",
  title: "AI Prompting Basics: Master the Art of Effective AI Communication",
  subtitle: "Learn how to communicate effectively with AI systems to get the best results",
  description:
    "This comprehensive course teaches you the fundamentals of AI prompting, from basic interactions to advanced techniques. You'll learn how to craft effective prompts for various AI systems, understand the principles behind prompt engineering, and develop skills to get the most out of AI tools in your personal and professional life.",
  image: "/course-images/ai-prompting-basics.png",
  price: 399.99,
  salePrice: 319.99,
  rating: 4.8,
  studentsCount: 12453,
  duration: "10 hours",
  lastUpdated: "April 2023",
  language: "English",
  level: "Beginner",
  instructor: {
    name: "Dr. Sarah Johnson",
    title: "AI Prompt Engineering Expert",
    bio: "Dr. Sarah Johnson is a leading expert in AI prompt engineering with over 10 years of experience working with language models. She has helped thousands of students and professionals master the art of effective AI communication.",
    image: "/testimonials/sarah-johnson.png",
    courses: 12,
    students: 45000,
    rating: 4.9,
  },
  whatYouWillLearn: [
    "Understand the fundamentals of AI language models",
    "Craft effective prompts for various AI systems",
    "Apply prompt engineering techniques to get better results",
    "Use AI tools efficiently for personal and professional tasks",
    "Troubleshoot common issues with AI responses",
    "Develop a systematic approach to working with AI",
    "Create complex, multi-step prompts for advanced tasks",
    "Adapt your prompting style to different AI models",
  ],
  curriculum: [
    {
      title: "Introduction to AI Prompting",
      lessons: [
        { title: "What is AI Prompting?", duration: "15 min", type: "video" },
        { title: "How AI Language Models Work", duration: "20 min", type: "video" },
        { title: "The Importance of Clear Communication", duration: "18 min", type: "video" },
        { title: "Module Quiz", duration: "10 min", type: "quiz" },
      ],
    },
    {
      title: "Basic Prompting Techniques",
      lessons: [
        { title: "Structuring Your Prompts", duration: "22 min", type: "video" },
        { title: "Using Context Effectively", duration: "25 min", type: "video" },
        { title: "Common Prompting Patterns", duration: "20 min", type: "video" },
        { title: "Hands-on Exercise", duration: "30 min", type: "exercise" },
        { title: "Module Quiz", duration: "10 min", type: "quiz" },
      ],
    },
    {
      title: "Advanced Prompting Strategies",
      lessons: [
        { title: "Chain-of-Thought Prompting", duration: "28 min", type: "video" },
        { title: "Few-Shot Learning Techniques", duration: "32 min", type: "video" },
        { title: "Role-Based Prompting", duration: "24 min", type: "video" },
        { title: "Advanced Exercise", duration: "45 min", type: "exercise" },
        { title: "Module Quiz", duration: "15 min", type: "quiz" },
      ],
    },
    {
      title: "Practical Applications",
      lessons: [
        { title: "AI for Content Creation", duration: "30 min", type: "video" },
        { title: "AI for Problem Solving", duration: "35 min", type: "video" },
        { title: "AI for Learning and Research", duration: "28 min", type: "video" },
        { title: "Real-world Projects", duration: "60 min", type: "project" },
        { title: "Final Assessment", duration: "30 min", type: "assessment" },
      ],
    },
  ],
  aiCompanion: {
    name: "PromptBuddy",
    description:
      "Your personal AI companion for this course. PromptBuddy will help you practice your prompting skills, provide feedback on your prompts, and answer questions about the course material.",
    features: [
      "Interactive prompting practice",
      "Personalized feedback on your prompts",
      "Q&A about course concepts",
      "Custom exercises based on your progress",
      "Available 24/7 for assistance",
    ],
    image: "/agents/study-buddy-agent.png",
  },
  industries: [
    {
      name: "Technology",
      description:
        "Apply AI prompting skills to software development, product management, and technical support roles.",
      icon: "Laptop",
      careers: ["AI Product Manager", "Technical Writer", "Software Developer", "UX Designer"],
    },
    {
      name: "Marketing",
      description:
        "Create compelling content, analyze market trends, and develop marketing strategies with AI assistance.",
      icon: "BarChart",
      careers: ["Content Strategist", "Digital Marketer", "SEO Specialist", "Brand Manager"],
    },
    {
      name: "Education",
      description:
        "Enhance teaching methods, create educational content, and develop personalized learning experiences.",
      icon: "GraduationCap",
      careers: ["Instructional Designer", "EdTech Specialist", "Online Course Creator", "Education Consultant"],
    },
    {
      name: "Healthcare",
      description: "Improve patient care, medical research, and healthcare administration through effective AI use.",
      icon: "Stethoscope",
      careers: ["Medical Researcher", "Healthcare Administrator", "Medical Writer", "Health Informatics Specialist"],
    },
    {
      name: "Business",
      description: "Streamline operations, enhance decision-making, and improve customer service with AI tools.",
      icon: "Briefcase",
      careers: ["Business Analyst", "Operations Manager", "Customer Success Manager", "Consultant"],
    },
  ],
  courseTestimonials: [
    {
      quote:
        "The AI prompting techniques I learned in this course have revolutionized our marketing department. We're now creating content in half the time with twice the engagement. This course was worth every penny and more.",
      name: "Thomas Wright",
      designation: "Marketing Director at Global Innovations",
      src: "/testimonials/marcus-johnson.png",
    },
    {
      quote:
        "As someone who works with development teams daily, learning how to effectively communicate with AI has been a game-changer. I can now create detailed specifications and prototypes using AI tools, which has accelerated our product development cycle significantly.",
      name: "Sophia Chen",
      designation: "Product Manager at TechSolutions Inc.",
      src: "/testimonials/sarah-williams.png",
    },
    {
      quote:
        "This course helped me triple my productivity as a freelance writer. The section on chain-of-thought prompting alone was worth the investment. I've recommended it to everyone in my professional network.",
      name: "Marcus Rodriguez",
      designation: "Freelance Writer",
      src: "/testimonials/carlos-rodriguez.png",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Michael Chen",
      date: "March 15, 2023",
      rating: 5,
      comment:
        "This course completely changed how I interact with AI tools. The techniques I learned have made me so much more efficient at work. Highly recommended!",
      image: "/testimonials/michael-chen.png",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      date: "February 28, 2023",
      rating: 5,
      comment:
        "Dr. Johnson is an excellent instructor who explains complex concepts in a very accessible way. The practical exercises were particularly helpful.",
      image: "/testimonials/elena-rodriguez.png",
    },
    {
      id: 3,
      name: "Jamal Williams",
      date: "April 5, 2023",
      rating: 4,
      comment:
        "Great content and well-structured course. I would have liked more advanced examples, but overall it was very valuable for my work.",
      image: "/testimonials/jamal-williams.png",
    },
  ],
  faqs: [
    {
      question: "Do I need prior experience with AI to take this course?",
      answer:
        "No, this course is designed for beginners. We start with the fundamentals and gradually move to more advanced concepts. No prior experience with AI is required.",
    },
    {
      question: "How long do I have access to the course materials?",
      answer:
        "Once enrolled, you have lifetime access to all course materials, including future updates and improvements.",
    },
    {
      question: "Is there a certificate upon completion?",
      answer:
        "Yes, you will receive a certificate of completion that you can share on your LinkedIn profile or with employers.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within 30 days of purchase.",
    },
    {
      question: "How is this different from free AI tutorials online?",
      answer:
        "This course offers structured, comprehensive learning with practical exercises, personalized feedback, and an AI companion to help you practice. It's designed by experts to ensure you develop practical skills that can be applied immediately.",
    },
  ],
  relatedCourses: [
    {
      id: "2",
      title: "AI Prompt Engineering",
      image: "/course-images/prompt-engineering.png",
      rating: 4.7,
      studentsCount: 8765,
      price: 499.99,
      salePrice: 399.99,
      level: "Intermediate",
    },
    {
      id: "3",
      title: "ChatGPT Productivity Mastery",
      image: "/course-images/chatgpt-productivity.png",
      rating: 4.9,
      studentsCount: 10234,
      price: 249.99,
      salePrice: 199.99,
      level: "All Levels",
    },
    {
      id: "4",
      title: "AI for Critical Thinking",
      image: "/course-images/critical-thinking.png",
      rating: 4.6,
      studentsCount: 7543,
      price: 349.99,
      salePrice: 279.99,
      level: "Beginner",
    },
  ],
}

// Helper function to render stars
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i < rating
                ? "text-yellow-400 fill-yellow-400 opacity-50"
                : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-pattern-white/[0.2] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-[url('/about-pattern.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.05" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <clipPath id="heroMask">
                <path d="M0,0 L1000,0 L1000,750 C750,850 250,850 0,750 L0,0 Z" fill="white" />
              </clipPath>
            </defs>
            <g clipPath="url(#heroMask)">
              <circle cx="500" cy="500" r="600" fill="url(#heroGradient)" />
              <circle cx="500" cy="500" r="400" fill="url(#heroGradient)" opacity="0.5" />
              <circle cx="500" cy="500" r="300" fill="url(#heroGradient)" opacity="0.25" />
            </g>
          </svg>
        </div>

        <div className="container relative mx-auto px-4 pt-36 pb-16 sm:px-6 sm:pt-44 sm:pb-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex items-center space-x-2">
                <Badge variant="outline" className="border-white/20 text-white">
                  {courseData.level}
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  {courseData.duration}
                </Badge>
              </div>

              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                {courseData.title}
              </h1>

              <p className="mb-6 text-lg text-white/80">{courseData.subtitle}</p>

              <div className="mb-6 flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full border-2 border-white/20">
                    <Image
                      src={courseData.instructor.image || "/placeholder.svg"}
                      alt={courseData.instructor.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Instructor</p>
                    <p className="text-white/80">{courseData.instructor.name}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <RatingStars rating={courseData.rating} />
                  <span className="ml-2 text-sm text-white/80">
                    ({courseData.studentsCount.toLocaleString()} students)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 hover:text-purple-800" asChild>
                  <Link href={`/courses/${params.id}/learn`}>Enroll Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Preview Course
                </Button>
              </div>
            </div>

            <div className="relative mx-auto aspect-video max-w-lg overflow-hidden rounded-xl border-8 border-white/10 shadow-2xl lg:mx-0">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-16 w-16 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <PlayCircle className="h-10 w-10" />
                </Button>
              </div>
              <Image
                src={courseData.image || "/placeholder.svg"}
                alt={courseData.title}
                width={600}
                height={338}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">About This Course</h2>
                  <p className="text-gray-700 dark:text-gray-300">{courseData.description}</p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold">What You'll Learn</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {courseData.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold">Course Details</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
                      <Clock className="mb-2 h-6 w-6 text-purple-600" />
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h4>
                      <p className="font-medium">{courseData.duration}</p>
                    </div>
                    <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
                      <Calendar className="mb-2 h-6 w-6 text-purple-600" />
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</h4>
                      <p className="font-medium">{courseData.lastUpdated}</p>
                    </div>
                    <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
                      <Globe className="mb-2 h-6 w-6 text-purple-600" />
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Language</h4>
                      <p className="font-medium">{courseData.language}</p>
                    </div>
                    <div className="flex flex-col items-center rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
                      <BookOpen className="mb-2 h-6 w-6 text-purple-600" />
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Level</h4>
                      <p className="font-medium">{courseData.level}</p>
                    </div>
                  </div>
                </div>

                {/* AI Companion Section */}
                <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-6 dark:from-indigo-950 dark:to-purple-950">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="flex items-center justify-center md:col-span-1">
                      <div className="relative h-40 w-40">
                        <Image
                          src={courseData.aiCompanion.image || "/placeholder.svg"}
                          alt={courseData.aiCompanion.name}
                          width={160}
                          height={160}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="mb-2 text-xl font-bold text-purple-800 dark:text-purple-300">
                        Meet {courseData.aiCompanion.name} - Your AI Learning Companion
                      </h3>
                      <p className="mb-4 text-gray-700 dark:text-gray-300">{courseData.aiCompanion.description}</p>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {courseData.aiCompanion.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-purple-600" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industries & Career Potential Section */}
                <div>
                  <h3 className="mb-6 text-xl font-bold">Industries & Career Potential</h3>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    The skills you'll learn in this course are applicable across numerous industries. Here are some of
                    the key sectors where effective AI prompting can enhance your career prospects:
                  </p>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courseData.industries.map((industry, index) => (
                      <div
                        key={index}
                        className="rounded-lg border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                      >
                        <div className="mb-4 flex items-center">
                          {industry.icon === "Laptop" && <Laptop className="mr-3 h-6 w-6 text-purple-600" />}
                          {industry.icon === "BarChart" && <BarChart className="mr-3 h-6 w-6 text-purple-600" />}
                          {industry.icon === "GraduationCap" && (
                            <GraduationCap className="mr-3 h-6 w-6 text-purple-600" />
                          )}
                          {industry.icon === "Stethoscope" && <Stethoscope className="mr-3 h-6 w-6 text-purple-600" />}
                          {industry.icon === "Briefcase" && <Briefcase className="mr-3 h-6 w-6 text-purple-600" />}
                          <h4 className="text-lg font-semibold">{industry.name}</h4>
                        </div>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{industry.description}</p>
                        <div>
                          <h5 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                            Potential Careers:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {industry.careers.map((career, careerIndex) => (
                              <Badge
                                key={careerIndex}
                                variant="outline"
                                className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                              >
                                {career}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Testimonials Section - Using AnimatedTestimonials */}
                <div>
                  <h3 className="mb-6 text-xl font-bold">What Our Students Say</h3>
                  <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <AnimatedTestimonials testimonials={courseData.courseTestimonials} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-6">
                <h2 className="mb-4 text-2xl font-bold">Course Curriculum</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="mr-4">
                    {courseData.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)} lessons
                  </span>
                  <span>{courseData.duration} total length</span>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {courseData.curriculum.map((section, sectionIndex) => (
                    <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-1 items-center justify-between pr-4 text-left">
                          <div>
                            <h3 className="font-medium">
                              Section {sectionIndex + 1}: {section.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{section.lessons.length} lessons</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              <div className="flex items-center">
                                {lesson.type === "video" && <PlayCircle className="mr-3 h-5 w-5 text-purple-600" />}
                                {lesson.type === "quiz" && <MessageSquare className="mr-3 h-5 w-5 text-blue-600" />}
                                {lesson.type === "exercise" && <BookOpen className="mr-3 h-5 w-5 text-green-600" />}
                                {lesson.type === "project" && <Award className="mr-3 h-5 w-5 text-amber-600" />}
                                {lesson.type === "assessment" && <Award className="mr-3 h-5 w-5 text-red-600" />}
                                <span>{lesson.title}</span>
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{lesson.duration}</div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-gray-50 p-6 dark:bg-gray-800 md:flex-row">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold">{courseData.rating.toFixed(1)}</h2>
                    <div className="my-2">
                      <RatingStars rating={courseData.rating} />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Course Rating • {courseData.reviews.length} Reviews
                    </p>
                  </div>

                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count = courseData.reviews.filter((r) => Math.floor(r.rating) === star).length
                      const percentage = (count / courseData.reviews.length) * 100

                      return (
                        <div key={star} className="flex items-center">
                          <div className="mr-2 w-12 text-sm">{star} stars</div>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                            <div
                              className="h-full rounded-full bg-yellow-400"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <div className="ml-2 w-12 text-right text-sm">{percentage.toFixed(0)}%</div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Student Feedback</h3>

                  {courseData.reviews.map((review) => (
                    <div key={review.id} className="rounded-lg border p-4 dark:border-gray-700">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={review.image || "/placeholder.svg"}
                              alt={review.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{review.name}</h4>
                            <div className="flex items-center">
                              <RatingStars rating={review.rating} />
                              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-6">
                <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                  {courseData.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-baseline justify-between">
                <div className="flex items-center">
                  <span className="text-3xl font-bold">${courseData.salePrice.toFixed(2)}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through dark:text-gray-400">
                    ${courseData.price.toFixed(2)}
                  </span>
                </div>
                <Badge className="bg-green-600 hover:bg-green-700">20% off</Badge>
              </div>

              <div className="mb-6 space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href={`/courses/${params.id}/learn`}>Enroll Now</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Preview Course
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                  This course includes:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-gray-400" />
                    <span>{courseData.duration} of on-demand video</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="mr-3 h-5 w-5 text-gray-400" />
                    <span>
                      {courseData.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)} lessons
                    </span>
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="mr-3 h-5 w-5 text-gray-400" />
                    <span>AI companion support</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="mr-3 h-5 w-5 text-gray-400" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="mr-3 h-5 w-5 text-gray-400" />
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-4 dark:border-gray-700">
                <h3 className="mb-3 text-center text-sm font-medium">Share this course</h3>
                <div className="flex justify-center space-x-4">
                  <Link href="#" aria-label="Share on Facebook" className="group">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-transform duration-300 group-hover:scale-110">
                      <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  </Link>
                  <Link href="#" aria-label="Share on Twitter" className="group">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-transform duration-300 group-hover:scale-110">
                      <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  </Link>
                  <Link href="#" aria-label="Share on LinkedIn" className="group">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-transform duration-300 group-hover:scale-110">
                      <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  </Link>
                  <Link href="#" aria-label="Share via Link" className="group">
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-transform duration-300 group-hover:scale-110">
                      <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Celebrate Your Progress, Share Your Wins Section */}
      <div className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400">COMMUNITY</span>
            </div>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Celebrate Your Progress, Share Your Wins
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Learning is better when shared. As you progress through this course, celebrate your milestones and
                inspire others on their learning journey.
              </p>

              <div className="mt-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Build Your Reputation</h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                      Showcase your new skills and knowledge to your professional network and establish yourself as a
                      continuous learner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Inspire Others</h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                      Your learning journey can motivate friends and colleagues to invest in their own skills
                      development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Join the Community</h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                      Connect with fellow learners, exchange ideas, and build a network of professionals with similar
                      interests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-base font-medium text-gray-900 dark:text-white">Share your learning journey on:</p>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">Share on Facebook</span>
                    <div className="bg-gray-100 dark:bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                      <Facebook className="h-6 w-6" />
                    </div>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">Share on Twitter</span>
                    <div className="bg-gray-100 dark:bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                      <Twitter className="h-6 w-6" />
                    </div>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">Share on LinkedIn</span>
                    <div className="bg-gray-100 dark:bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                      <Linkedin className="h-6 w-6" />
                    </div>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-300">
                    <span className="sr-only">Share via Email</span>
                    <div className="bg-gray-100 dark:bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 relative">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 mix-blend-multiply"></div>
                <img
                  src="/ai-community.png"
                  alt="Learning community celebrating achievements"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="/testimonials/sarah-williams.png"
                        alt="Student testimonial"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base text-gray-600 dark:text-gray-300">
                        "Sharing my course completion on LinkedIn landed me three interview opportunities! The skills I
                        learned here were exactly what employers were looking for."
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Jessica Martinez</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Data Analyst at TechCorp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="bg-gray-50 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Related Courses</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courseData.relatedCourses.map((course) => (
              <Link href={`/courses/${course.id}`} key={course.id}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-purple-600 hover:bg-purple-700">{course.level}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="mb-2 line-clamp-2 text-lg font-bold">{course.title}</h3>

                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <RatingStars rating={course.rating} />
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                          ({course.studentsCount.toLocaleString()})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-lg font-bold">${course.salePrice.toFixed(2)}</span>
                        <span className="ml-1 text-sm text-gray-500 line-through dark:text-gray-400">
                          ${course.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16 dark:from-purple-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Learning Journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Join thousands of students who are already mastering AI prompting skills and transforming their careers.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
              <Link href={`/courses/${params.id}/learn`}>
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Browse All Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
