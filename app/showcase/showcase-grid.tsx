"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Search,
  Heart,
  MessageSquare,
  Share2,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
  Clock,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Category colors for visual distinction
const categoryColors = {
  "ai-art": { bg: "from-purple-500 to-pink-500", icon: "🎨" },
  financial: { bg: "from-green-500 to-emerald-500", icon: "💰" },
  trade: { bg: "from-blue-500 to-cyan-500", icon: "🔧" },
  marketing: { bg: "from-orange-500 to-amber-500", icon: "📣" },
  entrepreneurship: { bg: "from-red-500 to-rose-500", icon: "💼" },
  productivity: { bg: "from-indigo-500 to-violet-500", icon: "⏱️" },
  "critical-thinking": { bg: "from-teal-500 to-cyan-500", icon: "🧠" },
  "prompt-engineering": { bg: "from-blue-600 to-violet-600", icon: "🤖" },
}

// Sample project data
const projects = [
  {
    id: "1",
    title: "AI-Generated Art Portfolio",
    description: "A collection of AI-generated artwork created using Midjourney and DALL-E.",
    image: "/abstract-digital-composition.png",
    category: "ai-art",
    categoryLabel: "AI Art Creation",
    student: {
      name: "Sarah Johnson",
      avatar: "/testimonials/sarah-johnson.png",
      title: "Digital Artist",
    },
    course: "AI Art Mastery",
    likes: 124,
    comments: 18,
    featured: true,
    timeAgo: "2 days ago",
  },
  {
    id: "2",
    title: "Personal Finance Dashboard",
    description: "Interactive dashboard for tracking expenses, investments, and financial goals.",
    image: "/financial-dashboard-charts.png",
    category: "financial",
    categoryLabel: "Financial Literacy",
    student: {
      name: "Michael Chen",
      avatar: "/testimonials/michael-chen.png",
      title: "Finance Student",
    },
    course: "Financial Literacy Fundamentals",
    likes: 89,
    comments: 12,
    featured: true,
    timeAgo: "1 week ago",
  },
  {
    id: "3",
    title: "Home Renovation Guide",
    description: "Step-by-step guide for DIY home renovation projects with cost estimates.",
    image: "/placeholder.svg?key=sd19r",
    category: "trade",
    categoryLabel: "Trade Skills",
    student: {
      name: "Carlos Rodriguez",
      avatar: "/testimonials/carlos-rodriguez.png",
      title: "Contractor",
    },
    course: "Trade Skills Essentials",
    likes: 76,
    comments: 24,
    featured: false,
    timeAgo: "3 days ago",
  },
  {
    id: "4",
    title: "Email Marketing Campaign",
    description: "A complete email marketing campaign for a fictional eco-friendly product line.",
    image: "/email-marketing-campaign.png",
    category: "marketing",
    categoryLabel: "Marketing & Copywriting",
    student: {
      name: "Elena Rodriguez",
      avatar: "/testimonials/elena-rodriguez.png",
      title: "Marketing Specialist",
    },
    course: "Copywriting & Marketing",
    likes: 112,
    comments: 16,
    featured: false,
    timeAgo: "5 days ago",
  },
  {
    id: "5",
    title: "Business Plan for Tech Startup",
    description: "Comprehensive business plan for an AI-powered education technology startup.",
    image: "/business-plan-document.png",
    category: "entrepreneurship",
    categoryLabel: "Entrepreneurship",
    student: {
      name: "David Thompson",
      avatar: "/testimonials/david-thompson.png",
      title: "Entrepreneur",
    },
    course: "Entrepreneurship Fundamentals",
    likes: 95,
    comments: 21,
    featured: true,
    timeAgo: "1 day ago",
  },
  {
    id: "6",
    title: "Productivity System",
    description: "Custom productivity system combining GTD, time blocking, and digital tools.",
    image: "/placeholder.svg?key=jbm0g",
    category: "productivity",
    categoryLabel: "Productivity",
    student: {
      name: "Aisha Patel",
      avatar: "/testimonials/aisha-patel.png",
      title: "Project Manager",
    },
    course: "ChatGPT Productivity",
    likes: 68,
    comments: 9,
    featured: false,
    timeAgo: "2 weeks ago",
  },
  {
    id: "7",
    title: "Critical Analysis of AI Ethics",
    description: "In-depth analysis of ethical considerations in artificial intelligence development.",
    image: "/ai-ethics-concept.png",
    category: "critical-thinking",
    categoryLabel: "Critical Thinking",
    student: {
      name: "Jamal Williams",
      avatar: "/testimonials/jamal-williams.png",
      title: "Ethics Researcher",
    },
    course: "Critical Thinking in AI",
    likes: 103,
    comments: 27,
    featured: false,
    timeAgo: "4 days ago",
  },
  {
    id: "8",
    title: "Advanced Prompt Engineering Guide",
    description: "Comprehensive guide to crafting effective prompts for various AI models.",
    image: "/ai-prompt-engineering.png",
    category: "prompt-engineering",
    categoryLabel: "Prompt Engineering",
    student: {
      name: "Marcus Johnson",
      avatar: "/testimonials/marcus-johnson.png",
      title: "AI Specialist",
    },
    course: "AI Prompt Engineering",
    likes: 156,
    comments: 32,
    featured: true,
    timeAgo: "3 days ago",
  },
]

