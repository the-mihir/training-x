"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Bot,
  DollarSign,
  Wrench,
  Rocket,
  PenTool,
  MessageSquare,
  Share2,
  Brain,
  Clock,
  Settings,
} from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

const courses = [
  {
    title: "AI Prompting Basics",
    icon: <Bot className="h-5 w-5" />,
    iconColor: "from-blue-500 to-indigo-600",
    description: "Learn prompting fundamentals to communicate with AI.",
    href: "/ai-courses/prompting-basics",
    image: "/course-images/ai-prompting-basics.png",
  },
  {
    title: "Financial Literacy",
    icon: <DollarSign className="h-5 w-5" />,
    iconColor: "from-green-500 to-emerald-600",
    description: "Manage money smarter with AI tools.",
    href: "/ai-courses/financial-literacy",
    image: "/course-images/financial-literacy.png",
  },
  {
    title: "Trade Skills with AI",
    icon: <Wrench className="h-5 w-5" />,
    iconColor: "from-orange-500 to-amber-600",
    description: "Use AI to boost your trade career path.",
    href: "/ai-courses/trade-skills",
    image: "/course-images/trade-skills.png",
  },
  {
    title: "Entrepreneurship",
    icon: <Rocket className="h-5 w-5" />,
    iconColor: "from-purple-500 to-violet-600",
    description: "Launch and scale a business using AI.",
    href: "/ai-courses/entrepreneurship",
    image: "/course-images/entrepreneurship.png",
  },
  {
    title: "Copywriting & Marketing",
    icon: <PenTool className="h-5 w-5" />,
    iconColor: "from-pink-500 to-rose-600",
    description: "Write landing pages and ads that convert.",
    href: "/ai-courses/copywriting",
    image: "/course-images/copywriting-marketing.png",
  },
  {
    title: "ChatGPT – AI That Works For You",
    icon: <MessageSquare className="h-5 w-5" />,
    iconColor: "from-teal-500 to-cyan-600",
    description: "Use AI to improve everyday productivity.",
    href: "/ai-courses/chatgpt",
    image: "/course-images/chatgpt-productivity.png",
  },
  {
    title: "SEO & Social Media Strategy",
    icon: <Share2 className="h-5 w-5" />,
    iconColor: "from-red-500 to-rose-600",
    description: "Boost your reach and marketing impact.",
    href: "/ai-courses/seo-social",
    image: "/course-images/seo-social-media.png",
  },
  {
    title: "Critical Thinking & Problem Solving",
    icon: <Brain className="h-5 w-5" />,
    iconColor: "from-yellow-500 to-amber-600",
    description: "Think clearer, make smarter decisions.",
    href: "/ai-courses/critical-thinking",
    image: "/course-images/critical-thinking.png",
  },
  {
    title: "Advanced Time Management",
    icon: <Clock className="h-5 w-5" />,
    iconColor: "from-blue-400 to-sky-600",
    description: "Use AI to manage time and increase productivity.",
    href: "/ai-courses/time-management",
    image: "/course-images/time-management.png",
  },
  {
    title: "AI Prompt Engineering",
    icon: <Settings className="h-5 w-5" />,
    iconColor: "from-slate-500 to-gray-600",
    description: "Master advanced AI tool commands.",
    href: "/ai-courses/prompt-engineering",
    image: "/course-images/prompt-engineering.png",
  },
]

export default function CourseSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  // Handle image error
  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section className="pb-20 relative bg-gradient-to-t from-blue-200 via-teal-100 to-white dark:from-blue-900 dark:via-teal-950 dark:to-slate-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="font-bold mb-4">
            <span className="text-2xl md:text-3xl block font-normal">Build Your</span>
            <span className="text-3xl md:text-5xl bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              Prompting Foundation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start with real-world training that prepares you for jobs, business, and life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={
                    imageErrors[index]
                      ? `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(`AI course about ${course.title}`)}`
                      : course.image ||
                        `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(`AI course about ${course.title}`)}`
                  }
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImageError(index)}
                />
                <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-white",
                        course.iconColor,
                      )}
                    >
                      {course.icon}
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={course.href} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/ai-courses">
            <Button size="lg" className="bg-[#009688] hover:bg-[#00796B] text-white">
              Explore All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
