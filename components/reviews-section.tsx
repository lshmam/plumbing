"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Downtown",
    rating: 5,
    text: "AquaLuxe transformed our outdated bathroom into a spa-like retreat. The attention to detail was incredible, and they finished on time and within budget. Highly recommend!",
    image: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    name: "James Rodriguez",
    location: "Westside",
    rating: 5,
    text: "Had a pipe burst at 2 AM and they were at our door within 45 minutes. Professional, courteous, and solved the problem quickly. True emergency heroes!",
    image: "/professional-man-headshot.png",
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Northridge",
    rating: 5,
    text: "We've used AquaLuxe for three different projects now. Their team is knowledgeable, clean, and respectful of our home. The best plumbers in the city, hands down.",
    image: "/asian-woman-headshot.png",
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "Eastside",
    rating: 5,
    text: "The leak detection service saved us thousands in potential water damage. They found and fixed a hidden leak that two other companies missed. Worth every penny.",
    image: "/older-man-headshot.png",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrentIndex((prev) => (prev + dir + reviews.length) % reviews.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="reviews" className="bg-background py-24">
      <div className="container mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            What Our Customers Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-lg font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">/ 5 from 500+ reviews</span>
          </div>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="mb-6 h-10 w-10 text-primary/20" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p className="text-xl leading-relaxed text-foreground md:text-2xl">"{reviews[currentIndex].text}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{reviews[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{reviews[currentIndex].location}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
