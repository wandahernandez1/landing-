import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const orbRef1 = useRef<HTMLDivElement>(null)
  const orbRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('[data-hero-badge]', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
      .from('[data-hero-title] > *', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      }, '-=0.4')
      .from('[data-hero-description]', {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('[data-hero-cta] > *', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      }, '-=0.4')
      .from('[data-hero-stats] > *', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.3')
      .from('[data-hero-visual]', {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
      }, '-=0.5')

      // Orb floating animation
      gsap.to(orbRef1.current, {
        x: 30,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(orbRef2.current, {
        x: -20,
        y: 20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated Orbs */}
      <div ref={orbRef1} className="orb orb-1" aria-hidden="true" />
      <div ref={orbRef2} className="orb orb-2" aria-hidden="true" />
      
      {/* Grid Pattern */}
      <div className="grid-pattern absolute inset-0" aria-hidden="true" />
      
      {/* Glow */}
      <div className="bg-glow absolute inset-0" aria-hidden="true" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div 
            data-hero-badge
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Nuevo: GPT-5 Integration</span>
            <ArrowRight className="h-3.5 w-3.5 text-purple-400" />
          </div>

          {/* Title */}
          <h1 
            data-hero-title
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-8"
          >
            <span className="block">El futuro de la</span>
            <span className="text-gradient block">productividad</span>
          </h1>

          {/* Description */}
          <p 
            data-hero-description
            className="mx-auto max-w-2xl text-lg text-neutral-400 md:text-xl leading-relaxed mb-12"
          >
            Potencia tu equipo con inteligencia artificial de última generación. 
            Automatiza, analiza y escala como nunca antes.
          </p>

          {/* CTAs */}
          <div data-hero-cta className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              data-magnetic
              className="btn-primary flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Comenzar Gratis
                <ArrowRight className="h-5 w-5" />
              </span>
            </button>
            <button className="btn-secondary flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-medium">
              <Play className="h-5 w-5" />
              <span>Ver Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div 
            data-hero-stats
            className="mt-20 flex flex-wrap items-center justify-center gap-12 text-neutral-500"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">10k+</span>
              <span className="text-sm text-neutral-500">Empresas</span>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">99.9%</span>
              <span className="text-sm text-neutral-500">Uptime</span>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">4.9★</span>
              <span className="text-sm text-neutral-500">Rating</span>
            </div>
          </div>

          {/* Visual */}
          <div 
            data-hero-visual
            className="mt-20 relative"
          >
            <div className="shine rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent p-1">
              <div className="rounded-[22px] bg-neutral-950/80 backdrop-blur-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-neutral-500">nexusai-dashboard.tsx</span>
                </div>
                <div className="text-left font-mono text-sm text-neutral-400 space-y-2">
                  <p><span className="text-purple-400">const</span> <span className="text-white">insights</span> = <span className="text-purple-400">await</span> nexus.<span className="text-green-400">analyze</span>{'({'}</p>
                  <p className="pl-4"><span className="text-neutral-500">data:</span> <span className="text-amber-400">companyMetrics</span>,</p>
                  <p className="pl-4"><span className="text-neutral-500">model:</span> <span className="text-green-400">'gpt-5-turbo'</span>,</p>
                  <p className="pl-4"><span className="text-neutral-500">depth:</span> <span className="text-purple-300">'comprehensive'</span></p>
                  <p>{'});'}</p>
                  <p className="mt-4 text-green-400">// ✓ 847 insights generated in 2.3s</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -right-4 top-1/4 animate-float">
              <div className="rounded-2xl border border-purple-500/30 bg-neutral-900/90 backdrop-blur-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">AI Ready</p>
                    <p className="text-xs text-neutral-500">GPT-5 Enabled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
