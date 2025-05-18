import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react"
import NavbarWrapper from "./navbar-wrapper"

// Sample blog post data
const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI Prompting: How It's Transforming Work and Education",
    excerpt:
      "Discover how AI prompting is revolutionizing productivity across industries and creating new opportunities for career advancement.",
    image: "/blog/ai-prompting-future.png",
    category: "AI Trends",
    author: "Derrick O'Neal",
    authorImage: "/founder-image.png",
    date: "May 10, 2025",
    readTime: "8 min read",
    featured: true,
    slug: "future-of-ai-prompting",
  },
  {
    id: 2,
    title: "5 Essential AI Prompting Techniques Every Professional Should Know",
    excerpt:
      "Master these fundamental prompting strategies to get better results from AI tools and enhance your productivity.",
    image: "/blog/essential-prompting-techniques.png",
    category: "Tutorials",
    author: "Sarah Johnson",
    authorImage: "/testimonials/sarah-johnson.png",
    date: "May 5, 2025",
    readTime: "6 min read",
    featured: true,
    slug: "essential-prompting-techniques",
  },
  {
    id: 3,
    title: "How AI Companions Are Personalizing the Learning Experience",
    excerpt:
      "Explore how AI companions are creating tailored educational experiences that adapt to individual learning styles and needs.",
    image: "/blog/ai-companions-learning.png",
    category: "Education",
    author: "Michael Chen",
    authorImage: "/testimonials/michael-chen.png",
    date: "April 28, 2025",
    readTime: "7 min read",
    featured: true,
    slug: "ai-companions-learning",
  },
]

const recentPosts = [
  {
    id: 4,
    title: "From Novice to Expert: A Journey in AI Prompting Mastery",
    excerpt:
      "Follow one student's transformation from AI beginner to prompting expert, and the career opportunities it unlocked.",
    image: "/blog/novice-to-expert.png",
    category: "Success Stories",
    author: "Elena Rodriguez",
    authorImage: "/testimonials/elena-rodriguez.png",
    date: "April 25, 2025",
    readTime: "5 min read",
    slug: "novice-to-expert",
  },
  {
    id: 5,
    title: "AI Prompting for Creative Professionals: Enhancing Your Artistic Process",
    excerpt:
      "Learn how writers, designers, and artists are using AI prompting to overcome creative blocks and enhance their work.",
    image: "/blog/creative-prompting.png",
    category: "Creativity",
    author: "David Thompson",
    authorImage: "/testimonials/david-thompson.png",
    date: "April 20, 2025",
    readTime: "9 min read",
    slug: "creative-prompting",
  },
  {
    id: 6,
    title: "The Business Case for AI Prompting Training: ROI and Productivity Gains",
    excerpt: "Discover how companies are measuring the return on investment from AI prompting training programs.",
    image: "/blog/business-case-ai.png",
    category: "Business",
    author: "Aisha Patel",
    authorImage: "/testimonials/aisha-patel.png",
    date: "April 15, 2025",
    readTime: "7 min read",
    slug: "business-case-ai",
  },
  {
    id: 7,
    title: "Ethical Considerations in AI Prompting: Responsible Use and Best Practices",
    excerpt: "Explore the ethical dimensions of AI prompting and how to ensure responsible use in various contexts.",
    image: "/blog/ethical-ai-prompting.png",
    category: "Ethics",
    author: "Jamal Williams",
    authorImage: "/testimonials/jamal-williams.png",
    date: "April 10, 2025",
    readTime: "8 min read",
    slug: "ethical-ai-prompting",
  },
  {
    id: 8,
    title: "AI Prompting in Healthcare: Improving Patient Care and Medical Research",
    excerpt:
      "How healthcare professionals are using AI prompting to enhance diagnostics, treatment plans, and medical research.",
    image: "/blog/healthcare-ai-prompting.png",
    category: "Healthcare",
    author: "Dr. Lisa Chen",
    authorImage: "/blog/author-lisa-chen.png",
    date: "April 5, 2025",
    readTime: "10 min read",
    slug: "healthcare-ai-prompting",
  },
  {
    id: 9,
    title: "The Psychology Behind Effective AI Prompts: Understanding Human-AI Interaction",
    excerpt:
      "Delve into the psychological principles that make certain prompting approaches more effective than others.",
    image: "/blog/psychology-ai-prompts.png",
    category: "Psychology",
    author: "Dr. Marcus Johnson",
    authorImage: "/blog/author-marcus-johnson.png",
    date: "March 30, 2025",
    readTime: "11 min read",
    slug: "psychology-ai-prompts",
  },
]

