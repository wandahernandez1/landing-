import { TrendingDown, AlertTriangle, CheckCircle, Flag } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Incident simulation
const INCIDENT_STEPS = [
  { time: '14:32', event: '🚨 Alert: 500 errors spike detected', type: 'alert' },
  { time: '14:33', event: '👀 Investigating: New checkout flag identified', type: 'info' },
  { time: '14:34', event: '🔄 Action: Rollback flag to 0%', type: 'action' },
  { time: '14:34', event: '✅ Resolved: Error rate back to normal', type: 'success' },
]

// Metrics comparison
const METRICS = {
  before: {
    deployTime: '45 min',
    rollbackTime: '15 min',
    testCoverage: '60%',
    incidentRate: '3/month',
  },
  after: {
    deployTime: '2 min',
    rollbackTime: '< 1 sec',
    testCoverage: '100%',
    incidentRate: '0.5/month',
  }
}

// Company logos
const COMPANIES = [
  { name: 'Vercel', logo: '▲' },
  { name: 'Linear', logo: '◇' },
  { name: 'Notion', logo: '▢' },
  { name: 'Figma', logo: '◈' },
  { name: 'Supabase', logo: '⚡' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [incidentStep, setIncidentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Auto-play incident simulation
  useEffect(() => {
    if (isPlaying && incidentStep < INCIDENT_STEPS.length - 1) {
      const timer = setTimeout(() => {
        setIncidentStep(prev => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    } else if (incidentStep >= INCIDENT_STEPS.length - 1) {
      setIsPlaying(false)
    }
  }, [isPlaying, incidentStep])

  const startSimulation = () => {
    setIncidentStep(0)
    setIsPlaying(true)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40" aria-labelledby="testimonials-title">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 flag-grid opacity-10" />
      <div className="container-custom relative z-10">

        {/* Company logos */}
        <div className="mb-32">
          <p className="text-center text-sm text-slate-500 mb-8">Trusted by fast-moving engineering teams</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {COMPANIES.map((company) => (
              <div 
                key={company.name}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800"
              >
                <span className="text-2xl text-teal-400">{company.logo}</span>
                <span className="text-slate-400 font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instant Rollback Simulation */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400">Instant Rollback</p>
            <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              Recover in{' '}<span className="text-gradient">seconds</span>
            </h2>
          </header>

          <div className="max-w-3xl mx-auto">
            {/* Simulation window */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold text-white">Incident Timeline</span>
                </div>
                <button
                  onClick={startSimulation}
                  disabled={isPlaying}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isPlaying 
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-teal-500 text-white hover:bg-teal-600'
                  }`}
                >
                  {isPlaying ? 'Running...' : 'Run Simulation'}
                </button>
              </div>

              {/* Timeline */}
              <div className="p-6">
                <div className="space-y-4">
                  {INCIDENT_STEPS.map((step, idx) => (
                    <div 
                      key={step.time}
                      className={`flex items-start gap-4 transition-all duration-300 ${
                        idx <= incidentStep ? 'opacity-100' : 'opacity-30'
                      }`}
                    >
                      <span className="text-sm text-slate-500 font-mono w-14">{step.time}</span>
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                        step.type === 'alert' ? 'bg-red-400' :
                        step.type === 'action' ? 'bg-amber-400' :
                        step.type === 'success' ? 'bg-green-400' :
                        'bg-slate-500'
                      }`} />
                      <p className={`text-sm ${
                        step.type === 'success' ? 'text-green-400' : 'text-slate-300'
                      }`}>
                        {step.event}
                      </p>
                    </div>
                  ))}
                </div>

                {incidentStep >= INCIDENT_STEPS.length - 1 && (
                  <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="font-medium text-white">Total time to resolution: <span className="text-green-400">2 minutes</span></p>
                        <p className="text-sm text-slate-500">Without feature flags: ~45 minutes (redeploy)</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Metrics */}
        <div>
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight">
              The impact of feature flags
            </h3>
          </header>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <div className="rounded-2xl border border-red-500/30 bg-red-950/10 p-8">
              <div className="flex items-center gap-2 mb-6">
                <TrendingDown className="w-5 h-5 text-red-400" />
                <h4 className="text-lg font-semibold text-white">Without FeatureFlag</h4>
              </div>
              <div className="space-y-4">
                {Object.entries(METRICS.before).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-mono text-red-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-green-500/30 bg-green-950/10 p-8">
              <div className="flex items-center gap-2 mb-6">
                <Flag className="w-5 h-5 text-green-400" />
                <h4 className="text-lg font-semibold text-white">With FeatureFlag</h4>
              </div>
              <div className="space-y-4">
                {Object.entries(METRICS.after).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-mono text-green-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-slate-800">
            {[
              { value: '10K+', label: 'Teams' },
              { value: '1B+', label: 'Flag checks/day' },
              { value: '<1ms', label: 'Evaluation time' },
              { value: '99.99%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
