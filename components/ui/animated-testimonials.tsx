"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  return (
    <div className="mx-auto max-w-full font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.src}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  isActive(index) ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                }`}
              >
                <Image
                  src={testimonial.src || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full rounded-2xl object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <div key={active} className="transition-opacity duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{testimonials[active].name}</h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">{testimonials[active].designation}</p>
            <div className="mt-8 text-lg text-gray-700 dark:text-neutral-300">
              <svg
                className="mb-4 h-8 w-8 text-purple-500 opacity-30"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="italic">{testimonials[active].quote}</p>
            </div>
          </div>
          <div className="flex gap-4 pt-8">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              isActive(index)
                ? "bg-purple-600 dark:bg-purple-400"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
