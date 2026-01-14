import { Loader2, CheckCircle, User, Mail, ArrowRight, Lock } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/shared/utils/cn'

// Login flow steps
const LOGIN_STEPS = [
  { id: 'email', label: 'Ingresa email', duration: 1500 },
  { id: 'sending', label: 'Enviando magic link...', duration: 2000 },
  { id: 'check', label: 'Revisa tu bandeja', duration: 1500 },
  { id: 'verified', label: '¡Bienvenido de nuevo!', duration: 2000 },
]

// Comparison data
const AUTH_COMPARISON = [
  { feature: 'Tiempo de implementación', traditional: '2-4 semanas', authless: '5 minutos' },
  { feature: 'Resets de contraseña', traditional: '15% de logins', authless: '0' },
  { feature: 'Riesgo de robo de cuenta', traditional: 'Alto', authless: 'Casi nulo' },
  { feature: 'Fricción de usuario', traditional: 'Alta', authless: 'Mínima' },
  { feature: 'Tickets de soporte', traditional: '200+/mes', authless: '< 10/mes' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [email] = useState('user@example.com')

  useEffect(() => {
    if (!isAnimating) return
    
    const timer = setTimeout(() => {
      setCurrentStep((prev) => {
        if (prev >= LOGIN_STEPS.length - 1) {
          setTimeout(() => {
            setCurrentStep(0)
          }, 2000)
          return prev
        }
        return prev + 1
      })
    }, LOGIN_STEPS[currentStep].duration)

    return () => clearTimeout(timer)
  }, [currentStep, isAnimating])

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 auth-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">Experiencia</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ve la{' '}<span className="text-gradient">diferencia</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Observa un flujo de login sin contraseña en acción
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Login flow animation */}
            <div 
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
              onMouseEnter={() => setIsAnimating(true)}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-white">Demo en Vivo</h3>
                <button 
                  onClick={() => { setCurrentStep(0); setIsAnimating(true); }}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Repetir
                </button>
              </div>

              {/* Mock login form */}
              <div className="max-w-sm mx-auto">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                    <Lock className="w-8 h-8 text-zinc-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Iniciar sesión</h4>
                  <p className="text-sm text-zinc-500">Ingresa tu email para continuar</p>
                </div>

                {/* Email input */}
                <div className="mb-6">
                  <div className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl border transition-all',
                    currentStep >= 1 
                      ? 'bg-zinc-800 border-zinc-700' 
                      : 'bg-zinc-900 border-zinc-800'
                  )}>
                    <Mail className="w-5 h-5 text-zinc-500" />
                    <span className={cn(
                      'flex-1 text-sm transition-colors',
                      currentStep >= 1 ? 'text-white' : 'text-zinc-600'
                    )}>
                      {currentStep >= 1 ? email : 'your@email.com'}
                    </span>
                    {currentStep >= 1 && (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                </div>

                {/* Button / Status */}
                <div className="mb-6">
                  {currentStep === 0 && (
                    <button className="w-full py-3 rounded-xl bg-white text-black font-medium flex items-center justify-center gap-2">
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                  {currentStep === 1 && (
                    <div className="w-full py-3 rounded-xl bg-zinc-800 text-zinc-400 font-medium flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className="w-full py-3 rounded-xl bg-blue-500/20 text-blue-400 font-medium flex items-center justify-center gap-2 border border-blue-500/30">
                      <Mail className="w-4 h-4" />
                      Revisa tu bandeja
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div className="w-full py-3 rounded-xl bg-green-500/20 text-green-400 font-medium flex items-center justify-center gap-2 border border-green-500/30">
                      <CheckCircle className="w-4 h-4" />
                      ¡Autenticado!
                    </div>
                  )}
                </div>

                {/* Progress steps */}
                <div className="flex items-center justify-center gap-2">
                  {LOGIN_STEPS.map((step, idx) => (
                    <div 
                      key={step.id}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all',
                        idx <= currentStep ? 'bg-white' : 'bg-zinc-700'
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Comparison table */}
            <div>
              <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-zinc-500" />
                Tradicional vs Sin Contraseña
              </h3>
              <div className="rounded-2xl border border-zinc-800 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800 bg-zinc-900">
                      <th className="text-left px-4 py-3 text-sm font-medium text-zinc-500"></th>
                      <th className="text-center px-4 py-3 text-sm font-medium text-zinc-600">Tradicional</th>
                      <th className="text-center px-4 py-3 text-sm font-medium text-white">Authless</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AUTH_COMPARISON.map((row, idx) => (
                      <tr 
                        key={row.feature}
                        className={cn(
                          idx !== AUTH_COMPARISON.length - 1 && 'border-b border-zinc-800/50'
                        )}
                      >
                        <td className="px-4 py-3 text-sm text-zinc-400">{row.feature}</td>
                        <td className="px-4 py-3 text-center text-sm text-zinc-600">{row.traditional}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="inline-flex px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-sm font-medium">
                            {row.authless}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { value: '0', label: 'Contraseñas' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '<100ms', label: 'Latencia' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
