import { ArrowRight, Bug, Code, Zap, Copy, CheckCircle } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Integration options
const INTEGRATIONS = [
  { name: 'React', code: `import { FMProvider } from '@fm/react'

<FMProvider dsn="YOUR_DSN">
  <App />
</FMProvider>` },
  { name: 'Next.js', code: `// next.config.js
const { withFM } = require('@fm/nextjs')

module.exports = withFM({
  dsn: 'YOUR_DSN'
})` },
  { name: 'Vue', code: `import { createFM } from '@fm/vue'

app.use(createFM({
  dsn: 'YOUR_DSN'
}))` },
  { name: 'JavaScript', code: `<script src="https://cdn.fm.io/fm.min.js"></script>
<script>
  FM.init({ dsn: 'YOUR_DSN' })
</script>` },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedFramework, setSelectedFramework] = useState('React')
  const [copied, setCopied] = useState(false)

  const currentCode = INTEGRATIONS.find(i => i.name === selectedFramework)?.code || ''

  const copyCode = () => {
    navigator.clipboard.writeText(currentCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 error-grid opacity-20" />
      <div className="container-custom relative z-10">

        {/* Integration Setup */}
        <div className="max-w-4xl mx-auto mb-20">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <Zap className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">2-minute setup</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Works with your{' '}<span className="text-gradient">stack</span>
            </h2>
          </header>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Framework tabs */}
            <div className="flex border-b border-slate-800 bg-slate-900 overflow-x-auto">
              {INTEGRATIONS.map((integration) => (
                <button
                  key={integration.name}
                  onClick={() => setSelectedFramework(integration.name)}
                  className={cn(
                    'px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap',
                    selectedFramework === integration.name
                      ? 'text-red-400 border-b-2 border-red-400 bg-red-500/5'
                      : 'text-slate-500 hover:text-white'
                  )}
                >
                  {integration.name}
                </button>
              ))}
            </div>

            {/* Code block */}
            <div className="relative">
              <button
                onClick={copyCode}
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-sm transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-slate-300 font-mono">{currentCode}</code>
              </pre>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Source maps', 'Auto-instrumentation', 'Error boundaries', 'Performance'].map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800"
              >
                <CheckCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-red-400 rounded-full opacity-30 animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600 rounded-2xl shadow-xl shadow-red-500/30">
              <Bug className="h-10 w-10 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Stop guessing. Start debugging.
          </h3>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join 15,000+ teams who catch errors before their users do.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              <Bug className="h-5 w-5" />
              Start Free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium flex items-center gap-2">
              <Code className="h-5 w-5" />
              View Docs
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Free tier forever • No credit card required • 2-minute setup
          </p>
        </div>
      </div>
    </section>
  )
}
