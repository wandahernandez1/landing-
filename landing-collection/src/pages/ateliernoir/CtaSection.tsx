import { ArrowRight, Gem } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <Gem className="mx-auto mb-10 h-12 w-12 text-gold-400" strokeWidth={1} />

          <h2 className="text-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">
            Elevate your style
          </h2>
          
          <p className="mx-auto mt-8 max-w-xl text-lg text-ivory-50/50 leading-relaxed">
            Únete a una comunidad selecta que aprecia la verdadera artesanía 
            y el lujo auténtico. Tu experiencia comienza aquí.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="#pricing"
              className="btn-primary flex items-center gap-3 rounded-none px-12 py-4 text-sm uppercase tracking-widest"
            >
              Membership
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="btn-secondary rounded-none px-12 py-4 text-sm uppercase tracking-widest"
            >
              Ver Colección
            </a>
          </div>

          <p className="mt-10 text-xs uppercase tracking-widest text-ivory-50/30">
            Membresía limitada • Acceso por invitación
          </p>
        </div>
      </div>
    </section>
  )
}
