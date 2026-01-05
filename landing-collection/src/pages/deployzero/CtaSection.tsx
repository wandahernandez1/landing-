import { ArrowRight, Copy, Check, Terminal, Rocket, ExternalLink } from 'lucide-react'
import { useRef, useState } from 'react'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  const command = 'npx deployzero init && npx deployzero deploy'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="cta-title"
    >
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 terminal-grid opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl">
          {/* Terminal Card */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gray-950 overflow-hidden shadow-2xl shadow-cyan-500/10">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-500 font-mono">Terminal — deployzero</span>
              </div>
              <Terminal className="w-4 h-4 text-gray-600" />
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8">
              <p className="text-gray-500 text-sm mb-4 font-mono"># Run your first deploy in seconds</p>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/80 border border-gray-800 group">
                <span className="text-cyan-400 font-mono">$</span>
                <code className="flex-1 text-white font-mono text-sm md:text-base overflow-x-auto">
                  {command}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Output preview */}
              <div className="mt-4 space-y-2 text-sm font-mono">
                <p className="text-gray-500">
                  <span className="text-green-400">✓</span> Detected Next.js project
                </p>
                <p className="text-gray-500">
                  <span className="text-green-400">✓</span> Building...
                </p>
                <p className="text-gray-500">
                  <span className="text-green-400">✓</span> Deployed to <span className="text-cyan-400">your-app.deployzero.dev</span>
                </p>
                <p className="text-gray-500 animate-pulse">
                  <span className="text-cyan-400">→</span> Ready in 6.2s
                </p>
              </div>
            </div>

            {/* CTA footer */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-cyan-950/30 to-transparent border-t border-cyan-500/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Ready to ship faster?
                  </h2>
                  <p className="text-gray-400">
                    No credit card • Free forever tier • Setup in 2 min
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="btn-primary flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                  >
                    <Rocket className="w-5 h-5" />
                    Start Free
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="btn-secondary flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Docs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Trusted by developers at</p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              {['Linear', 'Stripe', 'Vercel', 'Notion', 'Figma'].map((company) => (
                <span key={company} className="text-gray-400 font-medium">{company}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
