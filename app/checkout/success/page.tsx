import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Enrollment Successful!</h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Thank you for enrolling in our course. Your journey to mastering AI prompting begins now.
          </p>

          <Card className="mb-8 overflow-hidden">
            <div className="bg-purple-600 p-4 text-white">
              <h2 className="text-lg font-semibold">Order Details</h2>
            </div>
            <CardContent className="p-6">
              <div className="mb-6 flex items-start space-x-4">
                <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src="/course-images/ai-prompting-basics.png"
                    alt="AI Prompting Basics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium">AI Prompting Basics: Master the Art of Effective AI Communication</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Order #ORD-2023-58291</p>
                  <p className="mt-1 text-sm font-medium">$319.99</p>
                </div>
              </div>

              <div className="space-y-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700">
                  <span className="font-medium">Receipt</span>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Date</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Payment Method</span>
                  <span>Credit Card (•••• 1234)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Start Learning</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Your course is ready. Begin your learning journey right away.
              </p>
              <Link href="/courses/1/learn">
                <Button className="w-full">Go to Course</Button>
              </Link>
            </div>

            <div className="rounded-lg border bg-white p-6 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium">Account Dashboard</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                View your enrolled courses and track your progress.
              </p>
              <Link href="/dashboard">
                <Button variant="outline" className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/30">
            <h3 className="mb-2 text-lg font-medium">Need Help Getting Started?</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Check out our quick start guide or contact our support team.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/help/getting-started">
                <Button variant="outline" className="w-full">
                  Quick Start Guide
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/courses"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Browse more courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
