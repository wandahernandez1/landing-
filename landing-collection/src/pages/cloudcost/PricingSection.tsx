import { Check, Cloud, DollarSign, Zap, Building2 } from 'lucide-react'
import { cn } from '@/shared/utils/cn'
import { useRef, useState } from 'react'

// Cloud spend tiers
const SPEND_TIERS = [
  { label: '<$10K', spend: 10000, price: 0, savings: 'Up to $2K' },
  { label: '$10K-$50K', spend: 50000, price: 199, savings: 'Up to $12K' },
  { label: '$50K-$100K', spend: 100000, price: 499, savings: 'Up to $28K' },
  { label: '$100K-$500K', spend: 500000, price: 999, savings: 'Up to $145K' },
  { label: '$500K+', spend: 1000000, price: 'Custom', savings: 'Custom' },
]

// ROI examples
const ROI_EXAMPLES = [
  { company: 'Series A Startup', spend: '$45K/mo', savings: '$9,400/mo', roi: '21%' },
  { company: 'Scale-up', spend: '$180K/mo', savings: '$48,000/mo', roi: '27%' },
  { company: 'Enterprise', spend: '$1.2M/mo', savings: '$350,000/mo', roi: '29%' },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTier, setSelectedTier] = useState(2)

  const currentTier = SPEND_TIERS[selectedTier]

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/2 to-transparent" />
      <div className="absolute inset-0 cloud-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">Precios</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Precios que{' '}<span className="text-gradient">escalan</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Basado en tu gasto en la nube, no en métricas ocultas
          </p>
        </header>

        {/* Spend selector */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Gasto Mensual en la Nube</span>
            </div>
            <span className="text-2xl font-bold text-blue-400">{currentTier.label}</span>
          </div>
          
          {/* Tier buttons */}
          <div className="grid grid-cols-5 gap-2">
            {SPEND_TIERS.map((tier, idx) => (
              <button
                key={tier.label}
                onClick={() => setSelectedTier(idx)}
                className={cn(
                  'py-3 rounded-xl text-sm font-medium transition-all',
                  selectedTier === idx
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
                )}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="card rounded-2xl p-8 border-blue-500/30 text-center">
            <div className="mb-6">
              {typeof currentTier.price === 'number' ? (
                currentTier.price === 0 ? (
                  <>
                    <span className="text-5xl font-bold text-white">Gratis</span>
                    <p className="mt-2 text-slate-500">Para despliegues cloud pequeños</p>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-white">${currentTier.price}</span>
                      <span className="text-slate-500">/month</span>
                    </div>
                    <p className="mt-2 text-slate-500">Hasta {currentTier.label} en gasto cloud</p>
                  </>
                )
              ) : (
                <>
                  <span className="text-4xl font-bold text-white">Contactar Ventas</span>
                  <p className="mt-2 text-slate-500">Para despliegues enterprise</p>
                </>
              )}
            </div>

            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 mb-6">
              <p className="text-sm text-slate-400 mb-1">Ahorro Estimado</p>
              <p className="text-2xl font-bold text-green-400">{currentTier.savings}/mo</p>
            </div>

            <a 
              href="#" 
              className="btn-primary w-full rounded-xl px-6 py-4 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              {currentTier.price === 0 ? 'Comenzar Gratis' : 'Iniciar Prueba Gratis'}
            </a>
            <p className="mt-4 text-sm text-slate-500">Prueba gratis de 14 días • No requiere tarjeta de crédito</p>
          </div>
        </div>

        {/* ROI Examples */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Resultados Reales de Clientes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ROI_EXAMPLES.map((example) => (
              <div key={example.company} className="card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-4">{example.company}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Gasto Cloud</span>
                    <span className="text-white">{example.spend}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Ahorros</span>
                    <span className="text-green-400">{example.savings}</span>
                  </div>
                  <div className="pt-3 border-t border-slate-800">
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold text-green-400">{example.roi}</span>
                      <span className="text-sm text-slate-500">ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise features */}
        <div className="mt-16 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Características Enterprise</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {['SSO/SAML', 'Integraciones Personalizadas', 'Garantía de SLA', 'Soporte Dedicado'].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
