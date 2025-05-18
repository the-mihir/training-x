import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShowcaseNavbarWrapper from "../../navbar-wrapper"

export const metadata = {
  title: "Submission Successful | TrainingX",
  description: "Your project has been successfully submitted to the TrainingX showcase.",
}

export default function SubmissionSuccessPage() {
  return (
    <>
      <ShowcaseNavbarWrapper />

      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Submission Successful!</h1>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Your project has been successfully submitted to the TrainingX showcase. Our team will review your submission
            and publish it soon.
          </p>

          <div className="space-y-4">
            <Link href="/showcase">
              <Button className="w-full">View Showcase</Button>
            </Link>

            <Link href="/">
              <Button variant="outline" className="w-full">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