const categories = [
  { name: "All", count: 42 },
  { name: "AI Trends", count: 12 },
  { name: "Tutorials", count: 15 },
  { name: "Education", count: 8 },
  { name: "Success Stories", count: 7 },
  { name: "Business", count: 10 },
  { name: "Ethics", count: 6 },
  { name: "Healthcare", count: 5 },
  { name: "Psychology", count: 4 },
  { name: "Creativity", count: 9 },
]

const popularTags = [
  "AI Prompting",
  "Career Development",
  "Learning",
  "ChatGPT",
  "Productivity",
  "Future of Work",
  "Education",
  "Technology",
  "Skills",
  "Training",
]

export default function BlogPage() {
  return (
    <>
      <NavbarWrapper />

      {/* Hero Section */}
      <section className="relative py-20 pt-[200px] bg-gradient-to-br from-[#0D1223] via-[#131b36] to-[#0D1223] text-white overflow-hidden">
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights on AI Prompting and <span className="gradient-text">Future Skills</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore the latest trends, tutorials, and success stories in AI education and prompting mastery
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 py-6 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
       
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <Link href="/blog/featured" className="text-primary flex items-center hover:underline">
              View all featured <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Tabs defaultValue="all" className="w-full">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">Latest Articles</h2>
                    <TabsList className="bg-white dark:bg-slate-800">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                      <TabsTrigger value="trends">Trends</TabsTrigger>
                      <TabsTrigger value="stories">Stories</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="all" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      {recentPosts.map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="tutorials" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      {recentPosts
                        .filter((post) => post.category === "Tutorials")
                        .map((post) => (
                          <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trends" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      {recentPosts
                        .filter((post) => post.category === "AI Trends")
                        .map((post) => (
                          <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="stories" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      {recentPosts
                        .filter((post) => post.category === "Success Stories")
                        .map((post) => (
                          <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex justify-center mt-12">
                <Button size="lg" variant="outline" className="px-8">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Categories */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex justify-between items-center group"
                      >
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </span>
                        <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700">
                          {category.count}
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Badge
                        variant="outline"
                        className="bg-slate-100 hover:bg-primary/10 dark:bg-slate-700 cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest articles, tutorials, and updates delivered to your inbox.
                </p>
                <div className="space-y-4">
                  <Input type="email" placeholder="Your email address" className="bg-white/50 dark:bg-slate-800/50" />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
                </div>
              </div>

              {/* Featured Resource */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/blog/ai-prompting-guide.png"
                    alt="Ultimate AI Prompting Guide"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-accent text-white mb-2">Free Resource</Badge>
                    <h3 className="text-xl font-bold text-white">Ultimate AI Prompting Guide</h3>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6">
                  <p className="text-muted-foreground mb-4">
                    Download our comprehensive guide to mastering AI prompting across different platforms and use cases.
                  </p>
                  <Button className="w-full">Download Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-[#0D1223] rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image src="/blog/cta-pattern.png" alt="CTA pattern" fill className="object-cover" />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Master AI Prompting?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who are transforming their careers with our AI prompting courses and
                community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#0D1223] hover:bg-white/90">
                  Start Free Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Featured Post Card Component
function FeaturedPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
      <div className="relative h-60">
        <Image
          src={post.image || "https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+Post"}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-white">{post.category}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <Image
              src={post.authorImage || "https://placehold.co/100x100/e2e8f0/1e293b?text=Author"}
              alt={post.author}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">{post.author}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={`/blog/${post.slug}`} className="text-primary flex items-center hover:underline">
          Read Article <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </CardFooter>
    </Card>
  )
}

// Blog Post Card Component
function BlogPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-md h-full hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={post.image || "https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+Post"}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-primary dark:bg-slate-800/90">{post.category}</Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src={post.authorImage || "https://placehold.co/100x100/e2e8f0/1e293b?text=Author"}
                alt={post.author}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium">{post.author}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
