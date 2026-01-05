import { useRef, useState, useEffect } from 'react'
import { AlertTriangle, TrendingDown, Play, Pause, MousePointer2, Eye, Clock, BarChart3, Users, ArrowRight, Lock, Cookie, Shield } from 'lucide-react'

// Session replay simulation frames
const SESSION_FRAMES = [
  { action: 'Page load', element: 'Homepage', time: 0 },
  { action: 'Scroll', element: '50% of page', time: 1.2 },
  { action: 'Hover', element: 'Pricing card', time: 2.8 },
  { action: 'Click', element: 'CTA button', time: 3.5 },
  { action: 'Rage click', element: 'Broken link', time: 4.2, isError: true },
  { action: 'Leave', element: 'Exit page', time: 5.1, isError: true },
]

// Live metrics
const DASHBOARD_METRICS = [
  { label: 'Avg. Session', value: '2m 34s', change: '+12%', icon: Clock },
  { label: 'Bounce Rate', value: '34.2%', change: '-8%', icon: TrendingDown, isGood: true },
  { label: 'Conversions', value: '847', change: '+23%', icon: BarChart3 },
  { label: 'Active Users', value: '1,234', change: '+156', icon: Users },
]

// Integration logos
const INTEGRATIONS = [
  'Segment', 'Mixpanel', 'Amplitude', 'Google Analytics', 'Intercom', 'HubSpot', 'Slack', 'Zapier'
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [lostRevenue, setLostRevenue] = useState(0)

  // Animate session replay
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % SESSION_FRAMES.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [isPlaying])

  // Animate lost revenue counter
  useEffect(() => {
    const target = 47832
    const step = Math.ceil(target / 100)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setLostRevenue(target)
        clearInterval(timer)
      } else {
        setLostRevenue(current)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-32 md:py-40"
      aria-labelledby="features-title"
    >
      <div className="absolute inset-0 data-grid opacity-20" />

      <div className="container-custom relative z-10">
        
        {/* SECTION 1: Problem Statement - Provocative */}
        <div className="mb-40">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm mb-6">
                  <AlertTriangle className="w-4 h-4" />
                  The hard truth
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  You're losing{' '}
                  <span className="text-red-400">${lostRevenue.toLocaleString()}</span>{' '}
                  every month
                </h2>
                <p className="text-xl text-slate-400 mb-8">
                  67% of visitors leave without converting. Without behavior data, you're guessing why.
                </p>
                <div className="space-y-4">
                  {[
                    'Users rage-clicking on broken elements',
                    'Forms abandoned at the last step',
                    'Key CTAs never seen due to scroll depth',
                  ].map((problem, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      {problem}
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual: Funnel with drop-off */}
              <div className="relative">
                <div className="space-y-2">
                  {[
                    { label: 'Visitors', value: 10000, pct: 100 },
                    { label: 'Engaged', value: 6700, pct: 67 },
                    { label: 'Interested', value: 2800, pct: 28 },
                    { label: 'Converted', value: 340, pct: 3.4 },
                  ].map((step, i) => (
                    <div key={step.label} className="relative">
                      <div 
                        className="h-16 rounded-lg bg-gradient-to-r from-rose-500/30 to-rose-500/10 flex items-center justify-between px-4 transition-all"
                        style={{ width: `${step.pct}%`, minWidth: '150px' }}
                      >
                        <span className="text-white font-medium">{step.label}</span>
                        <span className="text-rose-400 font-bold">{step.value.toLocaleString()}</span>
                      </div>
                      {i < 3 && (
                        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-xs text-red-400 flex items-center gap-1">
                          <TrendingDown className="w-3 h-3" />
                          -{Math.round(100 - ([67, 28, 3.4][i] / [100, 67, 28][i]) * 100)}%
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Session Replay Theater */}
        <div className="mb-40">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-rose-400">
              Session Replay
            </p>
            <h2 id="features-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              Watch every user journey
            </h2>
          </header>

          <div className="max-w-4xl mx-auto">
            {/* Video player style */}
            <div className="rounded-2xl border border-rose-500/20 bg-slate-900/90 overflow-hidden">
              {/* Player header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <MousePointer2 className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">Session #847291</p>
                    <p className="text-xs text-slate-500">San Francisco, CA • Chrome • Desktop</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Duration: 5.1s</span>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* "Screen" area */}
              <div className="aspect-video bg-slate-950 relative flex items-center justify-center">
                <div className="absolute inset-4 border border-dashed border-slate-700/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-500">User viewport simulation</p>
                  </div>
                </div>
                
                {/* Current action indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${
                    SESSION_FRAMES[currentFrame].isError ? 'bg-red-500/20 text-red-400' : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    <span className="text-sm font-mono">
                      [{SESSION_FRAMES[currentFrame].time}s] {SESSION_FRAMES[currentFrame].action}: {SESSION_FRAMES[currentFrame].element}
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="px-4 py-3 bg-slate-800/50">
                <div className="flex items-center gap-1">
                  {SESSION_FRAMES.map((frame, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentFrame(i)}
                      className={`flex-1 h-2 rounded-full transition-all ${
                        i === currentFrame 
                          ? frame.isError ? 'bg-red-400' : 'bg-rose-400'
                          : i < currentFrame 
                            ? 'bg-rose-500/50' 
                            : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Metrics Dashboard */}
        <div className="mb-40">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real-time metrics that matter
            </h3>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {DASHBOARD_METRICS.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-5 h-5 text-rose-400" />
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    metric.isGood || metric.change.startsWith('+') 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Privacy Commitment */}
        <div className="mb-40">
          <div className="max-w-5xl mx-auto rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm mb-6">
                  <Shield className="w-4 h-4" />
                  Privacy-first
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Your users' privacy is sacred
                </h3>
                <p className="text-slate-400 mb-6">
                  We never compromise on privacy. Full insights without the guilt.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Cookie, label: 'Cookieless', desc: 'No tracking cookies' },
                  { icon: Lock, label: 'GDPR Ready', desc: 'Fully compliant' },
                  { icon: Shield, label: 'SOC 2', desc: 'Type II certified' },
                  { icon: Eye, label: 'Anonymous', desc: 'PII masked by default' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-slate-900/50 p-4 border border-emerald-500/10">
                    <item.icon className="w-6 h-6 text-emerald-400 mb-2" />
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: Integrations */}
        <div>
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Works with your stack
            </h3>
            <p className="mt-4 text-slate-400">Seamless integrations with the tools you already use</p>
          </header>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {INTEGRATIONS.map((name) => (
              <div 
                key={name}
                className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-rose-500/30 transition-all cursor-pointer"
              >
                {name}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors">
              View all integrations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
