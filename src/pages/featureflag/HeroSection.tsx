import { ArrowRight, ToggleRight, Zap, Users, Percent, Code } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Feature flags that affect the landing page UI
const DEMO_FLAGS = [
  { 
    id: 'dark_mode', 
    name: 'dark_mode', 
    description: 'Habilitar tema oscuro',
    enabled: true,
    affects: 'theme'
  },
  { 
    id: 'new_hero', 
    name: 'new_hero_layout', 
    description: 'Probar nuevo diseño hero',
    enabled: true,
    affects: 'layout'
  },
  { 
    id: 'confetti', 
    name: 'celebration_mode', 
    description: 'Mostrar confeti al hacer clic en CTA',
    enabled: false,
    affects: 'interaction'
  },
  { 
    id: 'pricing_ab', 
    name: 'pricing_v2', 
    description: 'Test A/B nuevo pricing',
    enabled: false,
    affects: 'pricing'
  },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [flags, setFlags] = useState(DEMO_FLAGS)
  const [showConfetti, setShowConfetti] = useState(false)
  
  // Derived states from flags
  const isDarkMode = flags.find(f => f.id === 'dark_mode')?.enabled ?? true
  const isNewLayout = flags.find(f => f.id === 'new_hero')?.enabled ?? true
  const hasConfetti = flags.find(f => f.id === 'confetti')?.enabled ?? false

  useHeroAnimation(sectionRef)

  // Toggle a flag
  const toggleFlag = (flagId: string) => {
    setFlags(prev => prev.map(f => 
      f.id === flagId ? { ...f, enabled: !f.enabled } : f
    ))
  }

  // Handle CTA click with confetti
  const handleCtaClick = () => {
    if (hasConfetti) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 2000)
    }
  }

  // Auto-toggle one flag for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setFlags(prev => prev.map(f => 
        f.id === 'pricing_ab' ? { ...f, enabled: !f.enabled } : f
      ))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-all duration-500
        ${isDarkMode ? 'bg-slate-950' : 'bg-slate-100'}`}
    >
      <div className={`bg-glow absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-30'}`} />
      <div className="absolute inset-0 flag-grid opacity-30" />
      
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)],
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className={`grid gap-12 lg:gap-16 items-center transition-all duration-500 
          ${isNewLayout ? 'lg:grid-cols-2' : 'max-w-4xl mx-auto'}`}>
          
          {/* Content */}
          <div className={`text-center ${isNewLayout ? 'lg:text-left' : ''}`}>
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2"
            >
              <ToggleRight className="h-4 w-4 text-teal-400" />
              <span className="text-sm text-teal-300">Despliega con confianza</span>
            </div>

            <h1 
              data-hero-title
              className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 transition-colors duration-500
                ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
            >
              <span className="block">Esta página cambia</span>
              <span className="block text-gradient">con un toggle.</span>
            </h1>

            <p 
              data-hero-description
              className={`mx-auto max-w-xl text-lg md:text-xl mb-8 transition-colors duration-500
                ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}
                ${isNewLayout ? 'lg:mx-0' : ''}`}
            >
              Prueba los toggles a la derecha. Observa cómo esta landing se transforma en tiempo real. 
              Ese es el poder de los feature flags.
            </p>

            {/* Quick stats showing flag impact */}
            <div 
              data-hero-cta
              className={`mb-8 p-4 rounded-xl border transition-colors duration-500
                ${isDarkMode ? 'bg-slate-900/50 border-teal-500/20' : 'bg-white border-slate-200'}`}
            >
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                    {flags.filter(f => f.enabled).length} flags activos
                  </span>
                </div>
                <span className="text-teal-400">0 deploys necesarios</span>
              </div>
            </div>

            <div 
              data-hero-cta
              className={`flex flex-col sm:flex-row items-center gap-4 ${isNewLayout ? 'lg:items-start' : 'justify-center'}`}
            >
              <button
                onClick={handleCtaClick}
                className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center"
              >
                Comenzar Gratis
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="#docs"
                className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center"
              >
                <Code className="h-5 w-5" />
                Ver SDK
              </a>
            </div>

            {/* Stats */}
            <div 
              data-hero-stats
              className={`mt-10 flex flex-wrap items-center gap-6 ${isNewLayout ? 'justify-center lg:justify-start' : 'justify-center'}`}
            >
              {[
                { value: '10B+', label: 'Evaluaciones/día' },
                { value: '50ms', label: 'Latencia p99' },
                { value: '99.99%', label: 'Uptime' },
              ].map((stat) => (
                <div key={stat.label} className={`text-center ${isNewLayout ? 'lg:text-left' : ''}`}>
                  <span className="block text-2xl font-bold text-teal-400">{stat.value}</span>
                  <span className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Flag Dashboard */}
          {isNewLayout && (
            <div 
              data-hero-visual
              className="relative"
            >
              <div className={`rounded-2xl border overflow-hidden shadow-2xl shadow-teal-500/10 transition-colors duration-500
                ${isDarkMode ? 'bg-slate-900/90 border-teal-500/20' : 'bg-white border-slate-200'}`}>
                {/* Header */}
                <div className={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-500
                  ${isDarkMode ? 'bg-slate-800/80 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-2">
                    <ToggleRight className="h-4 w-4 text-teal-400" />
                    <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Feature Flags
                    </span>
                  </div>
                  <span className="text-xs text-teal-400 font-mono">LIVE</span>
                </div>

                {/* Flags List */}
                <div className="p-4 space-y-3">
                  {flags.map((flag) => (
                    <div 
                      key={flag.id}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all
                        ${isDarkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-slate-50 border-slate-200'}
                        ${flag.enabled ? 'ring-1 ring-teal-500/30' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full transition-colors ${flag.enabled ? 'bg-teal-400' : 'bg-slate-600'}`} />
                        <div>
                          <span className={`font-mono text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            {flag.name}
                          </span>
                          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                            {flag.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFlag(flag.id)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          flag.enabled ? 'bg-teal-500' : isDarkMode ? 'bg-slate-700' : 'bg-slate-300'
                        }`}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                          flag.enabled ? 'translate-x-7' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Targeting Preview */}
                <div className={`p-4 border-t transition-colors duration-500
                  ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200'}`}>
                  <p className={`text-xs mb-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    Reglas de Segmentación
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: Users, label: 'Usuarios beta' },
                      { icon: Percent, label: '25% rollout' },
                      { icon: Zap, label: 'Plan Pro' },
                    ].map((rule) => (
                      <div 
                        key={rule.label}
                        className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs
                          ${isDarkMode ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-600'}`}
                      >
                        <rule.icon className="w-3 h-3" />
                        {rule.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-2xl" />
            </div>
          )}
        </div>
      </div>

      {/* CSS for confetti */}
      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </section>
  )
}
