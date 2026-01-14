import { Check, Users, Building2, Zap, Calculator } from 'lucide-react'
import { cn } from '@/shared/utils/cn'
import { useRef, useState } from 'react'

// MAU pricing tiers
const MAU_TIERS = [
  { mau: 1000, price: 0 },
  { mau: 5000, price: 25 },
  { mau: 10000, price: 49 },
  { mau: 25000, price: 99 },
  { mau: 50000, price: 179 },
  { mau: 100000, price: 299 },
]

// Features by plan
const PLANS = [
  {
    name: 'Gratis',
    description: 'Para proyectos personales',
    price: 0,
    maxMau: '1,000 MAU',
    features: ['Magic links', 'Social OAuth', 'Análisis básico', 'Soporte comunitario'],
    cta: 'Comenzar Gratis',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Para apps en crecimiento',
    price: 49,
    maxMau: '10,000 MAU',
    features: ['Todo en Gratis', 'Passkeys', 'SMS OTP', 'Marca personalizada', 'Soporte prioritario', 'Webhooks'],
    cta: 'Iniciar Prueba',
    popular: true,
  },
  {
    name: 'Empresarial',
    description: 'Para escalar',
    price: 'Personalizado',
    maxMau: 'Ilimitado',
    features: ['Todo en Pro', 'SSO / SAML', 'Garantía SLA', 'Soporte dedicado', 'Contratos personalizados', 'Opción on-premise'],
    cta: 'Contactar Ventas',
    popular: false,
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedMau, setSelectedMau] = useState(2) // 10,000 default

  const currentTier = MAU_TIERS[selectedMau]
  const pricePerMau = currentTier.mau > 0 ? (currentTier.price / currentTier.mau * 1000).toFixed(2) : '0'

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-900/2 to-transparent" />
      <div className="absolute inset-0 auth-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">Precios</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Precios{' '}<span className="text-gradient">transparentes</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Paga solo por usuarios activos. Sin cargos ocultos.
          </p>
        </header>

        {/* Cost calculator */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="card rounded-2xl p-6 border-zinc-700">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-zinc-500" />
              <span className="font-medium text-white">Calculadora de Costos</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400">Usuarios Activos Mensuales</span>
                <span className="text-xl font-bold text-white">{currentTier.mau.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={0}
                max={MAU_TIERS.length - 1}
                value={selectedMau}
                onChange={(e) => setSelectedMau(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between mt-2 text-xs text-zinc-600">
                <span>1K</span>
                <span>100K</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <div>
                <p className="text-sm text-zinc-500">Costo estimado</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">${currentTier.price}</span>
                  <span className="text-zinc-500">/mes</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-zinc-500">Por 1,000 MAU</p>
                <p className="text-lg font-semibold text-zinc-300">${pricePerMau}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article 
              key={plan.name} 
              className={cn(
                'card rounded-2xl p-8 flex flex-col relative',
                plan.popular && 'border-zinc-500 ring-1 ring-zinc-500/50'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-sm font-medium text-black">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                {plan.name === 'Free' && <Users className="w-5 h-5 text-zinc-500" />}
                {plan.name === 'Pro' && <Zap className="w-5 h-5 text-zinc-400" />}
                {plan.name === 'Enterprise' && <Building2 className="w-5 h-5 text-zinc-400" />}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>
              
              <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-2">
                {typeof plan.price === 'number' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zinc-600">/mo</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                )}
              </div>
              <p className="text-sm text-zinc-600 mb-6">{plan.maxMau}</p>
              
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-zinc-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className={cn(
                  'w-full rounded-xl px-6 py-3 text-center font-semibold transition-all',
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                )}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
