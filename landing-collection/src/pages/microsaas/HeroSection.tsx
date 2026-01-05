import { ArrowRight, Rocket, ExternalLink, Star, CheckCircle } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Real products built with MicroSaaS (simulated)
const BUILT_PRODUCTS = [
  { 
    name: 'Mailflow', 
    description: 'Email automation for creators', 
    mrr: '$4.2K', 
    maker: 'Sarah Chen',
    gradient: 'from-blue-500 to-cyan-500',
    url: '#'
  },
  { 
    name: 'Waitlisty', 
    description: 'Launch waitlists in minutes', 
    mrr: '$2.8K', 
    maker: 'Alex Rivera',
    gradient: 'from-purple-500 to-pink-500',
    url: '#'
  },
  { 
    name: 'FeedbackLoop', 
    description: 'Collect user feedback easily', 
    mrr: '$6.1K', 
    maker: 'Jordan Kim',
    gradient: 'from-orange-500 to-red-500',
    url: '#'
  },
  { 
    name: 'APIStatus', 
    description: 'Beautiful status pages', 
    mrr: '$3.5K', 
    maker: 'Maria Lopez',
    gradient: 'from-green-500 to-emerald-500',
    url: '#'
  },
  { 
    name: 'SocialQ', 
    description: 'Queue social posts', 
    mrr: '$5.7K', 
    maker: 'Dev Patel',
    gradient: 'from-indigo-500 to-violet-500',
    url: '#'
  },
]

// What's included in the boilerplate
const INCLUDED = [
  { label: 'Auth', desc: 'Email, OAuth, Magic Links', done: true },
  { label: 'Billing', desc: 'Stripe integration', done: true },
  { label: 'Dashboard', desc: 'Admin & user views', done: true },
  { label: 'Landing Page', desc: 'Conversion optimized', done: true },
  { label: 'Email', desc: 'Transactional emails', done: true },
  { label: 'Deploy', desc: 'One-click deploy', done: true },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [launchCount, setLaunchCount] = useState(847)
  const [activeProduct, setActiveProduct] = useState(0)
  const [totalMRR, setTotalMRR] = useState(2.4)

  useHeroAnimation(sectionRef)

  // Animate launch counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLaunchCount(prev => prev + 1)
      setTotalMRR(prev => +(prev + 0.1).toFixed(1))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Rotate featured product
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct(prev => (prev + 1) % BUILT_PRODUCTS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 maker-grid opacity-30" />
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2"
            >
              <Rocket className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-orange-300">For Indie Makers</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block text-gradient tabular-nums">{launchCount}</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2">products launched</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-slate-400 md:text-xl mb-8"
            >
              Stop building the same boilerplate. Start with auth, billing, dashboard, 
              and landing page ready. Ship your SaaS in days, not months.
            </p>

            {/* What's included preview */}
            <div 
              data-hero-cta
              className="mb-8 p-4 bg-slate-900/50 border border-orange-500/20 rounded-xl"
            >
              <p className="text-sm text-slate-400 mb-3">Everything included:</p>
              <div className="grid grid-cols-3 gap-2">
                {INCLUDED.map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    <span className="text-xs text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              data-hero-cta
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#pricing"
                className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center"
              >
                Get lifetime access
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center"
              >
                <ExternalLink className="h-5 w-5" />
                See live demo
              </a>
            </div>

            {/* Stats */}
            <div 
              data-hero-stats
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-orange-400">${totalMRR}M+</span>
                <span className="text-sm text-slate-500">Combined MRR</span>
              </div>
              <div className="h-8 w-px bg-slate-700" />
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-orange-400">7 days</span>
                <span className="text-sm text-slate-500">Avg launch time</span>
              </div>
              <div className="h-8 w-px bg-slate-700" />
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-orange-400">$199</span>
                <span className="text-sm text-slate-500">One-time</span>
              </div>
            </div>
          </div>

          {/* Right: Products Gallery */}
          <div 
            data-hero-visual
            className="relative"
          >
            {/* Featured Product Card */}
            <div className="relative rounded-2xl border border-orange-500/20 bg-slate-900/90 overflow-hidden shadow-2xl shadow-orange-500/10">
              <div className="px-4 py-3 bg-slate-800/80 border-b border-orange-500/10 flex items-center justify-between">
                <span className="text-sm text-slate-300">Built with MicroSaaS</span>
                <span className="text-xs text-orange-400">🔥 Trending</span>
              </div>

              {/* Main Featured Product */}
              <div className="p-6">
                {BUILT_PRODUCTS.map((product, i) => (
                  <div 
                    key={product.name}
                    className={`transition-all duration-500 ${
                      i === activeProduct ? 'opacity-100' : 'hidden opacity-0'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4`}>
                      <span className="text-2xl font-bold text-white">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-green-400">{product.mrr}</span>
                        <span className="text-slate-500 text-sm"> MRR</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-300">by {product.maker}</p>
                        <div className="flex items-center gap-0.5 justify-end mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Product Navigation Dots */}
              <div className="flex items-center justify-center gap-2 pb-4">
                {BUILT_PRODUCTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProduct(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeProduct ? 'bg-orange-500 w-6' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Product Grid Preview */}
            <div className="mt-4 grid grid-cols-5 gap-2">
              {BUILT_PRODUCTS.map((product, i) => (
                <button
                  key={product.name}
                  onClick={() => setActiveProduct(i)}
                  className={`aspect-square rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center transition-all ${
                    i === activeProduct ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-slate-900 scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="text-lg font-bold text-white">
                    {product.name.charAt(0)}
                  </span>
                </button>
              ))}
            </div>

            {/* Twitter-style testimonial */}
            <div className="mt-4 p-4 bg-slate-900/80 border border-orange-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">Marc Köhlbrugge</span>
                    <span className="text-slate-500 text-xs">@marckohlbrugge</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    "Launched my SaaS in 5 days using MicroSaaS Builder. Would've taken 3 months otherwise. 🚀"
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
