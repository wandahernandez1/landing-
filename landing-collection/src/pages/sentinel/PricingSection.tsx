import { PRICING_PLANS } from './constants'
import { Check, Shield } from 'lucide-react'
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
      className="relative py-32 bg-navy-950" 
      aria-labelledby="pricing-title"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="absolute inset-0 security-grid opacity-10" />

      <div className="container-custom relative z-10">
        <header className="pricing-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Planes
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Protección para
            <br />
            <span className="text-gradient">cada organización</span>
          </h2>
        </header>

        <div className="pricing-grid grid gap-8 md:grid-cols-3 pt-6" style={{ perspective: '1000px' }}>
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'pricing-card card card-spotlight rounded-2xl p-8 relative !overflow-visible',
                plan.popular && 'border-cyan-500 ring-1 ring-cyan-500 scale-105'
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-1 text-sm font-medium text-white shadow-lg shadow-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    Recomendado
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-navy-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                {plan.period && <span className="text-navy-400 text-sm">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-cyan-400" aria-hidden="true" />
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
