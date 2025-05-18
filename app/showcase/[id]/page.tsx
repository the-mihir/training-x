import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Heart, MessageSquare, Share2, Award, Bookmark, Flag, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import ProjectComments from "./project-comments"
import RelatedProjects from "./related-projects"

// Sample project data - in a real app, this would come from a database
const projects = [
  {
    id: "1",
    title: "AI-Generated Art Portfolio",
    description: "A collection of AI-generated artwork created using Midjourney and DALL-E.",
    fullDescription: `
      <p>This portfolio showcases a series of AI-generated artworks created using state-of-the-art models like Midjourney and DALL-E. The project explores the intersection of human creativity and artificial intelligence, demonstrating how AI can be used as a tool for artistic expression.</p>
      
      <p>Each piece in this collection was carefully crafted through a process of prompt engineering and iterative refinement. I started with basic concepts and gradually refined my prompts to achieve the desired aesthetic and emotional impact.</p>
      
      <h3>Technical Process</h3>
      <p>The workflow involved:</p>
      <ul>
        <li>Conceptualizing themes and visual elements</li>
        <li>Crafting detailed prompts with specific style references</li>
        <li>Iterating through multiple generations to refine results</li>
        <li>Post-processing selected images to enhance quality</li>
        <li>Curating the final collection for thematic coherence</li>
      </ul>
      
      <h3>Artistic Vision</h3>
      <p>My goal was to create a series that explores abstract concepts through vibrant, dreamlike imagery. The collection demonstrates how AI can help visualize ideas that would be challenging to create through traditional media.</p>
      
      <p>This project was completed as part of the AI Art Mastery course, where I learned advanced techniques for working with generative AI models and developing a unique artistic style through prompt engineering.</p>
    `,
    image: "/abstract-digital-composition.png",
    gallery: [
      "/abstract-digital-composition.png",
      "/abstract-digital-composition.png",
      "/placeholder.svg?key=4rrdy",
      "/placeholder.svg?key=fba7t",
    ],
    category: "ai-art",
    categoryLabel: "AI Art Creation",
    student: {
      name: "Sarah Johnson",
      avatar: "/testimonials/sarah-johnson.png",
      title: "Digital Artist",
      bio: "Sarah is a digital artist exploring the intersection of traditional art techniques and AI-assisted creation. With a background in graphic design, she's passionate about pushing the boundaries of creative expression through technology.",
    },
    course: "AI Art Mastery",
    courseLink: "/courses/ai-art-mastery",
    likes: 124,
    comments: 18,
    featured: true,
    timeAgo: "2 days ago",
    tools: ["Midjourney", "DALL-E", "Photoshop", "Stable Diffusion"],
    tags: ["digital art", "AI generation", "abstract", "prompt engineering"],
    projectUrl: "https://example.com/ai-art-portfolio",
  },
  {
    id: "2",
    title: "Personal Finance Dashboard",
    description: "Interactive dashboard for tracking expenses, investments, and financial goals.",
    fullDescription: `
      <p>This personal finance dashboard provides a comprehensive overview of financial health, tracking expenses, investments, savings goals, and budget planning in one intuitive interface.</p>
      
      <p>The dashboard was created using a combination of data visualization tools and AI-assisted analysis to provide actionable insights into spending patterns and investment opportunities.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Monthly expense tracking with category breakdown</li>
        <li>Investment portfolio performance visualization</li>
        <li>Savings goals progress tracking</li>
        <li>Budget planning and adherence monitoring</li>
        <li>AI-powered recommendations for optimizing finances</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The dashboard was built using React for the frontend, with Chart.js for data visualization. The backend uses Python with financial analysis libraries to process and analyze the data.</p>
      
      <p>AI integration was implemented using OpenAI's GPT models to generate personalized financial advice based on spending patterns and financial goals.</p>
      
      <p>This project was completed as part of the Financial Literacy Fundamentals course, where I learned about financial planning principles and how to leverage technology for better financial management.</p>
    `,
    image: "/financial-dashboard-charts.png",
    gallery: [
      "/financial-dashboard-charts.png",
      "/financial-chart.png",
      "/budget-dashboard.png",
      "/investment-tracker.png",
    ],
    category: "financial",
    categoryLabel: "Financial Literacy",
    student: {
      name: "Michael Chen",
      avatar: "/testimonials/michael-chen.png",
      title: "Finance Student",
      bio: "Michael is studying finance and technology, with a particular interest in how AI can improve personal financial management. He's passionate about making financial literacy accessible to everyone through intuitive digital tools.",
    },
    course: "Financial Literacy Fundamentals",
    courseLink: "/courses/financial-literacy-fundamentals",
    likes: 89,
    comments: 12,
    featured: true,
    timeAgo: "1 week ago",
    tools: ["React", "Chart.js", "Python", "OpenAI API"],
    tags: ["finance", "dashboard", "data visualization", "budgeting"],
    projectUrl: "https://example.com/finance-dashboard",
  },
  // Additional projects would be defined here
]

