import { Check, Building2, Sparkles, HelpCircle } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Page view tiers
const PAGE_VIEW_TIERS = [
  { value: 10000, label: '10K', price: 0, tier: 'Free' },
  { value: 50000, label: '50K', price: 29, tier: 'Starter' },
  { value: 200000, label: '200K', price: 79, tier: 'Pro' },
  { value: 1000000, label: '1M', price: 199, tier: 'Business' },
  { value: 5000000, label: '5M', price: 499, tier: 'Enterprise' },
]

// Features by tier
const TIER_FEATURES: Record<string, string[]> = {
  Free: ['Core Web Vitals', '7-day retention', '1 site', 'Email alerts'],
  Starter: ['Everything in Free', '30-day retention', '3 sites', 'Slack integration', 'Custom dashboards'],
  Pro: ['Everything in Starter', '90-day retention', '10 sites', 'API access', 'Performance budgets'],
  Business: ['Everything in Pro', '1-year retention', '25 sites', 'SSO', 'Dedicated support'],
  Enterprise: ['Everything in Business', 'Unlimited retention', 'Unlimited sites', 'SLA', 'On-prem option'],
}

// FAQ items
const FAQ = [
  { 
    q: 'What counts as a page view?', 
    a: 'Each time a user loads a page with our script, it counts as one page view. We only charge for pages that successfully collect data.' 
  },
  { 
    q: 'Can I change my plan?', 
    a: 'Yes! You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.' 
  },
  { 
    q: 'Is there a free trial?', 
    a: 'Our free tier is always free with 10K page views. For paid plans, we offer a 14-day free trial with full features.' 
  },
  { 
    q: 'Do you offer discounts?', 
    a: 'Yes! Annual billing saves 20%. We also offer discounts for startups, non-profits, and open source projects.' 
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTier, setSelectedTier] = useState(2) // Pro by default
  const [billingAnnual, setBillingAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const currentPlan = PAGE_VIEW_TIERS[selectedTier]
  const price = billingAnnual ? Math.floor(currentPlan.price * 0.8) : currentPlan.price
  const features = TIER_FEATURES[currentPlan.tier]

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
      <div className="absolute inset-0 perf-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Simple,{' '}<span className="text-gradient">usage-based</span>{' '}pricing
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Pay only for what you use. Start free, scale as you grow.
          </p>
        </header>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={cn('text-sm', !billingAnnual ? 'text-white' : 'text-slate-500')}>Monthly</span>
          <button
            onClick={() => setBillingAnnual(!billingAnnual)}
            className={cn(
              'relative w-14 h-7 rounded-full transition-colors',
              billingAnnual ? 'bg-purple-500' : 'bg-slate-700'
            )}
          >
            <span className={cn(
              'absolute top-1 w-5 h-5 rounded-full bg-white transition-transform',
              billingAnnual ? 'translate-x-8' : 'translate-x-1'
            )} />
          </button>
          <span className={cn('text-sm', billingAnnual ? 'text-white' : 'text-slate-500')}>
            Annual <span className="text-green-400">(Save 20%)</span>
          </span>
        </div>

        {/* Main pricing card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Tier selector */}
            <div className="p-6 border-b border-slate-800 bg-slate-900">
              <label className="block text-sm text-slate-400 mb-4">Select your page view volume</label>
              <div className="flex gap-2">
                {PAGE_VIEW_TIERS.map((tier, idx) => (
                  <button
                    key={tier.value}
                    onClick={() => setSelectedTier(idx)}
                    className={cn(
                      'flex-1 py-3 rounded-xl text-center transition-all',
                      selectedTier === idx
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'
                    )}
                  >
                    <span className="block font-mono font-bold">{tier.label}</span>
                    <span className="text-xs opacity-70">/month</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price and features */}
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-white">${price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="mt-2 text-slate-400">
                    {currentPlan.tier} plan • {currentPlan.label} page views
                  </p>
                  {price === 0 && (
                    <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                      <Sparkles className="w-3 h-3" /> Free forever
                    </span>
                  )}
                </div>
                <button className="btn-primary px-8 py-4 text-lg">
                  {price === 0 ? 'Get started free' : 'Start 14-day trial'}
                </button>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise CTA */}
            <div className="px-8 py-6 bg-purple-500/5 border-t border-purple-500/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Need more?</p>
                    <p className="text-sm text-slate-500">Custom plans for high-volume sites</p>
                  </div>
                </div>
                <a href="#" className="btn-secondary px-6 py-3">Contact sales</a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Frequently asked questions</h3>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <HelpCircle className={cn(
                    'w-5 h-5 text-purple-400 transition-transform',
                    openFaq === idx && 'rotate-180'
                  )} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-slate-400">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
