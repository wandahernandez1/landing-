import { Check } from 'lucide-react'
import { PRICING_PLANS } from './constants'
import { cn } from '@/shared/utils/cn'

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 md:py-40 bg-sand-50">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-600">
            Planes
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl">
            Elige tu{' '}
            <span className="text-gradient">aventura</span>
          </h2>
        </header>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan, idx) => (
            <article
              key={idx}
              className={cn(
                'card rounded-2xl p-8 flex flex-col',
                plan.popular && 'ring-2 ring-teal-500 relative'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-500 to-orange-500 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-sand-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-sand-800/60">{plan.description}</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-sand-900">{plan.price}</span>
                <span className="text-sand-800/60">{plan.period}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-sand-800">{feature}</span>
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
