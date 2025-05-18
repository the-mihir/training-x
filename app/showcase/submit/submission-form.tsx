"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Upload,
  Check,
  X,
  Plus,
  Loader2,
  Palette,
  DollarSign,
  Wrench,
  Megaphone,
  Briefcase,
  Clock,
  Brain,
  Bot,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

// Define form schema with Zod
const formSchema = z.object({
  // Step 1: Basic Info
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description must be less than 500 characters"),
  category: z.string().min(1, "Please select a category"),

  // Step 2: Project Details
  studentId: z
    .string()
    .min(5, "Student ID must be at least 5 characters")
    .max(20, "Student ID must be less than 20 characters"),
  fullDescription: z
    .string()
    .min(100, "Full description must be at least 100 characters")
    .max(5000, "Full description must be less than 5000 characters"),
  courseCompleted: z.string().min(1, "Please select the course you completed"),
  projectUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),

  // Step 3: Media
  // Images will be handled separately in state

  // Step 4: Tags and Tools
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
  tools: z.array(z.string()).min(1, "Please add at least one tool or technology"),

  // Step 5: Terms
  termsAgreed: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
})

type FormValues = z.infer<typeof formSchema>

// Categories for the form with Lucide icons
const categories = [
  { value: "ai-art", label: "AI Art Creation", icon: <Palette className="h-5 w-5" /> },
  { value: "financial", label: "Financial Literacy", icon: <DollarSign className="h-5 w-5" /> },
  { value: "trade", label: "Trade Skills", icon: <Wrench className="h-5 w-5" /> },
  { value: "marketing", label: "Marketing & Copywriting", icon: <Megaphone className="h-5 w-5" /> },
  { value: "entrepreneurship", label: "Entrepreneurship", icon: <Briefcase className="h-5 w-5" /> },
  { value: "productivity", label: "Productivity", icon: <Clock className="h-5 w-5" /> },
  { value: "critical-thinking", label: "Critical Thinking", icon: <Brain className="h-5 w-5" /> },
  { value: "prompt-engineering", label: "Prompt Engineering", icon: <Bot className="h-5 w-5" /> },
]

// Courses for the form
const courses = [
  { value: "ai-art-mastery", label: "AI Art Mastery" },
  { value: "financial-literacy-fundamentals", label: "Financial Literacy Fundamentals" },
  { value: "trade-skills-essentials", label: "Trade Skills Essentials" },
  { value: "marketing-copywriting-pro", label: "Marketing & Copywriting Pro" },
  { value: "entrepreneurship-bootcamp", label: "Entrepreneurship Bootcamp" },
  { value: "productivity-mastery", label: "Productivity Mastery" },
  { value: "critical-thinking-essentials", label: "Critical Thinking Essentials" },
  { value: "prompt-engineering-certification", label: "Prompt Engineering Certification" },
]

