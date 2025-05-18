"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CreditCard, CheckCircle, Lock, Shield, AlertCircle, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

// Mock course data for the order summary
const courseData = {
  id: "1",
  title: "AI Prompting Basics: Master the Art of Effective AI Communication",
  image: "/course-images/ai-prompting-basics.png",
  price: 399.99,
  salePrice: 319.99,
}

export function CheckoutForm() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    nameOnCard: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    agreeToTerms: false,
    loading: false,
    errors: {} as Record<string, string>,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      errors: {
        ...prev.errors,
        [name]: "", // Clear error when field is changed
      },
    }))
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formState.firstName.trim()) errors.firstName = "First name is required"
    if (!formState.lastName.trim()) errors.lastName = "Last name is required"

    if (!formState.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Email is invalid"
    }

    if (formState.paymentMethod === "credit-card") {
      if (!formState.cardNumber.trim()) errors.cardNumber = "Card number is required"
      if (!formState.cardExpiry.trim()) errors.cardExpiry = "Expiration date is required"
      if (!formState.cardCvc.trim()) errors.cardCvc = "CVC is required"
      if (!formState.nameOnCard.trim()) errors.nameOnCard = "Name on card is required"
    }

    if (!formState.billingAddress.trim()) errors.billingAddress = "Billing address is required"
    if (!formState.city.trim()) errors.city = "City is required"
    if (!formState.state.trim()) errors.state = "State is required"
    if (!formState.zipCode.trim()) errors.zipCode = "ZIP code is required"

    if (!formState.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms and conditions"
    }

    return errors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm()

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }))
      // Scroll to the first error
      const firstErrorField = document.querySelector(`[name="${Object.keys(errors)[0]}"]`)
      firstErrorField?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    setFormState((prev) => ({ ...prev, loading: true }))

    // Simulate API call
    setTimeout(() => {
      // Redirect to success page
      router.push("/checkout/success")
    }, 1500)
  }

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
  }

  // Format card expiry date (MM/YY)
  const formatCardExpiry = (value: string) => {
    return value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1/$2")
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Left Column - Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Back to course button */}
          <div>
            <Link
              href={`/courses/${courseData.id}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to course details
            </Link>
          </div>

          {/* Personal Information */}
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="mb-1 block">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleInputChange}
                  className={formState.errors.firstName ? "border-red-500" : ""}
                />
                {formState.errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{formState.errors.firstName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-1 block">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleInputChange}
                  className={formState.errors.lastName ? "border-red-500" : ""}
                />
                {formState.errors.lastName && <p className="mt-1 text-sm text-red-500">{formState.errors.lastName}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email" className="mb-1 block">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={formState.errors.email ? "border-red-500" : ""}
                />
                {formState.errors.email && <p className="mt-1 text-sm text-red-500">{formState.errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-semibold">Payment Method</h2>
            <RadioGroup
              value={formState.paymentMethod}
              onValueChange={(value) => setFormState((prev) => ({ ...prev, paymentMethod: value }))}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 rounded-lg border p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card" className="flex flex-1 cursor-pointer items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span>Credit / Debit Card</span>
                </Label>
                <div className="flex space-x-1">
                  <Image src="/payment/visa.svg" alt="Visa" width={32} height={20} className="h-5 w-auto" />
                  <Image src="/payment/mastercard.svg" alt="Mastercard" width={32} height={20} className="h-5 w-auto" />
                  <Image src="/payment/amex.svg" alt="American Express" width={32} height={20} className="h-5 w-auto" />
                </div>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex flex-1 cursor-pointer items-center">
                  <Image src="/payment/paypal.svg" alt="PayPal" width={80} height={20} className="h-5 w-auto" />
                  <span className="ml-2">PayPal</span>
                </Label>
              </div>
            </RadioGroup>

            {formState.paymentMethod === "credit-card" && (
              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="cardNumber" className="mb-1 block">
                    Card Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formState.cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value.slice(0, 19))
                        setFormState((prev) => ({
                          ...prev,
                          cardNumber: formatted,
                          errors: { ...prev.errors, cardNumber: "" },
                        }))
                      }}
                      className={`pl-10 ${formState.errors.cardNumber ? "border-red-500" : ""}`}
                      maxLength={19}
                    />
                    <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  </div>
                  {formState.errors.cardNumber && (
                    <p className="mt-1 text-sm text-red-500">{formState.errors.cardNumber}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardExpiry" className="mb-1 block">
                      Expiration Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="cardExpiry"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formState.cardExpiry}
                      onChange={(e) => {
                        const formatted = formatCardExpiry(e.target.value.slice(0, 5))
                        setFormState((prev) => ({
                          ...prev,
                          cardExpiry: formatted,
                          errors: { ...prev.errors, cardExpiry: "" },
                        }))
                      }}
                      className={formState.errors.cardExpiry ? "border-red-500" : ""}
                      maxLength={5}
                    />
                    {formState.errors.cardExpiry && (
                      <p className="mt-1 text-sm text-red-500">{formState.errors.cardExpiry}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="cardCvc" className="mb-1 block">
                      CVC / CVV <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="cardCvc"
                      name="cardCvc"
                      placeholder="123"
                      value={formState.cardCvc}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "").slice(0, 4)
                        setFormState((prev) => ({
                          ...prev,
                          cardCvc: value,
                          errors: { ...prev.errors, cardCvc: "" },
                        }))
                      }}
                      className={formState.errors.cardCvc ? "border-red-500" : ""}
                      maxLength={4}
                    />
                    {formState.errors.cardCvc && (
                      <p className="mt-1 text-sm text-red-500">{formState.errors.cardCvc}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="nameOnCard" className="mb-1 block">
                    Name on Card <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nameOnCard"
                    name="nameOnCard"
                    value={formState.nameOnCard}
                    onChange={handleInputChange}
                    className={formState.errors.nameOnCard ? "border-red-500" : ""}
                  />
                  {formState.errors.nameOnCard && (
                    <p className="mt-1 text-sm text-red-500">{formState.errors.nameOnCard}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Billing Address */}
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-semibold">Billing Address</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="billingAddress" className="mb-1 block">
                  Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="billingAddress"
                  name="billingAddress"
                  value={formState.billingAddress}
                  onChange={handleInputChange}
                  className={formState.errors.billingAddress ? "border-red-500" : ""}
                />
                {formState.errors.billingAddress && (
                  <p className="mt-1 text-sm text-red-500">{formState.errors.billingAddress}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="city" className="mb-1 block">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formState.city}
                    onChange={handleInputChange}
                    className={formState.errors.city ? "border-red-500" : ""}
                  />
                  {formState.errors.city && <p className="mt-1 text-sm text-red-500">{formState.errors.city}</p>}
                </div>
                <div>
                  <Label htmlFor="state" className="mb-1 block">
                    State / Province <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    value={formState.state}
                    onChange={handleInputChange}
                    className={formState.errors.state ? "border-red-500" : ""}
                  />
                  {formState.errors.state && <p className="mt-1 text-sm text-red-500">{formState.errors.state}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="zipCode" className="mb-1 block">
                    ZIP / Postal Code <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formState.zipCode}
                    onChange={handleInputChange}
                    className={formState.errors.zipCode ? "border-red-500" : ""}
                  />
                  {formState.errors.zipCode && <p className="mt-1 text-sm text-red-500">{formState.errors.zipCode}</p>}
                </div>
                <div>
                  <Label htmlFor="country" className="mb-1 block">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="country"
                    name="country"
                    value={formState.country}
                    onChange={(e) => setFormState((prev) => ({ ...prev, country: e.target.value }))}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formState.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToTerms" className="font-medium text-gray-700 dark:text-gray-300">
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
                {formState.errors.agreeToTerms && (
                  <p className="mt-1 text-sm text-red-500">{formState.errors.agreeToTerms}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              className="w-full bg-purple-600 py-6 text-lg font-semibold hover:bg-purple-700"
              disabled={formState.loading}
            >
              {formState.loading ? "Processing..." : "Complete Enrollment"}
            </Button>
          </div>

          {/* Security Notice */}
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            <Lock className="mr-2 h-4 w-4" />
            <span>Your payment information is encrypted and secure</span>
          </div>
        </form>
      </div>

      {/* Right Column - Order Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <Card className="overflow-hidden">
            <div className="bg-purple-600 p-4 text-white">
              <h2 className="text-lg font-semibold">Order Summary</h2>
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start space-x-4">
                <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={courseData.image || "/placeholder.svg"}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium line-clamp-2">{courseData.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Lifetime access</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Original price:</span>
                  <span className="line-through">${courseData.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Discount:</span>
                  <span className="text-green-600">-${(courseData.price - courseData.salePrice).toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 dark:border-gray-700">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">${courseData.salePrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="rounded-md bg-green-50 p-3 dark:bg-green-900/30">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800 dark:text-green-400">
                        30-day money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="mt-6 w-full">
                <AccordionItem value="what-included">
                  <AccordionTrigger className="text-sm font-medium">What's included</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        <span>10 hours of on-demand video</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        <span>20 downloadable resources</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        <span>AI companion support</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        <span>Lifetime access</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 font-medium">Need Help?</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <Shield className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-medium">Secure Checkout</p>
                  <p className="text-gray-600 dark:text-gray-400">Your payment information is processed securely.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <AlertCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-medium">Questions?</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Contact our support team at{" "}
                    <Link href="mailto:support@trainingx.com" className="text-purple-600 hover:underline">
                      support@trainingx.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
