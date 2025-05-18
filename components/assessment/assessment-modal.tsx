"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Question = {
  id: number
  question: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is your primary goal for learning AI skills?",
    options: [
      "Career advancement or job search",
      "Starting or growing a business",
      "Academic or educational purposes",
      "Personal interest and skill development",
      "Specific project or problem-solving",
    ],
  },
  {
    id: 2,
    question: "What is your current experience level with AI tools?",
    options: [
      "Complete beginner - never used AI tools",
      "Novice - used basic AI tools occasionally",
      "Intermediate - regularly use AI tools",
      "Advanced - create prompts for specific outcomes",
      "Expert - deep understanding of AI capabilities",
    ],
  },
  {
    id: 3,
    question: "Which area of AI are you most interested in learning?",
    options: [
      "Text and content generation",
      "Image and design creation",
      "Data analysis and insights",
      "Business automation and workflows",
      "Creative projects and innovation",
    ],
  },
  {
    id: 4,
    question: "How much time can you dedicate to learning AI skills weekly?",
    options: [
      "Less than 1 hour per week",
      "1-3 hours per week",
      "4-7 hours per week",
      "8-10 hours per week",
      "More than 10 hours per week",
    ],
  },
  {
    id: 5,
    question: "What is your preferred learning style?",
    options: [
      "Video tutorials and demonstrations",
      "Interactive exercises and practice",
      "Reading comprehensive guides",
      "Project-based learning",
      "Combination of different methods",
    ],
  },
]

type AssessmentModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AssessmentModal({ open, onOpenChange }: AssessmentModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)
  const { toast } = useToast()

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setCurrentQuestion(0)
      setAnswers({})
      setSelectedOption(null)
      setCompleted(false)
    }
  }, [open])

  // Auto-close modal after completion
  useEffect(() => {
    if (completed) {
      const timer = setTimeout(() => {
        onOpenChange(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [completed, onOpenChange])

  const handleNext = () => {
    if (selectedOption) {
      // Save the answer
      setAnswers((prev) => ({
        ...prev,
        [questions[currentQuestion].id]: selectedOption,
      }))

      // Move to next question or complete
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        // Assessment completed
        setCompleted(true)
        toast({
          title: "Assessment Completed!",
          description: "Check your dashboard or email for your personalized results.",
          duration: 5000,
        })
      }
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null)
    }
  }

  const progress = ((currentQuestion + (completed ? 1 : 0)) / questions.length) * 100

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {completed ? "Assessment Complete!" : "AI Skills Assessment"}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            {completed ? "Completed" : `Question ${currentQuestion + 1} of ${questions.length}`}
          </p>
        </div>

        {!completed ? (
          <div className="py-4">
            <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedOption === option ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">Thank you for completing the assessment!</h3>
            <p className="text-muted-foreground mb-4">
              We're analyzing your responses to create a personalized learning path.
            </p>
            <p className="text-sm">Check your dashboard or email shortly for your results and recommended courses.</p>
          </div>
        )}

        {!completed && (
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={handleBack} disabled={currentQuestion === 0}>
              Back
            </Button>
            <Button onClick={handleNext} disabled={!selectedOption}>
              {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
