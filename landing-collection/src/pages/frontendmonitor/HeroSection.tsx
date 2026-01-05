import { ArrowRight, Bug, AlertCircle, RefreshCw, Cpu, Users, Play, Clock } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Simulated real-time errors
const ERROR_TEMPLATES = [
  { type: 'TypeError', message: "Cannot read properties of undefined (reading 'map')", file: 'Dashboard.tsx', line: 42, browser: 'Chrome 120', os: 'Windows' },
  { type: 'NetworkError', message: 'Failed to fetch /api/users - 504 Gateway Timeout', file: 'api/client.ts', line: 89, browser: 'Safari 17', os: 'macOS' },
  { type: 'ReferenceError', message: "window is not defined", file: 'utils/analytics.ts', line: 12, browser: 'Node.js', os: 'Server' },
  { type: 'SyntaxError', message: "Unexpected token '<'", file: 'App.tsx', line: 1, browser: 'Firefox 121', os: 'Linux' },
  { type: 'ChunkLoadError', message: "Loading chunk 5 failed", file: 'webpack/runtime', line: 0, browser: 'Chrome 120', os: 'Android' },
  { type: 'TypeError', message: "null is not an object (evaluating 'user.name')", file: 'Profile.tsx', line: 23, browser: 'Safari 17', os: 'iOS' },
  { type: 'NetworkError', message: 'AbortError: The user aborted a request', file: 'hooks/useData.ts', line: 45, browser: 'Edge 120', os: 'Windows' },
  { type: 'RangeError', message: 'Maximum call stack size exceeded', file: 'components/Tree.tsx', line: 78, browser: 'Chrome 120', os: 'macOS' },
]

interface LiveError {
  id: number
  timestamp: Date
  type: string
  message: string
  file: string
  line: number
  browser: string
  os: string
  isNew: boolean
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [errors, setErrors] = useState<LiveError[]>([])
  const [errorCount, setErrorCount] = useState(847291)
  const [selectedError, setSelectedError] = useState<LiveError | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  
  useHeroAnimation(sectionRef)

  // Add new errors periodically
  useEffect(() => {
    if (isPaused) return
    
    // Initial errors
    const initialErrors: LiveError[] = ERROR_TEMPLATES.slice(0, 3).map((template, i) => ({
      id: Date.now() - i * 1000,
      timestamp: new Date(Date.now() - i * 5000),
      ...template,
      isNew: false
    }))
    setErrors(initialErrors)

    // Add new error every 3 seconds
    const interval = setInterval(() => {
      const template = ERROR_TEMPLATES[Math.floor(Math.random() * ERROR_TEMPLATES.length)]
      const newError: LiveError = {
        id: Date.now(),
        timestamp: new Date(),
        ...template,
        isNew: true
      }
      
      setErrors(prev => {
        const updated = [newError, ...prev.slice(0, 5)]
        // Remove "new" flag after animation
        setTimeout(() => {
          setErrors(current => current.map(e => ({ ...e, isNew: false })))
        }, 500)
        return updated
      })
      
      setErrorCount(prev => prev + 1)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isPaused])

  // Format relative time
  const getRelativeTime = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 5) return 'just now'
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    return `${minutes}m ago`
  }

  // Get error color
  const getErrorColor = (type: string) => {
    if (type.includes('Network')) return 'text-amber-400 bg-amber-500/20 border-amber-500/30'
    if (type.includes('Reference') || type.includes('Syntax')) return 'text-purple-400 bg-purple-500/20 border-purple-500/30'
    return 'text-red-400 bg-red-500/20 border-red-500/30'
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 error-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Live counter badge */}
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              <span className="text-sm text-red-300 font-mono">
                {errorCount.toLocaleString()} errors captured today
              </span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">Watch errors happen</span>
              <span className="block text-gradient">in real-time.</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              See live frontend errors streaming in. Complete stack traces, session replay, 
              and user context. Debug in minutes, not hours.
            </p>

            <div 
              data-hero-cta
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center">
                Start Monitoring
                <ArrowRight className="h-5 w-5" />
              </a>
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center"
              >
                {isPaused ? <Play className="h-5 w-5" /> : <RefreshCw className="h-5 w-5" />}
                {isPaused ? 'Resume Feed' : 'Live Demo'}
              </button>
            </div>

            {/* Stats */}
            <div 
              data-hero-stats
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Bug, value: '<100ms', label: 'Capture latency' },
                { icon: Cpu, value: '0.1%', label: 'CPU overhead' },
                { icon: Users, value: '5K+', label: 'Teams' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4 text-red-400" />
                  <div>
                    <span className="text-lg font-bold text-red-400">{stat.value}</span>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Error Feed */}
          <div data-hero-visual className="relative">
            <div className="rounded-2xl border border-red-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-red-500/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <Bug className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-slate-300">Error Stream</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded ${isPaused ? 'bg-slate-700 text-slate-400' : 'bg-red-500/20 text-red-400'}`}>
                    {isPaused ? 'PAUSED' : 'LIVE'}
                  </span>
                </div>
              </div>

              {/* Error List */}
              <div className="divide-y divide-slate-800/50 max-h-[400px] overflow-y-auto">
                {errors.map((error) => (
                  <div 
                    key={error.id}
                    onClick={() => setSelectedError(error)}
                    className={`p-4 cursor-pointer transition-all ${
                      error.isNew ? 'animate-slide-in bg-red-500/10' : 'hover:bg-slate-800/50'
                    } ${selectedError?.id === error.id ? 'bg-slate-800/70' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <AlertCircle className={`w-4 h-4 ${
                          error.type.includes('Network') ? 'text-amber-400' :
                          error.type.includes('Reference') ? 'text-purple-400' :
                          'text-red-400'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-xs font-mono px-2 py-0.5 rounded border ${getErrorColor(error.type)}`}>
                            {error.type}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {getRelativeTime(error.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-300 truncate">{error.message}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                          <span className="font-mono">{error.file}:{error.line}</span>
                          <span className="text-slate-600">•</span>
                          <span>{error.browser}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer with SDK snippet */}
              <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-800/50">
                <p className="text-xs text-slate-500 mb-2">Add one line to capture errors:</p>
                <code className="text-xs font-mono text-red-400 bg-slate-900/50 px-3 py-1.5 rounded block">
                  FrontendMonitor.init('YOUR_API_KEY')
                </code>
              </div>
            </div>

            {/* New error indicator */}
            {!isPaused && (
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
