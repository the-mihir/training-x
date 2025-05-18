"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BarChart, FileText, Share2 } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Earned Badges",
    icon: <Award className="h-10 w-10 text-[#7ED957]" />,
    description: "Hit prompting milestones and earn recognition for your achievements.",
    href: "/dashboard/badges",
    image: "/placeholder.svg?key=0c6ci",
  },
  {
    title: "Analytics Dashboard",
    icon: <BarChart className="h-10 w-10 text-[#00A0E3]" />,
    description: "Track your progress and see your scores grow over time.",
    href: "/dashboard/analytics",
    image: "/placeholder.svg?key=kjrrb",
  },
  {
    title: "Certificates",
    icon: <FileText className="h-10 w-10 text-[#0078BE]" />,
    description: "Download and share certificates with employers to showcase your skills.",
    href: "/dashboard/certificates",
    image: "/placeholder.svg?key=9ynkt",
  },
  {
    title: "Shareable Links",
    icon: <Share2 className="h-10 w-10 text-[#009688]" />,
    description: "Show off your achievements to friends or hiring managers.",
    href: "/dashboard/share",
    image: "/placeholder.svg?key=2hgnr",
  },
]

export default function BellsAndWhistles() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Celebrate Your Progress, Share Your Wins</h2>
          <p className="text-xl text-muted-foreground">
            Every skill earns rewards—track your growth and share your results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-40 relative">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={300}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={feature.href} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-[#009688] hover:bg-[#00796B] text-white">
              Access My Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
