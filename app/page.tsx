import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { BrandLogos } from "@/components/brand-logos"
import { TrustSection } from "@/components/trust-section"
import { ReviewsSection } from "@/components/reviews-section"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { ServiceAreas } from "@/components/service-areas"
import { EmergencyCTA } from "@/components/emergency-cta"
import { QuoteForm } from "@/components/quote-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <BrandLogos />
        {/* <TrustSection /> */}
        <ReviewsSection />
        {/* <BeforeAfterSlider /> */}
        <ServiceAreas />
        <EmergencyCTA />
      </main>
      <Footer />
      <QuoteForm />
    </>
  )
}
