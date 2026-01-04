import { PRICING_PLANS } from './constants'
import { Check } from 'lucide-react'
import { cn } from '@/shared/utils'

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-white" aria-labelledby="pricing-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-600">
            Precios
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
            Invierte en tu
            <br />
            <span className="text-gradient">futuro</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'card rounded-2xl p-8 relative',
                plan.popular && 'border-2 border-amber-500 shadow-xl shadow-amber-500/10'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-sm font-medium text-white">
                  Más Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-indigo-950 mb-2">{plan.name}</h3>
              <p className="text-indigo-900/60 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-indigo-950">{plan.price}</span>
                {plan.period && <span className="text-indigo-900/60">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
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
