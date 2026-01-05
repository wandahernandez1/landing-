import { Users, TrendingUp, Calendar } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Cohort data visualization
const COHORTS = [
  { month: 'Jan', retention: [100, 85, 72, 65, 58, 52] },
  { month: 'Feb', retention: [100, 88, 76, 69, 62, null] },
  { month: 'Mar', retention: [100, 90, 78, 71, null, null] },
  { month: 'Apr', retention: [100, 87, 75, null, null, null] },
  { month: 'May', retention: [100, 91, null, null, null, null] },
  { month: 'Jun', retention: [100, null, null, null, null, null] },
]

const TIME_PERIODS = ['Month 0', 'Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5']

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null)

  const getColor = (value: number | null) => {
    if (value === null) return 'bg-neutral-900'
    if (value >= 80) return 'bg-emerald-500'
    if (value >= 60) return 'bg-emerald-600'
    if (value >= 40) return 'bg-emerald-700'
    return 'bg-emerald-800'
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 indie-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">Cohort Analysis</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            See retention{' '}<span className="text-gradient">clearly</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400">
            Understand how each cohort evolves over time
          </p>
        </header>

        {/* Cohort matrix */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                Retention by Cohort
              </h3>
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last 6 months
                </span>
              </div>
            </div>

            <div className="p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2 text-neutral-400 font-medium">Cohort</th>
                    {TIME_PERIODS.map((period) => (
                      <th key={period} className="p-2 text-neutral-400 font-medium text-center">{period}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COHORTS.map((cohort, rowIdx) => (
                    <tr key={cohort.month}>
                      <td className="p-2 text-white font-medium">{cohort.month} '24</td>
                      {cohort.retention.map((value, colIdx) => (
                        <td key={colIdx} className="p-1">
                          <div 
                            className={cn(
                              'relative h-10 rounded flex items-center justify-center transition-all cursor-pointer',
                              getColor(value),
                              hoveredCell?.row === rowIdx && hoveredCell?.col === colIdx && 'ring-2 ring-white'
                            )}
                            onMouseEnter={() => setHoveredCell({ row: rowIdx, col: colIdx })}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            {value !== null && (
                              <span className="text-sm font-medium text-white">{value}%</span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="px-6 py-4 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-400">Retention:</span>
                <div className="flex items-center gap-2">
                  {[
                    { color: 'bg-emerald-800', label: '0-40%' },
                    { color: 'bg-emerald-700', label: '40-60%' },
                    { color: 'bg-emerald-600', label: '60-80%' },
                    { color: 'bg-emerald-500', label: '80-100%' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1">
                      <div className={cn('w-4 h-4 rounded', item.color)} />
                      <span className="text-xs text-neutral-500">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                Avg retention: 68%
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { metric: 'Best cohort', value: 'May 2024', detail: '91% Month 1 retention' },
              { metric: 'Avg M1 drop', value: '12%', detail: 'Industry avg: 25%' },
              { metric: 'LTV predictor', value: 'Month 2', detail: 'Strongest retention signal' },
            ].map((insight) => (
              <div key={insight.metric} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center">
                <p className="text-sm text-neutral-400">{insight.metric}</p>
                <p className="text-xl font-bold text-white mt-1">{insight.value}</p>
                <p className="text-xs text-emerald-400 mt-1">{insight.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
