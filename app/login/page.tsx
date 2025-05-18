"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaApple } from "react-icons/fa"
import Navbar from "@/components/navbar"
import { Eye, EyeOff } from "lucide-react"
import StarfieldBackground from "@/components/starfield-background"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    console.log("Form submitted:", formData)
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
              <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
              <CardDescription className="text-gray-400">Sign in to your account to continue</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10"
                    >
                      <FaGoogle className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10"
                    >
                      <FaApple className="mr-2 h-4 w-4" />
                      Apple
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-black/40 px-2 text-gray-400">Or continue with</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="name@example.com"
                    className="bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <Link href="/password-recovery" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      className="bg-white/5 border-white/10 text-white pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="rounded border-white/20 bg-white/5 text-primary focus:ring-primary"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-300">
                    Remember me for 30 days
                  </label>
                </div>

                <Button type="submit" className="w-full gradient-btn text-white">
                  Sign in
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
