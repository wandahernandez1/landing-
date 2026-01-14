import { useRef, useCallback, useEffect } from 'react'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'
import { FEATURES } from './constants'

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '.feature-card')

  const handleMouseMove = useCallback((e: MouseEvent, card: HTMLElement) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  // Mouse tracking (separate from GSAP)
  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.feature-card')
    
    cards?.forEach((card) => {
      const cardEl = card as HTMLElement
      const handler = (e: MouseEvent) => handleMouseMove(e, cardEl)
      cardEl.addEventListener('mousemove', handler)
    })

    return () => {
      cards?.forEach((card) => {
        const cardEl = card as HTMLElement
        const handler = (e: MouseEvent) => handleMouseMove(e, cardEl)
        cardEl.removeEventListener('mousemove', handler)
      })
    }
  }, [handleMouseMove])

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40 bg-sand-50">
      <div className="container-custom">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-600">
            Características
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl">
            Todo para tu{' '}
            <span className="text-gradient">aventura</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article key={idx} className="feature-card card card-spotlight rounded-2xl p-8">
              <div className="feature-icon icon-box mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-sand-900">
                {feature.title}
              </h3>
              <p className="text-sand-800/70 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
