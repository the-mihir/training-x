"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  FileText,
  GraduationCap,
  Wrench,
  Rocket,
  Briefcase,
  DollarSign,
  Gamepad2,
  Smartphone,
  HandMetal,
} from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const agents = [
  {
    title: "Spiral Buddy",
    description: "Your personal study companion for any subject",
    icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    href: "/agents/spiral-buddy",
    color: "from-blue-500/20 to-blue-600/5",
    imageQuery: "futuristic AI study assistant with holographic books and learning interface",
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with AI assistance",
    icon: <FileText className="h-5 w-5 text-indigo-500" />,
    href: "/agents/resume-builder",
    color: "from-indigo-500/20 to-indigo-600/5",
    imageQuery: "AI document assistant creating professional resume with holographic interface",
  },
  {
    title: "Tutor Agent",
    description: "Get personalized tutoring in any subject",
    icon: <GraduationCap className="h-5 w-5 text-purple-500" />,
    href: "/agents/tutor",
    color: "from-purple-500/20 to-purple-600/5",
    imageQuery: "AI education tutor with digital learning interface and graduation cap",
  },
  {
    title: "Trade Agent",
    description: "Master trade skills with AI guidance",
    icon: <Wrench className="h-5 w-5 text-orange-500" />,
    href: "/agents/trade",
    color: "from-orange-500/20 to-orange-600/5",
    imageQuery: "AI trade skills assistant with digital tools and construction interface",
  },
  {
    title: "Entrepreneurship Agent",
    description: "Launch and grow your business with AI support",
    icon: <Rocket className="h-5 w-5 text-amber-500" />,
    href: "/agents/entrepreneurship",
    color: "from-amber-500/20 to-amber-600/5",
    imageQuery: "AI business advisor with charts, graphs and rocket launch visualization",
  },
  {
    title: "Career Agent",
    description: "Navigate your career path with expert guidance",
    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
    href: "/agents/career",
    color: "from-blue-600/20 to-blue-700/5",
    imageQuery: "AI career advisor with professional path visualization and briefcase",
  },
  {
    title: "Financial Agent",
    description: "Manage your finances and investments wisely",
    icon: <DollarSign className="h-5 w-5 text-green-500" />,
    href: "/agents/financial",
    color: "from-green-500/20 to-green-600/5",
    imageQuery: "AI financial advisor with digital money charts and investment visualization",
  },
  {
    title: "XR Simulation Coach",
    description: "Practice skills in immersive XR environments",
    icon: <Gamepad2 className="h-5 w-5 text-cyan-500" />,
    href: "/agents/xr-coach",
    color: "from-cyan-500/20 to-cyan-600/5",
    imageQuery: "AI XR coach in virtual reality environment with training simulation",
  },
  {
    title: "Marketing Agent",
    description: "Create compelling marketing campaigns with AI",
    icon: <Smartphone className="h-5 w-5 text-pink-500" />,
    href: "/agents/marketing",
    color: "from-pink-500/20 to-pink-600/5",
    imageQuery: "AI marketing specialist with digital campaign visualization and analytics",
  },
  {
    title: "The Glove Agent",
    description: "Career readiness coaching with Gary Payton",
    icon: <HandMetal className="h-5 w-5 text-gray-500" />,
    href: "/agents/glove",
    color: "from-gray-500/20 to-gray-600/5",
    imageQuery: "AI basketball coach with career training visualization and digital court",
  },
]

export default function AgentForceGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900/50"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agent Force – Your AI Partner Network</h2>
          <p className="text-lg text-muted-foreground">
            Specialized AI agents designed to help you master specific skills through guided practice
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className={cn(
                "h-full overflow-hidden border border-slate-200 dark:border-slate-700",
                "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
                "bg-gradient-to-br",
                agent.color,
              )}
            >
              <div className="flex flex-col h-full">
                <div className="relative h-40 flex-shrink-0">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=160&width=320&query=${agent.imageQuery}`}
                    alt={agent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2 shadow-md z-10">
                    {agent.icon}
                  </div>
                </div>
                <CardHeader className="pb-2 flex-shrink-0">
                  <CardTitle className="text-lg font-semibold">{agent.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <p className="text-muted-foreground text-sm">{agent.description}</p>
                </CardContent>
                <CardFooter className="pt-0 flex-shrink-0">
                  <Link href={agent.href} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800 text-foreground transition-colors duration-300"
                    >
                      Try Agent
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/agents">
            <Button
              size="lg"
              className="bg-[#7ED957] hover:bg-[#6BC545] text-white px-8 py-6 h-auto text-lg shadow-md hover:shadow-lg transition-all"
            >
              Explore All Agents
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
