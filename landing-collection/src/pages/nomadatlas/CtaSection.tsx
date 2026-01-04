import { ArrowRight, Globe } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-section">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <div className="icon-box mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl">
            <Globe className="h-10 w-10 text-teal-600" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl">
            El mundo te{' '}
            <span className="text-gradient">espera</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sand-800/70 md:text-xl">
            Únete a la comunidad de nómadas digitales más grande del mundo. 
            Tu próxima aventura comienza aquí.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 font-medium"
            >
              Comenzar Aventura
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="btn-secondary rounded-xl px-8 py-4 font-medium"
            >
              Ver Destinos
            </a>
          </div>

          <p className="mt-6 text-sm text-sand-800/50">
            Gratis para empezar • Sin tarjeta requerida
          </p>
        </div>
      </div>
    </section>
  )
}
