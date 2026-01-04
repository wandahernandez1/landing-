import { ArrowRight, Terminal } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-500/10">
            <Terminal className="h-10 w-10 text-violet-500" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Crea tu portfolio{' '}
            <span className="text-gradient">ahora</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            Únete a 10,000+ developers que ya usan DevCanvas 
            para mostrar su trabajo al mundo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 font-medium"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="btn-secondary rounded-xl px-8 py-4 font-medium"
            >
              Ver Templates
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            No requiere tarjeta de crédito • Setup en 2 minutos
          </p>
        </div>
      </div>
    </section>
  )
}
