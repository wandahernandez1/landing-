import { useRef } from 'react'
import { PRICING_PLANS } from './constants'
import { Check, Sparkles } from 'lucide-react'
import { cn } from '@/shared/utils'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Standardized GSAP animations
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '[data-pricing-card]', {
    stagger: 0.15,
  })

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="relative py-32 md:py-40 bg-[#030014] overflow-hidden" 
      aria-labelledby="pricing-title"
    >
      <div className="bg-glow absolute inset-0" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <header data-pricing-header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
            Precios
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Planes para cada
            <br />
            <span className="text-gradient">etapa de crecimiento</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            Sin costos ocultos. Cancela cuando quieras. Comienza gratis hoy.
          </p>
        </header>

        <div data-pricing-cards className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <article
              key={plan.name}
              data-pricing-card
              className={cn(
                'card rounded-3xl p-8 md:p-10 relative group',
                plan.popular && 'pricing-popular lg:scale-105'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-500/30">
                  <Sparkles className="h-4 w-4" />
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-neutral-500 text-lg">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li 
                    key={feature} 
                    className="flex items-start gap-3"
                    style={{ '--delay': `${i * 50}ms` } as React.CSSProperties}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 shrink-0">
                      <Check className="h-4 w-4 text-purple-400" aria-hidden="true" />
                    </div>
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'w-full rounded-2xl py-4 font-semibold transition-all text-base',
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                )}
              >
                <span className="relative z-10">{plan.cta}</span>
              </button>

              {index === 1 && (
                <p className="mt-4 text-center text-sm text-neutral-500">
                  14 días de prueba gratis
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-neutral-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Seguridad SSL</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Sin tarjeta requerida</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Cancela cuando quieras</span>
          </div>
        </div>
      </div>
    </section>
  )
}
