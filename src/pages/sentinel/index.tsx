import { useLenis } from '@/shared/hooks'
import { BackToHome } from '@/shared/components'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { TestimonialsSection } from './TestimonialsSection'
import { PricingSection } from './PricingSection'
import { CtaSection } from './CtaSection'
import './styles.css'

export function SentinelPage() {
  useLenis()

  return (
    <div className="sentinel min-h-screen">
      <BackToHome accentColor="hover:bg-cyan-500/20" />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
