import { ArrowRight, Activity, Gauge, TrendingUp, Zap, Globe, Search, CheckCircle2, AlertTriangle, XCircle, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

type ScanPhase = 'idle' | 'scanning' | 'results'

interface VitalResult {
  name: string
  fullName: string
  value: string
  score: number
  status: 'good' | 'warning' | 'bad'
  target: string
}

// Simulated results based on random generation
const generateResults = (): VitalResult[] => {
  const lcpScore = Math.floor(Math.random() * 40) + 60
  const fidScore = Math.floor(Math.random() * 30) + 70
  const clsScore = Math.floor(Math.random() * 35) + 65
  const inpScore = Math.floor(Math.random() * 35) + 65
  const ttfbScore = Math.floor(Math.random() * 40) + 55
  
  const getStatus = (score: number): 'good' | 'warning' | 'bad' => {
    if (score >= 90) return 'good'
    if (score >= 50) return 'warning'
    return 'bad'
  }
  
  return [
    { name: 'LCP', fullName: 'Largest Contentful Paint', value: `${(2.5 - (lcpScore / 100) * 2).toFixed(1)}s`, score: lcpScore, status: getStatus(lcpScore), target: '< 2.5s' },
    { name: 'FID', fullName: 'First Input Delay', value: `${Math.floor(100 - (fidScore / 100) * 80)}ms`, score: fidScore, status: getStatus(fidScore), target: '< 100ms' },
    { name: 'CLS', fullName: 'Cumulative Layout Shift', value: `${(0.25 - (clsScore / 100) * 0.2).toFixed(2)}`, score: clsScore, status: getStatus(clsScore), target: '< 0.1' },
    { name: 'INP', fullName: 'Interaction to Next Paint', value: `${Math.floor(200 - (inpScore / 100) * 150)}ms`, score: inpScore, status: getStatus(inpScore), target: '< 200ms' },
    { name: 'TTFB', fullName: 'Time to First Byte', value: `${Math.floor(600 - (ttfbScore / 100) * 400)}ms`, score: ttfbScore, status: getStatus(ttfbScore), target: '< 200ms' },
  ]
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [url, setUrl] = useState('')
  const [phase, setPhase] = useState<ScanPhase>('idle')
  const [scanProgress, setScanProgress] = useState(0)
  const [results, setResults] = useState<VitalResult[]>([])
  const [overallScore, setOverallScore] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  
  useHeroAnimation(sectionRef)

  // Handle scan initiation
  const handleScan = () => {
    if (!url.trim() || phase === 'scanning') return
    
    setPhase('scanning')
    setScanProgress(0)
    
    // Simulate scanning progress
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
    
    // Complete scan after delay
    setTimeout(() => {
      clearInterval(progressInterval)
      setScanProgress(100)
      
      const newResults = generateResults()
      setResults(newResults)
      
      const avgScore = Math.round(newResults.reduce((acc, v) => acc + v.score, 0) / newResults.length)
      setOverallScore(avgScore)
      
      // Show confetti if score is good
      if (avgScore >= 85) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }
      
      setTimeout(() => {
        setPhase('results')
      }, 300)
    }, 2500)
  }

  // Reset to scan again
  const handleReset = () => {
    setPhase('idle')
    setResults([])
    setOverallScore(0)
  }

  // Example URLs
  const exampleUrls = ['stripe.com', 'linear.app', 'vercel.com']

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 perf-grid opacity-30" />
      
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                backgroundColor: ['#a855f7', '#10b981', '#3b82f6', '#f59e0b'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1.5 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            data-hero-badge
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2"
          >
            <Activity className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Auditoría de rendimiento gratuita</span>
          </div>

          {/* Title */}
          <h1 
            data-hero-title
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="block">¿Qué tan rápido es</span>
            <span className="block text-gradient">tu sitio web?</span>
          </h1>

          <p 
            data-hero-description
            className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl mb-10"
          >
            Ingresa tu URL y obtén un análisis instantáneo de Core Web Vitals. 
            Sin necesidad de registro.
          </p>

          {/* URL Input Scanner */}
          <div data-hero-cta className="w-full max-w-2xl mx-auto">
            {phase === 'idle' && (
              <div className="space-y-4">
                <div className="relative flex items-center">
                  <Globe className="absolute left-4 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                    placeholder="Ingresa la URL de tu sitio web..."
                    className="w-full pl-12 pr-32 py-4 rounded-xl bg-slate-900/80 border border-purple-500/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-lg"
                  />
                  <button
                    onClick={handleScan}
                    disabled={!url.trim()}
                    className="absolute right-2 btn-primary flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Search className="h-4 w-4" />
                    Analizar
                  </button>
                </div>
                
                {/* Example URLs */}
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                  <span>Prueba:</span>
                  {exampleUrls.map((example) => (
                    <button
                      key={example}
                      onClick={() => setUrl(example)}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Scanning Phase */}
            {phase === 'scanning' && (
              <div className="rounded-2xl border border-purple-500/20 bg-slate-900/80 p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-lg text-white">Analizando {url}...</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-200"
                    style={{ width: `${Math.min(scanProgress, 100)}%` }}
                  />
                </div>
                
                {/* Scan steps */}
                <div className="grid grid-cols-5 gap-2 text-xs text-slate-500">
                  {['DNS', 'Connect', 'TTFB', 'Render', 'Vitals'].map((step, i) => (
                    <div 
                      key={step}
                      className={`text-center transition-colors ${scanProgress > (i + 1) * 20 ? 'text-purple-400' : ''}`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results Phase */}
            {phase === 'results' && (
              <div className="space-y-6">
                {/* Overall Score */}
                <div className="rounded-2xl border border-purple-500/20 bg-slate-900/80 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-400">{url}</span>
                      <button
                        onClick={handleReset}
                        className="text-xs text-purple-400 hover:text-purple-300"
                      >
                        Analizar otro
                      </button>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      overallScore >= 90 ? 'bg-green-500/20 text-green-400' :
                      overallScore >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {overallScore >= 90 ? <CheckCircle2 className="w-4 h-4" /> :
                       overallScore >= 50 ? <AlertTriangle className="w-4 h-4" /> :
                       <XCircle className="w-4 h-4" />}
                      {overallScore >= 90 ? 'Excelente' : overallScore >= 50 ? 'Necesita mejoras' : 'Pobre'}
                    </div>
                  </div>

                  {/* Big Score Display */}
                  <div className="text-center mb-8">
                    <div className="relative inline-flex items-center justify-center">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle cx="64" cy="64" r="56" fill="transparent" stroke="#1e293b" strokeWidth="8" />
                        <circle 
                          cx="64" 
                          cy="64" 
                          r="56" 
                          fill="transparent" 
                          strokeWidth="8"
                          strokeLinecap="round"
                          className={`transition-all duration-1000 ${
                            overallScore >= 90 ? 'stroke-green-500' :
                            overallScore >= 50 ? 'stroke-yellow-500' :
                            'stroke-red-500'
                          }`}
                          style={{ 
                            strokeDasharray: '352',
                            strokeDashoffset: 352 - (352 * overallScore / 100) 
                          }} 
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-white">{overallScore}</span>
                        <span className="text-xs text-slate-500">/ 100</span>
                      </div>
                    </div>
                  </div>

                  {/* Individual Vitals */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {results.map((vital) => (
                      <div 
                        key={vital.name}
                        className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-white text-sm">{vital.name}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            vital.status === 'good' ? 'bg-green-500' :
                            vital.status === 'warning' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`} />
                        </div>
                        <p className={`text-lg font-mono ${
                          vital.status === 'good' ? 'text-green-400' :
                          vital.status === 'warning' ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {vital.value}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Objetivo: {vital.target}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA after results */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold">
                    <Sparkles className="h-5 w-5" />
                    Obtén Monitoreo en Tiempo Real
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Stats - only show when idle */}
          {phase === 'idle' && (
            <div 
              data-hero-stats
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400"
            >
              {[
                { icon: Gauge, value: '50B+', label: 'Vistas rastreadas' },
                { icon: Zap, value: '<50ms', label: 'Latencia p99' },
                { icon: TrendingUp, value: '3K+', label: 'Equipos' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-purple-400" />
                  <div>
                    <span className="text-xl font-bold text-purple-400">{stat.value}</span>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </section>
  )
}
