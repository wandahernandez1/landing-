import { ArrowRight, ToggleRight, Github, BookOpen, MessageSquare, Terminal } from 'lucide-react'
import { useRef, useState } from 'react'

// Quick start steps
const QUICK_START = [
  { step: 1, command: 'npm install @featureflag/sdk', label: 'Install SDK' },
  { step: 2, command: 'FF.init({ key: "YOUR_KEY" })', label: 'Initialize' },
  { step: 3, command: 'FF.isEnabled("new-feature")', label: 'Check flag' },
]

// Resources
const RESOURCES = [
  { icon: BookOpen, label: 'Documentation', desc: 'Comprehensive guides', href: '#' },
  { icon: Github, label: 'GitHub', desc: 'Open source SDKs', href: '#' },
  { icon: MessageSquare, label: 'Discord', desc: '2K+ developers', href: '#' },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const copyCommand = (step: number, command: string) => {
    navigator.clipboard.writeText(command)
    setCopiedStep(step)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 flag-grid opacity-20" />
      <div className="container-custom relative z-10">

        {/* Quick Start Terminal */}
        <div className="mx-auto max-w-3xl mb-20">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium text-teal-400">Quick Start</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ship in{' '}<span className="text-gradient">3 steps</span>
            </h2>
          </header>

          {/* Terminal */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-xs text-slate-500 font-mono">terminal</span>
            </div>

            {/* Steps */}
            <div className="p-6 space-y-4">
              {QUICK_START.map(({ step, command, label }) => (
                <div 
                  key={step}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors group cursor-pointer"
                  onClick={() => copyCommand(step, command)}
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm">
                    {step}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 mb-1">{label}</p>
                    <code className="text-sm text-teal-400 font-mono">{command}</code>
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                    {copiedStep === step ? '✓ Copied!' : 'Click to copy'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-teal-400 rounded-full opacity-30 animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl shadow-xl shadow-teal-500/30">
              <ToggleRight className="h-10 w-10 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to ship fearlessly?
          </h3>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join 10,000+ teams who deploy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              <ToggleRight className="h-5 w-5" />
              Start Free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium flex items-center gap-2">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Open source • MIT License • Community driven
          </p>
        </div>

        {/* Resources */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {RESOURCES.map(({ icon: Icon, label, desc, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-teal-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                <Icon className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors">{label}</h4>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
