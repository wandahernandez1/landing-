import { ArrowRight, Heart } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 bg-emerald-600" aria-labelledby="cta-title">
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <Heart className="h-12 w-12 text-emerald-200 mx-auto mb-6" />

          <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Comienza tu transformación hoy
          </h2>

          <p className="text-lg text-emerald-100 mb-10 max-w-xl mx-auto">
            Únete a más de 2 millones de personas que ya están viviendo su mejor vida.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-600 px-8 py-4 text-lg font-semibold hover:bg-emerald-50 transition-colors">
            Descargar Gratis
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="mt-6 text-sm text-emerald-200">
            Sin compromiso · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  )
}
