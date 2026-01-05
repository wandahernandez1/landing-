import { Check, Globe, TrendingUp, Users, Zap } from 'lucide-react'
import { cn } from '@/shared/utils/cn'
import { useRef, useState } from 'react'

// Site tiers
const SITE_TIERS = [
  { pages: '1,000', price: 29, label: 'Small site' },
  { pages: '10,000', price: 79, label: 'Medium site' },
  { pages: '100,000', price: 199, label: 'Large site' },
  { pages: '500,000', price: 399, label: 'Enterprise' },
  { pages: '1M+', price: 'Custom', label: 'Unlimited' },
]

// Feature comparison
const PLAN_FEATURES = {
  starter: ['Weekly crawls', '5 projects', 'Basic reports', 'Email support'],
  pro: ['Daily crawls', 'Unlimited projects', 'Advanced reports', 'Priority support', 'API access', 'White-label reports'],
  enterprise: ['Hourly crawls', 'Custom integrations', 'Dedicated CSM', 'SLA guarantee', 'SSO/SAML', 'Custom training'],
}

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTier, setSelectedTier] = useState(1)
  const [isAnnual, setIsAnnual] = useState(true)

  const currentPrice = SITE_TIERS[selectedTier].price
  const annualDiscount = 0.2
  const displayPrice = typeof currentPrice === 'number' 
    ? isAnnual ? Math.round(currentPrice * (1 - annualDiscount)) : currentPrice
    : currentPrice

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/[0.02] to-transparent" />
      <div className="absolute inset-0 seo-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-green-400">Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pay for what you{' '}<span className="text-gradient">crawl</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Usage-based pricing that scales with your site
          </p>
        </header>

        {/* Page selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Pages to crawl</span>
            </div>
            <span className="text-2xl font-bold text-green-400">{SITE_TIERS[selectedTier].pages}</span>
          </div>
          
          {/* Slider */}
          <div className="relative">
            <input
              type="range"
              min={0}
              max={SITE_TIERS.length - 1}
              value={selectedTier}
              onChange={(e) => setSelectedTier(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500 
                [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg 
                [&::-webkit-slider-thumb]:shadow-green-500/30"
            />
            <div className="flex justify-between mt-2">
              {SITE_TIERS.map((tier, idx) => (
                <span 
                  key={idx} 
                  className={cn(
                    'text-xs transition-colors',
                    idx === selectedTier ? 'text-green-400' : 'text-slate-600'
                  )}
                >
                  {tier.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={cn('text-sm', !isAnnual ? 'text-white' : 'text-slate-500')}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={cn(
              'relative w-14 h-7 rounded-full transition-colors',
              isAnnual ? 'bg-green-500' : 'bg-slate-700'
            )}
          >
            <span className={cn(
              'absolute top-1 w-5 h-5 rounded-full bg-white transition-transform',
              isAnnual ? 'translate-x-8' : 'translate-x-1'
            )} />
          </button>
          <span className={cn('text-sm', isAnnual ? 'text-white' : 'text-slate-500')}>
            Annual <span className="text-green-400 ml-1">-20%</span>
          </span>
        </div>

        {/* Price display */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="card rounded-2xl p-8 text-center border-green-500/30">
            <div className="mb-6">
              {typeof displayPrice === 'number' ? (
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-6xl font-bold text-white">${displayPrice}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
              ) : (
                <span className="text-4xl font-bold text-white">Custom Pricing</span>
              )}
              {isAnnual && typeof displayPrice === 'number' && (
                <p className="mt-2 text-sm text-slate-500">
                  Billed annually (${displayPrice * 12}/year)
                </p>
              )}
            </div>
            <a 
              href="#" 
              className="btn-primary w-full rounded-xl px-6 py-4 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Start Free Trial
            </a>
            <p className="mt-4 text-sm text-slate-500">14-day free trial • No credit card required</p>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-white text-center mb-8">What's included</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(PLAN_FEATURES).map(([plan, features]) => (
              <div 
                key={plan} 
                className={cn(
                  'card rounded-2xl p-6',
                  plan === 'pro' && 'border-green-500/30 ring-1 ring-green-500/20'
                )}
              >
                <div className="flex items-center gap-2 mb-4">
                  {plan === 'starter' && <Users className="w-5 h-5 text-slate-400" />}
                  {plan === 'pro' && <TrendingUp className="w-5 h-5 text-green-400" />}
                  {plan === 'enterprise' && <Globe className="w-5 h-5 text-purple-400" />}
                  <h4 className="font-semibold text-white capitalize">{plan}</h4>
                </div>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
