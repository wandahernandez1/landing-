import { GitBranch, CheckCircle, XCircle, Clock, Terminal, Play, AlertTriangle } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/shared/utils/cn'

// CI/CD Integrations
const CI_PLATFORMS = [
  { name: 'GitHub Actions', logo: '⚙️' },
  { name: 'GitLab CI', logo: '🦊' },
  { name: 'CircleCI', logo: '⭕' },
  { name: 'Jenkins', logo: '🔧' },
  { name: 'Azure DevOps', logo: '☁️' },
]

// Sample CI run
const CI_STEPS = [
  { step: 'Install dependencies', status: 'passed', duration: '12s' },
  { step: 'Build application', status: 'passed', duration: '45s' },
  { step: 'Run unit tests', status: 'passed', duration: '23s' },
  { step: 'A11yScan audit', status: 'running', duration: '...' },
  { step: 'Deploy to staging', status: 'pending', duration: '-' },
]

// Sample audit results
const AUDIT_RESULTS = {
  passed: 42,
  warnings: 3,
  errors: 2,
  details: [
    { rule: 'color-contrast', count: 1, severity: 'error' },
    { rule: 'image-alt', count: 1, severity: 'error' },
    { rule: 'link-name', count: 2, severity: 'warning' },
    { rule: 'heading-order', count: 1, severity: 'warning' },
  ]
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [runningStep, setRunningStep] = useState(3) // A11yScan audit step
  const [showResults, setShowResults] = useState(false)

  // Simulate CI progress
  useEffect(() => {
    if (runningStep === 3 && !showResults) {
      const timer = setTimeout(() => {
        setShowResults(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [runningStep, showResults])

  const resetDemo = () => {
    setShowResults(false)
    setRunningStep(3)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 a11y-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">CI Integration</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Shift-left{' '}<span className="text-gradient">accessibility</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Catch issues before they reach production with CI/CD integration
          </p>
        </header>

        {/* CI Platforms */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CI_PLATFORMS.map((platform) => (
            <div 
              key={platform.name}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800"
            >
              <span className="text-2xl">{platform.logo}</span>
              <span className="text-slate-300 font-medium">{platform.name}</span>
            </div>
          ))}
        </div>

        {/* CI Pipeline Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-3">
                <GitBranch className="w-5 h-5 text-blue-400" />
                <div>
                  <span className="font-medium text-white">a11yscan-demo</span>
                  <span className="text-slate-500 ml-2">#142</span>
                </div>
              </div>
              <button
                onClick={resetDemo}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/30 transition-colors"
              >
                <Play className="w-4 h-4" />
                Re-run
              </button>
            </div>

            {/* Steps */}
            <div className="p-6">
              <div className="space-y-3">
                {CI_STEPS.map((step, idx) => (
                  <div 
                    key={step.step}
                    className={cn(
                      'flex items-center gap-4 px-4 py-3 rounded-xl transition-colors',
                      idx === 3 && !showResults ? 'bg-blue-500/10 border border-blue-500/30' :
                      idx === 3 && showResults && AUDIT_RESULTS.errors > 0 ? 'bg-red-500/10 border border-red-500/30' : ''
                    )}
                  >
                    {step.status === 'passed' || (idx === 3 && showResults && AUDIT_RESULTS.errors === 0) ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : step.status === 'running' && !showResults ? (
                      <div className="w-5 h-5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
                    ) : idx === 3 && showResults && AUDIT_RESULTS.errors > 0 ? (
                      <XCircle className="w-5 h-5 text-red-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-slate-500" />
                    )}
                    <span className={cn(
                      'flex-1',
                      step.status === 'pending' ? 'text-slate-500' : 'text-slate-300'
                    )}>
                      {step.step}
                    </span>
                    <span className="font-mono text-sm text-slate-500">
                      {idx === 3 && showResults ? '8s' : step.duration}
                    </span>
                  </div>
                ))}
              </div>

              {/* Audit Results */}
              {showResults && (
                <div className="mt-6 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold text-white">A11yScan Results</span>
                  </div>

                  {/* Summary */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 rounded-lg bg-green-500/10">
                      <div className="text-2xl font-bold text-green-400">{AUDIT_RESULTS.passed}</div>
                      <div className="text-xs text-slate-500">Passed</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-amber-500/10">
                      <div className="text-2xl font-bold text-amber-400">{AUDIT_RESULTS.warnings}</div>
                      <div className="text-xs text-slate-500">Warnings</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-red-500/10">
                      <div className="text-2xl font-bold text-red-400">{AUDIT_RESULTS.errors}</div>
                      <div className="text-xs text-slate-500">Errors</div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    {AUDIT_RESULTS.details.map((detail) => (
                      <div key={detail.rule} className="flex items-center gap-3 text-sm">
                        <AlertTriangle className={cn(
                          'w-4 h-4',
                          detail.severity === 'error' ? 'text-red-400' : 'text-amber-400'
                        )} />
                        <code className="font-mono text-slate-400">{detail.rule}</code>
                        <span className="text-slate-500">×{detail.count}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-sm text-red-400">
                      ✗ Pipeline failed: {AUDIT_RESULTS.errors} accessibility errors found
                    </span>
                    <a href="#" className="text-sm text-blue-400 hover:underline">
                      View full report →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Config snippet */}
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 bg-slate-900">
              <span className="text-sm text-slate-500 font-mono">.github/workflows/a11y.yml</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-slate-300">{`- name: Run A11yScan
  uses: a11yscan/action@v2
  with:
    url: \${{ env.PREVIEW_URL }}
    fail-on: error  # or 'warning'`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
