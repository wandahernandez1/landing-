import './styles.css'
import { useLenis } from '@/shared/hooks/useLenis'
import { BackToHome } from '@/shared/components'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { TestimonialsSection } from './TestimonialsSection'
import { PricingSection } from './PricingSection'
import { CtaSection } from './CtaSection'

export function DeployZeroPage() {
  useLenis()

  return (
    <div className="deployzero min-h-screen">
      <BackToHome accentColor="hover:bg-cyan-500/20" />
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