// Categories for filtering
const categories = [
  { value: "all", label: "All Projects" },
  { value: "ai-art", label: "AI Art Creation" },
  { value: "financial", label: "Financial Literacy" },
  { value: "trade", label: "Trade Skills" },
  { value: "marketing", label: "Marketing & Copywriting" },
  { value: "entrepreneurship", label: "Entrepreneurship" },
  { value: "productivity", label: "Productivity" },
  { value: "critical-thinking", label: "Critical Thinking" },
  { value: "prompt-engineering", label: "Prompt Engineering" },
]

export default function ShowcaseGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const tabsListRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(true)

  // Check if scrolling indicators should be shown
  useEffect(() => {
    const checkScroll = () => {
      if (tabsListRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsListRef.current
        setShowLeftScroll(scrollLeft > 0)
        setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    checkScroll()
    window.addEventListener("resize", checkScroll)

    if (tabsListRef.current) {
      tabsListRef.current.addEventListener("scroll", checkScroll)
    }

    return () => {
      window.removeEventListener("resize", checkScroll)
      if (tabsListRef.current) {
        tabsListRef.current.removeEventListener("scroll", checkScroll)
      }
    }
  }, [])

  // Scroll tabs left or right
  const scrollTabs = (direction: "left" | "right") => {
    if (tabsListRef.current) {
      const scrollAmount = 200
      const newScrollLeft =
        direction === "left"
          ? tabsListRef.current.scrollLeft - scrollAmount
          : tabsListRef.current.scrollLeft + scrollAmount

      tabsListRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  // Filter projects based on active category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.student.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "featured") {
      return a.featured === b.featured ? 0 : a.featured ? -1 : 1
    } else if (sortBy === "popular") {
      return b.likes - a.likes
    } else if (sortBy === "recent") {
      return Number.parseInt(b.id) - Number.parseInt(a.id)
    }
    return 0
  })

  return (
    <section id="showcase-grid" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Student Projects</h2>
              <p className="text-muted-foreground">
                Browse amazing work created by TrainingX students across various courses
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Sort by
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy("featured")}>Featured</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("popular")}>Most Popular</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("recent")}>Most Recent</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <div className="relative mb-8 border-b border-gray-200 dark:border-gray-800 pb-1">
              {/* Scroll left button */}
              {showLeftScroll && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 h-8 w-8"
                  onClick={() => scrollTabs("left")}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Scroll left</span>
                </Button>
              )}

              {/* Scrollable tabs */}
              <div
                ref={tabsListRef}
                className="overflow-x-auto scrollbar-hide py-2 px-2 -mx-2"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <TabsList className="inline-flex min-w-max bg-transparent">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.value}
                      value={category.value}
                      className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Scroll right button */}
              {showRightScroll && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 h-8 w-8"
                  onClick={() => scrollTabs("right")}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Scroll right</span>
                </Button>
              )}
            </div>

            <TabsContent value="all" className="mt-0">
              <ProjectGrid projects={sortedProjects} />
            </TabsContent>

            {categories.slice(1).map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-0">
                <ProjectGrid projects={sortedProjects.filter((project) => project.category === category.value)} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function ProjectGrid({ projects }: { projects: typeof projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.length > 0 ? (
        projects.map((project) => <ProjectCard key={project.id} project={project} />)
      ) : (
        <div className="col-span-full text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  // Get category color
  const categoryColor = categoryColors[project.category as keyof typeof categoryColors] || {
    bg: "from-blue-500 to-purple-500",
    icon: "📁",
  }

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <Link href={`/showcase/${project.id}`} className="block h-full">
          <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl border-0 bg-white dark:bg-gray-800 rounded-xl">
            {/* Image container with gradient overlay */}
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Category badge with icon */}
              <div className="absolute top-4 left-4 z-20">
                <div
                  className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r ${categoryColor.bg} px-3 py-1 text-xs font-medium text-white shadow-lg`}
                >
                  <span>{categoryColor.icon}</span>
                  <span>{project.categoryLabel}</span>
                </div>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-white" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* View project button that appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-gray-900 shadow-lg">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </Button>
              </div>
            </div>

            {/* Content section with improved styling */}
            <CardContent className="flex-grow p-6 pt-8">
              {/* Student info with improved layout */}
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                  <AvatarImage src={project.student.avatar || "/placeholder.svg"} alt={project.student.name} />
                  <AvatarFallback>{project.student.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{project.student.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{project.student.title}</div>
                </div>
                <div className="ml-auto flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  {project.timeAgo}
                </div>
              </div>

              {/* Project title with hover effect */}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description with better typography */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

              {/* Course reference with badge */}
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="outline"
                  className="bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {project.course}
                </Badge>

                {project.featured && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-amber-500" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Featured Project</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </CardContent>

            {/* Footer with engagement metrics */}
            <CardFooter className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700 mt-auto">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <Heart className="h-4 w-4" />
                        <span className="text-xs font-medium">{project.likes}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.likes} likes</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-xs font-medium">{project.comments}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.comments} comments</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Share2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share this project</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </motion.div>
    </TooltipProvider>
  )
}
