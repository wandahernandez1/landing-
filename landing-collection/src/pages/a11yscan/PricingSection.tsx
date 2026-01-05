import { Check, X, Shield } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Pricing model: Per domain
const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: '/forever',
    domains: 1,
    description: 'For personal projects',
    features: [
      { text: '1 domain', included: true },
      { text: '100 pages/month', included: true },
      { text: 'WCAG 2.1 Level A', included: true },
      { text: 'Manual scans only', included: true },
      { text: 'Basic reports', included: true },
      { text: 'CI/CD integration', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Get started free',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    period: '/domain/mo',
    domains: 'Unlimited',
    description: 'For growing teams',
    features: [
      { text: 'Unlimited domains', included: true },
      { text: 'Unlimited pages', included: true },
      { text: 'WCAG 2.1 Level AA', included: true },
      { text: 'Scheduled monitoring', included: true },
      { text: 'Detailed reports + PDF', included: true },
      { text: 'CI/CD integration', included: true },
      { text: 'API access', included: true },
    ],
    cta: 'Start 14-day trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    domains: 'Unlimited',
    description: 'For large organizations',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'WCAG 2.1 Level AAA', included: true },
      { text: 'Custom rules', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'SSO / SAML', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'On-premise option', included: true },
    ],
    cta: 'Contact sales',
    popular: false,
  },
]

// Compliance standards
const STANDARDS = [
  { name: 'WCAG 2.1', levels: ['A', 'AA', 'AAA'] },
  { name: 'Section 508', levels: ['✓'] },
  { name: 'ADA', levels: ['✓'] },
  { name: 'EN 301 549', levels: ['✓'] },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>('pro')

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="absolute inset-0 a11y-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Accessible pricing for{' '}<span className="text-gradient">everyone</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Start free, scale with your needs. All plans include full WCAG scanning.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 mb-16">
          {PLANS.map((plan) => (
            <article 
              key={plan.id}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              className={cn(
                'card rounded-2xl p-8 flex flex-col relative transition-all duration-300',
                plan.popular && 'border-blue-500 ring-1 ring-blue-500',
                hoveredPlan === plan.id && 'scale-[1.02] shadow-2xl shadow-blue-500/10'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-medium text-white">
                  Most popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </span>
                {plan.period && <span className="text-slate-500">{plan.period}</span>}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    )}
                    <span className={cn(
                      'text-sm',
                      feature.included ? 'text-slate-300' : 'text-slate-600'
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                'w-full rounded-xl px-6 py-3 font-semibold transition-all',
                plan.popular ? 'btn-primary' : 'btn-secondary'
              )}>
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        {/* Compliance Standards */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center text-white mb-8">
            Compliance standards covered
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STANDARDS.map((standard) => (
              <div 
                key={standard.name}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="font-medium text-white">{standard.name}</span>
                </div>
                <div className="flex justify-center gap-2">
                  {standard.levels.map((level) => (
                    <span 
                      key={level}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-sm text-slate-500">
            All plans include compliance documentation for audits and legal requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
