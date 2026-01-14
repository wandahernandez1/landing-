import { Check, X, Shield } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Pricing model: Per domain
const PLANS = [
  {
    id: 'starter',
    name: 'Inicial',
    price: 0,
    period: '/siempre',
    domains: 1,
    description: 'Para proyectos personales',
    features: [
      { text: '1 dominio', included: true },
      { text: '100 páginas/mes', included: true },
      { text: 'WCAG 2.1 Nivel A', included: true },
      { text: 'Solo escaneos manuales', included: true },
      { text: 'Reportes básicos', included: true },
      { text: 'Integración CI/CD', included: false },
      { text: 'Acceso API', included: false },
    ],
    cta: 'Comenzar gratis',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    period: '/dominio/mes',
    domains: 'Ilimitados',
    description: 'Para equipos en crecimiento',
    features: [
      { text: 'Dominios ilimitados', included: true },
      { text: 'Páginas ilimitadas', included: true },
      { text: 'WCAG 2.1 Nivel AA', included: true },
      { text: 'Monitoreo programado', included: true },
      { text: 'Reportes detallados + PDF', included: true },
      { text: 'Integración CI/CD', included: true },
      { text: 'Acceso API', included: true },
    ],
    cta: 'Comenzar prueba de 14 días',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    price: 'Personalizado',
    period: '',
    domains: 'Ilimitados',
    description: 'Para grandes organizaciones',
    features: [
      { text: 'Todo en Pro', included: true },
      { text: 'WCAG 2.1 Nivel AAA', included: true },
      { text: 'Reglas personalizadas', included: true },
      { text: 'Soporte dedicado', included: true },
      { text: 'SSO / SAML', included: true },
      { text: 'Garantía SLA', included: true },
      { text: 'Opción on-premise', included: true },
    ],
    cta: 'Contactar ventas',
    popular: false,
  },
]

// Compliance standards
const STANDARDS = [
  { name: 'WCAG 2.1', levels: ['A', 'AA', 'AAA'] },
  { name: 'Section 508', levels: ['✓'] },
  { name: 'ADA', levels: ['✓'] },
  { name: 'EN 301 549', levels: ['✓'] },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>('pro')

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/2 to-transparent" />
      <div className="absolute inset-0 a11y-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">Precios</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Precios accesibles para{' '}<span className="text-gradient">todos</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Comienza gratis, escala según tus necesidades. Todos los planes incluyen escaneo WCAG completo.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 mb-16">
          {PLANS.map((plan) => (
            <article 
              key={plan.id}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              className={cn(
                'card rounded-2xl p-8 flex flex-col relative transition-all duration-300',
                plan.popular && 'border-blue-500 ring-1 ring-blue-500',
                hoveredPlan === plan.id && 'scale-[1.02] shadow-2xl shadow-blue-500/10'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-sm font-medium text-white">
                  Más popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </span>
                {plan.period && <span className="text-slate-500">{plan.period}</span>}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-blue-400 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-slate-600 shrink-0" />
                    )}
                    <span className={cn(
                      'text-sm',
                      feature.included ? 'text-slate-300' : 'text-slate-600'
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                'w-full rounded-xl px-6 py-3 font-semibold transition-all',
                plan.popular ? 'btn-primary' : 'btn-secondary'
              )}>
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        {/* Compliance Standards */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center text-white mb-8">
            Estándares de cumplimiento cubiertos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STANDARDS.map((standard) => (
              <div 
                key={standard.name}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="font-medium text-white">{standard.name}</span>
                </div>
                <div className="flex justify-center gap-2">
                  {standard.levels.map((level) => (
                    <span 
                      key={level}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-sm text-slate-500">
            Todos los planes incluyen documentación de cumplimiento para auditorías y requisitos legales.
          </p>
        </div>
      </div>
    </section>
  )
}
