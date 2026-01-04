import { ArrowRight, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 bg-[#050010]" aria-labelledby="cta-title">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-400" />
          </div>

          <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Comienza tu transformación
            <br />
            <span className="text-gradient">hoy mismo</span>
          </h2>

          <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
            Únete a más de 10,000 empresas que ya están potenciando su productividad con IA.
          </p>

          <button className="btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
            Comenzar Gratis
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="mt-6 text-sm text-neutral-500">
            Sin tarjeta de crédito · Prueba gratuita de 14 días
          </p>
        </div>
      </div>
    </section>
  )
}
