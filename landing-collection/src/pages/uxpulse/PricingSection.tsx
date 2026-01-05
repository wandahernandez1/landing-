import { Check, Zap, HelpCircle, Eye } from 'lucide-react'
import { useState, useRef } from 'react'

// Session-based pricing
const PRICING_TIERS = [
  { sessions: '5K', price: 0, name: 'Free', features: ['Heatmaps', 'Basic session replay', '1 team member', '30-day retention'] },
  { sessions: '25K', price: 29, name: 'Starter', features: ['Everything in Free', 'Unlimited replay', '3 team members', '90-day retention', 'Funnels'] },
  { sessions: '100K', price: 79, name: 'Pro', features: ['Everything in Starter', 'Unlimited team', '1-year retention', 'Advanced analytics', 'Integrations'] },
  { sessions: '500K', price: 199, name: 'Business', features: ['Everything in Pro', 'Custom retention', 'Priority support', 'SSO/SAML', 'Dedicated CSM'] },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTier, setSelectedTier] = useState(2) // Pro by default
  const [isYearly, setIsYearly] = useState(true)

  const tier = PRICING_TIERS[selectedTier]
  const displayPrice = isYearly ? Math.round(tier.price * 10) : tier.price

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="relative py-32 md:py-40"
      aria-labelledby="pricing-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.02] to-transparent" />
      <div className="absolute inset-0 data-grid opacity-10" />

      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-rose-400">
            Simple Pricing
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pay per{' '}
            <span className="text-gradient">session</span>
          </h2>
          <p className="mt-4 text-slate-400">Only pay for what you track. No hidden fees.</p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-rose-500' : 'bg-slate-700'}`}
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${isYearly ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Yearly <span className="text-rose-400 text-xs">(2 months free)</span>
            </span>
          </div>

          {/* Tier selector - horizontal */}
          <div className="grid grid-cols-4 gap-2 p-2 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8">
            {PRICING_TIERS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setSelectedTier(i)}
                className={`p-4 rounded-xl text-center transition-all ${
                  i === selectedTier 
                    ? 'bg-rose-500/20 border border-rose-500/50' 
                    : 'hover:bg-slate-800'
                }`}
              >
                <p className={`text-lg font-bold ${i === selectedTier ? 'text-rose-400' : 'text-white'}`}>
                  {t.sessions}
                </p>
                <p className="text-xs text-slate-500">sessions/mo</p>
              </button>
            ))}
          </div>

          {/* Selected tier details */}
          <div className="rounded-3xl border border-rose-500/20 bg-slate-900/90 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-white">{tier.name}</h3>
                    {selectedTier === 2 && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-xs">
                        <Zap className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500">{tier.sessions} sessions per month</p>
                </div>

                <div className="text-right">
                  {tier.price === 0 ? (
                    <p className="text-5xl font-bold text-rose-400">Free</p>
                  ) : (
                    <>
                      <p className="text-5xl font-bold text-white">
                        ${displayPrice}
                        <span className="text-lg text-slate-500 font-normal">/{isYearly ? 'year' : 'month'}</span>
                      </p>
                      {isYearly && (
                        <p className="text-sm text-slate-500">${tier.price}/mo billed annually</p>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="btn-primary flex-1 flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
                >
                  <Eye className="w-5 h-5" />
                  {tier.price === 0 ? 'Start Free' : 'Start 14-day trial'}
                </a>
                <a
                  href="#"
                  className="btn-secondary flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-medium"
                >
                  <HelpCircle className="w-4 h-4" />
                  Talk to sales
                </a>
              </div>
            </div>

            <div className="px-8 py-4 bg-slate-800/50 border-t border-slate-800">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  No credit card for free tier
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  GDPR compliant
                </span>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="mt-8 text-center">
            <p className="text-slate-500">
              Need more than 500K sessions?{' '}
              <a href="#" className="text-rose-400 hover:underline">Contact us for enterprise pricing</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
