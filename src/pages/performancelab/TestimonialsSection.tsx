import { DollarSign, ArrowUp, Calculator, RefreshCw } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Industry benchmarks
const BENCHMARKS = [
  { industry: 'E-commerce', lcp: 2.8, cls: 0.12, inp: 180, bounceRate: 42 },
  { industry: 'Noticias y Medios', lcp: 3.2, cls: 0.18, inp: 220, bounceRate: 55 },
  { industry: 'SaaS', lcp: 2.4, cls: 0.08, inp: 150, bounceRate: 38 },
  { industry: 'Finanzas', lcp: 3.0, cls: 0.10, inp: 200, bounceRate: 45 },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [monthlyVisitors, setMonthlyVisitors] = useState(100000)
  const [avgOrderValue, setAvgOrderValue] = useState(85)
  const [currentConversion, setCurrentConversion] = useState(3.2)
  const [isCalculating, setIsCalculating] = useState(false)

  // Calculate potential revenue
  const currentRevenue = monthlyVisitors * (currentConversion / 100) * avgOrderValue
  const improvedConversion = currentConversion * 1.16 // Combined lift from all improvements
  const projectedRevenue = monthlyVisitors * (improvedConversion / 100) * avgOrderValue
  const revenueIncrease = projectedRevenue - currentRevenue
  const percentIncrease = ((projectedRevenue - currentRevenue) / currentRevenue) * 100

  const runCalculation = () => {
    setIsCalculating(true)
    setTimeout(() => setIsCalculating(false), 1500)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 perf-grid opacity-10" />
      <div className="container-custom relative z-10">

        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">Calculadora de ROI</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Rendimiento ={' '}<span className="text-gradient">Ingresos</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Mira cuántos ingresos estás dejando en la mesa
          </p>
        </header>

        {/* Revenue Calculator */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Calculadora de Impacto en Ingresos</h3>
                </div>
                <button
                  onClick={runCalculation}
                  disabled={isCalculating}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                    isCalculating 
                      ? 'bg-slate-800 text-slate-500'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  )}
                >
                  <RefreshCw className={cn('w-4 h-4', isCalculating && 'animate-spin')} />
                  Recalcular
                </button>
              </div>
            </div>

            <div className="p-8">
              {/* Inputs */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Visitantes Mensuales</label>
                  <input
                    type="number"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Valor Promedio de Orden ($)</label>
                  <input
                    type="number"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Conversión Actual (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-slate-800/50 p-6 border border-slate-700">
                  <p className="text-sm text-slate-500 mb-2">Ingresos Mensuales Actuales</p>
                  <p className="text-3xl font-bold text-white font-mono">
                    ${currentRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div className="rounded-xl bg-green-500/10 p-6 border border-green-500/30">
                  <p className="text-sm text-green-400 mb-2">Proyectado con Optimización</p>
                  <p className="text-3xl font-bold text-green-400 font-mono">
                    ${projectedRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>

              {/* Impact summary */}
              <div className="mt-6 p-6 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-purple-400" />
                    <div>
                      <p className="text-sm text-slate-400">Incremento potencial de ingresos</p>
                      <p className="text-2xl font-bold text-white">
                        +${revenueIncrease.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20">
                    <ArrowUp className="w-5 h-5 text-green-400" />
                    <span className="text-lg font-bold text-green-400">+{percentIncrease.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Benchmarks */}
        <div>
          <h3 className="text-2xl font-bold text-center text-white mb-8">Benchmarks de la Industria</h3>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800">
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Industria</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-400">LCP</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-400">CLS</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-400">INP</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-400">Tasa de Rebote</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {BENCHMARKS.map((benchmark) => (
                    <tr key={benchmark.industry} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{benchmark.industry}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          'font-mono text-sm',
                          benchmark.lcp <= 2.5 ? 'text-green-400' : benchmark.lcp <= 4 ? 'text-amber-400' : 'text-red-400'
                        )}>{benchmark.lcp}s</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          'font-mono text-sm',
                          benchmark.cls <= 0.1 ? 'text-green-400' : benchmark.cls <= 0.25 ? 'text-amber-400' : 'text-red-400'
                        )}>{benchmark.cls}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          'font-mono text-sm',
                          benchmark.inp <= 200 ? 'text-green-400' : benchmark.inp <= 500 ? 'text-amber-400' : 'text-red-400'
                        )}>{benchmark.inp}ms</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-mono text-sm text-slate-300">{benchmark.bounceRate}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
