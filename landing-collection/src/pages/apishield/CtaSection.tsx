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
              Recursos de Seguridad Gratuitos
            </div>
            <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Comienza tu viaje de{' '}<span className="text-gradient">seguridad</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Descarga nuestra guía completa de seguridad API o ve APIShield en acción con una demo personalizada.
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
                Solicitar Demo
              </button>
            </div>
          </div>

          {/* Content panels */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {activeTab === 'whitepaper' && (
              <div className="grid md:grid-cols-2">
                {/* Whitepaper preview */}
                <div className="p-8 md:p-12 bg-linear-to-br from-emerald-950/40 to-transparent">
                  <div className="aspect-3/4 rounded-lg border border-slate-700 bg-slate-800/50 p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-6 h-6 text-emerald-400" />
                      <span className="text-xs text-slate-500">APIShield Security</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      La Guía Completa de Seguridad API en 2024
                    </h4>
                    <p className="text-sm text-slate-400 mb-4">
                      42 páginas de estrategias de seguridad accionables, escenarios de ataques reales y guías de implementación.
                    </p>
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Cobertura OWASP API Top 10
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Arquitectura Zero Trust
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Checklists de cumplimiento
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-2">Descargar whitepaper gratis</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Sin spam, solo conocimientos de seguridad de nuestro equipo de investigación.
                  </p>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Email de trabajo"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="Empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
                    >
                      <Download className="w-5 h-5" />
                      Descargar Whitepaper
                    </button>
                  </form>

                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Al descargar, aceptas nuestra política de privacidad
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'demo' && (
              <div className="grid md:grid-cols-2">
                {/* Demo info */}
                <div className="p-8 md:p-12 bg-linear-to-br from-emerald-950/40 to-transparent border-b md:border-b-0 md:border-r border-slate-800">
                  <h3 className="text-2xl font-bold text-white mb-4">Lo que verás</h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: 'Detección de amenazas en vivo', desc: 'Observa cómo APIShield bloquea ataques reales en tiempo real' },
                      { title: 'Recorrido del dashboard', desc: 'Ve cómo los equipos de seguridad monitorean sus APIs' },
                      { title: 'Configuración de integración', desc: 'Aprende cómo desplegar en menos de 5 minutos' },
                      { title: 'Q&A con experto en seguridad', desc: 'Obtén respuestas a tus preguntas específicas' },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
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
                    30 minutos • Gratis • Sin compromiso
                  </div>
                </div>

                {/* Demo request form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-2">Solicitar una demo</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Nuestros ingenieros de seguridad te mostrarán APIShield adaptado a tu caso de uso.
                  </p>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Email de trabajo"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="Nombre de la empresa"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-emerald-500"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecciona tu rol</option>
                      <option value="security">Ingeniero de Seguridad</option>
                      <option value="devops">DevOps / SRE</option>
                      <option value="developer">Desarrollador</option>
                      <option value="manager">Gerente de Ingeniería</option>
                      <option value="ciso">CISO / Líder de Seguridad</option>
                      <option value="other">Otro</option>
                    </select>
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
                    >
                      <Building2 className="w-5 h-5" />
                      Programar Demo
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 mb-4">Confianza de equipos de seguridad en</p>
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
