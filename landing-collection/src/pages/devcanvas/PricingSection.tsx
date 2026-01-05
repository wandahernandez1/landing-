import { Check, Zap } from 'lucide-react'
import { PRICING_PLANS } from './constants'
import { cn } from '@/shared/utils/cn'
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
      className="relative py-32 md:py-40"
      aria-labelledby="pricing-title"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="absolute inset-0 dev-grid opacity-10" />

      <div className="container-custom relative z-10">
        <header className="pricing-header mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">
            Pricing
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Simple y{' '}
            <span className="text-gradient">transparente</span>
          </h2>
        </header>

        <div className="pricing-grid mx-auto grid max-w-5xl gap-8 md:grid-cols-3" style={{ perspective: '1000px' }}>
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'pricing-card card card-spotlight rounded-2xl p-8 flex flex-col relative',
                plan.popular && 'border-violet-500 ring-1 ring-violet-500 scale-105'
              )}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-1 text-sm font-medium text-white shadow-lg shadow-violet-500/30">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-violet-400">{plan.price}</span>
                {plan.period && <span className="text-slate-500 text-sm">{plan.period}</span>}
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-violet-400" aria-hidden="true" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={cn(
                  'w-full rounded-xl px-6 py-3 text-center font-semibold transition-all',
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
