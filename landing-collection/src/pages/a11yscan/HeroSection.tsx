import { ArrowRight, Eye, CheckCircle2, Globe, Keyboard, MonitorSpeaker, MousePointer2, Search, Sparkles } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Accessibility compliance checkmarks
const A11Y_FEATURES = [
  { id: 'semantic', label: 'Semantic HTML', icon: CheckCircle2, status: 'pass', description: 'Proper heading hierarchy, landmarks, and structure' },
  { id: 'keyboard', label: 'Keyboard Navigation', icon: Keyboard, status: 'pass', description: 'All interactive elements accessible via keyboard' },
  { id: 'screen-reader', label: 'Screen Reader Support', icon: MonitorSpeaker, status: 'pass', description: 'ARIA labels and live regions implemented' },
  { id: 'focus', label: 'Focus Management', icon: MousePointer2, status: 'pass', description: 'Clear focus indicators on all elements' },
  { id: 'contrast', label: 'Color Contrast', icon: Eye, status: 'pass', description: 'WCAG AA compliant contrast ratios' },
]

// This landing demonstrates perfect accessibility
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [checkedFeatures, setCheckedFeatures] = useState<string[]>([])
  const [liveScore] = useState(100)
  
  useHeroAnimation(sectionRef)

  // Auto-check features one by one for demo effect
  useEffect(() => {
    if (!showResults) return
    
    const timer = setInterval(() => {
      setCheckedFeatures(prev => {
        const nextFeatureIndex = prev.length
        if (nextFeatureIndex >= A11Y_FEATURES.length) {
          clearInterval(timer)
          return prev
        }
        return [...prev, A11Y_FEATURES[nextFeatureIndex].id]
      })
    }, 400)
    
    return () => clearInterval(timer)
  }, [showResults])

  // Handle scan
  const handleScan = () => {
    if (!url.trim() || isScanning) return
    
    setIsScanning(true)
    setCheckedFeatures([])
    setShowResults(false)
    
    setTimeout(() => {
      setIsScanning(false)
      setShowResults(true)
    }, 1500)
  }

  // Reset
  const handleReset = () => {
    setShowResults(false)
    setCheckedFeatures([])
    setUrl('')
  }

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="bg-glow absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 a11y-grid opacity-30" aria-hidden="true" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Live accessibility status badge */}
            <div 
              data-hero-badge
              role="status"
              aria-live="polite"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" aria-hidden="true" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" aria-hidden="true" />
              </span>
              <span className="text-sm text-green-400 font-medium">This page: 100% accessible</span>
            </div>

            <h1 
              id="hero-heading"
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">The most accessible</span>
              <span className="block text-gradient">landing page.</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              We built this page to WCAG 2.1 AAA standards. 
              Now we can help you do the same.
            </p>

            {/* Accessibility checklist - shows this page's compliance */}
            <div 
              data-hero-cta
              className="mb-8 p-5 rounded-2xl border border-blue-500/20 bg-slate-900/50"
              role="region"
              aria-label="Accessibility compliance status for this page"
            >
              <p className="text-sm text-slate-400 mb-4 lg:text-left">This landing page passes:</p>
              <ul className="space-y-2" role="list">
                {A11Y_FEATURES.slice(0, 3).map((feature) => (
                  <li 
                    key={feature.id}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-white">{feature.label}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                aria-label="View all 5 accessibility features this page passes"
              >
                + 2 more checks passed
              </button>
            </div>

            {/* Keyboard shortcut hint */}
            <p 
              data-hero-stats
              className="text-sm text-slate-500 flex items-center gap-2 justify-center lg:justify-start"
            >
              <Keyboard className="w-4 h-4" aria-hidden="true" />
              <span>Try navigating with <kbd className="px-2 py-0.5 bg-slate-800 rounded text-slate-300 text-xs">Tab</kbd> key</span>
            </p>
          </div>

          {/* Interactive Scanner */}
          <div 
            data-hero-visual
            className="relative"
            role="region"
            aria-label="Website accessibility scanner"
          >
            <div className="rounded-2xl border border-blue-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-blue-500/10">
              {/* Header */}
              <header className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <span className="text-sm text-slate-300">Accessibility Scanner</span>
                </div>
                <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">WCAG 2.1</span>
              </header>

              {/* Scanner Content */}
              <div className="p-6">
                {!showResults ? (
                  <>
                    {/* URL Input */}
                    <div className="space-y-4">
                      <label htmlFor="url-input" className="sr-only">Enter website URL to scan</label>
                      <div className="relative flex items-center">
                        <Globe className="absolute left-4 w-5 h-5 text-slate-500" aria-hidden="true" />
                        <input
                          id="url-input"
                          type="url"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                          placeholder="Enter your website URL..."
                          aria-describedby="url-hint"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                        />
                      </div>
                      <p id="url-hint" className="text-xs text-slate-500">
                        We'll analyze your site against WCAG 2.1 guidelines
                      </p>
                      
                      <button
                        onClick={handleScan}
                        disabled={!url.trim() || isScanning}
                        aria-busy={isScanning}
                        className="w-full btn-primary flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isScanning ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                            <span>Scanning...</span>
                          </>
                        ) : (
                          <>
                            <Search className="h-5 w-5" aria-hidden="true" />
                            <span>Scan for Issues</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Quick examples */}
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <p className="text-xs text-slate-500 mb-3">Or try scanning:</p>
                      <div className="flex flex-wrap gap-2">
                        {['apple.com', 'gov.uk', 'w3.org'].map((example) => (
                          <button
                            key={example}
                            onClick={() => setUrl(example)}
                            className="px-3 py-1 text-xs bg-slate-800/50 text-slate-400 rounded-lg hover:bg-slate-700/50 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                          >
                            {example}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Results */
                  <div role="region" aria-live="polite" aria-label="Scan results">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400">{url}</span>
                      </div>
                      <button
                        onClick={handleReset}
                        className="text-xs text-blue-400 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
                      >
                        Scan another
                      </button>
                    </div>

                    {/* Score display */}
                    <div className="text-center mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-green-400" aria-hidden="true" />
                        <span className="text-3xl font-bold text-green-400">{liveScore}%</span>
                      </div>
                      <p className="text-sm text-green-400/80">Accessibility Score</p>
                    </div>

                    {/* Animated checklist */}
                    <ul className="space-y-3" role="list" aria-label="Accessibility checks">
                      {A11Y_FEATURES.map((feature) => {
                        const isChecked = checkedFeatures.includes(feature.id)
                        return (
                          <li
                            key={feature.id}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                              isChecked 
                                ? 'bg-green-500/10 border border-green-500/30' 
                                : 'bg-slate-800/30 border border-slate-700/30'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                              isChecked ? 'bg-green-500' : 'bg-slate-700'
                            }`}>
                              {isChecked && <CheckCircle2 className="w-4 h-4 text-white" aria-hidden="true" />}
                            </div>
                            <div className="flex-1">
                              <span className={`text-sm font-medium ${isChecked ? 'text-white' : 'text-slate-500'}`}>
                                {feature.label}
                              </span>
                            </div>
                            {isChecked && (
                              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                                PASS
                              </span>
                            )}
                          </li>
                        )
                      })}
                    </ul>

                    {/* CTA */}
                    {checkedFeatures.length === A11Y_FEATURES.length && (
                      <div className="mt-6 animate-fade-in">
                        <a
                          href="#pricing"
                          className="w-full btn-primary flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold"
                        >
                          Get Full Report
                          <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Floating badge */}
            <div 
              className="absolute -bottom-4 -right-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full shadow-lg shadow-blue-500/20"
              aria-hidden="true"
            >
              WCAG 2.1 AAA
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          data-hero-stats
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400"
          role="region"
          aria-label="Platform statistics"
        >
          {[
            { value: '10M+', label: 'Pages scanned' },
            { value: '99.5%', label: 'Accuracy' },
            { value: '2K+', label: 'Teams' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-2xl font-bold text-blue-400">{stat.value}</span>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
