import type { Metadata } from "next"
import { CheckoutForm } from "./checkout-form"

export const metadata: Metadata = {
  title: "Checkout | TrainingX",
  description: "Complete your enrollment and start learning today.",
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Checkout</h1>
          <CheckoutForm />
        </div>
      </div>
    </div>
  )
}
