"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[80vh] overflow-hidden mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/images/plumbing-8.jpg" alt="Plumber fixing a leaking pipe" className="h-full w-full object-cover" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex min-h-[50vh] md:min-h-[80vh] items-center px-8 py-20 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="mb-4 inline-block rounded-full border border-accent/50 bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
              24/7 Emergency Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl text-balance"
          >
            Call Now. <span className="text-accent">Any Job.</span>
            <br />
            We Will Fix It.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-8"
          >
            <Button size="lg" className="h-16 bg-accent px-8 text-lg font-bold text-white hover:bg-accent/90" asChild>
              <a href="tel:+15551234567" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <span>(555) 123-4567</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex items-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Technicians Available Now</span>
            </div>
            <div className="h-4 w-px bg-white/30" />
            <span className="text-sm">60-Minute Response Time</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
