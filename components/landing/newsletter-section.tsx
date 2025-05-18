"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image src="/newsletter-bg.png" alt="Newsletter background" fill className="object-cover opacity-10" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 -z-5"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/newsletter-illustration.png"
                alt="Newsletter updates"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter to get the latest updates on new courses, features, and AI advancements.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow bg-white/10 border-white/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                <Button type="submit" className="gradient-btn text-white" disabled={isLoading}>
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from TrainingX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
