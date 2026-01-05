import { Shield, FileText, ArrowRight, Play, Clock, Building2, Download } from 'lucide-react'
import { useRef, useState } from 'react'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<'whitepaper' | 'demo'>('whitepaper')
  const [formData, setFormData] = useState({ email: '', company: '', role: '' })

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden" aria-labelledby="cta-title">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 security-grid opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Free Security Resources
            </div>
            <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Start your security{' '}<span className="text-gradient">journey</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Download our comprehensive API security guide or see APIShield in action with a personalized demo.
            </p>
          </header>

          {/* Tab selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveTab('whitepaper')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'whitepaper'
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4" />
                Whitepaper
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'demo'
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-4 h-4" />
                Request Demo
              </button>
            </div>
          </div>

          {/* Content panels */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {activeTab === 'whitepaper' && (
              <div className="grid md:grid-cols-2">
                {/* Whitepaper preview */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-950/40 to-transparent">
                  <div className="aspect-[3/4] rounded-lg border border-slate-700 bg-slate-800/50 p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-6 h-6 text-emerald-400" />
                      <span className="text-xs text-slate-500">APIShield Security</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      The Complete Guide to API Security in 2024
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                      42 pages of actionable security strategies, real-world attack scenarios, and implementation guides.
                    </p>
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        OWASP API Top 10 coverage
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Zero Trust architecture
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Compliance checklists
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-2">Download free whitepaper</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    No spam, just security insights from our research team.
                  </p>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Work email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
                    >
                      <Download className="w-5 h-5" />
                      Download Whitepaper
                    </button>
                  </form>

                  <p className="text-xs text-slate-500 mt-4 text-center">
                    By downloading, you agree to our privacy policy
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'demo' && (
              <div className="grid md:grid-cols-2">
                {/* Demo info */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-950/40 to-transparent border-b md:border-b-0 md:border-r border-slate-800">
                  <h3 className="text-2xl font-bold text-white mb-4">What you'll see</h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: 'Live threat detection', desc: 'Watch APIShield block real attacks in real-time' },
                      { title: 'Dashboard walkthrough', desc: 'See how security teams monitor their APIs' },
                      { title: 'Integration setup', desc: 'Learn how to deploy in under 5 minutes' },
                      { title: 'Q&A with security expert', desc: 'Get answers to your specific questions' },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    30 minutes • Free • No commitment
                  </div>
                </div>

                {/* Demo request form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-2">Request a demo</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Our security engineers will show you APIShield tailored to your use case.
                  </p>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Work email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                      defaultValue=""
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="security">Security Engineer</option>
                      <option value="devops">DevOps / SRE</option>
                      <option value="developer">Developer</option>
                      <option value="manager">Engineering Manager</option>
                      <option value="ciso">CISO / Security Leader</option>
                      <option value="other">Other</option>
                    </select>
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
                    >
                      <Building2 className="w-5 h-5" />
                      Schedule Demo
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 mb-4">Trusted by security teams at</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Stripe', 'Shopify', 'Twilio', 'Datadog', 'MongoDB'].map((company) => (
                <span key={company} className="text-slate-600 font-medium">{company}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
