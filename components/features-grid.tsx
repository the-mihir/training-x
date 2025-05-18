import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Lightbulb, BarChart3, Users, Briefcase, GraduationCap, Sparkles, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "AI-Powered Learning",
    description: "Personalized learning paths that adapt to your skill level and goals.",
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    image: "/features/ai-powered-learning.png",
  },
  {
    title: "Practical Skills",
    description: "Learn by doing with hands-on projects and real-world applications.",
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    image: "/features/practical-skills.png",
  },
  {
    title: "Progress Tracking",
    description: "Visualize your growth with detailed analytics and skill assessments.",
    icon: <BarChart3 className="h-8 w-8 text-green-500" />,
    image: "/features/progress-tracking.png",
  },
  {
    title: "Community Support",
    description: "Connect with peers and mentors in our collaborative learning environment.",
    icon: <Users className="h-8 w-8 text-purple-500" />,
    image: "/features/community-support.png",
  },
  {
    title: "Career Advancement",
    description: "Gain skills that employers value and open doors to new opportunities.",
    icon: <Briefcase className="h-8 w-8 text-red-500" />,
    image: "/features/career-advancement.png",
  },
  {
    title: "Certified Learning",
    description: "Earn recognized certificates to showcase your expertise.",
    icon: <GraduationCap className="h-8 w-8 text-indigo-500" />,
    image: "/features/certified-learning.png",
  },
  {
    title: "Cutting-Edge Content",
    description: "Stay ahead with regularly updated courses on the latest AI developments.",
    icon: <Sparkles className="h-8 w-8 text-amber-500" />,
    image: "/features/cutting-edge-content.png",
  },
  {
    title: "Accelerated Learning",
    description: "Master complex concepts faster with our proven teaching methodology.",
    icon: <Zap className="h-8 w-8 text-cyan-500" />,
    image: "/features/accelerated-learning.png",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TrainingX</h2>
          <p className="text-xl text-muted-foreground">
            Our platform combines cutting-edge technology with proven learning methods to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 relative">
                <Image
                  src={feature.image || "https://placehold.co/300x200/e2e8f0/1e293b?text=Feature"}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
