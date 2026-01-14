import { TrendingUp, Users, Clock, Target, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Funnel stages
const FUNNEL_STAGES = [
  { stage: 'Registro', users: 10000, color: 'bg-indigo-600' },
  { stage: 'Activación', users: 6500, color: 'bg-indigo-500' },
  { stage: 'Engagement', users: 4200, color: 'bg-indigo-400' },
  { stage: 'Retención', users: 2800, color: 'bg-purple-500' },
  { stage: 'Ingresos', users: 1400, color: 'bg-purple-600' },
]

// Before/After metrics
const METRICS_COMPARISON = [
  { metric: 'Tiempo a Valor', before: '14 días', after: '3 días', improvement: '-78%' },
  { metric: 'Tasa de Activación', before: '23%', after: '65%', improvement: '+183%' },
  { metric: 'Conversión de Prueba', before: '8%', after: '24%', improvement: '+200%' },
  { metric: 'Adopción de Funciones', before: '31%', after: '72%', improvement: '+132%' },
  { metric: 'Tickets de Soporte', before: '340/mes', after: '89/mes', improvement: '-74%' },
]

// Case studies
const CASE_STUDIES = [
  { company: 'FinFlow', industry: 'Fintech', metric: '3x activation', logo: 'FF' },
  { company: 'DataStack', industry: 'Analytics', metric: '+180% trials', logo: 'DS' },
  { company: 'CloudOps', industry: 'DevOps', metric: '-65% churn', logo: 'CO' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showAfter, setShowAfter] = useState(true)

  const maxUsers = FUNNEL_STAGES[0].users

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 onboard-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">Resultados</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transforma tu{' '}<span className="text-gradient">embudo</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Mira cómo los equipos mejoran sus métricas de activación
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Funnel visualization */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                Embudo del Viaje del Usuario
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                10,000 registros/mes
              </div>
            </div>

            <div className="relative">
              {/* Funnel bars */}
              <div className="space-y-3">
                {FUNNEL_STAGES.map((stage, idx) => {
                  const width = (stage.users / maxUsers) * 100
                  const dropoff = idx > 0 
                    ? Math.round((1 - stage.users / FUNNEL_STAGES[idx - 1].users) * 100) 
                    : 0
                  return (
                    <div key={stage.stage} className="flex items-center gap-4">
                      <div className="w-24 text-right">
                        <span className="text-sm text-slate-400">{stage.stage}</span>
                      </div>
                      <div className="flex-1 relative">
                        <div className="h-10 bg-slate-800/50 rounded-lg overflow-hidden">
                          <div 
                            className={cn('h-full rounded-lg transition-all duration-700', stage.color)}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                        {/* User count */}
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-white font-medium">
                          {stage.users.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-20 text-right">
                        {dropoff > 0 && (
                          <span className="text-sm text-red-400">-{dropoff}%</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Conversion rate */}
              <div className="mt-6 flex items-center justify-center gap-4 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
                <Target className="w-5 h-5 text-indigo-400" />
                <span className="text-slate-400">Conversión Total:</span>
                <span className="text-2xl font-bold text-indigo-400">14%</span>
                <span className="text-sm text-green-400">+6% con OnboardFlow</span>
              </div>
            </div>
          </div>

          {/* Before/After comparison */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-white">Antes vs Después de OnboardFlow</h3>
              <button
                onClick={() => setShowAfter(!showAfter)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  showAfter 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                )}
              >
                <Clock className="w-4 h-4" />
                {showAfter ? 'Después' : 'Antes'}
              </button>
            </div>

            <div className="rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/50">
                    <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Métrica</th>
                    <th className="text-center px-6 py-4 text-sm font-medium text-slate-500">Antes</th>
                    <th className="text-center px-6 py-4 text-sm font-medium text-indigo-400">Después</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-slate-400">Cambio</th>
                  </tr>
                </thead>
                <tbody>
                  {METRICS_COMPARISON.map((item) => (
                    <tr key={item.metric} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-white">{item.metric}</td>
                      <td className="px-6 py-4 text-center text-slate-500">{item.before}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          'inline-flex px-3 py-1 rounded-full text-sm font-medium',
                          showAfter ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'
                        )}>
                          {showAfter ? item.after : item.before}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={cn(
                          'text-sm font-medium',
                          item.improvement.startsWith('+') ? 'text-green-400' : 'text-green-400'
                        )}>
                          {item.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Case studies */}
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study) => (
              <div 
                key={study.company}
                className="card rounded-xl p-6 flex items-center gap-4 hover:border-indigo-500/30 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {study.logo}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{study.company}</p>
                  <p className="text-sm text-slate-500">{study.industry}</p>
                  <p className="text-sm text-indigo-400 mt-1">{study.metric}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
