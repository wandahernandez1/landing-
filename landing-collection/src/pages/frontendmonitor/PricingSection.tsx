import { Check, Bug, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Error tiers
const ERROR_TIERS = [
  { errors: '5K', price: 0, tier: 'Free' },
  { errors: '25K', price: 29, tier: 'Starter' },
  { errors: '100K', price: 79, tier: 'Pro' },
  { errors: '500K', price: 199, tier: 'Business' },
  { errors: 'Unlimited', price: null, tier: 'Enterprise' },
]

// Feature comparison
const FEATURES = [
  { name: 'Error tracking', free: true, starter: true, pro: true },
  { name: 'Stack traces', free: true, starter: true, pro: true },
  { name: 'Source maps', free: true, starter: true, pro: true },
  { name: 'Session replay', free: false, starter: '100 sessions', pro: 'Unlimited' },
  { name: 'User feedback', free: false, starter: true, pro: true },
  { name: 'Release tracking', free: false, starter: true, pro: true },
  { name: 'Performance monitoring', free: false, starter: false, pro: true },
  { name: 'Custom dashboards', free: false, starter: false, pro: true },
  { name: 'API access', free: false, starter: false, pro: true },
  { name: 'Data retention', free: '7 days', starter: '30 days', pro: '90 days' },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTier, setSelectedTier] = useState(2) // Pro by default

  const currentTier = ERROR_TIERS[selectedTier]

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.02] to-transparent" />
      <div className="absolute inset-0 error-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-red-400">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pay per{' '}<span className="text-gradient">error</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Simple pricing based on monthly error volume. No hidden fees.
          </p>
        </header>

        {/* Error volume selector */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Bug className="w-6 h-6 text-red-400" />
                <span className="text-white font-medium">Monthly error volume</span>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-white">
                  {currentTier.price !== null ? `$${currentTier.price}` : 'Custom'}
                </span>
                {currentTier.price !== null && <span className="text-slate-500">/mo</span>}
              </div>
            </div>

            <div className="flex gap-2">
              {ERROR_TIERS.map((tier, idx) => (
                <button
                  key={tier.tier}
                  onClick={() => setSelectedTier(idx)}
                  className={cn(
                    'flex-1 py-4 rounded-xl transition-all text-center',
                    selectedTier === idx
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'
                  )}
                >
                  <span className="block font-mono font-bold">{tier.errors}</span>
                  <span className="text-xs opacity-70">errors/mo</span>
                </button>
              ))}
            </div>

            {currentTier.price === 0 && (
              <p className="mt-4 text-center text-sm text-green-400">
                ✓ Free forever • No credit card required
              </p>
            )}
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center text-white mb-8">Feature comparison</h3>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-slate-800 bg-slate-900">
              <div className="text-slate-500 font-medium">Feature</div>
              <div className="text-center text-slate-400">Free</div>
              <div className="text-center text-slate-400">Starter</div>
              <div className="text-center text-red-400 font-medium">Pro</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-800">
              {FEATURES.map((feature) => (
                <div key={feature.name} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-slate-800/50 transition-colors">
                  <div className="text-slate-300">{feature.name}</div>
                  <div className="text-center">
                    {feature.free === true ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : feature.free === false ? (
                      <X className="w-5 h-5 text-slate-600 mx-auto" />
                    ) : (
                      <span className="text-sm text-slate-400">{feature.free}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {feature.starter === true ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : feature.starter === false ? (
                      <X className="w-5 h-5 text-slate-600 mx-auto" />
                    ) : (
                      <span className="text-sm text-slate-400">{feature.starter}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {feature.pro === true ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : feature.pro === false ? (
                      <X className="w-5 h-5 text-slate-600 mx-auto" />
                    ) : (
                      <span className="text-sm text-red-400">{feature.pro}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="grid grid-cols-4 gap-4 px-6 py-6 border-t border-slate-800 bg-slate-900/50">
              <div />
              <div className="text-center">
                <button className="btn-secondary px-4 py-2 text-sm w-full">Start free</button>
              </div>
              <div className="text-center">
                <button className="btn-secondary px-4 py-2 text-sm w-full">Try Starter</button>
              </div>
              <div className="text-center">
                <button className="btn-primary px-4 py-2 text-sm w-full">Try Pro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
