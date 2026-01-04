import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            <span className="text-sm text-gold-400 font-medium">B2B Growth Agency</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            Escala tu
            <br />
            <span className="text-gradient">marketing B2B</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-navy-300 md:text-xl mb-10">
            Estrategias data-driven, growth hacking y RevOps para empresas 
            B2B que quieren resultados medibles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold">
              Agendar Estrategia
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium">
              Ver Casos de Éxito
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-navy-400">
            <div className="text-center">
              <span className="text-2xl font-bold text-white">$50M+</span>
              <p className="text-sm">Pipeline generado</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">200+</span>
              <p className="text-sm">Clientes B2B</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">10x</span>
              <p className="text-sm">ROI promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
