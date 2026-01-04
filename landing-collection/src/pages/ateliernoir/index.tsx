import './styles.css'
import { useLenis } from '@/shared/hooks/useLenis'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { TestimonialsSection } from './TestimonialsSection'
import { PricingSection } from './PricingSection'
import { CtaSection } from './CtaSection'

export function AtelierNoirPage() {
  useLenis()

  return (
    <div className="ateliernoir min-h-screen">
      <Navbar />
      <main>
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
