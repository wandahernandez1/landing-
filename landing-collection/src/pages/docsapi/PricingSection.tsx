import { Check, Github, Cloud, Building2 } from 'lucide-react'
import { cn } from '@/shared/utils/cn'
import { useRef, useState } from 'react'

const PLANS = [
  { 
    id: 'oss', 
    name: 'Open Source', 
    icon: Github,
    price: 'Free',
    description: 'Self-hosted, MIT license',
    features: ['Unlimited pages', 'OpenAPI import', 'API playground', 'Dark mode', 'Community support'],
  },
  { 
    id: 'cloud', 
    name: 'Cloud', 
    icon: Cloud,
    price: '$79',
    period: '/mo',
    description: 'Managed hosting',
    features: ['Everything in OSS', 'Custom domain', 'Analytics', 'Private repos', 'Algolia search', 'Priority support'],
    popular: true,
  },
  { 
    id: 'enterprise', 
    name: 'Enterprise', 
    icon: Building2,
    price: 'Custom',
    description: 'For large teams',
    features: ['Everything in Cloud', 'SSO / SAML', 'Multiple projects', 'White-label', 'SLA 99.99%', 'Dedicated success'],
  },
]

const COMPARISON = [
  { feature: 'Pages', oss: 'Unlimited', cloud: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Custom domain', oss: '—', cloud: '✓', enterprise: '✓' },
  { feature: 'Analytics', oss: 'Basic', cloud: 'Advanced', enterprise: 'Advanced + Export' },
  { feature: 'Search', oss: 'Built-in', cloud: 'Algolia', enterprise: 'Algolia' },
  { feature: 'SSO', oss: '—', cloud: '—', enterprise: '✓' },
  { feature: 'Support', oss: 'Community', cloud: 'Priority', enterprise: 'Dedicated' },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedPlan, setSelectedPlan] = useState('cloud')

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="absolute inset-0 docs-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Start{' '}<span className="text-gradient">free</span>, scale up
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Open source at heart. Cloud when you need it.
          </p>
        </header>

        {/* Plan selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            {PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all',
                  selectedPlan === plan.id
                    ? 'bg-violet-500 text-white'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                <plan.icon className="w-4 h-4" />
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected plan details */}
        {PLANS.filter(p => p.id === selectedPlan).map((plan) => (
          <div key={plan.id} className="max-w-md mx-auto mb-16">
            <div className={cn(
              'rounded-2xl p-8 text-center',
              plan.popular 
                ? 'bg-gradient-to-b from-violet-500/20 to-transparent border border-violet-500/50'
                : 'bg-slate-900/50 border border-slate-800'
            )}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                <plan.icon className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-500">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#" 
                className={cn(
                  'block w-full rounded-xl px-6 py-4 font-semibold transition-all',
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                )}
              >
                {plan.price === 'Free' ? 'Get Started' : plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </a>
            </div>
          </div>
        ))}

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-white text-center mb-6">Compare Plans</h3>
          <div className="rounded-xl border border-slate-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/50">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  <th className="p-4 text-slate-400 font-medium">OSS</th>
                  <th className="p-4 text-violet-400 font-medium">Cloud</th>
                  <th className="p-4 text-slate-400 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, idx) => (
                  <tr key={row.feature} className={cn(idx !== COMPARISON.length - 1 && 'border-b border-slate-800')}>
                    <td className="p-4 text-white">{row.feature}</td>
                    <td className="p-4 text-center text-slate-400">{row.oss}</td>
                    <td className="p-4 text-center text-white bg-violet-500/5">{row.cloud}</td>
                    <td className="p-4 text-center text-slate-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
