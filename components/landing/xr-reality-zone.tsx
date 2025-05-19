"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CuboidIcon as Cube, Zap, HeartHandshake, UserCheck, TrendingUp, Mic } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/registry/magicui/animated-grid-pattern"
import { useState } from "react"

const simulations = [
  {
    title: "Electrician Training",
    description: "Practice electrical repairs in a safe virtual environment",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    image: "/simulations/electrician-simulation.png",
    id: "electrician-simulation",
  },
  {
    title: "Customer Service",
    description: "Handle difficult customer scenarios with AI feedback",
    icon: <HeartHandshake className="h-6 w-6 text-blue-500" />,
    image: "/simulations/customer-service-simulation.png",
    id: "customer-service",
  },
  {
    title: "Hospitality Training",
    description: "Master hotel and restaurant service protocols",
    icon: <UserCheck className="h-6 w-6 text-green-500" />,
    image: "/simulations/hospitality-simulation.png",
    id: "hospitality-training",
  },
  {
    title: "Interview Preparation",
    description: "Practice answering tough interview questions",
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
    image: "/simulations/interview-simulation.png",
    id: "interview-room",
  },
  {
    title: "Sales Training",
    description: "Perfect your pitch and closing techniques",
    icon: <Zap className="h-6 w-6 text-red-500" />,
    image: "/simulations/sales-simulation.png",
    id: "sales-simulation",
  },
  {
    title: "Public Speaking",
    description: "Overcome stage fright in virtual environments",
    icon: <Mic className="h-6 w-6 text-orange-500" />,
    image: "/simulations/public-speaking-simulation.png",
    id: "public-speaking-room",
  },
]

export default function XRRealityZone() {
  const [activeTab, setActiveTab] = useState("electrician-simulation")

  return (
    <section className="py-20 bg-slate-900 text-white relative z-10 overflow-hidden">
      {/* Animated Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.15}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />

        {/* Additional background elements for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10 z-[-1]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl z-[-1]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl z-[-1]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Practice in XR—No Headset Needed</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Simulate trades, soft skills, and real scenarios in 3D. Just click and go.
          </p>
        </div>

        <Tabs
          defaultValue="electrician-simulation"
          className="w-full max-w-5xl mx-auto"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-slate-800/50 p-1 mb-8 relative overflow-hidden">
            {/* Subtle glow effect for active tab */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-50 blur-md transition-all duration-500"
              style={{
                clipPath: `inset(0 ${100 - (100 / (simulations.length / (window.innerWidth > 768 ? 6 : 3))) * (simulations.findIndex((s) => s.id === activeTab) + 1)}% 0 ${(100 / (simulations.length / (window.innerWidth > 768 ? 6 : 3))) * simulations.findIndex((s) => s.id === activeTab)}%)`,
              }}
            />

            {simulations.map((sim, index) => (
              <TabsTrigger
                key={index}
                value={sim.id}
                className="data-[state=active]:bg-slate-700 data-[state=active]:text-white relative z-10"
              >
                <span className="mr-2">{sim.icon}</span>
                <span className="hidden md:inline">{sim.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {simulations.map((sim, index) => (
            <TabsContent key={index} value={sim.id} className="mt-0 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 z-10 group-hover:opacity-70 transition-opacity duration-300" />
                  <Image
                    src={sim.image || "/placeholder.svg"}
                    alt={sim.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 cursor-pointer hover:bg-white/20 transition-colors">
                    <Cube className="h-6 w-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-3xl mr-3">{sim.icon}</span>
                    {sim.title}
                  </h3>
                  <p className="text-slate-300 mb-6">{sim.description}</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="text-green-400 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Realistic 3D environments</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-green-400 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>AI-powered feedback</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-green-400 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Works on any device</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="text-green-400 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>Earn certificates upon completion</span>
                    </li>
                  </ul>
                  <Link href={`/simulations/${sim.id}`}>
                    <Button className="bg-green-600 hover:bg-green-700 text-white relative overflow-hidden group">
                      <span className="relative z-10">Try This Simulation</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Link href="/simulations">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8 h-auto relative overflow-hidden group">
              <span className="relative z-10">Explore All XR Simulations</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
