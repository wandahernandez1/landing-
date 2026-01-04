import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 bg-[#020617]" aria-labelledby="cta-title">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Tu cuenta en
            <br />
            <span className="text-gradient">5 minutos</span>
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Sin papeleos. Sin comisiones ocultas. Sin esperas.
          </p>

          <button className="btn-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold">
            Abrir Cuenta Ahora
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="mt-6 text-sm text-slate-500">
            Depósitos protegidos hasta €100,000
          </p>
        </div>
      </div>
    </section>
  )
}
