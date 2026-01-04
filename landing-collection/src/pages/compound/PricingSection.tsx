import { PRICING_PLANS } from './constants'
import { Check } from 'lucide-react'
import { cn } from '@/shared/utils'

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-navy-900" aria-labelledby="pricing-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Planes
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Inversión en
            <br />
            <span className="text-gradient">crecimiento</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'card rounded-2xl p-8 relative',
                plan.popular && 'border-gold-500 ring-1 ring-gold-500'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-sm font-semibold text-navy-900">
                  Más Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-navy-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-navy-400">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
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
