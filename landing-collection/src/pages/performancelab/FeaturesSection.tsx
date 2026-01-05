import { Activity, Clock, TrendingUp, Gauge, Info } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Web Vitals explained
const WEB_VITALS = [
  {
    id: 'lcp',
    name: 'LCP',
    fullName: 'Largest Contentful Paint',
    description: 'Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds.',
    icon: Clock,
    good: '≤ 2.5s',
    needsImprovement: '2.5s - 4s',
    poor: '> 4s',
    color: 'green',
  },
  {
    id: 'fid',
    name: 'INP',
    fullName: 'Interaction to Next Paint',
    description: 'Measures interactivity. To provide a good user experience, INP should be 200 milliseconds or less.',
    icon: Activity,
    good: '≤ 200ms',
    needsImprovement: '200ms - 500ms',
    poor: '> 500ms',
    color: 'amber',
  },
  {
    id: 'cls',
    name: 'CLS',
    fullName: 'Cumulative Layout Shift',
    description: 'Measures visual stability. To provide a good user experience, CLS should be less than 0.1.',
    icon: TrendingUp,
    good: '≤ 0.1',
    needsImprovement: '0.1 - 0.25',
    poor: '> 0.25',
    color: 'blue',
  },
]

// Sample data for live demo
const SAMPLE_PAGES = [
  { path: '/', lcp: 1.8, inp: 89, cls: 0.02, status: 'good' },
  { path: '/products', lcp: 2.9, inp: 210, cls: 0.08, status: 'needs-improvement' },
  { path: '/checkout', lcp: 4.2, inp: 450, cls: 0.31, status: 'poor' },
  { path: '/blog', lcp: 2.1, inp: 120, cls: 0.01, status: 'good' },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedVital, setSelectedVital] = useState<string>('lcp')
  const [selectedPage, setSelectedPage] = useState<string>('/')

  const activeVital = WEB_VITALS.find(v => v.id === selectedVital)!

  const getStatusColor = (status: string) => {
    if (status === 'good') return 'text-green-400 bg-green-500/20'
    if (status === 'needs-improvement') return 'text-amber-400 bg-amber-500/20'
    return 'text-red-400 bg-red-500/20'
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 perf-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">Web Vitals</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Understand Core{' '}<span className="text-gradient">Web Vitals</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            The metrics that matter for SEO and user experience
          </p>
        </header>

        {/* Vitals Explainer */}
        <div className="max-w-5xl mx-auto mb-20">
          {/* Vitals tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {WEB_VITALS.map((vital) => (
              <button
                key={vital.id}
                onClick={() => setSelectedVital(vital.id)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all',
                  selectedVital === vital.id
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:bg-slate-900'
                )}
              >
                <vital.icon className="w-5 h-5" />
                <span className="font-mono">{vital.name}</span>
              </button>
            ))}
          </div>

          {/* Vital detail */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{activeVital.fullName}</h3>
                <p className="text-slate-400 mb-6">{activeVital.description}</p>
                
                {/* Thresholds */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-sm text-slate-300">Good: <span className="font-mono text-green-400">{activeVital.good}</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="text-sm text-slate-300">Needs improvement: <span className="font-mono text-amber-400">{activeVital.needsImprovement}</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="text-sm text-slate-300">Poor: <span className="font-mono text-red-400">{activeVital.poor}</span></span>
                  </div>
                </div>
              </div>

              {/* Visual gauge */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 via-amber-500/20 to-red-500/20" />
                  <div className="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <Gauge className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <span className="text-3xl font-bold font-mono text-white">{activeVital.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Dashboard Preview */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Real-time monitoring</h3>
          
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Dashboard header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-400" />
                <span className="font-semibold text-white">Page Performance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live data
              </div>
            </div>

            {/* Pages list */}
            <div className="divide-y divide-slate-800">
              {SAMPLE_PAGES.map((page) => (
                <button
                  key={page.path}
                  onClick={() => setSelectedPage(page.path)}
                  className={cn(
                    'w-full px-6 py-4 flex items-center gap-6 transition-colors',
                    selectedPage === page.path ? 'bg-purple-500/10' : 'hover:bg-slate-800/50'
                  )}
                >
                  <span className="font-mono text-sm text-slate-300 w-24 text-left">{page.path}</span>
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <span className="text-xs text-slate-500 block mb-1">LCP</span>
                      <span className={cn(
                        'font-mono text-sm',
                        page.lcp <= 2.5 ? 'text-green-400' : page.lcp <= 4 ? 'text-amber-400' : 'text-red-400'
                      )}>{page.lcp}s</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-slate-500 block mb-1">INP</span>
                      <span className={cn(
                        'font-mono text-sm',
                        page.inp <= 200 ? 'text-green-400' : page.inp <= 500 ? 'text-amber-400' : 'text-red-400'
                      )}>{page.inp}ms</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-slate-500 block mb-1">CLS</span>
                      <span className={cn(
                        'font-mono text-sm',
                        page.cls <= 0.1 ? 'text-green-400' : page.cls <= 0.25 ? 'text-amber-400' : 'text-red-400'
                      )}>{page.cls}</span>
                    </div>
                  </div>
                  <span className={cn(
                    'px-3 py-1 rounded-full text-xs font-medium',
                    getStatusColor(page.status)
                  )}>
                    {page.status.replace('-', ' ')}
                  </span>
                </button>
              ))}
            </div>

            {/* Tip */}
            <div className="px-6 py-4 bg-purple-500/5 border-t border-purple-500/20">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400">
                  <span className="text-purple-400 font-medium">Pro tip:</span> Click any page to drill down into individual user sessions and identify performance bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
