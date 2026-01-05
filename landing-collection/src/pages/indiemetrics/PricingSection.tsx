import { Check, DollarSign, ArrowRight } from 'lucide-react'
import { cn } from '@/shared/utils/cn'
import { useRef, useState } from 'react'

// MRR-based pricing tiers
const MRR_TIERS = [
  { mrr: '$0 - $1K', price: 0, label: 'Hobby' },
  { mrr: '$1K - $10K', price: 9, label: 'Starter' },
  { mrr: '$10K - $50K', price: 19, label: 'Indie' },
  { mrr: '$50K - $100K', price: 39, label: 'Growth' },
  { mrr: '$100K+', price: 79, label: 'Scale' },
]

const FEATURES_BY_TIER = {
  hobby: ['Basic MRR tracking', '1 payment provider', '7-day history'],
  starter: ['All payment providers', 'Email reports', '30-day history'],
  indie: ['Cohort analysis', 'Churn predictions', 'Unlimited history', 'Email support'],
  growth: ['Team members (3)', 'API access', 'Slack alerts', 'Priority support'],
  scale: ['Unlimited team', 'Custom reports', 'White-label', 'Dedicated CSM'],
}

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTier, setSelectedTier] = useState(2) // Default to Indie

  const currentTier = MRR_TIERS[selectedTier]
  const allFeatures = MRR_TIERS.slice(0, selectedTier + 1).flatMap(
    (_, idx) => FEATURES_BY_TIER[MRR_TIERS[idx].label.toLowerCase() as keyof typeof FEATURES_BY_TIER]
  )

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="absolute inset-0 indie-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pay as you{' '}<span className="text-gradient">grow</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400">
            Pricing that scales with your MRR. Free until $1K MRR.
          </p>
        </header>

        {/* MRR slider */}
        <div className="max-w-3xl mx-auto mb-12">
          <label className="block text-center text-white mb-4">
            What's your current MRR?
          </label>
          <div className="flex justify-between gap-2">
            {MRR_TIERS.map((tier, idx) => (
              <button
                key={tier.mrr}
                onClick={() => setSelectedTier(idx)}
                className={cn(
                  'flex-1 py-3 px-2 rounded-lg text-sm font-medium transition-all',
                  selectedTier === idx
                    ? 'bg-emerald-500 text-neutral-900'
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                )}
              >
                {tier.mrr}
              </button>
            ))}
          </div>
        </div>

        {/* Price card */}
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl bg-gradient-to-b from-emerald-500/20 to-transparent border border-emerald-500/30 p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              {currentTier.label} Plan
            </div>
            
            <div className="mb-2">
              {currentTier.price === 0 ? (
                <span className="text-6xl font-bold text-white">Free</span>
              ) : (
                <>
                  <span className="text-6xl font-bold text-white">${currentTier.price}</span>
                  <span className="text-neutral-400">/mo</span>
                </>
              )}
            </div>
            <p className="text-neutral-500 mb-8">
              For {currentTier.mrr} MRR businesses
            </p>

            <ul className="space-y-3 mb-8 text-left">
              {allFeatures.slice(-6).map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#" 
              className="btn-primary w-full rounded-xl px-6 py-4 font-semibold flex items-center justify-center gap-2"
            >
              {currentTier.price === 0 ? 'Start Free' : 'Start 14-day Trial'}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-sm text-neutral-500">
              No credit card required
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
          {['Cancel anytime', 'No hidden fees', 'GDPR compliant'].map((badge) => (
            <span key={badge} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
