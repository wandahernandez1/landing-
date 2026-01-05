import { ArrowRight, Cloud, TrendingDown, Link2, CheckCircle, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Integration providers
const INTEGRATIONS = [
  { name: 'AWS', status: 'connected', accounts: 12 },
  { name: 'GCP', status: 'connected', accounts: 5 },
  { name: 'Azure', status: 'pending', accounts: 0 },
  { name: 'Kubernetes', status: 'available', accounts: 0 },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [connecting, setConnecting] = useState<string | null>(null)

  const handleConnect = (provider: string) => {
    setConnecting(provider)
    setTimeout(() => setConnecting(null), 2000)
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 cloud-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* Integration setup */}
        <div className="max-w-3xl mx-auto mb-20">
          <header className="text-center mb-10">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-xl shadow-blue-500/30">
                <Cloud className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Connect in{' '}<span className="text-gradient">minutes</span>
            </h2>
            <p className="text-lg text-slate-400">
              Read-only access to billing data. No code changes required.
            </p>
          </header>

          {/* Integration cards */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Link2 className="w-4 h-4 text-blue-400" />
                Cloud Integrations
              </h3>
              <span className="text-sm text-slate-500">2 of 4 connected</span>
            </div>
            <div className="divide-y divide-slate-800">
              {INTEGRATIONS.map((integration) => (
                <div key={integration.name} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center font-semibold',
                      integration.status === 'connected' ? 'bg-blue-500/20 text-blue-400' :
                      integration.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-slate-800 text-slate-400'
                    )}>
                      {integration.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white">{integration.name}</p>
                      <p className="text-sm text-slate-500">
                        {integration.status === 'connected' 
                          ? `${integration.accounts} accounts connected`
                          : integration.status === 'pending'
                            ? 'Connection pending...'
                            : 'Ready to connect'
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    {integration.status === 'connected' ? (
                      <span className="flex items-center gap-2 text-sm text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        Connected
                      </span>
                    ) : connecting === integration.name ? (
                      <span className="flex items-center gap-2 text-sm text-blue-400">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Connecting...
                      </span>
                    ) : (
                      <button 
                        onClick={() => handleConnect(integration.name)}
                        className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/30 transition-colors"
                      >
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setup time */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { value: '2 min', label: 'Setup time' },
              { value: 'Read-only', label: 'Access level' },
              { value: '$0', label: 'Cost to connect' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="mx-auto max-w-xl text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              <TrendingDown className="h-5 w-5" />
              Start Saving
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium">
              Book Demo
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            14-day free trial • No credit card required
          </p>

          {/* Cloud logos */}
          <div className="mt-12 flex justify-center gap-8">
            {['AWS', 'GCP', 'Azure', 'K8s'].map((cloud) => (
              <div key={cloud} className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-500 font-medium">
                {cloud}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
