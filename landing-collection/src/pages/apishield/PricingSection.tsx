import { Shield, Building2, Phone, Mail, Calendar, ArrowRight, CheckCircle, Lock } from 'lucide-react'
import { useRef, useState } from 'react'

// Enterprise features
const ENTERPRISE_FEATURES = [
  'Unlimited API endpoints',
  'Custom rate limiting rules',
  'Real-time threat intelligence',
  'Dedicated security engineer',
  'Custom compliance reporting',
  'On-premise deployment option',
  '24/7 priority support',
  'SLA-backed uptime guarantee',
  'SSO & SCIM integration',
  'Audit log retention (unlimited)',
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [contactMethod, setContactMethod] = useState<'call' | 'email' | 'meeting'>('meeting')

  return (
    <section ref={sectionRef} id="pricing" className="relative py-32 md:py-40" aria-labelledby="pricing-title">
      <div className="bg-glow-secondary absolute inset-0" />
      <div className="absolute inset-0 security-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Enterprise Only
          </p>
          <h2 id="pricing-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Built for{' '}<span className="text-gradient">enterprise</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            API security at scale requires custom solutions. We work with your security team to design the right protection for your infrastructure.
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Features List */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Enterprise Plan</h3>
                  <p className="text-sm text-slate-500">Custom pricing based on volume</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {ENTERPRISE_FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-500 mb-3">Compliance ready:</p>
                <div className="flex flex-wrap gap-2">
                  {['SOC 2', 'HIPAA', 'PCI DSS', 'GDPR', 'ISO 27001'].map((cert) => (
                    <span key={cert} className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-400">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-slate-900/80 p-8">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold text-white">Talk to our security team</span>
              </div>

              {/* Contact method selector */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { id: 'call' as const, icon: Phone, label: 'Call' },
                  { id: 'email' as const, icon: Mail, label: 'Email' },
                  { id: 'meeting' as const, icon: Calendar, label: 'Meeting' },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setContactMethod(method.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                      contactMethod === method.id
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    <method.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{method.label}</span>
                  </button>
                ))}
              </div>

              {/* Contact form based on selected method */}
              <div className="space-y-4">
                {contactMethod === 'call' && (
                  <>
                    <p className="text-slate-400 text-sm">Schedule a call with our enterprise team</p>
                    <div className="flex gap-3">
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <button className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold">
                      Request Callback
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {contactMethod === 'email' && (
                  <>
                    <p className="text-slate-400 text-sm">Get a custom quote via email</p>
                    <input
                      type="email"
                      placeholder="Work email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <textarea
                      placeholder="Tell us about your API infrastructure..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                    />
                    <button className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold">
                      Get Custom Quote
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {contactMethod === 'meeting' && (
                  <>
                    <p className="text-slate-400 text-sm">Book a 30-min demo with our security experts</p>
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
                    <button className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold">
                      Schedule Demo
                      <Calendar className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Security note */}
              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <Lock className="w-3 h-3" />
                <span>Your information is encrypted and never shared</span>
              </div>
            </div>
          </div>

          {/* Enterprise testimonial */}
          <div className="mt-12 text-center">
            <blockquote className="text-lg text-slate-400 italic max-w-2xl mx-auto">
              "We evaluated 5 API security vendors. APIShield was the only one that could handle our scale and compliance requirements."
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">— VP of Engineering, Fortune 500 Tech Company</p>
          </div>
        </div>
      </div>
    </section>
  )
}
