import { useRef } from 'react'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'
import { PRICING_PLANS } from './constants'
import { Check, Crown, Shield, Zap } from 'lucide-react'
import { cn } from '@/shared/utils'

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Use standardized hooks
  useSectionAnimation(headerRef)
  useStaggerReveal(cardsRef, '[data-pricing-card]')
  useStaggerReveal(cardsRef, '[data-pricing-feature]', { stagger: 0.05, fromX: -20 })

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="relative py-32 md:py-40 bg-white overflow-hidden" 
      aria-labelledby="pricing-title"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[100px] opacity-50" />

      <div className="container-custom relative">
        <header ref={headerRef} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 mb-6">
            <Crown className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Planes flexibles</span>
          </div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-600">
            Planes
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Elige tu camino al
            <br />
            <span className="text-gradient">bienestar</span>
          </h2>
        </header>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto" style={{ perspective: '1000px' }}>
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              data-pricing-card
              className={cn(
                'group card rounded-3xl p-8 relative transition-all duration-500',
                plan.popular && 'border-2 border-emerald-500 shadow-2xl shadow-emerald-500/15 lg:scale-105 lg:-translate-y-4'
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-1.5 text-sm font-semibold text-white flex items-center gap-2">
                  <Crown className="h-3.5 w-3.5" />
                  Más Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{plan.name}</h3>
                <p className="text-stone-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {plan.price}
                </span>
                {plan.period && <span className="text-stone-500 ml-1">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li 
                    key={feature} 
                    data-pricing-feature
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover/item:bg-emerald-500 group-hover/item:scale-110 transition-all duration-300">
                      <Check className="h-4 w-4 text-emerald-600 group-hover/item:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <span className="text-stone-600 group-hover/item:text-stone-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'w-full rounded-full py-4 font-semibold transition-all duration-300 relative overflow-hidden z-10',
                  plan.popular 
                    ? 'btn-primary group-hover:shadow-lg group-hover:shadow-emerald-500/30' 
                    : 'btn-secondary'
                )}
              >
                <span className="relative z-10">{plan.cta}</span>
              </button>

              {/* Card index */}
              <div className="absolute bottom-4 right-4 text-6xl font-bold text-emerald-500/5">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-stone-500">
            <Shield className="h-5 w-5 text-emerald-500" />
            <span className="text-sm">Pago seguro</span>
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <Zap className="h-5 w-5 text-emerald-500" />
            <span className="text-sm">Cancela cuando quieras</span>
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <Crown className="h-5 w-5 text-emerald-500" />
            <span className="text-sm">Garantía de satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  )
}
