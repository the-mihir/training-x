"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, User, Building2, ArrowRight, CheckCircle, MessageSquare } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const [userType, setUserType] = useState<"individual" | "organization">("individual")

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with perfectly centered content */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#0D1223] via-[#131b36] to-[#0D1223] text-white flex items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Optimized animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse will-change-transform"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse will-change-transform"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          {/* Optimized background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="absolute left-0 top-0 h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.3)" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
        </div>

        {/* Hero content - perfectly centered */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                We'd Love to Hear From You
              </span>
            </h1>

            <p
              className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Have questions about our AI training platform? We're here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 pt-24 -mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Image and contact info */}
              <div className="w-full lg:w-5/12 bg-gradient-to-br from-blue-600 to-green-600 p-8 lg:p-14 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>

                  <div className="space-y-10 mt-14">
                    <motion.div
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">Email Support</h3>
                        <p className="text-white/80 mb-1">Our team can respond in real time.</p>
                        <a href="mailto:hello@trainingx.ai" className="text-white hover:underline font-medium">
                          hello@trainingx.ai
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">Visit Our Office</h3>
                        <p className="text-white/80 mb-1">Visit our location in real life.</p>
                        <p className="text-white font-medium">123 AI Street, San Francisco, CA 94103</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">Call Us Directly</h3>
                        <p className="text-white/80 mb-1">Available during working hours.</p>
                        <a href="tel:+1234567890" className="text-white hover:underline font-medium">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-16">
                    <Image
                      src="/placeholder.svg?key=zp00y"
                      alt="TrainingX Office"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="w-full lg:w-7/12 p-8 lg:p-14">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>

                  {/* User type selection */}
                  <div className="mb-10">
                    <label className="block text-sm font-medium mb-3">I am contacting as:</label>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setUserType("individual")}
                        className={`flex-1 py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all ${
                          userType === "individual"
                            ? "bg-blue-50 border-2 border-blue-500 dark:bg-blue-900/30 dark:border-blue-400"
                            : "bg-slate-100 border-2 border-transparent dark:bg-slate-700"
                        }`}
                      >
                        <User
                          className={`h-5 w-5 ${userType === "individual" ? "text-blue-500 dark:text-blue-400" : "text-slate-500 dark:text-slate-400"}`}
                        />
                        <span
                          className={`font-medium ${userType === "individual" ? "text-blue-700 dark:text-blue-300" : "text-slate-700 dark:text-slate-300"}`}
                        >
                          Individual
                        </span>
                        {userType === "individual" && (
                          <CheckCircle className="h-5 w-5 text-blue-500 dark:text-blue-400 ml-2" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setUserType("organization")}
                        className={`flex-1 py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all ${
                          userType === "organization"
                            ? "bg-green-50 border-2 border-green-500 dark:bg-green-900/30 dark:border-green-400"
                            : "bg-slate-100 border-2 border-transparent dark:bg-slate-700"
                        }`}
                      >
                        <Building2
                          className={`h-5 w-5 ${userType === "organization" ? "text-green-500 dark:text-green-400" : "text-slate-500 dark:text-slate-400"}`}
                        />
                        <span
                          className={`font-medium ${userType === "organization" ? "text-green-700 dark:text-green-300" : "text-slate-700 dark:text-slate-300"}`}
                        >
                          Organization
                        </span>
                        {userType === "organization" && (
                          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 ml-2" />
                        )}
                      </button>
                    </div>
                  </div>

                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2.5">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="rounded-lg border-slate-300 dark:border-slate-600 h-12"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2.5">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="rounded-lg border-slate-300 dark:border-slate-600 h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2.5">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="rounded-lg border-slate-300 dark:border-slate-600 h-12"
                      />
                    </div>

                    {userType === "organization" && (
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium mb-2.5">
                          Organization Name
                        </label>
                        <Input
                          id="organization"
                          placeholder="Enter your organization name"
                          className="rounded-lg border-slate-300 dark:border-slate-600 h-12"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2.5">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="rounded-lg border-slate-300 dark:border-slate-600 h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2.5">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="rounded-lg border-slate-300 dark:border-slate-600 h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2.5">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="rounded-lg border-slate-300 dark:border-slate-600 resize-none"
                      />
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-slate-500">0/500</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium rounded-xl flex items-center justify-center group"
                      >
                        <span className="mr-2">Submit Message</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
