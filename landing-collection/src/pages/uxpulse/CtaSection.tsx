import { ArrowRight, Eye, MousePointer2, Clock, Play } from 'lucide-react'
import { useRef, useState } from 'react'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
    }, 1500)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="cta-title"
    >
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 data-grid opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-sm mb-6">
                <Clock className="w-4 h-4" />
                2-minute setup
              </div>

              <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                See your first heatmap{' '}
                <span className="text-gradient">today</span>
              </h2>
              
              <p className="text-lg text-slate-400 mb-8">
                Install our lightweight script, and start understanding your users in minutes. No engineering required.
              </p>

              {/* Email signup form */}
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      'Starting...'
                    ) : (
                      <>
                        Start Free
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-rose-400" />
                  5K sessions/mo free
                </span>
                <span className="flex items-center gap-2">
                  <MousePointer2 className="w-4 h-4 text-rose-400" />
                  No credit card
                </span>
              </div>
            </div>

            {/* Demo preview side */}
            <div className="relative">
              <div className="rounded-2xl border border-rose-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-rose-500/10">
                {/* Preview header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="text-sm text-slate-400">Your heatmap</span>
                  </div>
                  <span className="text-xs text-slate-500">LIVE</span>
                </div>

                {/* Heatmap preview */}
                <div className="aspect-video bg-slate-950 relative p-6">
                  {/* Simulated heatmap dots */}
                  <div className="absolute inset-0">
                    {[
                      { top: '20%', left: '30%', intensity: 'high' },
                      { top: '35%', left: '50%', intensity: 'medium' },
                      { top: '45%', left: '45%', intensity: 'high' },
                      { top: '60%', left: '60%', intensity: 'low' },
                      { top: '70%', left: '35%', intensity: 'medium' },
                    ].map((dot, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full blur-xl animate-pulse ${
                          dot.intensity === 'high' ? 'w-16 h-16 bg-rose-500/60' :
                          dot.intensity === 'medium' ? 'w-12 h-12 bg-orange-500/50' :
                          'w-8 h-8 bg-yellow-500/40'
                        }`}
                        style={{ top: dot.top, left: dot.left, animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>

                  {/* Overlay content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="h-6 w-32 rounded bg-slate-800/50" />
                    <div className="space-y-2">
                      <div className="h-4 w-48 rounded bg-slate-800/50" />
                      <div className="h-4 w-36 rounded bg-slate-800/50" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-10 w-24 rounded-lg bg-rose-500/30" />
                      <div className="h-10 w-20 rounded-lg bg-slate-800/50" />
                    </div>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 divide-x divide-slate-700/50 border-t border-slate-700/50">
                  {[
                    { label: 'Clicks', value: '2,847' },
                    { label: 'Scroll depth', value: '68%' },
                    { label: 'Attention', value: '4.2s' },
                  ].map((stat) => (
                    <div key={stat.label} className="py-3 text-center">
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Watch demo link */}
              <a 
                href="#"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300 hover:text-white hover:border-rose-500/50 transition-all"
              >
                <Play className="w-4 h-4 text-rose-400" />
                Watch demo (2 min)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
