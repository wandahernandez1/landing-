import { Building2, ExternalLink, FileText, Download, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

// Enterprise logos
const ENTERPRISE_LOGOS = [
  { name: 'Stripe', logo: '⬡' },
  { name: 'Shopify', logo: '🛍️' },
  { name: 'Twilio', logo: '📞' },
  { name: 'Datadog', logo: '🐕' },
  { name: 'MongoDB', logo: '🍃' },
  { name: 'Cloudflare', logo: '☁️' },
]

// Case studies
const CASE_STUDIES = [
  {
    company: 'FinTech Corp',
    industry: 'Financial Services',
    metric: '99.7% threat detection',
    quote: 'APIShield stopped 2.3M attacks in our first month. Our security team finally sleeps at night.',
    person: 'Sarah Chen, CISO',
  },
  {
    company: 'HealthTech Inc',
    industry: 'Healthcare',
    metric: 'HIPAA compliant in 2 weeks',
    quote: 'We achieved HIPAA compliance faster than we thought possible. The audit trail alone is worth it.',
    person: 'Dr. Michael Ross, CTO',
  },
]

// Whitepaper topics
const WHITEPAPERS = [
  { title: 'API Security Best Practices 2024', pages: 32, downloads: '12K+' },
  { title: 'Zero Trust for APIs', pages: 24, downloads: '8K+' },
  { title: 'OWASP API Top 10 Guide', pages: 18, downloads: '15K+' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40" aria-labelledby="testimonials-title">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 security-grid opacity-10" />
      <div className="container-custom relative z-10">
        
        {/* Enterprise Logos */}
        <div className="mb-32">
          <p className="text-center text-sm text-slate-500 mb-8">Protecting APIs for industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {ENTERPRISE_LOGOS.map((company) => (
              <div 
                key={company.name}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="text-slate-400 font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
              Success Stories
            </p>
            <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              Enterprise{' '}<span className="text-gradient">results</span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {CASE_STUDIES.map((study) => (
              <div 
                key={study.company}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-500">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{study.company}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-400">{study.metric}</p>
                  </div>
                </div>

                <blockquote className="text-slate-300 mb-6 italic">
                  "{study.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{study.person}</span>
                  <a href="#" className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300">
                    Read case study
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Whitepaper CTA */}
        <div>
          <div className="max-w-4xl mx-auto rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-slate-900/80 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-emerald-400 font-medium">Free Resources</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Security whitepapers for API teams
                </h3>
                <p className="text-slate-400 mb-6">
                  Deep-dive technical guides written by our security research team. No fluff, just actionable security advice.
                </p>

                {!showEmailForm ? (
                  <button
                    onClick={() => setShowEmailForm(true)}
                    className="btn-primary flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
                  >
                    <Download className="w-5 h-5" />
                    Get Free Whitepapers
                  </button>
                ) : (
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold"
                    >
                      Download All
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>

              {/* Whitepaper list */}
              <div className="p-8 md:p-12 bg-slate-900/50 border-t md:border-t-0 md:border-l border-slate-800">
                <p className="text-sm text-slate-500 mb-4">Available guides:</p>
                <div className="space-y-4">
                  {WHITEPAPERS.map((paper) => (
                    <div 
                      key={paper.title}
                      className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{paper.title}</p>
                        <p className="text-xs text-slate-500">{paper.pages} pages • {paper.downloads} downloads</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '10B+', label: 'Requests protected/day' },
            { value: '500+', label: 'Enterprise clients' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '<1ms', label: 'Added latency' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
