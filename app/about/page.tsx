import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, History, Target, Lightbulb, Award, Brain, Globe, Paintbrush, Rocket, Star } from "lucide-react"
import NavbarWrapper from "./navbar-wrapper"

export default function AboutPage() {
  return (
    <>
      <NavbarWrapper />

      {/* Hero Section */}
      <section className="relative py-24 pt-[200px] overflow-hidden bg-gradient-to-br from-[#0D1223] via-[#131b36] to-[#0D1223] text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Optimized animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse will-change-transform"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse will-change-transform"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse will-change-transform"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          {/* Optimized background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="absolute left-0 top-0 h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.3)" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 22V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M20 7L12 12L4 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Pioneering the Future of{" "}
                <span className="relative">
                  <span className="relative z-10 gradient-text">AI Education</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 rounded-full blur-sm"></span>
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Empowering individuals and organizations to thrive in an AI-driven world through practical, accessible,
                and transformative learning experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Button size="lg" className="bg-white text-[#0D1223] hover:bg-white/90 px-8">
                  Our Mission
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8">
                  Meet Our Team
                </Button>
              </div>

              <div
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">10+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">50k+</div>
                  <div className="text-gray-400 text-sm">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">200+</div>
                  <div className="text-gray-400 text-sm">AI Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">92%</div>
                  <div className="text-gray-400 text-sm">Career Advancement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About TrainingX.AI</h2>
              <p className="text-lg text-muted-foreground mb-6">
                TrainingX.AI is a revolutionary platform designed to bridge the gap between traditional education and
                the rapidly evolving demands of an AI-powered workforce. We provide practical, hands-on training that
                prepares individuals for success in a world where AI is transforming every industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform combines structured learning paths, interactive AI agents, and immersive simulations to
                deliver a comprehensive educational experience that goes beyond theory to build real-world skills.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <p>Practical AI skills training</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <p>Interactive learning experiences</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <p>Industry-recognized certification</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                  <p>Career-focused outcomes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-overview.png"
                  alt="TrainingX.AI Platform Overview"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        {/* Optimized history section background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] translate-z-0"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] translate-z-0"></div>
          <svg
            className="absolute right-0 top-1/4 h-64 w-64 text-accent/5 translate-z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M47.5,-61.7C59.9,-51.5,67.3,-35.1,71.9,-17.7C76.4,-0.3,78.2,18.1,71.3,32.9C64.4,47.7,49,58.9,32.4,65.5C15.8,72.1,-1.9,74,-19.9,70.1C-37.9,66.2,-56.1,56.5,-67.3,41.1C-78.5,25.7,-82.6,4.6,-77.8,-14.4C-73,-33.4,-59.2,-50.3,-43.4,-59.9C-27.6,-69.5,-9.8,-71.8,6.9,-70.1C23.6,-68.4,35.1,-71.9,47.5,-61.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute left-0 bottom-1/4 h-64 w-64 text-primary/5 translate-z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M42.7,-62.2C56.8,-53.3,70.8,-42.5,77.4,-27.9C84,-13.2,83.2,5.3,76.8,20.5C70.4,35.7,58.5,47.6,44.3,56.5C30.2,65.4,13.9,71.3,-1.7,73.6C-17.3,75.9,-32.1,74.6,-45.9,67.7C-59.8,60.8,-72.7,48.3,-78.8,32.8C-84.9,17.3,-84.2,-1.2,-78.2,-16.9C-72.2,-32.6,-60.9,-45.5,-47.2,-54.5C-33.5,-63.5,-17.3,-68.6,-0.9,-67.4C15.5,-66.2,28.6,-71.1,42.7,-62.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
                <History className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Through Time</h2>
            <p className="text-lg text-muted-foreground">
              From our roots as NuuEDscore to becoming a leader in AI education
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-24 relative">
              <EnhancedTimelineItem
                year="2013"
                title="The Beginning"
                content="TrainingX.AI began as NuuEDscore, founded with a vision to revolutionize education through technology and data-driven approaches."
                position="left"
                icon={<Lightbulb className="h-6 w-6 text-yellow-500" />}
                color="bg-yellow-500"
              />

              <EnhancedTimelineItem
                year="2016"
                title="AI Integration"
                content="Recognizing the transformative potential of artificial intelligence, we began integrating AI technologies into our educational framework."
                position="right"
                icon={<Brain className="h-6 w-6 text-blue-500" />}
                color="bg-blue-500"
              />

              <EnhancedTimelineItem
                year="2019"
                title="Platform Launch"
                content="After years of research and development, we launched our comprehensive AI training platform, making advanced AI education accessible to all."
                position="left"
                icon={<Rocket className="h-6 w-6 text-purple-500" />}
                color="bg-purple-500"
              />

              <EnhancedTimelineItem
                year="2021"
                title="Rebranding to TrainingX.AI"
                content="We rebranded to TrainingX.AI to reflect our focused mission on AI education and training for the future workforce."
                position="right"
                icon={<Paintbrush className="h-6 w-6 text-pink-500" />}
                color="bg-pink-500"
              />

              <EnhancedTimelineItem
                year="2023"
                title="Global Expansion"
                content="TrainingX.AI expanded globally, partnering with leading organizations and institutions to bring AI education to diverse communities worldwide."
                position="left"
                icon={<Globe className="h-6 w-6 text-green-500" />}
                color="bg-green-500"
              />

              <EnhancedTimelineItem
                year="2025"
                title="Today"
                content="Today, TrainingX.AI stands at the forefront of AI education, continuously innovating to prepare individuals and organizations for an AI-driven future."
                position="right"
                icon={<Star className="h-6 w-6 text-amber-500" />}
                color="bg-amber-500"
              />
            </div>
          </div>

          <div className="mt-20 max-w-2xl mx-auto text-center">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-3">Our Vision for the Future</h3>
              <p className="text-muted-foreground">
                As we continue to grow, our commitment to democratizing AI education remains unwavering. We envision a
                world where AI skills are as fundamental as digital literacy, empowering individuals across all
                backgrounds to thrive in the AI-driven economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image src="/mission-image.png" alt="Our Mission" width={600} height={400} className="w-full h-auto" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TrainingX.AI, our mission is to democratize AI education and prepare individuals, workers, and
                businesses for success in an AI-driven economy. We believe that AI skills should be accessible to
                everyone, regardless of their background or prior technical knowledge.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We are committed to bridging the AI skills gap by providing practical, hands-on training that translates
                directly to career advancement, business growth, and personal development. Our goal is to empower one
                million people with the AI skills they need to thrive in the changing landscape of work.
              </p>
              <div className="mt-8">
                <Link href="/assessment">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Take Career Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
            <p className="text-lg text-muted-foreground">
              The "Learn. Apply. Align." approach that sets TrainingX.AI apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <MethodologyCard
              number="01"
              title="Learn"
              description="Acquire practical AI skills through structured courses designed by industry experts. Our curriculum focuses on real-world applications rather than theoretical concepts."
              color="from-blue-500 to-blue-600"
            />

            <MethodologyCard
              number="02"
              title="Apply"
              description="Put your knowledge into practice through interactive simulations, AI agents, and hands-on projects that mirror real-world scenarios and challenges."
              color="from-green-500 to-green-600"
            />

            <MethodologyCard
              number="03"
              title="Align"
              description="Connect your new skills to career opportunities, business growth, or personal goals with personalized guidance and industry-recognized certifications."
              color="from-purple-500 to-purple-600"
            />
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg">
              This three-step methodology ensures that learners not only understand AI concepts but can apply them
              effectively in their chosen field and align their skills with meaningful outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
              <h3 className="text-xl font-semibold mb-2">Derrick O'Neal</h3>
              <p className="text-primary mb-6">Pioneer in AI-Driven Education</p>
              <p className="text-lg text-muted-foreground mb-6">
                Derrick O'Neal is a visionary leader with over 15 years of experience in education technology and
                artificial intelligence. His journey began with a simple question: "How can we prepare everyone for a
                future where AI transforms every aspect of work and life?"
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As the founder of TrainingX.AI, Derrick has dedicated his career to making AI education accessible,
                practical, and transformative. His background in both education and technology has given him a unique
                perspective on how to bridge the gap between traditional learning and the skills needed for the AI
                revolution.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Under his leadership, TrainingX.AI has grown from a small startup to a global leader in AI education,
                helping thousands of individuals and organizations adapt and thrive in an AI-powered world.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    LinkedIn Profile
                  </Button>
                </Link>
                <Link href="/blog/founder-story">
                  <Button variant="link" size="sm">
                    Read Derrick's Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder-image.png"
                  alt="Derrick O'Neal, Founder of TrainingX.AI"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0D1223] text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="10+" title="Years of Experience" />
            <StatCard number="50k+" title="Students Trained" />
            <StatCard number="200+" title="AI Courses" />
            <StatCard number="92%" title="Career Advancement" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of individuals and organizations who are transforming their future with TrainingX.AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8"
                >
                  Take Free Assessment
                </Button>
              </Link>
              <Link href="/ai-courses">
                <Button size="lg" variant="outline" className="px-8 border-primary/20 hover:border-primary/40">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Timeline Item Component
function TimelineItem({
  year,
  title,
  content,
  position,
}: {
  year: string
  title: string
  content: string
  position: "left" | "right"
}) {
  return (
    <div className={`flex items-center ${position === "right" ? "flex-row" : "flex-row-reverse"}`}>
      <div className={`w-1/2 ${position === "right" ? "text-right pr-12" : "text-left pl-12"}`}>
        <div className={`inline-block mb-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold`}>{year}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-primary"></div>
      </div>
      <div className="w-1/2"></div>
    </div>
  )
}

// Methodology Card Component
function MethodologyCard({
  number,
  title,
  description,
  color,
}: {
  number: string
  title: string
  description: string
  color: string
}) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg h-full">
      <CardContent className="p-0">
        <div className={`bg-gradient-to-r ${color} h-2`}></div>
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${color}`}>{number}</div>
            <div className="w-12 h-1 ml-4 bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Stat Card Component
function StatCard({ number, title }: { number: string; title: string }) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{number}</div>
      <div className="text-gray-300">{title}</div>
    </div>
  )
}

// Enhanced Timeline Item Component
function EnhancedTimelineItem({
  year,
  title,
  content,
  position,
  icon,
  color,
}: {
  year: string
  title: string
  content: string
  position: "left" | "right"
  icon: React.ReactNode
  color: string
}) {
  return (
    <div className={`flex items-center ${position === "right" ? "flex-row" : "flex-row-reverse"}`}>
      <div
        className={`w-1/2 ${position === "right" ? "text-right pr-16" : "text-left pl-16"}
        transition-all duration-500 hover:transform hover:scale-105`}
      >
        <div className="group">
          <div
            className={`inline-block mb-3 px-4 py-1 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 text-primary font-bold group-hover:shadow-lg transition-all duration-300`}
          >
            {year}
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground">{content}</p>
        </div>
      </div>

      <div className="relative">
        {/* Center dot */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${color} shadow-lg z-20 flex items-center justify-center`}
        >
          {icon}
        </div>

        {/* Outer ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md z-10"></div>

        {/* Connecting line to content */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-0.5 ${color} z-0
          ${position === "right" ? "left-[calc(50%+6px)]" : "right-[calc(50%+6px)]"}`}
        ></div>
      </div>

      <div className="w-1/2"></div>
    </div>
  )
}
