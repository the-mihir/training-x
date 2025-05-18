"use client"

import { motion } from "framer-motion"
import { Award, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShowcaseHero() {
  return (
    <section className="relative py-24 pt-[200px] overflow-hidden bg-gradient-to-br from-[#0D1223] via-[#131b36] to-[#0D1223] text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse will-change-transform"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse will-change-transform"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse will-change-transform"
            style={{ animationDelay: "2s" }}
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
              <pattern id="showcaseDotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.3)" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#showcaseDotPattern)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in"
              style={{ animationDelay: "0.2s" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Student{" "}
              <span className="relative">
                <span className="relative z-10 gradient-text">Showcase</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 rounded-full blur-sm"></span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl animate-fade-in"
              style={{ animationDelay: "0.4s" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore amazing projects created by TrainingX students. Get inspired, learn from others, and share your
              own work.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-[#0D1223] hover:bg-white/90 px-8" asChild>
                <a href="#showcase-grid">Browse Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8" asChild>
                <a href="#submit-project">Submit Your Work</a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in"
              style={{ animationDelay: "0.8s" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-white/10">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl font-semibold mb-1">Community Driven</div>
                <div className="text-gray-400 text-sm">Learn from peers and share knowledge</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-white/10">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl font-semibold mb-1">Portfolio Building</div>
                <div className="text-gray-400 text-sm">Showcase your skills to employers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-white/10">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-xl font-semibold mb-1">Inspiration Hub</div>
                <div className="text-gray-400 text-sm">Get inspired by creative projects</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
