import { Twitter, Heart, MessageCircle, Repeat2, ExternalLink, Verified } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Testimonios estilo Twitter (tweets)
const TWEETS = [
  {
    author: 'Marc Lou',
    handle: '@marc_louvion',
    avatar: '🚀',
    verified: true,
    content: 'Acabo de lanzar mi SaaS con MicroSaaS Starter. De idea a $1k MRR en 12 días. El boilerplate me ahorró literalmente 100+ horas.',
    likes: 847,
    retweets: 124,
    date: '2h',
    product: 'ShipFast',
    mrr: '$3.2K',
  },
  {
    author: 'Pieter Levels',
    handle: '@levelsio',
    verified: true,
    avatar: '✈️',
    content: 'Construí otro side project este fin de semana. Usé @microsaas starter porque soy muy flojo para configurar auth y pagos de nuevo 😅 Muy recomendado.',
    likes: 2341,
    retweets: 312,
    date: '5h',
  },
  {
    author: 'Sarah Chen',
    handle: '@sarahc_dev',
    verified: false,
    avatar: '💻',
    content: 'Semana 1: "Lo construiré desde cero"\nSemana 4: "Por qué el webhook de Stripe no funciona"\nSemana 5: Compré MicroSaaS Starter\nSemana 5.5: Lancé 🎉',
    likes: 532,
    retweets: 89,
    date: '1d',
    product: 'FormBuilder.io',
    mrr: '$890',
  },
  {
    author: 'Alex Johnson',
    handle: '@alexj_maker',
    verified: false,
    avatar: '⚡',
    content: 'Solo la integración con Stripe vale el precio. Suscripciones, facturación por uso, facturas - todo funcionando de inmediato.',
    likes: 234,
    retweets: 45,
    date: '2d',
    product: 'APIMetrics',
    mrr: '$1.5K',
  },
  {
    author: 'Emma Davis',
    handle: '@emmabuilds',
    verified: true,
    avatar: '🎨',
    content: 'Tercer SaaS construido con MicroSaaS Starter. A estas alturas podría construir auth desde cero pero... ¿para qué? El tiempo es dinero.',
    likes: 678,
    retweets: 98,
    date: '3d',
  },
  {
    author: 'Ryan Peters',
    handle: '@ryanp_indie',
    verified: false,
    avatar: '🛠️',
    content: '¡Lancé mi primer producto de pago! MicroSaaS Starter lo hizo posible para un dev backend como yo construir un SaaS completo. Eternamente agradecido 🙏',
    likes: 412,
    retweets: 67,
    date: '4d',
    product: 'LogPulse',
    mrr: '$420',
  },
]

// Productos lanzados con el starter
const SHIPPED_PRODUCTS = [
  { name: 'ShipFast', mrr: '$3.2K', category: 'Herramientas Dev' },
  { name: 'FormBuilder', mrr: '$890', category: 'Formularios' },
  { name: 'APIMetrics', mrr: '$1.5K', category: 'Analytics' },
  { name: 'LogPulse', mrr: '$420', category: 'Monitoreo' },
  { name: 'EmailBot', mrr: '$2.1K', category: 'Email' },
  { name: 'ChatWidget', mrr: '$780', category: 'Soporte' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleTweets, setVisibleTweets] = useState(TWEETS.slice(0, 4))
  
  // Rotate tweets periodically for fresh feel
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTweets(() => {
        const shuffled = [...TWEETS].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, 4)
      })
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40" aria-labelledby="testimonials-title">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 maker-grid opacity-10" />
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <Twitter className="w-4 h-4" />
            El Twitter de Makers nos ama
          </div>
          <h2 id="testimonials-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Únete a{' '}<span className="text-gradient">500+ productos</span>{' '}lanzados
          </h2>
        </header>

        {/* Twitter Wall */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16">
          {visibleTweets.map((tweet, idx) => (
            <article 
              key={`${tweet.handle}-${idx}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 hover:border-slate-700 transition-all"
            >
              {/* Tweet header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-xl">
                    {tweet.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-white">{tweet.author}</span>
                      {tweet.verified && (
                        <Verified className="w-4 h-4 text-blue-400 fill-blue-400" />
                      )}
                    </div>
                    <span className="text-slate-500 text-sm">{tweet.handle}</span>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-slate-600" />
              </div>

              {/* Tweet content */}
              <p className="text-slate-300 mb-4 leading-relaxed whitespace-pre-line">
                {tweet.content}
              </p>

              {/* Product tag if exists */}
              {tweet.product && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 mb-4">
                  <span className="text-sm text-orange-400">{tweet.product}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-sm text-green-400">{tweet.mrr} MRR</span>
                </div>
              )}

              {/* Tweet actions */}
              <div className="flex items-center justify-between text-slate-500 text-sm">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{tweet.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-400 transition-colors">
                    <Repeat2 className="w-4 h-4" />
                    <span>{tweet.retweets}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
                <span>{tweet.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Shipped products showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">Productos lanzados con MicroSaaS Starter</h3>
            <p className="text-slate-500">Combinando $8.9K+ en ingresos mensuales</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SHIPPED_PRODUCTS.map((product) => (
              <div 
                key={product.name}
                className="flex flex-col items-center p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400/20 to-orange-600/20 flex items-center justify-center mb-2">
                  <span className="text-orange-400 font-bold">{product.name[0]}</span>
                </div>
                <span className="text-sm font-medium text-white mb-1">{product.name}</span>
                <span className="text-xs text-green-400">{product.mrr}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300">
              Ver todos los productos
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-slate-800">
          {[
            { value: '500+', label: 'Productos lanzados' },
            { value: '$2M+', label: 'MRR Combinado' },
            { value: '7 días', label: 'Tiempo promedio de lanzamiento' },
            { value: '4.9/5', label: 'Rating de makers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
