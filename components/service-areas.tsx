"use client"

import { motion } from "framer-motion"
import { MapPin, CheckCircle2 } from "lucide-react"

const areas = [
    "Downtown Core",
    "North Vancouver",
    "West Vancouver",
    "Burnaby",
    "Richmond",
    "Surrey",
    "Coquitlam",
    "New Westminster",
]

export function ServiceAreas() {
    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-8 md:px-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary w-fit">
                            Service Areas
                        </span>
                        <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                            Proudly Serving British Columbia
                        </h2>
                        <p className="mb-8 text-lg text-muted-foreground">
                            Our fleet is stationed across the Metro Vancouver area, ensuring fast response times no matter where you
                            are.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {areas.map((area, index) => (
                                <motion.div
                                    key={area}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <MapPin className="h-5 w-5 text-accent" />
                                    <span className="font-medium text-foreground">{area}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative min-h-[400px] overflow-hidden rounded-2xl bg-muted"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.3082729938!2d-123.26815335966453!3d49.25771428236255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1652392437299!5m2!1sen!2sus"
                            className="absolute inset-0 h-full w-full border-0 transition-all duration-300"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
