import { Check, Flag, Users, Building2, Calculator } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Usage calculator tiers
const USAGE_TIERS = [
  { min: 0, max: 10000, label: '10K', price: 0 },
  { min: 10001, max: 100000, label: '100K', price: 29 },
  { min: 100001, max: 1000000, label: '1M', price: 79 },
  { min: 1000001, max: 10000000, label: '10M', price: 149 },
  { min: 10000001, max: Infinity, label: '∞', price: null },
]

// Feature list by category
const FEATURES = {
  core: [
    'Flags ilimitados',
    'Ambientes ilimitados',
    'Flags booleanos y multivariante',
    'Segmentación de usuarios',
    'Rollouts por porcentaje',
  ],
  advanced: [
    'Pruebas A/B',
    'Lanzamientos programados',
    'Dependencias de flags',
    'Logs de auditoría',
    'Webhooks',
  ],
  enterprise: [
    'SSO / SAML',
    'Soporte dedicado',
    'SLAs personalizados',
    'Nube privada',
    'SOC 2 Type II',
  ],
}

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [evaluations, setEvaluations] = useState(2) // Index in USAGE_TIERS
  const [seats, setSeats] = useState(5)

  const currentTier = USAGE_TIERS[evaluations]
  const basePrice = currentTier.price ?? 'Custom'
  const seatPrice = seats > 3 ? (seats - 3) * 10 : 0
  const totalPrice = typeof basePrice === 'number' ? basePrice + seatPrice : basePrice

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/[0.02] to-transparent" />
      <div className="absolute inset-0 flag-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400">Precios</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Paga por lo que{' '}<span className="text-gradient">usas</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Comienza gratis, escala a medida que creces. Sin tarjeta de crédito.
          </p>
        </header>

        {/* Price Calculator */}
        <div className="mx-auto max-w-4xl mb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-teal-400" />
                  <h3 className="text-xl font-semibold text-white">Calculadora de Precios</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">
                    {typeof totalPrice === 'number' ? `$${totalPrice}` : totalPrice}
                    {typeof totalPrice === 'number' && <span className="text-lg text-slate-500 font-normal">/mo</span>}
                  </div>
                  {typeof totalPrice === 'number' && totalPrice === 0 && (
                    <span className="text-sm text-teal-400">Gratis para siempre</span>
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-8 space-y-8">
              {/* Evaluations slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Flag className="w-4 h-4 text-teal-400" />
                    <span className="text-white font-medium">Evaluaciones mensuales</span>
                  </div>
                  <span className="text-teal-400 font-mono">{currentTier.label}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={USAGE_TIERS.length - 1}
                  value={evaluations}
                  onChange={(e) => setEvaluations(parseInt(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-700
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-teal-400
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  {USAGE_TIERS.map((tier) => (
                    <span key={tier.label}>{tier.label}</span>
                  ))}
                </div>
              </div>

              {/* Team size */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-teal-400" />
                    <span className="text-white font-medium">Miembros del equipo</span>
                  </div>
                  <span className="text-teal-400 font-mono">{seats}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={seats}
                  onChange={(e) => setSeats(parseInt(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-700
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-teal-400
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:shadow-lg"
                />
                <p className="mt-2 text-xs text-slate-500">Primeros 3 puestos gratis, luego $10/puesto/mes</p>
              </div>

              {/* Price breakdown */}
              {typeof totalPrice === 'number' && totalPrice > 0 && (
                <div className="p-4 rounded-xl bg-slate-800/50 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Precio base ({currentTier.label} evaluaciones)</span>
                    <span className="text-white">${basePrice}</span>
                  </div>
                  {seatPrice > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Puestos adicionales ({seats - 3} × $10)</span>
                      <span className="text-white">${seatPrice}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-slate-700">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-teal-400 font-bold">${totalPrice}/mo</span>
                  </div>
                </div>
              )}

              {/* CTA */}
              <button className="btn-primary w-full justify-center text-lg py-4">
                {totalPrice === 0 ? 'Comenzar gratis' : totalPrice === 'Custom' ? 'Contactar ventas' : 'Iniciar prueba gratis'}
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-white mb-12">Todo incluido</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(FEATURES).map(([category, features]) => (
              <div key={category} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="flex items-center gap-2 mb-6">
                  {category === 'core' && <Flag className="w-5 h-5 text-teal-400" />}
                  {category === 'advanced' && <Users className="w-5 h-5 text-teal-400" />}
                  {category === 'enterprise' && <Building2 className="w-5 h-5 text-teal-400" />}
                  <h4 className="text-lg font-semibold text-white capitalize">{category}</h4>
                </div>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={cn(
                        'w-4 h-4 mt-0.5 flex-shrink-0',
                        category === 'enterprise' ? 'text-slate-500' : 'text-teal-400'
                      )} />
                      <span className={cn(
                        'text-sm',
                        category === 'enterprise' ? 'text-slate-500' : 'text-slate-300'
                      )}>
                        {feature}
                        {category === 'enterprise' && <span className="text-xs text-teal-400 ml-2">(Enterprise)</span>}
                      </span>
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
