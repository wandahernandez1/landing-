import { ArrowRight, Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-amber-500 to-amber-600" aria-labelledby="cta-title">
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <Sparkles className="h-12 w-12 text-amber-100 mx-auto mb-6" />

          <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Comienza tu viaje de aprendizaje hoy
          </h2>

          <p className="text-lg text-amber-100 mb-10 max-w-xl mx-auto">
            Únete a más de 1 millón de estudiantes que ya están transformando sus carreras.
          </p>

          <button className="inline-flex items-center gap-2 rounded-xl bg-white text-amber-600 px-8 py-4 text-lg font-semibold hover:bg-amber-50 transition-colors">
            Comenzar Gratis
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="mt-6 text-sm text-amber-100">
            Sin tarjeta de crédito · Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  )
}
