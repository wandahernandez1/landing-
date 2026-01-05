import { ArrowRight, Search, CheckCircle2, XCircle, Globe, Code, FileText, TrendingUp, AlertTriangle } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

type Phase = 'idle' | 'scanning' | 'results'

interface SEOCheck {
  id: string
  label: string
  category: 'critical' | 'important' | 'minor'
  status: 'pass' | 'fail' | 'warning' | 'pending'
  detail?: string
}

const generateSEOResults = (): SEOCheck[] => [
  { id: 'title', label: 'Meta title present', category: 'critical', status: Math.random() > 0.2 ? 'pass' : 'fail', detail: 'Title: 58 characters' },
  { id: 'description', label: 'Meta description optimal', category: 'critical', status: Math.random() > 0.3 ? 'pass' : 'warning', detail: 'Length: 142/160 chars' },
  { id: 'canonical', label: 'Canonical URL set', category: 'critical', status: Math.random() > 0.1 ? 'pass' : 'fail' },
  { id: 'h1', label: 'Single H1 tag', category: 'critical', status: Math.random() > 0.2 ? 'pass' : 'fail' },
  { id: 'og', label: 'Open Graph tags complete', category: 'important', status: Math.random() > 0.4 ? 'pass' : 'warning', detail: 'Missing: og:image' },
  { id: 'twitter', label: 'Twitter Card meta', category: 'important', status: Math.random() > 0.5 ? 'pass' : 'fail' },
  { id: 'jsonld', label: 'JSON-LD schema present', category: 'important', status: Math.random() > 0.4 ? 'pass' : 'fail' },
  { id: 'robots', label: 'Robots.txt valid', category: 'important', status: 'pass' },
  { id: 'sitemap', label: 'Sitemap.xml accessible', category: 'important', status: Math.random() > 0.2 ? 'pass' : 'fail' },
  { id: 'mobile', label: 'Mobile viewport set', category: 'critical', status: 'pass' },
  { id: 'https', label: 'HTTPS enabled', category: 'critical', status: 'pass' },
  { id: 'images', label: 'Image alt attributes', category: 'minor', status: Math.random() > 0.6 ? 'pass' : 'warning', detail: '3 images missing alt' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [url, setUrl] = useState('')
  const [phase, setPhase] = useState<Phase>('idle')
  const [checks, setChecks] = useState<SEOCheck[]>([])
  const [currentCheckIndex, setCurrentCheckIndex] = useState(0)
  const [score, setScore] = useState(0)
  
  useHeroAnimation(sectionRef)

  // Handle scan
  const handleScan = () => {
    if (!url.trim() || phase === 'scanning') return
    
    setPhase('scanning')
    setCurrentCheckIndex(0)
    const newChecks = generateSEOResults().map(c => ({ ...c, status: 'pending' as const }))
    setChecks(newChecks)
  }

  // Animate checks appearing one by one
  useEffect(() => {
    if (phase !== 'scanning') return
    
    if (currentCheckIndex >= checks.length) {
      // All checks done, calculate score
      const results = generateSEOResults()
      setChecks(results)
      const passed = results.filter(c => c.status === 'pass').length
      const total = results.length
      setScore(Math.round((passed / total) * 100))
      setPhase('results')
      return
    }

    const timer = setTimeout(() => {
      setCurrentCheckIndex(prev => prev + 1)
    }, 200)
    
    return () => clearTimeout(timer)
  }, [phase, currentCheckIndex, checks.length])

  // Reset
  const handleReset = () => {
    setPhase('idle')
    setChecks([])
    setUrl('')
    setScore(0)
    setCurrentCheckIndex(0)
  }

  // Count by status
  const passCount = checks.filter(c => c.status === 'pass').length
  const failCount = checks.filter(c => c.status === 'fail').length
  const warnCount = checks.filter(c => c.status === 'warning').length

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 seo-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            data-hero-badge
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2"
          >
            <Search className="h-4 w-4 text-green-400" />
            <span className="text-sm text-green-300">Free instant SEO audit</span>
          </div>

          {/* Title */}
          <h1 
            data-hero-title
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="block">Is your site</span>
            <span className="block text-gradient">SEO-ready?</span>
          </h1>

          <p 
            data-hero-description
            className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl mb-10"
          >
            Enter your URL and get an instant technical SEO audit. 
            No signup needed.
          </p>

          {/* Scanner UI */}
          <div data-hero-cta className="w-full max-w-3xl mx-auto">
            {phase === 'idle' && (
              <div className="space-y-4">
                <div className="relative flex items-center">
                  <Globe className="absolute left-4 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                    placeholder="Enter your website URL..."
                    className="w-full pl-12 pr-32 py-4 rounded-xl bg-slate-900/80 border border-green-500/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-lg"
                  />
                  <button
                    onClick={handleScan}
                    disabled={!url.trim()}
                    className="absolute right-2 btn-primary flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold disabled:opacity-50"
                  >
                    <Search className="h-4 w-4" />
                    Audit
                  </button>
                </div>
                
                {/* Example URLs */}
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                  <span>Try:</span>
                  {['vercel.com', 'stripe.com', 'linear.app'].map((example) => (
                    <button
                      key={example}
                      onClick={() => setUrl(example)}
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Scanning / Results */}
            {(phase === 'scanning' || phase === 'results') && (
              <div className="rounded-2xl border border-green-500/20 bg-slate-900/80 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/80">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-slate-400">{url}</span>
                  </div>
                  {phase === 'results' && (
                    <button
                      onClick={handleReset}
                      className="text-xs text-green-400 hover:text-green-300"
                    >
                      Scan another
                    </button>
                  )}
                </div>

                {/* Score display (results only) */}
                {phase === 'results' && (
                  <div className="p-6 border-b border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`text-5xl font-bold ${
                          score >= 80 ? 'text-green-400' :
                          score >= 50 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {score}
                        </div>
                        <div className="text-left">
                          <p className="text-white font-medium">SEO Score</p>
                          <p className="text-sm text-slate-500">
                            {score >= 80 ? 'Looking great!' : score >= 50 ? 'Room for improvement' : 'Needs attention'}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="text-center">
                          <span className="block text-xl font-bold text-green-400">{passCount}</span>
                          <span className="text-slate-500">Passed</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-xl font-bold text-yellow-400">{warnCount}</span>
                          <span className="text-slate-500">Warnings</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-xl font-bold text-red-400">{failCount}</span>
                          <span className="text-slate-500">Failed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Checklist */}
                <div className="p-4 max-h-[350px] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(phase === 'scanning' ? checks.slice(0, currentCheckIndex) : checks).map((check) => (
                      <div 
                        key={check.id}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          check.status === 'pass' ? 'bg-green-500/10' :
                          check.status === 'warning' ? 'bg-yellow-500/10' :
                          check.status === 'fail' ? 'bg-red-500/10' :
                          'bg-slate-800/50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          check.status === 'pass' ? 'bg-green-500' :
                          check.status === 'warning' ? 'bg-yellow-500' :
                          check.status === 'fail' ? 'bg-red-500' :
                          'bg-slate-600'
                        }`}>
                          {check.status === 'pass' && <CheckCircle2 className="w-3 h-3 text-white" />}
                          {check.status === 'warning' && <AlertTriangle className="w-3 h-3 text-white" />}
                          {check.status === 'fail' && <XCircle className="w-3 h-3 text-white" />}
                          {check.status === 'pending' && <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />}
                        </div>
                        <div className="flex-1 text-left">
                          <span className={`text-sm ${
                            check.status === 'pass' ? 'text-slate-400' : 'text-white'
                          }`}>
                            {check.label}
                          </span>
                          {check.detail && check.status !== 'pass' && (
                            <p className="text-xs text-slate-500 mt-0.5">{check.detail}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {phase === 'scanning' && (
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
                      <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                      Analyzing {currentCheckIndex}/{checks.length}...
                    </div>
                  )}
                </div>

                {/* CTA after results */}
                {phase === 'results' && (
                  <div className="p-4 border-t border-slate-700/50 bg-slate-800/30">
                    <a
                      href="#pricing"
                      className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold"
                    >
                      <TrendingUp className="h-5 w-5" />
                      Get Full Report + Fix Suggestions
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          {phase === 'idle' && (
            <div 
              data-hero-stats
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400"
            >
              {[
                { icon: Search, value: '50K+', label: 'Sites audited' },
                { icon: TrendingUp, value: '+42%', label: 'Avg. traffic boost' },
                { icon: Code, value: '2K+', label: 'Devs trust us' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="text-xl font-bold text-green-400">{stat.value}</span>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
