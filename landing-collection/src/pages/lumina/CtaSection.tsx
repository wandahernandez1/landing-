import { ArrowRight, Sparkles, BookOpen, GraduationCap, Award, CheckCircle } from 'lucide-react'
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

      gsap.to('.sparkle-glow', {
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
      className="relative py-32 bg-gradient-to-br from-amber-500 to-amber-600 overflow-hidden" 
      aria-labelledby="cta-title"
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <BookOpen className="floating-icon absolute top-[15%] left-[10%] w-8 h-8 text-white/20" />
        <GraduationCap className="floating-icon absolute top-[25%] right-[15%] w-10 h-10 text-white/15" />
        <Award className="floating-icon absolute bottom-[30%] left-[15%] w-7 h-7 text-white/15" />
        <Sparkles className="floating-icon absolute bottom-[20%] right-[10%] w-8 h-8 text-white/20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="cta-icon relative w-20 h-20 mx-auto mb-8">
            <div className="sparkle-glow absolute inset-0 bg-white rounded-full opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl shadow-xl">
              <Sparkles className="h-10 w-10 text-amber-500" />
            </div>
          </div>

          <h2 id="cta-title" className="cta-title text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Comienza tu viaje de aprendizaje hoy
          </h2>

          <p className="cta-subtitle text-lg text-amber-100 mb-10 max-w-xl mx-auto">
            Únete a más de 1 millón de estudiantes que ya están transformando sus carreras.
          </p>

          <button className="cta-button inline-flex items-center gap-2 rounded-xl bg-white text-amber-600 px-8 py-4 text-lg font-semibold hover:bg-amber-50 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
            Comenzar Gratis
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="cta-note mt-6 text-sm text-amber-100">
            Sin tarjeta de crédito · Acceso inmediato
          </p>

          {/* Benefits */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Certificados reconocidos', 'Mentores expertos', 'Comunidad global', 'Soporte 24/7'].map((benefit) => (
              <div 
                key={benefit}
                className="benefit-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm"
              >
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-sm text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
