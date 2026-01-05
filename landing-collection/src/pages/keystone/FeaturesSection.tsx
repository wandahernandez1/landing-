import { useRef } from 'react'
import { FEATURES } from './constants'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '.feature-card')

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="container-custom">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Soluciones
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Inteligencia{' '}
            <span className="text-gradient">inmobiliaria</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article 
              key={idx} 
              className="feature-card card card-spotlight rounded-2xl p-8 relative"
              onMouseMove={handleMouseMove}
            >
              <div className="relative z-10">
                <div className="icon-box mb-6 flex h-14 w-14 items-center justify-center rounded-xl property-glow">
                  <feature.icon className="h-7 w-7 text-forest-500 icon-glow" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
