import { Check, Zap, HelpCircle, Rocket } from 'lucide-react'
import { useState, useRef } from 'react'

// Pricing tiers based on deploys
const PRICING_TIERS = [
  { deploys: 100, price: 0, name: 'Hobby' },
  { deploys: 500, price: 0, name: 'Hobby' },
  { deploys: 1000, price: 19, name: 'Pro' },
  { deploys: 2500, price: 49, name: 'Pro' },
  { deploys: 5000, price: 99, name: 'Pro' },
  { deploys: 10000, price: 199, name: 'Team' },
  { deploys: 25000, price: 399, name: 'Team' },
  { deploys: 50000, price: 799, name: 'Enterprise' },
]

const ALL_FEATURES = {
  hobby: ['Proyectos ilimitados', 'PR previews', 'Certificados SSL', 'Analytics básico', 'Soporte comunidad'],
  pro: ['Todo de Hobby', 'Colaboración en equipo', 'Dominios personalizados', 'Analytics avanzado', 'Soporte prioritario', 'Historial de rollbacks'],
  team: ['Todo de Pro', 'SSO / SAML', 'Logs de auditoría', 'SLA 99.9%', 'Soporte dedicado', 'Integraciones personalizadas'],
  enterprise: ['Todo de Team', 'Opción on-premise', 'SLA 99.99%', 'SLA personalizado', 'Soporte 24/7', 'Revisión de seguridad'],
}

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [sliderValue, setSliderValue] = useState(2) // Index in PRICING_TIERS
  const [isYearly, setIsYearly] = useState(true)

  const currentTier = PRICING_TIERS[sliderValue]
  const monthlyPrice = currentTier.price
  const yearlyPrice = Math.round(monthlyPrice * 10) // 2 months free
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice
  const priceLabel = isYearly ? '/year' : '/month'
  
  const getFeatures = () => {
    const tierName = currentTier.name.toLowerCase()
    return ALL_FEATURES[tierName as keyof typeof ALL_FEATURES] || ALL_FEATURES.hobby
  }

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="relative py-32 md:py-40"
      aria-labelledby="pricing-title"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/2 to-transparent" />
      <div className="absolute inset-0 terminal-grid opacity-10" />

      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Calculadora de Precios
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Paga por lo que{' '}
            <span className="text-gradient">despliegas</span>
          </h2>
          <p className="mt-4 text-gray-400">Desliza para estimar tu costo mensual</p>
        </header>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-cyan-500/20 bg-gray-900/90 overflow-hidden">
            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4 p-6 border-b border-gray-800">
              <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Mensual</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-cyan-500' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${isYearly ? 'left-8' : 'left-1'}`} />
              </button>
              <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>
                Anual <span className="text-cyan-400 text-xs">(2 meses gratis)</span>
              </span>
            </div>

            <div className="p-8 md:p-12">
              {/* Slider section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm text-gray-400">Deploys por mes</label>
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                    <span className="text-2xl font-bold text-white">{currentTier.deploys.toLocaleString()}</span>
                  </div>
                </div>
                
                <input
                  type="range"
                  min={0}
                  max={PRICING_TIERS.length - 1}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-cyan-400/30"
                />
                
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>100</span>
                  <span>50,000+</span>
                </div>
              </div>

              {/* Price display */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm mb-4">
                    <Zap className="w-4 h-4" />
                    {currentTier.name}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl md:text-7xl font-bold text-white">
                      ${displayPrice}
                    </span>
                    <span className="text-gray-500">{monthlyPrice > 0 ? priceLabel : ''}</span>
                  </div>
                  {monthlyPrice === 0 && (
                    <p className="text-cyan-400 mt-2">Gratis para siempre</p>
                  )}
                  {monthlyPrice > 0 && isYearly && (
                    <p className="text-gray-500 text-sm mt-2">
                      (${monthlyPrice}/mo billed annually)
                    </p>
                  )}
                </div>

                {/* Features list */}
                <div>
                  <ul className="space-y-3">
                    {getFeatures().map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="btn-primary rounded-xl px-8 py-4 text-center font-semibold"
                >
                  {monthlyPrice === 0 ? 'Comenzar Gratis' : 'Iniciar prueba de 14 días'}
                </a>
                <a
                  href="#"
                  className="btn-secondary rounded-xl px-8 py-4 text-center font-semibold flex items-center justify-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  Hablar con ventas
                </a>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="px-8 py-4 bg-gray-800/50 border-t border-gray-800">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  No requiere tarjeta de crédito
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Cancela cuando quieras
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Devolución en 14 días
                </span>
              </div>
            </div>
          </div>

          {/* Enterprise callout */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              ¿Necesitas más de 50,000 deploys?{' '}
              <a href="#" className="text-cyan-400 hover:underline">Contáctanos para precios enterprise</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
