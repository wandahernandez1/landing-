import { ArrowRight, Shield } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 bg-[#010410]" aria-labelledby="cta-title">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-6" />

          <h2 id="cta-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
            Protege tu organización
            <br />
            <span className="text-gradient">hoy</span>
          </h2>

          <p className="text-lg text-navy-300 mb-10 max-w-xl mx-auto">
            Agenda una demo personalizada y descubre cómo Sentinel puede proteger tu infraestructura.
          </p>

          <button className="btn-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold">
            Solicitar Demo Gratis
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="mt-6 text-sm text-navy-500">
            Sin compromiso · Evaluación de seguridad incluida
          </p>
        </div>
      </div>
    </section>
  )
}
