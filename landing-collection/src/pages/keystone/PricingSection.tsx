import { useRef } from 'react'
import { Check } from 'lucide-react'
import { PRICING_PLANS } from './constants'
import { cn } from '@/shared/utils/cn'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '.pricing-card')
  useStaggerReveal(cardsRef, '.feature-item', { stagger: 0.05, fromX: -20 })

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="container-custom">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Planes
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Inversión{' '}
            <span className="text-gradient">inteligente</span>
          </h2>
        </header>

        <div ref={cardsRef} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3" style={{ perspective: '1000px' }}>
          {PRICING_PLANS.map((plan, idx) => (
            <article
              key={idx}
              className={cn(
                'pricing-card card card-3d rounded-2xl p-8 flex flex-col',
                plan.popular && 'popular ring-2 ring-gold-500 relative'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-forest-600 to-gold-500 px-3 py-1 text-xs font-medium text-white popular-pulse">
                  Recomendado
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-stone-400">{plan.description}</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className={cn(
                  "text-4xl font-bold text-white",
                  plan.popular && "stat-pulse"
                )}>
                  {plan.price}
                </span>
                <span className="text-stone-500">{plan.period}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item flex items-start gap-3">
                    <Check className="h-5 w-5 text-forest-500 shrink-0 mt-0.5" />
                    <span className="text-stone-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={cn(
                  'mt-8 rounded-xl px-6 py-3 text-center font-medium transition-all',
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                )}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
