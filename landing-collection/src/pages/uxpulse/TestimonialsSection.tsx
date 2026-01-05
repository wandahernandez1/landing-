import { Calculator, DollarSign, TrendingUp, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

// ROI Calculator logic
const calculateROI = (visitors: number, conversionRate: number, avgOrderValue: number) => {
  const improvedRate = conversionRate * 1.32 // 32% improvement average
  const currentRevenue = visitors * (conversionRate / 100) * avgOrderValue
  const improvedRevenue = visitors * (improvedRate / 100) * avgOrderValue
  const additionalRevenue = improvedRevenue - currentRevenue
  return { currentRevenue, improvedRevenue, additionalRevenue, improvedRate }
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visitors, setVisitors] = useState(50000)
  const [conversionRate, setConversionRate] = useState(2.5)
  const [avgOrderValue, setAvgOrderValue] = useState(75)

  const roi = calculateROI(visitors, conversionRate, avgOrderValue)

  const formatCurrency = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`
    return `$${value.toFixed(0)}`
  }

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 md:py-40"
      aria-labelledby="testimonials-title"
    >
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 data-grid opacity-10" />
      
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-sm mb-6">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            How much revenue are you{' '}
            <span className="text-gradient">leaving behind?</span>
          </h2>
        </header>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-rose-500/20 bg-slate-900/90 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Input side */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-800">
                <h3 className="text-xl font-semibold text-white mb-8">Your current metrics</h3>
                
                <div className="space-y-8">
                  {/* Monthly Visitors */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-400">Monthly Visitors</label>
                      <span className="text-lg font-bold text-white">{visitors.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={500000}
                      step={5000}
                      value={visitors}
                      onChange={(e) => setVisitors(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rose-400 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-xs text-slate-600">
                      <span>10K</span>
                      <span>500K</span>
                    </div>
                  </div>

                  {/* Conversion Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-400">Conversion Rate</label>
                      <span className="text-lg font-bold text-white">{conversionRate.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={10}
                      step={0.1}
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rose-400 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-xs text-slate-600">
                      <span>0.5%</span>
                      <span>10%</span>
                    </div>
                  </div>

                  {/* Average Order Value */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-slate-400">Avg. Order Value</label>
                      <span className="text-lg font-bold text-white">${avgOrderValue}</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={500}
                      step={5}
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-rose-400 [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex justify-between mt-1 text-xs text-slate-600">
                      <span>$10</span>
                      <span>$500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results side */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-rose-950/50 to-transparent">
                <h3 className="text-xl font-semibold text-white mb-8">With UXPulse</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="rounded-xl bg-slate-900/50 p-4 border border-slate-800">
                    <p className="text-sm text-slate-500 mb-1">Current Monthly Revenue</p>
                    <p className="text-2xl font-bold text-slate-400">{formatCurrency(roi.currentRevenue)}</p>
                  </div>

                  <div className="rounded-xl bg-rose-500/10 p-4 border border-rose-500/30">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-rose-400" />
                      <p className="text-sm text-rose-400">Projected with UXPulse</p>
                    </div>
                    <p className="text-3xl font-bold text-white">{formatCurrency(roi.improvedRevenue)}</p>
                    <p className="text-sm text-slate-500 mt-1">
                      at {roi.improvedRate.toFixed(1)}% conversion (+32% lift)
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-500/10 p-4 border border-emerald-500/30">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      <p className="text-sm text-emerald-400">Additional Monthly Revenue</p>
                    </div>
                    <p className="text-4xl font-bold text-emerald-400">{formatCurrency(roi.additionalRevenue)}</p>
                  </div>
                </div>

                <a
                  href="#pricing"
                  className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
                >
                  Start Recovering Revenue
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-xs text-slate-500 text-center mt-4">
                  *Based on avg. 32% conversion lift from our customer base
                </p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-500">
            {[
              { value: '10M+', label: 'Sessions analyzed' },
              { value: '5,000+', label: 'Happy teams' },
              { value: '+32%', label: 'Avg. conversion lift' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-rose-400">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
