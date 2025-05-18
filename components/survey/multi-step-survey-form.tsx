"use client"

import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Brain,
  Briefcase,
  Lightbulb,
  Sparkles,
  Send,
  Star,
  Rocket,
  Award,
  Zap,
  BookOpen,
  Laptop,
  LineChart,
  Settings,
  Code,
  Globe,
  FileText,
  PenTool,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Form schemas for each step
const userInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
})

const section1Schema = z.object({
  section1_q1: z.string().min(1, "Please select an option"),
  section1_q2: z.string().min(1, "Please select an option"),
  section1_q3: z.string().min(1, "Please select an option"),
  section1_q4: z.string().min(1, "Please select an option"),
  section1_q5: z.string().min(1, "Please select an option"),
})

const section2Schema = z.object({
  section2_q1: z.string().min(1, "Please select an option"),
  section2_q2: z.string().min(1, "Please select an option"),
  section2_q3: z.string().min(1, "Please select an option"),
  section2_q4: z.string().min(1, "Please select an option"),
  section2_q5: z.string().min(1, "Please select an option"),
})

const section3Schema = z.object({
  section3_q1: z.string().min(1, "Please select an option"),
  section3_q2: z.string().min(1, "Please select an option"),
  section3_q3: z.string().min(1, "Please select an option"),
  section3_q4: z.string().min(1, "Please select an option"),
  section3_q5: z.string().min(1, "Please select an option"),
})

// Combined schema
const formSchema = z.object({
  userInfo: userInfoSchema,
  section1: section1Schema,
  section2: section2Schema,
  section3: section3Schema,
})

type FormData = z.infer<typeof formSchema>

// Likert scale options
const likertOptions = [
  { value: "1", label: "Almost never describes me (0–20%)" },
  { value: "2", label: "Occasionally describes me (21–40%)" },
  { value: "3", label: "Sometimes describes me (41–60%)" },
  { value: "4", label: "Frequently describes me (61–80%)" },
  { value: "5", label: "Almost always describes me (81–100%)" },
]

// Questions for each section with icons
const questions = {
  section1: [
    {
      text: "I am comfortable using AI-powered tools like ChatGPT, Midjourney, or automation software.",
      icon: <Laptop className="h-5 w-5 text-blue-500" />,
    },
    {
      text: "I actively seek ways to use AI to automate tasks in my personal or professional life.",
      icon: <Settings className="h-5 w-5 text-indigo-500" />,
    },
    {
      text: "I enjoy learning about AI and its impact on different industries.",
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
    },
    {
      text: "I see AI as a tool that can enhance my current career or help me transition into a new one.",
      icon: <Rocket className="h-5 w-5 text-pink-500" />,
    },
    {
      text: "I believe AI skills will be essential for my long-term success in the workforce.",
      icon: <Star className="h-5 w-5 text-yellow-500" />,
    },
  ],
  section2: [
    {
      text: "I am interested in pursuing a career in AI-powered marketing, content creation, or digital strategy.",
      icon: <PenTool className="h-5 w-5 text-blue-500" />,
    },
    {
      text: "I would like to work in data analytics or business intelligence.",
      icon: <LineChart className="h-5 w-5 text-indigo-500" />,
    },
    {
      text: "I am interested in AI automation and workflow optimization to improve efficiency.",
      icon: <Zap className="h-5 w-5 text-purple-500" />,
    },
    {
      text: "I would like to develop AI-powered products or software solutions.",
      icon: <Code className="h-5 w-5 text-pink-500" />,
    },
    {
      text: "I want the flexibility to work remotely or in a hybrid environment.",
      icon: <Globe className="h-5 w-5 text-yellow-500" />,
    },
  ],
  section3: [
    {
      text: "I look for ways to automate or optimize repetitive tasks.",
      icon: <Settings className="h-5 w-5 text-blue-500" />,
    },
    {
      text: "I have designed or optimized a process at work to improve efficiency.",
      icon: <FileText className="h-5 w-5 text-indigo-500" />,
    },
    {
      text: "I am comfortable learning new digital tools and platforms quickly.",
      icon: <Laptop className="h-5 w-5 text-purple-500" />,
    },
    {
      text: "I enjoy using AI tools to generate content, such as blog posts, social media captions, or ad copy.",
      icon: <PenTool className="h-5 w-5 text-pink-500" />,
    },
    {
      text: "I am committed to learning and applying AI professionally if it aligns with my career goals.",
      icon: <Award className="h-5 w-5 text-yellow-500" />,
    },
  ],
}

