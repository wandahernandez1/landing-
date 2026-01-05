import { ArrowRight, Activity, Code, Globe, Zap } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/shared/utils/cn'

// Live score animation
const SCORES = [
  { label: 'Performance', score: 92, color: 'green' },
  { label: 'Accessibility', score: 98, color: 'green' },
  { label: 'Best Practices', score: 95, color: 'green' },
  { label: 'SEO', score: 100, color: 'green' },
]

// Setup snippet
const SETUP_CODE = `<script defer src="https://cdn.performancelab.io/rum.js"
  data-site-id="YOUR_SITE_ID">
</script>`

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animatedScores, setAnimatedScores] = useState(SCORES.map(() => 0))
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Animate scores when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          SCORES.forEach((item, idx) => {
            let current = 0
            const interval = setInterval(() => {
              current += 2
              if (current >= item.score) {
                current = item.score
                clearInterval(interval)
              }
              setAnimatedScores(prev => {
                const newScores = [...prev]
                newScores[idx] = current
                return newScores
              })
            }, 20)
          })
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const copyCode = () => {
    navigator.clipboard.writeText(SETUP_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 perf-grid opacity-20" />
      <div className="container-custom relative z-10">

        {/* Live Score Demo */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Score circles */}
              <div className="grid grid-cols-2 gap-6">
                {SCORES.map((item, idx) => (
                  <div key={item.label} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      {/* Background circle */}
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-slate-800"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeDasharray={`${(animatedScores[idx] / 100) * 276} 276`}
                          strokeLinecap="round"
                          className={cn(
                            'transition-all duration-500',
                            animatedScores[idx] >= 90 ? 'text-green-400' :
                            animatedScores[idx] >= 50 ? 'text-amber-400' : 'text-red-400'
                          )}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                        {animatedScores[idx]}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">
                  See your{' '}<span className="text-gradient">real</span>{' '}score
                </h2>
                <p className="text-slate-400 mb-6">
                  Lab scores are just the beginning. See how real users experience your site.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
                    <Globe className="w-5 h-5" />
                    Analyze your site
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Setup */}
        <div className="max-w-3xl mx-auto mb-20">
          <header className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">One line setup</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Start monitoring in 30 seconds
            </h3>
          </header>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900">
              <span className="text-sm text-slate-500 font-mono">index.html</span>
              <button
                onClick={copyCode}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                {copied ? '✓ Copied!' : 'Copy code'}
              </button>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm text-slate-300 font-mono">{SETUP_CODE}</code>
            </pre>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            That's it! Data will start flowing in within minutes.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-purple-400 rounded-full opacity-30 animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-xl shadow-purple-500/30">
              <Activity className="h-10 w-10 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to optimize?
          </h3>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join thousands of teams who monitor their real user experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              <Zap className="h-5 w-5" />
              Start free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium">
              Schedule demo
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Free tier forever • GDPR compliant • No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}
