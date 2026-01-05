import { TrendingDown, AlertTriangle, Bell, CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/shared/utils/cn'

// Anomaly alerts
const ANOMALY_ALERTS = [
  { id: 1, service: 'EC2', message: 'Unusual spike in compute costs', severity: 'high', increase: '+340%', time: '2 hours ago' },
  { id: 2, service: 'S3', message: 'Data transfer costs increasing', severity: 'medium', increase: '+89%', time: '5 hours ago' },
  { id: 3, service: 'Lambda', message: 'Invocation costs above baseline', severity: 'low', increase: '+45%', time: '1 day ago' },
  { id: 4, service: 'RDS', message: 'Idle database instances detected', severity: 'medium', increase: '+$1,200', time: '2 days ago' },
]

// Savings recommendations
const RECOMMENDATIONS = [
  { action: 'Right-size EC2 instances', potential: 4200, difficulty: 'Easy', automated: true },
  { action: 'Purchase Reserved Instances', potential: 8500, difficulty: 'Medium', automated: false },
  { action: 'Delete unused EBS volumes', potential: 890, difficulty: 'Easy', automated: true },
  { action: 'Move infrequent data to S3 Glacier', potential: 1200, difficulty: 'Medium', automated: true },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<'alerts' | 'recommendations'>('alerts')
  const [dismissedAlerts, setDismissedAlerts] = useState<number[]>([])
  const [newAlert, setNewAlert] = useState(false)

  useEffect(() => {
    // Simulate new alert appearing
    const timer = setTimeout(() => setNewAlert(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const visibleAlerts = ANOMALY_ALERTS.filter(a => !dismissedAlerts.includes(a.id))

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 cloud-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">Smart Alerts</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AI-powered{' '}<span className="text-gradient">anomaly detection</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Get alerted before cost spikes become problems
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Tab selector */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('alerts')}
              className={cn(
                'flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all relative',
                activeTab === 'alerts'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
              )}
            >
              <Bell className="w-4 h-4" />
              Cost Alerts
              {newAlert && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('recommendations')}
              className={cn(
                'flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all',
                activeTab === 'recommendations'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
              )}
            >
              <TrendingDown className="w-4 h-4" />
              Recommendations
            </button>
          </div>

          {/* Alerts panel */}
          {activeTab === 'alerts' && (
            <div className="space-y-4">
              {visibleAlerts.map((alert, idx) => (
                <div 
                  key={alert.id}
                  className={cn(
                    'rounded-xl border bg-slate-900/50 p-5 transition-all',
                    idx === 0 && newAlert ? 'border-red-500/50 animate-pulse' : 'border-slate-800'
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center',
                        alert.severity === 'high' ? 'bg-red-500/20' :
                        alert.severity === 'medium' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                      )}>
                        <AlertTriangle className={cn(
                          'w-5 h-5',
                          alert.severity === 'high' ? 'text-red-400' :
                          alert.severity === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                        )} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white">{alert.service}</span>
                          <span className={cn(
                            'text-xs px-2 py-0.5 rounded-full',
                            alert.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                            alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          )}>
                            {alert.severity}
                          </span>
                        </div>
                        <p className="text-slate-400">{alert.message}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className="text-red-400 font-medium">{alert.increase}</span>
                          <span className="text-slate-600 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {alert.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setDismissedAlerts([...dismissedAlerts, alert.id])}
                        className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {visibleAlerts.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <p>All alerts reviewed!</p>
                </div>
              )}
            </div>
          )}

          {/* Recommendations panel */}
          {activeTab === 'recommendations' && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <h3 className="font-semibold text-white">Optimization Opportunities</h3>
                <span className="text-sm text-green-400">
                  ${RECOMMENDATIONS.reduce((sum, r) => sum + r.potential, 0).toLocaleString()}/mo potential
                </span>
              </div>
              <div className="divide-y divide-slate-800">
                {RECOMMENDATIONS.map((rec, idx) => (
                  <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center',
                        rec.automated ? 'bg-green-500/20' : 'bg-blue-500/20'
                      )}>
                        <TrendingDown className={cn(
                          'w-5 h-5',
                          rec.automated ? 'text-green-400' : 'text-blue-400'
                        )} />
                      </div>
                      <div>
                        <p className="font-medium text-white">{rec.action}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={cn(
                            'text-xs px-2 py-0.5 rounded-full',
                            rec.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          )}>
                            {rec.difficulty}
                          </span>
                          {rec.automated && (
                            <span className="text-xs text-slate-500">Auto-apply available</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold text-green-400">
                        -${rec.potential.toLocaleString()}/mo
                      </span>
                      <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                        Apply <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
