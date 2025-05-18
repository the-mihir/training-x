"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Career Changer",
    avatar: "/testimonials/sarah-johnson.png",
    content:
      "TrainingX helped me transition from retail to a tech career in just 3 months. The AI prompting skills I learned were exactly what employers were looking for!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    avatar: "/testimonials/michael-chen.png",
    content:
      "As a small business owner, I was skeptical about AI. Now I use it daily to create marketing content and analyze customer data. TrainingX made it accessible.",
    rating: 5,
  },
  {
    name: "Jamal Williams",
    role: "Electrician",
    avatar: "/testimonials/jamal-williams.png",
    content:
      "The trade skills simulation was incredibly realistic. I practiced wiring scenarios before doing them in real life, which boosted my confidence on the job.",
    rating: 4,
  },
  {
    name: "Elena Rodriguez",
    role: "Student",
    avatar: "/testimonials/elena-rodriguez.png",
    content:
      "The AI study buddy has transformed how I learn. I'm understanding complex topics faster and retaining information better. My grades have improved significantly!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Marketing Professional",
    avatar: "/testimonials/david-thompson.png",
    content:
      "The copywriting course taught me how to collaborate with AI to create compelling content. I've doubled my output while maintaining quality.",
    rating: 4,
  },
  {
    name: "Aisha Patel",
    role: "Financial Advisor",
    avatar: "/testimonials/aisha-patel.png",
    content:
      "The financial literacy modules helped me explain complex concepts to my clients more effectively. The visualizations are particularly helpful.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <Image src="/testimonials-bg.png" alt="Background pattern" fill className="object-cover opacity-10" />
      </div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent -z-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent -z-5"></div>

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground">
            Real stories from people who transformed their careers with TrainingX.
          </p>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          onSelect={(index) => setActiveIndex(index)}
          opts={{ loop: true, align: "center" }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Avatar className="w-20 h-20 border-4 border-white shadow-lg mb-4">
                        <AvatarImage
                          src={testimonial.avatar || "https://placehold.co/100x100/e2e8f0/1e293b?text=User"}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="mb-4 text-muted-foreground italic">"{testimonial.content}"</blockquote>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static translate-y-0" />
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "bg-primary w-5" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
