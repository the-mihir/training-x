"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const agents = [
  {
    title: "Spiral Study Buddy",
    description: "Study support for any subject",
    link: "/agents/study-buddy",
    image: "/agents/study-buddy-agent.png",
  },
  {
    title: "Tutor Agent",
    description: "Skill practice with personalized feedback",
    link: "/agents/tutor",
    image: "/agents/tutor-agent.png",
  },
  {
    title: "Career Agent",
    description: "Path discovery and job preparation",
    link: "/agents/career",
    image: "/agents/career-agent.png",
  },
  {
    title: "Financial Agent",
    description: "AI for budgeting & saving",
    link: "/agents/financial",
    image: "/agents/financial-agent.png",
  },
  {
    title: "Text-to-Image Agent",
    description: "Visual AI creation",
    link: "/agents/text-to-image",
    image: "/agents/text-to-image-agent.png",
  },
  {
    title: "Text-to-Video Agent",
    description: "Short video generation",
    link: "/agents/text-to-video",
    image: "/agents/text-to-video-agent.png",
  },
  {
    title: "Entrepreneur Agent",
    description: "Business building prompts",
    link: "/agents/entrepreneur",
    image: "/agents/entrepreneur-agent.png",
  },
  {
    title: "ChatGPT Agent",
    description: "Writing, texting, editing",
    link: "/agents/chatgpt",
    image: "/agents/chatgpt-agent.png",
  },
  {
    title: "The Glove Agent (Gary Payton)",
    description: "Career readiness",
    link: "/agents/glove",
    image: "/agents/glove-agent.png",
  },
]

const categories = [
  {
    id: "all",
    label: "All Agents",
    agents: agents,
  },
  {
    id: "learning",
    label: "Learning",
    agents: agents.filter((agent) => ["Spiral Study Buddy", "Tutor Agent"].includes(agent.title)),
  },
  {
    id: "career",
    label: "Career",
    agents: agents.filter((agent) => ["Career Agent", "The Glove Agent (Gary Payton)"].includes(agent.title)),
  },
  {
    id: "creative",
    label: "Creative",
    agents: agents.filter((agent) =>
      ["Text-to-Image Agent", "Text-to-Video Agent", "ChatGPT Agent"].includes(agent.title),
    ),
  },
  {
    id: "business",
    label: "Business",
    agents: agents.filter((agent) => ["Entrepreneur Agent", "Financial Agent"].includes(agent.title)),
  },
]

export default function PracticeZone() {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null)

  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">
            <span className="text-2xl md:text-3xl block font-normal">Practice With</span>
            <span className="text-3xl md:text-5xl bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              Agents That React to You
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each agent gives hands-on prompting experience. Just click and try a task.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 p-1 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "rounded-full px-6 py-2 text-sm font-medium transition-all",
                    "data-[state=active]:bg-white data-[state=active]:text-[#0D1223] data-[state=active]:shadow-sm",
                    "hover:text-[#0D1223]",
                  )}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.agents.map((agent) => (
                  <Link
                    href={agent.link}
                    key={agent.title}
                    className="group"
                    onMouseEnter={() => setHoveredAgent(agent.title)}
                    onMouseLeave={() => setHoveredAgent(null)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
                      <div className="h-48 overflow-hidden relative">
                        <Image
                          src={agent.image || "/placeholder.svg"}
                          alt={agent.title}
                          width={400}
                          height={300}
                          className={cn(
                            "w-full h-full object-cover transition-transform duration-500",
                            hoveredAgent === agent.title ? "scale-110" : "scale-100",
                          )}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-xl font-bold text-white">{agent.title}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-slate-600 dark:text-slate-300 mb-4">{agent.description}</p>
                        <div
                          className={cn(
                            "flex items-center text-primary font-medium transition-all duration-300",
                            hoveredAgent === agent.title ? "translate-x-2" : "translate-x-0",
                          )}
                        >
                          Try this agent
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-lg py-6 px-8 h-auto btn-shine">
            Start Prompting Now
          </Button>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                <Play className="h-6 w-6 text-yellow-500 ml-1" />
              </div>
            </div>
            <Image
              src="/ai-prompting-tutorial-video.png"
              alt="AI Prompting Tutorial"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
