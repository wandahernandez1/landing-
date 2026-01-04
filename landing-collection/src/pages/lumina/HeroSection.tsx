import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm text-amber-700 font-medium">+1M estudiantes activos</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-indigo-950 sm:text-6xl md:text-7xl mb-6">
            Aprende
            <br />
            <span className="text-gradient">sin límites</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-indigo-900/70 md:text-xl mb-10">
            Cursos adaptativos con IA, mentores expertos y certificaciones 
            reconocidas. Tu próximo nivel profesional te espera.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold">
              Explorar Cursos
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium">
              <Play className="h-5 w-5" />
              Ver Demo
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-indigo-900/60">
            <div className="text-center">
              <span className="text-2xl font-bold text-indigo-950">10,000+</span>
              <p className="text-sm">Cursos</p>
            </div>
            <div className="h-8 w-px bg-amber-200" />
            <div className="text-center">
              <span className="text-2xl font-bold text-indigo-950">500+</span>
              <p className="text-sm">Mentores</p>
            </div>
            <div className="h-8 w-px bg-amber-200" />
            <div className="text-center">
              <span className="text-2xl font-bold text-indigo-950">4.9★</span>
              <p className="text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
