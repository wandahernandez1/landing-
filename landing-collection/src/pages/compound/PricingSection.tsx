import { PRICING_PLANS } from './constants'
import { Check, TrendingUp } from 'lucide-react'
import { cn } from '@/shared/utils'
import { useRef } from 'react'
import { usePricingAnimation } from '@/shared/hooks'

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Use standardized hook
  usePricingAnimation(sectionRef)

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="relative py-32 bg-navy-900" 
      aria-labelledby="pricing-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/[0.02] to-transparent" />

      <div className="container-custom relative z-10">
        <header className="pricing-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Planes
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Inversión en
            <br />
            <span className="text-gradient">crecimiento</span>
          </h2>
        </header>

        <div className="pricing-grid grid gap-8 md:grid-cols-3" style={{ perspective: '1000px' }}>
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'pricing-card card card-spotlight rounded-2xl p-8 relative',
                plan.popular && 'border-gold-500 ring-1 ring-gold-500 scale-105 premium-glow'
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-1 text-sm font-semibold text-navy-900 shadow-lg shadow-gold-500/30">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3" />
                    Más Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-navy-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-gold-400">{plan.price}</span>
                {plan.period && <span className="text-navy-400">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-gold-500" aria-hidden="true" />
                    </div>
                    <span className="text-navy-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'w-full rounded-lg py-3 font-semibold transition-all',
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
