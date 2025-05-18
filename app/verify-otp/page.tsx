"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import { ArrowLeft } from "lucide-react"
import StarfieldBackground from "@/components/starfield-background"

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [timeLeft, setTimeLeft] = useState(60)
  const [isResending, setIsResending] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer for OTP expiration
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.substring(0, 1)
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle key down events (for backspace navigation)
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("")
      setOtp(digits)
      inputRefs.current[5]?.focus()
    }
  }

  // Handle resend code
  const handleResend = () => {
    setIsResending(true)

    // Simulate API call
    setTimeout(() => {
      setTimeLeft(60)
      setIsResending(false)
      // Clear OTP fields
      setOtp(Array(6).fill(""))
      // Focus first input
      inputRefs.current[0]?.focus()
    }, 1500)
  }

  // Handle verify
  const handleVerify = () => {
    const otpValue = otp.join("")
    console.log("Verifying OTP:", otpValue)

    // In a real app, you would verify the OTP here
    if (otpValue.length === 6) {
      // Redirect to dashboard or home page after verification
      window.location.href = "/"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Starfield Background */}
      <StarfieldBackground />

      {/* Include navbar */}
      <Navbar />

      <div className="container flex items-center justify-center min-h-[calc(100vh-5rem)] py-12">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-2xl bg-black/40 backdrop-blur-xl text-white">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-white">Verify your email</CardTitle>
              <CardDescription className="text-gray-400">We've sent a verification code to your email</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* OTP Input Fields */}
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-12 h-14 text-center text-xl font-bold rounded-md bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary"
                    maxLength={1}
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              {/* Timer and Resend */}
              <div className="text-center">
                {timeLeft > 0 ? (
                  <p className="text-sm text-gray-400">
                    Code expires in <span className="text-white font-medium">{formatTime(timeLeft)}</span>
                  </p>
                ) : (
                  <p className="text-sm text-gray-400">
                    Didn't receive the code?{" "}
                    <button
                      onClick={handleResend}
                      disabled={isResending}
                      className="text-primary hover:underline disabled:opacity-50"
                    >
                      {isResending ? "Resending..." : "Resend code"}
                    </button>
                  </p>
                )}
              </div>

              <Button
                onClick={handleVerify}
                className="w-full gradient-btn text-white"
                disabled={otp.join("").length !== 6}
              >
                Verify
              </Button>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Link href="/signup" className="text-sm text-gray-400 flex items-center hover:text-primary">
                <ArrowLeft size={16} className="mr-1" />
                Back to sign up
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
