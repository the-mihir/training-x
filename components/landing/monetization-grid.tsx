"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Code, Palette, Video, Building2, PenSquare, Package2, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const opportunities = [
  {
    title: "Prompting Engineer",
    description: "$100K+ AI roles",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    details:
      "Create prompts that guide AI systems to produce specific outputs. Companies are hiring specialists who can craft effective prompts for various business applications.",
    skills: ["Natural language processing", "System design", "Problem-solving", "Technical writing"],
    salary: "$100,000 - $150,000",
    image: "/opportunity-images/prompting-engineer.png",
  },
  {
    title: "AI Art Creator",
    description: "Create and sell digital art",
    icon: <Palette className="h-6 w-6 text-purple-500" />,
    details:
      "Use AI tools to generate unique artwork that can be sold as digital assets, prints, or NFTs. Many creators are earning substantial income through AI-assisted art.",
    skills: ["Visual design", "Prompt engineering", "Digital marketing", "Creative direction"],
    salary: "Variable (commission-based)",
    image: "/opportunity-images/ai-art-creator.png",
  },
  {
    title: "Video Director",
    description: "Make movies and music clips",
    icon: <Video className="h-6 w-6 text-red-500" />,
    details:
      "Direct AI-generated videos for businesses, music artists, and content creators. As video generation improves, demand for skilled directors is growing.",
    skills: ["Storyboarding", "Visual composition", "Narrative design", "Technical direction"],
    salary: "$80,000 - $120,000",
    image: "/opportunity-images/video-director.png",
  },
  {
    title: "Business Builder",
    description: "Use AI to run full companies",
    icon: <Building2 className="h-6 w-6 text-green-500" />,
    details:
      "Launch and scale businesses with AI handling operations, customer service, and content creation. Entrepreneurs are building 'AI-native' companies with minimal staff.",
    skills: ["Strategic planning", "Business development", "AI integration", "Process automation"],
    salary: "Unlimited (business ownership)",
    image: "/opportunity-images/business-builder.png",
  },
  {
    title: "Copywriting Pro",
    description: "Sell ad copy and web pages",
    icon: <PenSquare className="h-6 w-6 text-amber-500" />,
    details:
      "Create high-converting marketing copy with AI assistance. Businesses need copywriters who can leverage AI to produce effective content at scale.",
    skills: ["Persuasive writing", "Marketing strategy", "A/B testing", "Brand voice development"],
    salary: "$70,000 - $120,000",
    image: "/opportunity-images/copywriting-pro.png",
  },
  {
    title: "Product Developer",
    description: "Launch products using AI",
    icon: <Package2 className="h-6 w-6 text-cyan-500" />,
    details:
      "Develop new products with AI-assisted design, testing, and market research. Product developers are using AI to accelerate the creation process.",
    skills: ["Product design", "Market analysis", "Prototyping", "User experience"],
    salary: "$90,000 - $140,000",
    image: "/opportunity-images/product-developer.png",
  },
]

export default function MonetizationGrid() {
  return (
    <section className="py-20 bg-slate-50 gradient-bg-section relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">
            <span className="text-2xl md:text-3xl block">Turn Your Skills</span>
            <span className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
              Into Opportunities
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Create real work with prompts and showcase your value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={opportunity.image || "/placeholder.svg"}
                  alt={opportunity.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <div className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center">
                    {opportunity.icon}
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle>{opportunity.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{opportunity.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details">
                    <AccordionTrigger className="text-sm font-medium">Role Details</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-slate-600 mb-3">{opportunity.details}</p>
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold mb-1">Key Skills:</h4>
                        <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                          {opportunity.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Typical Salary:</h4>
                        <p className="text-sm text-slate-600">{opportunity.salary}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/opportunities/${opportunity.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="w-full"
                >
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/opportunities">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-lg py-6 px-8 h-auto btn-shine">
              Start Monetizing
            </Button>
          </Link>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                <Play className="h-6 w-6 text-yellow-500 ml-1" />
              </div>
            </div>
            <Image
              src="/opportunity-images/monetization-video-thumbnail.png"
              alt="Turn prompts into results"
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
