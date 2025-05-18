"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-10 overflow-hidden">
      {/* Solid background color */}
      <div className="absolute inset-0 bg-[#0D1223] -z-10"></div>

      {/* SVG Background Pattern */}
      <div className="absolute inset-0 opacity-5 -z-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#circles)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <div className="absolute top-0 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[30%_17.5%_17.5%_17.5%_17.5%] gap-6 mb-16">
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <Image src="/trainingx-logo.webp" alt="TrainingX Logo" fill className="object-contain" priority />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                TrainingX.AI
              </h3>
            </div>
            <p className="text-muted-foreground">
              Take your first step into the world of AI. Whether you're a student, job seeker, or entrepreneur—prompting
              unlocks your future.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialIcon href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialIcon href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialIcon href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialIcon href="#" icon={<Github className="h-5 w-5" />} label="GitHub" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="grid grid-cols-1 gap-2">
              <FooterLink href="/ai-courses" label="Courses" />
              <FooterLink href="/ai-agents" label="AI Agents" />
              <FooterLink href="/xr-simulations" label="XR Simulations" />
              <FooterLink href="/reports" label="Reports" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="grid grid-cols-1 gap-2">
              <FooterLink href="/about" label="About" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/press" label="Press" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="grid grid-cols-1 gap-2">
              <FooterLink href="/documentation" label="Documentation" />
              <FooterLink href="/help-center" label="Help Center" />
              <FooterLink href="/community" label="Community" />
              <FooterLink href="/partners" label="Partners" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="grid grid-cols-1 gap-2">
              <FooterLink href="/privacy-policy" label="Privacy Policy" />
              <FooterLink href="/terms-of-service" label="Terms of Use" />
              <FooterLink href="/cookie-policy" label="Cookie Policy" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">© 2025 TrainingX.ai. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 text-sm text-slate-500">
            Developed By <span className="text-red-500">♥</span> Team TrainingX!
          </div>
        </div>
      </div>
    </footer>
  )
}

// Social icon component with simplified hover animation
function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} aria-label={label} className="group">
      <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
        {/* Icon */}
        <div className="text-white">{icon}</div>
      </div>
    </Link>
  )
}

// Footer link with hover effect
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
      >
        <span className="w-0 h-[1px] bg-gradient-to-r from-primary to-accent group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
        {label}
      </Link>
    </li>
  )
}
