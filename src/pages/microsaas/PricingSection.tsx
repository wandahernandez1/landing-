import { Check, Zap, Gift, Clock, Users, ArrowRight, Sparkles, Shield } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Precio único con todas las funciones
const ALL_FEATURES = [
  { text: 'Acceso completo al código fuente', highlight: true },
  { text: 'Next.js 14 + TypeScript', highlight: false },
  { text: 'Integración de pagos con Stripe', highlight: true },
  { text: 'Autenticación (Social + Magic Link)', highlight: true },
  { text: 'Base de datos con Prisma', highlight: false },
  { text: 'Integración email con Resend', highlight: false },
  { text: '50+ componentes UI', highlight: true },
  { text: 'Optimizado para SEO', highlight: false },
  { text: 'Analytics listo', highlight: false },
  { text: 'Acceso a comunidad Discord', highlight: true },
  { text: 'Actualizaciones de por vida', highlight: true },
  { text: 'Guías de deploy (Vercel, Railway)', highlight: false },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [spotsLeft] = useState(7)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 } // Reset
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40" aria-labelledby="pricing-title">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent" />
      <div className="absolute inset-0 maker-grid opacity-10" />
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-orange-400">Precio Simple</p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Un precio,{' '}<span className="text-gradient">todo incluido</span>
          </h2>
          <p className="text-lg text-slate-400">
            Sin suscripciones. Sin ventas adicionales. Paga una vez, construye proyectos ilimitados.
          </p>
        </header>

        {/* Urgency banner */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-6 px-6 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">{spotsLeft} lugares a este precio</span>
            </div>
            <div className="w-px h-4 bg-orange-500/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Single pricing card */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border-2 border-orange-500 bg-gradient-to-b from-orange-950/30 to-slate-900 overflow-hidden relative">
            {/* Popular badge */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2">
              <div className="px-6 py-1.5 rounded-b-xl bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Oferta de Lanzamiento
              </div>
            </div>

            <div className="p-8 md:p-12 pt-12">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-slate-500 line-through">$199</span>
                  <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-sm font-medium">-50%</span>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-white">$99</span>
                  <span className="text-xl text-slate-500">USD</span>
                </div>
                <p className="text-slate-500 mt-2">Pago único • Acceso de por vida</p>
              </div>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {ALL_FEATURES.map((feature) => (
                  <div 
                    key={feature.text}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      feature.highlight ? 'bg-orange-500/10' : 'bg-slate-800/30'
                    }`}
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      feature.highlight ? 'text-orange-400' : 'text-slate-500'
                    }`} />
                    <span className={feature.highlight ? 'text-white' : 'text-slate-400'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold group">
                <Sparkles className="w-5 h-5" />
                Obtener MicroSaaS Starter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Guarantees */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Reembolso 30 días</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gift className="w-4 h-4 text-orange-400" />
                  <span>Actualizaciones gratis</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Acceso Discord</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            ¿Preguntas? Consulta nuestro{' '}
            <a href="#faq" className="text-orange-400 hover:text-orange-300 underline">FAQ</a>
            {' '}o{' '}
            <a href="mailto:hello@microsaas.dev" className="text-orange-400 hover:text-orange-300 underline">escríbenos</a>
          </p>
        </div>
      </div>
    </section>
  )
}
