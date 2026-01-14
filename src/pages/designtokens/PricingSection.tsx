import { Check, Users, Building2, Sparkles, ArrowRight, HelpCircle } from 'lucide-react'
import { useRef, useState } from 'react'

// Pricing tiers with seat-based model
const PRICING_TIERS = [
  { seats: 1, price: 0, label: 'Gratis' },
  { seats: 5, price: 29, label: 'Inicio' },
  { seats: 15, price: 79, label: 'Equipo' },
  { seats: 50, price: 199, label: 'Empresa' },
  { seats: 999, price: null, label: 'Enterprise' }, // Custom
]

// Features by tier
const TIER_FEATURES: Record<string, string[]> = {
  'Gratis': [
    '1 archivo Figma',
    '1 formato de salida',
    'Solo sincronización manual',
    'Soporte comunidad',
  ],
  'Inicio': [
    '5 archivos Figma',
    'Todos los formatos de salida',
    'Auto-sync al publicar',
    'Soporte por email',
    'Historial de versiones (30 días)',
  ],
  'Equipo': [
    'Archivos Figma ilimitados',
    'Todos los formatos de salida',
    'Sincronización en tiempo real',
    'Soporte prioritario',
    'Historial de versiones (1 año)',
    'Colaboración en equipo',
    'Estructura de tokens personalizada',
  ],
  'Empresa': [
    'Todo de Equipo',
    'SSO/SAML',
    'Logs de auditoría',
    'Integraciones personalizadas',
    'Soporte dedicado',
    'Garantía SLA',
  ],
  'Enterprise': [
    'Todo de Empresa',
    'Opción on-premise',
    'Contratos personalizados',
    'Revisión de seguridad',
    'CSM dedicado',
    'Sesiones de capacitación',
  ],
}

// FAQ
const FAQ = [
  {
    q: '¿Qué cuenta como un puesto?',
    a: 'Un puesto es cualquier miembro del equipo que puede editar configuraciones de tokens. Los visualizadores no cuentan.',
  },
  {
    q: '¿Puedo cambiar de plan en cualquier momento?',
    a: 'Sí, actualiza o reduce tu plan cuando quieras. Prorrateamos la diferencia.',
  },
  {
    q: '¿Ofrecen descuentos anuales?',
    a: 'Sí, 20% de descuento al pagar anualmente. Contáctanos para más detalles.',
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedSeats, setSelectedSeats] = useState(2) // Default to Team
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const currentTier = PRICING_TIERS[selectedSeats]
  const features = TIER_FEATURES[currentTier.label]

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40" aria-labelledby="pricing-title">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/[0.02] to-transparent" />
      <div className="absolute inset-0 design-grid opacity-10" />
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-400">Precios Simples</p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Escala con tu{' '}<span className="text-gradient">equipo</span>
          </h2>
          <p className="text-lg text-slate-400">
            Comienza gratis, actualiza cuando tu design system crezca
          </p>
        </header>

        {/* Seat selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Users className="w-5 h-5 text-pink-400" />
            <span className="text-slate-400">Selecciona tamaño del equipo:</span>
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {PRICING_TIERS.map((tier, idx) => (
              <button
                key={tier.label}
                onClick={() => setSelectedSeats(idx)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedSeats === idx
                    ? 'bg-pink-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="block text-sm">{tier.seats === 999 ? '50+' : tier.seats}</span>
                <span className="block text-xs opacity-70">{tier.seats === 1 ? 'puesto' : 'puestos'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className={`rounded-3xl border-2 ${selectedSeats === 2 ? 'border-pink-500' : 'border-slate-800'} bg-slate-900/80 overflow-hidden relative`}>
            {selectedSeats === 2 && (
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <div className="px-6 py-1.5 rounded-b-xl bg-gradient-to-r from-pink-500 to-pink-600 text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Más Popular
                </div>
              </div>
            )}

            <div className="p-8 md:p-12 pt-12">
              {/* Price display */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{currentTier.label}</h3>
                {currentTier.price !== null ? (
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-white">${currentTier.price}</span>
                    <span className="text-xl text-slate-500">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-pink-400">Precio personalizado</div>
                )}
                {currentTier.seats !== 999 && (
                  <p className="text-slate-500 mt-2">
                    {currentTier.seats === 1 
                      ? 'Para diseñadores individuales' 
                      : `Hasta ${currentTier.seats} miembros del equipo`}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                    <Check className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {currentTier.price !== null ? (
                <button className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold group">
                  {currentTier.price === 0 ? 'Comenzar Gratis' : 'Iniciar Prueba Gratis'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button className="w-full flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                  <Building2 className="w-5 h-5" />
                  Contactar Ventas
                </button>
              )}

              {currentTier.price !== 0 && currentTier.price !== null && (
                <p className="text-center text-sm text-slate-500 mt-4">
                  Prueba gratis 14 días • Sin tarjeta de crédito
                </p>
              )}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white text-center mb-8">Preguntas frecuentes</h3>
          <div className="space-y-3">
            {FAQ.map((item, idx) => (
              <div 
                key={item.q}
                className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <HelpCircle className={`w-5 h-5 text-slate-500 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-4 pb-4 text-slate-400 text-sm">
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
