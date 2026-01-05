import './styles.css'
import { useLenis } from '@/shared/hooks/useLenis'
import { BackToHome } from '@/shared/components'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { TheEditSection } from './TheEditSection'
import { ArtisanStoriesSection } from './ArtisanStoriesSection'
import { TestimonialsSection } from './TestimonialsSection'
import { PricingSection } from './PricingSection'
import { CtaSection } from './CtaSection'

export function AtelierNoirPage() {
  useLenis()

  return (
    <div className="ateliernoir min-h-screen">
      <BackToHome accentColor="hover:bg-charcoal-500/20" />
      
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-charcoal-900 focus:text-ivory-50 focus:rounded"
      >
        Skip to main content
      </a>

      <Navbar />
      
      <main id="main-content">
        {/* 1. Hero — Fullscreen Editorial */}
        <HeroSection />
        
        {/* 2. Collection Grid — Editorial */}
        <FeaturesSection />
        
        {/* 3. The Edit — Monthly Curation */}
        <TheEditSection />
        
        {/* 4. Artisan Stories */}
        <ArtisanStoriesSection />
        
        {/* 5. Social Proof */}
        <TestimonialsSection />
        
        {/* 6. Brand Values / Transparency */}
        <PricingSection />
        
        {/* 7. Final CTA — Newsletter + Instagram */}
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  )
}
