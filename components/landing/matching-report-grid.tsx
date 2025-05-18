"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart, Download, Eye, Briefcase, Wrench, Users, Bot, Rocket, DollarSign } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const reports = [
  {
    title: "Career Report",
    description: "Best-fit job paths + strengths",
    icon: <Briefcase className="h-5 w-5 text-blue-500" />,
    image: "/reports/career-report.png",
    accuracy: 92,
    detail: 88,
    free: false,
  },
  {
    title: "Trade Skills Report",
    description: "Hands-on roles that fit you",
    icon: <Wrench className="h-5 w-5 text-orange-500" />,
    image: "/reports/trade-skills-report.png",
    accuracy: 94,
    detail: 90,
    free: false,
  },
  {
    title: "Workforce Readiness",
    description: "Soft skills & communication",
    icon: <Users className="h-5 w-5 text-indigo-500" />,
    image: "/reports/workforce-readiness-report.png",
    accuracy: 89,
    detail: 85,
    free: false,
  },
  {
    title: "AI Skills Report",
    description: "Visual, logic, and creative strengths",
    icon: <Bot className="h-5 w-5 text-purple-500" />,
    image: "/reports/ai-skills-report.png",
    accuracy: 95,
    detail: 92,
    free: false,
  },
  {
    title: "Entrepreneurship Report",
    description: "Business potential analysis",
    icon: <Rocket className="h-5 w-5 text-amber-500" />,
    image: "/reports/entrepreneurship-report.png",
    accuracy: 91,
    detail: 87,
    free: true,
  },
  {
    title: "Financial Snapshot",
    description: "Smart savings + money habits",
    icon: <DollarSign className="h-5 w-5 text-green-500" />,
    image: "/reports/financial-snapshot-report.png",
    accuracy: 93,
    detail: 89,
    free: false,
  },
]

export default function MatchingReportGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 relative z-10 bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">
            <span className="text-2xl md:text-3xl block font-normal">Unlock Your Personalized</span>
            <span className="text-3xl md:text-5xl bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              Success Reports
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI-backed reports show your strengths in jobs, trades, AI, and business.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                <Image
                  src={report.image || "https://placehold.co/400x300/e2e8f0/1e293b?text=Report"}
                  alt={report.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 z-20 shadow-md">
                  {report.icon}
                </div>
                {report.free && (
                  <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 z-20">Free</Badge>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  {report.title}
                  <BarChart className="h-5 w-5 text-blue-500" />
                </CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Accuracy</span>
                      <span className="text-sm font-medium text-blue-600">{report.accuracy}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: hoveredCard === index ? `${report.accuracy}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Detail</span>
                      <span className="text-sm font-medium text-green-600">{report.detail}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: hoveredCard === index ? `${report.detail}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> View Sample
                </Button>
                {!report.free && (
                  <Button variant="outline" className="w-full" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Full Report
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="lg:hidden">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {reports.map((report, index) => (
                <CarouselItem key={index} className="md:basis-1/2 sm:basis-1/1">
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                      <Image
                        src={report.image || "https://placehold.co/400x300/e2e8f0/1e293b?text=Report"}
                        alt={report.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 z-20 shadow-md">
                        {report.icon}
                      </div>
                      {report.free && (
                        <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 z-20">Free</Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between">
                        {report.title}
                        <BarChart className="h-5 w-5 text-blue-500" />
                      </CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Accuracy</span>
                            <span className="text-sm font-medium text-blue-600">{report.accuracy}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${report.accuracy}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Detail</span>
                            <span className="text-sm font-medium text-green-600">{report.detail}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${report.detail}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                        <Eye className="mr-2 h-4 w-4" /> View Sample
                      </Button>
                      {!report.free && (
                        <Button variant="outline" className="w-full" size="sm">
                          <Download className="mr-2 h-4 w-4" /> Full Report
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 mb-6 max-w-2xl mx-auto">
            All reports include personalized insights, detailed graphs, skill scores, and AI agent recommendations to
            help you succeed in your chosen path.
          </p>
          <Link href="/reports">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg py-6 px-8 h-auto btn-shine">
              Unlock My Full Reports
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
