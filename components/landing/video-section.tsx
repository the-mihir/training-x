"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function VideoSection() {
  return (
    <section className="relative z-10 bg-white">
      <div className="w-full max-w-4xl mx-auto translate-z-0">
        <div className="aspect-video bg-black/80 rounded-xl shadow-2xl overflow-hidden border-4 border-white/20 relative -translate-y-[40%]">
          {/* AI-generated video thumbnail */}
          <Image
            src="/ai-training-video-thumbnail.png"
            alt="TrainingX AI Platform"
            width={1280}
            height={720}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-lg mb-2">Your Journey Begins Here</p>
              <Button
                variant="outline"
                className="text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center gap-2"
              >
                <Play className="h-4 w-4" /> Watch Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
