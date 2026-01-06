import { DollarSign, TrendingUp, TrendingDown, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/shared/utils/cn'

// Simulated real-time MRR dashboard
const METRICS = {
  mrr: { value: 4250, change: 12.5, trend: 'up' as const },
  customers: { value: 89, change: 8, trend: 'up' as const },
  churn: { value: 2.1, change: -0.3, trend: 'down' as const },
  ltv: { value: 487, change: 15, trend: 'up' as const },
}

const MRR_HISTORY = [
  { month: 'Jan', value: 2100 },
  { month: 'Feb', value: 2450 },
  { month: 'Mar', value: 2800 },
  { month: 'Apr', value: 3200 },
  { month: 'May', value: 3750 },
  { month: 'Jun', value: 4250 },
]

const RECENT_EVENTS = [
  { type: 'new', customer: 'John D.', plan: 'Indie', amount: 19, time: '2m ago' },
  { type: 'upgrade', customer: 'Sarah M.', plan: 'Studio', amount: 30, time: '15m ago' },
  { type: 'churn', customer: 'Mike R.', plan: 'Indie', amount: -19, time: '1h ago' },
  { type: 'new', customer: 'Lisa K.', plan: 'Indie', amount: 19, time: '2h ago' },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [liveValue, setLiveValue] = useState(METRICS.mrr.value)

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveValue(prev => prev + Math.floor(Math.random() * 20 - 5))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const maxMRR = Math.max(...MRR_HISTORY.map(m => m.value))

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 indie-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">Dashboard en Vivo</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Tu MRR,{' '}<span className="text-gradient">en tiempo real</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400">
            Conecta Stripe y ve tus números actualizarse en vivo
          </p>
        </header>

        {/* Dashboard demo */}
        <div className="max-w-5xl mx-auto">
          {/* Metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'MRR', value: `$${liveValue.toLocaleString()}`, change: METRICS.mrr.change, trend: METRICS.mrr.trend, icon: DollarSign },
              { label: 'Clientes', value: METRICS.customers.value, change: METRICS.customers.change, trend: METRICS.customers.trend, icon: Users },
              { label: 'Tasa de Churn', value: `${METRICS.churn.value}%`, change: METRICS.churn.change, trend: METRICS.churn.trend, icon: TrendingDown },
              { label: 'LTV Promedio', value: `$${METRICS.ltv.value}`, change: METRICS.ltv.change, trend: METRICS.ltv.trend, icon: TrendingUp },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl bg-neutral-900/80 border border-neutral-800 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-neutral-400">{metric.label}</span>
                  <metric.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                <div className={cn(
                  'flex items-center gap-1 text-sm mt-1',
                  (metric.label === 'Churn Rate' ? metric.trend === 'down' : metric.trend === 'up') 
                    ? 'text-emerald-400' 
                    : 'text-red-400'
                )}>
                  {metric.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            {/* MRR Chart */}
            <div className="rounded-xl bg-neutral-900/80 border border-neutral-800 p-6">
              <h3 className="font-semibold text-white mb-6">Crecimiento MRR</h3>
              <div className="flex items-end justify-between gap-2 h-40">
                {MRR_HISTORY.map((month) => (
                  <div key={month.month} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-gradient-to-t from-emerald-500/50 to-emerald-400 rounded-t transition-all"
                      style={{ height: `${(month.value / maxMRR) * 100}%` }}
                    />
                    <span className="text-xs text-neutral-500">{month.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent events */}
            <div className="rounded-xl bg-neutral-900/80 border border-neutral-800 p-6">
              <h3 className="font-semibold text-white mb-4">Eventos en Vivo</h3>
              <div className="space-y-3">
                {RECENT_EVENTS.map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-neutral-800 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'w-2 h-2 rounded-full',
                        event.type === 'new' && 'bg-emerald-400',
                        event.type === 'upgrade' && 'bg-blue-400',
                        event.type === 'churn' && 'bg-red-400',
                      )} />
                      <div>
                        <p className="text-sm text-white">{event.customer}</p>
                        <p className="text-xs text-neutral-500">{event.plan} • {event.time}</p>
                      </div>
                    </div>
                    <span className={cn(
                      'text-sm font-medium',
                      event.amount > 0 ? 'text-emerald-400' : 'text-red-400'
                    )}>
                      {event.amount > 0 ? '+' : ''}{event.amount}
                    </span>
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
