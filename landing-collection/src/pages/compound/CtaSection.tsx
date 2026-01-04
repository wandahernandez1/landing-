import { ArrowRight, TrendingUp, BarChart3, PieChart, DollarSign, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      tl.from('.cta-icon', {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
      })
        .from('.cta-title', { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.cta-subtitle', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.cta-button', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.cta-note', { opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.benefit-badge', { scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.4 }, '-=0.2')

      gsap.to('.icon-glow', {
        scale: 1.3,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power1.out',
      })

      gsap.to('.floating-icon', {
        y: -10,
        duration: 2.5,
        stagger: { each: 0.4, yoyo: true, repeat: -1 },
        ease: 'power1.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-navy-950 overflow-hidden" 
      aria-labelledby="cta-title"
    >
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 wealth-grid opacity-10" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <BarChart3 className="floating-icon absolute top-[15%] left-[10%] w-8 h-8 text-gold-500/15" />
        <PieChart className="floating-icon absolute top-[25%] right-[15%] w-10 h-10 text-gold-500/10" />
        <DollarSign className="floating-icon absolute bottom-[30%] left-[15%] w-7 h-7 text-gold-500/10" />
        <TrendingUp className="floating-icon absolute bottom-[20%] right-[10%] w-8 h-8 text-gold-500/15" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="cta-icon relative w-20 h-20 mx-auto mb-8">
            <div className="icon-glow absolute inset-0 bg-gold-500 rounded-full opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl shadow-xl shadow-gold-500/30">
              <TrendingUp className="h-10 w-10 text-navy-900" />
            </div>
          </div>

          <h2 id="cta-title" className="cta-title text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Agenda tu estrategia
            <br />
            <span className="text-gradient">de crecimiento</span>
          </h2>

          <p className="cta-subtitle text-lg text-navy-300 mb-10 max-w-xl mx-auto">
            30 minutos para analizar tu situación actual y diseñar un plan de acción personalizado.
          </p>

          <button className="cta-button btn-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold">
            <TrendingUp className="h-5 w-5" />
            Agendar Llamada Gratis
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="cta-note mt-6 text-sm text-navy-500">
            Sin compromiso · Análisis gratuito incluido
          </p>

          {/* Benefits */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Estrategia personalizada', 'Análisis competitivo', 'Plan de acción', 'ROI proyectado'].map((benefit) => (
              <div 
                key={benefit}
                className="benefit-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800/50 border border-gold-500/20"
              >
                <CheckCircle className="w-4 h-4 text-gold-500" />
                <span className="text-sm text-navy-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
