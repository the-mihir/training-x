"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Upload, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ShowcaseSubmission() {
  return (
    <section id="submit-project" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6">
            <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
              <Upload className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Work With The World</h2>
          <p className="text-xl text-muted-foreground">
            Showcase your projects, get feedback from peers and instructors, and build your portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <SubmissionStep
            number="01"
            title="Submit Your Project"
            description="Upload your completed project with images, description, and details about what you learned."
            icon={<Upload className="h-6 w-6 text-primary" />}
          />
          <SubmissionStep
            number="02"
            title="Get Approved"
            description="Our team will review your submission to ensure it meets our community guidelines."
            icon={<CheckCircle className="h-6 w-6 text-primary" />}
          />
          <SubmissionStep
            number="03"
            title="Share & Connect"
            description="Once approved, your project will be showcased to the community for feedback and inspiration."
            icon={<Award className="h-6 w-6 text-primary" />}
          />
        </div>

        <div className="flex justify-center mb-20">
          <Link href="/showcase/submit">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Submit Your Project
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Celebrate Your Progress</h3>
              <p className="text-muted-foreground mb-6">
                Sharing your work is a powerful way to track your growth and celebrate your achievements. Each project
                you complete is a milestone in your learning journey.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=kqe29"
                    alt="Student project"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=a4kq2"
                    alt="Student project"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=pqsij"
                    alt="Student project"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Build Your Portfolio</h3>
              <p className="text-muted-foreground mb-6">
                Your showcase projects become part of your professional portfolio, demonstrating your skills and
                expertise to potential employers or clients.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Demonstrate Real Skills</h4>
                  <p className="text-sm text-muted-foreground">Show what you can do, not just what you know</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Stand Out From The Crowd</h4>
                  <p className="text-sm text-muted-foreground">Differentiate yourself with quality projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SubmissionStep({
  number,
  title,
  description,
  icon,
}: {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div className="text-2xl font-bold text-primary">{number}</div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
