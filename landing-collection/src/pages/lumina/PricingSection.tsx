import { PRICING_PLANS } from './constants'
import { Check, Sparkles } from 'lucide-react'
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
      className="relative py-32 bg-white" 
      aria-labelledby="pricing-title"
    >
      <div className="container-custom">
        <header className="pricing-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-600">
            Precios
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
            Invierte en tu
            <br />
            <span className="text-gradient">futuro</span>
          </h2>
        </header>

        <div className="pricing-grid grid gap-8 md:grid-cols-3 max-w-5xl mx-auto" style={{ perspective: '1000px' }}>
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'pricing-card card card-spotlight rounded-2xl p-8 relative',
                plan.popular && 'border-2 border-amber-500 shadow-xl shadow-amber-500/10 scale-105'
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-1 text-sm font-medium text-white shadow-lg shadow-amber-500/30">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Más Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-indigo-950 mb-2">{plan.name}</h3>
              <p className="text-indigo-900/60 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-amber-600">{plan.price}</span>
                {plan.period && <span className="text-indigo-900/60">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-amber-500" aria-hidden="true" />
                    </div>
                    <span className="text-indigo-900/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'w-full rounded-xl py-3 font-semibold transition-all',
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
