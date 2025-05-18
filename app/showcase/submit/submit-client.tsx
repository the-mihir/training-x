"use client"

import { useRef } from "react"
import ShowcaseNavbarWrapper from "../navbar-wrapper"
import SubmissionForm from "./submission-form"
import { Upload, CheckCircle, AlertCircle, Lightbulb, FileCheck, ImageIcon, Award, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubmitProjectClient() {
  const formRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <ShowcaseNavbarWrapper />

      {/* Hero Section styled like About page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D1223] via-[#131b36] to-[#0D1223] pt-[200px] pb-32">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute top-[10%] left-[15%] w-[40rem] h-[40rem] rounded-full bg-blue-600/20 blur-[128px] animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-[10%] right-[15%] w-[30rem] h-[30rem] rounded-full bg-purple-600/20 blur-[128px] animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-[40%] right-[25%] w-[20rem] h-[20rem] rounded-full bg-pink-600/20 blur-[96px] animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" className="fill-white/10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              <Upload className="h-10 w-10 text-white" />
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Share Your{" "}
              <span className="relative inline-block">
                AI Project
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></span>
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Showcase your work with the TrainingX community and inspire others with your creativity and skills.
            </p>
          </div>
        </div>
      </section>

      {/* Tips and Requirements Section */}
      <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-5xl">
          <Card className="overflow-hidden shadow-lg border-0">
            <CardContent className="p-0">
              <Tabs defaultValue="tips" className="w-full">
                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="tips" className="text-base">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Submission Tips
                    </TabsTrigger>
                    <TabsTrigger value="requirements" className="text-base">
                      <FileCheck className="h-4 w-4 mr-2" />
                      Requirements
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="tips" className="p-6 space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Tips for a Successful Submission</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Follow these tips to create a standout project submission
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">High-Quality Images</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Upload clear, high-resolution images that showcase your project from multiple angles. The
                          first image will be your thumbnail.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                          <Award className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Highlight Achievements</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Clearly explain what you accomplished, challenges you overcame, and skills you developed
                          during the project.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Be Specific</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Include specific details about tools, techniques, and methodologies used. This helps others
                          learn from your work.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Show Your Process</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Document your journey from concept to completion. Showing your process is as valuable as the
                          final result.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Submission Requirements</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      All submissions must meet these requirements to be approved
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Course Completion</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          You must have completed the associated TrainingX course to submit a project. Your student ID
                          will be verified.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Original Work</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          All submissions must be your original work. Plagiarism or copyright infringement will result
                          in immediate rejection.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Complete Documentation</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Your submission must include a detailed description, at least one high-quality image, and
                          relevant tags.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Community Guidelines</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Content must adhere to our community guidelines. No offensive, harmful, or inappropriate
                          content will be accepted.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Review Process</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          All submissions are reviewed by our team before being published. This process typically takes
                          1-2 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8" ref={formRef}>
        <div className="container mx-auto max-w-3xl pb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Project Details</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fill out the form below to submit your project to the TrainingX showcase.
            </p>
          </div>

          <SubmissionForm />
        </div>
      </section>
    </>
  )
}
