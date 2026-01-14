import { ArrowRight, Cloud, TrendingDown, Calculator, Zap, Building2 } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// ROI Calculator - show potential savings in real-time
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [monthlySpend, setMonthlySpend] = useState(50000)
  const [animated, setAnimated] = useState(false)
  
  useHeroAnimation(sectionRef)

  // Calculate savings (average 32% savings)
  const savingsPercent = 32
  const estimatedSavings = Math.round(monthlySpend * (savingsPercent / 100))
  const annualSavings = estimatedSavings * 12

  // Animate savings counter
  const [displayedSavings, setDisplayedSavings] = useState(0)
  
  useEffect(() => {
    if (!animated) {
      setAnimated(true)
      return
    }
    
    const step = Math.ceil(estimatedSavings / 30)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= estimatedSavings) {
        setDisplayedSavings(estimatedSavings)
        clearInterval(timer)
      } else {
        setDisplayedSavings(current)
      }
    }, 20)
    
    return () => clearInterval(timer)
  }, [estimatedSavings, animated])

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  // Spend presets
  const presets = [
    { label: '$10K', value: 10000 },
    { label: '$50K', value: 50000 },
    { label: '$100K', value: 100000 },
    { label: '$500K', value: 500000 },
  ]

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 cloud-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2"
            >
              <TrendingDown className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-300">Optimización de Costos en la Nube</span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">¿Cuánto podrías</span>
              <span className="block text-gradient">ahorrar?</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              Ingresa tu gasto mensual en la nube. Mira tus ahorros al instante.
              AWS, GCP, Azure — los optimizamos todos.
            </p>

            {/* Big savings display */}
            <div 
              data-hero-cta
              className="mb-8 p-6 rounded-2xl bg-linear-to-br from-green-500/10 to-blue-500/10 border border-green-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-400">Tu ahorro estimado</span>
                <span className="text-xs text-green-400 px-2 py-0.5 bg-green-500/20 rounded">-{savingsPercent}%</span>
              </div>
              
              {/* Monthly savings */}
              <div className="text-center lg:text-left">
                <span className="text-5xl md:text-6xl font-bold text-green-400">
                  {formatCurrency(displayedSavings)}
                </span>
                <span className="text-slate-500 ml-2">/mes</span>
              </div>
              
              {/* Annual savings */}
              <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <span className="text-sm text-slate-500">Ahorro anual</span>
                <span className="text-2xl font-bold text-blue-400">{formatCurrency(annualSavings)}</span>
              </div>
            </div>

            <div 
              data-hero-stats
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center">
                Empezar a Ahorrar Hoy
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#features" className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center">
                <Cloud className="h-5 w-5" />
                Ver Cómo Funciona
              </a>
            </div>
          </div>

          {/* Calculator */}
          <div 
            data-hero-visual
            className="relative"
          >
            <div className="rounded-2xl border border-blue-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-blue-500/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-300">Calculadora de ROI</span>
                </div>
                <span className="text-xs text-blue-400">INSTANTÁNEO</span>
              </div>

              {/* Calculator content */}
              <div className="p-6">
                {/* Spend input */}
                <div className="mb-6">
                  <label className="block text-sm text-slate-400 mb-3">
                    Tu gasto mensual en la nube
                  </label>
                  
                  {/* Slider */}
                  <div className="relative mb-4">
                    <input
                      type="range"
                      min="5000"
                      max="1000000"
                      step="1000"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div 
                      className="absolute top-0 left-0 h-2 bg-linear-to-r from-blue-500 to-blue-400 rounded-l-lg pointer-events-none"
                      style={{ width: `${((monthlySpend - 5000) / (1000000 - 5000)) * 100}%` }}
                    />
                  </div>
                  
                  {/* Current value */}
                  <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <span className="text-3xl font-bold text-white">{formatCurrency(monthlySpend)}</span>
                    <span className="text-slate-500 ml-1">/mes</span>
                  </div>
                  
                  {/* Presets */}
                  <div className="flex gap-2 mt-4">
                    {presets.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setMonthlySpend(preset.value)}
                        className={`flex-1 py-2 text-sm rounded-lg transition-all ${
                          monthlySpend === preset.value
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Cloud className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-sm text-slate-300">Optimización AWS</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">
                      -{formatCurrency(Math.round(monthlySpend * 0.15))}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Cloud className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm text-slate-300">Optimización GCP</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">
                      -{formatCurrency(Math.round(monthlySpend * 0.10))}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <Cloud className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-sm text-slate-300">Optimización Azure</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">
                      -{formatCurrency(Math.round(monthlySpend * 0.07))}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Ahorro mensual total</span>
                    <span className="text-2xl font-bold text-green-400">{formatCurrency(estimatedSavings)}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-800/30">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    Más de 500 empresas confían en nosotros
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Resultados en 30 días
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
