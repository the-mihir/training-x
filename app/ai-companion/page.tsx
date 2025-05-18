import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Zap, Users, ArrowRight, CheckCircle, Brain, Sparkles, Bot, Star } from "lucide-react"
import NavbarWrapper from "./navbar-wrapper"
import StarfieldBackground from "@/components/starfield-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Code, Briefcase, BarChart3, Palette, FileText, Rocket } from "lucide-react"
import InteractiveDemo from "./interactive-demo"

export default function AICompanionPage() {
  return (
    <>
      <NavbarWrapper />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] pt-[200px] flex items-center overflow-hidden">
        <StarfieldBackground />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                AI-Powered Learning
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Meet Your Personal <span className="gradient-text">AI Companion</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your intelligent guide through the world of AI prompting. Get personalized assistance, practice
                real-world scenarios, and accelerate your learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white btn-shine">
                  Try AI Companion Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <Image
                  src="/ai-companion-hero.png"
                  alt="AI Companion Interface"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try It Now Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">TRY IT NOW! TrainingX.AI Companion Agent</h2>
            <p className="text-xl text-muted-foreground">
              Your Personal AI Guide to mastering prompting skills and navigating the AI-powered future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full"></div>
              <div className="relative z-10">
                <InteractiveDemo />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Experience the Power of AI Guidance</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI Companion is more than just a chatbot—it's your personal guide to mastering AI prompting skills.
                Start a conversation now and discover how it can help you:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Get instant answers to your AI questions</p>
                    <p className="text-muted-foreground">No more searching through endless articles and videos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Practice prompting in a safe environment</p>
                    <p className="text-muted-foreground">Try different approaches and get immediate feedback</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Receive personalized learning recommendations</p>
                    <p className="text-muted-foreground">Get suggestions tailored to your skill level and goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Track your progress over time</p>
                    <p className="text-muted-foreground">See how your prompting skills improve with practice</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Start Chatting Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Helps</h2>
            <p className="text-xl text-muted-foreground">
              Your AI Companion is designed to accelerate your learning and make AI skills accessible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-primary" />}
              title="Personalized Learning"
              description="Adapts to your skill level and learning style to provide customized guidance and challenges that grow with you."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-primary" />}
              title="Real-time Feedback"
              description="Get immediate feedback on your prompts and learn how to improve them for better results across different AI tools."
            />
            <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-primary" />}
              title="Practical Examples"
              description="Access a vast library of real-world examples and templates to apply AI prompting in your specific field or industry."
            />
          </div>

          <div className="mt-16">
            <Tabs defaultValue="work" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
              </TabsList>
              <TabsContent value="work" className="mt-0">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Enhance Your Career</h3>
                        <p className="text-muted-foreground mb-6">
                          The AI Companion helps you develop prompting skills that can transform your productivity and
                          career prospects. Learn how to:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Automate repetitive tasks with AI</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Create professional documents and presentations faster</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Analyze data and generate insights</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Develop AI skills that employers value</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <Image
                          src="/ai-companion-work.png"
                          alt="AI Companion for Work"
                          width={500}
                          height={350}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education" className="mt-0">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Accelerate Your Learning</h3>
                        <p className="text-muted-foreground mb-6">
                          Use the AI Companion to enhance your educational journey and master complex subjects faster:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Get personalized explanations for difficult concepts</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Create study guides and summaries</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Practice with interactive quizzes and challenges</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Research topics more efficiently</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <Image
                          src="/ai-companion-education.png"
                          alt="AI Companion for Education"
                          width={500}
                          height={350}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="business" className="mt-0">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Grow Your Business</h3>
                        <p className="text-muted-foreground mb-6">
                          Leverage AI prompting to scale your business operations and drive growth:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Generate marketing copy and content</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Analyze customer feedback and market trends</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Streamline operations with AI automation</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Develop AI-powered products and services</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <Image
                          src="/ai-companion-business.png"
                          alt="AI Companion for Business"
                          width={500}
                          height={350}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="personal" className="mt-0">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Enhance Your Daily Life</h3>
                        <p className="text-muted-foreground mb-6">
                          Apply AI prompting skills to improve various aspects of your personal life:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Plan meals and create shopping lists</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Get personalized fitness and wellness recommendations</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Organize your schedule and boost productivity</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Create and edit photos, videos, and creative content</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <Image
                          src="/ai-companion-personal.png"
                          alt="AI Companion for Personal Use"
                          width={500}
                          height={350}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Practice Zone Agents Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prompting to Success Practice Zone Agents</h2>
            <p className="text-xl text-muted-foreground">
              Specialized AI agents designed to help you master specific prompting skills through guided practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AgentCard
              icon={<Code className="h-6 w-6 text-blue-500" />}
              title="Prompt Engineer"
              description="Learn advanced prompting techniques for various AI models and applications."
              skills={["Prompt structure", "Context setting", "Parameter optimization"]}
            />
            <AgentCard
              icon={<Briefcase className="h-6 w-6 text-indigo-500" />}
              title="Career Coach"
              description="Practice prompting to enhance your job search, resume, and interview skills."
              skills={["Resume optimization", "Interview preparation", "Career planning"]}
            />
            <AgentCard
              icon={<BarChart3 className="h-6 w-6 text-green-500" />}
              title="Data Analyst"
              description="Master prompts for data analysis, visualization, and insight generation."
              skills={["Data querying", "Pattern recognition", "Report generation"]}
            />
            <AgentCard
              icon={<Palette className="h-6 w-6 text-pink-500" />}
              title="Creative Director"
              description="Develop prompting skills for generating images, designs, and creative content."
              skills={["Visual prompting", "Style guidance", "Iteration techniques"]}
            />
            <AgentCard
              icon={<FileText className="h-6 w-6 text-amber-500" />}
              title="Content Creator"
              description="Learn how to prompt for engaging articles, social media posts, and marketing copy."
              skills={["Tone adjustment", "Audience targeting", "Content structuring"]}
            />
            <AgentCard
              icon={<Rocket className="h-6 w-6 text-purple-500" />}
              title="Entrepreneur"
              description="Practice prompting for business ideas, market analysis, and growth strategies."
              skills={["Opportunity identification", "Business modeling", "Strategy development"]}
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/practice-zone">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore All Practice Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-[#0D1223] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/community-pattern.png" alt="Community pattern" fill className="object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing AI Community</h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with fellow learners, share your experiences, and accelerate your growth in a supportive
                community of AI enthusiasts and professionals.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
                    <p className="text-gray-300">
                      Share prompts, techniques, and results with other members to learn from each other's experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                    <p className="text-gray-300">
                      Access live sessions, workshops, and Q&As with AI experts and industry professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Challenges & Competitions</h3>
                    <p className="text-gray-300">
                      Test your skills in friendly competitions and challenges designed to push your boundaries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#0D1223] hover:bg-white/90">
                  Join Community
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/ai-community.png"
                  alt="TrainingX.AI Community"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                5,000+ Members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from professionals and students who have transformed their skills with our AI Companion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The AI Companion helped me understand complex prompting techniques that I was struggling with. It's like having a personal tutor available 24/7."
              name="Marcus Johnson"
              role="Software Developer"
              image="/testimonials/marcus-johnson.png"
              rating={5}
            />
            <TestimonialCard
              quote="I've tried other AI tools, but TrainingX's AI Companion actually teaches you how to fish rather than just giving you the fish. My productivity has increased by 40%."
              name="Sarah Williams"
              role="Marketing Manager"
              image="/testimonials/sarah-williams.png"
              rating={5}
            />
            <TestimonialCard
              quote="As someone with no technical background, I was intimidated by AI. The AI Companion made learning approachable and practical for my small business needs."
              name="Carlos Rodriguez"
              role="Small Business Owner"
              image="/testimonials/carlos-rodriguez.png"
              rating={4}
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the TrainingX.AI Companion
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white dark:bg-slate-900 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What is the TrainingX.AI Companion?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  The TrainingX.AI Companion is an intelligent AI assistant designed specifically to help you master AI
                  prompting skills. It provides personalized guidance, feedback on your prompts, practice scenarios, and
                  learning recommendations tailored to your skill level and goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white dark:bg-slate-900 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How is this different from ChatGPT or other AI assistants?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Unlike general-purpose AI assistants, the TrainingX.AI Companion is specifically designed for learning
                  and mastering AI prompting skills. It's built with educational methodologies in mind, provides
                  structured learning paths, offers specific feedback on your prompting techniques, and integrates with
                  our broader curriculum and community resources.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white dark:bg-slate-900 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Do I need technical skills to use the AI Companion?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Not at all! The AI Companion is designed to be accessible to users of all technical backgrounds.
                  Whether you're a complete beginner or an experienced professional, the companion adapts to your skill
                  level and provides guidance that's appropriate for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white dark:bg-slate-900 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Can I use the AI Companion for specific industries or use cases?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes! The AI Companion can provide guidance for a wide range of industries and use cases, including
                  business, education, healthcare, creative fields, and more. You can specify your industry and goals,
                  and the companion will tailor its assistance accordingly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white dark:bg-slate-900 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Is there a free version of the AI Companion?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, we offer a free version of the AI Companion with limited features. This allows you to experience
                  the benefits before upgrading to our premium version, which includes unlimited conversations, advanced
                  prompting techniques, personalized learning paths, and integration with our full curriculum.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white dark:bg-slate-900 rounded-lg border">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How does the AI Companion track my progress?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  The AI Companion analyzes your interactions, prompting patterns, and skill development over time. It
                  maintains a learning profile that helps it understand your strengths, areas for improvement, and
                  learning preferences. You can access progress reports and skill assessments in your dashboard.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
              <Link href="/contact">
                <Button variant="outline">Contact Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Begin your conversation with the AI Companion today and take the first step toward mastering AI prompting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8"
              >
                Try AI Companion Now
              </Button>
              <Link href="/assessment">
                <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 px-8">
                  Take Free Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
      <CardContent className="p-8">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

// Agent Card Component
function AgentCard({
  icon,
  title,
  description,
  skills,
}: {
  icon: React.ReactNode
  title: string
  description: string
  skills: string[]
}) {
  return (
    <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6 border-b">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-slate-800/50">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-white/50 dark:bg-slate-700/50">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="link" className="p-0 h-auto text-primary">
              Try this agent <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Testimonial Card Component
function TestimonialCard({
  quote,
  name,
  role,
  image,
  rating,
}: {
  quote: string
  name: string
  role: string
  image: string
  rating: number
}) {
  return (
    <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
      <CardContent className="p-8">
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
        <blockquote className="text-lg mb-6 italic text-muted-foreground">"{quote}"</blockquote>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={image || "https://placehold.co/100x100/e2e8f0/1e293b?text=User"}
              alt={name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
