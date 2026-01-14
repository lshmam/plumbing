"use client"

import { motion } from "framer-motion"
import { Droplets, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const services = [
  "Emergency Repair",
  "Bath Renovations",
  "Leak Detection",
  "Pipe Installation",
  "Water Heaters",
  "Drain Cleaning",
]

const areas = ["Downtown", "Westside", "Northridge", "Eastside", "Midtown", "Southpark"]

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-8 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">AquaLuxe</span>
            </Link>
            <p className="mb-6 leading-relaxed text-background/70">
              Premium plumbing services for discerning homeowners. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-background/70 transition-colors hover:text-background">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold">Service Areas</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-background/70">{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-background/70 transition-colors hover:text-background"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-lg font-semibold">(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aqualuxe.com"
                  className="flex items-center gap-3 text-background/70 transition-colors hover:text-background"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  info@aqualuxe.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                  <span>
                    123 Water Street
                    <br />
                    Metro City, ST 12345
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-background/70">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>24/7 Emergency Service</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} AquaLuxe Plumbing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="transition-colors hover:text-background">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-background">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-background">
              Licensing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
