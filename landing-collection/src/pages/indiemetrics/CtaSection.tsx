import { ArrowRight, TrendingUp, Link2, Check, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'

const INTEGRATIONS = [
  { name: 'Stripe', connected: true, icon: '💳' },
  { name: 'Paddle', connected: false, icon: '🏓' },
  { name: 'Gumroad', connected: false, icon: '🛒' },
  { name: 'Lemon Squeezy', connected: false, icon: '🍋' },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [connecting, setConnecting] = useState<string | null>(null)
  const [connected, setConnected] = useState<string[]>(['Stripe'])

  const handleConnect = (name: string) => {
    setConnecting(name)
    setTimeout(() => {
      setConnecting(null)
      setConnected(prev => [...prev, name])
    }, 1500)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 indie-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-emerald-400/30 rounded-full animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/30">
              <TrendingUp className="h-10 w-10 text-neutral-900" />
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Connect in{' '}<span className="text-gradient">2 minutes</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Just connect your payment provider. We handle the rest.
          </p>
        </header>

        {/* Integration selector */}
        <div className="max-w-md mx-auto mb-16">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
            <div className="p-4 border-b border-neutral-800 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-white">Payment Providers</span>
            </div>
            <div className="divide-y divide-neutral-800">
              {INTEGRATIONS.map((integration) => {
                const isConnected = connected.includes(integration.name)
                const isConnecting = connecting === integration.name
                
                return (
                  <div key={integration.name} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{integration.icon}</span>
                      <span className="font-medium text-white">{integration.name}</span>
                    </div>
                    {isConnected ? (
                      <span className="flex items-center gap-2 text-sm text-emerald-400">
                        <Check className="w-4 h-4" />
                        Connected
                      </span>
                    ) : isConnecting ? (
                      <span className="flex items-center gap-2 text-sm text-neutral-400">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Connecting...
                      </span>
                    ) : (
                      <button 
                        onClick={() => handleConnect(integration.name)}
                        className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/30 transition-colors"
                      >
                        Connect
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '2 min', label: 'Setup time' },
              { value: 'Real-time', label: 'Data sync' },
              { value: 'Read-only', label: 'Access' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <p className="text-xl font-bold text-emerald-400">{stat.value}</p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              Start Free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#features" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium">
              See Features
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Free until $1K MRR • No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}