// Get project by ID
const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id)
}

// Get related projects (same category, excluding current project)
const getRelatedProjects = (currentProject: (typeof projects)[0]) => {
  return projects
    .filter((project) => project.category === currentProject.category && project.id !== currentProject.id)
    .slice(0, 3)
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project)

  // Category colors for visual distinction
  const categoryColors: Record<string, { bg: string; icon: string; iconColor: string }> = {
    "ai-art": {
      bg: "from-purple-500 to-pink-500",
      icon: "🎨",
      iconColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    financial: {
      bg: "from-green-500 to-emerald-500",
      icon: "💰",
      iconColor: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    trade: { bg: "from-blue-500 to-cyan-500", icon: "🔧", iconColor: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    marketing: {
      bg: "from-orange-500 to-amber-500",
      icon: "📣",
      iconColor: "bg-gradient-to-br from-orange-500 to-amber-500",
    },
    entrepreneurship: {
      bg: "from-red-500 to-rose-500",
      icon: "💼",
      iconColor: "bg-gradient-to-br from-red-500 to-rose-500",
    },
    productivity: {
      bg: "from-indigo-500 to-violet-500",
      icon: "⏱️",
      iconColor: "bg-gradient-to-br from-indigo-500 to-violet-500",
    },
    "critical-thinking": {
      bg: "from-teal-500 to-cyan-500",
      icon: "🧠",
      iconColor: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
    "prompt-engineering": {
      bg: "from-blue-600 to-violet-600",
      icon: "🤖",
      iconColor: "bg-gradient-to-br from-blue-600 to-violet-600",
    },
  }

  const categoryColor = categoryColors[project.category] || {
    bg: "from-blue-500 to-purple-500",
    icon: "📁",
    iconColor: "bg-gradient-to-br from-blue-500 to-purple-500",
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Hero section styled like about page */}
      <div className="relative bg-gradient-to-br from-[#0D1223] via-[#131b36] to-[#0D1223] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Dot pattern overlay */}
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgba(255, 255, 255, 0.1)" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 pt-[200px] pb-20 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/showcase"
              className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Showcase
            </Link>
          </div>

          <div className="flex flex-col items-center text-center mb-8">
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full ${categoryColor.iconColor} mb-6 shadow-lg`}
            >
              <span className="text-2xl">{categoryColor.icon}</span>
            </div>

            {project.featured && (
              <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1 text-xs font-medium text-white shadow-sm mb-4">
                <Award className="h-3.5 w-3.5" />
                <span>Featured Project</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">{project.title}</h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Heart className="h-4 w-4" />
                <span>Like</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">{project.likes}</span>
              </Button>

              <Button variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <MessageSquare className="h-4 w-4" />
                <span>Comment</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">{project.comments}</span>
              </Button>

              <Button variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>

              <Button variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Bookmark className="h-4 w-4" />
                <span>Save</span>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                <AvatarImage src={project.student.avatar || "/placeholder.svg"} alt={project.student.name} />
                <AvatarFallback>{project.student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-white font-medium">{project.student.name}</p>
                <p className="text-gray-300 text-sm">{project.student.title}</p>
              </div>
              <div className="mx-4 h-8 border-l border-gray-500/30"></div>
              <div className="text-left">
                <p className="text-gray-300 text-sm">From Course</p>
                <Link href={project.courseLink} className="text-primary hover:underline flex items-center gap-1">
                  {project.course}
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <Tabs defaultValue="details">
                  <TabsList className="mb-8">
                    <TabsTrigger value="details">Project Details</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="comments">Comments ({project.comments})</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-8">
                    <div className="prose dark:prose-invert max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                          <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} gallery image ${index + 1}`}
                            width={800}
                            height={450}
                            className="object-cover w-full h-full"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="comments">
                    <ProjectComments projectId={project.id} comments={project.comments} />
                  </TabsContent>
                </Tabs>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">About the Creator</h3>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                    <AvatarImage src={project.student.avatar || "/placeholder.svg"} alt={project.student.name} />
                    <AvatarFallback>{project.student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{project.student.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{project.student.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.student.bio}</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">From Course</h4>
                  <Link href={project.courseLink} className="text-primary hover:underline flex items-center gap-1">
                    {project.course}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {project.projectUrl && (
                  <Button className="w-full" asChild>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      View Live Project
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold mb-6">Related Projects</h3>
            <RelatedProjects projects={relatedProjects} />

            <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Report an Issue</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                If you believe this project violates our community guidelines or contains inappropriate content, please
                let us know.
              </p>
              <Button variant="outline" className="w-full gap-2">
                <Flag className="h-4 w-4" />
                <span>Report Project</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
