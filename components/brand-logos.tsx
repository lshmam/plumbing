"use client"

import { motion } from "framer-motion"

const brands = [
    { name: "Kohler", logo: "/logo/kohler.png" },
    { name: "Moen", logo: "/logo/favpng_a6c2cc22fe9a260bd4240a0e39668dbe.png" },
    { name: "American Standard", logo: "/logo/as-logo.png" },
    { name: "Toto", logo: "/logo/to628t316-toto-logo-toto-logo-photo-inspired-to-style.png" },
    { name: "Grohe", logo: "/logo/pngfind.com-registered-png-6727199.png" },
]

export function BrandLogos() {
    return (
        <section className="border-y border-border/40 bg-muted/30 py-12">
            <div className="container mx-auto px-8 md:px-12">
                <div className="text-center">
                    <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        Trusted by Homeowners & Partnered with Top Brands
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={brand.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
                            >
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className={`w-auto object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${brand.name === "Kohler" ? "h-10 md:h-14" : "h-8 md:h-10 max-w-[140px]"
                                        }`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
