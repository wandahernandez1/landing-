import { Check, X, Users, Zap, Building2 } from 'lucide-react'
import { cn } from '@/shared/utils/cn'
import { useRef, useState } from 'react'

// MAU tiers
const MAU_TIERS = [
  { mau: '1,000', price: 0, label: 'Free' },
  { mau: '5,000', price: 49, label: 'Starter' },
  { mau: '25,000', price: 149, label: 'Growth' },
  { mau: '100,000', price: 399, label: 'Scale' },
  { mau: 'Unlimited', price: 'Custom', label: 'Enterprise' },
]

// Features by category
const FEATURE_CATEGORIES = [
  {
    name: 'Componentes de Onboarding',
    features: [
      { name: 'Modales de bienvenida', free: true, starter: true, growth: true },
      { name: 'Tours de producto', free: 1, starter: 5, growth: 'Ilimitado' },
      { name: 'Checklists', free: 1, starter: 5, growth: 'Ilimitado' },
      { name: 'Tooltips', free: true, starter: true, growth: true },
      { name: 'Hotspots', free: false, starter: true, growth: true },
      { name: 'Banners', free: false, starter: true, growth: true },
    ]
  },
  {
    name: 'Segmentación y Personalización',
    features: [
      { name: 'Segmentos de usuario', free: 1, starter: 5, growth: 'Ilimitado' },
      { name: 'Triggers de comportamiento', free: false, starter: true, growth: true },
      { name: 'Pruebas A/B', free: false, starter: false, growth: true },
      { name: 'Propiedades personalizadas', free: false, starter: true, growth: true },
    ]
  },
  {
    name: 'Analíticas',
    features: [
      { name: 'Analítica de flujos', free: 'Básico', starter: 'Estándar', growth: 'Avanzado' },
      { name: 'Seguimiento de objetivos', free: true, starter: true, growth: true },
      { name: 'Reportes de embudo', free: false, starter: true, growth: true },
      { name: 'Exportar datos', free: false, starter: false, growth: true },
    ]
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTier, setSelectedTier] = useState(2) // Growth by default

  const currentTier = MAU_TIERS[selectedTier]
  const tierNames = ['free', 'starter', 'growth'] as const

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      <div className="absolute inset-0 onboard-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">Precios</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Paga por{' '}<span className="text-gradient">usuario activo</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Comienza gratis, escala mientras creces
          </p>
        </header>

        {/* MAU Selector */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              <span className="text-white font-medium">Usuarios Activos Mensuales</span>
            </div>
            <span className="text-2xl font-bold text-indigo-400">{currentTier.mau}</span>
          </div>
          
          {/* Tier buttons */}
          <div className="flex gap-2">
            {MAU_TIERS.map((tier, idx) => (
              <button
                key={tier.label}
                onClick={() => setSelectedTier(idx)}
                className={cn(
                  'flex-1 py-3 rounded-xl text-sm font-medium transition-all',
                  selectedTier === idx
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
                )}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price display */}
        <div className="max-w-md mx-auto mb-16 text-center">
          <div className="card rounded-2xl p-8 border-indigo-500/30">
            <div className="flex items-baseline justify-center gap-1 mb-4">
              {typeof currentTier.price === 'number' ? (
                <>
                  <span className="text-6xl font-bold text-white">${currentTier.price}</span>
                  <span className="text-slate-500">/month</span>
                </>
              ) : (
                <span className="text-4xl font-bold text-white">Contactar Ventas</span>
              )}
            </div>
            <p className="text-slate-500 mb-6">Hasta {currentTier.mau} MAU</p>
            <a 
              href="#" 
              className="btn-primary w-full rounded-xl px-6 py-4 text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              {currentTier.price === 0 ? 'Comenzar Gratis' : 'Iniciar Prueba de 14 Días'}
            </a>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Comparación de Funciones</h3>
          
          {/* Plan headers */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div />
            {[
              { name: 'Free', icon: Users, price: '$0' },
              { name: 'Starter', icon: Zap, price: '$49' },
              { name: 'Growth', icon: Building2, price: '$149' },
            ].map((plan) => (
              <div key={plan.name} className="text-center">
                <plan.icon className="w-5 h-5 mx-auto mb-2 text-indigo-400" />
                <p className="font-semibold text-white">{plan.name}</p>
                <p className="text-sm text-slate-500">{plan.price}/mo</p>
              </div>
            ))}
          </div>

          {/* Feature categories */}
          {FEATURE_CATEGORIES.map((category) => (
            <div key={category.name} className="mb-8">
              <h4 className="text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4">
                {category.name}
              </h4>
              <div className="rounded-xl border border-slate-800 overflow-hidden">
                {category.features.map((feature, idx) => (
                  <div 
                    key={feature.name}
                    className={cn(
                      'grid grid-cols-4 gap-4 px-4 py-3',
                      idx !== category.features.length - 1 && 'border-b border-slate-800/50'
                    )}
                  >
                    <span className="text-slate-300">{feature.name}</span>
                    {tierNames.map((tier) => {
                      const value = feature[tier]
                      return (
                        <div key={tier} className="flex justify-center">
                          {value === true && (
                            <Check className="w-5 h-5 text-green-400" />
                          )}
                          {value === false && (
                            <X className="w-5 h-5 text-slate-600" />
                          )}
                          {typeof value === 'string' && (
                            <span className="text-sm text-slate-400">{value}</span>
                          )}
                          {typeof value === 'number' && (
                            <span className="text-sm text-slate-400">{value}</span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
