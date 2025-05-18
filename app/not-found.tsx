import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import StarfieldBackground from "@/components/starfield-background"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <StarfieldBackground />
      <Navbar />

      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12 text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-bold text-white opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Page Not Found</h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=300&width=300&query=astronaut floating in space looking at a broken planet, digital art"
                alt="Lost in space"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Oops! It seems like you've ventured into uncharted space. The page you're looking for doesn't exist or has
              been moved to another dimension.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild className="gradient-btn text-white" size="lg">
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-white/20 text-white" size="lg">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </Link>
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400">
              Looking for something specific? Try exploring our{" "}
              <Link href="/ai-courses" className="text-primary hover:underline">
                AI courses
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