// Step information
const steps = [
  {
    title: "User Information",
    icon: User,
    description: "Tell us about yourself so we can personalize your assessment results",
    illustration: "/placeholder.svg?key=0x1tb",
  },
  {
    title: "AI Familiarity & Interest",
    icon: Brain,
    description: "Help us understand your current experience and interest in AI technologies",
    illustration: "/placeholder.svg?key=bjbjl",
  },
  {
    title: "Career Aspirations & AI Potential",
    icon: Briefcase,
    description: "Share your career goals and how you see AI fitting into your professional future",
    illustration: "/placeholder.svg?key=otj46",
  },
  {
    title: "Automation & Problem-Solving Readiness",
    icon: Lightbulb,
    description: "Tell us about your approach to problem-solving and automation",
    illustration: "/placeholder.svg?key=42s3k",
  },
]

type MultiStepSurveyFormProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MultiStepSurveyForm({ open, onOpenChange }: MultiStepSurveyFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const { toast } = useToast()

  // Create separate form instances for each step
  const userInfoForm = useForm({
    resolver: zodResolver(userInfoSchema),
    mode: "onChange",
    defaultValues: formData.userInfo,
  })

  const section1Form = useForm({
    resolver: zodResolver(section1Schema),
    mode: "onChange",
    defaultValues: formData.section1,
  })

  const section2Form = useForm({
    resolver: zodResolver(section2Schema),
    mode: "onChange",
    defaultValues: formData.section2,
  })

  const section3Form = useForm({
    resolver: zodResolver(section3Schema),
    mode: "onChange",
    defaultValues: formData.section3,
  })

  // Get the current form based on step
  const getCurrentForm = () => {
    switch (step) {
      case 1:
        return userInfoForm
      case 2:
        return section1Form
      case 3:
        return section2Form
      case 4:
        return section3Form
      default:
        return userInfoForm
    }
  }

  // Reset form when modal opens/closes
  const resetForm = () => {
    setStep(1)
    setFormData({})
    setIsCompleted(false)
    userInfoForm.reset()
    section1Form.reset()
    section2Form.reset()
    section3Form.reset()
  }

  // Handle modal close
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      resetForm()
    }
    onOpenChange(open)
  }

  // Handle next step
  const handleNext = (data: any) => {
    // Save data for current step
    if (step === 1) {
      setFormData((prev) => ({ ...prev, userInfo: data }))
    } else if (step === 2) {
      setFormData((prev) => ({ ...prev, section1: data }))
    } else if (step === 3) {
      setFormData((prev) => ({ ...prev, section2: data }))
    } else if (step === 4) {
      setFormData((prev) => ({ ...prev, section3: data }))
      handleSubmit()
      return
    }

    // Move to next step
    setStep((prev) => prev + 1)
  }

  // Handle back
  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success
      setIsCompleted(true)
      toast({
        title: "Assessment Completed!",
        description: "We'll analyze your responses and send you personalized recommendations.",
        duration: 5000,
      })

      // Auto close after delay
      setTimeout(() => {
        handleOpenChange(false)
      }, 5000)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate progress percentage
  const progress = ((step - 1) / 4) * 100

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] p-0 overflow-hidden bg-gradient-to-b from-background to-background/95 border-primary/10 max-h-[90vh] flex flex-col">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        {/* Colorful top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />

        {/* Fixed header with progress indicators */}
        <div className="p-6 pb-0 border-b sticky top-0 bg-background z-10">
          <div className="flex justify-between mb-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col items-center transition-all",
                  i + 1 < step ? "text-primary" : i + 1 === step ? "text-primary" : "text-muted-foreground",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all",
                    i + 1 < step
                      ? "bg-primary text-white"
                      : i + 1 === step
                        ? "border-2 border-primary text-primary"
                        : "border border-muted-foreground text-muted-foreground",
                  )}
                >
                  {i + 1 < step ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    React.createElement(s.icon, { className: "h-5 w-5" })
                  )}
                </div>
                <span className="text-xs text-center hidden md:block">{s.title}</span>
              </div>
            ))}
          </div>
          <Progress value={isCompleted ? 100 : progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {isCompleted ? "Completed" : `Step ${step} of 4`}
          </p>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {isCompleted ? (
              <CompletionScreen />
            ) : (
              <>
                {step === 1 && <UserInfoStep form={userInfoForm} handleNext={handleNext} />}
                {step === 2 && (
                  <LikertScaleStep
                    form={section1Form}
                    sectionPrefix="section1"
                    title={steps[1].title}
                    description={steps[1].description}
                    questions={questions.section1}
                    handleNext={handleNext}
                    handleBack={handleBack}
                  />
                )}
                {step === 3 && (
                  <LikertScaleStep
                    form={section2Form}
                    sectionPrefix="section2"
                    title={steps[2].title}
                    description={steps[2].description}
                    questions={questions.section2}
                    handleNext={handleNext}
                    handleBack={handleBack}
                  />
                )}
                {step === 4 && (
                  <LikertScaleStep
                    form={section3Form}
                    sectionPrefix="section3"
                    title={steps[3].title}
                    description={steps[3].description}
                    questions={questions.section3}
                    handleNext={handleSubmit}
                    handleBack={handleBack}
                    isSubmitting={isSubmitting}
                    isFinalStep
                  />
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// User Information Step (Step 1)
function UserInfoStep({ form, handleNext }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form

  return (
    <motion.div
      key="step-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-primary mb-2 flex items-center">
            <User className="h-6 w-6 mr-2" />
            User Information
          </h2>
          <p className="text-muted-foreground mb-4">
            Tell us about yourself so we can personalize your assessment results and provide tailored recommendations.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-100 dark:border-blue-900/50 mb-4">
            <p className="text-sm text-blue-700 dark:text-blue-300 flex items-start">
              <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              Your assessment results will be sent to your email address. We respect your privacy and will never share
              your information with third parties.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/placeholder.svg?key=1dw02" alt="User Information" className="h-40 w-40 object-contain" />
        </div>
      </div>

      <form onSubmit={handleSubmit(handleNext)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-base flex items-center">
              <User className="h-4 w-4 mr-2 text-primary" />
              Full Name <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              {...register("fullName")}
              className={cn(
                "h-12 px-4 text-base transition-all border-2 focus-visible:ring-offset-2",
                errors.fullName ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:border-primary",
              )}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 flex items-center mt-1">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.fullName.message as string}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              Email <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
              className={cn(
                "h-12 px-4 text-base transition-all border-2 focus-visible:ring-offset-2",
                errors.email ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:border-primary",
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center mt-1">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.email.message as string}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button type="submit" className="flex items-center" size="lg" disabled={!isValid}>
            <span className="flex items-center">
              Continue
              <ChevronRight className="h-4 w-4 ml-1" />
            </span>
          </Button>
        </div>
      </form>
    </motion.div>
  )
}

// Likert Scale Step (Steps 2-4)
function LikertScaleStep({
  form,
  sectionPrefix,
  title,
  description,
  questions,
  handleNext,
  handleBack,
  isSubmitting = false,
  isFinalStep = false,
}: any) {
  const {
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = form

  return (
    <motion.div
      key={`step-${title}`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-primary mb-2 flex items-center">
            {title === "AI Familiarity & Interest" ? (
              <Brain className="h-6 w-6 mr-2" />
            ) : title === "Career Aspirations & AI Potential" ? (
              <Briefcase className="h-6 w-6 mr-2" />
            ) : (
              <Lightbulb className="h-6 w-6 mr-2" />
            )}
            {title}
          </h2>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-100 dark:border-purple-900/50">
            <p className="text-sm text-purple-700 dark:text-purple-300 flex items-start">
              <Star className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              Rate how well each statement describes you on a scale of 1-5
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={
              title === "AI Familiarity & Interest"
                ? "/placeholder.svg?height=200&width=200&query=brain with digital connections, minimalist illustration"
                : title === "Career Aspirations & AI Potential"
                  ? "/placeholder.svg?height=200&width=200&query=career ladder with AI elements, minimalist illustration"
                  : "/placeholder.svg?height=200&width=200&query=lightbulb with gears, minimalist illustration"
            }
            alt={title}
            className="h-40 w-40 object-contain"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(handleNext)} className="space-y-6">
        <div className="space-y-6">
          {questions.map((question: any, index: number) => {
            const fieldName = `${sectionPrefix}_q${index + 1}`

            return (
              <div
                key={index}
                className="bg-card/50 p-5 rounded-lg border border-border/50 hover:border-primary/30 transition-all"
              >
                <p className="font-medium flex items-start mb-4">
                  <span className="flex-shrink-0 mr-3 mt-1">{question.icon}</span>
                  {question.text}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  {likertOptions.map((option) => (
                    <div
                      key={option.value}
                      className={cn(
                        "flex flex-col items-center border rounded-md p-3 cursor-pointer transition-all hover:bg-primary/5",
                        watch(fieldName) === option.value
                          ? "border-primary bg-primary/10 shadow-sm"
                          : "border-border hover:border-primary/50",
                      )}
                      onClick={() => setValue(fieldName, option.value, { shouldValidate: true })}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all",
                          watch(fieldName) === option.value
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        <span className="text-lg font-semibold">{option.value}</span>
                      </div>
                      <span className="text-xs text-center">{option.label}</span>
                    </div>
                  ))}
                </div>

                {errors[fieldName] && (
                  <p className="text-sm text-red-500 flex items-center mt-2">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Please select an option
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex justify-between pt-4 border-t">
          <Button type="button" variant="outline" onClick={handleBack} className="flex items-center" size="lg">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>

          <Button type="submit" disabled={!isValid || isSubmitting} className="flex items-center" size="lg">
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : isFinalStep ? (
              <span className="flex items-center">
                Submit Assessment
                <Send className="h-4 w-4 ml-2" />
              </span>
            ) : (
              <span className="flex items-center">
                Continue
                <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
}

// Completion Screen
function CompletionScreen() {
  return (
    <motion.div
      key="completed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-6 py-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
            <Sparkles className="h-6 w-6 mr-2" />
            Assessment Complete!
          </h2>
          <p className="text-lg mb-4">
            Thank you for completing your AI skills assessment. We're analyzing your responses to create a personalized
            learning path.
          </p>
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-100 dark:border-green-900/50">
            <p className="text-sm text-green-700 dark:text-green-300 flex items-start">
              <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              Your results will be sent to your email shortly. Make sure to check your inbox!
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-green-500/20 rounded-full animate-pulse" />
            </div>
            <CheckCircle className="h-32 w-32 text-green-500 relative z-10" />
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
        <h3 className="font-bold text-xl mb-4 text-primary">What happens next?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-border shadow-sm">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-medium mb-2">Email Results</h4>
            <p className="text-sm text-muted-foreground">
              You'll receive an email with your assessment results within 24 hours
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-border shadow-sm">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-medium mb-2">Course Recommendations</h4>
            <p className="text-sm text-muted-foreground">
              We'll recommend personalized courses based on your responses and skill level
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-border shadow-sm">
            <div className="bg-pink-100 dark:bg-pink-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <Briefcase className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h4 className="font-medium mb-2">Career Guidance</h4>
            <p className="text-sm text-muted-foreground">
              A learning advisor may contact you to discuss your AI career path
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg" className="group">
          <span className="mr-2 group-hover:text-primary transition-colors">Explore Courses While You Wait</span>
          <ChevronRight className="h-4 w-4 group-hover:text-primary transition-colors" />
        </Button>
      </div>
    </motion.div>
  )
}
