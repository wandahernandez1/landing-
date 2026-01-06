import { ArrowRight, Rocket, Github, Twitter, MessageCircle, Star } from 'lucide-react'
import { useRef, useState } from 'react'

// Info del fundador
const FOUNDER = {
  name: 'Marc',
  handle: '@marc_microsaas',
  avatar: '👨‍💻',
  bio: 'Indie maker. Construí 5 SaaS. Ahora ayudo a otros a lanzar más rápido.',
}

// Enlaces rápidos
const RESOURCES = [
  { label: 'Ver en GitHub', icon: Github, href: '#' },
  { label: 'Seguir en Twitter', icon: Twitter, href: '#' },
  { label: 'Unirse a Discord', icon: MessageCircle, href: '#' },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden" aria-labelledby="cta-title">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 maker-grid opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main CTA card */}
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              
              {/* Left - Message from founder */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-3xl">
                    {FOUNDER.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{FOUNDER.name}</p>
                    <p className="text-slate-500 text-sm">{FOUNDER.handle}</p>
                  </div>
                </div>

                <blockquote className="text-lg text-slate-300 mb-6 leading-relaxed">
                  "Perdí meses construyendo auth, pagos y landing pages desde cero. 
                  Ahora lanzo en días. MicroSaaS Starter es todo lo que desearía haber tenido cuando empecé."
                </blockquote>

                <p className="text-slate-500 text-sm mb-6">{FOUNDER.bio}</p>

                {/* Social links */}
                <div className="flex flex-wrap gap-3">
                  {RESOURCES.map((resource) => (
                    <a
                      key={resource.label}
                      href={resource.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                    >
                      <resource.icon className="w-4 h-4" />
                      {resource.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right - Action */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                    <Star className="w-4 h-4 fill-orange-400" />
                    <span>500+ makers confían en nosotros</span>
                  </div>

                  <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
                    ¿Listo para{' '}<span className="text-gradient">lanzar más rápido?</span>
                  </h2>
                  
                  <p className="text-slate-400 mb-8">
                    Obtén acceso instantáneo al código completo y empieza a construir tu SaaS hoy.
                  </p>

                  {/* Main CTA */}
                  <a 
                    href="#pricing"
                    className="btn-primary w-full flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold mb-4 group"
                  >
                    <Rocket className="w-5 h-5" />
                    Comenzar por $99
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-sm text-slate-500">
                    Garantía de devolución de 30 días
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              ¿Aún no estás listo? Recibe tips gratuitos de SaaS
            </h3>
            <p className="text-slate-500 mb-6">
              Consejos semanales sobre cómo construir y hacer crecer tu SaaS. Sin spam.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="btn-secondary rounded-xl px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Suscribirse Gratis
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-400">
                <span className="text-xl">🎉</span>
                <span>¡Estás dentro! Revisa tu bandeja de entrada.</span>
              </div>
            )}

            <p className="text-xs text-slate-600 mt-4">
              Únete a 2,000+ indie makers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
