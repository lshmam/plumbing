"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, MapPin } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full liability coverage",
  },
  {
    icon: Clock,
    title: "60-Min Response",
    description: "For emergencies",
  },
  {
    icon: Award,
    title: "5-Year Warranty",
    description: "On all installations",
  },
]

export function TrustSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Trust Built on Excellence
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <badge.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">{badge.title}</h3>
              <p className="mt-2 text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Live Tracking Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
        >
          <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-6 py-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Live Technician Tracking</span>
          </div>
          <div className="relative aspect-[16/9] max-h-[400px] w-full">
            <div className="absolute inset-0">
              <img
                src="/images/plumbing-5.jpg"
                alt="Professional plumber at work"
                className="h-full w-full object-cover opacity-10"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="absolute inset-0 opacity-20">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-border"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Animated Route Line */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 400">
              <motion.path
                d="M 150 300 Q 300 250 400 200 T 650 150"
                fill="none"
                stroke="oklch(0.4 0.15 250)"
                strokeWidth="3"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            {/* Home Location */}
            <div className="absolute left-[15%] top-[70%] flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="mt-2 rounded-full bg-card px-3 py-1 text-xs font-medium shadow-sm">Your Home</span>
            </div>

            {/* Technician Location */}
            <motion.div
              className="absolute flex flex-col items-center"
              initial={{ left: "15%", top: "70%" }}
              whileInView={{ left: "75%", top: "35%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <span className="mt-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-sm">
                Mike T. - 8 min away
              </span>
            </motion.div>

            {/* Status Card */}
            <div className="absolute bottom-6 left-6 rounded-xl bg-card p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                  <img
                    src="/professional-plumber-portrait.png"
                    alt="Technician"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mike Thompson</p>
                  <p className="text-sm text-muted-foreground">Master Plumber • 12 yrs exp</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-muted-foreground">En route to your location</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
