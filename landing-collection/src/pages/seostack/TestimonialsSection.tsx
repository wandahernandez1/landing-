import { TrendingUp, ArrowUp, Calendar, ExternalLink } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Rank tracking data
const TRACKED_KEYWORDS = [
  { keyword: 'react component library', position: 3, change: 5, volume: 12400, difficulty: 67, url: '/components' },
  { keyword: 'typescript ui kit', position: 7, change: 12, volume: 8900, difficulty: 54, url: '/docs' },
  { keyword: 'tailwind components', position: 12, change: -2, volume: 22100, difficulty: 78, url: '/templates' },
  { keyword: 'headless ui alternative', position: 4, change: 8, volume: 4500, difficulty: 45, url: '/pricing' },
  { keyword: 'react design system', position: 9, change: 3, volume: 6700, difficulty: 61, url: '/docs/design' },
]

// Historical ranking data (mock)
const RANK_HISTORY = [
  { date: 'Jan', positions: [45, 38, 32, 28, 22] },
  { date: 'Feb', positions: [38, 29, 25, 18, 15] },
  { date: 'Mar', positions: [28, 18, 14, 12, 11] },
  { date: 'Apr', positions: [18, 12, 10, 8, 9] },
  { date: 'May', positions: [12, 9, 8, 5, 7] },
  { date: 'Jun', positions: [8, 7, 12, 4, 9] },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedKeyword, setSelectedKeyword] = useState(0)

  const maxPosition = 50 // For chart scaling

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 seo-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-green-400">Seguimiento de Rankings</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Observa cómo tus rankings{' '}<span className="text-gradient">suben</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Rastrea posiciones de palabras clave en Google, Bing y DuckDuckGo
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Stats overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Palabras Clave Rastreadas', value: '847', change: '+23 esta semana' },
              { label: 'Posición Promedio', value: '12.4', change: '↑ 3.2 desde el mes pasado' },
              { label: 'Rankings Top 10', value: '156', change: '+12% crecimiento' },
              { label: 'Featured Snippets', value: '24', change: '+5 este mes' },
            ].map((stat, idx) => (
              <div key={idx} className="card rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500 mb-2">{stat.label}</p>
                <p className="text-xs text-green-400">{stat.change}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Keywords table */}
            <div className="lg:col-span-3 rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
              <div className="border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  Rankings de Palabras Clave
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  Últimos 30 días
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500">
                      <th className="text-left px-4 py-3 font-medium">Palabra Clave</th>
                      <th className="text-center px-4 py-3 font-medium">Posición</th>
                      <th className="text-center px-4 py-3 font-medium">Cambio</th>
                      <th className="text-right px-4 py-3 font-medium">Volumen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TRACKED_KEYWORDS.map((kw, idx) => (
                      <tr 
                        key={idx}
                        onClick={() => setSelectedKeyword(idx)}
                        className={cn(
                          'border-b border-slate-800/50 cursor-pointer transition-colors',
                          selectedKeyword === idx ? 'bg-green-500/10' : 'hover:bg-slate-800/30'
                        )}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-300">{kw.keyword}</span>
                            <ExternalLink className="w-3 h-3 text-slate-600" />
                          </div>
                          <span className="text-xs text-slate-600">{kw.url}</span>
                        </td>
                        <td className="text-center px-4 py-3">
                          <span className={cn(
                            'inline-flex items-center justify-center w-8 h-8 rounded-lg font-semibold',
                            kw.position <= 3 ? 'bg-green-500/20 text-green-400' :
                            kw.position <= 10 ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-slate-700 text-slate-400'
                          )}>
                            {kw.position}
                          </span>
                        </td>
                        <td className="text-center px-4 py-3">
                          <span className={cn(
                            'inline-flex items-center gap-1 text-sm',
                            kw.change > 0 ? 'text-green-400' : 'text-red-400'
                          )}>
                            <ArrowUp className={cn('w-3 h-3', kw.change < 0 && 'rotate-180')} />
                            {Math.abs(kw.change)}
                          </span>
                        </td>
                        <td className="text-right px-4 py-3 text-slate-400">
                          {kw.volume.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Position chart */}
            <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="font-semibold text-white mb-4">Historial de Posiciones</h3>
              <p className="text-sm text-slate-500 mb-6">
                "{TRACKED_KEYWORDS[selectedKeyword].keyword}"
              </p>
              
              {/* Simple line chart visualization */}
              <div className="relative h-48">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-600 pr-2">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
                
                {/* Chart area */}
                <div className="ml-8 h-full flex items-end justify-between gap-2">
                  {RANK_HISTORY.map((month, mIdx) => {
                    const position = month.positions[selectedKeyword]
                    const heightPercent = ((maxPosition - position) / maxPosition) * 100
                    return (
                      <div key={mIdx} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full flex justify-center">
                          <div 
                            className="w-2 rounded-full bg-gradient-to-t from-green-600 to-green-400 transition-all duration-500"
                            style={{ height: `${heightPercent}%`, minHeight: '8px' }}
                          />
                        </div>
                        <span className="text-xs text-slate-600">{month.date}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Keyword details */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Dificultad</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-yellow-500"
                        style={{ width: `${TRACKED_KEYWORDS[selectedKeyword].difficulty}%` }}
                      />
                    </div>
                    <span className="text-sm text-slate-400">
                      {TRACKED_KEYWORDS[selectedKeyword].difficulty}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Volumen Mensual</p>
                  <p className="text-lg font-semibold text-white">
                    {TRACKED_KEYWORDS[selectedKeyword].volume.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
