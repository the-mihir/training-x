"use client"

import { useState } from "react"
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type QuizQuestion = {
  id: string
  type: "multiple-choice" | "single-choice" | "true-false" | "fill-in-blank"
  question: string
  options: {
    id: string
    text: string
    isCorrect: boolean
  }[]
  explanation?: string
  points: number
}

export type Quiz = {
  id: string
  title: string
  description: string
  timeLimit?: number // in minutes
  passingScore: number
  questions: QuizQuestion[]
  allowRetry: boolean
  showExplanation: boolean
  randomizeQuestions: boolean
}

type QuizComponentProps = {
  quiz?: Quiz
  onComplete?: (score: number, passed: boolean, answers: Record<string, string[]>) => void
  onExit?: () => void
}

export function QuizComponent({
  quiz = {
    id: "default-quiz",
    title: "Sample Quiz",
    description: "This is a sample quiz.",
    timeLimit: 5,
    passingScore: 70,
    allowRetry: true,
    showExplanation: true,
    randomizeQuestions: false,
    questions: [
      {
        id: "sample-q1",
        type: "single-choice",
        question: "This is a sample question?",
        options: [
          { id: "a", text: "Sample option A", isCorrect: false },
          { id: "b", text: "Sample option B", isCorrect: true },
        ],
        explanation: "This is a sample explanation.",
        points: 10,
      },
    ],
  },
  onComplete = (score, passed, answers) => console.log("Quiz completed", { score, passed, answers }),
  onExit = () => console.log("Quiz exited"),
}: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(quiz.timeLimit ? quiz.timeLimit * 60 : undefined)

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1
  const isSingleChoice = currentQuestion?.type === "single-choice" || currentQuestion?.type === "true-false"

  // Calculate progress
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100

  // Calculate score
  const calculateScore = () => {
    let score = 0
    let totalPoints = 0

    quiz.questions.forEach((question) => {
      totalPoints += question.points
      const userAnswers = answers[question.id] || []

      if (question.type === "multiple-choice") {
        // For multiple choice, check if all correct options are selected and no incorrect ones
        const correctOptions = question.options.filter((opt) => opt.isCorrect).map((opt) => opt.id)
        const allCorrectSelected = correctOptions.every((opt) => userAnswers.includes(opt))
        const noIncorrectSelected = userAnswers.every((ans) => correctOptions.includes(ans))

        if (allCorrectSelected && noIncorrectSelected) {
          score += question.points
        }
      } else {
        // For single choice, true/false, etc.
        const correctOption = question.options.find((opt) => opt.isCorrect)
        if (correctOption && userAnswers.includes(correctOption.id)) {
          score += question.points
        }
      }
    })

    return {
      score,
      percentage: Math.round((score / totalPoints) * 100),
      passed: (score / totalPoints) * 100 >= quiz.passingScore,
    }
  }

  const handleOptionSelect = (optionId: string) => {
    if (isSingleChoice) {
      setSelectedOptions([optionId])
    } else {
      setSelectedOptions((prev) =>
        prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId],
      )
    }
  }

  const handleNextQuestion = () => {
    // Save answer for current question
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedOptions,
    }))

    if (isLastQuestion) {
      // If last question, show results
      setQuizSubmitted(true)
    } else {
      // Move to next question and reset selected options
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedOptions([])
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      // Restore previous answers if any
      setSelectedOptions(answers[quiz.questions[currentQuestionIndex - 1].id] || [])
    }
  }

  const handleSubmitQuiz = () => {
    const result = calculateScore()
    setShowResults(true)
    onComplete(result.percentage, result.passed, answers)
  }

  const handleRetryQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setSelectedOptions([])
    setQuizSubmitted(false)
    setShowResults(false)
  }

  // Format time remaining
  const formatTime = (seconds?: number) => {
    if (!seconds) return ""
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Render results screen
  if (showResults) {
    const result = calculateScore()
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className={cn(result.passed ? "bg-green-50 dark:bg-green-950/20" : "bg-red-50 dark:bg-red-950/20")}>
          <CardTitle className="flex items-center gap-2">
            {result.passed ? (
              <>
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Quiz Completed Successfully!</span>
              </>
            ) : (
              <>
                <XCircle className="h-6 w-6 text-red-500" />
                <span>Quiz Not Passed</span>
              </>
            )}
          </CardTitle>
          <CardDescription>
            {result.passed
              ? "Great job! You've successfully completed the quiz."
              : "Don't worry! You can review the material and try again."}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">{result.percentage}%</span>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-muted stroke-current"
                    strokeWidth="10"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className={cn("stroke-current", result.passed ? "text-green-500" : "text-red-500")}
                    strokeWidth="10"
                    strokeDasharray={`${result.percentage * 2.51} 251.2`}
                    strokeLinecap="round"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Passing score: {quiz.passingScore}% | Your score: {result.percentage}%
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Question Summary</h3>
              <div className="space-y-2">
                {quiz.questions.map((question, index) => {
                  const userAnswers = answers[question.id] || []
                  const correctOptions = question.options.filter((opt) => opt.isCorrect).map((opt) => opt.id)
                  const isCorrect =
                    question.type === "multiple-choice"
                      ? correctOptions.every((opt) => userAnswers.includes(opt)) &&
                        userAnswers.every((ans) => correctOptions.includes(ans))
                      : correctOptions.some((opt) => userAnswers.includes(opt))

                  return (
                    <div
                      key={question.id}
                      className={cn(
                        "p-3 rounded-lg border",
                        isCorrect
                          ? "border-green-200 bg-green-50 dark:bg-green-950/10"
                          : "border-red-200 bg-red-50 dark:bg-red-950/10",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            Question {index + 1}: {question.question}
                          </p>
                          {quiz.showExplanation && question.explanation && !isCorrect && (
                            <p className="mt-2 text-sm text-muted-foreground">{question.explanation}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onExit}>
            Exit Quiz
          </Button>
          {quiz.allowRetry && !result.passed && (
            <Button onClick={handleRetryQuiz}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Retry Quiz
            </Button>
          )}
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{quiz.title}</CardTitle>
          {timeRemaining !== undefined && (
            <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium">Time: {formatTime(timeRemaining)}</div>
          )}
        </div>
        <CardDescription>{quiz.description}</CardDescription>
        <Progress value={progress} className="h-1 mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between text-sm">
            <span>
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </span>
            <span>{currentQuestion.points} points</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">{currentQuestion.question}</h3>

            {isSingleChoice ? (
              <RadioGroup
                value={selectedOptions[0] || ""}
                onValueChange={(value) => setSelectedOptions([value])}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.id}
                    className={cn(
                      "flex items-center space-x-2 rounded-lg border p-4 transition-colors",
                      selectedOptions.includes(option.id) && "border-primary bg-primary/5",
                    )}
                  >
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.id}
                    className={cn(
                      "flex items-center space-x-2 rounded-lg border p-4 transition-colors",
                      selectedOptions.includes(option.id) && "border-primary bg-primary/5",
                    )}
                  >
                    <Checkbox
                      id={option.id}
                      checked={selectedOptions.includes(option.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleOptionSelect(option.id)
                        } else {
                          setSelectedOptions((prev) => prev.filter((id) => id !== option.id))
                        }
                      }}
                    />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>
        <div className="flex gap-2">
          {quizSubmitted ? (
            <Button onClick={handleSubmitQuiz}>
              Submit Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} disabled={selectedOptions.length === 0}>
              {isLastQuestion ? "Finish" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
