"use client"

import { motion } from "framer-motion"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyCTA() {
    return (
        <section className="bg-primary py-16 text-primary-foreground">
            <div className="container mx-auto px-8 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-between gap-8 md:flex-row"
                >
                    <div className="text-center md:text-left">
                        <h2 className="mb-2 font-serif text-3xl font-bold md:text-4xl text-pretty">
                            Plumbing Emergency? We're On Our Way.
                        </h2>
                        <p className="text-lg text-primary-foreground/80">
                            24/7 Priority Response • Licensed Professionals • Upfront Pricing
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="h-14 gap-2 px-8 text-lg font-bold shadow-lg transition-transform hover:scale-105"
                            asChild
                        >
                            <a href="tel:+15551234567">
                                <Phone className="h-5 w-5" />
                                (555) 123-4567
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2 px-8 text-lg font-bold"
                        >
                            Book Online
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