export default function SubmissionForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<{ file: File; preview: string }[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [currentTool, setCurrentTool] = useState("")

  const totalSteps = 5

  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      studentId: "",
      fullDescription: "",
      courseCompleted: "",
      projectUrl: "",
      tags: [],
      tools: [],
      termsAgreed: false,
    },
  })

  const { register, handleSubmit, formState, watch, setValue, trigger, getValues } = form
  const { errors, isValid } = formState

  // Watch form values for validation
  const watchedValues = watch()

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }))

      // Limit to 4 images total
      setImages((prev) => [...prev, ...newImages].slice(0, 4))
    }
  }

  // Remove image
  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev]
      URL.revokeObjectURL(newImages[index].preview)
      newImages.splice(index, 1)
      return newImages
    })
  }

  // Add tag
  const addTag = () => {
    if (currentTag.trim() && !watchedValues.tags.includes(currentTag.trim())) {
      setValue("tags", [...watchedValues.tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  // Remove tag
  const removeTag = (tag: string) => {
    setValue(
      "tags",
      watchedValues.tags.filter((t) => t !== tag),
    )
  }

  // Add tool
  const addTool = () => {
    if (currentTool.trim() && !watchedValues.tools.includes(currentTool.trim())) {
      setValue("tools", [...watchedValues.tools, currentTool.trim()])
      setCurrentTool("")
    }
  }

  // Remove tool
  const removeTool = (tool: string) => {
    setValue(
      "tools",
      watchedValues.tools.filter((t) => t !== tool),
    )
  }

  // Navigate to next step
  const goToNextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = []

    // Determine which fields to validate based on current step
    switch (currentStep) {
      case 1:
        fieldsToValidate = ["title", "description", "category"]
        break
      case 2:
        fieldsToValidate = ["studentId", "fullDescription", "courseCompleted"]
        // Project URL is optional, so we don't validate it if it's empty
        if (watchedValues.projectUrl) {
          fieldsToValidate.push("projectUrl")
        }
        break
      case 3:
        // Validate that at least one image is uploaded
        if (images.length === 0) {
          alert("Please upload at least one image")
          return
        }
        break
      case 4:
        fieldsToValidate = ["tags", "tools"]
        break
      case 5:
        fieldsToValidate = ["termsAgreed"]
        break
    }

    // Validate the fields for the current step
    const isStepValid = await trigger(fieldsToValidate)

    if (isStepValid) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Submit the form
        handleFormSubmit()
      }
    }
  }

  // Go to previous step
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // Handle form submission
  const handleFormSubmit = async () => {
    setIsSubmitting(true)

    try {
      // In a real application, you would upload the images and submit the form data to your API
      // For this example, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to success page
      router.push("/showcase/submit/success")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your project. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate progress percentage
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      {/* Progress bar */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          <span>
            Step {currentStep} of {totalSteps}
          </span>
          <span>{Math.round(progressPercentage)}% Complete</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Form content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Project Basics</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Let's start with the basic information about your project.
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter a clear, descriptive title"
                      {...register("title")}
                      className={errors.title ? "border-red-500" : ""}
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="description">Short Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Briefly describe your project in 1-2 sentences"
                      {...register("description")}
                      className={errors.description ? "border-red-500" : ""}
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                  </div>

                  <div>
                    <Label>Project Category</Label>
                    <RadioGroup
                      value={watchedValues.category}
                      onValueChange={(value) => setValue("category", value)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2"
                    >
                      {categories.map((category) => (
                        <div key={category.value} className="flex items-center">
                          <RadioGroupItem
                            value={category.value}
                            id={`category-${category.value}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`category-${category.value}`}
                            className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 p-3 w-full peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                              {category.icon}
                            </span>
                            <span>{category.label}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Project Details</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Now, let's add more detailed information about your project.
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      placeholder="Enter your student ID"
                      {...register("studentId")}
                      className={errors.studentId ? "border-red-500" : ""}
                    />
                    {errors.studentId && <p className="text-red-500 text-sm mt-1">{errors.studentId.message}</p>}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Your student ID is required to verify your enrollment in the course.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="fullDescription">Full Description</Label>
                    <Textarea
                      id="fullDescription"
                      placeholder="Provide a detailed description of your project, including your process, challenges, and what you learned"
                      {...register("fullDescription")}
                      className={`min-h-[200px] ${errors.fullDescription ? "border-red-500" : ""}`}
                    />
                    {errors.fullDescription && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullDescription.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="courseCompleted">Course Completed</Label>
                    <Select
                      value={watchedValues.courseCompleted}
                      onValueChange={(value) => setValue("courseCompleted", value)}
                    >
                      <SelectTrigger id="courseCompleted" className={errors.courseCompleted ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select the course this project is from" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            {course.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.courseCompleted && (
                      <p className="text-red-500 text-sm mt-1">{errors.courseCompleted.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="projectUrl">Project URL (Optional)</Label>
                    <Input
                      id="projectUrl"
                      placeholder="https://your-project-url.com"
                      {...register("projectUrl")}
                      className={errors.projectUrl ? "border-red-500" : ""}
                    />
                    {errors.projectUrl && <p className="text-red-500 text-sm mt-1">{errors.projectUrl.message}</p>}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      If your project is hosted online, provide the URL here.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Media Upload */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Project Media</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Upload images of your project. The first image will be used as the main thumbnail.
                </p>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={images.length >= 4}
                    />
                    <Label
                      htmlFor="image-upload"
                      className={`flex flex-col items-center justify-center cursor-pointer ${
                        images.length >= 4 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <Upload className="h-12 w-12 text-gray-400 mb-2" />
                      <span className="text-lg font-medium">Upload Images</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        PNG, JPG, GIF up to 10MB (max 4 images)
                      </span>
                    </Label>
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            <img
                              src={image.preview || "/placeholder.svg"}
                              alt={`Project image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Remove image"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          {index === 0 && <Badge className="absolute bottom-2 left-2 bg-primary">Main Image</Badge>}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      {images.length} of 4 images uploaded. {images.length === 0 && "At least one image is required."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Tags and Tools */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Tags & Tools</h2>
                <p className="text-gray-600 dark:text-gray-300">Add tags and tools to help others find your project.</p>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="tags">Project Tags</Label>
                    <div className="flex mt-2">
                      <Input
                        id="tags"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        placeholder="Add a tag (e.g., web design, animation)"
                        className="rounded-r-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            addTag()
                          }
                        }}
                      />
                      <Button type="button" onClick={addTag} className="rounded-l-none" disabled={!currentTag.trim()}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {watchedValues.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {watchedValues.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}

                    {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="tools">Tools & Technologies</Label>
                    <div className="flex mt-2">
                      <Input
                        id="tools"
                        value={currentTool}
                        onChange={(e) => setCurrentTool(e.target.value)}
                        placeholder="Add a tool (e.g., Photoshop, React)"
                        className="rounded-r-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            addTool()
                          }
                        }}
                      />
                      <Button type="button" onClick={addTool} className="rounded-l-none" disabled={!currentTool.trim()}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {watchedValues.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {watchedValues.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                            {tool}
                            <button
                              type="button"
                              onClick={() => removeTool(tool)}
                              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}

                    {errors.tools && <p className="text-red-500 text-sm mt-1">{errors.tools.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Review & Submit</h2>
                <p className="text-gray-600 dark:text-gray-300">Review your project details before submitting.</p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-500 dark:text-gray-400">Project Title</h3>
                        <p className="text-lg">{watchedValues.title}</p>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-500 dark:text-gray-400">Category</h3>
                        <p className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800">
                            {categories.find((c) => c.value === watchedValues.category)?.icon}
                          </span>
                          <span>{categories.find((c) => c.value === watchedValues.category)?.label}</span>
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-500 dark:text-gray-400">Student ID</h3>
                        <p>{watchedValues.studentId}</p>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-500 dark:text-gray-400">Description</h3>
                        <p>{watchedValues.description}</p>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-500 dark:text-gray-400">Course</h3>
                        <p>{courses.find((c) => c.value === watchedValues.courseCompleted)?.label}</p>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-500 dark:text-gray-400">Images</h3>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {images.map((image, index) => (
                            <div key={index} className="aspect-video rounded-lg overflow-hidden">
                              <img
                                src={image.preview || "/placeholder.svg"}
                                alt={`Project image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div>
                          <h3 className="font-medium text-gray-500 dark:text-gray-400">Tags</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {watchedValues.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-gray-500 dark:text-gray-400">Tools</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {watchedValues.tools.map((tool) => (
                              <Badge key={tool} variant="secondary">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="termsAgreed"
                      checked={watchedValues.termsAgreed}
                      onCheckedChange={(checked) => {
                        setValue("termsAgreed", checked as boolean)
                        trigger("termsAgreed")
                      }}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="termsAgreed"
                        className={`text-sm font-medium leading-none ${
                          errors.termsAgreed ? "text-red-500" : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        I agree to the terms and conditions
                      </Label>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        By submitting this project, I confirm that this is my own work completed as part of a TrainingX
                        course, and I agree to share it with the community.
                      </p>
                      {errors.termsAgreed && <p className="text-red-500 text-sm">{errors.termsAgreed.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Form navigation */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={goToPreviousStep}
          disabled={currentStep === 1 || isSubmitting}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>

        <Button type="button" onClick={goToNextStep} disabled={isSubmitting} className="gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : currentStep === totalSteps ? (
            <>
              Submit Project
              <Check className="h-4 w-4" />
            </>
          ) : (
            <>
              Continue
              <ChevronRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
