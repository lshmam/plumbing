"use client"

import { motion } from "framer-motion"
import { Clock, Sparkles, Search, Wrench } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function ServicesGrid() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="container mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Our Services
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Expert Solutions for Every Need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From emergency repairs to luxury renovations, we deliver excellence in every drop.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg flex flex-col xl:flex-row"
          >
            <div className="relative h-80 xl:h-auto xl:w-1/2 shrink-0 overflow-hidden">
              <img
                src="/images/plumbing-1.jpg"
                alt="Emergency plumbing situation"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="font-serif text-2xl font-bold text-card-foreground">Emergency Repair</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Fast response 24/7. Our expert technicians arrive within 60 minutes for urgent plumbing emergencies.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
                </span>
                Available Now
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg flex flex-col xl:flex-row md:col-span-2 lg:col-span-1"
          >
            <div className="relative h-80 xl:h-auto xl:w-1/2 shrink-0 overflow-hidden">
              <img
                src="/images/plumbing-6.jpg"
                alt="Luxury bathroom renovation"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="font-serif text-2xl font-bold text-card-foreground">Bath Renovations</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Transform your bathroom into a luxury spa retreat with premium fixtures and expert craftsmanship.
              </p>
              <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent/90">
                View Gallery
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg flex flex-col xl:flex-row"
          >
            <div className="relative h-80 xl:h-auto xl:w-1/2 shrink-0 overflow-hidden">
              <img
                src="/images/plumbing-5.jpg"
                alt="Leak detection and pipe repair"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="font-serif text-2xl font-bold text-card-foreground">Leak Detection</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Advanced thermal imaging and acoustic detection technology to find hidden leaks without damage.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg flex flex-col xl:flex-row"
          >
            <div className="relative h-80 xl:h-auto xl:w-1/2 shrink-0 overflow-hidden">
              <img
                src="/images/plumbing-3.jpg"
                alt="Professional pipe installation"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="font-serif text-2xl font-bold text-card-foreground">Pipe Installation</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Premium copper and PEX piping installed by certified professionals with lifetime warranty.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground/80">
                <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Lifetime Warranty
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
